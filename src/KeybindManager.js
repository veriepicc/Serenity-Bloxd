class KeybindManager {
  constructor(moduleManager) {
    this.moduleManager = moduleManager;
    this.keybinds = new Map(); // Key: event.code, Value: moduleName
    this.isBinding = false;
    this.currentBindModule = null;
    this.onBindSetCallback = null;
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  start() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  stop() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(event) {
    if (document.querySelector('.serenity-config-popup')) return;

    if (this.isBinding && this.currentBindModule) {
      event.preventDefault();
      event.stopPropagation();
      
      let keyCode = event.code;
      if (keyCode === 'Escape') {
        this.stopBinding(true); // Cancel binding
        return;
      }
      if (keyCode === 'Delete' || keyCode === 'Backspace') {
          this.removeBind(this.currentBindModule);
          this.stopBinding(false, null);
          return;
      }
      
      this.setBind(this.currentBindModule, keyCode);
      this.stopBinding(false, keyCode);
      return;
    }

    const moduleName = this.keybinds.get(event.code);
    if (moduleName) {
      const isTyping = document.activeElement && (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName));
      if (isTyping || this.moduleManager.get('ClickGUI')?.isGuiOpen) return;
        
      this.moduleManager.toggle(moduleName);
    }
  }

  startBinding(moduleName, callback) {
    this.isBinding = true;
    this.currentBindModule = moduleName;
    this.onBindSetCallback = callback;
  }

  stopBinding(wasCancelled, newKey = null) {
    if (this.onBindSetCallback) {
        this.onBindSetCallback(this.currentBindModule, wasCancelled, newKey);
    }
    this.isBinding = false;
    this.currentBindModule = null;
    this.onBindSetCallback = null;
  }

  setBind(moduleName, keyCode) {
    this.removeBind(moduleName); // Remove any existing bind for this module
    
    const existingModule = this.getModuleForKey(keyCode);
    if (existingModule) {
        this.removeBind(existingModule); // Steal key from other module
    }

    this.keybinds.set(keyCode, moduleName);
    this.moduleManager.saveConfiguration();
  }
  
  removeBind(moduleName) {
    for (const [key, value] of this.keybinds.entries()) {
      if (value === moduleName) {
        this.keybinds.delete(key);
        break;
      }
    }
    this.moduleManager.saveConfiguration();
  }

  getBind(moduleName) {
    for (const [key, value] of this.keybinds.entries()) {
      if (value === moduleName) {
        return key;
      }
    }
    return null;
  }
  
  getModuleForKey(keyCode) {
    return this.keybinds.get(keyCode);
  }

  loadBinds(binds) {
      if (binds) {
          this.keybinds = new Map(Object.entries(binds));
      }
  }

  getBinds() {
    return Object.fromEntries(this.keybinds);
  }
}

export default KeybindManager; 