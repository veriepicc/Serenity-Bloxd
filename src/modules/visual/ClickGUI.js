const ClickGUI = {
  name: 'ClickGUI',
  category: 'Visual',
  description: 'The main user interface for the client.',
  enabled: true,
  element: null,
  overlay: null,
  activeCategory: 'Visual',
  activeSettingsModule: null,
  isEditingHUD: false,
  activeHUDSettingsPopup: null,
  searchQuery: '',
  isGuiOpen: false,
  isCleaningUp: false,
  activeConfigTab: 'Themes',
  activeView: 'modules',

  onEnable(manager) {
    if (this.isCleaningUp || this.element) return;

    this.isGuiOpen = true; 
    document.body.classList.add('serenity-no-scroll');
    if (document.pointerLockElement) {
      document.exitPointerLock();
    }

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

  onDisable(manager) {
    this.isGuiOpen = false;
    this.exitHUDeditor(manager);
    document.body.classList.remove('serenity-no-scroll');

    const gameCanvas = document.getElementById('noa-canvas');
    if (gameCanvas && !document.pointerLockElement) {
      gameCanvas.requestPointerLock();
      gameCanvas.click();
    }
    
    this.cleanup();
  },

  cleanup() {
    if (this.overlay && !this.isCleaningUp) {
      this.isCleaningUp = true;
      this.overlay.classList.remove('visible');
      this.element.classList.remove('visible');
      
      setTimeout(() => {
        if (this.overlay) document.body.removeChild(this.overlay);
        if (this.element) document.body.removeChild(this.element);
        this.overlay = null;
        this.element = null;
        this.isCleaningUp = false;

        document.body.classList.remove('serenity-no-scroll');

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
    configBtn.innerHTML = `<i class="fas fa-cogs"></i> Settings`;
    configBtn.addEventListener('click', () => {
      this.activeView = 'settings';
      this.updateContent(manager);
    });
    sidebar.appendChild(configBtn);
    
    return sidebar;
  },

  exitHUDeditor(manager) {
    if (!this.isEditingHUD) return;

    const editorOverlay = document.querySelector('.serenity-hud-editor-overlay');
    if (editorOverlay) {
        document.body.removeChild(editorOverlay);
    }
    
    this.isEditingHUD = false;
    this.closeHUDSettingsPopup();

    if (this.overlay) {
        this.overlay.style.zIndex = '9998';
    }
    this.element.style.display = 'flex';
    this.style.pointerEvents = 'auto';

    manager.list().forEach(mod => {
      if (mod.enabled && mod.element) {
        mod.element.style.zIndex = mod.name === 'ArmorHUD' || mod.name === 'CPSCounter' || mod.name === 'FPSCounter' || mod.name === 'Interface' ? 9997 : '';
        mod.element.style.pointerEvents = 'none';
        mod.element.style.cursor = '';
        mod.element.onmousedown = null;
      }
    });
  },

  renderHUDeditor(manager) {
    this.element.style.display = 'none';
    if (this.overlay) {
        this.overlay.style.zIndex = '-1';
    }

    const editorOverlay = document.createElement('div');
    editorOverlay.className = 'serenity-hud-editor-overlay';
    document.body.appendChild(editorOverlay);
    const grid = document.createElement('div');
    grid.className = 'serenity-hud-grid';
    editorOverlay.appendChild(grid);
    

    manager.list().forEach(mod => {
      if (mod.enabled && mod.element) {
        mod.element.style.zIndex = 10001;
        mod.element.style.pointerEvents = 'auto';
        this.makeElementDraggable(mod.element, mod, manager);
      }
    });

    // Add Done button
    const doneBtn = document.createElement('button');
    doneBtn.className = 'serenity-hud-done-btn';
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', () => {
      this.exitHUDeditor(manager);
    });
    editorOverlay.appendChild(doneBtn);
  },

  makeElementDraggable(element, module, manager) {
    if (!element || module.name === 'ClickGUI') return;
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
      let newTop = element.offsetTop - pos2;
      let newLeft = element.offsetLeft - pos1;

      // Get screen and element dimensions
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;

      // Add boundary checks to prevent going off-screen
      newLeft = Math.max(0, Math.min(newLeft, screenWidth - elementWidth));
      newTop = Math.max(0, Math.min(newTop, screenHeight - elementHeight));

      element.style.top = `${newTop}px`;
      element.style.left = `${newLeft}px`;

      // Move popup with the module and check its boundaries
      if (this.activeHUDSettingsPopup && this.activeHUDSettingsPopup.moduleName === module.name) {
        const popup = this.activeHUDSettingsPopup.element;
        const popupWidth = popup.offsetWidth;
        let popupLeft = newLeft + elementWidth + 10;

        // Flip popup to the other side if it goes off-screen
        if (popupLeft + popupWidth > screenWidth) {
          popupLeft = newLeft - popupWidth - 10;
        }
        
        popup.style.top = `${newTop}px`;
        popup.style.left = `${popupLeft}px`;
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

    const footer = document.createElement('div');
    footer.className = 'serenity-hud-popup-footer';
    const resetBtn = document.createElement('button');
    resetBtn.className = 'serenity-hud-popup-reset-btn';
    resetBtn.textContent = 'Reset to Defaults';
    resetBtn.onclick = () => {
      manager.resetModuleSettings(module.name);
      this.showHUDSettingsPopup(e, manager.get(module.name), manager, element);
    };
    footer.appendChild(resetBtn);
    popup.appendChild(footer);

    document.body.appendChild(popup);
    
    const rect = element.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const popupWidth = popup.offsetWidth;
    let popupLeft = rect.left + rect.width + 10;

    // Check if popup goes off-screen
    if (popupLeft + popupWidth > screenWidth) {
      popupLeft = rect.left - popupWidth - 10;
    }

    popup.style.top = `${rect.top}px`;
    popup.style.left = `${popupLeft}px`;

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

    if (this.activeView === 'settings') {
      this.element.classList.add('settings-view-active');
    } else {
      this.element.classList.remove('settings-view-active');
    }

    if (this.activeSettingsModule) {
      this.populateSettingsContent(content, manager);
    } else if (this.activeView === 'settings') {
      this.renderSettingsScreen(content, manager);
    } else {
      this.populateModulesContent(content, manager);
    }
  },

  renderSettingsScreen(content, manager) {
    const header = document.createElement('div');
    header.className = 'serenity-settings-header';
    
    const backBtn = document.createElement('button');
    backBtn.className = 'serenity-back-btn';
    backBtn.innerHTML = '<i class="fas fa-chevron-left"></i> Back';
    backBtn.addEventListener('click', () => {
        this.activeView = 'modules';
        this.activeSettingsModule = null;
        this.updateContent(manager);
    });
    
    const title = document.createElement('span');
    title.textContent = 'Settings';

    header.appendChild(backBtn);
    header.appendChild(title);
    content.appendChild(header);

    const settingsContainer = document.createElement('div');
    settingsContainer.className = 'serenity-config-screen-content';

    const tabs = document.createElement('div');
    tabs.className = 'serenity-config-tabs-vertical';
    tabs.innerHTML = `
        <button class="serenity-config-tab active" data-tab="Themes">Themes</button>
        <button class="serenity-config-tab" data-tab="Config">Config</button>
        <button class="serenity-config-tab" data-tab="Scripting">Scripting</button>
    `;
    settingsContainer.appendChild(tabs);
    
    const tabContent = document.createElement('div');
    tabContent.className = 'serenity-config-tab-content';
    settingsContainer.appendChild(tabContent);

    content.appendChild(settingsContainer);

    tabs.querySelectorAll('.serenity-config-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.querySelectorAll('.serenity-config-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            this.activeConfigTab = tab.dataset.tab;
            this.renderConfigContent(manager);
        });
    });

    this.renderConfigContent(manager);
  },

  renderConfigContent(manager) {
    const content = this.element.querySelector('.serenity-config-tab-content');
    if (!content) return;
    content.innerHTML = '';

    switch (this.activeConfigTab) {
        case 'Themes':
            this.renderThemesContent(content, manager);
            break;
        case 'Config':
            this.renderConfigSubContent(content, manager);
            break;
        case 'Scripting':
            this.renderScriptingContent(content, manager);
            break;
    }
  },

  renderThemesContent(content, manager) {
    const themeContainer = document.createElement('div');
    themeContainer.className = 'serenity-theme-editor';

    // -- Section: Accent Color --
    const accentHeader = this.createSectionHeader('Accent Color', 'Sets the main color for UI elements.');
    themeContainer.appendChild(accentHeader);

    const accentControl = document.createElement('div');
    accentControl.className = 'serenity-theme-control';
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.className = 'serenity-theme-color-picker';
    colorPicker.value = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    
    colorPicker.addEventListener('input', (e) => {
        const newColor = e.target.value;
        document.documentElement.style.setProperty('--primary', newColor);
        // You might need a more robust way to handle the darker shade
        document.documentElement.style.setProperty('--primary-dark', this.shadeColor(newColor, -20));
        manager.saveConfiguration();
    });
    accentControl.appendChild(colorPicker);
    themeContainer.appendChild(accentControl);

    // -- Section: Panel Style --
    const panelHeader = this.createSectionHeader('Panel Style', 'Customize the look of UI backgrounds.');
    themeContainer.appendChild(panelHeader);

    const panelControls = document.createElement('div');
    panelControls.className = 'serenity-theme-panel-controls';

    // Panel Color
    const panelColorControl = document.createElement('div');
    panelColorControl.className = 'serenity-theme-control-group';
    panelColorControl.innerHTML = `<label>Panel Color</label>`;
    const panelColorPicker = document.createElement('input');
    panelColorPicker.type = 'color';
    panelColorPicker.className = 'serenity-theme-color-picker';
    const initialPanelColor = getComputedStyle(document.documentElement).getPropertyValue('--panel-base').trim();
    panelColorPicker.value = initialPanelColor;

    panelColorPicker.addEventListener('input', (e) => {
        document.documentElement.style.setProperty('--panel-base', e.target.value);
        manager.saveConfiguration();
    });
    panelColorControl.appendChild(panelColorPicker);
    panelControls.appendChild(panelColorControl);

    // Panel Opacity
    const panelOpacityControl = document.createElement('div');
    panelOpacityControl.className = 'serenity-theme-control-group';
    panelOpacityControl.innerHTML = `<label>Panel Opacity</label>`;
    const panelOpacitySlider = document.createElement('input');
    panelOpacitySlider.type = 'range';
    panelOpacitySlider.className = 'serenity-slider';
    panelOpacitySlider.min = 0;
    panelOpacitySlider.max = 1;
    panelOpacitySlider.step = 0.01;
    const initialOpacity = getComputedStyle(document.documentElement).getPropertyValue('--panel-opacity').trim();
    panelOpacitySlider.value = initialOpacity;

    panelOpacitySlider.addEventListener('input', (e) => {
        document.documentElement.style.setProperty('--panel-opacity', e.target.value);
        manager.saveConfiguration();
    });
    panelOpacityControl.appendChild(panelOpacitySlider);
    panelControls.appendChild(panelOpacityControl);

    themeContainer.appendChild(panelControls);

    // -- Section: Pre-made Themes --
    const themesHeader = this.createSectionHeader('Themes', 'Select from a pre-made color scheme.');
    themeContainer.appendChild(themesHeader);

    const themesGrid = document.createElement('div');
    themesGrid.className = 'serenity-themes-grid';
    
    const themes = [
        { name: 'Serenity', color: '#5E72EB' },
        { name: 'Sunset', color: '#E54B4B' },
        { name: 'Emerald', color: '#3f9a56' },
        { name: 'Goldenrod', color: '#cda34a' },
        { name: 'Amethyst', color: '#9b59b6' },
    ];

    themes.forEach(theme => {
        const themeCard = document.createElement('div');
        themeCard.className = 'serenity-theme-card';
        themeCard.innerHTML = `<div class="serenity-theme-preview" style="background-color: ${theme.color};"></div><span>${theme.name}</span>`;
        themeCard.addEventListener('click', () => {
            document.documentElement.style.setProperty('--primary', theme.color);
            document.documentElement.style.setProperty('--primary-dark', this.shadeColor(theme.color, -20));
            colorPicker.value = theme.color;
            manager.saveConfiguration();
        });
        themesGrid.appendChild(themeCard);
    });

    themeContainer.appendChild(themesGrid);
    content.appendChild(themeContainer);
  },

  createSectionHeader(title, subtitle) {
      const header = document.createElement('div');
      header.className = 'serenity-section-subheader';
      header.innerHTML = `
        <div class="serenity-subheader-title">${title}</div>
        <div class="serenity-subheader-subtitle">${subtitle}</div>
      `;
      return header;
  },
    
  renderConfigSubContent(content, manager) {
    const configContainer = document.createElement('div');
    configContainer.className = 'serenity-config-editor';

    // --- LEFT COLUMN ---
    const leftColumn = document.createElement('div');
    leftColumn.className = 'serenity-config-column';

    // -- Section: General --
    const generalHeader = this.createSectionHeader('General', 'Manage how your configuration is handled.');
    leftColumn.appendChild(generalHeader);

    const settingsGrid = document.createElement('div');
    settingsGrid.className = 'serenity-config-controls-grid';
    
    const autoSaveSetting = this.createToggleSetting('Auto Save', 'Automatically save changes.', manager.autoSave, (value) => {
      manager.autoSave = value;
      manager.forceSaveConfiguration();
    });
    settingsGrid.appendChild(autoSaveSetting);

    const autoLoadSetting = this.createToggleSetting('Auto Load', 'Load config on startup.', manager.autoLoad, (value) => {
      manager.autoLoad = value;
      manager.forceSaveConfiguration();
    });
    settingsGrid.appendChild(autoLoadSetting);
    leftColumn.appendChild(settingsGrid);
    
    // -- Section: Manual Control --
    const manualHeader = this.createSectionHeader('Manual Control', 'Manually save or load the current config.');
    leftColumn.appendChild(manualHeader);

    const manualButtons = document.createElement('div');
    manualButtons.className = 'serenity-config-manual-buttons';

    const saveBtn = document.createElement('button');
    saveBtn.className = 'serenity-btn';
    saveBtn.textContent = 'Force Save';
    saveBtn.onclick = () => {
      manager.forceSaveConfiguration();
      saveBtn.textContent = 'Saved!';
      setTimeout(() => { saveBtn.textContent = 'Force Save'; }, 2000);
    };
    manualButtons.appendChild(saveBtn);
    
    const loadBtn = document.createElement('button');
    loadBtn.className = 'serenity-btn';
    loadBtn.textContent = 'Force Load';
    loadBtn.onclick = () => manager.loadConfiguration();
    manualButtons.appendChild(loadBtn);
    leftColumn.appendChild(manualButtons);
    
    configContainer.appendChild(leftColumn);

    // --- RIGHT COLUMN ---
    const rightColumn = document.createElement('div');
    rightColumn.className = 'serenity-config-column';

    const importExportHeader = this.createSectionHeader('Import / Export', 'Share your configuration with others.');
    rightColumn.appendChild(importExportHeader);

    const importExportContainer = document.createElement('div');
    importExportContainer.className = 'serenity-import-export-buttons';
    
    const importBtn = document.createElement('button');
    importBtn.className = 'serenity-btn serenity-btn-primary';
    importBtn.innerHTML = `<i class="fas fa-upload"></i> Import from File`;
    importBtn.onclick = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                manager.importConfiguration(event.target.result);
                alert('Configuration imported successfully!');
            } catch (err) {
                alert('Failed to import configuration. The file may be corrupt or improperly formatted.');
            }
        };
        reader.readAsText(file);
      };
      input.click();
    };
    
    const exportBtn = document.createElement('button');
    exportBtn.className = 'serenity-btn';
    exportBtn.innerHTML = `<i class="fas fa-download"></i> Export to File`;
    exportBtn.onclick = () => {
      const config = manager.exportConfiguration();
      const configStr = JSON.stringify(config, null, 2);

      // Copy to clipboard
      navigator.clipboard.writeText(configStr).then(() => {
        this.notifications.show({
            title: 'Config Exported',
            message: 'Configuration copied to clipboard.',
            type: 'success'
        });
      });

      // Download as file
      const blob = new Blob([configStr], {type: 'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'serenity-config.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    importExportContainer.appendChild(importBtn);
    importExportContainer.appendChild(exportBtn);

    rightColumn.appendChild(importExportContainer);

    configContainer.appendChild(rightColumn);
    content.appendChild(configContainer);
  },

  renderScriptingContent(content, manager) {
    // Placeholder for Scripting
    content.innerHTML = `<div class="serenity-placeholder">Scripting coming soon...</div>`;
  },

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
        const colorPicker = this.createColorPicker(module, setting, manager);
        controlContainer.appendChild(colorPicker);
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
  },

  // --- Start of Color Picker Helper Functions ---

  createColorPicker(module, setting, manager) {
    const wrapper = document.createElement('div');
    wrapper.className = 'serenity-color-picker-wrapper';

    const swatch = document.createElement('div');
    swatch.className = 'serenity-color-swatch';
    swatch.style.color = setting.value;

    const popup = this.createColorPopup(module, setting, manager, swatch);
    
    swatch.addEventListener('click', (e) => {
      e.stopPropagation();
      const a = document.querySelector('.serenity-color-popup');
      if (a && a !== popup) a.remove()
      if (document.querySelector('.serenity-color-popup') === popup) {
          popup.remove();
      } else {
          wrapper.appendChild(popup);
      }
    });

    wrapper.appendChild(swatch);

    // Close popup when clicking elsewhere
    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) {
        popup.remove();
      }
    });

    return wrapper;
  },

  createColorPopup(module, setting, manager, swatch) {
    const popup = document.createElement('div');
    popup.className = 'serenity-color-popup';

    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = this.rgbaToHex(setting.value).hex;
    
    const alphaSlider = document.createElement('input');
    alphaSlider.type = 'range';
    alphaSlider.className = 'serenity-slider';
    alphaSlider.min = 0;
    alphaSlider.max = 1;
    alphaSlider.step = 0.01;
    alphaSlider.value = this.rgbaToHex(setting.value).alpha;

    const updateColor = () => {
      const hex = colorInput.value;
      const alpha = parseFloat(alphaSlider.value);
      const rgba = this.hexToRgba(hex, alpha);
      
      swatch.style.color = rgba;
      manager.updateModuleSetting(module.name, setting.id, rgba);
    };

    colorInput.addEventListener('input', updateColor);
    alphaSlider.addEventListener('input', updateColor);

    popup.appendChild(colorInput);
    popup.appendChild(alphaSlider);
    return popup;
  },

  hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  },

  rgbaToHex(rgba) {
    if (rgba.startsWith('#')) return { hex: rgba, alpha: 1 };
    const parts = rgba.match(/[\d.]+/g);
    if (!parts || parts.length < 3) return { hex: '#000000', alpha: 1 };
    
    const r = parseInt(parts[0]).toString(16).padStart(2, '0');
    const g = parseInt(parts[1]).toString(16).padStart(2, '0');
    const b = parseInt(parts[2]).toString(16).padStart(2, '0');
    
    const alpha = parts.length >= 4 ? parseFloat(parts[3]) : 1;
    
    return { hex: `#${r}${g}${b}`, alpha };
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
};

export default ClickGUI;
