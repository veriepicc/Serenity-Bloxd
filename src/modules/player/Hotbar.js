const Hotbar = {
    name: 'Hotbar',
    category: 'Player',
    description: 'Replaces the default in-game hotbar with a customizable one.',
    enabled: false,
    element: null,
    gameHotbar: null,
    gameAuraBar: null,
    hotbarObserver: null,
    auraObserver: null,
    mainObserver: null,
    auraBarElement: null,

    settings: [
        { id: 'hide-game-hotbar', name: 'Hide Game Hotbar', type: 'boolean', value: true, description: 'Hides the original in-game hotbar UI.' },
        { id: 'show-aura-bar', name: 'Show Aura Bar', type: 'boolean', value: true, description: 'Displays the Aura/XP bar above the hotbar.' },
        { id: 'show-buttons', name: 'Show Shop/Inventory Buttons', type: 'boolean', value: true },
        { id: 'hotbar-style', name: 'Hotbar Style', type: 'select', options: ['Default', 'Compact', 'Modern'], value: 'Default' },
        { id: 'slot-size', name: 'Slot Size', type: 'slider', value: 50, min: 30, max: 70, step: 1 },
        { id: 'slot-spacing', name: 'Slot Spacing', type: 'slider', value: 2, min: 0, max: 10, step: 1 },
        { id: 'background-color', name: 'Background Color', type: 'color', value: 'rgba(30, 33, 41, 0.85)' },
        { id: 'border-radius', name: 'Border Radius', type: 'slider', value: 8, min: 0, max: 20, step: 1 },
        { id: 'border-width', name: 'Border Width', type: 'slider', value: 2, min: 0, max: 5, step: 1 },
        { id: 'border-color', name: 'Border Color', type: 'color', value: 'rgba(255, 255, 255, 0.07)' },
    ],

    onEnable() {
        this.createDisplay();
        this.handleGameElements(); // Initial check
        this.mainObserver = new MutationObserver(() => this.handleGameElements());
        this.mainObserver.observe(document.body, { childList: true, subtree: true });
    },

    onDisable() {
        if (this.mainObserver) this.mainObserver.disconnect();
        if (this.hotbarObserver) this.hotbarObserver.disconnect();
        if (this.auraObserver) this.auraObserver.disconnect();
        this.restoreGameElements();
        this.destroyDisplay();
    },

    onTick() {
        if (!this.element) return;
        const clickGui = window.Serenity.instance.get('ClickGUI');
        if (clickGui && clickGui.isEditingHUD) {
            this.element.style.pointerEvents = 'none';
            this.element.style.zIndex = 2;
        } else {
            this.element.style.pointerEvents = '';
            this.element.style.zIndex = 9997;
        }
    },

    onSettingUpdate() {
        this.applyStyles();
        // Manually trigger updates to see changes instantly
        this.updateHotbarItems();
        this.updateAuraBar();
    },

    createDisplay() {
        this.element = document.createElement('div');
        this.element.className = 'serenity-hotbar-wrapper';
        document.body.appendChild(this.element);

        this.auraBarElement = document.createElement('div');
        this.auraBarElement.className = 'serenity-aura-bar';
        this.auraBarElement.innerHTML = `
            <div class="serenity-aura-bar-text"></div>
            <div class="serenity-aura-bar-background">
                <div class="serenity-aura-bar-progress"></div>
            </div>
        `;
        this.element.appendChild(this.auraBarElement);

        const hotbarContainer = document.createElement('div');
        hotbarContainer.className = 'serenity-hotbar-container';
        hotbarContainer.innerHTML = `
            <div class="serenity-hotbar-button shop-button">
                <div class="serenity-hotbar-button-icon"><i class="fas fa-cart-shopping"></i><div class="serenity-hotbar-key-helper">B</div></div>
            </div>
            <div class="serenity-hotbar-filler"></div>
            <div class="serenity-hotbar-items">
                ${Array(10).fill().map((_, i) => `
                    <div class="serenity-hotbar-slot" data-slot="${i}">
                        <div class="serenity-slot-number">${i === 9 ? 0 : i + 1}</div>
                        <div class="serenity-slot-amount"></div>
                    </div>
                `).join('')}
            </div>
            <div class="serenity-hotbar-filler"></div>
            <div class="serenity-hotbar-button inventory-button">
                 <div class="serenity-hotbar-button-icon"><i class="fas fa-backpack"></i><div class="serenity-hotbar-key-helper">Tab</div></div>
            </div>
        `;
        this.element.appendChild(hotbarContainer);
        this.applyStyles();
    },

    destroyDisplay() {
        if (this.element) {
            document.body.removeChild(this.element);
            this.element = null;
        }
    },

    handleGameElements() {
        const gameHotbarEl = document.querySelector('.HotBar');
        this.element.style.display = gameHotbarEl ? 'flex' : 'none';
        if (!gameHotbarEl) return;

        if (!this.gameHotbar) {
            this.gameHotbar = gameHotbarEl;
            this.updateHotbarItems();
            this.hotbarObserver = new MutationObserver(() => this.updateHotbarItems());
            this.hotbarObserver.observe(this.gameHotbar, {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true,
            });
        }
        
        const gameAuraBarEl = document.querySelector('.AuraBarWrapper');
        if (gameAuraBarEl && !this.gameAuraBar) {
            this.gameAuraBar = gameAuraBarEl;
            this.updateAuraBar();
            this.auraObserver = new MutationObserver(() => this.updateAuraBar());
            this.auraObserver.observe(this.gameAuraBar, {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true,
            });
        }
        
        this.applyVisibility();
    },

    applyVisibility() {
        const shouldHide = this.settings.find(s => s.id === 'hide-game-hotbar').value;
        if (this.gameHotbar) {
            this.gameHotbar.style.opacity = shouldHide ? '0' : '1';
        }
        if (this.gameAuraBar) {
            this.gameAuraBar.style.opacity = shouldHide ? '0' : '1';
        }
    },
    
    restoreGameElements() {
        if (this.gameHotbar) this.gameHotbar.style.opacity = '1';
        if (this.gameAuraBar) this.gameAuraBar.style.opacity = '1';
    },

    extractItemData(itemElement) {
        if (!itemElement) return null;

        const data = {
            selected: itemElement.classList.contains('Selected'),
            amount: itemElement.querySelector('.ItemAmount')?.textContent || '',
            image: null
        };
        const twoDIcon = itemElement.querySelector('.TwoDImageIcon');
        if (twoDIcon?.style.backgroundImage) {
            data.image = twoDIcon.style.backgroundImage.slice(5, -2);
        } else {
            const blockItem = itemElement.querySelector('.BlockItem');
            if (blockItem?.style.backgroundImage) {
                data.image = blockItem.style.backgroundImage.slice(5, -2);
            }
        }
        return data;
    },

    updateHotbarItems() {
        if (!this.element || !this.gameHotbar) return;

        const gameItems = this.gameHotbar.querySelectorAll('.HotBarGameItemsContainer .InvenItem');
        
        gameItems.forEach((gameItem, index) => {
            const customSlot = this.element.querySelector(`.serenity-hotbar-slot[data-slot="${index}"]`);
            if (!customSlot) return;

            const data = this.extractItemData(gameItem);
            
            customSlot.classList.toggle('selected', data.selected);
            
            const amountEl = customSlot.querySelector('.serenity-slot-amount');
            amountEl.textContent = data.amount > 1 ? data.amount : '';
            
            let itemImgEl = customSlot.querySelector('.serenity-hotbar-item-img');
            if (data.image) {
                if (!itemImgEl) {
                    itemImgEl = document.createElement('img');
                    itemImgEl.className = 'serenity-hotbar-item-img';
                    customSlot.appendChild(itemImgEl);
                }
                if (itemImgEl.src !== data.image) {
                   itemImgEl.src = data.image;
                }
                itemImgEl.style.display = '';
            } else if (itemImgEl) {
                itemImgEl.style.display = 'none';
            }
        });
    },

    updateAuraBar() {
        if (!this.auraBarElement || !this.gameAuraBar) return;
        
        const showAura = this.settings.find(s => s.id === 'show-aura-bar').value;
        this.auraBarElement.style.display = showAura ? 'flex' : 'none';
        if (!showAura) return;
        
        const text = this.gameAuraBar.querySelector('.AuraBarLabelText')?.textContent || '';
        const progress = this.gameAuraBar.querySelector('.AuraBarBackground')?.style.width || '0%';
        
        this.auraBarElement.querySelector('.serenity-aura-bar-text').textContent = text;
        this.auraBarElement.querySelector('.serenity-aura-bar-progress').style.width = progress;
    },

    applyStyles() {
        if (!this.element) return;
        const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
        this.element.style.setProperty('--hotbar-slot-size', `${settings['slot-size']}px`);
        this.element.style.setProperty('--hotbar-slot-spacing', `${settings['slot-spacing']}px`);
        
        const hotbarContainer = this.element.querySelector('.serenity-hotbar-container');
        hotbarContainer.style.backgroundColor = settings['background-color'];
        hotbarContainer.style.border = `${settings['border-width']}px solid ${settings['border-color']}`;
        hotbarContainer.style.borderRadius = `${settings['border-radius']}px`;
        hotbarContainer.className = `serenity-hotbar-container hotbar-style-${settings['hotbar-style'].toLowerCase()}`;
        
        const showButtons = settings['show-buttons'];
        this.element.querySelectorAll('.serenity-hotbar-button').forEach(btn => {
            btn.style.display = showButtons ? 'flex' : 'none';
        });
        
        this.updateAuraBar();
        this.applyVisibility();
    }
};
export default Hotbar; 