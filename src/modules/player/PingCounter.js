const PingCounter = {
  name: 'PingCounter',
  category: 'Player',
  description: 'Displays your network ping.',
  enabled: true,
  settings: [
    { id: 'text-color', name: 'Text Color', type: 'color', value: '#EAEAEA' },
    { id: 'show-label', name: 'Show Label', type: 'boolean', value: true },
    { id: 'format', name: 'Text Format', type: 'text', value: '{label} {ping}ms' },
    { id: 'mod-credit', name: 'Mod Made by GEORGECR and Casmyx', type: 'info', }
  ],

  ping: '--',
  element: null,
  pingIntervalId: null,
  positionInterval: null,

  onEnable() {
    this.createDisplay();
    this.applyStyles();
    this.updatePing();
    this.pingIntervalId = setInterval(this.updatePing.bind(this), 2000);
    this.startPositioning();
  },

  onDisable() {
    this.destroyDisplay();
    clearInterval(this.pingIntervalId);
    if (this.positionInterval) clearInterval(this.positionInterval);
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
    if (!this.element) return;
    const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
    let text = settings.format;

    text = text.replace('{label}', settings['show-label'] ? 'Ping:' : '');
    text = text.replace('{ping}', this.ping);

    this.element.textContent = text.trim();
  },

  startPositioning() {
    this.positionInterval = setInterval(() => {
      if (!this.element) return;

      const fps = document.querySelector('.FpsWrapperDiv');
      const coords = document.querySelectorAll('.CoordinateUI');
      const cps = document.querySelector('.cps-counter-display');
      const header = document.querySelector('.InGameHeader');
      if (!header) return;

      const fpsVisible = fps && window.getComputedStyle(fps).display !== 'none';
      const visibleCoords = Array.from(coords).filter(c => window.getComputedStyle(c).display !== 'none');
      const cpsVisible = cps && window.getComputedStyle(cps).display !== 'none';

      let targetRect = null;

      if (cpsVisible) {
        targetRect = cps.getBoundingClientRect();
      } else if (visibleCoords.length > 0) {
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

export default PingCounter;
