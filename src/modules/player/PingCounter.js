const PingCounter = {
    name: 'PingCounter',
    category: 'Player',
    description: 'Displays your network ping.',
    enabled: false,
    defaultX: 724,
    defaultY: 726,
    settings: [
      { id: 'color-mode', name: 'Color Mode', type: 'select', options: ['Theme', 'Custom'], value: 'Theme' },
      { id: 'bg-color', name: 'Background Color', type: 'color', value: 'rgba(30, 33, 41, 0.85)', condition: s => s['color-mode'] === 'Custom' },
      { id: 'text-color', name: 'Text Color', type: 'color', value: '#EAEAEA', condition: s => s['color-mode'] === 'Custom' },
      { id: 'font-size', name: 'Font Size', type: 'slider', value: 14, min: 8, max: 24, step: 1 },
      { id: 'padding', name: 'Padding', type: 'slider', value: 8, min: 0, max: 20, step: 1 },
      { id: 'border-radius', name: 'Border Radius', type: 'slider', value: 10, min: 0, max: 20, step: 1 },
      { id: 'border-width', name: 'Border Width', type: 'slider', value: 1, min: 0, max: 5, step: 1 },
      { id: 'border-color', name: 'Border Color', type: 'color', value: 'rgba(255, 255, 255, 0.07)', condition: s => s['color-mode'] === 'Custom' },
      { id: 'show-label', name: 'Show Label', type: 'boolean', value: true },
      { id: 'format', name: 'Text Format', type: 'text', value: '{label} {ping}ms', description: 'Use {label} and {ping} as placeholders.', },
      { id: 'mod-credit', name: 'Mod Made by GEORGECR and Casmyx', type: 'info', }
    ],
  
    ping: '--',
    element: null,
    pingIntervalId: null,
  
    onEnable() {
      this.createDisplay();
      this.applyStyles();
      this.updatePing();
      this.pingIntervalId = setInterval(this.updatePing.bind(this), 2000);
    },
  
    onDisable() {
      this.destroyDisplay();
      clearInterval(this.pingIntervalId);
    },
  
    onTick() {
      this.updateDisplay();
    },
  
    onSettingUpdate() {
      this.applyStyles();
      this.updateDisplay();
    },
  
    createDisplay() {
      this.element = document.createElement('div');
      this.element.className = 'ping-counter-display';
      document.body.appendChild(this.element);
    },
  
    destroyDisplay() {
      if (this.element) {
        document.body.removeChild(this.element);
        this.element = null;
      }
    },
  
    updatePing() {
      const start = Date.now();
      fetch(window.location.origin, { method: 'HEAD', mode: 'no-cors' })
        .then(() => {
          this.ping = Date.now() - start;
        })
        .catch(() => {
          this.ping = '--';
        });
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
  
        text = text.replace('{label}', settings['show-label'] ? 'Ping:' : '');
        text = text.replace('{ping}', this.ping);
  
        this.element.textContent = text.trim();
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
      this.element.style.zIndex = 5;
      this.element.style.pointerEvents = 'none';
    }
  };
  
  export default PingCounter; 