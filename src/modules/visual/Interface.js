import { getPlayerName } from '../../utils';

const Interface = {
    name: 'Interface',
    category: 'Visual',
    description: 'Replaces the default in-game header with a customizable one.',
    enabled: true,
    defaultX: 2,
    defaultY: 7,
    element: null,
    gameHeader: null,
    gameHeaderParent: null,
    gameHeaderNextSibling: null,
    lastPlayerName: null,
    observer: null,

    settings: [
        { id: 'remove-header', name: 'Remove Game Header', type: 'boolean', value: true, description: 'For performance, move the header off-screen instead of just hiding it.' },
        { id: 'color-mode', name: 'Color Mode', type: 'select', options: ['Theme', 'Custom'], value: 'Theme' },
        { id: 'bg-color', name: 'Background Color', type: 'color', value: 'rgba(30, 33, 41, 0.85)', condition: s => s['color-mode'] === 'Custom' },
        { id: 'text-color', name: 'Text Color', type: 'color', value: '#EAEAEA', condition: s => s['color-mode'] === 'Custom' },
        { id: 'accent-color', name: 'Accent Color', type: 'color', value: '#5E72EB', condition: s => s['color-mode'] === 'Custom' },
        { id: 'font-size', name: 'Font Size', type: 'slider', value: 16, min: 10, max: 28, step: 1 },
        { id: 'padding-y', name: 'Padding (Y)', type: 'slider', value: 4, min: 0, max: 30, step: 1 },
        { id: 'padding-x', name: 'Padding (X)', type: 'slider', value: 6, min: 0, max: 30, step: 1 },
        { id: 'border-radius', name: 'Border Radius', type: 'slider', value: 10, min: 0, max: 20, step: 1 },
        { id: 'border-width', name: 'Border Width', type: 'slider', value: 1, min: 0, max: 5, step: 1 },
        { id: 'border-color', name: 'Border Color', type: 'color', value: 'rgba(255, 255, 255, 0.07)', condition: s => s['color-mode'] === 'Custom' },
        { id: 'show-logo', name: 'Show Logo', type: 'boolean', value: true },
        { id: 'logo-text', name: 'Logo Text', type: 'text', value: 'S', condition: (settings) => settings['show-logo'] },
        { id: 'show-name', name: 'Show Name', type: 'boolean', value: true },
        { id: 'show-gamemode', name: 'Show Gamemode', type: 'boolean', value: true },
        { id: 'show-lobby', name: 'Show Lobby', type: 'boolean', value: true },
    ],

    onEnable() {
        this.handleHeader();

        this.observer = new MutationObserver(() => this.handleHeader());
        this.observer.observe(document.body, { childList: true, subtree: true });

        this.createDisplay();
        this.applyStyles();
    },

    onDisable() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        this.restoreHeader();
        this.destroyDisplay();
    },

    onTick() {
        this.updateDisplay();
    },

    onSettingUpdate(settingId) {
        if (settingId === 'remove-header') {
            this.handleHeader();
        }
        this.applyStyles();
        this.updateDisplay(true);
    },

    handleHeader() {
        const header = document.querySelector('.InGameHeaderContainer');
        if (header) {
            this.gameHeader = header;
            const shouldRemove = this.settings.find(s => s.id === 'remove-header').value;
            if (shouldRemove) {
                header.style.position = 'absolute';
                header.style.left = '-9999px';
                header.style.top = '-9999px';
                header.style.opacity = '0';
            } else {
                header.style.display = 'none';
            }
        }
    },

    restoreHeader() {
        if (this.gameHeader) {
            this.gameHeader.style.position = '';
            this.gameHeader.style.left = '';
            this.gameHeader.style.top = '';
            this.gameHeader.style.opacity = '';
            this.gameHeader.style.display = '';
        }
    },

    createDisplay() {
        this.element = document.createElement('div');
        this.element.className = 'serenity-interface-display';
        this.element.style.top = '20px';
        this.element.style.left = '20px';
        document.body.appendChild(this.element);
    },

    destroyDisplay() {
        if (this.element) {
            document.body.removeChild(this.element);
            this.element = null;
        }
    },

    updateDisplay(force = false) {
        if (!this.element) return;

        const clickGui = window.Serenity.instance.get('ClickGUI');
        if (!clickGui || !clickGui.isEditingHUD) {
            const mod = window.Serenity.instance.get(this.name);
            if (mod.x !== null) this.element.style.left = `${mod.x}px`;
            if (mod.y !== null) this.element.style.top = `${mod.y}px`;
        }

        const gamemodeEl = document.querySelector('.InGameHeaderGameName');
        const lobbyEl = document.querySelector('.InGameHeaderLobbyName');

        const gamemode = gamemodeEl ? gamemodeEl.textContent : 'Unknown';
        const lobby = lobbyEl ? `(#${lobbyEl.textContent})` : '';
        const playerName = getPlayerName();
        const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});

        if (playerName && this.lastPlayerName !== playerName) {
            this.lastPlayerName = playerName;
            force = true;
        }
        
        const content = `
            ${settings['show-logo'] ? `<div class="serenity-interface-logo">${settings['logo-text']}</div>` : ''}
            <div class="serenity-interface-info">
                ${settings['show-name'] && playerName ? `<div class="serenity-interface-name">${playerName}</div>` : ''}
                ${settings['show-gamemode'] ? `<div class="serenity-interface-gamemode">${gamemode}</div>` : ''}
                ${settings['show-lobby'] ? `<div class="serenity-interface-lobby">${lobby}</div>` : ''}
            </div>
        `;

        const newHash = JSON.stringify(content);
        if (this.lastHash !== newHash || force) {
            this.element.innerHTML = content;
            this.applyStyles();
            this.lastHash = newHash;
        }
    },

    applyStyles() {
        if (!this.element) return;
        const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});

        if (settings['color-mode'] === 'Theme') {
            this.element.style.setProperty('--accent-color', 'var(--primary)');
            this.element.style.backgroundColor = 'var(--panel)';
            this.element.style.color = 'var(--text)';
            this.element.style.border = `${settings['border-width']}px solid var(--border)`;
        } else {
            this.element.style.setProperty('--accent-color', settings['accent-color']);
            this.element.style.backgroundColor = settings['bg-color'];
            this.element.style.color = settings['text-color'];
            this.element.style.border = `${settings['border-width']}px solid ${settings['border-color']}`;
        }
        
        this.element.style.fontSize = `${settings['font-size']}px`;
        this.element.style.padding = `${settings['padding-y']}px ${settings['padding-x']}px`;
        this.element.style.borderRadius = `${settings['border-radius']}px`;

        this.element.style.position = 'absolute';
        this.element.style.userSelect = 'none';
        this.element.style.pointerEvents = 'none';

        const clickGui = window.Serenity.instance.get('ClickGUI');
        if (!clickGui || !clickGui.isEditingHUD) {
            this.element.style.zIndex = 9997;
        }
    }
};

export default Interface; 