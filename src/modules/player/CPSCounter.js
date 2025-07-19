const CPSCounter = {
  name: 'CPSCounter',
  category: 'Player',
  description: 'Displays your clicks per second.',
  enabled: true,
  defaultX: -1,
  defaultY: 360,
  settings: [
    { id: 'bg-color', name: 'Background Color', type: 'color', value: 'rgba(30, 33, 41, 0.85)' },
    { id: 'text-color', name: 'Text Color', type: 'color', value: '#EAEAEA' },
    { id: 'font-size', name: 'Font Size', type: 'slider', value: 14, min: 8, max: 24, step: 1 },
    { id: 'padding', name: 'Padding', type: 'slider', value: 8, min: 0, max: 20, step: 1 },
    { id: 'border-radius', name: 'Border Radius', type: 'slider', value: 10, min: 0, max: 20, step: 1 },
    { id: 'border-width', name: 'Border Width', type: 'slider', value: 1, min: 0, max: 5, step: 1 },
    { id: 'border-color', name: 'Border Color', type: 'color', value: 'rgba(255, 255, 255, 0.07)' },
    { id: 'show-label', name: 'Show Label', type: 'boolean', value: true },
    { id: 'show-lmb', name: 'Show LMB', type: 'boolean', value: true },
    { id: 'show-rmb', name: 'Show RMB', type: 'boolean', value: true },
    {
      id: 'format',
      name: 'Text Format',
      type: 'text',
      value: '{label} {lmb} | {rmb}',
      description: 'Use {label}, {lmb}, and {rmb} as placeholders.',
    },
  ],
  
  leftClicks: [],
  rightClicks: [],
  
  element: null,

  onEnable() {
    this.createDisplay();
    this.applyStyles();
    document.addEventListener('mousedown', this.handleMouseDown.bind(this));
  },

  onDisable() {
    this.destroyDisplay();
    document.removeEventListener('mousedown', this.handleMouseDown.bind(this));
  },

  onTick() {
    const now = performance.now();
    this.leftClicks = this.leftClicks.filter(t => now - t < 1000);
    this.rightClicks = this.rightClicks.filter(t => now - t < 1000);
    
    this.updateDisplay();
  },
  
  onSettingUpdate() {
    this.applyStyles();
    this.updateDisplay();
  },

  handleMouseDown(e) {
    if (e.button === 0) { // Left click
      this.leftClicks.push(performance.now());
    } else if (e.button === 2) { // Right click
      this.rightClicks.push(performance.now());
    }
  },

  createDisplay() {
    this.element = document.createElement('div');
    this.element.className = 'cps-counter-display';
    document.body.appendChild(this.element);
  },

  destroyDisplay() {
    if (this.element) {
      document.body.removeChild(this.element);
      this.element = null;
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

      if (settings['show-label']) text = text.replace('{label}', 'CPS:'); else text = text.replace('{label}', '');
      if (settings['show-lmb']) text = text.replace('{lmb}', this.leftClicks.length); else text = text.replace('{lmb}', '');
      if (settings['show-rmb']) text = text.replace('{rmb}', this.rightClicks.length); else text = text.replace('{rmb}', '');
      
      this.element.textContent = text.trim().replace(/\|/g, (match, offset, str) => {
        const prevChar = str[offset - 1];
        const nextChar = str[offset + 1];
        if (prevChar && prevChar.trim() === '' && nextChar && nextChar.trim() === '') {
          return '|';
        }
        if (!prevChar || prevChar.trim() === '' || !nextChar || nextChar.trim() === '') {
          return '';
        }
        return match;
      }).trim();
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

export default CPSCounter; 