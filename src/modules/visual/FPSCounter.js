const FPSCounter = {
  name: 'FPSCounter',
  category: 'Visual',
  description: 'Displays your current frames per second.',
  enabled: true,
  defaultX: 1443,
  defaultY: 423,
  settings: [
    { id: 'bg-color', name: 'Background Color', type: 'color', value: 'rgba(30, 33, 41, 0.85)' },
    { id: 'text-color', name: 'Text Color', type: 'color', value: '#EAEAEA' },
    { id: 'font-size', name: 'Font Size', type: 'slider', value: 14, min: 8, max: 24, step: 1 },
    { id: 'padding', name: 'Padding', type: 'slider', value: 8, min: 0, max: 20, step: 1 },
    { id: 'border-radius', name: 'Border Radius', type: 'slider', value: 10, min: 0, max: 20, step: 1 },
    { id: 'border-width', name: 'Border Width', type: 'slider', value: 1, min: 0, max: 5, step: 1 },
    { id: 'border-color', name: 'Border Color', type: 'color', value: 'rgba(255, 255, 255, 0.07)' },
    { id: 'show-label', name: 'Show Label', type: 'boolean', value: true },
    { id: 'format', name: 'Text Format', type: 'text', value: '{label} {fps}', description: 'Use {label} and {fps} as placeholders.' },
    { id: 'hide-game-fps', name: 'Hide Game FPS Counter', type: 'boolean', value: true, description: 'Hide the built-in game FPS counter' },
  ],
  
  frameCount: 0,
  lastTime: 0,
  fps: 0,
  element: null,
  frameCallback: null,
  gameFpsElements: null,
  gameFpsDisplayStyle: null,
  
  onEnable() {
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.fps = 0;
    this.createDisplay();
    this.applyStyles();
    
    this.frameCallback = this.countFrame.bind(this);
    requestAnimationFrame(this.frameCallback);
    
    this.updateGameFpsVisibility();
  },

  onDisable() {
    this.destroyDisplay();
    
    this.frameCallback = null;
    
    this.restoreGameFpsCounter();
  },
  
  countFrame(timestamp) {
    this.frameCount++;
    
    const elapsed = timestamp - this.lastTime;
    if (elapsed >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / elapsed);
      this.frameCount = 0;
      this.lastTime = timestamp;
    }
    
    if (this.frameCallback) {
      requestAnimationFrame(this.frameCallback);
    }
  },

  onTick() {
    this.updateDisplay();
  },
  
  onSettingUpdate(settingId) {
    this.applyStyles();
    this.updateDisplay();
    
    if (settingId === 'hide-game-fps') {
      this.updateGameFpsVisibility();
    }
  },

  createDisplay() {
    this.element = document.createElement('div');
    this.element.className = 'fps-counter-display';
    document.body.appendChild(this.element);
  },

  destroyDisplay() {
    if (this.element) {
      document.body.removeChild(this.element);
      this.element = null;
    }
  },
  
  updateGameFpsVisibility() {
    const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
    
    if (settings['hide-game-fps']) {
      this.hideGameFpsCounter();
    } else {
      this.restoreGameFpsCounter();
    }
  },
  
  hideGameFpsCounter() {
    const fpsWrapperDiv = document.querySelector('.FpsWrapperDiv');
    if (fpsWrapperDiv) {
      this.gameFpsElements = fpsWrapperDiv;
      this.gameFpsDisplayStyle = fpsWrapperDiv.style.display;
      
      fpsWrapperDiv.style.display = 'none';
    }
  },
  
  restoreGameFpsCounter() {
    if (this.gameFpsElements) {
      this.gameFpsElements.style.display = this.gameFpsDisplayStyle || '';
      this.gameFpsElements = null;
      this.gameFpsDisplayStyle = null;
    }
  },

  updateDisplay() {
    if (this.element) {
      const clickGui = window.Serenity.instance.get('ClickGUI');
      if (!clickGui || !clickGui.isEditingHUD) {
          const mod = window.Serenity.instance.get(this.name);
          if (mod.x !== null) this.element.style.left = `${mod.x}px`;
          if (mod.y !== null) this.element.style.top = `${mod.y}px`;
      }
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      let text = settings.format;

      if (settings['show-label']) text = text.replace('{label}', 'FPS:'); else text = text.replace('{label}', '');
      text = text.replace('{fps}', this.fps);
      
      this.element.textContent = text.trim();
    }
  },

  applyStyles() {
    if (!this.element) return;
    const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
    
    this.element.style.backgroundColor = settings['bg-color'];
    this.element.style.color = settings['text-color'];
    this.element.style.fontSize = `${settings['font-size']}px`;
    this.element.style.padding = `${settings['padding']}px`;
    this.element.style.borderRadius = `${settings['border-radius']}px`;
    this.element.style.border = `${settings['border-width']}px solid ${settings['border-color']}`;
    this.element.style.position = 'absolute';
    this.element.style.userSelect = 'none';
    this.element.style.zIndex = 9997;
    this.element.style.pointerEvents = 'none';
  }
};

export default FPSCounter;
