import { getPlayerName } from '../../utils';

const Chat = {
    name: 'Chat',
    category: 'Visual',
    description: 'Replaces the default in-game chat with a customizable one.',
    enabled: true,
    defaultX: 4,
    defaultY: 59,
    element: null,
    gameChat: null,
    chatObserver: null,
    mainObserver: null,
    customInput: null,

    settings: [
        { id: 'hide-game-chat', name: 'Hide Game Chat', type: 'boolean', value: true, description: 'Hides the original in-game chat UI.' },
        { id: 'font-size', name: 'Font Size', type: 'slider', value: 14, min: 10, max: 24, step: 1 },
        { id: 'max-messages', name: 'Max Messages', type: 'slider', value: 7, min: 5, max: 25, step: 1 },
        { id: 'show-timestamps', name: 'Show Timestamps', type: 'boolean', value: false },
    ],

    onEnable() {
        this.createDisplay();
        this.handleGameChat();

        this.mainObserver = new MutationObserver(() => this.handleGameChat());
        this.mainObserver.observe(document.body, { childList: true, subtree: true });
    },

    onDisable() {
        if (this.mainObserver) this.mainObserver.disconnect();
        if (this.chatObserver) this.chatObserver.disconnect();
        this.restoreGameChat();
        this.destroyDisplay();
    },

    onTick() {
        if (this.element) {
            const clickGui = window.Serenity.instance.get('ClickGUI');
            if (!clickGui || !clickGui.isEditingHUD) {
                const mod = window.Serenity.instance.get(this.name);
                if (mod.x !== null) this.element.style.left = `${mod.x}px`;
                if (mod.y !== null) this.element.style.top = `${mod.y}px`;
            }
        }
    },

    onSettingUpdate() {
        this.applyStyles();
        this.handleGameChat();
    },

    createDisplay() {
        this.element = document.createElement('div');
        this.element.className = 'serenity-chat-container';
        document.body.appendChild(this.element);

        const messagesContainer = document.createElement('div');
        messagesContainer.className = 'serenity-chat-messages';
        this.element.appendChild(messagesContainer);
        
        this.createCustomInput();
    },
    
    createCustomInput() {
        const inputWrapper = document.createElement('div');
        inputWrapper.className = 'serenity-chat-input-wrapper';

        this.customInput = document.createElement('input');
        this.customInput.type = 'text';
        this.customInput.className = 'serenity-chat-input';
        this.customInput.placeholder = 'Send a message...';

        this.customInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const gameInput = document.querySelector('.ChatInput');
                if (gameInput && this.customInput.value) {
                    gameInput.value = this.customInput.value;
                    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', which: 13, keyCode: 13, bubbles: true });
                    gameInput.dispatchEvent(enterEvent);
                    this.customInput.value = '';
                }
            }
        });
        
        inputWrapper.appendChild(this.customInput);
        this.element.appendChild(inputWrapper);
    },

    syncInputVisibility(gameInputWrapper) {
        const inputWrapper = this.element.querySelector('.serenity-chat-input-wrapper');
        if (gameInputWrapper.style.display === 'none') {
            inputWrapper.style.display = 'none';
        } else {
            inputWrapper.style.display = 'flex';
            setTimeout(() => this.customInput.focus(), 0);
        }
    },

    destroyDisplay() {
        if (this.element) {
            document.body.removeChild(this.element);
            this.element = null;
        }
    },

    handleGameChat() {
        const chatContainer = document.querySelector('.Chat');
        if (!chatContainer) return;
        
        if (!this.gameChat) {
            this.gameChat = chatContainer;
        }

        const shouldHide = this.settings.find(s => s.id === 'hide-game-chat').value;
        this.gameChat.style.visibility = shouldHide ? 'hidden' : 'visible';
        this.gameChat.style.pointerEvents = shouldHide ? 'none' : 'auto';

        const messagesContainer = chatContainer.querySelector('.ChatMessages');
        if (messagesContainer && !this.chatObserver) {
            this.element.querySelector('.serenity-chat-messages').innerHTML = '';
            messagesContainer.querySelectorAll('.MessageWrapper').forEach(node => this.addMessage(node));

            this.chatObserver = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    if (mutation.addedNodes.length) {
                        mutation.addedNodes.forEach(node => {
                            if (node.nodeType === 1 && node.classList.contains('MessageWrapper')) {
                                this.addMessage(node);
                            }
                        });
                    }
                });
            });
            this.chatObserver.observe(messagesContainer, { childList: true });
        }

        const gameInputWrapper = chatContainer.querySelector('.ChatInputWrapper');
        if (gameInputWrapper) {
            this.syncInputVisibility(gameInputWrapper);
        }
    },

    restoreGameChat() {
        if (this.gameChat) {
            this.gameChat.style.visibility = 'visible';
            this.gameChat.style.pointerEvents = 'auto';
        }
    },

    addMessage(originalNode) {
        if (!this.element) return;
        const messagesContainer = this.element.querySelector('.serenity-chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'serenity-chat-message';
        const contentDiv = document.createElement('div');
        contentDiv.className = 'serenity-message-content';
        const myName = getPlayerName();

        originalNode.querySelectorAll('.IndividualText').forEach(span => {
            const clonedSpan = span.cloneNode(true);
            if (myName && clonedSpan.textContent === myName) {
                clonedSpan.classList.add('serenity-message-own-name');
            }
            if (/^\[.*\]$/.test(clonedSpan.textContent)) {
                clonedSpan.classList.add('serenity-message-tag');
            }
            contentDiv.appendChild(clonedSpan);
        });

        messageDiv.appendChild(contentDiv);

        if (this.settings.find(s => s.id === 'show-timestamps').value) {
            const timestamp = document.createElement('span');
            timestamp.className = 'serenity-message-timestamp';
            timestamp.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            messageDiv.insertBefore(timestamp, contentDiv);
        }

        messagesContainer.appendChild(messageDiv);

        const maxMessages = this.settings.find(s => s.id === 'max-messages').value;
        while (messagesContainer.children.length > maxMessages) {
            messagesContainer.removeChild(messagesContainer.firstChild);
        }
    },
    
    applyStyles() {
        if (!this.element) return;
        const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
        this.element.style.setProperty('--chat-font-size', `${settings['font-size']}px`);
    }
};

export default Chat; 