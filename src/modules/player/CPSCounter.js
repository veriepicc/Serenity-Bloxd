const CPSCounter = {
  name: 'CPSCounter',
  category: 'Player',
  description: 'Displays your clicks per second.',
  enabled: true,
  settings: [
    { id: 'text-color', name: 'Text Color', type: 'color', value: '#EAEAEA' },
    { id: 'show-label', name: 'Show Label', type: 'boolean', value: true },
    { id: 'show-lmb', name: 'Show LMB', type: 'boolean', value: true },
    { id: 'show-rmb', name: 'Show RMB', type: 'boolean', value: true },
    { id: 'format', name: 'Text Format', type: 'text', value: '{label} {lmb} | {rmb}' },
  ],

  leftClicks: [],
  rightClicks: [],
  element: null,
  positionInterval: null,

  onEnable() {
    this.createDisplay();
    this.applyStyles();
    this.startPositioning();
    document.addEventListener('mousedown', this.handleMouseDown.bind(this));
  },

  onDisable() {
    this.destroyDisplay();
    document.removeEventListener('mousedown', this.handleMouseDown.bind(this));
    if (this.positionInterval) clearInterval(this.positionInterval);
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
    if (e.button === 0) this.leftClicks.push(performance.now());
    else if (e.button === 2) this.rightClicks.push(performance.now());
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
    if (!this.element) return;
    const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
    let text = settings.format;
  
    text = text.replace('{label}', settings['show-label'] ? 'CPS:' : '');
    text = text.replace('{lmb}', settings['show-lmb'] ? this.leftClicks.length : '0');
    text = text.replace('{rmb}', settings['show-rmb'] ? this.rightClicks.length : '0');

    this.element.textContent = text.trim();
  },
  

  startPositioning() {
    this.positionInterval = setInterval(() => {
      if (!this.element) return;

      const fps = document.querySelector('.FpsWrapperDiv');
      const coords = document.querySelectorAll('.CoordinateUI');
      const header = document.querySelector('.InGameHeader');
      if (!header) return;

      const fpsVisible = fps && window.getComputedStyle(fps).display !== 'none';
      const visibleCoords = Array.from(coords).filter(c => window.getComputedStyle(c).display !== 'none');

      let targetRect = null;
      if (visibleCoords.length > 0) {
        targetRect = visibleCoords.reduce((rightMost, c) => {
          const rect = c.getBoundingClientRect();
          return !rightMost || rect.right > rightMost.right ? rect : rightMost;
        }, null);
      } else if (fpsVisible) {
        targetRect = fps.getBoundingClientRect();
      } else {
        targetRect = header.getBoundingClientRect();
      }

      if (targetRect) {
        this.element.style.top = `${targetRect.top + window.scrollY}px`;
        this.element.style.left = `${targetRect.right + window.scrollX + 5}px`;
        this.element.style.display = 'block';
      }
    }, 200);
  },

  applyStyles() {
    if (!this.element) return;
    const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
    this.element.style.color = settings['text-color'];
    this.element.style.fontSize = '14px';
    this.element.style.position = 'absolute';
    this.element.style.userSelect = 'none';
    this.element.style.zIndex = 5;
    this.element.style.pointerEvents = 'none';
    this.element.style.backgroundColor = 'rgba(30, 33, 41, var(--panel-opacity))';
    this.element.style.padding = '16.5px 10px 16.5px 10px';
    this.element.style.borderRadius = '10px';
  }
};

export default CPSCounter;
