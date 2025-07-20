const Crosshair = {
    name: 'Crosshair',
    category: 'Visual',
    description: 'Replaces the default game crosshair with a custom one.',
    enabled: false,

    element: null,
    gameCrosshair: null,
    gameCrosshairInitialDisplay: null,
    observer: null,

    settings: [
        { id: 'hide-original', name: 'Hide Original Crosshair', type: 'boolean', value: true },
        { 
            id: 'mode', 
            name: 'Mode', 
            type: 'select', 
            value: 'Cross', 
            options: ['Cross', 'Plus', 'Dot', 'Circle', 'T-Shape', 'Arrow', 'Custom Image'] 
        },
        { id: 'color-mode', name: 'Color Mode', type: 'select', options: ['Theme', 'Custom'], value: 'Theme', condition: (settings) => settings['mode'] !== 'Custom Image' },
        { id: 'image-url', name: 'Image URL', type: 'text', value: 'https://i.imgur.com/M8M4G3k.png', condition: (settings) => settings['mode'] === 'Custom Image' },
        { id: 'size', name: 'Size', type: 'slider', value: 12, min: 1, max: 100, step: 1 },
        { id: 'color', name: 'Color', type: 'color', value: '#FFFFFF', condition: (settings) => settings['mode'] !== 'Custom Image' && settings['color-mode'] === 'Custom' },
        { id: 'thickness', name: 'Thickness', type: 'slider', value: 2, min: 1, max: 20, step: 1, condition: (settings) => ['Cross', 'Plus', 'Circle', 'T-Shape'].includes(settings['mode']) },
        { id: 'outline', name: 'Outline', type: 'boolean', value: true, condition: (settings) => settings['mode'] !== 'Custom Image' },
        { id: 'outline-color', name: 'Outline Color', type: 'color', value: '#000000', condition: (settings) => settings['outline'] && settings['mode'] !== 'Custom Image' && settings['color-mode'] === 'Custom' },
    ],

    onEnable() {
        this.createDisplay();
        this.updateCrosshair();
        
        this.handleGameCrosshair();
        this.observer = new MutationObserver(() => this.handleGameCrosshair());
        this.observer.observe(document.body, { childList: true, subtree: true });
    },

    onDisable() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        this.destroyDisplay();
        this.restoreGameCrosshair();
        this.gameCrosshair = null;
        this.gameCrosshairInitialDisplay = null;
    },

    onSettingUpdate(settingId) {
        this.updateCrosshair();
        if (settingId === 'hide-original') {
            this.handleGameCrosshair();
        }
    },

    createDisplay() {
        if (this.element) return;
        this.element = document.createElement('div');
        this.element.className = 'serenity-crosshair';
        this.element.style.position = 'fixed';
        this.element.style.top = '50%';
        this.element.style.left = '50%';
        this.element.style.transform = 'translate(-50%, -50%)';
        this.element.style.pointerEvents = 'none';
        this.element.style.zIndex = '9999';
        document.body.appendChild(this.element);
    },

    destroyDisplay() {
        if (this.element) {
            document.body.removeChild(this.element);
            this.element = null;
        }
    },
    
    handleGameCrosshair() {
        const shouldHide = this.settings.find(s => s.id === 'hide-original').value;
        const gameCrosshairEl = document.querySelector('.CrossHair');

        if (shouldHide) {
            if (gameCrosshairEl) {
                if (this.gameCrosshair !== gameCrosshairEl) {
                    this.gameCrosshair = gameCrosshairEl;
                    this.gameCrosshairInitialDisplay = gameCrosshairEl.style.display;
                }
                this.gameCrosshair.style.display = 'none';
            }
        } else {
            this.restoreGameCrosshair();
        }
    },
    
    restoreGameCrosshair() {
        if (this.gameCrosshair) {
            this.gameCrosshair.style.display = this.gameCrosshairInitialDisplay || '';
        }
    },
    
    updateCrosshair() {
        if (!this.element) return;

        this.element.innerHTML = '';
        
        const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
        let { mode, size, color, thickness, outline, 'outline-color': outlineColor, 'image-url': imageUrl, 'color-mode': colorMode } = settings;

        if (colorMode === 'Theme' && mode !== 'Custom Image') {
            color = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
            outlineColor = '#000000'; // Default outline for theme
        }

        const outlineStyle = outline ? `0px 0px 2px ${outlineColor}, 0px 0px 2px ${outlineColor}, 0px 0px 2px ${outlineColor}, 0px 0px 2px ${outlineColor}` : 'none';

        switch(mode) {
            case 'Custom Image':
                const img = document.createElement('img');
                img.src = imageUrl;
                img.style.width = `${size}px`;
                img.style.height = `${size}px`;
                this.element.appendChild(img);
                break;

            case 'Dot':
                const dot = document.createElement('div');
                dot.style.width = `${size}px`;
                dot.style.height = `${size}px`;
                dot.style.backgroundColor = color;
                dot.style.borderRadius = '50%';
                dot.style.textShadow = outlineStyle;
                this.element.appendChild(dot);
                break;

            case 'Circle':
                const circle = document.createElement('div');
                circle.style.width = `${size}px`;
                circle.style.height = `${size}px`;
                circle.style.border = `${thickness}px solid ${color}`;
                circle.style.borderRadius = '50%';
                circle.style.textShadow = outlineStyle;
                this.element.appendChild(circle);
                break;

            case 'Cross':
            case 'Plus':
            case 'T-Shape':
                const gap = mode === 'Cross' ? Math.max(1, size / 4) : 0;
                const length = size;
                
                const positions = {
                    top: { top: `-${gap + length}px`, left: `-${thickness / 2}px`, width: `${thickness}px`, height: `${length}px` },
                    bottom: { top: `${gap}px`, left: `-${thickness / 2}px`, width: `${thickness}px`, height: `${length}px` },
                    left: { left: `-${gap + length}px`, top: `-${thickness / 2}px`, width: `${length}px`, height: `${thickness}px` },
                    right: { left: `${gap}px`, top: `-${thickness / 2}px`, width: `${length}px`, height: `${thickness}px` }
                };
                
                let linesToDraw = ['top', 'bottom', 'left', 'right'];
                if (mode === 'T-Shape') linesToDraw = ['bottom', 'left', 'right'];

                linesToDraw.forEach(pos => {
                    const line = document.createElement('div');
                    line.style.position = 'absolute';
                    line.style.backgroundColor = color;
                    line.style.textShadow = outlineStyle;
                    Object.assign(line.style, positions[pos]);
                    this.element.appendChild(line);
                });
                break;
            
            case 'Arrow':
                const arrow = document.createElement('div');
                arrow.style.width = '0';
                arrow.style.height = '0';
                arrow.style.borderLeft = `${size / 2}px solid transparent`;
                arrow.style.borderRight = `${size / 2}px solid transparent`;
                arrow.style.borderBottom = `${size}px solid ${color}`;
                if(outline) {
                    arrow.style.filter = `drop-shadow(0 1px 1px ${outlineColor}) drop-shadow(0 -1px 1px ${outlineColor}) drop-shadow(1px 0 1px ${outlineColor}) drop-shadow(-1px 0 1px ${outlineColor})`;
                }
                this.element.appendChild(arrow);
                break;
        }
    },
};

export default Crosshair; 