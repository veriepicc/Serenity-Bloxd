const AdBlocker = {
    name: 'AdBlocker',
    category: 'Utility',
    description: 'Blocks in-game ads and trackers by hiding elements and intercepting network requests.',
    enabled: true,

    settings: [
        { id: 'hide-page-ads', name: 'Hide In-Page Ads', type: 'boolean', value: true, description: 'Hides visible ad containers and popups.' },
        { id: 'block-network-ads', name: 'Block Ad Network Requests', type: 'boolean', value: true, description: 'Prevents the browser from requesting ads from known ad servers.' }
    ],

    originalFetch: window.fetch,
    originalXhrOpen: window.XMLHttpRequest.prototype.open,
    originalXhrSend: window.XMLHttpRequest.prototype.send,
    observer: null,
    
    adSelectors: [
        '.SuperRankAdContainer',
        '.AdBannerContainer',
        '.PlaywireVideoWrapper',
        '.UiRequests',
        '.AdBanner',
        '.GenericVideoWrapper',
        '#bloxd-io_300x600_2'
    ],
    
    blockList: [
        'googlesyndication.com',
        'googletagservices.com',
        'google-analytics.com',
        'doubleclick.net',
        'adinplay.com',
        'playwire.com',
        'amazon-adsystem.com',
        'adnxs.com'
    ],
    
    onEnable() {
        this.applySettings();
    },
    
    onDisable() {
        this.unpatchNetworkRequests();
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        // Un-hiding elements is not done to avoid interfering with game logic. A refresh is best.
    },
    
    onSettingUpdate() {
        this.applySettings();
    },

    applySettings() {
        const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});

        if (settings['block-network-ads']) {
            this.patchNetworkRequests();
        } else {
            this.unpatchNetworkRequests();
        }

        if (settings['hide-page-ads']) {
            this.hidePageAds();
            this.setupObserver();
        } else {
            if (this.observer) {
                this.observer.disconnect();
                this.observer = null;
            }
        }
    },
    
    isBlocked(url) {
        return this.blockList.some(domain => url.includes(domain));
    },

    patchNetworkRequests() {
        const self = this;
        
        window.fetch = function(input, init) {
            const url = typeof input === 'string' ? input : input.url;
            if (self.isBlocked(url)) {
                console.log(`[Serenity] Blocked fetch request to: ${url}`);
                return Promise.resolve(new Response(null, { status: 204, statusText: 'No Content' }));
            }
            return self.originalFetch.apply(this, arguments);
        };

        window.XMLHttpRequest.prototype.open = function(method, url) {
            if (self.isBlocked(url)) {
                this._isBlocked = true;
                console.log(`[Serenity] Blocked XHR request to: ${url}`);
            } else {
                delete this._isBlocked;
            }
            self.originalXhrOpen.apply(this, arguments);
        };
        
        window.XMLHttpRequest.prototype.send = function() {
            if (this._isBlocked) {
                return; 
            }
            self.originalXhrSend.apply(this, arguments);
        };
    },

    unpatchNetworkRequests() {
        window.fetch = this.originalFetch;
        window.XMLHttpRequest.prototype.open = this.originalXhrOpen;
        window.XMLHttpRequest.prototype.send = this.originalXhrSend;
    },

    hideElement(node) {
        if (node.style.display !== 'none') {
            node.style.display = 'none';
        }
    },
    
    hidePageAds() {
        this.adSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => this.hideElement(el));
        });
    },
    
    setupObserver() {
        if (this.observer) return;

        this.observer = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        this.adSelectors.forEach(selector => {
                            if (node.matches(selector)) {
                                this.hideElement(node);
                            }
                            node.querySelectorAll(selector).forEach(el => this.hideElement(el));
                        });
                    }
                }
            }
        });
        
        this.observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    }
};

export default AdBlocker; 