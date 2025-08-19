
// ==UserScript==
// @name         Serenity Client
// @version      1.3
// @description  A feature-rich client for Bloxd.io
// @author       Serenity Development
// @icon         https://i.postimg.cc/kXhHTk5q/lol3.jpg
// @match        *://*.bloxd.io/*
// @match        *://*.bloxdhop.io/*
// @match        *://*.bloxdk12.com/*
// @match        *://*.doodlecube.io/*
// @match        *://*.eviltower.io/*
// @match        *://1219647973806571553.discordsays.com/*
// @downloadURL  https://raw.githubusercontent.com/veriepicc/Serenity-Bloxd/main/dist/Serenity.js
// @updateURL    https://raw.githubusercontent.com/veriepicc/Serenity-Bloxd/main/dist/Serenity.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(()=>{var A=`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');\r
\r
:root {\r
  --primary: #5E72EB; /* A nice modern blue */\r
  --primary-dark: #4D5DBF;\r
  --accent: #E54B4B; /* A contrasting accent color */\r
  --panel-base: #1e2129; /* Default dark background color */\r
  --panel-opacity: 0.85; /* Default opacity */\r
  --background: rgba(20, 22, 28, 0.9);\r
  --panel: rgba(30, 33, 41, var(--panel-opacity));\r
  --hover: rgba(255, 255, 255, 0.05);\r
  --border: rgba(255, 255, 255, 0.07);\r
  --shadow: 0 12px 35px rgba(0, 0, 0, 0.3);\r
  --text: #EAEAEA;\r
  --text-secondary: rgba(255, 255, 255, 0.6);\r
  --radius: 10px;\r
  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\r
  --notification-success-bg: rgba(63, 154, 86, 0.15);\r
  --notification-success-icon: #5cb85c;\r
  --notification-warning-bg: rgba(205, 163, 74, 0.15);\r
  --notification-warning-icon: #f0ad4e;\r
  --notification-error-bg: rgba(201, 79, 79, 0.15);\r
  --notification-error-icon: #d9534f;\r
  --notification-info-bg: rgba(94, 114, 235, 0.15);\r
  --notification-info-icon: var(--primary);\r
}\r
\r
.serenity-hidden {\r
  display: none !important;\r
}\r
\r
/* Overlay that covers the entire screen with heavy blur */\r
.serenity-overlay {\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background-color: rgba(10, 12, 16, 0.6);\r
  backdrop-filter: blur(16px);\r
  -webkit-backdrop-filter: blur(16px);\r
  z-index: 9998;\r
  opacity: 0;\r
  transition: opacity 0.3s ease;\r
}\r
\r
.serenity-overlay.visible {\r
  opacity: 1;\r
}\r
\r
/* Main container for the UI */\r
.serenity-container {\r
  position: fixed;\r
  top: 50%;\r
  left: 50%;\r
  transform: translate(-50%, -50%) scale(0.95);\r
  display: flex;\r
  gap: 0; /* Remove gap for a more integrated look */\r
  background-color: var(--background);\r
  border: 1px solid var(--border);\r
  border-radius: var(--radius);\r
  box-shadow: var(--shadow);\r
  z-index: 9999;\r
  color: var(--text);\r
  opacity: 0;\r
  transition: var(--transition);\r
  max-height: 75vh;\r
  overflow: hidden;\r
  width: 70%;\r
  max-width: 1000px;\r
}\r
\r
.serenity-container:not(.settings-view-active) .serenity-content {\r
  background-image: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 60%);\r
  background-size: 150% 150%;\r
  animation: fluid-hero 8s ease-in-out infinite;\r
}\r
\r
.serenity-container.visible {\r
  opacity: 1;\r
  transform: translate(-50%, -50%) scale(1);\r
}\r
\r
.serenity-container.settings-view-active .serenity-sidebar {\r
    display: none;\r
}\r
\r
/* Left sidebar with categories */\r
.serenity-sidebar {\r
  display: flex;\r
  flex-direction: column;\r
  min-width: 200px;\r
  background-color: rgba(25, 28, 36, 0.5); /* Slightly different shade */\r
  padding: 15px;\r
  border-right: 1px solid var(--border);\r
}\r
\r
.serenity-sidebar-footer {\r
    margin-top: auto;\r
    padding-top: 15px;\r
    border-top: 1px solid var(--border);\r
}\r
\r
.serenity-logo {\r
  margin-bottom: 20px;\r
  text-align: center;\r
  padding-bottom: 20px;\r
  border-bottom: 1px solid var(--border);\r
}\r
\r
.serenity-logo h1 {\r
  margin: 0;\r
  font-size: 28px;\r
  font-weight: 800;\r
  letter-spacing: 1.5px;\r
  color: var(--text);\r
  text-shadow: 0 0 10px var(--primary);\r
  transition: transform 0.2s ease-in-out;\r
}\r
\r
.serenity-logo a {\r
    text-decoration: none;\r
}\r
\r
.serenity-logo a:hover h1 {\r
    transform: scale(1.2);\r
}\r
\r
.serenity-logo span {\r
  font-size: 11px;\r
  text-transform: uppercase;\r
  letter-spacing: 1px;\r
  color: var(--text-secondary);\r
}\r
\r
.serenity-category {\r
  padding: 12px 15px;\r
  margin-bottom: 8px;\r
  border-radius: 8px;\r
  cursor: pointer;\r
  transition: var(--transition);\r
  display: flex;\r
  align-items: center;\r
  font-weight: 600;\r
  font-size: 15px;\r
  position: relative;\r
  overflow: hidden;\r
  border: 1px solid transparent;\r
}\r
\r
.serenity-category:hover {\r
  background-color: var(--hover);\r
  border-color: var(--border);\r
}\r
\r
.serenity-category.active {\r
  background-color: var(--primary);\r
  color: #fff;\r
  box-shadow: 0 4px 20px rgba(94, 114, 235, 0.3);\r
}\r
\r
.serenity-category-icon {\r
  margin-right: 12px;\r
  font-size: 16px;\r
  width: 20px; /* Ensure icons align */\r
  text-align: center;\r
  opacity: 0.9;\r
}\r
\r
.serenity-category-icon i {\r
  font-weight: 900; /* Required for Font Awesome solid icons */\r
}\r
\r
/* Right content area with modules */\r
.serenity-content {\r
  flex: 1;\r
  display: flex;\r
  flex-direction: column;\r
  overflow-y: auto;\r
  padding: 20px;\r
}\r
\r
.serenity-content::-webkit-scrollbar {\r
  width: 5px;\r
}\r
\r
.serenity-content::-webkit-scrollbar-track {\r
  background: transparent;\r
}\r
\r
.serenity-content::-webkit-scrollbar-thumb {\r
  background: var(--primary);\r
  border-radius: 10px;\r
}\r
\r
.serenity-content::-webkit-scrollbar-thumb:hover {\r
  background: var(--primary-dark);\r
}\r
\r
.serenity-section {\r
  margin-bottom: 25px;\r
}\r
\r
.serenity-section-header {\r
  font-size: 22px;\r
  font-weight: 700;\r
  margin-bottom: 20px;\r
  color: var(--text);\r
  padding-bottom: 10px;\r
  border-bottom: 1px solid var(--border);\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.serenity-search-bar {\r
  background: rgba(0,0,0,0.2);\r
  border: 1px solid var(--border);\r
  color: var(--text);\r
  border-radius: 6px;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  transition: var(--transition);\r
  width: 250px;\r
}\r
\r
.serenity-search-bar:focus {\r
  outline: none;\r
  border-color: var(--primary);\r
  background: rgba(0,0,0,0.3);\r
}\r
\r
.serenity-right-header {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
}\r
\r
.serenity-config-btn i {\r
  font-weight: 900;\r
}\r
\r
.serenity-config-popup {\r
  position: fixed;\r
  top: 50%;\r
  left: 50%;\r
  transform: translate(-50%, -50%);\r
  background-color: var(--background);\r
  border: 1px solid var(--border);\r
  border-radius: var(--radius);\r
  box-shadow: var(--shadow);\r
  z-index: 10003;\r
  width: 480px;\r
  animation: fadeIn 0.1s ease-out;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.serenity-config-popup-header {\r
  padding: 12px 15px;\r
  font-weight: 600;\r
  border-bottom: 1px solid var(--border);\r
  text-align: center;\r
}\r
\r
.serenity-config-popup-header button {\r
  background: none;\r
  border: none;\r
  color: var(--text-secondary);\r
  font-size: 20px;\r
  cursor: pointer;\r
}\r
\r
.serenity-config-popup-body {\r
  padding: 15px;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 15px;\r
}\r
\r
.serenity-config-settings {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 10px;\r
  border-bottom: 1px solid var(--border);\r
  padding-bottom: 15px;\r
}\r
\r
.serenity-config-toggle-setting {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.serenity-config-manual-actions {\r
  display: flex;\r
  gap: 10px;\r
}\r
\r
.serenity-config-manual-actions button {\r
  flex-grow: 1;\r
  padding: 8px 15px;\r
  border-radius: 6px;\r
  border: 1px solid var(--border);\r
  background-color: var(--panel);\r
  color: var(--text);\r
  cursor: pointer;\r
  font-weight: 600;\r
  transition: var(--transition);\r
}\r
\r
.serenity-config-manual-actions button:hover {\r
  background-color: var(--hover);\r
}\r
\r
.serenity-config-popup-body textarea {\r
  width: 100%;\r
  min-height: 120px;\r
  resize: vertical;\r
  background: rgba(0,0,0,0.2);\r
  border: 1px solid rgba(255, 255, 255, 0.25);\r
  color: var(--text);\r
  border-radius: 8px;\r
  padding: 10px 12px;\r
  font-size: 14px;\r
  box-sizing: border-box;\r
}\r
\r
.serenity-config-popup-actions {\r
  display: flex;\r
  gap: 10px;\r
}\r
\r
.serenity-config-popup-actions button {\r
  padding: 8px 15px;\r
  border-radius: 6px;\r
  border: none;\r
  cursor: pointer;\r
  font-weight: 600;\r
  transition: var(--transition);\r
}\r
\r
/* This targets the Import button */\r
.serenity-config-popup-actions button:first-child {\r
  background-color: var(--primary);\r
  color: #fff;\r
}\r
\r
.serenity-config-popup-actions button:first-child:hover {\r
  background-color: var(--primary-dark);\r
}\r
\r
/* This targets the Export button */\r
.serenity-config-popup-actions button:last-child {\r
  background-color: var(--panel);\r
  color: var(--text);\r
  border: 1px solid var(--border);\r
}\r
\r
.serenity-config-popup-actions button:last-child:hover {\r
  background-color: var(--hover);\r
}\r
\r
.serenity-config-popup-footer {\r
  padding: 15px;\r
  border-top: 1px solid var(--border);\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.serenity-config-back-btn {\r
  background-color: var(--panel);\r
  color: var(--text);\r
  border: 1px solid var(--border);\r
  padding: 8px 15px;\r
  border-radius: 6px;\r
  font-weight: 600;\r
  cursor: pointer;\r
  transition: var(--transition);\r
}\r
\r
.serenity-config-back-btn:hover {\r
  background-color: var(--hover);\r
}\r
\r
.serenity-modules {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\r
  gap: 18px;\r
}\r
\r
/* Module cards */\r
.serenity-module {\r
  background-color: var(--panel);\r
  border-radius: var(--radius);\r
  padding: 16px;\r
  transition: var(--transition);\r
  border: 1px solid var(--border);\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
.serenity-module:hover {\r
  transform: translateY(-4px);\r
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);\r
  border-color: var(--primary);\r
}\r
\r
.serenity-module-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
\r
.serenity-module-name {\r
  font-weight: 600;\r
  font-size: 15px;\r
}\r
\r
.serenity-module-toggle {\r
  position: relative;\r
  width: 44px; /* Slightly smaller */\r
  height: 22px;\r
  cursor: pointer;\r
}\r
\r
.serenity-toggle-slider {\r
  position: absolute;\r
  cursor: pointer;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background-color: rgba(0, 0, 0, 0.2);\r
  transition: var(--transition);\r
  border-radius: 22px;\r
  border: 1px solid var(--border);\r
}\r
\r
.serenity-toggle-slider:before {\r
  position: absolute;\r
  content: "";\r
  height: 16px;\r
  width: 16px;\r
  left: 2px;\r
  bottom: 2px;\r
  background-color: var(--text-secondary);\r
  transition: var(--transition);\r
  border-radius: 50%;\r
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);\r
}\r
\r
.serenity-module-toggle.enabled .serenity-toggle-slider {\r
  background-color: var(--primary);\r
  border-color: var(--primary-dark);\r
}\r
\r
.serenity-module-toggle.enabled .serenity-toggle-slider:before {\r
  transform: translateX(22px);\r
  background-color: #fff;\r
}\r
\r
.serenity-module-description {\r
  font-size: 13px;\r
  color: var(--text-secondary);\r
  line-height: 1.5;\r
}\r
\r
/* New controls for settings button next to the toggle */\r
.serenity-module-controls {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
}\r
\r
.serenity-module-settings-btn {\r
  background: none;\r
  border: none;\r
  color: var(--text-secondary);\r
  cursor: pointer;\r
  padding: 5px;\r
  border-radius: 5px;\r
  transition: var(--transition);\r
  font-size: 14px;\r
}\r
\r
.serenity-module:hover .serenity-module-settings-btn {\r
  opacity: 1;\r
}\r
\r
.serenity-module-settings-btn:hover {\r
  color: var(--text);\r
  background-color: var(--hover);\r
}\r
\r
/* Header for the dedicated settings view */\r
.serenity-settings-header {\r
  display: flex;\r
  align-items: center;\r
  gap: 15px;\r
  font-size: 22px;\r
  font-weight: 700;\r
  margin-bottom: 20px;\r
  color: var(--text);\r
  padding-bottom: 10px;\r
  border-bottom: 1px solid var(--border);\r
}\r
\r
.serenity-back-btn {\r
  background: var(--panel);\r
  border: 1px solid var(--border);\r
  color: var(--text);\r
  padding: 8px 12px;\r
  border-radius: 6px;\r
  cursor: pointer;\r
  transition: var(--transition);\r
  font-size: 14px;\r
  font-weight: 600;\r
}\r
\r
.serenity-back-btn:hover {\r
  background: var(--hover);\r
  border-color: var(--primary);\r
}\r
\r
/* HUD Editor styles */\r
.serenity-hud-editor-btn i {\r
  font-weight: 900;\r
}\r
\r
.serenity-hud-editor-overlay {\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background-color: rgba(10, 12, 16, 0.8);\r
  backdrop-filter: blur(16px);\r
  z-index: 10000;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
}\r
\r
.serenity-hud-grid {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 100%;\r
  background-image:\r
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),\r
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);\r
  background-size: 20px 20px;\r
  z-index: -1;\r
}\r
\r
.serenity-hud-done-btn {\r
  position: absolute;\r
  bottom: 30px;\r
  background-color: var(--primary);\r
  color: #fff;\r
  border: none;\r
  padding: 12px 30px;\r
  border-radius: 8px;\r
  font-size: 16px;\r
  font-weight: 700;\r
  cursor: pointer;\r
  transition: var(--transition);\r
  box-shadow: 0 4px 20px rgba(94, 114, 235, 0.4);\r
}\r
\r
.serenity-hud-done-btn:hover {\r
  background-color: var(--primary-dark);\r
}\r
\r
/* HUD Settings Popup */\r
.serenity-hud-settings-popup {\r
  position: fixed;\r
  background-color: var(--panel);\r
  border: 1px solid var(--border);\r
  border-radius: 8px;\r
  padding: 8px;\r
  z-index: 10002;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 4px;\r
  min-width: 200px;\r
  box-shadow: var(--shadow);\r
  animation: fadeIn 0.1s ease-out;\r
}\r
\r
@keyframes fadeIn {\r
  from { opacity: 0; transform: scale(0.95); }\r
  to { opacity: 1; transform: scale(1); }\r
}\r
\r
/* New header for the HUD settings popup */\r
.serenity-hud-popup-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  padding: 4px;\r
  background-color: rgba(0,0,0,0.2);\r
  border-bottom: 1px solid var(--border);\r
  font-weight: 600;\r
  font-size: 13px;\r
}\r
\r
.serenity-hud-popup-close-btn {\r
  background: none;\r
  border: none;\r
  color: var(--text-secondary);\r
  font-size: 18px;\r
  line-height: 1;\r
  cursor: pointer;\r
}\r
\r
.serenity-hud-popup-close-btn:hover {\r
  color: var(--text);\r
}\r
\r
.serenity-hud-popup-body {\r
  padding: 10px;\r
}\r
\r
.serenity-hud-popup-footer {\r
  padding: 10px;\r
  border-top: 1px solid var(--border);\r
  display: flex;\r
  justify-content: flex-end;\r
}\r
\r
.serenity-hud-popup-reset-btn {\r
  background: var(--primary);\r
  color: white;\r
  border: none;\r
  padding: 8px 12px;\r
  border-radius: var(--radius);\r
  cursor: pointer;\r
  transition: background-color 0.2s;\r
}\r
\r
.serenity-hud-popup-reset-btn:hover {\r
  background: var(--primary-dark);\r
}\r
\r
.serenity-config-popup-footer {\r
  padding: 15px;\r
  border-top: 1px solid var(--border);\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.serenity-config-back-btn {\r
  background-color: var(--panel);\r
  color: var(--text);\r
  border: 1px solid var(--border);\r
  padding: 8px 15px;\r
  border-radius: 6px;\r
  font-weight: 600;\r
  cursor: pointer;\r
  transition: var(--transition);\r
}\r
\r
.serenity-config-back-btn:hover {\r
  background-color: var(--hover);\r
}\r
\r
/* Compact styles for settings inside the HUD popup */\r
.serenity-hud-settings-popup .serenity-setting {\r
  padding: 4px 2px;\r
  border-bottom: none;\r
}\r
\r
.serenity-hud-settings-popup .serenity-setting-label {\r
  font-size: 13px;\r
}\r
\r
.serenity-hud-settings-popup .serenity-setting-description {\r
  display: none;\r
}\r
\r
.serenity-module-settings {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 12px;\r
}\r
\r
.serenity-setting {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  padding: 15px 0;\r
  border-bottom: 1px solid var(--border);\r
}\r
\r
.serenity-setting:last-child {\r
  border-bottom: none;\r
}\r
\r
.serenity-setting-info {\r
  flex: 1;\r
}\r
\r
.serenity-setting-label {\r
  font-size: 14px;\r
  font-weight: 500;\r
  color: var(--text-secondary);\r
}\r
\r
.serenity-setting-description {\r
  font-size: 12px;\r
  color: var(--text-secondary);\r
  margin: 4px 0 0 0;\r
}\r
\r
.serenity-setting-control {\r
  flex-basis: 40%;\r
}\r
\r
/* Generic input styles */\r
.serenity-select, .serenity-text-input {\r
  width: 100%;\r
  background: rgba(0,0,0,0.2);\r
  border: 1px solid var(--border);\r
  color: var(--text);\r
  border-radius: 6px;\r
  padding: 8px;\r
  font-size: 13px;\r
  transition: var(--transition);\r
}\r
\r
.serenity-select:focus, .serenity-text-input:focus {\r
  outline: none;\r
  border-color: var(--primary);\r
  background: rgba(0,0,0,0.3);\r
}\r
\r
/* Checkbox specific styles */\r
.serenity-checkbox {\r
  appearance: none;\r
  -webkit-appearance: none;\r
  width: 20px;\r
  height: 20px;\r
  background-color: rgba(0,0,0,0.2);\r
  border: 1px solid var(--border);\r
  border-radius: 5px;\r
  cursor: pointer;\r
  position: relative;\r
  transition: var(--transition);\r
}\r
\r
.serenity-checkbox:checked {\r
  background-color: var(--primary);\r
  border-color: var(--primary-dark);\r
}\r
\r
.serenity-checkbox:checked::before {\r
  content: '\u2713';\r
  font-size: 14px;\r
  color: #fff;\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  transform: translate(-50%, -50%);\r
}\r
\r
/* Slider specific styles */\r
.serenity-slider {\r
  -webkit-appearance: none;\r
  appearance: none;\r
  width: 100%;\r
  height: 6px;\r
  background: rgba(0,0,0,0.3);\r
  border-radius: 3px;\r
  outline: none;\r
  transition: opacity .2s;\r
}\r
\r
.serenity-slider::-webkit-slider-thumb {\r
  -webkit-appearance: none;\r
  appearance: none;\r
  width: 18px;\r
  height: 18px;\r
  background: var(--primary);\r
  cursor: pointer;\r
  border-radius: 50%;\r
  border: 2px solid var(--background);\r
}\r
\r
.serenity-slider::-moz-range-thumb {\r
  width: 18px;\r
  height: 18px;\r
  background: var(--primary);\r
  cursor: pointer;\r
  border-radius: 50%;\r
  border: 2px solid var(--background);\r
}\r
\r
/* Custom Color Picker with Alpha Support */\r
.serenity-color-picker-wrapper {\r
  position: relative;\r
  display: flex;\r
  align-items: center;\r
  justify-content: flex-end;\r
}\r
\r
.serenity-color-swatch {\r
  width: 100%;\r
  height: 28px;\r
  border: 1px solid var(--border);\r
  border-radius: 6px;\r
  cursor: pointer;\r
  /* Checkerboard background to show transparency */\r
  background-image: \r
    linear-gradient(45deg, #333 25%, transparent 25%), \r
    linear-gradient(-45deg, #333 25%, transparent 25%), \r
    linear-gradient(45deg, transparent 75%, #333 75%), \r
    linear-gradient(-45deg, transparent 75%, #333 75%);\r
  background-size: 12px 12px;\r
  background-position: 0 0, 0 6px, 6px -6px, -6px 0px;\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
.serenity-color-swatch::before {\r
  content: '';\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background-color: currentColor;\r
}\r
\r
.serenity-color-popup {\r
  position: absolute;\r
  top: 100%;\r
  right: 0;\r
  margin-top: 5px;\r
  background-color: var(--background);\r
  border: 1px solid var(--border);\r
  border-radius: 8px;\r
  padding: 10px;\r
  z-index: 10005; /* Above other UI */\r
  box-shadow: var(--shadow);\r
  display: flex;\r
  flex-direction: column;\r
  gap: 10px;\r
  width: 160px;\r
}\r
\r
.serenity-color-popup input[type="color"] {\r
  -webkit-appearance: none;\r
  -moz-appearance: none;\r
  appearance: none;\r
  width: 100%;\r
  height: 30px;\r
  background-color: transparent;\r
  border: none;\r
  cursor: pointer;\r
}\r
\r
.serenity-color-popup input[type="color"]::-webkit-color-swatch {\r
  border-radius: 5px;\r
  border: 1px solid var(--border);\r
}\r
\r
.serenity-color-popup input[type="color"]::-moz-color-swatch {\r
  border-radius: 5px;\r
  border: 1px solid var(--border);\r
}\r
\r
.serenity-color-popup .serenity-slider {\r
  margin: 0;\r
}\r
\r
/* Color Picker specific styles */\r
.serenity-color-picker {\r
  -webkit-appearance: none;\r
  -moz-appearance: none;\r
  appearance: none;\r
  width: 100%;\r
  height: 28px;\r
  background-color: transparent;\r
  border: 1px solid var(--border);\r
  border-radius: 6px;\r
  cursor: pointer;\r
}\r
\r
.serenity-color-picker::-webkit-color-swatch {\r
  border-radius: 5px;\r
  border: none;\r
}\r
\r
.serenity-color-picker::-moz-color-swatch {\r
  border-radius: 5px;\r
  border: none;\r
}\r
\r
.cps-counter-display {\r
  position: fixed;\r
  z-index: 9997;\r
  user-select: none;\r
}\r
\r
.serenity-interface-display {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  font-weight: 600;\r
}\r
\r
.serenity-interface-logo {\r
  background-color: var(--accent-color, var(--primary));\r
  color: #fff;\r
  width: 2em;\r
  height: 2em;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 50%;\r
  font-size: 1.2em;\r
  font-weight: 800;\r
}\r
\r
.serenity-interface-info {\r
  display: flex;\r
  gap: 8px;\r
  align-items: center;\r
}\r
\r
.serenity-interface-name {\r
  font-weight: 700;\r
  color: var(--accent-color, var(--primary));\r
}\r
\r
.serenity-interface-gamemode {\r
  font-weight: 700;\r
}\r
\r
.serenity-interface-lobby {\r
  opacity: 0.7;\r
  font-size: 0.9em;\r
}\r
\r
/* Chat Module Styles */\r
.serenity-chat-container {\r
  position: absolute;\r
  width: 350px;\r
  max-width: 25%;\r
  z-index: 1000;\r
  pointer-events: none;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
\r
.serenity-chat-messages {\r
  background-color: var(--panel);\r
  border-radius: 8px;\r
  padding: 10px;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 6px;\r
  pointer-events: auto;\r
  width: 100%;\r
}\r
\r
.serenity-chat-message {\r
  padding: 2px 0;\r
  font-size: var(--chat-font-size, 14px);\r
  color: #fff;\r
  display: flex;\r
  align-items: baseline;\r
  gap: 8px;\r
  line-height: 1.4;\r
}\r
\r
.serenity-message-content {\r
  flex-grow: 1;\r
  white-space: normal;\r
  word-wrap: break-word;\r
}\r
\r
.serenity-message-own-name {\r
  color: var(--accent, #E54B4B) !important;\r
  font-weight: 700;\r
}\r
\r
.serenity-message-tag {\r
  color: #a970e3 !important; /* A nice purple */\r
  font-weight: 600;\r
}\r
\r
.serenity-message-timestamp {\r
  font-size: 0.8em;\r
  opacity: 0.6;\r
}\r
\r
.serenity-chat-input-wrapper {\r
  display: flex;\r
}\r
\r
.serenity-chat-input {\r
  flex-grow: 1;\r
  background: rgba(0,0,0,0.3);\r
  border: 1px solid var(--border);\r
  color: var(--text);\r
  border-radius: 8px;\r
  padding: 10px 14px;\r
  font-size: var(--chat-font-size, 14px);\r
  outline: none;\r
  transition: var(--transition);\r
  pointer-events: auto;\r
}\r
\r
.serenity-chat-input:focus {\r
  border-color: var(--primary);\r
}\r
\r
/* Global styles */\r
body {\r
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
body.serenity-no-scroll {\r
  overflow: hidden;\r
}\r
\r
/* Ensure the font is loaded */\r
\r
/* Keystrokes Module */\r
.keystrokes-display {\r
  --key-size: 52px;\r
  --key-padding: 2px;\r
  --key-radius: 8px;\r
  --key-border: rgba(255, 255, 255, 0.1);\r
  --key-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\r
  --key-shadow-pressed: 0 2px 4px rgba(0, 0, 0, 0.4);\r
  --key-transition: all 0.12s cubic-bezier(0.34, 1.56, 0.64, 1);\r
  --blur-intensity: 10px;\r
  --key-bg: var(--panel);\r
  --key-active-bg: var(--primary);\r
  --key-text: var(--text);\r
  font-family: 'Inter', 'Segoe UI', sans-serif;\r
  position: absolute;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 5px;\r
  z-index: 5;\r
  pointer-events: none;\r
  user-select: none;\r
}\r
\r
.keystrokes-row {\r
  display: flex;\r
  gap: 5px;\r
  justify-content: center;\r
}\r
\r
.keystrokes-key {\r
  position: relative;\r
  width: var(--key-size);\r
  height: var(--key-size);\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  color: var(--key-text);\r
  border-radius: var(--key-radius);\r
  font-size: 16px;\r
  font-weight: 600;\r
  letter-spacing: 0.5px;\r
  user-select: none;\r
  border: none;\r
  background: var(--panel);\r
  transition: var(--key-transition);\r
  overflow: hidden;\r
  transform: translateY(0);\r
  box-shadow: var(--key-shadow);\r
}\r
\r
.keystrokes-key::before {\r
  content: '';\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background: var(--primary);\r
  opacity: 0;\r
  transition: opacity 0.15s ease;\r
  z-index: -1;\r
  border-radius: var(--key-radius);\r
}\r
\r
.keystrokes-key.active {\r
  transform: translateY(2px);\r
  box-shadow: var(--key-shadow-pressed), inset 0 0 0 1px rgba(255, 255, 255, 0.3);\r
  color: white;\r
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);\r
}\r
\r
.keystrokes-key.active::before {\r
  opacity: 1;\r
}\r
\r
.keystrokes-key.space-key {\r
  width: calc(var(--key-size) * 3 + 10px);\r
}\r
\r
.keystrokes-row.mouse-row {\r
  margin-top: 2px;\r
}\r
\r
.keystrokes-key.mouse-button {\r
  flex: 1;\r
  min-width: calc((var(--key-size) * 3 + 10px - 5px) / 2);\r
}\r
\r
.keystrokes-display:not(.show-mouse) .mouse-row {\r
  display: none;\r
}\r
\r
.keystrokes-display.no-animations .keystrokes-key {\r
  transition: none !important;\r
}\r
\r
/* Notification System */\r
.serenity-notification-container {\r
  position: fixed;\r
  top: 20px;\r
  right: 20px;\r
  z-index: 10005;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 10px;\r
  align-items: flex-end;\r
}\r
\r
.serenity-notification {\r
  display: flex;\r
  align-items: center;\r
  width: 350px;\r
  background: var(--panel);\r
  border-radius: 12px;\r
  border: 1px solid var(--border);\r
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);\r
  color: var(--text);\r
  overflow: hidden;\r
  position: relative;\r
  opacity: 0;\r
  padding: 12px;\r
  gap: 12px;\r
}\r
\r
.serenity-notification.exiting {\r
    pointer-events: none;\r
}\r
\r
.serenity-notification-icon-wrapper {\r
  flex-shrink: 0;\r
  width: 40px;\r
  height: 40px;\r
  border-radius: 50%;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  background-color: var(--notification-info-bg);\r
}\r
\r
.serenity-notification-icon {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-size: 20px;\r
  color: var(--notification-info-icon);\r
}\r
\r
.serenity-notification-icon svg {\r
  width: 22px;\r
  height: 22px;\r
}\r
\r
.serenity-notification-content {\r
  padding: 0;\r
  flex-grow: 1;\r
}\r
\r
.serenity-notification-title {\r
  font-weight: 700;\r
  font-size: 15px;\r
  margin-bottom: 2px;\r
}\r
\r
.serenity-notification-message {\r
  font-size: 14px;\r
  line-height: 1.4;\r
  color: var(--text-secondary);\r
}\r
\r
.serenity-notification-message b {\r
    color: var(--text);\r
    font-weight: 600;\r
}\r
\r
.serenity-notification-close {\r
  position: absolute;\r
  top: 8px;\r
  right: 8px;\r
  background: none;\r
  border: none;\r
  color: var(--text-secondary);\r
  font-size: 20px;\r
  line-height: 1;\r
  cursor: pointer;\r
  opacity: 0.7;\r
  transition: var(--transition);\r
}\r
\r
.serenity-notification-close:hover {\r
  opacity: 1;\r
  color: var(--text);\r
}\r
\r
.serenity-notification-timer {\r
  position: absolute;\r
  bottom: 0;\r
  left: 0;\r
  height: 3px;\r
  width: 100%;\r
  background-color: var(--notification-info-icon);\r
  opacity: 0.6;\r
  border-bottom-left-radius: 12px;\r
  border-bottom-right-radius: 12px;\r
}\r
\r
/* Notification Types */\r
.serenity-notification-success .serenity-notification-icon-wrapper { background-color: var(--notification-success-bg); }\r
.serenity-notification-success .serenity-notification-icon { color: var(--notification-success-icon); }\r
.serenity-notification-success .serenity-notification-timer { background-color: var(--notification-success-icon); }\r
\r
.serenity-notification-warning .serenity-notification-icon-wrapper { background-color: var(--notification-warning-bg); }\r
.serenity-notification-warning .serenity-notification-icon { color: var(--notification-warning-icon); }\r
.serenity-notification-warning .serenity-notification-timer { background-color: var(--notification-warning-icon); }\r
\r
.serenity-notification-error .serenity-notification-icon-wrapper { background-color: var(--notification-error-bg); }\r
.serenity-notification-error .serenity-notification-icon { color: var(--notification-error-icon); }\r
.serenity-notification-error .serenity-notification-timer { background-color: var(--notification-error-icon); }\r
\r
/* Animations */\r
@keyframes serenity-notification-in {\r
  from {\r
    opacity: 0;\r
    transform: translateX(100%);\r
  }\r
  to {\r
    opacity: 1;\r
    transform: translateX(0);\r
  }\r
}\r
\r
@keyframes serenity-notification-out {\r
  from {\r
    opacity: 1;\r
    transform: translateX(0);\r
  }\r
  to {\r
    opacity: 0;\r
    transform: translateX(100%);\r
  }\r
}\r
\r
/* ArrayList Module - v2 */\r
.serenity-arraylist-container {\r
  position: fixed;\r
  top: 10px;\r
  right: 10px;\r
  z-index: 9995;\r
  pointer-events: none;\r
  font-weight: 600;\r
  line-height: 1.4;\r
  transition: all 0.3s ease;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
  align-items: flex-end;\r
}\r
\r
.serenity-arraylist-item {\r
  position: relative;\r
  padding: 4px 12px;\r
  background-color: var(--panel);\r
  border-radius: 6px;\r
  transition: all 0.3s ease;\r
  overflow: hidden;\r
  padding-right: 18px; /* Make space for border */\r
}\r
\r
.serenity-arraylist-border {\r
  position: absolute;\r
  top: 0;\r
  right: 0;\r
  bottom: 0;\r
  width: 4px;\r
}\r
\r
.serenity-arraylist-container.with-shadow .serenity-arraylist-item {\r
  text-shadow: 0 1px 3px rgba(0,0,0,0.6);\r
}\r
\r
/* New Config Screen Styles */\r
.serenity-config-screen {\r
    flex-direction: column;\r
    width: 60%;\r
    max-width: 800px;\r
    height: 70vh;\r
    max-height: 600px;\r
}\r
\r
.serenity-config-header {\r
    display: flex;\r
    align-items: center;\r
    justify-content: space-between;\r
    padding: 0 25px;\r
    border-bottom: 1px solid var(--border);\r
    flex-shrink: 0;\r
    height: 60px;\r
}\r
\r
.serenity-config-title {\r
    font-size: 20px;\r
    font-weight: 700;\r
}\r
\r
.serenity-config-tabs {\r
    display: flex;\r
    gap: 5px;\r
}\r
\r
.serenity-config-tab {\r
    padding: 8px 18px;\r
    background: transparent;\r
    border: none;\r
    color: var(--text-secondary);\r
    font-size: 15px;\r
    font-weight: 600;\r
    cursor: pointer;\r
    border-radius: 8px;\r
    transition: var(--transition);\r
}\r
\r
.serenity-config-tab:hover {\r
    background: var(--hover);\r
    color: var(--text);\r
}\r
\r
.serenity-config-tab.active {\r
    background: var(--primary);\r
    color: #fff;\r
    box-shadow: 0 2px 10px rgba(94, 114, 235, 0.3);\r
}\r
\r
.serenity-config-close-btn {\r
    background: none;\r
    border: none;\r
    color: var(--text-secondary);\r
    font-size: 22px;\r
    cursor: pointer;\r
    transition: var(--transition);\r
    padding: 10px;\r
    border-radius: 50%;\r
}\r
\r
.serenity-config-close-btn:hover {\r
    color: var(--text);\r
    background-color: var(--hover);\r
}\r
\r
.serenity-config-content {\r
    flex-grow: 1;\r
    padding: 25px;\r
    overflow-y: auto;\r
}\r
\r
.serenity-placeholder {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    height: 100%;\r
    font-size: 18px;\r
    color: var(--text-secondary);\r
    user-select: none;\r
}\r
\r
/* Theme Editor Styles */\r
.serenity-theme-editor {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 25px;\r
}\r
\r
.serenity-section-subheader {\r
    padding-bottom: 10px;\r
    border-bottom: 1px solid var(--border);\r
}\r
\r
.serenity-subheader-title {\r
    font-size: 18px;\r
    font-weight: 600;\r
    margin-bottom: 4px;\r
}\r
\r
.serenity-subheader-subtitle {\r
    font-size: 14px;\r
    color: var(--text-secondary);\r
}\r
\r
.serenity-theme-control {\r
    display: flex;\r
    align-items: center;\r
}\r
\r
.serenity-theme-color-picker {\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    appearance: none;\r
    width: 60px;\r
    height: 40px;\r
    background-color: transparent;\r
    border: 1px solid var(--border);\r
    border-radius: 8px;\r
    cursor: pointer;\r
}\r
.serenity-theme-color-picker::-webkit-color-swatch {\r
    border-radius: 7px;\r
    border: none;\r
}\r
.serenity-theme-color-picker::-moz-color-swatch {\r
    border-radius: 7px;\r
    border: none;\r
}\r
\r
.serenity-themes-grid {\r
    display: grid;\r
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\r
    gap: 15px;\r
}\r
\r
.serenity-theme-card {\r
    display: flex;\r
    align-items: center;\r
    gap: 12px;\r
    background-color: var(--panel);\r
    padding: 12px;\r
    border-radius: 8px;\r
    border: 1px solid var(--border);\r
    cursor: pointer;\r
    transition: var(--transition);\r
}\r
\r
.serenity-theme-card:hover {\r
    transform: translateY(-2px);\r
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);\r
    border-color: var(--primary);\r
}\r
\r
.serenity-theme-preview {\r
    width: 30px;\r
    height: 30px;\r
    border-radius: 50%;\r
    flex-shrink: 0;\r
}\r
\r
/* New Config Screen Styles */\r
.serenity-config-screen-content {\r
    display: flex;\r
    gap: 25px;\r
    height: 100%;\r
}\r
\r
.serenity-config-tabs-vertical {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 5px;\r
    border-right: 1px solid var(--border);\r
    padding-right: 25px;\r
    flex-shrink: 0;\r
}\r
\r
.serenity-config-tab {\r
    padding: 10px 20px;\r
    background: transparent;\r
    border: none;\r
    color: var(--text-secondary);\r
    font-size: 15px;\r
    font-weight: 600;\r
    cursor: pointer;\r
    border-radius: 8px;\r
    transition: var(--transition);\r
}\r
\r
.serenity-config-tab:hover {\r
    background: var(--hover);\r
    color: var(--text);\r
}\r
\r
.serenity-config-tab.active {\r
    background: var(--primary);\r
    color: #fff;\r
    box-shadow: 0 2px 10px rgba(94, 114, 235, 0.3);\r
}\r
\r
.serenity-config-tab-content {\r
    flex-grow: 1;\r
    overflow-y: auto;\r
    padding: 5px;\r
}\r
\r
.serenity-config-content {\r
    flex-grow: 1;\r
    padding: 25px;\r
    overflow-y: auto;\r
    user-select: none;\r
}\r
\r
/* Config Editor Styles */\r
.serenity-config-editor {\r
    display: grid;\r
    grid-template-columns: 1fr 1fr;\r
    gap: 40px;\r
}\r
\r
.serenity-config-column {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 25px;\r
}\r
\r
.serenity-config-controls-grid {\r
    display: grid;\r
    grid-template-columns: 1fr 1fr;\r
    gap: 20px;\r
    border: 1px solid var(--border);\r
}\r
\r
.serenity-config-toggle-setting {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    background-color: var(--panel);\r
    padding: 15px;\r
    border-radius: var(--radius);\r
    border: 1px solid var(--border);\r
}\r
\r
.serenity-config-manual-actions {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 20px;\r
}\r
\r
.serenity-btn {\r
    padding: 10px 20px;\r
    border-radius: 6px;\r
    border: 1px solid var(--border);\r
    background-color: var(--panel);\r
    color: var(--text);\r
    cursor: pointer;\r
    font-weight: 600;\r
    transition: var(--transition);\r
}\r
\r
.serenity-btn:hover {\r
    background-color: var(--hover);\r
    border-color: var(--primary);\r
}\r
\r
.serenity-btn-primary {\r
    background-color: var(--primary);\r
    border-color: var(--primary);\r
    color: #fff;\r
}\r
\r
.serenity-btn-primary:hover {\r
    background-color: var(--primary-dark);\r
}\r
\r
.serenity-import-export-buttons {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 10px;\r
}\r
\r
.serenity-import-export textarea {\r
    width: 100%;\r
    min-height: 100px;\r
    resize: vertical;\r
    background: rgba(0,0,0,0.2);\r
    border: 1px solid var(--border);\r
    color: var(--text);\r
    border-radius: 8px;\r
    padding: 10px 12px;\r
    font-size: 14px;\r
    box-sizing: border-box;\r
}\r
\r
.serenity-import-export-actions {\r
    display: flex;\r
    gap: 10px;\r
    justify-content: flex-end;\r
}\r
\r
/* Theme Editor Styles */\r
.serenity-theme-editor {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 25px;\r
}\r
\r
/* Hotbar Module Styles */\r
.serenity-hotbar-wrapper {\r
    position: fixed;\r
    bottom: 20px;\r
    left: 50%;\r
    transform: translateX(-50%);\r
    display: flex;\r
    flex-direction: column;\r
    align-items: center;\r
    gap: 8px; /* Add some space between aura bar and hotbar */\r
    pointer-events: none;\r
    user-select: none;\r
}\r
\r
.serenity-hotbar-container {\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    padding: 5px;\r
    pointer-events: auto;\r
}\r
\r
.serenity-hotbar-content {\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    gap: 10px;\r
}\r
\r
.serenity-hotbar-filler {\r
    flex-grow: 1;\r
    max-width: 20px;\r
}\r
\r
.serenity-hotbar-items {\r
    display: flex;\r
    align-items: center;\r
    gap: var(--hotbar-slot-spacing);\r
}\r
\r
.serenity-hotbar-slot {\r
    position: relative;\r
    width: var(--hotbar-slot-size);\r
    height: var(--hotbar-slot-size);\r
    background-color: rgba(0, 0, 0, 0.4);\r
    border: 1px solid rgba(255, 255, 255, 0.1);\r
    border-radius: 4px;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    overflow: hidden;\r
    transition: all 0.15s ease-out;\r
}\r
\r
.serenity-hotbar-slot.selected {\r
    border-color: var(--primary);\r
    box-shadow: 0 0 8px var(--primary);\r
}\r
\r
.serenity-hotbar-item-img {\r
    width: 80%;\r
    height: 80%;\r
    object-fit: contain;\r
    image-rendering: pixelated;\r
}\r
\r
.serenity-slot-number {\r
    position: absolute;\r
    bottom: 2px;\r
    right: 4px;\r
    color: rgba(255, 255, 255, 0.7);\r
    font-size: 10px;\r
    font-weight: bold;\r
    z-index: 1;\r
    text-shadow: 0 0 2px #000;\r
}\r
\r
.serenity-slot-amount {\r
    position: absolute;\r
    top: 2px;\r
    left: 4px;\r
    color: rgba(255, 255, 255, 0.9);\r
    font-size: 12px;\r
    font-weight: bold;\r
    z-index: 1;\r
    text-shadow: 1px 1px 2px #000;\r
}\r
\r
.serenity-hotbar-button {\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    width: 40px;\r
    height: 40px;\r
    background-color: rgba(0, 0, 0, 0.4);\r
    border: 1px solid rgba(255, 255, 255, 0.1);\r
    border-radius: 6px;\r
}\r
\r
.serenity-hotbar-button-icon {\r
    position: relative;\r
    color: #fff;\r
    font-size: 18px;\r
}\r
\r
.serenity-hotbar-key-helper {\r
    position: absolute;\r
    bottom: -12px;\r
    right: -8px;\r
    font-size: 10px;\r
    background-color: rgba(0, 0, 0, 0.6);\r
    color: #fff;\r
    border-radius: 3px;\r
    padding: 1px 4px;\r
    font-weight: bold;\r
}\r
\r
.hotbar-style-compact .serenity-hotbar-slot {\r
    border-radius: 2px;\r
    margin: 0 1px !important;\r
}\r
\r
.hotbar-style-compact .serenity-hotbar-button {\r
    border-radius: 2px;\r
}\r
\r
.hotbar-style-modern .serenity-hotbar-slot {\r
    background-color: rgba(20, 22, 30, 0.7);\r
    border-radius: 8px;\r
    backdrop-filter: blur(10px);\r
    -webkit-backdrop-filter: blur(10px);\r
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
    transition: transform 0.2s ease;\r
}\r
\r
.hotbar-style-modern .serenity-hotbar-slot.selected {\r
    transform: translateY(-2px);\r
    box-shadow: 0 6px 10px rgba(94, 114, 235, 0.3);\r
}\r
\r
.hotbar-style-modern .serenity-hotbar-button {\r
    background-color: rgba(20, 22, 30, 0.7);\r
    border-radius: 8px;\r
    backdrop-filter: blur(10px);\r
    -webkit-backdrop-filter: blur(10px);\r
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
}\r
\r
/* Aura Bar Styles */\r
.serenity-aura-bar {\r
    width: 250px;\r
    height: 18px;\r
    background-color: rgba(0, 0, 0, 0.4);\r
    border: 1px solid rgba(255, 255, 255, 0.1);\r
    border-radius: 4px;\r
    display: flex;\r
    align-items: center;\r
    padding: 2px;\r
    position: relative;\r
    overflow: hidden;\r
}\r
\r
.serenity-aura-bar-background {\r
    position: absolute;\r
    left: 0;\r
    top: 0;\r
    height: 100%;\r
    width: 100%;\r
    border-radius: 4px;\r
    overflow: hidden;\r
}\r
\r
.serenity-aura-bar-progress {\r
    height: 100%;\r
    background-color: var(--primary);\r
    transition: width 0.3s ease-in-out;\r
}\r
\r
.serenity-aura-bar-text {\r
    position: relative;\r
    z-index: 1;\r
    width: 100%;\r
    text-align: center;\r
    color: #fff;\r
    font-weight: bold;\r
    font-size: 12px;\r
    text-shadow: 0 0 3px #000;\r
}\r
\r
/* Fluid Hero Animation */\r
@keyframes fluid-hero {\r
  0% { background-position: 0% 50%; }\r
  50% { background-position: 100% 50%; }\r
  100% { background-position: 0% 50%; }\r
}\r
\r
.serenity-theme-panel-controls {\r
    display: grid;\r
    grid-template-columns: 1fr 1fr;\r
    gap: 20px;\r
    align-items: center;\r
}\r
\r
.serenity-theme-control-group {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 8px;\r
}\r
\r
.serenity-theme-control-group label {\r
    font-size: 14px;\r
    font-weight: 500;\r
    color: var(--text-secondary);\r
}\r
\r
.serenity-waypoint-static {\r
  --waypoint-color: #5E72EB;\r
  position: fixed;\r
  z-index: 9996;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  pointer-events: none;\r
  user-select: none;\r
}\r
\r
.waypoint-static-icon {\r
  width: 48px;\r
  height: 48px;\r
  color: var(--waypoint-color);\r
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5));\r
}\r
\r
.waypoint-static-text {\r
  background-color: rgba(20, 22, 28, 0.7);\r
  color: #fff;\r
  padding: 6px 12px;\r
  border-radius: 8px;\r
  text-align: center;\r
  font-weight: 600;\r
  font-size: 14px;\r
  margin-top: 4px;\r
  border: 1px solid rgba(255, 255, 255, 0.1);\r
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);\r
  white-space: nowrap;\r
}\r
\r
.waypoint-static-title {\r
  display: block;\r
}\r
\r
.waypoint-static-distance {\r
  display: block;\r
  font-size: 12px;\r
  opacity: 0.7;\r
}\r
\r
/* Waypoint Manager UI */\r
.serenity-waypoint-general-settings {\r
  margin-bottom: 20px;\r
  padding-bottom: 15px;\r
  border-bottom: 1px solid var(--border);\r
}\r
\r
.serenity-waypoint-actions {\r
  display: flex;\r
  gap: 10px;\r
  margin-bottom: 20px;\r
}\r
\r
.serenity-waypoint-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 10px;\r
}\r
\r
.serenity-waypoint-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  background-color: var(--panel);\r
  padding: 10px;\r
  border-radius: 8px;\r
  border: 1px solid var(--border);\r
}\r
\r
.serenity-waypoint-color-preview {\r
  width: 24px;\r
  height: 24px;\r
  border-radius: 50%;\r
  flex-shrink: 0;\r
  border: 2px solid var(--background);\r
}\r
\r
.serenity-waypoint-info {\r
  flex-grow: 1;\r
}\r
\r
.serenity-waypoint-info .title {\r
  font-weight: 600;\r
  font-size: 15px;\r
}\r
\r
.serenity-waypoint-info .coords {\r
  display: block;\r
  font-size: 12px;\r
  color: var(--text-secondary);\r
}\r
\r
.serenity-waypoint-controls {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
}\r
\r
.serenity-waypoint-controls button {\r
  background: var(--hover);\r
  border: none;\r
  color: var(--text-secondary);\r
  width: 30px;\r
  height: 30px;\r
  border-radius: 6px;\r
  cursor: pointer;\r
  transition: var(--transition);\r
}\r
\r
.serenity-waypoint-controls button:hover {\r
  background: var(--primary);\r
  color: #fff;\r
}\r
\r
.coord-inputs {\r
    display: grid;\r
    grid-template-columns: repeat(3, 1fr);\r
    gap: 10px;\r
}\r
\r
/* Keybind Editor Styles */\r
.serenity-keybind-editor {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 20px;\r
    /* Allow the container to shrink and enable scrolling on its child */\r
    height: 100%;\r
    min-height: 0;\r
}\r
\r
.serenity-keybind-list {\r
    display: grid;\r
    grid-template-columns: repeat(3, 1fr);\r
    gap: 15px;\r
    overflow-y: auto;\r
    padding-right: 10px; /* Space for scrollbar */\r
}\r
\r
.serenity-keybind-item {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    background-color: var(--panel);\r
    padding: 12px;\r
    border-radius: 8px;\r
    border: 1px solid var(--border);\r
}\r
\r
.serenity-keybind-name {\r
    font-weight: 600;\r
    font-size: 14px;\r
}\r
\r
.serenity-keybind-button {\r
    background: rgba(0,0,0,0.2);\r
    border: 1px solid var(--border);\r
    color: var(--text-secondary);\r
    padding: 6px 12px;\r
    border-radius: 6px;\r
    min-width: 60px;\r
    text-align: center;\r
    cursor: pointer;\r
    transition: var(--transition);\r
}\r
\r
.serenity-keybind-button:hover {\r
    background-color: var(--hover);\r
    color: var(--text);\r
}\r
\r
.serenity-keybind-button.binding {\r
    background-color: var(--primary);\r
    color: #fff;\r
    border-color: var(--primary-dark);\r
}\r
`;var ye={name:"ClickGUI",category:"Visual",description:"The main user interface for the client.",enabled:!0,element:null,overlay:null,activeCategory:"Visual",activeSettingsModule:null,isEditingHUD:!1,activeHUDSettingsPopup:null,searchQuery:"",isGuiOpen:!1,isCleaningUp:!1,activeConfigTab:"Themes",activeView:"modules",onEnable(t){if(!(this.isCleaningUp||this.element)){if(this.isGuiOpen=!0,document.body.classList.add("serenity-no-scroll"),document.pointerLockElement&&document.exitPointerLock(),!document.getElementById("font-awesome-link")){let e=document.createElement("link");e.id="font-awesome-link",e.rel="stylesheet",e.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",document.head.appendChild(e)}this.interface(),this.createGUI(t),this.updateContent(t),setTimeout(()=>{this.overlay&&this.overlay.classList.add("visible"),this.element&&this.element.classList.add("visible")},50)}},onDisable(t){this.isGuiOpen=!1,this.exitHUDeditor(t),document.body.classList.remove("serenity-no-scroll");let e=document.getElementById("noa-canvas");e&&!document.pointerLockElement&&(e.requestPointerLock(),e.click()),this.cleanup()},cleanup(){this.overlay&&!this.isCleaningUp&&(this.isCleaningUp=!0,this.overlay.classList.remove("visible"),this.element.classList.remove("visible"),setTimeout(()=>{this.overlay&&document.body.removeChild(this.overlay),this.element&&document.body.removeChild(this.element),this.overlay=null,this.element=null,this.isCleaningUp=!1,document.body.classList.remove("serenity-no-scroll");let t=document.getElementById("font-awesome-link");t&&document.head.removeChild(t)},300))},interface(){let t=()=>{let i=document.querySelector(".InGameHeader");if(i&&(i.style.backgroundColor="rgba(30, 33, 41, var(--panel-opacity))",i.style.padding="26px 5px 26px 5px",i.style.borderRadius="10px",!document.querySelector(".serenity"))){let o=document.createElement("div");o.classList.add("serenity"),o.style.display="flex",o.style.alignItems="center",o.style.marginRight="0px";let s=document.createElement("div");s.style.backgroundColor="var(--accent-color, var(--primary))",s.style.color="#fff",s.style.width="1.7em",s.style.height="1.7em",s.style.display="flex",s.style.alignItems="center",s.style.justifyContent="center",s.style.borderRadius="50%",s.style.fontSize="1.2em",s.style.fontWeight="bolder",s.style.margin="0 0 0 5px",s.textContent="S";let r=document.createElement("span");r.textContent="erenity",r.style.fontSize="1.1em",r.style.fontWeight="bolder",r.style.textShadow=" 0 0 10px var(--primary)",r.style.color="#fff",r.style.display="flex",r.style.alignItems="center",r.style.marginLeft="3px",r.style.marginTop="-2px",o.appendChild(s),o.appendChild(r),i.prepend(o)}["LikeButton","InGameHeaderLogo","InGameHeaderSpacer"].forEach(o=>{document.querySelectorAll("."+o).forEach(s=>{s.style.display="none",s.style.opacity="0"})}),["FpsWrapperDiv","CoordinateUI"].forEach(o=>{document.querySelectorAll("."+o).forEach(s=>{s.style.backgroundColor="rgba(30, 33, 41, var(--panel-opacity))",s.style.borderRadius="10px",s.style.paddingTop="26px",s.style.paddingBottom="26px"})}),["FpsCanvas","CoordinateCanvas"].forEach(o=>{document.querySelectorAll("."+o).forEach(s=>{s.style.height="14px"})});let n=document.querySelector(".InGameHeaderLobbyName");n&&(n.style.color="gray",n.style.borderRadius="8px")};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),t()},createGUI(t){this.overlay=document.createElement("div"),this.overlay.className="serenity-overlay",document.body.appendChild(this.overlay),this.element=document.createElement("div"),this.element.className="serenity-container";let e=this.createSidebar(t);this.element.appendChild(e);let i=this.createContent(t);this.element.appendChild(i),document.body.appendChild(this.element)},createSidebar(t){let e=document.createElement("div");e.className="serenity-sidebar";let i=document.createElement("div");i.className="serenity-logo",i.innerHTML=`
      <a href="https://discord.gg/serenityclient" target="_blank"><h1>Serenity</h1></a>
      <span>CLIENT v1.3</span>
    `,e.appendChild(i);let n=t.categories,o={Visual:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin-right: 12px;"><path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>',Utility:'<i class="fas fa-cog"></i>',Combat:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin-right: 12px;"><path fill="currentColor" d="M256 0c17.7 0 32 14.3 32 32l0 10.4c93.7 13.9 167.7 88 181.6 181.6l10.4 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-10.4 0c-13.9 93.7-88 167.7-181.6 181.6l0 10.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-10.4C130.3 455.7 56.3 381.7 42.4 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l10.4 0C56.3 130.3 130.3 56.3 224 42.4L224 32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6l0-20.6c0-17.7 14.3-32 32-32s32 14.3 32 32l0 20.6c58.3-12.5 104.1-58.4 116.6-116.6L384 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l20.6 0C392.1 165.7 346.3 119.9 288 107.4l0 20.6c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-20.6C165.7 119.9 119.9 165.7 107.4 224l20.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-20.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',Player:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin-right: 12px;"><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>',Movement:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin-right: 12px;"><path fill="currentColor" d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288l21.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-21.3 0c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352L32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l69.6 0c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"/></svg>'};n.forEach(l=>{let c=document.createElement("div");c.className=`serenity-category ${l===this.activeCategory?"active":""}`;let d=o[l]||o.Utility;c.innerHTML=`
        <span class="serenity-category-icon">${d}</span>
        ${l}
      `,c.addEventListener("click",()=>{document.querySelectorAll(".serenity-category").forEach(p=>{p.classList.remove("active")}),c.classList.add("active"),this.activeCategory=l,this.activeSettingsModule=null,this.searchQuery="",this.closeHUDSettingsPopup(),this.updateContent(t)}),e.appendChild(c)});let s=document.createElement("div");s.className="serenity-sidebar-footer";let r=document.createElement("div");r.className="serenity-category serenity-hud-editor-btn",r.innerHTML='<svg class="serenity-category-icon" style="width: 1.2em; margin-right: 12px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/></svg> HUD Editor',r.addEventListener("click",()=>{this.isEditingHUD=!0,this.renderHUDeditor(t)}),s.appendChild(r);let a=document.createElement("div");return a.className="serenity-category serenity-config-btn",a.innerHTML='<svg class="serenity-category-icon" style="width: 1.2em; margin-right: 12px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg> Settings',a.addEventListener("click",()=>{this.activeView="settings",this.updateContent(t)}),s.appendChild(a),e.appendChild(s),e},exitHUDeditor(t){if(!this.isEditingHUD)return;let e=document.querySelector(".serenity-hud-editor-overlay");e&&document.body.removeChild(e),this.isEditingHUD=!1,this.closeHUDSettingsPopup(),this.overlay&&(this.overlay.style.zIndex="1000000000"),t.list().forEach(i=>{i.enabled&&i.element&&(i.element.style.zIndex=i.name==="ArmorHUD"||i.name==="FPSCounter"||i.name==="Interface"?9997:"",i.element.style.pointerEvents="none",i.element.style.cursor="",i.element.onmousedown=null)})},renderHUDeditor(t){this.element.style.display="none",this.overlay&&(this.overlay.style.zIndex="-1");let e=document.createElement("div");e.className="serenity-hud-editor-overlay",document.body.appendChild(e);let i=document.createElement("div");i.className="serenity-hud-grid",e.appendChild(i),t.list().forEach(o=>{o.enabled&&o.element&&(o.element.style.zIndex=10001,o.element.style.pointerEvents="auto",this.makeElementDraggable(o.element,o,t))});let n=document.createElement("button");n.className="serenity-hud-done-btn",n.textContent="Done",n.addEventListener("click",()=>{this.exitHUDeditor(t),this.element.style.display="flex",this.element.style.pointerEvents="auto",this.element.style.zIndex="1000000001"}),e.appendChild(n)},makeElementDraggable(t,e,i){if(!t||e.name==="ClickGUI")return;let n=0,o=0,s=0,r=0,a=d=>{d.preventDefault(),s=d.clientX,r=d.clientY;let p=t.getBoundingClientRect();t.style.top=`${p.top}px`,t.style.left=`${p.left}px`,t.style.bottom="auto",t.style.right="auto",document.onmouseup=c,document.onmousemove=l},l=d=>{d.preventDefault(),n=s-d.clientX,o=r-d.clientY,s=d.clientX,r=d.clientY;let p=t.offsetTop-o,u=t.offsetLeft-n,h=window.innerWidth,m=window.innerHeight,g=t.offsetWidth,b=t.offsetHeight;if(u=Math.max(0,Math.min(u,h-g)),p=Math.max(0,Math.min(p,m-b)),t.style.top=`${p}px`,t.style.left=`${u}px`,this.activeHUDSettingsPopup&&this.activeHUDSettingsPopup.moduleName===e.name){let y=this.activeHUDSettingsPopup.element,f=y.offsetWidth,v=u+g+10;v+f>h&&(v=u-f-10),y.style.top=`${p}px`,y.style.left=`${v}px`}},c=()=>{document.onmouseup=null,document.onmousemove=null,i.updateModulePosition(e.name,t.offsetLeft,t.offsetTop)};t.onmousedown=a,t.oncontextmenu=d=>{d.preventDefault(),this.showHUDSettingsPopup(d,e,i,t)},t.style.cursor="move"},showHUDSettingsPopup(t,e,i,n){this.closeHUDSettingsPopup();let o=document.createElement("div");o.className="serenity-hud-settings-popup";let s=document.createElement("div");s.className="serenity-hud-popup-header";let r=document.createElement("span");r.textContent=e.name;let a=document.createElement("button");a.className="serenity-hud-popup-close-btn",a.innerHTML="&times;",a.onclick=()=>this.closeHUDSettingsPopup(),s.appendChild(r),s.appendChild(a),o.appendChild(s);let l=document.createElement("div");l.className="serenity-hud-popup-body",e.settings.forEach(g=>{let b=this.createSettingElement(e,g,i);b&&l.appendChild(b)}),o.appendChild(l);let c=document.createElement("div");c.className="serenity-hud-popup-footer";let d=document.createElement("button");d.className="serenity-hud-popup-reset-btn",d.textContent="Reset to Defaults",d.onclick=()=>{i.resetModuleSettings(e.name),this.showHUDSettingsPopup(t,i.get(e.name),i,n)},c.appendChild(d),o.appendChild(c),document.body.appendChild(o);let p=n.getBoundingClientRect(),u=window.innerWidth,h=o.offsetWidth,m=p.left+p.width+10;m+h>u&&(m=p.left-h-10),o.style.top=`${p.top}px`,o.style.left=`${m}px`,this.activeHUDSettingsPopup={element:o,moduleName:e.name}},closeHUDSettingsPopup(){this.activeHUDSettingsPopup&&(document.body.removeChild(this.activeHUDSettingsPopup.element),this.activeHUDSettingsPopup=null)},createContent(t){let e=document.createElement("div");return e.className="serenity-content",this.populateModulesContent(e,t),e},updateContent(t){let e=this.element.querySelector(".serenity-content");e.innerHTML="",this.activeView==="settings"?this.element.classList.add("settings-view-active"):this.element.classList.remove("settings-view-active"),this.activeSettingsModule?this.populateSettingsContent(e,t):this.activeView==="settings"?this.renderSettingsScreen(e,t):this.populateModulesContent(e,t)},renderSettingsScreen(t,e){let i=document.createElement("div");i.className="serenity-settings-header";let n=document.createElement("button");n.className="serenity-back-btn",n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="width: 0.7em; height: 0.7em; margin-right: 8px; vertical-align: middle;"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg> Back',n.addEventListener("click",()=>{this.activeView="modules",this.activeSettingsModule=null,this.updateContent(e)});let o=document.createElement("span");o.textContent="Settings",i.appendChild(n),i.appendChild(o),t.appendChild(i);let s=document.createElement("div");s.className="serenity-config-screen-content";let r=document.createElement("div");r.className="serenity-config-tabs-vertical",r.innerHTML=`
        <button class="serenity-config-tab active" data-tab="Themes">Themes</button>
        <button class="serenity-config-tab" data-tab="Config">Config</button>
        <button class="serenity-config-tab" data-tab="Keybinds">Keybinds</button>
        <button class="serenity-config-tab" data-tab="Scripting">Scripting</button>
    `,s.appendChild(r);let a=document.createElement("div");a.className="serenity-config-tab-content",s.appendChild(a),t.appendChild(s),r.querySelectorAll(".serenity-config-tab").forEach(l=>{l.addEventListener("click",()=>{r.querySelectorAll(".serenity-config-tab").forEach(c=>c.classList.remove("active")),l.classList.add("active"),this.activeConfigTab=l.dataset.tab,this.renderConfigContent(e)})}),this.renderConfigContent(e)},renderConfigContent(t){let e=this.element.querySelector(".serenity-config-tab-content");if(e)switch(e.innerHTML="",this.activeConfigTab){case"Themes":this.renderThemesContent(e,t);break;case"Config":this.renderConfigSubContent(e,t);break;case"Keybinds":this.renderKeybindsContent(e,t);break;case"Scripting":this.renderScriptingContent(e,t);break}},renderThemesContent(t,e){let i=document.createElement("div");i.className="serenity-theme-editor";let n=this.createSectionHeader("Accent Color","Sets the main color for UI elements.");i.appendChild(n);let o=document.createElement("div");o.className="serenity-theme-control";let s=document.createElement("input");s.type="color",s.className="serenity-theme-color-picker",s.value=getComputedStyle(document.documentElement).getPropertyValue("--primary").trim(),s.addEventListener("input",y=>{let f=y.target.value;document.documentElement.style.setProperty("--primary",f),document.documentElement.style.setProperty("--primary-dark",this.shadeColor(f,-20)),e.saveConfiguration()}),o.appendChild(s),i.appendChild(o);let r=this.createSectionHeader("Panel Style","Customize the look of UI backgrounds.");i.appendChild(r);let a=document.createElement("div");a.className="serenity-theme-panel-controls";let l=document.createElement("div");l.className="serenity-theme-control-group",l.innerHTML="<label>Panel Color</label>";let c=document.createElement("input");c.type="color",c.className="serenity-theme-color-picker";let d=getComputedStyle(document.documentElement).getPropertyValue("--panel-base").trim();c.value=d,c.addEventListener("input",y=>{document.documentElement.style.setProperty("--panel-base",y.target.value),e.saveConfiguration()}),l.appendChild(c),a.appendChild(l);let p=document.createElement("div");p.className="serenity-theme-control-group",p.innerHTML="<label>Panel Opacity</label>";let u=document.createElement("input");u.type="range",u.className="serenity-slider",u.min=0,u.max=1,u.step=.01;let h=getComputedStyle(document.documentElement).getPropertyValue("--panel-opacity").trim();u.value=h,u.addEventListener("input",y=>{document.documentElement.style.setProperty("--panel-opacity",y.target.value),e.saveConfiguration()}),p.appendChild(u),a.appendChild(p),i.appendChild(a);let m=this.createSectionHeader("Themes","Select from a pre-made color scheme.");i.appendChild(m);let g=document.createElement("div");g.className="serenity-themes-grid",[{name:"Serenity",color:"#5E72EB"},{name:"Sunset",color:"#E54B4B"},{name:"Emerald",color:"#3f9a56"},{name:"Goldenrod",color:"#cda34a"},{name:"Amethyst",color:"#9b59b6"}].forEach(y=>{let f=document.createElement("div");f.className="serenity-theme-card",f.innerHTML=`<div class="serenity-theme-preview" style="background-color: ${y.color};"></div><span>${y.name}</span>`,f.addEventListener("click",()=>{document.documentElement.style.setProperty("--primary",y.color),document.documentElement.style.setProperty("--primary-dark",this.shadeColor(y.color,-20)),s.value=y.color,e.saveConfiguration()}),g.appendChild(f)}),i.appendChild(g),t.appendChild(i)},renderKeybindsContent(t,e){t.innerHTML="";let i=e.keybindManager,n=document.createElement("div");n.className="serenity-keybind-editor";let o=this.createSectionHeader("Module Keybinds","Click a key to set a new bind. Press ESC to cancel, or Backspace/Delete to unbind.");n.appendChild(o);let s=document.createElement("div");s.className="serenity-keybind-list",e.list().filter(a=>a.name!=="ClickGUI").sort((a,l)=>a.name.localeCompare(l.name)).forEach(a=>{let l=document.createElement("div");l.className="serenity-keybind-item";let c=document.createElement("span");c.className="serenity-keybind-name",c.textContent=a.name;let d=document.createElement("button");d.className="serenity-keybind-button";let p=i.getBind(a.name);d.textContent=p?this.formatKeyCode(p):"None",d.onclick=()=>{document.querySelectorAll(".serenity-keybind-button").forEach(u=>u.disabled=!0),d.textContent="[...]",d.classList.add("binding"),d.disabled=!1,i.startBinding(a.name,()=>{this.renderKeybindsContent(t,e)})},l.appendChild(c),l.appendChild(d),s.appendChild(l)}),n.appendChild(s),t.appendChild(n)},formatKeyCode(t){return t.startsWith("Key")?t.substring(3):t.startsWith("Digit")?t.substring(5):t.startsWith("Numpad")?`Num ${t.substring(6)}`:t},createSectionHeader(t,e){let i=document.createElement("div");return i.className="serenity-section-subheader",i.innerHTML=`
        <div class="serenity-subheader-title">${t}</div>
        <div class="serenity-subheader-subtitle">${e}</div>
      `,i},renderConfigSubContent(t,e){let i=document.createElement("div");i.className="serenity-config-editor";let n=document.createElement("div");n.className="serenity-config-column";let o=this.createSectionHeader("General","Manage how your configuration is handled.");n.appendChild(o);let s=document.createElement("div");s.className="serenity-config-controls-grid";let r=this.createToggleSetting("Auto Save","Automatically save changes.",e.autoSave,f=>{e.autoSave=f,e.forceSaveConfiguration()});s.appendChild(r);let a=this.createToggleSetting("Auto Load","Load config on startup.",e.autoLoad,f=>{e.autoLoad=f,e.forceSaveConfiguration()});s.appendChild(a),n.appendChild(s);let l=this.createSectionHeader("Manual Control","Manually save or load the current config.");n.appendChild(l);let c=document.createElement("div");c.className="serenity-config-manual-buttons";let d=document.createElement("button");d.className="serenity-btn",d.textContent="Force Save",d.onclick=()=>{e.forceSaveConfiguration(),d.textContent="Saved!",setTimeout(()=>{d.textContent="Force Save"},2e3)},c.appendChild(d);let p=document.createElement("button");p.className="serenity-btn",p.textContent="Force Load",p.onclick=()=>e.loadConfiguration(),c.appendChild(p);let u=document.createElement("button");u.className="serenity-btn serenity-btn-danger",u.textContent="Reset All",u.onclick=()=>{confirm("Are you sure you want to reset all settings to their defaults? This action cannot be undone.")&&(e.loadConfiguration({}),setTimeout(()=>{window.location.reload()},500))},c.appendChild(u),n.appendChild(c),i.appendChild(n);let h=document.createElement("div");h.className="serenity-config-column";let m=this.createSectionHeader("Import / Export","Share your configuration with others.");h.appendChild(m);let g=document.createElement("div");g.className="serenity-import-export-buttons";let b=document.createElement("button");b.className="serenity-btn serenity-btn-primary",b.innerHTML='<i class="fas fa-upload"></i> Import from File',b.onclick=()=>{let f=document.createElement("input");f.type="file",f.accept=".json",f.onchange=v=>{let C=v.target.files[0];if(!C)return;let w=new FileReader;w.onload=x=>{try{e.importConfiguration(x.target.result),alert("Configuration imported successfully!")}catch{alert("Failed to import configuration. The file may be corrupt or improperly formatted.")}},w.readAsText(C)},f.click()};let y=document.createElement("button");y.className="serenity-btn",y.innerHTML='<i class="fas fa-download"></i> Export to File',y.onclick=()=>{let f=e.exportConfiguration(),v=JSON.stringify(f,null,2);navigator.clipboard.writeText(v).then(()=>{this.notifications.show({title:"Config Exported",message:"Configuration copied to clipboard.",type:"success"})});let C=new Blob([v],{type:"application/json"}),w=URL.createObjectURL(C),x=document.createElement("a");x.href=w,x.download="serenity-config.json",document.body.appendChild(x),x.click(),document.body.removeChild(x),URL.revokeObjectURL(w)},g.appendChild(b),g.appendChild(y),h.appendChild(g),i.appendChild(h),t.appendChild(i)},renderScriptingContent(t,e){t.innerHTML='<div class="serenity-placeholder">Scripting coming soon...</div>'},shadeColor(t,e){let i=parseInt(t.substring(1,3),16),n=parseInt(t.substring(3,5),16),o=parseInt(t.substring(5,7),16);i=parseInt(i*(100+e)/100),n=parseInt(n*(100+e)/100),o=parseInt(o*(100+e)/100),i=i<255?i:255,n=n<255?n:255,o=o<255?o:255;let s=i.toString(16).length==1?"0"+i.toString(16):i.toString(16),r=n.toString(16).length==1?"0"+n.toString(16):n.toString(16),a=o.toString(16).length==1?"0"+o.toString(16):o.toString(16);return"#"+s+r+a},populateModulesContent(t,e){let i=document.createElement("div");i.className="serenity-section-header";let n=document.createElement("span");n.textContent=this.activeCategory;let o=document.createElement("input");o.type="text",o.className="serenity-search-bar",o.placeholder="Search...",o.value=this.searchQuery,o.addEventListener("input",r=>{this.searchQuery=r.target.value,this.filterAndRenderModules(e)}),i.appendChild(n),i.appendChild(o),t.appendChild(i);let s=document.createElement("div");s.className="serenity-modules",t.appendChild(s),this.filterAndRenderModules(e)},filterAndRenderModules(t){let e=this.element.querySelector(".serenity-modules");if(!e)return;e.innerHTML="",t.getModulesByCategory(this.activeCategory).filter(o=>o.name.toLowerCase().includes(this.searchQuery.toLowerCase())).forEach(o=>{let s=this.createModuleCard(o,t);e.appendChild(s)})},createModuleCard(t,e){let i=document.createElement("div");i.className="serenity-module";let n=document.createElement("div");n.className="serenity-module-header";let o=document.createElement("div");o.className="serenity-module-name",o.textContent=t.name,n.appendChild(o);let s=document.createElement("div");if(s.className="serenity-module-controls",t.settings.length>0){let a=document.createElement("button");a.className="serenity-module-settings-btn",a.innerHTML='<i class="fas fa-cog"></i>',a.addEventListener("click",l=>{l.stopPropagation(),this.activeSettingsModule=t,this.updateContent(e)}),s.appendChild(a)}let r=document.createElement("div");if(r.className=`serenity-module-toggle ${t.enabled?"enabled":""}`,r.innerHTML='<span class="serenity-toggle-slider"></span>',r.addEventListener("click",()=>{e.toggle(t.name),r.classList.toggle("enabled")}),s.appendChild(r),n.appendChild(s),i.appendChild(n),t.description){let a=document.createElement("div");a.className="serenity-module-description",a.textContent=t.description,i.appendChild(a)}return i},populateSettingsContent(t,e){let i=this.activeSettingsModule;if(!i)return;let n=document.createElement("div");n.className="serenity-section";let o=document.createElement("div");o.className="serenity-settings-header";let s=document.createElement("button");s.className="serenity-back-btn",s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="width: 0.7em; height: 0.7em; margin-right: 8px; vertical-align: middle;"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg> Back',s.addEventListener("click",()=>{this.activeSettingsModule=null,this.updateContent(e)});let r=document.createElement("span");r.textContent=`${i.name} Settings`,o.appendChild(s),o.appendChild(r),n.appendChild(o);let a=document.createElement("div");a.className="serenity-module-settings",i.name==="Waypoint"?this.renderWaypointManager(a,e):i.name==="Nametags"?i.renderNametagManager(a,e):i.settings.forEach(l=>{let c=this.createSettingElement(i,l,e);if(c){if(l.condition){let d=l.condition(i.settings.reduce((p,u)=>({...p,[u.id]:u.value}),{}));c.style.display=d?"":"none"}a.appendChild(c)}}),n.appendChild(a),t.appendChild(n)},renderWaypointManager(t,e){t.innerHTML="";let i=e.get("Waypoint");if(!i)return;let n=document.createElement("div");n.className="serenity-waypoint-general-settings",i.settings.filter(l=>l.type!=="info").forEach(l=>{let c=this.createSettingElement(i,l,e);n.appendChild(c)}),t.appendChild(n);let o=document.createElement("div");o.className="serenity-waypoint-actions";let s=document.createElement("button");s.className="serenity-btn serenity-btn-primary",s.textContent="Add at Current Location",s.onclick=()=>{let l=i.getCurrentPlayerPosition();l?(i.addWaypoint({...l}),this.renderWaypointManager(t,e)):alert("Could not get player position.")};let r=document.createElement("button");r.className="serenity-btn",r.textContent="Create Manually",r.onclick=()=>{i.addWaypoint({}),this.renderWaypointManager(t,e)},o.appendChild(s),o.appendChild(r),t.appendChild(o);let a=document.createElement("div");a.className="serenity-waypoint-list",i.getWaypoints().forEach(l=>{let c=document.createElement("div");c.className="serenity-waypoint-item";let d=document.createElement("div");d.className="serenity-waypoint-color-preview",d.style.backgroundColor=l.color;let p=document.createElement("div");p.className="serenity-waypoint-info",p.innerHTML=`
        <span class="title">${l.title}</span>
        <span class="coords">X: ${l.x}, Y: ${l.y}, Z: ${l.z}</span>
      `;let u=document.createElement("div");u.className="serenity-waypoint-controls";let h=document.createElement("input");h.type="checkbox",h.className="serenity-checkbox",h.checked=l.enabled,h.onchange=b=>{i.updateWaypoint(l.id,{enabled:b.target.checked})};let m=document.createElement("button");m.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M402.6 83.2l90.2 90.2c12.5 12.5 12.5 32.8 0 45.3l-283.2 283.2c-12.5 12.5-32.8 12.5-45.3 0L32.2 368.2c-12.5-12.5-12.5-32.8 0-45.3l283.2-283.2c12.5-12.5 32.8-12.5 45.3 0zm47.4 18.7c-9.2-9.2-22.9-11.9-35.8-9.8l-15.6 15.6 100.2 100.2 15.6-15.6c2.1-12.9-.6-26.6-9.8-35.8l-55.2-55.2zM384 346.7L128 480H0V352l256-256L384 346.7z"/></svg>',m.onclick=()=>this.showWaypointEditPopup(l,e);let g=document.createElement("button");g.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>',g.onclick=()=>{confirm(`Are you sure you want to delete "${l.title}"?`)&&(i.removeWaypoint(l.id),this.renderWaypointManager(t,e))},u.appendChild(h),u.appendChild(m),u.appendChild(g),c.appendChild(d),c.appendChild(p),c.appendChild(u),a.appendChild(c)}),t.appendChild(a)},showWaypointEditPopup(t,e){let i=e.get("Waypoint"),n=document.createElement("div");n.className="serenity-config-popup",n.innerHTML=`
          <div class="serenity-config-popup-header">
              <span>Edit Waypoint</span>
          </div>
          <div class="serenity-config-popup-body">
              <input type="text" id="wp-title" class="serenity-text-input" placeholder="Title" value="${t.title}">
              <div class="coord-inputs">
                  <input type="text" id="wp-x" class="serenity-text-input" placeholder="X" value="${t.x}">
                  <input type="text" id="wp-y" class="serenity-text-input" placeholder="Y" value="${t.y}">
                  <input type="text" id="wp-z" class="serenity-text-input" placeholder="Z" value="${t.z}">
              </div>
              <input type="color" id="wp-color" value="${t.color}">
          </div>
          <div class="serenity-config-popup-footer">
              <button id="wp-cancel" class="serenity-btn">Cancel</button>
              <button id="wp-save" class="serenity-btn serenity-btn-primary">Save</button>
          </div>
      `;let o=document.createElement("div");o.className="serenity-overlay visible",o.style.zIndex="10001",document.body.appendChild(o),document.body.appendChild(n);let s=()=>{document.body.removeChild(n),document.body.removeChild(o),this.updateContent(e)};n.querySelector("#wp-save").onclick=()=>{let r={title:n.querySelector("#wp-title").value,x:n.querySelector("#wp-x").value,y:n.querySelector("#wp-y").value,z:n.querySelector("#wp-z").value,color:n.querySelector("#wp-color").value};i.updateWaypoint(t.id,r),s()},n.querySelector("#wp-cancel").onclick=s},createSettingElement(t,e,i){let n=document.createElement("div");n.className="serenity-setting",n.dataset.settingId=e.id;let o=document.createElement("div");o.className="serenity-setting-info";let s=document.createElement("label");if(s.className="serenity-setting-label",s.textContent=e.name,o.appendChild(s),e.description){let a=document.createElement("p");a.className="serenity-setting-description",a.textContent=e.description,o.appendChild(a)}n.appendChild(o);let r=document.createElement("div");switch(r.className="serenity-setting-control",e.type){case"boolean":let a=document.createElement("input");a.type="checkbox",a.checked=e.value,a.className="serenity-checkbox",a.addEventListener("change",u=>{i.updateModuleSetting(t.name,e.id,u.target.checked),this.updateConditionalSettings(t,i)}),r.appendChild(a);break;case"slider":let l=document.createElement("input");l.type="range",l.min=e.min,l.max=e.max,l.step=e.step,l.value=e.value,l.className="serenity-slider",l.addEventListener("input",u=>{i.updateModuleSetting(t.name,e.id,parseFloat(u.target.value))}),r.appendChild(l);break;case"select":let c=document.createElement("select");c.className="serenity-select",e.options.forEach(u=>{let h=document.createElement("option");h.value=u,h.textContent=u,e.value===u&&(h.selected=!0),c.appendChild(h)}),c.addEventListener("change",u=>{i.updateModuleSetting(t.name,e.id,u.target.value),this.updateConditionalSettings(t,i)}),r.appendChild(c);break;case"text":let d=document.createElement("input");d.type="text",d.value=e.value,d.className="serenity-text-input",d.addEventListener("change",u=>{i.updateModuleSetting(t.name,e.id,u.target.value)}),r.appendChild(d);break;case"color":let p=this.createColorPicker(t,e,i);r.appendChild(p);break}return n.appendChild(r),n},updateConditionalSettings(t,e){let i=t.settings.reduce((o,s)=>({...o,[s.id]:s.value}),{}),n=this.element.querySelector(".serenity-module-settings");t.settings.forEach(o=>{if(o.condition){let s=n.querySelector(`[data-setting-id="${o.id}"]`);s&&(s.style.display=o.condition(i)?"":"none")}})},createColorPicker(t,e,i){let n=document.createElement("div");n.className="serenity-color-picker-wrapper";let o=document.createElement("div");o.className="serenity-color-swatch",o.style.color=e.value;let s=this.createColorPopup(t,e,i,o);return o.addEventListener("click",r=>{r.stopPropagation();let a=document.querySelector(".serenity-color-popup");a&&a!==s&&a.remove(),document.querySelector(".serenity-color-popup")===s?s.remove():n.appendChild(s)}),n.appendChild(o),document.addEventListener("click",r=>{n.contains(r.target)||s.remove()}),n},createColorPopup(t,e,i,n){let o=document.createElement("div");o.className="serenity-color-popup";let s=document.createElement("input");s.type="color",s.value=this.rgbaToHex(e.value).hex;let r=document.createElement("input");r.type="range",r.className="serenity-slider",r.min=0,r.max=1,r.step=.01,r.value=this.rgbaToHex(e.value).alpha;let a=()=>{let l=s.value,c=parseFloat(r.value),d=this.hexToRgba(l,c);n.style.color=d,i.updateModuleSetting(t.name,e.id,d)};return s.addEventListener("input",a),r.addEventListener("input",a),o.appendChild(s),o.appendChild(r),o},hexToRgba(t,e){let i=parseInt(t.slice(1,3),16),n=parseInt(t.slice(3,5),16),o=parseInt(t.slice(5,7),16);return`rgba(${i}, ${n}, ${o}, ${e})`},rgbaToHex(t){if(t.startsWith("#"))return{hex:t,alpha:1};let e=t.match(/[\d.]+/g);if(!e||e.length<3)return{hex:"#000000",alpha:1};let i=parseInt(e[0]).toString(16).padStart(2,"0"),n=parseInt(e[1]).toString(16).padStart(2,"0"),o=parseInt(e[2]).toString(16).padStart(2,"0"),s=e.length>=4?parseFloat(e[3]):1;return{hex:`#${i}${n}${o}`,alpha:s}},createToggleSetting(t,e,i,n){let o=document.createElement("div");o.className="serenity-config-toggle-setting";let s=document.createElement("div");s.className="serenity-setting-info";let r=document.createElement("label");r.className="serenity-setting-label",r.textContent=t;let a=document.createElement("p");a.className="serenity-setting-description",a.textContent=e,s.appendChild(r),s.appendChild(a);let l=document.createElement("div");l.className="serenity-setting-control";let c=document.createElement("input");return c.type="checkbox",c.checked=i,c.className="serenity-checkbox",c.addEventListener("change",d=>{n(d.target.checked)}),l.appendChild(c),o.appendChild(s),o.appendChild(l),o}},P=ye;var M=null;function q(){if(M)return M;let t=document.querySelectorAll(".ChatMessages .IndividualText"),e=Array.from(t).filter(i=>i.textContent?.includes(" joined"));if(e.length>0){let o=e[e.length-1].textContent.split(" joined")[0].trim();if(o)return M=o,o}return null}function W(t,e=20){let i=Date.now()/e;return`hsl(${(t*15+i)%360}, 90%, 65%)`}var ge={name:"Chat",category:"Visual",description:"Replaces the default in-game chat with a customizable one.",enabled:!0,defaultX:4,defaultY:59,element:null,gameChat:null,chatObserver:null,mainObserver:null,customInput:null,settings:[{id:"hide-game-chat",name:"Hide Game Chat",type:"boolean",value:!0,description:"Hides the original in-game chat UI."},{id:"font-size",name:"Font Size",type:"slider",value:14,min:10,max:24,step:1},{id:"max-messages",name:"Max Messages",type:"slider",value:7,min:5,max:25,step:1},{id:"show-timestamps",name:"Show Timestamps",type:"boolean",value:!1}],onEnable(){this.createDisplay(),this.handleGameChat(),this.mainObserver=new MutationObserver(()=>this.handleGameChat()),this.mainObserver.observe(document.body,{childList:!0,subtree:!0})},onDisable(){this.mainObserver&&this.mainObserver.disconnect(),this.chatObserver&&this.chatObserver.disconnect(),this.restoreGameChat(),this.destroyDisplay()},onTick(){this.handleGameChat()},onFrame(){if(this.element){let t=window.Serenity.instance.get("ClickGUI");if(!t||!t.isEditingHUD){let e=window.Serenity.instance.get(this.name);e.x!==null&&(this.element.style.left=`${e.x}px`),e.y!==null&&(this.element.style.top=`${e.y}px`)}}},onSettingUpdate(){this.applyStyles(),this.handleGameChat()},createDisplay(){this.element=document.createElement("div"),this.element.className="serenity-chat-container",this.element.style.zIndex=5,document.body.appendChild(this.element);let t=document.createElement("div");t.className="serenity-chat-messages",this.element.appendChild(t),this.createCustomInput()},createCustomInput(){let t=document.createElement("div");t.className="serenity-chat-input-wrapper",this.customInput=document.createElement("input"),this.customInput.type="text",this.customInput.className="serenity-chat-input",this.customInput.placeholder="Send a message...",this.customInput.addEventListener("keydown",e=>{if(e.key==="Enter"){let i=document.querySelector(".ChatInput");if(i&&this.customInput.value){i.value=this.customInput.value;let n=new KeyboardEvent("keydown",{key:"Enter",code:"Enter",which:13,keyCode:13,bubbles:!0});i.dispatchEvent(n),this.customInput.value=""}}}),t.appendChild(this.customInput),this.element.appendChild(t)},syncInputVisibility(t){let e=this.element.querySelector(".serenity-chat-input-wrapper");t.style.display==="none"?e.style.display="none":(e.style.display="flex",setTimeout(()=>this.customInput.focus(),0))},destroyDisplay(){this.element&&(document.body.removeChild(this.element),this.element=null)},handleGameChat(){let t=document.querySelector(".Chat");if(!t){this.chatObserver&&(this.chatObserver.disconnect(),this.chatObserver=null),this.gameChat=null;return}this.gameChat!==t&&(this.chatObserver&&(this.chatObserver.disconnect(),this.chatObserver=null),this.gameChat=t,this.element&&(this.element.querySelector(".serenity-chat-messages").innerHTML=""));let e=this.settings.find(o=>o.id==="hide-game-chat").value;this.gameChat.style.visibility=e?"hidden":"visible",this.gameChat.style.pointerEvents=e?"none":"auto";let i=t.querySelector(".ChatMessages");i&&!this.chatObserver&&(this.element.querySelector(".serenity-chat-messages").innerHTML="",i.querySelectorAll(".MessageWrapper").forEach(o=>this.addMessage(o)),this.chatObserver=new MutationObserver(o=>{o.forEach(s=>{s.addedNodes.length&&s.addedNodes.forEach(r=>{r.nodeType===1&&r.classList.contains("MessageWrapper")&&this.addMessage(r)})})}),this.chatObserver.observe(i,{childList:!0}));let n=t.querySelector(".ChatInputWrapper");n&&this.syncInputVisibility(n)},restoreGameChat(){this.gameChat&&(this.gameChat.style.visibility="visible",this.gameChat.style.pointerEvents="auto")},addMessage(t){if(!this.element)return;let e=this.element.querySelector(".serenity-chat-messages"),i=document.createElement("div");i.className="serenity-chat-message";let n=document.createElement("div");n.className="serenity-message-content";let o=q();if(t.querySelectorAll(".IndividualText").forEach(r=>{let a=r.cloneNode(!0);o&&a.textContent===o&&a.classList.add("serenity-message-own-name"),/^\[.*\]$/.test(a.textContent)&&a.classList.add("serenity-message-tag"),n.appendChild(a)}),i.appendChild(n),this.settings.find(r=>r.id==="show-timestamps").value){let r=document.createElement("span");r.className="serenity-message-timestamp",r.textContent=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),i.insertBefore(r,n)}e.appendChild(i);let s=this.settings.find(r=>r.id==="max-messages").value;for(;e.children.length>s;)e.removeChild(e.firstChild)},applyStyles(){if(!this.element)return;let t=this.settings.reduce((e,i)=>({...e,[i.id]:i.value}),{});this.element.style.setProperty("--chat-font-size",`${t["font-size"]}px`)}},O=ge;var fe={name:"Keystrokes",category:"Combat",description:"Displays your keystrokes with a sexy, modern look.",enabled:!0,defaultX:8,defaultY:562,element:null,keys:{w:!1,a:!1,s:!1,d:!1," ":!1,lmb:!1,rmb:!1},boundKeyDown:null,boundKeyUp:null,boundMouseDown:null,boundMouseUp:null,settings:[{id:"show-mouse",name:"Show Mouse Buttons",type:"boolean",value:!0},{id:"scale",name:"Scale",type:"slider",value:1,min:.5,max:2,step:.1},{id:"opacity",name:"Opacity",type:"slider",value:.85,min:0,max:1,step:.05},{id:"enable-animations",name:"Enable Animations",type:"boolean",value:!0}],onEnable(){this.createDisplay(),this.applyStyles(),this.boundKeyDown=t=>this.updateKeyState(t.key.toLowerCase(),!0),this.boundKeyUp=t=>this.updateKeyState(t.key.toLowerCase(),!1),this.boundMouseDown=t=>{t.button===0&&this.updateKeyState("lmb",!0),t.button===2&&this.updateKeyState("rmb",!0)},this.boundMouseUp=t=>{t.button===0&&this.updateKeyState("lmb",!1),t.button===2&&this.updateKeyState("rmb",!1)},window.addEventListener("keydown",this.boundKeyDown),window.addEventListener("keyup",this.boundKeyUp),window.addEventListener("mousedown",this.boundMouseDown),window.addEventListener("mouseup",this.boundMouseUp)},onDisable(){this.destroyDisplay(),window.removeEventListener("keydown",this.boundKeyDown),window.removeEventListener("keyup",this.boundKeyUp),window.removeEventListener("mousedown",this.boundMouseDown),window.removeEventListener("mouseup",this.boundMouseUp)},onTick(){this.updateDisplayLocation()},onSettingUpdate(){this.applyStyles()},updateKeyState(t,e){this.keys.hasOwnProperty(t)&&(this.keys[t]=e,this.updateKeyVisuals())},createKey(t,e,...i){let n=document.createElement("div");return n.className=`keystrokes-key key-${e} ${i.join(" ")}`,n.textContent=t,n},createDisplay(){this.element=document.createElement("div"),this.element.className="keystrokes-display";let t=document.createElement("div");t.className="keystrokes-row",t.appendChild(this.createKey("W","w")),this.element.appendChild(t);let e=document.createElement("div");e.className="keystrokes-row",e.appendChild(this.createKey("A","a")),e.appendChild(this.createKey("S","s")),e.appendChild(this.createKey("D","d")),this.element.appendChild(e);let i=document.createElement("div");i.className="keystrokes-row mouse-row",i.appendChild(this.createKey("LMB","lmb","mouse-button")),i.appendChild(this.createKey("RMB","rmb","mouse-button")),this.element.appendChild(i);let n=document.createElement("div");n.className="keystrokes-row",n.appendChild(this.createKey("Space"," ","space-key")),this.element.appendChild(n),document.body.appendChild(this.element)},destroyDisplay(){this.element&&(document.body.removeChild(this.element),this.element=null)},updateDisplayLocation(){if(!this.element)return;let t=window.Serenity.instance.get("ClickGUI");if(!t||!t.isEditingHUD){let e=window.Serenity.instance.get(this.name);e.x!==null&&(this.element.style.left=`${e.x}px`),e.y!==null&&(this.element.style.top=`${e.y}px`)}},updateKeyVisuals(){if(this.element)for(let t in this.keys){let e=this.element.querySelector(`.key-${t}`);e&&e.classList.toggle("active",this.keys[t])}},applyStyles(){if(!this.element)return;let t=this.settings.reduce((e,i)=>({...e,[i.id]:i.value}),{});this.element.style.transform=`scale(${t.scale})`,this.element.style.opacity=t.opacity,this.element.classList.toggle("show-mouse",t["show-mouse"]),this.element.classList.toggle("no-animations",!t["enable-animations"])}},R=fe;var be={name:"ToggleSprint",category:"Movement",description:"Automatically sprints for you by simulating a Shift key press.",enabled:!0,sprinting:!1,sprintInterval:null,element:null,defaultX:"80%",defaultY:"80%",settings:[{id:"show-text",name:"Show Text",type:"boolean",value:!0},{id:"color-mode",name:"Color Mode",type:"select",options:["Theme","Custom"],value:"Theme",condition:t=>t["show-text"]},{id:"hud-text",name:"HUD Text",type:"text",value:"[Sprinting (Toggled)]",condition:t=>t["show-text"]},{id:"bg-color",name:"Background Color",type:"color",value:"rgba(30, 33, 41, 0.85)",condition:t=>t["show-text"]&&t["color-mode"]==="Custom"},{id:"text-color",name:"Text Color",type:"color",value:"rgba(234, 234, 234, 0.8)",condition:t=>t["show-text"]&&t["color-mode"]==="Custom"},{id:"font-size",name:"Font Size",type:"slider",value:16,min:8,max:24,step:1,condition:t=>t["show-text"]},{id:"padding",name:"Padding",type:"slider",value:8,min:0,max:20,step:1,condition:t=>t["show-text"]},{id:"border-radius",name:"Border Radius",type:"slider",value:10,min:0,max:20,step:1,condition:t=>t["show-text"]},{id:"border-width",name:"Border Width",type:"slider",value:1,min:0,max:5,step:1,condition:t=>t["show-text"]},{id:"border-color",name:"Border Color",type:"color",value:"rgba(255, 255, 255, 0.07)",condition:t=>t["show-text"]&&t["color-mode"]==="Custom"}],onEnable(){this.createDisplay()},onDisable(){this.sprinting&&this.stopSprinting(),this.destroyDisplay()},onTick(){let t=window.Serenity.instance.get("ClickGUI"),i=!(document.activeElement&&(["INPUT","TEXTAREA"].includes(document.activeElement.tagName)||document.activeElement.isContentEditable))&&(!t||!t.isGuiOpen);i&&!this.sprinting?this.startSprinting():!i&&this.sprinting&&this.stopSprinting(),i&&this.sprinting&&this.fireKeyDown(),this.updateDisplay()},onSettingUpdate(){this.applyStyles(),this.updateDisplay(!0)},startSprinting(){this.sprinting||(this.sprinting=!0,this.fireKeyDown(),this.sprintInterval=setInterval(()=>this.fireKeyDown(),200))},stopSprinting(){this.sprinting&&(this.sprinting=!1,this.sprintInterval&&(clearInterval(this.sprintInterval),this.sprintInterval=null),window.dispatchEvent(new KeyboardEvent("keyup",{key:"Shift",keyCode:16,code:"ShiftLeft",bubbles:!0})))},fireKeyDown(){window.dispatchEvent(new KeyboardEvent("keydown",{key:"Shift",keyCode:16,code:"ShiftLeft",bubbles:!0,repeat:!0}))},createDisplay(){this.element=document.createElement("div"),this.element.className="togglesprint-hud-display",document.body.appendChild(this.element),this.applyStyles()},destroyDisplay(){this.element&&(document.body.removeChild(this.element),this.element=null)},updateDisplay(){let t=this.settings.reduce((e,i)=>({...e,[i.id]:i.value}),{});if(!t["show-text"]){this.element&&(this.element.style.display="none");return}if(this.element||this.createDisplay(),this.element.style.display=this.enabled?"block":"none",this.enabled){this.element.textContent=t["hud-text"];let e=window.Serenity.instance.get("ClickGUI");if(!e||!e.isEditingHUD){let i=window.Serenity.instance.get(this.name);i.x!==null&&(this.element.style.left=typeof i.x=="string"?i.x:`${i.x}px`),i.y!==null&&(this.element.style.top=typeof i.y=="string"?i.y:`${i.y}px`)}}},applyStyles(){if(!this.element)return;let t=this.settings.reduce((e,i)=>({...e,[i.id]:i.value}),{});t["color-mode"]==="Theme"?(this.element.style.backgroundColor="var(--panel)",this.element.style.color="var(--text)",this.element.style.border=`${t["border-width"]}px solid var(--border)`):(this.element.style.backgroundColor=t["bg-color"],this.element.style.color=t["text-color"],this.element.style.border=`${t["border-width"]}px solid ${t["border-color"]}`),this.element.style.fontSize=`${t["font-size"]}px`,this.element.style.padding=`${t.padding}px`,this.element.style.borderRadius=`${t["border-radius"]}px`,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.style.pointerEvents="none",this.element.style.zIndex=5}},G=be;var ve={name:"ArmorHUD",category:"Player",description:"Displays your currently equipped armor and selected item.",enabled:!1,observer:null,defaultX:"90%",defaultY:"50%",settings:[{id:"color-mode",name:"Color Mode",type:"select",options:["Theme","Custom"],value:"Theme"},{id:"show-selected",name:"Show Selected Item",type:"boolean",value:!0},{id:"display-style",name:"Display Style",type:"select",options:["Horizontal","Vertical"],value:"Vertical"},{id:"bg-color",name:"Background Color",type:"color",value:"rgba(30, 33, 41, 0.85)",condition:t=>t["color-mode"]==="Custom"},{id:"padding",name:"Padding",type:"slider",value:4,min:0,max:20,step:1},{id:"border-radius",name:"Border Radius",type:"slider",value:20,min:0,max:20,step:1},{id:"border-width",name:"Border Width",type:"slider",value:2,min:0,max:5,step:1},{id:"border-color",name:"Border Color",type:"color",value:"rgba(255, 255, 255, 0.07)",condition:t=>t["color-mode"]==="Custom"},{id:"item-size",name:"Item Size",type:"slider",value:64,min:16,max:64,step:1},{id:"item-spacing",name:"Item Spacing",type:"slider",value:0,min:0,max:20,step:1}],element:null,onEnable(){this.createDisplay(),this.applyStyles(),this.setupObserver()},onDisable(){this.observer&&(this.observer.disconnect(),this.observer=null),this.destroyDisplay()},onTick(){this.updateDisplay()},onSettingUpdate(){this.applyStyles(),this.updateDisplay(!0)},setupObserver(){let t=()=>{let e=document.querySelector(".HotBarGameItemsContainer");e&&!this.observer?(this.observer=new MutationObserver(i=>{i.some(o=>o.type==="attributes"&&o.attributeName==="class"&&o.target.classList.contains("InvenItem"))&&this.updateDisplay(!0)}),this.observer.observe(e,{attributes:!0,subtree:!0,attributeFilter:["class"]}),this.updateDisplay(!0)):e||setTimeout(t,500)};t()},createDisplay(){this.element=document.createElement("div"),this.element.className="armor-hud-display",document.body.appendChild(this.element)},destroyDisplay(){this.element&&(document.body.removeChild(this.element),this.element=null)},extractImage(t){if(!t)return null;let e=t.querySelector(".TwoDImageIcon");if(e){if(e.style.backgroundImage&&e.style.backgroundImage!=="none")return{type:"image",src:e.style.backgroundImage.slice(5,-2),filter:null};let o=t.querySelector(".TwoDItemGrayscaleVisiblePng"),s=t.querySelector(".TwoDItemGrayscale");if(o)return{type:"image",src:o.src,filter:s?s.style.filter:""}}let i=t.querySelector(".BlockItem");if(i&&i.style.backgroundImage&&i.style.backgroundImage!=="none")return{type:"image",src:i.style.backgroundImage.slice(5,-2),filter:null};let n=t.querySelector(".InvenItemUnfilled");return n?{type:"unfilled",src:n.style.backgroundImage.slice(5,-2)}:null},updateDisplay(t=!1){if(!this.element)return;let e=window.Serenity.instance.get("ClickGUI");if(!e||!e.isEditingHUD){let c=window.Serenity.instance.get(this.name);c.x!==null&&(this.element.style.left=typeof c.x=="string"?c.x:`${c.x}px`),c.y!==null&&(this.element.style.top=typeof c.y=="string"?c.y:`${c.y}px`)}let i=document.querySelector(".ArmourItemSlots"),o=(i?Array.from(i.querySelectorAll(".InvenItem")):[]).map(c=>this.extractImage(c)).filter(Boolean),r=window.Serenity.instance.get(this.name).settings.find(c=>c.id==="show-selected").value,a=[...o];if(r){let c=document.querySelector(".HotBarGameItemsContainer .InvenItem.Selected"),d=this.extractImage(c);d&&a.push(d)}let l=JSON.stringify(a);(l!==this.lastContentHash||t)&&(this.element.innerHTML="",a.forEach(c=>{if(!c)return;let d=document.createElement("div");if(d.style.position="relative",c.type==="image"&&c.filter){let p=this.settings.find(g=>g.id==="item-size").value,u=document.createElement("div");u.style.position="absolute",u.style.width="100%",u.style.height="100%",u.style.overflow="hidden";let h=document.createElement("img");h.src=c.src,h.style.width="100%",h.style.height="100%",h.style.imageRendering="pixelated",h.style.filter=c.filter.replace("1em",`${p}px`),h.style.marginLeft=`-${p}px`,u.appendChild(h),d.appendChild(u);let m=document.createElement("img");m.src=c.src,m.style.position="absolute",m.style.width="100%",m.style.height="100%",m.style.imageRendering="pixelated",m.style.mixBlendMode="multiply",d.appendChild(m)}else{let p=document.createElement("img");p.src=c.src,p.style.width="100%",p.style.height="100%",p.style.imageRendering="pixelated",d.appendChild(p)}this.element.appendChild(d)}),this.lastContentHash=l,this.applyStyles())},applyStyles(){if(!this.element)return;let t=this.settings.reduce((n,o)=>({...n,[o.id]:o.value}),{});t["color-mode"]==="Theme"?(this.element.style.backgroundColor="var(--panel)",this.element.style.border=`${t["border-width"]}px solid var(--border)`):(this.element.style.backgroundColor=t["bg-color"],this.element.style.border=`${t["border-width"]}px solid ${t["border-color"]}`),this.element.style.padding=`${t.padding}px`,this.element.style.borderRadius=`${t["border-radius"]}px`,this.element.style.display="flex",this.element.style.flexDirection=t["display-style"]==="Horizontal"?"row":"column",this.element.style.gap=`${t["item-spacing"]}px`,this.element.style.position="absolute",this.element.style.userSelect="none";let e=window.Serenity.instance.get("ClickGUI");(!e||!e.isEditingHUD)&&(this.element.style.zIndex=5),this.element.style.pointerEvents="none",this.element.querySelectorAll(".armor-hud-display > div").forEach(n=>{n.style.width=`${t["item-size"]}px`,n.style.height=`${t["item-size"]}px`})}},j=ve;var xe={name:"CPSCounter",category:"Player",description:"Displays your clicks per second.",enabled:!0,settings:[{id:"text-color",name:"Text Color",type:"color",value:"#EAEAEA"},{id:"show-label",name:"Show Label",type:"boolean",value:!0},{id:"show-lmb",name:"Show LMB",type:"boolean",value:!0},{id:"show-rmb",name:"Show RMB",type:"boolean",value:!0},{id:"format",name:"Text Format",type:"text",value:"{label} {lmb} | {rmb}"}],leftClicks:[],rightClicks:[],element:null,positionInterval:null,onEnable(){this.createDisplay(),this.applyStyles(),this.startPositioning(),document.addEventListener("mousedown",this.handleMouseDown.bind(this))},onDisable(){this.destroyDisplay(),document.removeEventListener("mousedown",this.handleMouseDown.bind(this)),this.positionInterval&&clearInterval(this.positionInterval)},onTick(){let t=performance.now();this.leftClicks=this.leftClicks.filter(e=>t-e<1e3),this.rightClicks=this.rightClicks.filter(e=>t-e<1e3),this.updateDisplay()},onSettingUpdate(){this.applyStyles(),this.updateDisplay()},handleMouseDown(t){t.button===0?this.leftClicks.push(performance.now()):t.button===2&&this.rightClicks.push(performance.now())},createDisplay(){this.element=document.createElement("div"),this.element.className="cps-counter-display",document.body.appendChild(this.element)},destroyDisplay(){this.element&&(document.body.removeChild(this.element),this.element=null)},updateDisplay(){if(!this.element)return;let t=this.settings.reduce((i,n)=>({...i,[n.id]:n.value}),{}),e=t.format;e=e.replace("{label}",t["show-label"]?"CPS:":""),e=e.replace("{lmb}",t["show-lmb"]?this.leftClicks.length:"0"),e=e.replace("{rmb}",t["show-rmb"]?this.rightClicks.length:"0"),this.element.textContent=e.trim()},startPositioning(){this.positionInterval=setInterval(()=>{if(!this.element)return;let t=document.querySelector(".FpsWrapperDiv"),e=document.querySelectorAll(".CoordinateUI"),i=document.querySelector(".InGameHeader");if(!i)return;let n=t&&window.getComputedStyle(t).display!=="none",o=Array.from(e).filter(r=>window.getComputedStyle(r).display!=="none"),s=null;o.length>0?s=o.reduce((r,a)=>{let l=a.getBoundingClientRect();return!r||l.right>r.right?l:r},null):n?s=t.getBoundingClientRect():s=i.getBoundingClientRect(),s&&(this.element.style.top=`${s.top+window.scrollY}px`,this.element.style.left=`${s.right+window.scrollX+5}px`,this.element.style.display="block")},200)},applyStyles(){if(!this.element)return;let t=this.settings.reduce((e,i)=>({...e,[i.id]:i.value}),{});this.element.style.color=t["text-color"],this.element.style.fontSize="14px",this.element.style.position="absolute",this.element.style.userSelect="none",this.element.style.zIndex=5,this.element.style.pointerEvents="none",this.element.style.backgroundColor="rgba(30, 33, 41, var(--panel-opacity))",this.element.style.padding="16.5px 10px 16.5px 10px",this.element.style.borderRadius="10px"}},F=xe;var we={name:"PingCounter",category:"Player",description:"Displays your network ping.",enabled:!0,settings:[{id:"text-color",name:"Text Color",type:"color",value:"#EAEAEA"},{id:"show-label",name:"Show Label",type:"boolean",value:!0},{id:"format",name:"Text Format",type:"text",value:"{label} {ping}ms"},{id:"mod-credit",name:"Mod Made by GEORGECR and Casmyx",type:"info"}],ping:"--",element:null,pingIntervalId:null,positionInterval:null,onEnable(){this.createDisplay(),this.applyStyles(),this.updatePing(),this.pingIntervalId=setInterval(this.updatePing.bind(this),2e3),this.startPositioning()},onDisable(){this.destroyDisplay(),clearInterval(this.pingIntervalId),this.positionInterval&&clearInterval(this.positionInterval)},onTick(){this.updateDisplay()},onSettingUpdate(){this.applyStyles(),this.updateDisplay()},createDisplay(){this.element=document.createElement("div"),this.element.className="ping-counter-display",document.body.appendChild(this.element)},destroyDisplay(){this.element&&(document.body.removeChild(this.element),this.element=null)},updatePing(){let t=Date.now();fetch(window.location.origin,{method:"HEAD",mode:"no-cors"}).then(()=>{this.ping=Date.now()-t}).catch(()=>{this.ping="--"})},updateDisplay(){if(!this.element)return;let t=this.settings.reduce((i,n)=>({...i,[n.id]:n.value}),{}),e=t.format;e=e.replace("{label}",t["show-label"]?"Ping:":""),e=e.replace("{ping}",this.ping),this.element.textContent=e.trim()},startPositioning(){this.positionInterval=setInterval(()=>{if(!this.element)return;let t=document.querySelector(".FpsWrapperDiv"),e=document.querySelectorAll(".CoordinateUI"),i=document.querySelector(".cps-counter-display"),n=document.querySelector(".InGameHeader");if(!n)return;let o=t&&window.getComputedStyle(t).display!=="none",s=Array.from(e).filter(l=>window.getComputedStyle(l).display!=="none"),r=i&&window.getComputedStyle(i).display!=="none",a=null;r?a=i.getBoundingClientRect():s.length>0?a=s.reduce((l,c)=>{let d=c.getBoundingClientRect();return!l||d.right>l.right?d:l},null):o?a=t.getBoundingClientRect():a=n.getBoundingClientRect(),a&&(this.element.style.top=`${a.top+window.scrollY}px`,this.element.style.left=`${a.right+window.scrollX+5}px`,this.element.style.display="block")},200)},applyStyles(){if(!this.element)return;let t=this.settings.reduce((e,i)=>({...e,[i.id]:i.value}),{});this.element.style.color=t["text-color"],this.element.style.fontSize="14px",this.element.style.position="absolute",this.element.style.userSelect="none",this.element.style.zIndex=5,this.element.style.pointerEvents="none",this.element.style.backgroundColor="rgba(30, 33, 41, var(--panel-opacity))",this.element.style.padding="16.5px 10px 16.5px 10px",this.element.style.borderRadius="10px"}},K=we;var Ce={name:"FPSBooster",category:"Utility",description:"Optimizes game performance by adjusting resolution and other settings.",enabled:!1,canvas:null,settings:[{id:"resolutionScale",name:"Resolution Scale",description:"Lower values can improve performance at the cost of quality.",type:"slider",value:1,min:.1,max:1,step:.05}],onEnable(t){if(this.canvas=document.getElementById("noa-canvas"),!this.canvas){t.disable(this.name);return}this.canvas.dataset.originalWidth||(this.canvas.dataset.originalWidth=this.canvas.width,this.canvas.dataset.originalHeight=this.canvas.height)},onDisable(t){this.canvas&&this.canvas.dataset.originalWidth&&(this.canvas.width=parseInt(this.canvas.dataset.originalWidth,10),this.canvas.height=parseInt(this.canvas.dataset.originalHeight,10),delete this.canvas.dataset.originalWidth,delete this.canvas.dataset.originalHeight),this.canvas&&(this.canvas.style.width="",this.canvas.style.height=""),this.canvas=null},onSettingUpdate(t,e,i){},onTick(t,e){this.canvas&&this.enabled&&this.applySettings(e)},applySettings(t){if(!this.canvas||!this.canvas.dataset.originalWidth)return;let i=t.get(this.name).settings.find(a=>a.id==="resolutionScale").value,n=parseInt(this.canvas.dataset.originalWidth,10),o=parseInt(this.canvas.dataset.originalHeight,10),s=Math.round(n*i),r=Math.round(o*i);this.canvas.width!==s&&(this.canvas.width=s),this.canvas.height!==r&&(this.canvas.height=r),this.canvas.style.width!=="100%"&&(this.canvas.style.width="100%"),this.canvas.style.height!=="100%"&&(this.canvas.style.height="100%")}},V=Ce;var ke={name:"AdBlocker",category:"Utility",description:"Blocks in-game ads and trackers by hiding elements and intercepting network requests.",enabled:!0,settings:[{id:"hide-page-ads",name:"Hide In-Page Ads",type:"boolean",value:!0,description:"Hides visible ad containers and popups."},{id:"block-network-ads",name:"Block Ad Network Requests",type:"boolean",value:!0,description:"Prevents the browser from requesting ads from known ad servers."}],originalFetch:window.fetch,originalXhrOpen:window.XMLHttpRequest.prototype.open,originalXhrSend:window.XMLHttpRequest.prototype.send,observer:null,adSelectors:[".SuperRankAdContainer",".AdBannerContainer",".PlaywireVideoWrapper",".UiRequests",".AdBanner",".GenericVideoWrapper","#bloxd-io_300x600_2",".InventoryAdOuter"],blockList:["googlesyndication.com","googletagservices.com","google-analytics.com","doubleclick.net","adinplay.com","playwire.com","amazon-adsystem.com","adnxs.com"],onEnable(){this.applySettings()},onDisable(){this.unpatchNetworkRequests(),this.observer&&(this.observer.disconnect(),this.observer=null)},onSettingUpdate(){this.applySettings()},applySettings(){let t=this.settings.reduce((e,i)=>({...e,[i.id]:i.value}),{});t["block-network-ads"]?this.patchNetworkRequests():this.unpatchNetworkRequests(),t["hide-page-ads"]?(this.hidePageAds(),this.setupObserver()):this.observer&&(this.observer.disconnect(),this.observer=null)},isBlocked(t){return this.blockList.some(e=>t.includes(e))},patchNetworkRequests(){let t=this;window.fetch=function(e,i){let n=typeof e=="string"?e:e.url;return t.isBlocked(n)?Promise.resolve(new Response(null,{status:204,statusText:"No Content"})):t.originalFetch.apply(this,arguments)},window.XMLHttpRequest.prototype.open=function(e,i){t.isBlocked(i)?this._isBlocked=!0:delete this._isBlocked,t.originalXhrOpen.apply(this,arguments)},window.XMLHttpRequest.prototype.send=function(){this._isBlocked||t.originalXhrSend.apply(this,arguments)}},unpatchNetworkRequests(){window.fetch=this.originalFetch,window.XMLHttpRequest.prototype.open=this.originalXhrOpen,window.XMLHttpRequest.prototype.send=this.originalXhrSend},hideElement(t){t.style.opacity!=="0"&&(t.style.opacity="0",t.style.pointerEvents="none")},hidePageAds(){this.adSelectors.forEach(t=>{document.querySelectorAll(t).forEach(e=>this.hideElement(e))})},setupObserver(){this.observer||(this.observer=new MutationObserver(t=>{for(let e of t)for(let i of e.addedNodes)i.nodeType===Node.ELEMENT_NODE&&this.adSelectors.forEach(n=>{i.matches(n)&&this.hideElement(i),i.querySelectorAll(n).forEach(o=>this.hideElement(o))})}),this.observer.observe(document.documentElement,{childList:!0,subtree:!0}))}},X=ke;var k="loglevel",L=class{static save(e){try{let i=JSON.stringify(e),n=btoa(i);localStorage.setItem(k,n)}catch{}}static load(){try{let e=localStorage.getItem(k);if(!e)return null;let i=atob(e);return JSON.parse(i)}catch{return localStorage.removeItem(k),null}}static reset(){try{localStorage.removeItem(k)}catch{}}},S=L;var Se={name:"Crosshair",category:"Visual",description:"Replaces the default game crosshair with a custom one.",enabled:!1,element:null,gameCrosshair:null,gameCrosshairInitialDisplay:null,observer:null,settings:[{id:"hide-original",name:"Hide Original Crosshair",type:"boolean",value:!0},{id:"mode",name:"Mode",type:"select",value:"Cross",options:["Cross","Plus","Dot","Circle","T-Shape","Arrow","Custom Image"]},{id:"color-mode",name:"Color Mode",type:"select",options:["Theme","Custom"],value:"Theme",condition:t=>t.mode!=="Custom Image"},{id:"image-url",name:"Image URL",type:"text",value:"https://i.imgur.com/M8M4G3k.png",condition:t=>t.mode==="Custom Image"},{id:"size",name:"Size",type:"slider",value:12,min:1,max:100,step:1},{id:"color",name:"Color",type:"color",value:"#FFFFFF",condition:t=>t.mode!=="Custom Image"&&t["color-mode"]==="Custom"},{id:"thickness",name:"Thickness",type:"slider",value:2,min:1,max:20,step:1,condition:t=>["Cross","Plus","Circle","T-Shape"].includes(t.mode)},{id:"outline",name:"Outline",type:"boolean",value:!0,condition:t=>t.mode!=="Custom Image"},{id:"outline-color",name:"Outline Color",type:"color",value:"#000000",condition:t=>t.outline&&t.mode!=="Custom Image"&&t["color-mode"]==="Custom"}],onEnable(){this.createDisplay(),this.updateCrosshair(),this.handleGameCrosshair(),this.observer=new MutationObserver(()=>this.handleGameCrosshair()),this.observer.observe(document.body,{childList:!0,subtree:!0})},onDisable(){this.observer&&(this.observer.disconnect(),this.observer=null),this.destroyDisplay(),this.restoreGameCrosshair(),this.gameCrosshair=null,this.gameCrosshairInitialDisplay=null},onSettingUpdate(t){this.updateCrosshair(),t==="hide-original"&&this.handleGameCrosshair()},createDisplay(){this.element||(this.element=document.createElement("div"),this.element.className="serenity-crosshair",this.element.style.position="fixed",this.element.style.top="50%",this.element.style.left="50%",this.element.style.transform="translate(-50%, -50%)",this.element.style.pointerEvents="none",this.element.style.zIndex="9999",document.body.appendChild(this.element))},destroyDisplay(){this.element&&(document.body.removeChild(this.element),this.element=null)},handleGameCrosshair(){let t=this.settings.find(i=>i.id==="hide-original").value,e=document.querySelector(".CrossHair");t?e&&(this.gameCrosshair!==e&&(this.gameCrosshair=e,this.gameCrosshairInitialDisplay=e.style.display),this.gameCrosshair.style.display="none"):this.restoreGameCrosshair()},restoreGameCrosshair(){this.gameCrosshair&&(this.gameCrosshair.style.display=this.gameCrosshairInitialDisplay||"")},updateCrosshair(){if(!this.element)return;this.element.innerHTML="";let t=this.settings.reduce((d,p)=>({...d,[p.id]:p.value}),{}),{mode:e,size:i,color:n,thickness:o,outline:s,"outline-color":r,"image-url":a,"color-mode":l}=t;l==="Theme"&&e!=="Custom Image"&&(n=getComputedStyle(document.documentElement).getPropertyValue("--primary").trim(),r="#000000");let c=s?`0px 0px 2px ${r}, 0px 0px 2px ${r}, 0px 0px 2px ${r}, 0px 0px 2px ${r}`:"none";switch(e){case"Custom Image":let d=document.createElement("img");d.src=a,d.style.width=`${i}px`,d.style.height=`${i}px`,this.element.appendChild(d);break;case"Dot":let p=document.createElement("div");p.style.width=`${i}px`,p.style.height=`${i}px`,p.style.backgroundColor=n,p.style.borderRadius="50%",p.style.textShadow=c,this.element.appendChild(p);break;case"Circle":let u=document.createElement("div");u.style.width=`${i}px`,u.style.height=`${i}px`,u.style.border=`${o}px solid ${n}`,u.style.borderRadius="50%",u.style.textShadow=c,this.element.appendChild(u);break;case"Cross":case"Plus":case"T-Shape":let h=e==="Cross"?Math.max(1,i/4):0,m=i,g={top:{top:`-${h+m}px`,left:`-${o/2}px`,width:`${o}px`,height:`${m}px`},bottom:{top:`${h}px`,left:`-${o/2}px`,width:`${o}px`,height:`${m}px`},left:{left:`-${h+m}px`,top:`-${o/2}px`,width:`${m}px`,height:`${o}px`},right:{left:`${h}px`,top:`-${o/2}px`,width:`${m}px`,height:`${o}px`}},b=["top","bottom","left","right"];e==="T-Shape"&&(b=["bottom","left","right"]),b.forEach(f=>{let v=document.createElement("div");v.style.position="absolute",v.style.backgroundColor=n,v.style.textShadow=c,Object.assign(v.style,g[f]),this.element.appendChild(v)});break;case"Arrow":let y=document.createElement("div");y.style.width="0",y.style.height="0",y.style.borderLeft=`${i/2}px solid transparent`,y.style.borderRight=`${i/2}px solid transparent`,y.style.borderBottom=`${i}px solid ${n}`,s&&(y.style.filter=`drop-shadow(0 1px 1px ${r}) drop-shadow(0 -1px 1px ${r}) drop-shadow(1px 0 1px ${r}) drop-shadow(-1px 0 1px ${r})`),this.element.appendChild(y);break}}},Y=Se;var z=class{constructor(){this.container=null,this.init()}init(){if(!document.getElementById("font-awesome-link")){let e=document.createElement("link");e.id="font-awesome-link",e.rel="stylesheet",e.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",document.head.appendChild(e)}document.querySelector(".serenity-notification-container")?this.container=document.querySelector(".serenity-notification-container"):(this.container=document.createElement("div"),this.container.className="serenity-notification-container",document.body.appendChild(this.container))}show({title:e="Serenity",message:i,type:n="info",duration:o=3e3}){let s=document.createElement("div");s.className=`serenity-notification serenity-notification-${n}`;let r={info:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"></path></svg>',success:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>',warning:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>',error:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v2z"></path></svg>'};s.innerHTML=`
      <div class="serenity-notification-icon-wrapper">
        <div class="serenity-notification-icon">${r[n]||r.info}</div>
      </div>
      <div class="serenity-notification-content">
        <div class="serenity-notification-title">${e}</div>
        <div class="serenity-notification-message">${i}</div>
      </div>
      <button class="serenity-notification-close">&times;</button>
      <div class="serenity-notification-timer"></div>
    `,this.container.prepend(s),s.style.animation="serenity-notification-in 0.5s forwards cubic-bezier(0.2, 1, 0.2, 1)";let a=s.querySelector(".serenity-notification-timer");a.style.transition=`width ${o}ms linear`,setTimeout(()=>{a&&(a.style.width="0%")},10);let l=()=>{s.classList.contains("exiting")||(s.classList.add("exiting"),clearTimeout(d),s.style.animation="serenity-notification-out 0.5s forwards cubic-bezier(0.8, 0, 0.8, 0)",s.addEventListener("animationend",p=>{p.animationName==="serenity-notification-out"&&s.remove()}))};s.querySelector(".serenity-notification-close").addEventListener("click",l,{once:!0});let d=setTimeout(l,o);s.addEventListener("mouseenter",()=>{clearTimeout(d),a.style.width=getComputedStyle(a).width}),s.addEventListener("mouseleave",()=>{d=setTimeout(l,o),a.style.transition=`width ${o}ms linear`,a.style.width="0%"})}},_=z;var Ee={name:"Notifications",category:"Utility",description:"Shows alerts when modules are toggled.",enabled:!1,settings:[]},J=Ee;var Ie={_ctx:null,getContext:function(){return this._ctx||(this._ctx=document.createElement("canvas").getContext("2d")),this._ctx}},Me={name:"ArrayList",category:"Visual",description:"Displays a list of enabled modules.",enabled:!1,element:null,settings:[{id:"color-mode",name:"Color Mode",description:"The color style of the module list.",type:"select",options:["Rainbow","Static"],value:"Static"},{id:"use-theme-color",name:"Use Theme Color",description:"Use the main theme color for static mode.",type:"boolean",value:!0,condition:t=>t["color-mode"]==="Static"},{id:"static-color",name:"Custom Static Color",description:"The color of the text if not using the theme color.",type:"color",value:"rgba(94, 114, 235, 1)",condition:t=>t["color-mode"]==="Static"&&!t["use-theme-color"]},{id:"border",name:"Show Border",description:"Display a colored border on the side of the list.",type:"boolean",value:!0},{id:"text-shadow",name:"Text Shadow",description:"Adds a shadow to the text for better visibility.",type:"boolean",value:!0},{id:"font-size",name:"Font Size",description:"The font size of the module names.",type:"slider",min:10,max:20,step:1,value:14}],onEnable(t){this.element||(this.element=document.createElement("div"),this.element.className="serenity-arraylist-container",document.body.appendChild(this.element)),this.updateStyle(t)},onDisable(){this.element&&(document.body.removeChild(this.element),this.element=null)},onTick(t,e){if(!this.element)return;let i=["ClickGUI","ArrayList","Notifications"],r=`600 ${this.getSettingValue(e,"font-size")}px Inter`,a=Ie.getContext();a.font=r;let l=e.list().filter(h=>h.enabled&&!i.includes(h.name)).map(h=>({name:h.name,width:a.measureText(h.name).width})).sort((h,m)=>m.width-h.width||h.name.localeCompare(m.name));this.element.innerHTML="";let c=this.getSettingValue(e,"color-mode"),d=this.getSettingValue(e,"use-theme-color"),p=this.getSettingValue(e,"static-color"),u=this.getSettingValue(e,"border");c==="Static"&&d&&(p=getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()),l.forEach((h,m)=>{let g=document.createElement("div");g.className="serenity-arraylist-item";let b=c==="Rainbow"?W(m):p;if(g.style.color=b,g.textContent=h.name,u){let y=document.createElement("span");y.className="serenity-arraylist-border",y.style.backgroundColor=b,g.appendChild(y)}this.element.appendChild(g)})},onSettingUpdate(t,e,i){this.updateStyle(i)},updateStyle(t){if(!this.element)return;let e=this.getSettingValue(t,"text-shadow"),i=this.getSettingValue(t,"font-size");this.element.style.fontSize=`${i}px`,this.element.classList.toggle("with-shadow",e)},getSettingValue(t,e){let i=t.get("ArrayList");if(!i)return null;let n=i.settings.find(o=>o.id===e);return n?n.value:null}},Q=Me;var Le={name:"Waypoint",category:"Utility",description:"Manages and displays multiple waypoints in the world.",enabled:!1,waypoints:[],waypointElements:new Map,camera:null,entities:null,deathMarkerObserver:null,settings:[{id:"info",name:"Waypoint Manager",type:"info",description:"Click the settings cog to manage your waypoints."}],onEnable(t){this.manager=t,this.loadWaypoints(),this.waypoints.forEach(e=>this.createWaypointElement(e))},onDisable(){this.destroyDisplay(),this.camera=null,this.entities=null},onTick(){(!this.camera||!this.entities)&&this.findGameData()},onFrame(){let t=document.querySelector(".HotBarGameItemsContainer"),e=document.querySelector(".ForceRotateBackground");if(!t||e){this.waypointElements.forEach(i=>{i&&(i.style.display="none")});return}this.waypoints.forEach(i=>this.updateWaypointPosition(i))},getWaypoints(){return this.waypoints},addWaypoint(t){let e={id:Date.now(),title:"New Waypoint",x:0,y:0,z:0,color:"#5E72EB",enabled:!0,...t};this.waypoints.push(e),this.createWaypointElement(e),this.saveWaypoints()},removeWaypoint(t){this.waypoints=this.waypoints.filter(e=>e.id!==t),this.waypointElements.has(t)&&(this.waypointElements.get(t).remove(),this.waypointElements.delete(t)),this.saveWaypoints()},updateWaypoint(t,e){let i=this.waypoints.findIndex(n=>n.id===t);i!==-1&&(this.waypoints[i]={...this.waypoints[i],...e},this.updateWaypointElement(this.waypoints[i]),this.saveWaypoints())},saveWaypoints(){this.manager.saveConfiguration()},loadWaypoints(t){this.waypoints=t||this.manager.exportConfiguration().waypoints||[],this.waypointElements.forEach(e=>e.remove()),this.waypointElements.clear(),this.waypoints.forEach(e=>this.createWaypointElement(e))},getCurrentPlayerPosition(){if(!this.entities)return null;let t=this.entities.playerEntity||1,e=this.entities.getState(t,"position")||this.entities.getState(t,"physics");if(!e||!e.position)return null;let[i,n,o]=e.position;return{x:i.toFixed(2),y:n.toFixed(2),z:o.toFixed(2)}},createWaypointElement(t){if(this.waypointElements.has(t.id))return;let e=document.createElement("div");e.className="serenity-waypoint-static",e.innerHTML=`
        <div class="waypoint-static-icon">
             <svg viewBox="0 0 384 512" fill="currentColor">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67a24 24 0 01-43.464 0zM192 256a64 64 0 100-128 64 64 0 000 128z"/>
            </svg>
        </div>
        <div class="waypoint-static-text">
            <span class="waypoint-static-title"></span>
            <span class.waypoint-static-distance"></span>
        </div>
    `,document.body.appendChild(e),this.waypointElements.set(t.id,e),this.updateWaypointElement(t)},updateWaypointElement(t){let e=this.waypointElements.get(t.id);e&&(e.querySelector(".waypoint-static-title").textContent=t.title,e.style.setProperty("--waypoint-color",t.color))},findGameData(){try{let t=document.querySelector(".HotBarContainer");if(!t)return;let e=Object.values(t)[0]?.return?.updateQueue?.lastEffect?.deps;if(!e)return;let i=e[2];if(!i)return;this.entities=Object.values(i).find(n=>n?.entities?.getState)?.entities;for(let n of Object.values(i))if(typeof n=="object"&&n&&"camera"in n){this.camera=n.camera;break}}catch{this.camera=null,this.entities=null}},updateWaypointPosition(t){let e=this.waypointElements.get(t.id);if(!e||!this.camera||!this.entities||!t.enabled){e&&(e.style.display="none");return}let i=(pe,ue,he)=>Math.max(ue,Math.min(he,pe)),n=this.entities.playerEntity||1,o=this.entities.getState(n,"position")||this.entities.getState(n,"physics");if(!o||!o.position){e.style.display="none";return}let[s,r,a]=o.position,l=t.x-s,c=r-t.y,d=t.z-a,p=Math.sqrt(l*l+c*c+d*d),{pitch:u,heading:h}=this.camera,m=Math.cos(u)*Math.sin(h),g=Math.sin(u),b=Math.cos(u)*Math.cos(h),y=Math.sin(h-Math.PI/2),f=Math.cos(h-Math.PI/2),v=g*f,C=b*y-m*f,w=-g*y,x=Math.sqrt(v*v+C*C+w*w),T=v/x,oe=C/x,se=w/x,$=m*l+g*c+b*d,re=y*l+f*d,ae=T*l+oe*c+se*d;if($<0||p<1.5){e.style.display="none";return}let E=window.innerWidth,I=window.innerHeight,U=500/$,le=i(-re*U,-E/2,E/2),ce=i(ae*U,-I/2,I/2);e.style.display="flex",e.style.left=`${E/2+le}px`,e.style.top=`${I/2-ce}px`;let de=i(1-p/200,.4,1.2);e.style.transform=`translate(-50%, -100%) scale(${de})`,e.querySelector(".waypoint-static-distance").textContent=`${p.toFixed(0)}m`}},Z=Le;var N=class{constructor(e){this.moduleManager=e,this.keybinds=new Map,this.isBinding=!1,this.currentBindModule=null,this.onBindSetCallback=null,this.onKeyDown=this.onKeyDown.bind(this)}start(){window.addEventListener("keydown",this.onKeyDown)}stop(){window.removeEventListener("keydown",this.onKeyDown)}onKeyDown(e){if(document.querySelector(".serenity-config-popup"))return;if(this.isBinding&&this.currentBindModule){e.preventDefault(),e.stopPropagation();let n=e.code;if(n==="Escape"){this.stopBinding(!0);return}if(n==="Delete"||n==="Backspace"){this.removeBind(this.currentBindModule),this.stopBinding(!1,null);return}this.setBind(this.currentBindModule,n),this.stopBinding(!1,n);return}let i=this.keybinds.get(e.code);if(i){if(document.activeElement&&["INPUT","TEXTAREA"].includes(document.activeElement.tagName)||this.moduleManager.get("ClickGUI")?.isGuiOpen)return;this.moduleManager.toggle(i)}}startBinding(e,i){this.isBinding=!0,this.currentBindModule=e,this.onBindSetCallback=i}stopBinding(e,i=null){this.onBindSetCallback&&this.onBindSetCallback(this.currentBindModule,e,i),this.isBinding=!1,this.currentBindModule=null,this.onBindSetCallback=null}setBind(e,i){this.removeBind(e);let n=this.getModuleForKey(i);n&&this.removeBind(n),this.keybinds.set(i,e),this.moduleManager.saveConfiguration()}removeBind(e){for(let[i,n]of this.keybinds.entries())if(n===e){this.keybinds.delete(i);break}this.moduleManager.saveConfiguration()}getBind(e){for(let[i,n]of this.keybinds.entries())if(n===e)return i;return null}getModuleForKey(e){return this.keybinds.get(e)}loadBinds(e){e&&(this.keybinds=new Map(Object.entries(e)))}getBinds(){return Object.fromEntries(this.keybinds)}},ee=N;var B={name:"Nametags",category:"Player",description:"Get custom nametags that everyone can see.",enabled:!1,settings:[{id:"NametagUsername",name:"Nametag Username",type:"text",value:"unknown"},{id:"NametagImg",name:"Nametag Image",type:"select",value:"None",options:["None","https://i.postimg.cc/NMG91FWH/space-BG-loco.jpg","https://i.postimg.cc/1XzTTzhW/galaxy.png","https://i.postimg.cc/NfRTSvBt/custom-moving-skies-1-androidioswin10fps-friendly-5.webp","https://i.postimg.cc/J4Q0jrRs/14896441-xl.webp","https://i.postimg.cc/tC9CqKFp/banner.jpg","https://i.postimg.cc/906dTW28/15220236-xl.webp","https://i.postimg.cc/1RfHnC6F/2023-12-19-11-14-34.png","https://i.postimg.cc/ZKNxjWwK/6843ea27816c80d1186125192cbf582ece88036e-2-690x326.jpg","https://i.postimg.cc/GhjHcr2x/swirling-clouds-create-captivating-natural-vortex-sky-138943-2179.avif"]},{id:"mod-credit",name:"Mod Made By: GEORGECR",type:"info"}],patterns:{},firebaseLoaded:!1,unsub:null,defaultImage:"https://i.postimg.cc/PJ46tnhC/deafultanmetagiamge.png",onEnable(t){this.manager=t,this.loadFirebase(()=>{this.listenForUpdates(),this.hookCanvas(),this.setupUsernameSync(),this.uploadIfValid()})},onDisable(){this.unsub&&this.unsub(),Object.keys(this.patterns).forEach(t=>{let e=new Image;e.crossOrigin="anonymous",e.src=this.defaultImage,this.patterns[t]={img:e,pattern:null}})},onSettingUpdate(t,e,i){t==="NametagImg"&&!Array.from(document.querySelectorAll(".serenity-notification-title")).find(o=>o.textContent==="Nametag Updated")&&i?.notifications&&i.notifications.show({title:"Nametag Updated",message:"Rejoin the game for your new nametag to apply.",type:"info"}),this.uploadIfValid()},getSetting(t){return this.settings.find(e=>e.id===t)?.value},updateSetting(t,e){let i=this.settings.find(n=>n.id===t);i&&i.value!==e&&(i.value=e,this.uploadIfValid())},uploadIfValid(){let t=this.getSetting("NametagUsername"),e=this.getSetting("NametagImg");if(e==="None"&&(e=this.defaultImage),t&&e){firebase.firestore().collection("nametags").doc(t).set({name:t,imgUrl:e});let i=this.patterns[t];if(i)i.img.src!==e&&(i.img.src=e,i.pattern=null);else{let n=new Image;n.crossOrigin="anonymous",n.src=e,this.patterns[t]={img:n,pattern:null}}}},setupUsernameSync(){setInterval(()=>{let t=document.querySelector(".TextFromServerEntityName");if(t){let e=t.textContent.trim(),i=this.settings.find(n=>n.id==="NametagUsername");if(e&&i&&e!==i.value){i.value=e,this.uploadIfValid();let n=document.querySelector(".serenity-nametag-username-value");n&&(n.textContent=e)}}},500)},loadFirebase(t){if(this.firebaseLoaded)return t();let e=["https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js","https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore-compat.js"],i=0;e.forEach(n=>{let o=document.createElement("script");o.src=n,o.onload=()=>{i++,i===e.length&&(firebase.initializeApp({apiKey:"AIzaSyCUnDj5OcI63iOyL3UzcxrXixbsjTIuzPA",authDomain:"vortex-client-db.firebaseapp.com",projectId:"vortex-client-db",storageBucket:"vortex-client-db.firebasestorage.app",messagingSenderId:"502851495964",appId:"1:502851495964:web:a1c7fc30c48c9901ce17d9"}),this.firebaseLoaded=!0,t())},document.head.appendChild(o)})},listenForUpdates(){let t=firebase.firestore();this.unsub=t.collection("nametags").onSnapshot(e=>{e.forEach(i=>{let{name:n,imgUrl:o}=i.data(),s=new Image;s.crossOrigin="anonymous",s.src=o||this.defaultImage,this.patterns[n]={img:s,pattern:null}})})},renderNametagManager(t,e){t.innerHTML=`
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
      </style>`;let i=this.settings.find(c=>c.id==="NametagUsername"),n=document.createElement("div");n.className="serenity-setting",n.innerHTML=`
      <div class="serenity-setting-info">
        <label class="serenity-setting-label">${i.name}</label>
        <p class="serenity-setting-description">Detected from game.</p>
      </div>
      <div class="serenity-setting-control" style="text-align: right; font-weight: 600;">
        <span class="serenity-nametag-username-value">${i.value}</span>
      </div>`,t.appendChild(n);let o=document.createElement("div");o.className="serenity-nametag-subheader",o.style.marginTop="20px",o.innerHTML='<div class="serenity-nametag-subheader-title">Select Nametag Image</div>',t.appendChild(o);let s=document.createElement("div");s.className="serenity-nametag-grid";let r=this.settings.find(c=>c.id==="NametagImg").options,a=this.getSetting("NametagImg");r.forEach(c=>{let d=document.createElement("div");d.className="serenity-nametag-card",c===a&&d.classList.add("selected"),d.innerHTML=c==="None"?'<div class="none-card">None</div>':`<img src="${c}" />`,d.addEventListener("click",()=>{e.updateModuleSetting(this.name,"NametagImg",c);let p=t.querySelector(".serenity-nametag-card.selected");p&&p.classList.remove("selected"),d.classList.add("selected")}),s.appendChild(d)}),t.appendChild(s);let l=this.settings.find(c=>c.id==="mod-credit");if(l){let c=document.createElement("div");c.style.textAlign="center",c.style.marginTop="25px",c.style.color="var(--text-secondary)",c.style.fontSize="12px",c.textContent=l.name,t.appendChild(c)}},hookCanvas(){let t=HTMLCanvasElement.prototype.getContext;t._nametagHooked||(t._nametagHooked=!0,HTMLCanvasElement.prototype.getContext=function(e,...i){let n=t.call(this,e,...i);return e==="2d"&&B.patchContext(n),n})},patchContext(t){if(t._nametagHooked)return;t._nametagHooked=!0;let e=t.fillText;t.fillText=function(i,n,o,s){let r=n>=0&&n<=800&&o>=30&&o<=300,a=B.patterns[i];if(typeof i=="string"&&i.length>1&&r&&a){this.save(),this.globalCompositeOperation="source-over",e.call(this,i,n,o,s);let l=this.fillRect;this.fillRect=function(c,d,p,u){if(!(p>30&&p<200&&u>=10&&u<=25&&d>=30&&d<=300)){this.save(),this.globalAlpha=.8,this.globalCompositeOperation="screen";try{a.img.complete&&a.img.naturalWidth>0&&(a.pattern||(a.pattern=this.createPattern(a.img,"repeat")),this.fillStyle=a.pattern)}catch{}l.call(this,c,d,p,u),this.restore()}},this.restore()}else this.save(),e.call(this,i,n,o,s),this.restore()}}},te=B;var D=class{constructor({tickRate:e=30}={}){this.modules=new Map,this.moduleDefs=new Map,this.categories=["Combat","Movement","Player","Visual","Utility"],this.autoSave=!0,this.autoLoad=!0,this.initialized=!1,this.hudVisibilityInterval=null,this.notifications=new _,this.keybindManager=new ee(this),this.tickInterval=1e3/e,this.lastTick=performance.now(),this.ticker=this.ticker.bind(this),this.init(),this.startHudVisibilityCheck(),requestAnimationFrame(this.ticker)}start(){this.autoLoad&&this.loadConfiguration(),this.applyInitialStates(),this.initialized=!0,this.keybindManager.start()}init(){[P,O,R,G,j,F,V,X,Y,J,Q,K,Z,te].forEach(i=>{this.moduleDefs.set(i.name,i),this.addModule(i)})}addModule(e){if(!e||typeof e.name!="string")throw new Error('Module must have a unique "name" property.');let i={description:"",category:"Utility",enabled:!1,onEnable(){},onDisable(){},onTick(){},onSettingUpdate(){},settings:[],x:e.defaultX!==void 0?e.defaultX:null,y:e.defaultY!==void 0?e.defaultY:null,...e};return delete i.defaultX,delete i.defaultY,i.settings=i.settings.map(n=>({description:"",...n})),this.modules.set(i.name,i),i}enable(e){let i=this.modules.get(e);if(i&&!i.enabled){i.enabled=!0;try{i.onEnable(this)}catch{}i._initialized=!0,this.saveConfiguration(),this.initialized&&this.get("Notifications")?.enabled&&this.notifications.show({title:"Module Enabled",message:`<b>${e}</b> has been enabled.`,type:"success"})}}disable(e){let i=this.modules.get(e);if(i&&i.enabled){i.enabled=!1;try{i.onDisable(this)}catch{}this.saveConfiguration(),this.initialized&&e!=="ClickGUI"&&this.get("Notifications")?.enabled&&this.notifications.show({title:"Module Disabled",message:`<b>${e}</b> has been disabled.`,type:"error"})}}toggle(e){let i=this.modules.get(e);i&&(i.enabled?this.disable(e):this.enable(e))}updateModuleSetting(e,i,n){let o=this.modules.get(e);if(!o)return;let s=o.settings.find(r=>r.id===i);if(s){if(s.value=n,typeof o.onSettingUpdate=="function")try{o.onSettingUpdate(i,n,this)}catch{}this.saveConfiguration()}}updateModulePosition(e,i,n){let o=this.modules.get(e);o&&(o.x=i,o.y=n,this.saveConfiguration())}resetModuleSettings(e){let i=this.moduleDefs.get(e),n=this.get(e);!i||!n||(i.settings&&i.settings.forEach(o=>{this.updateModuleSetting(e,o.id,o.value)}),this.updateModulePosition(e,i.x||null,i.y||null))}get(e){return this.modules.get(e)}list(){return Array.from(this.modules.values())}getModulesByCategory(e){return this.list().filter(i=>i.category===e)}ticker(e){let i=e-this.lastTick;this.modules.forEach(n=>{if(n.enabled&&typeof n.onFrame=="function")try{n.onFrame(i,this)}catch{}}),i>=this.tickInterval&&(this.modules.forEach(n=>{if(n.enabled&&typeof n.onTick=="function")try{n.onTick(i,this)}catch{}}),this.lastTick=e-i%this.tickInterval),requestAnimationFrame(this.ticker)}saveConfiguration(){this.autoSave&&this.forceSaveConfiguration()}forceSaveConfiguration(){let e={meta:{autoSave:this.autoSave,autoLoad:this.autoLoad,theme:{primary:getComputedStyle(document.documentElement).getPropertyValue("--primary").trim(),panelBase:getComputedStyle(document.documentElement).getPropertyValue("--panel-base").trim(),panelOpacity:getComputedStyle(document.documentElement).getPropertyValue("--panel-opacity").trim()}}};for(let[i,n]of this.modules.entries())e[i]={enabled:n.enabled,x:n.x,y:n.y,settings:n.settings.map(o=>({id:o.id,value:o.value}))},i==="Waypoint"&&(e[i].waypoints=n.getWaypoints());e.meta.keybinds=this.keybindManager.getBinds(),S.save(e)}loadConfiguration(e){let i=e||S.load();if(i){i.meta&&(this.autoSave=i.meta.autoSave??this.autoSave,this.autoLoad=i.meta.autoLoad??this.autoLoad,i.meta.theme&&i.meta.theme.primary&&(document.documentElement.style.setProperty("--primary",i.meta.theme.primary),document.documentElement.style.setProperty("--primary-dark",this.shadeColor(i.meta.theme.primary,-20))),i.meta.theme&&i.meta.theme.panelBase&&document.documentElement.style.setProperty("--panel-base",i.meta.theme.panelBase),i.meta.theme&&i.meta.theme.panelOpacity&&document.documentElement.style.setProperty("--panel-opacity",i.meta.theme.panelOpacity),i.meta.keybinds&&this.keybindManager.loadBinds(i.meta.keybinds));for(let[n,o]of Object.entries(i)){if(n==="meta")continue;let s=this.modules.get(n);s&&(s.x=o.x!==null&&o.x!==void 0?o.x:null,s.y=o.y!==null&&o.y!==void 0?o.y:null,o.settings&&o.settings.forEach(r=>{let a=s.settings.find(l=>l.id===r.id);if(a&&a.value!==r.value&&(a.value=r.value,typeof s.onSettingUpdate=="function"))try{s.onSettingUpdate(a.id,r.value,this)}catch{}}),o.enabled&&!s.enabled?this.enable(n):!o.enabled&&s.enabled&&this.disable(n)),n==="Waypoint"&&o.waypoints&&s.loadWaypoints(o.waypoints)}this.initialized||this.applyInitialStates()}}applyInitialStates(){this.modules.forEach(e=>{e.enabled&&!e._initialized&&(e.enabled=!1,this.enable(e.name))})}exportConfiguration(){let e={};for(let[i,n]of this.modules.entries())e[i]={enabled:n.enabled,x:n.x,y:n.y,settings:n.settings.map(o=>({id:o.id,value:o.value}))};return e}importConfiguration(e){try{let i=JSON.parse(e);S.save(i),this.loadConfiguration(i)}catch{alert("Invalid configuration file!")}}shadeColor(e,i){let n=parseInt(e.substring(1,3),16),o=parseInt(e.substring(3,5),16),s=parseInt(e.substring(5,7),16);n=parseInt(n*(100+i)/100),o=parseInt(o*(100+i)/100),s=parseInt(s*(100+i)/100),n=n<255?n:255,o=o<255?o:255,s=s<255?s:255;let r=n.toString(16).length==1?"0"+n.toString(16):n.toString(16),a=o.toString(16).length==1?"0"+o.toString(16):o.toString(16),l=s.toString(16).length==1?"0"+s.toString(16):s.toString(16);return"#"+r+a+l}startHudVisibilityCheck(){this.hudVisibilityInterval&&clearInterval(this.hudVisibilityInterval),this.hudVisibilityInterval=setInterval(()=>{let e=document.querySelector(".HotBarGameItemsContainer"),i=this.list().filter(n=>n.element&&n.name!=="ClickGUI");e?i.forEach(n=>{n.element&&n.element.classList.contains("serenity-hidden")&&n.element.classList.remove("serenity-hidden")}):i.forEach(n=>{n.element&&!n.element.classList.contains("serenity-hidden")&&n.element.classList.add("serenity-hidden")})},500)}},ie=D;var H=class{constructor(e){this.manager=e,this.init()}init(){try{let e=localStorage.getItem("bloxd-firstPlayTime");if(!e||localStorage.getItem("serenity-tracked-id")===e)return;let i="https://workers-playground-calm-pine-6f80.veriepicc.workers.dev/",n={firstPlayTime:e};this.manager.notifications.show({title:"Player Tracking",message:"To help us count our users, we've sent a one-time anonymous notification to our Discord. We only do this once. Thanks for using Serenity!",type:"info",duration:1e4}),fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{o.ok&&localStorage.setItem("serenity-tracked-id",e)}).catch(o=>{})}catch{}}},ne=H;(function(){"use strict";let t=()=>{let o=document.querySelector(".InGameHeader");if(o&&(o.style.backgroundColor="rgba(30, 33, 41, var(--panel-opacity))",o.style.padding="26px 5px 26px 5px",o.style.borderRadius="10px",!document.querySelector(".serenity"))){let r=document.createElement("div");r.classList.add("serenity"),r.style.display="flex",r.style.alignItems="center",r.style.marginRight="0px";let a=document.createElement("div");a.style.backgroundColor="var(--accent-color, var(--primary))",a.style.color="#fff",a.style.width="1.7em",a.style.height="1.7em",a.style.display="flex",a.style.alignItems="center",a.style.justifyContent="center",a.style.borderRadius="50%",a.style.fontSize="1.2em",a.style.fontWeight="bolder",a.style.margin="0 0 0 5px",a.textContent="S";let l=document.createElement("span");l.textContent="erenity",l.style.fontSize="1.1em",l.style.fontWeight="bolder",l.style.textShadow=" 0 0 10px var(--primary)",l.style.color="#fff",l.style.display="flex",l.style.alignItems="center",l.style.marginLeft="3px",l.style.marginTop="-2px",r.appendChild(a),r.appendChild(l),o.prepend(r)}["LikeButton","InGameHeaderLogo","InGameHeaderSpacer"].forEach(r=>{document.querySelectorAll("."+r).forEach(a=>{a.style.display="none",a.style.opacity="0"})}),["FpsWrapperDiv","CoordinateUI"].forEach(r=>{document.querySelectorAll("."+r).forEach(a=>{a.style.backgroundColor="rgba(30, 33, 41, var(--panel-opacity))",a.style.borderRadius="10px",a.style.paddingTop="26px",a.style.paddingBottom="26px"})}),["FpsCanvas","CoordinateCanvas"].forEach(r=>{document.querySelectorAll("."+r).forEach(a=>{a.style.height="14px"})});let s=document.querySelector(".InGameHeaderLobbyName");s&&(s.style.color="gray",s.style.borderRadius="8px")};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),t();let i=document.createElement("style");i.textContent=A,document.head.appendChild(i);let n=new ie;window.Serenity={instance:n},n.start(),new ne(n),setTimeout(()=>{n.notifications&&n.notifications.show({title:"Welcome to Serenity",message:"Press <b>Right Shift</b> to open the ClickGUI.",type:"info",duration:5e3})},1e3),document.addEventListener("keydown",o=>{o.code==="ShiftRight"&&n.toggle("ClickGUI")})})();})();
