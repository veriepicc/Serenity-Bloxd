const CONFIG_KEY = 'loglevel';

class Configuration {
  static save(config) {
    try {
      const json = JSON.stringify(config);
      const encoded = btoa(json);
      localStorage.setItem(CONFIG_KEY, encoded);
    } catch (err) {
      console.error('[Configuration] Error saving config:', err);
    }
  }

  static load() {
    try {
      const encoded = localStorage.getItem(CONFIG_KEY);
      if (!encoded) return null;

      const json = atob(encoded);
      return JSON.parse(json);
    } catch (err) {
      console.error('[Configuration] Error loading config:', err);
      localStorage.removeItem(CONFIG_KEY);
      return null;
    }
  }

  static reset() {
    try {
      localStorage.removeItem(CONFIG_KEY);
    } catch (err) {
      console.error('[Configuration] Error resetting config:', err);
    }
  }
}

export default Configuration; 