import { getRainbowColor } from '../../utils';

// A helper to cache canvas context for measuring, improving performance.
const T_CTX_CACHE = {
    _ctx: null,
    getContext: function() {
        if (!this._ctx) {
            this._ctx = document.createElement('canvas').getContext('2d');
        }
        return this._ctx;
    }
};

const ArrayList = {
    name: 'ArrayList',
    category: 'Visual',
    description: 'Displays a list of enabled modules.',
    enabled: true,
    element: null,
    
    settings: [
        {
            id: 'color-mode',
            name: 'Color Mode',
            description: 'The color style of the module list.',
            type: 'select',
            options: ['Rainbow', 'Static'],
            value: 'Static'
        },
        {
            id: 'use-theme-color',
            name: 'Use Theme Color',
            description: 'Use the main theme color for static mode.',
            type: 'boolean',
            value: true,
            condition: (settings) => settings['color-mode'] === 'Static'
        },
        {
            id: 'static-color',
            name: 'Custom Static Color',
            description: 'The color of the text if not using the theme color.',
            type: 'color',
            value: 'rgba(94, 114, 235, 1)',
            condition: (settings) => settings['color-mode'] === 'Static' && !settings['use-theme-color']
        },
        {
            id: 'border',
            name: 'Show Border',
            description: 'Display a colored border on the side of the list.',
            type: 'boolean',
            value: true,
        },
        {
            id: 'text-shadow',
            name: 'Text Shadow',
            description: 'Adds a shadow to the text for better visibility.',
            type: 'boolean',
            value: true,
        },
        {
            id: 'font-size',
            name: 'Font Size',
            description: 'The font size of the module names.',
            type: 'slider',
            min: 10,
            max: 20,
            step: 1,
            value: 14
        }
    ],

    onEnable(manager) {
        if (!this.element) {
            this.element = document.createElement('div');
            this.element.className = 'serenity-arraylist-container';
            document.body.appendChild(this.element);
        }
        this.updateStyle(manager);
    },

    onDisable() {
        if (this.element) {
            document.body.removeChild(this.element);
            this.element = null;
        }
    },

    onTick(dt, manager) {
        if (!this.element) return;

        const excluded = ['ClickGUI', 'ArrayList', 'Notifications'];
        
        // Get font styles to accurately measure text width
        const fontSize = this.getSettingValue(manager, 'font-size');
        const fontWeight = 600; // As defined in styles.css
        const fontFamily = 'Inter'; // As defined in styles.css
        const font = `${fontWeight} ${fontSize}px ${fontFamily}`;
        
        const context = T_CTX_CACHE.getContext();
        context.font = font;

        const enabledModules = manager.list()
            .filter(m => m.enabled && !excluded.includes(m.name))
            .map(m => ({
                name: m.name,
                width: context.measureText(m.name).width
            }))
            .sort((a, b) => b.width - a.width || a.name.localeCompare(b.name));

        this.element.innerHTML = '';

        const colorMode = this.getSettingValue(manager, 'color-mode');
        const useThemeColor = this.getSettingValue(manager, 'use-theme-color');
        let staticColor = this.getSettingValue(manager, 'static-color');
        const showBorder = this.getSettingValue(manager, 'border');
        
        if (colorMode === 'Static' && useThemeColor) {
            staticColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
        }
        
        enabledModules.forEach((mod, index) => {
            const modElement = document.createElement('div');
            modElement.className = 'serenity-arraylist-item';
            
            const color = colorMode === 'Rainbow' ? getRainbowColor(index) : staticColor;
            
            modElement.style.color = color;
            modElement.textContent = mod.name;
            
            if (showBorder) {
                const borderElement = document.createElement('span');
                borderElement.className = 'serenity-arraylist-border';
                borderElement.style.backgroundColor = color;
                modElement.appendChild(borderElement);
            }
            
            this.element.appendChild(modElement);
        });
    },
    
    onSettingUpdate(settingId, value, manager) {
        this.updateStyle(manager);
    },

    updateStyle(manager) {
        if (!this.element) return;

        const textShadow = this.getSettingValue(manager, 'text-shadow');
        const fontSize = this.getSettingValue(manager, 'font-size');
        
        this.element.style.fontSize = `${fontSize}px`;
        this.element.classList.toggle('with-shadow', textShadow);
    },

    getSettingValue(manager, settingId) {
        const module = manager.get('ArrayList');
        if (!module) return null;
        const setting = module.settings.find(s => s.id === settingId);
        return setting ? setting.value : null;
    }
};

export default ArrayList; 