const Keystrokes = {
  name: 'Keystrokes',
  category: 'Combat',
  description: 'Displays your keystrokes with a sexy, modern look.',
  enabled: true,
  defaultX: 8,
  defaultY: 562,
  element: null,
  keys: {
    w: false, a: false, s: false, d: false,
    ' ': false, lmb: false, rmb: false
  },
  boundKeyDown: null,
  boundKeyUp: null,
  boundMouseDown: null,
  boundMouseUp: null,

  settings: [
    { id: 'show-mouse', name: 'Show Mouse Buttons', type: 'boolean', value: true },
    { id: 'scale', name: 'Scale', type: 'slider', value: 1, min: 0.5, max: 2, step: 0.1 },
    { id: 'opacity', name: 'Opacity', type: 'slider', value: 0.85, min: 0, max: 1, step: 0.05 },
    { id: 'enable-animations', name: 'Enable Animations', type: 'boolean', value: true },
  ],

  onEnable() {
    this.createDisplay();
    this.applyStyles();
    this.boundKeyDown = e => this.updateKeyState(e.key.toLowerCase(), true);
    this.boundKeyUp = e => this.updateKeyState(e.key.toLowerCase(), false);
    this.boundMouseDown = e => {
        if (e.button === 0) this.updateKeyState('lmb', true);
        if (e.button === 2) this.updateKeyState('rmb', true);
    };
    this.boundMouseUp = e => {
        if (e.button === 0) this.updateKeyState('lmb', false);
        if (e.button === 2) this.updateKeyState('rmb', false);
    };

    window.addEventListener('keydown', this.boundKeyDown);
    window.addEventListener('keyup', this.boundKeyUp);
    window.addEventListener('mousedown', this.boundMouseDown);
    window.addEventListener('mouseup', this.boundMouseUp);
  },

  onDisable() {
    this.destroyDisplay();
    window.removeEventListener('keydown', this.boundKeyDown);
    window.removeEventListener('keyup', this.boundKeyUp);
    window.removeEventListener('mousedown', this.boundMouseDown);
    window.removeEventListener('mouseup', this.boundMouseUp);
  },

  onTick() {
    this.updateDisplayLocation();
  },
  
  onSettingUpdate() {
    this.applyStyles();
  },

  updateKeyState(key, isPressed) {
    if (this.keys.hasOwnProperty(key)) {
      this.keys[key] = isPressed;
      this.updateKeyVisuals();
    }
  },
  
  createKey(text, key, ...extraClasses) {
    const keyElement = document.createElement('div');
    keyElement.className = `keystrokes-key key-${key} ${extraClasses.join(' ')}`;
    keyElement.textContent = text;
    return keyElement;
  },
  
  createDisplay() {
    this.element = document.createElement('div');
    this.element.className = 'keystrokes-display';

    const row1 = document.createElement('div');
    row1.className = 'keystrokes-row';
    row1.appendChild(this.createKey('W', 'w'));
    this.element.appendChild(row1);

    const row2 = document.createElement('div');
    row2.className = 'keystrokes-row';
    row2.appendChild(this.createKey('A', 'a'));
    row2.appendChild(this.createKey('S', 's'));
    row2.appendChild(this.createKey('D', 'd'));
    this.element.appendChild(row2);
    
    const row3 = document.createElement('div');
    row3.className = 'keystrokes-row mouse-row';
    row3.appendChild(this.createKey('LMB', 'lmb', 'mouse-button'));
    row3.appendChild(this.createKey('RMB', 'rmb', 'mouse-button'));
    this.element.appendChild(row3);
    
    const row4 = document.createElement('div');
    row4.className = 'keystrokes-row';
    row4.appendChild(this.createKey('Space', ' ', 'space-key'));
    this.element.appendChild(row4);

    document.body.appendChild(this.element);
  },

  destroyDisplay() {
    if (this.element) {
      document.body.removeChild(this.element);
      this.element = null;
    }
  },

  updateDisplayLocation() {
    if (!this.element) return;
    const clickGui = window.Serenity.instance.get('ClickGUI');
    if (!clickGui || !clickGui.isEditingHUD) {
        const mod = window.Serenity.instance.get(this.name);
        if (mod.x !== null) this.element.style.left = `${mod.x}px`;
        if (mod.y !== null) this.element.style.top = `${mod.y}px`;
    }
  },

  updateKeyVisuals() {
    if (!this.element) return;
    for (const key in this.keys) {
      const el = this.element.querySelector(`.key-${key}`);
      if (el) {
        el.classList.toggle('active', this.keys[key]);
      }
    }
  },

  applyStyles() {
    if (!this.element) return;
    const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
    
    this.element.style.transform = `scale(${settings.scale})`;
    this.element.style.opacity = settings.opacity;
    
    this.element.classList.toggle('show-mouse', settings['show-mouse']);
    this.element.classList.toggle('no-animations', !settings['enable-animations']);
  }
};

export default Keystrokes; 