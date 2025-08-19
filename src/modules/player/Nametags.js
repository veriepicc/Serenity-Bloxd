const Nametags = {
  name: 'Nametags',
  category: 'Player',
  description: 'Get custom nametags that everyone can see.',
  enabled: false,
  settings: [
    { id: 'NametagUsername', name: 'Nametag Username', type: 'text', value: 'unknown' },
    {
      id: 'NametagImg', name: 'Nametag Image', type: 'select', value: 'None',
      options: [
        'None',
        'https://i.postimg.cc/NMG91FWH/space-BG-loco.jpg',
        'https://i.postimg.cc/1XzTTzhW/galaxy.png',
        'https://i.postimg.cc/NfRTSvBt/custom-moving-skies-1-androidioswin10fps-friendly-5.webp',
        'https://i.postimg.cc/J4Q0jrRs/14896441-xl.webp',
        'https://i.postimg.cc/tC9CqKFp/banner.jpg',
        'https://i.postimg.cc/906dTW28/15220236-xl.webp',
        'https://i.postimg.cc/1RfHnC6F/2023-12-19-11-14-34.png',
        'https://i.postimg.cc/ZKNxjWwK/6843ea27816c80d1186125192cbf582ece88036e-2-690x326.jpg',
        'https://i.postimg.cc/GhjHcr2x/swirling-clouds-create-captivating-natural-vortex-sky-138943-2179.avif'
      ]
    },
    { id: "mod-credit", name: "Mod Made By: GEORGECR", type: "info" }
  ],

  patterns: {},
  firebaseLoaded: false,
  unsub: null,
  defaultImage: 'https://i.postimg.cc/PJ46tnhC/deafultanmetagiamge.png',

  onEnable(manager) {
    this.manager = manager;
    this.loadFirebase(() => {
      this.listenForUpdates();
      this.hookCanvas();
      this.setupUsernameSync();
      this.uploadIfValid();
    });
  },

  onDisable() {
    if (this.unsub) this.unsub();
    Object.keys(this.patterns).forEach(name => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = this.defaultImage;
      this.patterns[name] = { img, pattern: null };
    });
  },

  onSettingUpdate(id, value, manager) {
    if (id === 'NametagImg') {
      const existingNotif = Array.from(document.querySelectorAll('.serenity-notification-title'))
        .find(el => el.textContent === 'Nametag Updated');

      if (!existingNotif && manager?.notifications) {
        manager.notifications.show({
          title: 'Nametag Updated',
          message: 'Rejoin the game for your new nametag to apply.',
          type: 'info'
        });
      }
    }
    this.uploadIfValid();
  },

  getSetting(id) {
    return this.settings.find(s => s.id === id)?.value;
  },

  updateSetting(id, newValue) {
    const setting = this.settings.find(s => s.id === id);
    if (setting && setting.value !== newValue) {
      setting.value = newValue;
      this.uploadIfValid();
    }
  },

  uploadIfValid() {
    const name = this.getSetting('NametagUsername');
    let imgUrl = this.getSetting('NametagImg');
    if (imgUrl === 'None') imgUrl = this.defaultImage;

    if (name && imgUrl) {
      firebase.firestore().collection("nametags").doc(name).set({ name, imgUrl });

      const existingEntry = this.patterns[name];
      if (existingEntry) {
        if (existingEntry.img.src !== imgUrl) {
          existingEntry.img.src = imgUrl;
          existingEntry.pattern = null;
        }
      } else {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = imgUrl;
        this.patterns[name] = { img, pattern: null };
      }
    }
  },

  setupUsernameSync() {
    setInterval(() => {
      const el = document.querySelector('.TextFromServerEntityName');
      if (el) {
        const text = el.textContent.trim();
        const setting = this.settings.find(s => s.id === 'NametagUsername');
        if (text && setting && text !== setting.value) {
          setting.value = text;
          this.uploadIfValid();
          const usernameSpan = document.querySelector('.serenity-nametag-username-value');
          if (usernameSpan) usernameSpan.textContent = text;
        }
      }
    }, 500);
  },

  loadFirebase(callback) {
    if (this.firebaseLoaded) return callback();

    const urls = [
      "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js",
      "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore-compat.js"
    ];

    let loaded = 0;
    urls.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        loaded++;
        if (loaded === urls.length) {
          firebase.initializeApp({
            apiKey: "AIzaSyCUnDj5OcI63iOyL3UzcxrXixbsjTIuzPA",
            authDomain: "vortex-client-db.firebaseapp.com",
            projectId: "vortex-client-db",
            storageBucket: "vortex-client-db.firebasestorage.app",
            messagingSenderId: "502851495964",
            appId: "1:502851495964:web:a1c7fc30c48c9901ce17d9"
          });
          this.firebaseLoaded = true;
          callback();
        }
      };
      document.head.appendChild(script);
    });
  },

  listenForUpdates() {
    const db = firebase.firestore();
    this.unsub = db.collection("nametags").onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        const { name, imgUrl } = doc.data();
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = imgUrl || this.defaultImage;
        this.patterns[name] = { img, pattern: null };
      });
    });
  },

  renderNametagManager(container, manager) {
    container.innerHTML = `
      <style>
        .serenity-nametag-subheader {
            padding-bottom: 10px;
            border-bottom: 1px solid var(--border);
            margin-bottom: 15px;
        }
        .serenity-nametag-subheader-title {
            font-size: 16px;
            font-weight: 600;
        }
        .serenity-nametag-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 15px;
        }
        .serenity-nametag-card {
          border: 2px solid var(--border);
          border-radius: var(--radius);
          cursor: pointer;
          transition: var(--transition);
          overflow: hidden;
          position: relative;
        }
        .serenity-nametag-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        .serenity-nametag-card.selected {
          border-color: var(--primary);
          box-shadow: 0 0 10px var(--primary);
        }
        .serenity-nametag-card img {
          width: 100%;
          height: 80px;
          object-fit: cover;
        }
        .serenity-nametag-card .none-card {
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--panel-base);
          font-weight: 600;
        }
      </style>`
    ;

    const usernameSetting = this.settings.find(s => s.id === 'NametagUsername');
    const usernameDisplay = document.createElement('div');
    usernameDisplay.className = 'serenity-setting';
    usernameDisplay.innerHTML = `
      <div class="serenity-setting-info">
        <label class="serenity-setting-label">${usernameSetting.name}</label>
        <p class="serenity-setting-description">Detected from game.</p>
      </div>
      <div class="serenity-setting-control" style="text-align: right; font-weight: 600;">
        <span class="serenity-nametag-username-value">${usernameSetting.value}</span>
      </div>`
    ;
    container.appendChild(usernameDisplay);

    const gridHeader = document.createElement('div');
    gridHeader.className = 'serenity-nametag-subheader';
    gridHeader.style.marginTop = '20px';
    gridHeader.innerHTML = '<div class="serenity-nametag-subheader-title">Select Nametag Image</div>';
    container.appendChild(gridHeader);

    const grid = document.createElement('div');
    grid.className = 'serenity-nametag-grid';

    const imageOptions = this.settings.find(s => s.id === 'NametagImg').options;
    const currentImage = this.getSetting('NametagImg');

    imageOptions.forEach(url => {
      const card = document.createElement('div');
      card.className = 'serenity-nametag-card';
      if (url === currentImage) card.classList.add('selected');

      card.innerHTML = url === 'None'
      ? '<div class="none-card">None</div>'
      : `<img src="${url}" />`;
    

      card.addEventListener('click', () => {
        manager.updateModuleSetting(this.name, 'NametagImg', url);
        const selected = container.querySelector('.serenity-nametag-card.selected');
        if (selected) selected.classList.remove('selected');
        card.classList.add('selected');
      });

      grid.appendChild(card);
    });

    container.appendChild(grid);

    const creditSetting = this.settings.find(s => s.id === 'mod-credit');
    if (creditSetting) {
      const creditDisplay = document.createElement('div');
      creditDisplay.style.textAlign = 'center';
      creditDisplay.style.marginTop = '25px';
      creditDisplay.style.color = 'var(--text-secondary)';
      creditDisplay.style.fontSize = '12px';
      creditDisplay.textContent = creditSetting.name;
      container.appendChild(creditDisplay);
    }
  },

  hookCanvas() {
    const originalGetContext = HTMLCanvasElement.prototype.getContext;
    if (originalGetContext._nametagHooked) return;
    originalGetContext._nametagHooked = true;

    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      const ctx = originalGetContext.call(this, type, ...args);
      if (type === '2d') Nametags.patchContext(ctx);
      return ctx;
    };
  },

  patchContext(ctx) {
    if (ctx._nametagHooked) return;
    ctx._nametagHooked = true;

    const originalFillText = ctx.fillText;
    ctx.fillText = function (text, x, y, maxWidth) {
      const isNametagArea = x >= 0 && x <= 800 && y >= 30 && y <= 300;
      const cfg = Nametags.patterns[text];

      if (typeof text === "string" && text.length > 1 && isNametagArea && cfg) {
        this.save();
        this.globalCompositeOperation = 'source-over';
        originalFillText.call(this, text, x, y, maxWidth);

        const originalFillRect = this.fillRect;
        this.fillRect = function (x, y, w, h) {
          const isBoxForNametag = w > 30 && w < 200 && h >= 10 && h <= 25 && y >= 30 && y <= 300;
          if (isBoxForNametag) return;

          this.save();
          this.globalAlpha = 0.8;
          this.globalCompositeOperation = 'screen';

          try {
            if (cfg.img.complete && cfg.img.naturalWidth > 0) {
              if (!cfg.pattern) {
                cfg.pattern = this.createPattern(cfg.img, 'repeat');
              }
              this.fillStyle = cfg.pattern;
            }
          } catch (e) {}

          originalFillRect.call(this, x, y, w, h);
          this.restore();
        };

        this.restore();
      } else {
        this.save();
        originalFillText.call(this, text, x, y, maxWidth);
        this.restore();
      }
    };
  }
};

export default Nametags;
