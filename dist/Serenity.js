
// ==UserScript==
// @name         Serenity Client
// @version      1.0.0
// @description  A feature-rich client for Bloxd.io
// @author       Serenity Development
// @match        *://*.bloxd.io/*
// @downloadURL  https://raw.githubusercontent.com/veriepicc/Serenity-Bloxd/main/dist/Serenity.js
// @updateURL    https://raw.githubusercontent.com/veriepicc/Serenity-Bloxd/main/dist/Serenity.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

/* SERENITY_CSS_INJECTION */
(function() {
    'use strict';
    const css = `@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";

/* temp_stylePlugin:src\\styles.css */
:root {
  --primary: #5E72EB;
  --primary-dark: #4D5DBF;
  --accent: #E54B4B;
  --panel-base: #1e2129;
  --panel-opacity: 0.85;
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
.serenity-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.95);
  display: flex;
  gap: 0;
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
  background-image:
    radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0.07) 0%,
      rgba(255, 255, 255, 0) 60%);
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
.serenity-sidebar {
  display: flex;
  flex-direction: column;
  min-width: 200px;
  background-color: rgba(25, 28, 36, 0.5);
  padding: 15px;
  border-right: 1px solid var(--border);
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
  width: 20px;
  text-align: center;
  opacity: 0.9;
}
.serenity-category-icon i {
  font-weight: 900;
}
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
  background: rgba(0, 0, 0, 0.2);
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
  background: rgba(0, 0, 0, 0.3);
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
  background: rgba(0, 0, 0, 0.2);
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
.serenity-config-popup-actions button:first-child {
  background-color: var(--primary);
  color: #fff;
}
.serenity-config-popup-actions button:first-child:hover {
  background-color: var(--primary-dark);
}
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
  width: 44px;
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px);
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
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.serenity-hud-popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  background-color: rgba(0, 0, 0, 0.2);
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
.serenity-select,
.serenity-text-input {
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 6px;
  padding: 8px;
  font-size: 13px;
  transition: var(--transition);
}
.serenity-select:focus,
.serenity-text-input:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(0, 0, 0, 0.3);
}
.serenity-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.2);
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
  content: "\\2713";
  font-size: 14px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.serenity-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: rgba(0, 0, 0, 0.3);
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
  background-image:
    linear-gradient(
      45deg,
      #333 25%,
      transparent 25%),
    linear-gradient(
      -45deg,
      #333 25%,
      transparent 25%),
    linear-gradient(
      45deg,
      transparent 75%,
      #333 75%),
    linear-gradient(
      -45deg,
      transparent 75%,
      #333 75%);
  background-size: 12px 12px;
  background-position:
    0 0,
    0 6px,
    6px -6px,
    -6px 0px;
  position: relative;
  overflow: hidden;
}
.serenity-color-swatch::before {
  content: "";
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
  z-index: 10005;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 160px;
}
.serenity-color-popup input[type=color] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.serenity-color-popup input[type=color]::-webkit-color-swatch {
  border-radius: 5px;
  border: 1px solid var(--border);
}
.serenity-color-popup input[type=color]::-moz-color-swatch {
  border-radius: 5px;
  border: 1px solid var(--border);
}
.serenity-color-popup .serenity-slider {
  margin: 0;
}
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
.serenity-chat-container {
  position: absolute;
  width: 350px;
  max-width: 25%;
  z-index: 9996;
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
  color: #a970e3 !important;
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
  background: rgba(0, 0, 0, 0.3);
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
body {
  font-family:
    "Inter",
    "Segoe UI",
    Tahoma,
    Geneva,
    Verdana,
    sans-serif;
  margin: 0;
  padding: 0;
}
body.serenity-no-scroll {
  overflow: hidden;
}
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
  font-family:
    "Inter",
    "Segoe UI",
    sans-serif;
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
  content: "";
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
.serenity-notification-success .serenity-notification-icon-wrapper {
  background-color: var(--notification-success-bg);
}
.serenity-notification-success .serenity-notification-icon {
  color: var(--notification-success-icon);
}
.serenity-notification-success .serenity-notification-timer {
  background-color: var(--notification-success-icon);
}
.serenity-notification-warning .serenity-notification-icon-wrapper {
  background-color: var(--notification-warning-bg);
}
.serenity-notification-warning .serenity-notification-icon {
  color: var(--notification-warning-icon);
}
.serenity-notification-warning .serenity-notification-timer {
  background-color: var(--notification-warning-icon);
}
.serenity-notification-error .serenity-notification-icon-wrapper {
  background-color: var(--notification-error-bg);
}
.serenity-notification-error .serenity-notification-icon {
  color: var(--notification-error-icon);
}
.serenity-notification-error .serenity-notification-timer {
  background-color: var(--notification-error-icon);
}
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
  padding-right: 18px;
}
.serenity-arraylist-border {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 4px;
}
.serenity-arraylist-container.with-shadow .serenity-arraylist-item {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}
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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-color: var(--primary);
}
.serenity-theme-preview {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  flex-shrink: 0;
}
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
  background: rgba(0, 0, 0, 0.2);
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
.serenity-theme-editor {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.serenity-hotbar-wrapper {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
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
@keyframes fluid-hero {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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
/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidGVtcF9zdHlsZVBsdWdpbjpzcmNcXHN0eWxlcy5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXAnKTtcblxuOnJvb3Qge1xuICAtLXByaW1hcnk6ICM1RTcyRUI7IC8qIEEgbmljZSBtb2Rlcm4gYmx1ZSAqL1xuICAtLXByaW1hcnktZGFyazogIzRENURCRjtcbiAgLS1hY2NlbnQ6ICNFNTRCNEI7IC8qIEEgY29udHJhc3RpbmcgYWNjZW50IGNvbG9yICovXG4gIC0tcGFuZWwtYmFzZTogIzFlMjEyOTsgLyogRGVmYXVsdCBkYXJrIGJhY2tncm91bmQgY29sb3IgKi9cbiAgLS1wYW5lbC1vcGFjaXR5OiAwLjg1OyAvKiBEZWZhdWx0IG9wYWNpdHkgKi9cbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMiwgMjgsIDAuOSk7XG4gIC0tcGFuZWw6IHJnYmEoMzAsIDMzLCA0MSwgdmFyKC0tcGFuZWwtb3BhY2l0eSkpO1xuICAtLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAtLWJvcmRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KTtcbiAgLS1zaGFkb3c6IDAgMTJweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLS10ZXh0OiAjRUFFQUVBO1xuICAtLXRleHQtc2Vjb25kYXJ5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIC0tcmFkaXVzOiAxMHB4O1xuICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtLW5vdGlmaWNhdGlvbi1zdWNjZXNzLWJnOiByZ2JhKDYzLCAxNTQsIDg2LCAwLjE1KTtcbiAgLS1ub3RpZmljYXRpb24tc3VjY2Vzcy1pY29uOiAjNWNiODVjO1xuICAtLW5vdGlmaWNhdGlvbi13YXJuaW5nLWJnOiByZ2JhKDIwNSwgMTYzLCA3NCwgMC4xNSk7XG4gIC0tbm90aWZpY2F0aW9uLXdhcm5pbmctaWNvbjogI2YwYWQ0ZTtcbiAgLS1ub3RpZmljYXRpb24tZXJyb3ItYmc6IHJnYmEoMjAxLCA3OSwgNzksIDAuMTUpO1xuICAtLW5vdGlmaWNhdGlvbi1lcnJvci1pY29uOiAjZDk1MzRmO1xuICAtLW5vdGlmaWNhdGlvbi1pbmZvLWJnOiByZ2JhKDk0LCAxMTQsIDIzNSwgMC4xNSk7XG4gIC0tbm90aWZpY2F0aW9uLWluZm8taWNvbjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5zZXJlbml0eS1oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIE92ZXJsYXkgdGhhdCBjb3ZlcnMgdGhlIGVudGlyZSBzY3JlZW4gd2l0aCBoZWF2eSBibHVyICovXG4uc2VyZW5pdHktb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMiwgMTYsIDAuNik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIHotaW5kZXg6IDk5OTg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG4uc2VyZW5pdHktb3ZlcmxheS52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogTWFpbiBjb250YWluZXIgZm9yIHRoZSBVSSAqL1xuLnNlcmVuaXR5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC45NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMDsgLyogUmVtb3ZlIGdhcCBmb3IgYSBtb3JlIGludGVncmF0ZWQgbG9vayAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgei1pbmRleDogOTk5OTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgbWF4LWhlaWdodDogNzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDcwJTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG59XG5cbi5zZXJlbml0eS1jb250YWluZXI6bm90KC5zZXR0aW5ncy12aWV3LWFjdGl2ZSkgLnNlcmVuaXR5LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNykgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxNTAlIDE1MCU7XG4gIGFuaW1hdGlvbjogZmx1aWQtaGVybyA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLnNlcmVuaXR5LWNvbnRhaW5lci52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG59XG5cbi5zZXJlbml0eS1jb250YWluZXIuc2V0dGluZ3Mtdmlldy1hY3RpdmUgLnNlcmVuaXR5LXNpZGViYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIExlZnQgc2lkZWJhciB3aXRoIGNhdGVnb3JpZXMgKi9cbi5zZXJlbml0eS1zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjgsIDM2LCAwLjUpOyAvKiBTbGlnaHRseSBkaWZmZXJlbnQgc2hhZGUgKi9cbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWxvZ28gaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlcmVuaXR5LWxvZ28gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLnNlcmVuaXR5LWNhdGVnb3J5IHtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uc2VyZW5pdHktY2F0ZWdvcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWNhdGVnb3J5LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDk0LCAxMTQsIDIzNSwgMC4zKTtcbn1cblxuLnNlcmVuaXR5LWNhdGVnb3J5LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDIwcHg7IC8qIEVuc3VyZSBpY29ucyBhbGlnbiAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLnNlcmVuaXR5LWNhdGVnb3J5LWljb24gaSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7IC8qIFJlcXVpcmVkIGZvciBGb250IEF3ZXNvbWUgc29saWQgaWNvbnMgKi9cbn1cblxuLyogUmlnaHQgY29udGVudCBhcmVhIHdpdGggbW9kdWxlcyAqL1xuLnNlcmVuaXR5LWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2VyZW5pdHktY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4uc2VyZW5pdHktY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlcmVuaXR5LWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XG59XG5cbi5zZXJlbml0eS1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnNlcmVuaXR5LXNlY3Rpb24taGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktc2VhcmNoLWJhciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5zZXJlbml0eS1zZWFyY2gtYmFyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xufVxuXG4uc2VyZW5pdHktcmlnaHQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWJ0biBpIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICB6LWluZGV4OiAxMDAwMztcbiAgd2lkdGg6IDQ4MHB4O1xuICBhbmltYXRpb246IGZhZGVJbiAwLjFzIGVhc2Utb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1oZWFkZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5zZXJlbml0eS1jb25maWctdG9nZ2xlLXNldHRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJlbml0eS1jb25maWctbWFudWFsLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1jb25maWctbWFudWFsLWFjdGlvbnMgYnV0dG9uIHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1tYW51YWwtYWN0aW9ucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi5zZXJlbml0eS1jb25maWctcG9wdXAtYm9keSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zZXJlbml0eS1jb25maWctcG9wdXAtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1hY3Rpb25zIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLyogVGhpcyB0YXJnZXRzIHRoZSBJbXBvcnQgYnV0dG9uICovXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWFjdGlvbnMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWFjdGlvbnMgYnV0dG9uOmZpcnN0LWNoaWxkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLyogVGhpcyB0YXJnZXRzIHRoZSBFeHBvcnQgYnV0dG9uICovXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWFjdGlvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1hY3Rpb25zIGJ1dHRvbjpsYXN0LWNoaWxkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWZvb3RlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJlbml0eS1jb25maWctYmFjay1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1iYWNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLnNlcmVuaXR5LW1vZHVsZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMjBweCwgMWZyKSk7XG4gIGdhcDogMThweDtcbn1cblxuLyogTW9kdWxlIGNhcmRzICovXG4uc2VyZW5pdHktbW9kdWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBwYWRkaW5nOiAxNnB4O1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VyZW5pdHktbW9kdWxlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uc2VyZW5pdHktbW9kdWxlLW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDRweDsgLyogU2xpZ2h0bHkgc21hbGxlciAqL1xuICBoZWlnaHQ6IDIycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlcmVuaXR5LXRvZ2dsZS1zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktdG9nZ2xlLXNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGxlZnQ6IDJweDtcbiAgYm90dG9tOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLnNlcmVuaXR5LW1vZHVsZS10b2dnbGUuZW5hYmxlZCAuc2VyZW5pdHktdG9nZ2xlLXNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtdG9nZ2xlLmVuYWJsZWQgLnNlcmVuaXR5LXRvZ2dsZS1zbGlkZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc2VyZW5pdHktbW9kdWxlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKiBOZXcgY29udHJvbHMgZm9yIHNldHRpbmdzIGJ1dHRvbiBuZXh0IHRvIHRoZSB0b2dnbGUgKi9cbi5zZXJlbml0eS1tb2R1bGUtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtc2V0dGluZ3MtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2VyZW5pdHktbW9kdWxlOmhvdmVyIC5zZXJlbml0eS1tb2R1bGUtc2V0dGluZ3MtYnRuIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlcmVuaXR5LW1vZHVsZS1zZXR0aW5ncy1idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLyogSGVhZGVyIGZvciB0aGUgZGVkaWNhdGVkIHNldHRpbmdzIHZpZXcgKi9cbi5zZXJlbml0eS1zZXR0aW5ncy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5zZXJlbml0eS1iYWNrLWJ0biB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBhbmVsKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZXJlbml0eS1iYWNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLyogSFVEIEVkaXRvciBzdHlsZXMgKi9cbi5zZXJlbml0eS1odWQtZWRpdG9yLWJ0biBpIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnNlcmVuaXR5LWh1ZC1lZGl0b3Itb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMiwgMTYsIDAuOCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgei1pbmRleDogMTAwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktaHVkLWdyaWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjA1KSAxcHgsIHRyYW5zcGFyZW50IDFweCksXG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc2VyZW5pdHktaHVkLWRvbmUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoOTQsIDExNCwgMjM1LCAwLjQpO1xufVxuXG4uc2VyZW5pdHktaHVkLWRvbmUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLyogSFVEIFNldHRpbmdzIFBvcHVwICovXG4uc2VyZW5pdHktaHVkLXNldHRpbmdzLXBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4O1xuICB6LWluZGV4OiAxMDAwMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMXMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG59XG5cbi8qIE5ldyBoZWFkZXIgZm9yIHRoZSBIVUQgc2V0dGluZ3MgcG9wdXAgKi9cbi5zZXJlbml0eS1odWQtcG9wdXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNlcmVuaXR5LWh1ZC1wb3B1cC1jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlcmVuaXR5LWh1ZC1wb3B1cC1jbG9zZS1idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5zZXJlbml0eS1odWQtcG9wdXAtYm9keSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1odWQtcG9wdXAtZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5zZXJlbml0eS1odWQtcG9wdXAtcmVzZXQtYnRuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG5cbi5zZXJlbml0eS1odWQtcG9wdXAtcmVzZXQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1mb290ZXIge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWJhY2stYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5zZXJlbml0eS1jb25maWctYmFjay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi8qIENvbXBhY3Qgc3R5bGVzIGZvciBzZXR0aW5ncyBpbnNpZGUgdGhlIEhVRCBwb3B1cCAqL1xuLnNlcmVuaXR5LWh1ZC1zZXR0aW5ncy1wb3B1cCAuc2VyZW5pdHktc2V0dGluZyB7XG4gIHBhZGRpbmc6IDRweCAycHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zZXJlbml0eS1odWQtc2V0dGluZ3MtcG9wdXAgLnNlcmVuaXR5LXNldHRpbmctbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zZXJlbml0eS1odWQtc2V0dGluZ3MtcG9wdXAgLnNlcmVuaXR5LXNldHRpbmctZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VyZW5pdHktbW9kdWxlLXNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uc2VyZW5pdHktc2V0dGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LXNldHRpbmc6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zZXJlbml0eS1zZXR0aW5nLWluZm8ge1xuICBmbGV4OiAxO1xufVxuXG4uc2VyZW5pdHktc2V0dGluZy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLnNlcmVuaXR5LXNldHRpbmctZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG1hcmdpbjogNHB4IDAgMCAwO1xufVxuXG4uc2VyZW5pdHktc2V0dGluZy1jb250cm9sIHtcbiAgZmxleC1iYXNpczogNDAlO1xufVxuXG4vKiBHZW5lcmljIGlucHV0IHN0eWxlcyAqL1xuLnNlcmVuaXR5LXNlbGVjdCwgLnNlcmVuaXR5LXRleHQtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uc2VyZW5pdHktc2VsZWN0OmZvY3VzLCAuc2VyZW5pdHktdGV4dC1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbn1cblxuLyogQ2hlY2tib3ggc3BlY2lmaWMgc3R5bGVzICovXG4uc2VyZW5pdHktY2hlY2tib3gge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5zZXJlbml0eS1jaGVja2JveDpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLnNlcmVuaXR5LWNoZWNrYm94OmNoZWNrZWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcdTI3MTMnO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vKiBTbGlkZXIgc3BlY2lmaWMgc3R5bGVzICovXG4uc2VyZW5pdHktc2xpZGVyIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbn1cblxuLnNlcmVuaXR5LXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFja2dyb3VuZCk7XG59XG5cbi5zZXJlbml0eS1zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQpO1xufVxuXG4vKiBDdXN0b20gQ29sb3IgUGlja2VyIHdpdGggQWxwaGEgU3VwcG9ydCAqL1xuLnNlcmVuaXR5LWNvbG9yLXBpY2tlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uc2VyZW5pdHktY29sb3Itc3dhdGNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIENoZWNrZXJib2FyZCBiYWNrZ3JvdW5kIHRvIHNob3cgdHJhbnNwYXJlbmN5ICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IFxuICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzMzMyAyNSUsIHRyYW5zcGFyZW50IDI1JSksIFxuICAgIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMzMzMgMjUlLCB0cmFuc3BhcmVudCAyNSUpLCBcbiAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDc1JSwgIzMzMyA3NSUpLCBcbiAgICBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB0cmFuc3BhcmVudCA3NSUsICMzMzMgNzUlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMnB4IDEycHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMCA2cHgsIDZweCAtNnB4LCAtNnB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VyZW5pdHktY29sb3Itc3dhdGNoOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cblxuLnNlcmVuaXR5LWNvbG9yLXBvcHVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDA1OyAvKiBBYm92ZSBvdGhlciBVSSAqL1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuLnNlcmVuaXR5LWNvbG9yLXBvcHVwIGlucHV0W3R5cGU9XCJjb2xvclwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZXJlbml0eS1jb2xvci1wb3B1cCBpbnB1dFt0eXBlPVwiY29sb3JcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktY29sb3ItcG9wdXAgaW5wdXRbdHlwZT1cImNvbG9yXCJdOjotbW96LWNvbG9yLXN3YXRjaCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWNvbG9yLXBvcHVwIC5zZXJlbml0eS1zbGlkZXIge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIENvbG9yIFBpY2tlciBzcGVjaWZpYyBzdHlsZXMgKi9cbi5zZXJlbml0eS1jb2xvci1waWNrZXIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VyZW5pdHktY29sb3ItcGlja2VyOjotd2Via2l0LWNvbG9yLXN3YXRjaCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc2VyZW5pdHktY29sb3ItcGlja2VyOjotbW96LWNvbG9yLXN3YXRjaCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY3BzLWNvdW50ZXItZGlzcGxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5NztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5zZXJlbml0eS1pbnRlcmZhY2UtZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNlcmVuaXR5LWludGVyZmFjZS1sb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLCB2YXIoLS1wcmltYXJ5KSk7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNlcmVuaXR5LWludGVyZmFjZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJlbml0eS1pbnRlcmZhY2UtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IsIHZhcigtLXByaW1hcnkpKTtcbn1cblxuLnNlcmVuaXR5LWludGVyZmFjZS1nYW1lbW9kZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zZXJlbml0eS1pbnRlcmZhY2UtbG9iYnkge1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi8qIENoYXQgTW9kdWxlIFN0eWxlcyAqL1xuLnNlcmVuaXR5LWNoYXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzUwcHg7XG4gIG1heC13aWR0aDogMjUlO1xuICB6LWluZGV4OiA5OTk2O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5zZXJlbml0eS1jaGF0LW1lc3NhZ2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXJlbml0eS1jaGF0LW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAycHggMDtcbiAgZm9udC1zaXplOiB2YXIoLS1jaGF0LWZvbnQtc2l6ZSwgMTRweCk7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogOHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4uc2VyZW5pdHktbWVzc2FnZS1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zZXJlbml0eS1tZXNzYWdlLW93bi1uYW1lIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgI0U1NEI0QikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNlcmVuaXR5LW1lc3NhZ2UtdGFnIHtcbiAgY29sb3I6ICNhOTcwZTMgIWltcG9ydGFudDsgLyogQSBuaWNlIHB1cnBsZSAqL1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2VyZW5pdHktbWVzc2FnZS10aW1lc3RhbXAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5zZXJlbml0eS1jaGF0LWlucHV0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2VyZW5pdHktY2hhdC1pbnB1dCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBmb250LXNpemU6IHZhcigtLWNoYXQtZm9udC1zaXplLCAxNHB4KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uc2VyZW5pdHktY2hhdC1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi8qIEdsb2JhbCBzdHlsZXMgKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogJ0ludGVyJywgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keS5zZXJlbml0eS1uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBFbnN1cmUgdGhlIGZvbnQgaXMgbG9hZGVkICovXG5cbi8qIEtleXN0cm9rZXMgTW9kdWxlICovXG4ua2V5c3Ryb2tlcy1kaXNwbGF5IHtcbiAgLS1rZXktc2l6ZTogNTJweDtcbiAgLS1rZXktcGFkZGluZzogMnB4O1xuICAtLWtleS1yYWRpdXM6IDhweDtcbiAgLS1rZXktYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIC0ta2V5LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLS1rZXktc2hhZG93LXByZXNzZWQ6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC0ta2V5LXRyYW5zaXRpb246IGFsbCAwLjEycyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIC0tYmx1ci1pbnRlbnNpdHk6IDEwcHg7XG4gIC0ta2V5LWJnOiB2YXIoLS1wYW5lbCk7XG4gIC0ta2V5LWFjdGl2ZS1iZzogdmFyKC0tcHJpbWFyeSk7XG4gIC0ta2V5LXRleHQ6IHZhcigtLXRleHQpO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbiAgei1pbmRleDogOTk5NztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ua2V5c3Ryb2tlcy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5rZXlzdHJva2VzLWtleSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IHZhcigtLWtleS1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1rZXktc2l6ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0ta2V5LXRleHQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1rZXktcmFkaXVzKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBhbmVsKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0ta2V5LXRyYW5zaXRpb24pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWtleS1zaGFkb3cpO1xufVxuXG4ua2V5c3Ryb2tlcy1rZXk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZTtcbiAgei1pbmRleDogLTE7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWtleS1yYWRpdXMpO1xufVxuXG4ua2V5c3Ryb2tlcy1rZXkuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWtleS1zaGFkb3ctcHJlc3NlZCksIGluc2V0IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5rZXlzdHJva2VzLWtleS5hY3RpdmU6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5rZXlzdHJva2VzLWtleS5zcGFjZS1rZXkge1xuICB3aWR0aDogY2FsYyh2YXIoLS1rZXktc2l6ZSkgKiAzICsgMTBweCk7XG59XG5cbi5rZXlzdHJva2VzLXJvdy5tb3VzZS1yb3cge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5rZXlzdHJva2VzLWtleS5tb3VzZS1idXR0b24ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IGNhbGMoKHZhcigtLWtleS1zaXplKSAqIDMgKyAxMHB4IC0gNXB4KSAvIDIpO1xufVxuXG4ua2V5c3Ryb2tlcy1kaXNwbGF5Om5vdCguc2hvdy1tb3VzZSkgLm1vdXNlLXJvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5rZXlzdHJva2VzLWRpc3BsYXkubm8tYW5pbWF0aW9ucyAua2V5c3Ryb2tlcy1rZXkge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIE5vdGlmaWNhdGlvbiBTeXN0ZW0gKi9cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiAxMDAwNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBhbmVsKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGdhcDogMTJweDtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi5leGl0aW5nIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1pY29uLXdyYXBwZXIge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLWluZm8tYmcpO1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLWluZm8taWNvbik7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24taWNvbiBzdmcge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLW1lc3NhZ2UgYiB7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1jbG9zZTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi10aW1lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1pbmZvLWljb24pO1xuICBvcGFjaXR5OiAwLjY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuXG4vKiBOb3RpZmljYXRpb24gVHlwZXMgKi9cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tc3VjY2VzcyAuc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24td3JhcHBlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1zdWNjZXNzLWJnKTsgfVxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1zdWNjZXNzIC5zZXJlbml0eS1ub3RpZmljYXRpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24tc3VjY2Vzcy1pY29uKTsgfVxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1zdWNjZXNzIC5zZXJlbml0eS1ub3RpZmljYXRpb24tdGltZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24tc3VjY2Vzcy1pY29uKTsgfVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLXdhcm5pbmcgLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1pY29uLXdyYXBwZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24td2FybmluZy1iZyk7IH1cbi5zZXJlbml0eS1ub3RpZmljYXRpb24td2FybmluZyAuc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24geyBjb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLXdhcm5pbmctaWNvbik7IH1cbi5zZXJlbml0eS1ub3RpZmljYXRpb24td2FybmluZyAuc2VyZW5pdHktbm90aWZpY2F0aW9uLXRpbWVyIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLXdhcm5pbmctaWNvbik7IH1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1lcnJvciAuc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24td3JhcHBlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1lcnJvci1iZyk7IH1cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tZXJyb3IgLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1lcnJvci1pY29uKTsgfVxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1lcnJvciAuc2VyZW5pdHktbm90aWZpY2F0aW9uLXRpbWVyIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLWVycm9yLWljb24pOyB9XG5cbi8qIEFuaW1hdGlvbnMgKi9cbkBrZXlmcmFtZXMgc2VyZW5pdHktbm90aWZpY2F0aW9uLWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2VyZW5pdHktbm90aWZpY2F0aW9uLW91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxufVxuXG4vKiBBcnJheUxpc3QgTW9kdWxlIC0gdjIgKi9cbi5zZXJlbml0eS1hcnJheWxpc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk1O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnNlcmVuaXR5LWFycmF5bGlzdC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7IC8qIE1ha2Ugc3BhY2UgZm9yIGJvcmRlciAqL1xufVxuXG4uc2VyZW5pdHktYXJyYXlsaXN0LWJvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNHB4O1xufVxuXG4uc2VyZW5pdHktYXJyYXlsaXN0LWNvbnRhaW5lci53aXRoLXNoYWRvdyAuc2VyZW5pdHktYXJyYXlsaXN0LWl0ZW0ge1xuICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC42KTtcbn1cblxuLyogTmV3IENvbmZpZyBTY3JlZW4gU3R5bGVzICovXG4uc2VyZW5pdHktY29uZmlnLXNjcmVlbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRhYiB7XG4gICAgcGFkZGluZzogOHB4IDE4cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5zZXJlbml0eS1jb25maWctdGFiLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDk0LCAxMTQsIDIzNSwgMC4zKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1jbG9zZS1idG4ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1jbG9zZS1idG46aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi5zZXJlbml0eS1jb25maWctY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNlcmVuaXR5LXBsYWNlaG9sZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBUaGVtZSBFZGl0b3IgU3R5bGVzICovXG4uc2VyZW5pdHktdGhlbWUtZWRpdG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4uc2VyZW5pdHktc2VjdGlvbi1zdWJoZWFkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktc3ViaGVhZGVyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5zZXJlbml0eS1zdWJoZWFkZXItc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uc2VyZW5pdHktdGhlbWUtY29udHJvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktdGhlbWUtY29sb3ItcGlja2VyIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZXJlbml0eS10aGVtZS1jb2xvci1waWNrZXI6Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLnNlcmVuaXR5LXRoZW1lLWNvbG9yLXBpY2tlcjo6LW1vei1jb2xvci1zd2F0Y2gge1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5zZXJlbml0eS10aGVtZXMtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMjBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4uc2VyZW5pdHktdGhlbWUtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5zZXJlbml0eS10aGVtZS1jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlcmVuaXR5LXRoZW1lLXByZXZpZXcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG5cbi8qIE5ldyBDb25maWcgU2NyZWVuIFN0eWxlcyAqL1xuLnNlcmVuaXR5LWNvbmZpZy1zY3JlZW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRhYnMtdmVydGljYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5zZXJlbml0eS1jb25maWctdGFiIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5zZXJlbml0eS1jb25maWctdGFiLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDk0LCAxMTQsIDIzNSwgMC4zKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWItY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWNvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIENvbmZpZyBFZGl0b3IgU3R5bGVzICovXG4uc2VyZW5pdHktY29uZmlnLWVkaXRvciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiA0MHB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjVweDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1jb250cm9scy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10b2dnbGUtc2V0dGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5zZXJlbml0eS1jb25maWctbWFudWFsLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5zZXJlbml0eS1idG4ge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uc2VyZW5pdHktYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlcmVuaXR5LWJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VyZW5pdHktYnRuLXByaW1hcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG59XG5cbi5zZXJlbml0eS1pbXBvcnQtZXhwb3J0LWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1pbXBvcnQtZXhwb3J0IHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc2VyZW5pdHktaW1wb3J0LWV4cG9ydC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4vKiBUaGVtZSBFZGl0b3IgU3R5bGVzICovXG4uc2VyZW5pdHktdGhlbWUtZWRpdG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4vKiBIb3RiYXIgTW9kdWxlIFN0eWxlcyAqL1xuLnNlcmVuaXR5LWhvdGJhci13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7IC8qIEFkZCBzb21lIHNwYWNlIGJldHdlZW4gYXVyYSBiYXIgYW5kIGhvdGJhciAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2VyZW5pdHktaG90YmFyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uc2VyZW5pdHktaG90YmFyLWZpbGxlciB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1heC13aWR0aDogMjBweDtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogdmFyKC0taG90YmFyLXNsb3Qtc3BhY2luZyk7XG59XG5cbi5zZXJlbml0eS1ob3RiYXItc2xvdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiB2YXIoLS1ob3RiYXItc2xvdC1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWhvdGJhci1zbG90LXNpemUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLW91dDtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1zbG90LnNlbGVjdGVkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5zZXJlbml0eS1ob3RiYXItaXRlbS1pbWcge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcbn1cblxuLnNlcmVuaXR5LXNsb3QtbnVtYmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAycHg7XG4gICAgcmlnaHQ6IDRweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4ICMwMDA7XG59XG5cbi5zZXJlbml0eS1zbG90LWFtb3VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjMDAwO1xufVxuXG4uc2VyZW5pdHktaG90YmFyLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1idXR0b24taWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1rZXktaGVscGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMTJweDtcbiAgICByaWdodDogLThweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaG90YmFyLXN0eWxlLWNvbXBhY3QgLnNlcmVuaXR5LWhvdGJhci1zbG90IHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luOiAwIDFweCAhaW1wb3J0YW50O1xufVxuXG4uaG90YmFyLXN0eWxlLWNvbXBhY3QgLnNlcmVuaXR5LWhvdGJhci1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmhvdGJhci1zdHlsZS1tb2Rlcm4gLnNlcmVuaXR5LWhvdGJhci1zbG90IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgMzAsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG59XG5cbi5ob3RiYXItc3R5bGUtbW9kZXJuIC5zZXJlbml0eS1ob3RiYXItc2xvdC5zZWxlY3RlZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSg5NCwgMTE0LCAyMzUsIDAuMyk7XG59XG5cbi5ob3RiYXItc3R5bGUtbW9kZXJuIC5zZXJlbml0eS1ob3RiYXItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgMzAsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4vKiBBdXJhIEJhciBTdHlsZXMgKi9cbi5zZXJlbml0eS1hdXJhLWJhciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VyZW5pdHktYXVyYS1iYXItYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNlcmVuaXR5LWF1cmEtYmFyLXByb2dyZXNzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnNlcmVuaXR5LWF1cmEtYmFyLXRleHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggIzAwMDtcbn1cblxuLyogRmx1aWQgSGVybyBBbmltYXRpb24gKi9cbkBrZXlmcmFtZXMgZmx1aWQtaGVybyB7XG4gIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlOyB9XG4gIDUwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7IH1cbn1cblxuLnNlcmVuaXR5LXRoZW1lLXBhbmVsLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlcmVuaXR5LXRoZW1lLWNvbnRyb2wtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbn1cblxuLnNlcmVuaXR5LXRoZW1lLWNvbnRyb2wtZ3JvdXAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFFQTtBQUNFLGFBQVc7QUFDWCxrQkFBZ0I7QUFDaEIsWUFBVTtBQUNWLGdCQUFjO0FBQ2QsbUJBQWlCO0FBQ2pCLGdCQUFjLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDL0IsV0FBUyxL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QyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDcEMsY0FBWSxVQUFVLEtBQUs7QUFDL0I7QUFFQSxDQVRDLG9CQVNvQixDQS9GcEIsb0JBK0Z5QyxDQWpGcEI7QUFrRmxCLGFBQVcsV0FBVztBQUN0QixjQUFZLEVBQUUsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDOUM7QUFFQSxDQWRDLG9CQWNvQixDQXBEcEI7QUFxREcsb0JBQWtCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDbkMsaUJBQWU7QUFDZixtQkFBaUIsS0FBSztBQUN0QiwyQkFBeUIsS0FBSztBQUM5QixjQUFZLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDeEM7QUFHQSxDQUFDO0FBQ0csU0FBTztBQUNQLFVBQVE7QUFDUixvQkFBa0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxVQUFRLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3RDLGlCQUFlO0FBQ2YsV0FBUztBQUNULGVBQWE7QUFDYixXQUFTO0FBQ1QsWUFBVTtBQUNWLFlBQVU7QUFDZDtBQUVBLENBQUM7QUFDRyxZQUFVO0FBQ1YsUUFBTTtBQUNOLE9BQUs7QUFDTCxVQUFRO0FBQ1IsU0FBTztBQUNQLGlCQUFlO0FBQ2YsWUFBVTtBQUNkO0FBRUEsQ0FBQztBQUNHLFVBQVE7QUFDUixvQkFBa0IsSUFBSTtBQUN0QixjQUFZLE1BQU0sS0FBSztBQUMzQjtBQUVBLENBQUM7QUFDRyxZQUFVO0FBQ1YsV0FBUztBQUNULFNBQU87QUFDUCxjQUFZO0FBQ1osU0FBTztBQUNQLGVBQWE7QUFDYixhQUFXO0FBQ1gsZUFBYSxFQUFFLEVBQUUsSUFBSTtBQUN6QjtBQUdBLFdBOXJEYTtBQStyRFg7QUFBSyx5QkFBcUIsR0FBRztBQUFLO0FBQ2xDO0FBQU0seUJBQXFCLEtBQUs7QUFBSztBQUNyQztBQUFPLHlCQUFxQixHQUFHO0FBQUs7QUFDdEM7QUFFQSxDQUFDO0FBQ0csV0FBUztBQUNULHlCQUF1QixJQUFJO0FBQzNCLE9BQUs7QUFDTCxlQUFhO0FBQ2pCO0FBRUEsQ0FBQztBQUNHLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNUO0FBRUEsQ0FOQyw2QkFNNkI7QUFDMUIsYUFBVztBQUNYLGVBQWE7QUFDYixTQUFPLElBQUk7QUFDZjsiLAogICJuYW1lcyI6IFtdCn0K */
`;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
})();

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/PlayerTracker.js
  var require_PlayerTracker = __commonJS({
    "src/PlayerTracker.js"() {
    }
  });

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
        fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
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
      <h1>Serenity</h1>
      <span>CLIENT v1.0</span>
    `;
      sidebar.appendChild(logo);
      const categories = manager.categories;
      const categoryIcons = {
        "Visual": '<i class="fas fa-eye"></i>',
        "Utility": '<i class="fas fa-cog"></i>',
        "Combat": '<i class="fas fa-crosshairs"></i>',
        "Player": '<i class="fas fa-user"></i>',
        "Movement": '<i class="fas fa-running"></i>'
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
      const hudEditorBtn = document.createElement("div");
      hudEditorBtn.className = "serenity-category serenity-hud-editor-btn";
      hudEditorBtn.innerHTML = `<i class="fas fa-edit"></i> HUD Editor`;
      hudEditorBtn.addEventListener("click", () => {
        this.isEditingHUD = true;
        this.renderHUDeditor(manager);
      });
      sidebar.appendChild(hudEditorBtn);
      const configBtn = document.createElement("div");
      configBtn.className = "serenity-category serenity-config-btn";
      configBtn.innerHTML = `<i class="fas fa-cogs"></i> Settings`;
      configBtn.addEventListener("click", () => {
        this.activeView = "settings";
        this.updateContent(manager);
      });
      sidebar.appendChild(configBtn);
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
        this.overlay.style.zIndex = "9998";
      }
      this.element.style.display = "flex";
      this.style.pointerEvents = "auto";
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
      backBtn.innerHTML = '<i class="fas fa-chevron-left"></i> Back';
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
      backBtn.innerHTML = '<i class="fas fa-chevron-left"></i> Back';
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
      section.appendChild(settingsContainer);
      content.appendChild(section);
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
    enabled: true,
    defaultX: 1443,
    defaultY: 423,
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
          if (mod.x !== null) this.element.style.left = `${mod.x}px`;
          if (mod.y !== null) this.element.style.top = `${mod.y}px`;
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
      if (!chatContainer) return;
      if (!this.gameChat) {
        this.gameChat = chatContainer;
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
    element: null,
    defaultX: 1300,
    defaultY: 800,
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
      const isTyping = document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.isContentEditable);
      const shouldBeSprinting = !isTyping && (!clickGui || !clickGui.isGuiOpen);
      if (shouldBeSprinting && !this.sprinting) {
        this.startSprinting();
      } else if (!shouldBeSprinting && this.sprinting) {
        this.stopSprinting();
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
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "Shift", keyCode: 16, code: "ShiftLeft", bubbles: true }));
    },
    stopSprinting() {
      if (!this.sprinting) return;
      this.sprinting = false;
      window.dispatchEvent(new KeyboardEvent("keyup", { key: "Shift", keyCode: 16, code: "ShiftLeft", bubbles: true }));
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
          if (mod.x !== null) this.element.style.left = `${mod.x}px`;
          if (mod.y !== null) this.element.style.top = `${mod.y}px`;
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
    enabled: true,
    observer: null,
    defaultX: 1442,
    defaultY: 468,
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
        if (mod.x !== null) this.element.style.left = `${mod.x}px`;
        if (mod.y !== null) this.element.style.top = `${mod.y}px`;
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

  // src/modules/player/CPSCounter.js
  var CPSCounter = {
    name: "CPSCounter",
    category: "Player",
    description: "Displays your clicks per second.",
    enabled: true,
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
  };
  var Configuration_default = Configuration;

  // src/modules/visual/Crosshair.js
  var Crosshair = {
    name: "Crosshair",
    category: "Visual",
    description: "Replaces the default game crosshair with a custom one.",
    enabled: true,
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
    enabled: true,
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
      this.tickInterval = 1e3 / tickRate;
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
        //   Hotbar,
        //  Coordinates,
        CPSCounter_default,
        FPSBooster_default,
        AdBlocker_default,
        Crosshair_default,
        Notifications_default,
        ArrayList_default
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
      if (dt >= this.tickInterval) {
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
      }
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

  // src/index.js
  var import_PlayerTracker = __toESM(require_PlayerTracker());
  (function() {
    "use strict";
    const manager = new ModuleManager_default();
    window.Serenity = { instance: manager };
    manager.start();
    new import_PlayerTracker.default(manager);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL1BsYXllclRyYWNrZXIuanMiLCAiLi4vc3JjL21vZHVsZXMvdmlzdWFsL0NsaWNrR1VJLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9GUFNDb3VudGVyLmpzIiwgIi4uL3NyYy91dGlscy5qcyIsICIuLi9zcmMvbW9kdWxlcy92aXN1YWwvSW50ZXJmYWNlLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9DaGF0LmpzIiwgIi4uL3NyYy9tb2R1bGVzL2NvbWJhdC9LZXlzdHJva2VzLmpzIiwgIi4uL3NyYy9tb2R1bGVzL21vdmVtZW50L1RvZ2dsZVNwcmludC5qcyIsICIuLi9zcmMvbW9kdWxlcy9wbGF5ZXIvQXJtb3JIVUQuanMiLCAiLi4vc3JjL21vZHVsZXMvcGxheWVyL0NQU0NvdW50ZXIuanMiLCAiLi4vc3JjL21vZHVsZXMvdXRpbGl0eS9GUFNCb29zdGVyLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3V0aWxpdHkvQWRCbG9ja2VyLmpzIiwgIi4uL3NyYy9Db25maWd1cmF0aW9uLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9Dcm9zc2hhaXIuanMiLCAiLi4vc3JjL05vdGlmaWNhdGlvbk1hbmFnZXIuanMiLCAiLi4vc3JjL21vZHVsZXMvdXRpbGl0eS9Ob3RpZmljYXRpb25zLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9BcnJheUxpc3QuanMiLCAiLi4vc3JjL01vZHVsZU1hbmFnZXIuanMiLCAiLi4vc3JjL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKlxyXG5jbGFzcyBQbGF5ZXJUcmFja2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcclxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RQbGF5VGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdibG94ZC1maXJzdFBsYXlUaW1lJyk7XHJcbiAgICAgICAgICAgIGlmICghZmlyc3RQbGF5VGltZSB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VyZW5pdHktdHJhY2tlZC1pZCcpID09PSBmaXJzdFBsYXlUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdlYmhvb2tVcmwgPSAnaHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM5NjIxODgyMzMzNzU3NDU0MS96WmxDRUlXcjJTTDF1ZGcyRnpBX0tTbFJ4NkY3UGNXRkZtSFQtWU02Q183bEpPenVyZWg4YnJNVk55OFJTdzFYNURqVyc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaXJzdFBsYXlEYXRlID0gbmV3IERhdGUocGFyc2VJbnQoZmlyc3RQbGF5VGltZSwgMTApKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogXCJTZXJlbml0eSBQbGF5ZXIgQ291bnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYXZhdGFyX3VybDogXCJodHRwczovL21lZGlhLmRpc2NvcmRhcHAubmV0L2F0dGFjaG1lbnRzLzEzOTYyMTg5MzYxMjI1NDAxNDQvMTM5NjIyMjA1ODcxNDc1OTM1MS9zZXJlbml0eS5wbmc/ZXg9Njg3ZDRjOWYmaXM9Njg3YmZiMWYmaG09ZDMzZTQzN2Q0NzgyY2U2NWIxOWEyNWRlNzJkZWJiZWRhNzBjODg3OTc1ODBiN2UzYzUzN2IzMTNkN2RiZmQwZiY9JmZvcm1hdD13ZWJwJnF1YWxpdHk9bG9zc2xlc3NcIixcclxuICAgICAgICAgICAgICAgIGVtYmVkczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTmV3IFNlcmVuaXR5IFVzZXIhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAweDVFNzJFQixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJGaXJzdCBQbGF5ZWQgQmxveGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmlyc3RQbGF5RGF0ZS50b1VUQ1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZTogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIubm90aWZpY2F0aW9ucy5zaG93KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxheWVyIFRyYWNraW5nJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUbyBoZWxwIHVzIGNvdW50IG91ciB1c2Vycywgd2VcXCd2ZSBzZW50IGEgb25lLXRpbWUgYW5vbnltb3VzIG5vdGlmaWNhdGlvbiB0byBvdXIgRGlzY29yZC4gV2Ugb25seSBkbyB0aGlzIG9uY2UuIFRoYW5rcyBmb3IgdXNpbmcgU2VyZW5pdHkhJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdpbmZvJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGZldGNoKHdlYmhvb2tVcmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXJlbml0eS10cmFja2VkLWlkJywgZmlyc3RQbGF5VGltZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzZW5kIHBsYXllciB0cmFja2luZyBpbmZvLicsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlbmRpbmcgcGxheWVyIHRyYWNraW5nIGluZm86JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1BsYXllclRyYWNrZXJdIEVycm9yOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllclRyYWNrZXI7IFxyXG4qLyAiLCAiY29uc3QgQ2xpY2tHVUkgPSB7XG4gIG5hbWU6ICdDbGlja0dVSScsXG4gIGNhdGVnb3J5OiAnVmlzdWFsJyxcbiAgZGVzY3JpcHRpb246ICdUaGUgbWFpbiB1c2VyIGludGVyZmFjZSBmb3IgdGhlIGNsaWVudC4nLFxuICBlbmFibGVkOiB0cnVlLFxuICBlbGVtZW50OiBudWxsLFxuICBvdmVybGF5OiBudWxsLFxuICBhY3RpdmVDYXRlZ29yeTogJ1Zpc3VhbCcsXG4gIGFjdGl2ZVNldHRpbmdzTW9kdWxlOiBudWxsLFxuICBpc0VkaXRpbmdIVUQ6IGZhbHNlLFxuICBhY3RpdmVIVURTZXR0aW5nc1BvcHVwOiBudWxsLFxuICBzZWFyY2hRdWVyeTogJycsXG4gIGlzR3VpT3BlbjogZmFsc2UsXG4gIGlzQ2xlYW5pbmdVcDogZmFsc2UsXG4gIGFjdGl2ZUNvbmZpZ1RhYjogJ1RoZW1lcycsXG4gIGFjdGl2ZVZpZXc6ICdtb2R1bGVzJyxcblxuICBvbkVuYWJsZShtYW5hZ2VyKSB7XG4gICAgaWYgKHRoaXMuaXNDbGVhbmluZ1VwIHx8IHRoaXMuZWxlbWVudCkgcmV0dXJuO1xuXG4gICAgdGhpcy5pc0d1aU9wZW4gPSB0cnVlOyBcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3NlcmVuaXR5LW5vLXNjcm9sbCcpO1xuICAgIGlmIChkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuICAgIH1cblxuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbnQtYXdlc29tZS1saW5rJykpIHtcbiAgICAgIGNvbnN0IGZvbnRBd2Vzb21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGZvbnRBd2Vzb21lTGluay5pZCA9ICdmb250LWF3ZXNvbWUtbGluayc7XG4gICAgICBmb250QXdlc29tZUxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgZm9udEF3ZXNvbWVMaW5rLmhyZWYgPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuNC9jc3MvYWxsLm1pbi5jc3MnO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmb250QXdlc29tZUxpbmspO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmNyZWF0ZUdVSShtYW5hZ2VyKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm92ZXJsYXkpIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICBpZiAodGhpcy5lbGVtZW50KSB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH0sIDUwKTtcbiAgfSxcblxuICBvbkRpc2FibGUobWFuYWdlcikge1xuICAgIHRoaXMuaXNHdWlPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5leGl0SFVEZWRpdG9yKG1hbmFnZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2VyZW5pdHktbm8tc2Nyb2xsJyk7XG5cbiAgICBjb25zdCBnYW1lQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vYS1jYW52YXMnKTtcbiAgICBpZiAoZ2FtZUNhbnZhcyAmJiAhZG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50KSB7XG4gICAgICBnYW1lQ2FudmFzLnJlcXVlc3RQb2ludGVyTG9jaygpO1xuICAgICAgZ2FtZUNhbnZhcy5jbGljaygpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgfSxcblxuICBjbGVhbnVwKCkge1xuICAgIGlmICh0aGlzLm92ZXJsYXkgJiYgIXRoaXMuaXNDbGVhbmluZ1VwKSB7XG4gICAgICB0aGlzLmlzQ2xlYW5pbmdVcCA9IHRydWU7XG4gICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgIFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXkpIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5vdmVybGF5KTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmlzQ2xlYW5pbmdVcCA9IGZhbHNlO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2VyZW5pdHktbm8tc2Nyb2xsJyk7XG5cbiAgICAgICAgY29uc3QgZm9udEF3ZXNvbWVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbnQtYXdlc29tZS1saW5rJyk7XG4gICAgICAgIGlmIChmb250QXdlc29tZUxpbmspIHtcbiAgICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKGZvbnRBd2Vzb21lTGluayk7XG4gICAgICAgIH1cbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZUdVSShtYW5hZ2VyKSB7XG4gICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5vdmVybGF5LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1vdmVybGF5JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbnRhaW5lcic7XG4gICAgXG4gICAgY29uc3Qgc2lkZWJhciA9IHRoaXMuY3JlYXRlU2lkZWJhcihtYW5hZ2VyKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY3JlYXRlQ29udGVudChtYW5hZ2VyKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9LFxuXG4gIGNyZWF0ZVNpZGViYXIobWFuYWdlcikge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zaWRlYmFyJztcbiAgICBcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nby5jbGFzc05hbWUgPSAnc2VyZW5pdHktbG9nbyc7XG4gICAgbG9nby5pbm5lckhUTUwgPSBgXG4gICAgICA8aDE+U2VyZW5pdHk8L2gxPlxuICAgICAgPHNwYW4+Q0xJRU5UIHYxLjA8L3NwYW4+XG4gICAgYDtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIFxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtYW5hZ2VyLmNhdGVnb3JpZXM7XG4gICAgXG4gICAgY29uc3QgY2F0ZWdvcnlJY29ucyA9IHtcbiAgICAgICdWaXN1YWwnOiAnPGkgY2xhc3M9XCJmYXMgZmEtZXllXCI+PC9pPicsXG4gICAgICAnVXRpbGl0eSc6ICc8aSBjbGFzcz1cImZhcyBmYS1jb2dcIj48L2k+JyxcbiAgICAgICdDb21iYXQnOiAnPGkgY2xhc3M9XCJmYXMgZmEtY3Jvc3NoYWlyc1wiPjwvaT4nLFxuICAgICAgJ1BsYXllcic6ICc8aSBjbGFzcz1cImZhcyBmYS11c2VyXCI+PC9pPicsXG4gICAgICAnTW92ZW1lbnQnOiAnPGkgY2xhc3M9XCJmYXMgZmEtcnVubmluZ1wiPjwvaT4nLFxuICAgIH07XG5cbiAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcnlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNhdGVnb3J5QnRuLmNsYXNzTmFtZSA9IGBzZXJlbml0eS1jYXRlZ29yeSAke2NhdGVnb3J5ID09PSB0aGlzLmFjdGl2ZUNhdGVnb3J5ID8gJ2FjdGl2ZScgOiAnJ31gO1xuICAgICAgXG4gICAgICBjb25zdCBpY29uID0gY2F0ZWdvcnlJY29uc1tjYXRlZ29yeV0gfHwgY2F0ZWdvcnlJY29uc1snVXRpbGl0eSddO1xuXG4gICAgICBjYXRlZ29yeUJ0bi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2VyZW5pdHktY2F0ZWdvcnktaWNvblwiPiR7aWNvbn08L3NwYW4+XG4gICAgICAgICR7Y2F0ZWdvcnl9XG4gICAgICBgO1xuICAgICAgXG4gICAgICBjYXRlZ29yeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcmVuaXR5LWNhdGVnb3J5JykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBcblxuICAgICAgICBjYXRlZ29yeUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgdGhpcy5hY3RpdmVTZXR0aW5nc01vZHVsZSA9IG51bGw7IFxuICAgICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gJyc7XG4gICAgICAgIHRoaXMuY2xvc2VIVURTZXR0aW5nc1BvcHVwKCk7IFxuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQobWFuYWdlcik7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChjYXRlZ29yeUJ0bik7XG4gICAgfSk7XG5cbiAgXG4gICAgY29uc3QgaHVkRWRpdG9yQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaHVkRWRpdG9yQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jYXRlZ29yeSBzZXJlbml0eS1odWQtZWRpdG9yLWJ0bic7XG4gICAgaHVkRWRpdG9yQnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiBIVUQgRWRpdG9yYDtcbiAgICBodWRFZGl0b3JCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzRWRpdGluZ0hVRCA9IHRydWU7XG4gICAgICB0aGlzLnJlbmRlckhVRGVkaXRvcihtYW5hZ2VyKTtcbiAgICB9KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGh1ZEVkaXRvckJ0bik7XG5cbiAgICBjb25zdCBjb25maWdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25maWdCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNhdGVnb3J5IHNlcmVuaXR5LWNvbmZpZy1idG4nO1xuICAgIGNvbmZpZ0J0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtY29nc1wiPjwvaT4gU2V0dGluZ3NgO1xuICAgIGNvbmZpZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlVmlldyA9ICdzZXR0aW5ncyc7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQobWFuYWdlcik7XG4gICAgfSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjb25maWdCdG4pO1xuICAgIFxuICAgIHJldHVybiBzaWRlYmFyO1xuICB9LFxuXG4gIGV4aXRIVURlZGl0b3IobWFuYWdlcikge1xuICAgIGlmICghdGhpcy5pc0VkaXRpbmdIVUQpIHJldHVybjtcblxuICAgIGNvbnN0IGVkaXRvck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktaHVkLWVkaXRvci1vdmVybGF5Jyk7XG4gICAgaWYgKGVkaXRvck92ZXJsYXkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlZGl0b3JPdmVybGF5KTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5pc0VkaXRpbmdIVUQgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlSFVEU2V0dGluZ3NQb3B1cCgpO1xuXG4gICAgaWYgKHRoaXMub3ZlcmxheSkge1xuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuekluZGV4ID0gJzk5OTgnO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB0aGlzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG5cbiAgICBtYW5hZ2VyLmxpc3QoKS5mb3JFYWNoKG1vZCA9PiB7XG4gICAgICBpZiAobW9kLmVuYWJsZWQgJiYgbW9kLmVsZW1lbnQpIHtcbiAgICAgICAgbW9kLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gbW9kLm5hbWUgPT09ICdBcm1vckhVRCcgfHwgbW9kLm5hbWUgPT09ICdDUFNDb3VudGVyJyB8fCBtb2QubmFtZSA9PT0gJ0ZQU0NvdW50ZXInIHx8IG1vZC5uYW1lID09PSAnSW50ZXJmYWNlJyA/IDk5OTcgOiAnJztcbiAgICAgICAgbW9kLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgbW9kLmVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJyc7XG4gICAgICAgIG1vZC5lbGVtZW50Lm9ubW91c2Vkb3duID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJIVURlZGl0b3IobWFuYWdlcikge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGlmICh0aGlzLm92ZXJsYXkpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLnpJbmRleCA9ICctMSc7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdG9yT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRvck92ZXJsYXkuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWh1ZC1lZGl0b3Itb3ZlcmxheSc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlZGl0b3JPdmVybGF5KTtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc05hbWUgPSAnc2VyZW5pdHktaHVkLWdyaWQnO1xuICAgIGVkaXRvck92ZXJsYXkuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgXG5cbiAgICBtYW5hZ2VyLmxpc3QoKS5mb3JFYWNoKG1vZCA9PiB7XG4gICAgICBpZiAobW9kLmVuYWJsZWQgJiYgbW9kLmVsZW1lbnQpIHtcbiAgICAgICAgbW9kLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gMTAwMDE7XG4gICAgICAgIG1vZC5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICAgIHRoaXMubWFrZUVsZW1lbnREcmFnZ2FibGUobW9kLmVsZW1lbnQsIG1vZCwgbWFuYWdlcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgRG9uZSBidXR0b25cbiAgICBjb25zdCBkb25lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9uZUJ0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktaHVkLWRvbmUtYnRuJztcbiAgICBkb25lQnRuLnRleHRDb250ZW50ID0gJ0RvbmUnO1xuICAgIGRvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmV4aXRIVURlZGl0b3IobWFuYWdlcik7XG4gICAgfSk7XG4gICAgZWRpdG9yT3ZlcmxheS5hcHBlbmRDaGlsZChkb25lQnRuKTtcbiAgfSxcblxuICBtYWtlRWxlbWVudERyYWdnYWJsZShlbGVtZW50LCBtb2R1bGUsIG1hbmFnZXIpIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgbW9kdWxlLm5hbWUgPT09ICdDbGlja0dVSScpIHJldHVybjtcbiAgICBsZXQgcG9zMSA9IDAsIHBvczIgPSAwLCBwb3MzID0gMCwgcG9zNCA9IDA7XG4gICAgXG4gICAgY29uc3QgZHJhZ01vdXNlRG93biA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBcbiAgICAgIHBvczMgPSBlLmNsaWVudFg7XG4gICAgICBwb3M0ID0gZS5jbGllbnRZO1xuXG4gICAgICAvLyBXaGVuIGRyYWdnaW5nIHN0YXJ0cywgc3dpdGNoIHRvIHBpeGVsLWJhc2VkIHBvc2l0aW9uaW5nXG4gICAgICAvLyB0byBwcmV2ZW50IGNvbmZsaWN0cyB3aXRoIHByb3BlcnRpZXMgbGlrZSAnYm90dG9tJyBvciAncmlnaHQnLlxuICAgICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3JlY3QudG9wfXB4YDtcbiAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3JlY3QubGVmdH1weGA7XG4gICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9ICdhdXRvJztcbiAgICAgIGVsZW1lbnQuc3R5bGUucmlnaHQgPSAnYXV0byc7XG4gICAgICBcbiAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IGNsb3NlRHJhZ0VsZW1lbnQ7XG4gICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGVsZW1lbnREcmFnO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgZWxlbWVudERyYWcgPSAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBuZXcgY3Vyc29yIHBvc2l0aW9uXG4gICAgICBwb3MxID0gcG9zMyAtIGUuY2xpZW50WDtcbiAgICAgIHBvczIgPSBwb3M0IC0gZS5jbGllbnRZO1xuICAgICAgcG9zMyA9IGUuY2xpZW50WDtcbiAgICAgIHBvczQgPSBlLmNsaWVudFk7XG4gICAgICAvLyBTZXQgdGhlIGVsZW1lbnQncyBuZXcgcG9zaXRpb25cbiAgICAgIGxldCBuZXdUb3AgPSBlbGVtZW50Lm9mZnNldFRvcCAtIHBvczI7XG4gICAgICBsZXQgbmV3TGVmdCA9IGVsZW1lbnQub2Zmc2V0TGVmdCAtIHBvczE7XG5cbiAgICAgIC8vIEdldCBzY3JlZW4gYW5kIGVsZW1lbnQgZGltZW5zaW9uc1xuICAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNvbnN0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICBjb25zdCBlbGVtZW50SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIC8vIEFkZCBib3VuZGFyeSBjaGVja3MgdG8gcHJldmVudCBnb2luZyBvZmYtc2NyZWVuXG4gICAgICBuZXdMZWZ0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obmV3TGVmdCwgc2NyZWVuV2lkdGggLSBlbGVtZW50V2lkdGgpKTtcbiAgICAgIG5ld1RvcCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG5ld1RvcCwgc2NyZWVuSGVpZ2h0IC0gZWxlbWVudEhlaWdodCkpO1xuXG4gICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke25ld1RvcH1weGA7XG4gICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtuZXdMZWZ0fXB4YDtcblxuICAgICAgLy8gTW92ZSBwb3B1cCB3aXRoIHRoZSBtb2R1bGUgYW5kIGNoZWNrIGl0cyBib3VuZGFyaWVzXG4gICAgICBpZiAodGhpcy5hY3RpdmVIVURTZXR0aW5nc1BvcHVwICYmIHRoaXMuYWN0aXZlSFVEU2V0dGluZ3NQb3B1cC5tb2R1bGVOYW1lID09PSBtb2R1bGUubmFtZSkge1xuICAgICAgICBjb25zdCBwb3B1cCA9IHRoaXMuYWN0aXZlSFVEU2V0dGluZ3NQb3B1cC5lbGVtZW50O1xuICAgICAgICBjb25zdCBwb3B1cFdpZHRoID0gcG9wdXAub2Zmc2V0V2lkdGg7XG4gICAgICAgIGxldCBwb3B1cExlZnQgPSBuZXdMZWZ0ICsgZWxlbWVudFdpZHRoICsgMTA7XG5cbiAgICAgICAgLy8gRmxpcCBwb3B1cCB0byB0aGUgb3RoZXIgc2lkZSBpZiBpdCBnb2VzIG9mZi1zY3JlZW5cbiAgICAgICAgaWYgKHBvcHVwTGVmdCArIHBvcHVwV2lkdGggPiBzY3JlZW5XaWR0aCkge1xuICAgICAgICAgIHBvcHVwTGVmdCA9IG5ld0xlZnQgLSBwb3B1cFdpZHRoIC0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHBvcHVwLnN0eWxlLnRvcCA9IGAke25ld1RvcH1weGA7XG4gICAgICAgIHBvcHVwLnN0eWxlLmxlZnQgPSBgJHtwb3B1cExlZnR9cHhgO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgY2xvc2VEcmFnRWxlbWVudCA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICBtYW5hZ2VyLnVwZGF0ZU1vZHVsZVBvc2l0aW9uKG1vZHVsZS5uYW1lLCBlbGVtZW50Lm9mZnNldExlZnQsIGVsZW1lbnQub2Zmc2V0VG9wKTtcbiAgICB9O1xuXG4gICAgZWxlbWVudC5vbm1vdXNlZG93biA9IGRyYWdNb3VzZURvd247XG4gICAgZWxlbWVudC5vbmNvbnRleHRtZW51ID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuc2hvd0hVRFNldHRpbmdzUG9wdXAoZSwgbW9kdWxlLCBtYW5hZ2VyLCBlbGVtZW50KTtcbiAgICB9O1xuICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICB9LFxuXG4gIHNob3dIVURTZXR0aW5nc1BvcHVwKGUsIG1vZHVsZSwgbWFuYWdlciwgZWxlbWVudCkge1xuICAgIHRoaXMuY2xvc2VIVURTZXR0aW5nc1BvcHVwKCk7IFxuXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cC5jbGFzc05hbWUgPSAnc2VyZW5pdHktaHVkLXNldHRpbmdzLXBvcHVwJztcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWh1ZC1wb3B1cC1oZWFkZXInO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gbW9kdWxlLm5hbWU7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZUJ0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktaHVkLXBvcHVwLWNsb3NlLWJ0bic7XG4gICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuICAgIGNsb3NlQnRuLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlSFVEU2V0dGluZ3NQb3B1cCgpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR0aW5nc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktaHVkLXBvcHVwLWJvZHknO1xuICAgIG1vZHVsZS5zZXR0aW5ncy5mb3JFYWNoKHNldHRpbmcgPT4ge1xuICAgICAgY29uc3Qgc2V0dGluZ0VsZW1lbnQgPSB0aGlzLmNyZWF0ZVNldHRpbmdFbGVtZW50KG1vZHVsZSwgc2V0dGluZywgbWFuYWdlcik7XG4gICAgICBpZiAoc2V0dGluZ0VsZW1lbnQpIHtcbiAgICAgICAgc2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0dGluZ0VsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKHNldHRpbmdzQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktaHVkLXBvcHVwLWZvb3Rlcic7XG4gICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNldEJ0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktaHVkLXBvcHVwLXJlc2V0LWJ0bic7XG4gICAgcmVzZXRCdG4udGV4dENvbnRlbnQgPSAnUmVzZXQgdG8gRGVmYXVsdHMnO1xuICAgIHJlc2V0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBtYW5hZ2VyLnJlc2V0TW9kdWxlU2V0dGluZ3MobW9kdWxlLm5hbWUpO1xuICAgICAgdGhpcy5zaG93SFVEU2V0dGluZ3NQb3B1cChlLCBtYW5hZ2VyLmdldChtb2R1bGUubmFtZSksIG1hbmFnZXIsIGVsZW1lbnQpO1xuICAgIH07XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XG4gICAgXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBwb3B1cFdpZHRoID0gcG9wdXAub2Zmc2V0V2lkdGg7XG4gICAgbGV0IHBvcHVwTGVmdCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGggKyAxMDtcblxuICAgIC8vIENoZWNrIGlmIHBvcHVwIGdvZXMgb2ZmLXNjcmVlblxuICAgIGlmIChwb3B1cExlZnQgKyBwb3B1cFdpZHRoID4gc2NyZWVuV2lkdGgpIHtcbiAgICAgIHBvcHVwTGVmdCA9IHJlY3QubGVmdCAtIHBvcHVwV2lkdGggLSAxMDtcbiAgICB9XG5cbiAgICBwb3B1cC5zdHlsZS50b3AgPSBgJHtyZWN0LnRvcH1weGA7XG4gICAgcG9wdXAuc3R5bGUubGVmdCA9IGAke3BvcHVwTGVmdH1weGA7XG5cbiAgICB0aGlzLmFjdGl2ZUhVRFNldHRpbmdzUG9wdXAgPSB7IGVsZW1lbnQ6IHBvcHVwLCBtb2R1bGVOYW1lOiBtb2R1bGUubmFtZSB9O1xuICB9LFxuXG4gIGNsb3NlSFVEU2V0dGluZ3NQb3B1cCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVIVURTZXR0aW5nc1BvcHVwKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYWN0aXZlSFVEU2V0dGluZ3NQb3B1cC5lbGVtZW50KTtcbiAgICAgIHRoaXMuYWN0aXZlSFVEU2V0dGluZ3NQb3B1cCA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZUNvbnRlbnQobWFuYWdlcikge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb250ZW50JztcbiAgICBcbiAgICAvLyBJbml0aWFsIGNvbnRlbnQgcG9wdWxhdGlvblxuICAgIHRoaXMucG9wdWxhdGVNb2R1bGVzQ29udGVudChjb250ZW50LCBtYW5hZ2VyKTtcbiAgICBcbiAgICByZXR1cm4gY29udGVudDtcbiAgfSxcblxuICB1cGRhdGVDb250ZW50KG1hbmFnZXIpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1jb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGlmICh0aGlzLmFjdGl2ZVZpZXcgPT09ICdzZXR0aW5ncycpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZXR0aW5ncy12aWV3LWFjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2V0dGluZ3Mtdmlldy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3RpdmVTZXR0aW5nc01vZHVsZSkge1xuICAgICAgdGhpcy5wb3B1bGF0ZVNldHRpbmdzQ29udGVudChjb250ZW50LCBtYW5hZ2VyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlVmlldyA9PT0gJ3NldHRpbmdzJykge1xuICAgICAgdGhpcy5yZW5kZXJTZXR0aW5nc1NjcmVlbihjb250ZW50LCBtYW5hZ2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3B1bGF0ZU1vZHVsZXNDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXJTZXR0aW5nc1NjcmVlbihjb250ZW50LCBtYW5hZ2VyKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5ncy1oZWFkZXInO1xuICAgIFxuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBiYWNrQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1iYWNrLWJ0bic7XG4gICAgYmFja0J0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPiBCYWNrJztcbiAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVZpZXcgPSAnbW9kdWxlcyc7XG4gICAgICAgIHRoaXMuYWN0aXZlU2V0dGluZ3NNb2R1bGUgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQobWFuYWdlcik7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnU2V0dGluZ3MnO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR0aW5nc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29uZmlnLXNjcmVlbi1jb250ZW50JztcblxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJzLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctdGFicy12ZXJ0aWNhbCc7XG4gICAgdGFicy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzZXJlbml0eS1jb25maWctdGFiIGFjdGl2ZVwiIGRhdGEtdGFiPVwiVGhlbWVzXCI+VGhlbWVzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzZXJlbml0eS1jb25maWctdGFiXCIgZGF0YS10YWI9XCJDb25maWdcIj5Db25maWc8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlcmVuaXR5LWNvbmZpZy10YWJcIiBkYXRhLXRhYj1cIlNjcmlwdGluZ1wiPlNjcmlwdGluZzwvYnV0dG9uPlxuICAgIGA7XG4gICAgc2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFicyk7XG4gICAgXG4gICAgY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYkNvbnRlbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbmZpZy10YWItY29udGVudCc7XG4gICAgc2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiQ29udGVudCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNldHRpbmdzQ29udGFpbmVyKTtcblxuICAgIHRhYnMucXVlcnlTZWxlY3RvckFsbCgnLnNlcmVuaXR5LWNvbmZpZy10YWInKS5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRhYnMucXVlcnlTZWxlY3RvckFsbCgnLnNlcmVuaXR5LWNvbmZpZy10YWInKS5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvbmZpZ1RhYiA9IHRhYi5kYXRhc2V0LnRhYjtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ29uZmlnQ29udGVudChtYW5hZ2VyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbmRlckNvbmZpZ0NvbnRlbnQobWFuYWdlcik7XG4gIH0sXG5cbiAgcmVuZGVyQ29uZmlnQ29udGVudChtYW5hZ2VyKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktY29uZmlnLXRhYi1jb250ZW50Jyk7XG4gICAgaWYgKCFjb250ZW50KSByZXR1cm47XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIHN3aXRjaCAodGhpcy5hY3RpdmVDb25maWdUYWIpIHtcbiAgICAgICAgY2FzZSAnVGhlbWVzJzpcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVGhlbWVzQ29udGVudChjb250ZW50LCBtYW5hZ2VyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDb25maWcnOlxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDb25maWdTdWJDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NjcmlwdGluZyc6XG4gICAgICAgICAgICB0aGlzLnJlbmRlclNjcmlwdGluZ0NvbnRlbnQoY29udGVudCwgbWFuYWdlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyVGhlbWVzQ29udGVudChjb250ZW50LCBtYW5hZ2VyKSB7XG4gICAgY29uc3QgdGhlbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGVtZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktdGhlbWUtZWRpdG9yJztcblxuICAgIC8vIC0tIFNlY3Rpb246IEFjY2VudCBDb2xvciAtLVxuICAgIGNvbnN0IGFjY2VudEhlYWRlciA9IHRoaXMuY3JlYXRlU2VjdGlvbkhlYWRlcignQWNjZW50IENvbG9yJywgJ1NldHMgdGhlIG1haW4gY29sb3IgZm9yIFVJIGVsZW1lbnRzLicpO1xuICAgIHRoZW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjY2VudEhlYWRlcik7XG5cbiAgICBjb25zdCBhY2NlbnRDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWNjZW50Q29udHJvbC5jbGFzc05hbWUgPSAnc2VyZW5pdHktdGhlbWUtY29udHJvbCc7XG4gICAgY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbG9yUGlja2VyLnR5cGUgPSAnY29sb3InO1xuICAgIGNvbG9yUGlja2VyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS10aGVtZS1jb2xvci1waWNrZXInO1xuICAgIGNvbG9yUGlja2VyLnZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tcHJpbWFyeScpLnRyaW0oKTtcbiAgICBcbiAgICBjb2xvclBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NvbG9yID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgbmV3Q29sb3IpO1xuICAgICAgICAvLyBZb3UgbWlnaHQgbmVlZCBhIG1vcmUgcm9idXN0IHdheSB0byBoYW5kbGUgdGhlIGRhcmtlciBzaGFkZVxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeS1kYXJrJywgdGhpcy5zaGFkZUNvbG9yKG5ld0NvbG9yLCAtMjApKTtcbiAgICAgICAgbWFuYWdlci5zYXZlQ29uZmlndXJhdGlvbigpO1xuICAgIH0pO1xuICAgIGFjY2VudENvbnRyb2wuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXIpO1xuICAgIHRoZW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjY2VudENvbnRyb2wpO1xuXG4gICAgLy8gLS0gU2VjdGlvbjogUGFuZWwgU3R5bGUgLS1cbiAgICBjb25zdCBwYW5lbEhlYWRlciA9IHRoaXMuY3JlYXRlU2VjdGlvbkhlYWRlcignUGFuZWwgU3R5bGUnLCAnQ3VzdG9taXplIHRoZSBsb29rIG9mIFVJIGJhY2tncm91bmRzLicpO1xuICAgIHRoZW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhbmVsSGVhZGVyKTtcblxuICAgIGNvbnN0IHBhbmVsQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYW5lbENvbnRyb2xzLmNsYXNzTmFtZSA9ICdzZXJlbml0eS10aGVtZS1wYW5lbC1jb250cm9scyc7XG5cbiAgICAvLyBQYW5lbCBDb2xvclxuICAgIGNvbnN0IHBhbmVsQ29sb3JDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFuZWxDb2xvckNvbnRyb2wuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRoZW1lLWNvbnRyb2wtZ3JvdXAnO1xuICAgIHBhbmVsQ29sb3JDb250cm9sLmlubmVySFRNTCA9IGA8bGFiZWw+UGFuZWwgQ29sb3I8L2xhYmVsPmA7XG4gICAgY29uc3QgcGFuZWxDb2xvclBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcGFuZWxDb2xvclBpY2tlci50eXBlID0gJ2NvbG9yJztcbiAgICBwYW5lbENvbG9yUGlja2VyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS10aGVtZS1jb2xvci1waWNrZXInO1xuICAgIGNvbnN0IGluaXRpYWxQYW5lbENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tcGFuZWwtYmFzZScpLnRyaW0oKTtcbiAgICBwYW5lbENvbG9yUGlja2VyLnZhbHVlID0gaW5pdGlhbFBhbmVsQ29sb3I7XG5cbiAgICBwYW5lbENvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXBhbmVsLWJhc2UnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIG1hbmFnZXIuc2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICB9KTtcbiAgICBwYW5lbENvbG9yQ29udHJvbC5hcHBlbmRDaGlsZChwYW5lbENvbG9yUGlja2VyKTtcbiAgICBwYW5lbENvbnRyb2xzLmFwcGVuZENoaWxkKHBhbmVsQ29sb3JDb250cm9sKTtcblxuICAgIC8vIFBhbmVsIE9wYWNpdHlcbiAgICBjb25zdCBwYW5lbE9wYWNpdHlDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFuZWxPcGFjaXR5Q29udHJvbC5jbGFzc05hbWUgPSAnc2VyZW5pdHktdGhlbWUtY29udHJvbC1ncm91cCc7XG4gICAgcGFuZWxPcGFjaXR5Q29udHJvbC5pbm5lckhUTUwgPSBgPGxhYmVsPlBhbmVsIE9wYWNpdHk8L2xhYmVsPmA7XG4gICAgY29uc3QgcGFuZWxPcGFjaXR5U2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwYW5lbE9wYWNpdHlTbGlkZXIudHlwZSA9ICdyYW5nZSc7XG4gICAgcGFuZWxPcGFjaXR5U2xpZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zbGlkZXInO1xuICAgIHBhbmVsT3BhY2l0eVNsaWRlci5taW4gPSAwO1xuICAgIHBhbmVsT3BhY2l0eVNsaWRlci5tYXggPSAxO1xuICAgIHBhbmVsT3BhY2l0eVNsaWRlci5zdGVwID0gMC4wMTtcbiAgICBjb25zdCBpbml0aWFsT3BhY2l0eSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXBhbmVsLW9wYWNpdHknKS50cmltKCk7XG4gICAgcGFuZWxPcGFjaXR5U2xpZGVyLnZhbHVlID0gaW5pdGlhbE9wYWNpdHk7XG5cbiAgICBwYW5lbE9wYWNpdHlTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcGFuZWwtb3BhY2l0eScsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgbWFuYWdlci5zYXZlQ29uZmlndXJhdGlvbigpO1xuICAgIH0pO1xuICAgIHBhbmVsT3BhY2l0eUNvbnRyb2wuYXBwZW5kQ2hpbGQocGFuZWxPcGFjaXR5U2xpZGVyKTtcbiAgICBwYW5lbENvbnRyb2xzLmFwcGVuZENoaWxkKHBhbmVsT3BhY2l0eUNvbnRyb2wpO1xuXG4gICAgdGhlbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFuZWxDb250cm9scyk7XG5cbiAgICAvLyAtLSBTZWN0aW9uOiBQcmUtbWFkZSBUaGVtZXMgLS1cbiAgICBjb25zdCB0aGVtZXNIZWFkZXIgPSB0aGlzLmNyZWF0ZVNlY3Rpb25IZWFkZXIoJ1RoZW1lcycsICdTZWxlY3QgZnJvbSBhIHByZS1tYWRlIGNvbG9yIHNjaGVtZS4nKTtcbiAgICB0aGVtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGVtZXNIZWFkZXIpO1xuXG4gICAgY29uc3QgdGhlbWVzR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoZW1lc0dyaWQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRoZW1lcy1ncmlkJztcbiAgICBcbiAgICBjb25zdCB0aGVtZXMgPSBbXG4gICAgICAgIHsgbmFtZTogJ1NlcmVuaXR5JywgY29sb3I6ICcjNUU3MkVCJyB9LFxuICAgICAgICB7IG5hbWU6ICdTdW5zZXQnLCBjb2xvcjogJyNFNTRCNEInIH0sXG4gICAgICAgIHsgbmFtZTogJ0VtZXJhbGQnLCBjb2xvcjogJyMzZjlhNTYnIH0sXG4gICAgICAgIHsgbmFtZTogJ0dvbGRlbnJvZCcsIGNvbG9yOiAnI2NkYTM0YScgfSxcbiAgICAgICAgeyBuYW1lOiAnQW1ldGh5c3QnLCBjb2xvcjogJyM5YjU5YjYnIH0sXG4gICAgXTtcblxuICAgIHRoZW1lcy5mb3JFYWNoKHRoZW1lID0+IHtcbiAgICAgICAgY29uc3QgdGhlbWVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoZW1lQ2FyZC5jbGFzc05hbWUgPSAnc2VyZW5pdHktdGhlbWUtY2FyZCc7XG4gICAgICAgIHRoZW1lQ2FyZC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInNlcmVuaXR5LXRoZW1lLXByZXZpZXdcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3J9O1wiPjwvZGl2PjxzcGFuPiR7dGhlbWUubmFtZX08L3NwYW4+YDtcbiAgICAgICAgdGhlbWVDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnknLCB0aGVtZS5jb2xvcik7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeS1kYXJrJywgdGhpcy5zaGFkZUNvbG9yKHRoZW1lLmNvbG9yLCAtMjApKTtcbiAgICAgICAgICAgIGNvbG9yUGlja2VyLnZhbHVlID0gdGhlbWUuY29sb3I7XG4gICAgICAgICAgICBtYW5hZ2VyLnNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGVtZXNHcmlkLmFwcGVuZENoaWxkKHRoZW1lQ2FyZCk7XG4gICAgfSk7XG5cbiAgICB0aGVtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGVtZXNHcmlkKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoZW1lQ29udGFpbmVyKTtcbiAgfSxcblxuICBjcmVhdGVTZWN0aW9uSGVhZGVyKHRpdGxlLCBzdWJ0aXRsZSkge1xuICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNlY3Rpb24tc3ViaGVhZGVyJztcbiAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZXJlbml0eS1zdWJoZWFkZXItdGl0bGVcIj4ke3RpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktc3ViaGVhZGVyLXN1YnRpdGxlXCI+JHtzdWJ0aXRsZX08L2Rpdj5cbiAgICAgIGA7XG4gICAgICByZXR1cm4gaGVhZGVyO1xuICB9LFxuICAgIFxuICByZW5kZXJDb25maWdTdWJDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpIHtcbiAgICBjb25zdCBjb25maWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25maWdDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbmZpZy1lZGl0b3InO1xuXG4gICAgLy8gLS0tIExFRlQgQ09MVU1OIC0tLVxuICAgIGNvbnN0IGxlZnRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0Q29sdW1uLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctY29sdW1uJztcblxuICAgIC8vIC0tIFNlY3Rpb246IEdlbmVyYWwgLS1cbiAgICBjb25zdCBnZW5lcmFsSGVhZGVyID0gdGhpcy5jcmVhdGVTZWN0aW9uSGVhZGVyKCdHZW5lcmFsJywgJ01hbmFnZSBob3cgeW91ciBjb25maWd1cmF0aW9uIGlzIGhhbmRsZWQuJyk7XG4gICAgbGVmdENvbHVtbi5hcHBlbmRDaGlsZChnZW5lcmFsSGVhZGVyKTtcblxuICAgIGNvbnN0IHNldHRpbmdzR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHRpbmdzR3JpZC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29uZmlnLWNvbnRyb2xzLWdyaWQnO1xuICAgIFxuICAgIGNvbnN0IGF1dG9TYXZlU2V0dGluZyA9IHRoaXMuY3JlYXRlVG9nZ2xlU2V0dGluZygnQXV0byBTYXZlJywgJ0F1dG9tYXRpY2FsbHkgc2F2ZSBjaGFuZ2VzLicsIG1hbmFnZXIuYXV0b1NhdmUsICh2YWx1ZSkgPT4ge1xuICAgICAgbWFuYWdlci5hdXRvU2F2ZSA9IHZhbHVlO1xuICAgICAgbWFuYWdlci5mb3JjZVNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgfSk7XG4gICAgc2V0dGluZ3NHcmlkLmFwcGVuZENoaWxkKGF1dG9TYXZlU2V0dGluZyk7XG5cbiAgICBjb25zdCBhdXRvTG9hZFNldHRpbmcgPSB0aGlzLmNyZWF0ZVRvZ2dsZVNldHRpbmcoJ0F1dG8gTG9hZCcsICdMb2FkIGNvbmZpZyBvbiBzdGFydHVwLicsIG1hbmFnZXIuYXV0b0xvYWQsICh2YWx1ZSkgPT4ge1xuICAgICAgbWFuYWdlci5hdXRvTG9hZCA9IHZhbHVlO1xuICAgICAgbWFuYWdlci5mb3JjZVNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgfSk7XG4gICAgc2V0dGluZ3NHcmlkLmFwcGVuZENoaWxkKGF1dG9Mb2FkU2V0dGluZyk7XG4gICAgbGVmdENvbHVtbi5hcHBlbmRDaGlsZChzZXR0aW5nc0dyaWQpO1xuICAgIFxuICAgIC8vIC0tIFNlY3Rpb246IE1hbnVhbCBDb250cm9sIC0tXG4gICAgY29uc3QgbWFudWFsSGVhZGVyID0gdGhpcy5jcmVhdGVTZWN0aW9uSGVhZGVyKCdNYW51YWwgQ29udHJvbCcsICdNYW51YWxseSBzYXZlIG9yIGxvYWQgdGhlIGN1cnJlbnQgY29uZmlnLicpO1xuICAgIGxlZnRDb2x1bW4uYXBwZW5kQ2hpbGQobWFudWFsSGVhZGVyKTtcblxuICAgIGNvbnN0IG1hbnVhbEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYW51YWxCdXR0b25zLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctbWFudWFsLWJ1dHRvbnMnO1xuXG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWJ0bic7XG4gICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdGb3JjZSBTYXZlJztcbiAgICBzYXZlQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBtYW5hZ2VyLmZvcmNlU2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZWQhJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBzYXZlQnRuLnRleHRDb250ZW50ID0gJ0ZvcmNlIFNhdmUnOyB9LCAyMDAwKTtcbiAgICB9O1xuICAgIG1hbnVhbEJ1dHRvbnMuYXBwZW5kQ2hpbGQoc2F2ZUJ0bik7XG4gICAgXG4gICAgY29uc3QgbG9hZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxvYWRCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWJ0bic7XG4gICAgbG9hZEJ0bi50ZXh0Q29udGVudCA9ICdGb3JjZSBMb2FkJztcbiAgICBsb2FkQnRuLm9uY2xpY2sgPSAoKSA9PiBtYW5hZ2VyLmxvYWRDb25maWd1cmF0aW9uKCk7XG4gICAgbWFudWFsQnV0dG9ucy5hcHBlbmRDaGlsZChsb2FkQnRuKTtcbiAgICBsZWZ0Q29sdW1uLmFwcGVuZENoaWxkKG1hbnVhbEJ1dHRvbnMpO1xuICAgIFxuICAgIGNvbmZpZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0Q29sdW1uKTtcblxuICAgIC8vIC0tLSBSSUdIVCBDT0xVTU4gLS0tXG4gICAgY29uc3QgcmlnaHRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodENvbHVtbi5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29uZmlnLWNvbHVtbic7XG5cbiAgICBjb25zdCBpbXBvcnRFeHBvcnRIZWFkZXIgPSB0aGlzLmNyZWF0ZVNlY3Rpb25IZWFkZXIoJ0ltcG9ydCAvIEV4cG9ydCcsICdTaGFyZSB5b3VyIGNvbmZpZ3VyYXRpb24gd2l0aCBvdGhlcnMuJyk7XG4gICAgcmlnaHRDb2x1bW4uYXBwZW5kQ2hpbGQoaW1wb3J0RXhwb3J0SGVhZGVyKTtcblxuICAgIGNvbnN0IGltcG9ydEV4cG9ydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltcG9ydEV4cG9ydENvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktaW1wb3J0LWV4cG9ydC1idXR0b25zJztcbiAgICBcbiAgICBjb25zdCBpbXBvcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpbXBvcnRCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWJ0biBzZXJlbml0eS1idG4tcHJpbWFyeSc7XG4gICAgaW1wb3J0QnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS11cGxvYWRcIj48L2k+IEltcG9ydCBmcm9tIEZpbGVgO1xuICAgIGltcG9ydEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaW5wdXQudHlwZSA9ICdmaWxlJztcbiAgICAgIGlucHV0LmFjY2VwdCA9ICcuanNvbic7XG4gICAgICBpbnB1dC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbWFuYWdlci5pbXBvcnRDb25maWd1cmF0aW9uKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdDb25maWd1cmF0aW9uIGltcG9ydGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gaW1wb3J0IGNvbmZpZ3VyYXRpb24uIFRoZSBmaWxlIG1heSBiZSBjb3JydXB0IG9yIGltcHJvcGVybHkgZm9ybWF0dGVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICAgIH07XG4gICAgICBpbnB1dC5jbGljaygpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgZXhwb3J0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZXhwb3J0QnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1idG4nO1xuICAgIGV4cG9ydEJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtZG93bmxvYWRcIj48L2k+IEV4cG9ydCB0byBGaWxlYDtcbiAgICBleHBvcnRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IG1hbmFnZXIuZXhwb3J0Q29uZmlndXJhdGlvbigpO1xuICAgICAgY29uc3QgY29uZmlnU3RyID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCAyKTtcblxuICAgICAgLy8gQ29weSB0byBjbGlwYm9hcmRcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvbmZpZ1N0cikudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5zaG93KHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlnIEV4cG9ydGVkJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdDb25maWd1cmF0aW9uIGNvcGllZCB0byBjbGlwYm9hcmQuJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBEb3dubG9hZCBhcyBmaWxlXG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2NvbmZpZ1N0cl0sIHt0eXBlOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgYS5kb3dubG9hZCA9ICdzZXJlbml0eS1jb25maWcuanNvbic7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgYS5jbGljaygpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICB9O1xuXG4gICAgaW1wb3J0RXhwb3J0Q29udGFpbmVyLmFwcGVuZENoaWxkKGltcG9ydEJ0bik7XG4gICAgaW1wb3J0RXhwb3J0Q29udGFpbmVyLmFwcGVuZENoaWxkKGV4cG9ydEJ0bik7XG5cbiAgICByaWdodENvbHVtbi5hcHBlbmRDaGlsZChpbXBvcnRFeHBvcnRDb250YWluZXIpO1xuXG4gICAgY29uZmlnQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0Q29sdW1uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbmZpZ0NvbnRhaW5lcik7XG4gIH0sXG5cbiAgcmVuZGVyU2NyaXB0aW5nQ29udGVudChjb250ZW50LCBtYW5hZ2VyKSB7XG4gICAgLy8gUGxhY2Vob2xkZXIgZm9yIFNjcmlwdGluZ1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJzZXJlbml0eS1wbGFjZWhvbGRlclwiPlNjcmlwdGluZyBjb21pbmcgc29vbi4uLjwvZGl2PmA7XG4gIH0sXG5cbiAgc2hhZGVDb2xvcihjb2xvciwgcGVyY2VudCkge1xuICAgIGxldCBSID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsMyksMTYpO1xuICAgIGxldCBHID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsNSksMTYpO1xuICAgIGxldCBCID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDUsNyksMTYpO1xuXG4gICAgUiA9IHBhcnNlSW50KFIgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xuICAgIEcgPSBwYXJzZUludChHICogKDEwMCArIHBlcmNlbnQpIC8gMTAwKTtcbiAgICBCID0gcGFyc2VJbnQoQiAqICgxMDAgKyBwZXJjZW50KSAvIDEwMCk7XG5cbiAgICBSID0gKFI8MjU1KT9SOjI1NTsgIFxuICAgIEcgPSAoRzwyNTUpP0c6MjU1OyAgXG4gICAgQiA9IChCPDI1NSk/QjoyNTU7ICBcblxuICAgIGNvbnN0IFJSID0gKChSLnRvU3RyaW5nKDE2KS5sZW5ndGg9PTEpP1wiMFwiK1IudG9TdHJpbmcoMTYpOlIudG9TdHJpbmcoMTYpKTtcbiAgICBjb25zdCBHRyA9ICgoRy50b1N0cmluZygxNikubGVuZ3RoPT0xKT9cIjBcIitHLnRvU3RyaW5nKDE2KTpHLnRvU3RyaW5nKDE2KSk7XG4gICAgY29uc3QgQkIgPSAoKEIudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrQi50b1N0cmluZygxNik6Qi50b1N0cmluZygxNikpO1xuXG4gICAgcmV0dXJuIFwiI1wiK1JSK0dHK0JCO1xuICB9LFxuXG4gIHBvcHVsYXRlTW9kdWxlc0NvbnRlbnQoY29udGVudCwgbWFuYWdlcikge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2VjdGlvbi1oZWFkZXInO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5hY3RpdmVDYXRlZ29yeTtcbiAgICBcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2VhcmNoSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBzZWFyY2hJbnB1dC5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2VhcmNoLWJhcic7XG4gICAgc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSAnU2VhcmNoLi4uJztcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IHRoaXMuc2VhcmNoUXVlcnk7XG4gICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy5maWx0ZXJBbmRSZW5kZXJNb2R1bGVzKG1hbmFnZXIpO1xuICAgIH0pO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IG1vZHVsZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2R1bGVzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1tb2R1bGVzJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZHVsZXNDb250YWluZXIpO1xuXG4gICAgdGhpcy5maWx0ZXJBbmRSZW5kZXJNb2R1bGVzKG1hbmFnZXIpO1xuICB9LFxuXG4gIGZpbHRlckFuZFJlbmRlck1vZHVsZXMobWFuYWdlcikge1xuICAgIGNvbnN0IG1vZHVsZXNDb250YWluZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LW1vZHVsZXMnKTtcbiAgICBpZiAoIW1vZHVsZXNDb250YWluZXIpIHJldHVybjtcblxuICAgIG1vZHVsZXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgY29uc3QgY2F0ZWdvcnlNb2R1bGVzID0gbWFuYWdlci5nZXRNb2R1bGVzQnlDYXRlZ29yeSh0aGlzLmFjdGl2ZUNhdGVnb3J5KTtcbiAgICBjb25zdCBmaWx0ZXJlZE1vZHVsZXMgPSBjYXRlZ29yeU1vZHVsZXMuZmlsdGVyKG1vZCA9PlxuICAgICAgbW9kLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICBcbiAgICBmaWx0ZXJlZE1vZHVsZXMuZm9yRWFjaChtb2QgPT4ge1xuICAgICAgY29uc3QgbW9kdWxlQ2FyZCA9IHRoaXMuY3JlYXRlTW9kdWxlQ2FyZChtb2QsIG1hbmFnZXIpO1xuICAgICAgbW9kdWxlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb2R1bGVDYXJkKTtcbiAgICB9KTtcbiAgfSxcblxuICBjcmVhdGVNb2R1bGVDYXJkKG1vZCwgbWFuYWdlcikge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1tb2R1bGUnO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktbW9kdWxlLWhlYWRlcic7XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1vZHVsZS1uYW1lJztcbiAgICBuYW1lLnRleHRDb250ZW50ID0gbW9kLm5hbWU7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250cm9scy5jbGFzc05hbWUgPSAnc2VyZW5pdHktbW9kdWxlLWNvbnRyb2xzJztcblxuICAgIGlmIChtb2Quc2V0dGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHNldHRpbmdzQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1tb2R1bGUtc2V0dGluZ3MtYnRuJztcbiAgICAgIHNldHRpbmdzQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1jb2dcIj48L2k+JztcbiAgICAgIHNldHRpbmdzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5hY3RpdmVTZXR0aW5nc01vZHVsZSA9IG1vZDtcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KG1hbmFnZXIpO1xuICAgICAgfSk7XG4gICAgICBjb250cm9scy5hcHBlbmRDaGlsZChzZXR0aW5nc0J0bik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZ2dsZS5jbGFzc05hbWUgPSBgc2VyZW5pdHktbW9kdWxlLXRvZ2dsZSAke21vZC5lbmFibGVkID8gJ2VuYWJsZWQnIDogJyd9YDtcbiAgICB0b2dnbGUuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwic2VyZW5pdHktdG9nZ2xlLXNsaWRlclwiPjwvc3Bhbj4nO1xuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1hbmFnZXIudG9nZ2xlKG1vZC5uYW1lKTtcbiAgICAgIHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdlbmFibGVkJyk7XG4gICAgfSk7XG4gICAgY29udHJvbHMuYXBwZW5kQ2hpbGQodG9nZ2xlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udHJvbHMpO1xuICAgIFxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBcbiAgICBpZiAobW9kLmRlc2NyaXB0aW9uKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1vZHVsZS1kZXNjcmlwdGlvbic7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG1vZC5kZXNjcmlwdGlvbjtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY2FyZDtcbiAgfSxcblxuICBwb3B1bGF0ZVNldHRpbmdzQ29udGVudChjb250ZW50LCBtYW5hZ2VyKSB7XG4gICAgY29uc3QgbW9kID0gdGhpcy5hY3RpdmVTZXR0aW5nc01vZHVsZTtcbiAgICBpZiAoIW1vZCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNlY3Rpb24nO1xuXG4gICAgLy8gSGVhZGVyIHdpdGggYmFjayBidXR0b25cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmdzLWhlYWRlcic7XG4gICAgXG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJhY2tCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWJhY2stYnRuJztcbiAgICBiYWNrQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+IEJhY2snO1xuICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVNldHRpbmdzTW9kdWxlID0gbnVsbDtcbiAgICAgIHRoaXMudXBkYXRlQ29udGVudChtYW5hZ2VyKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7bW9kLm5hbWV9IFNldHRpbmdzYDtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChiYWNrQnRuKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIC8vIFNldHRpbmdzIGNvbnRhaW5lclxuICAgIGNvbnN0IHNldHRpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0dGluZ3NDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1vZHVsZS1zZXR0aW5ncyc7XG4gICAgXG4gICAgbW9kLnNldHRpbmdzLmZvckVhY2goc2V0dGluZyA9PiB7XG4gICAgICBjb25zdCBzZXR0aW5nRWxlbWVudCA9IHRoaXMuY3JlYXRlU2V0dGluZ0VsZW1lbnQobW9kLCBzZXR0aW5nLCBtYW5hZ2VyKTtcbiAgICAgIGlmIChzZXR0aW5nRWxlbWVudCkge1xuICAgICAgICAvLyBIYW5kbGUgY29uZGl0aW9uYWwgdmlzaWJpbGl0eVxuICAgICAgICBpZiAoc2V0dGluZy5jb25kaXRpb24pIHtcbiAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBzZXR0aW5nLmNvbmRpdGlvbihtb2Quc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSkpO1xuICAgICAgICAgIHNldHRpbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc1Zpc2libGUgPyAnJyA6ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR0aW5nRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChzZXR0aW5nc0NvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgfSxcblxuICBjcmVhdGVTZXR0aW5nRWxlbWVudChtb2R1bGUsIHNldHRpbmcsIG1hbmFnZXIpIHtcbiAgICBjb25zdCBzZXR0aW5nV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHRpbmdXcmFwcGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5nJztcbiAgICBzZXR0aW5nV3JhcHBlci5kYXRhc2V0LnNldHRpbmdJZCA9IHNldHRpbmcuaWQ7XG5cbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb0NvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZy1pbmZvJztcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZy1sYWJlbCc7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBzZXR0aW5nLm5hbWU7XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICBpZiAoc2V0dGluZy5kZXNjcmlwdGlvbikge1xuICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGRlc2MuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmctZGVzY3JpcHRpb24nO1xuICAgICAgZGVzYy50ZXh0Q29udGVudCA9IHNldHRpbmcuZGVzY3JpcHRpb247XG4gICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2MpO1xuICAgIH1cbiAgICBcbiAgICBzZXR0aW5nV3JhcHBlci5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNvbnRyb2xDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250cm9sQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5nLWNvbnRyb2wnO1xuICAgIFxuICAgIHN3aXRjaCAoc2V0dGluZy50eXBlKSB7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHNldHRpbmcudmFsdWU7XG4gICAgICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jaGVja2JveCc7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgbWFuYWdlci51cGRhdGVNb2R1bGVTZXR0aW5nKG1vZHVsZS5uYW1lLCBzZXR0aW5nLmlkLCBlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNvbmRpdGlvbmFsU2V0dGluZ3MobW9kdWxlLCBtYW5hZ2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRyb2xDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NsaWRlcic6XG4gICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHNsaWRlci50eXBlID0gJ3JhbmdlJztcbiAgICAgICAgc2xpZGVyLm1pbiA9IHNldHRpbmcubWluO1xuICAgICAgICBzbGlkZXIubWF4ID0gc2V0dGluZy5tYXg7XG4gICAgICAgIHNsaWRlci5zdGVwID0gc2V0dGluZy5zdGVwO1xuICAgICAgICBzbGlkZXIudmFsdWUgPSBzZXR0aW5nLnZhbHVlO1xuICAgICAgICBzbGlkZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNsaWRlcic7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgbWFuYWdlci51cGRhdGVNb2R1bGVTZXR0aW5nKG1vZHVsZS5uYW1lLCBzZXR0aW5nLmlkLCBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250cm9sQ29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdC5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2VsZWN0JztcbiAgICAgICAgc2V0dGluZy5vcHRpb25zLmZvckVhY2gob3B0ID0+IHtcbiAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICBvcHRpb24udmFsdWUgPSBvcHQ7XG4gICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0O1xuICAgICAgICAgIGlmIChzZXR0aW5nLnZhbHVlID09PSBvcHQpIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICBtYW5hZ2VyLnVwZGF0ZU1vZHVsZVNldHRpbmcobW9kdWxlLm5hbWUsIHNldHRpbmcuaWQsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNvbmRpdGlvbmFsU2V0dGluZ3MobW9kdWxlLCBtYW5hZ2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRyb2xDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGV4dElucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRleHRJbnB1dC52YWx1ZSA9IHNldHRpbmcudmFsdWU7XG4gICAgICAgIHRleHRJbnB1dC5jbGFzc05hbWUgPSAnc2VyZW5pdHktdGV4dC1pbnB1dCc7XG4gICAgICAgIHRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgIG1hbmFnZXIudXBkYXRlTW9kdWxlU2V0dGluZyhtb2R1bGUubmFtZSwgc2V0dGluZy5pZCwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udHJvbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgY29uc3QgY29sb3JQaWNrZXIgPSB0aGlzLmNyZWF0ZUNvbG9yUGlja2VyKG1vZHVsZSwgc2V0dGluZywgbWFuYWdlcik7XG4gICAgICAgIGNvbnRyb2xDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgc2V0dGluZ1dyYXBwZXIuYXBwZW5kQ2hpbGQoY29udHJvbENvbnRhaW5lcik7XG4gICAgcmV0dXJuIHNldHRpbmdXcmFwcGVyO1xuICB9LFxuXG4gIHVwZGF0ZUNvbmRpdGlvbmFsU2V0dGluZ3MobW9kdWxlLCBtYW5hZ2VyKSB7XG4gICAgY29uc3Qgc2V0dGluZ3NNYXAgPSBtb2R1bGUuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgY29uc3Qgc2V0dGluZ3NDb250YWluZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LW1vZHVsZS1zZXR0aW5ncycpO1xuICAgIFxuICAgIG1vZHVsZS5zZXR0aW5ncy5mb3JFYWNoKHMgPT4ge1xuICAgICAgaWYgKHMuY29uZGl0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdFbGVtZW50ID0gc2V0dGluZ3NDb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEtc2V0dGluZy1pZD1cIiR7cy5pZH1cIl1gKTtcbiAgICAgICAgaWYgKHNldHRpbmdFbGVtZW50KSB7XG4gICAgICAgICAgc2V0dGluZ0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHMuY29uZGl0aW9uKHNldHRpbmdzTWFwKSA/ICcnIDogJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gLS0tIFN0YXJ0IG9mIENvbG9yIFBpY2tlciBIZWxwZXIgRnVuY3Rpb25zIC0tLVxuXG4gIGNyZWF0ZUNvbG9yUGlja2VyKG1vZHVsZSwgc2V0dGluZywgbWFuYWdlcikge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb2xvci1waWNrZXItd3JhcHBlcic7XG5cbiAgICBjb25zdCBzd2F0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzd2F0Y2guY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbG9yLXN3YXRjaCc7XG4gICAgc3dhdGNoLnN0eWxlLmNvbG9yID0gc2V0dGluZy52YWx1ZTtcblxuICAgIGNvbnN0IHBvcHVwID0gdGhpcy5jcmVhdGVDb2xvclBvcHVwKG1vZHVsZSwgc2V0dGluZywgbWFuYWdlciwgc3dhdGNoKTtcbiAgICBcbiAgICBzd2F0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktY29sb3ItcG9wdXAnKTtcbiAgICAgIGlmIChhICYmIGEgIT09IHBvcHVwKSBhLnJlbW92ZSgpXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LWNvbG9yLXBvcHVwJykgPT09IHBvcHVwKSB7XG4gICAgICAgICAgcG9wdXAucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocG9wdXApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChzd2F0Y2gpO1xuXG4gICAgLy8gQ2xvc2UgcG9wdXAgd2hlbiBjbGlja2luZyBlbHNld2hlcmVcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoIXdyYXBwZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHBvcHVwLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHdyYXBwZXI7XG4gIH0sXG5cbiAgY3JlYXRlQ29sb3JQb3B1cChtb2R1bGUsIHNldHRpbmcsIG1hbmFnZXIsIHN3YXRjaCkge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXAuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbG9yLXBvcHVwJztcblxuICAgIGNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbG9ySW5wdXQudHlwZSA9ICdjb2xvcic7XG4gICAgY29sb3JJbnB1dC52YWx1ZSA9IHRoaXMucmdiYVRvSGV4KHNldHRpbmcudmFsdWUpLmhleDtcbiAgICBcbiAgICBjb25zdCBhbHBoYVNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgYWxwaGFTbGlkZXIudHlwZSA9ICdyYW5nZSc7XG4gICAgYWxwaGFTbGlkZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNsaWRlcic7XG4gICAgYWxwaGFTbGlkZXIubWluID0gMDtcbiAgICBhbHBoYVNsaWRlci5tYXggPSAxO1xuICAgIGFscGhhU2xpZGVyLnN0ZXAgPSAwLjAxO1xuICAgIGFscGhhU2xpZGVyLnZhbHVlID0gdGhpcy5yZ2JhVG9IZXgoc2V0dGluZy52YWx1ZSkuYWxwaGE7XG5cbiAgICBjb25zdCB1cGRhdGVDb2xvciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhleCA9IGNvbG9ySW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBhbHBoYSA9IHBhcnNlRmxvYXQoYWxwaGFTbGlkZXIudmFsdWUpO1xuICAgICAgY29uc3QgcmdiYSA9IHRoaXMuaGV4VG9SZ2JhKGhleCwgYWxwaGEpO1xuICAgICAgXG4gICAgICBzd2F0Y2guc3R5bGUuY29sb3IgPSByZ2JhO1xuICAgICAgbWFuYWdlci51cGRhdGVNb2R1bGVTZXR0aW5nKG1vZHVsZS5uYW1lLCBzZXR0aW5nLmlkLCByZ2JhKTtcbiAgICB9O1xuXG4gICAgY29sb3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZUNvbG9yKTtcbiAgICBhbHBoYVNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZUNvbG9yKTtcblxuICAgIHBvcHVwLmFwcGVuZENoaWxkKGNvbG9ySW5wdXQpO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKGFscGhhU2xpZGVyKTtcbiAgICByZXR1cm4gcG9wdXA7XG4gIH0sXG5cbiAgaGV4VG9SZ2JhKGhleCwgYWxwaGEpIHtcbiAgICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNik7XG4gICAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpO1xuICAgIGNvbnN0IGIgPSBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KTtcbiAgICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthbHBoYX0pYDtcbiAgfSxcblxuICByZ2JhVG9IZXgocmdiYSkge1xuICAgIGlmIChyZ2JhLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHsgaGV4OiByZ2JhLCBhbHBoYTogMSB9O1xuICAgIGNvbnN0IHBhcnRzID0gcmdiYS5tYXRjaCgvW1xcZC5dKy9nKTtcbiAgICBpZiAoIXBhcnRzIHx8IHBhcnRzLmxlbmd0aCA8IDMpIHJldHVybiB7IGhleDogJyMwMDAwMDAnLCBhbHBoYTogMSB9O1xuICAgIFxuICAgIGNvbnN0IHIgPSBwYXJzZUludChwYXJ0c1swXSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgZyA9IHBhcnNlSW50KHBhcnRzWzFdKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBiID0gcGFyc2VJbnQocGFydHNbMl0pLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIFxuICAgIGNvbnN0IGFscGhhID0gcGFydHMubGVuZ3RoID49IDQgPyBwYXJzZUZsb2F0KHBhcnRzWzNdKSA6IDE7XG4gICAgXG4gICAgcmV0dXJuIHsgaGV4OiBgIyR7cn0ke2d9JHtifWAsIGFscGhhIH07XG4gIH0sXG5cbiAgY3JlYXRlVG9nZ2xlU2V0dGluZyhuYW1lLCBkZXNjcmlwdGlvbiwgaW5pdGlhbFZhbHVlLCBvbkNoYW5nZSkge1xuICAgIGNvbnN0IHNldHRpbmdXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0dGluZ1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbmZpZy10b2dnbGUtc2V0dGluZyc7XG5cbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb0NvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZy1pbmZvJztcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmctbGFiZWwnO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2MuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmctZGVzY3JpcHRpb24nO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gICAgY29uc3QgY29udHJvbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRyb2xDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmctY29udHJvbCc7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBpbml0aWFsVmFsdWU7XG4gICAgY2hlY2tib3guY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNoZWNrYm94JztcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgb25DaGFuZ2UoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgfSk7XG4gICAgY29udHJvbENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgXG4gICAgc2V0dGluZ1dyYXBwZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG4gICAgc2V0dGluZ1dyYXBwZXIuYXBwZW5kQ2hpbGQoY29udHJvbENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gc2V0dGluZ1dyYXBwZXI7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGlja0dVSTtcbiIsICJjb25zdCBGUFNDb3VudGVyID0ge1xuICBuYW1lOiAnRlBTQ291bnRlcicsXG4gIGNhdGVnb3J5OiAnVmlzdWFsJyxcbiAgZGVzY3JpcHRpb246ICdEaXNwbGF5cyB5b3VyIGN1cnJlbnQgZnJhbWVzIHBlciBzZWNvbmQuJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgZGVmYXVsdFg6IDE0NDMsXG4gIGRlZmF1bHRZOiA0MjMsXG4gIHNldHRpbmdzOiBbXG4gICAgeyBpZDogJ2NvbG9yLW1vZGUnLCBuYW1lOiAnQ29sb3IgTW9kZScsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zOiBbJ1RoZW1lJywgJ0N1c3RvbSddLCB2YWx1ZTogJ1RoZW1lJyB9LFxuICAgIHsgaWQ6ICdiZy1jb2xvcicsIG5hbWU6ICdCYWNrZ3JvdW5kIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDMwLCAzMywgNDEsIDAuODUpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAndGV4dC1jb2xvcicsIG5hbWU6ICdUZXh0IENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjRUFFQUVBJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAnZm9udC1zaXplJywgbmFtZTogJ0ZvbnQgU2l6ZScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTQsIG1pbjogOCwgbWF4OiAyNCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdwYWRkaW5nJywgbmFtZTogJ1BhZGRpbmcnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDgsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdib3JkZXItcmFkaXVzJywgbmFtZTogJ0JvcmRlciBSYWRpdXMnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEwLCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEgfSxcbiAgICB7IGlkOiAnYm9yZGVyLXdpZHRoJywgbmFtZTogJ0JvcmRlciBXaWR0aCcsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMSwgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDEgfSxcbiAgICB7IGlkOiAnYm9yZGVyLWNvbG9yJywgbmFtZTogJ0JvcmRlciBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KScsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgeyBpZDogJ3Nob3ctbGFiZWwnLCBuYW1lOiAnU2hvdyBMYWJlbCcsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICB7IGlkOiAnZm9ybWF0JywgbmFtZTogJ1RleHQgRm9ybWF0JywgdHlwZTogJ3RleHQnLCB2YWx1ZTogJ3tsYWJlbH0ge2Zwc30nLCBkZXNjcmlwdGlvbjogJ1VzZSB7bGFiZWx9IGFuZCB7ZnBzfSBhcyBwbGFjZWhvbGRlcnMuJyB9LFxuICAgIHsgaWQ6ICdoaWRlLWdhbWUtZnBzJywgbmFtZTogJ0hpZGUgR2FtZSBGUFMgQ291bnRlcicsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUsIGRlc2NyaXB0aW9uOiAnSGlkZSB0aGUgYnVpbHQtaW4gZ2FtZSBGUFMgY291bnRlcicgfSxcbiAgXSxcbiAgXG4gIGZyYW1lQ291bnQ6IDAsXG4gIGxhc3RUaW1lOiAwLFxuICBmcHM6IDAsXG4gIGVsZW1lbnQ6IG51bGwsXG4gIGZyYW1lQ2FsbGJhY2s6IG51bGwsXG4gIGdhbWVGcHNFbGVtZW50czogbnVsbCxcbiAgZ2FtZUZwc0Rpc3BsYXlTdHlsZTogbnVsbCxcbiAgXG4gIG9uRW5hYmxlKCkge1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgdGhpcy5sYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMuZnBzID0gMDtcbiAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgXG4gICAgdGhpcy5mcmFtZUNhbGxiYWNrID0gdGhpcy5jb3VudEZyYW1lLmJpbmQodGhpcyk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVDYWxsYmFjayk7XG4gICAgXG4gICAgdGhpcy51cGRhdGVHYW1lRnBzVmlzaWJpbGl0eSgpO1xuICB9LFxuXG4gIG9uRGlzYWJsZSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lEaXNwbGF5KCk7XG4gICAgXG4gICAgdGhpcy5mcmFtZUNhbGxiYWNrID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLnJlc3RvcmVHYW1lRnBzQ291bnRlcigpO1xuICB9LFxuICBcbiAgY291bnRGcmFtZSh0aW1lc3RhbXApIHtcbiAgICB0aGlzLmZyYW1lQ291bnQrKztcbiAgICBcbiAgICBjb25zdCBlbGFwc2VkID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZTtcbiAgICBpZiAoZWxhcHNlZCA+PSAxMDAwKSB7XG4gICAgICB0aGlzLmZwcyA9IE1hdGgucm91bmQoKHRoaXMuZnJhbWVDb3VudCAqIDEwMDApIC8gZWxhcHNlZCk7XG4gICAgICB0aGlzLmZyYW1lQ291bnQgPSAwO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuZnJhbWVDYWxsYmFjaykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVDYWxsYmFjayk7XG4gICAgfVxuICB9LFxuXG4gIG9uVGljaygpIHtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfSxcbiAgXG4gIG9uU2V0dGluZ1VwZGF0ZShzZXR0aW5nSWQpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gICAgXG4gICAgaWYgKHNldHRpbmdJZCA9PT0gJ2hpZGUtZ2FtZS1mcHMnKSB7XG4gICAgICB0aGlzLnVwZGF0ZUdhbWVGcHNWaXNpYmlsaXR5KCk7XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdmcHMtY291bnRlci1kaXNwbGF5JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH0sXG5cbiAgZGVzdHJveURpc3BsYXkoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIFxuICB1cGRhdGVHYW1lRnBzVmlzaWJpbGl0eSgpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgXG4gICAgaWYgKHNldHRpbmdzWydoaWRlLWdhbWUtZnBzJ10pIHtcbiAgICAgIHRoaXMuaGlkZUdhbWVGcHNDb3VudGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzdG9yZUdhbWVGcHNDb3VudGVyKCk7XG4gICAgfVxuICB9LFxuICBcbiAgaGlkZUdhbWVGcHNDb3VudGVyKCkge1xuICAgIGNvbnN0IGZwc1dyYXBwZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRnBzV3JhcHBlckRpdicpO1xuICAgIGlmIChmcHNXcmFwcGVyRGl2KSB7XG4gICAgICB0aGlzLmdhbWVGcHNFbGVtZW50cyA9IGZwc1dyYXBwZXJEaXY7XG4gICAgICB0aGlzLmdhbWVGcHNEaXNwbGF5U3R5bGUgPSBmcHNXcmFwcGVyRGl2LnN0eWxlLmRpc3BsYXk7XG4gICAgICBcbiAgICAgIGZwc1dyYXBwZXJEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0sXG4gIFxuICByZXN0b3JlR2FtZUZwc0NvdW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuZ2FtZUZwc0VsZW1lbnRzKSB7XG4gICAgICB0aGlzLmdhbWVGcHNFbGVtZW50cy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5nYW1lRnBzRGlzcGxheVN0eWxlIHx8ICcnO1xuICAgICAgdGhpcy5nYW1lRnBzRWxlbWVudHMgPSBudWxsO1xuICAgICAgdGhpcy5nYW1lRnBzRGlzcGxheVN0eWxlID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlRGlzcGxheSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgICBjb25zdCBtb2QgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke21vZC54fXB4YDtcbiAgICAgICAgICBpZiAobW9kLnkgIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHttb2QueX1weGA7XG4gICAgICB9XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgICBsZXQgdGV4dCA9IHNldHRpbmdzLmZvcm1hdDtcblxuICAgICAgaWYgKHNldHRpbmdzWydzaG93LWxhYmVsJ10pIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tsYWJlbH0nLCAnRlBTOicpOyBlbHNlIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tsYWJlbH0nLCAnJyk7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKCd7ZnBzfScsIHRoaXMuZnBzKTtcbiAgICAgIFxuICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gdGV4dC50cmltKCk7XG4gICAgfVxuICB9LFxuXG4gIGFwcGx5U3R5bGVzKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgIFxuICAgIGlmIChzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnVGhlbWUnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcGFuZWwpJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQpJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCB2YXIoLS1ib3JkZXIpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3NbJ2JnLWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9IHNldHRpbmdzWyd0ZXh0LWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgJHtzZXR0aW5nc1snYm9yZGVyLWNvbG9yJ119YDtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmZvbnRTaXplID0gYCR7c2V0dGluZ3NbJ2ZvbnQtc2l6ZSddfXB4YDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9IGAke3NldHRpbmdzWydwYWRkaW5nJ119cHhgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk3O1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGUFNDb3VudGVyO1xuIiwgImxldCBjYWNoZWRQbGF5ZXJOYW1lID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXllck5hbWUoKSB7XG4gICAgaWYgKGNhY2hlZFBsYXllck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFBsYXllck5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhdE1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkNoYXRNZXNzYWdlcyAuSW5kaXZpZHVhbFRleHQnKTtcbiAgICBcbiAgICBjb25zdCBqb2luTWVzc2FnZXMgPSBBcnJheS5mcm9tKGNoYXRNZXNzYWdlcykuZmlsdGVyKG0gPT4gbS50ZXh0Q29udGVudD8uaW5jbHVkZXMoJyBqb2luZWQnKSk7XG5cbiAgICBpZiAoam9pbk1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbXlKb2luTWVzc2FnZSA9IGpvaW5NZXNzYWdlc1tqb2luTWVzc2FnZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IHRleHQgPSBteUpvaW5NZXNzYWdlLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBuYW1lID0gdGV4dC5zcGxpdCgnIGpvaW5lZCcpWzBdLnRyaW0oKTtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGNhY2hlZFBsYXllck5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgY29sb3IgaW4gYSByYWluYm93IHNlcXVlbmNlIGZvciB0aGUgVUkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgaW4gYSBsaXN0LCB1c2VkIHRvIG9mZnNldCB0aGUgaHVlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkIC0gVGhlIHNwZWVkIG9mIHRoZSBjb2xvciBjeWNsZS4gTG93ZXIgaXMgZmFzdGVyLiBEZWZhdWx0cyB0byAyMC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEFuIEhTTCBjb2xvciBzdHJpbmcgKGUuZy4sIFwiaHNsKDE4MCwgOTAlLCA2NSUpXCIpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFpbmJvd0NvbG9yKGluZGV4LCBzcGVlZCA9IDIwKSB7XG4gIGNvbnN0IGh1ZU9mZnNldCA9IERhdGUubm93KCkgLyBzcGVlZDtcbiAgY29uc3QgaHVlID0gKGluZGV4ICogMTUgKyBodWVPZmZzZXQpICUgMzYwO1xuICByZXR1cm4gYGhzbCgke2h1ZX0sIDkwJSwgNjUlKWA7XG59ICIsICJpbXBvcnQgeyBnZXRQbGF5ZXJOYW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBJbnRlcmZhY2UgPSB7XG4gICAgbmFtZTogJ0ludGVyZmFjZScsXG4gICAgY2F0ZWdvcnk6ICdWaXN1YWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVwbGFjZXMgdGhlIGRlZmF1bHQgaW4tZ2FtZSBoZWFkZXIgd2l0aCBhIGN1c3RvbWl6YWJsZSBvbmUuJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGRlZmF1bHRYOiAyLFxuICAgIGRlZmF1bHRZOiA3LFxuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgZ2FtZUhlYWRlcjogbnVsbCxcbiAgICBnYW1lSGVhZGVyUGFyZW50OiBudWxsLFxuICAgIGdhbWVIZWFkZXJOZXh0U2libGluZzogbnVsbCxcbiAgICBsYXN0UGxheWVyTmFtZTogbnVsbCxcbiAgICBvYnNlcnZlcjogbnVsbCxcblxuICAgIHNldHRpbmdzOiBbXG4gICAgICAgIHsgaWQ6ICdyZW1vdmUtaGVhZGVyJywgbmFtZTogJ1JlbW92ZSBHYW1lIEhlYWRlcicsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUsIGRlc2NyaXB0aW9uOiAnRm9yIHBlcmZvcm1hbmNlLCBtb3ZlIHRoZSBoZWFkZXIgb2ZmLXNjcmVlbiBpbnN0ZWFkIG9mIGp1c3QgaGlkaW5nIGl0LicgfSxcbiAgICAgICAgeyBpZDogJ2NvbG9yLW1vZGUnLCBuYW1lOiAnQ29sb3IgTW9kZScsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zOiBbJ1RoZW1lJywgJ0N1c3RvbSddLCB2YWx1ZTogJ1RoZW1lJyB9LFxuICAgICAgICB7IGlkOiAnYmctY29sb3InLCBuYW1lOiAnQmFja2dyb3VuZCBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgzMCwgMzMsIDQxLCAwLjg1KScsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgICAgIHsgaWQ6ICd0ZXh0LWNvbG9yJywgbmFtZTogJ1RleHQgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJyNFQUVBRUEnLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgICAgICB7IGlkOiAnYWNjZW50LWNvbG9yJywgbmFtZTogJ0FjY2VudCBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAnIzVFNzJFQicsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgICAgIHsgaWQ6ICdmb250LXNpemUnLCBuYW1lOiAnRm9udCBTaXplJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxNiwgbWluOiAxMCwgbWF4OiAyOCwgc3RlcDogMSB9LFxuICAgICAgICB7IGlkOiAncGFkZGluZy15JywgbmFtZTogJ1BhZGRpbmcgKFkpJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiA0LCBtaW46IDAsIG1heDogMzAsIHN0ZXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ3BhZGRpbmcteCcsIG5hbWU6ICdQYWRkaW5nIChYKScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogNiwgbWluOiAwLCBtYXg6IDMwLCBzdGVwOiAxIH0sXG4gICAgICAgIHsgaWQ6ICdib3JkZXItcmFkaXVzJywgbmFtZTogJ0JvcmRlciBSYWRpdXMnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEwLCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ2JvcmRlci13aWR0aCcsIG5hbWU6ICdCb3JkZXIgV2lkdGgnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEsIG1pbjogMCwgbWF4OiA1LCBzdGVwOiAxIH0sXG4gICAgICAgIHsgaWQ6ICdib3JkZXItY29sb3InLCBuYW1lOiAnQm9yZGVyIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgICAgeyBpZDogJ3Nob3ctbG9nbycsIG5hbWU6ICdTaG93IExvZ28nLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6ICdsb2dvLXRleHQnLCBuYW1lOiAnTG9nbyBUZXh0JywgdHlwZTogJ3RleHQnLCB2YWx1ZTogJ1MnLCBjb25kaXRpb246IChzZXR0aW5ncykgPT4gc2V0dGluZ3NbJ3Nob3ctbG9nbyddIH0sXG4gICAgICAgIHsgaWQ6ICdzaG93LW5hbWUnLCBuYW1lOiAnU2hvdyBOYW1lJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiAnc2hvdy1nYW1lbW9kZScsIG5hbWU6ICdTaG93IEdhbWVtb2RlJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiAnc2hvdy1sb2JieScsIG5hbWU6ICdTaG93IExvYmJ5JywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICAgIF0sXG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVIZWFkZXIoKTtcblxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4gdGhpcy5oYW5kbGVIZWFkZXIoKSk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcblxuICAgICAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdG9yZUhlYWRlcigpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIG9uVGljaygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIG9uU2V0dGluZ1VwZGF0ZShzZXR0aW5nSWQpIHtcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3JlbW92ZS1oZWFkZXInKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUhlYWRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5KHRydWUpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5JbkdhbWVIZWFkZXJDb250YWluZXInKTtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5nYW1lSGVhZGVyID0gaGVhZGVyO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkUmVtb3ZlID0gdGhpcy5zZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gJ3JlbW92ZS1oZWFkZXInKS52YWx1ZTtcbiAgICAgICAgICAgIGlmIChzaG91bGRSZW1vdmUpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5sZWZ0ID0gJy05OTk5cHgnO1xuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlc3RvcmVIZWFkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVIZWFkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUhlYWRlci5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgICAgICAgICAgdGhpcy5nYW1lSGVhZGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZ2FtZUhlYWRlci5zdHlsZS50b3AgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZ2FtZUhlYWRlci5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgICAgICAgICB0aGlzLmdhbWVIZWFkZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWludGVyZmFjZS1kaXNwbGF5JztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9ICcyMHB4JztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSAnMjBweCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9LFxuXG4gICAgZGVzdHJveURpc3BsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlRGlzcGxheShmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQodGhpcy5uYW1lKTtcbiAgICAgICAgICAgIGlmIChtb2QueCAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHttb2QueH1weGA7XG4gICAgICAgICAgICBpZiAobW9kLnkgIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHttb2QueX1weGA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnYW1lbW9kZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkluR2FtZUhlYWRlckdhbWVOYW1lJyk7XG4gICAgICAgIGNvbnN0IGxvYmJ5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSW5HYW1lSGVhZGVyTG9iYnlOYW1lJyk7XG5cbiAgICAgICAgY29uc3QgZ2FtZW1vZGUgPSBnYW1lbW9kZUVsID8gZ2FtZW1vZGVFbC50ZXh0Q29udGVudCA6ICdVbmtub3duJztcbiAgICAgICAgY29uc3QgbG9iYnkgPSBsb2JieUVsID8gYCgjJHtsb2JieUVsLnRleHRDb250ZW50fSlgIDogJyc7XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBnZXRQbGF5ZXJOYW1lKCk7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcblxuICAgICAgICBpZiAocGxheWVyTmFtZSAmJiB0aGlzLmxhc3RQbGF5ZXJOYW1lICE9PSBwbGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RQbGF5ZXJOYW1lID0gcGxheWVyTmFtZTtcbiAgICAgICAgICAgIGZvcmNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY29udGVudCA9IGBcbiAgICAgICAgICAgICR7c2V0dGluZ3NbJ3Nob3ctbG9nbyddID8gYDxkaXYgY2xhc3M9XCJzZXJlbml0eS1pbnRlcmZhY2UtbG9nb1wiPiR7c2V0dGluZ3NbJ2xvZ28tdGV4dCddfTwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJlbml0eS1pbnRlcmZhY2UtaW5mb1wiPlxuICAgICAgICAgICAgICAgICR7c2V0dGluZ3NbJ3Nob3ctbmFtZSddICYmIHBsYXllck5hbWUgPyBgPGRpdiBjbGFzcz1cInNlcmVuaXR5LWludGVyZmFjZS1uYW1lXCI+JHtwbGF5ZXJOYW1lfTwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICAke3NldHRpbmdzWydzaG93LWdhbWVtb2RlJ10gPyBgPGRpdiBjbGFzcz1cInNlcmVuaXR5LWludGVyZmFjZS1nYW1lbW9kZVwiPiR7Z2FtZW1vZGV9PC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgICR7c2V0dGluZ3NbJ3Nob3ctbG9iYnknXSA/IGA8ZGl2IGNsYXNzPVwic2VyZW5pdHktaW50ZXJmYWNlLWxvYmJ5XCI+JHtsb2JieX08L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICBjb25zdCBuZXdIYXNoID0gSlNPTi5zdHJpbmdpZnkoY29udGVudCk7XG4gICAgICAgIGlmICh0aGlzLmxhc3RIYXNoICE9PSBuZXdIYXNoIHx8IGZvcmNlKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICAgICAgICAgIHRoaXMubGFzdEhhc2ggPSBuZXdIYXNoO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFwcGx5U3R5bGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzWydjb2xvci1tb2RlJ10gPT09ICdUaGVtZScpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1hY2NlbnQtY29sb3InLCAndmFyKC0tcHJpbWFyeSknKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcGFuZWwpJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0KSc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYCR7c2V0dGluZ3NbJ2JvcmRlci13aWR0aCddfXB4IHNvbGlkIHZhcigtLWJvcmRlcilgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWFjY2VudC1jb2xvcicsIHNldHRpbmdzWydhY2NlbnQtY29sb3InXSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3NbJ2JnLWNvbG9yJ107XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSBzZXR0aW5nc1sndGV4dC1jb2xvciddO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCAke3NldHRpbmdzWydib3JkZXItY29sb3InXX1gO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBgJHtzZXR0aW5nc1snZm9udC1zaXplJ119cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9IGAke3NldHRpbmdzWydwYWRkaW5nLXknXX1weCAke3NldHRpbmdzWydwYWRkaW5nLXgnXX1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk3O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJmYWNlOyAiLCAiaW1wb3J0IHsgZ2V0UGxheWVyTmFtZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuY29uc3QgQ2hhdCA9IHtcbiAgICBuYW1lOiAnQ2hhdCcsXG4gICAgY2F0ZWdvcnk6ICdWaXN1YWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVwbGFjZXMgdGhlIGRlZmF1bHQgaW4tZ2FtZSBjaGF0IHdpdGggYSBjdXN0b21pemFibGUgb25lLicsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBkZWZhdWx0WDogNCxcbiAgICBkZWZhdWx0WTogNTksXG4gICAgZWxlbWVudDogbnVsbCxcbiAgICBnYW1lQ2hhdDogbnVsbCxcbiAgICBjaGF0T2JzZXJ2ZXI6IG51bGwsXG4gICAgbWFpbk9ic2VydmVyOiBudWxsLFxuICAgIGN1c3RvbUlucHV0OiBudWxsLFxuXG4gICAgc2V0dGluZ3M6IFtcbiAgICAgICAgeyBpZDogJ2hpZGUtZ2FtZS1jaGF0JywgbmFtZTogJ0hpZGUgR2FtZSBDaGF0JywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSwgZGVzY3JpcHRpb246ICdIaWRlcyB0aGUgb3JpZ2luYWwgaW4tZ2FtZSBjaGF0IFVJLicgfSxcbiAgICAgICAgeyBpZDogJ2ZvbnQtc2l6ZScsIG5hbWU6ICdGb250IFNpemUnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDE0LCBtaW46IDEwLCBtYXg6IDI0LCBzdGVwOiAxIH0sXG4gICAgICAgIHsgaWQ6ICdtYXgtbWVzc2FnZXMnLCBuYW1lOiAnTWF4IE1lc3NhZ2VzJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiA3LCBtaW46IDUsIG1heDogMjUsIHN0ZXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ3Nob3ctdGltZXN0YW1wcycsIG5hbWU6ICdTaG93IFRpbWVzdGFtcHMnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiBmYWxzZSB9LFxuICAgIF0sXG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVEaXNwbGF5KCk7XG4gICAgICAgIHRoaXMuaGFuZGxlR2FtZUNoYXQoKTtcblxuICAgICAgICB0aGlzLm1haW5PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHRoaXMuaGFuZGxlR2FtZUNoYXQoKSk7XG4gICAgICAgIHRoaXMubWFpbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbk9ic2VydmVyKSB0aGlzLm1haW5PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIGlmICh0aGlzLmNoYXRPYnNlcnZlcikgdGhpcy5jaGF0T2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLnJlc3RvcmVHYW1lQ2hhdCgpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIG9uVGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgICAgICAgaWYgKCFjbGlja0d1aSB8fCAhY2xpY2tHdWkuaXNFZGl0aW5nSFVEKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChtb2QueCAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHttb2QueH1weGA7XG4gICAgICAgICAgICAgICAgaWYgKG1vZC55ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7bW9kLnl9cHhgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uU2V0dGluZ1VwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgICAgICB0aGlzLmhhbmRsZUdhbWVDaGF0KCk7XG4gICAgfSxcblxuICAgIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNoYXQtY29udGFpbmVyJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jaGF0LW1lc3NhZ2VzJztcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VzQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3JlYXRlQ3VzdG9tSW5wdXQoKTtcbiAgICB9LFxuICAgIFxuICAgIGNyZWF0ZUN1c3RvbUlucHV0KCkge1xuICAgICAgICBjb25zdCBpbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5wdXRXcmFwcGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jaGF0LWlucHV0LXdyYXBwZXInO1xuXG4gICAgICAgIHRoaXMuY3VzdG9tSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLmN1c3RvbUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRoaXMuY3VzdG9tSW5wdXQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNoYXQtaW5wdXQnO1xuICAgICAgICB0aGlzLmN1c3RvbUlucHV0LnBsYWNlaG9sZGVyID0gJ1NlbmQgYSBtZXNzYWdlLi4uJztcblxuICAgICAgICB0aGlzLmN1c3RvbUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkNoYXRJbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlmIChnYW1lSW5wdXQgJiYgdGhpcy5jdXN0b21JbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW5wdXQudmFsdWUgPSB0aGlzLmN1c3RvbUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRlckV2ZW50ID0gbmV3IEtleWJvYXJkRXZlbnQoJ2tleWRvd24nLCB7IGtleTogJ0VudGVyJywgY29kZTogJ0VudGVyJywgd2hpY2g6IDEzLCBrZXlDb2RlOiAxMywgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUlucHV0LmRpc3BhdGNoRXZlbnQoZW50ZXJFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgaW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tSW5wdXQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRXcmFwcGVyKTtcbiAgICB9LFxuXG4gICAgc3luY0lucHV0VmlzaWJpbGl0eShnYW1lSW5wdXRXcmFwcGVyKSB7XG4gICAgICAgIGNvbnN0IGlucHV0V3JhcHBlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktY2hhdC1pbnB1dC13cmFwcGVyJyk7XG4gICAgICAgIGlmIChnYW1lSW5wdXRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgaW5wdXRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jdXN0b21JbnB1dC5mb2N1cygpLCAwKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkZXN0cm95RGlzcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVHYW1lQ2hhdCgpIHtcbiAgICAgICAgY29uc3QgY2hhdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5DaGF0Jyk7XG4gICAgICAgIGlmICghY2hhdENvbnRhaW5lcikgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVDaGF0KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVDaGF0ID0gY2hhdENvbnRhaW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3VsZEhpZGUgPSB0aGlzLnNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSAnaGlkZS1nYW1lLWNoYXQnKS52YWx1ZTtcbiAgICAgICAgdGhpcy5nYW1lQ2hhdC5zdHlsZS52aXNpYmlsaXR5ID0gc2hvdWxkSGlkZSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnO1xuICAgICAgICB0aGlzLmdhbWVDaGF0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBzaG91bGRIaWRlID8gJ25vbmUnIDogJ2F1dG8nO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzQ29udGFpbmVyID0gY2hhdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuQ2hhdE1lc3NhZ2VzJyk7XG4gICAgICAgIGlmIChtZXNzYWdlc0NvbnRhaW5lciAmJiAhdGhpcy5jaGF0T2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktY2hhdC1tZXNzYWdlcycpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgbWVzc2FnZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLk1lc3NhZ2VXcmFwcGVyJykuZm9yRWFjaChub2RlID0+IHRoaXMuYWRkTWVzc2FnZShub2RlKSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hhdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxICYmIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdNZXNzYWdlV3JhcHBlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNoYXRPYnNlcnZlci5vYnNlcnZlKG1lc3NhZ2VzQ29udGFpbmVyLCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdhbWVJbnB1dFdyYXBwZXIgPSBjaGF0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5DaGF0SW5wdXRXcmFwcGVyJyk7XG4gICAgICAgIGlmIChnYW1lSW5wdXRXcmFwcGVyKSB7XG4gICAgICAgICAgICB0aGlzLnN5bmNJbnB1dFZpc2liaWxpdHkoZ2FtZUlucHV0V3JhcHBlcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVzdG9yZUdhbWVDaGF0KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lQ2hhdCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lQ2hhdC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgdGhpcy5nYW1lQ2hhdC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFkZE1lc3NhZ2Uob3JpZ2luYWxOb2RlKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1jaGF0LW1lc3NhZ2VzJyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVzc2FnZURpdi5jbGFzc05hbWUgPSAnc2VyZW5pdHktY2hhdC1tZXNzYWdlJztcbiAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50RGl2LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1tZXNzYWdlLWNvbnRlbnQnO1xuICAgICAgICBjb25zdCBteU5hbWUgPSBnZXRQbGF5ZXJOYW1lKCk7XG5cbiAgICAgICAgb3JpZ2luYWxOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5JbmRpdmlkdWFsVGV4dCcpLmZvckVhY2goc3BhbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWRTcGFuID0gc3Bhbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBpZiAobXlOYW1lICYmIGNsb25lZFNwYW4udGV4dENvbnRlbnQgPT09IG15TmFtZSkge1xuICAgICAgICAgICAgICAgIGNsb25lZFNwYW4uY2xhc3NMaXN0LmFkZCgnc2VyZW5pdHktbWVzc2FnZS1vd24tbmFtZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC9eXFxbLipcXF0kLy50ZXN0KGNsb25lZFNwYW4udGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgY2xvbmVkU3Bhbi5jbGFzc0xpc3QuYWRkKCdzZXJlbml0eS1tZXNzYWdlLXRhZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjbG9uZWRTcGFuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVzc2FnZURpdi5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gJ3Nob3ctdGltZXN0YW1wcycpLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0aW1lc3RhbXAuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1lc3NhZ2UtdGltZXN0YW1wJztcbiAgICAgICAgICAgIHRpbWVzdGFtcC50ZXh0Q29udGVudCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7XG4gICAgICAgICAgICBtZXNzYWdlRGl2Lmluc2VydEJlZm9yZSh0aW1lc3RhbXAsIGNvbnRlbnREaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZURpdik7XG5cbiAgICAgICAgY29uc3QgbWF4TWVzc2FnZXMgPSB0aGlzLnNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSAnbWF4LW1lc3NhZ2VzJykudmFsdWU7XG4gICAgICAgIHdoaWxlIChtZXNzYWdlc0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiBtYXhNZXNzYWdlcykge1xuICAgICAgICAgICAgbWVzc2FnZXNDb250YWluZXIucmVtb3ZlQ2hpbGQobWVzc2FnZXNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIGFwcGx5U3R5bGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jaGF0LWZvbnQtc2l6ZScsIGAke3NldHRpbmdzWydmb250LXNpemUnXX1weGApO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7ICIsICJjb25zdCBLZXlzdHJva2VzID0ge1xuICBuYW1lOiAnS2V5c3Ryb2tlcycsXG4gIGNhdGVnb3J5OiAnQ29tYmF0JyxcbiAgZGVzY3JpcHRpb246ICdEaXNwbGF5cyB5b3VyIGtleXN0cm9rZXMgd2l0aCBhIHNleHksIG1vZGVybiBsb29rLicsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIGRlZmF1bHRYOiA4LFxuICBkZWZhdWx0WTogNTYyLFxuICBlbGVtZW50OiBudWxsLFxuICBrZXlzOiB7XG4gICAgdzogZmFsc2UsIGE6IGZhbHNlLCBzOiBmYWxzZSwgZDogZmFsc2UsXG4gICAgJyAnOiBmYWxzZSwgbG1iOiBmYWxzZSwgcm1iOiBmYWxzZVxuICB9LFxuICBib3VuZEtleURvd246IG51bGwsXG4gIGJvdW5kS2V5VXA6IG51bGwsXG4gIGJvdW5kTW91c2VEb3duOiBudWxsLFxuICBib3VuZE1vdXNlVXA6IG51bGwsXG5cbiAgc2V0dGluZ3M6IFtcbiAgICB7IGlkOiAnc2hvdy1tb3VzZScsIG5hbWU6ICdTaG93IE1vdXNlIEJ1dHRvbnMnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgeyBpZDogJ3NjYWxlJywgbmFtZTogJ1NjYWxlJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxLCBtaW46IDAuNSwgbWF4OiAyLCBzdGVwOiAwLjEgfSxcbiAgICB7IGlkOiAnb3BhY2l0eScsIG5hbWU6ICdPcGFjaXR5JywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAwLjg1LCBtaW46IDAsIG1heDogMSwgc3RlcDogMC4wNSB9LFxuICAgIHsgaWQ6ICdlbmFibGUtYW5pbWF0aW9ucycsIG5hbWU6ICdFbmFibGUgQW5pbWF0aW9ucycsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgXSxcblxuICBvbkVuYWJsZSgpIHtcbiAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgdGhpcy5ib3VuZEtleURvd24gPSBlID0+IHRoaXMudXBkYXRlS2V5U3RhdGUoZS5rZXkudG9Mb3dlckNhc2UoKSwgdHJ1ZSk7XG4gICAgdGhpcy5ib3VuZEtleVVwID0gZSA9PiB0aGlzLnVwZGF0ZUtleVN0YXRlKGUua2V5LnRvTG93ZXJDYXNlKCksIGZhbHNlKTtcbiAgICB0aGlzLmJvdW5kTW91c2VEb3duID0gZSA9PiB7XG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMCkgdGhpcy51cGRhdGVLZXlTdGF0ZSgnbG1iJywgdHJ1ZSk7XG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikgdGhpcy51cGRhdGVLZXlTdGF0ZSgncm1iJywgdHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmJvdW5kTW91c2VVcCA9IGUgPT4ge1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDApIHRoaXMudXBkYXRlS2V5U3RhdGUoJ2xtYicsIGZhbHNlKTtcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAyKSB0aGlzLnVwZGF0ZUtleVN0YXRlKCdybWInLCBmYWxzZSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ib3VuZEtleURvd24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuYm91bmRLZXlVcCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuYm91bmRNb3VzZURvd24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXApO1xuICB9LFxuXG4gIG9uRGlzYWJsZSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lEaXNwbGF5KCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kS2V5RG93bik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5ib3VuZEtleVVwKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5ib3VuZE1vdXNlRG93bik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kTW91c2VVcCk7XG4gIH0sXG5cbiAgb25UaWNrKCkge1xuICAgIHRoaXMudXBkYXRlRGlzcGxheUxvY2F0aW9uKCk7XG4gIH0sXG4gIFxuICBvblNldHRpbmdVcGRhdGUoKSB7XG4gICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICB9LFxuXG4gIHVwZGF0ZUtleVN0YXRlKGtleSwgaXNQcmVzc2VkKSB7XG4gICAgaWYgKHRoaXMua2V5cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB0aGlzLmtleXNba2V5XSA9IGlzUHJlc3NlZDtcbiAgICAgIHRoaXMudXBkYXRlS2V5VmlzdWFscygpO1xuICAgIH1cbiAgfSxcbiAgXG4gIGNyZWF0ZUtleSh0ZXh0LCBrZXksIC4uLmV4dHJhQ2xhc3Nlcykge1xuICAgIGNvbnN0IGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXlFbGVtZW50LmNsYXNzTmFtZSA9IGBrZXlzdHJva2VzLWtleSBrZXktJHtrZXl9ICR7ZXh0cmFDbGFzc2VzLmpvaW4oJyAnKX1gO1xuICAgIGtleUVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBrZXlFbGVtZW50O1xuICB9LFxuICBcbiAgY3JlYXRlRGlzcGxheSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ2tleXN0cm9rZXMtZGlzcGxheSc7XG5cbiAgICBjb25zdCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93MS5jbGFzc05hbWUgPSAna2V5c3Ryb2tlcy1yb3cnO1xuICAgIHJvdzEuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVLZXkoJ1cnLCAndycpKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocm93MSk7XG5cbiAgICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93Mi5jbGFzc05hbWUgPSAna2V5c3Ryb2tlcy1yb3cnO1xuICAgIHJvdzIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVLZXkoJ0EnLCAnYScpKTtcbiAgICByb3cyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlS2V5KCdTJywgJ3MnKSk7XG4gICAgcm93Mi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUtleSgnRCcsICdkJykpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChyb3cyKTtcbiAgICBcbiAgICBjb25zdCByb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93My5jbGFzc05hbWUgPSAna2V5c3Ryb2tlcy1yb3cgbW91c2Utcm93JztcbiAgICByb3czLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlS2V5KCdMTUInLCAnbG1iJywgJ21vdXNlLWJ1dHRvbicpKTtcbiAgICByb3czLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlS2V5KCdSTUInLCAncm1iJywgJ21vdXNlLWJ1dHRvbicpKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocm93Myk7XG4gICAgXG4gICAgY29uc3Qgcm93NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdzQuY2xhc3NOYW1lID0gJ2tleXN0cm9rZXMtcm93JztcbiAgICByb3c0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlS2V5KCdTcGFjZScsICcgJywgJ3NwYWNlLWtleScpKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocm93NCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH0sXG5cbiAgZGVzdHJveURpc3BsYXkoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlRGlzcGxheUxvY2F0aW9uKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgIGlmICghY2xpY2tHdWkgfHwgIWNsaWNrR3VpLmlzRWRpdGluZ0hVRCkge1xuICAgICAgICBjb25zdCBtb2QgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgIGlmIChtb2QueCAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHttb2QueH1weGA7XG4gICAgICAgIGlmIChtb2QueSAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke21vZC55fXB4YDtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlS2V5VmlzdWFscygpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMua2V5cykge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmtleS0ke2tleX1gKTtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCB0aGlzLmtleXNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGFwcGx5U3R5bGVzKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgIFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzZXR0aW5ncy5zY2FsZX0pYDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IHNldHRpbmdzLm9wYWNpdHk7XG4gICAgXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW91c2UnLCBzZXR0aW5nc1snc2hvdy1tb3VzZSddKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tYW5pbWF0aW9ucycsICFzZXR0aW5nc1snZW5hYmxlLWFuaW1hdGlvbnMnXSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleXN0cm9rZXM7ICIsICJjb25zdCBUb2dnbGVTcHJpbnQgPSB7XG4gICAgbmFtZTogXCJUb2dnbGVTcHJpbnRcIixcbiAgICBjYXRlZ29yeTogXCJNb3ZlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkF1dG9tYXRpY2FsbHkgc3ByaW50cyBmb3IgeW91IGJ5IHNpbXVsYXRpbmcgYSBTaGlmdCBrZXkgcHJlc3MuXCIsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBzcHJpbnRpbmc6IGZhbHNlLFxuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgZGVmYXVsdFg6IDEzMDAsXG4gICAgZGVmYXVsdFk6IDgwMCxcblxuICAgIHNldHRpbmdzOiBbXG4gICAgICAgIHsgaWQ6IFwic2hvdy10ZXh0XCIsIG5hbWU6IFwiU2hvdyBUZXh0XCIsIHR5cGU6IFwiYm9vbGVhblwiLCB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiBcImNvbG9yLW1vZGVcIiwgbmFtZTogXCJDb2xvciBNb2RlXCIsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zOiBbJ1RoZW1lJywgJ0N1c3RvbSddLCB2YWx1ZTogJ1RoZW1lJywgY29uZGl0aW9uOiBzID0+IHNbJ3Nob3ctdGV4dCddIH0sXG4gICAgICAgIHsgaWQ6IFwiaHVkLXRleHRcIiwgbmFtZTogXCJIVUQgVGV4dFwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IFwiW1NwcmludGluZyAoVG9nZ2xlZCldXCIsIGNvbmRpdGlvbjogcyA9PiBzWydzaG93LXRleHQnXSB9LFxuICAgICAgICB7IGlkOiAnYmctY29sb3InLCBuYW1lOiAnQmFja2dyb3VuZCBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgzMCwgMzMsIDQxLCAwLjg1KScsIGNvbmRpdGlvbjogcyA9PiBzWydzaG93LXRleHQnXSAmJiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgICAgIHsgaWQ6ICd0ZXh0LWNvbG9yJywgbmFtZTogJ1RleHQgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMjM0LCAyMzQsIDIzNCwgMC44KScsIGNvbmRpdGlvbjogcyA9PiBzWydzaG93LXRleHQnXSAmJiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgICAgIHsgaWQ6ICdmb250LXNpemUnLCBuYW1lOiAnRm9udCBTaXplJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxNiwgbWluOiA4LCBtYXg6IDI0LCBzdGVwOiAxLCBjb25kaXRpb246IHMgPT4gc1snc2hvdy10ZXh0J10gfSxcbiAgICAgICAgeyBpZDogJ3BhZGRpbmcnLCBuYW1lOiAnUGFkZGluZycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogOCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxLCBjb25kaXRpb246IHMgPT4gc1snc2hvdy10ZXh0J10gfSxcbiAgICAgICAgeyBpZDogJ2JvcmRlci1yYWRpdXMnLCBuYW1lOiAnQm9yZGVyIFJhZGl1cycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTAsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSwgY29uZGl0aW9uOiBzID0+IHNbJ3Nob3ctdGV4dCddIH0sXG4gICAgICAgIHsgaWQ6ICdib3JkZXItd2lkdGgnLCBuYW1lOiAnQm9yZGVyIFdpZHRoJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxLCBtaW46IDAsIG1heDogNSwgc3RlcDogMSwgY29uZGl0aW9uOiBzID0+IHNbJ3Nob3ctdGV4dCddIH0sXG4gICAgICAgIHsgaWQ6ICdib3JkZXItY29sb3InLCBuYW1lOiAnQm9yZGVyIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpJywgY29uZGl0aW9uOiBzID0+IHNbJ3Nob3ctdGV4dCddICYmIHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICBdLFxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRGlzcGxheSgpO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNwcmludGluZykge1xuICAgICAgICAgICAgdGhpcy5zdG9wU3ByaW50aW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0cm95RGlzcGxheSgpO1xuICAgIH0sXG5cbiAgICBvblRpY2soKSB7XG4gICAgICAgIGNvbnN0IGNsaWNrR3VpID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCgnQ2xpY2tHVUknKTtcbiAgICAgICAgY29uc3QgaXNUeXBpbmcgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pc0NvbnRlbnRFZGl0YWJsZSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaG91bGRCZVNwcmludGluZyA9ICFpc1R5cGluZyAmJiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0d1aU9wZW4pO1xuXG4gICAgICAgIGlmIChzaG91bGRCZVNwcmludGluZyAmJiAhdGhpcy5zcHJpbnRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTcHJpbnRpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICghc2hvdWxkQmVTcHJpbnRpbmcgJiYgdGhpcy5zcHJpbnRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFNwcmludGluZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICAgIH0sXG5cbiAgICBvblNldHRpbmdVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5KHRydWUpO1xuICAgIH0sXG5cbiAgICBzdGFydFNwcmludGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaW50aW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3ByaW50aW5nID0gdHJ1ZTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoJ2tleWRvd24nLCB7IGtleTogJ1NoaWZ0Jywga2V5Q29kZTogMTYsIGNvZGU6ICdTaGlmdExlZnQnLCBidWJibGVzOiB0cnVlIH0pKTtcbiAgICB9LFxuXG4gICAgc3RvcFNwcmludGluZygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNwcmludGluZykgcmV0dXJuO1xuICAgICAgICB0aGlzLnNwcmludGluZyA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudCgna2V5dXAnLCB7IGtleTogJ1NoaWZ0Jywga2V5Q29kZTogMTYsIGNvZGU6ICdTaGlmdExlZnQnLCBidWJibGVzOiB0cnVlIH0pKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAndG9nZ2xlc3ByaW50LWh1ZC1kaXNwbGF5JztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgfSxcblxuICAgIGRlc3Ryb3lEaXNwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICAgICAgXG4gICAgICAgIGlmICghc2V0dGluZ3NbJ3Nob3ctdGV4dCddKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5lbmFibGVkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gc2V0dGluZ3NbJ2h1ZC10ZXh0J107XG5cbiAgICAgICAgICAgIGNvbnN0IGNsaWNrR3VpID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCgnQ2xpY2tHVUknKTtcbiAgICAgICAgICAgIGlmICghY2xpY2tHdWkgfHwgIWNsaWNrR3VpLmlzRWRpdGluZ0hVRCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQodGhpcy5uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kLnggIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bW9kLnh9cHhgO1xuICAgICAgICAgICAgICAgIGlmIChtb2QueSAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke21vZC55fXB4YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhcHBseVN0eWxlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHNldHRpbmdzWydjb2xvci1tb2RlJ10gPT09ICdUaGVtZScpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcGFuZWwpJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0KSc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYCR7c2V0dGluZ3NbJ2JvcmRlci13aWR0aCddfXB4IHNvbGlkIHZhcigtLWJvcmRlcilgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNldHRpbmdzWydiZy1jb2xvciddO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gc2V0dGluZ3NbJ3RleHQtY29sb3InXTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgJHtzZXR0aW5nc1snYm9yZGVyLWNvbG9yJ119YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke3NldHRpbmdzWydmb250LXNpemUnXX1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gYCR7c2V0dGluZ3NbJ3BhZGRpbmcnXX1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gOTk5NztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVTcHJpbnQ7ICIsICJjb25zdCBBcm1vckhVRCA9IHtcbiAgICBuYW1lOiAnQXJtb3JIVUQnLFxuICAgIGNhdGVnb3J5OiAnUGxheWVyJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXlzIHlvdXIgY3VycmVudGx5IGVxdWlwcGVkIGFybW9yIGFuZCBzZWxlY3RlZCBpdGVtLicsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBvYnNlcnZlcjogbnVsbCxcbiAgICBkZWZhdWx0WDogMTQ0MixcbiAgICBkZWZhdWx0WTogNDY4LFxuICAgIHNldHRpbmdzOiBbXG4gICAgICB7IGlkOiAnY29sb3ItbW9kZScsIG5hbWU6ICdDb2xvciBNb2RlJywgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnVGhlbWUnLCAnQ3VzdG9tJ10sIHZhbHVlOiAnVGhlbWUnIH0sXG4gICAgICB7IGlkOiAnc2hvdy1zZWxlY3RlZCcsIG5hbWU6ICdTaG93IFNlbGVjdGVkIEl0ZW0nLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgICB7IGlkOiAnZGlzcGxheS1zdHlsZScsIG5hbWU6ICdEaXNwbGF5IFN0eWxlJywgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnSG9yaXpvbnRhbCcsICdWZXJ0aWNhbCddLCB2YWx1ZTogJ1ZlcnRpY2FsJyB9LFxuICAgICAgeyBpZDogJ2JnLWNvbG9yJywgbmFtZTogJ0JhY2tncm91bmQgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMzAsIDMzLCA0MSwgMC44NSknLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgICAgeyBpZDogJ3BhZGRpbmcnLCBuYW1lOiAnUGFkZGluZycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogNCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxIH0sXG4gICAgICB7IGlkOiAnYm9yZGVyLXJhZGl1cycsIG5hbWU6ICdCb3JkZXIgUmFkaXVzJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAyMCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxIH0sXG4gICAgICB7IGlkOiAnYm9yZGVyLXdpZHRoJywgbmFtZTogJ0JvcmRlciBXaWR0aCcsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMiwgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDEgfSxcbiAgICAgIHsgaWQ6ICdib3JkZXItY29sb3InLCBuYW1lOiAnQm9yZGVyIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgIHsgaWQ6ICdpdGVtLXNpemUnLCBuYW1lOiAnSXRlbSBTaXplJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiA2NCwgbWluOiAxNiwgbWF4OiA2NCwgc3RlcDogMSB9LFxuICAgICAgeyBpZDogJ2l0ZW0tc3BhY2luZycsIG5hbWU6ICdJdGVtIFNwYWNpbmcnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDAsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSB9LFxuICAgIF0sXG4gICAgXG4gICAgZWxlbWVudDogbnVsbCxcbiAgXG4gICAgb25FbmFibGUoKSB7XG4gICAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICAgIHRoaXMuc2V0dXBPYnNlcnZlcigpO1xuICAgIH0sXG4gIFxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVzdHJveURpc3BsYXkoKTtcbiAgICB9LFxuICBcbiAgICBvblRpY2soKSB7XG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9LFxuICAgIFxuICAgIG9uU2V0dGluZ1VwZGF0ZSgpIHtcbiAgICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheSh0cnVlKTsgLy8gRm9yY2UgdXBkYXRlIHRvIHJlZmxlY3Qgc3R5bGUgY2hhbmdlc1xuICAgIH0sXG4gIFxuICAgIHNldHVwT2JzZXJ2ZXIoKSB7XG4gICAgICAgIGNvbnN0IHNldHVwID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaG90YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkhvdEJhckdhbWVJdGVtc0NvbnRhaW5lcicpO1xuICAgICAgICAgICAgaWYgKGhvdGJhciAmJiAhdGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbkNoYW5nZWQgPSBtdXRhdGlvbnMuc29tZShtID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgbS50eXBlID09PSAnYXR0cmlidXRlcycgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICBtLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG0udGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnSW52ZW5JdGVtJylcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb25DaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShob3RiYXIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ2NsYXNzJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkodHJ1ZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWhvdGJhcikge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoc2V0dXAsIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHNldHVwKCk7XG4gICAgfSxcbiAgXG4gICAgY3JlYXRlRGlzcGxheSgpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdhcm1vci1odWQtZGlzcGxheSc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfSxcbiAgXG4gICAgZGVzdHJveURpc3BsYXkoKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICBcbiAgICBleHRyYWN0SW1hZ2UoaXRlbUVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFpdGVtRWxlbWVudCkgcmV0dXJuIG51bGw7XG4gICAgXG4gICAgICAgIGNvbnN0IHR3b0RJbWFnZUljb24gPSBpdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuVHdvREltYWdlSWNvbicpO1xuICAgICAgICBpZiAodHdvREltYWdlSWNvbikge1xuICAgICAgICAgICAgaWYgKHR3b0RJbWFnZUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlICYmIHR3b0RJbWFnZUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnaW1hZ2UnLCBzcmM6IHR3b0RJbWFnZUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlLnNsaWNlKDUsIC0yKSwgZmlsdGVyOiBudWxsIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBpdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuVHdvREl0ZW1HcmF5c2NhbGVWaXNpYmxlUG5nJyk7XG4gICAgICAgICAgICBjb25zdCBjb2xvckhpbnQgPSBpdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuVHdvREl0ZW1HcmF5c2NhbGUnKTtcbiAgICAgICAgICAgIGlmIChpbWcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnaW1hZ2UnLCBzcmM6IGltZy5zcmMsIGZpbHRlcjogY29sb3JIaW50ID8gY29sb3JIaW50LnN0eWxlLmZpbHRlciA6ICcnIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgYmxvY2tJdGVtID0gaXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignLkJsb2NrSXRlbScpO1xuICAgICAgICBpZiAoYmxvY2tJdGVtICYmIGJsb2NrSXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgJiYgYmxvY2tJdGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICByZXR1cm4geyB0eXBlOiAnaW1hZ2UnLCBzcmM6IGJsb2NrSXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2Uuc2xpY2UoNSwgLTIpLCBmaWx0ZXI6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgdW5maWxsZWQgPSBpdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuSW52ZW5JdGVtVW5maWxsZWQnKTtcbiAgICAgICAgaWYgKHVuZmlsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4geyB0eXBlOiAndW5maWxsZWQnLCBzcmM6IHVuZmlsbGVkLnN0eWxlLmJhY2tncm91bmRJbWFnZS5zbGljZSg1LCAtMikgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgXG4gICAgdXBkYXRlRGlzcGxheShmb3JjZVVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICBcbiAgICAgIC8vIFVwZGF0ZSBwb3NpdGlvblxuICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgaWYgKCFjbGlja0d1aSB8fCAhY2xpY2tHdWkuaXNFZGl0aW5nSFVEKSB7XG4gICAgICAgICAgY29uc3QgbW9kID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCh0aGlzLm5hbWUpO1xuICAgICAgICAgIGlmIChtb2QueCAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHttb2QueH1weGA7XG4gICAgICAgICAgaWYgKG1vZC55ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7bW9kLnl9cHhgO1xuICAgICAgfVxuICBcbiAgICAgIGNvbnN0IGFybW9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkFybW91ckl0ZW1TbG90cycpO1xuICAgICAgY29uc3QgYXJtb3JJdGVtcyA9IGFybW9yQ29udGFpbmVyID8gQXJyYXkuZnJvbShhcm1vckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuSW52ZW5JdGVtJykpIDogW107XG4gICAgICBjb25zdCBhcm1vckltYWdlcyA9IGFybW9ySXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5leHRyYWN0SW1hZ2UoaXRlbSkpLmZpbHRlcihCb29sZWFuKTtcbiAgXG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQodGhpcy5uYW1lKS5zZXR0aW5ncztcbiAgICAgIGNvbnN0IHNob3dTZWxlY3RlZCA9IHNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSAnc2hvdy1zZWxlY3RlZCcpLnZhbHVlO1xuXG4gICAgICBjb25zdCBhbGxJbWFnZXMgPSBbLi4uYXJtb3JJbWFnZXNdO1xuICAgICAgaWYgKHNob3dTZWxlY3RlZCkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSG90YmFySXRlbUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkhvdEJhckdhbWVJdGVtc0NvbnRhaW5lciAuSW52ZW5JdGVtLlNlbGVjdGVkJyk7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtSW1hZ2UgPSB0aGlzLmV4dHJhY3RJbWFnZShzZWxlY3RlZEhvdGJhckl0ZW1FbCk7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbUltYWdlKSB7XG4gICAgICAgICAgICAgIGFsbEltYWdlcy5wdXNoKHNlbGVjdGVkSXRlbUltYWdlKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgY29uc3QgbmV3Q29udGVudEhhc2ggPSBKU09OLnN0cmluZ2lmeShhbGxJbWFnZXMpO1xuICAgICAgaWYgKG5ld0NvbnRlbnRIYXNoICE9PSB0aGlzLmxhc3RDb250ZW50SGFzaCB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGFsbEltYWdlcy5mb3JFYWNoKGltZ0RhdGEgPT4ge1xuICAgICAgICAgIGlmICghaW1nRGF0YSkgcmV0dXJuO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBpdGVtQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblxuICAgICAgICAgIGlmIChpbWdEYXRhLnR5cGUgPT09ICdpbWFnZScgJiYgaW1nRGF0YS5maWx0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1TaXplID0gdGhpcy5zZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gJ2l0ZW0tc2l6ZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgY29sb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbG9yQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIGNvbG9yQ29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgY29sb3JDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICAgICAgY29sb3JDb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAgICAgICAgICAgY29uc3QgY29sb3JTb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNvbG9yU291cmNlLnNyYyA9IGltZ0RhdGEuc3JjO1xuICAgICAgICAgICAgY29sb3JTb3VyY2Uuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICBjb2xvclNvdXJjZS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgICAgICBjb2xvclNvdXJjZS5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnO1xuICAgICAgICAgICAgY29sb3JTb3VyY2Uuc3R5bGUuZmlsdGVyID0gaW1nRGF0YS5maWx0ZXIucmVwbGFjZSgnMWVtJywgYCR7aXRlbVNpemV9cHhgKTtcbiAgICAgICAgICAgIGNvbG9yU291cmNlLnN0eWxlLm1hcmdpbkxlZnQgPSBgLSR7aXRlbVNpemV9cHhgO1xuICAgICAgICAgIFxuICAgICAgICAgICAgY29sb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JTb3VyY2UpO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvckNvbnRhaW5lcik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGdyYXlzY2FsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZ3JheXNjYWxlSW1nLnNyYyA9IGltZ0RhdGEuc3JjO1xuICAgICAgICAgICAgZ3JheXNjYWxlSW1nLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIGdyYXlzY2FsZUltZy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgIGdyYXlzY2FsZUltZy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgICAgICBncmF5c2NhbGVJbWcuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcbiAgICAgICAgICAgIGdyYXlzY2FsZUltZy5zdHlsZS5taXhCbGVuZE1vZGUgPSAnbXVsdGlwbHknO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChncmF5c2NhbGVJbWcpO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZ0VsZW1lbnQuc3JjID0gaW1nRGF0YS5zcmM7XG4gICAgICAgICAgICBpbWdFbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgaW1nRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgICAgICBpbWdFbGVtZW50LnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCc7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxhc3RDb250ZW50SGFzaCA9IG5ld0NvbnRlbnRIYXNoO1xuICAgICAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgXG4gICAgYXBwbHlTdHlsZXMoKSB7XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgICAgXG4gICAgICBpZiAoc2V0dGluZ3NbJ2NvbG9yLW1vZGUnXSA9PT0gJ1RoZW1lJykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLXBhbmVsKSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgdmFyKC0tYm9yZGVyKWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3NbJ2JnLWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgJHtzZXR0aW5nc1snYm9yZGVyLWNvbG9yJ119YDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBgJHtzZXR0aW5nc1sncGFkZGluZyddfXB4YDtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBzZXR0aW5nc1snZGlzcGxheS1zdHlsZSddID09PSAnSG9yaXpvbnRhbCcgPyAncm93JyA6ICdjb2x1bW4nO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmdhcCA9IGAke3NldHRpbmdzWydpdGVtLXNwYWNpbmcnXX1weGA7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgICBcbiAgICAgIGNvbnN0IGNsaWNrR3VpID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCgnQ2xpY2tHVUknKTtcbiAgICAgIGlmICghY2xpY2tHdWkgfHwgIWNsaWNrR3VpLmlzRWRpdGluZ0hVRCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gOTk5NztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIFxuICAgICAgY29uc3QgaXRlbUNvbnRhaW5lcnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFybW9yLWh1ZC1kaXNwbGF5ID4gZGl2Jyk7XG4gICAgICBpdGVtQ29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAke3NldHRpbmdzWydpdGVtLXNpemUnXX1weGA7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHtzZXR0aW5nc1snaXRlbS1zaXplJ119cHhgO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgQXJtb3JIVUQ7ICIsICJjb25zdCBDUFNDb3VudGVyID0ge1xuICBuYW1lOiAnQ1BTQ291bnRlcicsXG4gIGNhdGVnb3J5OiAnUGxheWVyJyxcbiAgZGVzY3JpcHRpb246ICdEaXNwbGF5cyB5b3VyIGNsaWNrcyBwZXIgc2Vjb25kLicsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIGRlZmF1bHRYOiA3MjQsXG4gIGRlZmF1bHRZOiA3MjYsXG4gIHNldHRpbmdzOiBbXG4gICAgeyBpZDogJ2NvbG9yLW1vZGUnLCBuYW1lOiAnQ29sb3IgTW9kZScsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zOiBbJ1RoZW1lJywgJ0N1c3RvbSddLCB2YWx1ZTogJ1RoZW1lJyB9LFxuICAgIHsgaWQ6ICdiZy1jb2xvcicsIG5hbWU6ICdCYWNrZ3JvdW5kIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDMwLCAzMywgNDEsIDAuODUpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAndGV4dC1jb2xvcicsIG5hbWU6ICdUZXh0IENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjRUFFQUVBJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAnZm9udC1zaXplJywgbmFtZTogJ0ZvbnQgU2l6ZScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTQsIG1pbjogOCwgbWF4OiAyNCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdwYWRkaW5nJywgbmFtZTogJ1BhZGRpbmcnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDgsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdib3JkZXItcmFkaXVzJywgbmFtZTogJ0JvcmRlciBSYWRpdXMnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEwLCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEgfSxcbiAgICB7IGlkOiAnYm9yZGVyLXdpZHRoJywgbmFtZTogJ0JvcmRlciBXaWR0aCcsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMSwgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDEgfSxcbiAgICB7IGlkOiAnYm9yZGVyLWNvbG9yJywgbmFtZTogJ0JvcmRlciBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KScsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgeyBpZDogJ3Nob3ctbGFiZWwnLCBuYW1lOiAnU2hvdyBMYWJlbCcsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICB7IGlkOiAnc2hvdy1sbWInLCBuYW1lOiAnU2hvdyBMTUInLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgeyBpZDogJ3Nob3ctcm1iJywgbmFtZTogJ1Nob3cgUk1CJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICAgIHtcbiAgICAgIGlkOiAnZm9ybWF0JyxcbiAgICAgIG5hbWU6ICdUZXh0IEZvcm1hdCcsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB2YWx1ZTogJ3tsYWJlbH0ge2xtYn0gfCB7cm1ifScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VzZSB7bGFiZWx9LCB7bG1ifSwgYW5kIHtybWJ9IGFzIHBsYWNlaG9sZGVycy4nLFxuICAgIH0sXG4gIF0sXG4gIFxuICBsZWZ0Q2xpY2tzOiBbXSxcbiAgcmlnaHRDbGlja3M6IFtdLFxuICBcbiAgZWxlbWVudDogbnVsbCxcblxuICBvbkVuYWJsZSgpIHtcbiAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgb25EaXNhYmxlKCkge1xuICAgIHRoaXMuZGVzdHJveURpc3BsYXkoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBvblRpY2soKSB7XG4gICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy5sZWZ0Q2xpY2tzID0gdGhpcy5sZWZ0Q2xpY2tzLmZpbHRlcih0ID0+IG5vdyAtIHQgPCAxMDAwKTtcbiAgICB0aGlzLnJpZ2h0Q2xpY2tzID0gdGhpcy5yaWdodENsaWNrcy5maWx0ZXIodCA9PiBub3cgLSB0IDwgMTAwMCk7XG4gICAgXG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH0sXG4gIFxuICBvblNldHRpbmdVcGRhdGUoKSB7XG4gICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9LFxuXG4gIGhhbmRsZU1vdXNlRG93bihlKSB7XG4gICAgaWYgKGUuYnV0dG9uID09PSAwKSB7IC8vIExlZnQgY2xpY2tcbiAgICAgIHRoaXMubGVmdENsaWNrcy5wdXNoKHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICB9IGVsc2UgaWYgKGUuYnV0dG9uID09PSAyKSB7IC8vIFJpZ2h0IGNsaWNrXG4gICAgICB0aGlzLnJpZ2h0Q2xpY2tzLnB1c2gocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgIH1cbiAgfSxcblxuICBjcmVhdGVEaXNwbGF5KCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnY3BzLWNvdW50ZXItZGlzcGxheSc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9LFxuXG4gIGRlc3Ryb3lEaXNwbGF5KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgaWYgKCFjbGlja0d1aSB8fCAhY2xpY2tHdWkuaXNFZGl0aW5nSFVEKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQodGhpcy5uYW1lKTtcbiAgICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke21vZC54fXB4YDtcbiAgICAgICAgaWYgKG1vZC55ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7bW9kLnl9cHhgO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgICBsZXQgdGV4dCA9IHNldHRpbmdzLmZvcm1hdDtcblxuICAgICAgaWYgKHNldHRpbmdzWydzaG93LWxhYmVsJ10pIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tsYWJlbH0nLCAnQ1BTOicpOyBlbHNlIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tsYWJlbH0nLCAnJyk7XG4gICAgICBpZiAoc2V0dGluZ3NbJ3Nob3ctbG1iJ10pIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tsbWJ9JywgdGhpcy5sZWZ0Q2xpY2tzLmxlbmd0aCk7IGVsc2UgdGV4dCA9IHRleHQucmVwbGFjZSgne2xtYn0nLCAnJyk7XG4gICAgICBpZiAoc2V0dGluZ3NbJ3Nob3ctcm1iJ10pIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tybWJ9JywgdGhpcy5yaWdodENsaWNrcy5sZW5ndGgpOyBlbHNlIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tybWJ9JywgJycpO1xuICAgICAgXG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0LnRyaW0oKS5yZXBsYWNlKC9cXHwvZywgKG1hdGNoLCBvZmZzZXQsIHN0cikgPT4ge1xuICAgICAgICBjb25zdCBwcmV2Q2hhciA9IHN0cltvZmZzZXQgLSAxXTtcbiAgICAgICAgY29uc3QgbmV4dENoYXIgPSBzdHJbb2Zmc2V0ICsgMV07XG4gICAgICAgIGlmIChwcmV2Q2hhciAmJiBwcmV2Q2hhci50cmltKCkgPT09ICcnICYmIG5leHRDaGFyICYmIG5leHRDaGFyLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gJ3wnO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJldkNoYXIgfHwgcHJldkNoYXIudHJpbSgpID09PSAnJyB8fCAhbmV4dENoYXIgfHwgbmV4dENoYXIudHJpbSgpID09PSAnJykge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICB9KS50cmltKCk7XG4gICAgfVxuICB9LFxuXG4gIGFwcGx5U3R5bGVzKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgIFxuICAgIGlmIChzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnVGhlbWUnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcGFuZWwpJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQpJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCB2YXIoLS1ib3JkZXIpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3NbJ2JnLWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9IHNldHRpbmdzWyd0ZXh0LWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgJHtzZXR0aW5nc1snYm9yZGVyLWNvbG9yJ119YDtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmZvbnRTaXplID0gYCR7c2V0dGluZ3NbJ2ZvbnQtc2l6ZSddfXB4YDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9IGAke3NldHRpbmdzWydwYWRkaW5nJ119cHhgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk3O1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDUFNDb3VudGVyOyAiLCAiY29uc3QgRlBTQm9vc3RlciA9IHtcbiAgbmFtZTogJ0ZQU0Jvb3N0ZXInLFxuICBjYXRlZ29yeTogJ1V0aWxpdHknLFxuICBkZXNjcmlwdGlvbjogJ09wdGltaXplcyBnYW1lIHBlcmZvcm1hbmNlIGJ5IGFkanVzdGluZyByZXNvbHV0aW9uIGFuZCBvdGhlciBzZXR0aW5ncy4nLFxuICBlbmFibGVkOiBmYWxzZSxcbiAgY2FudmFzOiBudWxsLFxuXG4gIHNldHRpbmdzOiBbXG4gICAge1xuICAgICAgaWQ6ICdyZXNvbHV0aW9uU2NhbGUnLFxuICAgICAgbmFtZTogJ1Jlc29sdXRpb24gU2NhbGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdMb3dlciB2YWx1ZXMgY2FuIGltcHJvdmUgcGVyZm9ybWFuY2UgYXQgdGhlIGNvc3Qgb2YgcXVhbGl0eS4nLFxuICAgICAgdHlwZTogJ3NsaWRlcicsXG4gICAgICB2YWx1ZTogMSxcbiAgICAgIG1pbjogMC4xLFxuICAgICAgbWF4OiAxLjAsXG4gICAgICBzdGVwOiAwLjA1XG4gICAgfVxuICBdLFxuXG4gIG9uRW5hYmxlKG1hbmFnZXIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2EtY2FudmFzJyk7XG4gICAgaWYgKCF0aGlzLmNhbnZhcykge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZQU0Jvb3N0ZXJdIENvdWxkIG5vdCBmaW5kIGdhbWUgY2FudmFzOiAjbm9hLWNhbnZhcycpO1xuICAgICAgbWFuYWdlci5kaXNhYmxlKHRoaXMubmFtZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsV2lkdGgpIHtcbiAgICAgIHRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxXaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgdGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbEhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB9XG4gIH0sXG5cbiAgb25EaXNhYmxlKG1hbmFnZXIpIHtcbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbFdpZHRoKSB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHBhcnNlSW50KHRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxXaWR0aCwgMTApO1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbEhlaWdodCwgMTApO1xuICAgICAgZGVsZXRlIHRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxXaWR0aDtcbiAgICAgIGRlbGV0ZSB0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsSGVpZ2h0O1xuICAgIH1cbiAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgfVxuICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgfSxcbiAgXG4gIG9uU2V0dGluZ1VwZGF0ZShzZXR0aW5nSWQsIHZhbHVlLCBtYW5hZ2VyKSB7XG4gICAgLy8gb25UaWNrIHdpbGwgaGFuZGxlIGl0XG4gIH0sXG5cbiAgb25UaWNrKGR0LCBtYW5hZ2VyKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy5hcHBseVNldHRpbmdzKG1hbmFnZXIpO1xuICAgIH1cbiAgfSxcblxuICBhcHBseVNldHRpbmdzKG1hbmFnZXIpIHtcbiAgICBpZiAoIXRoaXMuY2FudmFzIHx8ICF0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsV2lkdGgpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBzZXR0aW5ncyA9IG1hbmFnZXIuZ2V0KHRoaXMubmFtZSkuc2V0dGluZ3M7XG4gICAgY29uc3QgcmVzb2x1dGlvblNjYWxlID0gc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09ICdyZXNvbHV0aW9uU2NhbGUnKS52YWx1ZTtcbiAgICBjb25zdCBvcmlnaW5hbFdpZHRoID0gcGFyc2VJbnQodGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbFdpZHRoLCAxMCk7XG4gICAgY29uc3Qgb3JpZ2luYWxIZWlnaHQgPSBwYXJzZUludCh0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsSGVpZ2h0LCAxMCk7XG5cbiAgICBjb25zdCBuZXdXaWR0aCA9IE1hdGgucm91bmQob3JpZ2luYWxXaWR0aCAqIHJlc29sdXRpb25TY2FsZSk7XG4gICAgY29uc3QgbmV3SGVpZ2h0ID0gTWF0aC5yb3VuZChvcmlnaW5hbEhlaWdodCAqIHJlc29sdXRpb25TY2FsZSk7XG5cbiAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IG5ld1dpZHRoKSB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IG5ld1dpZHRoO1xuICAgIH1cbiAgICBpZiAodGhpcy5jYW52YXMuaGVpZ2h0ICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IG5ld0hlaWdodDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYW52YXMuc3R5bGUud2lkdGggIT09ICcxMDAlJykge1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCAhPT0gJzEwMCUnKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZQU0Jvb3N0ZXI7ICIsICJjb25zdCBBZEJsb2NrZXIgPSB7XG4gICAgbmFtZTogJ0FkQmxvY2tlcicsXG4gICAgY2F0ZWdvcnk6ICdVdGlsaXR5JyxcbiAgICBkZXNjcmlwdGlvbjogJ0Jsb2NrcyBpbi1nYW1lIGFkcyBhbmQgdHJhY2tlcnMgYnkgaGlkaW5nIGVsZW1lbnRzIGFuZCBpbnRlcmNlcHRpbmcgbmV0d29yayByZXF1ZXN0cy4nLFxuICAgIGVuYWJsZWQ6IHRydWUsXG5cbiAgICBzZXR0aW5nczogW1xuICAgICAgICB7IGlkOiAnaGlkZS1wYWdlLWFkcycsIG5hbWU6ICdIaWRlIEluLVBhZ2UgQWRzJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSwgZGVzY3JpcHRpb246ICdIaWRlcyB2aXNpYmxlIGFkIGNvbnRhaW5lcnMgYW5kIHBvcHVwcy4nIH0sXG4gICAgICAgIHsgaWQ6ICdibG9jay1uZXR3b3JrLWFkcycsIG5hbWU6ICdCbG9jayBBZCBOZXR3b3JrIFJlcXVlc3RzJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSwgZGVzY3JpcHRpb246ICdQcmV2ZW50cyB0aGUgYnJvd3NlciBmcm9tIHJlcXVlc3RpbmcgYWRzIGZyb20ga25vd24gYWQgc2VydmVycy4nIH1cbiAgICBdLFxuXG4gICAgb3JpZ2luYWxGZXRjaDogd2luZG93LmZldGNoLFxuICAgIG9yaWdpbmFsWGhyT3Blbjogd2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuLFxuICAgIG9yaWdpbmFsWGhyU2VuZDogd2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kLFxuICAgIG9ic2VydmVyOiBudWxsLFxuICAgIFxuICAgIGFkU2VsZWN0b3JzOiBbXG4gICAgICAgICcuU3VwZXJSYW5rQWRDb250YWluZXInLFxuICAgICAgICAnLkFkQmFubmVyQ29udGFpbmVyJyxcbiAgICAgICAgJy5QbGF5d2lyZVZpZGVvV3JhcHBlcicsXG4gICAgICAgICcuVWlSZXF1ZXN0cycsXG4gICAgICAgICcuQWRCYW5uZXInLFxuICAgICAgICAnLkdlbmVyaWNWaWRlb1dyYXBwZXInLFxuICAgICAgICAnI2Jsb3hkLWlvXzMwMHg2MDBfMicsXG4gICAgICAgICcuSW52ZW50b3J5QWRPdXRlcidcbiAgICBdLFxuICAgIFxuICAgIGJsb2NrTGlzdDogW1xuICAgICAgICAnZ29vZ2xlc3luZGljYXRpb24uY29tJyxcbiAgICAgICAgJ2dvb2dsZXRhZ3NlcnZpY2VzLmNvbScsXG4gICAgICAgICdnb29nbGUtYW5hbHl0aWNzLmNvbScsXG4gICAgICAgICdkb3VibGVjbGljay5uZXQnLFxuICAgICAgICAnYWRpbnBsYXkuY29tJyxcbiAgICAgICAgJ3BsYXl3aXJlLmNvbScsXG4gICAgICAgICdhbWF6b24tYWRzeXN0ZW0uY29tJyxcbiAgICAgICAgJ2FkbnhzLmNvbSdcbiAgICBdLFxuICAgIFxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLmFwcGx5U2V0dGluZ3MoKTtcbiAgICB9LFxuICAgIFxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy51bnBhdGNoTmV0d29ya1JlcXVlc3RzKCk7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuLWhpZGluZyBlbGVtZW50cyBpcyBub3QgZG9uZSB0byBhdm9pZCBpbnRlcmZlcmluZyB3aXRoIGdhbWUgbG9naWMuIEEgcmVmcmVzaCBpcyBiZXN0LlxuICAgIH0sXG4gICAgXG4gICAgb25TZXR0aW5nVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmFwcGx5U2V0dGluZ3MoKTtcbiAgICB9LFxuXG4gICAgYXBwbHlTZXR0aW5ncygpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuXG4gICAgICAgIGlmIChzZXR0aW5nc1snYmxvY2stbmV0d29yay1hZHMnXSkge1xuICAgICAgICAgICAgdGhpcy5wYXRjaE5ldHdvcmtSZXF1ZXN0cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bnBhdGNoTmV0d29ya1JlcXVlc3RzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2V0dGluZ3NbJ2hpZGUtcGFnZS1hZHMnXSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlUGFnZUFkcygpO1xuICAgICAgICAgICAgdGhpcy5zZXR1cE9ic2VydmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBpc0Jsb2NrZWQodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2NrTGlzdC5zb21lKGRvbWFpbiA9PiB1cmwuaW5jbHVkZXMoZG9tYWluKSk7XG4gICAgfSxcblxuICAgIHBhdGNoTmV0d29ya1JlcXVlc3RzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnID8gaW5wdXQgOiBpbnB1dC51cmw7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc0Jsb2NrZWQodXJsKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbU2VyZW5pdHldIEJsb2NrZWQgZmV0Y2ggcmVxdWVzdCB0bzogJHt1cmx9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgUmVzcG9uc2UobnVsbCwgeyBzdGF0dXM6IDIwNCwgc3RhdHVzVGV4dDogJ05vIENvbnRlbnQnIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxmLm9yaWdpbmFsRmV0Y2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihtZXRob2QsIHVybCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuaXNCbG9ja2VkKHVybCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0Jsb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbU2VyZW5pdHldIEJsb2NrZWQgWEhSIHJlcXVlc3QgdG86ICR7dXJsfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5faXNCbG9ja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5vcmlnaW5hbFhock9wZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzQmxvY2tlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm9yaWdpbmFsWGhyU2VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICB1bnBhdGNoTmV0d29ya1JlcXVlc3RzKCkge1xuICAgICAgICB3aW5kb3cuZmV0Y2ggPSB0aGlzLm9yaWdpbmFsRmV0Y2g7XG4gICAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbiA9IHRoaXMub3JpZ2luYWxYaHJPcGVuO1xuICAgICAgICB3aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQgPSB0aGlzLm9yaWdpbmFsWGhyU2VuZDtcbiAgICB9LFxuXG4gICAgaGlkZUVsZW1lbnQobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5zdHlsZS5vcGFjaXR5ICE9PSAnMCcpIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICAgIG5vZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgaGlkZVBhZ2VBZHMoKSB7XG4gICAgICAgIHRoaXMuYWRTZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKGVsID0+IHRoaXMuaGlkZUVsZW1lbnQoZWwpKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICBzZXR1cE9ic2VydmVyKCkge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRTZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlRWxlbWVudChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKGVsID0+IHRoaXMuaGlkZUVsZW1lbnQoZWwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRCbG9ja2VyOyAiLCAiY29uc3QgQ09ORklHX0tFWSA9ICdsb2dsZXZlbCc7XG5cbmNsYXNzIENvbmZpZ3VyYXRpb24ge1xuICBzdGF0aWMgc2F2ZShjb25maWcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZyk7XG4gICAgICBjb25zdCBlbmNvZGVkID0gYnRvYShqc29uKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENPTkZJR19LRVksIGVuY29kZWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignW0NvbmZpZ3VyYXRpb25dIEVycm9yIHNhdmluZyBjb25maWc6JywgZXJyKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbG9hZCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZW5jb2RlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENPTkZJR19LRVkpO1xuICAgICAgaWYgKCFlbmNvZGVkKSByZXR1cm4gbnVsbDtcblxuICAgICAgY29uc3QganNvbiA9IGF0b2IoZW5jb2RlZCk7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tDb25maWd1cmF0aW9uXSBFcnJvciBsb2FkaW5nIGNvbmZpZzonLCBlcnIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ09ORklHX0tFWSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbjsgIiwgImNvbnN0IENyb3NzaGFpciA9IHtcbiAgICBuYW1lOiAnQ3Jvc3NoYWlyJyxcbiAgICBjYXRlZ29yeTogJ1Zpc3VhbCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXBsYWNlcyB0aGUgZGVmYXVsdCBnYW1lIGNyb3NzaGFpciB3aXRoIGEgY3VzdG9tIG9uZS4nLFxuICAgIGVuYWJsZWQ6IHRydWUsXG5cbiAgICBlbGVtZW50OiBudWxsLFxuICAgIGdhbWVDcm9zc2hhaXI6IG51bGwsXG4gICAgZ2FtZUNyb3NzaGFpckluaXRpYWxEaXNwbGF5OiBudWxsLFxuICAgIG9ic2VydmVyOiBudWxsLFxuXG4gICAgc2V0dGluZ3M6IFtcbiAgICAgICAgeyBpZDogJ2hpZGUtb3JpZ2luYWwnLCBuYW1lOiAnSGlkZSBPcmlnaW5hbCBDcm9zc2hhaXInLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBpZDogJ21vZGUnLCBcbiAgICAgICAgICAgIG5hbWU6ICdNb2RlJywgXG4gICAgICAgICAgICB0eXBlOiAnc2VsZWN0JywgXG4gICAgICAgICAgICB2YWx1ZTogJ0Nyb3NzJywgXG4gICAgICAgICAgICBvcHRpb25zOiBbJ0Nyb3NzJywgJ1BsdXMnLCAnRG90JywgJ0NpcmNsZScsICdULVNoYXBlJywgJ0Fycm93JywgJ0N1c3RvbSBJbWFnZSddIFxuICAgICAgICB9LFxuICAgICAgICB7IGlkOiAnY29sb3ItbW9kZScsIG5hbWU6ICdDb2xvciBNb2RlJywgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnVGhlbWUnLCAnQ3VzdG9tJ10sIHZhbHVlOiAnVGhlbWUnLCBjb25kaXRpb246IChzZXR0aW5ncykgPT4gc2V0dGluZ3NbJ21vZGUnXSAhPT0gJ0N1c3RvbSBJbWFnZScgfSxcbiAgICAgICAgeyBpZDogJ2ltYWdlLXVybCcsIG5hbWU6ICdJbWFnZSBVUkwnLCB0eXBlOiAndGV4dCcsIHZhbHVlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9NOE00RzNrLnBuZycsIGNvbmRpdGlvbjogKHNldHRpbmdzKSA9PiBzZXR0aW5nc1snbW9kZSddID09PSAnQ3VzdG9tIEltYWdlJyB9LFxuICAgICAgICB7IGlkOiAnc2l6ZScsIG5hbWU6ICdTaXplJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxMiwgbWluOiAxLCBtYXg6IDEwMCwgc3RlcDogMSB9LFxuICAgICAgICB7IGlkOiAnY29sb3InLCBuYW1lOiAnQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJyNGRkZGRkYnLCBjb25kaXRpb246IChzZXR0aW5ncykgPT4gc2V0dGluZ3NbJ21vZGUnXSAhPT0gJ0N1c3RvbSBJbWFnZScgJiYgc2V0dGluZ3NbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgICAgeyBpZDogJ3RoaWNrbmVzcycsIG5hbWU6ICdUaGlja25lc3MnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDIsIG1pbjogMSwgbWF4OiAyMCwgc3RlcDogMSwgY29uZGl0aW9uOiAoc2V0dGluZ3MpID0+IFsnQ3Jvc3MnLCAnUGx1cycsICdDaXJjbGUnLCAnVC1TaGFwZSddLmluY2x1ZGVzKHNldHRpbmdzWydtb2RlJ10pIH0sXG4gICAgICAgIHsgaWQ6ICdvdXRsaW5lJywgbmFtZTogJ091dGxpbmUnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlLCBjb25kaXRpb246IChzZXR0aW5ncykgPT4gc2V0dGluZ3NbJ21vZGUnXSAhPT0gJ0N1c3RvbSBJbWFnZScgfSxcbiAgICAgICAgeyBpZDogJ291dGxpbmUtY29sb3InLCBuYW1lOiAnT3V0bGluZSBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAnIzAwMDAwMCcsIGNvbmRpdGlvbjogKHNldHRpbmdzKSA9PiBzZXR0aW5nc1snb3V0bGluZSddICYmIHNldHRpbmdzWydtb2RlJ10gIT09ICdDdXN0b20gSW1hZ2UnICYmIHNldHRpbmdzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgXSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDcm9zc2hhaXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaGFuZGxlR2FtZUNyb3NzaGFpcigpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4gdGhpcy5oYW5kbGVHYW1lQ3Jvc3NoYWlyKCkpO1xuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0cm95RGlzcGxheSgpO1xuICAgICAgICB0aGlzLnJlc3RvcmVHYW1lQ3Jvc3NoYWlyKCk7XG4gICAgICAgIHRoaXMuZ2FtZUNyb3NzaGFpciA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2FtZUNyb3NzaGFpckluaXRpYWxEaXNwbGF5ID0gbnVsbDtcbiAgICB9LFxuXG4gICAgb25TZXR0aW5nVXBkYXRlKHNldHRpbmdJZCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNyb3NzaGFpcigpO1xuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnaGlkZS1vcmlnaW5hbCcpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR2FtZUNyb3NzaGFpcigpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY3Jvc3NoYWlyJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9ICc1MCUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9ICc1MCUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzk5OTknO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfSxcblxuICAgIGRlc3Ryb3lEaXNwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBoYW5kbGVHYW1lQ3Jvc3NoYWlyKCkge1xuICAgICAgICBjb25zdCBzaG91bGRIaWRlID0gdGhpcy5zZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gJ2hpZGUtb3JpZ2luYWwnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZ2FtZUNyb3NzaGFpckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkNyb3NzSGFpcicpO1xuXG4gICAgICAgIGlmIChzaG91bGRIaWRlKSB7XG4gICAgICAgICAgICBpZiAoZ2FtZUNyb3NzaGFpckVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZUNyb3NzaGFpciAhPT0gZ2FtZUNyb3NzaGFpckVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNyb3NzaGFpciA9IGdhbWVDcm9zc2hhaXJFbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3Jvc3NoYWlySW5pdGlhbERpc3BsYXkgPSBnYW1lQ3Jvc3NoYWlyRWwuc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3Jvc3NoYWlyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVHYW1lQ3Jvc3NoYWlyKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIHJlc3RvcmVHYW1lQ3Jvc3NoYWlyKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lQ3Jvc3NoYWlyKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVDcm9zc2hhaXIuc3R5bGUuZGlzcGxheSA9IHRoaXMuZ2FtZUNyb3NzaGFpckluaXRpYWxEaXNwbGF5IHx8ICcnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICB1cGRhdGVDcm9zc2hhaXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgICAgICBsZXQgeyBtb2RlLCBzaXplLCBjb2xvciwgdGhpY2tuZXNzLCBvdXRsaW5lLCAnb3V0bGluZS1jb2xvcic6IG91dGxpbmVDb2xvciwgJ2ltYWdlLXVybCc6IGltYWdlVXJsLCAnY29sb3ItbW9kZSc6IGNvbG9yTW9kZSB9ID0gc2V0dGluZ3M7XG5cbiAgICAgICAgaWYgKGNvbG9yTW9kZSA9PT0gJ1RoZW1lJyAmJiBtb2RlICE9PSAnQ3VzdG9tIEltYWdlJykge1xuICAgICAgICAgICAgY29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wcmltYXJ5JykudHJpbSgpO1xuICAgICAgICAgICAgb3V0bGluZUNvbG9yID0gJyMwMDAwMDAnOyAvLyBEZWZhdWx0IG91dGxpbmUgZm9yIHRoZW1lXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdXRsaW5lU3R5bGUgPSBvdXRsaW5lID8gYDBweCAwcHggMnB4ICR7b3V0bGluZUNvbG9yfSwgMHB4IDBweCAycHggJHtvdXRsaW5lQ29sb3J9LCAwcHggMHB4IDJweCAke291dGxpbmVDb2xvcn0sIDBweCAwcHggMnB4ICR7b3V0bGluZUNvbG9yfWAgOiAnbm9uZSc7XG5cbiAgICAgICAgc3dpdGNoKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0N1c3RvbSBJbWFnZSc6XG4gICAgICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGltYWdlVXJsO1xuICAgICAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IGAke3NpemV9cHhgO1xuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBgJHtzaXplfXB4YDtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnRG90JzpcbiAgICAgICAgICAgICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkb3Quc3R5bGUud2lkdGggPSBgJHtzaXplfXB4YDtcbiAgICAgICAgICAgICAgICBkb3Quc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XG4gICAgICAgICAgICAgICAgZG90LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgICAgIGRvdC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNTAlJztcbiAgICAgICAgICAgICAgICBkb3Quc3R5bGUudGV4dFNoYWRvdyA9IG91dGxpbmVTdHlsZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZG90KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQ2lyY2xlJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjaXJjbGUuc3R5bGUud2lkdGggPSBgJHtzaXplfXB4YDtcbiAgICAgICAgICAgICAgICBjaXJjbGUuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJvcmRlciA9IGAke3RoaWNrbmVzc31weCBzb2xpZCAke2NvbG9yfWA7XG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xuICAgICAgICAgICAgICAgIGNpcmNsZS5zdHlsZS50ZXh0U2hhZG93ID0gb3V0bGluZVN0eWxlO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdDcm9zcyc6XG4gICAgICAgICAgICBjYXNlICdQbHVzJzpcbiAgICAgICAgICAgIGNhc2UgJ1QtU2hhcGUnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGdhcCA9IG1vZGUgPT09ICdDcm9zcycgPyBNYXRoLm1heCgxLCBzaXplIC8gNCkgOiAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHNpemU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHsgdG9wOiBgLSR7Z2FwICsgbGVuZ3RofXB4YCwgbGVmdDogYC0ke3RoaWNrbmVzcyAvIDJ9cHhgLCB3aWR0aDogYCR7dGhpY2tuZXNzfXB4YCwgaGVpZ2h0OiBgJHtsZW5ndGh9cHhgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogeyB0b3A6IGAke2dhcH1weGAsIGxlZnQ6IGAtJHt0aGlja25lc3MgLyAyfXB4YCwgd2lkdGg6IGAke3RoaWNrbmVzc31weGAsIGhlaWdodDogYCR7bGVuZ3RofXB4YCB9LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB7IGxlZnQ6IGAtJHtnYXAgKyBsZW5ndGh9cHhgLCB0b3A6IGAtJHt0aGlja25lc3MgLyAyfXB4YCwgd2lkdGg6IGAke2xlbmd0aH1weGAsIGhlaWdodDogYCR7dGhpY2tuZXNzfXB4YCB9LFxuICAgICAgICAgICAgICAgICAgICByaWdodDogeyBsZWZ0OiBgJHtnYXB9cHhgLCB0b3A6IGAtJHt0aGlja25lc3MgLyAyfXB4YCwgd2lkdGg6IGAke2xlbmd0aH1weGAsIGhlaWdodDogYCR7dGhpY2tuZXNzfXB4YCB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgbGluZXNUb0RyYXcgPSBbJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCddO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnVC1TaGFwZScpIGxpbmVzVG9EcmF3ID0gWydib3R0b20nLCAnbGVmdCcsICdyaWdodCddO1xuXG4gICAgICAgICAgICAgICAgbGluZXNUb0RyYXcuZm9yRWFjaChwb3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnN0eWxlLnRleHRTaGFkb3cgPSBvdXRsaW5lU3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obGluZS5zdHlsZSwgcG9zaXRpb25zW3Bvc10pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93JzpcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGFycm93LnN0eWxlLndpZHRoID0gJzAnO1xuICAgICAgICAgICAgICAgIGFycm93LnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgICAgICAgICBhcnJvdy5zdHlsZS5ib3JkZXJMZWZ0ID0gYCR7c2l6ZSAvIDJ9cHggc29saWQgdHJhbnNwYXJlbnRgO1xuICAgICAgICAgICAgICAgIGFycm93LnN0eWxlLmJvcmRlclJpZ2h0ID0gYCR7c2l6ZSAvIDJ9cHggc29saWQgdHJhbnNwYXJlbnRgO1xuICAgICAgICAgICAgICAgIGFycm93LnN0eWxlLmJvcmRlckJvdHRvbSA9IGAke3NpemV9cHggc29saWQgJHtjb2xvcn1gO1xuICAgICAgICAgICAgICAgIGlmKG91dGxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuc3R5bGUuZmlsdGVyID0gYGRyb3Atc2hhZG93KDAgMXB4IDFweCAke291dGxpbmVDb2xvcn0pIGRyb3Atc2hhZG93KDAgLTFweCAxcHggJHtvdXRsaW5lQ29sb3J9KSBkcm9wLXNoYWRvdygxcHggMCAxcHggJHtvdXRsaW5lQ29sb3J9KSBkcm9wLXNoYWRvdygtMXB4IDAgMXB4ICR7b3V0bGluZUNvbG9yfSlgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENyb3NzaGFpcjsgIiwgImNsYXNzIE5vdGlmaWNhdGlvbk1hbmFnZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udC1hd2Vzb21lLWxpbmsnKSkge1xyXG4gICAgICBjb25zdCBmb250QXdlc29tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgIGZvbnRBd2Vzb21lTGluay5pZCA9ICdmb250LWF3ZXNvbWUtbGluayc7XHJcbiAgICAgIGZvbnRBd2Vzb21lTGluay5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICAgIGZvbnRBd2Vzb21lTGluay5ocmVmID0gJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjQvY3NzL2FsbC5taW4uY3NzJztcclxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmb250QXdlc29tZUxpbmspO1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktbm90aWZpY2F0aW9uLWNvbnRhaW5lcicpKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktbm90aWZpY2F0aW9uLWNvbnRhaW5lcicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1ub3RpZmljYXRpb24tY29udGFpbmVyJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3coeyB0aXRsZSA9ICdTZXJlbml0eScsIG1lc3NhZ2UsIHR5cGUgPSAnaW5mbycsIGR1cmF0aW9uID0gMzAwMCB9KSB7XHJcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBgc2VyZW5pdHktbm90aWZpY2F0aW9uIHNlcmVuaXR5LW5vdGlmaWNhdGlvbi0ke3R5cGV9YDtcclxuICAgIFxyXG4gICAgY29uc3QgaWNvbk1hcCA9IHtcclxuICAgICAgaW5mbzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE1Yy0uNTUgMC0xLS40NS0xLTF2LTRjMC0uNTUuNDUtMSAxLTFzMSAuNDUgMSAxdjRjMCAuNTUtLjQ1IDEtMSAxem0xLThoLTJWN2gydjJ6XCI+PC9wYXRoPjwvc3ZnPmAsXHJcbiAgICAgIHN1Y2Nlc3M6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTIgMTVsLTUtNSAxLjQxLTEuNDFMMTAgMTQuMTdsNy41OS03LjU5TDE5IDhsLTkgOXpcIj48L3BhdGg+PC9zdmc+YCxcclxuICAgICAgd2FybmluZzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk0xIDIxaDIyTDEyIDIgMSAyMXptMTItM2gtMnYtMmgydjJ6bTAtNGgtMnYtNGgydjR6XCI+PC9wYXRoPjwvc3ZnPmAsXHJcbiAgICAgIGVycm9yOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTVoLTJ2LTJoMnYyem0wLTRoLTJWN2gydjJ6XCI+PC9wYXRoPjwvc3ZnPmAsXHJcbiAgICB9O1xyXG5cclxuICAgIG5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZXJlbml0eS1ub3RpZmljYXRpb24taWNvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlcmVuaXR5LW5vdGlmaWNhdGlvbi1pY29uXCI+JHtpY29uTWFwW3R5cGVdIHx8IGljb25NYXAuaW5mb308L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZXJlbml0eS1ub3RpZmljYXRpb24tY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZXJlbml0eS1ub3RpZmljYXRpb24tdGl0bGVcIj4ke3RpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZXJlbml0eS1ub3RpZmljYXRpb24tbWVzc2FnZVwiPiR7bWVzc2FnZX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJzZXJlbml0eS1ub3RpZmljYXRpb24tY2xvc2VcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZXJlbml0eS1ub3RpZmljYXRpb24tdGltZXJcIj48L2Rpdj5cclxuICAgIGA7XHJcbiAgICBcclxuICAgIHRoaXMuY29udGFpbmVyLnByZXBlbmQobm90aWZpY2F0aW9uKTtcclxuICAgIFxyXG4gICAgLy8gQW5pbWF0ZSBpblxyXG4gICAgbm90aWZpY2F0aW9uLnN0eWxlLmFuaW1hdGlvbiA9ICdzZXJlbml0eS1ub3RpZmljYXRpb24taW4gMC41cyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjIsIDEpJztcclxuXHJcbiAgICBjb25zdCB0aW1lckJhciA9IG5vdGlmaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktbm90aWZpY2F0aW9uLXRpbWVyJyk7XHJcbiAgICB0aW1lckJhci5zdHlsZS50cmFuc2l0aW9uID0gYHdpZHRoICR7ZHVyYXRpb259bXMgbGluZWFyYDtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmKHRpbWVyQmFyKSB0aW1lckJhci5zdHlsZS53aWR0aCA9ICcwJSc7XHJcbiAgICB9LCAxMCk7XHJcblxyXG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChub3RpZmljYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdleGl0aW5nJykpIHJldHVybjtcclxuICAgICAgbm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2V4aXRpbmcnKTtcclxuICAgICAgXHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgbm90aWZpY2F0aW9uLnN0eWxlLmFuaW1hdGlvbiA9ICdzZXJlbml0eS1ub3RpZmljYXRpb24tb3V0IDAuNXMgZm9yd2FyZHMgY3ViaWMtYmV6aWVyKDAuOCwgMCwgMC44LCAwKSc7XHJcbiAgICAgIG5vdGlmaWNhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGUuYW5pbWF0aW9uTmFtZSA9PT0gJ3NlcmVuaXR5LW5vdGlmaWNhdGlvbi1vdXQnKSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IG5vdGlmaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktbm90aWZpY2F0aW9uLWNsb3NlJyk7XHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlLCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICBcclxuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dChjbG9zZSwgZHVyYXRpb24pO1xyXG5cclxuICAgIG5vdGlmaWNhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICB0aW1lckJhci5zdHlsZS53aWR0aCA9IGdldENvbXB1dGVkU3R5bGUodGltZXJCYXIpLndpZHRoO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbm90aWZpY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoY2xvc2UsIGR1cmF0aW9uKTsgLy8gcmVzdGFydCB3aXRoIGZ1bGwgZHVyYXRpb25cclxuICAgICAgICB0aW1lckJhci5zdHlsZS50cmFuc2l0aW9uID0gYHdpZHRoICR7ZHVyYXRpb259bXMgbGluZWFyYDtcclxuICAgICAgICB0aW1lckJhci5zdHlsZS53aWR0aCA9ICcwJSc7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbk1hbmFnZXI7ICIsICJjb25zdCBOb3RpZmljYXRpb25zID0ge1xyXG4gIG5hbWU6ICdOb3RpZmljYXRpb25zJyxcclxuICBjYXRlZ29yeTogJ1V0aWxpdHknLFxyXG4gIGRlc2NyaXB0aW9uOiAnU2hvd3MgYWxlcnRzIHdoZW4gbW9kdWxlcyBhcmUgdG9nZ2xlZC4nLFxyXG4gIGVuYWJsZWQ6IGZhbHNlLFxyXG4gIHNldHRpbmdzOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uczsgIiwgImltcG9ydCB7IGdldFJhaW5ib3dDb2xvciB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLy8gQSBoZWxwZXIgdG8gY2FjaGUgY2FudmFzIGNvbnRleHQgZm9yIG1lYXN1cmluZywgaW1wcm92aW5nIHBlcmZvcm1hbmNlLlxuY29uc3QgVF9DVFhfQ0FDSEUgPSB7XG4gICAgX2N0eDogbnVsbCxcbiAgICBnZXRDb250ZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jdHgpIHtcbiAgICAgICAgICAgIHRoaXMuX2N0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2N0eDtcbiAgICB9XG59O1xuXG5jb25zdCBBcnJheUxpc3QgPSB7XG4gICAgbmFtZTogJ0FycmF5TGlzdCcsXG4gICAgY2F0ZWdvcnk6ICdWaXN1YWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnRGlzcGxheXMgYSBsaXN0IG9mIGVuYWJsZWQgbW9kdWxlcy4nLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZWxlbWVudDogbnVsbCxcbiAgICBcbiAgICBzZXR0aW5nczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ2NvbG9yLW1vZGUnLFxuICAgICAgICAgICAgbmFtZTogJ0NvbG9yIE1vZGUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgY29sb3Igc3R5bGUgb2YgdGhlIG1vZHVsZSBsaXN0LicsXG4gICAgICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IFsnUmFpbmJvdycsICdTdGF0aWMnXSxcbiAgICAgICAgICAgIHZhbHVlOiAnU3RhdGljJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ3VzZS10aGVtZS1jb2xvcicsXG4gICAgICAgICAgICBuYW1lOiAnVXNlIFRoZW1lIENvbG9yJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVXNlIHRoZSBtYWluIHRoZW1lIGNvbG9yIGZvciBzdGF0aWMgbW9kZS4nLFxuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICBjb25kaXRpb246IChzZXR0aW5ncykgPT4gc2V0dGluZ3NbJ2NvbG9yLW1vZGUnXSA9PT0gJ1N0YXRpYydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdzdGF0aWMtY29sb3InLFxuICAgICAgICAgICAgbmFtZTogJ0N1c3RvbSBTdGF0aWMgQ29sb3InLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgY29sb3Igb2YgdGhlIHRleHQgaWYgbm90IHVzaW5nIHRoZSB0aGVtZSBjb2xvci4nLFxuICAgICAgICAgICAgdHlwZTogJ2NvbG9yJyxcbiAgICAgICAgICAgIHZhbHVlOiAncmdiYSg5NCwgMTE0LCAyMzUsIDEpJyxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogKHNldHRpbmdzKSA9PiBzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnU3RhdGljJyAmJiAhc2V0dGluZ3NbJ3VzZS10aGVtZS1jb2xvciddXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnYm9yZGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdTaG93IEJvcmRlcicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXkgYSBjb2xvcmVkIGJvcmRlciBvbiB0aGUgc2lkZSBvZiB0aGUgbGlzdC4nLFxuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAndGV4dC1zaGFkb3cnLFxuICAgICAgICAgICAgbmFtZTogJ1RleHQgU2hhZG93JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQWRkcyBhIHNoYWRvdyB0byB0aGUgdGV4dCBmb3IgYmV0dGVyIHZpc2liaWxpdHkuJyxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ2ZvbnQtc2l6ZScsXG4gICAgICAgICAgICBuYW1lOiAnRm9udCBTaXplJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGZvbnQgc2l6ZSBvZiB0aGUgbW9kdWxlIG5hbWVzLicsXG4gICAgICAgICAgICB0eXBlOiAnc2xpZGVyJyxcbiAgICAgICAgICAgIG1pbjogMTAsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgIHZhbHVlOiAxNFxuICAgICAgICB9XG4gICAgXSxcblxuICAgIG9uRW5hYmxlKG1hbmFnZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1hcnJheWxpc3QtY29udGFpbmVyJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKG1hbmFnZXIpO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25UaWNrKGR0LCBtYW5hZ2VyKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZXhjbHVkZWQgPSBbJ0NsaWNrR1VJJywgJ0FycmF5TGlzdCcsICdOb3RpZmljYXRpb25zJ107XG4gICAgICAgIFxuICAgICAgICAvLyBHZXQgZm9udCBzdHlsZXMgdG8gYWNjdXJhdGVseSBtZWFzdXJlIHRleHQgd2lkdGhcbiAgICAgICAgY29uc3QgZm9udFNpemUgPSB0aGlzLmdldFNldHRpbmdWYWx1ZShtYW5hZ2VyLCAnZm9udC1zaXplJyk7XG4gICAgICAgIGNvbnN0IGZvbnRXZWlnaHQgPSA2MDA7IC8vIEFzIGRlZmluZWQgaW4gc3R5bGVzLmNzc1xuICAgICAgICBjb25zdCBmb250RmFtaWx5ID0gJ0ludGVyJzsgLy8gQXMgZGVmaW5lZCBpbiBzdHlsZXMuY3NzXG4gICAgICAgIGNvbnN0IGZvbnQgPSBgJHtmb250V2VpZ2h0fSAke2ZvbnRTaXplfXB4ICR7Zm9udEZhbWlseX1gO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY29udGV4dCA9IFRfQ1RYX0NBQ0hFLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5mb250ID0gZm9udDtcblxuICAgICAgICBjb25zdCBlbmFibGVkTW9kdWxlcyA9IG1hbmFnZXIubGlzdCgpXG4gICAgICAgICAgICAuZmlsdGVyKG0gPT4gbS5lbmFibGVkICYmICFleGNsdWRlZC5pbmNsdWRlcyhtLm5hbWUpKVxuICAgICAgICAgICAgLm1hcChtID0+ICh7XG4gICAgICAgICAgICAgICAgbmFtZTogbS5uYW1lLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjb250ZXh0Lm1lYXN1cmVUZXh0KG0ubmFtZSkud2lkdGhcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIud2lkdGggLSBhLndpZHRoIHx8IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBjb25zdCBjb2xvck1vZGUgPSB0aGlzLmdldFNldHRpbmdWYWx1ZShtYW5hZ2VyLCAnY29sb3ItbW9kZScpO1xuICAgICAgICBjb25zdCB1c2VUaGVtZUNvbG9yID0gdGhpcy5nZXRTZXR0aW5nVmFsdWUobWFuYWdlciwgJ3VzZS10aGVtZS1jb2xvcicpO1xuICAgICAgICBsZXQgc3RhdGljQ29sb3IgPSB0aGlzLmdldFNldHRpbmdWYWx1ZShtYW5hZ2VyLCAnc3RhdGljLWNvbG9yJyk7XG4gICAgICAgIGNvbnN0IHNob3dCb3JkZXIgPSB0aGlzLmdldFNldHRpbmdWYWx1ZShtYW5hZ2VyLCAnYm9yZGVyJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY29sb3JNb2RlID09PSAnU3RhdGljJyAmJiB1c2VUaGVtZUNvbG9yKSB7XG4gICAgICAgICAgICBzdGF0aWNDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXByaW1hcnknKS50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVuYWJsZWRNb2R1bGVzLmZvckVhY2goKG1vZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1vZEVsZW1lbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWFycmF5bGlzdC1pdGVtJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvck1vZGUgPT09ICdSYWluYm93JyA/IGdldFJhaW5ib3dDb2xvcihpbmRleCkgOiBzdGF0aWNDb2xvcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbW9kRWxlbWVudC5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgbW9kRWxlbWVudC50ZXh0Q29udGVudCA9IG1vZC5uYW1lO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc2hvd0JvcmRlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktYXJyYXlsaXN0LWJvcmRlcic7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgICAgICBtb2RFbGVtZW50LmFwcGVuZENoaWxkKGJvcmRlckVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobW9kRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgXG4gICAgb25TZXR0aW5nVXBkYXRlKHNldHRpbmdJZCwgdmFsdWUsIG1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZShtYW5hZ2VyKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlU3R5bGUobWFuYWdlcikge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHRleHRTaGFkb3cgPSB0aGlzLmdldFNldHRpbmdWYWx1ZShtYW5hZ2VyLCAndGV4dC1zaGFkb3cnKTtcbiAgICAgICAgY29uc3QgZm9udFNpemUgPSB0aGlzLmdldFNldHRpbmdWYWx1ZShtYW5hZ2VyLCAnZm9udC1zaXplJyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBgJHtmb250U2l6ZX1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCd3aXRoLXNoYWRvdycsIHRleHRTaGFkb3cpO1xuICAgIH0sXG5cbiAgICBnZXRTZXR0aW5nVmFsdWUobWFuYWdlciwgc2V0dGluZ0lkKSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG1hbmFnZXIuZ2V0KCdBcnJheUxpc3QnKTtcbiAgICAgICAgaWYgKCFtb2R1bGUpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBzZXR0aW5nID0gbW9kdWxlLnNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSBzZXR0aW5nSWQpO1xuICAgICAgICByZXR1cm4gc2V0dGluZyA/IHNldHRpbmcudmFsdWUgOiBudWxsO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5TGlzdDsgIiwgImltcG9ydCBDbGlja0dVSSBmcm9tICcuL21vZHVsZXMvdmlzdWFsL0NsaWNrR1VJJztcbmltcG9ydCBGUFNDb3VudGVyIGZyb20gJy4vbW9kdWxlcy92aXN1YWwvRlBTQ291bnRlcic7XG5pbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4vbW9kdWxlcy92aXN1YWwvSW50ZXJmYWNlJztcbmltcG9ydCBDaGF0IGZyb20gJy4vbW9kdWxlcy92aXN1YWwvQ2hhdCc7XG5pbXBvcnQgS2V5c3Ryb2tlcyBmcm9tICcuL21vZHVsZXMvY29tYmF0L0tleXN0cm9rZXMnO1xuaW1wb3J0IFRvZ2dsZVNwcmludCBmcm9tICcuL21vZHVsZXMvbW92ZW1lbnQvVG9nZ2xlU3ByaW50Jzs7XG5pbXBvcnQgQXJtb3JIVUQgZnJvbSAnLi9tb2R1bGVzL3BsYXllci9Bcm1vckhVRCc7XG5pbXBvcnQgSG90YmFyIGZyb20gJy4vbW9kdWxlcy9wbGF5ZXIvSG90YmFyJztcbmltcG9ydCBDb29yZGluYXRlcyBmcm9tICcuL21vZHVsZXMvdXRpbGl0eS9Db29yZHMnO1xuaW1wb3J0IENQU0NvdW50ZXIgZnJvbSAnLi9tb2R1bGVzL3BsYXllci9DUFNDb3VudGVyJztcbmltcG9ydCBGUFNCb29zdGVyIGZyb20gJy4vbW9kdWxlcy91dGlsaXR5L0ZQU0Jvb3N0ZXInO1xuaW1wb3J0IEFkQmxvY2tlciBmcm9tICcuL21vZHVsZXMvdXRpbGl0eS9BZEJsb2NrZXInO1xuaW1wb3J0IENvbmZpZ3VyYXRpb24gZnJvbSAnLi9Db25maWd1cmF0aW9uJztcbmltcG9ydCBDcm9zc2hhaXIgZnJvbSAnLi9tb2R1bGVzL3Zpc3VhbC9Dcm9zc2hhaXInXG5pbXBvcnQgTm90aWZpY2F0aW9uTWFuYWdlciBmcm9tICcuL05vdGlmaWNhdGlvbk1hbmFnZXInO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi9tb2R1bGVzL3V0aWxpdHkvTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgQXJyYXlMaXN0IGZyb20gJy4vbW9kdWxlcy92aXN1YWwvQXJyYXlMaXN0JztcblxuY2xhc3MgTW9kdWxlTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKHsgdGlja1JhdGUgPSA2MCB9ID0ge30pIHtcbiAgICB0aGlzLm1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5tb2R1bGVEZWZzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtcbiAgICAgICdDb21iYXQnLCAnTW92ZW1lbnQnLCAnUGxheWVyJywgJ1Zpc3VhbCcsICdVdGlsaXR5J1xuICAgIF07XG4gICAgdGhpcy5hdXRvU2F2ZSA9IHRydWU7XG4gICAgdGhpcy5hdXRvTG9hZCA9IHRydWU7IC8qIGRlZmF1bHQgdG8gdHJ1ZSBzbyBjb25maWd1cmF0aW9uIGxvYWRzIG9uIHN0YXJ0dXAgKi9cbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5odWRWaXNpYmlsaXR5SW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IG5ldyBOb3RpZmljYXRpb25NYW5hZ2VyKCk7XG4gICAgXG4gICAgdGhpcy50aWNrSW50ZXJ2YWwgPSAxMDAwIC8gdGlja1JhdGU7XG4gICAgdGhpcy5sYXN0VGljayA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMudGlja2VyID0gdGhpcy50aWNrZXIuYmluZCh0aGlzKTtcbiAgICBcbiAgICB0aGlzLmluaXQoKTtcblxuICAgIHRoaXMuc3RhcnRIdWRWaXNpYmlsaXR5Q2hlY2soKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrZXIpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgaWYgKHRoaXMuYXV0b0xvYWQpIHtcbiAgICAgIHRoaXMubG9hZENvbmZpZ3VyYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5hcHBseUluaXRpYWxTdGF0ZXMoKTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgYWxsTW9kdWxlcyA9IFtcbiAgICAgIENsaWNrR1VJLFxuICAgICAgRlBTQ291bnRlcixcbiAgICAgIEludGVyZmFjZSxcbiAgICAgIENoYXQsXG4gICAgICBLZXlzdHJva2VzLFxuICAgICAgVG9nZ2xlU3ByaW50LFxuICAgICAgQXJtb3JIVUQsXG4gICAvLyAgIEhvdGJhcixcbiAgICAvLyAgQ29vcmRpbmF0ZXMsXG4gICAgICBDUFNDb3VudGVyLFxuICAgICAgRlBTQm9vc3RlcixcbiAgICAgIEFkQmxvY2tlcixcbiAgICAgIENyb3NzaGFpcixcbiAgICAgIE5vdGlmaWNhdGlvbnMsXG4gICAgICBBcnJheUxpc3RcbiAgICBdO1xuICAgIFxuICAgIGFsbE1vZHVsZXMuZm9yRWFjaChtb2QgPT4ge1xuICAgICAgdGhpcy5tb2R1bGVEZWZzLnNldChtb2QubmFtZSwgbW9kKTtcbiAgICAgIHRoaXMuYWRkTW9kdWxlKG1vZClcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1vZHVsZShtb2QpIHtcbiAgICBpZiAoIW1vZCB8fCB0eXBlb2YgbW9kLm5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZHVsZSBtdXN0IGhhdmUgYSB1bmlxdWUgXCJuYW1lXCIgcHJvcGVydHkuJyk7XG4gICAgfVxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB7XG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBjYXRlZ29yeTogJ1V0aWxpdHknLFxuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBvbkVuYWJsZSgpIHt9LFxuICAgICAgb25EaXNhYmxlKCkge30sXG4gICAgICBvblRpY2soKSB7fSxcbiAgICAgIG9uU2V0dGluZ1VwZGF0ZSgpIHt9LFxuICAgICAgc2V0dGluZ3M6IFtdLFxuICAgICAgeDogbW9kLmRlZmF1bHRYICE9PSB1bmRlZmluZWQgPyBtb2QuZGVmYXVsdFggOiBudWxsLFxuICAgICAgeTogbW9kLmRlZmF1bHRZICE9PSB1bmRlZmluZWQgPyBtb2QuZGVmYXVsdFkgOiBudWxsLFxuICAgICAgLi4ubW9kLFxuICAgIH07XG4gICAgXG4gICAgZGVsZXRlIG5vcm1hbGl6ZWQuZGVmYXVsdFg7XG4gICAgZGVsZXRlIG5vcm1hbGl6ZWQuZGVmYXVsdFk7XG5cbiAgICBub3JtYWxpemVkLnNldHRpbmdzID0gbm9ybWFsaXplZC5zZXR0aW5ncy5tYXAocyA9PiAoe1xuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgLi4uc1xuICAgIH0pKTtcblxuICAgIHRoaXMubW9kdWxlcy5zZXQobm9ybWFsaXplZC5uYW1lLCBub3JtYWxpemVkKTtcbiAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgfVxuXG4gIGVuYWJsZShuYW1lKSB7XG4gICAgY29uc3QgbSA9IHRoaXMubW9kdWxlcy5nZXQobmFtZSk7XG4gICAgaWYgKG0gJiYgIW0uZW5hYmxlZCkge1xuICAgICAgbS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRyeSB7IG0ub25FbmFibGUodGhpcyk7IH0gY2F0Y2ggKGVycikgeyBjb25zb2xlLmVycm9yKGBbTW9kdWxlTWFuYWdlcl0gb25FbmFibGUgZXJyb3IgaW4gXCIke25hbWV9XCI6YCwgZXJyKTsgfVxuICAgICAgbS5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zYXZlQ29uZmlndXJhdGlvbigpO1xuICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQgJiYgdGhpcy5nZXQoJ05vdGlmaWNhdGlvbnMnKT8uZW5hYmxlZCkge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuc2hvdyh7XG4gICAgICAgICAgICB0aXRsZTogJ01vZHVsZSBFbmFibGVkJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGA8Yj4ke25hbWV9PC9iPiBoYXMgYmVlbiBlbmFibGVkLmAsXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzYWJsZShuYW1lKSB7XG4gICAgY29uc3QgbSA9IHRoaXMubW9kdWxlcy5nZXQobmFtZSk7XG4gICAgaWYgKG0gJiYgbS5lbmFibGVkKSB7XG4gICAgICBtLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRyeSB7IG0ub25EaXNhYmxlKHRoaXMpOyB9IGNhdGNoIChlcnIpIHsgY29uc29sZS5lcnJvcihgW01vZHVsZU1hbmFnZXJdIG9uRGlzYWJsZSBlcnJvciBpbiBcIiR7bmFtZX1cIjpgLCBlcnIpOyB9XG4gICAgICB0aGlzLnNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgICBpZiAodGhpcy5pbml0aWFsaXplZCAmJiBuYW1lICE9PSAnQ2xpY2tHVUknICYmIHRoaXMuZ2V0KCdOb3RpZmljYXRpb25zJyk/LmVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLnNob3coe1xuICAgICAgICAgICAgdGl0bGU6ICdNb2R1bGUgRGlzYWJsZWQnLFxuICAgICAgICAgICAgbWVzc2FnZTogYDxiPiR7bmFtZX08L2I+IGhhcyBiZWVuIGRpc2FibGVkLmAsXG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZShuYW1lKSB7XG4gICAgY29uc3QgbSA9IHRoaXMubW9kdWxlcy5nZXQobmFtZSk7XG4gICAgaWYgKG0pIHtcbiAgICAgIG0uZW5hYmxlZCA/IHRoaXMuZGlzYWJsZShuYW1lKSA6IHRoaXMuZW5hYmxlKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU1vZHVsZVNldHRpbmcobW9kdWxlTmFtZSwgc2V0dGluZ0lkLCB2YWx1ZSkge1xuICAgIGNvbnN0IG0gPSB0aGlzLm1vZHVsZXMuZ2V0KG1vZHVsZU5hbWUpO1xuICAgIGlmICghbSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc2V0dGluZyA9IG0uc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09IHNldHRpbmdJZCk7XG4gICAgaWYgKHNldHRpbmcpIHtcbiAgICAgIHNldHRpbmcudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgbS5vblNldHRpbmdVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBtLm9uU2V0dGluZ1VwZGF0ZShzZXR0aW5nSWQsIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgW01vZHVsZU1hbmFnZXJdIG9uU2V0dGluZ1VwZGF0ZSBlcnJvciBpbiBcIiR7bW9kdWxlTmFtZX1cIjpgLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTW9kdWxlUG9zaXRpb24obW9kdWxlTmFtZSwgeCwgeSkge1xuICAgIGNvbnN0IG0gPSB0aGlzLm1vZHVsZXMuZ2V0KG1vZHVsZU5hbWUpO1xuICAgIGlmIChtKSB7XG4gICAgICBtLnggPSB4O1xuICAgICAgbS55ID0geTtcbiAgICAgIHRoaXMuc2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICByZXNldE1vZHVsZVNldHRpbmdzKG1vZHVsZU5hbWUpIHtcbiAgICBjb25zdCBtb2REZWYgPSB0aGlzLm1vZHVsZURlZnMuZ2V0KG1vZHVsZU5hbWUpO1xuICAgIGNvbnN0IGN1cnJlbnRNb2QgPSB0aGlzLmdldChtb2R1bGVOYW1lKTtcblxuICAgIGlmICghbW9kRGVmIHx8ICFjdXJyZW50TW9kKSByZXR1cm47XG5cbiAgICBpZiAobW9kRGVmLnNldHRpbmdzKSB7XG4gICAgICBtb2REZWYuc2V0dGluZ3MuZm9yRWFjaChkZWZhdWx0U2V0dGluZyA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlTW9kdWxlU2V0dGluZyhtb2R1bGVOYW1lLCBkZWZhdWx0U2V0dGluZy5pZCwgZGVmYXVsdFNldHRpbmcudmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVNb2R1bGVQb3NpdGlvbihtb2R1bGVOYW1lLCBtb2REZWYueCB8fCBudWxsLCBtb2REZWYueSB8fCBudWxsKTtcbiAgfVxuXG4gIGdldChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kdWxlcy5nZXQobmFtZSk7XG4gIH1cblxuICBsaXN0KCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMubW9kdWxlcy52YWx1ZXMoKSk7XG4gIH1cblxuICBnZXRNb2R1bGVzQnlDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIHJldHVybiB0aGlzLmxpc3QoKS5maWx0ZXIobSA9PiBtLmNhdGVnb3J5ID09PSBjYXRlZ29yeSk7XG4gIH1cblxuICB0aWNrZXIobm93KSB7XG4gICAgY29uc3QgZHQgPSBub3cgLSB0aGlzLmxhc3RUaWNrO1xuICAgIGlmIChkdCA+PSB0aGlzLnRpY2tJbnRlcnZhbCkge1xuICAgICAgdGhpcy5tb2R1bGVzLmZvckVhY2goKG0pID0+IHtcbiAgICAgICAgaWYgKG0uZW5hYmxlZCAmJiB0eXBlb2YgbS5vblRpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0cnkgeyBtLm9uVGljayhkdCwgdGhpcyk7IH0gY2F0Y2ggKGVycikgeyBjb25zb2xlLmVycm9yKGBbTW9kdWxlTWFuYWdlcl0gb25UaWNrIGVycm9yIGluIFwiJHttLm5hbWV9XCI6YCwgZXJyKTsgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGFzdFRpY2sgPSBub3c7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2tlcik7XG4gIH1cblxuICBzYXZlQ29uZmlndXJhdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuYXV0b1NhdmUpIHJldHVybjtcbiAgICB0aGlzLmZvcmNlU2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgfVxuXG4gIGZvcmNlU2F2ZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgbWV0YToge1xuICAgICAgICBhdXRvU2F2ZTogdGhpcy5hdXRvU2F2ZSxcbiAgICAgICAgYXV0b0xvYWQ6IHRoaXMuYXV0b0xvYWQsXG4gICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICBwcmltYXJ5OiBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wcmltYXJ5JykudHJpbSgpLFxuICAgICAgICAgICAgcGFuZWxCYXNlOiBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wYW5lbC1iYXNlJykudHJpbSgpLFxuICAgICAgICAgICAgcGFuZWxPcGFjaXR5OiBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wYW5lbC1vcGFjaXR5JykudHJpbSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1vZF0gb2YgdGhpcy5tb2R1bGVzLmVudHJpZXMoKSkge1xuICAgICAgY29uZmlnW25hbWVdID0ge1xuICAgICAgICBlbmFibGVkOiBtb2QuZW5hYmxlZCxcbiAgICAgICAgeDogbW9kLngsXG4gICAgICAgIHk6IG1vZC55LFxuICAgICAgICBzZXR0aW5nczogbW9kLnNldHRpbmdzLm1hcChzID0+ICh7IGlkOiBzLmlkLCB2YWx1ZTogcy52YWx1ZSB9KSlcbiAgICAgIH07XG4gICAgfVxuICAgIENvbmZpZ3VyYXRpb24uc2F2ZShjb25maWcpO1xuICB9XG5cbiAgbG9hZENvbmZpZ3VyYXRpb24oY29uZmlnVG9Mb2FkKSB7XG4gICAgY29uc3QgY29uZmlnID0gY29uZmlnVG9Mb2FkIHx8IENvbmZpZ3VyYXRpb24ubG9hZCgpO1xuICAgIGlmICghY29uZmlnKSByZXR1cm47XG5cbiAgICBpZiAoY29uZmlnLm1ldGEpIHtcbiAgICAgIHRoaXMuYXV0b1NhdmUgPSBjb25maWcubWV0YS5hdXRvU2F2ZSA/PyB0aGlzLmF1dG9TYXZlO1xuICAgICAgdGhpcy5hdXRvTG9hZCA9IGNvbmZpZy5tZXRhLmF1dG9Mb2FkID8/IHRoaXMuYXV0b0xvYWQ7XG4gICAgICBpZiAoY29uZmlnLm1ldGEudGhlbWUgJiYgY29uZmlnLm1ldGEudGhlbWUucHJpbWFyeSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeScsIGNvbmZpZy5tZXRhLnRoZW1lLnByaW1hcnkpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeS1kYXJrJywgdGhpcy5zaGFkZUNvbG9yKGNvbmZpZy5tZXRhLnRoZW1lLnByaW1hcnksIC0yMCkpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5tZXRhLnRoZW1lICYmIGNvbmZpZy5tZXRhLnRoZW1lLnBhbmVsQmFzZSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcGFuZWwtYmFzZScsIGNvbmZpZy5tZXRhLnRoZW1lLnBhbmVsQmFzZSk7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLm1ldGEudGhlbWUgJiYgY29uZmlnLm1ldGEudGhlbWUucGFuZWxPcGFjaXR5KSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wYW5lbC1vcGFjaXR5JywgY29uZmlnLm1ldGEudGhlbWUucGFuZWxPcGFjaXR5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtb2RDb25maWddIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZykpIHtcbiAgICAgIGlmIChuYW1lID09PSAnbWV0YScpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgbW9kID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICAgIGlmIChtb2QpIHtcbiAgICAgICAgbW9kLnggPSBtb2RDb25maWcueCAhPT0gbnVsbCAmJiBtb2RDb25maWcueCAhPT0gdW5kZWZpbmVkID8gbW9kQ29uZmlnLnggOiBudWxsO1xuICAgICAgICBtb2QueSA9IG1vZENvbmZpZy55ICE9PSBudWxsICYmIG1vZENvbmZpZy55ICE9PSB1bmRlZmluZWQgPyBtb2RDb25maWcueSA6IG51bGw7XG5cbiAgICAgICAgaWYgKG1vZENvbmZpZy5zZXR0aW5ncykge1xuICAgICAgICAgIG1vZENvbmZpZy5zZXR0aW5ncy5mb3JFYWNoKHNhdmVkU2V0dGluZyA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nID0gbW9kLnNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSBzYXZlZFNldHRpbmcuaWQpO1xuICAgICAgICAgICAgaWYgKHNldHRpbmcgJiYgc2V0dGluZy52YWx1ZSAhPT0gc2F2ZWRTZXR0aW5nLnZhbHVlKSB7XG4gICAgICAgICAgICAgIHNldHRpbmcudmFsdWUgPSBzYXZlZFNldHRpbmcudmFsdWU7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbW9kLm9uU2V0dGluZ1VwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBtb2Qub25TZXR0aW5nVXBkYXRlKHNldHRpbmcuaWQsIHNhdmVkU2V0dGluZy52YWx1ZSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBbTW9kdWxlTWFuYWdlcl0gb25TZXR0aW5nVXBkYXRlIGVycm9yIGluIFwiJHtuYW1lfVwiOmAsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFJlc3RvcmUgZW5hYmxlZCBzdGF0ZSAoYW5kIHRyaWdnZXIgb25FbmFibGUpXG4gICAgICAgIGlmIChtb2RDb25maWcuZW5hYmxlZCAmJiAhbW9kLmVuYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLmVuYWJsZShuYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmICghbW9kQ29uZmlnLmVuYWJsZWQgJiYgbW9kLmVuYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLmRpc2FibGUobmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5hcHBseUluaXRpYWxTdGF0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBhcHBseUluaXRpYWxTdGF0ZXMoKSB7XG4gICAgdGhpcy5tb2R1bGVzLmZvckVhY2goKG0pID0+IHtcbiAgICAgIGlmIChtLmVuYWJsZWQgJiYgIW0uX2luaXRpYWxpemVkKSB7XG4gICAgICAgIG0uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuYWJsZShtLm5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0Q29uZmlndXJhdGlvbigpIHtcbiAgICBjb25zdCBjb25maWcgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtb2RdIG9mIHRoaXMubW9kdWxlcy5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbmZpZ1tuYW1lXSA9IHtcbiAgICAgICAgZW5hYmxlZDogbW9kLmVuYWJsZWQsXG4gICAgICAgIHg6IG1vZC54LFxuICAgICAgICB5OiBtb2QueSxcbiAgICAgICAgc2V0dGluZ3M6IG1vZC5zZXR0aW5ncy5tYXAocyA9PiAoeyBpZDogcy5pZCwgdmFsdWU6IHMudmFsdWUgfSkpXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgaW1wb3J0Q29uZmlndXJhdGlvbihjb25maWdTdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29uZmlnID0gSlNPTi5wYXJzZShjb25maWdTdHJpbmcpO1xuICAgICAgQ29uZmlndXJhdGlvbi5zYXZlKGNvbmZpZyk7XG4gICAgICB0aGlzLmxvYWRDb25maWd1cmF0aW9uKGNvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbQ29uZmlndXJhdGlvbl0gRXJyb3IgaW1wb3J0aW5nIGNvbmZpZzonLCBlcnIpO1xuICAgICAgYWxlcnQoJ0ludmFsaWQgY29uZmlndXJhdGlvbiBmaWxlIScpO1xuICAgIH1cbiAgfVxuXG4gIHNoYWRlQ29sb3IoY29sb3IsIHBlcmNlbnQpIHtcbiAgICBsZXQgUiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLDMpLDE2KTtcbiAgICBsZXQgRyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygzLDUpLDE2KTtcbiAgICBsZXQgQiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZyg1LDcpLDE2KTtcblxuICAgIFIgPSBwYXJzZUludChSICogKDEwMCArIHBlcmNlbnQpIC8gMTAwKTtcbiAgICBHID0gcGFyc2VJbnQoRyAqICgxMDAgKyBwZXJjZW50KSAvIDEwMCk7XG4gICAgQiA9IHBhcnNlSW50KEIgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xuXG4gICAgUiA9IChSPDI1NSk/UjoyNTU7ICBcbiAgICBHID0gKEc8MjU1KT9HOjI1NTsgIFxuICAgIEIgPSAoQjwyNTUpP0I6MjU1OyAgXG5cbiAgICBjb25zdCBSUiA9ICgoUi50b1N0cmluZygxNikubGVuZ3RoPT0xKT9cIjBcIitSLnRvU3RyaW5nKDE2KTpSLnRvU3RyaW5nKDE2KSk7XG4gICAgY29uc3QgR0cgPSAoKEcudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrRy50b1N0cmluZygxNik6Ry50b1N0cmluZygxNikpO1xuICAgIGNvbnN0IEJCID0gKChCLnRvU3RyaW5nKDE2KS5sZW5ndGg9PTEpP1wiMFwiK0IudG9TdHJpbmcoMTYpOkIudG9TdHJpbmcoMTYpKTtcblxuICAgIHJldHVybiBcIiNcIitSUitHRytCQjtcbiAgfVxuXG4gIHN0YXJ0SHVkVmlzaWJpbGl0eUNoZWNrKCkge1xuICAgIGlmICh0aGlzLmh1ZFZpc2liaWxpdHlJbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmh1ZFZpc2liaWxpdHlJbnRlcnZhbCk7XG4gICAgfVxuICAgIHRoaXMuaHVkVmlzaWJpbGl0eUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgaG90YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkhvdEJhckdhbWVJdGVtc0NvbnRhaW5lcicpO1xuICAgICAgY29uc3QgaHVkTW9kdWxlcyA9IHRoaXMubGlzdCgpLmZpbHRlcihtID0+IG0uZWxlbWVudCAmJiBtLm5hbWUgIT09ICdDbGlja0dVSScpO1xuXG4gICAgICBpZiAoIWhvdGJhcikge1xuICAgICAgICBodWRNb2R1bGVzLmZvckVhY2gobSA9PiB7XG4gICAgICAgICAgaWYgKG0uZWxlbWVudCAmJiAhbS5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2VyZW5pdHktaGlkZGVuJykpIHtcbiAgICAgICAgICAgIG0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZXJlbml0eS1oaWRkZW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHVkTW9kdWxlcy5mb3JFYWNoKG0gPT4ge1xuICAgICAgICAgIGlmIChtLmVsZW1lbnQgJiYgbS5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2VyZW5pdHktaGlkZGVuJykpIHtcbiAgICAgICAgICAgIG0uZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZXJlbml0eS1oaWRkZW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIDUwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlTWFuYWdlcjtcbiIsICJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBNb2R1bGVNYW5hZ2VyIGZyb20gJy4vTW9kdWxlTWFuYWdlcic7XHJcbmltcG9ydCBQbGF5ZXJUcmFja2VyIGZyb20gJy4vUGxheWVyVHJhY2tlcic7XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBjb25zdCBtYW5hZ2VyID0gbmV3IE1vZHVsZU1hbmFnZXIoKTtcclxuICB3aW5kb3cuU2VyZW5pdHkgPSB7IGluc3RhbmNlOiBtYW5hZ2VyIH07XHJcbiAgbWFuYWdlci5zdGFydCgpO1xyXG4gIFxyXG4gIG5ldyBQbGF5ZXJUcmFja2VyKG1hbmFnZXIpO1xyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGlmICghbWFuYWdlci5ub3RpZmljYXRpb25zKSByZXR1cm47XHJcbiAgICBtYW5hZ2VyLm5vdGlmaWNhdGlvbnMuc2hvdyh7XHJcbiAgICAgIHRpdGxlOiAnV2VsY29tZSB0byBTZXJlbml0eScsXHJcbiAgICAgIG1lc3NhZ2U6ICdQcmVzcyA8Yj5SaWdodCBTaGlmdDwvYj4gdG8gb3BlbiB0aGUgQ2xpY2tHVUkuJyxcclxuICAgICAgdHlwZTogJ2luZm8nLFxyXG4gICAgICBkdXJhdGlvbjogNTAwMFxyXG4gICAgfSk7XHJcbiAgfSwgMTAwMCk7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG5cclxuICAgIGlmIChlLmNvZGUgPT09ICdTaGlmdFJpZ2h0Jykge1xyXG4gICAgICBtYW5hZ2VyLnRvZ2dsZSgnQ2xpY2tHVUknKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn0pKCk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsTUFBTSxXQUFXO0FBQUEsSUFDZixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsSUFDVCxnQkFBZ0I7QUFBQSxJQUNoQixzQkFBc0I7QUFBQSxJQUN0QixjQUFjO0FBQUEsSUFDZCx3QkFBd0I7QUFBQSxJQUN4QixhQUFhO0FBQUEsSUFDYixXQUFXO0FBQUEsSUFDWCxjQUFjO0FBQUEsSUFDZCxpQkFBaUI7QUFBQSxJQUNqQixZQUFZO0FBQUEsSUFFWixTQUFTLFNBQVM7QUFDaEIsVUFBSSxLQUFLLGdCQUFnQixLQUFLLFFBQVM7QUFFdkMsV0FBSyxZQUFZO0FBQ2pCLGVBQVMsS0FBSyxVQUFVLElBQUksb0JBQW9CO0FBQ2hELFVBQUksU0FBUyxvQkFBb0I7QUFDL0IsaUJBQVMsZ0JBQWdCO0FBQUEsTUFDM0I7QUFFQSxVQUFJLENBQUMsU0FBUyxlQUFlLG1CQUFtQixHQUFHO0FBQ2pELGNBQU0sa0JBQWtCLFNBQVMsY0FBYyxNQUFNO0FBQ3JELHdCQUFnQixLQUFLO0FBQ3JCLHdCQUFnQixNQUFNO0FBQ3RCLHdCQUFnQixPQUFPO0FBQ3ZCLGlCQUFTLEtBQUssWUFBWSxlQUFl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QUFNLEtBQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxVQUFRLElBQUcsTUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFFLEVBQUUsU0FBUyxFQUFFO0FBQ3ZFLFlBQU0sS0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLFVBQVEsSUFBRyxNQUFJLEVBQUUsU0FBUyxFQUFFLElBQUUsRUFBRSxTQUFTLEVBQUU7QUFFdkUsYUFBTyxNQUFJLEtBQUcsS0FBRztBQUFBLElBQ25CO0FBQUEsSUFFQSwwQkFBMEI7QUFDeEIsVUFBSSxLQUFLLHVCQUF1QjtBQUM5QixzQkFBYyxLQUFLLHFCQUFxQjtBQUFBLE1BQzFDO0FBQ0EsV0FBSyx3QkFBd0IsWUFBWSxNQUFNO0FBQzdDLGNBQU0sU0FBUyxTQUFTLGNBQWMsMkJBQTJCO0FBQ2pFLGNBQU0sYUFBYSxLQUFLLEtBQUssRUFBRSxPQUFPLE9BQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxVQUFVO0FBRTdFLFlBQUksQ0FBQyxRQUFRO0FBQ1gscUJBQVcsUUFBUSxPQUFLO0FBQ3RCLGdCQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsUUFBUSxVQUFVLFNBQVMsaUJBQWlCLEdBQUc7QUFDakUsZ0JBQUUsUUFBUSxVQUFVLElBQUksaUJBQWlCO0FBQUEsWUFDM0M7QUFBQSxVQUNGLENBQUM7QUFBQSxRQUNILE9BQU87QUFDTCxxQkFBVyxRQUFRLE9BQUs7QUFDdEIsZ0JBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxVQUFVLFNBQVMsaUJBQWlCLEdBQUc7QUFDaEUsZ0JBQUUsUUFBUSxVQUFVLE9BQU8saUJBQWlCO0FBQUEsWUFDOUM7QUFBQSxVQUNGLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRixHQUFHLEdBQUc7QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUVBLE1BQU8sd0JBQVE7OztBQ25YZiw2QkFBMEI7QUFFMUIsR0FBQyxXQUFXO0FBQ1Y7QUFFQSxVQUFNLFVBQVUsSUFBSSxzQkFBYztBQUNsQyxXQUFPLFdBQVcsRUFBRSxVQUFVLFFBQVE7QUFDdEMsWUFBUSxNQUFNO0FBRWQsUUFBSSxxQkFBQUEsUUFBYyxPQUFPO0FBRXpCLGVBQVcsTUFBTTtBQUNmLFVBQUksQ0FBQyxRQUFRLGNBQWU7QUFDNUIsY0FBUSxjQUFjLEtBQUs7QUFBQSxRQUN6QixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFDSCxHQUFHLEdBQUk7QUFFUCxhQUFTLGlCQUFpQixXQUFXLENBQUMsTUFBTTtBQUUxQyxVQUFJLEVBQUUsU0FBUyxjQUFjO0FBQzNCLGdCQUFRLE9BQU8sVUFBVTtBQUFBLE1BQzNCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFFSCxHQUFHOyIsCiAgIm5hbWVzIjogWyJQbGF5ZXJUcmFja2VyIl0KfQo=
