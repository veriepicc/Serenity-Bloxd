import ClickGUI from './modules/visual/ClickGUI';
import FPSCounter from './modules/visual/FPSCounter';
import Keystrokes from './modules/combat/Keystrokes';
import ToggleSprint from './modules/movement/ToggleSprint';
import ArmorStatus from './modules/player/ArmorStatus';
import Coordinates from './modules/utility/Coords';
import CPSCounter from './modules/player/CPSCounter';
import Configuration from './Configuration';

class ModuleManager {
  constructor({ tickRate = 60 } = {}) {
    this.modules = new Map();
    this.categories = [
      'Combat', 'Movement', 'Player', 'Visual', 'Utility'
    ];
    this.autoSave = true;
    this.autoLoad = true; /* default to true so configuration loads on startup */
    
    this.tickInterval = 1000 / tickRate;
    this.lastTick = performance.now();
    this.ticker = this.ticker.bind(this);
    
    this.init();
    if (this.autoLoad) {
      this.loadConfiguration();
    }

    // Ensure modules marked as enabled are properly initialized
    this.applyInitialStates();

    requestAnimationFrame(this.ticker);
  }

  init() {
    const allModules = [
      ClickGUI,
      FPSCounter,
      Keystrokes,
      ToggleSprint,
      ArmorStatus,
      Coordinates,
      CPSCounter
    ];
    
    allModules.forEach(mod => this.addModule(mod));
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
      x: null,
      y: null,
      ...mod,
    };

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
    }
  }

  disable(name) {
    const m = this.modules.get(name);
    if (m && m.enabled) {
      m.enabled = false;
      try { m.onDisable(this); } catch (err) { console.error(`[ModuleManager] onDisable error in "${name}":`, err); }
      this.saveConfiguration();
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
          m.onSettingUpdate(settingId, value);
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
    }

    for (const [name, modConfig] of Object.entries(config)) {
      if (name === 'meta') continue;
      const mod = this.modules.get(name);
      if (mod) {
        // Restore position
        mod.x = modConfig.x;
        mod.y = modConfig.y;

        // Restore settings
        if (modConfig.settings) {
          modConfig.settings.forEach(savedSetting => {
            const setting = mod.settings.find(s => s.id === savedSetting.id);
            if (setting && setting.value !== savedSetting.value) {
              setting.value = savedSetting.value;
              if (typeof mod.onSettingUpdate === 'function') {
                try {
                  mod.onSettingUpdate(setting.id, savedSetting.value);
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

    // After applying configuration, ensure enabled modules are initialized
    this.applyInitialStates();
  }

  applyInitialStates() {
    this.modules.forEach((m) => {
      if (m.enabled && !m._initialized) {
        // Temporarily mark as disabled so enable() triggers onEnable lifecycle
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
    const json = JSON.stringify(config);
    return btoa(json);
  }

  importConfiguration(encodedConfig) {
    try {
      const json = atob(encodedConfig);
      const config = JSON.parse(json);
      Configuration.save(config);
      this.loadConfiguration(config);
    } catch (err) {
      console.error('[Configuration] Error importing config:', err);
      alert('Invalid configuration string!');
    }
  }
}

export default ModuleManager;
