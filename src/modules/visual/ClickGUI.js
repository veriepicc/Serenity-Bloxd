const ClickGUI = {
  name: 'ClickGUI',
  category: 'Visual',
  description: 'The main user interface for the client.',
  enabled: false,
  element: null,
  overlay: null,
  activeCategory: 'Visual',
  activeSettingsModule: null,
  isEditingHUD: false,
  activeHUDSettingsPopup: null,
  searchQuery: '',

  onEnable(manager) {
    if (!document.getElementById('font-awesome-link')) {
      const fontAwesomeLink = document.createElement('link');
      fontAwesomeLink.id = 'font-awesome-link';
      fontAwesomeLink.rel = 'stylesheet';
      fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
      document.head.appendChild(fontAwesomeLink);
    }
    
    this.createGUI(manager);
    setTimeout(() => {
      if (this.overlay) this.overlay.classList.add('visible');
      if (this.element) this.element.classList.add('visible');
    }, 50);
  },

  onDisable() {
    if (this.overlay) {
      this.overlay.classList.remove('visible');
      this.element.classList.remove('visible');
      
      setTimeout(() => {
        if (this.overlay) document.body.removeChild(this.overlay);
        if (this.element) document.body.removeChild(this.element);
        this.overlay = null;
        this.element = null;

        const fontAwesomeLink = document.getElementById('font-awesome-link');
        if (fontAwesomeLink) {
          document.head.removeChild(fontAwesomeLink);
        }
      }, 300);
    }
  },

  createGUI(manager) {
    this.overlay = document.createElement('div');
    this.overlay.className = 'serenity-overlay';
    document.body.appendChild(this.overlay);

    this.element = document.createElement('div');
    this.element.className = 'serenity-container';
    
    const sidebar = this.createSidebar(manager);
    this.element.appendChild(sidebar);
    
    const content = this.createContent(manager);
    this.element.appendChild(content);
    
    document.body.appendChild(this.element);
  },

  createSidebar(manager) {
    const sidebar = document.createElement('div');
    sidebar.className = 'serenity-sidebar';
    
    const logo = document.createElement('div');
    logo.className = 'serenity-logo';
    logo.innerHTML = `
      <h1>Serenity</h1>
      <span>CLIENT v1.0</span>
    `;
    sidebar.appendChild(logo);
    
    const categories = manager.categories;
    
    const categoryIcons = {
      'Visual': '<i class="fas fa-eye"></i>',
      'Utility': '<i class="fas fa-cog"></i>',
      'Combat': '<i class="fas fa-crosshairs"></i>',
      'Player': '<i class="fas fa-user"></i>',
      'Movement': '<i class="fas fa-running"></i>',
    };

    categories.forEach(category => {
      const categoryBtn = document.createElement('div');
      categoryBtn.className = `serenity-category ${category === this.activeCategory ? 'active' : ''}`;
      
      const icon = categoryIcons[category] || categoryIcons['Utility'];

      categoryBtn.innerHTML = `
        <span class="serenity-category-icon">${icon}</span>
        ${category}
      `;
      
      categoryBtn.addEventListener('click', () => {
        document.querySelectorAll('.serenity-category').forEach(el => {
          el.classList.remove('active');
        });
        

        categoryBtn.classList.add('active');
        
        this.activeCategory = category;
        this.activeSettingsModule = null; 
        this.searchQuery = '';
        this.closeHUDSettingsPopup(); 
        this.updateContent(manager);
      });
      
      sidebar.appendChild(categoryBtn);
    });

  
    const hudEditorBtn = document.createElement('div');
    hudEditorBtn.className = 'serenity-category serenity-hud-editor-btn';
    hudEditorBtn.innerHTML = `<i class="fas fa-edit"></i> HUD Editor`;
    hudEditorBtn.addEventListener('click', () => {
      this.isEditingHUD = true;
      this.renderHUDeditor(manager);
    });
    sidebar.appendChild(hudEditorBtn);

    const configBtn = document.createElement('div');
    configBtn.className = 'serenity-category serenity-config-btn';
    configBtn.innerHTML = `<i class="fas fa-cogs"></i> Configuration`;
    configBtn.addEventListener('click', () => {
      this.element.style.display = 'none';
      this.showConfigPopup(manager);
    });
    sidebar.appendChild(configBtn);
    
    return sidebar;
  },

  renderHUDeditor(manager) {
    this.element.style.display = 'none';

    const editorOverlay = document.createElement('div');
    editorOverlay.className = 'serenity-hud-editor-overlay';
    document.body.appendChild(editorOverlay);
    const grid = document.createElement('div');
    grid.className = 'serenity-hud-grid';
    editorOverlay.appendChild(grid);
    

    manager.list().forEach(mod => {
      if (mod.enabled && mod.element) {
        mod.element.style.zIndex = 10001;
        this.makeElementDraggable(mod.element, mod, manager);
      }
    });

    // Add Done button
    const doneBtn = document.createElement('button');
    doneBtn.className = 'serenity-hud-done-btn';
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', () => {
      // Cleanup
      document.body.removeChild(editorOverlay);
      this.element.style.display = 'flex';
      this.isEditingHUD = false;
      this.closeHUDSettingsPopup();

      // Clean up HUD elements
      manager.list().forEach(mod => {
        if (mod.enabled && mod.element) {
          mod.element.style.zIndex = '';
          mod.element.style.cursor = '';
          mod.element.onmousedown = null;
        }
      });
      
    });
    editorOverlay.appendChild(doneBtn);
  },

  makeElementDraggable(element, module, manager) {
    if (!element) return;
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    const dragMouseDown = (e) => {
      e.preventDefault();
      
      pos3 = e.clientX;
      pos4 = e.clientY;

      // When dragging starts, switch to pixel-based positioning
      // to prevent conflicts with properties like 'bottom' or 'right'.
      const rect = element.getBoundingClientRect();
      element.style.top = `${rect.top}px`;
      element.style.left = `${rect.left}px`;
      element.style.bottom = 'auto';
      element.style.right = 'auto';
      
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };
    
    const elementDrag = (e) => {
      e.preventDefault();
      // Calculate the new cursor position
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // Set the element's new position
      const newTop = element.offsetTop - pos2;
      const newLeft = element.offsetLeft - pos1;
      element.style.top = `${newTop}px`;
      element.style.left = `${newLeft}px`;

      // Move popup with the module
      if (this.activeHUDSettingsPopup && this.activeHUDSettingsPopup.moduleName === module.name) {
        this.activeHUDSettingsPopup.element.style.top = `${newTop}px`;
        this.activeHUDSettingsPopup.element.style.left = `${newLeft + element.offsetWidth + 10}px`;
      }
    };
    
    const closeDragElement = () => {
      document.onmouseup = null;
      document.onmousemove = null;
      manager.updateModulePosition(module.name, element.offsetLeft, element.offsetTop);
    };

    element.onmousedown = dragMouseDown;
    element.oncontextmenu = (e) => {
      e.preventDefault();
      this.showHUDSettingsPopup(e, module, manager, element);
    };
    element.style.cursor = 'move';
  },

  showHUDSettingsPopup(e, module, manager, element) {
    this.closeHUDSettingsPopup(); 

    const popup = document.createElement('div');
    popup.className = 'serenity-hud-settings-popup';
    
    const rect = element.getBoundingClientRect();
    popup.style.top = `${rect.top}px`;
    popup.style.left = `${rect.left + rect.width + 10}px`;

    const header = document.createElement('div');
    header.className = 'serenity-hud-popup-header';
    const title = document.createElement('span');
    title.textContent = module.name;
    const closeBtn = document.createElement('button');
    closeBtn.className = 'serenity-hud-popup-close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => this.closeHUDSettingsPopup();
    header.appendChild(title);
    header.appendChild(closeBtn);
    popup.appendChild(header);

    const settingsContainer = document.createElement('div');
    settingsContainer.className = 'serenity-hud-popup-body';
    module.settings.forEach(setting => {
      const settingElement = this.createSettingElement(module, setting, manager);
      if (settingElement) {
        settingsContainer.appendChild(settingElement);
      }
    });
    popup.appendChild(settingsContainer);

    document.body.appendChild(popup);
    this.activeHUDSettingsPopup = { element: popup, moduleName: module.name };
  },

  closeHUDSettingsPopup() {
    if (this.activeHUDSettingsPopup) {
      document.body.removeChild(this.activeHUDSettingsPopup.element);
      this.activeHUDSettingsPopup = null;
    }
  },

  createContent(manager) {
    const content = document.createElement('div');
    content.className = 'serenity-content';
    
    // Initial content population
    this.populateModulesContent(content, manager);
    
    return content;
  },

  updateContent(manager) {
    const content = this.element.querySelector('.serenity-content');
    content.innerHTML = '';

    if (this.activeSettingsModule) {
      this.populateSettingsContent(content, manager);
    } else {
      this.populateModulesContent(content, manager);
    }
  },

  showConfigPopup(manager) {
    this.closeConfigPopup(); 

    const popup = document.createElement('div');
    popup.className = 'serenity-config-popup';

    const header = document.createElement('div');
    header.className = 'serenity-config-popup-header';
    header.textContent = 'Configuration';
    popup.appendChild(header);
    
    const body = document.createElement('div');
    body.className = 'serenity-config-popup-body';

    const settingsContainer = document.createElement('div');
    settingsContainer.className = 'serenity-config-settings';

    // Auto Save Toggle
    const autoSaveSetting = this.createToggleSetting('Auto Save', 'Automatically save changes.', manager.autoSave, (value) => {
      manager.autoSave = value;
    });
    settingsContainer.appendChild(autoSaveSetting);

    // Auto Load Toggle
    const autoLoadSetting = this.createToggleSetting('Auto Load', 'Automatically load config on startup.', manager.autoLoad, (value) => {
      manager.autoLoad = value;
    });
    settingsContainer.appendChild(autoLoadSetting);
    
    body.appendChild(settingsContainer);

    const manualActions = document.createElement('div');
    manualActions.className = 'serenity-config-manual-actions';

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.onclick = () => {
      manager.forceSaveConfiguration();
      saveBtn.textContent = 'Saved!';
      setTimeout(() => { saveBtn.textContent = 'Save'; }, 2000);
    };
    manualActions.appendChild(saveBtn);
    
    const loadBtn = document.createElement('button');
    loadBtn.textContent = 'Load';
    loadBtn.onclick = () => {
      manager.loadConfiguration();
      this.closeConfigPopup();
      this.updateContent(manager);
      this.element.style.display = 'flex';
    };
    manualActions.appendChild(loadBtn);
    body.appendChild(manualActions);

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Paste config here...';
    body.appendChild(textarea);
    popup.appendChild(body);
    
    const importBtn = document.createElement('button');
    importBtn.textContent = 'Import';
    importBtn.onclick = () => {
      try {
        manager.importConfiguration(textarea.value);
        this.closeConfigPopup();
        this.updateContent(manager);
        this.element.style.display = 'flex';
      } catch (error) {
        console.error("Failed to import configuration:", error);
        alert("Invalid configuration format!");
      }
    };
    
    const exportBtn = document.createElement('button');
    exportBtn.textContent = 'Export';
    exportBtn.onclick = () => {
      const configStr = manager.exportConfiguration();
      navigator.clipboard.writeText(configStr);
      exportBtn.textContent = 'Copied!';
      setTimeout(() => { exportBtn.textContent = 'Export'; }, 2000);
    };

    const backBtn = document.createElement('button');
    backBtn.className = 'serenity-config-back-btn';
    backBtn.textContent = 'Back';
    backBtn.onclick = () => {
      this.closeConfigPopup();
      this.element.style.display = 'flex';
    };

    const footer = document.createElement('div');
    footer.className = 'serenity-config-popup-footer';
    
    const rightActions = document.createElement('div');
    rightActions.className = 'serenity-config-popup-actions';
    rightActions.appendChild(importBtn);
    rightActions.appendChild(exportBtn);

    footer.appendChild(backBtn);
    footer.appendChild(rightActions);
    
    popup.appendChild(footer);

    document.body.appendChild(popup);
  },

  createToggleSetting(name, description, initialValue, onChange) {
    const settingWrapper = document.createElement('div');
    settingWrapper.className = 'serenity-config-toggle-setting';

    const infoContainer = document.createElement('div');
    infoContainer.className = 'serenity-setting-info';
    const label = document.createElement('label');
    label.className = 'serenity-setting-label';
    label.textContent = name;
    const desc = document.createElement('p');
    desc.className = 'serenity-setting-description';
    desc.textContent = description;
    infoContainer.appendChild(label);
    infoContainer.appendChild(desc);

    const controlContainer = document.createElement('div');
    controlContainer.className = 'serenity-setting-control';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = initialValue;
    checkbox.className = 'serenity-checkbox';
    checkbox.addEventListener('change', (e) => {
      onChange(e.target.checked);
    });
    controlContainer.appendChild(checkbox);
    
    settingWrapper.appendChild(infoContainer);
    settingWrapper.appendChild(controlContainer);

    return settingWrapper;
  },

  closeConfigPopup() {
    const existingPopup = document.querySelector('.serenity-config-popup');
    if (existingPopup) {
      document.body.removeChild(existingPopup);
    }
  },

  populateModulesContent(content, manager) {
    const header = document.createElement('div');
    header.className = 'serenity-section-header';
    
    const title = document.createElement('span');
    title.textContent = this.activeCategory;
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'serenity-search-bar';
    searchInput.placeholder = 'Search...';
    searchInput.value = this.searchQuery;
    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.filterAndRenderModules(manager);
    });

    header.appendChild(title);
    header.appendChild(searchInput);
    content.appendChild(header);

    const modulesContainer = document.createElement('div');
    modulesContainer.className = 'serenity-modules';
    content.appendChild(modulesContainer);

    this.filterAndRenderModules(manager);
  },

  filterAndRenderModules(manager) {
    const modulesContainer = this.element.querySelector('.serenity-modules');
    if (!modulesContainer) return;

    modulesContainer.innerHTML = '';
    
    const categoryModules = manager.getModulesByCategory(this.activeCategory);
    const filteredModules = categoryModules.filter(mod =>
      mod.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    
    filteredModules.forEach(mod => {
      const moduleCard = this.createModuleCard(mod, manager);
      modulesContainer.appendChild(moduleCard);
    });
  },

  createModuleCard(mod, manager) {
    const card = document.createElement('div');
    card.className = 'serenity-module';
    
    const header = document.createElement('div');
    header.className = 'serenity-module-header';
    
    const name = document.createElement('div');
    name.className = 'serenity-module-name';
    name.textContent = mod.name;
    header.appendChild(name);

    const controls = document.createElement('div');
    controls.className = 'serenity-module-controls';

    if (mod.settings.length > 0) {
      const settingsBtn = document.createElement('button');
      settingsBtn.className = 'serenity-module-settings-btn';
      settingsBtn.innerHTML = '<i class="fas fa-cog"></i>';
      settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.activeSettingsModule = mod;
        this.updateContent(manager);
      });
      controls.appendChild(settingsBtn);
    }
    
    const toggle = document.createElement('div');
    toggle.className = `serenity-module-toggle ${mod.enabled ? 'enabled' : ''}`;
    toggle.innerHTML = '<span class="serenity-toggle-slider"></span>';
    toggle.addEventListener('click', () => {
      manager.toggle(mod.name);
      toggle.classList.toggle('enabled');
    });
    controls.appendChild(toggle);
    header.appendChild(controls);
    
    card.appendChild(header);
    
    if (mod.description) {
      const description = document.createElement('div');
      description.className = 'serenity-module-description';
      description.textContent = mod.description;
      card.appendChild(description);
    }
    
    return card;
  },

  populateSettingsContent(content, manager) {
    const mod = this.activeSettingsModule;
    if (!mod) return;

    const section = document.createElement('div');
    section.className = 'serenity-section';

    // Header with back button
    const header = document.createElement('div');
    header.className = 'serenity-settings-header';
    
    const backBtn = document.createElement('button');
    backBtn.className = 'serenity-back-btn';
    backBtn.innerHTML = '<i class="fas fa-chevron-left"></i> Back';
    backBtn.addEventListener('click', () => {
      this.activeSettingsModule = null;
      this.updateContent(manager);
    });

    const title = document.createElement('span');
    title.textContent = `${mod.name} Settings`;

    header.appendChild(backBtn);
    header.appendChild(title);
    section.appendChild(header);

    // Settings container
    const settingsContainer = document.createElement('div');
    settingsContainer.className = 'serenity-module-settings';
    
    mod.settings.forEach(setting => {
      const settingElement = this.createSettingElement(mod, setting, manager);
      if (settingElement) {
        // Handle conditional visibility
        if (setting.condition) {
          const isVisible = setting.condition(mod.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {}));
          settingElement.style.display = isVisible ? '' : 'none';
        }
        settingsContainer.appendChild(settingElement);
      }
    });
    
    section.appendChild(settingsContainer);
    content.appendChild(section);
  },

  createSettingElement(module, setting, manager) {
    const settingWrapper = document.createElement('div');
    settingWrapper.className = 'serenity-setting';
    settingWrapper.dataset.settingId = setting.id;

    const infoContainer = document.createElement('div');
    infoContainer.className = 'serenity-setting-info';

    const label = document.createElement('label');
    label.className = 'serenity-setting-label';
    label.textContent = setting.name;
    infoContainer.appendChild(label);

    if (setting.description) {
      const desc = document.createElement('p');
      desc.className = 'serenity-setting-description';
      desc.textContent = setting.description;
      infoContainer.appendChild(desc);
    }
    
    settingWrapper.appendChild(infoContainer);

    const controlContainer = document.createElement('div');
    controlContainer.className = 'serenity-setting-control';
    
    switch (setting.type) {
      case 'boolean':
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = setting.value;
        checkbox.className = 'serenity-checkbox';
        checkbox.addEventListener('change', (e) => {
          manager.updateModuleSetting(module.name, setting.id, e.target.checked);
          this.updateConditionalSettings(module, manager);
        });
        controlContainer.appendChild(checkbox);
        break;
      case 'slider':
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = setting.min;
        slider.max = setting.max;
        slider.step = setting.step;
        slider.value = setting.value;
        slider.className = 'serenity-slider';
        slider.addEventListener('input', (e) => {
          manager.updateModuleSetting(module.name, setting.id, parseFloat(e.target.value));
        });
        controlContainer.appendChild(slider);
        break;
      case 'select':
        const select = document.createElement('select');
        select.className = 'serenity-select';
        setting.options.forEach(opt => {
          const option = document.createElement('option');
          option.value = opt;
          option.textContent = opt;
          if (setting.value === opt) option.selected = true;
          select.appendChild(option);
        });
        select.addEventListener('change', (e) => {
          manager.updateModuleSetting(module.name, setting.id, e.target.value);
          this.updateConditionalSettings(module, manager);
        });
        controlContainer.appendChild(select);
        break;
      case 'text':
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.value = setting.value;
        textInput.className = 'serenity-text-input';
        textInput.addEventListener('change', (e) => {
          manager.updateModuleSetting(module.name, setting.id, e.target.value);
        });
        controlContainer.appendChild(textInput);
        break;
      case 'color':
        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.value = setting.value;
        colorInput.className = 'serenity-color-picker';
        colorInput.addEventListener('input', (e) => {
          manager.updateModuleSetting(module.name, setting.id, e.target.value);
        });
        controlContainer.appendChild(colorInput);
        break;
    }
    
    settingWrapper.appendChild(controlContainer);
    return settingWrapper;
  },

  updateConditionalSettings(module, manager) {
    const settingsMap = module.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
    const settingsContainer = this.element.querySelector('.serenity-module-settings');
    
    module.settings.forEach(s => {
      if (s.condition) {
        const settingElement = settingsContainer.querySelector(`[data-setting-id="${s.id}"]`);
        if (settingElement) {
          settingElement.style.display = s.condition(settingsMap) ? '' : 'none';
        }
      }
    });
  }
};

export default ClickGUI;
