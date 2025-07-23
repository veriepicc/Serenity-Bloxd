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
      fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
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
      <a href="https://discord.gg/serenityclient" target="_blank"><h1>Serenity</h1></a>
      <span>CLIENT v1.2</span>
    `;
    sidebar.appendChild(logo);
    
    const categories = manager.categories;
    
    const categoryIcons = {
      'Visual': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin-right: 12px;"><path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>',
      'Utility': '<i class="fas fa-cog"></i>',
      'Combat': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin-right: 12px;"><path fill="currentColor" d="M256 0c17.7 0 32 14.3 32 32l0 10.4c93.7 13.9 167.7 88 181.6 181.6l10.4 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-10.4 0c-13.9 93.7-88 167.7-181.6 181.6l0 10.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-10.4C130.3 455.7 56.3 381.7 42.4 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l10.4 0C56.3 130.3 130.3 56.3 224 42.4L224 32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6l0-20.6c0-17.7 14.3-32 32-32s32 14.3 32 32l0 20.6c58.3-12.5 104.1-58.4 116.6-116.6L384 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l20.6 0C392.1 165.7 346.3 119.9 288 107.4l0 20.6c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-20.6C165.7 119.9 119.9 165.7 107.4 224l20.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-20.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',
      'Player': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin-right: 12px;"><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>',
      'Movement': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin-right: 12px;"><path fill="currentColor" d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288l21.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-21.3 0c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352L32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l69.6 0c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"/></svg>',
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

    const sidebarFooter = document.createElement('div');
    sidebarFooter.className = 'serenity-sidebar-footer';
  
    const hudEditorBtn = document.createElement('div');
    hudEditorBtn.className = 'serenity-category serenity-hud-editor-btn';
    hudEditorBtn.innerHTML = `<svg class="serenity-category-icon" style="width: 1.2em; margin-right: 12px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/></svg> HUD Editor`;
    hudEditorBtn.addEventListener('click', () => {
      this.isEditingHUD = true;
      this.renderHUDeditor(manager);
    });
    sidebarFooter.appendChild(hudEditorBtn);

    const configBtn = document.createElement('div');
    configBtn.className = 'serenity-category serenity-config-btn';
    configBtn.innerHTML = `<svg class="serenity-category-icon" style="width: 1.2em; margin-right: 12px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg> Settings`;
    configBtn.addEventListener('click', () => {
      this.activeView = 'settings';
      this.updateContent(manager);
    });
    sidebarFooter.appendChild(configBtn);

    sidebar.appendChild(sidebarFooter);
    
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
        this.overlay.style.zIndex = '1000000000';
    }

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
      this.element.style.display = 'flex';
      this.element.style.pointerEvents = 'auto';
      this.element.style.zIndex = '1000000001';
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
    backBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="width: 0.7em; height: 0.7em; margin-right: 8px; vertical-align: middle;"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg> Back';
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

    const resetBtn = document.createElement('button');
    resetBtn.className = 'serenity-btn serenity-btn-danger';
    resetBtn.textContent = 'Reset All';
    resetBtn.onclick = () => {
        if (confirm('Are you sure you want to reset all settings to their defaults? This action cannot be undone.')) {
            manager.loadConfiguration({});
            setTimeout(() => {
                window.location.reload();
            }, 500);
        }
    };
    manualButtons.appendChild(resetBtn);

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
    backBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="width: 0.7em; height: 0.7em; margin-right: 8px; vertical-align: middle;"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg> Back';
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
    
    // Custom Waypoint Manager UI
    if (mod.name === 'Waypoint') {
      this.renderWaypointManager(settingsContainer, manager);
    } else {
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
    }
    
    section.appendChild(settingsContainer);
    content.appendChild(section);
  },

  renderWaypointManager(container, manager) {
    container.innerHTML = ''; // Clear existing content
    const waypointModule = manager.get('Waypoint');
    if (!waypointModule) return;
    
    const generalSettings = document.createElement('div');
    generalSettings.className = 'serenity-waypoint-general-settings';
    waypointModule.settings.filter(s => s.type !== 'info').forEach(setting => {
        const settingEl = this.createSettingElement(waypointModule, setting, manager);
        generalSettings.appendChild(settingEl);
    });
    container.appendChild(generalSettings);

    const actions = document.createElement('div');
    actions.className = 'serenity-waypoint-actions';

    const addCurrentBtn = document.createElement('button');
    addCurrentBtn.className = 'serenity-btn serenity-btn-primary';
    addCurrentBtn.textContent = 'Add at Current Location';
    addCurrentBtn.onclick = () => {
      const pos = waypointModule.getCurrentPlayerPosition();
      if (pos) {
        waypointModule.addWaypoint({ ...pos });
        this.renderWaypointManager(container, manager); // Re-render
      } else {
        alert('Could not get player position.');
      }
    };

    const addManualBtn = document.createElement('button');
    addManualBtn.className = 'serenity-btn';
    addManualBtn.textContent = 'Create Manually';
    addManualBtn.onclick = () => {
      waypointModule.addWaypoint({});
      this.renderWaypointManager(container, manager); // Re-render
    };
    
    actions.appendChild(addCurrentBtn);
    actions.appendChild(addManualBtn);
    container.appendChild(actions);

    const list = document.createElement('div');
    list.className = 'serenity-waypoint-list';
    waypointModule.getWaypoints().forEach(wp => {
      const item = document.createElement('div');
      item.className = 'serenity-waypoint-item';
      
      const colorPreview = document.createElement('div');
      colorPreview.className = 'serenity-waypoint-color-preview';
      colorPreview.style.backgroundColor = wp.color;

      const info = document.createElement('div');
      info.className = 'serenity-waypoint-info';
      info.innerHTML = `
        <span class="title">${wp.title}</span>
        <span class="coords">X: ${wp.x}, Y: ${wp.y}, Z: ${wp.z}</span>
      `;
      
      const controls = document.createElement('div');
      controls.className = 'serenity-waypoint-controls';

      const toggle = document.createElement('input');
      toggle.type = 'checkbox';
      toggle.className = 'serenity-checkbox';
      toggle.checked = wp.enabled;
      toggle.onchange = (e) => {
        waypointModule.updateWaypoint(wp.id, { enabled: e.target.checked });
      };

      const editBtn = document.createElement('button');
      editBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M402.6 83.2l90.2 90.2c12.5 12.5 12.5 32.8 0 45.3l-283.2 283.2c-12.5 12.5-32.8 12.5-45.3 0L32.2 368.2c-12.5-12.5-12.5-32.8 0-45.3l283.2-283.2c12.5-12.5 32.8-12.5 45.3 0zm47.4 18.7c-9.2-9.2-22.9-11.9-35.8-9.8l-15.6 15.6 100.2 100.2 15.6-15.6c2.1-12.9-.6-26.6-9.8-35.8l-55.2-55.2zM384 346.7L128 480H0V352l256-256L384 346.7z"/></svg>';
      editBtn.onclick = () => this.showWaypointEditPopup(wp, manager);
      
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
      deleteBtn.onclick = () => {
        if (confirm(`Are you sure you want to delete "${wp.title}"?`)) {
          waypointModule.removeWaypoint(wp.id);
          this.renderWaypointManager(container, manager);
        }
      };

      controls.appendChild(toggle);
      controls.appendChild(editBtn);
      controls.appendChild(deleteBtn);

      item.appendChild(colorPreview);
      item.appendChild(info);
      item.appendChild(controls);
      list.appendChild(item);
    });
    container.appendChild(list);
  },

  showWaypointEditPopup(waypoint, manager) {
      const waypointModule = manager.get('Waypoint');
      
      const popup = document.createElement('div');
      popup.className = 'serenity-config-popup';

      popup.innerHTML = `
          <div class="serenity-config-popup-header">
              <span>Edit Waypoint</span>
          </div>
          <div class="serenity-config-popup-body">
              <input type="text" id="wp-title" class="serenity-text-input" placeholder="Title" value="${waypoint.title}">
              <div class="coord-inputs">
                  <input type="text" id="wp-x" class="serenity-text-input" placeholder="X" value="${waypoint.x}">
                  <input type="text" id="wp-y" class="serenity-text-input" placeholder="Y" value="${waypoint.y}">
                  <input type="text" id="wp-z" class="serenity-text-input" placeholder="Z" value="${waypoint.z}">
              </div>
              <input type="color" id="wp-color" value="${waypoint.color}">
          </div>
          <div class="serenity-config-popup-footer">
              <button id="wp-cancel" class="serenity-btn">Cancel</button>
              <button id="wp-save" class="serenity-btn serenity-btn-primary">Save</button>
          </div>
      `;

      const overlay = document.createElement('div');
      overlay.className = 'serenity-overlay visible';
      overlay.style.zIndex = '10001';
      document.body.appendChild(overlay);
      document.body.appendChild(popup);

      const close = () => {
          document.body.removeChild(popup);
          document.body.removeChild(overlay);
          this.updateContent(manager); // Re-render the manager list
      };

      popup.querySelector('#wp-save').onclick = () => {
          const updatedData = {
              title: popup.querySelector('#wp-title').value,
              x: popup.querySelector('#wp-x').value,
              y: popup.querySelector('#wp-y').value,
              z: popup.querySelector('#wp-z').value,
              color: popup.querySelector('#wp-color').value,
          };
          waypointModule.updateWaypoint(waypoint.id, updatedData);
          close();
      };
      popup.querySelector('#wp-cancel').onclick = close;
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
