const FPSBooster = {
  name: 'FPSBooster',
  category: 'Utility',
  description: 'Optimizes game performance by adjusting resolution and other settings.',
  enabled: false,
  canvas: null,

  settings: [
    {
      id: 'resolutionScale',
      name: 'Resolution Scale',
      description: 'Lower values can improve performance at the cost of quality.',
      type: 'slider',
      value: 1,
      min: 0.1,
      max: 1.0,
      step: 0.05
    }
  ],

  onEnable(manager) {
    this.canvas = document.getElementById('noa-canvas');
    if (!this.canvas) {
      console.error('[FPSBooster] Could not find game canvas: #noa-canvas');
      manager.disable(this.name);
      return;
    }

    if (!this.canvas.dataset.originalWidth) {
      this.canvas.dataset.originalWidth = this.canvas.width;
      this.canvas.dataset.originalHeight = this.canvas.height;
    }
  },

  onDisable(manager) {
    if (this.canvas && this.canvas.dataset.originalWidth) {
      this.canvas.width = parseInt(this.canvas.dataset.originalWidth, 10);
      this.canvas.height = parseInt(this.canvas.dataset.originalHeight, 10);
      delete this.canvas.dataset.originalWidth;
      delete this.canvas.dataset.originalHeight;
    }
    if (this.canvas) {
        this.canvas.style.width = '';
        this.canvas.style.height = '';
    }
    this.canvas = null;
  },
  
  onSettingUpdate(settingId, value, manager) {
    // onTick will handle it
  },

  onTick(dt, manager) {
    if (this.canvas && this.enabled) {
      this.applySettings(manager);
    }
  },

  applySettings(manager) {
    if (!this.canvas || !this.canvas.dataset.originalWidth) return;
    
    const settings = manager.get(this.name).settings;
    const resolutionScale = settings.find(s => s.id === 'resolutionScale').value;
    const originalWidth = parseInt(this.canvas.dataset.originalWidth, 10);
    const originalHeight = parseInt(this.canvas.dataset.originalHeight, 10);

    const newWidth = Math.round(originalWidth * resolutionScale);
    const newHeight = Math.round(originalHeight * resolutionScale);

    if (this.canvas.width !== newWidth) {
      this.canvas.width = newWidth;
    }
    if (this.canvas.height !== newHeight) {
      this.canvas.height = newHeight;
    }

    if (this.canvas.style.width !== '100%') {
        this.canvas.style.width = '100%';
    }
    if (this.canvas.style.height !== '100%') {
        this.canvas.style.height = '100%';
    }
  }
};

export default FPSBooster; 