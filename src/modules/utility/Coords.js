export default {
  name: 'Coordinates',
  category: 'Utility',
  description: 'Displays your in-game X, Y, Z coordinates as customizable text.',
  enabled: false,
  defaultX: 408,
  defaultY: 11,
  
  element: null,
  originalFillText: null,
  sourceCanvas: null,
  capturedTexts: [],
  lastCaptureTime: 0,
  coordinates: { x: '0.00', y: '0.00', z: '0.00' },

  settings: [
    { id: 'color-mode', name: 'Color Mode', type: 'select', options: ['Theme', 'Custom'], value: 'Theme' },
    { id: 'bg-color', name: 'Background Color', type: 'color', value: 'rgba(30, 33, 41, 0.85)', condition: s => s['color-mode'] === 'Custom' },
    { id: 'text-color', name: 'Text Color', type: 'color', value: '#EAEAEA', condition: s => s['color-mode'] === 'Custom' },
    { id: 'font-size', name: 'Font Size', type: 'slider', value: 14, min: 8, max: 24, step: 1 },
    { id: 'padding', name: 'Padding', type: 'slider', value: 8, min: 0, max: 30, step: 1 },
    { id: 'border-width', name: 'Border Width', type: 'slider', value: 1, min: 0, max: 5, step: 1 },
    { id: 'border-color', name: 'Border Color', type: 'color', value: 'rgba(255, 255, 255, 0.07)', condition: s => s['color-mode'] === 'Custom' },
    { id: 'border-radius', name: 'Border Radius', type: 'slider', value: 10, min: 0, max: 20, step: 1 },
    { id: 'opacity', name: 'Opacity', type: 'slider', value: 1, min: 0, max: 1, step: 0.05 },
    { id: 'scale', name: 'Scale', type: 'slider', value: 1, min: 0.5, max: 2, step: 0.1 },
    { id: 'format', name: 'Text Format', type: 'text', value: 'X: {x} Y: {y} Z: {z}', description: 'Use {x}, {y}, and {z} as placeholders.' },
    { id: 'hide-original', name: 'Hide Original Display', type: 'boolean', value: true, description: 'Prevents the game from drawing its own coordinates.' },
  ],

  onEnable() {
    localStorage.setItem('bloxd-showCoordinates', 'true');
    this.createDisplay();
    this.applyStyles();
  },

  onDisable() {
    this.unpatchCanvas();
    if (this.element) {
      document.body.removeChild(this.element);
      this.element = null;
    }
  },

  onTick() {
    this.patchCanvas();
    this.updatePosition();
  },

  onSettingUpdate() {
    this.applyStyles();
    this.updateDisplay();
  },

  patchCanvas() {
    if (this.sourceCanvas && this.sourceCanvas._serenityCoordsPatched) return;
    
    const canvas = document.querySelector('.CoordinateCanvas');
    if (canvas) {
      this.sourceCanvas = canvas;
      const ctx = this.sourceCanvas.getContext('2d');
      if (ctx.fillText._isSerenityCoordsWrapper) return;

      this.originalFillText = ctx.fillText;
      const self = this;

      ctx.fillText = function(text, x, y, maxWidth) {
        const now = performance.now();
        if (now - self.lastCaptureTime > 100) {
          self.capturedTexts = [];
        }
        self.lastCaptureTime = now;

        if (/^-?\d+\.\d{2}$/.test(text)) {
          self.capturedTexts.push(text);
          if (self.capturedTexts.length === 3) {
            self.coordinates = {
              x: self.capturedTexts[0],
              y: self.capturedTexts[1],
              z: self.capturedTexts[2],
            };
            self.updateDisplay();
            self.capturedTexts = [];
          }
        }
        
        const modSettings = self.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
        if (modSettings['hide-original'] && /^-?\d+\.\d{2}$/.test(text)) {
          return;
        }

        self.originalFillText.apply(this, arguments);
      };
      ctx.fillText._isSerenityCoordsWrapper = true;
      this.sourceCanvas._serenityCoordsPatched = true;
    }
  },

  unpatchCanvas() {
    if (this.sourceCanvas && this.originalFillText) {
      this.sourceCanvas.getContext('2d').fillText = this.originalFillText;
      this.originalFillText = null;
      this.sourceCanvas._serenityCoordsPatched = false;
      delete this.sourceCanvas.getContext('2d').fillText._isSerenityCoordsWrapper;
    }
  },

  createDisplay() {
    if (this.element) return;
    this.element = document.createElement('div');
    document.body.appendChild(this.element);
    this.updateDisplay();
  },

  updateDisplay() {
    if (!this.element) return;
    const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
    this.element.textContent = settings.format
      .replace('{x}', this.coordinates.x)
      .replace('{y}', this.coordinates.y)
      .replace('{z}', this.coordinates.z);
  },

  updatePosition() {
    if (!this.element) return;
    const clickGui = window.Serenity.instance.get('ClickGUI');
    if (!clickGui || !clickGui.isEditingHUD) {
      const mod = window.Serenity.instance.get(this.name);
      if (mod.x !== null) this.element.style.left = `${mod.x}px`;
      if (mod.y !== null) this.element.style.top = `${mod.y}px`;
    }
  },

  applyStyles() {
    if (!this.element) return;
    const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
    
    this.element.style.position = 'absolute';
    this.element.style.zIndex = 9997;
    this.element.style.pointerEvents = 'none';
    this.element.style.userSelect = 'none';

    if (settings['color-mode'] === 'Theme') {
        this.element.style.backgroundColor = 'var(--panel)';
        this.element.style.color = 'var(--text)';
        this.element.style.border = `${settings['border-width']}px solid var(--border)`;
    } else {
        this.element.style.backgroundColor = settings['bg-color'];
        this.element.style.color = settings['text-color'];
        this.element.style.border = `${settings['border-width']}px solid ${settings['border-color']}`;
    }
    
    this.element.style.padding = `${settings.padding}px`;
    this.element.style.borderRadius = `${settings['border-radius']}px`;
    this.element.style.transform = `scale(${settings.scale})`;
    this.element.style.opacity = settings.opacity;
    this.element.style.fontSize = `${settings['font-size']}px`;
    this.element.style.fontFamily = `'Inter', 'Segoe UI', sans-serif`;
    this.element.style.fontWeight = '600';
    this.element.style.whiteSpace = 'nowrap';
  }
}; 