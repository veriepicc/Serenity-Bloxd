const ArmorHUD = {
    name: 'ArmorHUD',
    category: 'Player',
    description: 'Displays your currently equipped armor.',
    enabled: true,
    defaultX: 6 / 1920,
    defaultY: 410 / 1080,
    settings: [
      { id: 'display-style', name: 'Display Style', type: 'select', options: ['Horizontal', 'Vertical'], value: 'Vertical' },
      { id: 'bg-color', name: 'Background Color', type: 'color', value: 'rgba(30, 33, 41, 0.85)' },
      { id: 'padding', name: 'Padding', type: 'slider', value: 4, min: 0, max: 20, step: 1 },
      { id: 'border-radius', name: 'Border Radius', type: 'slider', value: 20, min: 0, max: 20, step: 1 },
      { id: 'border-width', name: 'Border Width', type: 'slider', value: 2, min: 0, max: 5, step: 1 },
      { id: 'border-color', name: 'Border Color', type: 'color', value: 'rgba(255, 255, 255, 0.07)' },
      { id: 'item-size', name: 'Item Size', type: 'slider', value: 64, min: 16, max: 64, step: 1 },
      { id: 'item-spacing', name: 'Item Spacing', type: 'slider', value: 0, min: 0, max: 20, step: 1 },
    ],
    
    element: null,
  
    onEnable() {
      this.createDisplay();
      this.applyStyles();
    },
  
    onDisable() {
      this.destroyDisplay();
    },
  
    onTick() {
      this.updateDisplay();
    },
    
    onSettingUpdate() {
      this.applyStyles();
      this.updateDisplay(true); // Force update to reflect style changes
    },
  
    createDisplay() {
      this.element = document.createElement('div');
      this.element.className = 'armor-hud-display';
      document.body.appendChild(this.element);
    },
  
    destroyDisplay() {
      if (this.element) {
        document.body.removeChild(this.element);
        this.element = null;
      }
    },
  
    updateDisplay(forceUpdate = false) {
      if (!this.element) return;
  
      // Update position
      const clickGui = window.Serenity.instance.get('ClickGUI');
      if (!clickGui || !clickGui.isEditingHUD) {
          const mod = window.Serenity.instance.get(this.name);
          if (mod.x !== null) this.element.style.left = `${mod.x}px`;
          if (mod.y !== null) this.element.style.top = `${mod.y}px`;
      }
  
      // Update armor images
      const armorContainer = document.querySelector('.ArmourItemSlots');
      if (!armorContainer) return;
  
      const armorItems = Array.from(armorContainer.querySelectorAll('.InvenItem'));
      const images = armorItems.map(item => {
        const twoDImageIcon = item.querySelector('.TwoDImageIcon');
        const unfilled = item.querySelector('.InvenItemUnfilled');

        if (twoDImageIcon) {
            if (twoDImageIcon.style.backgroundImage && twoDImageIcon.style.backgroundImage !== 'none') {
                return { type: 'image', src: twoDImageIcon.style.backgroundImage.slice(5, -2), filter: null };
            }
            const img = item.querySelector('.TwoDItemGrayscaleVisiblePng');
            const colorHint = item.querySelector('.TwoDItemGrayscale');
            if (img) {
                return { type: 'image', src: img.src, filter: colorHint ? colorHint.style.filter : '' };
            }
        }

        if (unfilled) {
            return { type: 'unfilled', src: unfilled.style.backgroundImage.slice(5, -2) };
        }
        return null;
      });
  
      const newContentHash = JSON.stringify(images);
      if (newContentHash !== this.lastContentHash || forceUpdate) {
        this.element.innerHTML = '';
        images.forEach(imgData => {
          if (!imgData) return;
          
          const itemContainer = document.createElement('div');
          itemContainer.style.position = 'relative';

          if (imgData.type === 'image' && imgData.filter) {
            const itemSize = this.settings.find(s => s.id === 'item-size').value;
            const colorContainer = document.createElement('div');
            colorContainer.style.position = 'absolute';
            colorContainer.style.width = '100%';
            colorContainer.style.height = '100%';
            colorContainer.style.overflow = 'hidden';

            const colorSource = document.createElement('img');
            colorSource.src = imgData.src;
            colorSource.style.width = '100%';
            colorSource.style.height = '100%';
            colorSource.style.imageRendering = 'pixelated';
            colorSource.style.filter = imgData.filter.replace('1em', `${itemSize}px`);
            colorSource.style.marginLeft = `-${itemSize}px`;
          
            colorContainer.appendChild(colorSource);
            itemContainer.appendChild(colorContainer);
            
            const grayscaleImg = document.createElement('img');
            grayscaleImg.src = imgData.src;
            grayscaleImg.style.position = 'absolute';
            grayscaleImg.style.width = '100%';
            grayscaleImg.style.height = '100%';
            grayscaleImg.style.imageRendering = 'pixelated';
            grayscaleImg.style.mixBlendMode = 'multiply';
            itemContainer.appendChild(grayscaleImg);

          } else {
            const imgElement = document.createElement('img');
            imgElement.src = imgData.src;
            imgElement.style.width = '100%';
            imgElement.style.height = '100%';
            imgElement.style.imageRendering = 'pixelated';
            itemContainer.appendChild(imgElement);
          }
          
          this.element.appendChild(itemContainer);
        });
        this.lastContentHash = newContentHash;
        this.applyStyles();
      }
    },
  
    applyStyles() {
      if (!this.element) return;
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      
      this.element.style.backgroundColor = settings['bg-color'];
      this.element.style.padding = `${settings['padding']}px`;
      this.element.style.borderRadius = `${settings['border-radius']}px`;
      this.element.style.border = `${settings['border-width']}px solid ${settings['border-color']}`;
      this.element.style.display = 'flex';
      this.element.style.flexDirection = settings['display-style'] === 'Horizontal' ? 'row' : 'column';
      this.element.style.gap = `${settings['item-spacing']}px`;
      this.element.style.position = 'absolute';
      this.element.style.userSelect = 'none';
      
      const clickGui = window.Serenity.instance.get('ClickGUI');
      if (!clickGui || !clickGui.isEditingHUD) {
        this.element.style.zIndex = 9997;
      }
      
      this.element.style.pointerEvents = 'none';
  
      const itemContainers = this.element.querySelectorAll('.armor-hud-display > div');
      itemContainers.forEach(container => {
        container.style.width = `${settings['item-size']}px`;
        container.style.height = `${settings['item-size']}px`;
      });
    }
  };
  
  export default ArmorHUD; 