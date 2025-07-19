import ClickGUI from './modules/visual/ClickGUI';
import FPSCounter from './modules/visual/FPSCounter';
import Interface from './modules/visual/Interface';
import Chat from './modules/visual/Chat';
import Keystrokes from './modules/combat/Keystrokes';
import ToggleSprint from './modules/movement/ToggleSprint';;
import ArmorHUD from './modules/player/ArmorHUD';
import Hotbar from './modules/player/Hotbar';
import Coordinates from './modules/utility/Coords';
import CPSCounter from './modules/player/CPSCounter';
import FPSBooster from './modules/utility/FPSBooster';
import AdBlocker from './modules/utility/AdBlocker';
import Configuration from './Configuration';
import Crosshair from './modules/visual/Crosshair'
import NotificationManager from './NotificationManager';
import Notifications from './modules/utility/Notifications';
import ArrayList from './modules/visual/ArrayList';

class ModuleManager {
  constructor({ tickRate = 60 } = {}) {
    this.modules = new Map();
    this.moduleDefs = new Map();
    this.categories = [
      'Combat', 'Movement', 'Player', 'Visual', 'Utility'
    ];
    this.autoSave = true;
    this.autoLoad = true; /* default to true so configuration loads on startup */
    this.initialized = false;
    this.hudVisibilityInterval = null;
    this.notifications = new NotificationManager();
    
    this.tickInterval = 1000 / tickRate;
    this.lastTick = performance.now();
    this.ticker = this.ticker.bind(this);
    
    this.init();

    this.startHudVisibilityCheck();
    requestAnimationFrame(this.ticker);
  }

  start() {
    if (this.autoLoad) {
      this.loadConfiguration();
    }
    this.applyInitialStates();
    this.initialized = true;
  }

  init() {
    const allModules = [
      ClickGUI,
      FPSCounter,
      Interface,
      Chat,
      Keystrokes,
      ToggleSprint,
      ArmorHUD,
   //   Hotbar,
    //  Coordinates,
      CPSCounter,
      FPSBooster,
      AdBlocker,
      Crosshair,
      Notifications,
      ArrayList
    ];
    
    allModules.forEach(mod => {
      this.moduleDefs.set(mod.name, mod);
      this.addModule(mod)
    });
  }

  addModule(mod) {
    if (!mod || typeof mod.name !== 'string') {
      throw new Error('Module must have a unique "name" property.');
    }
    const normalized = {
      description: '',
      category: 'Utility',
      enabled: false,
      onEnable() {},
      onDisable() {},
      onTick() {},
      onSettingUpdate() {},
      settings: [],
      x: mod.defaultX !== undefined ? mod.defaultX : null,
      y: mod.defaultY !== undefined ? mod.defaultY : null,
      ...mod,
    };
    
    delete normalized.defaultX;
    delete normalized.defaultY;

    normalized.settings = normalized.settings.map(s => ({
      description: '',
      ...s
    }));

    this.modules.set(normalized.name, normalized);
    return normalized;
  }

  enable(name) {
    const m = this.modules.get(name);
    if (m && !m.enabled) {
      m.enabled = true;
      try { m.onEnable(this); } catch (err) { console.error(`[ModuleManager] onEnable error in "${name}":`, err); }
      m._initialized = true;
      this.saveConfiguration();
      if (this.initialized && this.get('Notifications')?.enabled) {
        this.notifications.show({
            title: 'Module Enabled',
            message: `<b>${name}</b> has been enabled.`,
            type: 'success'
        });
      }
    }
  }

  disable(name) {
    const m = this.modules.get(name);
    if (m && m.enabled) {
      m.enabled = false;
      try { m.onDisable(this); } catch (err) { console.error(`[ModuleManager] onDisable error in "${name}":`, err); }
      this.saveConfiguration();
      if (this.initialized && name !== 'ClickGUI' && this.get('Notifications')?.enabled) {
        this.notifications.show({
            title: 'Module Disabled',
            message: `<b>${name}</b> has been disabled.`,
            type: 'error'
        });
      }
    }
  }

  toggle(name) {
    const m = this.modules.get(name);
    if (m) {
      m.enabled ? this.disable(name) : this.enable(name);
    }
  }

  updateModuleSetting(moduleName, settingId, value) {
    const m = this.modules.get(moduleName);
    if (!m) return;

    const setting = m.settings.find(s => s.id === settingId);
    if (setting) {
      setting.value = value;
      if (typeof m.onSettingUpdate === 'function') {
        try {
          m.onSettingUpdate(settingId, value, this);
        } catch (err) {
          console.error(`[ModuleManager] onSettingUpdate error in "${moduleName}":`, err);
        }
      }
      this.saveConfiguration();
    }
  }

  updateModulePosition(moduleName, x, y) {
    const m = this.modules.get(moduleName);
    if (m) {
      m.x = x;
      m.y = y;
      this.saveConfiguration();
    }
  }

  resetModuleSettings(moduleName) {
    const modDef = this.moduleDefs.get(moduleName);
    const currentMod = this.get(moduleName);

    if (!modDef || !currentMod) return;

    if (modDef.settings) {
      modDef.settings.forEach(defaultSetting => {
        this.updateModuleSetting(moduleName, defaultSetting.id, defaultSetting.value);
      });
    }

    this.updateModulePosition(moduleName, modDef.x || null, modDef.y || null);
  }

  get(name) {
    return this.modules.get(name);
  }

  list() {
    return Array.from(this.modules.values());
  }

  getModulesByCategory(category) {
    return this.list().filter(m => m.category === category);
  }

  ticker(now) {
    const dt = now - this.lastTick;
    if (dt >= this.tickInterval) {
      this.modules.forEach((m) => {
        if (m.enabled && typeof m.onTick === 'function') {
          try { m.onTick(dt, this); } catch (err) { console.error(`[ModuleManager] onTick error in "${m.name}":`, err); }
        }
      });
      this.lastTick = now;
    }
    requestAnimationFrame(this.ticker);
  }

  saveConfiguration() {
    if (!this.autoSave) return;
    this.forceSaveConfiguration();
  }

  forceSaveConfiguration() {
    const config = {
      meta: {
        autoSave: this.autoSave,
        autoLoad: this.autoLoad,
        theme: {
            primary: getComputedStyle(document.documentElement).getPropertyValue('--primary').trim(),
            panelBase: getComputedStyle(document.documentElement).getPropertyValue('--panel-base').trim(),
            panelOpacity: getComputedStyle(document.documentElement).getPropertyValue('--panel-opacity').trim()
        }
      }
    };
    for (const [name, mod] of this.modules.entries()) {
      config[name] = {
        enabled: mod.enabled,
        x: mod.x,
        y: mod.y,
        settings: mod.settings.map(s => ({ id: s.id, value: s.value }))
      };
    }
    Configuration.save(config);
  }

  loadConfiguration(configToLoad) {
    const config = configToLoad || Configuration.load();
    if (!config) return;

    if (config.meta) {
      this.autoSave = config.meta.autoSave ?? this.autoSave;
      this.autoLoad = config.meta.autoLoad ?? this.autoLoad;
      if (config.meta.theme && config.meta.theme.primary) {
        document.documentElement.style.setProperty('--primary', config.meta.theme.primary);
        document.documentElement.style.setProperty('--primary-dark', this.shadeColor(config.meta.theme.primary, -20));
      }
      if (config.meta.theme && config.meta.theme.panelBase) {
        document.documentElement.style.setProperty('--panel-base', config.meta.theme.panelBase);
      }
      if (config.meta.theme && config.meta.theme.panelOpacity) {
        document.documentElement.style.setProperty('--panel-opacity', config.meta.theme.panelOpacity);
      }
    }

    for (const [name, modConfig] of Object.entries(config)) {
      if (name === 'meta') continue;
      const mod = this.modules.get(name);
      if (mod) {
        mod.x = modConfig.x !== null && modConfig.x !== undefined ? modConfig.x : null;
        mod.y = modConfig.y !== null && modConfig.y !== undefined ? modConfig.y : null;

        if (modConfig.settings) {
          modConfig.settings.forEach(savedSetting => {
            const setting = mod.settings.find(s => s.id === savedSetting.id);
            if (setting && setting.value !== savedSetting.value) {
              setting.value = savedSetting.value;
              if (typeof mod.onSettingUpdate === 'function') {
                try {
                  mod.onSettingUpdate(setting.id, savedSetting.value, this);
                } catch (err) {
                  console.error(`[ModuleManager] onSettingUpdate error in "${name}":`, err);
                }
              }
            }
          });
        }
        
        // Restore enabled state (and trigger onEnable)
        if (modConfig.enabled && !mod.enabled) {
          this.enable(name);
        } else if (!modConfig.enabled && mod.enabled) {
          this.disable(name);
        }
      }
    }

    if (!this.initialized) {
        this.applyInitialStates();
    }
  }

  applyInitialStates() {
    this.modules.forEach((m) => {
      if (m.enabled && !m._initialized) {
        m.enabled = false;
        this.enable(m.name);
      }
    });
  }

  exportConfiguration() {
    const config = {};
    for (const [name, mod] of this.modules.entries()) {
      config[name] = {
        enabled: mod.enabled,
        x: mod.x,
        y: mod.y,
        settings: mod.settings.map(s => ({ id: s.id, value: s.value }))
      };
    }
    return config;
  }

  importConfiguration(configString) {
    try {
      const config = JSON.parse(configString);
      Configuration.save(config);
      this.loadConfiguration(config);
    } catch (err) {
      console.error('[Configuration] Error importing config:', err);
      alert('Invalid configuration file!');
    }
  }

  shadeColor(color, percent) {
    let R = parseInt(color.substring(1,3),16);
    let G = parseInt(color.substring(3,5),16);
    let B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    const RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    const GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    const BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
  }

  startHudVisibilityCheck() {
    if (this.hudVisibilityInterval) {
      clearInterval(this.hudVisibilityInterval);
    }
    this.hudVisibilityInterval = setInterval(() => {
      const hotbar = document.querySelector('.HotBarGameItemsContainer');
      const hudModules = this.list().filter(m => m.element && m.name !== 'ClickGUI');

      if (!hotbar) {
        hudModules.forEach(m => {
          if (m.element && !m.element.classList.contains('serenity-hidden')) {
            m.element.classList.add('serenity-hidden');
          }
        });
      } else {
        hudModules.forEach(m => {
          if (m.element && m.element.classList.contains('serenity-hidden')) {
            m.element.classList.remove('serenity-hidden');
          }
        });
      }
    }, 500);
  }
}

export default ModuleManager;
