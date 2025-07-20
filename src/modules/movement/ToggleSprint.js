const ToggleSprint = {
    name: "ToggleSprint",
    category: "Movement",
    description: "Automatically sprints for you by simulating a Shift key press.",
    enabled: true,
    sprinting: false,
    sprintInterval: null,
    element: null,
    defaultX: "80%",
    defaultY: "80%",

    settings: [
        { id: "show-text", name: "Show Text", type: "boolean", value: true },
        { id: "color-mode", name: "Color Mode", type: 'select', options: ['Theme', 'Custom'], value: 'Theme', condition: s => s['show-text'] },
        { id: "hud-text", name: "HUD Text", type: "text", value: "[Sprinting (Toggled)]", condition: s => s['show-text'] },
        { id: 'bg-color', name: 'Background Color', type: 'color', value: 'rgba(30, 33, 41, 0.85)', condition: s => s['show-text'] && s['color-mode'] === 'Custom' },
        { id: 'text-color', name: 'Text Color', type: 'color', value: 'rgba(234, 234, 234, 0.8)', condition: s => s['show-text'] && s['color-mode'] === 'Custom' },
        { id: 'font-size', name: 'Font Size', type: 'slider', value: 16, min: 8, max: 24, step: 1, condition: s => s['show-text'] },
        { id: 'padding', name: 'Padding', type: 'slider', value: 8, min: 0, max: 20, step: 1, condition: s => s['show-text'] },
        { id: 'border-radius', name: 'Border Radius', type: 'slider', value: 10, min: 0, max: 20, step: 1, condition: s => s['show-text'] },
        { id: 'border-width', name: 'Border Width', type: 'slider', value: 1, min: 0, max: 5, step: 1, condition: s => s['show-text'] },
        { id: 'border-color', name: 'Border Color', type: 'color', value: 'rgba(255, 255, 255, 0.07)', condition: s => s['show-text'] && s['color-mode'] === 'Custom' },
    ],

    onEnable() {
        this.createDisplay();
    },

    onDisable() {
        if (this.sprinting) {
            this.stopSprinting();
        }
        this.destroyDisplay();
    },

    onTick() {
        const clickGui = window.Serenity.instance.get('ClickGUI');
        const isTyping = document.activeElement && (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) || document.activeElement.isContentEditable);
        
        const shouldBeSprinting = !isTyping && (!clickGui || !clickGui.isGuiOpen);

        if (shouldBeSprinting && !this.sprinting) {
            this.startSprinting();
        } else if (!shouldBeSprinting && this.sprinting) {
            this.stopSprinting();
        }
        // If we are already sprinting ensure a fresh keydown gets fired every tick to keep some games happy
        if (shouldBeSprinting && this.sprinting) {
            this.fireKeyDown();
        }
        this.updateDisplay();
    },

    onSettingUpdate() {
        this.applyStyles();
        this.updateDisplay(true);
    },

    startSprinting() {
        if (this.sprinting) return;
        this.sprinting = true;
        this.fireKeyDown();
        // Backup interval just in case tick stops for a bit (e.g. tab is in background)
        this.sprintInterval = setInterval(() => this.fireKeyDown(), 200);
    },

    stopSprinting() {
        if (!this.sprinting) return;
        this.sprinting = false;
        if (this.sprintInterval) {
            clearInterval(this.sprintInterval);
            this.sprintInterval = null;
        }
        window.dispatchEvent(new KeyboardEvent('keyup', { key: 'Shift', keyCode: 16, code: 'ShiftLeft', bubbles: true }));
    },

    fireKeyDown() {
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Shift', keyCode: 16, code: 'ShiftLeft', bubbles: true, repeat: true }));
    },

    createDisplay() {
        this.element = document.createElement('div');
        this.element.className = 'togglesprint-hud-display';
        document.body.appendChild(this.element);
        this.applyStyles();
    },

    destroyDisplay() {
        if (this.element) {
            document.body.removeChild(this.element);
            this.element = null;
        }
    },

    updateDisplay() {
        const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
        
        if (!settings['show-text']) {
            if (this.element) this.element.style.display = 'none';
            return;
        }

        if (!this.element) {
            this.createDisplay();
        }

        this.element.style.display = this.enabled ? 'block' : 'none';
        if (this.enabled) {
            this.element.textContent = settings['hud-text'];

            const clickGui = window.Serenity.instance.get('ClickGUI');
            if (!clickGui || !clickGui.isEditingHUD) {
                const mod = window.Serenity.instance.get(this.name);
                if (mod.x !== null) this.element.style.left = typeof mod.x === 'string' ? mod.x : `${mod.x}px`;
                if (mod.y !== null) this.element.style.top = typeof mod.y === 'string' ? mod.y : `${mod.y}px`;
            }
        }
    },

    applyStyles() {
        if (!this.element) return;
        const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
        
        if (settings['color-mode'] === 'Theme') {
            this.element.style.backgroundColor = 'var(--panel)';
            this.element.style.color = 'var(--text)';
            this.element.style.border = `${settings['border-width']}px solid var(--border)`;
        } else {
            this.element.style.backgroundColor = settings['bg-color'];
            this.element.style.color = settings['text-color'];
            this.element.style.border = `${settings['border-width']}px solid ${settings['border-color']}`;
        }

        this.element.style.fontSize = `${settings['font-size']}px`;
        this.element.style.padding = `${settings['padding']}px`;
        this.element.style.borderRadius = `${settings['border-radius']}px`;
        this.element.style.position = 'absolute';
        this.element.style.userSelect = 'none';
        this.element.style.pointerEvents = 'none';
        this.element.style.zIndex = 9997;
    }
};

export default ToggleSprint; 