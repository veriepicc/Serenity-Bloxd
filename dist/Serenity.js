
// ==UserScript==
// @name         Serenity Client
// @version      1.0.0
// @description  A feature-rich client for Bloxd.io
// @author       Serenity Development
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

(() => {
  // src/styles.css
  var styles_default = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --primary: #5E72EB; /* A nice modern blue */
  --primary-dark: #4D5DBF;
  --accent: #E54B4B; /* A contrasting accent color */
  --panel-base: #1e2129; /* Default dark background color */
  --panel-opacity: 0.85; /* Default opacity */
  --background: rgba(20, 22, 28, 0.9);
  --panel: rgba(30, 33, 41, var(--panel-opacity));
  --hover: rgba(255, 255, 255, 0.05);
  --border: rgba(255, 255, 255, 0.07);
  --shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
  --text: #EAEAEA;
  --text-secondary: rgba(255, 255, 255, 0.6);
  --radius: 10px;
  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  --notification-success-bg: rgba(63, 154, 86, 0.15);
  --notification-success-icon: #5cb85c;
  --notification-warning-bg: rgba(205, 163, 74, 0.15);
  --notification-warning-icon: #f0ad4e;
  --notification-error-bg: rgba(201, 79, 79, 0.15);
  --notification-error-icon: #d9534f;
  --notification-info-bg: rgba(94, 114, 235, 0.15);
  --notification-info-icon: var(--primary);
}

.serenity-hidden {
  display: none !important;
}

/* Overlay that covers the entire screen with heavy blur */
.serenity-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(10, 12, 16, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 9998;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.serenity-overlay.visible {
  opacity: 1;
}

/* Main container for the UI */
.serenity-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.95);
  display: flex;
  gap: 0; /* Remove gap for a more integrated look */
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  z-index: 9999;
  color: var(--text);
  opacity: 0;
  transition: var(--transition);
  max-height: 75vh;
  overflow: hidden;
  width: 70%;
  max-width: 1000px;
}

.serenity-container:not(.settings-view-active) .serenity-content {
  background-image: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 60%);
  background-size: 150% 150%;
  animation: fluid-hero 8s ease-in-out infinite;
}

.serenity-container.visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.serenity-container.settings-view-active .serenity-sidebar {
    display: none;
}

/* Left sidebar with categories */
.serenity-sidebar {
  display: flex;
  flex-direction: column;
  min-width: 200px;
  background-color: rgba(25, 28, 36, 0.5); /* Slightly different shade */
  padding: 15px;
  border-right: 1px solid var(--border);
}

.serenity-sidebar-footer {
    margin-top: auto;
    padding-top: 15px;
    border-top: 1px solid var(--border);
}

.serenity-logo {
  margin-bottom: 20px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}

.serenity-logo h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: var(--text);
  text-shadow: 0 0 10px var(--primary);
  transition: transform 0.2s ease-in-out;
}

.serenity-logo a {
    text-decoration: none;
}

.serenity-logo a:hover h1 {
    transform: scale(1.2);
}

.serenity-logo span {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-secondary);
}

.serenity-category {
  padding: 12px 15px;
  margin-bottom: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
}

.serenity-category:hover {
  background-color: var(--hover);
  border-color: var(--border);
}

.serenity-category.active {
  background-color: var(--primary);
  color: #fff;
  box-shadow: 0 4px 20px rgba(94, 114, 235, 0.3);
}

.serenity-category-icon {
  margin-right: 12px;
  font-size: 16px;
  width: 20px; /* Ensure icons align */
  text-align: center;
  opacity: 0.9;
}

.serenity-category-icon i {
  font-weight: 900; /* Required for Font Awesome solid icons */
}

/* Right content area with modules */
.serenity-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
}

.serenity-content::-webkit-scrollbar {
  width: 5px;
}

.serenity-content::-webkit-scrollbar-track {
  background: transparent;
}

.serenity-content::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 10px;
}

.serenity-content::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dark);
}

.serenity-section {
  margin-bottom: 25px;
}

.serenity-section-header {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.serenity-search-bar {
  background: rgba(0,0,0,0.2);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 14px;
  transition: var(--transition);
  width: 250px;
}

.serenity-search-bar:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(0,0,0,0.3);
}

.serenity-right-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.serenity-config-btn i {
  font-weight: 900;
}

.serenity-config-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  z-index: 10003;
  width: 480px;
  animation: fadeIn 0.1s ease-out;
  display: flex;
  flex-direction: column;
}

.serenity-config-popup-header {
  padding: 12px 15px;
  font-weight: 600;
  border-bottom: 1px solid var(--border);
  text-align: center;
}

.serenity-config-popup-header button {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 20px;
  cursor: pointer;
}

.serenity-config-popup-body {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.serenity-config-settings {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 15px;
}

.serenity-config-toggle-setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.serenity-config-manual-actions {
  display: flex;
  gap: 10px;
}

.serenity-config-manual-actions button {
  flex-grow: 1;
  padding: 8px 15px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background-color: var(--panel);
  color: var(--text);
  cursor: pointer;
  font-weight: 600;
  transition: var(--transition);
}

.serenity-config-manual-actions button:hover {
  background-color: var(--hover);
}

.serenity-config-popup-body textarea {
  width: 100%;
  min-height: 120px;
  resize: vertical;
  background: rgba(0,0,0,0.2);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: var(--text);
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  box-sizing: border-box;
}

.serenity-config-popup-actions {
  display: flex;
  gap: 10px;
}

.serenity-config-popup-actions button {
  padding: 8px 15px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: var(--transition);
}

/* This targets the Import button */
.serenity-config-popup-actions button:first-child {
  background-color: var(--primary);
  color: #fff;
}

.serenity-config-popup-actions button:first-child:hover {
  background-color: var(--primary-dark);
}

/* This targets the Export button */
.serenity-config-popup-actions button:last-child {
  background-color: var(--panel);
  color: var(--text);
  border: 1px solid var(--border);
}

.serenity-config-popup-actions button:last-child:hover {
  background-color: var(--hover);
}

.serenity-config-popup-footer {
  padding: 15px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.serenity-config-back-btn {
  background-color: var(--panel);
  color: var(--text);
  border: 1px solid var(--border);
  padding: 8px 15px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.serenity-config-back-btn:hover {
  background-color: var(--hover);
}

.serenity-modules {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 18px;
}

/* Module cards */
.serenity-module {
  background-color: var(--panel);
  border-radius: var(--radius);
  padding: 16px;
  transition: var(--transition);
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}

.serenity-module:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  border-color: var(--primary);
}

.serenity-module-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.serenity-module-name {
  font-weight: 600;
  font-size: 15px;
}

.serenity-module-toggle {
  position: relative;
  width: 44px; /* Slightly smaller */
  height: 22px;
  cursor: pointer;
}

.serenity-toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  transition: var(--transition);
  border-radius: 22px;
  border: 1px solid var(--border);
}

.serenity-toggle-slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: var(--text-secondary);
  transition: var(--transition);
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.serenity-module-toggle.enabled .serenity-toggle-slider {
  background-color: var(--primary);
  border-color: var(--primary-dark);
}

.serenity-module-toggle.enabled .serenity-toggle-slider:before {
  transform: translateX(22px);
  background-color: #fff;
}

.serenity-module-description {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* New controls for settings button next to the toggle */
.serenity-module-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.serenity-module-settings-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  transition: var(--transition);
  font-size: 14px;
}

.serenity-module:hover .serenity-module-settings-btn {
  opacity: 1;
}

.serenity-module-settings-btn:hover {
  color: var(--text);
  background-color: var(--hover);
}

/* Header for the dedicated settings view */
.serenity-settings-header {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.serenity-back-btn {
  background: var(--panel);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: var(--transition);
  font-size: 14px;
  font-weight: 600;
}

.serenity-back-btn:hover {
  background: var(--hover);
  border-color: var(--primary);
}

/* HUD Editor styles */
.serenity-hud-editor-btn i {
  font-weight: 900;
}

.serenity-hud-editor-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(10, 12, 16, 0.8);
  backdrop-filter: blur(16px);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.serenity-hud-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: -1;
}

.serenity-hud-done-btn {
  position: absolute;
  bottom: 30px;
  background-color: var(--primary);
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 4px 20px rgba(94, 114, 235, 0.4);
}

.serenity-hud-done-btn:hover {
  background-color: var(--primary-dark);
}

/* HUD Settings Popup */
.serenity-hud-settings-popup {
  position: fixed;
  background-color: var(--panel);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px;
  z-index: 10002;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 200px;
  box-shadow: var(--shadow);
  animation: fadeIn 0.1s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* New header for the HUD settings popup */
.serenity-hud-popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  background-color: rgba(0,0,0,0.2);
  border-bottom: 1px solid var(--border);
  font-weight: 600;
  font-size: 13px;
}

.serenity-hud-popup-close-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
}

.serenity-hud-popup-close-btn:hover {
  color: var(--text);
}

.serenity-hud-popup-body {
  padding: 10px;
}

.serenity-hud-popup-footer {
  padding: 10px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: flex-end;
}

.serenity-hud-popup-reset-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background-color 0.2s;
}

.serenity-hud-popup-reset-btn:hover {
  background: var(--primary-dark);
}

.serenity-config-popup-footer {
  padding: 15px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.serenity-config-back-btn {
  background-color: var(--panel);
  color: var(--text);
  border: 1px solid var(--border);
  padding: 8px 15px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.serenity-config-back-btn:hover {
  background-color: var(--hover);
}

/* Compact styles for settings inside the HUD popup */
.serenity-hud-settings-popup .serenity-setting {
  padding: 4px 2px;
  border-bottom: none;
}

.serenity-hud-settings-popup .serenity-setting-label {
  font-size: 13px;
}

.serenity-hud-settings-popup .serenity-setting-description {
  display: none;
}

.serenity-module-settings {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.serenity-setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid var(--border);
}

.serenity-setting:last-child {
  border-bottom: none;
}

.serenity-setting-info {
  flex: 1;
}

.serenity-setting-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
}

.serenity-setting-description {
  font-size: 12px;
  color: var(--text-secondary);
  margin: 4px 0 0 0;
}

.serenity-setting-control {
  flex-basis: 40%;
}

/* Generic input styles */
.serenity-select, .serenity-text-input {
  width: 100%;
  background: rgba(0,0,0,0.2);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 6px;
  padding: 8px;
  font-size: 13px;
  transition: var(--transition);
}

.serenity-select:focus, .serenity-text-input:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(0,0,0,0.3);
}

/* Checkbox specific styles */
.serenity-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background-color: rgba(0,0,0,0.2);
  border: 1px solid var(--border);
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: var(--transition);
}

.serenity-checkbox:checked {
  background-color: var(--primary);
  border-color: var(--primary-dark);
}

.serenity-checkbox:checked::before {
  content: '\u2713';
  font-size: 14px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Slider specific styles */
.serenity-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: rgba(0,0,0,0.3);
  border-radius: 3px;
  outline: none;
  transition: opacity .2s;
}

.serenity-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  background: var(--primary);
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid var(--background);
}

.serenity-slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: var(--primary);
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid var(--background);
}

/* Custom Color Picker with Alpha Support */
.serenity-color-picker-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.serenity-color-swatch {
  width: 100%;
  height: 28px;
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  /* Checkerboard background to show transparency */
  background-image: 
    linear-gradient(45deg, #333 25%, transparent 25%), 
    linear-gradient(-45deg, #333 25%, transparent 25%), 
    linear-gradient(45deg, transparent 75%, #333 75%), 
    linear-gradient(-45deg, transparent 75%, #333 75%);
  background-size: 12px 12px;
  background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
  position: relative;
  overflow: hidden;
}

.serenity-color-swatch::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: currentColor;
}

.serenity-color-popup {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 5px;
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px;
  z-index: 10005; /* Above other UI */
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 160px;
}

.serenity-color-popup input[type="color"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.serenity-color-popup input[type="color"]::-webkit-color-swatch {
  border-radius: 5px;
  border: 1px solid var(--border);
}

.serenity-color-popup input[type="color"]::-moz-color-swatch {
  border-radius: 5px;
  border: 1px solid var(--border);
}

.serenity-color-popup .serenity-slider {
  margin: 0;
}

/* Color Picker specific styles */
.serenity-color-picker {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 28px;
  background-color: transparent;
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
}

.serenity-color-picker::-webkit-color-swatch {
  border-radius: 5px;
  border: none;
}

.serenity-color-picker::-moz-color-swatch {
  border-radius: 5px;
  border: none;
}

.cps-counter-display {
  position: fixed;
  z-index: 9997;
  user-select: none;
}

.serenity-interface-display {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
}

.serenity-interface-logo {
  background-color: var(--accent-color, var(--primary));
  color: #fff;
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.2em;
  font-weight: 800;
}

.serenity-interface-info {
  display: flex;
  gap: 8px;
  align-items: center;
}

.serenity-interface-name {
  font-weight: 700;
  color: var(--accent-color, var(--primary));
}

.serenity-interface-gamemode {
  font-weight: 700;
}

.serenity-interface-lobby {
  opacity: 0.7;
  font-size: 0.9em;
}

/* Chat Module Styles */
.serenity-chat-container {
  position: absolute;
  width: 350px;
  max-width: 25%;
  z-index: 1000;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.serenity-chat-messages {
  background-color: var(--panel);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  pointer-events: auto;
  width: 100%;
}

.serenity-chat-message {
  padding: 2px 0;
  font-size: var(--chat-font-size, 14px);
  color: #fff;
  display: flex;
  align-items: baseline;
  gap: 8px;
  line-height: 1.4;
}

.serenity-message-content {
  flex-grow: 1;
  white-space: normal;
  word-wrap: break-word;
}

.serenity-message-own-name {
  color: var(--accent, #E54B4B) !important;
  font-weight: 700;
}

.serenity-message-tag {
  color: #a970e3 !important; /* A nice purple */
  font-weight: 600;
}

.serenity-message-timestamp {
  font-size: 0.8em;
  opacity: 0.6;
}

.serenity-chat-input-wrapper {
  display: flex;
}

.serenity-chat-input {
  flex-grow: 1;
  background: rgba(0,0,0,0.3);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: var(--chat-font-size, 14px);
  outline: none;
  transition: var(--transition);
  pointer-events: auto;
}

.serenity-chat-input:focus {
  border-color: var(--primary);
}

/* Global styles */
body {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

body.serenity-no-scroll {
  overflow: hidden;
}

/* Ensure the font is loaded */

/* Keystrokes Module */
.keystrokes-display {
  --key-size: 52px;
  --key-padding: 2px;
  --key-radius: 8px;
  --key-border: rgba(255, 255, 255, 0.1);
  --key-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  --key-shadow-pressed: 0 2px 4px rgba(0, 0, 0, 0.4);
  --key-transition: all 0.12s cubic-bezier(0.34, 1.56, 0.64, 1);
  --blur-intensity: 10px;
  --key-bg: var(--panel);
  --key-active-bg: var(--primary);
  --key-text: var(--text);
  font-family: 'Inter', 'Segoe UI', sans-serif;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 9997;
  pointer-events: none;
  user-select: none;
}

.keystrokes-row {
  display: flex;
  gap: 5px;
  justify-content: center;
}

.keystrokes-key {
  position: relative;
  width: var(--key-size);
  height: var(--key-size);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--key-text);
  border-radius: var(--key-radius);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  user-select: none;
  border: none;
  background: var(--panel);
  transition: var(--key-transition);
  overflow: hidden;
  transform: translateY(0);
  box-shadow: var(--key-shadow);
}

.keystrokes-key::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary);
  opacity: 0;
  transition: opacity 0.15s ease;
  z-index: -1;
  border-radius: var(--key-radius);
}

.keystrokes-key.active {
  transform: translateY(2px);
  box-shadow: var(--key-shadow-pressed), inset 0 0 0 1px rgba(255, 255, 255, 0.3);
  color: white;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}

.keystrokes-key.active::before {
  opacity: 1;
}

.keystrokes-key.space-key {
  width: calc(var(--key-size) * 3 + 10px);
}

.keystrokes-row.mouse-row {
  margin-top: 2px;
}

.keystrokes-key.mouse-button {
  flex: 1;
  min-width: calc((var(--key-size) * 3 + 10px - 5px) / 2);
}

.keystrokes-display:not(.show-mouse) .mouse-row {
  display: none;
}

.keystrokes-display.no-animations .keystrokes-key {
  transition: none !important;
}

/* Notification System */
.serenity-notification-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10005;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
}

.serenity-notification {
  display: flex;
  align-items: center;
  width: 350px;
  background: var(--panel);
  border-radius: 12px;
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  color: var(--text);
  overflow: hidden;
  position: relative;
  opacity: 0;
  padding: 12px;
  gap: 12px;
}

.serenity-notification.exiting {
    pointer-events: none;
}

.serenity-notification-icon-wrapper {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--notification-info-bg);
}

.serenity-notification-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--notification-info-icon);
}

.serenity-notification-icon svg {
  width: 22px;
  height: 22px;
}

.serenity-notification-content {
  padding: 0;
  flex-grow: 1;
}

.serenity-notification-title {
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 2px;
}

.serenity-notification-message {
  font-size: 14px;
  line-height: 1.4;
  color: var(--text-secondary);
}

.serenity-notification-message b {
    color: var(--text);
    font-weight: 600;
}

.serenity-notification-close {
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  opacity: 0.7;
  transition: var(--transition);
}

.serenity-notification-close:hover {
  opacity: 1;
  color: var(--text);
}

.serenity-notification-timer {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background-color: var(--notification-info-icon);
  opacity: 0.6;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

/* Notification Types */
.serenity-notification-success .serenity-notification-icon-wrapper { background-color: var(--notification-success-bg); }
.serenity-notification-success .serenity-notification-icon { color: var(--notification-success-icon); }
.serenity-notification-success .serenity-notification-timer { background-color: var(--notification-success-icon); }

.serenity-notification-warning .serenity-notification-icon-wrapper { background-color: var(--notification-warning-bg); }
.serenity-notification-warning .serenity-notification-icon { color: var(--notification-warning-icon); }
.serenity-notification-warning .serenity-notification-timer { background-color: var(--notification-warning-icon); }

.serenity-notification-error .serenity-notification-icon-wrapper { background-color: var(--notification-error-bg); }
.serenity-notification-error .serenity-notification-icon { color: var(--notification-error-icon); }
.serenity-notification-error .serenity-notification-timer { background-color: var(--notification-error-icon); }

/* Animations */
@keyframes serenity-notification-in {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes serenity-notification-out {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}

/* ArrayList Module - v2 */
.serenity-arraylist-container {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9995;
  pointer-events: none;
  font-weight: 600;
  line-height: 1.4;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-end;
}

.serenity-arraylist-item {
  position: relative;
  padding: 4px 12px;
  background-color: var(--panel);
  border-radius: 6px;
  transition: all 0.3s ease;
  overflow: hidden;
  padding-right: 18px; /* Make space for border */
}

.serenity-arraylist-border {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 4px;
}

.serenity-arraylist-container.with-shadow .serenity-arraylist-item {
  text-shadow: 0 1px 3px rgba(0,0,0,0.6);
}

/* New Config Screen Styles */
.serenity-config-screen {
    flex-direction: column;
    width: 60%;
    max-width: 800px;
    height: 70vh;
    max-height: 600px;
}

.serenity-config-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
    height: 60px;
}

.serenity-config-title {
    font-size: 20px;
    font-weight: 700;
}

.serenity-config-tabs {
    display: flex;
    gap: 5px;
}

.serenity-config-tab {
    padding: 8px 18px;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 8px;
    transition: var(--transition);
}

.serenity-config-tab:hover {
    background: var(--hover);
    color: var(--text);
}

.serenity-config-tab.active {
    background: var(--primary);
    color: #fff;
    box-shadow: 0 2px 10px rgba(94, 114, 235, 0.3);
}

.serenity-config-close-btn {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 22px;
    cursor: pointer;
    transition: var(--transition);
    padding: 10px;
    border-radius: 50%;
}

.serenity-config-close-btn:hover {
    color: var(--text);
    background-color: var(--hover);
}

.serenity-config-content {
    flex-grow: 1;
    padding: 25px;
    overflow-y: auto;
}

.serenity-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 18px;
    color: var(--text-secondary);
    user-select: none;
}

/* Theme Editor Styles */
.serenity-theme-editor {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.serenity-section-subheader {
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
}

.serenity-subheader-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
}

.serenity-subheader-subtitle {
    font-size: 14px;
    color: var(--text-secondary);
}

.serenity-theme-control {
    display: flex;
    align-items: center;
}

.serenity-theme-color-picker {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 60px;
    height: 40px;
    background-color: transparent;
    border: 1px solid var(--border);
    border-radius: 8px;
    cursor: pointer;
}
.serenity-theme-color-picker::-webkit-color-swatch {
    border-radius: 7px;
    border: none;
}
.serenity-theme-color-picker::-moz-color-swatch {
    border-radius: 7px;
    border: none;
}

.serenity-themes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 15px;
}

.serenity-theme-card {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: var(--panel);
    padding: 12px;
    border-radius: 8px;
    border: 1px solid var(--border);
    cursor: pointer;
    transition: var(--transition);
}

.serenity-theme-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    border-color: var(--primary);
}

.serenity-theme-preview {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    flex-shrink: 0;
}

/* New Config Screen Styles */
.serenity-config-screen-content {
    display: flex;
    gap: 25px;
    height: 100%;
}

.serenity-config-tabs-vertical {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-right: 1px solid var(--border);
    padding-right: 25px;
    flex-shrink: 0;
}

.serenity-config-tab {
    padding: 10px 20px;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 8px;
    transition: var(--transition);
}

.serenity-config-tab:hover {
    background: var(--hover);
    color: var(--text);
}

.serenity-config-tab.active {
    background: var(--primary);
    color: #fff;
    box-shadow: 0 2px 10px rgba(94, 114, 235, 0.3);
}

.serenity-config-tab-content {
    flex-grow: 1;
    overflow-y: auto;
    padding: 5px;
}

.serenity-config-content {
    flex-grow: 1;
    padding: 25px;
    overflow-y: auto;
    user-select: none;
}

/* Config Editor Styles */
.serenity-config-editor {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.serenity-config-column {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.serenity-config-controls-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    border: 1px solid var(--border);
}

.serenity-config-toggle-setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--panel);
    padding: 15px;
    border-radius: var(--radius);
    border: 1px solid var(--border);
}

.serenity-config-manual-actions {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.serenity-btn {
    padding: 10px 20px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background-color: var(--panel);
    color: var(--text);
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
}

.serenity-btn:hover {
    background-color: var(--hover);
    border-color: var(--primary);
}

.serenity-btn-primary {
    background-color: var(--primary);
    border-color: var(--primary);
    color: #fff;
}

.serenity-btn-primary:hover {
    background-color: var(--primary-dark);
}

.serenity-import-export-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.serenity-import-export textarea {
    width: 100%;
    min-height: 100px;
    resize: vertical;
    background: rgba(0,0,0,0.2);
    border: 1px solid var(--border);
    color: var(--text);
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
    box-sizing: border-box;
}

.serenity-import-export-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

/* Theme Editor Styles */
.serenity-theme-editor {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

/* Hotbar Module Styles */
.serenity-hotbar-wrapper {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px; /* Add some space between aura bar and hotbar */
    pointer-events: none;
    user-select: none;
}

.serenity-hotbar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    pointer-events: auto;
}

.serenity-hotbar-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.serenity-hotbar-filler {
    flex-grow: 1;
    max-width: 20px;
}

.serenity-hotbar-items {
    display: flex;
    align-items: center;
    gap: var(--hotbar-slot-spacing);
}

.serenity-hotbar-slot {
    position: relative;
    width: var(--hotbar-slot-size);
    height: var(--hotbar-slot-size);
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.15s ease-out;
}

.serenity-hotbar-slot.selected {
    border-color: var(--primary);
    box-shadow: 0 0 8px var(--primary);
}

.serenity-hotbar-item-img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    image-rendering: pixelated;
}

.serenity-slot-number {
    position: absolute;
    bottom: 2px;
    right: 4px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 10px;
    font-weight: bold;
    z-index: 1;
    text-shadow: 0 0 2px #000;
}

.serenity-slot-amount {
    position: absolute;
    top: 2px;
    left: 4px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 12px;
    font-weight: bold;
    z-index: 1;
    text-shadow: 1px 1px 2px #000;
}

.serenity-hotbar-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
}

.serenity-hotbar-button-icon {
    position: relative;
    color: #fff;
    font-size: 18px;
}

.serenity-hotbar-key-helper {
    position: absolute;
    bottom: -12px;
    right: -8px;
    font-size: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    border-radius: 3px;
    padding: 1px 4px;
    font-weight: bold;
}

.hotbar-style-compact .serenity-hotbar-slot {
    border-radius: 2px;
    margin: 0 1px !important;
}

.hotbar-style-compact .serenity-hotbar-button {
    border-radius: 2px;
}

.hotbar-style-modern .serenity-hotbar-slot {
    background-color: rgba(20, 22, 30, 0.7);
    border-radius: 8px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
}

.hotbar-style-modern .serenity-hotbar-slot.selected {
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(94, 114, 235, 0.3);
}

.hotbar-style-modern .serenity-hotbar-button {
    background-color: rgba(20, 22, 30, 0.7);
    border-radius: 8px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Aura Bar Styles */
.serenity-aura-bar {
    width: 250px;
    height: 18px;
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 2px;
    position: relative;
    overflow: hidden;
}

.serenity-aura-bar-background {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
}

.serenity-aura-bar-progress {
    height: 100%;
    background-color: var(--primary);
    transition: width 0.3s ease-in-out;
}

.serenity-aura-bar-text {
    position: relative;
    z-index: 1;
    width: 100%;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    text-shadow: 0 0 3px #000;
}

/* Fluid Hero Animation */
@keyframes fluid-hero {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.serenity-theme-panel-controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center;
}

.serenity-theme-control-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.serenity-theme-control-group label {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
}

.serenity-waypoint-static {
  --waypoint-color: #5E72EB;
  position: fixed;
  z-index: 9996;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  user-select: none;
}

.waypoint-static-icon {
  width: 48px;
  height: 48px;
  color: var(--waypoint-color);
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5));
}

.waypoint-static-text {
  background-color: rgba(20, 22, 28, 0.7);
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  margin-top: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  white-space: nowrap;
}

.waypoint-static-title {
  display: block;
}

.waypoint-static-distance {
  display: block;
  font-size: 12px;
  opacity: 0.7;
}

/* Waypoint Manager UI */
.serenity-waypoint-general-settings {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border);
}

.serenity-waypoint-actions {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.serenity-waypoint-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.serenity-waypoint-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: var(--panel);
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.serenity-waypoint-color-preview {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 2px solid var(--background);
}

.serenity-waypoint-info {
  flex-grow: 1;
}

.serenity-waypoint-info .title {
  font-weight: 600;
  font-size: 15px;
}

.serenity-waypoint-info .coords {
  display: block;
  font-size: 12px;
  color: var(--text-secondary);
}

.serenity-waypoint-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.serenity-waypoint-controls button {
  background: var(--hover);
  border: none;
  color: var(--text-secondary);
  width: 30px;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
  transition: var(--transition);
}

.serenity-waypoint-controls button:hover {
  background: var(--primary);
  color: #fff;
}

.coord-inputs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
`;

  // src/modules/visual/ClickGUI.js
  var ClickGUI = {
    name: "ClickGUI",
    category: "Visual",
    description: "The main user interface for the client.",
    enabled: true,
    element: null,
    overlay: null,
    activeCategory: "Visual",
    activeSettingsModule: null,
    isEditingHUD: false,
    activeHUDSettingsPopup: null,
    searchQuery: "",
    isGuiOpen: false,
    isCleaningUp: false,
    activeConfigTab: "Themes",
    activeView: "modules",
    onEnable(manager) {
      if (this.isCleaningUp || this.element) return;
      this.isGuiOpen = true;
      document.body.classList.add("serenity-no-scroll");
      if (document.pointerLockElement) {
        document.exitPointerLock();
      }
      if (!document.getElementById("font-awesome-link")) {
        const fontAwesomeLink = document.createElement("link");
        fontAwesomeLink.id = "font-awesome-link";
        fontAwesomeLink.rel = "stylesheet";
        fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
        document.head.appendChild(fontAwesomeLink);
      }
      this.createGUI(manager);
      setTimeout(() => {
        if (this.overlay) this.overlay.classList.add("visible");
        if (this.element) this.element.classList.add("visible");
      }, 50);
    },
    onDisable(manager) {
      this.isGuiOpen = false;
      this.exitHUDeditor(manager);
      document.body.classList.remove("serenity-no-scroll");
      const gameCanvas = document.getElementById("noa-canvas");
      if (gameCanvas && !document.pointerLockElement) {
        gameCanvas.requestPointerLock();
        gameCanvas.click();
      }
      this.cleanup();
    },
    cleanup() {
      if (this.overlay && !this.isCleaningUp) {
        this.isCleaningUp = true;
        this.overlay.classList.remove("visible");
        this.element.classList.remove("visible");
        setTimeout(() => {
          if (this.overlay) document.body.removeChild(this.overlay);
          if (this.element) document.body.removeChild(this.element);
          this.overlay = null;
          this.element = null;
          this.isCleaningUp = false;
          document.body.classList.remove("serenity-no-scroll");
          const fontAwesomeLink = document.getElementById("font-awesome-link");
          if (fontAwesomeLink) {
            document.head.removeChild(fontAwesomeLink);
          }
        }, 300);
      }
    },
    createGUI(manager) {
      this.overlay = document.createElement("div");
      this.overlay.className = "serenity-overlay";
      document.body.appendChild(this.overlay);
      this.element = document.createElement("div");
      this.element.className = "serenity-container";
      const sidebar = this.createSidebar(manager);
      this.element.appendChild(sidebar);
      const content = this.createContent(manager);
      this.element.appendChild(content);
      document.body.appendChild(this.element);
    },
    createSidebar(manager) {
      const sidebar = document.createElement("div");
      sidebar.className = "serenity-sidebar";
      const logo = document.createElement("div");
      logo.className = "serenity-logo";
      logo.innerHTML = `
      <a href="https://discord.gg/serenityclient" target="_blank"><h1>Serenity</h1></a>
      <span>CLIENT v1.2</span>
    `;
      sidebar.appendChild(logo);
      const categories = manager.categories;
      const categoryIcons = {
        "Visual": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin-right: 12px;"><path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>',
        "Utility": '<i class="fas fa-cog"></i>',
        "Combat": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin-right: 12px;"><path fill="currentColor" d="M256 0c17.7 0 32 14.3 32 32l0 10.4c93.7 13.9 167.7 88 181.6 181.6l10.4 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-10.4 0c-13.9 93.7-88 167.7-181.6 181.6l0 10.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-10.4C130.3 455.7 56.3 381.7 42.4 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l10.4 0C56.3 130.3 130.3 56.3 224 42.4L224 32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6l0-20.6c0-17.7 14.3-32 32-32s32 14.3 32 32l0 20.6c58.3-12.5 104.1-58.4 116.6-116.6L384 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l20.6 0C392.1 165.7 346.3 119.9 288 107.4l0 20.6c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-20.6C165.7 119.9 119.9 165.7 107.4 224l20.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-20.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',
        "Player": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin-right: 12px;"><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>',
        "Movement": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin-right: 12px;"><path fill="currentColor" d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288l21.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-21.3 0c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352L32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l69.6 0c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"/></svg>'
      };
      categories.forEach((category) => {
        const categoryBtn = document.createElement("div");
        categoryBtn.className = `serenity-category ${category === this.activeCategory ? "active" : ""}`;
        const icon = categoryIcons[category] || categoryIcons["Utility"];
        categoryBtn.innerHTML = `
        <span class="serenity-category-icon">${icon}</span>
        ${category}
      `;
        categoryBtn.addEventListener("click", () => {
          document.querySelectorAll(".serenity-category").forEach((el) => {
            el.classList.remove("active");
          });
          categoryBtn.classList.add("active");
          this.activeCategory = category;
          this.activeSettingsModule = null;
          this.searchQuery = "";
          this.closeHUDSettingsPopup();
          this.updateContent(manager);
        });
        sidebar.appendChild(categoryBtn);
      });
      const sidebarFooter = document.createElement("div");
      sidebarFooter.className = "serenity-sidebar-footer";
      const hudEditorBtn = document.createElement("div");
      hudEditorBtn.className = "serenity-category serenity-hud-editor-btn";
      hudEditorBtn.innerHTML = `<svg class="serenity-category-icon" style="width: 1.2em; margin-right: 12px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/></svg> HUD Editor`;
      hudEditorBtn.addEventListener("click", () => {
        this.isEditingHUD = true;
        this.renderHUDeditor(manager);
      });
      sidebarFooter.appendChild(hudEditorBtn);
      const configBtn = document.createElement("div");
      configBtn.className = "serenity-category serenity-config-btn";
      configBtn.innerHTML = `<svg class="serenity-category-icon" style="width: 1.2em; margin-right: 12px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg> Settings`;
      configBtn.addEventListener("click", () => {
        this.activeView = "settings";
        this.updateContent(manager);
      });
      sidebarFooter.appendChild(configBtn);
      sidebar.appendChild(sidebarFooter);
      return sidebar;
    },
    exitHUDeditor(manager) {
      if (!this.isEditingHUD) return;
      const editorOverlay = document.querySelector(".serenity-hud-editor-overlay");
      if (editorOverlay) {
        document.body.removeChild(editorOverlay);
      }
      this.isEditingHUD = false;
      this.closeHUDSettingsPopup();
      if (this.overlay) {
        this.overlay.style.zIndex = "1000000000";
      }
      manager.list().forEach((mod) => {
        if (mod.enabled && mod.element) {
          mod.element.style.zIndex = mod.name === "ArmorHUD" || mod.name === "CPSCounter" || mod.name === "FPSCounter" || mod.name === "Interface" ? 9997 : "";
          mod.element.style.pointerEvents = "none";
          mod.element.style.cursor = "";
          mod.element.onmousedown = null;
        }
      });
    },
    renderHUDeditor(manager) {
      this.element.style.display = "none";
      if (this.overlay) {
        this.overlay.style.zIndex = "-1";
      }
      const editorOverlay = document.createElement("div");
      editorOverlay.className = "serenity-hud-editor-overlay";
      document.body.appendChild(editorOverlay);
      const grid = document.createElement("div");
      grid.className = "serenity-hud-grid";
      editorOverlay.appendChild(grid);
      manager.list().forEach((mod) => {
        if (mod.enabled && mod.element) {
          mod.element.style.zIndex = 10001;
          mod.element.style.pointerEvents = "auto";
          this.makeElementDraggable(mod.element, mod, manager);
        }
      });
      const doneBtn = document.createElement("button");
      doneBtn.className = "serenity-hud-done-btn";
      doneBtn.textContent = "Done";
      doneBtn.addEventListener("click", () => {
        this.exitHUDeditor(manager);
        this.element.style.display = "flex";
        this.element.style.pointerEvents = "auto";
        this.element.style.zIndex = "1000000001";
      });
      editorOverlay.appendChild(doneBtn);
    },
    makeElementDraggable(element, module, manager) {
      if (!element || module.name === "ClickGUI") return;
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      const dragMouseDown = (e) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        const rect = element.getBoundingClientRect();
        element.style.top = `${rect.top}px`;
        element.style.left = `${rect.left}px`;
        element.style.bottom = "auto";
        element.style.right = "auto";
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      };
      const elementDrag = (e) => {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        let newTop = element.offsetTop - pos2;
        let newLeft = element.offsetLeft - pos1;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;
        newLeft = Math.max(0, Math.min(newLeft, screenWidth - elementWidth));
        newTop = Math.max(0, Math.min(newTop, screenHeight - elementHeight));
        element.style.top = `${newTop}px`;
        element.style.left = `${newLeft}px`;
        if (this.activeHUDSettingsPopup && this.activeHUDSettingsPopup.moduleName === module.name) {
          const popup = this.activeHUDSettingsPopup.element;
          const popupWidth = popup.offsetWidth;
          let popupLeft = newLeft + elementWidth + 10;
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
      element.style.cursor = "move";
    },
    showHUDSettingsPopup(e, module, manager, element) {
      this.closeHUDSettingsPopup();
      const popup = document.createElement("div");
      popup.className = "serenity-hud-settings-popup";
      const header = document.createElement("div");
      header.className = "serenity-hud-popup-header";
      const title = document.createElement("span");
      title.textContent = module.name;
      const closeBtn = document.createElement("button");
      closeBtn.className = "serenity-hud-popup-close-btn";
      closeBtn.innerHTML = "&times;";
      closeBtn.onclick = () => this.closeHUDSettingsPopup();
      header.appendChild(title);
      header.appendChild(closeBtn);
      popup.appendChild(header);
      const settingsContainer = document.createElement("div");
      settingsContainer.className = "serenity-hud-popup-body";
      module.settings.forEach((setting) => {
        const settingElement = this.createSettingElement(module, setting, manager);
        if (settingElement) {
          settingsContainer.appendChild(settingElement);
        }
      });
      popup.appendChild(settingsContainer);
      const footer = document.createElement("div");
      footer.className = "serenity-hud-popup-footer";
      const resetBtn = document.createElement("button");
      resetBtn.className = "serenity-hud-popup-reset-btn";
      resetBtn.textContent = "Reset to Defaults";
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
      const content = document.createElement("div");
      content.className = "serenity-content";
      this.populateModulesContent(content, manager);
      return content;
    },
    updateContent(manager) {
      const content = this.element.querySelector(".serenity-content");
      content.innerHTML = "";
      if (this.activeView === "settings") {
        this.element.classList.add("settings-view-active");
      } else {
        this.element.classList.remove("settings-view-active");
      }
      if (this.activeSettingsModule) {
        this.populateSettingsContent(content, manager);
      } else if (this.activeView === "settings") {
        this.renderSettingsScreen(content, manager);
      } else {
        this.populateModulesContent(content, manager);
      }
    },
    renderSettingsScreen(content, manager) {
      const header = document.createElement("div");
      header.className = "serenity-settings-header";
      const backBtn = document.createElement("button");
      backBtn.className = "serenity-back-btn";
      backBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="width: 0.7em; height: 0.7em; margin-right: 8px; vertical-align: middle;"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg> Back';
      backBtn.addEventListener("click", () => {
        this.activeView = "modules";
        this.activeSettingsModule = null;
        this.updateContent(manager);
      });
      const title = document.createElement("span");
      title.textContent = "Settings";
      header.appendChild(backBtn);
      header.appendChild(title);
      content.appendChild(header);
      const settingsContainer = document.createElement("div");
      settingsContainer.className = "serenity-config-screen-content";
      const tabs = document.createElement("div");
      tabs.className = "serenity-config-tabs-vertical";
      tabs.innerHTML = `
        <button class="serenity-config-tab active" data-tab="Themes">Themes</button>
        <button class="serenity-config-tab" data-tab="Config">Config</button>
        <button class="serenity-config-tab" data-tab="Scripting">Scripting</button>
    `;
      settingsContainer.appendChild(tabs);
      const tabContent = document.createElement("div");
      tabContent.className = "serenity-config-tab-content";
      settingsContainer.appendChild(tabContent);
      content.appendChild(settingsContainer);
      tabs.querySelectorAll(".serenity-config-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
          tabs.querySelectorAll(".serenity-config-tab").forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");
          this.activeConfigTab = tab.dataset.tab;
          this.renderConfigContent(manager);
        });
      });
      this.renderConfigContent(manager);
    },
    renderConfigContent(manager) {
      const content = this.element.querySelector(".serenity-config-tab-content");
      if (!content) return;
      content.innerHTML = "";
      switch (this.activeConfigTab) {
        case "Themes":
          this.renderThemesContent(content, manager);
          break;
        case "Config":
          this.renderConfigSubContent(content, manager);
          break;
        case "Scripting":
          this.renderScriptingContent(content, manager);
          break;
      }
    },
    renderThemesContent(content, manager) {
      const themeContainer = document.createElement("div");
      themeContainer.className = "serenity-theme-editor";
      const accentHeader = this.createSectionHeader("Accent Color", "Sets the main color for UI elements.");
      themeContainer.appendChild(accentHeader);
      const accentControl = document.createElement("div");
      accentControl.className = "serenity-theme-control";
      const colorPicker = document.createElement("input");
      colorPicker.type = "color";
      colorPicker.className = "serenity-theme-color-picker";
      colorPicker.value = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
      colorPicker.addEventListener("input", (e) => {
        const newColor = e.target.value;
        document.documentElement.style.setProperty("--primary", newColor);
        document.documentElement.style.setProperty("--primary-dark", this.shadeColor(newColor, -20));
        manager.saveConfiguration();
      });
      accentControl.appendChild(colorPicker);
      themeContainer.appendChild(accentControl);
      const panelHeader = this.createSectionHeader("Panel Style", "Customize the look of UI backgrounds.");
      themeContainer.appendChild(panelHeader);
      const panelControls = document.createElement("div");
      panelControls.className = "serenity-theme-panel-controls";
      const panelColorControl = document.createElement("div");
      panelColorControl.className = "serenity-theme-control-group";
      panelColorControl.innerHTML = `<label>Panel Color</label>`;
      const panelColorPicker = document.createElement("input");
      panelColorPicker.type = "color";
      panelColorPicker.className = "serenity-theme-color-picker";
      const initialPanelColor = getComputedStyle(document.documentElement).getPropertyValue("--panel-base").trim();
      panelColorPicker.value = initialPanelColor;
      panelColorPicker.addEventListener("input", (e) => {
        document.documentElement.style.setProperty("--panel-base", e.target.value);
        manager.saveConfiguration();
      });
      panelColorControl.appendChild(panelColorPicker);
      panelControls.appendChild(panelColorControl);
      const panelOpacityControl = document.createElement("div");
      panelOpacityControl.className = "serenity-theme-control-group";
      panelOpacityControl.innerHTML = `<label>Panel Opacity</label>`;
      const panelOpacitySlider = document.createElement("input");
      panelOpacitySlider.type = "range";
      panelOpacitySlider.className = "serenity-slider";
      panelOpacitySlider.min = 0;
      panelOpacitySlider.max = 1;
      panelOpacitySlider.step = 0.01;
      const initialOpacity = getComputedStyle(document.documentElement).getPropertyValue("--panel-opacity").trim();
      panelOpacitySlider.value = initialOpacity;
      panelOpacitySlider.addEventListener("input", (e) => {
        document.documentElement.style.setProperty("--panel-opacity", e.target.value);
        manager.saveConfiguration();
      });
      panelOpacityControl.appendChild(panelOpacitySlider);
      panelControls.appendChild(panelOpacityControl);
      themeContainer.appendChild(panelControls);
      const themesHeader = this.createSectionHeader("Themes", "Select from a pre-made color scheme.");
      themeContainer.appendChild(themesHeader);
      const themesGrid = document.createElement("div");
      themesGrid.className = "serenity-themes-grid";
      const themes = [
        { name: "Serenity", color: "#5E72EB" },
        { name: "Sunset", color: "#E54B4B" },
        { name: "Emerald", color: "#3f9a56" },
        { name: "Goldenrod", color: "#cda34a" },
        { name: "Amethyst", color: "#9b59b6" }
      ];
      themes.forEach((theme) => {
        const themeCard = document.createElement("div");
        themeCard.className = "serenity-theme-card";
        themeCard.innerHTML = `<div class="serenity-theme-preview" style="background-color: ${theme.color};"></div><span>${theme.name}</span>`;
        themeCard.addEventListener("click", () => {
          document.documentElement.style.setProperty("--primary", theme.color);
          document.documentElement.style.setProperty("--primary-dark", this.shadeColor(theme.color, -20));
          colorPicker.value = theme.color;
          manager.saveConfiguration();
        });
        themesGrid.appendChild(themeCard);
      });
      themeContainer.appendChild(themesGrid);
      content.appendChild(themeContainer);
    },
    createSectionHeader(title, subtitle) {
      const header = document.createElement("div");
      header.className = "serenity-section-subheader";
      header.innerHTML = `
        <div class="serenity-subheader-title">${title}</div>
        <div class="serenity-subheader-subtitle">${subtitle}</div>
      `;
      return header;
    },
    renderConfigSubContent(content, manager) {
      const configContainer = document.createElement("div");
      configContainer.className = "serenity-config-editor";
      const leftColumn = document.createElement("div");
      leftColumn.className = "serenity-config-column";
      const generalHeader = this.createSectionHeader("General", "Manage how your configuration is handled.");
      leftColumn.appendChild(generalHeader);
      const settingsGrid = document.createElement("div");
      settingsGrid.className = "serenity-config-controls-grid";
      const autoSaveSetting = this.createToggleSetting("Auto Save", "Automatically save changes.", manager.autoSave, (value) => {
        manager.autoSave = value;
        manager.forceSaveConfiguration();
      });
      settingsGrid.appendChild(autoSaveSetting);
      const autoLoadSetting = this.createToggleSetting("Auto Load", "Load config on startup.", manager.autoLoad, (value) => {
        manager.autoLoad = value;
        manager.forceSaveConfiguration();
      });
      settingsGrid.appendChild(autoLoadSetting);
      leftColumn.appendChild(settingsGrid);
      const manualHeader = this.createSectionHeader("Manual Control", "Manually save or load the current config.");
      leftColumn.appendChild(manualHeader);
      const manualButtons = document.createElement("div");
      manualButtons.className = "serenity-config-manual-buttons";
      const saveBtn = document.createElement("button");
      saveBtn.className = "serenity-btn";
      saveBtn.textContent = "Force Save";
      saveBtn.onclick = () => {
        manager.forceSaveConfiguration();
        saveBtn.textContent = "Saved!";
        setTimeout(() => {
          saveBtn.textContent = "Force Save";
        }, 2e3);
      };
      manualButtons.appendChild(saveBtn);
      const loadBtn = document.createElement("button");
      loadBtn.className = "serenity-btn";
      loadBtn.textContent = "Force Load";
      loadBtn.onclick = () => manager.loadConfiguration();
      manualButtons.appendChild(loadBtn);
      const resetBtn = document.createElement("button");
      resetBtn.className = "serenity-btn serenity-btn-danger";
      resetBtn.textContent = "Reset All";
      resetBtn.onclick = () => {
        if (confirm("Are you sure you want to reset all settings to their defaults? This action cannot be undone.")) {
          manager.loadConfiguration({});
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      };
      manualButtons.appendChild(resetBtn);
      leftColumn.appendChild(manualButtons);
      configContainer.appendChild(leftColumn);
      const rightColumn = document.createElement("div");
      rightColumn.className = "serenity-config-column";
      const importExportHeader = this.createSectionHeader("Import / Export", "Share your configuration with others.");
      rightColumn.appendChild(importExportHeader);
      const importExportContainer = document.createElement("div");
      importExportContainer.className = "serenity-import-export-buttons";
      const importBtn = document.createElement("button");
      importBtn.className = "serenity-btn serenity-btn-primary";
      importBtn.innerHTML = `<i class="fas fa-upload"></i> Import from File`;
      importBtn.onclick = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.onchange = (e) => {
          const file = e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (event) => {
            try {
              manager.importConfiguration(event.target.result);
              alert("Configuration imported successfully!");
            } catch (err) {
              alert("Failed to import configuration. The file may be corrupt or improperly formatted.");
            }
          };
          reader.readAsText(file);
        };
        input.click();
      };
      const exportBtn = document.createElement("button");
      exportBtn.className = "serenity-btn";
      exportBtn.innerHTML = `<i class="fas fa-download"></i> Export to File`;
      exportBtn.onclick = () => {
        const config = manager.exportConfiguration();
        const configStr = JSON.stringify(config, null, 2);
        navigator.clipboard.writeText(configStr).then(() => {
          this.notifications.show({
            title: "Config Exported",
            message: "Configuration copied to clipboard.",
            type: "success"
          });
        });
        const blob = new Blob([configStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "serenity-config.json";
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
      content.innerHTML = `<div class="serenity-placeholder">Scripting coming soon...</div>`;
    },
    shadeColor(color, percent) {
      let R = parseInt(color.substring(1, 3), 16);
      let G = parseInt(color.substring(3, 5), 16);
      let B = parseInt(color.substring(5, 7), 16);
      R = parseInt(R * (100 + percent) / 100);
      G = parseInt(G * (100 + percent) / 100);
      B = parseInt(B * (100 + percent) / 100);
      R = R < 255 ? R : 255;
      G = G < 255 ? G : 255;
      B = B < 255 ? B : 255;
      const RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
      const GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
      const BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
      return "#" + RR + GG + BB;
    },
    populateModulesContent(content, manager) {
      const header = document.createElement("div");
      header.className = "serenity-section-header";
      const title = document.createElement("span");
      title.textContent = this.activeCategory;
      const searchInput = document.createElement("input");
      searchInput.type = "text";
      searchInput.className = "serenity-search-bar";
      searchInput.placeholder = "Search...";
      searchInput.value = this.searchQuery;
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value;
        this.filterAndRenderModules(manager);
      });
      header.appendChild(title);
      header.appendChild(searchInput);
      content.appendChild(header);
      const modulesContainer = document.createElement("div");
      modulesContainer.className = "serenity-modules";
      content.appendChild(modulesContainer);
      this.filterAndRenderModules(manager);
    },
    filterAndRenderModules(manager) {
      const modulesContainer = this.element.querySelector(".serenity-modules");
      if (!modulesContainer) return;
      modulesContainer.innerHTML = "";
      const categoryModules = manager.getModulesByCategory(this.activeCategory);
      const filteredModules = categoryModules.filter(
        (mod) => mod.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      filteredModules.forEach((mod) => {
        const moduleCard = this.createModuleCard(mod, manager);
        modulesContainer.appendChild(moduleCard);
      });
    },
    createModuleCard(mod, manager) {
      const card = document.createElement("div");
      card.className = "serenity-module";
      const header = document.createElement("div");
      header.className = "serenity-module-header";
      const name = document.createElement("div");
      name.className = "serenity-module-name";
      name.textContent = mod.name;
      header.appendChild(name);
      const controls = document.createElement("div");
      controls.className = "serenity-module-controls";
      if (mod.settings.length > 0) {
        const settingsBtn = document.createElement("button");
        settingsBtn.className = "serenity-module-settings-btn";
        settingsBtn.innerHTML = '<i class="fas fa-cog"></i>';
        settingsBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.activeSettingsModule = mod;
          this.updateContent(manager);
        });
        controls.appendChild(settingsBtn);
      }
      const toggle = document.createElement("div");
      toggle.className = `serenity-module-toggle ${mod.enabled ? "enabled" : ""}`;
      toggle.innerHTML = '<span class="serenity-toggle-slider"></span>';
      toggle.addEventListener("click", () => {
        manager.toggle(mod.name);
        toggle.classList.toggle("enabled");
      });
      controls.appendChild(toggle);
      header.appendChild(controls);
      card.appendChild(header);
      if (mod.description) {
        const description = document.createElement("div");
        description.className = "serenity-module-description";
        description.textContent = mod.description;
        card.appendChild(description);
      }
      return card;
    },
    populateSettingsContent(content, manager) {
      const mod = this.activeSettingsModule;
      if (!mod) return;
      const section = document.createElement("div");
      section.className = "serenity-section";
      const header = document.createElement("div");
      header.className = "serenity-settings-header";
      const backBtn = document.createElement("button");
      backBtn.className = "serenity-back-btn";
      backBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="width: 0.7em; height: 0.7em; margin-right: 8px; vertical-align: middle;"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg> Back';
      backBtn.addEventListener("click", () => {
        this.activeSettingsModule = null;
        this.updateContent(manager);
      });
      const title = document.createElement("span");
      title.textContent = `${mod.name} Settings`;
      header.appendChild(backBtn);
      header.appendChild(title);
      section.appendChild(header);
      const settingsContainer = document.createElement("div");
      settingsContainer.className = "serenity-module-settings";
      if (mod.name === "Waypoint") {
        this.renderWaypointManager(settingsContainer, manager);
      } else {
        mod.settings.forEach((setting) => {
          const settingElement = this.createSettingElement(mod, setting, manager);
          if (settingElement) {
            if (setting.condition) {
              const isVisible = setting.condition(mod.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {}));
              settingElement.style.display = isVisible ? "" : "none";
            }
            settingsContainer.appendChild(settingElement);
          }
        });
      }
      section.appendChild(settingsContainer);
      content.appendChild(section);
    },
    renderWaypointManager(container, manager) {
      container.innerHTML = "";
      const waypointModule = manager.get("Waypoint");
      if (!waypointModule) return;
      const generalSettings = document.createElement("div");
      generalSettings.className = "serenity-waypoint-general-settings";
      waypointModule.settings.filter((s) => s.type !== "info").forEach((setting) => {
        const settingEl = this.createSettingElement(waypointModule, setting, manager);
        generalSettings.appendChild(settingEl);
      });
      container.appendChild(generalSettings);
      const actions = document.createElement("div");
      actions.className = "serenity-waypoint-actions";
      const addCurrentBtn = document.createElement("button");
      addCurrentBtn.className = "serenity-btn serenity-btn-primary";
      addCurrentBtn.textContent = "Add at Current Location";
      addCurrentBtn.onclick = () => {
        const pos = waypointModule.getCurrentPlayerPosition();
        if (pos) {
          waypointModule.addWaypoint({ ...pos });
          this.renderWaypointManager(container, manager);
        } else {
          alert("Could not get player position.");
        }
      };
      const addManualBtn = document.createElement("button");
      addManualBtn.className = "serenity-btn";
      addManualBtn.textContent = "Create Manually";
      addManualBtn.onclick = () => {
        waypointModule.addWaypoint({});
        this.renderWaypointManager(container, manager);
      };
      actions.appendChild(addCurrentBtn);
      actions.appendChild(addManualBtn);
      container.appendChild(actions);
      const list = document.createElement("div");
      list.className = "serenity-waypoint-list";
      waypointModule.getWaypoints().forEach((wp) => {
        const item = document.createElement("div");
        item.className = "serenity-waypoint-item";
        const colorPreview = document.createElement("div");
        colorPreview.className = "serenity-waypoint-color-preview";
        colorPreview.style.backgroundColor = wp.color;
        const info = document.createElement("div");
        info.className = "serenity-waypoint-info";
        info.innerHTML = `
        <span class="title">${wp.title}</span>
        <span class="coords">X: ${wp.x}, Y: ${wp.y}, Z: ${wp.z}</span>
      `;
        const controls = document.createElement("div");
        controls.className = "serenity-waypoint-controls";
        const toggle = document.createElement("input");
        toggle.type = "checkbox";
        toggle.className = "serenity-checkbox";
        toggle.checked = wp.enabled;
        toggle.onchange = (e) => {
          waypointModule.updateWaypoint(wp.id, { enabled: e.target.checked });
        };
        const editBtn = document.createElement("button");
        editBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M402.6 83.2l90.2 90.2c12.5 12.5 12.5 32.8 0 45.3l-283.2 283.2c-12.5 12.5-32.8 12.5-45.3 0L32.2 368.2c-12.5-12.5-12.5-32.8 0-45.3l283.2-283.2c12.5-12.5 32.8-12.5 45.3 0zm47.4 18.7c-9.2-9.2-22.9-11.9-35.8-9.8l-15.6 15.6 100.2 100.2 15.6-15.6c2.1-12.9-.6-26.6-9.8-35.8l-55.2-55.2zM384 346.7L128 480H0V352l256-256L384 346.7z"/></svg>';
        editBtn.onclick = () => this.showWaypointEditPopup(wp, manager);
        const deleteBtn = document.createElement("button");
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
      const waypointModule = manager.get("Waypoint");
      const popup = document.createElement("div");
      popup.className = "serenity-config-popup";
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
      const overlay = document.createElement("div");
      overlay.className = "serenity-overlay visible";
      overlay.style.zIndex = "10001";
      document.body.appendChild(overlay);
      document.body.appendChild(popup);
      const close = () => {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
        this.updateContent(manager);
      };
      popup.querySelector("#wp-save").onclick = () => {
        const updatedData = {
          title: popup.querySelector("#wp-title").value,
          x: popup.querySelector("#wp-x").value,
          y: popup.querySelector("#wp-y").value,
          z: popup.querySelector("#wp-z").value,
          color: popup.querySelector("#wp-color").value
        };
        waypointModule.updateWaypoint(waypoint.id, updatedData);
        close();
      };
      popup.querySelector("#wp-cancel").onclick = close;
    },
    createSettingElement(module, setting, manager) {
      const settingWrapper = document.createElement("div");
      settingWrapper.className = "serenity-setting";
      settingWrapper.dataset.settingId = setting.id;
      const infoContainer = document.createElement("div");
      infoContainer.className = "serenity-setting-info";
      const label = document.createElement("label");
      label.className = "serenity-setting-label";
      label.textContent = setting.name;
      infoContainer.appendChild(label);
      if (setting.description) {
        const desc = document.createElement("p");
        desc.className = "serenity-setting-description";
        desc.textContent = setting.description;
        infoContainer.appendChild(desc);
      }
      settingWrapper.appendChild(infoContainer);
      const controlContainer = document.createElement("div");
      controlContainer.className = "serenity-setting-control";
      switch (setting.type) {
        case "boolean":
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = setting.value;
          checkbox.className = "serenity-checkbox";
          checkbox.addEventListener("change", (e) => {
            manager.updateModuleSetting(module.name, setting.id, e.target.checked);
            this.updateConditionalSettings(module, manager);
          });
          controlContainer.appendChild(checkbox);
          break;
        case "slider":
          const slider = document.createElement("input");
          slider.type = "range";
          slider.min = setting.min;
          slider.max = setting.max;
          slider.step = setting.step;
          slider.value = setting.value;
          slider.className = "serenity-slider";
          slider.addEventListener("input", (e) => {
            manager.updateModuleSetting(module.name, setting.id, parseFloat(e.target.value));
          });
          controlContainer.appendChild(slider);
          break;
        case "select":
          const select = document.createElement("select");
          select.className = "serenity-select";
          setting.options.forEach((opt) => {
            const option = document.createElement("option");
            option.value = opt;
            option.textContent = opt;
            if (setting.value === opt) option.selected = true;
            select.appendChild(option);
          });
          select.addEventListener("change", (e) => {
            manager.updateModuleSetting(module.name, setting.id, e.target.value);
            this.updateConditionalSettings(module, manager);
          });
          controlContainer.appendChild(select);
          break;
        case "text":
          const textInput = document.createElement("input");
          textInput.type = "text";
          textInput.value = setting.value;
          textInput.className = "serenity-text-input";
          textInput.addEventListener("change", (e) => {
            manager.updateModuleSetting(module.name, setting.id, e.target.value);
          });
          controlContainer.appendChild(textInput);
          break;
        case "color":
          const colorPicker = this.createColorPicker(module, setting, manager);
          controlContainer.appendChild(colorPicker);
          break;
      }
      settingWrapper.appendChild(controlContainer);
      return settingWrapper;
    },
    updateConditionalSettings(module, manager) {
      const settingsMap = module.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      const settingsContainer = this.element.querySelector(".serenity-module-settings");
      module.settings.forEach((s) => {
        if (s.condition) {
          const settingElement = settingsContainer.querySelector(`[data-setting-id="${s.id}"]`);
          if (settingElement) {
            settingElement.style.display = s.condition(settingsMap) ? "" : "none";
          }
        }
      });
    },
    // --- Start of Color Picker Helper Functions ---
    createColorPicker(module, setting, manager) {
      const wrapper = document.createElement("div");
      wrapper.className = "serenity-color-picker-wrapper";
      const swatch = document.createElement("div");
      swatch.className = "serenity-color-swatch";
      swatch.style.color = setting.value;
      const popup = this.createColorPopup(module, setting, manager, swatch);
      swatch.addEventListener("click", (e) => {
        e.stopPropagation();
        const a = document.querySelector(".serenity-color-popup");
        if (a && a !== popup) a.remove();
        if (document.querySelector(".serenity-color-popup") === popup) {
          popup.remove();
        } else {
          wrapper.appendChild(popup);
        }
      });
      wrapper.appendChild(swatch);
      document.addEventListener("click", (e) => {
        if (!wrapper.contains(e.target)) {
          popup.remove();
        }
      });
      return wrapper;
    },
    createColorPopup(module, setting, manager, swatch) {
      const popup = document.createElement("div");
      popup.className = "serenity-color-popup";
      const colorInput = document.createElement("input");
      colorInput.type = "color";
      colorInput.value = this.rgbaToHex(setting.value).hex;
      const alphaSlider = document.createElement("input");
      alphaSlider.type = "range";
      alphaSlider.className = "serenity-slider";
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
      colorInput.addEventListener("input", updateColor);
      alphaSlider.addEventListener("input", updateColor);
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
      if (rgba.startsWith("#")) return { hex: rgba, alpha: 1 };
      const parts = rgba.match(/[\d.]+/g);
      if (!parts || parts.length < 3) return { hex: "#000000", alpha: 1 };
      const r = parseInt(parts[0]).toString(16).padStart(2, "0");
      const g = parseInt(parts[1]).toString(16).padStart(2, "0");
      const b = parseInt(parts[2]).toString(16).padStart(2, "0");
      const alpha = parts.length >= 4 ? parseFloat(parts[3]) : 1;
      return { hex: `#${r}${g}${b}`, alpha };
    },
    createToggleSetting(name, description, initialValue, onChange) {
      const settingWrapper = document.createElement("div");
      settingWrapper.className = "serenity-config-toggle-setting";
      const infoContainer = document.createElement("div");
      infoContainer.className = "serenity-setting-info";
      const label = document.createElement("label");
      label.className = "serenity-setting-label";
      label.textContent = name;
      const desc = document.createElement("p");
      desc.className = "serenity-setting-description";
      desc.textContent = description;
      infoContainer.appendChild(label);
      infoContainer.appendChild(desc);
      const controlContainer = document.createElement("div");
      controlContainer.className = "serenity-setting-control";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = initialValue;
      checkbox.className = "serenity-checkbox";
      checkbox.addEventListener("change", (e) => {
        onChange(e.target.checked);
      });
      controlContainer.appendChild(checkbox);
      settingWrapper.appendChild(infoContainer);
      settingWrapper.appendChild(controlContainer);
      return settingWrapper;
    }
  };
  var ClickGUI_default = ClickGUI;

  // src/modules/visual/FPSCounter.js
  var FPSCounter = {
    name: "FPSCounter",
    category: "Visual",
    description: "Displays your current frames per second.",
    enabled: false,
    defaultX: "90%",
    defaultY: "45%",
    settings: [
      { id: "color-mode", name: "Color Mode", type: "select", options: ["Theme", "Custom"], value: "Theme" },
      { id: "bg-color", name: "Background Color", type: "color", value: "rgba(30, 33, 41, 0.85)", condition: (s) => s["color-mode"] === "Custom" },
      { id: "text-color", name: "Text Color", type: "color", value: "#EAEAEA", condition: (s) => s["color-mode"] === "Custom" },
      { id: "font-size", name: "Font Size", type: "slider", value: 14, min: 8, max: 24, step: 1 },
      { id: "padding", name: "Padding", type: "slider", value: 8, min: 0, max: 20, step: 1 },
      { id: "border-radius", name: "Border Radius", type: "slider", value: 10, min: 0, max: 20, step: 1 },
      { id: "border-width", name: "Border Width", type: "slider", value: 1, min: 0, max: 5, step: 1 },
      { id: "border-color", name: "Border Color", type: "color", value: "rgba(255, 255, 255, 0.07)", condition: (s) => s["color-mode"] === "Custom" },
      { id: "show-label", name: "Show Label", type: "boolean", value: true },
      { id: "format", name: "Text Format", type: "text", value: "{label} {fps}", description: "Use {label} and {fps} as placeholders." },
      { id: "hide-game-fps", name: "Hide Game FPS Counter", type: "boolean", value: true, description: "Hide the built-in game FPS counter" }
    ],
    frameCount: 0,
    lastTime: 0,
    fps: 0,
    element: null,
    frameCallback: null,
    gameFpsElements: null,
    gameFpsDisplayStyle: null,
    onEnable() {
      this.frameCount = 0;
      this.lastTime = performance.now();
      this.fps = 0;
      this.createDisplay();
      this.applyStyles();
      this.frameCallback = this.countFrame.bind(this);
      requestAnimationFrame(this.frameCallback);
      this.updateGameFpsVisibility();
    },
    onDisable() {
      this.destroyDisplay();
      this.frameCallback = null;
      this.restoreGameFpsCounter();
    },
    countFrame(timestamp) {
      this.frameCount++;
      const elapsed = timestamp - this.lastTime;
      if (elapsed >= 1e3) {
        this.fps = Math.round(this.frameCount * 1e3 / elapsed);
        this.frameCount = 0;
        this.lastTime = timestamp;
      }
      if (this.frameCallback) {
        requestAnimationFrame(this.frameCallback);
      }
    },
    onTick() {
      this.updateDisplay();
    },
    onSettingUpdate(settingId) {
      this.applyStyles();
      this.updateDisplay();
      if (settingId === "hide-game-fps") {
        this.updateGameFpsVisibility();
      }
    },
    createDisplay() {
      this.element = document.createElement("div");
      this.element.className = "fps-counter-display";
      document.body.appendChild(this.element);
    },
    destroyDisplay() {
      if (this.element) {
        document.body.removeChild(this.element);
        this.element = null;
      }
    },
    updateGameFpsVisibility() {
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      if (settings["hide-game-fps"]) {
        this.hideGameFpsCounter();
      } else {
        this.restoreGameFpsCounter();
      }
    },
    hideGameFpsCounter() {
      const fpsWrapperDiv = document.querySelector(".FpsWrapperDiv");
      if (fpsWrapperDiv) {
        this.gameFpsElements = fpsWrapperDiv;
        this.gameFpsDisplayStyle = fpsWrapperDiv.style.display;
        fpsWrapperDiv.style.display = "none";
      }
    },
    restoreGameFpsCounter() {
      if (this.gameFpsElements) {
        this.gameFpsElements.style.display = this.gameFpsDisplayStyle || "";
        this.gameFpsElements = null;
        this.gameFpsDisplayStyle = null;
      }
    },
    updateDisplay() {
      if (this.element) {
        const clickGui = window.Serenity.instance.get("ClickGUI");
        if (!clickGui || !clickGui.isEditingHUD) {
          const mod = window.Serenity.instance.get(this.name);
          if (mod.x !== null) this.element.style.left = typeof mod.x === "string" ? mod.x : `${mod.x}px`;
          if (mod.y !== null) this.element.style.top = typeof mod.y === "string" ? mod.y : `${mod.y}px`;
        }
        const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
        let text = settings.format;
        if (settings["show-label"]) text = text.replace("{label}", "FPS:");
        else text = text.replace("{label}", "");
        text = text.replace("{fps}", this.fps);
        this.element.textContent = text.trim();
      }
    },
    applyStyles() {
      if (!this.element) return;
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      if (settings["color-mode"] === "Theme") {
        this.element.style.backgroundColor = "var(--panel)";
        this.element.style.color = "var(--text)";
        this.element.style.border = `${settings["border-width"]}px solid var(--border)`;
      } else {
        this.element.style.backgroundColor = settings["bg-color"];
        this.element.style.color = settings["text-color"];
        this.element.style.border = `${settings["border-width"]}px solid ${settings["border-color"]}`;
      }
      this.element.style.fontSize = `${settings["font-size"]}px`;
      this.element.style.padding = `${settings["padding"]}px`;
      this.element.style.borderRadius = `${settings["border-radius"]}px`;
      this.element.style.position = "absolute";
      this.element.style.userSelect = "none";
      this.element.style.zIndex = 9997;
      this.element.style.pointerEvents = "none";
    }
  };
  var FPSCounter_default = FPSCounter;

  // src/utils.js
  var cachedPlayerName = null;
  function getPlayerName() {
    if (cachedPlayerName) {
      return cachedPlayerName;
    }
    const chatMessages = document.querySelectorAll(".ChatMessages .IndividualText");
    const joinMessages = Array.from(chatMessages).filter((m) => m.textContent?.includes(" joined"));
    if (joinMessages.length > 0) {
      const myJoinMessage = joinMessages[joinMessages.length - 1];
      const text = myJoinMessage.textContent;
      const name = text.split(" joined")[0].trim();
      if (name) {
        cachedPlayerName = name;
        return name;
      }
    }
    return null;
  }
  function getRainbowColor(index, speed = 20) {
    const hueOffset = Date.now() / speed;
    const hue = (index * 15 + hueOffset) % 360;
    return `hsl(${hue}, 90%, 65%)`;
  }

  // src/modules/visual/Interface.js
  var Interface = {
    name: "Interface",
    category: "Visual",
    description: "Replaces the default in-game header with a customizable one.",
    enabled: true,
    defaultX: 2,
    defaultY: 7,
    element: null,
    gameHeader: null,
    gameHeaderParent: null,
    gameHeaderNextSibling: null,
    lastPlayerName: null,
    observer: null,
    settings: [
      { id: "remove-header", name: "Remove Game Header", type: "boolean", value: true, description: "For performance, move the header off-screen instead of just hiding it." },
      { id: "color-mode", name: "Color Mode", type: "select", options: ["Theme", "Custom"], value: "Theme" },
      { id: "bg-color", name: "Background Color", type: "color", value: "rgba(30, 33, 41, 0.85)", condition: (s) => s["color-mode"] === "Custom" },
      { id: "text-color", name: "Text Color", type: "color", value: "#EAEAEA", condition: (s) => s["color-mode"] === "Custom" },
      { id: "accent-color", name: "Accent Color", type: "color", value: "#5E72EB", condition: (s) => s["color-mode"] === "Custom" },
      { id: "font-size", name: "Font Size", type: "slider", value: 16, min: 10, max: 28, step: 1 },
      { id: "padding-y", name: "Padding (Y)", type: "slider", value: 4, min: 0, max: 30, step: 1 },
      { id: "padding-x", name: "Padding (X)", type: "slider", value: 6, min: 0, max: 30, step: 1 },
      { id: "border-radius", name: "Border Radius", type: "slider", value: 10, min: 0, max: 20, step: 1 },
      { id: "border-width", name: "Border Width", type: "slider", value: 1, min: 0, max: 5, step: 1 },
      { id: "border-color", name: "Border Color", type: "color", value: "rgba(255, 255, 255, 0.07)", condition: (s) => s["color-mode"] === "Custom" },
      { id: "show-logo", name: "Show Logo", type: "boolean", value: true },
      { id: "logo-text", name: "Logo Text", type: "text", value: "S", condition: (settings) => settings["show-logo"] },
      { id: "show-name", name: "Show Name", type: "boolean", value: true },
      { id: "show-gamemode", name: "Show Gamemode", type: "boolean", value: true },
      { id: "show-lobby", name: "Show Lobby", type: "boolean", value: true }
    ],
    onEnable() {
      this.handleHeader();
      this.observer = new MutationObserver(() => this.handleHeader());
      this.observer.observe(document.body, { childList: true, subtree: true });
      this.createDisplay();
      this.applyStyles();
    },
    onDisable() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      this.restoreHeader();
      this.destroyDisplay();
    },
    onTick() {
      this.updateDisplay();
    },
    onSettingUpdate(settingId) {
      if (settingId === "remove-header") {
        this.handleHeader();
      }
      this.applyStyles();
      this.updateDisplay(true);
    },
    handleHeader() {
      const header = document.querySelector(".InGameHeaderContainer");
      if (header) {
        this.gameHeader = header;
        const shouldRemove = this.settings.find((s) => s.id === "remove-header").value;
        if (shouldRemove) {
          header.style.position = "absolute";
          header.style.left = "-9999px";
          header.style.top = "-9999px";
          header.style.opacity = "0";
        } else {
          header.style.display = "none";
        }
      }
    },
    restoreHeader() {
      if (this.gameHeader) {
        this.gameHeader.style.position = "";
        this.gameHeader.style.left = "";
        this.gameHeader.style.top = "";
        this.gameHeader.style.opacity = "";
        this.gameHeader.style.display = "";
      }
    },
    createDisplay() {
      this.element = document.createElement("div");
      this.element.className = "serenity-interface-display";
      this.element.style.top = "20px";
      this.element.style.left = "20px";
      document.body.appendChild(this.element);
    },
    destroyDisplay() {
      if (this.element) {
        document.body.removeChild(this.element);
        this.element = null;
      }
    },
    updateDisplay(force = false) {
      if (!this.element) return;
      const clickGui = window.Serenity.instance.get("ClickGUI");
      if (!clickGui || !clickGui.isEditingHUD) {
        const mod = window.Serenity.instance.get(this.name);
        if (mod.x !== null) this.element.style.left = `${mod.x}px`;
        if (mod.y !== null) this.element.style.top = `${mod.y}px`;
      }
      const gamemodeEl = document.querySelector(".InGameHeaderGameName");
      const lobbyEl = document.querySelector(".InGameHeaderLobbyName");
      const gamemode = gamemodeEl ? gamemodeEl.textContent : "Unknown";
      const lobby = lobbyEl ? `(#${lobbyEl.textContent})` : "";
      const playerName = getPlayerName();
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      if (playerName && this.lastPlayerName !== playerName) {
        this.lastPlayerName = playerName;
        force = true;
      }
      const content = `
            ${settings["show-logo"] ? `<div class="serenity-interface-logo">${settings["logo-text"]}</div>` : ""}
            <div class="serenity-interface-info">
                ${settings["show-name"] && playerName ? `<div class="serenity-interface-name">${playerName}</div>` : ""}
                ${settings["show-gamemode"] ? `<div class="serenity-interface-gamemode">${gamemode}</div>` : ""}
                ${settings["show-lobby"] ? `<div class="serenity-interface-lobby">${lobby}</div>` : ""}
            </div>
        `;
      const newHash = JSON.stringify(content);
      if (this.lastHash !== newHash || force) {
        this.element.innerHTML = content;
        this.applyStyles();
        this.lastHash = newHash;
      }
    },
    applyStyles() {
      if (!this.element) return;
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      if (settings["color-mode"] === "Theme") {
        this.element.style.setProperty("--accent-color", "var(--primary)");
        this.element.style.backgroundColor = "var(--panel)";
        this.element.style.color = "var(--text)";
        this.element.style.border = `${settings["border-width"]}px solid var(--border)`;
      } else {
        this.element.style.setProperty("--accent-color", settings["accent-color"]);
        this.element.style.backgroundColor = settings["bg-color"];
        this.element.style.color = settings["text-color"];
        this.element.style.border = `${settings["border-width"]}px solid ${settings["border-color"]}`;
      }
      this.element.style.fontSize = `${settings["font-size"]}px`;
      this.element.style.padding = `${settings["padding-y"]}px ${settings["padding-x"]}px`;
      this.element.style.borderRadius = `${settings["border-radius"]}px`;
      this.element.style.position = "absolute";
      this.element.style.userSelect = "none";
      this.element.style.pointerEvents = "none";
      const clickGui = window.Serenity.instance.get("ClickGUI");
      if (!clickGui || !clickGui.isEditingHUD) {
        this.element.style.zIndex = 9997;
      }
    }
  };
  var Interface_default = Interface;

  // src/modules/visual/Chat.js
  var Chat = {
    name: "Chat",
    category: "Visual",
    description: "Replaces the default in-game chat with a customizable one.",
    enabled: true,
    defaultX: 4,
    defaultY: 59,
    element: null,
    gameChat: null,
    chatObserver: null,
    mainObserver: null,
    customInput: null,
    settings: [
      { id: "hide-game-chat", name: "Hide Game Chat", type: "boolean", value: true, description: "Hides the original in-game chat UI." },
      { id: "font-size", name: "Font Size", type: "slider", value: 14, min: 10, max: 24, step: 1 },
      { id: "max-messages", name: "Max Messages", type: "slider", value: 7, min: 5, max: 25, step: 1 },
      { id: "show-timestamps", name: "Show Timestamps", type: "boolean", value: false }
    ],
    onEnable() {
      this.createDisplay();
      this.handleGameChat();
      this.mainObserver = new MutationObserver(() => this.handleGameChat());
      this.mainObserver.observe(document.body, { childList: true, subtree: true });
    },
    onDisable() {
      if (this.mainObserver) this.mainObserver.disconnect();
      if (this.chatObserver) this.chatObserver.disconnect();
      this.restoreGameChat();
      this.destroyDisplay();
    },
    onTick() {
      if (this.element) {
        const clickGui = window.Serenity.instance.get("ClickGUI");
        if (!clickGui || !clickGui.isEditingHUD) {
          const mod = window.Serenity.instance.get(this.name);
          if (mod.x !== null) this.element.style.left = `${mod.x}px`;
          if (mod.y !== null) this.element.style.top = `${mod.y}px`;
        }
      }
    },
    onSettingUpdate() {
      this.applyStyles();
      this.handleGameChat();
    },
    createDisplay() {
      this.element = document.createElement("div");
      this.element.className = "serenity-chat-container";
      document.body.appendChild(this.element);
      const messagesContainer = document.createElement("div");
      messagesContainer.className = "serenity-chat-messages";
      this.element.appendChild(messagesContainer);
      this.createCustomInput();
    },
    createCustomInput() {
      const inputWrapper = document.createElement("div");
      inputWrapper.className = "serenity-chat-input-wrapper";
      this.customInput = document.createElement("input");
      this.customInput.type = "text";
      this.customInput.className = "serenity-chat-input";
      this.customInput.placeholder = "Send a message...";
      this.customInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const gameInput = document.querySelector(".ChatInput");
          if (gameInput && this.customInput.value) {
            gameInput.value = this.customInput.value;
            const enterEvent = new KeyboardEvent("keydown", { key: "Enter", code: "Enter", which: 13, keyCode: 13, bubbles: true });
            gameInput.dispatchEvent(enterEvent);
            this.customInput.value = "";
          }
        }
      });
      inputWrapper.appendChild(this.customInput);
      this.element.appendChild(inputWrapper);
    },
    syncInputVisibility(gameInputWrapper) {
      const inputWrapper = this.element.querySelector(".serenity-chat-input-wrapper");
      if (gameInputWrapper.style.display === "none") {
        inputWrapper.style.display = "none";
      } else {
        inputWrapper.style.display = "flex";
        setTimeout(() => this.customInput.focus(), 0);
      }
    },
    destroyDisplay() {
      if (this.element) {
        document.body.removeChild(this.element);
        this.element = null;
      }
    },
    handleGameChat() {
      const chatContainer = document.querySelector(".Chat");
      if (!chatContainer) {
        if (this.chatObserver) {
          this.chatObserver.disconnect();
          this.chatObserver = null;
        }
        this.gameChat = null;
        return;
      }
      if (this.gameChat !== chatContainer) {
        if (this.chatObserver) {
          this.chatObserver.disconnect();
          this.chatObserver = null;
        }
        this.gameChat = chatContainer;
        if (this.element) {
          this.element.querySelector(".serenity-chat-messages").innerHTML = "";
        }
      }
      const shouldHide = this.settings.find((s) => s.id === "hide-game-chat").value;
      this.gameChat.style.visibility = shouldHide ? "hidden" : "visible";
      this.gameChat.style.pointerEvents = shouldHide ? "none" : "auto";
      const messagesContainer = chatContainer.querySelector(".ChatMessages");
      if (messagesContainer && !this.chatObserver) {
        this.element.querySelector(".serenity-chat-messages").innerHTML = "";
        messagesContainer.querySelectorAll(".MessageWrapper").forEach((node) => this.addMessage(node));
        this.chatObserver = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
              mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && node.classList.contains("MessageWrapper")) {
                  this.addMessage(node);
                }
              });
            }
          });
        });
        this.chatObserver.observe(messagesContainer, { childList: true });
      }
      const gameInputWrapper = chatContainer.querySelector(".ChatInputWrapper");
      if (gameInputWrapper) {
        this.syncInputVisibility(gameInputWrapper);
      }
    },
    restoreGameChat() {
      if (this.gameChat) {
        this.gameChat.style.visibility = "visible";
        this.gameChat.style.pointerEvents = "auto";
      }
    },
    addMessage(originalNode) {
      if (!this.element) return;
      const messagesContainer = this.element.querySelector(".serenity-chat-messages");
      const messageDiv = document.createElement("div");
      messageDiv.className = "serenity-chat-message";
      const contentDiv = document.createElement("div");
      contentDiv.className = "serenity-message-content";
      const myName = getPlayerName();
      originalNode.querySelectorAll(".IndividualText").forEach((span) => {
        const clonedSpan = span.cloneNode(true);
        if (myName && clonedSpan.textContent === myName) {
          clonedSpan.classList.add("serenity-message-own-name");
        }
        if (/^\[.*\]$/.test(clonedSpan.textContent)) {
          clonedSpan.classList.add("serenity-message-tag");
        }
        contentDiv.appendChild(clonedSpan);
      });
      messageDiv.appendChild(contentDiv);
      if (this.settings.find((s) => s.id === "show-timestamps").value) {
        const timestamp = document.createElement("span");
        timestamp.className = "serenity-message-timestamp";
        timestamp.textContent = (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        messageDiv.insertBefore(timestamp, contentDiv);
      }
      messagesContainer.appendChild(messageDiv);
      const maxMessages = this.settings.find((s) => s.id === "max-messages").value;
      while (messagesContainer.children.length > maxMessages) {
        messagesContainer.removeChild(messagesContainer.firstChild);
      }
    },
    applyStyles() {
      if (!this.element) return;
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      this.element.style.setProperty("--chat-font-size", `${settings["font-size"]}px`);
    }
  };
  var Chat_default = Chat;

  // src/modules/combat/Keystrokes.js
  var Keystrokes = {
    name: "Keystrokes",
    category: "Combat",
    description: "Displays your keystrokes with a sexy, modern look.",
    enabled: true,
    defaultX: 8,
    defaultY: 562,
    element: null,
    keys: {
      w: false,
      a: false,
      s: false,
      d: false,
      " ": false,
      lmb: false,
      rmb: false
    },
    boundKeyDown: null,
    boundKeyUp: null,
    boundMouseDown: null,
    boundMouseUp: null,
    settings: [
      { id: "show-mouse", name: "Show Mouse Buttons", type: "boolean", value: true },
      { id: "scale", name: "Scale", type: "slider", value: 1, min: 0.5, max: 2, step: 0.1 },
      { id: "opacity", name: "Opacity", type: "slider", value: 0.85, min: 0, max: 1, step: 0.05 },
      { id: "enable-animations", name: "Enable Animations", type: "boolean", value: true }
    ],
    onEnable() {
      this.createDisplay();
      this.applyStyles();
      this.boundKeyDown = (e) => this.updateKeyState(e.key.toLowerCase(), true);
      this.boundKeyUp = (e) => this.updateKeyState(e.key.toLowerCase(), false);
      this.boundMouseDown = (e) => {
        if (e.button === 0) this.updateKeyState("lmb", true);
        if (e.button === 2) this.updateKeyState("rmb", true);
      };
      this.boundMouseUp = (e) => {
        if (e.button === 0) this.updateKeyState("lmb", false);
        if (e.button === 2) this.updateKeyState("rmb", false);
      };
      window.addEventListener("keydown", this.boundKeyDown);
      window.addEventListener("keyup", this.boundKeyUp);
      window.addEventListener("mousedown", this.boundMouseDown);
      window.addEventListener("mouseup", this.boundMouseUp);
    },
    onDisable() {
      this.destroyDisplay();
      window.removeEventListener("keydown", this.boundKeyDown);
      window.removeEventListener("keyup", this.boundKeyUp);
      window.removeEventListener("mousedown", this.boundMouseDown);
      window.removeEventListener("mouseup", this.boundMouseUp);
    },
    onTick() {
      this.updateDisplayLocation();
    },
    onSettingUpdate() {
      this.applyStyles();
    },
    updateKeyState(key, isPressed) {
      if (this.keys.hasOwnProperty(key)) {
        this.keys[key] = isPressed;
        this.updateKeyVisuals();
      }
    },
    createKey(text, key, ...extraClasses) {
      const keyElement = document.createElement("div");
      keyElement.className = `keystrokes-key key-${key} ${extraClasses.join(" ")}`;
      keyElement.textContent = text;
      return keyElement;
    },
    createDisplay() {
      this.element = document.createElement("div");
      this.element.className = "keystrokes-display";
      const row1 = document.createElement("div");
      row1.className = "keystrokes-row";
      row1.appendChild(this.createKey("W", "w"));
      this.element.appendChild(row1);
      const row2 = document.createElement("div");
      row2.className = "keystrokes-row";
      row2.appendChild(this.createKey("A", "a"));
      row2.appendChild(this.createKey("S", "s"));
      row2.appendChild(this.createKey("D", "d"));
      this.element.appendChild(row2);
      const row3 = document.createElement("div");
      row3.className = "keystrokes-row mouse-row";
      row3.appendChild(this.createKey("LMB", "lmb", "mouse-button"));
      row3.appendChild(this.createKey("RMB", "rmb", "mouse-button"));
      this.element.appendChild(row3);
      const row4 = document.createElement("div");
      row4.className = "keystrokes-row";
      row4.appendChild(this.createKey("Space", " ", "space-key"));
      this.element.appendChild(row4);
      document.body.appendChild(this.element);
    },
    destroyDisplay() {
      if (this.element) {
        document.body.removeChild(this.element);
        this.element = null;
      }
    },
    updateDisplayLocation() {
      if (!this.element) return;
      const clickGui = window.Serenity.instance.get("ClickGUI");
      if (!clickGui || !clickGui.isEditingHUD) {
        const mod = window.Serenity.instance.get(this.name);
        if (mod.x !== null) this.element.style.left = `${mod.x}px`;
        if (mod.y !== null) this.element.style.top = `${mod.y}px`;
      }
    },
    updateKeyVisuals() {
      if (!this.element) return;
      for (const key in this.keys) {
        const el = this.element.querySelector(`.key-${key}`);
        if (el) {
          el.classList.toggle("active", this.keys[key]);
        }
      }
    },
    applyStyles() {
      if (!this.element) return;
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      this.element.style.transform = `scale(${settings.scale})`;
      this.element.style.opacity = settings.opacity;
      this.element.classList.toggle("show-mouse", settings["show-mouse"]);
      this.element.classList.toggle("no-animations", !settings["enable-animations"]);
    }
  };
  var Keystrokes_default = Keystrokes;

  // src/modules/movement/ToggleSprint.js
  var ToggleSprint = {
    name: "ToggleSprint",
    category: "Movement",
    description: "Automatically sprints for you by simulating a Shift key press.",
    enabled: true,
    sprinting: false,
    sprintInterval: null,
    element: null,
    defaultX: "80%",
    defaultY: "80%",
    settings: [
      { id: "show-text", name: "Show Text", type: "boolean", value: true },
      { id: "color-mode", name: "Color Mode", type: "select", options: ["Theme", "Custom"], value: "Theme", condition: (s) => s["show-text"] },
      { id: "hud-text", name: "HUD Text", type: "text", value: "[Sprinting (Toggled)]", condition: (s) => s["show-text"] },
      { id: "bg-color", name: "Background Color", type: "color", value: "rgba(30, 33, 41, 0.85)", condition: (s) => s["show-text"] && s["color-mode"] === "Custom" },
      { id: "text-color", name: "Text Color", type: "color", value: "rgba(234, 234, 234, 0.8)", condition: (s) => s["show-text"] && s["color-mode"] === "Custom" },
      { id: "font-size", name: "Font Size", type: "slider", value: 16, min: 8, max: 24, step: 1, condition: (s) => s["show-text"] },
      { id: "padding", name: "Padding", type: "slider", value: 8, min: 0, max: 20, step: 1, condition: (s) => s["show-text"] },
      { id: "border-radius", name: "Border Radius", type: "slider", value: 10, min: 0, max: 20, step: 1, condition: (s) => s["show-text"] },
      { id: "border-width", name: "Border Width", type: "slider", value: 1, min: 0, max: 5, step: 1, condition: (s) => s["show-text"] },
      { id: "border-color", name: "Border Color", type: "color", value: "rgba(255, 255, 255, 0.07)", condition: (s) => s["show-text"] && s["color-mode"] === "Custom" }
    ],
    onEnable() {
      this.createDisplay();
    },
    onDisable() {
      if (this.sprinting) {
        this.stopSprinting();
      }
      this.destroyDisplay();
    },
    onTick() {
      const clickGui = window.Serenity.instance.get("ClickGUI");
      const isTyping = document.activeElement && (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) || document.activeElement.isContentEditable);
      const shouldBeSprinting = !isTyping && (!clickGui || !clickGui.isGuiOpen);
      if (shouldBeSprinting && !this.sprinting) {
        this.startSprinting();
      } else if (!shouldBeSprinting && this.sprinting) {
        this.stopSprinting();
      }
      if (shouldBeSprinting && this.sprinting) {
        this.fireKeyDown();
      }
      this.updateDisplay();
    },
    onSettingUpdate() {
      this.applyStyles();
      this.updateDisplay(true);
    },
    startSprinting() {
      if (this.sprinting) return;
      this.sprinting = true;
      this.fireKeyDown();
      this.sprintInterval = setInterval(() => this.fireKeyDown(), 200);
    },
    stopSprinting() {
      if (!this.sprinting) return;
      this.sprinting = false;
      if (this.sprintInterval) {
        clearInterval(this.sprintInterval);
        this.sprintInterval = null;
      }
      window.dispatchEvent(new KeyboardEvent("keyup", { key: "Shift", keyCode: 16, code: "ShiftLeft", bubbles: true }));
    },
    fireKeyDown() {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "Shift", keyCode: 16, code: "ShiftLeft", bubbles: true, repeat: true }));
    },
    createDisplay() {
      this.element = document.createElement("div");
      this.element.className = "togglesprint-hud-display";
      document.body.appendChild(this.element);
      this.applyStyles();
    },
    destroyDisplay() {
      if (this.element) {
        document.body.removeChild(this.element);
        this.element = null;
      }
    },
    updateDisplay() {
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      if (!settings["show-text"]) {
        if (this.element) this.element.style.display = "none";
        return;
      }
      if (!this.element) {
        this.createDisplay();
      }
      this.element.style.display = this.enabled ? "block" : "none";
      if (this.enabled) {
        this.element.textContent = settings["hud-text"];
        const clickGui = window.Serenity.instance.get("ClickGUI");
        if (!clickGui || !clickGui.isEditingHUD) {
          const mod = window.Serenity.instance.get(this.name);
          if (mod.x !== null) this.element.style.left = typeof mod.x === "string" ? mod.x : `${mod.x}px`;
          if (mod.y !== null) this.element.style.top = typeof mod.y === "string" ? mod.y : `${mod.y}px`;
        }
      }
    },
    applyStyles() {
      if (!this.element) return;
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      if (settings["color-mode"] === "Theme") {
        this.element.style.backgroundColor = "var(--panel)";
        this.element.style.color = "var(--text)";
        this.element.style.border = `${settings["border-width"]}px solid var(--border)`;
      } else {
        this.element.style.backgroundColor = settings["bg-color"];
        this.element.style.color = settings["text-color"];
        this.element.style.border = `${settings["border-width"]}px solid ${settings["border-color"]}`;
      }
      this.element.style.fontSize = `${settings["font-size"]}px`;
      this.element.style.padding = `${settings["padding"]}px`;
      this.element.style.borderRadius = `${settings["border-radius"]}px`;
      this.element.style.position = "absolute";
      this.element.style.userSelect = "none";
      this.element.style.pointerEvents = "none";
      this.element.style.zIndex = 9997;
    }
  };
  var ToggleSprint_default = ToggleSprint;

  // src/modules/player/ArmorHUD.js
  var ArmorHUD = {
    name: "ArmorHUD",
    category: "Player",
    description: "Displays your currently equipped armor and selected item.",
    enabled: false,
    observer: null,
    defaultX: "90%",
    defaultY: "50%",
    settings: [
      { id: "color-mode", name: "Color Mode", type: "select", options: ["Theme", "Custom"], value: "Theme" },
      { id: "show-selected", name: "Show Selected Item", type: "boolean", value: true },
      { id: "display-style", name: "Display Style", type: "select", options: ["Horizontal", "Vertical"], value: "Vertical" },
      { id: "bg-color", name: "Background Color", type: "color", value: "rgba(30, 33, 41, 0.85)", condition: (s) => s["color-mode"] === "Custom" },
      { id: "padding", name: "Padding", type: "slider", value: 4, min: 0, max: 20, step: 1 },
      { id: "border-radius", name: "Border Radius", type: "slider", value: 20, min: 0, max: 20, step: 1 },
      { id: "border-width", name: "Border Width", type: "slider", value: 2, min: 0, max: 5, step: 1 },
      { id: "border-color", name: "Border Color", type: "color", value: "rgba(255, 255, 255, 0.07)", condition: (s) => s["color-mode"] === "Custom" },
      { id: "item-size", name: "Item Size", type: "slider", value: 64, min: 16, max: 64, step: 1 },
      { id: "item-spacing", name: "Item Spacing", type: "slider", value: 0, min: 0, max: 20, step: 1 }
    ],
    element: null,
    onEnable() {
      this.createDisplay();
      this.applyStyles();
      this.setupObserver();
    },
    onDisable() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      this.destroyDisplay();
    },
    onTick() {
      this.updateDisplay();
    },
    onSettingUpdate() {
      this.applyStyles();
      this.updateDisplay(true);
    },
    setupObserver() {
      const setup = () => {
        const hotbar = document.querySelector(".HotBarGameItemsContainer");
        if (hotbar && !this.observer) {
          this.observer = new MutationObserver((mutations) => {
            const selectionChanged = mutations.some(
              (m) => m.type === "attributes" && m.attributeName === "class" && m.target.classList.contains("InvenItem")
            );
            if (selectionChanged) {
              this.updateDisplay(true);
            }
          });
          this.observer.observe(hotbar, {
            attributes: true,
            subtree: true,
            attributeFilter: ["class"]
          });
          this.updateDisplay(true);
        } else if (!hotbar) {
          setTimeout(setup, 500);
        }
      };
      setup();
    },
    createDisplay() {
      this.element = document.createElement("div");
      this.element.className = "armor-hud-display";
      document.body.appendChild(this.element);
    },
    destroyDisplay() {
      if (this.element) {
        document.body.removeChild(this.element);
        this.element = null;
      }
    },
    extractImage(itemElement) {
      if (!itemElement) return null;
      const twoDImageIcon = itemElement.querySelector(".TwoDImageIcon");
      if (twoDImageIcon) {
        if (twoDImageIcon.style.backgroundImage && twoDImageIcon.style.backgroundImage !== "none") {
          return { type: "image", src: twoDImageIcon.style.backgroundImage.slice(5, -2), filter: null };
        }
        const img = itemElement.querySelector(".TwoDItemGrayscaleVisiblePng");
        const colorHint = itemElement.querySelector(".TwoDItemGrayscale");
        if (img) {
          return { type: "image", src: img.src, filter: colorHint ? colorHint.style.filter : "" };
        }
      }
      const blockItem = itemElement.querySelector(".BlockItem");
      if (blockItem && blockItem.style.backgroundImage && blockItem.style.backgroundImage !== "none") {
        return { type: "image", src: blockItem.style.backgroundImage.slice(5, -2), filter: null };
      }
      const unfilled = itemElement.querySelector(".InvenItemUnfilled");
      if (unfilled) {
        return { type: "unfilled", src: unfilled.style.backgroundImage.slice(5, -2) };
      }
      return null;
    },
    updateDisplay(forceUpdate = false) {
      if (!this.element) return;
      const clickGui = window.Serenity.instance.get("ClickGUI");
      if (!clickGui || !clickGui.isEditingHUD) {
        const mod = window.Serenity.instance.get(this.name);
        if (mod.x !== null) this.element.style.left = typeof mod.x === "string" ? mod.x : `${mod.x}px`;
        if (mod.y !== null) this.element.style.top = typeof mod.y === "string" ? mod.y : `${mod.y}px`;
      }
      const armorContainer = document.querySelector(".ArmourItemSlots");
      const armorItems = armorContainer ? Array.from(armorContainer.querySelectorAll(".InvenItem")) : [];
      const armorImages = armorItems.map((item) => this.extractImage(item)).filter(Boolean);
      const settings = window.Serenity.instance.get(this.name).settings;
      const showSelected = settings.find((s) => s.id === "show-selected").value;
      const allImages = [...armorImages];
      if (showSelected) {
        const selectedHotbarItemEl = document.querySelector(".HotBarGameItemsContainer .InvenItem.Selected");
        const selectedItemImage = this.extractImage(selectedHotbarItemEl);
        if (selectedItemImage) {
          allImages.push(selectedItemImage);
        }
      }
      const newContentHash = JSON.stringify(allImages);
      if (newContentHash !== this.lastContentHash || forceUpdate) {
        this.element.innerHTML = "";
        allImages.forEach((imgData) => {
          if (!imgData) return;
          const itemContainer = document.createElement("div");
          itemContainer.style.position = "relative";
          if (imgData.type === "image" && imgData.filter) {
            const itemSize = this.settings.find((s) => s.id === "item-size").value;
            const colorContainer = document.createElement("div");
            colorContainer.style.position = "absolute";
            colorContainer.style.width = "100%";
            colorContainer.style.height = "100%";
            colorContainer.style.overflow = "hidden";
            const colorSource = document.createElement("img");
            colorSource.src = imgData.src;
            colorSource.style.width = "100%";
            colorSource.style.height = "100%";
            colorSource.style.imageRendering = "pixelated";
            colorSource.style.filter = imgData.filter.replace("1em", `${itemSize}px`);
            colorSource.style.marginLeft = `-${itemSize}px`;
            colorContainer.appendChild(colorSource);
            itemContainer.appendChild(colorContainer);
            const grayscaleImg = document.createElement("img");
            grayscaleImg.src = imgData.src;
            grayscaleImg.style.position = "absolute";
            grayscaleImg.style.width = "100%";
            grayscaleImg.style.height = "100%";
            grayscaleImg.style.imageRendering = "pixelated";
            grayscaleImg.style.mixBlendMode = "multiply";
            itemContainer.appendChild(grayscaleImg);
          } else {
            const imgElement = document.createElement("img");
            imgElement.src = imgData.src;
            imgElement.style.width = "100%";
            imgElement.style.height = "100%";
            imgElement.style.imageRendering = "pixelated";
            itemContainer.appendChild(imgElement);
          }
          this.element.appendChild(itemContainer);
        });
        this.lastContentHash = newContentHash;
        this.applyStyles();
      }
    },
    applyStyles() {
      if (!this.element) return;
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      if (settings["color-mode"] === "Theme") {
        this.element.style.backgroundColor = "var(--panel)";
        this.element.style.border = `${settings["border-width"]}px solid var(--border)`;
      } else {
        this.element.style.backgroundColor = settings["bg-color"];
        this.element.style.border = `${settings["border-width"]}px solid ${settings["border-color"]}`;
      }
      this.element.style.padding = `${settings["padding"]}px`;
      this.element.style.borderRadius = `${settings["border-radius"]}px`;
      this.element.style.display = "flex";
      this.element.style.flexDirection = settings["display-style"] === "Horizontal" ? "row" : "column";
      this.element.style.gap = `${settings["item-spacing"]}px`;
      this.element.style.position = "absolute";
      this.element.style.userSelect = "none";
      const clickGui = window.Serenity.instance.get("ClickGUI");
      if (!clickGui || !clickGui.isEditingHUD) {
        this.element.style.zIndex = 9997;
      }
      this.element.style.pointerEvents = "none";
      const itemContainers = this.element.querySelectorAll(".armor-hud-display > div");
      itemContainers.forEach((container) => {
        container.style.width = `${settings["item-size"]}px`;
        container.style.height = `${settings["item-size"]}px`;
      });
    }
  };
  var ArmorHUD_default = ArmorHUD;

  // src/modules/utility/Coords.js
  var Coords_default = {
    name: "Coordinates",
    category: "Utility",
    description: "Displays your in-game X, Y, Z coordinates as customizable text.",
    enabled: false,
    defaultX: 408,
    defaultY: 11,
    element: null,
    originalFillText: null,
    sourceCanvas: null,
    capturedTexts: [],
    lastCaptureTime: 0,
    coordinates: { x: "0.00", y: "0.00", z: "0.00" },
    settings: [
      { id: "color-mode", name: "Color Mode", type: "select", options: ["Theme", "Custom"], value: "Theme" },
      { id: "bg-color", name: "Background Color", type: "color", value: "rgba(30, 33, 41, 0.85)", condition: (s) => s["color-mode"] === "Custom" },
      { id: "text-color", name: "Text Color", type: "color", value: "#EAEAEA", condition: (s) => s["color-mode"] === "Custom" },
      { id: "font-size", name: "Font Size", type: "slider", value: 14, min: 8, max: 24, step: 1 },
      { id: "padding", name: "Padding", type: "slider", value: 8, min: 0, max: 30, step: 1 },
      { id: "border-width", name: "Border Width", type: "slider", value: 1, min: 0, max: 5, step: 1 },
      { id: "border-color", name: "Border Color", type: "color", value: "rgba(255, 255, 255, 0.07)", condition: (s) => s["color-mode"] === "Custom" },
      { id: "border-radius", name: "Border Radius", type: "slider", value: 10, min: 0, max: 20, step: 1 },
      { id: "opacity", name: "Opacity", type: "slider", value: 1, min: 0, max: 1, step: 0.05 },
      { id: "scale", name: "Scale", type: "slider", value: 1, min: 0.5, max: 2, step: 0.1 },
      { id: "format", name: "Text Format", type: "text", value: "X: {x} Y: {y} Z: {z}", description: "Use {x}, {y}, and {z} as placeholders." },
      { id: "hide-original", name: "Hide Original Display", type: "boolean", value: true, description: "Prevents the game from drawing its own coordinates." }
    ],
    onEnable() {
      localStorage.setItem("bloxd-showCoordinates", "true");
      this.createDisplay();
      this.applyStyles();
    },
    onDisable() {
      this.unpatchCanvas();
      if (this.element) {
        document.body.removeChild(this.element);
        this.element = null;
      }
    },
    onTick() {
      const canvas = document.querySelector(".CoordinateCanvas");
      if (!canvas) {
        if (this.sourceCanvas) {
          this.unpatchCanvas();
          this.sourceCanvas = null;
        }
        return;
      }
      if (canvas !== this.sourceCanvas) {
        if (this.sourceCanvas) {
          this.unpatchCanvas();
        }
        this.sourceCanvas = canvas;
        this.patchCanvas();
      }
      this.updatePosition();
    },
    onSettingUpdate() {
      this.applyStyles();
      this.updateDisplay();
    },
    patchCanvas() {
      if (!this.sourceCanvas || this.sourceCanvas._serenityCoordsPatched) return;
      const ctx = this.sourceCanvas.getContext("2d");
      if (!ctx || ctx.fillText._isSerenityCoordsWrapper) return;
      this.originalFillText = ctx.fillText;
      const self = this;
      ctx.fillText = function(text, x, y, maxWidth) {
        const now = performance.now();
        if (now - self.lastCaptureTime > 100) {
          self.capturedTexts = [];
        }
        self.lastCaptureTime = now;
        if (/^-?\d+\.\d{2}$/.test(text)) {
          self.capturedTexts.push(text);
          if (self.capturedTexts.length === 3) {
            self.coordinates = {
              x: self.capturedTexts[0],
              y: self.capturedTexts[1],
              z: self.capturedTexts[2]
            };
            self.updateDisplay();
            self.capturedTexts = [];
          }
        }
        const modSettings = self.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
        if (modSettings["hide-original"] && /^-?\d+\.\d{2}$/.test(text)) {
          return;
        }
        self.originalFillText.apply(this, arguments);
      };
      ctx.fillText._isSerenityCoordsWrapper = true;
      this.sourceCanvas._serenityCoordsPatched = true;
    },
    unpatchCanvas() {
      if (this.sourceCanvas && this.originalFillText) {
        try {
          const ctx = this.sourceCanvas.getContext("2d");
          if (ctx && ctx.fillText._isSerenityCoordsWrapper) {
            ctx.fillText = this.originalFillText;
            delete ctx.fillText._isSerenityCoordsWrapper;
          }
        } catch (e) {
        }
        this.originalFillText = null;
        if (this.sourceCanvas) {
          this.sourceCanvas._serenityCoordsPatched = false;
        }
      }
    },
    createDisplay() {
      if (this.element) return;
      this.element = document.createElement("div");
      document.body.appendChild(this.element);
      this.updateDisplay();
    },
    updateDisplay() {
      if (!this.element) return;
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      this.element.textContent = settings.format.replace("{x}", this.coordinates.x).replace("{y}", this.coordinates.y).replace("{z}", this.coordinates.z);
    },
    updatePosition() {
      if (!this.element) return;
      const clickGui = window.Serenity.instance.get("ClickGUI");
      if (!clickGui || !clickGui.isEditingHUD) {
        const mod = window.Serenity.instance.get(this.name);
        if (mod.x !== null) this.element.style.left = `${mod.x}px`;
        if (mod.y !== null) this.element.style.top = `${mod.y}px`;
      }
    },
    applyStyles() {
      if (!this.element) return;
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      this.element.style.position = "absolute";
      this.element.style.zIndex = 9997;
      this.element.style.pointerEvents = "none";
      this.element.style.userSelect = "none";
      if (settings["color-mode"] === "Theme") {
        this.element.style.backgroundColor = "var(--panel)";
        this.element.style.color = "var(--text)";
        this.element.style.border = `${settings["border-width"]}px solid var(--border)`;
      } else {
        this.element.style.backgroundColor = settings["bg-color"];
        this.element.style.color = settings["text-color"];
        this.element.style.border = `${settings["border-width"]}px solid ${settings["border-color"]}`;
      }
      this.element.style.padding = `${settings.padding}px`;
      this.element.style.borderRadius = `${settings["border-radius"]}px`;
      this.element.style.transform = `scale(${settings.scale})`;
      this.element.style.opacity = settings.opacity;
      this.element.style.fontSize = `${settings["font-size"]}px`;
      this.element.style.fontFamily = `'Inter', 'Segoe UI', sans-serif`;
      this.element.style.fontWeight = "600";
      this.element.style.whiteSpace = "nowrap";
    }
  };

  // src/modules/player/CPSCounter.js
  var CPSCounter = {
    name: "CPSCounter",
    category: "Player",
    description: "Displays your clicks per second.",
    enabled: false,
    defaultX: 724,
    defaultY: 726,
    settings: [
      { id: "color-mode", name: "Color Mode", type: "select", options: ["Theme", "Custom"], value: "Theme" },
      { id: "bg-color", name: "Background Color", type: "color", value: "rgba(30, 33, 41, 0.85)", condition: (s) => s["color-mode"] === "Custom" },
      { id: "text-color", name: "Text Color", type: "color", value: "#EAEAEA", condition: (s) => s["color-mode"] === "Custom" },
      { id: "font-size", name: "Font Size", type: "slider", value: 14, min: 8, max: 24, step: 1 },
      { id: "padding", name: "Padding", type: "slider", value: 8, min: 0, max: 20, step: 1 },
      { id: "border-radius", name: "Border Radius", type: "slider", value: 10, min: 0, max: 20, step: 1 },
      { id: "border-width", name: "Border Width", type: "slider", value: 1, min: 0, max: 5, step: 1 },
      { id: "border-color", name: "Border Color", type: "color", value: "rgba(255, 255, 255, 0.07)", condition: (s) => s["color-mode"] === "Custom" },
      { id: "show-label", name: "Show Label", type: "boolean", value: true },
      { id: "show-lmb", name: "Show LMB", type: "boolean", value: true },
      { id: "show-rmb", name: "Show RMB", type: "boolean", value: true },
      {
        id: "format",
        name: "Text Format",
        type: "text",
        value: "{label} {lmb} | {rmb}",
        description: "Use {label}, {lmb}, and {rmb} as placeholders."
      }
    ],
    leftClicks: [],
    rightClicks: [],
    element: null,
    onEnable() {
      this.createDisplay();
      this.applyStyles();
      document.addEventListener("mousedown", this.handleMouseDown.bind(this));
    },
    onDisable() {
      this.destroyDisplay();
      document.removeEventListener("mousedown", this.handleMouseDown.bind(this));
    },
    onTick() {
      const now = performance.now();
      this.leftClicks = this.leftClicks.filter((t) => now - t < 1e3);
      this.rightClicks = this.rightClicks.filter((t) => now - t < 1e3);
      this.updateDisplay();
    },
    onSettingUpdate() {
      this.applyStyles();
      this.updateDisplay();
    },
    handleMouseDown(e) {
      if (e.button === 0) {
        this.leftClicks.push(performance.now());
      } else if (e.button === 2) {
        this.rightClicks.push(performance.now());
      }
    },
    createDisplay() {
      this.element = document.createElement("div");
      this.element.className = "cps-counter-display";
      document.body.appendChild(this.element);
    },
    destroyDisplay() {
      if (this.element) {
        document.body.removeChild(this.element);
        this.element = null;
      }
    },
    updateDisplay() {
      if (this.element) {
        const clickGui = window.Serenity.instance.get("ClickGUI");
        if (!clickGui || !clickGui.isEditingHUD) {
          const mod = window.Serenity.instance.get(this.name);
          if (mod.x !== null) this.element.style.left = `${mod.x}px`;
          if (mod.y !== null) this.element.style.top = `${mod.y}px`;
        }
        const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
        let text = settings.format;
        if (settings["show-label"]) text = text.replace("{label}", "CPS:");
        else text = text.replace("{label}", "");
        if (settings["show-lmb"]) text = text.replace("{lmb}", this.leftClicks.length);
        else text = text.replace("{lmb}", "");
        if (settings["show-rmb"]) text = text.replace("{rmb}", this.rightClicks.length);
        else text = text.replace("{rmb}", "");
        this.element.textContent = text.trim().replace(/\|/g, (match, offset, str) => {
          const prevChar = str[offset - 1];
          const nextChar = str[offset + 1];
          if (prevChar && prevChar.trim() === "" && nextChar && nextChar.trim() === "") {
            return "|";
          }
          if (!prevChar || prevChar.trim() === "" || !nextChar || nextChar.trim() === "") {
            return "";
          }
          return match;
        }).trim();
      }
    },
    applyStyles() {
      if (!this.element) return;
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      if (settings["color-mode"] === "Theme") {
        this.element.style.backgroundColor = "var(--panel)";
        this.element.style.color = "var(--text)";
        this.element.style.border = `${settings["border-width"]}px solid var(--border)`;
      } else {
        this.element.style.backgroundColor = settings["bg-color"];
        this.element.style.color = settings["text-color"];
        this.element.style.border = `${settings["border-width"]}px solid ${settings["border-color"]}`;
      }
      this.element.style.fontSize = `${settings["font-size"]}px`;
      this.element.style.padding = `${settings["padding"]}px`;
      this.element.style.borderRadius = `${settings["border-radius"]}px`;
      this.element.style.position = "absolute";
      this.element.style.userSelect = "none";
      this.element.style.zIndex = 9997;
      this.element.style.pointerEvents = "none";
    }
  };
  var CPSCounter_default = CPSCounter;

  // src/modules/player/PingCounter.js
  var PingCounter = {
    name: "PingCounter",
    category: "Player",
    description: "Displays your network ping.",
    enabled: false,
    defaultX: 724,
    defaultY: 726,
    settings: [
      { id: "color-mode", name: "Color Mode", type: "select", options: ["Theme", "Custom"], value: "Theme" },
      { id: "bg-color", name: "Background Color", type: "color", value: "rgba(30, 33, 41, 0.85)", condition: (s) => s["color-mode"] === "Custom" },
      { id: "text-color", name: "Text Color", type: "color", value: "#EAEAEA", condition: (s) => s["color-mode"] === "Custom" },
      { id: "font-size", name: "Font Size", type: "slider", value: 14, min: 8, max: 24, step: 1 },
      { id: "padding", name: "Padding", type: "slider", value: 8, min: 0, max: 20, step: 1 },
      { id: "border-radius", name: "Border Radius", type: "slider", value: 10, min: 0, max: 20, step: 1 },
      { id: "border-width", name: "Border Width", type: "slider", value: 1, min: 0, max: 5, step: 1 },
      { id: "border-color", name: "Border Color", type: "color", value: "rgba(255, 255, 255, 0.07)", condition: (s) => s["color-mode"] === "Custom" },
      { id: "show-label", name: "Show Label", type: "boolean", value: true },
      { id: "format", name: "Text Format", type: "text", value: "{label} {ping}ms", description: "Use {label} and {ping} as placeholders." },
      { id: "mod-credit", name: "Mod Made by GEORGECR and Casmyx", type: "info" }
    ],
    ping: "--",
    element: null,
    pingIntervalId: null,
    onEnable() {
      this.createDisplay();
      this.applyStyles();
      this.updatePing();
      this.pingIntervalId = setInterval(this.updatePing.bind(this), 2e3);
    },
    onDisable() {
      this.destroyDisplay();
      clearInterval(this.pingIntervalId);
    },
    onTick() {
      this.updateDisplay();
    },
    onSettingUpdate() {
      this.applyStyles();
      this.updateDisplay();
    },
    createDisplay() {
      this.element = document.createElement("div");
      this.element.className = "ping-counter-display";
      document.body.appendChild(this.element);
    },
    destroyDisplay() {
      if (this.element) {
        document.body.removeChild(this.element);
        this.element = null;
      }
    },
    updatePing() {
      const start = Date.now();
      fetch(window.location.origin, { method: "HEAD", mode: "no-cors" }).then(() => {
        this.ping = Date.now() - start;
      }).catch(() => {
        this.ping = "--";
      });
    },
    updateDisplay() {
      if (this.element) {
        const clickGui = window.Serenity.instance.get("ClickGUI");
        if (!clickGui || !clickGui.isEditingHUD) {
          const mod = window.Serenity.instance.get(this.name);
          if (mod.x !== null) this.element.style.left = `${mod.x}px`;
          if (mod.y !== null) this.element.style.top = `${mod.y}px`;
        }
        const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
        let text = settings.format;
        text = text.replace("{label}", settings["show-label"] ? "Ping:" : "");
        text = text.replace("{ping}", this.ping);
        this.element.textContent = text.trim();
      }
    },
    applyStyles() {
      if (!this.element) return;
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      if (settings["color-mode"] === "Theme") {
        this.element.style.backgroundColor = "var(--panel)";
        this.element.style.color = "var(--text)";
        this.element.style.border = `${settings["border-width"]}px solid var(--border)`;
      } else {
        this.element.style.backgroundColor = settings["bg-color"];
        this.element.style.color = settings["text-color"];
        this.element.style.border = `${settings["border-width"]}px solid ${settings["border-color"]}`;
      }
      this.element.style.fontSize = `${settings["font-size"]}px`;
      this.element.style.padding = `${settings["padding"]}px`;
      this.element.style.borderRadius = `${settings["border-radius"]}px`;
      this.element.style.position = "absolute";
      this.element.style.userSelect = "none";
      this.element.style.zIndex = 9997;
      this.element.style.pointerEvents = "none";
    }
  };
  var PingCounter_default = PingCounter;

  // src/modules/utility/FPSBooster.js
  var FPSBooster = {
    name: "FPSBooster",
    category: "Utility",
    description: "Optimizes game performance by adjusting resolution and other settings.",
    enabled: false,
    canvas: null,
    settings: [
      {
        id: "resolutionScale",
        name: "Resolution Scale",
        description: "Lower values can improve performance at the cost of quality.",
        type: "slider",
        value: 1,
        min: 0.1,
        max: 1,
        step: 0.05
      }
    ],
    onEnable(manager) {
      this.canvas = document.getElementById("noa-canvas");
      if (!this.canvas) {
        console.error("[FPSBooster] Could not find game canvas: #noa-canvas");
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
        this.canvas.style.width = "";
        this.canvas.style.height = "";
      }
      this.canvas = null;
    },
    onSettingUpdate(settingId, value, manager) {
    },
    onTick(dt, manager) {
      if (this.canvas && this.enabled) {
        this.applySettings(manager);
      }
    },
    applySettings(manager) {
      if (!this.canvas || !this.canvas.dataset.originalWidth) return;
      const settings = manager.get(this.name).settings;
      const resolutionScale = settings.find((s) => s.id === "resolutionScale").value;
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
      if (this.canvas.style.width !== "100%") {
        this.canvas.style.width = "100%";
      }
      if (this.canvas.style.height !== "100%") {
        this.canvas.style.height = "100%";
      }
    }
  };
  var FPSBooster_default = FPSBooster;

  // src/modules/utility/AdBlocker.js
  var AdBlocker = {
    name: "AdBlocker",
    category: "Utility",
    description: "Blocks in-game ads and trackers by hiding elements and intercepting network requests.",
    enabled: true,
    settings: [
      { id: "hide-page-ads", name: "Hide In-Page Ads", type: "boolean", value: true, description: "Hides visible ad containers and popups." },
      { id: "block-network-ads", name: "Block Ad Network Requests", type: "boolean", value: true, description: "Prevents the browser from requesting ads from known ad servers." }
    ],
    originalFetch: window.fetch,
    originalXhrOpen: window.XMLHttpRequest.prototype.open,
    originalXhrSend: window.XMLHttpRequest.prototype.send,
    observer: null,
    adSelectors: [
      ".SuperRankAdContainer",
      ".AdBannerContainer",
      ".PlaywireVideoWrapper",
      ".UiRequests",
      ".AdBanner",
      ".GenericVideoWrapper",
      "#bloxd-io_300x600_2",
      ".InventoryAdOuter"
    ],
    blockList: [
      "googlesyndication.com",
      "googletagservices.com",
      "google-analytics.com",
      "doubleclick.net",
      "adinplay.com",
      "playwire.com",
      "amazon-adsystem.com",
      "adnxs.com"
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
    },
    onSettingUpdate() {
      this.applySettings();
    },
    applySettings() {
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      if (settings["block-network-ads"]) {
        this.patchNetworkRequests();
      } else {
        this.unpatchNetworkRequests();
      }
      if (settings["hide-page-ads"]) {
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
      return this.blockList.some((domain) => url.includes(domain));
    },
    patchNetworkRequests() {
      const self = this;
      window.fetch = function(input, init) {
        const url = typeof input === "string" ? input : input.url;
        if (self.isBlocked(url)) {
          console.log(`[Serenity] Blocked fetch request to: ${url}`);
          return Promise.resolve(new Response(null, { status: 204, statusText: "No Content" }));
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
      if (node.style.opacity !== "0") {
        node.style.opacity = "0";
        node.style.pointerEvents = "none";
      }
    },
    hidePageAds() {
      this.adSelectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => this.hideElement(el));
      });
    },
    setupObserver() {
      if (this.observer) return;
      this.observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.adSelectors.forEach((selector) => {
                if (node.matches(selector)) {
                  this.hideElement(node);
                }
                node.querySelectorAll(selector).forEach((el) => this.hideElement(el));
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
  var AdBlocker_default = AdBlocker;

  // src/Configuration.js
  var CONFIG_KEY = "loglevel";
  var Configuration = class {
    static save(config) {
      try {
        const json = JSON.stringify(config);
        const encoded = btoa(json);
        localStorage.setItem(CONFIG_KEY, encoded);
      } catch (err) {
        console.error("[Configuration] Error saving config:", err);
      }
    }
    static load() {
      try {
        const encoded = localStorage.getItem(CONFIG_KEY);
        if (!encoded) return null;
        const json = atob(encoded);
        return JSON.parse(json);
      } catch (err) {
        console.error("[Configuration] Error loading config:", err);
        localStorage.removeItem(CONFIG_KEY);
        return null;
      }
    }
    static reset() {
      try {
        localStorage.removeItem(CONFIG_KEY);
      } catch (err) {
        console.error("[Configuration] Error resetting config:", err);
      }
    }
  };
  var Configuration_default = Configuration;

  // src/modules/visual/Crosshair.js
  var Crosshair = {
    name: "Crosshair",
    category: "Visual",
    description: "Replaces the default game crosshair with a custom one.",
    enabled: false,
    element: null,
    gameCrosshair: null,
    gameCrosshairInitialDisplay: null,
    observer: null,
    settings: [
      { id: "hide-original", name: "Hide Original Crosshair", type: "boolean", value: true },
      {
        id: "mode",
        name: "Mode",
        type: "select",
        value: "Cross",
        options: ["Cross", "Plus", "Dot", "Circle", "T-Shape", "Arrow", "Custom Image"]
      },
      { id: "color-mode", name: "Color Mode", type: "select", options: ["Theme", "Custom"], value: "Theme", condition: (settings) => settings["mode"] !== "Custom Image" },
      { id: "image-url", name: "Image URL", type: "text", value: "https://i.imgur.com/M8M4G3k.png", condition: (settings) => settings["mode"] === "Custom Image" },
      { id: "size", name: "Size", type: "slider", value: 12, min: 1, max: 100, step: 1 },
      { id: "color", name: "Color", type: "color", value: "#FFFFFF", condition: (settings) => settings["mode"] !== "Custom Image" && settings["color-mode"] === "Custom" },
      { id: "thickness", name: "Thickness", type: "slider", value: 2, min: 1, max: 20, step: 1, condition: (settings) => ["Cross", "Plus", "Circle", "T-Shape"].includes(settings["mode"]) },
      { id: "outline", name: "Outline", type: "boolean", value: true, condition: (settings) => settings["mode"] !== "Custom Image" },
      { id: "outline-color", name: "Outline Color", type: "color", value: "#000000", condition: (settings) => settings["outline"] && settings["mode"] !== "Custom Image" && settings["color-mode"] === "Custom" }
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
      if (settingId === "hide-original") {
        this.handleGameCrosshair();
      }
    },
    createDisplay() {
      if (this.element) return;
      this.element = document.createElement("div");
      this.element.className = "serenity-crosshair";
      this.element.style.position = "fixed";
      this.element.style.top = "50%";
      this.element.style.left = "50%";
      this.element.style.transform = "translate(-50%, -50%)";
      this.element.style.pointerEvents = "none";
      this.element.style.zIndex = "9999";
      document.body.appendChild(this.element);
    },
    destroyDisplay() {
      if (this.element) {
        document.body.removeChild(this.element);
        this.element = null;
      }
    },
    handleGameCrosshair() {
      const shouldHide = this.settings.find((s) => s.id === "hide-original").value;
      const gameCrosshairEl = document.querySelector(".CrossHair");
      if (shouldHide) {
        if (gameCrosshairEl) {
          if (this.gameCrosshair !== gameCrosshairEl) {
            this.gameCrosshair = gameCrosshairEl;
            this.gameCrosshairInitialDisplay = gameCrosshairEl.style.display;
          }
          this.gameCrosshair.style.display = "none";
        }
      } else {
        this.restoreGameCrosshair();
      }
    },
    restoreGameCrosshair() {
      if (this.gameCrosshair) {
        this.gameCrosshair.style.display = this.gameCrosshairInitialDisplay || "";
      }
    },
    updateCrosshair() {
      if (!this.element) return;
      this.element.innerHTML = "";
      const settings = this.settings.reduce((acc, s) => ({ ...acc, [s.id]: s.value }), {});
      let { mode, size, color, thickness, outline, "outline-color": outlineColor, "image-url": imageUrl, "color-mode": colorMode } = settings;
      if (colorMode === "Theme" && mode !== "Custom Image") {
        color = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
        outlineColor = "#000000";
      }
      const outlineStyle = outline ? `0px 0px 2px ${outlineColor}, 0px 0px 2px ${outlineColor}, 0px 0px 2px ${outlineColor}, 0px 0px 2px ${outlineColor}` : "none";
      switch (mode) {
        case "Custom Image":
          const img = document.createElement("img");
          img.src = imageUrl;
          img.style.width = `${size}px`;
          img.style.height = `${size}px`;
          this.element.appendChild(img);
          break;
        case "Dot":
          const dot = document.createElement("div");
          dot.style.width = `${size}px`;
          dot.style.height = `${size}px`;
          dot.style.backgroundColor = color;
          dot.style.borderRadius = "50%";
          dot.style.textShadow = outlineStyle;
          this.element.appendChild(dot);
          break;
        case "Circle":
          const circle = document.createElement("div");
          circle.style.width = `${size}px`;
          circle.style.height = `${size}px`;
          circle.style.border = `${thickness}px solid ${color}`;
          circle.style.borderRadius = "50%";
          circle.style.textShadow = outlineStyle;
          this.element.appendChild(circle);
          break;
        case "Cross":
        case "Plus":
        case "T-Shape":
          const gap = mode === "Cross" ? Math.max(1, size / 4) : 0;
          const length = size;
          const positions = {
            top: { top: `-${gap + length}px`, left: `-${thickness / 2}px`, width: `${thickness}px`, height: `${length}px` },
            bottom: { top: `${gap}px`, left: `-${thickness / 2}px`, width: `${thickness}px`, height: `${length}px` },
            left: { left: `-${gap + length}px`, top: `-${thickness / 2}px`, width: `${length}px`, height: `${thickness}px` },
            right: { left: `${gap}px`, top: `-${thickness / 2}px`, width: `${length}px`, height: `${thickness}px` }
          };
          let linesToDraw = ["top", "bottom", "left", "right"];
          if (mode === "T-Shape") linesToDraw = ["bottom", "left", "right"];
          linesToDraw.forEach((pos) => {
            const line = document.createElement("div");
            line.style.position = "absolute";
            line.style.backgroundColor = color;
            line.style.textShadow = outlineStyle;
            Object.assign(line.style, positions[pos]);
            this.element.appendChild(line);
          });
          break;
        case "Arrow":
          const arrow = document.createElement("div");
          arrow.style.width = "0";
          arrow.style.height = "0";
          arrow.style.borderLeft = `${size / 2}px solid transparent`;
          arrow.style.borderRight = `${size / 2}px solid transparent`;
          arrow.style.borderBottom = `${size}px solid ${color}`;
          if (outline) {
            arrow.style.filter = `drop-shadow(0 1px 1px ${outlineColor}) drop-shadow(0 -1px 1px ${outlineColor}) drop-shadow(1px 0 1px ${outlineColor}) drop-shadow(-1px 0 1px ${outlineColor})`;
          }
          this.element.appendChild(arrow);
          break;
      }
    }
  };
  var Crosshair_default = Crosshair;

  // src/NotificationManager.js
  var NotificationManager = class {
    constructor() {
      this.container = null;
      this.init();
    }
    init() {
      if (!document.getElementById("font-awesome-link")) {
        const fontAwesomeLink = document.createElement("link");
        fontAwesomeLink.id = "font-awesome-link";
        fontAwesomeLink.rel = "stylesheet";
        fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
        document.head.appendChild(fontAwesomeLink);
      }
      if (document.querySelector(".serenity-notification-container")) {
        this.container = document.querySelector(".serenity-notification-container");
      } else {
        this.container = document.createElement("div");
        this.container.className = "serenity-notification-container";
        document.body.appendChild(this.container);
      }
    }
    show({ title = "Serenity", message, type = "info", duration = 3e3 }) {
      const notification = document.createElement("div");
      notification.className = `serenity-notification serenity-notification-${type}`;
      const iconMap = {
        info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"></path></svg>`,
        success: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>`,
        warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>`,
        error: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v2z"></path></svg>`
      };
      notification.innerHTML = `
      <div class="serenity-notification-icon-wrapper">
        <div class="serenity-notification-icon">${iconMap[type] || iconMap.info}</div>
      </div>
      <div class="serenity-notification-content">
        <div class="serenity-notification-title">${title}</div>
        <div class="serenity-notification-message">${message}</div>
      </div>
      <button class="serenity-notification-close">&times;</button>
      <div class="serenity-notification-timer"></div>
    `;
      this.container.prepend(notification);
      notification.style.animation = "serenity-notification-in 0.5s forwards cubic-bezier(0.2, 1, 0.2, 1)";
      const timerBar = notification.querySelector(".serenity-notification-timer");
      timerBar.style.transition = `width ${duration}ms linear`;
      setTimeout(() => {
        if (timerBar) timerBar.style.width = "0%";
      }, 10);
      const close = () => {
        if (notification.classList.contains("exiting")) return;
        notification.classList.add("exiting");
        clearTimeout(timeout);
        notification.style.animation = "serenity-notification-out 0.5s forwards cubic-bezier(0.8, 0, 0.8, 0)";
        notification.addEventListener("animationend", (e) => {
          if (e.animationName === "serenity-notification-out") {
            notification.remove();
          }
        });
      };
      const closeBtn = notification.querySelector(".serenity-notification-close");
      closeBtn.addEventListener("click", close, { once: true });
      let timeout = setTimeout(close, duration);
      notification.addEventListener("mouseenter", () => {
        clearTimeout(timeout);
        timerBar.style.width = getComputedStyle(timerBar).width;
      });
      notification.addEventListener("mouseleave", () => {
        timeout = setTimeout(close, duration);
        timerBar.style.transition = `width ${duration}ms linear`;
        timerBar.style.width = "0%";
      });
    }
  };
  var NotificationManager_default = NotificationManager;

  // src/modules/utility/Notifications.js
  var Notifications = {
    name: "Notifications",
    category: "Utility",
    description: "Shows alerts when modules are toggled.",
    enabled: false,
    settings: []
  };
  var Notifications_default = Notifications;

  // src/modules/visual/ArrayList.js
  var T_CTX_CACHE = {
    _ctx: null,
    getContext: function() {
      if (!this._ctx) {
        this._ctx = document.createElement("canvas").getContext("2d");
      }
      return this._ctx;
    }
  };
  var ArrayList = {
    name: "ArrayList",
    category: "Visual",
    description: "Displays a list of enabled modules.",
    enabled: false,
    element: null,
    settings: [
      {
        id: "color-mode",
        name: "Color Mode",
        description: "The color style of the module list.",
        type: "select",
        options: ["Rainbow", "Static"],
        value: "Static"
      },
      {
        id: "use-theme-color",
        name: "Use Theme Color",
        description: "Use the main theme color for static mode.",
        type: "boolean",
        value: true,
        condition: (settings) => settings["color-mode"] === "Static"
      },
      {
        id: "static-color",
        name: "Custom Static Color",
        description: "The color of the text if not using the theme color.",
        type: "color",
        value: "rgba(94, 114, 235, 1)",
        condition: (settings) => settings["color-mode"] === "Static" && !settings["use-theme-color"]
      },
      {
        id: "border",
        name: "Show Border",
        description: "Display a colored border on the side of the list.",
        type: "boolean",
        value: true
      },
      {
        id: "text-shadow",
        name: "Text Shadow",
        description: "Adds a shadow to the text for better visibility.",
        type: "boolean",
        value: true
      },
      {
        id: "font-size",
        name: "Font Size",
        description: "The font size of the module names.",
        type: "slider",
        min: 10,
        max: 20,
        step: 1,
        value: 14
      }
    ],
    onEnable(manager) {
      if (!this.element) {
        this.element = document.createElement("div");
        this.element.className = "serenity-arraylist-container";
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
      const excluded = ["ClickGUI", "ArrayList", "Notifications"];
      const fontSize = this.getSettingValue(manager, "font-size");
      const fontWeight = 600;
      const fontFamily = "Inter";
      const font = `${fontWeight} ${fontSize}px ${fontFamily}`;
      const context = T_CTX_CACHE.getContext();
      context.font = font;
      const enabledModules = manager.list().filter((m) => m.enabled && !excluded.includes(m.name)).map((m) => ({
        name: m.name,
        width: context.measureText(m.name).width
      })).sort((a, b) => b.width - a.width || a.name.localeCompare(b.name));
      this.element.innerHTML = "";
      const colorMode = this.getSettingValue(manager, "color-mode");
      const useThemeColor = this.getSettingValue(manager, "use-theme-color");
      let staticColor = this.getSettingValue(manager, "static-color");
      const showBorder = this.getSettingValue(manager, "border");
      if (colorMode === "Static" && useThemeColor) {
        staticColor = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
      }
      enabledModules.forEach((mod, index) => {
        const modElement = document.createElement("div");
        modElement.className = "serenity-arraylist-item";
        const color = colorMode === "Rainbow" ? getRainbowColor(index) : staticColor;
        modElement.style.color = color;
        modElement.textContent = mod.name;
        if (showBorder) {
          const borderElement = document.createElement("span");
          borderElement.className = "serenity-arraylist-border";
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
      const textShadow = this.getSettingValue(manager, "text-shadow");
      const fontSize = this.getSettingValue(manager, "font-size");
      this.element.style.fontSize = `${fontSize}px`;
      this.element.classList.toggle("with-shadow", textShadow);
    },
    getSettingValue(manager, settingId) {
      const module = manager.get("ArrayList");
      if (!module) return null;
      const setting = module.settings.find((s) => s.id === settingId);
      return setting ? setting.value : null;
    }
  };
  var ArrayList_default = ArrayList;

  // src/modules/utility/Waypoint.js
  var WaypointManager = {
    name: "Waypoint",
    // Keep name for consistency
    category: "Utility",
    description: "Manages and displays multiple waypoints in the world.",
    enabled: false,
    waypoints: [],
    waypointElements: /* @__PURE__ */ new Map(),
    camera: null,
    entities: null,
    deathMarkerObserver: null,
    settings: [
      { id: "info", name: "Waypoint Manager", type: "info", description: "Click the settings cog to manage your waypoints." }
    ],
    onEnable(manager) {
      this.manager = manager;
      this.loadWaypoints();
      this.waypoints.forEach((wp) => this.createWaypointElement(wp));
    },
    onDisable() {
      if (this.deathMarkerObserver) this.deathMarkerObserver.disconnect();
      this.waypointElements.forEach((element) => element.remove());
      this.waypointElements.clear();
      this.camera = null;
      this.entities = null;
    },
    onTick() {
      if (!this.camera || !this.entities) {
        this.findGameData();
      }
      this.waypoints.forEach((wp) => this.updateWaypointPosition(wp));
    },
    // --- Waypoint Management ---
    getWaypoints() {
      return this.waypoints;
    },
    addWaypoint(data) {
      const newWaypoint = {
        id: Date.now(),
        title: "New Waypoint",
        x: 0,
        y: 0,
        z: 0,
        color: "#5E72EB",
        enabled: true,
        ...data
      };
      this.waypoints.push(newWaypoint);
      this.createWaypointElement(newWaypoint);
      this.saveWaypoints();
    },
    removeWaypoint(id) {
      this.waypoints = this.waypoints.filter((wp) => wp.id !== id);
      if (this.waypointElements.has(id)) {
        this.waypointElements.get(id).remove();
        this.waypointElements.delete(id);
      }
      this.saveWaypoints();
    },
    updateWaypoint(id, data) {
      const index = this.waypoints.findIndex((wp) => wp.id === id);
      if (index !== -1) {
        this.waypoints[index] = { ...this.waypoints[index], ...data };
        this.updateWaypointElement(this.waypoints[index]);
        this.saveWaypoints();
      }
    },
    saveWaypoints() {
      this.manager.saveConfiguration();
    },
    loadWaypoints(savedWaypoints) {
      this.waypoints = savedWaypoints || this.manager.exportConfiguration().waypoints || [];
      this.waypointElements.forEach((el) => el.remove());
      this.waypointElements.clear();
      this.waypoints.forEach((wp) => this.createWaypointElement(wp));
    },
    getCurrentPlayerPosition() {
      if (!this.entities) return null;
      const id = this.entities.playerEntity || 1;
      const pos = this.entities.getState(id, "position") || this.entities.getState(id, "physics");
      if (!pos || !pos.position) return null;
      const [x, y, z] = pos.position;
      return { x: x.toFixed(2), y: y.toFixed(2), z: z.toFixed(2) };
    },
    // --- Rendering ---
    createWaypointElement(waypoint) {
      if (this.waypointElements.has(waypoint.id)) return;
      const element = document.createElement("div");
      element.className = "serenity-waypoint-static";
      element.innerHTML = `
        <div class="waypoint-static-icon">
             <svg viewBox="0 0 384 512" fill="currentColor">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67a24 24 0 01-43.464 0zM192 256a64 64 0 100-128 64 64 0 000 128z"/>
            </svg>
        </div>
        <div class="waypoint-static-text">
            <span class="waypoint-static-title"></span>
            <span class.waypoint-static-distance"></span>
        </div>
    `;
      document.body.appendChild(element);
      this.waypointElements.set(waypoint.id, element);
      this.updateWaypointElement(waypoint);
    },
    updateWaypointElement(waypoint) {
      const element = this.waypointElements.get(waypoint.id);
      if (!element) return;
      element.querySelector(".waypoint-static-title").textContent = waypoint.title;
      element.style.setProperty("--waypoint-color", waypoint.color);
    },
    findGameData() {
      try {
        const hotbar = document.querySelector(".HotBarContainer");
        if (!hotbar) return;
        const deps = Object.values(hotbar)[0]?.return?.updateQueue?.lastEffect?.deps;
        if (!deps) return;
        const root = deps[2];
        if (!root) return;
        this.entities = Object.values(root).find((o) => o?.entities?.getState)?.entities;
        for (const obj of Object.values(root)) {
          if (typeof obj === "object" && obj && "camera" in obj) {
            this.camera = obj.camera;
            break;
          }
        }
      } catch (e) {
        this.camera = null;
        this.entities = null;
      }
    },
    updateWaypointPosition(waypoint) {
      const element = this.waypointElements.get(waypoint.id);
      if (!element || !this.camera || !this.entities || !waypoint.enabled) {
        if (element) element.style.display = "none";
        return;
      }
      const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
      const id = this.entities.playerEntity || 1;
      const pos = this.entities.getState(id, "position") || this.entities.getState(id, "physics");
      if (!pos || !pos.position) {
        element.style.display = "none";
        return;
      }
      const [px, py, pz] = pos.position;
      const dx = waypoint.x - px;
      const dy = py - waypoint.y;
      const dz = waypoint.z - pz;
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
      const { pitch, heading } = this.camera;
      const fx = Math.cos(pitch) * Math.sin(heading);
      const fy = Math.sin(pitch);
      const fz = Math.cos(pitch) * Math.cos(heading);
      const rx = Math.sin(heading - Math.PI / 2);
      const rz = Math.cos(heading - Math.PI / 2);
      const ux = fy * rz, uy = fz * rx - fx * rz, uz = -fy * rx;
      const ul = Math.sqrt(ux * ux + uy * uy + uz * uz);
      const upX = ux / ul, upY = uy / ul, upZ = uz / ul;
      const dotForward = fx * dx + fy * dy + fz * dz;
      const dotRight = rx * dx + rz * dz;
      const dotUp = upX * dx + upY * dy + upZ * dz;
      if (dotForward < 0 || distance < 1.5) {
        element.style.display = "none";
        return;
      }
      const screenWidth = window.innerWidth, screenHeight = window.innerHeight;
      const scaleProjection = 500 / dotForward;
      const offsetX = clamp(-dotRight * scaleProjection, -screenWidth / 2, screenWidth / 2);
      const offsetY = clamp(dotUp * scaleProjection, -screenHeight / 2, screenHeight / 2);
      element.style.display = "flex";
      element.style.left = `${screenWidth / 2 + offsetX}px`;
      element.style.top = `${screenHeight / 2 - offsetY}px`;
      const scale = clamp(1 - distance / 200, 0.4, 1.2);
      element.style.transform = `translate(-50%, -100%) scale(${scale})`;
      element.querySelector(".waypoint-static-distance").textContent = `${distance.toFixed(0)}m`;
    }
  };
  var Waypoint_default = WaypointManager;

  // src/ModuleManager.js
  var ModuleManager = class {
    constructor({ tickRate = 60 } = {}) {
      this.modules = /* @__PURE__ */ new Map();
      this.moduleDefs = /* @__PURE__ */ new Map();
      this.categories = [
        "Combat",
        "Movement",
        "Player",
        "Visual",
        "Utility"
      ];
      this.autoSave = true;
      this.autoLoad = true;
      this.initialized = false;
      this.hudVisibilityInterval = null;
      this.notifications = new NotificationManager_default();
      this.lastTick = performance.now();
      this.ticker = this.ticker.bind(this);
      this.init();
      this.startHudVisibilityCheck();
      requestAnimationFrame(this.ticker);
    }
    start() {
      if (this.autoLoad) {
        this.loadConfiguration();
      }
      this.applyInitialStates();
      this.initialized = true;
    }
    init() {
      const allModules = [
        ClickGUI_default,
        FPSCounter_default,
        Interface_default,
        Chat_default,
        Keystrokes_default,
        ToggleSprint_default,
        ArmorHUD_default,
        Coords_default,
        CPSCounter_default,
        FPSBooster_default,
        AdBlocker_default,
        Crosshair_default,
        Notifications_default,
        ArrayList_default,
        PingCounter_default,
        Waypoint_default
      ];
      allModules.forEach((mod) => {
        this.moduleDefs.set(mod.name, mod);
        this.addModule(mod);
      });
    }
    addModule(mod) {
      if (!mod || typeof mod.name !== "string") {
        throw new Error('Module must have a unique "name" property.');
      }
      const normalized = {
        description: "",
        category: "Utility",
        enabled: false,
        onEnable() {
        },
        onDisable() {
        },
        onTick() {
        },
        onSettingUpdate() {
        },
        settings: [],
        x: mod.defaultX !== void 0 ? mod.defaultX : null,
        y: mod.defaultY !== void 0 ? mod.defaultY : null,
        ...mod
      };
      delete normalized.defaultX;
      delete normalized.defaultY;
      normalized.settings = normalized.settings.map((s) => ({
        description: "",
        ...s
      }));
      this.modules.set(normalized.name, normalized);
      return normalized;
    }
    enable(name) {
      const m = this.modules.get(name);
      if (m && !m.enabled) {
        m.enabled = true;
        try {
          m.onEnable(this);
        } catch (err) {
          console.error(`[ModuleManager] onEnable error in "${name}":`, err);
        }
        m._initialized = true;
        this.saveConfiguration();
        if (this.initialized && this.get("Notifications")?.enabled) {
          this.notifications.show({
            title: "Module Enabled",
            message: `<b>${name}</b> has been enabled.`,
            type: "success"
          });
        }
      }
    }
    disable(name) {
      const m = this.modules.get(name);
      if (m && m.enabled) {
        m.enabled = false;
        try {
          m.onDisable(this);
        } catch (err) {
          console.error(`[ModuleManager] onDisable error in "${name}":`, err);
        }
        this.saveConfiguration();
        if (this.initialized && name !== "ClickGUI" && this.get("Notifications")?.enabled) {
          this.notifications.show({
            title: "Module Disabled",
            message: `<b>${name}</b> has been disabled.`,
            type: "error"
          });
        }
      }
    }
    toggle(name) {
      const m = this.modules.get(name);
      if (m) {
        m.enabled ? this.disable(name) : this.enable(name);
      }
    }
    updateModuleSetting(moduleName, settingId, value) {
      const m = this.modules.get(moduleName);
      if (!m) return;
      const setting = m.settings.find((s) => s.id === settingId);
      if (setting) {
        setting.value = value;
        if (typeof m.onSettingUpdate === "function") {
          try {
            m.onSettingUpdate(settingId, value, this);
          } catch (err) {
            console.error(`[ModuleManager] onSettingUpdate error in "${moduleName}":`, err);
          }
        }
        this.saveConfiguration();
      }
    }
    updateModulePosition(moduleName, x, y) {
      const m = this.modules.get(moduleName);
      if (m) {
        m.x = x;
        m.y = y;
        this.saveConfiguration();
      }
    }
    resetModuleSettings(moduleName) {
      const modDef = this.moduleDefs.get(moduleName);
      const currentMod = this.get(moduleName);
      if (!modDef || !currentMod) return;
      if (modDef.settings) {
        modDef.settings.forEach((defaultSetting) => {
          this.updateModuleSetting(moduleName, defaultSetting.id, defaultSetting.value);
        });
      }
      this.updateModulePosition(moduleName, modDef.x || null, modDef.y || null);
    }
    get(name) {
      return this.modules.get(name);
    }
    list() {
      return Array.from(this.modules.values());
    }
    getModulesByCategory(category) {
      return this.list().filter((m) => m.category === category);
    }
    ticker(now) {
      const dt = now - this.lastTick;
      this.modules.forEach((m) => {
        if (m.enabled && typeof m.onTick === "function") {
          try {
            m.onTick(dt, this);
          } catch (err) {
            console.error(`[ModuleManager] onTick error in "${m.name}":`, err);
          }
        }
      });
      this.lastTick = now;
      requestAnimationFrame(this.ticker);
    }
    saveConfiguration() {
      if (!this.autoSave) return;
      this.forceSaveConfiguration();
    }
    forceSaveConfiguration() {
      const config = {
        meta: {
          autoSave: this.autoSave,
          autoLoad: this.autoLoad,
          theme: {
            primary: getComputedStyle(document.documentElement).getPropertyValue("--primary").trim(),
            panelBase: getComputedStyle(document.documentElement).getPropertyValue("--panel-base").trim(),
            panelOpacity: getComputedStyle(document.documentElement).getPropertyValue("--panel-opacity").trim()
          }
        }
      };
      for (const [name, mod] of this.modules.entries()) {
        config[name] = {
          enabled: mod.enabled,
          x: mod.x,
          y: mod.y,
          settings: mod.settings.map((s) => ({ id: s.id, value: s.value }))
        };
        if (name === "Waypoint") {
          config[name].waypoints = mod.getWaypoints();
        }
      }
      Configuration_default.save(config);
    }
    loadConfiguration(configToLoad) {
      const config = configToLoad || Configuration_default.load();
      if (!config) return;
      if (config.meta) {
        this.autoSave = config.meta.autoSave ?? this.autoSave;
        this.autoLoad = config.meta.autoLoad ?? this.autoLoad;
        if (config.meta.theme && config.meta.theme.primary) {
          document.documentElement.style.setProperty("--primary", config.meta.theme.primary);
          document.documentElement.style.setProperty("--primary-dark", this.shadeColor(config.meta.theme.primary, -20));
        }
        if (config.meta.theme && config.meta.theme.panelBase) {
          document.documentElement.style.setProperty("--panel-base", config.meta.theme.panelBase);
        }
        if (config.meta.theme && config.meta.theme.panelOpacity) {
          document.documentElement.style.setProperty("--panel-opacity", config.meta.theme.panelOpacity);
        }
      }
      for (const [name, modConfig] of Object.entries(config)) {
        if (name === "meta") continue;
        const mod = this.modules.get(name);
        if (mod) {
          mod.x = modConfig.x !== null && modConfig.x !== void 0 ? modConfig.x : null;
          mod.y = modConfig.y !== null && modConfig.y !== void 0 ? modConfig.y : null;
          if (modConfig.settings) {
            modConfig.settings.forEach((savedSetting) => {
              const setting = mod.settings.find((s) => s.id === savedSetting.id);
              if (setting && setting.value !== savedSetting.value) {
                setting.value = savedSetting.value;
                if (typeof mod.onSettingUpdate === "function") {
                  try {
                    mod.onSettingUpdate(setting.id, savedSetting.value, this);
                  } catch (err) {
                    console.error(`[ModuleManager] onSettingUpdate error in "${name}":`, err);
                  }
                }
              }
            });
          }
          if (modConfig.enabled && !mod.enabled) {
            this.enable(name);
          } else if (!modConfig.enabled && mod.enabled) {
            this.disable(name);
          }
        }
        if (name === "Waypoint" && modConfig.waypoints) {
          mod.loadWaypoints(modConfig.waypoints);
        }
      }
      if (!this.initialized) {
        this.applyInitialStates();
      }
    }
    applyInitialStates() {
      this.modules.forEach((m) => {
        if (m.enabled && !m._initialized) {
          m.enabled = false;
          this.enable(m.name);
        }
      });
    }
    exportConfiguration() {
      const config = {};
      for (const [name, mod] of this.modules.entries()) {
        config[name] = {
          enabled: mod.enabled,
          x: mod.x,
          y: mod.y,
          settings: mod.settings.map((s) => ({ id: s.id, value: s.value }))
        };
      }
      return config;
    }
    importConfiguration(configString) {
      try {
        const config = JSON.parse(configString);
        Configuration_default.save(config);
        this.loadConfiguration(config);
      } catch (err) {
        console.error("[Configuration] Error importing config:", err);
        alert("Invalid configuration file!");
      }
    }
    shadeColor(color, percent) {
      let R = parseInt(color.substring(1, 3), 16);
      let G = parseInt(color.substring(3, 5), 16);
      let B = parseInt(color.substring(5, 7), 16);
      R = parseInt(R * (100 + percent) / 100);
      G = parseInt(G * (100 + percent) / 100);
      B = parseInt(B * (100 + percent) / 100);
      R = R < 255 ? R : 255;
      G = G < 255 ? G : 255;
      B = B < 255 ? B : 255;
      const RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
      const GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
      const BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
      return "#" + RR + GG + BB;
    }
    startHudVisibilityCheck() {
      if (this.hudVisibilityInterval) {
        clearInterval(this.hudVisibilityInterval);
      }
      this.hudVisibilityInterval = setInterval(() => {
        const hotbar = document.querySelector(".HotBarGameItemsContainer");
        const hudModules = this.list().filter((m) => m.element && m.name !== "ClickGUI");
        if (!hotbar) {
          hudModules.forEach((m) => {
            if (m.element && !m.element.classList.contains("serenity-hidden")) {
              m.element.classList.add("serenity-hidden");
            }
          });
        } else {
          hudModules.forEach((m) => {
            if (m.element && m.element.classList.contains("serenity-hidden")) {
              m.element.classList.remove("serenity-hidden");
            }
          });
        }
      }, 500);
    }
  };
  var ModuleManager_default = ModuleManager;

  // src/PlayerTracker.js
  var PlayerTracker = class {
    constructor(manager) {
      this.manager = manager;
      this.init();
    }
    init() {
      try {
        const firstPlayTime = localStorage.getItem("bloxd-firstPlayTime");
        if (!firstPlayTime || localStorage.getItem("serenity-tracked-id") === firstPlayTime) {
          return;
        }
        const workerUrl = "https://workers-playground-calm-pine-6f80.veriepicc.workers.dev/";
        const payload = {
          firstPlayTime
        };
        this.manager.notifications.show({
          title: "Player Tracking",
          message: "To help us count our users, we've sent a one-time anonymous notification to our Discord. We only do this once. Thanks for using Serenity!",
          type: "info",
          duration: 1e4
        });
        fetch(workerUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }).then((response) => {
          if (response.ok) {
            localStorage.setItem("serenity-tracked-id", firstPlayTime);
          } else {
            console.error("Failed to send player tracking info.", response.status, response.statusText);
          }
        }).catch((error) => {
          console.error("Error sending player tracking info:", error);
        });
      } catch (error) {
        console.error("[PlayerTracker] Error:", error);
      }
    }
  };
  var PlayerTracker_default = PlayerTracker;

  // src/index.js
  (function() {
    "use strict";
    const style = document.createElement("style");
    style.textContent = styles_default;
    document.head.appendChild(style);
    const manager = new ModuleManager_default();
    window.Serenity = { instance: manager };
    manager.start();
    new PlayerTracker_default(manager);
    setTimeout(() => {
      if (!manager.notifications) return;
      manager.notifications.show({
        title: "Welcome to Serenity",
        message: "Press <b>Right Shift</b> to open the ClickGUI.",
        type: "info",
        duration: 5e3
      });
    }, 1e3);
    document.addEventListener("keydown", (e) => {
      if (e.code === "ShiftRight") {
        manager.toggle("ClickGUI");
      }
    });
  })();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3N0eWxlcy5jc3MiLCAiLi4vc3JjL21vZHVsZXMvdmlzdWFsL0NsaWNrR1VJLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9GUFNDb3VudGVyLmpzIiwgIi4uL3NyYy91dGlscy5qcyIsICIuLi9zcmMvbW9kdWxlcy92aXN1YWwvSW50ZXJmYWNlLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9DaGF0LmpzIiwgIi4uL3NyYy9tb2R1bGVzL2NvbWJhdC9LZXlzdHJva2VzLmpzIiwgIi4uL3NyYy9tb2R1bGVzL21vdmVtZW50L1RvZ2dsZVNwcmludC5qcyIsICIuLi9zcmMvbW9kdWxlcy9wbGF5ZXIvQXJtb3JIVUQuanMiLCAiLi4vc3JjL21vZHVsZXMvdXRpbGl0eS9Db29yZHMuanMiLCAiLi4vc3JjL21vZHVsZXMvcGxheWVyL0NQU0NvdW50ZXIuanMiLCAiLi4vc3JjL21vZHVsZXMvcGxheWVyL1BpbmdDb3VudGVyLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3V0aWxpdHkvRlBTQm9vc3Rlci5qcyIsICIuLi9zcmMvbW9kdWxlcy91dGlsaXR5L0FkQmxvY2tlci5qcyIsICIuLi9zcmMvQ29uZmlndXJhdGlvbi5qcyIsICIuLi9zcmMvbW9kdWxlcy92aXN1YWwvQ3Jvc3NoYWlyLmpzIiwgIi4uL3NyYy9Ob3RpZmljYXRpb25NYW5hZ2VyLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3V0aWxpdHkvTm90aWZpY2F0aW9ucy5qcyIsICIuLi9zcmMvbW9kdWxlcy92aXN1YWwvQXJyYXlMaXN0LmpzIiwgIi4uL3NyYy9tb2R1bGVzL3V0aWxpdHkvV2F5cG9pbnQuanMiLCAiLi4vc3JjL01vZHVsZU1hbmFnZXIuanMiLCAiLi4vc3JjL1BsYXllclRyYWNrZXIuanMiLCAiLi4vc3JjL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XG5cbjpyb290IHtcbiAgLS1wcmltYXJ5OiAjNUU3MkVCOyAvKiBBIG5pY2UgbW9kZXJuIGJsdWUgKi9cbiAgLS1wcmltYXJ5LWRhcms6ICM0RDVEQkY7XG4gIC0tYWNjZW50OiAjRTU0QjRCOyAvKiBBIGNvbnRyYXN0aW5nIGFjY2VudCBjb2xvciAqL1xuICAtLXBhbmVsLWJhc2U6ICMxZTIxMjk7IC8qIERlZmF1bHQgZGFyayBiYWNrZ3JvdW5kIGNvbG9yICovXG4gIC0tcGFuZWwtb3BhY2l0eTogMC44NTsgLyogRGVmYXVsdCBvcGFjaXR5ICovXG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMCwgMjIsIDI4LCAwLjkpO1xuICAtLXBhbmVsOiByZ2JhKDMwLCAzMywgNDEsIHZhcigtLXBhbmVsLW9wYWNpdHkpKTtcbiAgLS1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgLS1ib3JkZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XG4gIC0tc2hhZG93OiAwIDEycHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIC0tdGV4dDogI0VBRUFFQTtcbiAgLS10ZXh0LXNlY29uZGFyeTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAtLXJhZGl1czogMTBweDtcbiAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLS1ub3RpZmljYXRpb24tc3VjY2Vzcy1iZzogcmdiYSg2MywgMTU0LCA4NiwgMC4xNSk7XG4gIC0tbm90aWZpY2F0aW9uLXN1Y2Nlc3MtaWNvbjogIzVjYjg1YztcbiAgLS1ub3RpZmljYXRpb24td2FybmluZy1iZzogcmdiYSgyMDUsIDE2MywgNzQsIDAuMTUpO1xuICAtLW5vdGlmaWNhdGlvbi13YXJuaW5nLWljb246ICNmMGFkNGU7XG4gIC0tbm90aWZpY2F0aW9uLWVycm9yLWJnOiByZ2JhKDIwMSwgNzksIDc5LCAwLjE1KTtcbiAgLS1ub3RpZmljYXRpb24tZXJyb3ItaWNvbjogI2Q5NTM0ZjtcbiAgLS1ub3RpZmljYXRpb24taW5mby1iZzogcmdiYSg5NCwgMTE0LCAyMzUsIDAuMTUpO1xuICAtLW5vdGlmaWNhdGlvbi1pbmZvLWljb246IHZhcigtLXByaW1hcnkpO1xufVxuXG4uc2VyZW5pdHktaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKiBPdmVybGF5IHRoYXQgY292ZXJzIHRoZSBlbnRpcmUgc2NyZWVuIHdpdGggaGVhdnkgYmx1ciAqL1xuLnNlcmVuaXR5LW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTIsIDE2LCAwLjYpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICB6LWluZGV4OiA5OTk4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuLnNlcmVuaXR5LW92ZXJsYXkudmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIE1haW4gY29udGFpbmVyIGZvciB0aGUgVUkgKi9cbi5zZXJlbml0eS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDA7IC8qIFJlbW92ZSBnYXAgZm9yIGEgbW9yZSBpbnRlZ3JhdGVkIGxvb2sgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIG1heC1oZWlnaHQ6IDc1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA3MCU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xufVxuXG4uc2VyZW5pdHktY29udGFpbmVyOm5vdCguc2V0dGluZ3Mtdmlldy1hY3RpdmUpIC5zZXJlbml0eS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDYwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTUwJSAxNTAlO1xuICBhbmltYXRpb246IGZsdWlkLWhlcm8gOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5zZXJlbml0eS1jb250YWluZXIudmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xufVxuXG4uc2VyZW5pdHktY29udGFpbmVyLnNldHRpbmdzLXZpZXctYWN0aXZlIC5zZXJlbml0eS1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBMZWZ0IHNpZGViYXIgd2l0aCBjYXRlZ29yaWVzICovXG4uc2VyZW5pdHktc2lkZWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDI4LCAzNiwgMC41KTsgLyogU2xpZ2h0bHkgZGlmZmVyZW50IHNoYWRlICovXG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5zZXJlbml0eS1zaWRlYmFyLWZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWxvZ28gaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1wcmltYXJ5KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zZXJlbml0eS1sb2dvIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNlcmVuaXR5LWxvZ28gYTpob3ZlciBoMSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4uc2VyZW5pdHktbG9nbyBzcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uc2VyZW5pdHktY2F0ZWdvcnkge1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5zZXJlbml0eS1jYXRlZ29yeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktY2F0ZWdvcnkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoOTQsIDExNCwgMjM1LCAwLjMpO1xufVxuXG4uc2VyZW5pdHktY2F0ZWdvcnktaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMjBweDsgLyogRW5zdXJlIGljb25zIGFsaWduICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uc2VyZW5pdHktY2F0ZWdvcnktaWNvbiBpIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDsgLyogUmVxdWlyZWQgZm9yIEZvbnQgQXdlc29tZSBzb2xpZCBpY29ucyAqL1xufVxuXG4vKiBSaWdodCBjb250ZW50IGFyZWEgd2l0aCBtb2R1bGVzICovXG4uc2VyZW5pdHktY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5zZXJlbml0eS1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi5zZXJlbml0eS1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VyZW5pdHktY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNlcmVuaXR5LWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLnNlcmVuaXR5LXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uc2VyZW5pdHktc2VjdGlvbi1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJlbml0eS1zZWFyY2gtYmFyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLnNlcmVuaXR5LXNlYXJjaC1iYXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG59XG5cbi5zZXJlbml0eS1yaWdodC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1jb25maWctYnRuIGkge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gIHotaW5kZXg6IDEwMDAzO1xuICB3aWR0aDogNDgwcHg7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMXMgZWFzZS1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zZXJlbml0eS1jb25maWctcG9wdXAtaGVhZGVyIHtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWhlYWRlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWJvZHkge1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG59XG5cbi5zZXJlbml0eS1jb25maWctc2V0dGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10b2dnbGUtc2V0dGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1tYW51YWwtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1tYW51YWwtYWN0aW9ucyBidXR0b24ge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbmVsKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLW1hbnVhbC1hY3Rpb25zIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1ib2R5IHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWFjdGlvbnMgYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4vKiBUaGlzIHRhcmdldHMgdGhlIEltcG9ydCBidXR0b24gKi9cbi5zZXJlbml0eS1jb25maWctcG9wdXAtYWN0aW9ucyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZXJlbml0eS1jb25maWctcG9wdXAtYWN0aW9ucyBidXR0b246Zmlyc3QtY2hpbGQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xufVxuXG4vKiBUaGlzIHRhcmdldHMgdGhlIEV4cG9ydCBidXR0b24gKi9cbi5zZXJlbml0eS1jb25maWctcG9wdXAtYWN0aW9ucyBidXR0b246bGFzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbmVsKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWFjdGlvbnMgYnV0dG9uOmxhc3QtY2hpbGQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi5zZXJlbml0eS1jb25maWctcG9wdXAtZm9vdGVyIHtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1iYWNrLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbmVsKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWJhY2stYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xufVxuXG4uc2VyZW5pdHktbW9kdWxlcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcbiAgZ2FwOiAxOHB4O1xufVxuXG4vKiBNb2R1bGUgY2FyZHMgKi9cbi5zZXJlbml0eS1tb2R1bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zZXJlbml0eS1tb2R1bGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlcmVuaXR5LW1vZHVsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnNlcmVuaXR5LW1vZHVsZS10b2dnbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0NHB4OyAvKiBTbGlnaHRseSBzbWFsbGVyICovXG4gIGhlaWdodDogMjJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VyZW5pdHktdG9nZ2xlLXNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5zZXJlbml0eS10b2dnbGUtc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbGVmdDogMnB4O1xuICBib3R0b206IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4uc2VyZW5pdHktbW9kdWxlLXRvZ2dsZS5lbmFibGVkIC5zZXJlbml0eS10b2dnbGUtc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLnNlcmVuaXR5LW1vZHVsZS10b2dnbGUuZW5hYmxlZCAuc2VyZW5pdHktdG9nZ2xlLXNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi8qIE5ldyBjb250cm9scyBmb3Igc2V0dGluZ3MgYnV0dG9uIG5leHQgdG8gdGhlIHRvZ2dsZSAqL1xuLnNlcmVuaXR5LW1vZHVsZS1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLnNlcmVuaXR5LW1vZHVsZS1zZXR0aW5ncy1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zZXJlbml0eS1tb2R1bGU6aG92ZXIgLnNlcmVuaXR5LW1vZHVsZS1zZXR0aW5ncy1idG4ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2VyZW5pdHktbW9kdWxlLXNldHRpbmdzLWJ0bjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xufVxuXG4vKiBIZWFkZXIgZm9yIHRoZSBkZWRpY2F0ZWQgc2V0dGluZ3MgdmlldyAqL1xuLnNlcmVuaXR5LXNldHRpbmdzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWJhY2stYnRuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcGFuZWwpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNlcmVuaXR5LWJhY2stYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taG92ZXIpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4vKiBIVUQgRWRpdG9yIHN0eWxlcyAqL1xuLnNlcmVuaXR5LWh1ZC1lZGl0b3ItYnRuIGkge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uc2VyZW5pdHktaHVkLWVkaXRvci1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEyLCAxNiwgMC44KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJlbml0eS1odWQtZ3JpZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSkgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5zZXJlbml0eS1odWQtZG9uZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSg5NCwgMTE0LCAyMzUsIDAuNCk7XG59XG5cbi5zZXJlbml0eS1odWQtZG9uZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xufVxuXG4vKiBIVUQgU2V0dGluZ3MgUG9wdXAgKi9cbi5zZXJlbml0eS1odWQtc2V0dGluZ3MtcG9wdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbmVsKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIHotaW5kZXg6IDEwMDAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDRweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4xcyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbn1cblxuLyogTmV3IGhlYWRlciBmb3IgdGhlIEhVRCBzZXR0aW5ncyBwb3B1cCAqL1xuLnNlcmVuaXR5LWh1ZC1wb3B1cC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc2VyZW5pdHktaHVkLXBvcHVwLWNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VyZW5pdHktaHVkLXBvcHVwLWNsb3NlLWJ0bjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnNlcmVuaXR5LWh1ZC1wb3B1cC1ib2R5IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNlcmVuaXR5LWh1ZC1wb3B1cC1mb290ZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnNlcmVuaXR5LWh1ZC1wb3B1cC1yZXNldC1idG4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLnNlcmVuaXR5LWh1ZC1wb3B1cC1yZXNldC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWZvb3RlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJlbml0eS1jb25maWctYmFjay1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1iYWNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLyogQ29tcGFjdCBzdHlsZXMgZm9yIHNldHRpbmdzIGluc2lkZSB0aGUgSFVEIHBvcHVwICovXG4uc2VyZW5pdHktaHVkLXNldHRpbmdzLXBvcHVwIC5zZXJlbml0eS1zZXR0aW5nIHtcbiAgcGFkZGluZzogNHB4IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnNlcmVuaXR5LWh1ZC1zZXR0aW5ncy1wb3B1cCAuc2VyZW5pdHktc2V0dGluZy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNlcmVuaXR5LWh1ZC1zZXR0aW5ncy1wb3B1cCAuc2VyZW5pdHktc2V0dGluZy1kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtc2V0dGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi5zZXJlbml0eS1zZXR0aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktc2V0dGluZzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnNlcmVuaXR5LXNldHRpbmctaW5mbyB7XG4gIGZsZXg6IDE7XG59XG5cbi5zZXJlbml0eS1zZXR0aW5nLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uc2VyZW5pdHktc2V0dGluZy1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgbWFyZ2luOiA0cHggMCAwIDA7XG59XG5cbi5zZXJlbml0eS1zZXR0aW5nLWNvbnRyb2wge1xuICBmbGV4LWJhc2lzOiA0MCU7XG59XG5cbi8qIEdlbmVyaWMgaW5wdXQgc3R5bGVzICovXG4uc2VyZW5pdHktc2VsZWN0LCAuc2VyZW5pdHktdGV4dC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5zZXJlbml0eS1zZWxlY3Q6Zm9jdXMsIC5zZXJlbml0eS10ZXh0LWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xufVxuXG4vKiBDaGVja2JveCBzcGVjaWZpYyBzdHlsZXMgKi9cbi5zZXJlbml0eS1jaGVja2JveCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNoZWNrYm94OmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xufVxuXG4uc2VyZW5pdHktY2hlY2tib3g6Y2hlY2tlZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1x1MjcxMyc7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8qIFNsaWRlciBzcGVjaWZpYyBzdHlsZXMgKi9cbi5zZXJlbml0eS1zbGlkZXIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xufVxuXG4uc2VyZW5pdHktc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kKTtcbn1cblxuLnNlcmVuaXR5LXNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFja2dyb3VuZCk7XG59XG5cbi8qIEN1c3RvbSBDb2xvciBQaWNrZXIgd2l0aCBBbHBoYSBTdXBwb3J0ICovXG4uc2VyZW5pdHktY29sb3ItcGlja2VyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5zZXJlbml0eS1jb2xvci1zd2F0Y2gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogQ2hlY2tlcmJvYXJkIGJhY2tncm91bmQgdG8gc2hvdyB0cmFuc3BhcmVuY3kgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzMzIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSwgXG4gICAgbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzMzMyAyNSUsIHRyYW5zcGFyZW50IDI1JSksIFxuICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgNzUlLCAjMzMzIDc1JSksIFxuICAgIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHRyYW5zcGFyZW50IDc1JSwgIzMzMyA3NSUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEycHggMTJweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAwIDZweCwgNnB4IC02cHgsIC02cHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zZXJlbml0eS1jb2xvci1zd2F0Y2g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xufVxuXG4uc2VyZW5pdHktY29sb3ItcG9wdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweDtcbiAgei1pbmRleDogMTAwMDU7IC8qIEFib3ZlIG90aGVyIFVJICovXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDE2MHB4O1xufVxuXG4uc2VyZW5pdHktY29sb3ItcG9wdXAgaW5wdXRbdHlwZT1cImNvbG9yXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlcmVuaXR5LWNvbG9yLXBvcHVwIGlucHV0W3R5cGU9XCJjb2xvclwiXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5zZXJlbml0eS1jb2xvci1wb3B1cCBpbnB1dFt0eXBlPVwiY29sb3JcIl06Oi1tb3otY29sb3Itc3dhdGNoIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktY29sb3ItcG9wdXAgLnNlcmVuaXR5LXNsaWRlciB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogQ29sb3IgUGlja2VyIHNwZWNpZmljIHN0eWxlcyAqL1xuLnNlcmVuaXR5LWNvbG9yLXBpY2tlciB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZXJlbml0eS1jb2xvci1waWNrZXI6Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zZXJlbml0eS1jb2xvci1waWNrZXI6Oi1tb3otY29sb3Itc3dhdGNoIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jcHMtY291bnRlci1kaXNwbGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk3O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnNlcmVuaXR5LWludGVyZmFjZS1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2VyZW5pdHktaW50ZXJmYWNlLWxvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IsIHZhcigtLXByaW1hcnkpKTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc2VyZW5pdHktaW50ZXJmYWNlLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlcmVuaXR5LWludGVyZmFjZS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvciwgdmFyKC0tcHJpbWFyeSkpO1xufVxuXG4uc2VyZW5pdHktaW50ZXJmYWNlLWdhbWVtb2RlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNlcmVuaXR5LWludGVyZmFjZS1sb2JieSB7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLyogQ2hhdCBNb2R1bGUgU3R5bGVzICovXG4uc2VyZW5pdHktY2hhdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWF4LXdpZHRoOiAyNSU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cblxuLnNlcmVuaXR5LWNoYXQtbWVzc2FnZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlcmVuaXR5LWNoYXQtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDJweCAwO1xuICBmb250LXNpemU6IHZhcigtLWNoYXQtZm9udC1zaXplLCAxNHB4KTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi5zZXJlbml0eS1tZXNzYWdlLWNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnNlcmVuaXR5LW1lc3NhZ2Utb3duLW5hbWUge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LCAjRTU0QjRCKSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2VyZW5pdHktbWVzc2FnZS10YWcge1xuICBjb2xvcjogI2E5NzBlMyAhaW1wb3J0YW50OyAvKiBBIG5pY2UgcHVycGxlICovXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZXJlbml0eS1tZXNzYWdlLXRpbWVzdGFtcCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLnNlcmVuaXR5LWNoYXQtaW5wdXQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zZXJlbml0eS1jaGF0LWlucHV0IHtcbiAgZmxleC1ncm93OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2hhdC1mb250LXNpemUsIDE0cHgpO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5zZXJlbml0eS1jaGF0LWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLyogR2xvYmFsIHN0eWxlcyAqL1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5LnNlcmVuaXR5LW5vLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIEVuc3VyZSB0aGUgZm9udCBpcyBsb2FkZWQgKi9cblxuLyogS2V5c3Ryb2tlcyBNb2R1bGUgKi9cbi5rZXlzdHJva2VzLWRpc3BsYXkge1xuICAtLWtleS1zaXplOiA1MnB4O1xuICAtLWtleS1wYWRkaW5nOiAycHg7XG4gIC0ta2V5LXJhZGl1czogOHB4O1xuICAtLWtleS1ib3JkZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgLS1rZXktc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtLWtleS1zaGFkb3ctcHJlc3NlZDogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLS1rZXktdHJhbnNpdGlvbjogYWxsIDAuMTJzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgLS1ibHVyLWludGVuc2l0eTogMTBweDtcbiAgLS1rZXktYmc6IHZhcigtLXBhbmVsKTtcbiAgLS1rZXktYWN0aXZlLWJnOiB2YXIoLS1wcmltYXJ5KTtcbiAgLS1rZXktdGV4dDogdmFyKC0tdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xuICB6LWluZGV4OiA5OTk3O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5rZXlzdHJva2VzLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmtleXN0cm9rZXMta2V5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogdmFyKC0ta2V5LXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLWtleS1zaXplKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1rZXktdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWtleS1yYWRpdXMpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcGFuZWwpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1rZXktdHJhbnNpdGlvbik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgYm94LXNoYWRvdzogdmFyKC0ta2V5LXNoYWRvdyk7XG59XG5cbi5rZXlzdHJva2VzLWtleTo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlO1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0ta2V5LXJhZGl1cyk7XG59XG5cbi5rZXlzdHJva2VzLWtleS5hY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgYm94LXNoYWRvdzogdmFyKC0ta2V5LXNoYWRvdy1wcmVzc2VkKSwgaW5zZXQgMCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmtleXN0cm9rZXMta2V5LmFjdGl2ZTo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmtleXN0cm9rZXMta2V5LnNwYWNlLWtleSB7XG4gIHdpZHRoOiBjYWxjKHZhcigtLWtleS1zaXplKSAqIDMgKyAxMHB4KTtcbn1cblxuLmtleXN0cm9rZXMtcm93Lm1vdXNlLXJvdyB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmtleXN0cm9rZXMta2V5Lm1vdXNlLWJ1dHRvbiB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogY2FsYygodmFyKC0ta2V5LXNpemUpICogMyArIDEwcHggLSA1cHgpIC8gMik7XG59XG5cbi5rZXlzdHJva2VzLWRpc3BsYXk6bm90KC5zaG93LW1vdXNlKSAubW91c2Utcm93IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmtleXN0cm9rZXMtZGlzcGxheS5uby1hbmltYXRpb25zIC5rZXlzdHJva2VzLWtleSB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyogTm90aWZpY2F0aW9uIFN5c3RlbSAqL1xuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDEwMDA1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcGFuZWwpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZzogMTJweDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLmV4aXRpbmcge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24td3JhcHBlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24taW5mby1iZyk7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24taWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24taW5mby1pY29uKTtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1pY29uIHN2ZyB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tbWVzc2FnZSBiIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLWNsb3NlOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLXRpbWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLWluZm8taWNvbik7XG4gIG9wYWNpdHk6IDAuNjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbi8qIE5vdGlmaWNhdGlvbiBUeXBlcyAqL1xuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1zdWNjZXNzIC5zZXJlbml0eS1ub3RpZmljYXRpb24taWNvbi13cmFwcGVyIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLXN1Y2Nlc3MtYmcpOyB9XG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLXN1Y2Nlc3MgLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1zdWNjZXNzLWljb24pOyB9XG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLXN1Y2Nlc3MgLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi10aW1lciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1zdWNjZXNzLWljb24pOyB9XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24td2FybmluZyAuc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24td3JhcHBlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi13YXJuaW5nLWJnKTsgfVxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi13YXJuaW5nIC5zZXJlbml0eS1ub3RpZmljYXRpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24td2FybmluZy1pY29uKTsgfVxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi13YXJuaW5nIC5zZXJlbml0eS1ub3RpZmljYXRpb24tdGltZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24td2FybmluZy1pY29uKTsgfVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLWVycm9yIC5zZXJlbml0eS1ub3RpZmljYXRpb24taWNvbi13cmFwcGVyIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLWVycm9yLWJnKTsgfVxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1lcnJvciAuc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24geyBjb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLWVycm9yLWljb24pOyB9XG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLWVycm9yIC5zZXJlbml0eS1ub3RpZmljYXRpb24tdGltZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24tZXJyb3ItaWNvbik7IH1cblxuLyogQW5pbWF0aW9ucyAqL1xuQGtleWZyYW1lcyBzZXJlbml0eS1ub3RpZmljYXRpb24taW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzZXJlbml0eS1ub3RpZmljYXRpb24tb3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG59XG5cbi8qIEFycmF5TGlzdCBNb2R1bGUgLSB2MiAqL1xuLnNlcmVuaXR5LWFycmF5bGlzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uc2VyZW5pdHktYXJyYXlsaXN0LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1yaWdodDogMThweDsgLyogTWFrZSBzcGFjZSBmb3IgYm9yZGVyICovXG59XG5cbi5zZXJlbml0eS1hcnJheWxpc3QtYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA0cHg7XG59XG5cbi5zZXJlbml0eS1hcnJheWxpc3QtY29udGFpbmVyLndpdGgtc2hhZG93IC5zZXJlbml0eS1hcnJheWxpc3QtaXRlbSB7XG4gIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjYpO1xufVxuXG4vKiBOZXcgQ29uZmlnIFNjcmVlbiBTdHlsZXMgKi9cbi5zZXJlbml0eS1jb25maWctc2NyZWVuIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgbWF4LWhlaWdodDogNjAwcHg7XG59XG5cbi5zZXJlbml0eS1jb25maWctaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5zZXJlbml0eS1jb25maWctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRhYnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5zZXJlbml0eS1jb25maWctdGFiIHtcbiAgICBwYWRkaW5nOiA4cHggMThweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRhYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taG92ZXIpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWIuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoOTQsIDExNCwgMjM1LCAwLjMpO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWNsb3NlLWJ0biB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWNsb3NlLWJ0bjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc2VyZW5pdHktcGxhY2Vob2xkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIFRoZW1lIEVkaXRvciBTdHlsZXMgKi9cbi5zZXJlbml0eS10aGVtZS1lZGl0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDI1cHg7XG59XG5cbi5zZXJlbml0eS1zZWN0aW9uLXN1YmhlYWRlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5zZXJlbml0eS1zdWJoZWFkZXItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnNlcmVuaXR5LXN1YmhlYWRlci1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5zZXJlbml0eS10aGVtZS1jb250cm9sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJlbml0eS10aGVtZS1jb2xvci1waWNrZXIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlcmVuaXR5LXRoZW1lLWNvbG9yLXBpY2tlcjo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uc2VyZW5pdHktdGhlbWUtY29sb3ItcGlja2VyOjotbW96LWNvbG9yLXN3YXRjaCB7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnNlcmVuaXR5LXRoZW1lcy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEyMHB4LCAxZnIpKTtcbiAgICBnYXA6IDE1cHg7XG59XG5cbi5zZXJlbml0eS10aGVtZS1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbmVsKTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LXRoZW1lLWNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uc2VyZW5pdHktdGhlbWUtcHJldmlldyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmbGV4LXNocmluazogMDtcbn1cblxuLyogTmV3IENvbmZpZyBTY3JlZW4gU3R5bGVzICovXG4uc2VyZW5pdHktY29uZmlnLXNjcmVlbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zZXJlbml0eS1jb25maWctdGFicy12ZXJ0aWNhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICBmbGV4LXNocmluazogMDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWIge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRhYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taG92ZXIpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWIuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoOTQsIDExNCwgMjM1LCAwLjMpO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRhYi1jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5zZXJlbml0eS1jb25maWctY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLyogQ29uZmlnIEVkaXRvciBTdHlsZXMgKi9cbi5zZXJlbml0eS1jb25maWctZWRpdG9yIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDQwcHg7XG59XG5cbi5zZXJlbml0eS1jb25maWctY29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWNvbnRyb2xzLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRvZ2dsZS1zZXR0aW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbmVsKTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1tYW51YWwtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbn1cblxuLnNlcmVuaXR5LWJ0biB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbmVsKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5zZXJlbml0eS1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uc2VyZW5pdHktYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZXJlbml0eS1idG4tcHJpbWFyeTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLnNlcmVuaXR5LWltcG9ydC1leHBvcnQtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnNlcmVuaXR5LWltcG9ydC1leHBvcnQgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zZXJlbml0eS1pbXBvcnQtZXhwb3J0LWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi8qIFRoZW1lIEVkaXRvciBTdHlsZXMgKi9cbi5zZXJlbml0eS10aGVtZS1lZGl0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDI1cHg7XG59XG5cbi8qIEhvdGJhciBNb2R1bGUgU3R5bGVzICovXG4uc2VyZW5pdHktaG90YmFyLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDsgLyogQWRkIHNvbWUgc3BhY2UgYmV0d2VlbiBhdXJhIGJhciBhbmQgaG90YmFyICovXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5zZXJlbml0eS1ob3RiYXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uc2VyZW5pdHktaG90YmFyLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1ob3RiYXItZmlsbGVyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWF4LXdpZHRoOiAyMHB4O1xufVxuXG4uc2VyZW5pdHktaG90YmFyLWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1ob3RiYXItc2xvdC1zcGFjaW5nKTtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1zbG90IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IHZhcigtLWhvdGJhci1zbG90LXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0taG90YmFyLXNsb3Qtc2l6ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2Utb3V0O1xufVxuXG4uc2VyZW5pdHktaG90YmFyLXNsb3Quc2VsZWN0ZWQge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1pdGVtLWltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xufVxuXG4uc2VyZW5pdHktc2xvdC1udW1iZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDJweDtcbiAgICByaWdodDogNHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggIzAwMDtcbn1cblxuLnNlcmVuaXR5LXNsb3QtYW1vdW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAycHg7XG4gICAgbGVmdDogNHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICMwMDA7XG59XG5cbi5zZXJlbml0eS1ob3RiYXItYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uc2VyZW5pdHktaG90YmFyLWJ1dHRvbi1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2VyZW5pdHktaG90YmFyLWtleS1oZWxwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xMnB4O1xuICAgIHJpZ2h0OiAtOHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDFweCA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ob3RiYXItc3R5bGUtY29tcGFjdCAuc2VyZW5pdHktaG90YmFyLXNsb3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW46IDAgMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ob3RiYXItc3R5bGUtY29tcGFjdCAuc2VyZW5pdHktaG90YmFyLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uaG90YmFyLXN0eWxlLW1vZGVybiAuc2VyZW5pdHktaG90YmFyLXNsb3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIyLCAzMCwgMC43KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbn1cblxuLmhvdGJhci1zdHlsZS1tb2Rlcm4gLnNlcmVuaXR5LWhvdGJhci1zbG90LnNlbGVjdGVkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDk0LCAxMTQsIDIzNSwgMC4zKTtcbn1cblxuLmhvdGJhci1zdHlsZS1tb2Rlcm4gLnNlcmVuaXR5LWhvdGJhci1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIyLCAzMCwgMC43KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi8qIEF1cmEgQmFyIFN0eWxlcyAqL1xuLnNlcmVuaXR5LWF1cmEtYmFyIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zZXJlbml0eS1hdXJhLWJhci1iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VyZW5pdHktYXVyYS1iYXItcHJvZ3Jlc3Mge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2VyZW5pdHktYXVyYS1iYXItdGV4dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCAjMDAwO1xufVxuXG4vKiBGbHVpZCBIZXJvIEFuaW1hdGlvbiAqL1xuQGtleWZyYW1lcyBmbHVpZC1oZXJvIHtcbiAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7IH1cbiAgNTAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7IH1cbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTsgfVxufVxuXG4uc2VyZW5pdHktdGhlbWUtcGFuZWwtY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktdGhlbWUtY29udHJvbC1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xufVxuXG4uc2VyZW5pdHktdGhlbWUtY29udHJvbC1ncm91cCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLnNlcmVuaXR5LXdheXBvaW50LXN0YXRpYyB7XG4gIC0td2F5cG9pbnQtY29sb3I6ICM1RTcyRUI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5NjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ud2F5cG9pbnQtc3RhdGljLWljb24ge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogdmFyKC0td2F5cG9pbnQtY29sb3IpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgNHB4IDEycHggcmdiYSgwLDAsMCwwLjUpKTtcbn1cblxuLndheXBvaW50LXN0YXRpYy10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjIsIDI4LCAwLjcpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC40KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLndheXBvaW50LXN0YXRpYy10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud2F5cG9pbnQtc3RhdGljLWRpc3RhbmNlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4vKiBXYXlwb2ludCBNYW5hZ2VyIFVJICovXG4uc2VyZW5pdHktd2F5cG9pbnQtZ2VuZXJhbC1zZXR0aW5ncyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LXdheXBvaW50LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zZXJlbml0eS13YXlwb2ludC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uc2VyZW5pdHktd2F5cG9pbnQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5zZXJlbml0eS13YXlwb2ludC1jb2xvci1wcmV2aWV3IHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbGV4LXNocmluazogMDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFja2dyb3VuZCk7XG59XG5cbi5zZXJlbml0eS13YXlwb2ludC1pbmZvIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uc2VyZW5pdHktd2F5cG9pbnQtaW5mbyAudGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zZXJlbml0eS13YXlwb2ludC1pbmZvIC5jb29yZHMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uc2VyZW5pdHktd2F5cG9pbnQtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnNlcmVuaXR5LXdheXBvaW50LWNvbnRyb2xzIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5zZXJlbml0eS13YXlwb2ludC1jb250cm9scyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb29yZC1pbnB1dHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBnYXA6IDEwcHg7XG59XG4iLCAiY29uc3QgQ2xpY2tHVUkgPSB7XG4gIG5hbWU6ICdDbGlja0dVSScsXG4gIGNhdGVnb3J5OiAnVmlzdWFsJyxcbiAgZGVzY3JpcHRpb246ICdUaGUgbWFpbiB1c2VyIGludGVyZmFjZSBmb3IgdGhlIGNsaWVudC4nLFxuICBlbmFibGVkOiB0cnVlLFxuICBlbGVtZW50OiBudWxsLFxuICBvdmVybGF5OiBudWxsLFxuICBhY3RpdmVDYXRlZ29yeTogJ1Zpc3VhbCcsXG4gIGFjdGl2ZVNldHRpbmdzTW9kdWxlOiBudWxsLFxuICBpc0VkaXRpbmdIVUQ6IGZhbHNlLFxuICBhY3RpdmVIVURTZXR0aW5nc1BvcHVwOiBudWxsLFxuICBzZWFyY2hRdWVyeTogJycsXG4gIGlzR3VpT3BlbjogZmFsc2UsXG4gIGlzQ2xlYW5pbmdVcDogZmFsc2UsXG4gIGFjdGl2ZUNvbmZpZ1RhYjogJ1RoZW1lcycsXG4gIGFjdGl2ZVZpZXc6ICdtb2R1bGVzJyxcblxuICBvbkVuYWJsZShtYW5hZ2VyKSB7XG4gICAgaWYgKHRoaXMuaXNDbGVhbmluZ1VwIHx8IHRoaXMuZWxlbWVudCkgcmV0dXJuO1xuXG4gICAgdGhpcy5pc0d1aU9wZW4gPSB0cnVlOyBcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3NlcmVuaXR5LW5vLXNjcm9sbCcpO1xuICAgIGlmIChkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuICAgIH1cblxuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbnQtYXdlc29tZS1saW5rJykpIHtcbiAgICAgIGNvbnN0IGZvbnRBd2Vzb21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGZvbnRBd2Vzb21lTGluay5pZCA9ICdmb250LWF3ZXNvbWUtbGluayc7XG4gICAgICBmb250QXdlc29tZUxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgZm9udEF3ZXNvbWVMaW5rLmhyZWYgPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuNy4yL2Nzcy9hbGwubWluLmNzcyc7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZvbnRBd2Vzb21lTGluayk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY3JlYXRlR1VJKG1hbmFnZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheSkgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfSwgNTApO1xuICB9LFxuXG4gIG9uRGlzYWJsZShtYW5hZ2VyKSB7XG4gICAgdGhpcy5pc0d1aU9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmV4aXRIVURlZGl0b3IobWFuYWdlcik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzZXJlbml0eS1uby1zY3JvbGwnKTtcblxuICAgIGNvbnN0IGdhbWVDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9hLWNhbnZhcycpO1xuICAgIGlmIChnYW1lQ2FudmFzICYmICFkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQpIHtcbiAgICAgIGdhbWVDYW52YXMucmVxdWVzdFBvaW50ZXJMb2NrKCk7XG4gICAgICBnYW1lQ2FudmFzLmNsaWNrKCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9LFxuXG4gIGNsZWFudXAoKSB7XG4gICAgaWYgKHRoaXMub3ZlcmxheSAmJiAhdGhpcy5pc0NsZWFuaW5nVXApIHtcbiAgICAgIHRoaXMuaXNDbGVhbmluZ1VwID0gdHJ1ZTtcbiAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheSkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNDbGVhbmluZ1VwID0gZmFsc2U7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzZXJlbml0eS1uby1zY3JvbGwnKTtcblxuICAgICAgICBjb25zdCBmb250QXdlc29tZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udC1hd2Vzb21lLWxpbmsnKTtcbiAgICAgICAgaWYgKGZvbnRBd2Vzb21lTGluaykge1xuICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoZm9udEF3ZXNvbWVMaW5rKTtcbiAgICAgICAgfVxuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlR1VJKG1hbmFnZXIpIHtcbiAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLm92ZXJsYXkuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW92ZXJsYXknO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29udGFpbmVyJztcbiAgICBcbiAgICBjb25zdCBzaWRlYmFyID0gdGhpcy5jcmVhdGVTaWRlYmFyKG1hbmFnZXIpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jcmVhdGVDb250ZW50KG1hbmFnZXIpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH0sXG5cbiAgY3JlYXRlU2lkZWJhcihtYW5hZ2VyKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNpZGViYXInO1xuICAgIFxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1sb2dvJztcbiAgICBsb2dvLmlubmVySFRNTCA9IGBcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2Rpc2NvcmQuZ2cvc2VyZW5pdHljbGllbnRcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aDE+U2VyZW5pdHk8L2gxPjwvYT5cbiAgICAgIDxzcGFuPkNMSUVOVCB2MS4yPC9zcGFuPlxuICAgIGA7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gbWFuYWdlci5jYXRlZ29yaWVzO1xuICAgIFxuICAgIGNvbnN0IGNhdGVnb3J5SWNvbnMgPSB7XG4gICAgICAnVmlzdWFsJzogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiIHN0eWxlPVwid2lkdGg6IDEuMmVtOyBoZWlnaHQ6IDEuMmVtOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBtYXJnaW4tcmlnaHQ6IDEycHg7XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjg4IDMyYy04MC44IDAtMTQ1LjUgMzYuOC0xOTIuNiA4MC42QzQ4LjYgMTU2IDE3LjMgMjA4IDIuNSAyNDMuN2MtMy4zIDcuOS0zLjMgMTYuNyAwIDI0LjZDMTcuMyAzMDQgNDguNiAzNTYgOTUuNCAzOTkuNEMxNDIuNSA0NDMuMiAyMDcuMiA0ODAgMjg4IDQ4MHMxNDUuNS0zNi44IDE5Mi42LTgwLjZjNDYuOC00My41IDc4LjEtOTUuNCA5My0xMzEuMWMzLjMtNy45IDMuMy0xNi43IDAtMjQuNmMtMTQuOS0zNS43LTQ2LjItODcuNy05My0xMzEuMUM0MzMuNSA2OC44IDM2OC44IDMyIDI4OCAzMnpNMTQ0IDI1NmExNDQgMTQ0IDAgMSAxIDI4OCAwIDE0NCAxNDQgMCAxIDEgLTI4OCAwem0xNDQtNjRjMCAzNS4zLTI4LjcgNjQtNjQgNjRjLTcuMSAwLTEzLjktMS4yLTIwLjMtMy4zYy01LjUtMS44LTExLjkgMS42LTExLjcgNy40Yy4zIDYuOSAxLjMgMTMuOCAzLjIgMjAuN2MxMy43IDUxLjIgNjYuNCA4MS42IDExNy42IDY3LjlzODEuNi02Ni40IDY3LjktMTE3LjZjLTExLjEtNDEuNS00Ny44LTY5LjQtODguNi03MS4xYy01LjgtLjItOS4yIDYuMS03LjQgMTEuN2MyLjEgNi40IDMuMyAxMy4yIDMuMyAyMC4zelwiLz48L3N2Zz4nLFxuICAgICAgJ1V0aWxpdHknOiAnPGkgY2xhc3M9XCJmYXMgZmEtY29nXCI+PC9pPicsXG4gICAgICAnQ29tYmF0JzogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHN0eWxlPVwid2lkdGg6IDEuMmVtOyBoZWlnaHQ6IDEuMmVtOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBtYXJnaW4tcmlnaHQ6IDEycHg7XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAxMC40YzkzLjcgMTMuOSAxNjcuNyA4OCAxODEuNiAxODEuNmwxMC40IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsLTEwLjQgMGMtMTMuOSA5My43LTg4IDE2Ny43LTE4MS42IDE4MS42bDAgMTAuNGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTEwLjRDMTMwLjMgNDU1LjcgNTYuMyAzODEuNyA0Mi40IDI4OEwzMiAyODhjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsMTAuNCAwQzU2LjMgMTMwLjMgMTMwLjMgNTYuMyAyMjQgNDIuNEwyMjQgMzJjMC0xNy43IDE0LjMtMzIgMzItMzJ6TTEwNy40IDI4OGMxMi41IDU4LjMgNTguNCAxMDQuMSAxMTYuNiAxMTYuNmwwLTIwLjZjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMmwwIDIwLjZjNTguMy0xMi41IDEwNC4xLTU4LjQgMTE2LjYtMTE2LjZMMzg0IDI4OGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmwyMC42IDBDMzkyLjEgMTY1LjcgMzQ2LjMgMTE5LjkgMjg4IDEwNy40bDAgMjAuNmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTIwLjZDMTY1LjcgMTE5LjkgMTE5LjkgMTY1LjcgMTA3LjQgMjI0bDIwLjYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwtMjAuNiAwek0yNTYgMjI0YTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHpcIi8+PC9zdmc+JyxcbiAgICAgICdQbGF5ZXInOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCIgc3R5bGU9XCJ3aWR0aDogMS4yZW07IGhlaWdodDogMS4yZW07IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IG1hcmdpbi1yaWdodDogMTJweDtcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQgMjU2QTEyOCAxMjggMCAxIDAgMjI0IDBhMTI4IDEyOCAwIDEgMCAwIDI1NnptLTQ1LjcgNDhDNzkuOCAzMDQgMCAzODMuOCAwIDQ4Mi4zQzAgNDk4LjcgMTMuMyA1MTIgMjkuNyA1MTJsMzg4LjYgMGMxNi40IDAgMjkuNy0xMy4zIDI5LjctMjkuN0M0NDggMzgzLjggMzY4LjIgMzA0IDI2OS43IDMwNGwtOTEuNCAwelwiLz48L3N2Zz4nLFxuICAgICAgJ01vdmVtZW50JzogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiIHN0eWxlPVwid2lkdGg6IDEuMmVtOyBoZWlnaHQ6IDEuMmVtOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBtYXJnaW4tcmlnaHQ6IDEycHg7XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzIwIDQ4YTQ4IDQ4IDAgMSAwIC05NiAwIDQ4IDQ4IDAgMSAwIDk2IDB6TTEyNS43IDE3NS41YzkuOS05LjkgMjMuNC0xNS41IDM3LjUtMTUuNWMxLjkgMCAzLjggLjEgNS42IC4zTDEzNy42IDI1NGMtOS4zIDI4IDEuNyA1OC44IDI2LjggNzQuNWw4Ni4yIDUzLjktMjUuNCA4OC44Yy00LjkgMTcgNSAzNC43IDIyIDM5LjZzMzQuNy01IDM5LjYtMjJsMjguNy0xMDAuNGM1LjktMjAuNi0yLjYtNDIuNi0yMC43LTUzLjlMMjM4IDI5OWwzMC45LTgyLjQgNS4xIDEyLjNDMjg5IDI2NC43IDMyMy45IDI4OCAzNjIuNyAyODhsMjEuMyAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0yMS4zIDBjLTEyLjkgMC0yNC42LTcuOC0yOS41LTE5LjdsLTYuMy0xNWMtMTQuNi0zNS4xLTQ0LjEtNjEuOS04MC41LTczLjFsLTQ4LjctMTVjLTExLjEtMy40LTIyLjctNS4yLTM0LjQtNS4yYy0zMSAwLTYwLjggMTIuMy04Mi43IDM0LjNMNTcuNCAxNTMuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMGwyMy4xLTIzLjF6TTkxLjIgMzUyTDMyIDM1MmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmw2OS42IDBjMTkgMCAzNi4yLTExLjIgNDMuOS0yOC41TDE1NyAzNjEuNmwtOS41LTZjLTE3LjUtMTAuOS0zMC41LTI2LjgtMzcuOS00NC45TDkxLjIgMzUyelwiLz48L3N2Zz4nLFxuICAgIH07XG5cbiAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcnlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNhdGVnb3J5QnRuLmNsYXNzTmFtZSA9IGBzZXJlbml0eS1jYXRlZ29yeSAke2NhdGVnb3J5ID09PSB0aGlzLmFjdGl2ZUNhdGVnb3J5ID8gJ2FjdGl2ZScgOiAnJ31gO1xuICAgICAgXG4gICAgICBjb25zdCBpY29uID0gY2F0ZWdvcnlJY29uc1tjYXRlZ29yeV0gfHwgY2F0ZWdvcnlJY29uc1snVXRpbGl0eSddO1xuXG4gICAgICBjYXRlZ29yeUJ0bi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2VyZW5pdHktY2F0ZWdvcnktaWNvblwiPiR7aWNvbn08L3NwYW4+XG4gICAgICAgICR7Y2F0ZWdvcnl9XG4gICAgICBgO1xuICAgICAgXG4gICAgICBjYXRlZ29yeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcmVuaXR5LWNhdGVnb3J5JykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBcblxuICAgICAgICBjYXRlZ29yeUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgdGhpcy5hY3RpdmVTZXR0aW5nc01vZHVsZSA9IG51bGw7IFxuICAgICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gJyc7XG4gICAgICAgIHRoaXMuY2xvc2VIVURTZXR0aW5nc1BvcHVwKCk7IFxuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQobWFuYWdlcik7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChjYXRlZ29yeUJ0bik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzaWRlYmFyRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhckZvb3Rlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2lkZWJhci1mb290ZXInO1xuICBcbiAgICBjb25zdCBodWRFZGl0b3JCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBodWRFZGl0b3JCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNhdGVnb3J5IHNlcmVuaXR5LWh1ZC1lZGl0b3ItYnRuJztcbiAgICBodWRFZGl0b3JCdG4uaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJzZXJlbml0eS1jYXRlZ29yeS1pY29uXCIgc3R5bGU9XCJ3aWR0aDogMS4yZW07IG1hcmdpbi1yaWdodDogMTJweDtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNjQgMEMyOC43IDAgMCAyOC43IDAgNjRMMCAzNTJjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMTc2IDAtMTAuNyAzMkwxNjAgNDQ4Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnMxNC4zIDMyIDMyIDMybDI1NiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC02OS4zIDBMMzM2IDQxNmwxNzYgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTI4OGMwLTM1LjMtMjguNy02NC02NC02NEw2NCAwek01MTIgNjRsMCAyMjRMNjQgMjg4IDY0IDY0bDQ0OCAwelwiLz48L3N2Zz4gSFVEIEVkaXRvcmA7XG4gICAgaHVkRWRpdG9yQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pc0VkaXRpbmdIVUQgPSB0cnVlO1xuICAgICAgdGhpcy5yZW5kZXJIVURlZGl0b3IobWFuYWdlcik7XG4gICAgfSk7XG4gICAgc2lkZWJhckZvb3Rlci5hcHBlbmRDaGlsZChodWRFZGl0b3JCdG4pO1xuXG4gICAgY29uc3QgY29uZmlnQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uZmlnQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jYXRlZ29yeSBzZXJlbml0eS1jb25maWctYnRuJztcbiAgICBjb25maWdCdG4uaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJzZXJlbml0eS1jYXRlZ29yeS1pY29uXCIgc3R5bGU9XCJ3aWR0aDogMS4yZW07IG1hcmdpbi1yaWdodDogMTJweDtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NDAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzA4LjUgMTM1LjNjNy4xLTYuMyA5LjktMTYuMiA2LjItMjVjLTIuMy01LjMtNC44LTEwLjUtNy42LTE1LjVMMzA0IDg5LjRjLTMtNS02LjMtOS45LTkuOC0xNC42Yy01LjctNy42LTE1LjctMTAuMS0yNC43LTcuMWwtMjguMiA5LjNjLTEwLjctOC44LTIzLTE2LTM2LjItMjAuOUwxOTkgMjcuMWMtMS45LTkuMy05LjEtMTYuNy0xOC41LTE3LjhDMTczLjkgOC40IDE2Ny4yIDggMTYwLjQgOGwtLjcgMGMtNi44IDAtMTMuNSAuNC0yMC4xIDEuMmMtOS40IDEuMS0xNi42IDguNi0xOC41IDE3LjhMMTE1IDU2LjFjLTEzLjMgNS0yNS41IDEyLjEtMzYuMiAyMC45TDUwLjUgNjcuOGMtOS0zLTE5LS41LTI0LjcgNy4xYy0zLjUgNC43LTYuOCA5LjYtOS45IDE0LjZsLTMgNS4zYy0yLjggNS01LjMgMTAuMi03LjYgMTUuNmMtMy43IDguNy0uOSAxOC42IDYuMiAyNWwyMi4yIDE5LjhDMzIuNiAxNjEuOSAzMiAxNjguOSAzMiAxNzZzLjYgMTQuMSAxLjcgMjAuOUwxMS41IDIxNi43Yy03LjEgNi4zLTkuOSAxNi4yLTYuMiAyNWMyLjMgNS4zIDQuOCAxMC41IDcuNiAxNS42bDMgNS4yYzMgNS4xIDYuMyA5LjkgOS45IDE0LjZjNS43IDcuNiAxNS43IDEwLjEgMjQuNyA3LjFsMjguMi05LjNjMTAuNyA4LjggMjMgMTYgMzYuMiAyMC45bDYuMSAyOS4xYzEuOSA5LjMgOS4xIDE2LjcgMTguNSAxNy44YzYuNyAuOCAxMy41IDEuMiAyMC40IDEuMnMxMy43LS40IDIwLjQtMS4yYzkuNC0xLjEgMTYuNi04LjYgMTguNS0xNy44bDYuMS0yOS4xYzEzLjMtNSAyNS41LTEyLjEgMzYuMi0yMC45bDI4LjIgOS4zYzkgMyAxOSAuNSAyNC43LTcuMWMzLjUtNC43IDYuOC05LjUgOS44LTE0LjZsMy4xLTUuNGMyLjgtNSA1LjMtMTAuMiA3LjYtMTUuNWMzLjctOC43IC45LTE4LjYtNi4yLTI1bC0yMi4yLTE5LjhjMS4xLTYuOCAxLjctMTMuOCAxLjctMjAuOXMtLjYtMTQuMS0xLjctMjAuOWwyMi4yLTE5Ljh6TTExMiAxNzZhNDggNDggMCAxIDEgOTYgMCA0OCA0OCAwIDEgMSAtOTYgMHpNNTA0LjcgNTAwLjVjNi4zIDcuMSAxNi4yIDkuOSAyNSA2LjJjNS4zLTIuMyAxMC41LTQuOCAxNS41LTcuNmw1LjQtMy4xYzUtMyA5LjktNi4zIDE0LjYtOS44YzcuNi01LjcgMTAuMS0xNS43IDcuMS0yNC43bC05LjMtMjguMmM4LjgtMTAuNyAxNi0yMyAyMC45LTM2LjJsMjkuMS02LjFjOS4zLTEuOSAxNi43LTkuMSAxNy44LTE4LjVjLjgtNi43IDEuMi0xMy41IDEuMi0yMC40cy0uNC0xMy43LTEuMi0yMC40Yy0xLjEtOS40LTguNi0xNi42LTE3LjgtMTguNUw1ODMuOSAzMDdjLTUtMTMuMy0xMi4xLTI1LjUtMjAuOS0zNi4ybDkuMy0yOC4yYzMtOSAuNS0xOS03LjEtMjQuN2MtNC43LTMuNS05LjYtNi44LTE0LjYtOS45bC01LjMtM2MtNS0yLjgtMTAuMi01LjMtMTUuNi03LjZjLTguNy0zLjctMTguNi0uOS0yNSA2LjJsLTE5LjggMjIuMmMtNi44LTEuMS0xMy44LTEuNy0yMC45LTEuN3MtMTQuMSAuNi0yMC45IDEuN2wtMTkuOC0yMi4yYy02LjMtNy4xLTE2LjItOS45LTI1LTYuMmMtNS4zIDIuMy0xMC41IDQuOC0xNS42IDcuNmwtNS4yIDNjLTUuMSAzLTkuOSA2LjMtMTQuNiA5LjljLTcuNiA1LjctMTAuMSAxNS43LTcuMSAyNC43bDkuMyAyOC4yYy04LjggMTAuNy0xNiAyMy0yMC45IDM2LjJMMzE1LjEgMzEzYy05LjMgMS45LTE2LjcgOS4xLTE3LjggMTguNWMtLjggNi43LTEuMiAxMy41LTEuMiAyMC40cy40IDEzLjcgMS4yIDIwLjRjMS4xIDkuNCA4LjYgMTYuNiAxNy44IDE4LjVsMjkuMSA2LjFjNSAxMy4zIDEyLjEgMjUuNSAyMC45IDM2LjJsLTkuMyAyOC4yYy0zIDktLjUgMTkgNy4xIDI0LjdjNC43IDMuNSA5LjUgNi44IDE0LjYgOS44bDUuNCAzLjFjNSAyLjggMTAuMiA1LjMgMTUuNSA3LjZjOC43IDMuNyAxOC42IC45IDI1LTYuMmwxOS44LTIyLjJjNi44IDEuMSAxMy44IDEuNyAyMC45IDEuN3MxNC4xLS42IDIwLjktMS43bDE5LjggMjIuMnpNNDY0IDMwNGE0OCA0OCAwIDEgMSAwIDk2IDQ4IDQ4IDAgMSAxIDAtOTZ6XCIvPjwvc3ZnPiBTZXR0aW5nc2A7XG4gICAgY29uZmlnQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVWaWV3ID0gJ3NldHRpbmdzJztcbiAgICAgIHRoaXMudXBkYXRlQ29udGVudChtYW5hZ2VyKTtcbiAgICB9KTtcbiAgICBzaWRlYmFyRm9vdGVyLmFwcGVuZENoaWxkKGNvbmZpZ0J0bik7XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJGb290ZXIpO1xuICAgIFxuICAgIHJldHVybiBzaWRlYmFyO1xuICB9LFxuXG4gIGV4aXRIVURlZGl0b3IobWFuYWdlcikge1xuICAgIGlmICghdGhpcy5pc0VkaXRpbmdIVUQpIHJldHVybjtcblxuICAgIGNvbnN0IGVkaXRvck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktaHVkLWVkaXRvci1vdmVybGF5Jyk7XG4gICAgaWYgKGVkaXRvck92ZXJsYXkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlZGl0b3JPdmVybGF5KTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5pc0VkaXRpbmdIVUQgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlSFVEU2V0dGluZ3NQb3B1cCgpO1xuXG4gICAgaWYgKHRoaXMub3ZlcmxheSkge1xuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuekluZGV4ID0gJzEwMDAwMDAwMDAnO1xuICAgIH1cblxuICAgIG1hbmFnZXIubGlzdCgpLmZvckVhY2gobW9kID0+IHtcbiAgICAgIGlmIChtb2QuZW5hYmxlZCAmJiBtb2QuZWxlbWVudCkge1xuICAgICAgICBtb2QuZWxlbWVudC5zdHlsZS56SW5kZXggPSBtb2QubmFtZSA9PT0gJ0FybW9ySFVEJyB8fCBtb2QubmFtZSA9PT0gJ0NQU0NvdW50ZXInIHx8IG1vZC5uYW1lID09PSAnRlBTQ291bnRlcicgfHwgbW9kLm5hbWUgPT09ICdJbnRlcmZhY2UnID8gOTk5NyA6ICcnO1xuICAgICAgICBtb2QuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICBtb2QuZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnJztcbiAgICAgICAgbW9kLmVsZW1lbnQub25tb3VzZWRvd24gPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlckhVRGVkaXRvcihtYW5hZ2VyKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaWYgKHRoaXMub3ZlcmxheSkge1xuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuekluZGV4ID0gJy0xJztcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0b3JPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdG9yT3ZlcmxheS5jbGFzc05hbWUgPSAnc2VyZW5pdHktaHVkLWVkaXRvci1vdmVybGF5JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVkaXRvck92ZXJsYXkpO1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1odWQtZ3JpZCc7XG4gICAgZWRpdG9yT3ZlcmxheS5hcHBlbmRDaGlsZChncmlkKTtcbiAgICBcblxuICAgIG1hbmFnZXIubGlzdCgpLmZvckVhY2gobW9kID0+IHtcbiAgICAgIGlmIChtb2QuZW5hYmxlZCAmJiBtb2QuZWxlbWVudCkge1xuICAgICAgICBtb2QuZWxlbWVudC5zdHlsZS56SW5kZXggPSAxMDAwMTtcbiAgICAgICAgbW9kLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICAgICAgdGhpcy5tYWtlRWxlbWVudERyYWdnYWJsZShtb2QuZWxlbWVudCwgbW9kLCBtYW5hZ2VyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFkZCBEb25lIGJ1dHRvblxuICAgIGNvbnN0IGRvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkb25lQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1odWQtZG9uZS1idG4nO1xuICAgIGRvbmVCdG4udGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuZXhpdEhVRGVkaXRvcihtYW5hZ2VyKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzEwMDAwMDAwMDEnO1xuICAgIH0pO1xuICAgIGVkaXRvck92ZXJsYXkuYXBwZW5kQ2hpbGQoZG9uZUJ0bik7XG4gIH0sXG5cbiAgbWFrZUVsZW1lbnREcmFnZ2FibGUoZWxlbWVudCwgbW9kdWxlLCBtYW5hZ2VyKSB7XG4gICAgaWYgKCFlbGVtZW50IHx8IG1vZHVsZS5uYW1lID09PSAnQ2xpY2tHVUknKSByZXR1cm47XG4gICAgbGV0IHBvczEgPSAwLCBwb3MyID0gMCwgcG9zMyA9IDAsIHBvczQgPSAwO1xuICAgIFxuICAgIGNvbnN0IGRyYWdNb3VzZURvd24gPSAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgXG4gICAgICBwb3MzID0gZS5jbGllbnRYO1xuICAgICAgcG9zNCA9IGUuY2xpZW50WTtcblxuICAgICAgLy8gV2hlbiBkcmFnZ2luZyBzdGFydHMsIHN3aXRjaCB0byBwaXhlbC1iYXNlZCBwb3NpdGlvbmluZ1xuICAgICAgLy8gdG8gcHJldmVudCBjb25mbGljdHMgd2l0aCBwcm9wZXJ0aWVzIGxpa2UgJ2JvdHRvbScgb3IgJ3JpZ2h0Jy5cbiAgICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtyZWN0LnRvcH1weGA7XG4gICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtyZWN0LmxlZnR9cHhgO1xuICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSAnYXV0byc7XG4gICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gJ2F1dG8nO1xuICAgICAgXG4gICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBjbG9zZURyYWdFbGVtZW50O1xuICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBlbGVtZW50RHJhZztcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGVsZW1lbnREcmFnID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbmV3IGN1cnNvciBwb3NpdGlvblxuICAgICAgcG9zMSA9IHBvczMgLSBlLmNsaWVudFg7XG4gICAgICBwb3MyID0gcG9zNCAtIGUuY2xpZW50WTtcbiAgICAgIHBvczMgPSBlLmNsaWVudFg7XG4gICAgICBwb3M0ID0gZS5jbGllbnRZO1xuICAgICAgLy8gU2V0IHRoZSBlbGVtZW50J3MgbmV3IHBvc2l0aW9uXG4gICAgICBsZXQgbmV3VG9wID0gZWxlbWVudC5vZmZzZXRUb3AgLSBwb3MyO1xuICAgICAgbGV0IG5ld0xlZnQgPSBlbGVtZW50Lm9mZnNldExlZnQgLSBwb3MxO1xuXG4gICAgICAvLyBHZXQgc2NyZWVuIGFuZCBlbGVtZW50IGRpbWVuc2lvbnNcbiAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBjb25zdCBlbGVtZW50V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAvLyBBZGQgYm91bmRhcnkgY2hlY2tzIHRvIHByZXZlbnQgZ29pbmcgb2ZmLXNjcmVlblxuICAgICAgbmV3TGVmdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG5ld0xlZnQsIHNjcmVlbldpZHRoIC0gZWxlbWVudFdpZHRoKSk7XG4gICAgICBuZXdUb3AgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihuZXdUb3AsIHNjcmVlbkhlaWdodCAtIGVsZW1lbnRIZWlnaHQpKTtcblxuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtuZXdUb3B9cHhgO1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bmV3TGVmdH1weGA7XG5cbiAgICAgIC8vIE1vdmUgcG9wdXAgd2l0aCB0aGUgbW9kdWxlIGFuZCBjaGVjayBpdHMgYm91bmRhcmllc1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSFVEU2V0dGluZ3NQb3B1cCAmJiB0aGlzLmFjdGl2ZUhVRFNldHRpbmdzUG9wdXAubW9kdWxlTmFtZSA9PT0gbW9kdWxlLm5hbWUpIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLmFjdGl2ZUhVRFNldHRpbmdzUG9wdXAuZWxlbWVudDtcbiAgICAgICAgY29uc3QgcG9wdXBXaWR0aCA9IHBvcHVwLm9mZnNldFdpZHRoO1xuICAgICAgICBsZXQgcG9wdXBMZWZ0ID0gbmV3TGVmdCArIGVsZW1lbnRXaWR0aCArIDEwO1xuXG4gICAgICAgIC8vIEZsaXAgcG9wdXAgdG8gdGhlIG90aGVyIHNpZGUgaWYgaXQgZ29lcyBvZmYtc2NyZWVuXG4gICAgICAgIGlmIChwb3B1cExlZnQgKyBwb3B1cFdpZHRoID4gc2NyZWVuV2lkdGgpIHtcbiAgICAgICAgICBwb3B1cExlZnQgPSBuZXdMZWZ0IC0gcG9wdXBXaWR0aCAtIDEwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBwb3B1cC5zdHlsZS50b3AgPSBgJHtuZXdUb3B9cHhgO1xuICAgICAgICBwb3B1cC5zdHlsZS5sZWZ0ID0gYCR7cG9wdXBMZWZ0fXB4YDtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGNsb3NlRHJhZ0VsZW1lbnQgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgbWFuYWdlci51cGRhdGVNb2R1bGVQb3NpdGlvbihtb2R1bGUubmFtZSwgZWxlbWVudC5vZmZzZXRMZWZ0LCBlbGVtZW50Lm9mZnNldFRvcCk7XG4gICAgfTtcblxuICAgIGVsZW1lbnQub25tb3VzZWRvd24gPSBkcmFnTW91c2VEb3duO1xuICAgIGVsZW1lbnQub25jb250ZXh0bWVudSA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNob3dIVURTZXR0aW5nc1BvcHVwKGUsIG1vZHVsZSwgbWFuYWdlciwgZWxlbWVudCk7XG4gICAgfTtcbiAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgfSxcblxuICBzaG93SFVEU2V0dGluZ3NQb3B1cChlLCBtb2R1bGUsIG1hbmFnZXIsIGVsZW1lbnQpIHtcbiAgICB0aGlzLmNsb3NlSFVEU2V0dGluZ3NQb3B1cCgpOyBcblxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXAuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWh1ZC1zZXR0aW5ncy1wb3B1cCc7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1odWQtcG9wdXAtaGVhZGVyJztcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG1vZHVsZS5uYW1lO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWh1ZC1wb3B1cC1jbG9zZS1idG4nO1xuICAgIGNsb3NlQnRuLmlubmVySFRNTCA9ICcmdGltZXM7JztcbiAgICBjbG9zZUJ0bi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZUhVRFNldHRpbmdzUG9wdXAoKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IHNldHRpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0dGluZ3NDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWh1ZC1wb3B1cC1ib2R5JztcbiAgICBtb2R1bGUuc2V0dGluZ3MuZm9yRWFjaChzZXR0aW5nID0+IHtcbiAgICAgIGNvbnN0IHNldHRpbmdFbGVtZW50ID0gdGhpcy5jcmVhdGVTZXR0aW5nRWxlbWVudChtb2R1bGUsIHNldHRpbmcsIG1hbmFnZXIpO1xuICAgICAgaWYgKHNldHRpbmdFbGVtZW50KSB7XG4gICAgICAgIHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChzZXR0aW5nc0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWh1ZC1wb3B1cC1mb290ZXInO1xuICAgIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXRCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWh1ZC1wb3B1cC1yZXNldC1idG4nO1xuICAgIHJlc2V0QnRuLnRleHRDb250ZW50ID0gJ1Jlc2V0IHRvIERlZmF1bHRzJztcbiAgICByZXNldEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbWFuYWdlci5yZXNldE1vZHVsZVNldHRpbmdzKG1vZHVsZS5uYW1lKTtcbiAgICAgIHRoaXMuc2hvd0hVRFNldHRpbmdzUG9wdXAoZSwgbWFuYWdlci5nZXQobW9kdWxlLm5hbWUpLCBtYW5hZ2VyLCBlbGVtZW50KTtcbiAgICB9O1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChyZXNldEJ0bik7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xuICAgIFxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgcG9wdXBXaWR0aCA9IHBvcHVwLm9mZnNldFdpZHRoO1xuICAgIGxldCBwb3B1cExlZnQgPSByZWN0LmxlZnQgKyByZWN0LndpZHRoICsgMTA7XG5cbiAgICAvLyBDaGVjayBpZiBwb3B1cCBnb2VzIG9mZi1zY3JlZW5cbiAgICBpZiAocG9wdXBMZWZ0ICsgcG9wdXBXaWR0aCA+IHNjcmVlbldpZHRoKSB7XG4gICAgICBwb3B1cExlZnQgPSByZWN0LmxlZnQgLSBwb3B1cFdpZHRoIC0gMTA7XG4gICAgfVxuXG4gICAgcG9wdXAuc3R5bGUudG9wID0gYCR7cmVjdC50b3B9cHhgO1xuICAgIHBvcHVwLnN0eWxlLmxlZnQgPSBgJHtwb3B1cExlZnR9cHhgO1xuXG4gICAgdGhpcy5hY3RpdmVIVURTZXR0aW5nc1BvcHVwID0geyBlbGVtZW50OiBwb3B1cCwgbW9kdWxlTmFtZTogbW9kdWxlLm5hbWUgfTtcbiAgfSxcblxuICBjbG9zZUhVRFNldHRpbmdzUG9wdXAoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlSFVEU2V0dGluZ3NQb3B1cCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmFjdGl2ZUhVRFNldHRpbmdzUG9wdXAuZWxlbWVudCk7XG4gICAgICB0aGlzLmFjdGl2ZUhVRFNldHRpbmdzUG9wdXAgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICBjcmVhdGVDb250ZW50KG1hbmFnZXIpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29udGVudCc7XG4gICAgXG4gICAgLy8gSW5pdGlhbCBjb250ZW50IHBvcHVsYXRpb25cbiAgICB0aGlzLnBvcHVsYXRlTW9kdWxlc0NvbnRlbnQoY29udGVudCwgbWFuYWdlcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH0sXG5cbiAgdXBkYXRlQ29udGVudChtYW5hZ2VyKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVWaWV3ID09PSAnc2V0dGluZ3MnKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3Mtdmlldy1hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NldHRpbmdzLXZpZXctYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlU2V0dGluZ3NNb2R1bGUpIHtcbiAgICAgIHRoaXMucG9wdWxhdGVTZXR0aW5nc0NvbnRlbnQoY29udGVudCwgbWFuYWdlcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZVZpZXcgPT09ICdzZXR0aW5ncycpIHtcbiAgICAgIHRoaXMucmVuZGVyU2V0dGluZ3NTY3JlZW4oY29udGVudCwgbWFuYWdlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9wdWxhdGVNb2R1bGVzQ29udGVudChjb250ZW50LCBtYW5hZ2VyKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyU2V0dGluZ3NTY3JlZW4oY29udGVudCwgbWFuYWdlcikge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZ3MtaGVhZGVyJztcbiAgICBcbiAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYmFja0J0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktYmFjay1idG4nO1xuICAgIGJhY2tCdG4uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiIHN0eWxlPVwid2lkdGg6IDAuN2VtOyBoZWlnaHQ6IDAuN2VtOyBtYXJnaW4tcmlnaHQ6IDhweDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk05LjQgMjMzLjRjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zbDE5MiAxOTJjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBzMTIuNS0zMi44IDAtNDUuM0w3Ny4zIDI1NiAyNDYuNiA4Ni42YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zcy0zMi44LTEyLjUtNDUuMyAwbC0xOTIgMTkyelwiLz48L3N2Zz4gQmFjayc7XG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVWaWV3ID0gJ21vZHVsZXMnO1xuICAgICAgICB0aGlzLmFjdGl2ZVNldHRpbmdzTW9kdWxlID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KG1hbmFnZXIpO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1NldHRpbmdzJztcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChiYWNrQnRuKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IHNldHRpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0dGluZ3NDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbmZpZy1zY3JlZW4tY29udGVudCc7XG5cbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFicy5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29uZmlnLXRhYnMtdmVydGljYWwnO1xuICAgIHRhYnMuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2VyZW5pdHktY29uZmlnLXRhYiBhY3RpdmVcIiBkYXRhLXRhYj1cIlRoZW1lc1wiPlRoZW1lczwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2VyZW5pdHktY29uZmlnLXRhYlwiIGRhdGEtdGFiPVwiQ29uZmlnXCI+Q29uZmlnPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzZXJlbml0eS1jb25maWctdGFiXCIgZGF0YS10YWI9XCJTY3JpcHRpbmdcIj5TY3JpcHRpbmc8L2J1dHRvbj5cbiAgICBgO1xuICAgIHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYnMpO1xuICAgIFxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJDb250ZW50LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctdGFiLWNvbnRlbnQnO1xuICAgIHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzZXR0aW5nc0NvbnRhaW5lcik7XG5cbiAgICB0YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJlbml0eS1jb25maWctdGFiJykuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJlbml0eS1jb25maWctdGFiJykuZm9yRWFjaCh0ID0+IHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb25maWdUYWIgPSB0YWIuZGF0YXNldC50YWI7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckNvbmZpZ0NvbnRlbnQobWFuYWdlcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXJDb25maWdDb250ZW50KG1hbmFnZXIpO1xuICB9LFxuXG4gIHJlbmRlckNvbmZpZ0NvbnRlbnQobWFuYWdlcikge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LWNvbmZpZy10YWItY29udGVudCcpO1xuICAgIGlmICghY29udGVudCkgcmV0dXJuO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBzd2l0Y2ggKHRoaXMuYWN0aXZlQ29uZmlnVGFiKSB7XG4gICAgICAgIGNhc2UgJ1RoZW1lcyc6XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRoZW1lc0NvbnRlbnQoY29udGVudCwgbWFuYWdlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQ29uZmlnJzpcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ29uZmlnU3ViQ29udGVudChjb250ZW50LCBtYW5hZ2VyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTY3JpcHRpbmcnOlxuICAgICAgICAgICAgdGhpcy5yZW5kZXJTY3JpcHRpbmdDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlclRoZW1lc0NvbnRlbnQoY29udGVudCwgbWFuYWdlcikge1xuICAgIGNvbnN0IHRoZW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhlbWVDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRoZW1lLWVkaXRvcic7XG5cbiAgICAvLyAtLSBTZWN0aW9uOiBBY2NlbnQgQ29sb3IgLS1cbiAgICBjb25zdCBhY2NlbnRIZWFkZXIgPSB0aGlzLmNyZWF0ZVNlY3Rpb25IZWFkZXIoJ0FjY2VudCBDb2xvcicsICdTZXRzIHRoZSBtYWluIGNvbG9yIGZvciBVSSBlbGVtZW50cy4nKTtcbiAgICB0aGVtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhY2NlbnRIZWFkZXIpO1xuXG4gICAgY29uc3QgYWNjZW50Q29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjY2VudENvbnRyb2wuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRoZW1lLWNvbnRyb2wnO1xuICAgIGNvbnN0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb2xvclBpY2tlci50eXBlID0gJ2NvbG9yJztcbiAgICBjb2xvclBpY2tlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktdGhlbWUtY29sb3ItcGlja2VyJztcbiAgICBjb2xvclBpY2tlci52YWx1ZSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXByaW1hcnknKS50cmltKCk7XG4gICAgXG4gICAgY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDb2xvciA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeScsIG5ld0NvbG9yKTtcbiAgICAgICAgLy8gWW91IG1pZ2h0IG5lZWQgYSBtb3JlIHJvYnVzdCB3YXkgdG8gaGFuZGxlIHRoZSBkYXJrZXIgc2hhZGVcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnktZGFyaycsIHRoaXMuc2hhZGVDb2xvcihuZXdDb2xvciwgLTIwKSk7XG4gICAgICAgIG1hbmFnZXIuc2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICB9KTtcbiAgICBhY2NlbnRDb250cm9sLmFwcGVuZENoaWxkKGNvbG9yUGlja2VyKTtcbiAgICB0aGVtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhY2NlbnRDb250cm9sKTtcblxuICAgIC8vIC0tIFNlY3Rpb246IFBhbmVsIFN0eWxlIC0tXG4gICAgY29uc3QgcGFuZWxIZWFkZXIgPSB0aGlzLmNyZWF0ZVNlY3Rpb25IZWFkZXIoJ1BhbmVsIFN0eWxlJywgJ0N1c3RvbWl6ZSB0aGUgbG9vayBvZiBVSSBiYWNrZ3JvdW5kcy4nKTtcbiAgICB0aGVtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYW5lbEhlYWRlcik7XG5cbiAgICBjb25zdCBwYW5lbENvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFuZWxDb250cm9scy5jbGFzc05hbWUgPSAnc2VyZW5pdHktdGhlbWUtcGFuZWwtY29udHJvbHMnO1xuXG4gICAgLy8gUGFuZWwgQ29sb3JcbiAgICBjb25zdCBwYW5lbENvbG9yQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhbmVsQ29sb3JDb250cm9sLmNsYXNzTmFtZSA9ICdzZXJlbml0eS10aGVtZS1jb250cm9sLWdyb3VwJztcbiAgICBwYW5lbENvbG9yQ29udHJvbC5pbm5lckhUTUwgPSBgPGxhYmVsPlBhbmVsIENvbG9yPC9sYWJlbD5gO1xuICAgIGNvbnN0IHBhbmVsQ29sb3JQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHBhbmVsQ29sb3JQaWNrZXIudHlwZSA9ICdjb2xvcic7XG4gICAgcGFuZWxDb2xvclBpY2tlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktdGhlbWUtY29sb3ItcGlja2VyJztcbiAgICBjb25zdCBpbml0aWFsUGFuZWxDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXBhbmVsLWJhc2UnKS50cmltKCk7XG4gICAgcGFuZWxDb2xvclBpY2tlci52YWx1ZSA9IGluaXRpYWxQYW5lbENvbG9yO1xuXG4gICAgcGFuZWxDb2xvclBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wYW5lbC1iYXNlJywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBtYW5hZ2VyLnNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgfSk7XG4gICAgcGFuZWxDb2xvckNvbnRyb2wuYXBwZW5kQ2hpbGQocGFuZWxDb2xvclBpY2tlcik7XG4gICAgcGFuZWxDb250cm9scy5hcHBlbmRDaGlsZChwYW5lbENvbG9yQ29udHJvbCk7XG5cbiAgICAvLyBQYW5lbCBPcGFjaXR5XG4gICAgY29uc3QgcGFuZWxPcGFjaXR5Q29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhbmVsT3BhY2l0eUNvbnRyb2wuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRoZW1lLWNvbnRyb2wtZ3JvdXAnO1xuICAgIHBhbmVsT3BhY2l0eUNvbnRyb2wuaW5uZXJIVE1MID0gYDxsYWJlbD5QYW5lbCBPcGFjaXR5PC9sYWJlbD5gO1xuICAgIGNvbnN0IHBhbmVsT3BhY2l0eVNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcGFuZWxPcGFjaXR5U2xpZGVyLnR5cGUgPSAncmFuZ2UnO1xuICAgIHBhbmVsT3BhY2l0eVNsaWRlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2xpZGVyJztcbiAgICBwYW5lbE9wYWNpdHlTbGlkZXIubWluID0gMDtcbiAgICBwYW5lbE9wYWNpdHlTbGlkZXIubWF4ID0gMTtcbiAgICBwYW5lbE9wYWNpdHlTbGlkZXIuc3RlcCA9IDAuMDE7XG4gICAgY29uc3QgaW5pdGlhbE9wYWNpdHkgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wYW5lbC1vcGFjaXR5JykudHJpbSgpO1xuICAgIHBhbmVsT3BhY2l0eVNsaWRlci52YWx1ZSA9IGluaXRpYWxPcGFjaXR5O1xuXG4gICAgcGFuZWxPcGFjaXR5U2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXBhbmVsLW9wYWNpdHknLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIG1hbmFnZXIuc2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICB9KTtcbiAgICBwYW5lbE9wYWNpdHlDb250cm9sLmFwcGVuZENoaWxkKHBhbmVsT3BhY2l0eVNsaWRlcik7XG4gICAgcGFuZWxDb250cm9scy5hcHBlbmRDaGlsZChwYW5lbE9wYWNpdHlDb250cm9sKTtcblxuICAgIHRoZW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhbmVsQ29udHJvbHMpO1xuXG4gICAgLy8gLS0gU2VjdGlvbjogUHJlLW1hZGUgVGhlbWVzIC0tXG4gICAgY29uc3QgdGhlbWVzSGVhZGVyID0gdGhpcy5jcmVhdGVTZWN0aW9uSGVhZGVyKCdUaGVtZXMnLCAnU2VsZWN0IGZyb20gYSBwcmUtbWFkZSBjb2xvciBzY2hlbWUuJyk7XG4gICAgdGhlbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhlbWVzSGVhZGVyKTtcblxuICAgIGNvbnN0IHRoZW1lc0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGVtZXNHcmlkLmNsYXNzTmFtZSA9ICdzZXJlbml0eS10aGVtZXMtZ3JpZCc7XG4gICAgXG4gICAgY29uc3QgdGhlbWVzID0gW1xuICAgICAgICB7IG5hbWU6ICdTZXJlbml0eScsIGNvbG9yOiAnIzVFNzJFQicgfSxcbiAgICAgICAgeyBuYW1lOiAnU3Vuc2V0JywgY29sb3I6ICcjRTU0QjRCJyB9LFxuICAgICAgICB7IG5hbWU6ICdFbWVyYWxkJywgY29sb3I6ICcjM2Y5YTU2JyB9LFxuICAgICAgICB7IG5hbWU6ICdHb2xkZW5yb2QnLCBjb2xvcjogJyNjZGEzNGEnIH0sXG4gICAgICAgIHsgbmFtZTogJ0FtZXRoeXN0JywgY29sb3I6ICcjOWI1OWI2JyB9LFxuICAgIF07XG5cbiAgICB0aGVtZXMuZm9yRWFjaCh0aGVtZSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW1lQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGVtZUNhcmQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRoZW1lLWNhcmQnO1xuICAgICAgICB0aGVtZUNhcmQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJzZXJlbml0eS10aGVtZS1wcmV2aWV3XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9yfTtcIj48L2Rpdj48c3Bhbj4ke3RoZW1lLm5hbWV9PC9zcGFuPmA7XG4gICAgICAgIHRoZW1lQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgdGhlbWUuY29sb3IpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnktZGFyaycsIHRoaXMuc2hhZGVDb2xvcih0aGVtZS5jb2xvciwgLTIwKSk7XG4gICAgICAgICAgICBjb2xvclBpY2tlci52YWx1ZSA9IHRoZW1lLmNvbG9yO1xuICAgICAgICAgICAgbWFuYWdlci5zYXZlQ29uZmlndXJhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhlbWVzR3JpZC5hcHBlbmRDaGlsZCh0aGVtZUNhcmQpO1xuICAgIH0pO1xuXG4gICAgdGhlbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhlbWVzR3JpZCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGVtZUNvbnRhaW5lcik7XG4gIH0sXG5cbiAgY3JlYXRlU2VjdGlvbkhlYWRlcih0aXRsZSwgc3VidGl0bGUpIHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZWN0aW9uLXN1YmhlYWRlcic7XG4gICAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktc3ViaGVhZGVyLXRpdGxlXCI+JHt0aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlcmVuaXR5LXN1YmhlYWRlci1zdWJ0aXRsZVwiPiR7c3VidGl0bGV9PC9kaXY+XG4gICAgICBgO1xuICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgfSxcbiAgICBcbiAgcmVuZGVyQ29uZmlnU3ViQ29udGVudChjb250ZW50LCBtYW5hZ2VyKSB7XG4gICAgY29uc3QgY29uZmlnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uZmlnQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctZWRpdG9yJztcblxuICAgIC8vIC0tLSBMRUZUIENPTFVNTiAtLS1cbiAgICBjb25zdCBsZWZ0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdENvbHVtbi5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29uZmlnLWNvbHVtbic7XG5cbiAgICAvLyAtLSBTZWN0aW9uOiBHZW5lcmFsIC0tXG4gICAgY29uc3QgZ2VuZXJhbEhlYWRlciA9IHRoaXMuY3JlYXRlU2VjdGlvbkhlYWRlcignR2VuZXJhbCcsICdNYW5hZ2UgaG93IHlvdXIgY29uZmlndXJhdGlvbiBpcyBoYW5kbGVkLicpO1xuICAgIGxlZnRDb2x1bW4uYXBwZW5kQ2hpbGQoZ2VuZXJhbEhlYWRlcik7XG5cbiAgICBjb25zdCBzZXR0aW5nc0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR0aW5nc0dyaWQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbmZpZy1jb250cm9scy1ncmlkJztcbiAgICBcbiAgICBjb25zdCBhdXRvU2F2ZVNldHRpbmcgPSB0aGlzLmNyZWF0ZVRvZ2dsZVNldHRpbmcoJ0F1dG8gU2F2ZScsICdBdXRvbWF0aWNhbGx5IHNhdmUgY2hhbmdlcy4nLCBtYW5hZ2VyLmF1dG9TYXZlLCAodmFsdWUpID0+IHtcbiAgICAgIG1hbmFnZXIuYXV0b1NhdmUgPSB2YWx1ZTtcbiAgICAgIG1hbmFnZXIuZm9yY2VTYXZlQ29uZmlndXJhdGlvbigpO1xuICAgIH0pO1xuICAgIHNldHRpbmdzR3JpZC5hcHBlbmRDaGlsZChhdXRvU2F2ZVNldHRpbmcpO1xuXG4gICAgY29uc3QgYXV0b0xvYWRTZXR0aW5nID0gdGhpcy5jcmVhdGVUb2dnbGVTZXR0aW5nKCdBdXRvIExvYWQnLCAnTG9hZCBjb25maWcgb24gc3RhcnR1cC4nLCBtYW5hZ2VyLmF1dG9Mb2FkLCAodmFsdWUpID0+IHtcbiAgICAgIG1hbmFnZXIuYXV0b0xvYWQgPSB2YWx1ZTtcbiAgICAgIG1hbmFnZXIuZm9yY2VTYXZlQ29uZmlndXJhdGlvbigpO1xuICAgIH0pO1xuICAgIHNldHRpbmdzR3JpZC5hcHBlbmRDaGlsZChhdXRvTG9hZFNldHRpbmcpO1xuICAgIGxlZnRDb2x1bW4uYXBwZW5kQ2hpbGQoc2V0dGluZ3NHcmlkKTtcbiAgICBcbiAgICAvLyAtLSBTZWN0aW9uOiBNYW51YWwgQ29udHJvbCAtLVxuICAgIGNvbnN0IG1hbnVhbEhlYWRlciA9IHRoaXMuY3JlYXRlU2VjdGlvbkhlYWRlcignTWFudWFsIENvbnRyb2wnLCAnTWFudWFsbHkgc2F2ZSBvciBsb2FkIHRoZSBjdXJyZW50IGNvbmZpZy4nKTtcbiAgICBsZWZ0Q29sdW1uLmFwcGVuZENoaWxkKG1hbnVhbEhlYWRlcik7XG5cbiAgICBjb25zdCBtYW51YWxCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFudWFsQnV0dG9ucy5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29uZmlnLW1hbnVhbC1idXR0b25zJztcblxuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1idG4nO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnRm9yY2UgU2F2ZSc7XG4gICAgc2F2ZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbWFuYWdlci5mb3JjZVNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NhdmVkISc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdGb3JjZSBTYXZlJzsgfSwgMjAwMCk7XG4gICAgfTtcbiAgICBtYW51YWxCdXR0b25zLmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuICAgIFxuICAgIGNvbnN0IGxvYWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsb2FkQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1idG4nO1xuICAgIGxvYWRCdG4udGV4dENvbnRlbnQgPSAnRm9yY2UgTG9hZCc7XG4gICAgbG9hZEJ0bi5vbmNsaWNrID0gKCkgPT4gbWFuYWdlci5sb2FkQ29uZmlndXJhdGlvbigpO1xuICAgIG1hbnVhbEJ1dHRvbnMuYXBwZW5kQ2hpbGQobG9hZEJ0bik7XG5cbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2V0QnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1idG4gc2VyZW5pdHktYnRuLWRhbmdlcic7XG4gICAgcmVzZXRCdG4udGV4dENvbnRlbnQgPSAnUmVzZXQgQWxsJztcbiAgICByZXNldEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2V0IGFsbCBzZXR0aW5ncyB0byB0aGVpciBkZWZhdWx0cz8gVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS4nKSkge1xuICAgICAgICAgICAgbWFuYWdlci5sb2FkQ29uZmlndXJhdGlvbih7fSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBtYW51YWxCdXR0b25zLmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcblxuICAgIGxlZnRDb2x1bW4uYXBwZW5kQ2hpbGQobWFudWFsQnV0dG9ucyk7XG4gICAgXG4gICAgY29uZmlnQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRDb2x1bW4pO1xuXG4gICAgLy8gLS0tIFJJR0hUIENPTFVNTiAtLS1cbiAgICBjb25zdCByaWdodENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0Q29sdW1uLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctY29sdW1uJztcblxuICAgIGNvbnN0IGltcG9ydEV4cG9ydEhlYWRlciA9IHRoaXMuY3JlYXRlU2VjdGlvbkhlYWRlcignSW1wb3J0IC8gRXhwb3J0JywgJ1NoYXJlIHlvdXIgY29uZmlndXJhdGlvbiB3aXRoIG90aGVycy4nKTtcbiAgICByaWdodENvbHVtbi5hcHBlbmRDaGlsZChpbXBvcnRFeHBvcnRIZWFkZXIpO1xuXG4gICAgY29uc3QgaW1wb3J0RXhwb3J0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1wb3J0RXhwb3J0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1pbXBvcnQtZXhwb3J0LWJ1dHRvbnMnO1xuICAgIFxuICAgIGNvbnN0IGltcG9ydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGltcG9ydEJ0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktYnRuIHNlcmVuaXR5LWJ0bi1wcmltYXJ5JztcbiAgICBpbXBvcnRCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLXVwbG9hZFwiPjwvaT4gSW1wb3J0IGZyb20gRmlsZWA7XG4gICAgaW1wb3J0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgICAgaW5wdXQuYWNjZXB0ID0gJy5qc29uJztcbiAgICAgIGlucHV0Lm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICBpZiAoIWZpbGUpIHJldHVybjtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBtYW5hZ2VyLmltcG9ydENvbmZpZ3VyYXRpb24oZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0NvbmZpZ3VyYXRpb24gaW1wb3J0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBpbXBvcnQgY29uZmlndXJhdGlvbi4gVGhlIGZpbGUgbWF5IGJlIGNvcnJ1cHQgb3IgaW1wcm9wZXJseSBmb3JtYXR0ZWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgICAgfTtcbiAgICAgIGlucHV0LmNsaWNrKCk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBleHBvcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBleHBvcnRCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWJ0bic7XG4gICAgZXhwb3J0QnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1kb3dubG9hZFwiPjwvaT4gRXhwb3J0IHRvIEZpbGVgO1xuICAgIGV4cG9ydEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgY29uZmlnID0gbWFuYWdlci5leHBvcnRDb25maWd1cmF0aW9uKCk7XG4gICAgICBjb25zdCBjb25maWdTdHIgPSBKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDIpO1xuXG4gICAgICAvLyBDb3B5IHRvIGNsaXBib2FyZFxuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29uZmlnU3RyKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLnNob3coe1xuICAgICAgICAgICAgdGl0bGU6ICdDb25maWcgRXhwb3J0ZWQnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0NvbmZpZ3VyYXRpb24gY29waWVkIHRvIGNsaXBib2FyZC4nLFxuICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIERvd25sb2FkIGFzIGZpbGVcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY29uZmlnU3RyXSwge3R5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBhLmhyZWYgPSB1cmw7XG4gICAgICBhLmRvd25sb2FkID0gJ3NlcmVuaXR5LWNvbmZpZy5qc29uJztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICBhLmNsaWNrKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIH07XG5cbiAgICBpbXBvcnRFeHBvcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1wb3J0QnRuKTtcbiAgICBpbXBvcnRFeHBvcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZXhwb3J0QnRuKTtcblxuICAgIHJpZ2h0Q29sdW1uLmFwcGVuZENoaWxkKGltcG9ydEV4cG9ydENvbnRhaW5lcik7XG5cbiAgICBjb25maWdDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRDb2x1bW4pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29uZmlnQ29udGFpbmVyKTtcbiAgfSxcblxuICByZW5kZXJTY3JpcHRpbmdDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpIHtcbiAgICAvLyBQbGFjZWhvbGRlciBmb3IgU2NyaXB0aW5nXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInNlcmVuaXR5LXBsYWNlaG9sZGVyXCI+U2NyaXB0aW5nIGNvbWluZyBzb29uLi4uPC9kaXY+YDtcbiAgfSxcblxuICBzaGFkZUNvbG9yKGNvbG9yLCBwZXJjZW50KSB7XG4gICAgbGV0IFIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwzKSwxNik7XG4gICAgbGV0IEcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMyw1KSwxNik7XG4gICAgbGV0IEIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoNSw3KSwxNik7XG5cbiAgICBSID0gcGFyc2VJbnQoUiAqICgxMDAgKyBwZXJjZW50KSAvIDEwMCk7XG4gICAgRyA9IHBhcnNlSW50KEcgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xuICAgIEIgPSBwYXJzZUludChCICogKDEwMCArIHBlcmNlbnQpIC8gMTAwKTtcblxuICAgIFIgPSAoUjwyNTUpP1I6MjU1OyAgXG4gICAgRyA9IChHPDI1NSk/RzoyNTU7ICBcbiAgICBCID0gKEI8MjU1KT9COjI1NTsgIFxuXG4gICAgY29uc3QgUlIgPSAoKFIudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrUi50b1N0cmluZygxNik6Ui50b1N0cmluZygxNikpO1xuICAgIGNvbnN0IEdHID0gKChHLnRvU3RyaW5nKDE2KS5sZW5ndGg9PTEpP1wiMFwiK0cudG9TdHJpbmcoMTYpOkcudG9TdHJpbmcoMTYpKTtcbiAgICBjb25zdCBCQiA9ICgoQi50b1N0cmluZygxNikubGVuZ3RoPT0xKT9cIjBcIitCLnRvU3RyaW5nKDE2KTpCLnRvU3RyaW5nKDE2KSk7XG5cbiAgICByZXR1cm4gXCIjXCIrUlIrR0crQkI7XG4gIH0sXG5cbiAgcG9wdWxhdGVNb2R1bGVzQ29udGVudChjb250ZW50LCBtYW5hZ2VyKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZWN0aW9uLWhlYWRlcic7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmFjdGl2ZUNhdGVnb3J5O1xuICAgIFxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzZWFyY2hJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHNlYXJjaElucHV0LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZWFyY2gtYmFyJztcbiAgICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdTZWFyY2guLi4nO1xuICAgIHNlYXJjaElucHV0LnZhbHVlID0gdGhpcy5zZWFyY2hRdWVyeTtcbiAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLmZpbHRlckFuZFJlbmRlck1vZHVsZXMobWFuYWdlcik7XG4gICAgfSk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbW9kdWxlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZHVsZXNDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1vZHVsZXMnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9kdWxlc0NvbnRhaW5lcik7XG5cbiAgICB0aGlzLmZpbHRlckFuZFJlbmRlck1vZHVsZXMobWFuYWdlcik7XG4gIH0sXG5cbiAgZmlsdGVyQW5kUmVuZGVyTW9kdWxlcyhtYW5hZ2VyKSB7XG4gICAgY29uc3QgbW9kdWxlc0NvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktbW9kdWxlcycpO1xuICAgIGlmICghbW9kdWxlc0NvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgbW9kdWxlc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICBjb25zdCBjYXRlZ29yeU1vZHVsZXMgPSBtYW5hZ2VyLmdldE1vZHVsZXNCeUNhdGVnb3J5KHRoaXMuYWN0aXZlQ2F0ZWdvcnkpO1xuICAgIGNvbnN0IGZpbHRlcmVkTW9kdWxlcyA9IGNhdGVnb3J5TW9kdWxlcy5maWx0ZXIobW9kID0+XG4gICAgICBtb2QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIFxuICAgIGZpbHRlcmVkTW9kdWxlcy5mb3JFYWNoKG1vZCA9PiB7XG4gICAgICBjb25zdCBtb2R1bGVDYXJkID0gdGhpcy5jcmVhdGVNb2R1bGVDYXJkKG1vZCwgbWFuYWdlcik7XG4gICAgICBtb2R1bGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZHVsZUNhcmQpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNyZWF0ZU1vZHVsZUNhcmQobW9kLCBtYW5hZ2VyKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1vZHVsZSc7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1tb2R1bGUtaGVhZGVyJztcbiAgICBcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZS5jbGFzc05hbWUgPSAnc2VyZW5pdHktbW9kdWxlLW5hbWUnO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBtb2QubmFtZTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRyb2xzLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1tb2R1bGUtY29udHJvbHMnO1xuXG4gICAgaWYgKG1vZC5zZXR0aW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZXR0aW5nc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgc2V0dGluZ3NCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1vZHVsZS1zZXR0aW5ncy1idG4nO1xuICAgICAgc2V0dGluZ3NCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWNvZ1wiPjwvaT4nO1xuICAgICAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmFjdGl2ZVNldHRpbmdzTW9kdWxlID0gbW9kO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQobWFuYWdlcik7XG4gICAgICB9KTtcbiAgICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKHNldHRpbmdzQnRuKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9nZ2xlLmNsYXNzTmFtZSA9IGBzZXJlbml0eS1tb2R1bGUtdG9nZ2xlICR7bW9kLmVuYWJsZWQgPyAnZW5hYmxlZCcgOiAnJ31gO1xuICAgIHRvZ2dsZS5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJzZXJlbml0eS10b2dnbGUtc2xpZGVyXCI+PC9zcGFuPic7XG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWFuYWdlci50b2dnbGUobW9kLm5hbWUpO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2VuYWJsZWQnKTtcbiAgICB9KTtcbiAgICBjb250cm9scy5hcHBlbmRDaGlsZCh0b2dnbGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250cm9scyk7XG4gICAgXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIFxuICAgIGlmIChtb2QuZGVzY3JpcHRpb24pIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnc2VyZW5pdHktbW9kdWxlLWRlc2NyaXB0aW9uJztcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbW9kLmRlc2NyaXB0aW9uO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjYXJkO1xuICB9LFxuXG4gIHBvcHVsYXRlU2V0dGluZ3NDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpIHtcbiAgICBjb25zdCBtb2QgPSB0aGlzLmFjdGl2ZVNldHRpbmdzTW9kdWxlO1xuICAgIGlmICghbW9kKSByZXR1cm47XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjdGlvbi5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2VjdGlvbic7XG5cbiAgICAvLyBIZWFkZXIgd2l0aCBiYWNrIGJ1dHRvblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZ3MtaGVhZGVyJztcbiAgICBcbiAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYmFja0J0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktYmFjay1idG4nO1xuICAgIGJhY2tCdG4uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiIHN0eWxlPVwid2lkdGg6IDAuN2VtOyBoZWlnaHQ6IDAuN2VtOyBtYXJnaW4tcmlnaHQ6IDhweDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk05LjQgMjMzLjRjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zbDE5MiAxOTJjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBzMTIuNS0zMi44IDAtNDUuM0w3Ny4zIDI1NiAyNDYuNiA4Ni42YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zcy0zMi44LTEyLjUtNDUuMyAwbC0xOTIgMTkyelwiLz48L3N2Zz4gQmFjayc7XG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlU2V0dGluZ3NNb2R1bGUgPSBudWxsO1xuICAgICAgdGhpcy51cGRhdGVDb250ZW50KG1hbmFnZXIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHttb2QubmFtZX0gU2V0dGluZ3NgO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgLy8gU2V0dGluZ3MgY29udGFpbmVyXG4gICAgY29uc3Qgc2V0dGluZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR0aW5nc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktbW9kdWxlLXNldHRpbmdzJztcbiAgICBcbiAgICAvLyBDdXN0b20gV2F5cG9pbnQgTWFuYWdlciBVSVxuICAgIGlmIChtb2QubmFtZSA9PT0gJ1dheXBvaW50Jykge1xuICAgICAgdGhpcy5yZW5kZXJXYXlwb2ludE1hbmFnZXIoc2V0dGluZ3NDb250YWluZXIsIG1hbmFnZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2Quc2V0dGluZ3MuZm9yRWFjaChzZXR0aW5nID0+IHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ0VsZW1lbnQgPSB0aGlzLmNyZWF0ZVNldHRpbmdFbGVtZW50KG1vZCwgc2V0dGluZywgbWFuYWdlcik7XG4gICAgICAgIGlmIChzZXR0aW5nRWxlbWVudCkge1xuICAgICAgICAgIC8vIEhhbmRsZSBjb25kaXRpb25hbCB2aXNpYmlsaXR5XG4gICAgICAgICAgaWYgKHNldHRpbmcuY29uZGl0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBzZXR0aW5nLmNvbmRpdGlvbihtb2Quc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSkpO1xuICAgICAgICAgICAgc2V0dGluZ0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZSA/ICcnIDogJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR0aW5nRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHNldHRpbmdzQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICB9LFxuXG4gIHJlbmRlcldheXBvaW50TWFuYWdlcihjb250YWluZXIsIG1hbmFnZXIpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnRcbiAgICBjb25zdCB3YXlwb2ludE1vZHVsZSA9IG1hbmFnZXIuZ2V0KCdXYXlwb2ludCcpO1xuICAgIGlmICghd2F5cG9pbnRNb2R1bGUpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBnZW5lcmFsU2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnZW5lcmFsU2V0dGluZ3MuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXdheXBvaW50LWdlbmVyYWwtc2V0dGluZ3MnO1xuICAgIHdheXBvaW50TW9kdWxlLnNldHRpbmdzLmZpbHRlcihzID0+IHMudHlwZSAhPT0gJ2luZm8nKS5mb3JFYWNoKHNldHRpbmcgPT4ge1xuICAgICAgICBjb25zdCBzZXR0aW5nRWwgPSB0aGlzLmNyZWF0ZVNldHRpbmdFbGVtZW50KHdheXBvaW50TW9kdWxlLCBzZXR0aW5nLCBtYW5hZ2VyKTtcbiAgICAgICAgZ2VuZXJhbFNldHRpbmdzLmFwcGVuZENoaWxkKHNldHRpbmdFbCk7XG4gICAgfSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYWxTZXR0aW5ncyk7XG5cbiAgICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWN0aW9ucy5jbGFzc05hbWUgPSAnc2VyZW5pdHktd2F5cG9pbnQtYWN0aW9ucyc7XG5cbiAgICBjb25zdCBhZGRDdXJyZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQ3VycmVudEJ0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktYnRuIHNlcmVuaXR5LWJ0bi1wcmltYXJ5JztcbiAgICBhZGRDdXJyZW50QnRuLnRleHRDb250ZW50ID0gJ0FkZCBhdCBDdXJyZW50IExvY2F0aW9uJztcbiAgICBhZGRDdXJyZW50QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwb3MgPSB3YXlwb2ludE1vZHVsZS5nZXRDdXJyZW50UGxheWVyUG9zaXRpb24oKTtcbiAgICAgIGlmIChwb3MpIHtcbiAgICAgICAgd2F5cG9pbnRNb2R1bGUuYWRkV2F5cG9pbnQoeyAuLi5wb3MgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyV2F5cG9pbnRNYW5hZ2VyKGNvbnRhaW5lciwgbWFuYWdlcik7IC8vIFJlLXJlbmRlclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ0NvdWxkIG5vdCBnZXQgcGxheWVyIHBvc2l0aW9uLicpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhZGRNYW51YWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRNYW51YWxCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWJ0bic7XG4gICAgYWRkTWFudWFsQnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBNYW51YWxseSc7XG4gICAgYWRkTWFudWFsQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB3YXlwb2ludE1vZHVsZS5hZGRXYXlwb2ludCh7fSk7XG4gICAgICB0aGlzLnJlbmRlcldheXBvaW50TWFuYWdlcihjb250YWluZXIsIG1hbmFnZXIpOyAvLyBSZS1yZW5kZXJcbiAgICB9O1xuICAgIFxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYWRkQ3VycmVudEJ0bik7XG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhZGRNYW51YWxCdG4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKTtcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0LmNsYXNzTmFtZSA9ICdzZXJlbml0eS13YXlwb2ludC1saXN0JztcbiAgICB3YXlwb2ludE1vZHVsZS5nZXRXYXlwb2ludHMoKS5mb3JFYWNoKHdwID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXdheXBvaW50LWl0ZW0nO1xuICAgICAgXG4gICAgICBjb25zdCBjb2xvclByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbG9yUHJldmlldy5jbGFzc05hbWUgPSAnc2VyZW5pdHktd2F5cG9pbnQtY29sb3ItcHJldmlldyc7XG4gICAgICBjb2xvclByZXZpZXcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gd3AuY29sb3I7XG5cbiAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGluZm8uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXdheXBvaW50LWluZm8nO1xuICAgICAgaW5mby5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj4ke3dwLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb29yZHNcIj5YOiAke3dwLnh9LCBZOiAke3dwLnl9LCBaOiAke3dwLnp9PC9zcGFuPlxuICAgICAgYDtcbiAgICAgIFxuICAgICAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xzLmNsYXNzTmFtZSA9ICdzZXJlbml0eS13YXlwb2ludC1jb250cm9scyc7XG5cbiAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICB0b2dnbGUudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICB0b2dnbGUuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNoZWNrYm94JztcbiAgICAgIHRvZ2dsZS5jaGVja2VkID0gd3AuZW5hYmxlZDtcbiAgICAgIHRvZ2dsZS5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHdheXBvaW50TW9kdWxlLnVwZGF0ZVdheXBvaW50KHdwLmlkLCB7IGVuYWJsZWQ6IGUudGFyZ2V0LmNoZWNrZWQgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBlZGl0QnRuLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk00MDIuNiA4My4ybDkwLjIgOTAuMmMxMi41IDEyLjUgMTIuNSAzMi44IDAgNDUuM2wtMjgzLjIgMjgzLjJjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwTDMyLjIgMzY4LjJjLTEyLjUtMTIuNS0xMi41LTMyLjggMC00NS4zbDI4My4yLTI4My4yYzEyLjUtMTIuNSAzMi44LTEyLjUgNDUuMyAwem00Ny40IDE4LjdjLTkuMi05LjItMjIuOS0xMS45LTM1LjgtOS44bC0xNS42IDE1LjYgMTAwLjIgMTAwLjIgMTUuNi0xNS42YzIuMS0xMi45LS42LTI2LjYtOS44LTM1LjhsLTU1LjItNTUuMnpNMzg0IDM0Ni43TDEyOCA0ODBIMFYzNTJsMjU2LTI1NkwzODQgMzQ2Ljd6XCIvPjwvc3ZnPic7XG4gICAgICBlZGl0QnRuLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnNob3dXYXlwb2ludEVkaXRQb3B1cCh3cCwgbWFuYWdlcik7XG4gICAgICBcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgZGVsZXRlQnRuLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk0xMzUuMiAxNy43TDEyOCAzMkgzMkMxNC4zIDMyIDAgNDYuMyAwIDY0UzE0LjMgOTYgMzIgOTZINDE2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMySDMyMGwtNy4yLTE0LjNDMzA3LjQgNi44IDI5Ni4zIDAgMjg0LjIgMEgxNjMuOGMtMTIuMSAwLTIzLjIgNi44LTI4LjYgMTcuN3pNNDE2IDEyOEgzMkw1My4yIDQ2N2MxLjYgMjUuMyAyMi42IDQ1IDQ3LjkgNDVIMzQ2LjljMjUuMyAwIDQ2LjMtMTkuNyA0Ny45LTQ1TDQxNiAxMjh6XCIvPjwvc3ZnPic7XG4gICAgICBkZWxldGVCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIke3dwLnRpdGxlfVwiP2ApKSB7XG4gICAgICAgICAgd2F5cG9pbnRNb2R1bGUucmVtb3ZlV2F5cG9pbnQod3AuaWQpO1xuICAgICAgICAgIHRoaXMucmVuZGVyV2F5cG9pbnRNYW5hZ2VyKGNvbnRhaW5lciwgbWFuYWdlcik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKHRvZ2dsZSk7XG4gICAgICBjb250cm9scy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY29sb3JQcmV2aWV3KTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGNvbnRyb2xzKTtcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xuICB9LFxuXG4gIHNob3dXYXlwb2ludEVkaXRQb3B1cCh3YXlwb2ludCwgbWFuYWdlcikge1xuICAgICAgY29uc3Qgd2F5cG9pbnRNb2R1bGUgPSBtYW5hZ2VyLmdldCgnV2F5cG9pbnQnKTtcbiAgICAgIFxuICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBvcHVwLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctcG9wdXAnO1xuXG4gICAgICBwb3B1cC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlcmVuaXR5LWNvbmZpZy1wb3B1cC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+RWRpdCBXYXlwb2ludDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktY29uZmlnLXBvcHVwLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ3cC10aXRsZVwiIGNsYXNzPVwic2VyZW5pdHktdGV4dC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiB2YWx1ZT1cIiR7d2F5cG9pbnQudGl0bGV9XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZC1pbnB1dHNcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwid3AteFwiIGNsYXNzPVwic2VyZW5pdHktdGV4dC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiWFwiIHZhbHVlPVwiJHt3YXlwb2ludC54fVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ3cC15XCIgY2xhc3M9XCJzZXJlbml0eS10ZXh0LWlucHV0XCIgcGxhY2Vob2xkZXI9XCJZXCIgdmFsdWU9XCIke3dheXBvaW50Lnl9XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIndwLXpcIiBjbGFzcz1cInNlcmVuaXR5LXRleHQtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIlpcIiB2YWx1ZT1cIiR7d2F5cG9pbnQuen1cIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiBpZD1cIndwLWNvbG9yXCIgdmFsdWU9XCIke3dheXBvaW50LmNvbG9yfVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJlbml0eS1jb25maWctcG9wdXAtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ3cC1jYW5jZWxcIiBjbGFzcz1cInNlcmVuaXR5LWJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwid3Atc2F2ZVwiIGNsYXNzPVwic2VyZW5pdHktYnRuIHNlcmVuaXR5LWJ0bi1wcmltYXJ5XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgYDtcblxuICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgb3ZlcmxheS5jbGFzc05hbWUgPSAnc2VyZW5pdHktb3ZlcmxheSB2aXNpYmxlJztcbiAgICAgIG92ZXJsYXkuc3R5bGUuekluZGV4ID0gJzEwMDAxJztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwb3B1cCk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQobWFuYWdlcik7IC8vIFJlLXJlbmRlciB0aGUgbWFuYWdlciBsaXN0XG4gICAgICB9O1xuXG4gICAgICBwb3B1cC5xdWVyeVNlbGVjdG9yKCcjd3Atc2F2ZScpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiBwb3B1cC5xdWVyeVNlbGVjdG9yKCcjd3AtdGl0bGUnKS52YWx1ZSxcbiAgICAgICAgICAgICAgeDogcG9wdXAucXVlcnlTZWxlY3RvcignI3dwLXgnKS52YWx1ZSxcbiAgICAgICAgICAgICAgeTogcG9wdXAucXVlcnlTZWxlY3RvcignI3dwLXknKS52YWx1ZSxcbiAgICAgICAgICAgICAgejogcG9wdXAucXVlcnlTZWxlY3RvcignI3dwLXonKS52YWx1ZSxcbiAgICAgICAgICAgICAgY29sb3I6IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJyN3cC1jb2xvcicpLnZhbHVlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgd2F5cG9pbnRNb2R1bGUudXBkYXRlV2F5cG9pbnQod2F5cG9pbnQuaWQsIHVwZGF0ZWREYXRhKTtcbiAgICAgICAgICBjbG9zZSgpO1xuICAgICAgfTtcbiAgICAgIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJyN3cC1jYW5jZWwnKS5vbmNsaWNrID0gY2xvc2U7XG4gIH0sXG5cbiAgY3JlYXRlU2V0dGluZ0VsZW1lbnQobW9kdWxlLCBzZXR0aW5nLCBtYW5hZ2VyKSB7XG4gICAgY29uc3Qgc2V0dGluZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR0aW5nV3JhcHBlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZyc7XG4gICAgc2V0dGluZ1dyYXBwZXIuZGF0YXNldC5zZXR0aW5nSWQgPSBzZXR0aW5nLmlkO1xuXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9Db250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmctaW5mbyc7XG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmctbGFiZWwnO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gc2V0dGluZy5uYW1lO1xuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgaWYgKHNldHRpbmcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBkZXNjLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5nLWRlc2NyaXB0aW9uJztcbiAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBzZXR0aW5nLmRlc2NyaXB0aW9uO1xuICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICB9XG4gICAgXG4gICAgc2V0dGluZ1dyYXBwZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb250cm9sQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udHJvbENvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZy1jb250cm9sJztcbiAgICBcbiAgICBzd2l0Y2ggKHNldHRpbmcudHlwZSkge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBzZXR0aW5nLnZhbHVlO1xuICAgICAgICBjaGVja2JveC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY2hlY2tib3gnO1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgIG1hbmFnZXIudXBkYXRlTW9kdWxlU2V0dGluZyhtb2R1bGUubmFtZSwgc2V0dGluZy5pZCwgZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVDb25kaXRpb25hbFNldHRpbmdzKG1vZHVsZSwgbWFuYWdlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250cm9sQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzbGlkZXInOlxuICAgICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBzbGlkZXIudHlwZSA9ICdyYW5nZSc7XG4gICAgICAgIHNsaWRlci5taW4gPSBzZXR0aW5nLm1pbjtcbiAgICAgICAgc2xpZGVyLm1heCA9IHNldHRpbmcubWF4O1xuICAgICAgICBzbGlkZXIuc3RlcCA9IHNldHRpbmcuc3RlcDtcbiAgICAgICAgc2xpZGVyLnZhbHVlID0gc2V0dGluZy52YWx1ZTtcbiAgICAgICAgc2xpZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zbGlkZXInO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgIG1hbmFnZXIudXBkYXRlTW9kdWxlU2V0dGluZyhtb2R1bGUubmFtZSwgc2V0dGluZy5pZCwgcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udHJvbENvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3QuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNlbGVjdCc7XG4gICAgICAgIHNldHRpbmcub3B0aW9ucy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0O1xuICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdDtcbiAgICAgICAgICBpZiAoc2V0dGluZy52YWx1ZSA9PT0gb3B0KSBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgbWFuYWdlci51cGRhdGVNb2R1bGVTZXR0aW5nKG1vZHVsZS5uYW1lLCBzZXR0aW5nLmlkLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVDb25kaXRpb25hbFNldHRpbmdzKG1vZHVsZSwgbWFuYWdlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250cm9sQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRleHRJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICB0ZXh0SW5wdXQudmFsdWUgPSBzZXR0aW5nLnZhbHVlO1xuICAgICAgICB0ZXh0SW5wdXQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRleHQtaW5wdXQnO1xuICAgICAgICB0ZXh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICBtYW5hZ2VyLnVwZGF0ZU1vZHVsZVNldHRpbmcobW9kdWxlLm5hbWUsIHNldHRpbmcuaWQsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRyb2xDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dElucHV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgIGNvbnN0IGNvbG9yUGlja2VyID0gdGhpcy5jcmVhdGVDb2xvclBpY2tlcihtb2R1bGUsIHNldHRpbmcsIG1hbmFnZXIpO1xuICAgICAgICBjb250cm9sQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG9yUGlja2VyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFxuICAgIHNldHRpbmdXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRyb2xDb250YWluZXIpO1xuICAgIHJldHVybiBzZXR0aW5nV3JhcHBlcjtcbiAgfSxcblxuICB1cGRhdGVDb25kaXRpb25hbFNldHRpbmdzKG1vZHVsZSwgbWFuYWdlcikge1xuICAgIGNvbnN0IHNldHRpbmdzTWFwID0gbW9kdWxlLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgIGNvbnN0IHNldHRpbmdzQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1tb2R1bGUtc2V0dGluZ3MnKTtcbiAgICBcbiAgICBtb2R1bGUuc2V0dGluZ3MuZm9yRWFjaChzID0+IHtcbiAgICAgIGlmIChzLmNvbmRpdGlvbikge1xuICAgICAgICBjb25zdCBzZXR0aW5nRWxlbWVudCA9IHNldHRpbmdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNldHRpbmctaWQ9XCIke3MuaWR9XCJdYCk7XG4gICAgICAgIGlmIChzZXR0aW5nRWxlbWVudCkge1xuICAgICAgICAgIHNldHRpbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzLmNvbmRpdGlvbihzZXR0aW5nc01hcCkgPyAnJyA6ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8vIC0tLSBTdGFydCBvZiBDb2xvciBQaWNrZXIgSGVscGVyIEZ1bmN0aW9ucyAtLS1cblxuICBjcmVhdGVDb2xvclBpY2tlcihtb2R1bGUsIHNldHRpbmcsIG1hbmFnZXIpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd3JhcHBlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29sb3ItcGlja2VyLXdyYXBwZXInO1xuXG4gICAgY29uc3Qgc3dhdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3dhdGNoLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb2xvci1zd2F0Y2gnO1xuICAgIHN3YXRjaC5zdHlsZS5jb2xvciA9IHNldHRpbmcudmFsdWU7XG5cbiAgICBjb25zdCBwb3B1cCA9IHRoaXMuY3JlYXRlQ29sb3JQb3B1cChtb2R1bGUsIHNldHRpbmcsIG1hbmFnZXIsIHN3YXRjaCk7XG4gICAgXG4gICAgc3dhdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LWNvbG9yLXBvcHVwJyk7XG4gICAgICBpZiAoYSAmJiBhICE9PSBwb3B1cCkgYS5yZW1vdmUoKVxuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1jb2xvci1wb3B1cCcpID09PSBwb3B1cCkge1xuICAgICAgICAgIHBvcHVwLnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc3dhdGNoKTtcblxuICAgIC8vIENsb3NlIHBvcHVwIHdoZW4gY2xpY2tpbmcgZWxzZXdoZXJlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKCF3cmFwcGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBwb3B1cC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB3cmFwcGVyO1xuICB9LFxuXG4gIGNyZWF0ZUNvbG9yUG9wdXAobW9kdWxlLCBzZXR0aW5nLCBtYW5hZ2VyLCBzd2F0Y2gpIHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb2xvci1wb3B1cCc7XG5cbiAgICBjb25zdCBjb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb2xvcklucHV0LnR5cGUgPSAnY29sb3InO1xuICAgIGNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLnJnYmFUb0hleChzZXR0aW5nLnZhbHVlKS5oZXg7XG4gICAgXG4gICAgY29uc3QgYWxwaGFTbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGFscGhhU2xpZGVyLnR5cGUgPSAncmFuZ2UnO1xuICAgIGFscGhhU2xpZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zbGlkZXInO1xuICAgIGFscGhhU2xpZGVyLm1pbiA9IDA7XG4gICAgYWxwaGFTbGlkZXIubWF4ID0gMTtcbiAgICBhbHBoYVNsaWRlci5zdGVwID0gMC4wMTtcbiAgICBhbHBoYVNsaWRlci52YWx1ZSA9IHRoaXMucmdiYVRvSGV4KHNldHRpbmcudmFsdWUpLmFscGhhO1xuXG4gICAgY29uc3QgdXBkYXRlQ29sb3IgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoZXggPSBjb2xvcklucHV0LnZhbHVlO1xuICAgICAgY29uc3QgYWxwaGEgPSBwYXJzZUZsb2F0KGFscGhhU2xpZGVyLnZhbHVlKTtcbiAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLmhleFRvUmdiYShoZXgsIGFscGhhKTtcbiAgICAgIFxuICAgICAgc3dhdGNoLnN0eWxlLmNvbG9yID0gcmdiYTtcbiAgICAgIG1hbmFnZXIudXBkYXRlTW9kdWxlU2V0dGluZyhtb2R1bGUubmFtZSwgc2V0dGluZy5pZCwgcmdiYSk7XG4gICAgfTtcblxuICAgIGNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVDb2xvcik7XG4gICAgYWxwaGFTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVDb2xvcik7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChjb2xvcklucHV0KTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChhbHBoYVNsaWRlcik7XG4gICAgcmV0dXJuIHBvcHVwO1xuICB9LFxuXG4gIGhleFRvUmdiYShoZXgsIGFscGhhKSB7XG4gICAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpO1xuICAgIGNvbnN0IGcgPSBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KTtcbiAgICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNik7XG4gICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YWxwaGF9KWA7XG4gIH0sXG5cbiAgcmdiYVRvSGV4KHJnYmEpIHtcbiAgICBpZiAocmdiYS5zdGFydHNXaXRoKCcjJykpIHJldHVybiB7IGhleDogcmdiYSwgYWxwaGE6IDEgfTtcbiAgICBjb25zdCBwYXJ0cyA9IHJnYmEubWF0Y2goL1tcXGQuXSsvZyk7XG4gICAgaWYgKCFwYXJ0cyB8fCBwYXJ0cy5sZW5ndGggPCAzKSByZXR1cm4geyBoZXg6ICcjMDAwMDAwJywgYWxwaGE6IDEgfTtcbiAgICBcbiAgICBjb25zdCByID0gcGFyc2VJbnQocGFydHNbMF0pLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IGcgPSBwYXJzZUludChwYXJ0c1sxXSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgYiA9IHBhcnNlSW50KHBhcnRzWzJdKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBcbiAgICBjb25zdCBhbHBoYSA9IHBhcnRzLmxlbmd0aCA+PSA0ID8gcGFyc2VGbG9hdChwYXJ0c1szXSkgOiAxO1xuICAgIFxuICAgIHJldHVybiB7IGhleDogYCMke3J9JHtnfSR7Yn1gLCBhbHBoYSB9O1xuICB9LFxuXG4gIGNyZWF0ZVRvZ2dsZVNldHRpbmcobmFtZSwgZGVzY3JpcHRpb24sIGluaXRpYWxWYWx1ZSwgb25DaGFuZ2UpIHtcbiAgICBjb25zdCBzZXR0aW5nV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHRpbmdXcmFwcGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctdG9nZ2xlLXNldHRpbmcnO1xuXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9Db250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmctaW5mbyc7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5nLWxhYmVsJztcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5nLWRlc2NyaXB0aW9uJztcbiAgICBkZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgIGNvbnN0IGNvbnRyb2xDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250cm9sQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5nLWNvbnRyb2wnO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5jaGVja2VkID0gaW5pdGlhbFZhbHVlO1xuICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jaGVja2JveCc7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIG9uQ2hhbmdlKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIH0pO1xuICAgIGNvbnRyb2xDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIFxuICAgIHNldHRpbmdXcmFwcGVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuICAgIHNldHRpbmdXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRyb2xDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHNldHRpbmdXcmFwcGVyO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xpY2tHVUk7XG4iLCAiY29uc3QgRlBTQ291bnRlciA9IHtcbiAgbmFtZTogJ0ZQU0NvdW50ZXInLFxuICBjYXRlZ29yeTogJ1Zpc3VhbCcsXG4gIGRlc2NyaXB0aW9uOiAnRGlzcGxheXMgeW91ciBjdXJyZW50IGZyYW1lcyBwZXIgc2Vjb25kLicsXG4gIGVuYWJsZWQ6IGZhbHNlLFxuICBkZWZhdWx0WDogXCI5MCVcIixcbiAgZGVmYXVsdFk6IFwiNDUlXCIsXG4gIHNldHRpbmdzOiBbXG4gICAgeyBpZDogJ2NvbG9yLW1vZGUnLCBuYW1lOiAnQ29sb3IgTW9kZScsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zOiBbJ1RoZW1lJywgJ0N1c3RvbSddLCB2YWx1ZTogJ1RoZW1lJyB9LFxuICAgIHsgaWQ6ICdiZy1jb2xvcicsIG5hbWU6ICdCYWNrZ3JvdW5kIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDMwLCAzMywgNDEsIDAuODUpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAndGV4dC1jb2xvcicsIG5hbWU6ICdUZXh0IENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjRUFFQUVBJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAnZm9udC1zaXplJywgbmFtZTogJ0ZvbnQgU2l6ZScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTQsIG1pbjogOCwgbWF4OiAyNCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdwYWRkaW5nJywgbmFtZTogJ1BhZGRpbmcnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDgsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdib3JkZXItcmFkaXVzJywgbmFtZTogJ0JvcmRlciBSYWRpdXMnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEwLCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEgfSxcbiAgICB7IGlkOiAnYm9yZGVyLXdpZHRoJywgbmFtZTogJ0JvcmRlciBXaWR0aCcsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMSwgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDEgfSxcbiAgICB7IGlkOiAnYm9yZGVyLWNvbG9yJywgbmFtZTogJ0JvcmRlciBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KScsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgeyBpZDogJ3Nob3ctbGFiZWwnLCBuYW1lOiAnU2hvdyBMYWJlbCcsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICB7IGlkOiAnZm9ybWF0JywgbmFtZTogJ1RleHQgRm9ybWF0JywgdHlwZTogJ3RleHQnLCB2YWx1ZTogJ3tsYWJlbH0ge2Zwc30nLCBkZXNjcmlwdGlvbjogJ1VzZSB7bGFiZWx9IGFuZCB7ZnBzfSBhcyBwbGFjZWhvbGRlcnMuJyB9LFxuICAgIHsgaWQ6ICdoaWRlLWdhbWUtZnBzJywgbmFtZTogJ0hpZGUgR2FtZSBGUFMgQ291bnRlcicsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUsIGRlc2NyaXB0aW9uOiAnSGlkZSB0aGUgYnVpbHQtaW4gZ2FtZSBGUFMgY291bnRlcicgfSxcbiAgXSxcbiAgXG4gIGZyYW1lQ291bnQ6IDAsXG4gIGxhc3RUaW1lOiAwLFxuICBmcHM6IDAsXG4gIGVsZW1lbnQ6IG51bGwsXG4gIGZyYW1lQ2FsbGJhY2s6IG51bGwsXG4gIGdhbWVGcHNFbGVtZW50czogbnVsbCxcbiAgZ2FtZUZwc0Rpc3BsYXlTdHlsZTogbnVsbCxcbiAgXG4gIG9uRW5hYmxlKCkge1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgdGhpcy5sYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMuZnBzID0gMDtcbiAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgXG4gICAgdGhpcy5mcmFtZUNhbGxiYWNrID0gdGhpcy5jb3VudEZyYW1lLmJpbmQodGhpcyk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVDYWxsYmFjayk7XG4gICAgXG4gICAgdGhpcy51cGRhdGVHYW1lRnBzVmlzaWJpbGl0eSgpO1xuICB9LFxuXG4gIG9uRGlzYWJsZSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lEaXNwbGF5KCk7XG4gICAgXG4gICAgdGhpcy5mcmFtZUNhbGxiYWNrID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLnJlc3RvcmVHYW1lRnBzQ291bnRlcigpO1xuICB9LFxuICBcbiAgY291bnRGcmFtZSh0aW1lc3RhbXApIHtcbiAgICB0aGlzLmZyYW1lQ291bnQrKztcbiAgICBcbiAgICBjb25zdCBlbGFwc2VkID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZTtcbiAgICBpZiAoZWxhcHNlZCA+PSAxMDAwKSB7XG4gICAgICB0aGlzLmZwcyA9IE1hdGgucm91bmQoKHRoaXMuZnJhbWVDb3VudCAqIDEwMDApIC8gZWxhcHNlZCk7XG4gICAgICB0aGlzLmZyYW1lQ291bnQgPSAwO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuZnJhbWVDYWxsYmFjaykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVDYWxsYmFjayk7XG4gICAgfVxuICB9LFxuXG4gIG9uVGljaygpIHtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfSxcbiAgXG4gIG9uU2V0dGluZ1VwZGF0ZShzZXR0aW5nSWQpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gICAgXG4gICAgaWYgKHNldHRpbmdJZCA9PT0gJ2hpZGUtZ2FtZS1mcHMnKSB7XG4gICAgICB0aGlzLnVwZGF0ZUdhbWVGcHNWaXNpYmlsaXR5KCk7XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdmcHMtY291bnRlci1kaXNwbGF5JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH0sXG5cbiAgZGVzdHJveURpc3BsYXkoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIFxuICB1cGRhdGVHYW1lRnBzVmlzaWJpbGl0eSgpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgXG4gICAgaWYgKHNldHRpbmdzWydoaWRlLWdhbWUtZnBzJ10pIHtcbiAgICAgIHRoaXMuaGlkZUdhbWVGcHNDb3VudGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzdG9yZUdhbWVGcHNDb3VudGVyKCk7XG4gICAgfVxuICB9LFxuICBcbiAgaGlkZUdhbWVGcHNDb3VudGVyKCkge1xuICAgIGNvbnN0IGZwc1dyYXBwZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRnBzV3JhcHBlckRpdicpO1xuICAgIGlmIChmcHNXcmFwcGVyRGl2KSB7XG4gICAgICB0aGlzLmdhbWVGcHNFbGVtZW50cyA9IGZwc1dyYXBwZXJEaXY7XG4gICAgICB0aGlzLmdhbWVGcHNEaXNwbGF5U3R5bGUgPSBmcHNXcmFwcGVyRGl2LnN0eWxlLmRpc3BsYXk7XG4gICAgICBcbiAgICAgIGZwc1dyYXBwZXJEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0sXG4gIFxuICByZXN0b3JlR2FtZUZwc0NvdW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuZ2FtZUZwc0VsZW1lbnRzKSB7XG4gICAgICB0aGlzLmdhbWVGcHNFbGVtZW50cy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5nYW1lRnBzRGlzcGxheVN0eWxlIHx8ICcnO1xuICAgICAgdGhpcy5nYW1lRnBzRWxlbWVudHMgPSBudWxsO1xuICAgICAgdGhpcy5nYW1lRnBzRGlzcGxheVN0eWxlID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlRGlzcGxheSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgICBjb25zdCBtb2QgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IHR5cGVvZiBtb2QueCA9PT0gJ3N0cmluZycgPyBtb2QueCA6IGAke21vZC54fXB4YDtcbiAgICAgICAgICBpZiAobW9kLnkgIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB0eXBlb2YgbW9kLnkgPT09ICdzdHJpbmcnID8gbW9kLnkgOiBgJHttb2QueX1weGA7XG4gICAgICB9XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgICBsZXQgdGV4dCA9IHNldHRpbmdzLmZvcm1hdDtcblxuICAgICAgaWYgKHNldHRpbmdzWydzaG93LWxhYmVsJ10pIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tsYWJlbH0nLCAnRlBTOicpOyBlbHNlIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tsYWJlbH0nLCAnJyk7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKCd7ZnBzfScsIHRoaXMuZnBzKTtcbiAgICAgIFxuICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gdGV4dC50cmltKCk7XG4gICAgfVxuICB9LFxuXG4gIGFwcGx5U3R5bGVzKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgIFxuICAgIGlmIChzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnVGhlbWUnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcGFuZWwpJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQpJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCB2YXIoLS1ib3JkZXIpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3NbJ2JnLWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9IHNldHRpbmdzWyd0ZXh0LWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgJHtzZXR0aW5nc1snYm9yZGVyLWNvbG9yJ119YDtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmZvbnRTaXplID0gYCR7c2V0dGluZ3NbJ2ZvbnQtc2l6ZSddfXB4YDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9IGAke3NldHRpbmdzWydwYWRkaW5nJ119cHhgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk3O1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGUFNDb3VudGVyO1xuIiwgImxldCBjYWNoZWRQbGF5ZXJOYW1lID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXllck5hbWUoKSB7XG4gICAgaWYgKGNhY2hlZFBsYXllck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFBsYXllck5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhdE1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkNoYXRNZXNzYWdlcyAuSW5kaXZpZHVhbFRleHQnKTtcbiAgICBcbiAgICBjb25zdCBqb2luTWVzc2FnZXMgPSBBcnJheS5mcm9tKGNoYXRNZXNzYWdlcykuZmlsdGVyKG0gPT4gbS50ZXh0Q29udGVudD8uaW5jbHVkZXMoJyBqb2luZWQnKSk7XG5cbiAgICBpZiAoam9pbk1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbXlKb2luTWVzc2FnZSA9IGpvaW5NZXNzYWdlc1tqb2luTWVzc2FnZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IHRleHQgPSBteUpvaW5NZXNzYWdlLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBuYW1lID0gdGV4dC5zcGxpdCgnIGpvaW5lZCcpWzBdLnRyaW0oKTtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGNhY2hlZFBsYXllck5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgY29sb3IgaW4gYSByYWluYm93IHNlcXVlbmNlIGZvciB0aGUgVUkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgaW4gYSBsaXN0LCB1c2VkIHRvIG9mZnNldCB0aGUgaHVlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkIC0gVGhlIHNwZWVkIG9mIHRoZSBjb2xvciBjeWNsZS4gTG93ZXIgaXMgZmFzdGVyLiBEZWZhdWx0cyB0byAyMC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEFuIEhTTCBjb2xvciBzdHJpbmcgKGUuZy4sIFwiaHNsKDE4MCwgOTAlLCA2NSUpXCIpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFpbmJvd0NvbG9yKGluZGV4LCBzcGVlZCA9IDIwKSB7XG4gIGNvbnN0IGh1ZU9mZnNldCA9IERhdGUubm93KCkgLyBzcGVlZDtcbiAgY29uc3QgaHVlID0gKGluZGV4ICogMTUgKyBodWVPZmZzZXQpICUgMzYwO1xuICByZXR1cm4gYGhzbCgke2h1ZX0sIDkwJSwgNjUlKWA7XG59IiwgImltcG9ydCB7IGdldFBsYXllck5hbWUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmNvbnN0IEludGVyZmFjZSA9IHtcbiAgICBuYW1lOiAnSW50ZXJmYWNlJyxcbiAgICBjYXRlZ29yeTogJ1Zpc3VhbCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXBsYWNlcyB0aGUgZGVmYXVsdCBpbi1nYW1lIGhlYWRlciB3aXRoIGEgY3VzdG9taXphYmxlIG9uZS4nLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZGVmYXVsdFg6IDIsXG4gICAgZGVmYXVsdFk6IDcsXG4gICAgZWxlbWVudDogbnVsbCxcbiAgICBnYW1lSGVhZGVyOiBudWxsLFxuICAgIGdhbWVIZWFkZXJQYXJlbnQ6IG51bGwsXG4gICAgZ2FtZUhlYWRlck5leHRTaWJsaW5nOiBudWxsLFxuICAgIGxhc3RQbGF5ZXJOYW1lOiBudWxsLFxuICAgIG9ic2VydmVyOiBudWxsLFxuXG4gICAgc2V0dGluZ3M6IFtcbiAgICAgICAgeyBpZDogJ3JlbW92ZS1oZWFkZXInLCBuYW1lOiAnUmVtb3ZlIEdhbWUgSGVhZGVyJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSwgZGVzY3JpcHRpb246ICdGb3IgcGVyZm9ybWFuY2UsIG1vdmUgdGhlIGhlYWRlciBvZmYtc2NyZWVuIGluc3RlYWQgb2YganVzdCBoaWRpbmcgaXQuJyB9LFxuICAgICAgICB7IGlkOiAnY29sb3ItbW9kZScsIG5hbWU6ICdDb2xvciBNb2RlJywgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnVGhlbWUnLCAnQ3VzdG9tJ10sIHZhbHVlOiAnVGhlbWUnIH0sXG4gICAgICAgIHsgaWQ6ICdiZy1jb2xvcicsIG5hbWU6ICdCYWNrZ3JvdW5kIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDMwLCAzMywgNDEsIDAuODUpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgICAgeyBpZDogJ3RleHQtY29sb3InLCBuYW1lOiAnVGV4dCBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAnI0VBRUFFQScsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgICAgIHsgaWQ6ICdhY2NlbnQtY29sb3InLCBuYW1lOiAnQWNjZW50IENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjNUU3MkVCJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgICAgeyBpZDogJ2ZvbnQtc2l6ZScsIG5hbWU6ICdGb250IFNpemUnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDE2LCBtaW46IDEwLCBtYXg6IDI4LCBzdGVwOiAxIH0sXG4gICAgICAgIHsgaWQ6ICdwYWRkaW5nLXknLCBuYW1lOiAnUGFkZGluZyAoWSknLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDQsIG1pbjogMCwgbWF4OiAzMCwgc3RlcDogMSB9LFxuICAgICAgICB7IGlkOiAncGFkZGluZy14JywgbmFtZTogJ1BhZGRpbmcgKFgpJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiA2LCBtaW46IDAsIG1heDogMzAsIHN0ZXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ2JvcmRlci1yYWRpdXMnLCBuYW1lOiAnQm9yZGVyIFJhZGl1cycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTAsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSB9LFxuICAgICAgICB7IGlkOiAnYm9yZGVyLXdpZHRoJywgbmFtZTogJ0JvcmRlciBXaWR0aCcsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMSwgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ2JvcmRlci1jb2xvcicsIG5hbWU6ICdCb3JkZXIgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyknLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgICAgICB7IGlkOiAnc2hvdy1sb2dvJywgbmFtZTogJ1Nob3cgTG9nbycsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgeyBpZDogJ2xvZ28tdGV4dCcsIG5hbWU6ICdMb2dvIFRleHQnLCB0eXBlOiAndGV4dCcsIHZhbHVlOiAnUycsIGNvbmRpdGlvbjogKHNldHRpbmdzKSA9PiBzZXR0aW5nc1snc2hvdy1sb2dvJ10gfSxcbiAgICAgICAgeyBpZDogJ3Nob3ctbmFtZScsIG5hbWU6ICdTaG93IE5hbWUnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6ICdzaG93LWdhbWVtb2RlJywgbmFtZTogJ1Nob3cgR2FtZW1vZGUnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6ICdzaG93LWxvYmJ5JywgbmFtZTogJ1Nob3cgTG9iYnknLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgXSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLmhhbmRsZUhlYWRlcigpO1xuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB0aGlzLmhhbmRsZUhlYWRlcigpKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlRGlzcGxheSgpO1xuICAgICAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN0b3JlSGVhZGVyKCk7XG4gICAgICAgIHRoaXMuZGVzdHJveURpc3BsYXkoKTtcbiAgICB9LFxuXG4gICAgb25UaWNrKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9LFxuXG4gICAgb25TZXR0aW5nVXBkYXRlKHNldHRpbmdJZCkge1xuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAncmVtb3ZlLWhlYWRlcicpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSGVhZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkodHJ1ZSk7XG4gICAgfSxcblxuICAgIGhhbmRsZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkluR2FtZUhlYWRlckNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVIZWFkZXIgPSBoZWFkZXI7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRSZW1vdmUgPSB0aGlzLnNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSAncmVtb3ZlLWhlYWRlcicpLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHNob3VsZFJlbW92ZSkge1xuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnRvcCA9ICctOTk5OXB4JztcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVzdG9yZUhlYWRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUhlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5nYW1lSGVhZGVyLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgICAgICAgICB0aGlzLmdhbWVIZWFkZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5nYW1lSGVhZGVyLnN0eWxlLnRvcCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5nYW1lSGVhZGVyLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZ2FtZUhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktaW50ZXJmYWNlLWRpc3BsYXknO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gJzIwcHgnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9ICcyMHB4JztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95RGlzcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVEaXNwbGF5KGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICAgIGlmICghY2xpY2tHdWkgfHwgIWNsaWNrR3VpLmlzRWRpdGluZ0hVRCkge1xuICAgICAgICAgICAgY29uc3QgbW9kID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke21vZC54fXB4YDtcbiAgICAgICAgICAgIGlmIChtb2QueSAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke21vZC55fXB4YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdhbWVtb2RlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSW5HYW1lSGVhZGVyR2FtZU5hbWUnKTtcbiAgICAgICAgY29uc3QgbG9iYnlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5JbkdhbWVIZWFkZXJMb2JieU5hbWUnKTtcblxuICAgICAgICBjb25zdCBnYW1lbW9kZSA9IGdhbWVtb2RlRWwgPyBnYW1lbW9kZUVsLnRleHRDb250ZW50IDogJ1Vua25vd24nO1xuICAgICAgICBjb25zdCBsb2JieSA9IGxvYmJ5RWwgPyBgKCMke2xvYmJ5RWwudGV4dENvbnRlbnR9KWAgOiAnJztcbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IGdldFBsYXllck5hbWUoKTtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuXG4gICAgICAgIGlmIChwbGF5ZXJOYW1lICYmIHRoaXMubGFzdFBsYXllck5hbWUgIT09IHBsYXllck5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFBsYXllck5hbWUgPSBwbGF5ZXJOYW1lO1xuICAgICAgICAgICAgZm9yY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250ZW50ID0gYFxuICAgICAgICAgICAgJHtzZXR0aW5nc1snc2hvdy1sb2dvJ10gPyBgPGRpdiBjbGFzcz1cInNlcmVuaXR5LWludGVyZmFjZS1sb2dvXCI+JHtzZXR0aW5nc1snbG9nby10ZXh0J119PC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcmVuaXR5LWludGVyZmFjZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgJHtzZXR0aW5nc1snc2hvdy1uYW1lJ10gJiYgcGxheWVyTmFtZSA/IGA8ZGl2IGNsYXNzPVwic2VyZW5pdHktaW50ZXJmYWNlLW5hbWVcIj4ke3BsYXllck5hbWV9PC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgICR7c2V0dGluZ3NbJ3Nob3ctZ2FtZW1vZGUnXSA/IGA8ZGl2IGNsYXNzPVwic2VyZW5pdHktaW50ZXJmYWNlLWdhbWVtb2RlXCI+JHtnYW1lbW9kZX08L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgJHtzZXR0aW5nc1snc2hvdy1sb2JieSddID8gYDxkaXYgY2xhc3M9XCJzZXJlbml0eS1pbnRlcmZhY2UtbG9iYnlcIj4ke2xvYmJ5fTwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIGNvbnN0IG5ld0hhc2ggPSBKU09OLnN0cmluZ2lmeShjb250ZW50KTtcbiAgICAgICAgaWYgKHRoaXMubGFzdEhhc2ggIT09IG5ld0hhc2ggfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgICAgICAgICAgdGhpcy5sYXN0SGFzaCA9IG5ld0hhc2g7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYXBwbHlTdHlsZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcblxuICAgICAgICBpZiAoc2V0dGluZ3NbJ2NvbG9yLW1vZGUnXSA9PT0gJ1RoZW1lJykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWFjY2VudC1jb2xvcicsICd2YXIoLS1wcmltYXJ5KScpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1wYW5lbCknO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQpJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgdmFyKC0tYm9yZGVyKWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYWNjZW50LWNvbG9yJywgc2V0dGluZ3NbJ2FjY2VudC1jb2xvciddKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZXR0aW5nc1snYmctY29sb3InXTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9IHNldHRpbmdzWyd0ZXh0LWNvbG9yJ107XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYCR7c2V0dGluZ3NbJ2JvcmRlci13aWR0aCddfXB4IHNvbGlkICR7c2V0dGluZ3NbJ2JvcmRlci1jb2xvciddfWA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke3NldHRpbmdzWydmb250LXNpemUnXX1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gYCR7c2V0dGluZ3NbJ3BhZGRpbmcteSddfXB4ICR7c2V0dGluZ3NbJ3BhZGRpbmcteCddfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IGAke3NldHRpbmdzWydib3JkZXItcmFkaXVzJ119cHhgO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICAgIGlmICghY2xpY2tHdWkgfHwgIWNsaWNrR3VpLmlzRWRpdGluZ0hVRCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IDk5OTc7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmZhY2U7ICIsICJpbXBvcnQgeyBnZXRQbGF5ZXJOYW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBDaGF0ID0ge1xuICAgIG5hbWU6ICdDaGF0JyxcbiAgICBjYXRlZ29yeTogJ1Zpc3VhbCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXBsYWNlcyB0aGUgZGVmYXVsdCBpbi1nYW1lIGNoYXQgd2l0aCBhIGN1c3RvbWl6YWJsZSBvbmUuJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGRlZmF1bHRYOiA0LFxuICAgIGRlZmF1bHRZOiA1OSxcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIGdhbWVDaGF0OiBudWxsLFxuICAgIGNoYXRPYnNlcnZlcjogbnVsbCxcbiAgICBtYWluT2JzZXJ2ZXI6IG51bGwsXG4gICAgY3VzdG9tSW5wdXQ6IG51bGwsXG5cbiAgICBzZXR0aW5nczogW1xuICAgICAgICB7IGlkOiAnaGlkZS1nYW1lLWNoYXQnLCBuYW1lOiAnSGlkZSBHYW1lIENoYXQnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlLCBkZXNjcmlwdGlvbjogJ0hpZGVzIHRoZSBvcmlnaW5hbCBpbi1nYW1lIGNoYXQgVUkuJyB9LFxuICAgICAgICB7IGlkOiAnZm9udC1zaXplJywgbmFtZTogJ0ZvbnQgU2l6ZScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTQsIG1pbjogMTAsIG1heDogMjQsIHN0ZXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ21heC1tZXNzYWdlcycsIG5hbWU6ICdNYXggTWVzc2FnZXMnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDcsIG1pbjogNSwgbWF4OiAyNSwgc3RlcDogMSB9LFxuICAgICAgICB7IGlkOiAnc2hvdy10aW1lc3RhbXBzJywgbmFtZTogJ1Nob3cgVGltZXN0YW1wcycsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IGZhbHNlIH0sXG4gICAgXSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVHYW1lQ2hhdCgpO1xuXG4gICAgICAgIHRoaXMubWFpbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4gdGhpcy5oYW5kbGVHYW1lQ2hhdCgpKTtcbiAgICAgICAgdGhpcy5tYWluT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5tYWluT2JzZXJ2ZXIpIHRoaXMubWFpbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgaWYgKHRoaXMuY2hhdE9ic2VydmVyKSB0aGlzLmNoYXRPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMucmVzdG9yZUdhbWVDaGF0KCk7XG4gICAgICAgIHRoaXMuZGVzdHJveURpc3BsYXkoKTtcbiAgICB9LFxuXG4gICAgb25UaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICAgICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke21vZC54fXB4YDtcbiAgICAgICAgICAgICAgICBpZiAobW9kLnkgIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHttb2QueX1weGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25TZXR0aW5nVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlR2FtZUNoYXQoKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY2hhdC1jb250YWluZXInO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVzc2FnZXNDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNoYXQtbWVzc2FnZXMnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZXNDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jcmVhdGVDdXN0b21JbnB1dCgpO1xuICAgIH0sXG4gICAgXG4gICAgY3JlYXRlQ3VzdG9tSW5wdXQoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbnB1dFdyYXBwZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNoYXQtaW5wdXQtd3JhcHBlcic7XG5cbiAgICAgICAgdGhpcy5jdXN0b21JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMuY3VzdG9tSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGhpcy5jdXN0b21JbnB1dC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY2hhdC1pbnB1dCc7XG4gICAgICAgIHRoaXMuY3VzdG9tSW5wdXQucGxhY2Vob2xkZXIgPSAnU2VuZCBhIG1lc3NhZ2UuLi4nO1xuXG4gICAgICAgIHRoaXMuY3VzdG9tSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQ2hhdElucHV0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWVJbnB1dCAmJiB0aGlzLmN1c3RvbUlucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnB1dC52YWx1ZSA9IHRoaXMuY3VzdG9tSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudGVyRXZlbnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5ZG93bicsIHsga2V5OiAnRW50ZXInLCBjb2RlOiAnRW50ZXInLCB3aGljaDogMTMsIGtleUNvZGU6IDEzLCBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW5wdXQuZGlzcGF0Y2hFdmVudChlbnRlckV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21JbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBpbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jdXN0b21JbnB1dCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFdyYXBwZXIpO1xuICAgIH0sXG5cbiAgICBzeW5jSW5wdXRWaXNpYmlsaXR5KGdhbWVJbnB1dFdyYXBwZXIpIHtcbiAgICAgICAgY29uc3QgaW5wdXRXcmFwcGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1jaGF0LWlucHV0LXdyYXBwZXInKTtcbiAgICAgICAgaWYgKGdhbWVJbnB1dFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBpbnB1dFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmN1c3RvbUlucHV0LmZvY3VzKCksIDApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRlc3Ryb3lEaXNwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZUdhbWVDaGF0KCkge1xuICAgICAgICBjb25zdCBjaGF0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkNoYXQnKTtcblxuICAgICAgICBpZiAoIWNoYXRDb250YWluZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXRPYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhdE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXRPYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdhbWVDaGF0ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVDaGF0ICE9PSBjaGF0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGF0T2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXRPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGF0T2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nYW1lQ2hhdCA9IGNoYXRDb250YWluZXI7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1jaGF0LW1lc3NhZ2VzJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG91bGRIaWRlID0gdGhpcy5zZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gJ2hpZGUtZ2FtZS1jaGF0JykudmFsdWU7XG4gICAgICAgIHRoaXMuZ2FtZUNoYXQuc3R5bGUudmlzaWJpbGl0eSA9IHNob3VsZEhpZGUgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbiAgICAgICAgdGhpcy5nYW1lQ2hhdC5zdHlsZS5wb2ludGVyRXZlbnRzID0gc2hvdWxkSGlkZSA/ICdub25lJyA6ICdhdXRvJztcblxuICAgICAgICBjb25zdCBtZXNzYWdlc0NvbnRhaW5lciA9IGNoYXRDb250YWluZXIucXVlcnlTZWxlY3RvcignLkNoYXRNZXNzYWdlcycpO1xuICAgICAgICBpZiAobWVzc2FnZXNDb250YWluZXIgJiYgIXRoaXMuY2hhdE9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LWNoYXQtbWVzc2FnZXMnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5NZXNzYWdlV3JhcHBlcicpLmZvckVhY2gobm9kZSA9PiB0aGlzLmFkZE1lc3NhZ2Uobm9kZSkpO1xuXG4gICAgICAgICAgICB0aGlzLmNoYXRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2gobXV0YXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBub2RlLmNsYXNzTGlzdC5jb250YWlucygnTWVzc2FnZVdyYXBwZXInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE1lc3NhZ2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jaGF0T2JzZXJ2ZXIub2JzZXJ2ZShtZXNzYWdlc0NvbnRhaW5lciwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnYW1lSW5wdXRXcmFwcGVyID0gY2hhdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuQ2hhdElucHV0V3JhcHBlcicpO1xuICAgICAgICBpZiAoZ2FtZUlucHV0V3JhcHBlcikge1xuICAgICAgICAgICAgdGhpcy5zeW5jSW5wdXRWaXNpYmlsaXR5KGdhbWVJbnB1dFdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlc3RvcmVHYW1lQ2hhdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUNoYXQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNoYXQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNoYXQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRNZXNzYWdlKG9yaWdpbmFsTm9kZSkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBtZXNzYWdlc0NvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktY2hhdC1tZXNzYWdlcycpO1xuICAgICAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lc3NhZ2VEaXYuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNoYXQtbWVzc2FnZSc7XG4gICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudERpdi5jbGFzc05hbWUgPSAnc2VyZW5pdHktbWVzc2FnZS1jb250ZW50JztcbiAgICAgICAgY29uc3QgbXlOYW1lID0gZ2V0UGxheWVyTmFtZSgpO1xuXG4gICAgICAgIG9yaWdpbmFsTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuSW5kaXZpZHVhbFRleHQnKS5mb3JFYWNoKHNwYW4gPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVkU3BhbiA9IHNwYW4uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgaWYgKG15TmFtZSAmJiBjbG9uZWRTcGFuLnRleHRDb250ZW50ID09PSBteU5hbWUpIHtcbiAgICAgICAgICAgICAgICBjbG9uZWRTcGFuLmNsYXNzTGlzdC5hZGQoJ3NlcmVuaXR5LW1lc3NhZ2Utb3duLW5hbWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvXlxcWy4qXFxdJC8udGVzdChjbG9uZWRTcGFuLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGNsb25lZFNwYW4uY2xhc3NMaXN0LmFkZCgnc2VyZW5pdHktbWVzc2FnZS10YWcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2xvbmVkU3Bhbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lc3NhZ2VEaXYuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09ICdzaG93LXRpbWVzdGFtcHMnKS52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGltZXN0YW1wLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1tZXNzYWdlLXRpbWVzdGFtcCc7XG4gICAgICAgICAgICB0aW1lc3RhbXAudGV4dENvbnRlbnQgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhbXSwgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pO1xuICAgICAgICAgICAgbWVzc2FnZURpdi5pbnNlcnRCZWZvcmUodGltZXN0YW1wLCBjb250ZW50RGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xuXG4gICAgICAgIGNvbnN0IG1heE1lc3NhZ2VzID0gdGhpcy5zZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gJ21heC1tZXNzYWdlcycpLnZhbHVlO1xuICAgICAgICB3aGlsZSAobWVzc2FnZXNDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gbWF4TWVzc2FnZXMpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1lc3NhZ2VzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBhcHBseVN0eWxlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY2hhdC1mb250LXNpemUnLCBgJHtzZXR0aW5nc1snZm9udC1zaXplJ119cHhgKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0OyAiLCAiY29uc3QgS2V5c3Ryb2tlcyA9IHtcbiAgbmFtZTogJ0tleXN0cm9rZXMnLFxuICBjYXRlZ29yeTogJ0NvbWJhdCcsXG4gIGRlc2NyaXB0aW9uOiAnRGlzcGxheXMgeW91ciBrZXlzdHJva2VzIHdpdGggYSBzZXh5LCBtb2Rlcm4gbG9vay4nLFxuICBlbmFibGVkOiB0cnVlLFxuICBkZWZhdWx0WDogOCxcbiAgZGVmYXVsdFk6IDU2MixcbiAgZWxlbWVudDogbnVsbCxcbiAga2V5czoge1xuICAgIHc6IGZhbHNlLCBhOiBmYWxzZSwgczogZmFsc2UsIGQ6IGZhbHNlLFxuICAgICcgJzogZmFsc2UsIGxtYjogZmFsc2UsIHJtYjogZmFsc2VcbiAgfSxcbiAgYm91bmRLZXlEb3duOiBudWxsLFxuICBib3VuZEtleVVwOiBudWxsLFxuICBib3VuZE1vdXNlRG93bjogbnVsbCxcbiAgYm91bmRNb3VzZVVwOiBudWxsLFxuXG4gIHNldHRpbmdzOiBbXG4gICAgeyBpZDogJ3Nob3ctbW91c2UnLCBuYW1lOiAnU2hvdyBNb3VzZSBCdXR0b25zJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICAgIHsgaWQ6ICdzY2FsZScsIG5hbWU6ICdTY2FsZScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMSwgbWluOiAwLjUsIG1heDogMiwgc3RlcDogMC4xIH0sXG4gICAgeyBpZDogJ29wYWNpdHknLCBuYW1lOiAnT3BhY2l0eScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMC44NSwgbWluOiAwLCBtYXg6IDEsIHN0ZXA6IDAuMDUgfSxcbiAgICB7IGlkOiAnZW5hYmxlLWFuaW1hdGlvbnMnLCBuYW1lOiAnRW5hYmxlIEFuaW1hdGlvbnMnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gIF0sXG5cbiAgb25FbmFibGUoKSB7XG4gICAgdGhpcy5jcmVhdGVEaXNwbGF5KCk7XG4gICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgIHRoaXMuYm91bmRLZXlEb3duID0gZSA9PiB0aGlzLnVwZGF0ZUtleVN0YXRlKGUua2V5LnRvTG93ZXJDYXNlKCksIHRydWUpO1xuICAgIHRoaXMuYm91bmRLZXlVcCA9IGUgPT4gdGhpcy51cGRhdGVLZXlTdGF0ZShlLmtleS50b0xvd2VyQ2FzZSgpLCBmYWxzZSk7XG4gICAgdGhpcy5ib3VuZE1vdXNlRG93biA9IGUgPT4ge1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDApIHRoaXMudXBkYXRlS2V5U3RhdGUoJ2xtYicsIHRydWUpO1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDIpIHRoaXMudXBkYXRlS2V5U3RhdGUoJ3JtYicsIHRydWUpO1xuICAgIH07XG4gICAgdGhpcy5ib3VuZE1vdXNlVXAgPSBlID0+IHtcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKSB0aGlzLnVwZGF0ZUtleVN0YXRlKCdsbWInLCBmYWxzZSk7XG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikgdGhpcy51cGRhdGVLZXlTdGF0ZSgncm1iJywgZmFsc2UpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm91bmRLZXlEb3duKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmJvdW5kS2V5VXApO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmJvdW5kTW91c2VEb3duKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwKTtcbiAgfSxcblxuICBvbkRpc2FibGUoKSB7XG4gICAgdGhpcy5kZXN0cm95RGlzcGxheSgpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ib3VuZEtleURvd24pO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuYm91bmRLZXlVcCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuYm91bmRNb3VzZURvd24pO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXApO1xuICB9LFxuXG4gIG9uVGljaygpIHtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlMb2NhdGlvbigpO1xuICB9LFxuICBcbiAgb25TZXR0aW5nVXBkYXRlKCkge1xuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgfSxcblxuICB1cGRhdGVLZXlTdGF0ZShrZXksIGlzUHJlc3NlZCkge1xuICAgIGlmICh0aGlzLmtleXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdGhpcy5rZXlzW2tleV0gPSBpc1ByZXNzZWQ7XG4gICAgICB0aGlzLnVwZGF0ZUtleVZpc3VhbHMoKTtcbiAgICB9XG4gIH0sXG4gIFxuICBjcmVhdGVLZXkodGV4dCwga2V5LCAuLi5leHRyYUNsYXNzZXMpIHtcbiAgICBjb25zdCBrZXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2V5RWxlbWVudC5jbGFzc05hbWUgPSBga2V5c3Ryb2tlcy1rZXkga2V5LSR7a2V5fSAke2V4dHJhQ2xhc3Nlcy5qb2luKCcgJyl9YDtcbiAgICBrZXlFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4ga2V5RWxlbWVudDtcbiAgfSxcbiAgXG4gIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdrZXlzdHJva2VzLWRpc3BsYXknO1xuXG4gICAgY29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdzEuY2xhc3NOYW1lID0gJ2tleXN0cm9rZXMtcm93JztcbiAgICByb3cxLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlS2V5KCdXJywgJ3cnKSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHJvdzEpO1xuXG4gICAgY29uc3Qgcm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdzIuY2xhc3NOYW1lID0gJ2tleXN0cm9rZXMtcm93JztcbiAgICByb3cyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlS2V5KCdBJywgJ2EnKSk7XG4gICAgcm93Mi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUtleSgnUycsICdzJykpO1xuICAgIHJvdzIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVLZXkoJ0QnLCAnZCcpKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocm93Mik7XG4gICAgXG4gICAgY29uc3Qgcm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdzMuY2xhc3NOYW1lID0gJ2tleXN0cm9rZXMtcm93IG1vdXNlLXJvdyc7XG4gICAgcm93My5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUtleSgnTE1CJywgJ2xtYicsICdtb3VzZS1idXR0b24nKSk7XG4gICAgcm93My5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUtleSgnUk1CJywgJ3JtYicsICdtb3VzZS1idXR0b24nKSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHJvdzMpO1xuICAgIFxuICAgIGNvbnN0IHJvdzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3c0LmNsYXNzTmFtZSA9ICdrZXlzdHJva2VzLXJvdyc7XG4gICAgcm93NC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUtleSgnU3BhY2UnLCAnICcsICdzcGFjZS1rZXknKSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHJvdzQpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9LFxuXG4gIGRlc3Ryb3lEaXNwbGF5KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZURpc3BsYXlMb2NhdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgIGNvbnN0IGNsaWNrR3VpID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCgnQ2xpY2tHVUknKTtcbiAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgY29uc3QgbW9kID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCh0aGlzLm5hbWUpO1xuICAgICAgICBpZiAobW9kLnggIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bW9kLnh9cHhgO1xuICAgICAgICBpZiAobW9kLnkgIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHttb2QueX1weGA7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUtleVZpc3VhbHMoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmtleXMpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5rZXktJHtrZXl9YCk7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgdGhpcy5rZXlzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBhcHBseVN0eWxlcygpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2V0dGluZ3Muc2NhbGV9KWA7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBzZXR0aW5ncy5vcGFjaXR5O1xuICAgIFxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1vdXNlJywgc2V0dGluZ3NbJ3Nob3ctbW91c2UnXSk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ25vLWFuaW1hdGlvbnMnLCAhc2V0dGluZ3NbJ2VuYWJsZS1hbmltYXRpb25zJ10pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLZXlzdHJva2VzOyAiLCAiY29uc3QgVG9nZ2xlU3ByaW50ID0ge1xuICAgIG5hbWU6IFwiVG9nZ2xlU3ByaW50XCIsXG4gICAgY2F0ZWdvcnk6IFwiTW92ZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBdXRvbWF0aWNhbGx5IHNwcmludHMgZm9yIHlvdSBieSBzaW11bGF0aW5nIGEgU2hpZnQga2V5IHByZXNzLlwiLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgc3ByaW50aW5nOiBmYWxzZSxcbiAgICBzcHJpbnRJbnRlcnZhbDogbnVsbCxcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIGRlZmF1bHRYOiBcIjgwJVwiLFxuICAgIGRlZmF1bHRZOiBcIjgwJVwiLFxuXG4gICAgc2V0dGluZ3M6IFtcbiAgICAgICAgeyBpZDogXCJzaG93LXRleHRcIiwgbmFtZTogXCJTaG93IFRleHRcIiwgdHlwZTogXCJib29sZWFuXCIsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6IFwiY29sb3ItbW9kZVwiLCBuYW1lOiBcIkNvbG9yIE1vZGVcIiwgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnVGhlbWUnLCAnQ3VzdG9tJ10sIHZhbHVlOiAnVGhlbWUnLCBjb25kaXRpb246IHMgPT4gc1snc2hvdy10ZXh0J10gfSxcbiAgICAgICAgeyBpZDogXCJodWQtdGV4dFwiLCBuYW1lOiBcIkhVRCBUZXh0XCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogXCJbU3ByaW50aW5nIChUb2dnbGVkKV1cIiwgY29uZGl0aW9uOiBzID0+IHNbJ3Nob3ctdGV4dCddIH0sXG4gICAgICAgIHsgaWQ6ICdiZy1jb2xvcicsIG5hbWU6ICdCYWNrZ3JvdW5kIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDMwLCAzMywgNDEsIDAuODUpJywgY29uZGl0aW9uOiBzID0+IHNbJ3Nob3ctdGV4dCddICYmIHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgICAgeyBpZDogJ3RleHQtY29sb3InLCBuYW1lOiAnVGV4dCBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgyMzQsIDIzNCwgMjM0LCAwLjgpJywgY29uZGl0aW9uOiBzID0+IHNbJ3Nob3ctdGV4dCddICYmIHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgICAgeyBpZDogJ2ZvbnQtc2l6ZScsIG5hbWU6ICdGb250IFNpemUnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDE2LCBtaW46IDgsIG1heDogMjQsIHN0ZXA6IDEsIGNvbmRpdGlvbjogcyA9PiBzWydzaG93LXRleHQnXSB9LFxuICAgICAgICB7IGlkOiAncGFkZGluZycsIG5hbWU6ICdQYWRkaW5nJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiA4LCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEsIGNvbmRpdGlvbjogcyA9PiBzWydzaG93LXRleHQnXSB9LFxuICAgICAgICB7IGlkOiAnYm9yZGVyLXJhZGl1cycsIG5hbWU6ICdCb3JkZXIgUmFkaXVzJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxMCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxLCBjb25kaXRpb246IHMgPT4gc1snc2hvdy10ZXh0J10gfSxcbiAgICAgICAgeyBpZDogJ2JvcmRlci13aWR0aCcsIG5hbWU6ICdCb3JkZXIgV2lkdGgnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEsIG1pbjogMCwgbWF4OiA1LCBzdGVwOiAxLCBjb25kaXRpb246IHMgPT4gc1snc2hvdy10ZXh0J10gfSxcbiAgICAgICAgeyBpZDogJ2JvcmRlci1jb2xvcicsIG5hbWU6ICdCb3JkZXIgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyknLCBjb25kaXRpb246IHMgPT4gc1snc2hvdy10ZXh0J10gJiYgc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgIF0sXG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaW50aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BTcHJpbnRpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3Ryb3lEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIG9uVGljaygpIHtcbiAgICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgICBjb25zdCBpc1R5cGluZyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKFsnSU5QVVQnLCAnVEVYVEFSRUEnXS5pbmNsdWRlcyhkb2N1bWVudC5hY3RpdmVFbGVtZW50LnRhZ05hbWUpIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaXNDb250ZW50RWRpdGFibGUpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2hvdWxkQmVTcHJpbnRpbmcgPSAhaXNUeXBpbmcgJiYgKCFjbGlja0d1aSB8fCAhY2xpY2tHdWkuaXNHdWlPcGVuKTtcblxuICAgICAgICBpZiAoc2hvdWxkQmVTcHJpbnRpbmcgJiYgIXRoaXMuc3ByaW50aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0U3ByaW50aW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXNob3VsZEJlU3ByaW50aW5nICYmIHRoaXMuc3ByaW50aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BTcHJpbnRpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB3ZSBhcmUgYWxyZWFkeSBzcHJpbnRpbmcgZW5zdXJlIGEgZnJlc2gga2V5ZG93biBnZXRzIGZpcmVkIGV2ZXJ5IHRpY2sgdG8ga2VlcCBzb21lIGdhbWVzIGhhcHB5XG4gICAgICAgIGlmIChzaG91bGRCZVNwcmludGluZyAmJiB0aGlzLnNwcmludGluZykge1xuICAgICAgICAgICAgdGhpcy5maXJlS2V5RG93bigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICAgIH0sXG5cbiAgICBvblNldHRpbmdVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5KHRydWUpO1xuICAgIH0sXG5cbiAgICBzdGFydFNwcmludGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaW50aW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3ByaW50aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5maXJlS2V5RG93bigpO1xuICAgICAgICAvLyBCYWNrdXAgaW50ZXJ2YWwganVzdCBpbiBjYXNlIHRpY2sgc3RvcHMgZm9yIGEgYml0IChlLmcuIHRhYiBpcyBpbiBiYWNrZ3JvdW5kKVxuICAgICAgICB0aGlzLnNwcmludEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5maXJlS2V5RG93bigpLCAyMDApO1xuICAgIH0sXG5cbiAgICBzdG9wU3ByaW50aW5nKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3ByaW50aW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3ByaW50aW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnNwcmludEludGVydmFsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc3ByaW50SW50ZXJ2YWwpO1xuICAgICAgICAgICAgdGhpcy5zcHJpbnRJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoJ2tleXVwJywgeyBrZXk6ICdTaGlmdCcsIGtleUNvZGU6IDE2LCBjb2RlOiAnU2hpZnRMZWZ0JywgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgfSxcblxuICAgIGZpcmVLZXlEb3duKCkge1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudCgna2V5ZG93bicsIHsga2V5OiAnU2hpZnQnLCBrZXlDb2RlOiAxNiwgY29kZTogJ1NoaWZ0TGVmdCcsIGJ1YmJsZXM6IHRydWUsIHJlcGVhdDogdHJ1ZSB9KSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ3RvZ2dsZXNwcmludC1odWQtZGlzcGxheSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95RGlzcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXNldHRpbmdzWydzaG93LXRleHQnXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVEaXNwbGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHRoaXMuZW5hYmxlZCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHNldHRpbmdzWydodWQtdGV4dCddO1xuXG4gICAgICAgICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICAgICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IHR5cGVvZiBtb2QueCA9PT0gJ3N0cmluZycgPyBtb2QueCA6IGAke21vZC54fXB4YDtcbiAgICAgICAgICAgICAgICBpZiAobW9kLnkgIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB0eXBlb2YgbW9kLnkgPT09ICdzdHJpbmcnID8gbW9kLnkgOiBgJHttb2QueX1weGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYXBwbHlTdHlsZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICAgICAgXG4gICAgICAgIGlmIChzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnVGhlbWUnKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLXBhbmVsKSc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSAndmFyKC0tdGV4dCknO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCB2YXIoLS1ib3JkZXIpYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZXR0aW5nc1snYmctY29sb3InXTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9IHNldHRpbmdzWyd0ZXh0LWNvbG9yJ107XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYCR7c2V0dGluZ3NbJ2JvcmRlci13aWR0aCddfXB4IHNvbGlkICR7c2V0dGluZ3NbJ2JvcmRlci1jb2xvciddfWA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBgJHtzZXR0aW5nc1snZm9udC1zaXplJ119cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9IGAke3NldHRpbmdzWydwYWRkaW5nJ119cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gYCR7c2V0dGluZ3NbJ2JvcmRlci1yYWRpdXMnXX1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IDk5OTc7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlU3ByaW50OyAiLCAiY29uc3QgQXJtb3JIVUQgPSB7XG4gICAgbmFtZTogJ0FybW9ySFVEJyxcbiAgICBjYXRlZ29yeTogJ1BsYXllcicsXG4gICAgZGVzY3JpcHRpb246ICdEaXNwbGF5cyB5b3VyIGN1cnJlbnRseSBlcXVpcHBlZCBhcm1vciBhbmQgc2VsZWN0ZWQgaXRlbS4nLFxuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIG9ic2VydmVyOiBudWxsLFxuICAgIGRlZmF1bHRYOiBcIjkwJVwiLFxuICAgIGRlZmF1bHRZOiBcIjUwJVwiLFxuICAgIHNldHRpbmdzOiBbXG4gICAgICB7IGlkOiAnY29sb3ItbW9kZScsIG5hbWU6ICdDb2xvciBNb2RlJywgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnVGhlbWUnLCAnQ3VzdG9tJ10sIHZhbHVlOiAnVGhlbWUnIH0sXG4gICAgICB7IGlkOiAnc2hvdy1zZWxlY3RlZCcsIG5hbWU6ICdTaG93IFNlbGVjdGVkIEl0ZW0nLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgICB7IGlkOiAnZGlzcGxheS1zdHlsZScsIG5hbWU6ICdEaXNwbGF5IFN0eWxlJywgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnSG9yaXpvbnRhbCcsICdWZXJ0aWNhbCddLCB2YWx1ZTogJ1ZlcnRpY2FsJyB9LFxuICAgICAgeyBpZDogJ2JnLWNvbG9yJywgbmFtZTogJ0JhY2tncm91bmQgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMzAsIDMzLCA0MSwgMC44NSknLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgICAgeyBpZDogJ3BhZGRpbmcnLCBuYW1lOiAnUGFkZGluZycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogNCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxIH0sXG4gICAgICB7IGlkOiAnYm9yZGVyLXJhZGl1cycsIG5hbWU6ICdCb3JkZXIgUmFkaXVzJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAyMCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxIH0sXG4gICAgICB7IGlkOiAnYm9yZGVyLXdpZHRoJywgbmFtZTogJ0JvcmRlciBXaWR0aCcsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMiwgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDEgfSxcbiAgICAgIHsgaWQ6ICdib3JkZXItY29sb3InLCBuYW1lOiAnQm9yZGVyIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgIHsgaWQ6ICdpdGVtLXNpemUnLCBuYW1lOiAnSXRlbSBTaXplJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiA2NCwgbWluOiAxNiwgbWF4OiA2NCwgc3RlcDogMSB9LFxuICAgICAgeyBpZDogJ2l0ZW0tc3BhY2luZycsIG5hbWU6ICdJdGVtIFNwYWNpbmcnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDAsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSB9LFxuICAgIF0sXG4gICAgXG4gICAgZWxlbWVudDogbnVsbCxcbiAgXG4gICAgb25FbmFibGUoKSB7XG4gICAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICAgIHRoaXMuc2V0dXBPYnNlcnZlcigpO1xuICAgIH0sXG4gIFxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVzdHJveURpc3BsYXkoKTtcbiAgICB9LFxuICBcbiAgICBvblRpY2soKSB7XG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9LFxuICAgIFxuICAgIG9uU2V0dGluZ1VwZGF0ZSgpIHtcbiAgICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheSh0cnVlKTsgLy8gRm9yY2UgdXBkYXRlIHRvIHJlZmxlY3Qgc3R5bGUgY2hhbmdlc1xuICAgIH0sXG4gIFxuICAgIHNldHVwT2JzZXJ2ZXIoKSB7XG4gICAgICAgIGNvbnN0IHNldHVwID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaG90YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkhvdEJhckdhbWVJdGVtc0NvbnRhaW5lcicpO1xuICAgICAgICAgICAgaWYgKGhvdGJhciAmJiAhdGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbkNoYW5nZWQgPSBtdXRhdGlvbnMuc29tZShtID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgbS50eXBlID09PSAnYXR0cmlidXRlcycgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICBtLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG0udGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnSW52ZW5JdGVtJylcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb25DaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShob3RiYXIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ2NsYXNzJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkodHJ1ZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWhvdGJhcikge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoc2V0dXAsIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHNldHVwKCk7XG4gICAgfSxcbiAgXG4gICAgY3JlYXRlRGlzcGxheSgpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdhcm1vci1odWQtZGlzcGxheSc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfSxcbiAgXG4gICAgZGVzdHJveURpc3BsYXkoKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICBcbiAgICBleHRyYWN0SW1hZ2UoaXRlbUVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFpdGVtRWxlbWVudCkgcmV0dXJuIG51bGw7XG4gICAgXG4gICAgICAgIGNvbnN0IHR3b0RJbWFnZUljb24gPSBpdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuVHdvREltYWdlSWNvbicpO1xuICAgICAgICBpZiAodHdvREltYWdlSWNvbikge1xuICAgICAgICAgICAgaWYgKHR3b0RJbWFnZUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlICYmIHR3b0RJbWFnZUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnaW1hZ2UnLCBzcmM6IHR3b0RJbWFnZUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlLnNsaWNlKDUsIC0yKSwgZmlsdGVyOiBudWxsIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBpdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuVHdvREl0ZW1HcmF5c2NhbGVWaXNpYmxlUG5nJyk7XG4gICAgICAgICAgICBjb25zdCBjb2xvckhpbnQgPSBpdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuVHdvREl0ZW1HcmF5c2NhbGUnKTtcbiAgICAgICAgICAgIGlmIChpbWcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnaW1hZ2UnLCBzcmM6IGltZy5zcmMsIGZpbHRlcjogY29sb3JIaW50ID8gY29sb3JIaW50LnN0eWxlLmZpbHRlciA6ICcnIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgYmxvY2tJdGVtID0gaXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignLkJsb2NrSXRlbScpO1xuICAgICAgICBpZiAoYmxvY2tJdGVtICYmIGJsb2NrSXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgJiYgYmxvY2tJdGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnaW1hZ2UnLCBzcmM6IGJsb2NrSXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2Uuc2xpY2UoNSwgLTIpLCBmaWx0ZXI6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgdW5maWxsZWQgPSBpdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuSW52ZW5JdGVtVW5maWxsZWQnKTtcbiAgICAgICAgaWYgKHVuZmlsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4geyB0eXBlOiAndW5maWxsZWQnLCBzcmM6IHVuZmlsbGVkLnN0eWxlLmJhY2tncm91bmRJbWFnZS5zbGljZSg1LCAtMikgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgXG4gICAgdXBkYXRlRGlzcGxheShmb3JjZVVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICBcbiAgICAgIC8vIFVwZGF0ZSBwb3NpdGlvblxuICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgaWYgKCFjbGlja0d1aSB8fCAhY2xpY2tHdWkuaXNFZGl0aW5nSFVEKSB7XG4gICAgICAgICAgY29uc3QgbW9kID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCh0aGlzLm5hbWUpO1xuICAgICAgICAgIGlmIChtb2QueCAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSB0eXBlb2YgbW9kLnggPT09ICdzdHJpbmcnID8gbW9kLnggOiBgJHttb2QueH1weGA7XG4gICAgICAgICAgaWYgKG1vZC55ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gdHlwZW9mIG1vZC55ID09PSAnc3RyaW5nJyA/IG1vZC55IDogYCR7bW9kLnl9cHhgO1xuICAgICAgfVxuICBcbiAgICAgIGNvbnN0IGFybW9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkFybW91ckl0ZW1TbG90cycpO1xuICAgICAgY29uc3QgYXJtb3JJdGVtcyA9IGFybW9yQ29udGFpbmVyID8gQXJyYXkuZnJvbShhcm1vckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuSW52ZW5JdGVtJykpIDogW107XG4gICAgICBjb25zdCBhcm1vckltYWdlcyA9IGFybW9ySXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5leHRyYWN0SW1hZ2UoaXRlbSkpLmZpbHRlcihCb29sZWFuKTtcbiAgXG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQodGhpcy5uYW1lKS5zZXR0aW5ncztcbiAgICAgIGNvbnN0IHNob3dTZWxlY3RlZCA9IHNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSAnc2hvdy1zZWxlY3RlZCcpLnZhbHVlO1xuXG4gICAgICBjb25zdCBhbGxJbWFnZXMgPSBbLi4uYXJtb3JJbWFnZXNdO1xuICAgICAgaWYgKHNob3dTZWxlY3RlZCkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSG90YmFySXRlbUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkhvdEJhckdhbWVJdGVtc0NvbnRhaW5lciAuSW52ZW5JdGVtLlNlbGVjdGVkJyk7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtSW1hZ2UgPSB0aGlzLmV4dHJhY3RJbWFnZShzZWxlY3RlZEhvdGJhckl0ZW1FbCk7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbUltYWdlKSB7XG4gICAgICAgICAgICAgIGFsbEltYWdlcy5wdXNoKHNlbGVjdGVkSXRlbUltYWdlKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgY29uc3QgbmV3Q29udGVudEhhc2ggPSBKU09OLnN0cmluZ2lmeShhbGxJbWFnZXMpO1xuICAgICAgaWYgKG5ld0NvbnRlbnRIYXNoICE9PSB0aGlzLmxhc3RDb250ZW50SGFzaCB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGFsbEltYWdlcy5mb3JFYWNoKGltZ0RhdGEgPT4ge1xuICAgICAgICAgIGlmICghaW1nRGF0YSkgcmV0dXJuO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBpdGVtQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblxuICAgICAgICAgIGlmIChpbWdEYXRhLnR5cGUgPT09ICdpbWFnZScgJiYgaW1nRGF0YS5maWx0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1TaXplID0gdGhpcy5zZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gJ2l0ZW0tc2l6ZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgY29sb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbG9yQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIGNvbG9yQ29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgY29sb3JDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICAgICAgY29sb3JDb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAgICAgICAgICAgY29uc3QgY29sb3JTb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNvbG9yU291cmNlLnNyYyA9IGltZ0RhdGEuc3JjO1xuICAgICAgICAgICAgY29sb3JTb3VyY2Uuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICBjb2xvclNvdXJjZS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgICAgICBjb2xvclNvdXJjZS5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnO1xuICAgICAgICAgICAgY29sb3JTb3VyY2Uuc3R5bGUuZmlsdGVyID0gaW1nRGF0YS5maWx0ZXIucmVwbGFjZSgnMWVtJywgYCR7aXRlbVNpemV9cHhgKTtcbiAgICAgICAgICAgIGNvbG9yU291cmNlLnN0eWxlLm1hcmdpbkxlZnQgPSBgLSR7aXRlbVNpemV9cHhgO1xuICAgICAgICAgIFxuICAgICAgICAgICAgY29sb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JTb3VyY2UpO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvckNvbnRhaW5lcik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGdyYXlzY2FsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZ3JheXNjYWxlSW1nLnNyYyA9IGltZ0RhdGEuc3JjO1xuICAgICAgICAgICAgZ3JheXNjYWxlSW1nLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIGdyYXlzY2FsZUltZy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgIGdyYXlzY2FsZUltZy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgICAgICBncmF5c2NhbGVJbWcuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcbiAgICAgICAgICAgIGdyYXlzY2FsZUltZy5zdHlsZS5taXhCbGVuZE1vZGUgPSAnbXVsdGlwbHknO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChncmF5c2NhbGVJbWcpO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZ0VsZW1lbnQuc3JjID0gaW1nRGF0YS5zcmM7XG4gICAgICAgICAgICBpbWdFbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgaW1nRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgICAgICBpbWdFbGVtZW50LnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCc7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxhc3RDb250ZW50SGFzaCA9IG5ld0NvbnRlbnRIYXNoO1xuICAgICAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgXG4gICAgYXBwbHlTdHlsZXMoKSB7XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgICAgXG4gICAgICBpZiAoc2V0dGluZ3NbJ2NvbG9yLW1vZGUnXSA9PT0gJ1RoZW1lJykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLXBhbmVsKSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgdmFyKC0tYm9yZGVyKWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3NbJ2JnLWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgJHtzZXR0aW5nc1snYm9yZGVyLWNvbG9yJ119YDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBgJHtzZXR0aW5nc1sncGFkZGluZyddfXB4YDtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBzZXR0aW5nc1snZGlzcGxheS1zdHlsZSddID09PSAnSG9yaXpvbnRhbCcgPyAncm93JyA6ICdjb2x1bW4nO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmdhcCA9IGAke3NldHRpbmdzWydpdGVtLXNwYWNpbmcnXX1weGA7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgICBcbiAgICAgIGNvbnN0IGNsaWNrR3VpID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCgnQ2xpY2tHVUknKTtcbiAgICAgIGlmICghY2xpY2tHdWkgfHwgIWNsaWNrR3VpLmlzRWRpdGluZ0hVRCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gOTk5NztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIFxuICAgICAgY29uc3QgaXRlbUNvbnRhaW5lcnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFybW9yLWh1ZC1kaXNwbGF5ID4gZGl2Jyk7XG4gICAgICBpdGVtQ29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAke3NldHRpbmdzWydpdGVtLXNpemUnXX1weGA7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHtzZXR0aW5nc1snaXRlbS1zaXplJ119cHhgO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgQXJtb3JIVUQ7ICIsICJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdDb29yZGluYXRlcycsXG4gIGNhdGVnb3J5OiAnVXRpbGl0eScsXG4gIGRlc2NyaXB0aW9uOiAnRGlzcGxheXMgeW91ciBpbi1nYW1lIFgsIFksIFogY29vcmRpbmF0ZXMgYXMgY3VzdG9taXphYmxlIHRleHQuJyxcbiAgZW5hYmxlZDogZmFsc2UsXG4gIGRlZmF1bHRYOiA0MDgsXG4gIGRlZmF1bHRZOiAxMSxcbiAgXG4gIGVsZW1lbnQ6IG51bGwsXG4gIG9yaWdpbmFsRmlsbFRleHQ6IG51bGwsXG4gIHNvdXJjZUNhbnZhczogbnVsbCxcbiAgY2FwdHVyZWRUZXh0czogW10sXG4gIGxhc3RDYXB0dXJlVGltZTogMCxcbiAgY29vcmRpbmF0ZXM6IHsgeDogJzAuMDAnLCB5OiAnMC4wMCcsIHo6ICcwLjAwJyB9LFxuXG4gIHNldHRpbmdzOiBbXG4gICAgeyBpZDogJ2NvbG9yLW1vZGUnLCBuYW1lOiAnQ29sb3IgTW9kZScsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zOiBbJ1RoZW1lJywgJ0N1c3RvbSddLCB2YWx1ZTogJ1RoZW1lJyB9LFxuICAgIHsgaWQ6ICdiZy1jb2xvcicsIG5hbWU6ICdCYWNrZ3JvdW5kIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDMwLCAzMywgNDEsIDAuODUpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAndGV4dC1jb2xvcicsIG5hbWU6ICdUZXh0IENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjRUFFQUVBJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAnZm9udC1zaXplJywgbmFtZTogJ0ZvbnQgU2l6ZScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTQsIG1pbjogOCwgbWF4OiAyNCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdwYWRkaW5nJywgbmFtZTogJ1BhZGRpbmcnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDgsIG1pbjogMCwgbWF4OiAzMCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdib3JkZXItd2lkdGgnLCBuYW1lOiAnQm9yZGVyIFdpZHRoJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxLCBtaW46IDAsIG1heDogNSwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdib3JkZXItY29sb3InLCBuYW1lOiAnQm9yZGVyIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAnYm9yZGVyLXJhZGl1cycsIG5hbWU6ICdCb3JkZXIgUmFkaXVzJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxMCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxIH0sXG4gICAgeyBpZDogJ29wYWNpdHknLCBuYW1lOiAnT3BhY2l0eScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMSwgbWluOiAwLCBtYXg6IDEsIHN0ZXA6IDAuMDUgfSxcbiAgICB7IGlkOiAnc2NhbGUnLCBuYW1lOiAnU2NhbGUnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEsIG1pbjogMC41LCBtYXg6IDIsIHN0ZXA6IDAuMSB9LFxuICAgIHsgaWQ6ICdmb3JtYXQnLCBuYW1lOiAnVGV4dCBGb3JtYXQnLCB0eXBlOiAndGV4dCcsIHZhbHVlOiAnWDoge3h9IFk6IHt5fSBaOiB7en0nLCBkZXNjcmlwdGlvbjogJ1VzZSB7eH0sIHt5fSwgYW5kIHt6fSBhcyBwbGFjZWhvbGRlcnMuJyB9LFxuICAgIHsgaWQ6ICdoaWRlLW9yaWdpbmFsJywgbmFtZTogJ0hpZGUgT3JpZ2luYWwgRGlzcGxheScsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUsIGRlc2NyaXB0aW9uOiAnUHJldmVudHMgdGhlIGdhbWUgZnJvbSBkcmF3aW5nIGl0cyBvd24gY29vcmRpbmF0ZXMuJyB9LFxuICBdLFxuXG4gIG9uRW5hYmxlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdibG94ZC1zaG93Q29vcmRpbmF0ZXMnLCAndHJ1ZScpO1xuICAgIHRoaXMuY3JlYXRlRGlzcGxheSgpO1xuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgfSxcblxuICBvbkRpc2FibGUoKSB7XG4gICAgdGhpcy51bnBhdGNoQ2FudmFzKCk7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgb25UaWNrKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Db29yZGluYXRlQ2FudmFzJyk7XG5cbiAgICAvLyBJZiBjYW52YXMgaXMgZ29uZSwgY2xlYW51cC5cbiAgICBpZiAoIWNhbnZhcykge1xuICAgICAgaWYgKHRoaXMuc291cmNlQ2FudmFzKSB7XG4gICAgICAgIHRoaXMudW5wYXRjaENhbnZhcygpO1xuICAgICAgICB0aGlzLnNvdXJjZUNhbnZhcyA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgZmluZCBhIG5ldyBjYW52YXMsIHN3aXRjaCB0byBpdC5cbiAgICBpZiAoY2FudmFzICE9PSB0aGlzLnNvdXJjZUNhbnZhcykge1xuICAgICAgaWYgKHRoaXMuc291cmNlQ2FudmFzKSB7XG4gICAgICAgIHRoaXMudW5wYXRjaENhbnZhcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMgPSBjYW52YXM7XG4gICAgICB0aGlzLnBhdGNoQ2FudmFzKCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgfSxcblxuICBvblNldHRpbmdVcGRhdGUoKSB7XG4gICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9LFxuXG4gIHBhdGNoQ2FudmFzKCkge1xuICAgIGlmICghdGhpcy5zb3VyY2VDYW52YXMgfHwgdGhpcy5zb3VyY2VDYW52YXMuX3NlcmVuaXR5Q29vcmRzUGF0Y2hlZCkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IGN0eCA9IHRoaXMuc291cmNlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKCFjdHggfHwgY3R4LmZpbGxUZXh0Ll9pc1NlcmVuaXR5Q29vcmRzV3JhcHBlcikgcmV0dXJuO1xuXG4gICAgdGhpcy5vcmlnaW5hbEZpbGxUZXh0ID0gY3R4LmZpbGxUZXh0O1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxUZXh0ID0gZnVuY3Rpb24odGV4dCwgeCwgeSwgbWF4V2lkdGgpIHtcbiAgICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgaWYgKG5vdyAtIHNlbGYubGFzdENhcHR1cmVUaW1lID4gMTAwKSB7XG4gICAgICAgIHNlbGYuY2FwdHVyZWRUZXh0cyA9IFtdO1xuICAgICAgfVxuICAgICAgc2VsZi5sYXN0Q2FwdHVyZVRpbWUgPSBub3c7XG5cbiAgICAgIGlmICgvXi0/XFxkK1xcLlxcZHsyfSQvLnRlc3QodGV4dCkpIHtcbiAgICAgICAgc2VsZi5jYXB0dXJlZFRleHRzLnB1c2godGV4dCk7XG4gICAgICAgIGlmIChzZWxmLmNhcHR1cmVkVGV4dHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgc2VsZi5jb29yZGluYXRlcyA9IHtcbiAgICAgICAgICAgIHg6IHNlbGYuY2FwdHVyZWRUZXh0c1swXSxcbiAgICAgICAgICAgIHk6IHNlbGYuY2FwdHVyZWRUZXh0c1sxXSxcbiAgICAgICAgICAgIHo6IHNlbGYuY2FwdHVyZWRUZXh0c1syXSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHNlbGYudXBkYXRlRGlzcGxheSgpO1xuICAgICAgICAgIHNlbGYuY2FwdHVyZWRUZXh0cyA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IG1vZFNldHRpbmdzID0gc2VsZi5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICAgIGlmIChtb2RTZXR0aW5nc1snaGlkZS1vcmlnaW5hbCddICYmIC9eLT9cXGQrXFwuXFxkezJ9JC8udGVzdCh0ZXh0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYub3JpZ2luYWxGaWxsVGV4dC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgY3R4LmZpbGxUZXh0Ll9pc1NlcmVuaXR5Q29vcmRzV3JhcHBlciA9IHRydWU7XG4gICAgdGhpcy5zb3VyY2VDYW52YXMuX3NlcmVuaXR5Q29vcmRzUGF0Y2hlZCA9IHRydWU7XG4gIH0sXG5cbiAgdW5wYXRjaENhbnZhcygpIHtcbiAgICBpZiAodGhpcy5zb3VyY2VDYW52YXMgJiYgdGhpcy5vcmlnaW5hbEZpbGxUZXh0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLnNvdXJjZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAoY3R4ICYmIGN0eC5maWxsVGV4dC5faXNTZXJlbml0eUNvb3Jkc1dyYXBwZXIpIHtcbiAgICAgICAgICBjdHguZmlsbFRleHQgPSB0aGlzLm9yaWdpbmFsRmlsbFRleHQ7XG4gICAgICAgICAgZGVsZXRlIGN0eC5maWxsVGV4dC5faXNTZXJlbml0eUNvb3Jkc1dyYXBwZXI7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBleHBlY3RlZCBpZiB0aGUgY2FudmFzIHdhcyBkZXN0cm95ZWRcbiAgICAgIH1cbiAgICAgIHRoaXMub3JpZ2luYWxGaWxsVGV4dCA9IG51bGw7XG4gICAgICBpZiAodGhpcy5zb3VyY2VDYW52YXMpIHtcbiAgICAgICAgdGhpcy5zb3VyY2VDYW52YXMuX3NlcmVuaXR5Q29vcmRzUGF0Y2hlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjcmVhdGVEaXNwbGF5KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH0sXG5cbiAgdXBkYXRlRGlzcGxheSgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBzZXR0aW5ncy5mb3JtYXRcbiAgICAgIC5yZXBsYWNlKCd7eH0nLCB0aGlzLmNvb3JkaW5hdGVzLngpXG4gICAgICAucmVwbGFjZSgne3l9JywgdGhpcy5jb29yZGluYXRlcy55KVxuICAgICAgLnJlcGxhY2UoJ3t6fScsIHRoaXMuY29vcmRpbmF0ZXMueik7XG4gIH0sXG5cbiAgdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgaWYgKCFjbGlja0d1aSB8fCAhY2xpY2tHdWkuaXNFZGl0aW5nSFVEKSB7XG4gICAgICBjb25zdCBtb2QgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KHRoaXMubmFtZSk7XG4gICAgICBpZiAobW9kLnggIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bW9kLnh9cHhgO1xuICAgICAgaWYgKG1vZC55ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7bW9kLnl9cHhgO1xuICAgIH1cbiAgfSxcblxuICBhcHBseVN0eWxlcygpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk3O1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuXG4gICAgaWYgKHNldHRpbmdzWydjb2xvci1tb2RlJ10gPT09ICdUaGVtZScpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1wYW5lbCknO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSAndmFyKC0tdGV4dCknO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYCR7c2V0dGluZ3NbJ2JvcmRlci13aWR0aCddfXB4IHNvbGlkIHZhcigtLWJvcmRlcilgO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZXR0aW5nc1snYmctY29sb3InXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gc2V0dGluZ3NbJ3RleHQtY29sb3InXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCAke3NldHRpbmdzWydib3JkZXItY29sb3InXX1gO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9IGAke3NldHRpbmdzLnBhZGRpbmd9cHhgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2V0dGluZ3Muc2NhbGV9KWA7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBzZXR0aW5ncy5vcGFjaXR5O1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke3NldHRpbmdzWydmb250LXNpemUnXX1weGA7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSBgJ0ludGVyJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZmA7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmZvbnRXZWlnaHQgPSAnNjAwJztcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xuICB9XG59OyAiLCAiY29uc3QgQ1BTQ291bnRlciA9IHtcbiAgbmFtZTogJ0NQU0NvdW50ZXInLFxuICBjYXRlZ29yeTogJ1BsYXllcicsXG4gIGRlc2NyaXB0aW9uOiAnRGlzcGxheXMgeW91ciBjbGlja3MgcGVyIHNlY29uZC4nLFxuICBlbmFibGVkOiBmYWxzZSxcbiAgZGVmYXVsdFg6IDcyNCxcbiAgZGVmYXVsdFk6IDcyNixcbiAgc2V0dGluZ3M6IFtcbiAgICB7IGlkOiAnY29sb3ItbW9kZScsIG5hbWU6ICdDb2xvciBNb2RlJywgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnVGhlbWUnLCAnQ3VzdG9tJ10sIHZhbHVlOiAnVGhlbWUnIH0sXG4gICAgeyBpZDogJ2JnLWNvbG9yJywgbmFtZTogJ0JhY2tncm91bmQgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMzAsIDMzLCA0MSwgMC44NSknLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgIHsgaWQ6ICd0ZXh0LWNvbG9yJywgbmFtZTogJ1RleHQgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJyNFQUVBRUEnLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgIHsgaWQ6ICdmb250LXNpemUnLCBuYW1lOiAnRm9udCBTaXplJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxNCwgbWluOiA4LCBtYXg6IDI0LCBzdGVwOiAxIH0sXG4gICAgeyBpZDogJ3BhZGRpbmcnLCBuYW1lOiAnUGFkZGluZycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogOCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxIH0sXG4gICAgeyBpZDogJ2JvcmRlci1yYWRpdXMnLCBuYW1lOiAnQm9yZGVyIFJhZGl1cycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTAsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdib3JkZXItd2lkdGgnLCBuYW1lOiAnQm9yZGVyIFdpZHRoJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxLCBtaW46IDAsIG1heDogNSwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdib3JkZXItY29sb3InLCBuYW1lOiAnQm9yZGVyIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAnc2hvdy1sYWJlbCcsIG5hbWU6ICdTaG93IExhYmVsJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICAgIHsgaWQ6ICdzaG93LWxtYicsIG5hbWU6ICdTaG93IExNQicsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICB7IGlkOiAnc2hvdy1ybWInLCBuYW1lOiAnU2hvdyBSTUInLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAge1xuICAgICAgaWQ6ICdmb3JtYXQnLFxuICAgICAgbmFtZTogJ1RleHQgRm9ybWF0JyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHZhbHVlOiAne2xhYmVsfSB7bG1ifSB8IHtybWJ9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVXNlIHtsYWJlbH0sIHtsbWJ9LCBhbmQge3JtYn0gYXMgcGxhY2Vob2xkZXJzLicsXG4gICAgfSxcbiAgXSxcbiAgXG4gIGxlZnRDbGlja3M6IFtdLFxuICByaWdodENsaWNrczogW10sXG4gIFxuICBlbGVtZW50OiBudWxsLFxuXG4gIG9uRW5hYmxlKCkge1xuICAgIHRoaXMuY3JlYXRlRGlzcGxheSgpO1xuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBvbkRpc2FibGUoKSB7XG4gICAgdGhpcy5kZXN0cm95RGlzcGxheSgpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIG9uVGljaygpIHtcbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLmxlZnRDbGlja3MgPSB0aGlzLmxlZnRDbGlja3MuZmlsdGVyKHQgPT4gbm93IC0gdCA8IDEwMDApO1xuICAgIHRoaXMucmlnaHRDbGlja3MgPSB0aGlzLnJpZ2h0Q2xpY2tzLmZpbHRlcih0ID0+IG5vdyAtIHQgPCAxMDAwKTtcbiAgICBcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfSxcbiAgXG4gIG9uU2V0dGluZ1VwZGF0ZSgpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH0sXG5cbiAgaGFuZGxlTW91c2VEb3duKGUpIHtcbiAgICBpZiAoZS5idXR0b24gPT09IDApIHsgLy8gTGVmdCBjbGlja1xuICAgICAgdGhpcy5sZWZ0Q2xpY2tzLnB1c2gocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgIH0gZWxzZSBpZiAoZS5idXR0b24gPT09IDIpIHsgLy8gUmlnaHQgY2xpY2tcbiAgICAgIHRoaXMucmlnaHRDbGlja3MucHVzaChwZXJmb3JtYW5jZS5ub3coKSk7XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdjcHMtY291bnRlci1kaXNwbGF5JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH0sXG5cbiAgZGVzdHJveURpc3BsYXkoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlRGlzcGxheSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgY29uc3QgbW9kID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCh0aGlzLm5hbWUpO1xuICAgICAgICBpZiAobW9kLnggIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bW9kLnh9cHhgO1xuICAgICAgICBpZiAobW9kLnkgIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHttb2QueX1weGA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICAgIGxldCB0ZXh0ID0gc2V0dGluZ3MuZm9ybWF0O1xuXG4gICAgICBpZiAoc2V0dGluZ3NbJ3Nob3ctbGFiZWwnXSkgdGV4dCA9IHRleHQucmVwbGFjZSgne2xhYmVsfScsICdDUFM6Jyk7IGVsc2UgdGV4dCA9IHRleHQucmVwbGFjZSgne2xhYmVsfScsICcnKTtcbiAgICAgIGlmIChzZXR0aW5nc1snc2hvdy1sbWInXSkgdGV4dCA9IHRleHQucmVwbGFjZSgne2xtYn0nLCB0aGlzLmxlZnRDbGlja3MubGVuZ3RoKTsgZWxzZSB0ZXh0ID0gdGV4dC5yZXBsYWNlKCd7bG1ifScsICcnKTtcbiAgICAgIGlmIChzZXR0aW5nc1snc2hvdy1ybWInXSkgdGV4dCA9IHRleHQucmVwbGFjZSgne3JtYn0nLCB0aGlzLnJpZ2h0Q2xpY2tzLmxlbmd0aCk7IGVsc2UgdGV4dCA9IHRleHQucmVwbGFjZSgne3JtYn0nLCAnJyk7XG4gICAgICBcbiAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQudHJpbSgpLnJlcGxhY2UoL1xcfC9nLCAobWF0Y2gsIG9mZnNldCwgc3RyKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZDaGFyID0gc3RyW29mZnNldCAtIDFdO1xuICAgICAgICBjb25zdCBuZXh0Q2hhciA9IHN0cltvZmZzZXQgKyAxXTtcbiAgICAgICAgaWYgKHByZXZDaGFyICYmIHByZXZDaGFyLnRyaW0oKSA9PT0gJycgJiYgbmV4dENoYXIgJiYgbmV4dENoYXIudHJpbSgpID09PSAnJykge1xuICAgICAgICAgIHJldHVybiAnfCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcmV2Q2hhciB8fCBwcmV2Q2hhci50cmltKCkgPT09ICcnIHx8ICFuZXh0Q2hhciB8fCBuZXh0Q2hhci50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH0pLnRyaW0oKTtcbiAgICB9XG4gIH0sXG5cbiAgYXBwbHlTdHlsZXMoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgXG4gICAgaWYgKHNldHRpbmdzWydjb2xvci1tb2RlJ10gPT09ICdUaGVtZScpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1wYW5lbCknO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSAndmFyKC0tdGV4dCknO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYCR7c2V0dGluZ3NbJ2JvcmRlci13aWR0aCddfXB4IHNvbGlkIHZhcigtLWJvcmRlcilgO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZXR0aW5nc1snYmctY29sb3InXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gc2V0dGluZ3NbJ3RleHQtY29sb3InXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCAke3NldHRpbmdzWydib3JkZXItY29sb3InXX1gO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBgJHtzZXR0aW5nc1snZm9udC1zaXplJ119cHhgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gYCR7c2V0dGluZ3NbJ3BhZGRpbmcnXX1weGA7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IGAke3NldHRpbmdzWydib3JkZXItcmFkaXVzJ119cHhgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IDk5OTc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENQU0NvdW50ZXI7ICIsICJjb25zdCBQaW5nQ291bnRlciA9IHtcbiAgICBuYW1lOiAnUGluZ0NvdW50ZXInLFxuICAgIGNhdGVnb3J5OiAnUGxheWVyJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXlzIHlvdXIgbmV0d29yayBwaW5nLicsXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgZGVmYXVsdFg6IDcyNCxcbiAgICBkZWZhdWx0WTogNzI2LFxuICAgIHNldHRpbmdzOiBbXG4gICAgICB7IGlkOiAnY29sb3ItbW9kZScsIG5hbWU6ICdDb2xvciBNb2RlJywgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnVGhlbWUnLCAnQ3VzdG9tJ10sIHZhbHVlOiAnVGhlbWUnIH0sXG4gICAgICB7IGlkOiAnYmctY29sb3InLCBuYW1lOiAnQmFja2dyb3VuZCBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgzMCwgMzMsIDQxLCAwLjg1KScsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgICB7IGlkOiAndGV4dC1jb2xvcicsIG5hbWU6ICdUZXh0IENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjRUFFQUVBJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgIHsgaWQ6ICdmb250LXNpemUnLCBuYW1lOiAnRm9udCBTaXplJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxNCwgbWluOiA4LCBtYXg6IDI0LCBzdGVwOiAxIH0sXG4gICAgICB7IGlkOiAncGFkZGluZycsIG5hbWU6ICdQYWRkaW5nJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiA4LCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEgfSxcbiAgICAgIHsgaWQ6ICdib3JkZXItcmFkaXVzJywgbmFtZTogJ0JvcmRlciBSYWRpdXMnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEwLCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEgfSxcbiAgICAgIHsgaWQ6ICdib3JkZXItd2lkdGgnLCBuYW1lOiAnQm9yZGVyIFdpZHRoJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxLCBtaW46IDAsIG1heDogNSwgc3RlcDogMSB9LFxuICAgICAgeyBpZDogJ2JvcmRlci1jb2xvcicsIG5hbWU6ICdCb3JkZXIgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyknLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgICAgeyBpZDogJ3Nob3ctbGFiZWwnLCBuYW1lOiAnU2hvdyBMYWJlbCcsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICAgIHsgaWQ6ICdmb3JtYXQnLCBuYW1lOiAnVGV4dCBGb3JtYXQnLCB0eXBlOiAndGV4dCcsIHZhbHVlOiAne2xhYmVsfSB7cGluZ31tcycsIGRlc2NyaXB0aW9uOiAnVXNlIHtsYWJlbH0gYW5kIHtwaW5nfSBhcyBwbGFjZWhvbGRlcnMuJywgfSxcbiAgICAgIHsgaWQ6ICdtb2QtY3JlZGl0JywgbmFtZTogJ01vZCBNYWRlIGJ5IEdFT1JHRUNSIGFuZCBDYXNteXgnLCB0eXBlOiAnaW5mbycsIH1cbiAgICBdLFxuICBcbiAgICBwaW5nOiAnLS0nLFxuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgcGluZ0ludGVydmFsSWQ6IG51bGwsXG4gIFxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgdGhpcy5jcmVhdGVEaXNwbGF5KCk7XG4gICAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgICB0aGlzLnVwZGF0ZVBpbmcoKTtcbiAgICAgIHRoaXMucGluZ0ludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVBpbmcuYmluZCh0aGlzKSwgMjAwMCk7XG4gICAgfSxcbiAgXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgdGhpcy5kZXN0cm95RGlzcGxheSgpO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBpbmdJbnRlcnZhbElkKTtcbiAgICB9LFxuICBcbiAgICBvblRpY2soKSB7XG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9LFxuICBcbiAgICBvblNldHRpbmdVcGRhdGUoKSB7XG4gICAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9LFxuICBcbiAgICBjcmVhdGVEaXNwbGF5KCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ3BpbmctY291bnRlci1kaXNwbGF5JztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9LFxuICBcbiAgICBkZXN0cm95RGlzcGxheSgpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gIFxuICAgIHVwZGF0ZVBpbmcoKSB7XG4gICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICBmZXRjaCh3aW5kb3cubG9jYXRpb24ub3JpZ2luLCB7IG1ldGhvZDogJ0hFQUQnLCBtb2RlOiAnbm8tY29ycycgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGluZyA9IERhdGUubm93KCkgLSBzdGFydDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnBpbmcgPSAnLS0nO1xuICAgICAgICB9KTtcbiAgICB9LFxuICBcbiAgICB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICAgIGlmICghY2xpY2tHdWkgfHwgIWNsaWNrR3VpLmlzRWRpdGluZ0hVRCkge1xuICAgICAgICAgIGNvbnN0IG1vZCA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQodGhpcy5uYW1lKTtcbiAgICAgICAgICBpZiAobW9kLnggIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bW9kLnh9cHhgO1xuICAgICAgICAgIGlmIChtb2QueSAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke21vZC55fXB4YDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgICAgICBsZXQgdGV4dCA9IHNldHRpbmdzLmZvcm1hdDtcbiAgXG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tsYWJlbH0nLCBzZXR0aW5nc1snc2hvdy1sYWJlbCddID8gJ1Bpbmc6JyA6ICcnKTtcbiAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgne3Bpbmd9JywgdGhpcy5waW5nKTtcbiAgXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQudHJpbSgpO1xuICAgICAgfVxuICAgIH0sXG4gIFxuICAgIGFwcGx5U3R5bGVzKCkge1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgXG4gICAgICBpZiAoc2V0dGluZ3NbJ2NvbG9yLW1vZGUnXSA9PT0gJ1RoZW1lJykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLXBhbmVsKSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0KSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgdmFyKC0tYm9yZGVyKWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3NbJ2JnLWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9IHNldHRpbmdzWyd0ZXh0LWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgJHtzZXR0aW5nc1snYm9yZGVyLWNvbG9yJ119YDtcbiAgICAgIH1cbiAgXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBgJHtzZXR0aW5nc1snZm9udC1zaXplJ119cHhgO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBgJHtzZXR0aW5nc1sncGFkZGluZyddfXB4YDtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk3O1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgfVxuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgUGluZ0NvdW50ZXI7ICIsICJjb25zdCBGUFNCb29zdGVyID0ge1xuICBuYW1lOiAnRlBTQm9vc3RlcicsXG4gIGNhdGVnb3J5OiAnVXRpbGl0eScsXG4gIGRlc2NyaXB0aW9uOiAnT3B0aW1pemVzIGdhbWUgcGVyZm9ybWFuY2UgYnkgYWRqdXN0aW5nIHJlc29sdXRpb24gYW5kIG90aGVyIHNldHRpbmdzLicsXG4gIGVuYWJsZWQ6IGZhbHNlLFxuICBjYW52YXM6IG51bGwsXG5cbiAgc2V0dGluZ3M6IFtcbiAgICB7XG4gICAgICBpZDogJ3Jlc29sdXRpb25TY2FsZScsXG4gICAgICBuYW1lOiAnUmVzb2x1dGlvbiBTY2FsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0xvd2VyIHZhbHVlcyBjYW4gaW1wcm92ZSBwZXJmb3JtYW5jZSBhdCB0aGUgY29zdCBvZiBxdWFsaXR5LicsXG4gICAgICB0eXBlOiAnc2xpZGVyJyxcbiAgICAgIHZhbHVlOiAxLFxuICAgICAgbWluOiAwLjEsXG4gICAgICBtYXg6IDEuMCxcbiAgICAgIHN0ZXA6IDAuMDVcbiAgICB9XG4gIF0sXG5cbiAgb25FbmFibGUobWFuYWdlcikge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vYS1jYW52YXMnKTtcbiAgICBpZiAoIXRoaXMuY2FudmFzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRlBTQm9vc3Rlcl0gQ291bGQgbm90IGZpbmQgZ2FtZSBjYW52YXM6ICNub2EtY2FudmFzJyk7XG4gICAgICBtYW5hZ2VyLmRpc2FibGUodGhpcy5uYW1lKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxXaWR0aCkge1xuICAgICAgdGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbFdpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsSGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIH1cbiAgfSxcblxuICBvbkRpc2FibGUobWFuYWdlcikge1xuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsV2lkdGgpIHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gcGFyc2VJbnQodGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbFdpZHRoLCAxMCk7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBwYXJzZUludCh0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsSGVpZ2h0LCAxMCk7XG4gICAgICBkZWxldGUgdGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbFdpZHRoO1xuICAgICAgZGVsZXRlIHRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxIZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICB9XG4gICAgdGhpcy5jYW52YXMgPSBudWxsO1xuICB9LFxuICBcbiAgb25TZXR0aW5nVXBkYXRlKHNldHRpbmdJZCwgdmFsdWUsIG1hbmFnZXIpIHtcbiAgICAvLyBvblRpY2sgd2lsbCBoYW5kbGUgaXRcbiAgfSxcblxuICBvblRpY2soZHQsIG1hbmFnZXIpIHtcbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLmFwcGx5U2V0dGluZ3MobWFuYWdlcik7XG4gICAgfVxuICB9LFxuXG4gIGFwcGx5U2V0dGluZ3MobWFuYWdlcikge1xuICAgIGlmICghdGhpcy5jYW52YXMgfHwgIXRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxXaWR0aCkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IHNldHRpbmdzID0gbWFuYWdlci5nZXQodGhpcy5uYW1lKS5zZXR0aW5ncztcbiAgICBjb25zdCByZXNvbHV0aW9uU2NhbGUgPSBzZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gJ3Jlc29sdXRpb25TY2FsZScpLnZhbHVlO1xuICAgIGNvbnN0IG9yaWdpbmFsV2lkdGggPSBwYXJzZUludCh0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsV2lkdGgsIDEwKTtcbiAgICBjb25zdCBvcmlnaW5hbEhlaWdodCA9IHBhcnNlSW50KHRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxIZWlnaHQsIDEwKTtcblxuICAgIGNvbnN0IG5ld1dpZHRoID0gTWF0aC5yb3VuZChvcmlnaW5hbFdpZHRoICogcmVzb2x1dGlvblNjYWxlKTtcbiAgICBjb25zdCBuZXdIZWlnaHQgPSBNYXRoLnJvdW5kKG9yaWdpbmFsSGVpZ2h0ICogcmVzb2x1dGlvblNjYWxlKTtcblxuICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gbmV3V2lkdGgpIHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gbmV3V2lkdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLmNhbnZhcy5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCAhPT0gJzEwMCUnKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ICE9PSAnMTAwJScpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRlBTQm9vc3RlcjsgIiwgImNvbnN0IEFkQmxvY2tlciA9IHtcbiAgICBuYW1lOiAnQWRCbG9ja2VyJyxcbiAgICBjYXRlZ29yeTogJ1V0aWxpdHknLFxuICAgIGRlc2NyaXB0aW9uOiAnQmxvY2tzIGluLWdhbWUgYWRzIGFuZCB0cmFja2VycyBieSBoaWRpbmcgZWxlbWVudHMgYW5kIGludGVyY2VwdGluZyBuZXR3b3JrIHJlcXVlc3RzLicsXG4gICAgZW5hYmxlZDogdHJ1ZSxcblxuICAgIHNldHRpbmdzOiBbXG4gICAgICAgIHsgaWQ6ICdoaWRlLXBhZ2UtYWRzJywgbmFtZTogJ0hpZGUgSW4tUGFnZSBBZHMnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlLCBkZXNjcmlwdGlvbjogJ0hpZGVzIHZpc2libGUgYWQgY29udGFpbmVycyBhbmQgcG9wdXBzLicgfSxcbiAgICAgICAgeyBpZDogJ2Jsb2NrLW5ldHdvcmstYWRzJywgbmFtZTogJ0Jsb2NrIEFkIE5ldHdvcmsgUmVxdWVzdHMnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlLCBkZXNjcmlwdGlvbjogJ1ByZXZlbnRzIHRoZSBicm93c2VyIGZyb20gcmVxdWVzdGluZyBhZHMgZnJvbSBrbm93biBhZCBzZXJ2ZXJzLicgfVxuICAgIF0sXG5cbiAgICBvcmlnaW5hbEZldGNoOiB3aW5kb3cuZmV0Y2gsXG4gICAgb3JpZ2luYWxYaHJPcGVuOiB3aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW4sXG4gICAgb3JpZ2luYWxYaHJTZW5kOiB3aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQsXG4gICAgb2JzZXJ2ZXI6IG51bGwsXG4gICAgXG4gICAgYWRTZWxlY3RvcnM6IFtcbiAgICAgICAgJy5TdXBlclJhbmtBZENvbnRhaW5lcicsXG4gICAgICAgICcuQWRCYW5uZXJDb250YWluZXInLFxuICAgICAgICAnLlBsYXl3aXJlVmlkZW9XcmFwcGVyJyxcbiAgICAgICAgJy5VaVJlcXVlc3RzJyxcbiAgICAgICAgJy5BZEJhbm5lcicsXG4gICAgICAgICcuR2VuZXJpY1ZpZGVvV3JhcHBlcicsXG4gICAgICAgICcjYmxveGQtaW9fMzAweDYwMF8yJyxcbiAgICAgICAgJy5JbnZlbnRvcnlBZE91dGVyJ1xuICAgIF0sXG4gICAgXG4gICAgYmxvY2tMaXN0OiBbXG4gICAgICAgICdnb29nbGVzeW5kaWNhdGlvbi5jb20nLFxuICAgICAgICAnZ29vZ2xldGFnc2VydmljZXMuY29tJyxcbiAgICAgICAgJ2dvb2dsZS1hbmFseXRpY3MuY29tJyxcbiAgICAgICAgJ2RvdWJsZWNsaWNrLm5ldCcsXG4gICAgICAgICdhZGlucGxheS5jb20nLFxuICAgICAgICAncGxheXdpcmUuY29tJyxcbiAgICAgICAgJ2FtYXpvbi1hZHN5c3RlbS5jb20nLFxuICAgICAgICAnYWRueHMuY29tJ1xuICAgIF0sXG4gICAgXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTZXR0aW5ncygpO1xuICAgIH0sXG4gICAgXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLnVucGF0Y2hOZXR3b3JrUmVxdWVzdHMoKTtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW4taGlkaW5nIGVsZW1lbnRzIGlzIG5vdCBkb25lIHRvIGF2b2lkIGludGVyZmVyaW5nIHdpdGggZ2FtZSBsb2dpYy4gQSByZWZyZXNoIGlzIGJlc3QuXG4gICAgfSxcbiAgICBcbiAgICBvblNldHRpbmdVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTZXR0aW5ncygpO1xuICAgIH0sXG5cbiAgICBhcHBseVNldHRpbmdzKCkge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzWydibG9jay1uZXR3b3JrLWFkcyddKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGNoTmV0d29ya1JlcXVlc3RzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVucGF0Y2hOZXR3b3JrUmVxdWVzdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXR0aW5nc1snaGlkZS1wYWdlLWFkcyddKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVQYWdlQWRzKCk7XG4gICAgICAgICAgICB0aGlzLnNldHVwT2JzZXJ2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIGlzQmxvY2tlZCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tMaXN0LnNvbWUoZG9tYWluID0+IHVybC5pbmNsdWRlcyhkb21haW4pKTtcbiAgICB9LFxuXG4gICAgcGF0Y2hOZXR3b3JrUmVxdWVzdHMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgPyBpbnB1dCA6IGlucHV0LnVybDtcbiAgICAgICAgICAgIGlmIChzZWxmLmlzQmxvY2tlZCh1cmwpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtTZXJlbml0eV0gQmxvY2tlZCBmZXRjaCByZXF1ZXN0IHRvOiAke3VybH1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBSZXNwb25zZShudWxsLCB7IHN0YXR1czogMjA0LCBzdGF0dXNUZXh0OiAnTm8gQ29udGVudCcgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYub3JpZ2luYWxGZXRjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKG1ldGhvZCwgdXJsKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc0Jsb2NrZWQodXJsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzQmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtTZXJlbml0eV0gQmxvY2tlZCBYSFIgcmVxdWVzdCB0bzogJHt1cmx9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9pc0Jsb2NrZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm9yaWdpbmFsWGhyT3Blbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgd2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNCbG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYub3JpZ2luYWxYaHJTZW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHVucGF0Y2hOZXR3b3JrUmVxdWVzdHMoKSB7XG4gICAgICAgIHdpbmRvdy5mZXRjaCA9IHRoaXMub3JpZ2luYWxGZXRjaDtcbiAgICAgICAgd2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuID0gdGhpcy5vcmlnaW5hbFhock9wZW47XG4gICAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IHRoaXMub3JpZ2luYWxYaHJTZW5kO1xuICAgIH0sXG5cbiAgICBoaWRlRWxlbWVudChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnN0eWxlLm9wYWNpdHkgIT09ICcwJykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBoaWRlUGFnZUFkcygpIHtcbiAgICAgICAgdGhpcy5hZFNlbGVjdG9ycy5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goZWwgPT4gdGhpcy5oaWRlRWxlbWVudChlbCkpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFxuICAgIHNldHVwT2JzZXJ2ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZFNlbGVjdG9ycy5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVFbGVtZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goZWwgPT4gdGhpcy5oaWRlRWxlbWVudChlbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZEJsb2NrZXI7ICIsICJjb25zdCBDT05GSUdfS0VZID0gJ2xvZ2xldmVsJztcblxuY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gIHN0YXRpYyBzYXZlKGNvbmZpZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnKTtcbiAgICAgIGNvbnN0IGVuY29kZWQgPSBidG9hKGpzb24pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ09ORklHX0tFWSwgZW5jb2RlZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbQ29uZmlndXJhdGlvbl0gRXJyb3Igc2F2aW5nIGNvbmZpZzonLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBsb2FkKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbmNvZGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ09ORklHX0tFWSk7XG4gICAgICBpZiAoIWVuY29kZWQpIHJldHVybiBudWxsO1xuXG4gICAgICBjb25zdCBqc29uID0gYXRvYihlbmNvZGVkKTtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignW0NvbmZpZ3VyYXRpb25dIEVycm9yIGxvYWRpbmcgY29uZmlnOicsIGVycik7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDT05GSUdfS0VZKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZXNldCgpIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ09ORklHX0tFWSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbQ29uZmlndXJhdGlvbl0gRXJyb3IgcmVzZXR0aW5nIGNvbmZpZzonLCBlcnIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uOyAiLCAiY29uc3QgQ3Jvc3NoYWlyID0ge1xyXG4gICAgbmFtZTogJ0Nyb3NzaGFpcicsXHJcbiAgICBjYXRlZ29yeTogJ1Zpc3VhbCcsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1JlcGxhY2VzIHRoZSBkZWZhdWx0IGdhbWUgY3Jvc3NoYWlyIHdpdGggYSBjdXN0b20gb25lLicsXHJcbiAgICBlbmFibGVkOiBmYWxzZSxcclxuXHJcbiAgICBlbGVtZW50OiBudWxsLFxyXG4gICAgZ2FtZUNyb3NzaGFpcjogbnVsbCxcclxuICAgIGdhbWVDcm9zc2hhaXJJbml0aWFsRGlzcGxheTogbnVsbCxcclxuICAgIG9ic2VydmVyOiBudWxsLFxyXG5cclxuICAgIHNldHRpbmdzOiBbXHJcbiAgICAgICAgeyBpZDogJ2hpZGUtb3JpZ2luYWwnLCBuYW1lOiAnSGlkZSBPcmlnaW5hbCBDcm9zc2hhaXInLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgaWQ6ICdtb2RlJywgXHJcbiAgICAgICAgICAgIG5hbWU6ICdNb2RlJywgXHJcbiAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLCBcclxuICAgICAgICAgICAgdmFsdWU6ICdDcm9zcycsIFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbJ0Nyb3NzJywgJ1BsdXMnLCAnRG90JywgJ0NpcmNsZScsICdULVNoYXBlJywgJ0Fycm93JywgJ0N1c3RvbSBJbWFnZSddIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBpZDogJ2NvbG9yLW1vZGUnLCBuYW1lOiAnQ29sb3IgTW9kZScsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zOiBbJ1RoZW1lJywgJ0N1c3RvbSddLCB2YWx1ZTogJ1RoZW1lJywgY29uZGl0aW9uOiAoc2V0dGluZ3MpID0+IHNldHRpbmdzWydtb2RlJ10gIT09ICdDdXN0b20gSW1hZ2UnIH0sXHJcbiAgICAgICAgeyBpZDogJ2ltYWdlLXVybCcsIG5hbWU6ICdJbWFnZSBVUkwnLCB0eXBlOiAndGV4dCcsIHZhbHVlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9NOE00RzNrLnBuZycsIGNvbmRpdGlvbjogKHNldHRpbmdzKSA9PiBzZXR0aW5nc1snbW9kZSddID09PSAnQ3VzdG9tIEltYWdlJyB9LFxyXG4gICAgICAgIHsgaWQ6ICdzaXplJywgbmFtZTogJ1NpemUnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEyLCBtaW46IDEsIG1heDogMTAwLCBzdGVwOiAxIH0sXHJcbiAgICAgICAgeyBpZDogJ2NvbG9yJywgbmFtZTogJ0NvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjRkZGRkZGJywgY29uZGl0aW9uOiAoc2V0dGluZ3MpID0+IHNldHRpbmdzWydtb2RlJ10gIT09ICdDdXN0b20gSW1hZ2UnICYmIHNldHRpbmdzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXHJcbiAgICAgICAgeyBpZDogJ3RoaWNrbmVzcycsIG5hbWU6ICdUaGlja25lc3MnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDIsIG1pbjogMSwgbWF4OiAyMCwgc3RlcDogMSwgY29uZGl0aW9uOiAoc2V0dGluZ3MpID0+IFsnQ3Jvc3MnLCAnUGx1cycsICdDaXJjbGUnLCAnVC1TaGFwZSddLmluY2x1ZGVzKHNldHRpbmdzWydtb2RlJ10pIH0sXHJcbiAgICAgICAgeyBpZDogJ291dGxpbmUnLCBuYW1lOiAnT3V0bGluZScsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUsIGNvbmRpdGlvbjogKHNldHRpbmdzKSA9PiBzZXR0aW5nc1snbW9kZSddICE9PSAnQ3VzdG9tIEltYWdlJyB9LFxyXG4gICAgICAgIHsgaWQ6ICdvdXRsaW5lLWNvbG9yJywgbmFtZTogJ091dGxpbmUgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJyMwMDAwMDAnLCBjb25kaXRpb246IChzZXR0aW5ncykgPT4gc2V0dGluZ3NbJ291dGxpbmUnXSAmJiBzZXR0aW5nc1snbW9kZSddICE9PSAnQ3VzdG9tIEltYWdlJyAmJiBzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxyXG4gICAgXSxcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNyb3NzaGFpcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaGFuZGxlR2FtZUNyb3NzaGFpcigpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB0aGlzLmhhbmRsZUdhbWVDcm9zc2hhaXIoKSk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlc3Ryb3lEaXNwbGF5KCk7XHJcbiAgICAgICAgdGhpcy5yZXN0b3JlR2FtZUNyb3NzaGFpcigpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNyb3NzaGFpciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5nYW1lQ3Jvc3NoYWlySW5pdGlhbERpc3BsYXkgPSBudWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNldHRpbmdVcGRhdGUoc2V0dGluZ0lkKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDcm9zc2hhaXIoKTtcclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnaGlkZS1vcmlnaW5hbCcpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHYW1lQ3Jvc3NoYWlyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVEaXNwbGF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNyb3NzaGFpcic7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gJzUwJSc7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSAnNTAlJztcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSc7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9ICc5OTk5JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlc3Ryb3lEaXNwbGF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIGhhbmRsZUdhbWVDcm9zc2hhaXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkSGlkZSA9IHRoaXMuc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09ICdoaWRlLW9yaWdpbmFsJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ2FtZUNyb3NzaGFpckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkNyb3NzSGFpcicpO1xyXG5cclxuICAgICAgICBpZiAoc2hvdWxkSGlkZSkge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZUNyb3NzaGFpckVsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lQ3Jvc3NoYWlyICE9PSBnYW1lQ3Jvc3NoYWlyRWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDcm9zc2hhaXIgPSBnYW1lQ3Jvc3NoYWlyRWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3Jvc3NoYWlySW5pdGlhbERpc3BsYXkgPSBnYW1lQ3Jvc3NoYWlyRWwuc3R5bGUuZGlzcGxheTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNyb3NzaGFpci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlR2FtZUNyb3NzaGFpcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHJlc3RvcmVHYW1lQ3Jvc3NoYWlyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVDcm9zc2hhaXIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ3Jvc3NoYWlyLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmdhbWVDcm9zc2hhaXJJbml0aWFsRGlzcGxheSB8fCAnJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB1cGRhdGVDcm9zc2hhaXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcclxuICAgICAgICBsZXQgeyBtb2RlLCBzaXplLCBjb2xvciwgdGhpY2tuZXNzLCBvdXRsaW5lLCAnb3V0bGluZS1jb2xvcic6IG91dGxpbmVDb2xvciwgJ2ltYWdlLXVybCc6IGltYWdlVXJsLCAnY29sb3ItbW9kZSc6IGNvbG9yTW9kZSB9ID0gc2V0dGluZ3M7XHJcblxyXG4gICAgICAgIGlmIChjb2xvck1vZGUgPT09ICdUaGVtZScgJiYgbW9kZSAhPT0gJ0N1c3RvbSBJbWFnZScpIHtcclxuICAgICAgICAgICAgY29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wcmltYXJ5JykudHJpbSgpO1xyXG4gICAgICAgICAgICBvdXRsaW5lQ29sb3IgPSAnIzAwMDAwMCc7IC8vIERlZmF1bHQgb3V0bGluZSBmb3IgdGhlbWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG91dGxpbmVTdHlsZSA9IG91dGxpbmUgPyBgMHB4IDBweCAycHggJHtvdXRsaW5lQ29sb3J9LCAwcHggMHB4IDJweCAke291dGxpbmVDb2xvcn0sIDBweCAwcHggMnB4ICR7b3V0bGluZUNvbG9yfSwgMHB4IDBweCAycHggJHtvdXRsaW5lQ29sb3J9YCA6ICdub25lJztcclxuXHJcbiAgICAgICAgc3dpdGNoKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnQ3VzdG9tIEltYWdlJzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGltYWdlVXJsO1xyXG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gYCR7c2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnRG90JzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZG90LnN0eWxlLndpZHRoID0gYCR7c2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICBkb3Quc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICBkb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgICBkb3Quc3R5bGUuYm9yZGVyUmFkaXVzID0gJzUwJSc7XHJcbiAgICAgICAgICAgICAgICBkb3Quc3R5bGUudGV4dFNoYWRvdyA9IG91dGxpbmVTdHlsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChkb3QpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdDaXJjbGUnOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuc3R5bGUud2lkdGggPSBgJHtzaXplfXB4YDtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5oZWlnaHQgPSBgJHtzaXplfXB4YDtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5ib3JkZXIgPSBgJHt0aGlja25lc3N9cHggc29saWQgJHtjb2xvcn1gO1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLnRleHRTaGFkb3cgPSBvdXRsaW5lU3R5bGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnQ3Jvc3MnOlxyXG4gICAgICAgICAgICBjYXNlICdQbHVzJzpcclxuICAgICAgICAgICAgY2FzZSAnVC1TaGFwZSc6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnYXAgPSBtb2RlID09PSAnQ3Jvc3MnID8gTWF0aC5tYXgoMSwgc2l6ZSAvIDQpIDogMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHsgdG9wOiBgLSR7Z2FwICsgbGVuZ3RofXB4YCwgbGVmdDogYC0ke3RoaWNrbmVzcyAvIDJ9cHhgLCB3aWR0aDogYCR7dGhpY2tuZXNzfXB4YCwgaGVpZ2h0OiBgJHtsZW5ndGh9cHhgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiB7IHRvcDogYCR7Z2FwfXB4YCwgbGVmdDogYC0ke3RoaWNrbmVzcyAvIDJ9cHhgLCB3aWR0aDogYCR7dGhpY2tuZXNzfXB4YCwgaGVpZ2h0OiBgJHtsZW5ndGh9cHhgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogeyBsZWZ0OiBgLSR7Z2FwICsgbGVuZ3RofXB4YCwgdG9wOiBgLSR7dGhpY2tuZXNzIC8gMn1weGAsIHdpZHRoOiBgJHtsZW5ndGh9cHhgLCBoZWlnaHQ6IGAke3RoaWNrbmVzc31weGAgfSxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogeyBsZWZ0OiBgJHtnYXB9cHhgLCB0b3A6IGAtJHt0aGlja25lc3MgLyAyfXB4YCwgd2lkdGg6IGAke2xlbmd0aH1weGAsIGhlaWdodDogYCR7dGhpY2tuZXNzfXB4YCB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZXNUb0RyYXcgPSBbJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCddO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdULVNoYXBlJykgbGluZXNUb0RyYXcgPSBbJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0J107XHJcblxyXG4gICAgICAgICAgICAgICAgbGluZXNUb0RyYXcuZm9yRWFjaChwb3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc3R5bGUudGV4dFNoYWRvdyA9IG91dGxpbmVTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGxpbmUuc3R5bGUsIHBvc2l0aW9uc1twb3NdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnQXJyb3cnOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGFycm93LnN0eWxlLndpZHRoID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgYXJyb3cuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgYXJyb3cuc3R5bGUuYm9yZGVyTGVmdCA9IGAke3NpemUgLyAyfXB4IHNvbGlkIHRyYW5zcGFyZW50YDtcclxuICAgICAgICAgICAgICAgIGFycm93LnN0eWxlLmJvcmRlclJpZ2h0ID0gYCR7c2l6ZSAvIDJ9cHggc29saWQgdHJhbnNwYXJlbnRgO1xyXG4gICAgICAgICAgICAgICAgYXJyb3cuc3R5bGUuYm9yZGVyQm90dG9tID0gYCR7c2l6ZX1weCBzb2xpZCAke2NvbG9yfWA7XHJcbiAgICAgICAgICAgICAgICBpZihvdXRsaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuc3R5bGUuZmlsdGVyID0gYGRyb3Atc2hhZG93KDAgMXB4IDFweCAke291dGxpbmVDb2xvcn0pIGRyb3Atc2hhZG93KDAgLTFweCAxcHggJHtvdXRsaW5lQ29sb3J9KSBkcm9wLXNoYWRvdygxcHggMCAxcHggJHtvdXRsaW5lQ29sb3J9KSBkcm9wLXNoYWRvdygtMXB4IDAgMXB4ICR7b3V0bGluZUNvbG9yfSlgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGFycm93KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcm9zc2hhaXI7ICIsICJjbGFzcyBOb3RpZmljYXRpb25NYW5hZ2VyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbnQtYXdlc29tZS1saW5rJykpIHtcclxuICAgICAgY29uc3QgZm9udEF3ZXNvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICBmb250QXdlc29tZUxpbmsuaWQgPSAnZm9udC1hd2Vzb21lLWxpbmsnO1xyXG4gICAgICBmb250QXdlc29tZUxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG4gICAgICBmb250QXdlc29tZUxpbmsuaHJlZiA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS40L2Nzcy9hbGwubWluLmNzcyc7XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZm9udEF3ZXNvbWVMaW5rKTtcclxuICAgIH1cclxuICAgICAgXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1jb250YWluZXInKSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1jb250YWluZXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktbm90aWZpY2F0aW9uLWNvbnRhaW5lcic7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93KHsgdGl0bGUgPSAnU2VyZW5pdHknLCBtZXNzYWdlLCB0eXBlID0gJ2luZm8nLCBkdXJhdGlvbiA9IDMwMDAgfSkge1xyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gYHNlcmVuaXR5LW5vdGlmaWNhdGlvbiBzZXJlbml0eS1ub3RpZmljYXRpb24tJHt0eXBlfWA7XHJcbiAgICBcclxuICAgIGNvbnN0IGljb25NYXAgPSB7XHJcbiAgICAgIGluZm86IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxNWMtLjU1IDAtMS0uNDUtMS0xdi00YzAtLjU1LjQ1LTEgMS0xczEgLjQ1IDEgMXY0YzAgLjU1LS40NSAxLTEgMXptMS04aC0yVjdoMnYyelwiPjwvcGF0aD48L3N2Zz5gLFxyXG4gICAgICBzdWNjZXNzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDE1bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6XCI+PC9wYXRoPjwvc3ZnPmAsXHJcbiAgICAgIHdhcm5pbmc6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0elwiPjwvcGF0aD48L3N2Zz5gLFxyXG4gICAgICBlcnJvcjogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi0yaDJ2MnptMC00aC0yVjdoMnYyelwiPjwvcGF0aD48L3N2Zz5gLFxyXG4gICAgfTtcclxuXHJcbiAgICBub3RpZmljYXRpb24uaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24td3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZXJlbml0eS1ub3RpZmljYXRpb24taWNvblwiPiR7aWNvbk1hcFt0eXBlXSB8fCBpY29uTWFwLmluZm99PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktbm90aWZpY2F0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktbm90aWZpY2F0aW9uLXRpdGxlXCI+JHt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktbm90aWZpY2F0aW9uLW1lc3NhZ2VcIj4ke21lc3NhZ2V9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwic2VyZW5pdHktbm90aWZpY2F0aW9uLWNsb3NlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktbm90aWZpY2F0aW9uLXRpbWVyXCI+PC9kaXY+XHJcbiAgICBgO1xyXG4gICAgXHJcbiAgICB0aGlzLmNvbnRhaW5lci5wcmVwZW5kKG5vdGlmaWNhdGlvbik7XHJcbiAgICBcclxuICAgIC8vIEFuaW1hdGUgaW5cclxuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5hbmltYXRpb24gPSAnc2VyZW5pdHktbm90aWZpY2F0aW9uLWluIDAuNXMgZm9yd2FyZHMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4yLCAxKSc7XHJcblxyXG4gICAgY29uc3QgdGltZXJCYXIgPSBub3RpZmljYXRpb24ucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi10aW1lcicpO1xyXG4gICAgdGltZXJCYXIuc3R5bGUudHJhbnNpdGlvbiA9IGB3aWR0aCAke2R1cmF0aW9ufW1zIGxpbmVhcmA7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZih0aW1lckJhcikgdGltZXJCYXIuc3R5bGUud2lkdGggPSAnMCUnO1xyXG4gICAgfSwgMTApO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgICBpZiAobm90aWZpY2F0aW9uLmNsYXNzTGlzdC5jb250YWlucygnZXhpdGluZycpKSByZXR1cm47XHJcbiAgICAgIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdleGl0aW5nJyk7XHJcbiAgICAgIFxyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5hbmltYXRpb24gPSAnc2VyZW5pdHktbm90aWZpY2F0aW9uLW91dCAwLjVzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjgsIDAsIDAuOCwgMCknO1xyXG4gICAgICBub3RpZmljYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKGUpID0+IHtcclxuICAgICAgICBpZihlLmFuaW1hdGlvbk5hbWUgPT09ICdzZXJlbml0eS1ub3RpZmljYXRpb24tb3V0Jykge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBub3RpZmljYXRpb24ucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1jbG9zZScpO1xyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSwgeyBvbmNlOiB0cnVlIH0pO1xyXG4gICAgXHJcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoY2xvc2UsIGR1cmF0aW9uKTtcclxuXHJcbiAgICBub3RpZmljYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgdGltZXJCYXIuc3R5bGUud2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHRpbWVyQmFyKS53aWR0aDtcclxuICAgIH0pO1xyXG5cclxuICAgIG5vdGlmaWNhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsb3NlLCBkdXJhdGlvbik7IC8vIHJlc3RhcnQgd2l0aCBmdWxsIGR1cmF0aW9uXHJcbiAgICAgICAgdGltZXJCYXIuc3R5bGUudHJhbnNpdGlvbiA9IGB3aWR0aCAke2R1cmF0aW9ufW1zIGxpbmVhcmA7XHJcbiAgICAgICAgdGltZXJCYXIuc3R5bGUud2lkdGggPSAnMCUnO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25NYW5hZ2VyOyAiLCAiY29uc3QgTm90aWZpY2F0aW9ucyA9IHtcclxuICBuYW1lOiAnTm90aWZpY2F0aW9ucycsXHJcbiAgY2F0ZWdvcnk6ICdVdGlsaXR5JyxcclxuICBkZXNjcmlwdGlvbjogJ1Nob3dzIGFsZXJ0cyB3aGVuIG1vZHVsZXMgYXJlIHRvZ2dsZWQuJyxcclxuICBlbmFibGVkOiBmYWxzZSxcclxuICBzZXR0aW5nczogW11cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbnM7ICIsICJpbXBvcnQgeyBnZXRSYWluYm93Q29sb3IgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG4vLyBBIGhlbHBlciB0byBjYWNoZSBjYW52YXMgY29udGV4dCBmb3IgbWVhc3VyaW5nLCBpbXByb3ZpbmcgcGVyZm9ybWFuY2UuXHJcbmNvbnN0IFRfQ1RYX0NBQ0hFID0ge1xyXG4gICAgX2N0eDogbnVsbCxcclxuICAgIGdldENvbnRleHQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fY3R4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdHg7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBBcnJheUxpc3QgPSB7XHJcbiAgICBuYW1lOiAnQXJyYXlMaXN0JyxcclxuICAgIGNhdGVnb3J5OiAnVmlzdWFsJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnRGlzcGxheXMgYSBsaXN0IG9mIGVuYWJsZWQgbW9kdWxlcy4nLFxyXG4gICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICBlbGVtZW50OiBudWxsLFxyXG4gICAgXHJcbiAgICBzZXR0aW5nczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdjb2xvci1tb2RlJyxcclxuICAgICAgICAgICAgbmFtZTogJ0NvbG9yIE1vZGUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBjb2xvciBzdHlsZSBvZiB0aGUgbW9kdWxlIGxpc3QuJyxcclxuICAgICAgICAgICAgdHlwZTogJ3NlbGVjdCcsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFsnUmFpbmJvdycsICdTdGF0aWMnXSxcclxuICAgICAgICAgICAgdmFsdWU6ICdTdGF0aWMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndXNlLXRoZW1lLWNvbG9yJyxcclxuICAgICAgICAgICAgbmFtZTogJ1VzZSBUaGVtZSBDb2xvcicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVXNlIHRoZSBtYWluIHRoZW1lIGNvbG9yIGZvciBzdGF0aWMgbW9kZS4nLFxyXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25kaXRpb246IChzZXR0aW5ncykgPT4gc2V0dGluZ3NbJ2NvbG9yLW1vZGUnXSA9PT0gJ1N0YXRpYydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdzdGF0aWMtY29sb3InLFxyXG4gICAgICAgICAgICBuYW1lOiAnQ3VzdG9tIFN0YXRpYyBDb2xvcicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGNvbG9yIG9mIHRoZSB0ZXh0IGlmIG5vdCB1c2luZyB0aGUgdGhlbWUgY29sb3IuJyxcclxuICAgICAgICAgICAgdHlwZTogJ2NvbG9yJyxcclxuICAgICAgICAgICAgdmFsdWU6ICdyZ2JhKDk0LCAxMTQsIDIzNSwgMSknLFxyXG4gICAgICAgICAgICBjb25kaXRpb246IChzZXR0aW5ncykgPT4gc2V0dGluZ3NbJ2NvbG9yLW1vZGUnXSA9PT0gJ1N0YXRpYycgJiYgIXNldHRpbmdzWyd1c2UtdGhlbWUtY29sb3InXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2JvcmRlcicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTaG93IEJvcmRlcicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGlzcGxheSBhIGNvbG9yZWQgYm9yZGVyIG9uIHRoZSBzaWRlIG9mIHRoZSBsaXN0LicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndGV4dC1zaGFkb3cnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGV4dCBTaGFkb3cnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FkZHMgYSBzaGFkb3cgdG8gdGhlIHRleHQgZm9yIGJldHRlciB2aXNpYmlsaXR5LicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZm9udC1zaXplJyxcclxuICAgICAgICAgICAgbmFtZTogJ0ZvbnQgU2l6ZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGZvbnQgc2l6ZSBvZiB0aGUgbW9kdWxlIG5hbWVzLicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdzbGlkZXInLFxyXG4gICAgICAgICAgICBtaW46IDEwLFxyXG4gICAgICAgICAgICBtYXg6IDIwLFxyXG4gICAgICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgICAgICB2YWx1ZTogMTRcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG5cclxuICAgIG9uRW5hYmxlKG1hbmFnZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1hcnJheWxpc3QtY29udGFpbmVyJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKG1hbmFnZXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvblRpY2soZHQsIG1hbmFnZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBleGNsdWRlZCA9IFsnQ2xpY2tHVUknLCAnQXJyYXlMaXN0JywgJ05vdGlmaWNhdGlvbnMnXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBHZXQgZm9udCBzdHlsZXMgdG8gYWNjdXJhdGVseSBtZWFzdXJlIHRleHQgd2lkdGhcclxuICAgICAgICBjb25zdCBmb250U2l6ZSA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICdmb250LXNpemUnKTtcclxuICAgICAgICBjb25zdCBmb250V2VpZ2h0ID0gNjAwOyAvLyBBcyBkZWZpbmVkIGluIHN0eWxlcy5jc3NcclxuICAgICAgICBjb25zdCBmb250RmFtaWx5ID0gJ0ludGVyJzsgLy8gQXMgZGVmaW5lZCBpbiBzdHlsZXMuY3NzXHJcbiAgICAgICAgY29uc3QgZm9udCA9IGAke2ZvbnRXZWlnaHR9ICR7Zm9udFNpemV9cHggJHtmb250RmFtaWx5fWA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IFRfQ1RYX0NBQ0hFLmdldENvbnRleHQoKTtcclxuICAgICAgICBjb250ZXh0LmZvbnQgPSBmb250O1xyXG5cclxuICAgICAgICBjb25zdCBlbmFibGVkTW9kdWxlcyA9IG1hbmFnZXIubGlzdCgpXHJcbiAgICAgICAgICAgIC5maWx0ZXIobSA9PiBtLmVuYWJsZWQgJiYgIWV4Y2x1ZGVkLmluY2x1ZGVzKG0ubmFtZSkpXHJcbiAgICAgICAgICAgIC5tYXAobSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQobS5uYW1lKS53aWR0aFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIud2lkdGggLSBhLndpZHRoIHx8IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbG9yTW9kZSA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICdjb2xvci1tb2RlJyk7XHJcbiAgICAgICAgY29uc3QgdXNlVGhlbWVDb2xvciA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICd1c2UtdGhlbWUtY29sb3InKTtcclxuICAgICAgICBsZXQgc3RhdGljQ29sb3IgPSB0aGlzLmdldFNldHRpbmdWYWx1ZShtYW5hZ2VyLCAnc3RhdGljLWNvbG9yJyk7XHJcbiAgICAgICAgY29uc3Qgc2hvd0JvcmRlciA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICdib3JkZXInKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoY29sb3JNb2RlID09PSAnU3RhdGljJyAmJiB1c2VUaGVtZUNvbG9yKSB7XHJcbiAgICAgICAgICAgIHN0YXRpY0NvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tcHJpbWFyeScpLnRyaW0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZW5hYmxlZE1vZHVsZXMuZm9yRWFjaCgobW9kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1vZEVsZW1lbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWFycmF5bGlzdC1pdGVtJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JNb2RlID09PSAnUmFpbmJvdycgPyBnZXRSYWluYm93Q29sb3IoaW5kZXgpIDogc3RhdGljQ29sb3I7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtb2RFbGVtZW50LnN0eWxlLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIG1vZEVsZW1lbnQudGV4dENvbnRlbnQgPSBtb2QubmFtZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzaG93Qm9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3JkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktYXJyYXlsaXN0LWJvcmRlcic7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgbW9kRWxlbWVudC5hcHBlbmRDaGlsZChib3JkZXJFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG1vZEVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgb25TZXR0aW5nVXBkYXRlKHNldHRpbmdJZCwgdmFsdWUsIG1hbmFnZXIpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKG1hbmFnZXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVTdHlsZShtYW5hZ2VyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dFNoYWRvdyA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICd0ZXh0LXNoYWRvdycpO1xyXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gdGhpcy5nZXRTZXR0aW5nVmFsdWUobWFuYWdlciwgJ2ZvbnQtc2l6ZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke2ZvbnRTaXplfXB4YDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnd2l0aC1zaGFkb3cnLCB0ZXh0U2hhZG93KTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsIHNldHRpbmdJZCkge1xyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG1hbmFnZXIuZ2V0KCdBcnJheUxpc3QnKTtcclxuICAgICAgICBpZiAoIW1vZHVsZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IG1vZHVsZS5zZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gc2V0dGluZ0lkKTtcclxuICAgICAgICByZXR1cm4gc2V0dGluZyA/IHNldHRpbmcudmFsdWUgOiBudWxsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJyYXlMaXN0OyAiLCAiY29uc3QgV2F5cG9pbnRNYW5hZ2VyID0ge1xuICBuYW1lOiAnV2F5cG9pbnQnLCAvLyBLZWVwIG5hbWUgZm9yIGNvbnNpc3RlbmN5XG4gIGNhdGVnb3J5OiAnVXRpbGl0eScsXG4gIGRlc2NyaXB0aW9uOiAnTWFuYWdlcyBhbmQgZGlzcGxheXMgbXVsdGlwbGUgd2F5cG9pbnRzIGluIHRoZSB3b3JsZC4nLFxuICBlbmFibGVkOiBmYWxzZSxcblxuICB3YXlwb2ludHM6IFtdLFxuICB3YXlwb2ludEVsZW1lbnRzOiBuZXcgTWFwKCksXG4gIFxuICBjYW1lcmE6IG51bGwsXG4gIGVudGl0aWVzOiBudWxsLFxuICBkZWF0aE1hcmtlck9ic2VydmVyOiBudWxsLFxuXG4gIHNldHRpbmdzOiBbXG4gICAgICB7IGlkOiAnaW5mbycsIG5hbWU6ICdXYXlwb2ludCBNYW5hZ2VyJywgdHlwZTogJ2luZm8nLCBkZXNjcmlwdGlvbjogJ0NsaWNrIHRoZSBzZXR0aW5ncyBjb2cgdG8gbWFuYWdlIHlvdXIgd2F5cG9pbnRzLid9XG4gIF0sXG5cbiAgb25FbmFibGUobWFuYWdlcikge1xuICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgdGhpcy5sb2FkV2F5cG9pbnRzKCk7XG4gICAgdGhpcy53YXlwb2ludHMuZm9yRWFjaCh3cCA9PiB0aGlzLmNyZWF0ZVdheXBvaW50RWxlbWVudCh3cCkpO1xuICB9LFxuXG4gIG9uRGlzYWJsZSgpIHtcbiAgICBpZiAodGhpcy5kZWF0aE1hcmtlck9ic2VydmVyKSB0aGlzLmRlYXRoTWFya2VyT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHRoaXMud2F5cG9pbnRFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG4gICAgdGhpcy53YXlwb2ludEVsZW1lbnRzLmNsZWFyKCk7XG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMuZW50aXRpZXMgPSBudWxsO1xuICB9LFxuICBcbiAgb25UaWNrKCkge1xuICAgIGlmICghdGhpcy5jYW1lcmEgfHwgIXRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgdGhpcy5maW5kR2FtZURhdGEoKTtcbiAgICB9XG4gICAgdGhpcy53YXlwb2ludHMuZm9yRWFjaCh3cCA9PiB0aGlzLnVwZGF0ZVdheXBvaW50UG9zaXRpb24od3ApKTtcbiAgfSxcblxuICAvLyAtLS0gV2F5cG9pbnQgTWFuYWdlbWVudCAtLS1cblxuICBnZXRXYXlwb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMud2F5cG9pbnRzO1xuICB9LFxuXG4gIGFkZFdheXBvaW50KGRhdGEpIHtcbiAgICBjb25zdCBuZXdXYXlwb2ludCA9IHtcbiAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgdGl0bGU6ICdOZXcgV2F5cG9pbnQnLFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB6OiAwLFxuICAgICAgY29sb3I6ICcjNUU3MkVCJyxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAuLi5kYXRhXG4gICAgfTtcbiAgICB0aGlzLndheXBvaW50cy5wdXNoKG5ld1dheXBvaW50KTtcbiAgICB0aGlzLmNyZWF0ZVdheXBvaW50RWxlbWVudChuZXdXYXlwb2ludCk7XG4gICAgdGhpcy5zYXZlV2F5cG9pbnRzKCk7XG4gIH0sXG5cbiAgcmVtb3ZlV2F5cG9pbnQoaWQpIHtcbiAgICB0aGlzLndheXBvaW50cyA9IHRoaXMud2F5cG9pbnRzLmZpbHRlcih3cCA9PiB3cC5pZCAhPT0gaWQpO1xuICAgIGlmICh0aGlzLndheXBvaW50RWxlbWVudHMuaGFzKGlkKSkge1xuICAgICAgdGhpcy53YXlwb2ludEVsZW1lbnRzLmdldChpZCkucmVtb3ZlKCk7XG4gICAgICB0aGlzLndheXBvaW50RWxlbWVudHMuZGVsZXRlKGlkKTtcbiAgICB9XG4gICAgdGhpcy5zYXZlV2F5cG9pbnRzKCk7XG4gIH0sXG5cbiAgdXBkYXRlV2F5cG9pbnQoaWQsIGRhdGEpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMud2F5cG9pbnRzLmZpbmRJbmRleCh3cCA9PiB3cC5pZCA9PT0gaWQpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMud2F5cG9pbnRzW2luZGV4XSA9IHsgLi4udGhpcy53YXlwb2ludHNbaW5kZXhdLCAuLi5kYXRhIH07XG4gICAgICB0aGlzLnVwZGF0ZVdheXBvaW50RWxlbWVudCh0aGlzLndheXBvaW50c1tpbmRleF0pO1xuICAgICAgdGhpcy5zYXZlV2F5cG9pbnRzKCk7XG4gICAgfVxuICB9LFxuXG4gIHNhdmVXYXlwb2ludHMoKSB7XG4gICAgdGhpcy5tYW5hZ2VyLnNhdmVDb25maWd1cmF0aW9uKCk7XG4gIH0sXG5cbiAgbG9hZFdheXBvaW50cyhzYXZlZFdheXBvaW50cykge1xuICAgIHRoaXMud2F5cG9pbnRzID0gc2F2ZWRXYXlwb2ludHMgfHwgdGhpcy5tYW5hZ2VyLmV4cG9ydENvbmZpZ3VyYXRpb24oKS53YXlwb2ludHMgfHwgW107XG4gICAgdGhpcy53YXlwb2ludEVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xuICAgIHRoaXMud2F5cG9pbnRFbGVtZW50cy5jbGVhcigpO1xuICAgIHRoaXMud2F5cG9pbnRzLmZvckVhY2god3AgPT4gdGhpcy5jcmVhdGVXYXlwb2ludEVsZW1lbnQod3ApKTtcbiAgfSxcbiAgXG4gIGdldEN1cnJlbnRQbGF5ZXJQb3NpdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuZW50aXRpZXMpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGlkID0gdGhpcy5lbnRpdGllcy5wbGF5ZXJFbnRpdHkgfHwgMTtcbiAgICBjb25zdCBwb3MgPSB0aGlzLmVudGl0aWVzLmdldFN0YXRlKGlkLCBcInBvc2l0aW9uXCIpIHx8IHRoaXMuZW50aXRpZXMuZ2V0U3RhdGUoaWQsIFwicGh5c2ljc1wiKTtcbiAgICBpZiAoIXBvcyB8fCAhcG9zLnBvc2l0aW9uKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBbeCwgeSwgel0gPSBwb3MucG9zaXRpb247XG4gICAgcmV0dXJuIHsgeDogeC50b0ZpeGVkKDIpLCB5OiB5LnRvRml4ZWQoMiksIHo6IHoudG9GaXhlZCgyKSB9O1xuICB9LFxuXG4gIC8vIC0tLSBSZW5kZXJpbmcgLS0tXG5cbiAgY3JlYXRlV2F5cG9pbnRFbGVtZW50KHdheXBvaW50KSB7XG4gICAgaWYgKHRoaXMud2F5cG9pbnRFbGVtZW50cy5oYXMod2F5cG9pbnQuaWQpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXdheXBvaW50LXN0YXRpYyc7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3YXlwb2ludC1zdGF0aWMtaWNvblwiPlxuICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAzODQgNTEyXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTcyLjI2OCA1MDEuNjdDMjYuOTcgMjkxLjAzMSAwIDI2OS40MTMgMCAxOTIgMCA4NS45NjEgODUuOTYxIDAgMTkyIDBzMTkyIDg1Ljk2MSAxOTIgMTkyYzAgNzcuNDEzLTI2Ljk3IDk5LjAzMS0xNzIuMjY4IDMwOS42N2EyNCAyNCAwIDAxLTQzLjQ2NCAwek0xOTIgMjU2YTY0IDY0IDAgMTAwLTEyOCA2NCA2NCAwIDAwMCAxMjh6XCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2F5cG9pbnQtc3RhdGljLXRleHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2F5cG9pbnQtc3RhdGljLXRpdGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3Mud2F5cG9pbnQtc3RhdGljLWRpc3RhbmNlXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgdGhpcy53YXlwb2ludEVsZW1lbnRzLnNldCh3YXlwb2ludC5pZCwgZWxlbWVudCk7XG4gICAgdGhpcy51cGRhdGVXYXlwb2ludEVsZW1lbnQod2F5cG9pbnQpO1xuICB9LFxuXG4gIHVwZGF0ZVdheXBvaW50RWxlbWVudCh3YXlwb2ludCkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMud2F5cG9pbnRFbGVtZW50cy5nZXQod2F5cG9pbnQuaWQpO1xuICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy53YXlwb2ludC1zdGF0aWMtdGl0bGUnKS50ZXh0Q29udGVudCA9IHdheXBvaW50LnRpdGxlO1xuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13YXlwb2ludC1jb2xvcicsIHdheXBvaW50LmNvbG9yKTtcbiAgfSxcblxuICBmaW5kR2FtZURhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaG90YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Ib3RCYXJDb250YWluZXJcIik7XG4gICAgICAgIGlmICghaG90YmFyKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGRlcHMgPSBPYmplY3QudmFsdWVzKGhvdGJhcilbMF0/LnJldHVybj8udXBkYXRlUXVldWU/Lmxhc3RFZmZlY3Q/LmRlcHM7XG4gICAgICAgIGlmICghZGVwcykgcmV0dXJuO1xuICAgICAgICBjb25zdCByb290ID0gZGVwc1syXTtcbiAgICAgICAgaWYgKCFyb290KSByZXR1cm47XG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBPYmplY3QudmFsdWVzKHJvb3QpLmZpbmQobyA9PiBvPy5lbnRpdGllcz8uZ2V0U3RhdGUpPy5lbnRpdGllcztcbiAgICAgICAgZm9yIChjb25zdCBvYmogb2YgT2JqZWN0LnZhbHVlcyhyb290KSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgb2JqICYmIFwiY2FtZXJhXCIgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEgPSBvYmouY2FtZXJhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgICAgdGhpcy5lbnRpdGllcyA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZVdheXBvaW50UG9zaXRpb24od2F5cG9pbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy53YXlwb2ludEVsZW1lbnRzLmdldCh3YXlwb2ludC5pZCk7XG4gICAgaWYgKCFlbGVtZW50IHx8ICF0aGlzLmNhbWVyYSB8fCAhdGhpcy5lbnRpdGllcyB8fCAhd2F5cG9pbnQuZW5hYmxlZCkge1xuICAgICAgICBpZihlbGVtZW50KSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbGFtcCA9ICh2YWwsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSk7XG4gICAgXG4gICAgY29uc3QgaWQgPSB0aGlzLmVudGl0aWVzLnBsYXllckVudGl0eSB8fCAxO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuZW50aXRpZXMuZ2V0U3RhdGUoaWQsIFwicG9zaXRpb25cIikgfHwgdGhpcy5lbnRpdGllcy5nZXRTdGF0ZShpZCwgXCJwaHlzaWNzXCIpO1xuICAgIGlmICghcG9zIHx8ICFwb3MucG9zaXRpb24pIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBbcHgsIHB5LCBwel0gPSBwb3MucG9zaXRpb247XG4gICAgY29uc3QgZHggPSB3YXlwb2ludC54IC0gcHg7XG4gICAgY29uc3QgZHkgPSBweSAtIHdheXBvaW50Lnk7XG4gICAgY29uc3QgZHogPSB3YXlwb2ludC56IC0gcHo7XG4gICAgXG4gICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6KTtcblxuICAgIGNvbnN0IHsgcGl0Y2gsIGhlYWRpbmcgfSA9IHRoaXMuY2FtZXJhO1xuICAgIGNvbnN0IGZ4ID0gTWF0aC5jb3MocGl0Y2gpICogTWF0aC5zaW4oaGVhZGluZyk7XG4gICAgY29uc3QgZnkgPSBNYXRoLnNpbihwaXRjaCk7XG4gICAgY29uc3QgZnogPSBNYXRoLmNvcyhwaXRjaCkgKiBNYXRoLmNvcyhoZWFkaW5nKTtcbiAgICBjb25zdCByeCA9IE1hdGguc2luKGhlYWRpbmcgLSBNYXRoLlBJIC8gMik7XG4gICAgY29uc3QgcnogPSBNYXRoLmNvcyhoZWFkaW5nIC0gTWF0aC5QSSAvIDIpO1xuICAgIGNvbnN0IHV4ID0gZnkgKiByeiwgdXkgPSBmeiAqIHJ4IC0gZnggKiByeiwgdXogPSAtZnkgKiByeDtcbiAgICBjb25zdCB1bCA9IE1hdGguc3FydCh1eCp1eCArIHV5KnV5ICsgdXoqdXopO1xuICAgIGNvbnN0IHVwWCA9IHV4L3VsLCB1cFkgPSB1eS91bCwgdXBaID0gdXovdWw7XG4gICAgY29uc3QgZG90Rm9yd2FyZCA9IGZ4KmR4ICsgZnkqZHkgKyBmeipkejtcbiAgICBjb25zdCBkb3RSaWdodCA9IHJ4KmR4ICsgcnoqZHo7XG4gICAgY29uc3QgZG90VXAgPSB1cFgqZHggKyB1cFkqZHkgKyB1cFoqZHo7XG5cbiAgICBpZiAoZG90Rm9yd2FyZCA8IDAgfHwgZGlzdGFuY2UgPCAxLjUpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCwgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IHNjYWxlUHJvamVjdGlvbiA9IDUwMCAvIGRvdEZvcndhcmQ7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IGNsYW1wKC1kb3RSaWdodCAqIHNjYWxlUHJvamVjdGlvbiwgLXNjcmVlbldpZHRoLzIsIHNjcmVlbldpZHRoLzIpO1xuICAgIGNvbnN0IG9mZnNldFkgPSBjbGFtcChkb3RVcCAqIHNjYWxlUHJvamVjdGlvbiwgLXNjcmVlbkhlaWdodC8yLCBzY3JlZW5IZWlnaHQvMik7XG5cbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7c2NyZWVuV2lkdGgvMiArIG9mZnNldFh9cHhgO1xuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7c2NyZWVuSGVpZ2h0LzIgLSBvZmZzZXRZfXB4YDtcblxuICAgIGNvbnN0IHNjYWxlID0gY2xhbXAoMSAtIChkaXN0YW5jZSAvIDIwMCksIDAuNCwgMS4yKTtcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpIHNjYWxlKCR7c2NhbGV9KWA7XG4gICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcud2F5cG9pbnQtc3RhdGljLWRpc3RhbmNlJykudGV4dENvbnRlbnQgPSBgJHtkaXN0YW5jZS50b0ZpeGVkKDApfW1gO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYXlwb2ludE1hbmFnZXI7ICIsICJpbXBvcnQgQ2xpY2tHVUkgZnJvbSAnLi9tb2R1bGVzL3Zpc3VhbC9DbGlja0dVSSc7XG5pbXBvcnQgRlBTQ291bnRlciBmcm9tICcuL21vZHVsZXMvdmlzdWFsL0ZQU0NvdW50ZXInO1xuaW1wb3J0IEludGVyZmFjZSBmcm9tICcuL21vZHVsZXMvdmlzdWFsL0ludGVyZmFjZSc7XG5pbXBvcnQgQ2hhdCBmcm9tICcuL21vZHVsZXMvdmlzdWFsL0NoYXQnO1xuaW1wb3J0IEtleXN0cm9rZXMgZnJvbSAnLi9tb2R1bGVzL2NvbWJhdC9LZXlzdHJva2VzJztcbmltcG9ydCBUb2dnbGVTcHJpbnQgZnJvbSAnLi9tb2R1bGVzL21vdmVtZW50L1RvZ2dsZVNwcmludCc7O1xuaW1wb3J0IEFybW9ySFVEIGZyb20gJy4vbW9kdWxlcy9wbGF5ZXIvQXJtb3JIVUQnO1xuaW1wb3J0IEhvdGJhciBmcm9tICcuL21vZHVsZXMvcGxheWVyL0hvdGJhcic7XG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSAnLi9tb2R1bGVzL3V0aWxpdHkvQ29vcmRzJztcbmltcG9ydCBDUFNDb3VudGVyIGZyb20gJy4vbW9kdWxlcy9wbGF5ZXIvQ1BTQ291bnRlcic7XG5pbXBvcnQgUGluZ0NvdW50ZXIgZnJvbSAnLi9tb2R1bGVzL3BsYXllci9QaW5nQ291bnRlcic7XG5pbXBvcnQgRlBTQm9vc3RlciBmcm9tICcuL21vZHVsZXMvdXRpbGl0eS9GUFNCb29zdGVyJztcbmltcG9ydCBBZEJsb2NrZXIgZnJvbSAnLi9tb2R1bGVzL3V0aWxpdHkvQWRCbG9ja2VyJztcbmltcG9ydCBDb25maWd1cmF0aW9uIGZyb20gJy4vQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgQ3Jvc3NoYWlyIGZyb20gJy4vbW9kdWxlcy92aXN1YWwvQ3Jvc3NoYWlyJ1xuaW1wb3J0IE5vdGlmaWNhdGlvbk1hbmFnZXIgZnJvbSAnLi9Ob3RpZmljYXRpb25NYW5hZ2VyJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4vbW9kdWxlcy91dGlsaXR5L05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IEFycmF5TGlzdCBmcm9tICcuL21vZHVsZXMvdmlzdWFsL0FycmF5TGlzdCc7XG5pbXBvcnQgV2F5cG9pbnQgZnJvbSAnLi9tb2R1bGVzL3V0aWxpdHkvV2F5cG9pbnQnO1xuXG5jbGFzcyBNb2R1bGVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoeyB0aWNrUmF0ZSA9IDYwIH0gPSB7fSkge1xuICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLm1vZHVsZURlZnMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5jYXRlZ29yaWVzID0gW1xuICAgICAgJ0NvbWJhdCcsICdNb3ZlbWVudCcsICdQbGF5ZXInLCAnVmlzdWFsJywgJ1V0aWxpdHknXG4gICAgXTtcbiAgICB0aGlzLmF1dG9TYXZlID0gdHJ1ZTtcbiAgICB0aGlzLmF1dG9Mb2FkID0gdHJ1ZTsgLyogZGVmYXVsdCB0byB0cnVlIHNvIGNvbmZpZ3VyYXRpb24gbG9hZHMgb24gc3RhcnR1cCAqL1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmh1ZFZpc2liaWxpdHlJbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5ub3RpZmljYXRpb25zID0gbmV3IE5vdGlmaWNhdGlvbk1hbmFnZXIoKTtcbiAgICBcbiAgICB0aGlzLmxhc3RUaWNrID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy50aWNrZXIgPSB0aGlzLnRpY2tlci5iaW5kKHRoaXMpO1xuICAgIFxuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy5zdGFydEh1ZFZpc2liaWxpdHlDaGVjaygpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2tlcik7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBpZiAodGhpcy5hdXRvTG9hZCkge1xuICAgICAgdGhpcy5sb2FkQ29uZmlndXJhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLmFwcGx5SW5pdGlhbFN0YXRlcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBhbGxNb2R1bGVzID0gW1xuICAgICAgQ2xpY2tHVUksXG4gICAgICBGUFNDb3VudGVyLFxuICAgICAgSW50ZXJmYWNlLFxuICAgICAgQ2hhdCxcbiAgICAgIEtleXN0cm9rZXMsXG4gICAgICBUb2dnbGVTcHJpbnQsXG4gICAgICBBcm1vckhVRCxcbiAgICAgIENvb3JkaW5hdGVzLFxuICAgICAgQ1BTQ291bnRlcixcbiAgICAgIEZQU0Jvb3N0ZXIsXG4gICAgICBBZEJsb2NrZXIsXG4gICAgICBDcm9zc2hhaXIsXG4gICAgICBOb3RpZmljYXRpb25zLFxuICAgICAgQXJyYXlMaXN0LFxuICAgICAgUGluZ0NvdW50ZXIsXG4gICAgICBXYXlwb2ludFxuICAgIF07XG4gICAgXG4gICAgYWxsTW9kdWxlcy5mb3JFYWNoKG1vZCA9PiB7XG4gICAgICB0aGlzLm1vZHVsZURlZnMuc2V0KG1vZC5uYW1lLCBtb2QpO1xuICAgICAgdGhpcy5hZGRNb2R1bGUobW9kKVxuICAgIH0pO1xuICB9XG5cbiAgYWRkTW9kdWxlKG1vZCkge1xuICAgIGlmICghbW9kIHx8IHR5cGVvZiBtb2QubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTW9kdWxlIG11c3QgaGF2ZSBhIHVuaXF1ZSBcIm5hbWVcIiBwcm9wZXJ0eS4nKTtcbiAgICB9XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIGNhdGVnb3J5OiAnVXRpbGl0eScsXG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIG9uRW5hYmxlKCkge30sXG4gICAgICBvbkRpc2FibGUoKSB7fSxcbiAgICAgIG9uVGljaygpIHt9LFxuICAgICAgb25TZXR0aW5nVXBkYXRlKCkge30sXG4gICAgICBzZXR0aW5nczogW10sXG4gICAgICB4OiBtb2QuZGVmYXVsdFggIT09IHVuZGVmaW5lZCA/IG1vZC5kZWZhdWx0WCA6IG51bGwsXG4gICAgICB5OiBtb2QuZGVmYXVsdFkgIT09IHVuZGVmaW5lZCA/IG1vZC5kZWZhdWx0WSA6IG51bGwsXG4gICAgICAuLi5tb2QsXG4gICAgfTtcbiAgICBcbiAgICBkZWxldGUgbm9ybWFsaXplZC5kZWZhdWx0WDtcbiAgICBkZWxldGUgbm9ybWFsaXplZC5kZWZhdWx0WTtcblxuICAgIG5vcm1hbGl6ZWQuc2V0dGluZ3MgPSBub3JtYWxpemVkLnNldHRpbmdzLm1hcChzID0+ICh7XG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAuLi5zXG4gICAgfSkpO1xuXG4gICAgdGhpcy5tb2R1bGVzLnNldChub3JtYWxpemVkLm5hbWUsIG5vcm1hbGl6ZWQpO1xuICAgIHJldHVybiBub3JtYWxpemVkO1xuICB9XG5cbiAgZW5hYmxlKG5hbWUpIHtcbiAgICBjb25zdCBtID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICBpZiAobSAmJiAhbS5lbmFibGVkKSB7XG4gICAgICBtLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgdHJ5IHsgbS5vbkVuYWJsZSh0aGlzKTsgfSBjYXRjaCAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoYFtNb2R1bGVNYW5hZ2VyXSBvbkVuYWJsZSBlcnJvciBpbiBcIiR7bmFtZX1cIjpgLCBlcnIpOyB9XG4gICAgICBtLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLnNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgICBpZiAodGhpcy5pbml0aWFsaXplZCAmJiB0aGlzLmdldCgnTm90aWZpY2F0aW9ucycpPy5lbmFibGVkKSB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5zaG93KHtcbiAgICAgICAgICAgIHRpdGxlOiAnTW9kdWxlIEVuYWJsZWQnLFxuICAgICAgICAgICAgbWVzc2FnZTogYDxiPiR7bmFtZX08L2I+IGhhcyBiZWVuIGVuYWJsZWQuYCxcbiAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXNhYmxlKG5hbWUpIHtcbiAgICBjb25zdCBtID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICBpZiAobSAmJiBtLmVuYWJsZWQpIHtcbiAgICAgIG0uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgdHJ5IHsgbS5vbkRpc2FibGUodGhpcyk7IH0gY2F0Y2ggKGVycikgeyBjb25zb2xlLmVycm9yKGBbTW9kdWxlTWFuYWdlcl0gb25EaXNhYmxlIGVycm9yIGluIFwiJHtuYW1lfVwiOmAsIGVycik7IH1cbiAgICAgIHRoaXMuc2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkICYmIG5hbWUgIT09ICdDbGlja0dVSScgJiYgdGhpcy5nZXQoJ05vdGlmaWNhdGlvbnMnKT8uZW5hYmxlZCkge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuc2hvdyh7XG4gICAgICAgICAgICB0aXRsZTogJ01vZHVsZSBEaXNhYmxlZCcsXG4gICAgICAgICAgICBtZXNzYWdlOiBgPGI+JHtuYW1lfTwvYj4gaGFzIGJlZW4gZGlzYWJsZWQuYCxcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKG5hbWUpIHtcbiAgICBjb25zdCBtID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICBpZiAobSkge1xuICAgICAgbS5lbmFibGVkID8gdGhpcy5kaXNhYmxlKG5hbWUpIDogdGhpcy5lbmFibGUobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTW9kdWxlU2V0dGluZyhtb2R1bGVOYW1lLCBzZXR0aW5nSWQsIHZhbHVlKSB7XG4gICAgY29uc3QgbSA9IHRoaXMubW9kdWxlcy5nZXQobW9kdWxlTmFtZSk7XG4gICAgaWYgKCFtKSByZXR1cm47XG5cbiAgICBjb25zdCBzZXR0aW5nID0gbS5zZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gc2V0dGluZ0lkKTtcbiAgICBpZiAoc2V0dGluZykge1xuICAgICAgc2V0dGluZy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiBtLm9uU2V0dGluZ1VwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG0ub25TZXR0aW5nVXBkYXRlKHNldHRpbmdJZCwgdmFsdWUsIHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbTW9kdWxlTWFuYWdlcl0gb25TZXR0aW5nVXBkYXRlIGVycm9yIGluIFwiJHttb2R1bGVOYW1lfVwiOmAsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNb2R1bGVQb3NpdGlvbihtb2R1bGVOYW1lLCB4LCB5KSB7XG4gICAgY29uc3QgbSA9IHRoaXMubW9kdWxlcy5nZXQobW9kdWxlTmFtZSk7XG4gICAgaWYgKG0pIHtcbiAgICAgIG0ueCA9IHg7XG4gICAgICBtLnkgPSB5O1xuICAgICAgdGhpcy5zYXZlQ29uZmlndXJhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0TW9kdWxlU2V0dGluZ3MobW9kdWxlTmFtZSkge1xuICAgIGNvbnN0IG1vZERlZiA9IHRoaXMubW9kdWxlRGVmcy5nZXQobW9kdWxlTmFtZSk7XG4gICAgY29uc3QgY3VycmVudE1vZCA9IHRoaXMuZ2V0KG1vZHVsZU5hbWUpO1xuXG4gICAgaWYgKCFtb2REZWYgfHwgIWN1cnJlbnRNb2QpIHJldHVybjtcblxuICAgIGlmIChtb2REZWYuc2V0dGluZ3MpIHtcbiAgICAgIG1vZERlZi5zZXR0aW5ncy5mb3JFYWNoKGRlZmF1bHRTZXR0aW5nID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVNb2R1bGVTZXR0aW5nKG1vZHVsZU5hbWUsIGRlZmF1bHRTZXR0aW5nLmlkLCBkZWZhdWx0U2V0dGluZy52YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZU1vZHVsZVBvc2l0aW9uKG1vZHVsZU5hbWUsIG1vZERlZi54IHx8IG51bGwsIG1vZERlZi55IHx8IG51bGwpO1xuICB9XG5cbiAgZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgfVxuXG4gIGxpc3QoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5tb2R1bGVzLnZhbHVlcygpKTtcbiAgfVxuXG4gIGdldE1vZHVsZXNCeUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdCgpLmZpbHRlcihtID0+IG0uY2F0ZWdvcnkgPT09IGNhdGVnb3J5KTtcbiAgfVxuXG4gIHRpY2tlcihub3cpIHtcbiAgICBjb25zdCBkdCA9IG5vdyAtIHRoaXMubGFzdFRpY2s7XG4gICAgdGhpcy5tb2R1bGVzLmZvckVhY2goKG0pID0+IHtcbiAgICAgIGlmIChtLmVuYWJsZWQgJiYgdHlwZW9mIG0ub25UaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyeSB7IG0ub25UaWNrKGR0LCB0aGlzKTsgfSBjYXRjaCAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoYFtNb2R1bGVNYW5hZ2VyXSBvblRpY2sgZXJyb3IgaW4gXCIke20ubmFtZX1cIjpgLCBlcnIpOyB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5sYXN0VGljayA9IG5vdztcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrZXIpO1xuICB9XG5cbiAgc2F2ZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgaWYgKCF0aGlzLmF1dG9TYXZlKSByZXR1cm47XG4gICAgdGhpcy5mb3JjZVNhdmVDb25maWd1cmF0aW9uKCk7XG4gIH1cblxuICBmb3JjZVNhdmVDb25maWd1cmF0aW9uKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgYXV0b1NhdmU6IHRoaXMuYXV0b1NhdmUsXG4gICAgICAgIGF1dG9Mb2FkOiB0aGlzLmF1dG9Mb2FkLFxuICAgICAgICB0aGVtZToge1xuICAgICAgICAgICAgcHJpbWFyeTogZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tcHJpbWFyeScpLnRyaW0oKSxcbiAgICAgICAgICAgIHBhbmVsQmFzZTogZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tcGFuZWwtYmFzZScpLnRyaW0oKSxcbiAgICAgICAgICAgIHBhbmVsT3BhY2l0eTogZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tcGFuZWwtb3BhY2l0eScpLnRyaW0oKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtb2RdIG9mIHRoaXMubW9kdWxlcy5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbmZpZ1tuYW1lXSA9IHtcbiAgICAgICAgZW5hYmxlZDogbW9kLmVuYWJsZWQsXG4gICAgICAgIHg6IG1vZC54LFxuICAgICAgICB5OiBtb2QueSxcbiAgICAgICAgc2V0dGluZ3M6IG1vZC5zZXR0aW5ncy5tYXAocyA9PiAoeyBpZDogcy5pZCwgdmFsdWU6IHMudmFsdWUgfSkpXG4gICAgICB9O1xuICAgICAgaWYgKG5hbWUgPT09ICdXYXlwb2ludCcpIHtcbiAgICAgICAgY29uZmlnW25hbWVdLndheXBvaW50cyA9IG1vZC5nZXRXYXlwb2ludHMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQ29uZmlndXJhdGlvbi5zYXZlKGNvbmZpZyk7XG4gIH1cblxuICBsb2FkQ29uZmlndXJhdGlvbihjb25maWdUb0xvYWQpIHtcbiAgICBjb25zdCBjb25maWcgPSBjb25maWdUb0xvYWQgfHwgQ29uZmlndXJhdGlvbi5sb2FkKCk7XG4gICAgaWYgKCFjb25maWcpIHJldHVybjtcblxuICAgIGlmIChjb25maWcubWV0YSkge1xuICAgICAgdGhpcy5hdXRvU2F2ZSA9IGNvbmZpZy5tZXRhLmF1dG9TYXZlID8/IHRoaXMuYXV0b1NhdmU7XG4gICAgICB0aGlzLmF1dG9Mb2FkID0gY29uZmlnLm1ldGEuYXV0b0xvYWQgPz8gdGhpcy5hdXRvTG9hZDtcbiAgICAgIGlmIChjb25maWcubWV0YS50aGVtZSAmJiBjb25maWcubWV0YS50aGVtZS5wcmltYXJ5KSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgY29uZmlnLm1ldGEudGhlbWUucHJpbWFyeSk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5LWRhcmsnLCB0aGlzLnNoYWRlQ29sb3IoY29uZmlnLm1ldGEudGhlbWUucHJpbWFyeSwgLTIwKSk7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLm1ldGEudGhlbWUgJiYgY29uZmlnLm1ldGEudGhlbWUucGFuZWxCYXNlKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wYW5lbC1iYXNlJywgY29uZmlnLm1ldGEudGhlbWUucGFuZWxCYXNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcubWV0YS50aGVtZSAmJiBjb25maWcubWV0YS50aGVtZS5wYW5lbE9wYWNpdHkpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXBhbmVsLW9wYWNpdHknLCBjb25maWcubWV0YS50aGVtZS5wYW5lbE9wYWNpdHkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgW25hbWUsIG1vZENvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnKSkge1xuICAgICAgaWYgKG5hbWUgPT09ICdtZXRhJykgY29udGludWU7XG4gICAgICBjb25zdCBtb2QgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgaWYgKG1vZCkge1xuICAgICAgICBtb2QueCA9IG1vZENvbmZpZy54ICE9PSBudWxsICYmIG1vZENvbmZpZy54ICE9PSB1bmRlZmluZWQgPyBtb2RDb25maWcueCA6IG51bGw7XG4gICAgICAgIG1vZC55ID0gbW9kQ29uZmlnLnkgIT09IG51bGwgJiYgbW9kQ29uZmlnLnkgIT09IHVuZGVmaW5lZCA/IG1vZENvbmZpZy55IDogbnVsbDtcblxuICAgICAgICBpZiAobW9kQ29uZmlnLnNldHRpbmdzKSB7XG4gICAgICAgICAgbW9kQ29uZmlnLnNldHRpbmdzLmZvckVhY2goc2F2ZWRTZXR0aW5nID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmcgPSBtb2Quc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09IHNhdmVkU2V0dGluZy5pZCk7XG4gICAgICAgICAgICBpZiAoc2V0dGluZyAmJiBzZXR0aW5nLnZhbHVlICE9PSBzYXZlZFNldHRpbmcudmFsdWUpIHtcbiAgICAgICAgICAgICAgc2V0dGluZy52YWx1ZSA9IHNhdmVkU2V0dGluZy52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb2Qub25TZXR0aW5nVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIG1vZC5vblNldHRpbmdVcGRhdGUoc2V0dGluZy5pZCwgc2F2ZWRTZXR0aW5nLnZhbHVlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtNb2R1bGVNYW5hZ2VyXSBvblNldHRpbmdVcGRhdGUgZXJyb3IgaW4gXCIke25hbWV9XCI6YCwgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gUmVzdG9yZSBlbmFibGVkIHN0YXRlIChhbmQgdHJpZ2dlciBvbkVuYWJsZSlcbiAgICAgICAgaWYgKG1vZENvbmZpZy5lbmFibGVkICYmICFtb2QuZW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMuZW5hYmxlKG5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKCFtb2RDb25maWcuZW5hYmxlZCAmJiBtb2QuZW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZShuYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5hbWUgPT09ICdXYXlwb2ludCcgJiYgbW9kQ29uZmlnLndheXBvaW50cykge1xuICAgICAgICAgIG1vZC5sb2FkV2F5cG9pbnRzKG1vZENvbmZpZy53YXlwb2ludHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLmFwcGx5SW5pdGlhbFN0YXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5SW5pdGlhbFN0YXRlcygpIHtcbiAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgaWYgKG0uZW5hYmxlZCAmJiAhbS5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgbS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlKG0ubmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRDb25maWd1cmF0aW9uKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9O1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1vZF0gb2YgdGhpcy5tb2R1bGVzLmVudHJpZXMoKSkge1xuICAgICAgY29uZmlnW25hbWVdID0ge1xuICAgICAgICBlbmFibGVkOiBtb2QuZW5hYmxlZCxcbiAgICAgICAgeDogbW9kLngsXG4gICAgICAgIHk6IG1vZC55LFxuICAgICAgICBzZXR0aW5nczogbW9kLnNldHRpbmdzLm1hcChzID0+ICh7IGlkOiBzLmlkLCB2YWx1ZTogcy52YWx1ZSB9KSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBpbXBvcnRDb25maWd1cmF0aW9uKGNvbmZpZ1N0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKGNvbmZpZ1N0cmluZyk7XG4gICAgICBDb25maWd1cmF0aW9uLnNhdmUoY29uZmlnKTtcbiAgICAgIHRoaXMubG9hZENvbmZpZ3VyYXRpb24oY29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tDb25maWd1cmF0aW9uXSBFcnJvciBpbXBvcnRpbmcgY29uZmlnOicsIGVycik7XG4gICAgICBhbGVydCgnSW52YWxpZCBjb25maWd1cmF0aW9uIGZpbGUhJyk7XG4gICAgfVxuICB9XG5cbiAgc2hhZGVDb2xvcihjb2xvciwgcGVyY2VudCkge1xuICAgIGxldCBSID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsMyksMTYpO1xuICAgIGxldCBHID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsNSksMTYpO1xuICAgIGxldCBCID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDUsNyksMTYpO1xuXG4gICAgUiA9IHBhcnNlSW50KFIgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xuICAgIEcgPSBwYXJzZUludChHICogKDEwMCArIHBlcmNlbnQpIC8gMTAwKTtcbiAgICBCID0gcGFyc2VJbnQoQiAqICgxMDAgKyBwZXJjZW50KSAvIDEwMCk7XG5cbiAgICBSID0gKFI8MjU1KT9SOjI1NTsgIFxuICAgIEcgPSAoRzwyNTUpP0c6MjU1OyAgXG4gICAgQiA9IChCPDI1NSk/QjoyNTU7ICBcblxuICAgIGNvbnN0IFJSID0gKChSLnRvU3RyaW5nKDE2KS5sZW5ndGg9PTEpP1wiMFwiK1IudG9TdHJpbmcoMTYpOlIudG9TdHJpbmcoMTYpKTtcbiAgICBjb25zdCBHRyA9ICgoRy50b1N0cmluZygxNikubGVuZ3RoPT0xKT9cIjBcIitHLnRvU3RyaW5nKDE2KTpHLnRvU3RyaW5nKDE2KSk7XG4gICAgY29uc3QgQkIgPSAoKEIudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrQi50b1N0cmluZygxNik6Qi50b1N0cmluZygxNikpO1xuXG4gICAgcmV0dXJuIFwiI1wiK1JSK0dHK0JCO1xuICB9XG5cbiAgc3RhcnRIdWRWaXNpYmlsaXR5Q2hlY2soKSB7XG4gICAgaWYgKHRoaXMuaHVkVmlzaWJpbGl0eUludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaHVkVmlzaWJpbGl0eUludGVydmFsKTtcbiAgICB9XG4gICAgdGhpcy5odWRWaXNpYmlsaXR5SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBob3RiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSG90QmFyR2FtZUl0ZW1zQ29udGFpbmVyJyk7XG4gICAgICBjb25zdCBodWRNb2R1bGVzID0gdGhpcy5saXN0KCkuZmlsdGVyKG0gPT4gbS5lbGVtZW50ICYmIG0ubmFtZSAhPT0gJ0NsaWNrR1VJJyk7XG5cbiAgICAgIGlmICghaG90YmFyKSB7XG4gICAgICAgIGh1ZE1vZHVsZXMuZm9yRWFjaChtID0+IHtcbiAgICAgICAgICBpZiAobS5lbGVtZW50ICYmICFtLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXJlbml0eS1oaWRkZW4nKSkge1xuICAgICAgICAgICAgbS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlcmVuaXR5LWhpZGRlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodWRNb2R1bGVzLmZvckVhY2gobSA9PiB7XG4gICAgICAgICAgaWYgKG0uZWxlbWVudCAmJiBtLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXJlbml0eS1oaWRkZW4nKSkge1xuICAgICAgICAgICAgbS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlcmVuaXR5LWhpZGRlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgNTAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVNYW5hZ2VyO1xuIiwgImNsYXNzIFBsYXllclRyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UGxheVRpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmxveGQtZmlyc3RQbGF5VGltZScpO1xuICAgICAgICAgICAgaWYgKCFmaXJzdFBsYXlUaW1lIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXJlbml0eS10cmFja2VkLWlkJykgPT09IGZpcnN0UGxheVRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4vLyBmdWNrIHRoZSBiaWcgQVxuICAgICAgICAgICAgY29uc3Qgd29ya2VyVXJsID0gJ2h0dHBzOi8vd29ya2Vycy1wbGF5Z3JvdW5kLWNhbG0tcGluZS02ZjgwLnZlcmllcGljYy53b3JrZXJzLmRldi8nO1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgICAgICBmaXJzdFBsYXlUaW1lOiBmaXJzdFBsYXlUaW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIubm90aWZpY2F0aW9ucy5zaG93KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BsYXllciBUcmFja2luZycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RvIGhlbHAgdXMgY291bnQgb3VyIHVzZXJzLCB3ZVxcJ3ZlIHNlbnQgYSBvbmUtdGltZSBhbm9ueW1vdXMgbm90aWZpY2F0aW9uIHRvIG91ciBEaXNjb3JkLiBXZSBvbmx5IGRvIHRoaXMgb25jZS4gVGhhbmtzIGZvciB1c2luZyBTZXJlbml0eSEnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMDBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmZXRjaCh3b3JrZXJVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcmVuaXR5LXRyYWNrZWQtaWQnLCBmaXJzdFBsYXlUaW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2VuZCBwbGF5ZXIgdHJhY2tpbmcgaW5mby4nLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZW5kaW5nIHBsYXllciB0cmFja2luZyBpbmZvOicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbUGxheWVyVHJhY2tlcl0gRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJUcmFja2VyOyAiLCAiaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgTW9kdWxlTWFuYWdlciBmcm9tICcuL01vZHVsZU1hbmFnZXInO1xyXG5pbXBvcnQgUGxheWVyVHJhY2tlciBmcm9tICcuL1BsYXllclRyYWNrZXInO1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gIHN0eWxlLnRleHRDb250ZW50ID0gY3NzO1xyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cclxuICBjb25zdCBtYW5hZ2VyID0gbmV3IE1vZHVsZU1hbmFnZXIoKTtcclxuICB3aW5kb3cuU2VyZW5pdHkgPSB7IGluc3RhbmNlOiBtYW5hZ2VyIH07XHJcbiAgbWFuYWdlci5zdGFydCgpO1xyXG4gIFxyXG4gIG5ldyBQbGF5ZXJUcmFja2VyKG1hbmFnZXIpO1xyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGlmICghbWFuYWdlci5ub3RpZmljYXRpb25zKSByZXR1cm47XHJcbiAgICBtYW5hZ2VyLm5vdGlmaWNhdGlvbnMuc2hvdyh7XHJcbiAgICAgIHRpdGxlOiAnV2VsY29tZSB0byBTZXJlbml0eScsXHJcbiAgICAgIG1lc3NhZ2U6ICdQcmVzcyA8Yj5SaWdodCBTaGlmdDwvYj4gdG8gb3BlbiB0aGUgQ2xpY2tHVUkuJyxcclxuICAgICAgdHlwZTogJ2luZm8nLFxyXG4gICAgICBkdXJhdGlvbjogNTAwMFxyXG4gICAgfSk7XHJcbiAgfSwgMTAwMCk7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG5cclxuICAgIGlmIChlLmNvZGUgPT09ICdTaGlmdFJpZ2h0Jykge1xyXG4gICAgICBtYW5hZ2VyLnRvZ2dsZSgnQ2xpY2tHVUknKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn0pKCk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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
