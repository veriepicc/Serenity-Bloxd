
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
/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidGVtcF9zdHlsZVBsdWdpbjpzcmNcXHN0eWxlcy5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXAnKTtcblxuOnJvb3Qge1xuICAtLXByaW1hcnk6ICM1RTcyRUI7IC8qIEEgbmljZSBtb2Rlcm4gYmx1ZSAqL1xuICAtLXByaW1hcnktZGFyazogIzRENURCRjtcbiAgLS1hY2NlbnQ6ICNFNTRCNEI7IC8qIEEgY29udHJhc3RpbmcgYWNjZW50IGNvbG9yICovXG4gIC0tcGFuZWwtYmFzZTogIzFlMjEyOTsgLyogRGVmYXVsdCBkYXJrIGJhY2tncm91bmQgY29sb3IgKi9cbiAgLS1wYW5lbC1vcGFjaXR5OiAwLjg1OyAvKiBEZWZhdWx0IG9wYWNpdHkgKi9cbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMiwgMjgsIDAuOSk7XG4gIC0tcGFuZWw6IHJnYmEoMzAsIDMzLCA0MSwgdmFyKC0tcGFuZWwtb3BhY2l0eSkpO1xuICAtLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAtLWJvcmRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KTtcbiAgLS1zaGFkb3c6IDAgMTJweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLS10ZXh0OiAjRUFFQUVBO1xuICAtLXRleHQtc2Vjb25kYXJ5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIC0tcmFkaXVzOiAxMHB4O1xuICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtLW5vdGlmaWNhdGlvbi1zdWNjZXNzLWJnOiByZ2JhKDYzLCAxNTQsIDg2LCAwLjE1KTtcbiAgLS1ub3RpZmljYXRpb24tc3VjY2Vzcy1pY29uOiAjNWNiODVjO1xuICAtLW5vdGlmaWNhdGlvbi13YXJuaW5nLWJnOiByZ2JhKDIwNSwgMTYzLCA3NCwgMC4xNSk7XG4gIC0tbm90aWZpY2F0aW9uLXdhcm5pbmctaWNvbjogI2YwYWQ0ZTtcbiAgLS1ub3RpZmljYXRpb24tZXJyb3ItYmc6IHJnYmEoMjAxLCA3OSwgNzksIDAuMTUpO1xuICAtLW5vdGlmaWNhdGlvbi1lcnJvci1pY29uOiAjZDk1MzRmO1xuICAtLW5vdGlmaWNhdGlvbi1pbmZvLWJnOiByZ2JhKDk0LCAxMTQsIDIzNSwgMC4xNSk7XG4gIC0tbm90aWZpY2F0aW9uLWluZm8taWNvbjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5zZXJlbml0eS1oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIE92ZXJsYXkgdGhhdCBjb3ZlcnMgdGhlIGVudGlyZSBzY3JlZW4gd2l0aCBoZWF2eSBibHVyICovXG4uc2VyZW5pdHktb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMiwgMTYsIDAuNik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIHotaW5kZXg6IDk5OTg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG4uc2VyZW5pdHktb3ZlcmxheS52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogTWFpbiBjb250YWluZXIgZm9yIHRoZSBVSSAqL1xuLnNlcmVuaXR5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC45NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMDsgLyogUmVtb3ZlIGdhcCBmb3IgYSBtb3JlIGludGVncmF0ZWQgbG9vayAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgei1pbmRleDogOTk5OTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgbWF4LWhlaWdodDogNzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDcwJTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG59XG5cbi5zZXJlbml0eS1jb250YWluZXI6bm90KC5zZXR0aW5ncy12aWV3LWFjdGl2ZSkgLnNlcmVuaXR5LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNykgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxNTAlIDE1MCU7XG4gIGFuaW1hdGlvbjogZmx1aWQtaGVybyA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLnNlcmVuaXR5LWNvbnRhaW5lci52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG59XG5cbi5zZXJlbml0eS1jb250YWluZXIuc2V0dGluZ3Mtdmlldy1hY3RpdmUgLnNlcmVuaXR5LXNpZGViYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIExlZnQgc2lkZWJhciB3aXRoIGNhdGVnb3JpZXMgKi9cbi5zZXJlbml0eS1zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjgsIDM2LCAwLjUpOyAvKiBTbGlnaHRseSBkaWZmZXJlbnQgc2hhZGUgKi9cbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWxvZ28gaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlcmVuaXR5LWxvZ28gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLnNlcmVuaXR5LWNhdGVnb3J5IHtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uc2VyZW5pdHktY2F0ZWdvcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWNhdGVnb3J5LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDk0LCAxMTQsIDIzNSwgMC4zKTtcbn1cblxuLnNlcmVuaXR5LWNhdGVnb3J5LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDIwcHg7IC8qIEVuc3VyZSBpY29ucyBhbGlnbiAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLnNlcmVuaXR5LWNhdGVnb3J5LWljb24gaSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7IC8qIFJlcXVpcmVkIGZvciBGb250IEF3ZXNvbWUgc29saWQgaWNvbnMgKi9cbn1cblxuLyogUmlnaHQgY29udGVudCBhcmVhIHdpdGggbW9kdWxlcyAqL1xuLnNlcmVuaXR5LWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2VyZW5pdHktY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4uc2VyZW5pdHktY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlcmVuaXR5LWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XG59XG5cbi5zZXJlbml0eS1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnNlcmVuaXR5LXNlY3Rpb24taGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktc2VhcmNoLWJhciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5zZXJlbml0eS1zZWFyY2gtYmFyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xufVxuXG4uc2VyZW5pdHktcmlnaHQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWJ0biBpIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICB6LWluZGV4OiAxMDAwMztcbiAgd2lkdGg6IDQ4MHB4O1xuICBhbmltYXRpb246IGZhZGVJbiAwLjFzIGVhc2Utb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1oZWFkZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5zZXJlbml0eS1jb25maWctdG9nZ2xlLXNldHRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJlbml0eS1jb25maWctbWFudWFsLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1jb25maWctbWFudWFsLWFjdGlvbnMgYnV0dG9uIHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1tYW51YWwtYWN0aW9ucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi5zZXJlbml0eS1jb25maWctcG9wdXAtYm9keSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zZXJlbml0eS1jb25maWctcG9wdXAtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1hY3Rpb25zIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLyogVGhpcyB0YXJnZXRzIHRoZSBJbXBvcnQgYnV0dG9uICovXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWFjdGlvbnMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWFjdGlvbnMgYnV0dG9uOmZpcnN0LWNoaWxkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLyogVGhpcyB0YXJnZXRzIHRoZSBFeHBvcnQgYnV0dG9uICovXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWFjdGlvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1hY3Rpb25zIGJ1dHRvbjpsYXN0LWNoaWxkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWZvb3RlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJlbml0eS1jb25maWctYmFjay1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1iYWNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLnNlcmVuaXR5LW1vZHVsZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMjBweCwgMWZyKSk7XG4gIGdhcDogMThweDtcbn1cblxuLyogTW9kdWxlIGNhcmRzICovXG4uc2VyZW5pdHktbW9kdWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBwYWRkaW5nOiAxNnB4O1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VyZW5pdHktbW9kdWxlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uc2VyZW5pdHktbW9kdWxlLW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDRweDsgLyogU2xpZ2h0bHkgc21hbGxlciAqL1xuICBoZWlnaHQ6IDIycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlcmVuaXR5LXRvZ2dsZS1zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktdG9nZ2xlLXNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGxlZnQ6IDJweDtcbiAgYm90dG9tOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLnNlcmVuaXR5LW1vZHVsZS10b2dnbGUuZW5hYmxlZCAuc2VyZW5pdHktdG9nZ2xlLXNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtdG9nZ2xlLmVuYWJsZWQgLnNlcmVuaXR5LXRvZ2dsZS1zbGlkZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc2VyZW5pdHktbW9kdWxlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKiBOZXcgY29udHJvbHMgZm9yIHNldHRpbmdzIGJ1dHRvbiBuZXh0IHRvIHRoZSB0b2dnbGUgKi9cbi5zZXJlbml0eS1tb2R1bGUtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtc2V0dGluZ3MtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2VyZW5pdHktbW9kdWxlOmhvdmVyIC5zZXJlbml0eS1tb2R1bGUtc2V0dGluZ3MtYnRuIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlcmVuaXR5LW1vZHVsZS1zZXR0aW5ncy1idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLyogSGVhZGVyIGZvciB0aGUgZGVkaWNhdGVkIHNldHRpbmdzIHZpZXcgKi9cbi5zZXJlbml0eS1zZXR0aW5ncy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5zZXJlbml0eS1iYWNrLWJ0biB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBhbmVsKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZXJlbml0eS1iYWNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLyogSFVEIEVkaXRvciBzdHlsZXMgKi9cbi5zZXJlbml0eS1odWQtZWRpdG9yLWJ0biBpIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnNlcmVuaXR5LWh1ZC1lZGl0b3Itb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMiwgMTYsIDAuOCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgei1pbmRleDogMTAwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktaHVkLWdyaWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjA1KSAxcHgsIHRyYW5zcGFyZW50IDFweCksXG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc2VyZW5pdHktaHVkLWRvbmUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoOTQsIDExNCwgMjM1LCAwLjQpO1xufVxuXG4uc2VyZW5pdHktaHVkLWRvbmUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLyogSFVEIFNldHRpbmdzIFBvcHVwICovXG4uc2VyZW5pdHktaHVkLXNldHRpbmdzLXBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4O1xuICB6LWluZGV4OiAxMDAwMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMXMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG59XG5cbi8qIE5ldyBoZWFkZXIgZm9yIHRoZSBIVUQgc2V0dGluZ3MgcG9wdXAgKi9cbi5zZXJlbml0eS1odWQtcG9wdXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNlcmVuaXR5LWh1ZC1wb3B1cC1jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlcmVuaXR5LWh1ZC1wb3B1cC1jbG9zZS1idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5zZXJlbml0eS1odWQtcG9wdXAtYm9keSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1odWQtcG9wdXAtZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5zZXJlbml0eS1odWQtcG9wdXAtcmVzZXQtYnRuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG5cbi5zZXJlbml0eS1odWQtcG9wdXAtcmVzZXQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1mb290ZXIge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWJhY2stYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5zZXJlbml0eS1jb25maWctYmFjay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi8qIENvbXBhY3Qgc3R5bGVzIGZvciBzZXR0aW5ncyBpbnNpZGUgdGhlIEhVRCBwb3B1cCAqL1xuLnNlcmVuaXR5LWh1ZC1zZXR0aW5ncy1wb3B1cCAuc2VyZW5pdHktc2V0dGluZyB7XG4gIHBhZGRpbmc6IDRweCAycHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zZXJlbml0eS1odWQtc2V0dGluZ3MtcG9wdXAgLnNlcmVuaXR5LXNldHRpbmctbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zZXJlbml0eS1odWQtc2V0dGluZ3MtcG9wdXAgLnNlcmVuaXR5LXNldHRpbmctZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VyZW5pdHktbW9kdWxlLXNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uc2VyZW5pdHktc2V0dGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LXNldHRpbmc6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zZXJlbml0eS1zZXR0aW5nLWluZm8ge1xuICBmbGV4OiAxO1xufVxuXG4uc2VyZW5pdHktc2V0dGluZy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLnNlcmVuaXR5LXNldHRpbmctZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG1hcmdpbjogNHB4IDAgMCAwO1xufVxuXG4uc2VyZW5pdHktc2V0dGluZy1jb250cm9sIHtcbiAgZmxleC1iYXNpczogNDAlO1xufVxuXG4vKiBHZW5lcmljIGlucHV0IHN0eWxlcyAqL1xuLnNlcmVuaXR5LXNlbGVjdCwgLnNlcmVuaXR5LXRleHQtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uc2VyZW5pdHktc2VsZWN0OmZvY3VzLCAuc2VyZW5pdHktdGV4dC1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbn1cblxuLyogQ2hlY2tib3ggc3BlY2lmaWMgc3R5bGVzICovXG4uc2VyZW5pdHktY2hlY2tib3gge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5zZXJlbml0eS1jaGVja2JveDpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLnNlcmVuaXR5LWNoZWNrYm94OmNoZWNrZWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcdTI3MTMnO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vKiBTbGlkZXIgc3BlY2lmaWMgc3R5bGVzICovXG4uc2VyZW5pdHktc2xpZGVyIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbn1cblxuLnNlcmVuaXR5LXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFja2dyb3VuZCk7XG59XG5cbi5zZXJlbml0eS1zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQpO1xufVxuXG4vKiBDdXN0b20gQ29sb3IgUGlja2VyIHdpdGggQWxwaGEgU3VwcG9ydCAqL1xuLnNlcmVuaXR5LWNvbG9yLXBpY2tlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uc2VyZW5pdHktY29sb3Itc3dhdGNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIENoZWNrZXJib2FyZCBiYWNrZ3JvdW5kIHRvIHNob3cgdHJhbnNwYXJlbmN5ICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IFxuICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzMzMyAyNSUsIHRyYW5zcGFyZW50IDI1JSksIFxuICAgIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMzMzMgMjUlLCB0cmFuc3BhcmVudCAyNSUpLCBcbiAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDc1JSwgIzMzMyA3NSUpLCBcbiAgICBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB0cmFuc3BhcmVudCA3NSUsICMzMzMgNzUlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMnB4IDEycHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMCA2cHgsIDZweCAtNnB4LCAtNnB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VyZW5pdHktY29sb3Itc3dhdGNoOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cblxuLnNlcmVuaXR5LWNvbG9yLXBvcHVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDA1OyAvKiBBYm92ZSBvdGhlciBVSSAqL1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuLnNlcmVuaXR5LWNvbG9yLXBvcHVwIGlucHV0W3R5cGU9XCJjb2xvclwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZXJlbml0eS1jb2xvci1wb3B1cCBpbnB1dFt0eXBlPVwiY29sb3JcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktY29sb3ItcG9wdXAgaW5wdXRbdHlwZT1cImNvbG9yXCJdOjotbW96LWNvbG9yLXN3YXRjaCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWNvbG9yLXBvcHVwIC5zZXJlbml0eS1zbGlkZXIge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIENvbG9yIFBpY2tlciBzcGVjaWZpYyBzdHlsZXMgKi9cbi5zZXJlbml0eS1jb2xvci1waWNrZXIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VyZW5pdHktY29sb3ItcGlja2VyOjotd2Via2l0LWNvbG9yLXN3YXRjaCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc2VyZW5pdHktY29sb3ItcGlja2VyOjotbW96LWNvbG9yLXN3YXRjaCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY3BzLWNvdW50ZXItZGlzcGxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5NztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5zZXJlbml0eS1pbnRlcmZhY2UtZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNlcmVuaXR5LWludGVyZmFjZS1sb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLCB2YXIoLS1wcmltYXJ5KSk7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNlcmVuaXR5LWludGVyZmFjZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJlbml0eS1pbnRlcmZhY2UtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IsIHZhcigtLXByaW1hcnkpKTtcbn1cblxuLnNlcmVuaXR5LWludGVyZmFjZS1nYW1lbW9kZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zZXJlbml0eS1pbnRlcmZhY2UtbG9iYnkge1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi8qIENoYXQgTW9kdWxlIFN0eWxlcyAqL1xuLnNlcmVuaXR5LWNoYXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzUwcHg7XG4gIG1heC13aWR0aDogMjUlO1xuICB6LWluZGV4OiAxMDAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5zZXJlbml0eS1jaGF0LW1lc3NhZ2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXJlbml0eS1jaGF0LW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAycHggMDtcbiAgZm9udC1zaXplOiB2YXIoLS1jaGF0LWZvbnQtc2l6ZSwgMTRweCk7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogOHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4uc2VyZW5pdHktbWVzc2FnZS1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zZXJlbml0eS1tZXNzYWdlLW93bi1uYW1lIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgI0U1NEI0QikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNlcmVuaXR5LW1lc3NhZ2UtdGFnIHtcbiAgY29sb3I6ICNhOTcwZTMgIWltcG9ydGFudDsgLyogQSBuaWNlIHB1cnBsZSAqL1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2VyZW5pdHktbWVzc2FnZS10aW1lc3RhbXAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5zZXJlbml0eS1jaGF0LWlucHV0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2VyZW5pdHktY2hhdC1pbnB1dCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBmb250LXNpemU6IHZhcigtLWNoYXQtZm9udC1zaXplLCAxNHB4KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uc2VyZW5pdHktY2hhdC1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi8qIEdsb2JhbCBzdHlsZXMgKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogJ0ludGVyJywgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keS5zZXJlbml0eS1uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBFbnN1cmUgdGhlIGZvbnQgaXMgbG9hZGVkICovXG5cbi8qIEtleXN0cm9rZXMgTW9kdWxlICovXG4ua2V5c3Ryb2tlcy1kaXNwbGF5IHtcbiAgLS1rZXktc2l6ZTogNTJweDtcbiAgLS1rZXktcGFkZGluZzogMnB4O1xuICAtLWtleS1yYWRpdXM6IDhweDtcbiAgLS1rZXktYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIC0ta2V5LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLS1rZXktc2hhZG93LXByZXNzZWQ6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC0ta2V5LXRyYW5zaXRpb246IGFsbCAwLjEycyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIC0tYmx1ci1pbnRlbnNpdHk6IDEwcHg7XG4gIC0ta2V5LWJnOiB2YXIoLS1wYW5lbCk7XG4gIC0ta2V5LWFjdGl2ZS1iZzogdmFyKC0tcHJpbWFyeSk7XG4gIC0ta2V5LXRleHQ6IHZhcigtLXRleHQpO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbiAgei1pbmRleDogOTk5NztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ua2V5c3Ryb2tlcy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5rZXlzdHJva2VzLWtleSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IHZhcigtLWtleS1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1rZXktc2l6ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0ta2V5LXRleHQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1rZXktcmFkaXVzKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBhbmVsKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0ta2V5LXRyYW5zaXRpb24pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWtleS1zaGFkb3cpO1xufVxuXG4ua2V5c3Ryb2tlcy1rZXk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZTtcbiAgei1pbmRleDogLTE7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWtleS1yYWRpdXMpO1xufVxuXG4ua2V5c3Ryb2tlcy1rZXkuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWtleS1zaGFkb3ctcHJlc3NlZCksIGluc2V0IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5rZXlzdHJva2VzLWtleS5hY3RpdmU6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5rZXlzdHJva2VzLWtleS5zcGFjZS1rZXkge1xuICB3aWR0aDogY2FsYyh2YXIoLS1rZXktc2l6ZSkgKiAzICsgMTBweCk7XG59XG5cbi5rZXlzdHJva2VzLXJvdy5tb3VzZS1yb3cge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5rZXlzdHJva2VzLWtleS5tb3VzZS1idXR0b24ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IGNhbGMoKHZhcigtLWtleS1zaXplKSAqIDMgKyAxMHB4IC0gNXB4KSAvIDIpO1xufVxuXG4ua2V5c3Ryb2tlcy1kaXNwbGF5Om5vdCguc2hvdy1tb3VzZSkgLm1vdXNlLXJvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5rZXlzdHJva2VzLWRpc3BsYXkubm8tYW5pbWF0aW9ucyAua2V5c3Ryb2tlcy1rZXkge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIE5vdGlmaWNhdGlvbiBTeXN0ZW0gKi9cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiAxMDAwNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBhbmVsKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGdhcDogMTJweDtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi5leGl0aW5nIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1pY29uLXdyYXBwZXIge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLWluZm8tYmcpO1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLWluZm8taWNvbik7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24taWNvbiBzdmcge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLW1lc3NhZ2UgYiB7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1jbG9zZTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi10aW1lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1pbmZvLWljb24pO1xuICBvcGFjaXR5OiAwLjY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuXG4vKiBOb3RpZmljYXRpb24gVHlwZXMgKi9cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tc3VjY2VzcyAuc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24td3JhcHBlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1zdWNjZXNzLWJnKTsgfVxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1zdWNjZXNzIC5zZXJlbml0eS1ub3RpZmljYXRpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24tc3VjY2Vzcy1pY29uKTsgfVxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1zdWNjZXNzIC5zZXJlbml0eS1ub3RpZmljYXRpb24tdGltZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24tc3VjY2Vzcy1pY29uKTsgfVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLXdhcm5pbmcgLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1pY29uLXdyYXBwZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24td2FybmluZy1iZyk7IH1cbi5zZXJlbml0eS1ub3RpZmljYXRpb24td2FybmluZyAuc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24geyBjb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLXdhcm5pbmctaWNvbik7IH1cbi5zZXJlbml0eS1ub3RpZmljYXRpb24td2FybmluZyAuc2VyZW5pdHktbm90aWZpY2F0aW9uLXRpbWVyIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLXdhcm5pbmctaWNvbik7IH1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1lcnJvciAuc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24td3JhcHBlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1lcnJvci1iZyk7IH1cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tZXJyb3IgLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1lcnJvci1pY29uKTsgfVxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1lcnJvciAuc2VyZW5pdHktbm90aWZpY2F0aW9uLXRpbWVyIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLWVycm9yLWljb24pOyB9XG5cbi8qIEFuaW1hdGlvbnMgKi9cbkBrZXlmcmFtZXMgc2VyZW5pdHktbm90aWZpY2F0aW9uLWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2VyZW5pdHktbm90aWZpY2F0aW9uLW91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxufVxuXG4vKiBBcnJheUxpc3QgTW9kdWxlIC0gdjIgKi9cbi5zZXJlbml0eS1hcnJheWxpc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk1O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnNlcmVuaXR5LWFycmF5bGlzdC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7IC8qIE1ha2Ugc3BhY2UgZm9yIGJvcmRlciAqL1xufVxuXG4uc2VyZW5pdHktYXJyYXlsaXN0LWJvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNHB4O1xufVxuXG4uc2VyZW5pdHktYXJyYXlsaXN0LWNvbnRhaW5lci53aXRoLXNoYWRvdyAuc2VyZW5pdHktYXJyYXlsaXN0LWl0ZW0ge1xuICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC42KTtcbn1cblxuLyogTmV3IENvbmZpZyBTY3JlZW4gU3R5bGVzICovXG4uc2VyZW5pdHktY29uZmlnLXNjcmVlbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRhYiB7XG4gICAgcGFkZGluZzogOHB4IDE4cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5zZXJlbml0eS1jb25maWctdGFiLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDk0LCAxMTQsIDIzNSwgMC4zKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1jbG9zZS1idG4ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1jbG9zZS1idG46aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi5zZXJlbml0eS1jb25maWctY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNlcmVuaXR5LXBsYWNlaG9sZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBUaGVtZSBFZGl0b3IgU3R5bGVzICovXG4uc2VyZW5pdHktdGhlbWUtZWRpdG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4uc2VyZW5pdHktc2VjdGlvbi1zdWJoZWFkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktc3ViaGVhZGVyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5zZXJlbml0eS1zdWJoZWFkZXItc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uc2VyZW5pdHktdGhlbWUtY29udHJvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktdGhlbWUtY29sb3ItcGlja2VyIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZXJlbml0eS10aGVtZS1jb2xvci1waWNrZXI6Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLnNlcmVuaXR5LXRoZW1lLWNvbG9yLXBpY2tlcjo6LW1vei1jb2xvci1zd2F0Y2gge1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5zZXJlbml0eS10aGVtZXMtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMjBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4uc2VyZW5pdHktdGhlbWUtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5zZXJlbml0eS10aGVtZS1jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlcmVuaXR5LXRoZW1lLXByZXZpZXcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG5cbi8qIE5ldyBDb25maWcgU2NyZWVuIFN0eWxlcyAqL1xuLnNlcmVuaXR5LWNvbmZpZy1zY3JlZW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRhYnMtdmVydGljYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5zZXJlbml0eS1jb25maWctdGFiIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5zZXJlbml0eS1jb25maWctdGFiLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDk0LCAxMTQsIDIzNSwgMC4zKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWItY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWNvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIENvbmZpZyBFZGl0b3IgU3R5bGVzICovXG4uc2VyZW5pdHktY29uZmlnLWVkaXRvciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiA0MHB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjVweDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1jb250cm9scy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10b2dnbGUtc2V0dGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5zZXJlbml0eS1jb25maWctbWFudWFsLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5zZXJlbml0eS1idG4ge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uc2VyZW5pdHktYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlcmVuaXR5LWJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VyZW5pdHktYnRuLXByaW1hcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG59XG5cbi5zZXJlbml0eS1pbXBvcnQtZXhwb3J0LWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1pbXBvcnQtZXhwb3J0IHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc2VyZW5pdHktaW1wb3J0LWV4cG9ydC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4vKiBUaGVtZSBFZGl0b3IgU3R5bGVzICovXG4uc2VyZW5pdHktdGhlbWUtZWRpdG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4vKiBIb3RiYXIgTW9kdWxlIFN0eWxlcyAqL1xuLnNlcmVuaXR5LWhvdGJhci13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7IC8qIEFkZCBzb21lIHNwYWNlIGJldHdlZW4gYXVyYSBiYXIgYW5kIGhvdGJhciAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2VyZW5pdHktaG90YmFyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uc2VyZW5pdHktaG90YmFyLWZpbGxlciB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1heC13aWR0aDogMjBweDtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogdmFyKC0taG90YmFyLXNsb3Qtc3BhY2luZyk7XG59XG5cbi5zZXJlbml0eS1ob3RiYXItc2xvdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiB2YXIoLS1ob3RiYXItc2xvdC1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWhvdGJhci1zbG90LXNpemUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLW91dDtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1zbG90LnNlbGVjdGVkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5zZXJlbml0eS1ob3RiYXItaXRlbS1pbWcge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcbn1cblxuLnNlcmVuaXR5LXNsb3QtbnVtYmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAycHg7XG4gICAgcmlnaHQ6IDRweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4ICMwMDA7XG59XG5cbi5zZXJlbml0eS1zbG90LWFtb3VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjMDAwO1xufVxuXG4uc2VyZW5pdHktaG90YmFyLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1idXR0b24taWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1rZXktaGVscGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMTJweDtcbiAgICByaWdodDogLThweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaG90YmFyLXN0eWxlLWNvbXBhY3QgLnNlcmVuaXR5LWhvdGJhci1zbG90IHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luOiAwIDFweCAhaW1wb3J0YW50O1xufVxuXG4uaG90YmFyLXN0eWxlLWNvbXBhY3QgLnNlcmVuaXR5LWhvdGJhci1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmhvdGJhci1zdHlsZS1tb2Rlcm4gLnNlcmVuaXR5LWhvdGJhci1zbG90IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgMzAsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG59XG5cbi5ob3RiYXItc3R5bGUtbW9kZXJuIC5zZXJlbml0eS1ob3RiYXItc2xvdC5zZWxlY3RlZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSg5NCwgMTE0LCAyMzUsIDAuMyk7XG59XG5cbi5ob3RiYXItc3R5bGUtbW9kZXJuIC5zZXJlbml0eS1ob3RiYXItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgMzAsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4vKiBBdXJhIEJhciBTdHlsZXMgKi9cbi5zZXJlbml0eS1hdXJhLWJhciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VyZW5pdHktYXVyYS1iYXItYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNlcmVuaXR5LWF1cmEtYmFyLXByb2dyZXNzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnNlcmVuaXR5LWF1cmEtYmFyLXRleHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggIzAwMDtcbn1cblxuLyogRmx1aWQgSGVybyBBbmltYXRpb24gKi9cbkBrZXlmcmFtZXMgZmx1aWQtaGVybyB7XG4gIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlOyB9XG4gIDUwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7IH1cbn1cblxuLnNlcmVuaXR5LXRoZW1lLXBhbmVsLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlcmVuaXR5LXRoZW1lLWNvbnRyb2wtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbn1cblxuLnNlcmVuaXR5LXRoZW1lLWNvbnRyb2wtZ3JvdXAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFFQTtBQUNFLGFBQVc7QUFDWCxrQkFBZ0I7QUFDaEIsWUFBVTtBQUNWLGdCQUFjO0FBQ2QsbUJBQWlCO0FBQ2pCLGdCQUFjLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDL0IsV0FBUyxL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QyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDcEMsY0FBWSxVQUFVLEtBQUs7QUFDL0I7QUFFQSxDQVRDLG9CQVNvQixDQS9GcEIsb0JBK0Z5QyxDQWpGcEI7QUFrRmxCLGFBQVcsV0FBVztBQUN0QixjQUFZLEVBQUUsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDOUM7QUFFQSxDQWRDLG9CQWNvQixDQXBEcEI7QUFxREcsb0JBQWtCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDbkMsaUJBQWU7QUFDZixtQkFBaUIsS0FBSztBQUN0QiwyQkFBeUIsS0FBSztBQUM5QixjQUFZLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDeEM7QUFHQSxDQUFDO0FBQ0csU0FBTztBQUNQLFVBQVE7QUFDUixvQkFBa0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxVQUFRLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3RDLGlCQUFlO0FBQ2YsV0FBUztBQUNULGVBQWE7QUFDYixXQUFTO0FBQ1QsWUFBVTtBQUNWLFlBQVU7QUFDZDtBQUVBLENBQUM7QUFDRyxZQUFVO0FBQ1YsUUFBTTtBQUNOLE9BQUs7QUFDTCxVQUFRO0FBQ1IsU0FBTztBQUNQLGlCQUFlO0FBQ2YsWUFBVTtBQUNkO0FBRUEsQ0FBQztBQUNHLFVBQVE7QUFDUixvQkFBa0IsSUFBSTtBQUN0QixjQUFZLE1BQU0sS0FBSztBQUMzQjtBQUVBLENBQUM7QUFDRyxZQUFVO0FBQ1YsV0FBUztBQUNULFNBQU87QUFDUCxjQUFZO0FBQ1osU0FBTztBQUNQLGVBQWE7QUFDYixhQUFXO0FBQ1gsZUFBYSxFQUFFLEVBQUUsSUFBSTtBQUN6QjtBQUdBLFdBOXJEYTtBQStyRFg7QUFBSyx5QkFBcUIsR0FBRztBQUFLO0FBQ2xDO0FBQU0seUJBQXFCLEtBQUs7QUFBSztBQUNyQztBQUFPLHlCQUFxQixHQUFHO0FBQUs7QUFDdEM7QUFFQSxDQUFDO0FBQ0csV0FBUztBQUNULHlCQUF1QixJQUFJO0FBQzNCLE9BQUs7QUFDTCxlQUFhO0FBQ2pCO0FBRUEsQ0FBQztBQUNHLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNUO0FBRUEsQ0FOQyw2QkFNNkI7QUFDMUIsYUFBVztBQUNYLGVBQWE7QUFDYixTQUFPLElBQUk7QUFDZjsiLAogICJuYW1lcyI6IFtdCn0K */
`;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
})();

(() => {
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
      <h1>Serenity</h1>
      <span>CLIENT v1.1</span>
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
      const hudEditorBtn = document.createElement("div");
      hudEditorBtn.className = "serenity-category serenity-hud-editor-btn";
      hudEditorBtn.innerHTML = `<svg class="serenity-category-icon" style="width: 1.2em; margin-right: 12px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/></svg> HUD Editor`;
      hudEditorBtn.addEventListener("click", () => {
        this.isEditingHUD = true;
        this.renderHUDeditor(manager);
      });
      sidebar.appendChild(hudEditorBtn);
      const configBtn = document.createElement("div");
      configBtn.className = "serenity-category serenity-config-btn";
      configBtn.innerHTML = `<svg class="serenity-category-icon" style="width: 1.2em; margin-right: 12px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg> Settings`;
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
      this.patchCanvas();
      this.updatePosition();
    },
    onSettingUpdate() {
      this.applyStyles();
      this.updateDisplay();
    },
    patchCanvas() {
      if (this.sourceCanvas && this.sourceCanvas._serenityCoordsPatched) return;
      const canvas = document.querySelector(".CoordinateCanvas");
      if (canvas) {
        this.sourceCanvas = canvas;
        const ctx = this.sourceCanvas.getContext("2d");
        if (ctx.fillText._isSerenityCoordsWrapper) return;
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
      }
    },
    unpatchCanvas() {
      if (this.sourceCanvas && this.originalFillText) {
        this.sourceCanvas.getContext("2d").fillText = this.originalFillText;
        this.originalFillText = null;
        this.sourceCanvas._serenityCoordsPatched = false;
        delete this.sourceCanvas.getContext("2d").fillText._isSerenityCoordsWrapper;
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
        Coords_default,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL21vZHVsZXMvdmlzdWFsL0NsaWNrR1VJLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9GUFNDb3VudGVyLmpzIiwgIi4uL3NyYy91dGlscy5qcyIsICIuLi9zcmMvbW9kdWxlcy92aXN1YWwvSW50ZXJmYWNlLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9DaGF0LmpzIiwgIi4uL3NyYy9tb2R1bGVzL2NvbWJhdC9LZXlzdHJva2VzLmpzIiwgIi4uL3NyYy9tb2R1bGVzL21vdmVtZW50L1RvZ2dsZVNwcmludC5qcyIsICIuLi9zcmMvbW9kdWxlcy9wbGF5ZXIvQXJtb3JIVUQuanMiLCAiLi4vc3JjL21vZHVsZXMvdXRpbGl0eS9Db29yZHMuanMiLCAiLi4vc3JjL21vZHVsZXMvcGxheWVyL0NQU0NvdW50ZXIuanMiLCAiLi4vc3JjL21vZHVsZXMvdXRpbGl0eS9GUFNCb29zdGVyLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3V0aWxpdHkvQWRCbG9ja2VyLmpzIiwgIi4uL3NyYy9Db25maWd1cmF0aW9uLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9Dcm9zc2hhaXIuanMiLCAiLi4vc3JjL05vdGlmaWNhdGlvbk1hbmFnZXIuanMiLCAiLi4vc3JjL21vZHVsZXMvdXRpbGl0eS9Ob3RpZmljYXRpb25zLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9BcnJheUxpc3QuanMiLCAiLi4vc3JjL01vZHVsZU1hbmFnZXIuanMiLCAiLi4vc3JjL1BsYXllclRyYWNrZXIuanMiLCAiLi4vc3JjL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBDbGlja0dVSSA9IHtcbiAgbmFtZTogJ0NsaWNrR1VJJyxcbiAgY2F0ZWdvcnk6ICdWaXN1YWwnLFxuICBkZXNjcmlwdGlvbjogJ1RoZSBtYWluIHVzZXIgaW50ZXJmYWNlIGZvciB0aGUgY2xpZW50LicsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIGVsZW1lbnQ6IG51bGwsXG4gIG92ZXJsYXk6IG51bGwsXG4gIGFjdGl2ZUNhdGVnb3J5OiAnVmlzdWFsJyxcbiAgYWN0aXZlU2V0dGluZ3NNb2R1bGU6IG51bGwsXG4gIGlzRWRpdGluZ0hVRDogZmFsc2UsXG4gIGFjdGl2ZUhVRFNldHRpbmdzUG9wdXA6IG51bGwsXG4gIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgaXNHdWlPcGVuOiBmYWxzZSxcbiAgaXNDbGVhbmluZ1VwOiBmYWxzZSxcbiAgYWN0aXZlQ29uZmlnVGFiOiAnVGhlbWVzJyxcbiAgYWN0aXZlVmlldzogJ21vZHVsZXMnLFxuXG4gIG9uRW5hYmxlKG1hbmFnZXIpIHtcbiAgICBpZiAodGhpcy5pc0NsZWFuaW5nVXAgfHwgdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICB0aGlzLmlzR3VpT3BlbiA9IHRydWU7IFxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc2VyZW5pdHktbm8tc2Nyb2xsJyk7XG4gICAgaWYgKGRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XG4gICAgfVxuXG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udC1hd2Vzb21lLWxpbmsnKSkge1xuICAgICAgY29uc3QgZm9udEF3ZXNvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgZm9udEF3ZXNvbWVMaW5rLmlkID0gJ2ZvbnQtYXdlc29tZS1saW5rJztcbiAgICAgIGZvbnRBd2Vzb21lTGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICBmb250QXdlc29tZUxpbmsuaHJlZiA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi43LjIvY3NzL2FsbC5taW4uY3NzJztcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZm9udEF3ZXNvbWVMaW5rKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5jcmVhdGVHVUkobWFuYWdlcik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vdmVybGF5KSB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgaWYgKHRoaXMuZWxlbWVudCkgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9LCA1MCk7XG4gIH0sXG5cbiAgb25EaXNhYmxlKG1hbmFnZXIpIHtcbiAgICB0aGlzLmlzR3VpT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuZXhpdEhVRGVkaXRvcihtYW5hZ2VyKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlcmVuaXR5LW5vLXNjcm9sbCcpO1xuXG4gICAgY29uc3QgZ2FtZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2EtY2FudmFzJyk7XG4gICAgaWYgKGdhbWVDYW52YXMgJiYgIWRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCkge1xuICAgICAgZ2FtZUNhbnZhcy5yZXF1ZXN0UG9pbnRlckxvY2soKTtcbiAgICAgIGdhbWVDYW52YXMuY2xpY2soKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gIH0sXG5cbiAgY2xlYW51cCgpIHtcbiAgICBpZiAodGhpcy5vdmVybGF5ICYmICF0aGlzLmlzQ2xlYW5pbmdVcCkge1xuICAgICAgdGhpcy5pc0NsZWFuaW5nVXAgPSB0cnVlO1xuICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5KSBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMub3ZlcmxheSk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0NsZWFuaW5nVXAgPSBmYWxzZTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlcmVuaXR5LW5vLXNjcm9sbCcpO1xuXG4gICAgICAgIGNvbnN0IGZvbnRBd2Vzb21lTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb250LWF3ZXNvbWUtbGluaycpO1xuICAgICAgICBpZiAoZm9udEF3ZXNvbWVMaW5rKSB7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChmb250QXdlc29tZUxpbmspO1xuICAgICAgICB9XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfSxcblxuICBjcmVhdGVHVUkobWFuYWdlcikge1xuICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMub3ZlcmxheS5jbGFzc05hbWUgPSAnc2VyZW5pdHktb3ZlcmxheSc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb250YWluZXInO1xuICAgIFxuICAgIGNvbnN0IHNpZGViYXIgPSB0aGlzLmNyZWF0ZVNpZGViYXIobWFuYWdlcik7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNyZWF0ZUNvbnRlbnQobWFuYWdlcik7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfSxcblxuICBjcmVhdGVTaWRlYmFyKG1hbmFnZXIpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2lkZWJhcic7XG4gICAgXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWxvZ28nO1xuICAgIGxvZ28uaW5uZXJIVE1MID0gYFxuICAgICAgPGgxPlNlcmVuaXR5PC9oMT5cbiAgICAgIDxzcGFuPkNMSUVOVCB2MS4xPC9zcGFuPlxuICAgIGA7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gbWFuYWdlci5jYXRlZ29yaWVzO1xuICAgIFxuICAgIGNvbnN0IGNhdGVnb3J5SWNvbnMgPSB7XG4gICAgICAnVmlzdWFsJzogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiIHN0eWxlPVwid2lkdGg6IDEuMmVtOyBoZWlnaHQ6IDEuMmVtOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBtYXJnaW4tcmlnaHQ6IDEycHg7XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjg4IDMyYy04MC44IDAtMTQ1LjUgMzYuOC0xOTIuNiA4MC42QzQ4LjYgMTU2IDE3LjMgMjA4IDIuNSAyNDMuN2MtMy4zIDcuOS0zLjMgMTYuNyAwIDI0LjZDMTcuMyAzMDQgNDguNiAzNTYgOTUuNCAzOTkuNEMxNDIuNSA0NDMuMiAyMDcuMiA0ODAgMjg4IDQ4MHMxNDUuNS0zNi44IDE5Mi42LTgwLjZjNDYuOC00My41IDc4LjEtOTUuNCA5My0xMzEuMWMzLjMtNy45IDMuMy0xNi43IDAtMjQuNmMtMTQuOS0zNS43LTQ2LjItODcuNy05My0xMzEuMUM0MzMuNSA2OC44IDM2OC44IDMyIDI4OCAzMnpNMTQ0IDI1NmExNDQgMTQ0IDAgMSAxIDI4OCAwIDE0NCAxNDQgMCAxIDEgLTI4OCAwem0xNDQtNjRjMCAzNS4zLTI4LjcgNjQtNjQgNjRjLTcuMSAwLTEzLjktMS4yLTIwLjMtMy4zYy01LjUtMS44LTExLjkgMS42LTExLjcgNy40Yy4zIDYuOSAxLjMgMTMuOCAzLjIgMjAuN2MxMy43IDUxLjIgNjYuNCA4MS42IDExNy42IDY3LjlzODEuNi02Ni40IDY3LjktMTE3LjZjLTExLjEtNDEuNS00Ny44LTY5LjQtODguNi03MS4xYy01LjgtLjItOS4yIDYuMS03LjQgMTEuN2MyLjEgNi40IDMuMyAxMy4yIDMuMyAyMC4zelwiLz48L3N2Zz4nLFxuICAgICAgJ1V0aWxpdHknOiAnPGkgY2xhc3M9XCJmYXMgZmEtY29nXCI+PC9pPicsXG4gICAgICAnQ29tYmF0JzogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHN0eWxlPVwid2lkdGg6IDEuMmVtOyBoZWlnaHQ6IDEuMmVtOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBtYXJnaW4tcmlnaHQ6IDEycHg7XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAxMC40YzkzLjcgMTMuOSAxNjcuNyA4OCAxODEuNiAxODEuNmwxMC40IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsLTEwLjQgMGMtMTMuOSA5My43LTg4IDE2Ny43LTE4MS42IDE4MS42bDAgMTAuNGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTEwLjRDMTMwLjMgNDU1LjcgNTYuMyAzODEuNyA0Mi40IDI4OEwzMiAyODhjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsMTAuNCAwQzU2LjMgMTMwLjMgMTMwLjMgNTYuMyAyMjQgNDIuNEwyMjQgMzJjMC0xNy43IDE0LjMtMzIgMzItMzJ6TTEwNy40IDI4OGMxMi41IDU4LjMgNTguNCAxMDQuMSAxMTYuNiAxMTYuNmwwLTIwLjZjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMmwwIDIwLjZjNTguMy0xMi41IDEwNC4xLTU4LjQgMTE2LjYtMTE2LjZMMzg0IDI4OGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmwyMC42IDBDMzkyLjEgMTY1LjcgMzQ2LjMgMTE5LjkgMjg4IDEwNy40bDAgMjAuNmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTIwLjZDMTY1LjcgMTE5LjkgMTE5LjkgMTY1LjcgMTA3LjQgMjI0bDIwLjYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwtMjAuNiAwek0yNTYgMjI0YTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHpcIi8+PC9zdmc+JyxcbiAgICAgICdQbGF5ZXInOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCIgc3R5bGU9XCJ3aWR0aDogMS4yZW07IGhlaWdodDogMS4yZW07IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IG1hcmdpbi1yaWdodDogMTJweDtcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjQgMjU2QTEyOCAxMjggMCAxIDAgMjI0IDBhMTI4IDEyOCAwIDEgMCAwIDI1NnptLTQ1LjcgNDhDNzkuOCAzMDQgMCAzODMuOCAwIDQ4Mi4zQzAgNDk4LjcgMTMuMyA1MTIgMjkuNyA1MTJsMzg4LjYgMGMxNi40IDAgMjkuNy0xMy4zIDI5LjctMjkuN0M0NDggMzgzLjggMzY4LjIgMzA0IDI2OS43IDMwNGwtOTEuNCAwelwiLz48L3N2Zz4nLFxuICAgICAgJ01vdmVtZW50JzogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiIHN0eWxlPVwid2lkdGg6IDEuMmVtOyBoZWlnaHQ6IDEuMmVtOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBtYXJnaW4tcmlnaHQ6IDEycHg7XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzIwIDQ4YTQ4IDQ4IDAgMSAwIC05NiAwIDQ4IDQ4IDAgMSAwIDk2IDB6TTEyNS43IDE3NS41YzkuOS05LjkgMjMuNC0xNS41IDM3LjUtMTUuNWMxLjkgMCAzLjggLjEgNS42IC4zTDEzNy42IDI1NGMtOS4zIDI4IDEuNyA1OC44IDI2LjggNzQuNWw4Ni4yIDUzLjktMjUuNCA4OC44Yy00LjkgMTcgNSAzNC43IDIyIDM5LjZzMzQuNy01IDM5LjYtMjJsMjguNy0xMDAuNGM1LjktMjAuNi0yLjYtNDIuNi0yMC43LTUzLjlMMjM4IDI5OWwzMC45LTgyLjQgNS4xIDEyLjNDMjg5IDI2NC43IDMyMy45IDI4OCAzNjIuNyAyODhsMjEuMyAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0yMS4zIDBjLTEyLjkgMC0yNC42LTcuOC0yOS41LTE5LjdsLTYuMy0xNWMtMTQuNi0zNS4xLTQ0LjEtNjEuOS04MC41LTczLjFsLTQ4LjctMTVjLTExLjEtMy40LTIyLjctNS4yLTM0LjQtNS4yYy0zMSAwLTYwLjggMTIuMy04Mi43IDM0LjNMNTcuNCAxNTMuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMGwyMy4xLTIzLjF6TTkxLjIgMzUyTDMyIDM1MmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmw2OS42IDBjMTkgMCAzNi4yLTExLjIgNDMuOS0yOC41TDE1NyAzNjEuNmwtOS41LTZjLTE3LjUtMTAuOS0zMC41LTI2LjgtMzcuOS00NC45TDkxLjIgMzUyelwiLz48L3N2Zz4nLFxuICAgIH07XG5cbiAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcnlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNhdGVnb3J5QnRuLmNsYXNzTmFtZSA9IGBzZXJlbml0eS1jYXRlZ29yeSAke2NhdGVnb3J5ID09PSB0aGlzLmFjdGl2ZUNhdGVnb3J5ID8gJ2FjdGl2ZScgOiAnJ31gO1xuICAgICAgXG4gICAgICBjb25zdCBpY29uID0gY2F0ZWdvcnlJY29uc1tjYXRlZ29yeV0gfHwgY2F0ZWdvcnlJY29uc1snVXRpbGl0eSddO1xuXG4gICAgICBjYXRlZ29yeUJ0bi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2VyZW5pdHktY2F0ZWdvcnktaWNvblwiPiR7aWNvbn08L3NwYW4+XG4gICAgICAgICR7Y2F0ZWdvcnl9XG4gICAgICBgO1xuICAgICAgXG4gICAgICBjYXRlZ29yeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcmVuaXR5LWNhdGVnb3J5JykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBcblxuICAgICAgICBjYXRlZ29yeUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgdGhpcy5hY3RpdmVTZXR0aW5nc01vZHVsZSA9IG51bGw7IFxuICAgICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gJyc7XG4gICAgICAgIHRoaXMuY2xvc2VIVURTZXR0aW5nc1BvcHVwKCk7IFxuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQobWFuYWdlcik7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChjYXRlZ29yeUJ0bik7XG4gICAgfSk7XG5cbiAgXG4gICAgY29uc3QgaHVkRWRpdG9yQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaHVkRWRpdG9yQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jYXRlZ29yeSBzZXJlbml0eS1odWQtZWRpdG9yLWJ0bic7XG4gICAgaHVkRWRpdG9yQnRuLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwic2VyZW5pdHktY2F0ZWdvcnktaWNvblwiIHN0eWxlPVwid2lkdGg6IDEuMmVtOyBtYXJnaW4tcmlnaHQ6IDEycHg7XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTY0IDBDMjguNyAwIDAgMjguNyAwIDY0TDAgMzUyYzAgMzUuMyAyOC43IDY0IDY0IDY0bDE3NiAwLTEwLjcgMzJMMTYwIDQ0OGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmwyNTYgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwtNjkuMyAwTDMzNiA0MTZsMTc2IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yODhjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMHpNNTEyIDY0bDAgMjI0TDY0IDI4OCA2NCA2NGw0NDggMHpcIi8+PC9zdmc+IEhVRCBFZGl0b3JgO1xuICAgIGh1ZEVkaXRvckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaXNFZGl0aW5nSFVEID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVuZGVySFVEZWRpdG9yKG1hbmFnZXIpO1xuICAgIH0pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaHVkRWRpdG9yQnRuKTtcblxuICAgIGNvbnN0IGNvbmZpZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpZ0J0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktY2F0ZWdvcnkgc2VyZW5pdHktY29uZmlnLWJ0bic7XG4gICAgY29uZmlnQnRuLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwic2VyZW5pdHktY2F0ZWdvcnktaWNvblwiIHN0eWxlPVwid2lkdGg6IDEuMmVtOyBtYXJnaW4tcmlnaHQ6IDEycHg7XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMwOC41IDEzNS4zYzcuMS02LjMgOS45LTE2LjIgNi4yLTI1Yy0yLjMtNS4zLTQuOC0xMC41LTcuNi0xNS41TDMwNCA4OS40Yy0zLTUtNi4zLTkuOS05LjgtMTQuNmMtNS43LTcuNi0xNS43LTEwLjEtMjQuNy03LjFsLTI4LjIgOS4zYy0xMC43LTguOC0yMy0xNi0zNi4yLTIwLjlMMTk5IDI3LjFjLTEuOS05LjMtOS4xLTE2LjctMTguNS0xNy44QzE3My45IDguNCAxNjcuMiA4IDE2MC40IDhsLS43IDBjLTYuOCAwLTEzLjUgLjQtMjAuMSAxLjJjLTkuNCAxLjEtMTYuNiA4LjYtMTguNSAxNy44TDExNSA1Ni4xYy0xMy4zIDUtMjUuNSAxMi4xLTM2LjIgMjAuOUw1MC41IDY3LjhjLTktMy0xOS0uNS0yNC43IDcuMWMtMy41IDQuNy02LjggOS42LTkuOSAxNC42bC0zIDUuM2MtMi44IDUtNS4zIDEwLjItNy42IDE1LjZjLTMuNyA4LjctLjkgMTguNiA2LjIgMjVsMjIuMiAxOS44QzMyLjYgMTYxLjkgMzIgMTY4LjkgMzIgMTc2cy42IDE0LjEgMS43IDIwLjlMMTEuNSAyMTYuN2MtNy4xIDYuMy05LjkgMTYuMi02LjIgMjVjMi4zIDUuMyA0LjggMTAuNSA3LjYgMTUuNmwzIDUuMmMzIDUuMSA2LjMgOS45IDkuOSAxNC42YzUuNyA3LjYgMTUuNyAxMC4xIDI0LjcgNy4xbDI4LjItOS4zYzEwLjcgOC44IDIzIDE2IDM2LjIgMjAuOWw2LjEgMjkuMWMxLjkgOS4zIDkuMSAxNi43IDE4LjUgMTcuOGM2LjcgLjggMTMuNSAxLjIgMjAuNCAxLjJzMTMuNy0uNCAyMC40LTEuMmM5LjQtMS4xIDE2LjYtOC42IDE4LjUtMTcuOGw2LjEtMjkuMWMxMy4zLTUgMjUuNS0xMi4xIDM2LjItMjAuOWwyOC4yIDkuM2M5IDMgMTkgLjUgMjQuNy03LjFjMy41LTQuNyA2LjgtOS41IDkuOC0xNC42bDMuMS01LjRjMi44LTUgNS4zLTEwLjIgNy42LTE1LjVjMy43LTguNyAuOS0xOC42LTYuMi0yNWwtMjIuMi0xOS44YzEuMS02LjggMS43LTEzLjggMS43LTIwLjlzLS42LTE0LjEtMS43LTIwLjlsMjIuMi0xOS44ek0xMTIgMTc2YTQ4IDQ4IDAgMSAxIDk2IDAgNDggNDggMCAxIDEgLTk2IDB6TTUwNC43IDUwMC41YzYuMyA3LjEgMTYuMiA5LjkgMjUgNi4yYzUuMy0yLjMgMTAuNS00LjggMTUuNS03LjZsNS40LTMuMWM1LTMgOS45LTYuMyAxNC42LTkuOGM3LjYtNS43IDEwLjEtMTUuNyA3LjEtMjQuN2wtOS4zLTI4LjJjOC44LTEwLjcgMTYtMjMgMjAuOS0zNi4ybDI5LjEtNi4xYzkuMy0xLjkgMTYuNy05LjEgMTcuOC0xOC41Yy44LTYuNyAxLjItMTMuNSAxLjItMjAuNHMtLjQtMTMuNy0xLjItMjAuNGMtMS4xLTkuNC04LjYtMTYuNi0xNy44LTE4LjVMNTgzLjkgMzA3Yy01LTEzLjMtMTIuMS0yNS41LTIwLjktMzYuMmw5LjMtMjguMmMzLTkgLjUtMTktNy4xLTI0LjdjLTQuNy0zLjUtOS42LTYuOC0xNC42LTkuOWwtNS4zLTNjLTUtMi44LTEwLjItNS4zLTE1LjYtNy42Yy04LjctMy43LTE4LjYtLjktMjUgNi4ybC0xOS44IDIyLjJjLTYuOC0xLjEtMTMuOC0xLjctMjAuOS0xLjdzLTE0LjEgLjYtMjAuOSAxLjdsLTE5LjgtMjIuMmMtNi4zLTcuMS0xNi4yLTkuOS0yNS02LjJjLTUuMyAyLjMtMTAuNSA0LjgtMTUuNiA3LjZsLTUuMiAzYy01LjEgMy05LjkgNi4zLTE0LjYgOS45Yy03LjYgNS43LTEwLjEgMTUuNy03LjEgMjQuN2w5LjMgMjguMmMtOC44IDEwLjctMTYgMjMtMjAuOSAzNi4yTDMxNS4xIDMxM2MtOS4zIDEuOS0xNi43IDkuMS0xNy44IDE4LjVjLS44IDYuNy0xLjIgMTMuNS0xLjIgMjAuNHMuNCAxMy43IDEuMiAyMC40YzEuMSA5LjQgOC42IDE2LjYgMTcuOCAxOC41bDI5LjEgNi4xYzUgMTMuMyAxMi4xIDI1LjUgMjAuOSAzNi4ybC05LjMgMjguMmMtMyA5LS41IDE5IDcuMSAyNC43YzQuNyAzLjUgOS41IDYuOCAxNC42IDkuOGw1LjQgMy4xYzUgMi44IDEwLjIgNS4zIDE1LjUgNy42YzguNyAzLjcgMTguNiAuOSAyNS02LjJsMTkuOC0yMi4yYzYuOCAxLjEgMTMuOCAxLjcgMjAuOSAxLjdzMTQuMS0uNiAyMC45LTEuN2wxOS44IDIyLjJ6TTQ2NCAzMDRhNDggNDggMCAxIDEgMCA5NiA0OCA0OCAwIDEgMSAwLTk2elwiLz48L3N2Zz4gU2V0dGluZ3NgO1xuICAgIGNvbmZpZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlVmlldyA9ICdzZXR0aW5ncyc7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQobWFuYWdlcik7XG4gICAgfSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChjb25maWdCdG4pO1xuICAgIFxuICAgIHJldHVybiBzaWRlYmFyO1xuICB9LFxuXG4gIGV4aXRIVURlZGl0b3IobWFuYWdlcikge1xuICAgIGlmICghdGhpcy5pc0VkaXRpbmdIVUQpIHJldHVybjtcblxuICAgIGNvbnN0IGVkaXRvck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktaHVkLWVkaXRvci1vdmVybGF5Jyk7XG4gICAgaWYgKGVkaXRvck92ZXJsYXkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlZGl0b3JPdmVybGF5KTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5pc0VkaXRpbmdIVUQgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlSFVEU2V0dGluZ3NQb3B1cCgpO1xuXG4gICAgaWYgKHRoaXMub3ZlcmxheSkge1xuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuekluZGV4ID0gJzEwMDAwMDAwMDAnO1xuICAgIH1cblxuICAgIG1hbmFnZXIubGlzdCgpLmZvckVhY2gobW9kID0+IHtcbiAgICAgIGlmIChtb2QuZW5hYmxlZCAmJiBtb2QuZWxlbWVudCkge1xuICAgICAgICBtb2QuZWxlbWVudC5zdHlsZS56SW5kZXggPSBtb2QubmFtZSA9PT0gJ0FybW9ySFVEJyB8fCBtb2QubmFtZSA9PT0gJ0NQU0NvdW50ZXInIHx8IG1vZC5uYW1lID09PSAnRlBTQ291bnRlcicgfHwgbW9kLm5hbWUgPT09ICdJbnRlcmZhY2UnID8gOTk5NyA6ICcnO1xuICAgICAgICBtb2QuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICBtb2QuZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnJztcbiAgICAgICAgbW9kLmVsZW1lbnQub25tb3VzZWRvd24gPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlckhVRGVkaXRvcihtYW5hZ2VyKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaWYgKHRoaXMub3ZlcmxheSkge1xuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuekluZGV4ID0gJy0xJztcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0b3JPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdG9yT3ZlcmxheS5jbGFzc05hbWUgPSAnc2VyZW5pdHktaHVkLWVkaXRvci1vdmVybGF5JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVkaXRvck92ZXJsYXkpO1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1odWQtZ3JpZCc7XG4gICAgZWRpdG9yT3ZlcmxheS5hcHBlbmRDaGlsZChncmlkKTtcbiAgICBcblxuICAgIG1hbmFnZXIubGlzdCgpLmZvckVhY2gobW9kID0+IHtcbiAgICAgIGlmIChtb2QuZW5hYmxlZCAmJiBtb2QuZWxlbWVudCkge1xuICAgICAgICBtb2QuZWxlbWVudC5zdHlsZS56SW5kZXggPSAxMDAwMTtcbiAgICAgICAgbW9kLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICAgICAgdGhpcy5tYWtlRWxlbWVudERyYWdnYWJsZShtb2QuZWxlbWVudCwgbW9kLCBtYW5hZ2VyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFkZCBEb25lIGJ1dHRvblxuICAgIGNvbnN0IGRvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkb25lQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1odWQtZG9uZS1idG4nO1xuICAgIGRvbmVCdG4udGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuZXhpdEhVRGVkaXRvcihtYW5hZ2VyKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzEwMDAwMDAwMDEnO1xuICAgIH0pO1xuICAgIGVkaXRvck92ZXJsYXkuYXBwZW5kQ2hpbGQoZG9uZUJ0bik7XG4gIH0sXG5cbiAgbWFrZUVsZW1lbnREcmFnZ2FibGUoZWxlbWVudCwgbW9kdWxlLCBtYW5hZ2VyKSB7XG4gICAgaWYgKCFlbGVtZW50IHx8IG1vZHVsZS5uYW1lID09PSAnQ2xpY2tHVUknKSByZXR1cm47XG4gICAgbGV0IHBvczEgPSAwLCBwb3MyID0gMCwgcG9zMyA9IDAsIHBvczQgPSAwO1xuICAgIFxuICAgIGNvbnN0IGRyYWdNb3VzZURvd24gPSAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgXG4gICAgICBwb3MzID0gZS5jbGllbnRYO1xuICAgICAgcG9zNCA9IGUuY2xpZW50WTtcblxuICAgICAgLy8gV2hlbiBkcmFnZ2luZyBzdGFydHMsIHN3aXRjaCB0byBwaXhlbC1iYXNlZCBwb3NpdGlvbmluZ1xuICAgICAgLy8gdG8gcHJldmVudCBjb25mbGljdHMgd2l0aCBwcm9wZXJ0aWVzIGxpa2UgJ2JvdHRvbScgb3IgJ3JpZ2h0Jy5cbiAgICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtyZWN0LnRvcH1weGA7XG4gICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtyZWN0LmxlZnR9cHhgO1xuICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSAnYXV0byc7XG4gICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gJ2F1dG8nO1xuICAgICAgXG4gICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBjbG9zZURyYWdFbGVtZW50O1xuICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBlbGVtZW50RHJhZztcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGVsZW1lbnREcmFnID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbmV3IGN1cnNvciBwb3NpdGlvblxuICAgICAgcG9zMSA9IHBvczMgLSBlLmNsaWVudFg7XG4gICAgICBwb3MyID0gcG9zNCAtIGUuY2xpZW50WTtcbiAgICAgIHBvczMgPSBlLmNsaWVudFg7XG4gICAgICBwb3M0ID0gZS5jbGllbnRZO1xuICAgICAgLy8gU2V0IHRoZSBlbGVtZW50J3MgbmV3IHBvc2l0aW9uXG4gICAgICBsZXQgbmV3VG9wID0gZWxlbWVudC5vZmZzZXRUb3AgLSBwb3MyO1xuICAgICAgbGV0IG5ld0xlZnQgPSBlbGVtZW50Lm9mZnNldExlZnQgLSBwb3MxO1xuXG4gICAgICAvLyBHZXQgc2NyZWVuIGFuZCBlbGVtZW50IGRpbWVuc2lvbnNcbiAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBjb25zdCBlbGVtZW50V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAvLyBBZGQgYm91bmRhcnkgY2hlY2tzIHRvIHByZXZlbnQgZ29pbmcgb2ZmLXNjcmVlblxuICAgICAgbmV3TGVmdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG5ld0xlZnQsIHNjcmVlbldpZHRoIC0gZWxlbWVudFdpZHRoKSk7XG4gICAgICBuZXdUb3AgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihuZXdUb3AsIHNjcmVlbkhlaWdodCAtIGVsZW1lbnRIZWlnaHQpKTtcblxuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtuZXdUb3B9cHhgO1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bmV3TGVmdH1weGA7XG5cbiAgICAgIC8vIE1vdmUgcG9wdXAgd2l0aCB0aGUgbW9kdWxlIGFuZCBjaGVjayBpdHMgYm91bmRhcmllc1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSFVEU2V0dGluZ3NQb3B1cCAmJiB0aGlzLmFjdGl2ZUhVRFNldHRpbmdzUG9wdXAubW9kdWxlTmFtZSA9PT0gbW9kdWxlLm5hbWUpIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLmFjdGl2ZUhVRFNldHRpbmdzUG9wdXAuZWxlbWVudDtcbiAgICAgICAgY29uc3QgcG9wdXBXaWR0aCA9IHBvcHVwLm9mZnNldFdpZHRoO1xuICAgICAgICBsZXQgcG9wdXBMZWZ0ID0gbmV3TGVmdCArIGVsZW1lbnRXaWR0aCArIDEwO1xuXG4gICAgICAgIC8vIEZsaXAgcG9wdXAgdG8gdGhlIG90aGVyIHNpZGUgaWYgaXQgZ29lcyBvZmYtc2NyZWVuXG4gICAgICAgIGlmIChwb3B1cExlZnQgKyBwb3B1cFdpZHRoID4gc2NyZWVuV2lkdGgpIHtcbiAgICAgICAgICBwb3B1cExlZnQgPSBuZXdMZWZ0IC0gcG9wdXBXaWR0aCAtIDEwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBwb3B1cC5zdHlsZS50b3AgPSBgJHtuZXdUb3B9cHhgO1xuICAgICAgICBwb3B1cC5zdHlsZS5sZWZ0ID0gYCR7cG9wdXBMZWZ0fXB4YDtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGNsb3NlRHJhZ0VsZW1lbnQgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgbWFuYWdlci51cGRhdGVNb2R1bGVQb3NpdGlvbihtb2R1bGUubmFtZSwgZWxlbWVudC5vZmZzZXRMZWZ0LCBlbGVtZW50Lm9mZnNldFRvcCk7XG4gICAgfTtcblxuICAgIGVsZW1lbnQub25tb3VzZWRvd24gPSBkcmFnTW91c2VEb3duO1xuICAgIGVsZW1lbnQub25jb250ZXh0bWVudSA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNob3dIVURTZXR0aW5nc1BvcHVwKGUsIG1vZHVsZSwgbWFuYWdlciwgZWxlbWVudCk7XG4gICAgfTtcbiAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgfSxcblxuICBzaG93SFVEU2V0dGluZ3NQb3B1cChlLCBtb2R1bGUsIG1hbmFnZXIsIGVsZW1lbnQpIHtcbiAgICB0aGlzLmNsb3NlSFVEU2V0dGluZ3NQb3B1cCgpOyBcblxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXAuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWh1ZC1zZXR0aW5ncy1wb3B1cCc7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1odWQtcG9wdXAtaGVhZGVyJztcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG1vZHVsZS5uYW1lO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWh1ZC1wb3B1cC1jbG9zZS1idG4nO1xuICAgIGNsb3NlQnRuLmlubmVySFRNTCA9ICcmdGltZXM7JztcbiAgICBjbG9zZUJ0bi5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbG9zZUhVRFNldHRpbmdzUG9wdXAoKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IHNldHRpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0dGluZ3NDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWh1ZC1wb3B1cC1ib2R5JztcbiAgICBtb2R1bGUuc2V0dGluZ3MuZm9yRWFjaChzZXR0aW5nID0+IHtcbiAgICAgIGNvbnN0IHNldHRpbmdFbGVtZW50ID0gdGhpcy5jcmVhdGVTZXR0aW5nRWxlbWVudChtb2R1bGUsIHNldHRpbmcsIG1hbmFnZXIpO1xuICAgICAgaWYgKHNldHRpbmdFbGVtZW50KSB7XG4gICAgICAgIHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChzZXR0aW5nc0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWh1ZC1wb3B1cC1mb290ZXInO1xuICAgIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXRCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWh1ZC1wb3B1cC1yZXNldC1idG4nO1xuICAgIHJlc2V0QnRuLnRleHRDb250ZW50ID0gJ1Jlc2V0IHRvIERlZmF1bHRzJztcbiAgICByZXNldEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbWFuYWdlci5yZXNldE1vZHVsZVNldHRpbmdzKG1vZHVsZS5uYW1lKTtcbiAgICAgIHRoaXMuc2hvd0hVRFNldHRpbmdzUG9wdXAoZSwgbWFuYWdlci5nZXQobW9kdWxlLm5hbWUpLCBtYW5hZ2VyLCBlbGVtZW50KTtcbiAgICB9O1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChyZXNldEJ0bik7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xuICAgIFxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgcG9wdXBXaWR0aCA9IHBvcHVwLm9mZnNldFdpZHRoO1xuICAgIGxldCBwb3B1cExlZnQgPSByZWN0LmxlZnQgKyByZWN0LndpZHRoICsgMTA7XG5cbiAgICAvLyBDaGVjayBpZiBwb3B1cCBnb2VzIG9mZi1zY3JlZW5cbiAgICBpZiAocG9wdXBMZWZ0ICsgcG9wdXBXaWR0aCA+IHNjcmVlbldpZHRoKSB7XG4gICAgICBwb3B1cExlZnQgPSByZWN0LmxlZnQgLSBwb3B1cFdpZHRoIC0gMTA7XG4gICAgfVxuXG4gICAgcG9wdXAuc3R5bGUudG9wID0gYCR7cmVjdC50b3B9cHhgO1xuICAgIHBvcHVwLnN0eWxlLmxlZnQgPSBgJHtwb3B1cExlZnR9cHhgO1xuXG4gICAgdGhpcy5hY3RpdmVIVURTZXR0aW5nc1BvcHVwID0geyBlbGVtZW50OiBwb3B1cCwgbW9kdWxlTmFtZTogbW9kdWxlLm5hbWUgfTtcbiAgfSxcblxuICBjbG9zZUhVRFNldHRpbmdzUG9wdXAoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlSFVEU2V0dGluZ3NQb3B1cCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmFjdGl2ZUhVRFNldHRpbmdzUG9wdXAuZWxlbWVudCk7XG4gICAgICB0aGlzLmFjdGl2ZUhVRFNldHRpbmdzUG9wdXAgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICBjcmVhdGVDb250ZW50KG1hbmFnZXIpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29udGVudCc7XG4gICAgXG4gICAgLy8gSW5pdGlhbCBjb250ZW50IHBvcHVsYXRpb25cbiAgICB0aGlzLnBvcHVsYXRlTW9kdWxlc0NvbnRlbnQoY29udGVudCwgbWFuYWdlcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH0sXG5cbiAgdXBkYXRlQ29udGVudChtYW5hZ2VyKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVWaWV3ID09PSAnc2V0dGluZ3MnKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3Mtdmlldy1hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NldHRpbmdzLXZpZXctYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlU2V0dGluZ3NNb2R1bGUpIHtcbiAgICAgIHRoaXMucG9wdWxhdGVTZXR0aW5nc0NvbnRlbnQoY29udGVudCwgbWFuYWdlcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZVZpZXcgPT09ICdzZXR0aW5ncycpIHtcbiAgICAgIHRoaXMucmVuZGVyU2V0dGluZ3NTY3JlZW4oY29udGVudCwgbWFuYWdlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9wdWxhdGVNb2R1bGVzQ29udGVudChjb250ZW50LCBtYW5hZ2VyKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyU2V0dGluZ3NTY3JlZW4oY29udGVudCwgbWFuYWdlcikge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZ3MtaGVhZGVyJztcbiAgICBcbiAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYmFja0J0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktYmFjay1idG4nO1xuICAgIGJhY2tCdG4uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiIHN0eWxlPVwid2lkdGg6IDAuN2VtOyBoZWlnaHQ6IDAuN2VtOyBtYXJnaW4tcmlnaHQ6IDhweDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk05LjQgMjMzLjRjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zbDE5MiAxOTJjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBzMTIuNS0zMi44IDAtNDUuM0w3Ny4zIDI1NiAyNDYuNiA4Ni42YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zcy0zMi44LTEyLjUtNDUuMyAwbC0xOTIgMTkyelwiLz48L3N2Zz4gQmFjayc7XG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVWaWV3ID0gJ21vZHVsZXMnO1xuICAgICAgICB0aGlzLmFjdGl2ZVNldHRpbmdzTW9kdWxlID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KG1hbmFnZXIpO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1NldHRpbmdzJztcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChiYWNrQnRuKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IHNldHRpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0dGluZ3NDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbmZpZy1zY3JlZW4tY29udGVudCc7XG5cbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFicy5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29uZmlnLXRhYnMtdmVydGljYWwnO1xuICAgIHRhYnMuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2VyZW5pdHktY29uZmlnLXRhYiBhY3RpdmVcIiBkYXRhLXRhYj1cIlRoZW1lc1wiPlRoZW1lczwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2VyZW5pdHktY29uZmlnLXRhYlwiIGRhdGEtdGFiPVwiQ29uZmlnXCI+Q29uZmlnPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzZXJlbml0eS1jb25maWctdGFiXCIgZGF0YS10YWI9XCJTY3JpcHRpbmdcIj5TY3JpcHRpbmc8L2J1dHRvbj5cbiAgICBgO1xuICAgIHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYnMpO1xuICAgIFxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJDb250ZW50LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctdGFiLWNvbnRlbnQnO1xuICAgIHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzZXR0aW5nc0NvbnRhaW5lcik7XG5cbiAgICB0YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJlbml0eS1jb25maWctdGFiJykuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJlbml0eS1jb25maWctdGFiJykuZm9yRWFjaCh0ID0+IHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb25maWdUYWIgPSB0YWIuZGF0YXNldC50YWI7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckNvbmZpZ0NvbnRlbnQobWFuYWdlcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXJDb25maWdDb250ZW50KG1hbmFnZXIpO1xuICB9LFxuXG4gIHJlbmRlckNvbmZpZ0NvbnRlbnQobWFuYWdlcikge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LWNvbmZpZy10YWItY29udGVudCcpO1xuICAgIGlmICghY29udGVudCkgcmV0dXJuO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBzd2l0Y2ggKHRoaXMuYWN0aXZlQ29uZmlnVGFiKSB7XG4gICAgICAgIGNhc2UgJ1RoZW1lcyc6XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRoZW1lc0NvbnRlbnQoY29udGVudCwgbWFuYWdlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQ29uZmlnJzpcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ29uZmlnU3ViQ29udGVudChjb250ZW50LCBtYW5hZ2VyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTY3JpcHRpbmcnOlxuICAgICAgICAgICAgdGhpcy5yZW5kZXJTY3JpcHRpbmdDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlclRoZW1lc0NvbnRlbnQoY29udGVudCwgbWFuYWdlcikge1xuICAgIGNvbnN0IHRoZW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhlbWVDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRoZW1lLWVkaXRvcic7XG5cbiAgICAvLyAtLSBTZWN0aW9uOiBBY2NlbnQgQ29sb3IgLS1cbiAgICBjb25zdCBhY2NlbnRIZWFkZXIgPSB0aGlzLmNyZWF0ZVNlY3Rpb25IZWFkZXIoJ0FjY2VudCBDb2xvcicsICdTZXRzIHRoZSBtYWluIGNvbG9yIGZvciBVSSBlbGVtZW50cy4nKTtcbiAgICB0aGVtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhY2NlbnRIZWFkZXIpO1xuXG4gICAgY29uc3QgYWNjZW50Q29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjY2VudENvbnRyb2wuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRoZW1lLWNvbnRyb2wnO1xuICAgIGNvbnN0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb2xvclBpY2tlci50eXBlID0gJ2NvbG9yJztcbiAgICBjb2xvclBpY2tlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktdGhlbWUtY29sb3ItcGlja2VyJztcbiAgICBjb2xvclBpY2tlci52YWx1ZSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXByaW1hcnknKS50cmltKCk7XG4gICAgXG4gICAgY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDb2xvciA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeScsIG5ld0NvbG9yKTtcbiAgICAgICAgLy8gWW91IG1pZ2h0IG5lZWQgYSBtb3JlIHJvYnVzdCB3YXkgdG8gaGFuZGxlIHRoZSBkYXJrZXIgc2hhZGVcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnktZGFyaycsIHRoaXMuc2hhZGVDb2xvcihuZXdDb2xvciwgLTIwKSk7XG4gICAgICAgIG1hbmFnZXIuc2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICB9KTtcbiAgICBhY2NlbnRDb250cm9sLmFwcGVuZENoaWxkKGNvbG9yUGlja2VyKTtcbiAgICB0aGVtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhY2NlbnRDb250cm9sKTtcblxuICAgIC8vIC0tIFNlY3Rpb246IFBhbmVsIFN0eWxlIC0tXG4gICAgY29uc3QgcGFuZWxIZWFkZXIgPSB0aGlzLmNyZWF0ZVNlY3Rpb25IZWFkZXIoJ1BhbmVsIFN0eWxlJywgJ0N1c3RvbWl6ZSB0aGUgbG9vayBvZiBVSSBiYWNrZ3JvdW5kcy4nKTtcbiAgICB0aGVtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYW5lbEhlYWRlcik7XG5cbiAgICBjb25zdCBwYW5lbENvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFuZWxDb250cm9scy5jbGFzc05hbWUgPSAnc2VyZW5pdHktdGhlbWUtcGFuZWwtY29udHJvbHMnO1xuXG4gICAgLy8gUGFuZWwgQ29sb3JcbiAgICBjb25zdCBwYW5lbENvbG9yQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhbmVsQ29sb3JDb250cm9sLmNsYXNzTmFtZSA9ICdzZXJlbml0eS10aGVtZS1jb250cm9sLWdyb3VwJztcbiAgICBwYW5lbENvbG9yQ29udHJvbC5pbm5lckhUTUwgPSBgPGxhYmVsPlBhbmVsIENvbG9yPC9sYWJlbD5gO1xuICAgIGNvbnN0IHBhbmVsQ29sb3JQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHBhbmVsQ29sb3JQaWNrZXIudHlwZSA9ICdjb2xvcic7XG4gICAgcGFuZWxDb2xvclBpY2tlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktdGhlbWUtY29sb3ItcGlja2VyJztcbiAgICBjb25zdCBpbml0aWFsUGFuZWxDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXBhbmVsLWJhc2UnKS50cmltKCk7XG4gICAgcGFuZWxDb2xvclBpY2tlci52YWx1ZSA9IGluaXRpYWxQYW5lbENvbG9yO1xuXG4gICAgcGFuZWxDb2xvclBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wYW5lbC1iYXNlJywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBtYW5hZ2VyLnNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgfSk7XG4gICAgcGFuZWxDb2xvckNvbnRyb2wuYXBwZW5kQ2hpbGQocGFuZWxDb2xvclBpY2tlcik7XG4gICAgcGFuZWxDb250cm9scy5hcHBlbmRDaGlsZChwYW5lbENvbG9yQ29udHJvbCk7XG5cbiAgICAvLyBQYW5lbCBPcGFjaXR5XG4gICAgY29uc3QgcGFuZWxPcGFjaXR5Q29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhbmVsT3BhY2l0eUNvbnRyb2wuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRoZW1lLWNvbnRyb2wtZ3JvdXAnO1xuICAgIHBhbmVsT3BhY2l0eUNvbnRyb2wuaW5uZXJIVE1MID0gYDxsYWJlbD5QYW5lbCBPcGFjaXR5PC9sYWJlbD5gO1xuICAgIGNvbnN0IHBhbmVsT3BhY2l0eVNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcGFuZWxPcGFjaXR5U2xpZGVyLnR5cGUgPSAncmFuZ2UnO1xuICAgIHBhbmVsT3BhY2l0eVNsaWRlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2xpZGVyJztcbiAgICBwYW5lbE9wYWNpdHlTbGlkZXIubWluID0gMDtcbiAgICBwYW5lbE9wYWNpdHlTbGlkZXIubWF4ID0gMTtcbiAgICBwYW5lbE9wYWNpdHlTbGlkZXIuc3RlcCA9IDAuMDE7XG4gICAgY29uc3QgaW5pdGlhbE9wYWNpdHkgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wYW5lbC1vcGFjaXR5JykudHJpbSgpO1xuICAgIHBhbmVsT3BhY2l0eVNsaWRlci52YWx1ZSA9IGluaXRpYWxPcGFjaXR5O1xuXG4gICAgcGFuZWxPcGFjaXR5U2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXBhbmVsLW9wYWNpdHknLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIG1hbmFnZXIuc2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICB9KTtcbiAgICBwYW5lbE9wYWNpdHlDb250cm9sLmFwcGVuZENoaWxkKHBhbmVsT3BhY2l0eVNsaWRlcik7XG4gICAgcGFuZWxDb250cm9scy5hcHBlbmRDaGlsZChwYW5lbE9wYWNpdHlDb250cm9sKTtcblxuICAgIHRoZW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhbmVsQ29udHJvbHMpO1xuXG4gICAgLy8gLS0gU2VjdGlvbjogUHJlLW1hZGUgVGhlbWVzIC0tXG4gICAgY29uc3QgdGhlbWVzSGVhZGVyID0gdGhpcy5jcmVhdGVTZWN0aW9uSGVhZGVyKCdUaGVtZXMnLCAnU2VsZWN0IGZyb20gYSBwcmUtbWFkZSBjb2xvciBzY2hlbWUuJyk7XG4gICAgdGhlbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhlbWVzSGVhZGVyKTtcblxuICAgIGNvbnN0IHRoZW1lc0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGVtZXNHcmlkLmNsYXNzTmFtZSA9ICdzZXJlbml0eS10aGVtZXMtZ3JpZCc7XG4gICAgXG4gICAgY29uc3QgdGhlbWVzID0gW1xuICAgICAgICB7IG5hbWU6ICdTZXJlbml0eScsIGNvbG9yOiAnIzVFNzJFQicgfSxcbiAgICAgICAgeyBuYW1lOiAnU3Vuc2V0JywgY29sb3I6ICcjRTU0QjRCJyB9LFxuICAgICAgICB7IG5hbWU6ICdFbWVyYWxkJywgY29sb3I6ICcjM2Y5YTU2JyB9LFxuICAgICAgICB7IG5hbWU6ICdHb2xkZW5yb2QnLCBjb2xvcjogJyNjZGEzNGEnIH0sXG4gICAgICAgIHsgbmFtZTogJ0FtZXRoeXN0JywgY29sb3I6ICcjOWI1OWI2JyB9LFxuICAgIF07XG5cbiAgICB0aGVtZXMuZm9yRWFjaCh0aGVtZSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW1lQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGVtZUNhcmQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRoZW1lLWNhcmQnO1xuICAgICAgICB0aGVtZUNhcmQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJzZXJlbml0eS10aGVtZS1wcmV2aWV3XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9yfTtcIj48L2Rpdj48c3Bhbj4ke3RoZW1lLm5hbWV9PC9zcGFuPmA7XG4gICAgICAgIHRoZW1lQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgdGhlbWUuY29sb3IpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnktZGFyaycsIHRoaXMuc2hhZGVDb2xvcih0aGVtZS5jb2xvciwgLTIwKSk7XG4gICAgICAgICAgICBjb2xvclBpY2tlci52YWx1ZSA9IHRoZW1lLmNvbG9yO1xuICAgICAgICAgICAgbWFuYWdlci5zYXZlQ29uZmlndXJhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhlbWVzR3JpZC5hcHBlbmRDaGlsZCh0aGVtZUNhcmQpO1xuICAgIH0pO1xuXG4gICAgdGhlbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhlbWVzR3JpZCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGVtZUNvbnRhaW5lcik7XG4gIH0sXG5cbiAgY3JlYXRlU2VjdGlvbkhlYWRlcih0aXRsZSwgc3VidGl0bGUpIHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZWN0aW9uLXN1YmhlYWRlcic7XG4gICAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktc3ViaGVhZGVyLXRpdGxlXCI+JHt0aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlcmVuaXR5LXN1YmhlYWRlci1zdWJ0aXRsZVwiPiR7c3VidGl0bGV9PC9kaXY+XG4gICAgICBgO1xuICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgfSxcbiAgICBcbiAgcmVuZGVyQ29uZmlnU3ViQ29udGVudChjb250ZW50LCBtYW5hZ2VyKSB7XG4gICAgY29uc3QgY29uZmlnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uZmlnQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctZWRpdG9yJztcblxuICAgIC8vIC0tLSBMRUZUIENPTFVNTiAtLS1cbiAgICBjb25zdCBsZWZ0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdENvbHVtbi5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29uZmlnLWNvbHVtbic7XG5cbiAgICAvLyAtLSBTZWN0aW9uOiBHZW5lcmFsIC0tXG4gICAgY29uc3QgZ2VuZXJhbEhlYWRlciA9IHRoaXMuY3JlYXRlU2VjdGlvbkhlYWRlcignR2VuZXJhbCcsICdNYW5hZ2UgaG93IHlvdXIgY29uZmlndXJhdGlvbiBpcyBoYW5kbGVkLicpO1xuICAgIGxlZnRDb2x1bW4uYXBwZW5kQ2hpbGQoZ2VuZXJhbEhlYWRlcik7XG5cbiAgICBjb25zdCBzZXR0aW5nc0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR0aW5nc0dyaWQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbmZpZy1jb250cm9scy1ncmlkJztcbiAgICBcbiAgICBjb25zdCBhdXRvU2F2ZVNldHRpbmcgPSB0aGlzLmNyZWF0ZVRvZ2dsZVNldHRpbmcoJ0F1dG8gU2F2ZScsICdBdXRvbWF0aWNhbGx5IHNhdmUgY2hhbmdlcy4nLCBtYW5hZ2VyLmF1dG9TYXZlLCAodmFsdWUpID0+IHtcbiAgICAgIG1hbmFnZXIuYXV0b1NhdmUgPSB2YWx1ZTtcbiAgICAgIG1hbmFnZXIuZm9yY2VTYXZlQ29uZmlndXJhdGlvbigpO1xuICAgIH0pO1xuICAgIHNldHRpbmdzR3JpZC5hcHBlbmRDaGlsZChhdXRvU2F2ZVNldHRpbmcpO1xuXG4gICAgY29uc3QgYXV0b0xvYWRTZXR0aW5nID0gdGhpcy5jcmVhdGVUb2dnbGVTZXR0aW5nKCdBdXRvIExvYWQnLCAnTG9hZCBjb25maWcgb24gc3RhcnR1cC4nLCBtYW5hZ2VyLmF1dG9Mb2FkLCAodmFsdWUpID0+IHtcbiAgICAgIG1hbmFnZXIuYXV0b0xvYWQgPSB2YWx1ZTtcbiAgICAgIG1hbmFnZXIuZm9yY2VTYXZlQ29uZmlndXJhdGlvbigpO1xuICAgIH0pO1xuICAgIHNldHRpbmdzR3JpZC5hcHBlbmRDaGlsZChhdXRvTG9hZFNldHRpbmcpO1xuICAgIGxlZnRDb2x1bW4uYXBwZW5kQ2hpbGQoc2V0dGluZ3NHcmlkKTtcbiAgICBcbiAgICAvLyAtLSBTZWN0aW9uOiBNYW51YWwgQ29udHJvbCAtLVxuICAgIGNvbnN0IG1hbnVhbEhlYWRlciA9IHRoaXMuY3JlYXRlU2VjdGlvbkhlYWRlcignTWFudWFsIENvbnRyb2wnLCAnTWFudWFsbHkgc2F2ZSBvciBsb2FkIHRoZSBjdXJyZW50IGNvbmZpZy4nKTtcbiAgICBsZWZ0Q29sdW1uLmFwcGVuZENoaWxkKG1hbnVhbEhlYWRlcik7XG5cbiAgICBjb25zdCBtYW51YWxCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFudWFsQnV0dG9ucy5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29uZmlnLW1hbnVhbC1idXR0b25zJztcblxuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1idG4nO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnRm9yY2UgU2F2ZSc7XG4gICAgc2F2ZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbWFuYWdlci5mb3JjZVNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NhdmVkISc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdGb3JjZSBTYXZlJzsgfSwgMjAwMCk7XG4gICAgfTtcbiAgICBtYW51YWxCdXR0b25zLmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuICAgIFxuICAgIGNvbnN0IGxvYWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsb2FkQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1idG4nO1xuICAgIGxvYWRCdG4udGV4dENvbnRlbnQgPSAnRm9yY2UgTG9hZCc7XG4gICAgbG9hZEJ0bi5vbmNsaWNrID0gKCkgPT4gbWFuYWdlci5sb2FkQ29uZmlndXJhdGlvbigpO1xuICAgIG1hbnVhbEJ1dHRvbnMuYXBwZW5kQ2hpbGQobG9hZEJ0bik7XG4gICAgbGVmdENvbHVtbi5hcHBlbmRDaGlsZChtYW51YWxCdXR0b25zKTtcbiAgICBcbiAgICBjb25maWdDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbHVtbik7XG5cbiAgICAvLyAtLS0gUklHSFQgQ09MVU1OIC0tLVxuICAgIGNvbnN0IHJpZ2h0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRDb2x1bW4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbmZpZy1jb2x1bW4nO1xuXG4gICAgY29uc3QgaW1wb3J0RXhwb3J0SGVhZGVyID0gdGhpcy5jcmVhdGVTZWN0aW9uSGVhZGVyKCdJbXBvcnQgLyBFeHBvcnQnLCAnU2hhcmUgeW91ciBjb25maWd1cmF0aW9uIHdpdGggb3RoZXJzLicpO1xuICAgIHJpZ2h0Q29sdW1uLmFwcGVuZENoaWxkKGltcG9ydEV4cG9ydEhlYWRlcik7XG5cbiAgICBjb25zdCBpbXBvcnRFeHBvcnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbXBvcnRFeHBvcnRDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWltcG9ydC1leHBvcnQtYnV0dG9ucyc7XG4gICAgXG4gICAgY29uc3QgaW1wb3J0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW1wb3J0QnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1idG4gc2VyZW5pdHktYnRuLXByaW1hcnknO1xuICAgIGltcG9ydEJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtdXBsb2FkXCI+PC9pPiBJbXBvcnQgZnJvbSBGaWxlYDtcbiAgICBpbXBvcnRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XG4gICAgICBpbnB1dC5hY2NlcHQgPSAnLmpzb24nO1xuICAgICAgaW5wdXQub25jaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGlmICghZmlsZSkgcmV0dXJuO1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG1hbmFnZXIuaW1wb3J0Q29uZmlndXJhdGlvbihldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICBhbGVydCgnQ29uZmlndXJhdGlvbiBpbXBvcnRlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIGltcG9ydCBjb25maWd1cmF0aW9uLiBUaGUgZmlsZSBtYXkgYmUgY29ycnVwdCBvciBpbXByb3Blcmx5IGZvcm1hdHRlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgICB9O1xuICAgICAgaW5wdXQuY2xpY2soKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGV4cG9ydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGV4cG9ydEJ0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktYnRuJztcbiAgICBleHBvcnRCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLWRvd25sb2FkXCI+PC9pPiBFeHBvcnQgdG8gRmlsZWA7XG4gICAgZXhwb3J0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjb25maWcgPSBtYW5hZ2VyLmV4cG9ydENvbmZpZ3VyYXRpb24oKTtcbiAgICAgIGNvbnN0IGNvbmZpZ1N0ciA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgMik7XG5cbiAgICAgIC8vIENvcHkgdG8gY2xpcGJvYXJkXG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb25maWdTdHIpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuc2hvdyh7XG4gICAgICAgICAgICB0aXRsZTogJ0NvbmZpZyBFeHBvcnRlZCcsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQ29uZmlndXJhdGlvbiBjb3BpZWQgdG8gY2xpcGJvYXJkLicsXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gRG93bmxvYWQgYXMgZmlsZVxuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjb25maWdTdHJdLCB7dHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgIGEuZG93bmxvYWQgPSAnc2VyZW5pdHktY29uZmlnLmpzb24nO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICAgIGEuY2xpY2soKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XG4gICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgfTtcblxuICAgIGltcG9ydEV4cG9ydENvbnRhaW5lci5hcHBlbmRDaGlsZChpbXBvcnRCdG4pO1xuICAgIGltcG9ydEV4cG9ydENvbnRhaW5lci5hcHBlbmRDaGlsZChleHBvcnRCdG4pO1xuXG4gICAgcmlnaHRDb2x1bW4uYXBwZW5kQ2hpbGQoaW1wb3J0RXhwb3J0Q29udGFpbmVyKTtcblxuICAgIGNvbmZpZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodENvbHVtbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb25maWdDb250YWluZXIpO1xuICB9LFxuXG4gIHJlbmRlclNjcmlwdGluZ0NvbnRlbnQoY29udGVudCwgbWFuYWdlcikge1xuICAgIC8vIFBsYWNlaG9sZGVyIGZvciBTY3JpcHRpbmdcbiAgICBjb250ZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwic2VyZW5pdHktcGxhY2Vob2xkZXJcIj5TY3JpcHRpbmcgY29taW5nIHNvb24uLi48L2Rpdj5gO1xuICB9LFxuXG4gIHNoYWRlQ29sb3IoY29sb3IsIHBlcmNlbnQpIHtcbiAgICBsZXQgUiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLDMpLDE2KTtcbiAgICBsZXQgRyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygzLDUpLDE2KTtcbiAgICBsZXQgQiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZyg1LDcpLDE2KTtcblxuICAgIFIgPSBwYXJzZUludChSICogKDEwMCArIHBlcmNlbnQpIC8gMTAwKTtcbiAgICBHID0gcGFyc2VJbnQoRyAqICgxMDAgKyBwZXJjZW50KSAvIDEwMCk7XG4gICAgQiA9IHBhcnNlSW50KEIgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xuXG4gICAgUiA9IChSPDI1NSk/UjoyNTU7ICBcbiAgICBHID0gKEc8MjU1KT9HOjI1NTsgIFxuICAgIEIgPSAoQjwyNTUpP0I6MjU1OyAgXG5cbiAgICBjb25zdCBSUiA9ICgoUi50b1N0cmluZygxNikubGVuZ3RoPT0xKT9cIjBcIitSLnRvU3RyaW5nKDE2KTpSLnRvU3RyaW5nKDE2KSk7XG4gICAgY29uc3QgR0cgPSAoKEcudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrRy50b1N0cmluZygxNik6Ry50b1N0cmluZygxNikpO1xuICAgIGNvbnN0IEJCID0gKChCLnRvU3RyaW5nKDE2KS5sZW5ndGg9PTEpP1wiMFwiK0IudG9TdHJpbmcoMTYpOkIudG9TdHJpbmcoMTYpKTtcblxuICAgIHJldHVybiBcIiNcIitSUitHRytCQjtcbiAgfSxcblxuICBwb3B1bGF0ZU1vZHVsZXNDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNlY3Rpb24taGVhZGVyJztcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRoaXMuYWN0aXZlQ2F0ZWdvcnk7XG4gICAgXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHNlYXJjaElucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgc2VhcmNoSW5wdXQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNlYXJjaC1iYXInO1xuICAgIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaC4uLic7XG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSB0aGlzLnNlYXJjaFF1ZXJ5O1xuICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgIHRoaXMuc2VhcmNoUXVlcnkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMuZmlsdGVyQW5kUmVuZGVyTW9kdWxlcyhtYW5hZ2VyKTtcbiAgICB9KTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBtb2R1bGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kdWxlc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktbW9kdWxlcyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtb2R1bGVzQ29udGFpbmVyKTtcblxuICAgIHRoaXMuZmlsdGVyQW5kUmVuZGVyTW9kdWxlcyhtYW5hZ2VyKTtcbiAgfSxcblxuICBmaWx0ZXJBbmRSZW5kZXJNb2R1bGVzKG1hbmFnZXIpIHtcbiAgICBjb25zdCBtb2R1bGVzQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1tb2R1bGVzJyk7XG4gICAgaWYgKCFtb2R1bGVzQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICBtb2R1bGVzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIGNvbnN0IGNhdGVnb3J5TW9kdWxlcyA9IG1hbmFnZXIuZ2V0TW9kdWxlc0J5Q2F0ZWdvcnkodGhpcy5hY3RpdmVDYXRlZ29yeSk7XG4gICAgY29uc3QgZmlsdGVyZWRNb2R1bGVzID0gY2F0ZWdvcnlNb2R1bGVzLmZpbHRlcihtb2QgPT5cbiAgICAgIG1vZC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgXG4gICAgZmlsdGVyZWRNb2R1bGVzLmZvckVhY2gobW9kID0+IHtcbiAgICAgIGNvbnN0IG1vZHVsZUNhcmQgPSB0aGlzLmNyZWF0ZU1vZHVsZUNhcmQobW9kLCBtYW5hZ2VyKTtcbiAgICAgIG1vZHVsZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kdWxlQ2FyZCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgY3JlYXRlTW9kdWxlQ2FyZChtb2QsIG1hbmFnZXIpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc05hbWUgPSAnc2VyZW5pdHktbW9kdWxlJztcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1vZHVsZS1oZWFkZXInO1xuICAgIFxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1tb2R1bGUtbmFtZSc7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IG1vZC5uYW1lO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udHJvbHMuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1vZHVsZS1jb250cm9scyc7XG5cbiAgICBpZiAobW9kLnNldHRpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNldHRpbmdzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBzZXR0aW5nc0J0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktbW9kdWxlLXNldHRpbmdzLWJ0bic7XG4gICAgICBzZXR0aW5nc0J0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtY29nXCI+PC9pPic7XG4gICAgICBzZXR0aW5nc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuYWN0aXZlU2V0dGluZ3NNb2R1bGUgPSBtb2Q7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudChtYW5hZ2VyKTtcbiAgICAgIH0pO1xuICAgICAgY29udHJvbHMuYXBwZW5kQ2hpbGQoc2V0dGluZ3NCdG4pO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2dnbGUuY2xhc3NOYW1lID0gYHNlcmVuaXR5LW1vZHVsZS10b2dnbGUgJHttb2QuZW5hYmxlZCA/ICdlbmFibGVkJyA6ICcnfWA7XG4gICAgdG9nZ2xlLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInNlcmVuaXR5LXRvZ2dsZS1zbGlkZXJcIj48L3NwYW4+JztcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtYW5hZ2VyLnRvZ2dsZShtb2QubmFtZSk7XG4gICAgICB0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnZW5hYmxlZCcpO1xuICAgIH0pO1xuICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKHRvZ2dsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRyb2xzKTtcbiAgICBcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgXG4gICAgaWYgKG1vZC5kZXNjcmlwdGlvbikge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1tb2R1bGUtZGVzY3JpcHRpb24nO1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBtb2QuZGVzY3JpcHRpb247XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH0sXG5cbiAgcG9wdWxhdGVTZXR0aW5nc0NvbnRlbnQoY29udGVudCwgbWFuYWdlcikge1xuICAgIGNvbnN0IG1vZCA9IHRoaXMuYWN0aXZlU2V0dGluZ3NNb2R1bGU7XG4gICAgaWYgKCFtb2QpIHJldHVybjtcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZWN0aW9uJztcblxuICAgIC8vIEhlYWRlciB3aXRoIGJhY2sgYnV0dG9uXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5ncy1oZWFkZXInO1xuICAgIFxuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBiYWNrQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1iYWNrLWJ0bic7XG4gICAgYmFja0J0bi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCIgc3R5bGU9XCJ3aWR0aDogMC43ZW07IGhlaWdodDogMC43ZW07IG1hcmdpbi1yaWdodDogOHB4OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTkuNCAyMzMuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNsMTkyIDE5MmMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMHMxMi41LTMyLjggMC00NS4zTDc3LjMgMjU2IDI0Ni42IDg2LjZjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNzLTMyLjgtMTIuNS00NS4zIDBsLTE5MiAxOTJ6XCIvPjwvc3ZnPiBCYWNrJztcbiAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVTZXR0aW5nc01vZHVsZSA9IG51bGw7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQobWFuYWdlcik7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke21vZC5uYW1lfSBTZXR0aW5nc2A7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYmFja0J0bik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAvLyBTZXR0aW5ncyBjb250YWluZXJcbiAgICBjb25zdCBzZXR0aW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1tb2R1bGUtc2V0dGluZ3MnO1xuICAgIFxuICAgIG1vZC5zZXR0aW5ncy5mb3JFYWNoKHNldHRpbmcgPT4ge1xuICAgICAgY29uc3Qgc2V0dGluZ0VsZW1lbnQgPSB0aGlzLmNyZWF0ZVNldHRpbmdFbGVtZW50KG1vZCwgc2V0dGluZywgbWFuYWdlcik7XG4gICAgICBpZiAoc2V0dGluZ0VsZW1lbnQpIHtcbiAgICAgICAgLy8gSGFuZGxlIGNvbmRpdGlvbmFsIHZpc2liaWxpdHlcbiAgICAgICAgaWYgKHNldHRpbmcuY29uZGl0aW9uKSB7XG4gICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gc2V0dGluZy5jb25kaXRpb24obW9kLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pKTtcbiAgICAgICAgICBzZXR0aW5nRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNWaXNpYmxlID8gJycgOiAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgc2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0dGluZ0VsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2V0dGluZ3NDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gIH0sXG5cbiAgY3JlYXRlU2V0dGluZ0VsZW1lbnQobW9kdWxlLCBzZXR0aW5nLCBtYW5hZ2VyKSB7XG4gICAgY29uc3Qgc2V0dGluZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR0aW5nV3JhcHBlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZyc7XG4gICAgc2V0dGluZ1dyYXBwZXIuZGF0YXNldC5zZXR0aW5nSWQgPSBzZXR0aW5nLmlkO1xuXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9Db250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmctaW5mbyc7XG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmctbGFiZWwnO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gc2V0dGluZy5uYW1lO1xuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgaWYgKHNldHRpbmcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBkZXNjLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5nLWRlc2NyaXB0aW9uJztcbiAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBzZXR0aW5nLmRlc2NyaXB0aW9uO1xuICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICB9XG4gICAgXG4gICAgc2V0dGluZ1dyYXBwZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb250cm9sQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udHJvbENvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZy1jb250cm9sJztcbiAgICBcbiAgICBzd2l0Y2ggKHNldHRpbmcudHlwZSkge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBzZXR0aW5nLnZhbHVlO1xuICAgICAgICBjaGVja2JveC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY2hlY2tib3gnO1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgIG1hbmFnZXIudXBkYXRlTW9kdWxlU2V0dGluZyhtb2R1bGUubmFtZSwgc2V0dGluZy5pZCwgZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVDb25kaXRpb25hbFNldHRpbmdzKG1vZHVsZSwgbWFuYWdlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250cm9sQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzbGlkZXInOlxuICAgICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBzbGlkZXIudHlwZSA9ICdyYW5nZSc7XG4gICAgICAgIHNsaWRlci5taW4gPSBzZXR0aW5nLm1pbjtcbiAgICAgICAgc2xpZGVyLm1heCA9IHNldHRpbmcubWF4O1xuICAgICAgICBzbGlkZXIuc3RlcCA9IHNldHRpbmcuc3RlcDtcbiAgICAgICAgc2xpZGVyLnZhbHVlID0gc2V0dGluZy52YWx1ZTtcbiAgICAgICAgc2xpZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zbGlkZXInO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgIG1hbmFnZXIudXBkYXRlTW9kdWxlU2V0dGluZyhtb2R1bGUubmFtZSwgc2V0dGluZy5pZCwgcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udHJvbENvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3QuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNlbGVjdCc7XG4gICAgICAgIHNldHRpbmcub3B0aW9ucy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0O1xuICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdDtcbiAgICAgICAgICBpZiAoc2V0dGluZy52YWx1ZSA9PT0gb3B0KSBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgbWFuYWdlci51cGRhdGVNb2R1bGVTZXR0aW5nKG1vZHVsZS5uYW1lLCBzZXR0aW5nLmlkLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVDb25kaXRpb25hbFNldHRpbmdzKG1vZHVsZSwgbWFuYWdlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250cm9sQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRleHRJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICB0ZXh0SW5wdXQudmFsdWUgPSBzZXR0aW5nLnZhbHVlO1xuICAgICAgICB0ZXh0SW5wdXQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRleHQtaW5wdXQnO1xuICAgICAgICB0ZXh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICBtYW5hZ2VyLnVwZGF0ZU1vZHVsZVNldHRpbmcobW9kdWxlLm5hbWUsIHNldHRpbmcuaWQsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRyb2xDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dElucHV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgIGNvbnN0IGNvbG9yUGlja2VyID0gdGhpcy5jcmVhdGVDb2xvclBpY2tlcihtb2R1bGUsIHNldHRpbmcsIG1hbmFnZXIpO1xuICAgICAgICBjb250cm9sQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG9yUGlja2VyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFxuICAgIHNldHRpbmdXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRyb2xDb250YWluZXIpO1xuICAgIHJldHVybiBzZXR0aW5nV3JhcHBlcjtcbiAgfSxcblxuICB1cGRhdGVDb25kaXRpb25hbFNldHRpbmdzKG1vZHVsZSwgbWFuYWdlcikge1xuICAgIGNvbnN0IHNldHRpbmdzTWFwID0gbW9kdWxlLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgIGNvbnN0IHNldHRpbmdzQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1tb2R1bGUtc2V0dGluZ3MnKTtcbiAgICBcbiAgICBtb2R1bGUuc2V0dGluZ3MuZm9yRWFjaChzID0+IHtcbiAgICAgIGlmIChzLmNvbmRpdGlvbikge1xuICAgICAgICBjb25zdCBzZXR0aW5nRWxlbWVudCA9IHNldHRpbmdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNldHRpbmctaWQ9XCIke3MuaWR9XCJdYCk7XG4gICAgICAgIGlmIChzZXR0aW5nRWxlbWVudCkge1xuICAgICAgICAgIHNldHRpbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzLmNvbmRpdGlvbihzZXR0aW5nc01hcCkgPyAnJyA6ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8vIC0tLSBTdGFydCBvZiBDb2xvciBQaWNrZXIgSGVscGVyIEZ1bmN0aW9ucyAtLS1cblxuICBjcmVhdGVDb2xvclBpY2tlcihtb2R1bGUsIHNldHRpbmcsIG1hbmFnZXIpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd3JhcHBlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29sb3ItcGlja2VyLXdyYXBwZXInO1xuXG4gICAgY29uc3Qgc3dhdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3dhdGNoLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb2xvci1zd2F0Y2gnO1xuICAgIHN3YXRjaC5zdHlsZS5jb2xvciA9IHNldHRpbmcudmFsdWU7XG5cbiAgICBjb25zdCBwb3B1cCA9IHRoaXMuY3JlYXRlQ29sb3JQb3B1cChtb2R1bGUsIHNldHRpbmcsIG1hbmFnZXIsIHN3YXRjaCk7XG4gICAgXG4gICAgc3dhdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LWNvbG9yLXBvcHVwJyk7XG4gICAgICBpZiAoYSAmJiBhICE9PSBwb3B1cCkgYS5yZW1vdmUoKVxuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1jb2xvci1wb3B1cCcpID09PSBwb3B1cCkge1xuICAgICAgICAgIHBvcHVwLnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc3dhdGNoKTtcblxuICAgIC8vIENsb3NlIHBvcHVwIHdoZW4gY2xpY2tpbmcgZWxzZXdoZXJlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKCF3cmFwcGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBwb3B1cC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB3cmFwcGVyO1xuICB9LFxuXG4gIGNyZWF0ZUNvbG9yUG9wdXAobW9kdWxlLCBzZXR0aW5nLCBtYW5hZ2VyLCBzd2F0Y2gpIHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb2xvci1wb3B1cCc7XG5cbiAgICBjb25zdCBjb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb2xvcklucHV0LnR5cGUgPSAnY29sb3InO1xuICAgIGNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLnJnYmFUb0hleChzZXR0aW5nLnZhbHVlKS5oZXg7XG4gICAgXG4gICAgY29uc3QgYWxwaGFTbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGFscGhhU2xpZGVyLnR5cGUgPSAncmFuZ2UnO1xuICAgIGFscGhhU2xpZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zbGlkZXInO1xuICAgIGFscGhhU2xpZGVyLm1pbiA9IDA7XG4gICAgYWxwaGFTbGlkZXIubWF4ID0gMTtcbiAgICBhbHBoYVNsaWRlci5zdGVwID0gMC4wMTtcbiAgICBhbHBoYVNsaWRlci52YWx1ZSA9IHRoaXMucmdiYVRvSGV4KHNldHRpbmcudmFsdWUpLmFscGhhO1xuXG4gICAgY29uc3QgdXBkYXRlQ29sb3IgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoZXggPSBjb2xvcklucHV0LnZhbHVlO1xuICAgICAgY29uc3QgYWxwaGEgPSBwYXJzZUZsb2F0KGFscGhhU2xpZGVyLnZhbHVlKTtcbiAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLmhleFRvUmdiYShoZXgsIGFscGhhKTtcbiAgICAgIFxuICAgICAgc3dhdGNoLnN0eWxlLmNvbG9yID0gcmdiYTtcbiAgICAgIG1hbmFnZXIudXBkYXRlTW9kdWxlU2V0dGluZyhtb2R1bGUubmFtZSwgc2V0dGluZy5pZCwgcmdiYSk7XG4gICAgfTtcblxuICAgIGNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVDb2xvcik7XG4gICAgYWxwaGFTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVDb2xvcik7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChjb2xvcklucHV0KTtcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChhbHBoYVNsaWRlcik7XG4gICAgcmV0dXJuIHBvcHVwO1xuICB9LFxuXG4gIGhleFRvUmdiYShoZXgsIGFscGhhKSB7XG4gICAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpO1xuICAgIGNvbnN0IGcgPSBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KTtcbiAgICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNik7XG4gICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YWxwaGF9KWA7XG4gIH0sXG5cbiAgcmdiYVRvSGV4KHJnYmEpIHtcbiAgICBpZiAocmdiYS5zdGFydHNXaXRoKCcjJykpIHJldHVybiB7IGhleDogcmdiYSwgYWxwaGE6IDEgfTtcbiAgICBjb25zdCBwYXJ0cyA9IHJnYmEubWF0Y2goL1tcXGQuXSsvZyk7XG4gICAgaWYgKCFwYXJ0cyB8fCBwYXJ0cy5sZW5ndGggPCAzKSByZXR1cm4geyBoZXg6ICcjMDAwMDAwJywgYWxwaGE6IDEgfTtcbiAgICBcbiAgICBjb25zdCByID0gcGFyc2VJbnQocGFydHNbMF0pLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IGcgPSBwYXJzZUludChwYXJ0c1sxXSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgYiA9IHBhcnNlSW50KHBhcnRzWzJdKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBcbiAgICBjb25zdCBhbHBoYSA9IHBhcnRzLmxlbmd0aCA+PSA0ID8gcGFyc2VGbG9hdChwYXJ0c1szXSkgOiAxO1xuICAgIFxuICAgIHJldHVybiB7IGhleDogYCMke3J9JHtnfSR7Yn1gLCBhbHBoYSB9O1xuICB9LFxuXG4gIGNyZWF0ZVRvZ2dsZVNldHRpbmcobmFtZSwgZGVzY3JpcHRpb24sIGluaXRpYWxWYWx1ZSwgb25DaGFuZ2UpIHtcbiAgICBjb25zdCBzZXR0aW5nV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHRpbmdXcmFwcGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctdG9nZ2xlLXNldHRpbmcnO1xuXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9Db250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmctaW5mbyc7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5nLWxhYmVsJztcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5nLWRlc2NyaXB0aW9uJztcbiAgICBkZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgIGNvbnN0IGNvbnRyb2xDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250cm9sQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5nLWNvbnRyb2wnO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5jaGVja2VkID0gaW5pdGlhbFZhbHVlO1xuICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jaGVja2JveCc7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIG9uQ2hhbmdlKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIH0pO1xuICAgIGNvbnRyb2xDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIFxuICAgIHNldHRpbmdXcmFwcGVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuICAgIHNldHRpbmdXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRyb2xDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHNldHRpbmdXcmFwcGVyO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xpY2tHVUk7XG4iLCAiY29uc3QgRlBTQ291bnRlciA9IHtcbiAgbmFtZTogJ0ZQU0NvdW50ZXInLFxuICBjYXRlZ29yeTogJ1Zpc3VhbCcsXG4gIGRlc2NyaXB0aW9uOiAnRGlzcGxheXMgeW91ciBjdXJyZW50IGZyYW1lcyBwZXIgc2Vjb25kLicsXG4gIGVuYWJsZWQ6IGZhbHNlLFxuICBkZWZhdWx0WDogXCI5MCVcIixcbiAgZGVmYXVsdFk6IFwiNDUlXCIsXG4gIHNldHRpbmdzOiBbXG4gICAgeyBpZDogJ2NvbG9yLW1vZGUnLCBuYW1lOiAnQ29sb3IgTW9kZScsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zOiBbJ1RoZW1lJywgJ0N1c3RvbSddLCB2YWx1ZTogJ1RoZW1lJyB9LFxuICAgIHsgaWQ6ICdiZy1jb2xvcicsIG5hbWU6ICdCYWNrZ3JvdW5kIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDMwLCAzMywgNDEsIDAuODUpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAndGV4dC1jb2xvcicsIG5hbWU6ICdUZXh0IENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjRUFFQUVBJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAnZm9udC1zaXplJywgbmFtZTogJ0ZvbnQgU2l6ZScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTQsIG1pbjogOCwgbWF4OiAyNCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdwYWRkaW5nJywgbmFtZTogJ1BhZGRpbmcnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDgsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdib3JkZXItcmFkaXVzJywgbmFtZTogJ0JvcmRlciBSYWRpdXMnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEwLCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEgfSxcbiAgICB7IGlkOiAnYm9yZGVyLXdpZHRoJywgbmFtZTogJ0JvcmRlciBXaWR0aCcsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMSwgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDEgfSxcbiAgICB7IGlkOiAnYm9yZGVyLWNvbG9yJywgbmFtZTogJ0JvcmRlciBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KScsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgeyBpZDogJ3Nob3ctbGFiZWwnLCBuYW1lOiAnU2hvdyBMYWJlbCcsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICB7IGlkOiAnZm9ybWF0JywgbmFtZTogJ1RleHQgRm9ybWF0JywgdHlwZTogJ3RleHQnLCB2YWx1ZTogJ3tsYWJlbH0ge2Zwc30nLCBkZXNjcmlwdGlvbjogJ1VzZSB7bGFiZWx9IGFuZCB7ZnBzfSBhcyBwbGFjZWhvbGRlcnMuJyB9LFxuICAgIHsgaWQ6ICdoaWRlLWdhbWUtZnBzJywgbmFtZTogJ0hpZGUgR2FtZSBGUFMgQ291bnRlcicsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUsIGRlc2NyaXB0aW9uOiAnSGlkZSB0aGUgYnVpbHQtaW4gZ2FtZSBGUFMgY291bnRlcicgfSxcbiAgXSxcbiAgXG4gIGZyYW1lQ291bnQ6IDAsXG4gIGxhc3RUaW1lOiAwLFxuICBmcHM6IDAsXG4gIGVsZW1lbnQ6IG51bGwsXG4gIGZyYW1lQ2FsbGJhY2s6IG51bGwsXG4gIGdhbWVGcHNFbGVtZW50czogbnVsbCxcbiAgZ2FtZUZwc0Rpc3BsYXlTdHlsZTogbnVsbCxcbiAgXG4gIG9uRW5hYmxlKCkge1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgdGhpcy5sYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMuZnBzID0gMDtcbiAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgXG4gICAgdGhpcy5mcmFtZUNhbGxiYWNrID0gdGhpcy5jb3VudEZyYW1lLmJpbmQodGhpcyk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVDYWxsYmFjayk7XG4gICAgXG4gICAgdGhpcy51cGRhdGVHYW1lRnBzVmlzaWJpbGl0eSgpO1xuICB9LFxuXG4gIG9uRGlzYWJsZSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lEaXNwbGF5KCk7XG4gICAgXG4gICAgdGhpcy5mcmFtZUNhbGxiYWNrID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLnJlc3RvcmVHYW1lRnBzQ291bnRlcigpO1xuICB9LFxuICBcbiAgY291bnRGcmFtZSh0aW1lc3RhbXApIHtcbiAgICB0aGlzLmZyYW1lQ291bnQrKztcbiAgICBcbiAgICBjb25zdCBlbGFwc2VkID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZTtcbiAgICBpZiAoZWxhcHNlZCA+PSAxMDAwKSB7XG4gICAgICB0aGlzLmZwcyA9IE1hdGgucm91bmQoKHRoaXMuZnJhbWVDb3VudCAqIDEwMDApIC8gZWxhcHNlZCk7XG4gICAgICB0aGlzLmZyYW1lQ291bnQgPSAwO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuZnJhbWVDYWxsYmFjaykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVDYWxsYmFjayk7XG4gICAgfVxuICB9LFxuXG4gIG9uVGljaygpIHtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfSxcbiAgXG4gIG9uU2V0dGluZ1VwZGF0ZShzZXR0aW5nSWQpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gICAgXG4gICAgaWYgKHNldHRpbmdJZCA9PT0gJ2hpZGUtZ2FtZS1mcHMnKSB7XG4gICAgICB0aGlzLnVwZGF0ZUdhbWVGcHNWaXNpYmlsaXR5KCk7XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdmcHMtY291bnRlci1kaXNwbGF5JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH0sXG5cbiAgZGVzdHJveURpc3BsYXkoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIFxuICB1cGRhdGVHYW1lRnBzVmlzaWJpbGl0eSgpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgXG4gICAgaWYgKHNldHRpbmdzWydoaWRlLWdhbWUtZnBzJ10pIHtcbiAgICAgIHRoaXMuaGlkZUdhbWVGcHNDb3VudGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzdG9yZUdhbWVGcHNDb3VudGVyKCk7XG4gICAgfVxuICB9LFxuICBcbiAgaGlkZUdhbWVGcHNDb3VudGVyKCkge1xuICAgIGNvbnN0IGZwc1dyYXBwZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRnBzV3JhcHBlckRpdicpO1xuICAgIGlmIChmcHNXcmFwcGVyRGl2KSB7XG4gICAgICB0aGlzLmdhbWVGcHNFbGVtZW50cyA9IGZwc1dyYXBwZXJEaXY7XG4gICAgICB0aGlzLmdhbWVGcHNEaXNwbGF5U3R5bGUgPSBmcHNXcmFwcGVyRGl2LnN0eWxlLmRpc3BsYXk7XG4gICAgICBcbiAgICAgIGZwc1dyYXBwZXJEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0sXG4gIFxuICByZXN0b3JlR2FtZUZwc0NvdW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuZ2FtZUZwc0VsZW1lbnRzKSB7XG4gICAgICB0aGlzLmdhbWVGcHNFbGVtZW50cy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5nYW1lRnBzRGlzcGxheVN0eWxlIHx8ICcnO1xuICAgICAgdGhpcy5nYW1lRnBzRWxlbWVudHMgPSBudWxsO1xuICAgICAgdGhpcy5nYW1lRnBzRGlzcGxheVN0eWxlID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlRGlzcGxheSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgICBjb25zdCBtb2QgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IHR5cGVvZiBtb2QueCA9PT0gJ3N0cmluZycgPyBtb2QueCA6IGAke21vZC54fXB4YDtcbiAgICAgICAgICBpZiAobW9kLnkgIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB0eXBlb2YgbW9kLnkgPT09ICdzdHJpbmcnID8gbW9kLnkgOiBgJHttb2QueX1weGA7XG4gICAgICB9XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgICBsZXQgdGV4dCA9IHNldHRpbmdzLmZvcm1hdDtcblxuICAgICAgaWYgKHNldHRpbmdzWydzaG93LWxhYmVsJ10pIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tsYWJlbH0nLCAnRlBTOicpOyBlbHNlIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tsYWJlbH0nLCAnJyk7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKCd7ZnBzfScsIHRoaXMuZnBzKTtcbiAgICAgIFxuICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gdGV4dC50cmltKCk7XG4gICAgfVxuICB9LFxuXG4gIGFwcGx5U3R5bGVzKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgIFxuICAgIGlmIChzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnVGhlbWUnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcGFuZWwpJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQpJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCB2YXIoLS1ib3JkZXIpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3NbJ2JnLWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9IHNldHRpbmdzWyd0ZXh0LWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgJHtzZXR0aW5nc1snYm9yZGVyLWNvbG9yJ119YDtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmZvbnRTaXplID0gYCR7c2V0dGluZ3NbJ2ZvbnQtc2l6ZSddfXB4YDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9IGAke3NldHRpbmdzWydwYWRkaW5nJ119cHhgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk3O1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGUFNDb3VudGVyO1xuIiwgImxldCBjYWNoZWRQbGF5ZXJOYW1lID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYXllck5hbWUoKSB7XG4gICAgaWYgKGNhY2hlZFBsYXllck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFBsYXllck5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhdE1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkNoYXRNZXNzYWdlcyAuSW5kaXZpZHVhbFRleHQnKTtcbiAgICBcbiAgICBjb25zdCBqb2luTWVzc2FnZXMgPSBBcnJheS5mcm9tKGNoYXRNZXNzYWdlcykuZmlsdGVyKG0gPT4gbS50ZXh0Q29udGVudD8uaW5jbHVkZXMoJyBqb2luZWQnKSk7XG5cbiAgICBpZiAoam9pbk1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbXlKb2luTWVzc2FnZSA9IGpvaW5NZXNzYWdlc1tqb2luTWVzc2FnZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IHRleHQgPSBteUpvaW5NZXNzYWdlLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBuYW1lID0gdGV4dC5zcGxpdCgnIGpvaW5lZCcpWzBdLnRyaW0oKTtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGNhY2hlZFBsYXllck5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgY29sb3IgaW4gYSByYWluYm93IHNlcXVlbmNlIGZvciB0aGUgVUkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgaW4gYSBsaXN0LCB1c2VkIHRvIG9mZnNldCB0aGUgaHVlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkIC0gVGhlIHNwZWVkIG9mIHRoZSBjb2xvciBjeWNsZS4gTG93ZXIgaXMgZmFzdGVyLiBEZWZhdWx0cyB0byAyMC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEFuIEhTTCBjb2xvciBzdHJpbmcgKGUuZy4sIFwiaHNsKDE4MCwgOTAlLCA2NSUpXCIpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFpbmJvd0NvbG9yKGluZGV4LCBzcGVlZCA9IDIwKSB7XG4gIGNvbnN0IGh1ZU9mZnNldCA9IERhdGUubm93KCkgLyBzcGVlZDtcbiAgY29uc3QgaHVlID0gKGluZGV4ICogMTUgKyBodWVPZmZzZXQpICUgMzYwO1xuICByZXR1cm4gYGhzbCgke2h1ZX0sIDkwJSwgNjUlKWA7XG59ICIsICJpbXBvcnQgeyBnZXRQbGF5ZXJOYW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBJbnRlcmZhY2UgPSB7XG4gICAgbmFtZTogJ0ludGVyZmFjZScsXG4gICAgY2F0ZWdvcnk6ICdWaXN1YWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVwbGFjZXMgdGhlIGRlZmF1bHQgaW4tZ2FtZSBoZWFkZXIgd2l0aCBhIGN1c3RvbWl6YWJsZSBvbmUuJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGRlZmF1bHRYOiAyLFxuICAgIGRlZmF1bHRZOiA3LFxuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgZ2FtZUhlYWRlcjogbnVsbCxcbiAgICBnYW1lSGVhZGVyUGFyZW50OiBudWxsLFxuICAgIGdhbWVIZWFkZXJOZXh0U2libGluZzogbnVsbCxcbiAgICBsYXN0UGxheWVyTmFtZTogbnVsbCxcbiAgICBvYnNlcnZlcjogbnVsbCxcblxuICAgIHNldHRpbmdzOiBbXG4gICAgICAgIHsgaWQ6ICdyZW1vdmUtaGVhZGVyJywgbmFtZTogJ1JlbW92ZSBHYW1lIEhlYWRlcicsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUsIGRlc2NyaXB0aW9uOiAnRm9yIHBlcmZvcm1hbmNlLCBtb3ZlIHRoZSBoZWFkZXIgb2ZmLXNjcmVlbiBpbnN0ZWFkIG9mIGp1c3QgaGlkaW5nIGl0LicgfSxcbiAgICAgICAgeyBpZDogJ2NvbG9yLW1vZGUnLCBuYW1lOiAnQ29sb3IgTW9kZScsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zOiBbJ1RoZW1lJywgJ0N1c3RvbSddLCB2YWx1ZTogJ1RoZW1lJyB9LFxuICAgICAgICB7IGlkOiAnYmctY29sb3InLCBuYW1lOiAnQmFja2dyb3VuZCBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgzMCwgMzMsIDQxLCAwLjg1KScsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgICAgIHsgaWQ6ICd0ZXh0LWNvbG9yJywgbmFtZTogJ1RleHQgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJyNFQUVBRUEnLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgICAgICB7IGlkOiAnYWNjZW50LWNvbG9yJywgbmFtZTogJ0FjY2VudCBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAnIzVFNzJFQicsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgICAgIHsgaWQ6ICdmb250LXNpemUnLCBuYW1lOiAnRm9udCBTaXplJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxNiwgbWluOiAxMCwgbWF4OiAyOCwgc3RlcDogMSB9LFxuICAgICAgICB7IGlkOiAncGFkZGluZy15JywgbmFtZTogJ1BhZGRpbmcgKFkpJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiA0LCBtaW46IDAsIG1heDogMzAsIHN0ZXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ3BhZGRpbmcteCcsIG5hbWU6ICdQYWRkaW5nIChYKScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogNiwgbWluOiAwLCBtYXg6IDMwLCBzdGVwOiAxIH0sXG4gICAgICAgIHsgaWQ6ICdib3JkZXItcmFkaXVzJywgbmFtZTogJ0JvcmRlciBSYWRpdXMnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEwLCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ2JvcmRlci13aWR0aCcsIG5hbWU6ICdCb3JkZXIgV2lkdGgnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEsIG1pbjogMCwgbWF4OiA1LCBzdGVwOiAxIH0sXG4gICAgICAgIHsgaWQ6ICdib3JkZXItY29sb3InLCBuYW1lOiAnQm9yZGVyIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgICAgeyBpZDogJ3Nob3ctbG9nbycsIG5hbWU6ICdTaG93IExvZ28nLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6ICdsb2dvLXRleHQnLCBuYW1lOiAnTG9nbyBUZXh0JywgdHlwZTogJ3RleHQnLCB2YWx1ZTogJ1MnLCBjb25kaXRpb246IChzZXR0aW5ncykgPT4gc2V0dGluZ3NbJ3Nob3ctbG9nbyddIH0sXG4gICAgICAgIHsgaWQ6ICdzaG93LW5hbWUnLCBuYW1lOiAnU2hvdyBOYW1lJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiAnc2hvdy1nYW1lbW9kZScsIG5hbWU6ICdTaG93IEdhbWVtb2RlJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiAnc2hvdy1sb2JieScsIG5hbWU6ICdTaG93IExvYmJ5JywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICAgIF0sXG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVIZWFkZXIoKTtcblxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4gdGhpcy5oYW5kbGVIZWFkZXIoKSk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcblxuICAgICAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdG9yZUhlYWRlcigpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIG9uVGljaygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIG9uU2V0dGluZ1VwZGF0ZShzZXR0aW5nSWQpIHtcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3JlbW92ZS1oZWFkZXInKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUhlYWRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5KHRydWUpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5JbkdhbWVIZWFkZXJDb250YWluZXInKTtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5nYW1lSGVhZGVyID0gaGVhZGVyO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkUmVtb3ZlID0gdGhpcy5zZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gJ3JlbW92ZS1oZWFkZXInKS52YWx1ZTtcbiAgICAgICAgICAgIGlmIChzaG91bGRSZW1vdmUpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5sZWZ0ID0gJy05OTk5cHgnO1xuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlc3RvcmVIZWFkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVIZWFkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUhlYWRlci5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgICAgICAgICAgdGhpcy5nYW1lSGVhZGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZ2FtZUhlYWRlci5zdHlsZS50b3AgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZ2FtZUhlYWRlci5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgICAgICAgICB0aGlzLmdhbWVIZWFkZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWludGVyZmFjZS1kaXNwbGF5JztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9ICcyMHB4JztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSAnMjBweCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9LFxuXG4gICAgZGVzdHJveURpc3BsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlRGlzcGxheShmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQodGhpcy5uYW1lKTtcbiAgICAgICAgICAgIGlmIChtb2QueCAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHttb2QueH1weGA7XG4gICAgICAgICAgICBpZiAobW9kLnkgIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHttb2QueX1weGA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnYW1lbW9kZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkluR2FtZUhlYWRlckdhbWVOYW1lJyk7XG4gICAgICAgIGNvbnN0IGxvYmJ5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSW5HYW1lSGVhZGVyTG9iYnlOYW1lJyk7XG5cbiAgICAgICAgY29uc3QgZ2FtZW1vZGUgPSBnYW1lbW9kZUVsID8gZ2FtZW1vZGVFbC50ZXh0Q29udGVudCA6ICdVbmtub3duJztcbiAgICAgICAgY29uc3QgbG9iYnkgPSBsb2JieUVsID8gYCgjJHtsb2JieUVsLnRleHRDb250ZW50fSlgIDogJyc7XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBnZXRQbGF5ZXJOYW1lKCk7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcblxuICAgICAgICBpZiAocGxheWVyTmFtZSAmJiB0aGlzLmxhc3RQbGF5ZXJOYW1lICE9PSBwbGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RQbGF5ZXJOYW1lID0gcGxheWVyTmFtZTtcbiAgICAgICAgICAgIGZvcmNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY29udGVudCA9IGBcbiAgICAgICAgICAgICR7c2V0dGluZ3NbJ3Nob3ctbG9nbyddID8gYDxkaXYgY2xhc3M9XCJzZXJlbml0eS1pbnRlcmZhY2UtbG9nb1wiPiR7c2V0dGluZ3NbJ2xvZ28tdGV4dCddfTwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJlbml0eS1pbnRlcmZhY2UtaW5mb1wiPlxuICAgICAgICAgICAgICAgICR7c2V0dGluZ3NbJ3Nob3ctbmFtZSddICYmIHBsYXllck5hbWUgPyBgPGRpdiBjbGFzcz1cInNlcmVuaXR5LWludGVyZmFjZS1uYW1lXCI+JHtwbGF5ZXJOYW1lfTwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICAke3NldHRpbmdzWydzaG93LWdhbWVtb2RlJ10gPyBgPGRpdiBjbGFzcz1cInNlcmVuaXR5LWludGVyZmFjZS1nYW1lbW9kZVwiPiR7Z2FtZW1vZGV9PC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgICR7c2V0dGluZ3NbJ3Nob3ctbG9iYnknXSA/IGA8ZGl2IGNsYXNzPVwic2VyZW5pdHktaW50ZXJmYWNlLWxvYmJ5XCI+JHtsb2JieX08L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICBjb25zdCBuZXdIYXNoID0gSlNPTi5zdHJpbmdpZnkoY29udGVudCk7XG4gICAgICAgIGlmICh0aGlzLmxhc3RIYXNoICE9PSBuZXdIYXNoIHx8IGZvcmNlKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICAgICAgICAgIHRoaXMubGFzdEhhc2ggPSBuZXdIYXNoO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFwcGx5U3R5bGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzWydjb2xvci1tb2RlJ10gPT09ICdUaGVtZScpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1hY2NlbnQtY29sb3InLCAndmFyKC0tcHJpbWFyeSknKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcGFuZWwpJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0KSc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYCR7c2V0dGluZ3NbJ2JvcmRlci13aWR0aCddfXB4IHNvbGlkIHZhcigtLWJvcmRlcilgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWFjY2VudC1jb2xvcicsIHNldHRpbmdzWydhY2NlbnQtY29sb3InXSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3NbJ2JnLWNvbG9yJ107XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSBzZXR0aW5nc1sndGV4dC1jb2xvciddO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCAke3NldHRpbmdzWydib3JkZXItY29sb3InXX1gO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBgJHtzZXR0aW5nc1snZm9udC1zaXplJ119cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9IGAke3NldHRpbmdzWydwYWRkaW5nLXknXX1weCAke3NldHRpbmdzWydwYWRkaW5nLXgnXX1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk3O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJmYWNlOyAiLCAiaW1wb3J0IHsgZ2V0UGxheWVyTmFtZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuY29uc3QgQ2hhdCA9IHtcbiAgICBuYW1lOiAnQ2hhdCcsXG4gICAgY2F0ZWdvcnk6ICdWaXN1YWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVwbGFjZXMgdGhlIGRlZmF1bHQgaW4tZ2FtZSBjaGF0IHdpdGggYSBjdXN0b21pemFibGUgb25lLicsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBkZWZhdWx0WDogNCxcbiAgICBkZWZhdWx0WTogNTksXG4gICAgZWxlbWVudDogbnVsbCxcbiAgICBnYW1lQ2hhdDogbnVsbCxcbiAgICBjaGF0T2JzZXJ2ZXI6IG51bGwsXG4gICAgbWFpbk9ic2VydmVyOiBudWxsLFxuICAgIGN1c3RvbUlucHV0OiBudWxsLFxuXG4gICAgc2V0dGluZ3M6IFtcbiAgICAgICAgeyBpZDogJ2hpZGUtZ2FtZS1jaGF0JywgbmFtZTogJ0hpZGUgR2FtZSBDaGF0JywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSwgZGVzY3JpcHRpb246ICdIaWRlcyB0aGUgb3JpZ2luYWwgaW4tZ2FtZSBjaGF0IFVJLicgfSxcbiAgICAgICAgeyBpZDogJ2ZvbnQtc2l6ZScsIG5hbWU6ICdGb250IFNpemUnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDE0LCBtaW46IDEwLCBtYXg6IDI0LCBzdGVwOiAxIH0sXG4gICAgICAgIHsgaWQ6ICdtYXgtbWVzc2FnZXMnLCBuYW1lOiAnTWF4IE1lc3NhZ2VzJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiA3LCBtaW46IDUsIG1heDogMjUsIHN0ZXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ3Nob3ctdGltZXN0YW1wcycsIG5hbWU6ICdTaG93IFRpbWVzdGFtcHMnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiBmYWxzZSB9LFxuICAgIF0sXG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVEaXNwbGF5KCk7XG4gICAgICAgIHRoaXMuaGFuZGxlR2FtZUNoYXQoKTtcblxuICAgICAgICB0aGlzLm1haW5PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHRoaXMuaGFuZGxlR2FtZUNoYXQoKSk7XG4gICAgICAgIHRoaXMubWFpbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbk9ic2VydmVyKSB0aGlzLm1haW5PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIGlmICh0aGlzLmNoYXRPYnNlcnZlcikgdGhpcy5jaGF0T2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLnJlc3RvcmVHYW1lQ2hhdCgpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIG9uVGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgICAgICAgaWYgKCFjbGlja0d1aSB8fCAhY2xpY2tHdWkuaXNFZGl0aW5nSFVEKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChtb2QueCAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHttb2QueH1weGA7XG4gICAgICAgICAgICAgICAgaWYgKG1vZC55ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7bW9kLnl9cHhgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uU2V0dGluZ1VwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgICAgICB0aGlzLmhhbmRsZUdhbWVDaGF0KCk7XG4gICAgfSxcblxuICAgIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNoYXQtY29udGFpbmVyJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jaGF0LW1lc3NhZ2VzJztcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VzQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3JlYXRlQ3VzdG9tSW5wdXQoKTtcbiAgICB9LFxuICAgIFxuICAgIGNyZWF0ZUN1c3RvbUlucHV0KCkge1xuICAgICAgICBjb25zdCBpbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5wdXRXcmFwcGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jaGF0LWlucHV0LXdyYXBwZXInO1xuXG4gICAgICAgIHRoaXMuY3VzdG9tSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLmN1c3RvbUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRoaXMuY3VzdG9tSW5wdXQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNoYXQtaW5wdXQnO1xuICAgICAgICB0aGlzLmN1c3RvbUlucHV0LnBsYWNlaG9sZGVyID0gJ1NlbmQgYSBtZXNzYWdlLi4uJztcblxuICAgICAgICB0aGlzLmN1c3RvbUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkNoYXRJbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlmIChnYW1lSW5wdXQgJiYgdGhpcy5jdXN0b21JbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW5wdXQudmFsdWUgPSB0aGlzLmN1c3RvbUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRlckV2ZW50ID0gbmV3IEtleWJvYXJkRXZlbnQoJ2tleWRvd24nLCB7IGtleTogJ0VudGVyJywgY29kZTogJ0VudGVyJywgd2hpY2g6IDEzLCBrZXlDb2RlOiAxMywgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUlucHV0LmRpc3BhdGNoRXZlbnQoZW50ZXJFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgaW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tSW5wdXQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRXcmFwcGVyKTtcbiAgICB9LFxuXG4gICAgc3luY0lucHV0VmlzaWJpbGl0eShnYW1lSW5wdXRXcmFwcGVyKSB7XG4gICAgICAgIGNvbnN0IGlucHV0V3JhcHBlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktY2hhdC1pbnB1dC13cmFwcGVyJyk7XG4gICAgICAgIGlmIChnYW1lSW5wdXRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgaW5wdXRXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jdXN0b21JbnB1dC5mb2N1cygpLCAwKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkZXN0cm95RGlzcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVHYW1lQ2hhdCgpIHtcbiAgICAgICAgY29uc3QgY2hhdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5DaGF0Jyk7XG4gICAgICAgIGlmICghY2hhdENvbnRhaW5lcikgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVDaGF0KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVDaGF0ID0gY2hhdENvbnRhaW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3VsZEhpZGUgPSB0aGlzLnNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSAnaGlkZS1nYW1lLWNoYXQnKS52YWx1ZTtcbiAgICAgICAgdGhpcy5nYW1lQ2hhdC5zdHlsZS52aXNpYmlsaXR5ID0gc2hvdWxkSGlkZSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnO1xuICAgICAgICB0aGlzLmdhbWVDaGF0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBzaG91bGRIaWRlID8gJ25vbmUnIDogJ2F1dG8nO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzQ29udGFpbmVyID0gY2hhdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuQ2hhdE1lc3NhZ2VzJyk7XG4gICAgICAgIGlmIChtZXNzYWdlc0NvbnRhaW5lciAmJiAhdGhpcy5jaGF0T2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktY2hhdC1tZXNzYWdlcycpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgbWVzc2FnZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLk1lc3NhZ2VXcmFwcGVyJykuZm9yRWFjaChub2RlID0+IHRoaXMuYWRkTWVzc2FnZShub2RlKSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hhdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxICYmIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdNZXNzYWdlV3JhcHBlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNoYXRPYnNlcnZlci5vYnNlcnZlKG1lc3NhZ2VzQ29udGFpbmVyLCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdhbWVJbnB1dFdyYXBwZXIgPSBjaGF0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5DaGF0SW5wdXRXcmFwcGVyJyk7XG4gICAgICAgIGlmIChnYW1lSW5wdXRXcmFwcGVyKSB7XG4gICAgICAgICAgICB0aGlzLnN5bmNJbnB1dFZpc2liaWxpdHkoZ2FtZUlucHV0V3JhcHBlcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVzdG9yZUdhbWVDaGF0KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lQ2hhdCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lQ2hhdC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgdGhpcy5nYW1lQ2hhdC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFkZE1lc3NhZ2Uob3JpZ2luYWxOb2RlKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1jaGF0LW1lc3NhZ2VzJyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVzc2FnZURpdi5jbGFzc05hbWUgPSAnc2VyZW5pdHktY2hhdC1tZXNzYWdlJztcbiAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50RGl2LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1tZXNzYWdlLWNvbnRlbnQnO1xuICAgICAgICBjb25zdCBteU5hbWUgPSBnZXRQbGF5ZXJOYW1lKCk7XG5cbiAgICAgICAgb3JpZ2luYWxOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5JbmRpdmlkdWFsVGV4dCcpLmZvckVhY2goc3BhbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWRTcGFuID0gc3Bhbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBpZiAobXlOYW1lICYmIGNsb25lZFNwYW4udGV4dENvbnRlbnQgPT09IG15TmFtZSkge1xuICAgICAgICAgICAgICAgIGNsb25lZFNwYW4uY2xhc3NMaXN0LmFkZCgnc2VyZW5pdHktbWVzc2FnZS1vd24tbmFtZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC9eXFxbLipcXF0kLy50ZXN0KGNsb25lZFNwYW4udGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgY2xvbmVkU3Bhbi5jbGFzc0xpc3QuYWRkKCdzZXJlbml0eS1tZXNzYWdlLXRhZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjbG9uZWRTcGFuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVzc2FnZURpdi5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gJ3Nob3ctdGltZXN0YW1wcycpLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0aW1lc3RhbXAuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1lc3NhZ2UtdGltZXN0YW1wJztcbiAgICAgICAgICAgIHRpbWVzdGFtcC50ZXh0Q29udGVudCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7XG4gICAgICAgICAgICBtZXNzYWdlRGl2Lmluc2VydEJlZm9yZSh0aW1lc3RhbXAsIGNvbnRlbnREaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZURpdik7XG5cbiAgICAgICAgY29uc3QgbWF4TWVzc2FnZXMgPSB0aGlzLnNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSAnbWF4LW1lc3NhZ2VzJykudmFsdWU7XG4gICAgICAgIHdoaWxlIChtZXNzYWdlc0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiBtYXhNZXNzYWdlcykge1xuICAgICAgICAgICAgbWVzc2FnZXNDb250YWluZXIucmVtb3ZlQ2hpbGQobWVzc2FnZXNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIGFwcGx5U3R5bGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jaGF0LWZvbnQtc2l6ZScsIGAke3NldHRpbmdzWydmb250LXNpemUnXX1weGApO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7ICIsICJjb25zdCBLZXlzdHJva2VzID0ge1xuICBuYW1lOiAnS2V5c3Ryb2tlcycsXG4gIGNhdGVnb3J5OiAnQ29tYmF0JyxcbiAgZGVzY3JpcHRpb246ICdEaXNwbGF5cyB5b3VyIGtleXN0cm9rZXMgd2l0aCBhIHNleHksIG1vZGVybiBsb29rLicsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIGRlZmF1bHRYOiA4LFxuICBkZWZhdWx0WTogNTYyLFxuICBlbGVtZW50OiBudWxsLFxuICBrZXlzOiB7XG4gICAgdzogZmFsc2UsIGE6IGZhbHNlLCBzOiBmYWxzZSwgZDogZmFsc2UsXG4gICAgJyAnOiBmYWxzZSwgbG1iOiBmYWxzZSwgcm1iOiBmYWxzZVxuICB9LFxuICBib3VuZEtleURvd246IG51bGwsXG4gIGJvdW5kS2V5VXA6IG51bGwsXG4gIGJvdW5kTW91c2VEb3duOiBudWxsLFxuICBib3VuZE1vdXNlVXA6IG51bGwsXG5cbiAgc2V0dGluZ3M6IFtcbiAgICB7IGlkOiAnc2hvdy1tb3VzZScsIG5hbWU6ICdTaG93IE1vdXNlIEJ1dHRvbnMnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgeyBpZDogJ3NjYWxlJywgbmFtZTogJ1NjYWxlJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxLCBtaW46IDAuNSwgbWF4OiAyLCBzdGVwOiAwLjEgfSxcbiAgICB7IGlkOiAnb3BhY2l0eScsIG5hbWU6ICdPcGFjaXR5JywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAwLjg1LCBtaW46IDAsIG1heDogMSwgc3RlcDogMC4wNSB9LFxuICAgIHsgaWQ6ICdlbmFibGUtYW5pbWF0aW9ucycsIG5hbWU6ICdFbmFibGUgQW5pbWF0aW9ucycsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgXSxcblxuICBvbkVuYWJsZSgpIHtcbiAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgdGhpcy5ib3VuZEtleURvd24gPSBlID0+IHRoaXMudXBkYXRlS2V5U3RhdGUoZS5rZXkudG9Mb3dlckNhc2UoKSwgdHJ1ZSk7XG4gICAgdGhpcy5ib3VuZEtleVVwID0gZSA9PiB0aGlzLnVwZGF0ZUtleVN0YXRlKGUua2V5LnRvTG93ZXJDYXNlKCksIGZhbHNlKTtcbiAgICB0aGlzLmJvdW5kTW91c2VEb3duID0gZSA9PiB7XG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMCkgdGhpcy51cGRhdGVLZXlTdGF0ZSgnbG1iJywgdHJ1ZSk7XG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikgdGhpcy51cGRhdGVLZXlTdGF0ZSgncm1iJywgdHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmJvdW5kTW91c2VVcCA9IGUgPT4ge1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDApIHRoaXMudXBkYXRlS2V5U3RhdGUoJ2xtYicsIGZhbHNlKTtcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAyKSB0aGlzLnVwZGF0ZUtleVN0YXRlKCdybWInLCBmYWxzZSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ib3VuZEtleURvd24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuYm91bmRLZXlVcCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuYm91bmRNb3VzZURvd24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXApO1xuICB9LFxuXG4gIG9uRGlzYWJsZSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lEaXNwbGF5KCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kS2V5RG93bik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5ib3VuZEtleVVwKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5ib3VuZE1vdXNlRG93bik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kTW91c2VVcCk7XG4gIH0sXG5cbiAgb25UaWNrKCkge1xuICAgIHRoaXMudXBkYXRlRGlzcGxheUxvY2F0aW9uKCk7XG4gIH0sXG4gIFxuICBvblNldHRpbmdVcGRhdGUoKSB7XG4gICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICB9LFxuXG4gIHVwZGF0ZUtleVN0YXRlKGtleSwgaXNQcmVzc2VkKSB7XG4gICAgaWYgKHRoaXMua2V5cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB0aGlzLmtleXNba2V5XSA9IGlzUHJlc3NlZDtcbiAgICAgIHRoaXMudXBkYXRlS2V5VmlzdWFscygpO1xuICAgIH1cbiAgfSxcbiAgXG4gIGNyZWF0ZUtleSh0ZXh0LCBrZXksIC4uLmV4dHJhQ2xhc3Nlcykge1xuICAgIGNvbnN0IGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrZXlFbGVtZW50LmNsYXNzTmFtZSA9IGBrZXlzdHJva2VzLWtleSBrZXktJHtrZXl9ICR7ZXh0cmFDbGFzc2VzLmpvaW4oJyAnKX1gO1xuICAgIGtleUVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBrZXlFbGVtZW50O1xuICB9LFxuICBcbiAgY3JlYXRlRGlzcGxheSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ2tleXN0cm9rZXMtZGlzcGxheSc7XG5cbiAgICBjb25zdCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93MS5jbGFzc05hbWUgPSAna2V5c3Ryb2tlcy1yb3cnO1xuICAgIHJvdzEuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVLZXkoJ1cnLCAndycpKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocm93MSk7XG5cbiAgICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93Mi5jbGFzc05hbWUgPSAna2V5c3Ryb2tlcy1yb3cnO1xuICAgIHJvdzIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVLZXkoJ0EnLCAnYScpKTtcbiAgICByb3cyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlS2V5KCdTJywgJ3MnKSk7XG4gICAgcm93Mi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUtleSgnRCcsICdkJykpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChyb3cyKTtcbiAgICBcbiAgICBjb25zdCByb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93My5jbGFzc05hbWUgPSAna2V5c3Ryb2tlcy1yb3cgbW91c2Utcm93JztcbiAgICByb3czLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlS2V5KCdMTUInLCAnbG1iJywgJ21vdXNlLWJ1dHRvbicpKTtcbiAgICByb3czLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlS2V5KCdSTUInLCAncm1iJywgJ21vdXNlLWJ1dHRvbicpKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocm93Myk7XG4gICAgXG4gICAgY29uc3Qgcm93NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdzQuY2xhc3NOYW1lID0gJ2tleXN0cm9rZXMtcm93JztcbiAgICByb3c0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlS2V5KCdTcGFjZScsICcgJywgJ3NwYWNlLWtleScpKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocm93NCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH0sXG5cbiAgZGVzdHJveURpc3BsYXkoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlRGlzcGxheUxvY2F0aW9uKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgIGlmICghY2xpY2tHdWkgfHwgIWNsaWNrR3VpLmlzRWRpdGluZ0hVRCkge1xuICAgICAgICBjb25zdCBtb2QgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgIGlmIChtb2QueCAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHttb2QueH1weGA7XG4gICAgICAgIGlmIChtb2QueSAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke21vZC55fXB4YDtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlS2V5VmlzdWFscygpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMua2V5cykge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmtleS0ke2tleX1gKTtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCB0aGlzLmtleXNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGFwcGx5U3R5bGVzKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgIFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzZXR0aW5ncy5zY2FsZX0pYDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IHNldHRpbmdzLm9wYWNpdHk7XG4gICAgXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW91c2UnLCBzZXR0aW5nc1snc2hvdy1tb3VzZSddKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tYW5pbWF0aW9ucycsICFzZXR0aW5nc1snZW5hYmxlLWFuaW1hdGlvbnMnXSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleXN0cm9rZXM7ICIsICJjb25zdCBUb2dnbGVTcHJpbnQgPSB7XG4gICAgbmFtZTogXCJUb2dnbGVTcHJpbnRcIixcbiAgICBjYXRlZ29yeTogXCJNb3ZlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkF1dG9tYXRpY2FsbHkgc3ByaW50cyBmb3IgeW91IGJ5IHNpbXVsYXRpbmcgYSBTaGlmdCBrZXkgcHJlc3MuXCIsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBzcHJpbnRpbmc6IGZhbHNlLFxuICAgIHNwcmludEludGVydmFsOiBudWxsLFxuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgZGVmYXVsdFg6IFwiODAlXCIsXG4gICAgZGVmYXVsdFk6IFwiODAlXCIsXG5cbiAgICBzZXR0aW5nczogW1xuICAgICAgICB7IGlkOiBcInNob3ctdGV4dFwiLCBuYW1lOiBcIlNob3cgVGV4dFwiLCB0eXBlOiBcImJvb2xlYW5cIiwgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgeyBpZDogXCJjb2xvci1tb2RlXCIsIG5hbWU6IFwiQ29sb3IgTW9kZVwiLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uczogWydUaGVtZScsICdDdXN0b20nXSwgdmFsdWU6ICdUaGVtZScsIGNvbmRpdGlvbjogcyA9PiBzWydzaG93LXRleHQnXSB9LFxuICAgICAgICB7IGlkOiBcImh1ZC10ZXh0XCIsIG5hbWU6IFwiSFVEIFRleHRcIiwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiBcIltTcHJpbnRpbmcgKFRvZ2dsZWQpXVwiLCBjb25kaXRpb246IHMgPT4gc1snc2hvdy10ZXh0J10gfSxcbiAgICAgICAgeyBpZDogJ2JnLWNvbG9yJywgbmFtZTogJ0JhY2tncm91bmQgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMzAsIDMzLCA0MSwgMC44NSknLCBjb25kaXRpb246IHMgPT4gc1snc2hvdy10ZXh0J10gJiYgc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgICAgICB7IGlkOiAndGV4dC1jb2xvcicsIG5hbWU6ICdUZXh0IENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDIzNCwgMjM0LCAyMzQsIDAuOCknLCBjb25kaXRpb246IHMgPT4gc1snc2hvdy10ZXh0J10gJiYgc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgICAgICB7IGlkOiAnZm9udC1zaXplJywgbmFtZTogJ0ZvbnQgU2l6ZScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTYsIG1pbjogOCwgbWF4OiAyNCwgc3RlcDogMSwgY29uZGl0aW9uOiBzID0+IHNbJ3Nob3ctdGV4dCddIH0sXG4gICAgICAgIHsgaWQ6ICdwYWRkaW5nJywgbmFtZTogJ1BhZGRpbmcnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDgsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSwgY29uZGl0aW9uOiBzID0+IHNbJ3Nob3ctdGV4dCddIH0sXG4gICAgICAgIHsgaWQ6ICdib3JkZXItcmFkaXVzJywgbmFtZTogJ0JvcmRlciBSYWRpdXMnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEwLCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEsIGNvbmRpdGlvbjogcyA9PiBzWydzaG93LXRleHQnXSB9LFxuICAgICAgICB7IGlkOiAnYm9yZGVyLXdpZHRoJywgbmFtZTogJ0JvcmRlciBXaWR0aCcsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMSwgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDEsIGNvbmRpdGlvbjogcyA9PiBzWydzaG93LXRleHQnXSB9LFxuICAgICAgICB7IGlkOiAnYm9yZGVyLWNvbG9yJywgbmFtZTogJ0JvcmRlciBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KScsIGNvbmRpdGlvbjogcyA9PiBzWydzaG93LXRleHQnXSAmJiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgXSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5zcHJpbnRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFNwcmludGluZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdHJveURpc3BsYXkoKTtcbiAgICB9LFxuXG4gICAgb25UaWNrKCkge1xuICAgICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICAgIGNvbnN0IGlzVHlwaW5nID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAoWydJTlBVVCcsICdURVhUQVJFQSddLmluY2x1ZGVzKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudGFnTmFtZSkgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pc0NvbnRlbnRFZGl0YWJsZSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaG91bGRCZVNwcmludGluZyA9ICFpc1R5cGluZyAmJiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0d1aU9wZW4pO1xuXG4gICAgICAgIGlmIChzaG91bGRCZVNwcmludGluZyAmJiAhdGhpcy5zcHJpbnRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTcHJpbnRpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICghc2hvdWxkQmVTcHJpbnRpbmcgJiYgdGhpcy5zcHJpbnRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFNwcmludGluZygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGFyZSBhbHJlYWR5IHNwcmludGluZyBlbnN1cmUgYSBmcmVzaCBrZXlkb3duIGdldHMgZmlyZWQgZXZlcnkgdGljayB0byBrZWVwIHNvbWUgZ2FtZXMgaGFwcHlcbiAgICAgICAgaWYgKHNob3VsZEJlU3ByaW50aW5nICYmIHRoaXMuc3ByaW50aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVLZXlEb3duKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIG9uU2V0dGluZ1VwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkodHJ1ZSk7XG4gICAgfSxcblxuICAgIHN0YXJ0U3ByaW50aW5nKCkge1xuICAgICAgICBpZiAodGhpcy5zcHJpbnRpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy5zcHJpbnRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmZpcmVLZXlEb3duKCk7XG4gICAgICAgIC8vIEJhY2t1cCBpbnRlcnZhbCBqdXN0IGluIGNhc2UgdGljayBzdG9wcyBmb3IgYSBiaXQgKGUuZy4gdGFiIGlzIGluIGJhY2tncm91bmQpXG4gICAgICAgIHRoaXMuc3ByaW50SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmZpcmVLZXlEb3duKCksIDIwMCk7XG4gICAgfSxcblxuICAgIHN0b3BTcHJpbnRpbmcoKSB7XG4gICAgICAgIGlmICghdGhpcy5zcHJpbnRpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy5zcHJpbnRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3ByaW50SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zcHJpbnRJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLnNwcmludEludGVydmFsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudCgna2V5dXAnLCB7IGtleTogJ1NoaWZ0Jywga2V5Q29kZTogMTYsIGNvZGU6ICdTaGlmdExlZnQnLCBidWJibGVzOiB0cnVlIH0pKTtcbiAgICB9LFxuXG4gICAgZmlyZUtleURvd24oKSB7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KCdrZXlkb3duJywgeyBrZXk6ICdTaGlmdCcsIGtleUNvZGU6IDE2LCBjb2RlOiAnU2hpZnRMZWZ0JywgYnViYmxlczogdHJ1ZSwgcmVwZWF0OiB0cnVlIH0pKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAndG9nZ2xlc3ByaW50LWh1ZC1kaXNwbGF5JztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgfSxcblxuICAgIGRlc3Ryb3lEaXNwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICAgICAgXG4gICAgICAgIGlmICghc2V0dGluZ3NbJ3Nob3ctdGV4dCddKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5lbmFibGVkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gc2V0dGluZ3NbJ2h1ZC10ZXh0J107XG5cbiAgICAgICAgICAgIGNvbnN0IGNsaWNrR3VpID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCgnQ2xpY2tHVUknKTtcbiAgICAgICAgICAgIGlmICghY2xpY2tHdWkgfHwgIWNsaWNrR3VpLmlzRWRpdGluZ0hVRCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQodGhpcy5uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kLnggIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gdHlwZW9mIG1vZC54ID09PSAnc3RyaW5nJyA/IG1vZC54IDogYCR7bW9kLnh9cHhgO1xuICAgICAgICAgICAgICAgIGlmIChtb2QueSAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IHR5cGVvZiBtb2QueSA9PT0gJ3N0cmluZycgPyBtb2QueSA6IGAke21vZC55fXB4YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhcHBseVN0eWxlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHNldHRpbmdzWydjb2xvci1tb2RlJ10gPT09ICdUaGVtZScpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcGFuZWwpJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0KSc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYCR7c2V0dGluZ3NbJ2JvcmRlci13aWR0aCddfXB4IHNvbGlkIHZhcigtLWJvcmRlcilgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNldHRpbmdzWydiZy1jb2xvciddO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gc2V0dGluZ3NbJ3RleHQtY29sb3InXTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgJHtzZXR0aW5nc1snYm9yZGVyLWNvbG9yJ119YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke3NldHRpbmdzWydmb250LXNpemUnXX1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gYCR7c2V0dGluZ3NbJ3BhZGRpbmcnXX1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gOTk5NztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVTcHJpbnQ7ICIsICJjb25zdCBBcm1vckhVRCA9IHtcbiAgICBuYW1lOiAnQXJtb3JIVUQnLFxuICAgIGNhdGVnb3J5OiAnUGxheWVyJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXlzIHlvdXIgY3VycmVudGx5IGVxdWlwcGVkIGFybW9yIGFuZCBzZWxlY3RlZCBpdGVtLicsXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgb2JzZXJ2ZXI6IG51bGwsXG4gICAgZGVmYXVsdFg6IFwiOTAlXCIsXG4gICAgZGVmYXVsdFk6IFwiNTAlXCIsXG4gICAgc2V0dGluZ3M6IFtcbiAgICAgIHsgaWQ6ICdjb2xvci1tb2RlJywgbmFtZTogJ0NvbG9yIE1vZGUnLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uczogWydUaGVtZScsICdDdXN0b20nXSwgdmFsdWU6ICdUaGVtZScgfSxcbiAgICAgIHsgaWQ6ICdzaG93LXNlbGVjdGVkJywgbmFtZTogJ1Nob3cgU2VsZWN0ZWQgSXRlbScsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICAgIHsgaWQ6ICdkaXNwbGF5LXN0eWxlJywgbmFtZTogJ0Rpc3BsYXkgU3R5bGUnLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uczogWydIb3Jpem9udGFsJywgJ1ZlcnRpY2FsJ10sIHZhbHVlOiAnVmVydGljYWwnIH0sXG4gICAgICB7IGlkOiAnYmctY29sb3InLCBuYW1lOiAnQmFja2dyb3VuZCBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgzMCwgMzMsIDQxLCAwLjg1KScsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgICB7IGlkOiAncGFkZGluZycsIG5hbWU6ICdQYWRkaW5nJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiA0LCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEgfSxcbiAgICAgIHsgaWQ6ICdib3JkZXItcmFkaXVzJywgbmFtZTogJ0JvcmRlciBSYWRpdXMnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDIwLCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEgfSxcbiAgICAgIHsgaWQ6ICdib3JkZXItd2lkdGgnLCBuYW1lOiAnQm9yZGVyIFdpZHRoJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAyLCBtaW46IDAsIG1heDogNSwgc3RlcDogMSB9LFxuICAgICAgeyBpZDogJ2JvcmRlci1jb2xvcicsIG5hbWU6ICdCb3JkZXIgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyknLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgICAgeyBpZDogJ2l0ZW0tc2l6ZScsIG5hbWU6ICdJdGVtIFNpemUnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDY0LCBtaW46IDE2LCBtYXg6IDY0LCBzdGVwOiAxIH0sXG4gICAgICB7IGlkOiAnaXRlbS1zcGFjaW5nJywgbmFtZTogJ0l0ZW0gU3BhY2luZycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxIH0sXG4gICAgXSxcbiAgICBcbiAgICBlbGVtZW50OiBudWxsLFxuICBcbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgIHRoaXMuY3JlYXRlRGlzcGxheSgpO1xuICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgICAgdGhpcy5zZXR1cE9ic2VydmVyKCk7XG4gICAgfSxcbiAgXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXN0cm95RGlzcGxheSgpO1xuICAgIH0sXG4gIFxuICAgIG9uVGljaygpIHtcbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICAgIH0sXG4gICAgXG4gICAgb25TZXR0aW5nVXBkYXRlKCkge1xuICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgICAgdGhpcy51cGRhdGVEaXNwbGF5KHRydWUpOyAvLyBGb3JjZSB1cGRhdGUgdG8gcmVmbGVjdCBzdHlsZSBjaGFuZ2VzXG4gICAgfSxcbiAgXG4gICAgc2V0dXBPYnNlcnZlcigpIHtcbiAgICAgICAgY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBob3RiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSG90QmFyR2FtZUl0ZW1zQ29udGFpbmVyJyk7XG4gICAgICAgICAgICBpZiAoaG90YmFyICYmICF0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uQ2hhbmdlZCA9IG11dGF0aW9ucy5zb21lKG0gPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICBtLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdJbnZlbkl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbkNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGlzcGxheSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGhvdGJhciwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGlzcGxheSh0cnVlKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICghaG90YmFyKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChzZXR1cCwgNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc2V0dXAoKTtcbiAgICB9LFxuICBcbiAgICBjcmVhdGVEaXNwbGF5KCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ2FybW9yLWh1ZC1kaXNwbGF5JztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9LFxuICBcbiAgICBkZXN0cm95RGlzcGxheSgpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gIFxuICAgIGV4dHJhY3RJbWFnZShpdGVtRWxlbWVudCkge1xuICAgICAgICBpZiAoIWl0ZW1FbGVtZW50KSByZXR1cm4gbnVsbDtcbiAgICBcbiAgICAgICAgY29uc3QgdHdvREltYWdlSWNvbiA9IGl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Ud29ESW1hZ2VJY29uJyk7XG4gICAgICAgIGlmICh0d29ESW1hZ2VJY29uKSB7XG4gICAgICAgICAgICBpZiAodHdvREltYWdlSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgJiYgdHdvREltYWdlSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdpbWFnZScsIHNyYzogdHdvREltYWdlSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2Uuc2xpY2UoNSwgLTIpLCBmaWx0ZXI6IG51bGwgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Ud29ESXRlbUdyYXlzY2FsZVZpc2libGVQbmcnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ySGludCA9IGl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Ud29ESXRlbUdyYXlzY2FsZScpO1xuICAgICAgICAgICAgaWYgKGltZykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdpbWFnZScsIHNyYzogaW1nLnNyYywgZmlsdGVyOiBjb2xvckhpbnQgPyBjb2xvckhpbnQuc3R5bGUuZmlsdGVyIDogJycgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBibG9ja0l0ZW0gPSBpdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuQmxvY2tJdGVtJyk7XG4gICAgICAgIGlmIChibG9ja0l0ZW0gJiYgYmxvY2tJdGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSAmJiBibG9ja0l0ZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdpbWFnZScsIHNyYzogYmxvY2tJdGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZS5zbGljZSg1LCAtMiksIGZpbHRlcjogbnVsbCB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB1bmZpbGxlZCA9IGl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5JbnZlbkl0ZW1VbmZpbGxlZCcpO1xuICAgICAgICBpZiAodW5maWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICd1bmZpbGxlZCcsIHNyYzogdW5maWxsZWQuc3R5bGUuYmFja2dyb3VuZEltYWdlLnNsaWNlKDUsIC0yKSB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICBcbiAgICB1cGRhdGVEaXNwbGF5KGZvcmNlVXBkYXRlID0gZmFsc2UpIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gIFxuICAgICAgLy8gVXBkYXRlIHBvc2l0aW9uXG4gICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgICBjb25zdCBtb2QgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IHR5cGVvZiBtb2QueCA9PT0gJ3N0cmluZycgPyBtb2QueCA6IGAke21vZC54fXB4YDtcbiAgICAgICAgICBpZiAobW9kLnkgIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB0eXBlb2YgbW9kLnkgPT09ICdzdHJpbmcnID8gbW9kLnkgOiBgJHttb2QueX1weGA7XG4gICAgICB9XG4gIFxuICAgICAgY29uc3QgYXJtb3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQXJtb3VySXRlbVNsb3RzJyk7XG4gICAgICBjb25zdCBhcm1vckl0ZW1zID0gYXJtb3JDb250YWluZXIgPyBBcnJheS5mcm9tKGFybW9yQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5JbnZlbkl0ZW0nKSkgOiBbXTtcbiAgICAgIGNvbnN0IGFybW9ySW1hZ2VzID0gYXJtb3JJdGVtcy5tYXAoaXRlbSA9PiB0aGlzLmV4dHJhY3RJbWFnZShpdGVtKSkuZmlsdGVyKEJvb2xlYW4pO1xuICBcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCh0aGlzLm5hbWUpLnNldHRpbmdzO1xuICAgICAgY29uc3Qgc2hvd1NlbGVjdGVkID0gc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09ICdzaG93LXNlbGVjdGVkJykudmFsdWU7XG5cbiAgICAgIGNvbnN0IGFsbEltYWdlcyA9IFsuLi5hcm1vckltYWdlc107XG4gICAgICBpZiAoc2hvd1NlbGVjdGVkKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRIb3RiYXJJdGVtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSG90QmFyR2FtZUl0ZW1zQ29udGFpbmVyIC5JbnZlbkl0ZW0uU2VsZWN0ZWQnKTtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1JbWFnZSA9IHRoaXMuZXh0cmFjdEltYWdlKHNlbGVjdGVkSG90YmFySXRlbUVsKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtSW1hZ2UpIHtcbiAgICAgICAgICAgICAgYWxsSW1hZ2VzLnB1c2goc2VsZWN0ZWRJdGVtSW1hZ2UpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBjb25zdCBuZXdDb250ZW50SGFzaCA9IEpTT04uc3RyaW5naWZ5KGFsbEltYWdlcyk7XG4gICAgICBpZiAobmV3Q29udGVudEhhc2ggIT09IHRoaXMubGFzdENvbnRlbnRIYXNoIHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgYWxsSW1hZ2VzLmZvckVhY2goaW1nRGF0YSA9PiB7XG4gICAgICAgICAgaWYgKCFpbWdEYXRhKSByZXR1cm47XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGl0ZW1Db250YWluZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXG4gICAgICAgICAgaWYgKGltZ0RhdGEudHlwZSA9PT0gJ2ltYWdlJyAmJiBpbWdEYXRhLmZpbHRlcikge1xuICAgICAgICAgICAgY29uc3QgaXRlbVNpemUgPSB0aGlzLnNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSAnaXRlbS1zaXplJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBjb2xvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29sb3JDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgY29sb3JDb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICBjb2xvckNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgICAgICBjb2xvckNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgICAgICAgICBjb25zdCBjb2xvclNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY29sb3JTb3VyY2Uuc3JjID0gaW1nRGF0YS5zcmM7XG4gICAgICAgICAgICBjb2xvclNvdXJjZS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgIGNvbG9yU291cmNlLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgICAgIGNvbG9yU291cmNlLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCc7XG4gICAgICAgICAgICBjb2xvclNvdXJjZS5zdHlsZS5maWx0ZXIgPSBpbWdEYXRhLmZpbHRlci5yZXBsYWNlKCcxZW0nLCBgJHtpdGVtU2l6ZX1weGApO1xuICAgICAgICAgICAgY29sb3JTb3VyY2Uuc3R5bGUubWFyZ2luTGVmdCA9IGAtJHtpdGVtU2l6ZX1weGA7XG4gICAgICAgICAgXG4gICAgICAgICAgICBjb2xvckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvclNvdXJjZSk7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG9yQ29udGFpbmVyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZ3JheXNjYWxlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBncmF5c2NhbGVJbWcuc3JjID0gaW1nRGF0YS5zcmM7XG4gICAgICAgICAgICBncmF5c2NhbGVJbWcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgZ3JheXNjYWxlSW1nLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgZ3JheXNjYWxlSW1nLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgICAgIGdyYXlzY2FsZUltZy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnO1xuICAgICAgICAgICAgZ3JheXNjYWxlSW1nLnN0eWxlLm1peEJsZW5kTW9kZSA9ICdtdWx0aXBseSc7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyYXlzY2FsZUltZyk7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nRWxlbWVudC5zcmMgPSBpbWdEYXRhLnNyYztcbiAgICAgICAgICAgIGltZ0VsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICBpbWdFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgICAgIGltZ0VsZW1lbnQuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRIYXNoID0gbmV3Q29udGVudEhhc2g7XG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICAgIH1cbiAgICB9LFxuICBcbiAgICBhcHBseVN0eWxlcygpIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgICBcbiAgICAgIGlmIChzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnVGhlbWUnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcGFuZWwpJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCB2YXIoLS1ib3JkZXIpYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZXR0aW5nc1snYmctY29sb3InXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCAke3NldHRpbmdzWydib3JkZXItY29sb3InXX1gO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9IGAke3NldHRpbmdzWydwYWRkaW5nJ119cHhgO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IGAke3NldHRpbmdzWydib3JkZXItcmFkaXVzJ119cHhgO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleERpcmVjdGlvbiA9IHNldHRpbmdzWydkaXNwbGF5LXN0eWxlJ10gPT09ICdIb3Jpem9udGFsJyA/ICdyb3cnIDogJ2NvbHVtbic7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZ2FwID0gYCR7c2V0dGluZ3NbJ2l0ZW0tc3BhY2luZyddfXB4YDtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICAgIFxuICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgaWYgKCFjbGlja0d1aSB8fCAhY2xpY2tHdWkuaXNFZGl0aW5nSFVEKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk3O1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgXG4gICAgICBjb25zdCBpdGVtQ29udGFpbmVycyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJtb3ItaHVkLWRpc3BsYXkgPiBkaXYnKTtcbiAgICAgIGl0ZW1Db250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7c2V0dGluZ3NbJ2l0ZW0tc2l6ZSddfXB4YDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke3NldHRpbmdzWydpdGVtLXNpemUnXX1weGA7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIFxuICBleHBvcnQgZGVmYXVsdCBBcm1vckhVRDsgIiwgImV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnQ29vcmRpbmF0ZXMnLFxyXG4gIGNhdGVnb3J5OiAnVXRpbGl0eScsXHJcbiAgZGVzY3JpcHRpb246ICdEaXNwbGF5cyB5b3VyIGluLWdhbWUgWCwgWSwgWiBjb29yZGluYXRlcyBhcyBjdXN0b21pemFibGUgdGV4dC4nLFxyXG4gIGVuYWJsZWQ6IGZhbHNlLFxyXG4gIGRlZmF1bHRYOiA0MDgsXHJcbiAgZGVmYXVsdFk6IDExLFxyXG4gIFxyXG4gIGVsZW1lbnQ6IG51bGwsXHJcbiAgb3JpZ2luYWxGaWxsVGV4dDogbnVsbCxcclxuICBzb3VyY2VDYW52YXM6IG51bGwsXHJcbiAgY2FwdHVyZWRUZXh0czogW10sXHJcbiAgbGFzdENhcHR1cmVUaW1lOiAwLFxyXG4gIGNvb3JkaW5hdGVzOiB7IHg6ICcwLjAwJywgeTogJzAuMDAnLCB6OiAnMC4wMCcgfSxcclxuXHJcbiAgc2V0dGluZ3M6IFtcclxuICAgIHsgaWQ6ICdjb2xvci1tb2RlJywgbmFtZTogJ0NvbG9yIE1vZGUnLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uczogWydUaGVtZScsICdDdXN0b20nXSwgdmFsdWU6ICdUaGVtZScgfSxcclxuICAgIHsgaWQ6ICdiZy1jb2xvcicsIG5hbWU6ICdCYWNrZ3JvdW5kIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDMwLCAzMywgNDEsIDAuODUpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcclxuICAgIHsgaWQ6ICd0ZXh0LWNvbG9yJywgbmFtZTogJ1RleHQgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJyNFQUVBRUEnLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxyXG4gICAgeyBpZDogJ2ZvbnQtc2l6ZScsIG5hbWU6ICdGb250IFNpemUnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDE0LCBtaW46IDgsIG1heDogMjQsIHN0ZXA6IDEgfSxcclxuICAgIHsgaWQ6ICdwYWRkaW5nJywgbmFtZTogJ1BhZGRpbmcnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDgsIG1pbjogMCwgbWF4OiAzMCwgc3RlcDogMSB9LFxyXG4gICAgeyBpZDogJ2JvcmRlci13aWR0aCcsIG5hbWU6ICdCb3JkZXIgV2lkdGgnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEsIG1pbjogMCwgbWF4OiA1LCBzdGVwOiAxIH0sXHJcbiAgICB7IGlkOiAnYm9yZGVyLWNvbG9yJywgbmFtZTogJ0JvcmRlciBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KScsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXHJcbiAgICB7IGlkOiAnYm9yZGVyLXJhZGl1cycsIG5hbWU6ICdCb3JkZXIgUmFkaXVzJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxMCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxIH0sXHJcbiAgICB7IGlkOiAnb3BhY2l0eScsIG5hbWU6ICdPcGFjaXR5JywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxLCBtaW46IDAsIG1heDogMSwgc3RlcDogMC4wNSB9LFxyXG4gICAgeyBpZDogJ3NjYWxlJywgbmFtZTogJ1NjYWxlJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxLCBtaW46IDAuNSwgbWF4OiAyLCBzdGVwOiAwLjEgfSxcclxuICAgIHsgaWQ6ICdmb3JtYXQnLCBuYW1lOiAnVGV4dCBGb3JtYXQnLCB0eXBlOiAndGV4dCcsIHZhbHVlOiAnWDoge3h9IFk6IHt5fSBaOiB7en0nLCBkZXNjcmlwdGlvbjogJ1VzZSB7eH0sIHt5fSwgYW5kIHt6fSBhcyBwbGFjZWhvbGRlcnMuJyB9LFxyXG4gICAgeyBpZDogJ2hpZGUtb3JpZ2luYWwnLCBuYW1lOiAnSGlkZSBPcmlnaW5hbCBEaXNwbGF5JywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSwgZGVzY3JpcHRpb246ICdQcmV2ZW50cyB0aGUgZ2FtZSBmcm9tIGRyYXdpbmcgaXRzIG93biBjb29yZGluYXRlcy4nIH0sXHJcbiAgXSxcclxuXHJcbiAgb25FbmFibGUoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmxveGQtc2hvd0Nvb3JkaW5hdGVzJywgJ3RydWUnKTtcclxuICAgIHRoaXMuY3JlYXRlRGlzcGxheSgpO1xyXG4gICAgdGhpcy5hcHBseVN0eWxlcygpO1xyXG4gIH0sXHJcblxyXG4gIG9uRGlzYWJsZSgpIHtcclxuICAgIHRoaXMudW5wYXRjaENhbnZhcygpO1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb25UaWNrKCkge1xyXG4gICAgdGhpcy5wYXRjaENhbnZhcygpO1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gIH0sXHJcblxyXG4gIG9uU2V0dGluZ1VwZGF0ZSgpIHtcclxuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcclxuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xyXG4gIH0sXHJcblxyXG4gIHBhdGNoQ2FudmFzKCkge1xyXG4gICAgaWYgKHRoaXMuc291cmNlQ2FudmFzICYmIHRoaXMuc291cmNlQ2FudmFzLl9zZXJlbml0eUNvb3Jkc1BhdGNoZWQpIHJldHVybjtcclxuICAgIFxyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkNvb3JkaW5hdGVDYW52YXMnKTtcclxuICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMgPSBjYW52YXM7XHJcbiAgICAgIGNvbnN0IGN0eCA9IHRoaXMuc291cmNlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGlmIChjdHguZmlsbFRleHQuX2lzU2VyZW5pdHlDb29yZHNXcmFwcGVyKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLm9yaWdpbmFsRmlsbFRleHQgPSBjdHguZmlsbFRleHQ7XHJcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgY3R4LmZpbGxUZXh0ID0gZnVuY3Rpb24odGV4dCwgeCwgeSwgbWF4V2lkdGgpIHtcclxuICAgICAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBpZiAobm93IC0gc2VsZi5sYXN0Q2FwdHVyZVRpbWUgPiAxMDApIHtcclxuICAgICAgICAgIHNlbGYuY2FwdHVyZWRUZXh0cyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLmxhc3RDYXB0dXJlVGltZSA9IG5vdztcclxuXHJcbiAgICAgICAgaWYgKC9eLT9cXGQrXFwuXFxkezJ9JC8udGVzdCh0ZXh0KSkge1xyXG4gICAgICAgICAgc2VsZi5jYXB0dXJlZFRleHRzLnB1c2godGV4dCk7XHJcbiAgICAgICAgICBpZiAoc2VsZi5jYXB0dXJlZFRleHRzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICBzZWxmLmNvb3JkaW5hdGVzID0ge1xyXG4gICAgICAgICAgICAgIHg6IHNlbGYuY2FwdHVyZWRUZXh0c1swXSxcclxuICAgICAgICAgICAgICB5OiBzZWxmLmNhcHR1cmVkVGV4dHNbMV0sXHJcbiAgICAgICAgICAgICAgejogc2VsZi5jYXB0dXJlZFRleHRzWzJdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgc2VsZi5jYXB0dXJlZFRleHRzID0gW107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1vZFNldHRpbmdzID0gc2VsZi5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcclxuICAgICAgICBpZiAobW9kU2V0dGluZ3NbJ2hpZGUtb3JpZ2luYWwnXSAmJiAvXi0/XFxkK1xcLlxcZHsyfSQvLnRlc3QodGV4dCkpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYub3JpZ2luYWxGaWxsVGV4dC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICB9O1xyXG4gICAgICBjdHguZmlsbFRleHQuX2lzU2VyZW5pdHlDb29yZHNXcmFwcGVyID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMuX3NlcmVuaXR5Q29vcmRzUGF0Y2hlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdW5wYXRjaENhbnZhcygpIHtcclxuICAgIGlmICh0aGlzLnNvdXJjZUNhbnZhcyAmJiB0aGlzLm9yaWdpbmFsRmlsbFRleHQpIHtcclxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5maWxsVGV4dCA9IHRoaXMub3JpZ2luYWxGaWxsVGV4dDtcclxuICAgICAgdGhpcy5vcmlnaW5hbEZpbGxUZXh0ID0gbnVsbDtcclxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMuX3NlcmVuaXR5Q29vcmRzUGF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICBkZWxldGUgdGhpcy5zb3VyY2VDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5maWxsVGV4dC5faXNTZXJlbml0eUNvb3Jkc1dyYXBwZXI7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgY3JlYXRlRGlzcGxheSgpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlRGlzcGxheSgpIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XHJcbiAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBzZXR0aW5ncy5mb3JtYXRcclxuICAgICAgLnJlcGxhY2UoJ3t4fScsIHRoaXMuY29vcmRpbmF0ZXMueClcclxuICAgICAgLnJlcGxhY2UoJ3t5fScsIHRoaXMuY29vcmRpbmF0ZXMueSlcclxuICAgICAgLnJlcGxhY2UoJ3t6fScsIHRoaXMuY29vcmRpbmF0ZXMueik7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xyXG4gICAgaWYgKCFjbGlja0d1aSB8fCAhY2xpY2tHdWkuaXNFZGl0aW5nSFVEKSB7XHJcbiAgICAgIGNvbnN0IG1vZCA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQodGhpcy5uYW1lKTtcclxuICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke21vZC54fXB4YDtcclxuICAgICAgaWYgKG1vZC55ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7bW9kLnl9cHhgO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFwcGx5U3R5bGVzKCkge1xyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcclxuICAgIFxyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk3O1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcclxuXHJcbiAgICBpZiAoc2V0dGluZ3NbJ2NvbG9yLW1vZGUnXSA9PT0gJ1RoZW1lJykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcGFuZWwpJztcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSAndmFyKC0tdGV4dCknO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgdmFyKC0tYm9yZGVyKWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZXR0aW5nc1snYmctY29sb3InXTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSBzZXR0aW5nc1sndGV4dC1jb2xvciddO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgJHtzZXR0aW5nc1snYm9yZGVyLWNvbG9yJ119YDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBgJHtzZXR0aW5ncy5wYWRkaW5nfXB4YDtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzZXR0aW5ncy5zY2FsZX0pYDtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gc2V0dGluZ3Mub3BhY2l0eTtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke3NldHRpbmdzWydmb250LXNpemUnXX1weGA7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9IGAnSW50ZXInLCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmYDtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mb250V2VpZ2h0ID0gJzYwMCc7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xyXG4gIH1cclxufTsgIiwgImNvbnN0IENQU0NvdW50ZXIgPSB7XG4gIG5hbWU6ICdDUFNDb3VudGVyJyxcbiAgY2F0ZWdvcnk6ICdQbGF5ZXInLFxuICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXlzIHlvdXIgY2xpY2tzIHBlciBzZWNvbmQuJyxcbiAgZW5hYmxlZDogZmFsc2UsXG4gIGRlZmF1bHRYOiA3MjQsXG4gIGRlZmF1bHRZOiA3MjYsXG4gIHNldHRpbmdzOiBbXG4gICAgeyBpZDogJ2NvbG9yLW1vZGUnLCBuYW1lOiAnQ29sb3IgTW9kZScsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zOiBbJ1RoZW1lJywgJ0N1c3RvbSddLCB2YWx1ZTogJ1RoZW1lJyB9LFxuICAgIHsgaWQ6ICdiZy1jb2xvcicsIG5hbWU6ICdCYWNrZ3JvdW5kIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDMwLCAzMywgNDEsIDAuODUpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAndGV4dC1jb2xvcicsIG5hbWU6ICdUZXh0IENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjRUFFQUVBJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAnZm9udC1zaXplJywgbmFtZTogJ0ZvbnQgU2l6ZScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTQsIG1pbjogOCwgbWF4OiAyNCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdwYWRkaW5nJywgbmFtZTogJ1BhZGRpbmcnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDgsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdib3JkZXItcmFkaXVzJywgbmFtZTogJ0JvcmRlciBSYWRpdXMnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEwLCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEgfSxcbiAgICB7IGlkOiAnYm9yZGVyLXdpZHRoJywgbmFtZTogJ0JvcmRlciBXaWR0aCcsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMSwgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDEgfSxcbiAgICB7IGlkOiAnYm9yZGVyLWNvbG9yJywgbmFtZTogJ0JvcmRlciBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KScsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgeyBpZDogJ3Nob3ctbGFiZWwnLCBuYW1lOiAnU2hvdyBMYWJlbCcsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICB7IGlkOiAnc2hvdy1sbWInLCBuYW1lOiAnU2hvdyBMTUInLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgeyBpZDogJ3Nob3ctcm1iJywgbmFtZTogJ1Nob3cgUk1CJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICAgIHtcbiAgICAgIGlkOiAnZm9ybWF0JyxcbiAgICAgIG5hbWU6ICdUZXh0IEZvcm1hdCcsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB2YWx1ZTogJ3tsYWJlbH0ge2xtYn0gfCB7cm1ifScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VzZSB7bGFiZWx9LCB7bG1ifSwgYW5kIHtybWJ9IGFzIHBsYWNlaG9sZGVycy4nLFxuICAgIH0sXG4gIF0sXG4gIFxuICBsZWZ0Q2xpY2tzOiBbXSxcbiAgcmlnaHRDbGlja3M6IFtdLFxuICBcbiAgZWxlbWVudDogbnVsbCxcblxuICBvbkVuYWJsZSgpIHtcbiAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgb25EaXNhYmxlKCkge1xuICAgIHRoaXMuZGVzdHJveURpc3BsYXkoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBvblRpY2soKSB7XG4gICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy5sZWZ0Q2xpY2tzID0gdGhpcy5sZWZ0Q2xpY2tzLmZpbHRlcih0ID0+IG5vdyAtIHQgPCAxMDAwKTtcbiAgICB0aGlzLnJpZ2h0Q2xpY2tzID0gdGhpcy5yaWdodENsaWNrcy5maWx0ZXIodCA9PiBub3cgLSB0IDwgMTAwMCk7XG4gICAgXG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH0sXG4gIFxuICBvblNldHRpbmdVcGRhdGUoKSB7XG4gICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9LFxuXG4gIGhhbmRsZU1vdXNlRG93bihlKSB7XG4gICAgaWYgKGUuYnV0dG9uID09PSAwKSB7IC8vIExlZnQgY2xpY2tcbiAgICAgIHRoaXMubGVmdENsaWNrcy5wdXNoKHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICB9IGVsc2UgaWYgKGUuYnV0dG9uID09PSAyKSB7IC8vIFJpZ2h0IGNsaWNrXG4gICAgICB0aGlzLnJpZ2h0Q2xpY2tzLnB1c2gocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgIH1cbiAgfSxcblxuICBjcmVhdGVEaXNwbGF5KCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnY3BzLWNvdW50ZXItZGlzcGxheSc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9LFxuXG4gIGRlc3Ryb3lEaXNwbGF5KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgaWYgKCFjbGlja0d1aSB8fCAhY2xpY2tHdWkuaXNFZGl0aW5nSFVEKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQodGhpcy5uYW1lKTtcbiAgICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke21vZC54fXB4YDtcbiAgICAgICAgaWYgKG1vZC55ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7bW9kLnl9cHhgO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgICBsZXQgdGV4dCA9IHNldHRpbmdzLmZvcm1hdDtcblxuICAgICAgaWYgKHNldHRpbmdzWydzaG93LWxhYmVsJ10pIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tsYWJlbH0nLCAnQ1BTOicpOyBlbHNlIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tsYWJlbH0nLCAnJyk7XG4gICAgICBpZiAoc2V0dGluZ3NbJ3Nob3ctbG1iJ10pIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tsbWJ9JywgdGhpcy5sZWZ0Q2xpY2tzLmxlbmd0aCk7IGVsc2UgdGV4dCA9IHRleHQucmVwbGFjZSgne2xtYn0nLCAnJyk7XG4gICAgICBpZiAoc2V0dGluZ3NbJ3Nob3ctcm1iJ10pIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tybWJ9JywgdGhpcy5yaWdodENsaWNrcy5sZW5ndGgpOyBlbHNlIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tybWJ9JywgJycpO1xuICAgICAgXG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0LnRyaW0oKS5yZXBsYWNlKC9cXHwvZywgKG1hdGNoLCBvZmZzZXQsIHN0cikgPT4ge1xuICAgICAgICBjb25zdCBwcmV2Q2hhciA9IHN0cltvZmZzZXQgLSAxXTtcbiAgICAgICAgY29uc3QgbmV4dENoYXIgPSBzdHJbb2Zmc2V0ICsgMV07XG4gICAgICAgIGlmIChwcmV2Q2hhciAmJiBwcmV2Q2hhci50cmltKCkgPT09ICcnICYmIG5leHRDaGFyICYmIG5leHRDaGFyLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gJ3wnO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJldkNoYXIgfHwgcHJldkNoYXIudHJpbSgpID09PSAnJyB8fCAhbmV4dENoYXIgfHwgbmV4dENoYXIudHJpbSgpID09PSAnJykge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICB9KS50cmltKCk7XG4gICAgfVxuICB9LFxuXG4gIGFwcGx5U3R5bGVzKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgIFxuICAgIGlmIChzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnVGhlbWUnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcGFuZWwpJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQpJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCB2YXIoLS1ib3JkZXIpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3NbJ2JnLWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9IHNldHRpbmdzWyd0ZXh0LWNvbG9yJ107XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgJHtzZXR0aW5nc1snYm9yZGVyLWNvbG9yJ119YDtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmZvbnRTaXplID0gYCR7c2V0dGluZ3NbJ2ZvbnQtc2l6ZSddfXB4YDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9IGAke3NldHRpbmdzWydwYWRkaW5nJ119cHhgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXJhZGl1cyddfXB4YDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk3O1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDUFNDb3VudGVyOyAiLCAiY29uc3QgRlBTQm9vc3RlciA9IHtcbiAgbmFtZTogJ0ZQU0Jvb3N0ZXInLFxuICBjYXRlZ29yeTogJ1V0aWxpdHknLFxuICBkZXNjcmlwdGlvbjogJ09wdGltaXplcyBnYW1lIHBlcmZvcm1hbmNlIGJ5IGFkanVzdGluZyByZXNvbHV0aW9uIGFuZCBvdGhlciBzZXR0aW5ncy4nLFxuICBlbmFibGVkOiBmYWxzZSxcbiAgY2FudmFzOiBudWxsLFxuXG4gIHNldHRpbmdzOiBbXG4gICAge1xuICAgICAgaWQ6ICdyZXNvbHV0aW9uU2NhbGUnLFxuICAgICAgbmFtZTogJ1Jlc29sdXRpb24gU2NhbGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdMb3dlciB2YWx1ZXMgY2FuIGltcHJvdmUgcGVyZm9ybWFuY2UgYXQgdGhlIGNvc3Qgb2YgcXVhbGl0eS4nLFxuICAgICAgdHlwZTogJ3NsaWRlcicsXG4gICAgICB2YWx1ZTogMSxcbiAgICAgIG1pbjogMC4xLFxuICAgICAgbWF4OiAxLjAsXG4gICAgICBzdGVwOiAwLjA1XG4gICAgfVxuICBdLFxuXG4gIG9uRW5hYmxlKG1hbmFnZXIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2EtY2FudmFzJyk7XG4gICAgaWYgKCF0aGlzLmNhbnZhcykge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZQU0Jvb3N0ZXJdIENvdWxkIG5vdCBmaW5kIGdhbWUgY2FudmFzOiAjbm9hLWNhbnZhcycpO1xuICAgICAgbWFuYWdlci5kaXNhYmxlKHRoaXMubmFtZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsV2lkdGgpIHtcbiAgICAgIHRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxXaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgdGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbEhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB9XG4gIH0sXG5cbiAgb25EaXNhYmxlKG1hbmFnZXIpIHtcbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbFdpZHRoKSB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHBhcnNlSW50KHRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxXaWR0aCwgMTApO1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbEhlaWdodCwgMTApO1xuICAgICAgZGVsZXRlIHRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxXaWR0aDtcbiAgICAgIGRlbGV0ZSB0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsSGVpZ2h0O1xuICAgIH1cbiAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgfVxuICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgfSxcbiAgXG4gIG9uU2V0dGluZ1VwZGF0ZShzZXR0aW5nSWQsIHZhbHVlLCBtYW5hZ2VyKSB7XG4gICAgLy8gb25UaWNrIHdpbGwgaGFuZGxlIGl0XG4gIH0sXG5cbiAgb25UaWNrKGR0LCBtYW5hZ2VyKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy5hcHBseVNldHRpbmdzKG1hbmFnZXIpO1xuICAgIH1cbiAgfSxcblxuICBhcHBseVNldHRpbmdzKG1hbmFnZXIpIHtcbiAgICBpZiAoIXRoaXMuY2FudmFzIHx8ICF0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsV2lkdGgpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBzZXR0aW5ncyA9IG1hbmFnZXIuZ2V0KHRoaXMubmFtZSkuc2V0dGluZ3M7XG4gICAgY29uc3QgcmVzb2x1dGlvblNjYWxlID0gc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09ICdyZXNvbHV0aW9uU2NhbGUnKS52YWx1ZTtcbiAgICBjb25zdCBvcmlnaW5hbFdpZHRoID0gcGFyc2VJbnQodGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbFdpZHRoLCAxMCk7XG4gICAgY29uc3Qgb3JpZ2luYWxIZWlnaHQgPSBwYXJzZUludCh0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsSGVpZ2h0LCAxMCk7XG5cbiAgICBjb25zdCBuZXdXaWR0aCA9IE1hdGgucm91bmQob3JpZ2luYWxXaWR0aCAqIHJlc29sdXRpb25TY2FsZSk7XG4gICAgY29uc3QgbmV3SGVpZ2h0ID0gTWF0aC5yb3VuZChvcmlnaW5hbEhlaWdodCAqIHJlc29sdXRpb25TY2FsZSk7XG5cbiAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IG5ld1dpZHRoKSB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IG5ld1dpZHRoO1xuICAgIH1cbiAgICBpZiAodGhpcy5jYW52YXMuaGVpZ2h0ICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IG5ld0hlaWdodDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYW52YXMuc3R5bGUud2lkdGggIT09ICcxMDAlJykge1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCAhPT0gJzEwMCUnKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZQU0Jvb3N0ZXI7ICIsICJjb25zdCBBZEJsb2NrZXIgPSB7XG4gICAgbmFtZTogJ0FkQmxvY2tlcicsXG4gICAgY2F0ZWdvcnk6ICdVdGlsaXR5JyxcbiAgICBkZXNjcmlwdGlvbjogJ0Jsb2NrcyBpbi1nYW1lIGFkcyBhbmQgdHJhY2tlcnMgYnkgaGlkaW5nIGVsZW1lbnRzIGFuZCBpbnRlcmNlcHRpbmcgbmV0d29yayByZXF1ZXN0cy4nLFxuICAgIGVuYWJsZWQ6IHRydWUsXG5cbiAgICBzZXR0aW5nczogW1xuICAgICAgICB7IGlkOiAnaGlkZS1wYWdlLWFkcycsIG5hbWU6ICdIaWRlIEluLVBhZ2UgQWRzJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSwgZGVzY3JpcHRpb246ICdIaWRlcyB2aXNpYmxlIGFkIGNvbnRhaW5lcnMgYW5kIHBvcHVwcy4nIH0sXG4gICAgICAgIHsgaWQ6ICdibG9jay1uZXR3b3JrLWFkcycsIG5hbWU6ICdCbG9jayBBZCBOZXR3b3JrIFJlcXVlc3RzJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSwgZGVzY3JpcHRpb246ICdQcmV2ZW50cyB0aGUgYnJvd3NlciBmcm9tIHJlcXVlc3RpbmcgYWRzIGZyb20ga25vd24gYWQgc2VydmVycy4nIH1cbiAgICBdLFxuXG4gICAgb3JpZ2luYWxGZXRjaDogd2luZG93LmZldGNoLFxuICAgIG9yaWdpbmFsWGhyT3Blbjogd2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuLFxuICAgIG9yaWdpbmFsWGhyU2VuZDogd2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kLFxuICAgIG9ic2VydmVyOiBudWxsLFxuICAgIFxuICAgIGFkU2VsZWN0b3JzOiBbXG4gICAgICAgICcuU3VwZXJSYW5rQWRDb250YWluZXInLFxuICAgICAgICAnLkFkQmFubmVyQ29udGFpbmVyJyxcbiAgICAgICAgJy5QbGF5d2lyZVZpZGVvV3JhcHBlcicsXG4gICAgICAgICcuVWlSZXF1ZXN0cycsXG4gICAgICAgICcuQWRCYW5uZXInLFxuICAgICAgICAnLkdlbmVyaWNWaWRlb1dyYXBwZXInLFxuICAgICAgICAnI2Jsb3hkLWlvXzMwMHg2MDBfMicsXG4gICAgICAgICcuSW52ZW50b3J5QWRPdXRlcidcbiAgICBdLFxuICAgIFxuICAgIGJsb2NrTGlzdDogW1xuICAgICAgICAnZ29vZ2xlc3luZGljYXRpb24uY29tJyxcbiAgICAgICAgJ2dvb2dsZXRhZ3NlcnZpY2VzLmNvbScsXG4gICAgICAgICdnb29nbGUtYW5hbHl0aWNzLmNvbScsXG4gICAgICAgICdkb3VibGVjbGljay5uZXQnLFxuICAgICAgICAnYWRpbnBsYXkuY29tJyxcbiAgICAgICAgJ3BsYXl3aXJlLmNvbScsXG4gICAgICAgICdhbWF6b24tYWRzeXN0ZW0uY29tJyxcbiAgICAgICAgJ2FkbnhzLmNvbSdcbiAgICBdLFxuICAgIFxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLmFwcGx5U2V0dGluZ3MoKTtcbiAgICB9LFxuICAgIFxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy51bnBhdGNoTmV0d29ya1JlcXVlc3RzKCk7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuLWhpZGluZyBlbGVtZW50cyBpcyBub3QgZG9uZSB0byBhdm9pZCBpbnRlcmZlcmluZyB3aXRoIGdhbWUgbG9naWMuIEEgcmVmcmVzaCBpcyBiZXN0LlxuICAgIH0sXG4gICAgXG4gICAgb25TZXR0aW5nVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmFwcGx5U2V0dGluZ3MoKTtcbiAgICB9LFxuXG4gICAgYXBwbHlTZXR0aW5ncygpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuXG4gICAgICAgIGlmIChzZXR0aW5nc1snYmxvY2stbmV0d29yay1hZHMnXSkge1xuICAgICAgICAgICAgdGhpcy5wYXRjaE5ldHdvcmtSZXF1ZXN0cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bnBhdGNoTmV0d29ya1JlcXVlc3RzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2V0dGluZ3NbJ2hpZGUtcGFnZS1hZHMnXSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlUGFnZUFkcygpO1xuICAgICAgICAgICAgdGhpcy5zZXR1cE9ic2VydmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBpc0Jsb2NrZWQodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2NrTGlzdC5zb21lKGRvbWFpbiA9PiB1cmwuaW5jbHVkZXMoZG9tYWluKSk7XG4gICAgfSxcblxuICAgIHBhdGNoTmV0d29ya1JlcXVlc3RzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnID8gaW5wdXQgOiBpbnB1dC51cmw7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc0Jsb2NrZWQodXJsKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbU2VyZW5pdHldIEJsb2NrZWQgZmV0Y2ggcmVxdWVzdCB0bzogJHt1cmx9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgUmVzcG9uc2UobnVsbCwgeyBzdGF0dXM6IDIwNCwgc3RhdHVzVGV4dDogJ05vIENvbnRlbnQnIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxmLm9yaWdpbmFsRmV0Y2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihtZXRob2QsIHVybCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuaXNCbG9ja2VkKHVybCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0Jsb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbU2VyZW5pdHldIEJsb2NrZWQgWEhSIHJlcXVlc3QgdG86ICR7dXJsfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5faXNCbG9ja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5vcmlnaW5hbFhock9wZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzQmxvY2tlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm9yaWdpbmFsWGhyU2VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICB1bnBhdGNoTmV0d29ya1JlcXVlc3RzKCkge1xuICAgICAgICB3aW5kb3cuZmV0Y2ggPSB0aGlzLm9yaWdpbmFsRmV0Y2g7XG4gICAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbiA9IHRoaXMub3JpZ2luYWxYaHJPcGVuO1xuICAgICAgICB3aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQgPSB0aGlzLm9yaWdpbmFsWGhyU2VuZDtcbiAgICB9LFxuXG4gICAgaGlkZUVsZW1lbnQobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5zdHlsZS5vcGFjaXR5ICE9PSAnMCcpIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICAgIG5vZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgaGlkZVBhZ2VBZHMoKSB7XG4gICAgICAgIHRoaXMuYWRTZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKGVsID0+IHRoaXMuaGlkZUVsZW1lbnQoZWwpKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICBzZXR1cE9ic2VydmVyKCkge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRTZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlRWxlbWVudChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKGVsID0+IHRoaXMuaGlkZUVsZW1lbnQoZWwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRCbG9ja2VyOyAiLCAiY29uc3QgQ09ORklHX0tFWSA9ICdsb2dsZXZlbCc7XG5cbmNsYXNzIENvbmZpZ3VyYXRpb24ge1xuICBzdGF0aWMgc2F2ZShjb25maWcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZyk7XG4gICAgICBjb25zdCBlbmNvZGVkID0gYnRvYShqc29uKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENPTkZJR19LRVksIGVuY29kZWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignW0NvbmZpZ3VyYXRpb25dIEVycm9yIHNhdmluZyBjb25maWc6JywgZXJyKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbG9hZCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZW5jb2RlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENPTkZJR19LRVkpO1xuICAgICAgaWYgKCFlbmNvZGVkKSByZXR1cm4gbnVsbDtcblxuICAgICAgY29uc3QganNvbiA9IGF0b2IoZW5jb2RlZCk7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tDb25maWd1cmF0aW9uXSBFcnJvciBsb2FkaW5nIGNvbmZpZzonLCBlcnIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ09ORklHX0tFWSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbjsgIiwgImNvbnN0IENyb3NzaGFpciA9IHtcbiAgICBuYW1lOiAnQ3Jvc3NoYWlyJyxcbiAgICBjYXRlZ29yeTogJ1Zpc3VhbCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXBsYWNlcyB0aGUgZGVmYXVsdCBnYW1lIGNyb3NzaGFpciB3aXRoIGEgY3VzdG9tIG9uZS4nLFxuICAgIGVuYWJsZWQ6IGZhbHNlLFxuXG4gICAgZWxlbWVudDogbnVsbCxcbiAgICBnYW1lQ3Jvc3NoYWlyOiBudWxsLFxuICAgIGdhbWVDcm9zc2hhaXJJbml0aWFsRGlzcGxheTogbnVsbCxcbiAgICBvYnNlcnZlcjogbnVsbCxcblxuICAgIHNldHRpbmdzOiBbXG4gICAgICAgIHsgaWQ6ICdoaWRlLW9yaWdpbmFsJywgbmFtZTogJ0hpZGUgT3JpZ2luYWwgQ3Jvc3NoYWlyJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgaWQ6ICdtb2RlJywgXG4gICAgICAgICAgICBuYW1lOiAnTW9kZScsIFxuICAgICAgICAgICAgdHlwZTogJ3NlbGVjdCcsIFxuICAgICAgICAgICAgdmFsdWU6ICdDcm9zcycsIFxuICAgICAgICAgICAgb3B0aW9uczogWydDcm9zcycsICdQbHVzJywgJ0RvdCcsICdDaXJjbGUnLCAnVC1TaGFwZScsICdBcnJvdycsICdDdXN0b20gSW1hZ2UnXSBcbiAgICAgICAgfSxcbiAgICAgICAgeyBpZDogJ2NvbG9yLW1vZGUnLCBuYW1lOiAnQ29sb3IgTW9kZScsIHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zOiBbJ1RoZW1lJywgJ0N1c3RvbSddLCB2YWx1ZTogJ1RoZW1lJywgY29uZGl0aW9uOiAoc2V0dGluZ3MpID0+IHNldHRpbmdzWydtb2RlJ10gIT09ICdDdXN0b20gSW1hZ2UnIH0sXG4gICAgICAgIHsgaWQ6ICdpbWFnZS11cmwnLCBuYW1lOiAnSW1hZ2UgVVJMJywgdHlwZTogJ3RleHQnLCB2YWx1ZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vTThNNEczay5wbmcnLCBjb25kaXRpb246IChzZXR0aW5ncykgPT4gc2V0dGluZ3NbJ21vZGUnXSA9PT0gJ0N1c3RvbSBJbWFnZScgfSxcbiAgICAgICAgeyBpZDogJ3NpemUnLCBuYW1lOiAnU2l6ZScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTIsIG1pbjogMSwgbWF4OiAxMDAsIHN0ZXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ2NvbG9yJywgbmFtZTogJ0NvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjRkZGRkZGJywgY29uZGl0aW9uOiAoc2V0dGluZ3MpID0+IHNldHRpbmdzWydtb2RlJ10gIT09ICdDdXN0b20gSW1hZ2UnICYmIHNldHRpbmdzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgICAgIHsgaWQ6ICd0aGlja25lc3MnLCBuYW1lOiAnVGhpY2tuZXNzJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAyLCBtaW46IDEsIG1heDogMjAsIHN0ZXA6IDEsIGNvbmRpdGlvbjogKHNldHRpbmdzKSA9PiBbJ0Nyb3NzJywgJ1BsdXMnLCAnQ2lyY2xlJywgJ1QtU2hhcGUnXS5pbmNsdWRlcyhzZXR0aW5nc1snbW9kZSddKSB9LFxuICAgICAgICB7IGlkOiAnb3V0bGluZScsIG5hbWU6ICdPdXRsaW5lJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSwgY29uZGl0aW9uOiAoc2V0dGluZ3MpID0+IHNldHRpbmdzWydtb2RlJ10gIT09ICdDdXN0b20gSW1hZ2UnIH0sXG4gICAgICAgIHsgaWQ6ICdvdXRsaW5lLWNvbG9yJywgbmFtZTogJ091dGxpbmUgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJyMwMDAwMDAnLCBjb25kaXRpb246IChzZXR0aW5ncykgPT4gc2V0dGluZ3NbJ291dGxpbmUnXSAmJiBzZXR0aW5nc1snbW9kZSddICE9PSAnQ3VzdG9tIEltYWdlJyAmJiBzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgIF0sXG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVEaXNwbGF5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3Jvc3NoYWlyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmhhbmRsZUdhbWVDcm9zc2hhaXIoKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHRoaXMuaGFuZGxlR2FtZUNyb3NzaGFpcigpKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdHJveURpc3BsYXkoKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlR2FtZUNyb3NzaGFpcigpO1xuICAgICAgICB0aGlzLmdhbWVDcm9zc2hhaXIgPSBudWxsO1xuICAgICAgICB0aGlzLmdhbWVDcm9zc2hhaXJJbml0aWFsRGlzcGxheSA9IG51bGw7XG4gICAgfSxcblxuICAgIG9uU2V0dGluZ1VwZGF0ZShzZXR0aW5nSWQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDcm9zc2hhaXIoKTtcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ2hpZGUtb3JpZ2luYWwnKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUdhbWVDcm9zc2hhaXIoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVhdGVEaXNwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNyb3NzaGFpcic7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSAnNTAlJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSAnNTAlJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9ICc5OTk5JztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95RGlzcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgaGFuZGxlR2FtZUNyb3NzaGFpcigpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkSGlkZSA9IHRoaXMuc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09ICdoaWRlLW9yaWdpbmFsJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGdhbWVDcm9zc2hhaXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Dcm9zc0hhaXInKTtcblxuICAgICAgICBpZiAoc2hvdWxkSGlkZSkge1xuICAgICAgICAgICAgaWYgKGdhbWVDcm9zc2hhaXJFbCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVDcm9zc2hhaXIgIT09IGdhbWVDcm9zc2hhaXJFbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDcm9zc2hhaXIgPSBnYW1lQ3Jvc3NoYWlyRWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNyb3NzaGFpckluaXRpYWxEaXNwbGF5ID0gZ2FtZUNyb3NzaGFpckVsLnN0eWxlLmRpc3BsYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNyb3NzaGFpci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlR2FtZUNyb3NzaGFpcigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICByZXN0b3JlR2FtZUNyb3NzaGFpcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUNyb3NzaGFpcikge1xuICAgICAgICAgICAgdGhpcy5nYW1lQ3Jvc3NoYWlyLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmdhbWVDcm9zc2hhaXJJbml0aWFsRGlzcGxheSB8fCAnJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgdXBkYXRlQ3Jvc3NoYWlyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICAgICAgbGV0IHsgbW9kZSwgc2l6ZSwgY29sb3IsIHRoaWNrbmVzcywgb3V0bGluZSwgJ291dGxpbmUtY29sb3InOiBvdXRsaW5lQ29sb3IsICdpbWFnZS11cmwnOiBpbWFnZVVybCwgJ2NvbG9yLW1vZGUnOiBjb2xvck1vZGUgfSA9IHNldHRpbmdzO1xuXG4gICAgICAgIGlmIChjb2xvck1vZGUgPT09ICdUaGVtZScgJiYgbW9kZSAhPT0gJ0N1c3RvbSBJbWFnZScpIHtcbiAgICAgICAgICAgIGNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tcHJpbWFyeScpLnRyaW0oKTtcbiAgICAgICAgICAgIG91dGxpbmVDb2xvciA9ICcjMDAwMDAwJzsgLy8gRGVmYXVsdCBvdXRsaW5lIGZvciB0aGVtZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3V0bGluZVN0eWxlID0gb3V0bGluZSA/IGAwcHggMHB4IDJweCAke291dGxpbmVDb2xvcn0sIDBweCAwcHggMnB4ICR7b3V0bGluZUNvbG9yfSwgMHB4IDBweCAycHggJHtvdXRsaW5lQ29sb3J9LCAwcHggMHB4IDJweCAke291dGxpbmVDb2xvcn1gIDogJ25vbmUnO1xuXG4gICAgICAgIHN3aXRjaChtb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdDdXN0b20gSW1hZ2UnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBgJHtzaXplfXB4YDtcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0RvdCc6XG4gICAgICAgICAgICAgICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZG90LnN0eWxlLndpZHRoID0gYCR7c2l6ZX1weGA7XG4gICAgICAgICAgICAgICAgZG90LnN0eWxlLmhlaWdodCA9IGAke3NpemV9cHhgO1xuICAgICAgICAgICAgICAgIGRvdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgICAgICBkb3Quc3R5bGUuYm9yZGVyUmFkaXVzID0gJzUwJSc7XG4gICAgICAgICAgICAgICAgZG90LnN0eWxlLnRleHRTaGFkb3cgPSBvdXRsaW5lU3R5bGU7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRvdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0NpcmNsZSc6XG4gICAgICAgICAgICAgICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLndpZHRoID0gYCR7c2l6ZX1weGA7XG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmhlaWdodCA9IGAke3NpemV9cHhgO1xuICAgICAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5ib3JkZXIgPSBgJHt0aGlja25lc3N9cHggc29saWQgJHtjb2xvcn1gO1xuICAgICAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNTAlJztcbiAgICAgICAgICAgICAgICBjaXJjbGUuc3R5bGUudGV4dFNoYWRvdyA9IG91dGxpbmVTdHlsZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQ3Jvc3MnOlxuICAgICAgICAgICAgY2FzZSAnUGx1cyc6XG4gICAgICAgICAgICBjYXNlICdULVNoYXBlJzpcbiAgICAgICAgICAgICAgICBjb25zdCBnYXAgPSBtb2RlID09PSAnQ3Jvc3MnID8gTWF0aC5tYXgoMSwgc2l6ZSAvIDQpIDogMDtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBzaXplO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB7IHRvcDogYC0ke2dhcCArIGxlbmd0aH1weGAsIGxlZnQ6IGAtJHt0aGlja25lc3MgLyAyfXB4YCwgd2lkdGg6IGAke3RoaWNrbmVzc31weGAsIGhlaWdodDogYCR7bGVuZ3RofXB4YCB9LFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IHsgdG9wOiBgJHtnYXB9cHhgLCBsZWZ0OiBgLSR7dGhpY2tuZXNzIC8gMn1weGAsIHdpZHRoOiBgJHt0aGlja25lc3N9cHhgLCBoZWlnaHQ6IGAke2xlbmd0aH1weGAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogeyBsZWZ0OiBgLSR7Z2FwICsgbGVuZ3RofXB4YCwgdG9wOiBgLSR7dGhpY2tuZXNzIC8gMn1weGAsIHdpZHRoOiBgJHtsZW5ndGh9cHhgLCBoZWlnaHQ6IGAke3RoaWNrbmVzc31weGAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHsgbGVmdDogYCR7Z2FwfXB4YCwgdG9wOiBgLSR7dGhpY2tuZXNzIC8gMn1weGAsIHdpZHRoOiBgJHtsZW5ndGh9cHhgLCBoZWlnaHQ6IGAke3RoaWNrbmVzc31weGAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGxpbmVzVG9EcmF3ID0gWyd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnXTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ1QtU2hhcGUnKSBsaW5lc1RvRHJhdyA9IFsnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnXTtcblxuICAgICAgICAgICAgICAgIGxpbmVzVG9EcmF3LmZvckVhY2gocG9zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zdHlsZS50ZXh0U2hhZG93ID0gb3V0bGluZVN0eWxlO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGxpbmUuc3R5bGUsIHBvc2l0aW9uc1twb3NdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGxpbmUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlICdBcnJvdyc6XG4gICAgICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBhcnJvdy5zdHlsZS53aWR0aCA9ICcwJztcbiAgICAgICAgICAgICAgICBhcnJvdy5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgICAgICAgICAgYXJyb3cuc3R5bGUuYm9yZGVyTGVmdCA9IGAke3NpemUgLyAyfXB4IHNvbGlkIHRyYW5zcGFyZW50YDtcbiAgICAgICAgICAgICAgICBhcnJvdy5zdHlsZS5ib3JkZXJSaWdodCA9IGAke3NpemUgLyAyfXB4IHNvbGlkIHRyYW5zcGFyZW50YDtcbiAgICAgICAgICAgICAgICBhcnJvdy5zdHlsZS5ib3JkZXJCb3R0b20gPSBgJHtzaXplfXB4IHNvbGlkICR7Y29sb3J9YDtcbiAgICAgICAgICAgICAgICBpZihvdXRsaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LnN0eWxlLmZpbHRlciA9IGBkcm9wLXNoYWRvdygwIDFweCAxcHggJHtvdXRsaW5lQ29sb3J9KSBkcm9wLXNoYWRvdygwIC0xcHggMXB4ICR7b3V0bGluZUNvbG9yfSkgZHJvcC1zaGFkb3coMXB4IDAgMXB4ICR7b3V0bGluZUNvbG9yfSkgZHJvcC1zaGFkb3coLTFweCAwIDFweCAke291dGxpbmVDb2xvcn0pYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcm9zc2hhaXI7ICIsICJjbGFzcyBOb3RpZmljYXRpb25NYW5hZ2VyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbnQtYXdlc29tZS1saW5rJykpIHtcclxuICAgICAgY29uc3QgZm9udEF3ZXNvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICBmb250QXdlc29tZUxpbmsuaWQgPSAnZm9udC1hd2Vzb21lLWxpbmsnO1xyXG4gICAgICBmb250QXdlc29tZUxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG4gICAgICBmb250QXdlc29tZUxpbmsuaHJlZiA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS40L2Nzcy9hbGwubWluLmNzcyc7XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZm9udEF3ZXNvbWVMaW5rKTtcclxuICAgIH1cclxuICAgICAgXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1jb250YWluZXInKSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1jb250YWluZXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktbm90aWZpY2F0aW9uLWNvbnRhaW5lcic7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93KHsgdGl0bGUgPSAnU2VyZW5pdHknLCBtZXNzYWdlLCB0eXBlID0gJ2luZm8nLCBkdXJhdGlvbiA9IDMwMDAgfSkge1xyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gYHNlcmVuaXR5LW5vdGlmaWNhdGlvbiBzZXJlbml0eS1ub3RpZmljYXRpb24tJHt0eXBlfWA7XHJcbiAgICBcclxuICAgIGNvbnN0IGljb25NYXAgPSB7XHJcbiAgICAgIGluZm86IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxNWMtLjU1IDAtMS0uNDUtMS0xdi00YzAtLjU1LjQ1LTEgMS0xczEgLjQ1IDEgMXY0YzAgLjU1LS40NSAxLTEgMXptMS04aC0yVjdoMnYyelwiPjwvcGF0aD48L3N2Zz5gLFxyXG4gICAgICBzdWNjZXNzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDE1bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6XCI+PC9wYXRoPjwvc3ZnPmAsXHJcbiAgICAgIHdhcm5pbmc6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0elwiPjwvcGF0aD48L3N2Zz5gLFxyXG4gICAgICBlcnJvcjogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi0yaDJ2MnptMC00aC0yVjdoMnYyelwiPjwvcGF0aD48L3N2Zz5gLFxyXG4gICAgfTtcclxuXHJcbiAgICBub3RpZmljYXRpb24uaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24td3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZXJlbml0eS1ub3RpZmljYXRpb24taWNvblwiPiR7aWNvbk1hcFt0eXBlXSB8fCBpY29uTWFwLmluZm99PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktbm90aWZpY2F0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktbm90aWZpY2F0aW9uLXRpdGxlXCI+JHt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktbm90aWZpY2F0aW9uLW1lc3NhZ2VcIj4ke21lc3NhZ2V9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwic2VyZW5pdHktbm90aWZpY2F0aW9uLWNsb3NlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktbm90aWZpY2F0aW9uLXRpbWVyXCI+PC9kaXY+XHJcbiAgICBgO1xyXG4gICAgXHJcbiAgICB0aGlzLmNvbnRhaW5lci5wcmVwZW5kKG5vdGlmaWNhdGlvbik7XHJcbiAgICBcclxuICAgIC8vIEFuaW1hdGUgaW5cclxuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5hbmltYXRpb24gPSAnc2VyZW5pdHktbm90aWZpY2F0aW9uLWluIDAuNXMgZm9yd2FyZHMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4yLCAxKSc7XHJcblxyXG4gICAgY29uc3QgdGltZXJCYXIgPSBub3RpZmljYXRpb24ucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi10aW1lcicpO1xyXG4gICAgdGltZXJCYXIuc3R5bGUudHJhbnNpdGlvbiA9IGB3aWR0aCAke2R1cmF0aW9ufW1zIGxpbmVhcmA7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZih0aW1lckJhcikgdGltZXJCYXIuc3R5bGUud2lkdGggPSAnMCUnO1xyXG4gICAgfSwgMTApO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgICBpZiAobm90aWZpY2F0aW9uLmNsYXNzTGlzdC5jb250YWlucygnZXhpdGluZycpKSByZXR1cm47XHJcbiAgICAgIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdleGl0aW5nJyk7XHJcbiAgICAgIFxyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5hbmltYXRpb24gPSAnc2VyZW5pdHktbm90aWZpY2F0aW9uLW91dCAwLjVzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjgsIDAsIDAuOCwgMCknO1xyXG4gICAgICBub3RpZmljYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKGUpID0+IHtcclxuICAgICAgICBpZihlLmFuaW1hdGlvbk5hbWUgPT09ICdzZXJlbml0eS1ub3RpZmljYXRpb24tb3V0Jykge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBub3RpZmljYXRpb24ucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1jbG9zZScpO1xyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSwgeyBvbmNlOiB0cnVlIH0pO1xyXG4gICAgXHJcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoY2xvc2UsIGR1cmF0aW9uKTtcclxuXHJcbiAgICBub3RpZmljYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgdGltZXJCYXIuc3R5bGUud2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHRpbWVyQmFyKS53aWR0aDtcclxuICAgIH0pO1xyXG5cclxuICAgIG5vdGlmaWNhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsb3NlLCBkdXJhdGlvbik7IC8vIHJlc3RhcnQgd2l0aCBmdWxsIGR1cmF0aW9uXHJcbiAgICAgICAgdGltZXJCYXIuc3R5bGUudHJhbnNpdGlvbiA9IGB3aWR0aCAke2R1cmF0aW9ufW1zIGxpbmVhcmA7XHJcbiAgICAgICAgdGltZXJCYXIuc3R5bGUud2lkdGggPSAnMCUnO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25NYW5hZ2VyOyAiLCAiY29uc3QgTm90aWZpY2F0aW9ucyA9IHtcclxuICBuYW1lOiAnTm90aWZpY2F0aW9ucycsXHJcbiAgY2F0ZWdvcnk6ICdVdGlsaXR5JyxcclxuICBkZXNjcmlwdGlvbjogJ1Nob3dzIGFsZXJ0cyB3aGVuIG1vZHVsZXMgYXJlIHRvZ2dsZWQuJyxcclxuICBlbmFibGVkOiBmYWxzZSxcclxuICBzZXR0aW5nczogW11cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbnM7ICIsICJpbXBvcnQgeyBnZXRSYWluYm93Q29sb3IgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8vIEEgaGVscGVyIHRvIGNhY2hlIGNhbnZhcyBjb250ZXh0IGZvciBtZWFzdXJpbmcsIGltcHJvdmluZyBwZXJmb3JtYW5jZS5cbmNvbnN0IFRfQ1RYX0NBQ0hFID0ge1xuICAgIF9jdHg6IG51bGwsXG4gICAgZ2V0Q29udGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5fY3R4KSB7XG4gICAgICAgICAgICB0aGlzLl9jdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jdHg7XG4gICAgfVxufTtcblxuY29uc3QgQXJyYXlMaXN0ID0ge1xuICAgIG5hbWU6ICdBcnJheUxpc3QnLFxuICAgIGNhdGVnb3J5OiAnVmlzdWFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXlzIGEgbGlzdCBvZiBlbmFibGVkIG1vZHVsZXMuJyxcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIFxuICAgIHNldHRpbmdzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnY29sb3ItbW9kZScsXG4gICAgICAgICAgICBuYW1lOiAnQ29sb3IgTW9kZScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBjb2xvciBzdHlsZSBvZiB0aGUgbW9kdWxlIGxpc3QuJyxcbiAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgb3B0aW9uczogWydSYWluYm93JywgJ1N0YXRpYyddLFxuICAgICAgICAgICAgdmFsdWU6ICdTdGF0aWMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAndXNlLXRoZW1lLWNvbG9yJyxcbiAgICAgICAgICAgIG5hbWU6ICdVc2UgVGhlbWUgQ29sb3InLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVc2UgdGhlIG1haW4gdGhlbWUgY29sb3IgZm9yIHN0YXRpYyBtb2RlLicsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogKHNldHRpbmdzKSA9PiBzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnU3RhdGljJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ3N0YXRpYy1jb2xvcicsXG4gICAgICAgICAgICBuYW1lOiAnQ3VzdG9tIFN0YXRpYyBDb2xvcicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBjb2xvciBvZiB0aGUgdGV4dCBpZiBub3QgdXNpbmcgdGhlIHRoZW1lIGNvbG9yLicsXG4gICAgICAgICAgICB0eXBlOiAnY29sb3InLFxuICAgICAgICAgICAgdmFsdWU6ICdyZ2JhKDk0LCAxMTQsIDIzNSwgMSknLFxuICAgICAgICAgICAgY29uZGl0aW9uOiAoc2V0dGluZ3MpID0+IHNldHRpbmdzWydjb2xvci1tb2RlJ10gPT09ICdTdGF0aWMnICYmICFzZXR0aW5nc1sndXNlLXRoZW1lLWNvbG9yJ11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdib3JkZXInLFxuICAgICAgICAgICAgbmFtZTogJ1Nob3cgQm9yZGVyJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGlzcGxheSBhIGNvbG9yZWQgYm9yZGVyIG9uIHRoZSBzaWRlIG9mIHRoZSBsaXN0LicsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICd0ZXh0LXNoYWRvdycsXG4gICAgICAgICAgICBuYW1lOiAnVGV4dCBTaGFkb3cnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBZGRzIGEgc2hhZG93IHRvIHRoZSB0ZXh0IGZvciBiZXR0ZXIgdmlzaWJpbGl0eS4nLFxuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnZm9udC1zaXplJyxcbiAgICAgICAgICAgIG5hbWU6ICdGb250IFNpemUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgZm9udCBzaXplIG9mIHRoZSBtb2R1bGUgbmFtZXMuJyxcbiAgICAgICAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgICAgICAgbWluOiAxMCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgdmFsdWU6IDE0XG4gICAgICAgIH1cbiAgICBdLFxuXG4gICAgb25FbmFibGUobWFuYWdlcikge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWFycmF5bGlzdC1jb250YWluZXInO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGUobWFuYWdlcik7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblRpY2soZHQsIG1hbmFnZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBleGNsdWRlZCA9IFsnQ2xpY2tHVUknLCAnQXJyYXlMaXN0JywgJ05vdGlmaWNhdGlvbnMnXTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdldCBmb250IHN0eWxlcyB0byBhY2N1cmF0ZWx5IG1lYXN1cmUgdGV4dCB3aWR0aFxuICAgICAgICBjb25zdCBmb250U2l6ZSA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICdmb250LXNpemUnKTtcbiAgICAgICAgY29uc3QgZm9udFdlaWdodCA9IDYwMDsgLy8gQXMgZGVmaW5lZCBpbiBzdHlsZXMuY3NzXG4gICAgICAgIGNvbnN0IGZvbnRGYW1pbHkgPSAnSW50ZXInOyAvLyBBcyBkZWZpbmVkIGluIHN0eWxlcy5jc3NcbiAgICAgICAgY29uc3QgZm9udCA9IGAke2ZvbnRXZWlnaHR9ICR7Zm9udFNpemV9cHggJHtmb250RmFtaWx5fWA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gVF9DVFhfQ0FDSEUuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LmZvbnQgPSBmb250O1xuXG4gICAgICAgIGNvbnN0IGVuYWJsZWRNb2R1bGVzID0gbWFuYWdlci5saXN0KClcbiAgICAgICAgICAgIC5maWx0ZXIobSA9PiBtLmVuYWJsZWQgJiYgIWV4Y2x1ZGVkLmluY2x1ZGVzKG0ubmFtZSkpXG4gICAgICAgICAgICAubWFwKG0gPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBtLm5hbWUsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQobS5uYW1lKS53aWR0aFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi53aWR0aCAtIGEud2lkdGggfHwgYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yTW9kZSA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICdjb2xvci1tb2RlJyk7XG4gICAgICAgIGNvbnN0IHVzZVRoZW1lQ29sb3IgPSB0aGlzLmdldFNldHRpbmdWYWx1ZShtYW5hZ2VyLCAndXNlLXRoZW1lLWNvbG9yJyk7XG4gICAgICAgIGxldCBzdGF0aWNDb2xvciA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICdzdGF0aWMtY29sb3InKTtcbiAgICAgICAgY29uc3Qgc2hvd0JvcmRlciA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICdib3JkZXInKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb2xvck1vZGUgPT09ICdTdGF0aWMnICYmIHVzZVRoZW1lQ29sb3IpIHtcbiAgICAgICAgICAgIHN0YXRpY0NvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tcHJpbWFyeScpLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZW5hYmxlZE1vZHVsZXMuZm9yRWFjaCgobW9kLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbW9kRWxlbWVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktYXJyYXlsaXN0LWl0ZW0nO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9yTW9kZSA9PT0gJ1JhaW5ib3cnID8gZ2V0UmFpbmJvd0NvbG9yKGluZGV4KSA6IHN0YXRpY0NvbG9yO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtb2RFbGVtZW50LnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgICAgICAgICBtb2RFbGVtZW50LnRleHRDb250ZW50ID0gbW9kLm5hbWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzaG93Qm9yZGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9yZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1hcnJheWxpc3QtYm9yZGVyJztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgICAgIG1vZEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9yZGVyRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChtb2RFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICBvblNldHRpbmdVcGRhdGUoc2V0dGluZ0lkLCB2YWx1ZSwgbWFuYWdlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKG1hbmFnZXIpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVTdHlsZShtYW5hZ2VyKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgdGV4dFNoYWRvdyA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICd0ZXh0LXNoYWRvdycpO1xuICAgICAgICBjb25zdCBmb250U2l6ZSA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICdmb250LXNpemUnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke2ZvbnRTaXplfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3dpdGgtc2hhZG93JywgdGV4dFNoYWRvdyk7XG4gICAgfSxcblxuICAgIGdldFNldHRpbmdWYWx1ZShtYW5hZ2VyLCBzZXR0aW5nSWQpIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gbWFuYWdlci5nZXQoJ0FycmF5TGlzdCcpO1xuICAgICAgICBpZiAoIW1vZHVsZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSBtb2R1bGUuc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09IHNldHRpbmdJZCk7XG4gICAgICAgIHJldHVybiBzZXR0aW5nID8gc2V0dGluZy52YWx1ZSA6IG51bGw7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlMaXN0OyAiLCAiaW1wb3J0IENsaWNrR1VJIGZyb20gJy4vbW9kdWxlcy92aXN1YWwvQ2xpY2tHVUknO1xuaW1wb3J0IEZQU0NvdW50ZXIgZnJvbSAnLi9tb2R1bGVzL3Zpc3VhbC9GUFNDb3VudGVyJztcbmltcG9ydCBJbnRlcmZhY2UgZnJvbSAnLi9tb2R1bGVzL3Zpc3VhbC9JbnRlcmZhY2UnO1xuaW1wb3J0IENoYXQgZnJvbSAnLi9tb2R1bGVzL3Zpc3VhbC9DaGF0JztcbmltcG9ydCBLZXlzdHJva2VzIGZyb20gJy4vbW9kdWxlcy9jb21iYXQvS2V5c3Ryb2tlcyc7XG5pbXBvcnQgVG9nZ2xlU3ByaW50IGZyb20gJy4vbW9kdWxlcy9tb3ZlbWVudC9Ub2dnbGVTcHJpbnQnOztcbmltcG9ydCBBcm1vckhVRCBmcm9tICcuL21vZHVsZXMvcGxheWVyL0FybW9ySFVEJztcbmltcG9ydCBIb3RiYXIgZnJvbSAnLi9tb2R1bGVzL3BsYXllci9Ib3RiYXInO1xuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gJy4vbW9kdWxlcy91dGlsaXR5L0Nvb3Jkcyc7XG5pbXBvcnQgQ1BTQ291bnRlciBmcm9tICcuL21vZHVsZXMvcGxheWVyL0NQU0NvdW50ZXInO1xuaW1wb3J0IEZQU0Jvb3N0ZXIgZnJvbSAnLi9tb2R1bGVzL3V0aWxpdHkvRlBTQm9vc3Rlcic7XG5pbXBvcnQgQWRCbG9ja2VyIGZyb20gJy4vbW9kdWxlcy91dGlsaXR5L0FkQmxvY2tlcic7XG5pbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tICcuL0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IENyb3NzaGFpciBmcm9tICcuL21vZHVsZXMvdmlzdWFsL0Nyb3NzaGFpcidcbmltcG9ydCBOb3RpZmljYXRpb25NYW5hZ2VyIGZyb20gJy4vTm90aWZpY2F0aW9uTWFuYWdlcic7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuL21vZHVsZXMvdXRpbGl0eS9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBBcnJheUxpc3QgZnJvbSAnLi9tb2R1bGVzL3Zpc3VhbC9BcnJheUxpc3QnO1xuXG5jbGFzcyBNb2R1bGVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoeyB0aWNrUmF0ZSA9IDYwIH0gPSB7fSkge1xuICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLm1vZHVsZURlZnMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5jYXRlZ29yaWVzID0gW1xuICAgICAgJ0NvbWJhdCcsICdNb3ZlbWVudCcsICdQbGF5ZXInLCAnVmlzdWFsJywgJ1V0aWxpdHknXG4gICAgXTtcbiAgICB0aGlzLmF1dG9TYXZlID0gdHJ1ZTtcbiAgICB0aGlzLmF1dG9Mb2FkID0gdHJ1ZTsgLyogZGVmYXVsdCB0byB0cnVlIHNvIGNvbmZpZ3VyYXRpb24gbG9hZHMgb24gc3RhcnR1cCAqL1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmh1ZFZpc2liaWxpdHlJbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5ub3RpZmljYXRpb25zID0gbmV3IE5vdGlmaWNhdGlvbk1hbmFnZXIoKTtcbiAgICBcbiAgICB0aGlzLnRpY2tJbnRlcnZhbCA9IDEwMDAgLyB0aWNrUmF0ZTtcbiAgICB0aGlzLmxhc3RUaWNrID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy50aWNrZXIgPSB0aGlzLnRpY2tlci5iaW5kKHRoaXMpO1xuICAgIFxuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy5zdGFydEh1ZFZpc2liaWxpdHlDaGVjaygpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2tlcik7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBpZiAodGhpcy5hdXRvTG9hZCkge1xuICAgICAgdGhpcy5sb2FkQ29uZmlndXJhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLmFwcGx5SW5pdGlhbFN0YXRlcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBhbGxNb2R1bGVzID0gW1xuICAgICAgQ2xpY2tHVUksXG4gICAgICBGUFNDb3VudGVyLFxuICAgICAgSW50ZXJmYWNlLFxuICAgICAgQ2hhdCxcbiAgICAgIEtleXN0cm9rZXMsXG4gICAgICBUb2dnbGVTcHJpbnQsXG4gICAgICBBcm1vckhVRCxcbiAgICAgIENvb3JkaW5hdGVzLFxuICAgICAgQ1BTQ291bnRlcixcbiAgICAgIEZQU0Jvb3N0ZXIsXG4gICAgICBBZEJsb2NrZXIsXG4gICAgICBDcm9zc2hhaXIsXG4gICAgICBOb3RpZmljYXRpb25zLFxuICAgICAgQXJyYXlMaXN0LFxuICAgIF07XG4gICAgXG4gICAgYWxsTW9kdWxlcy5mb3JFYWNoKG1vZCA9PiB7XG4gICAgICB0aGlzLm1vZHVsZURlZnMuc2V0KG1vZC5uYW1lLCBtb2QpO1xuICAgICAgdGhpcy5hZGRNb2R1bGUobW9kKVxuICAgIH0pO1xuICB9XG5cbiAgYWRkTW9kdWxlKG1vZCkge1xuICAgIGlmICghbW9kIHx8IHR5cGVvZiBtb2QubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTW9kdWxlIG11c3QgaGF2ZSBhIHVuaXF1ZSBcIm5hbWVcIiBwcm9wZXJ0eS4nKTtcbiAgICB9XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIGNhdGVnb3J5OiAnVXRpbGl0eScsXG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIG9uRW5hYmxlKCkge30sXG4gICAgICBvbkRpc2FibGUoKSB7fSxcbiAgICAgIG9uVGljaygpIHt9LFxuICAgICAgb25TZXR0aW5nVXBkYXRlKCkge30sXG4gICAgICBzZXR0aW5nczogW10sXG4gICAgICB4OiBtb2QuZGVmYXVsdFggIT09IHVuZGVmaW5lZCA/IG1vZC5kZWZhdWx0WCA6IG51bGwsXG4gICAgICB5OiBtb2QuZGVmYXVsdFkgIT09IHVuZGVmaW5lZCA/IG1vZC5kZWZhdWx0WSA6IG51bGwsXG4gICAgICAuLi5tb2QsXG4gICAgfTtcbiAgICBcbiAgICBkZWxldGUgbm9ybWFsaXplZC5kZWZhdWx0WDtcbiAgICBkZWxldGUgbm9ybWFsaXplZC5kZWZhdWx0WTtcblxuICAgIG5vcm1hbGl6ZWQuc2V0dGluZ3MgPSBub3JtYWxpemVkLnNldHRpbmdzLm1hcChzID0+ICh7XG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAuLi5zXG4gICAgfSkpO1xuXG4gICAgdGhpcy5tb2R1bGVzLnNldChub3JtYWxpemVkLm5hbWUsIG5vcm1hbGl6ZWQpO1xuICAgIHJldHVybiBub3JtYWxpemVkO1xuICB9XG5cbiAgZW5hYmxlKG5hbWUpIHtcbiAgICBjb25zdCBtID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICBpZiAobSAmJiAhbS5lbmFibGVkKSB7XG4gICAgICBtLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgdHJ5IHsgbS5vbkVuYWJsZSh0aGlzKTsgfSBjYXRjaCAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoYFtNb2R1bGVNYW5hZ2VyXSBvbkVuYWJsZSBlcnJvciBpbiBcIiR7bmFtZX1cIjpgLCBlcnIpOyB9XG4gICAgICBtLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLnNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgICBpZiAodGhpcy5pbml0aWFsaXplZCAmJiB0aGlzLmdldCgnTm90aWZpY2F0aW9ucycpPy5lbmFibGVkKSB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5zaG93KHtcbiAgICAgICAgICAgIHRpdGxlOiAnTW9kdWxlIEVuYWJsZWQnLFxuICAgICAgICAgICAgbWVzc2FnZTogYDxiPiR7bmFtZX08L2I+IGhhcyBiZWVuIGVuYWJsZWQuYCxcbiAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXNhYmxlKG5hbWUpIHtcbiAgICBjb25zdCBtID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICBpZiAobSAmJiBtLmVuYWJsZWQpIHtcbiAgICAgIG0uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgdHJ5IHsgbS5vbkRpc2FibGUodGhpcyk7IH0gY2F0Y2ggKGVycikgeyBjb25zb2xlLmVycm9yKGBbTW9kdWxlTWFuYWdlcl0gb25EaXNhYmxlIGVycm9yIGluIFwiJHtuYW1lfVwiOmAsIGVycik7IH1cbiAgICAgIHRoaXMuc2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkICYmIG5hbWUgIT09ICdDbGlja0dVSScgJiYgdGhpcy5nZXQoJ05vdGlmaWNhdGlvbnMnKT8uZW5hYmxlZCkge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuc2hvdyh7XG4gICAgICAgICAgICB0aXRsZTogJ01vZHVsZSBEaXNhYmxlZCcsXG4gICAgICAgICAgICBtZXNzYWdlOiBgPGI+JHtuYW1lfTwvYj4gaGFzIGJlZW4gZGlzYWJsZWQuYCxcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKG5hbWUpIHtcbiAgICBjb25zdCBtID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICBpZiAobSkge1xuICAgICAgbS5lbmFibGVkID8gdGhpcy5kaXNhYmxlKG5hbWUpIDogdGhpcy5lbmFibGUobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTW9kdWxlU2V0dGluZyhtb2R1bGVOYW1lLCBzZXR0aW5nSWQsIHZhbHVlKSB7XG4gICAgY29uc3QgbSA9IHRoaXMubW9kdWxlcy5nZXQobW9kdWxlTmFtZSk7XG4gICAgaWYgKCFtKSByZXR1cm47XG5cbiAgICBjb25zdCBzZXR0aW5nID0gbS5zZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gc2V0dGluZ0lkKTtcbiAgICBpZiAoc2V0dGluZykge1xuICAgICAgc2V0dGluZy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiBtLm9uU2V0dGluZ1VwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG0ub25TZXR0aW5nVXBkYXRlKHNldHRpbmdJZCwgdmFsdWUsIHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbTW9kdWxlTWFuYWdlcl0gb25TZXR0aW5nVXBkYXRlIGVycm9yIGluIFwiJHttb2R1bGVOYW1lfVwiOmAsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNb2R1bGVQb3NpdGlvbihtb2R1bGVOYW1lLCB4LCB5KSB7XG4gICAgY29uc3QgbSA9IHRoaXMubW9kdWxlcy5nZXQobW9kdWxlTmFtZSk7XG4gICAgaWYgKG0pIHtcbiAgICAgIG0ueCA9IHg7XG4gICAgICBtLnkgPSB5O1xuICAgICAgdGhpcy5zYXZlQ29uZmlndXJhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0TW9kdWxlU2V0dGluZ3MobW9kdWxlTmFtZSkge1xuICAgIGNvbnN0IG1vZERlZiA9IHRoaXMubW9kdWxlRGVmcy5nZXQobW9kdWxlTmFtZSk7XG4gICAgY29uc3QgY3VycmVudE1vZCA9IHRoaXMuZ2V0KG1vZHVsZU5hbWUpO1xuXG4gICAgaWYgKCFtb2REZWYgfHwgIWN1cnJlbnRNb2QpIHJldHVybjtcblxuICAgIGlmIChtb2REZWYuc2V0dGluZ3MpIHtcbiAgICAgIG1vZERlZi5zZXR0aW5ncy5mb3JFYWNoKGRlZmF1bHRTZXR0aW5nID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVNb2R1bGVTZXR0aW5nKG1vZHVsZU5hbWUsIGRlZmF1bHRTZXR0aW5nLmlkLCBkZWZhdWx0U2V0dGluZy52YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZU1vZHVsZVBvc2l0aW9uKG1vZHVsZU5hbWUsIG1vZERlZi54IHx8IG51bGwsIG1vZERlZi55IHx8IG51bGwpO1xuICB9XG5cbiAgZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgfVxuXG4gIGxpc3QoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5tb2R1bGVzLnZhbHVlcygpKTtcbiAgfVxuXG4gIGdldE1vZHVsZXNCeUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdCgpLmZpbHRlcihtID0+IG0uY2F0ZWdvcnkgPT09IGNhdGVnb3J5KTtcbiAgfVxuXG4gIHRpY2tlcihub3cpIHtcbiAgICBjb25zdCBkdCA9IG5vdyAtIHRoaXMubGFzdFRpY2s7XG4gICAgaWYgKGR0ID49IHRoaXMudGlja0ludGVydmFsKSB7XG4gICAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICBpZiAobS5lbmFibGVkICYmIHR5cGVvZiBtLm9uVGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRyeSB7IG0ub25UaWNrKGR0LCB0aGlzKTsgfSBjYXRjaCAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoYFtNb2R1bGVNYW5hZ2VyXSBvblRpY2sgZXJyb3IgaW4gXCIke20ubmFtZX1cIjpgLCBlcnIpOyB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sYXN0VGljayA9IG5vdztcbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyKTtcbiAgfVxuXG4gIHNhdmVDb25maWd1cmF0aW9uKCkge1xuICAgIGlmICghdGhpcy5hdXRvU2F2ZSkgcmV0dXJuO1xuICAgIHRoaXMuZm9yY2VTYXZlQ29uZmlndXJhdGlvbigpO1xuICB9XG5cbiAgZm9yY2VTYXZlQ29uZmlndXJhdGlvbigpIHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBtZXRhOiB7XG4gICAgICAgIGF1dG9TYXZlOiB0aGlzLmF1dG9TYXZlLFxuICAgICAgICBhdXRvTG9hZDogdGhpcy5hdXRvTG9hZCxcbiAgICAgICAgdGhlbWU6IHtcbiAgICAgICAgICAgIHByaW1hcnk6IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXByaW1hcnknKS50cmltKCksXG4gICAgICAgICAgICBwYW5lbEJhc2U6IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXBhbmVsLWJhc2UnKS50cmltKCksXG4gICAgICAgICAgICBwYW5lbE9wYWNpdHk6IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXBhbmVsLW9wYWNpdHknKS50cmltKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbW9kXSBvZiB0aGlzLm1vZHVsZXMuZW50cmllcygpKSB7XG4gICAgICBjb25maWdbbmFtZV0gPSB7XG4gICAgICAgIGVuYWJsZWQ6IG1vZC5lbmFibGVkLFxuICAgICAgICB4OiBtb2QueCxcbiAgICAgICAgeTogbW9kLnksXG4gICAgICAgIHNldHRpbmdzOiBtb2Quc2V0dGluZ3MubWFwKHMgPT4gKHsgaWQ6IHMuaWQsIHZhbHVlOiBzLnZhbHVlIH0pKVxuICAgICAgfTtcbiAgICB9XG4gICAgQ29uZmlndXJhdGlvbi5zYXZlKGNvbmZpZyk7XG4gIH1cblxuICBsb2FkQ29uZmlndXJhdGlvbihjb25maWdUb0xvYWQpIHtcbiAgICBjb25zdCBjb25maWcgPSBjb25maWdUb0xvYWQgfHwgQ29uZmlndXJhdGlvbi5sb2FkKCk7XG4gICAgaWYgKCFjb25maWcpIHJldHVybjtcblxuICAgIGlmIChjb25maWcubWV0YSkge1xuICAgICAgdGhpcy5hdXRvU2F2ZSA9IGNvbmZpZy5tZXRhLmF1dG9TYXZlID8/IHRoaXMuYXV0b1NhdmU7XG4gICAgICB0aGlzLmF1dG9Mb2FkID0gY29uZmlnLm1ldGEuYXV0b0xvYWQgPz8gdGhpcy5hdXRvTG9hZDtcbiAgICAgIGlmIChjb25maWcubWV0YS50aGVtZSAmJiBjb25maWcubWV0YS50aGVtZS5wcmltYXJ5KSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgY29uZmlnLm1ldGEudGhlbWUucHJpbWFyeSk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5LWRhcmsnLCB0aGlzLnNoYWRlQ29sb3IoY29uZmlnLm1ldGEudGhlbWUucHJpbWFyeSwgLTIwKSk7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLm1ldGEudGhlbWUgJiYgY29uZmlnLm1ldGEudGhlbWUucGFuZWxCYXNlKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wYW5lbC1iYXNlJywgY29uZmlnLm1ldGEudGhlbWUucGFuZWxCYXNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcubWV0YS50aGVtZSAmJiBjb25maWcubWV0YS50aGVtZS5wYW5lbE9wYWNpdHkpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXBhbmVsLW9wYWNpdHknLCBjb25maWcubWV0YS50aGVtZS5wYW5lbE9wYWNpdHkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgW25hbWUsIG1vZENvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnKSkge1xuICAgICAgaWYgKG5hbWUgPT09ICdtZXRhJykgY29udGludWU7XG4gICAgICBjb25zdCBtb2QgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgaWYgKG1vZCkge1xuICAgICAgICBtb2QueCA9IG1vZENvbmZpZy54ICE9PSBudWxsICYmIG1vZENvbmZpZy54ICE9PSB1bmRlZmluZWQgPyBtb2RDb25maWcueCA6IG51bGw7XG4gICAgICAgIG1vZC55ID0gbW9kQ29uZmlnLnkgIT09IG51bGwgJiYgbW9kQ29uZmlnLnkgIT09IHVuZGVmaW5lZCA/IG1vZENvbmZpZy55IDogbnVsbDtcblxuICAgICAgICBpZiAobW9kQ29uZmlnLnNldHRpbmdzKSB7XG4gICAgICAgICAgbW9kQ29uZmlnLnNldHRpbmdzLmZvckVhY2goc2F2ZWRTZXR0aW5nID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmcgPSBtb2Quc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09IHNhdmVkU2V0dGluZy5pZCk7XG4gICAgICAgICAgICBpZiAoc2V0dGluZyAmJiBzZXR0aW5nLnZhbHVlICE9PSBzYXZlZFNldHRpbmcudmFsdWUpIHtcbiAgICAgICAgICAgICAgc2V0dGluZy52YWx1ZSA9IHNhdmVkU2V0dGluZy52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb2Qub25TZXR0aW5nVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIG1vZC5vblNldHRpbmdVcGRhdGUoc2V0dGluZy5pZCwgc2F2ZWRTZXR0aW5nLnZhbHVlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtNb2R1bGVNYW5hZ2VyXSBvblNldHRpbmdVcGRhdGUgZXJyb3IgaW4gXCIke25hbWV9XCI6YCwgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gUmVzdG9yZSBlbmFibGVkIHN0YXRlIChhbmQgdHJpZ2dlciBvbkVuYWJsZSlcbiAgICAgICAgaWYgKG1vZENvbmZpZy5lbmFibGVkICYmICFtb2QuZW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMuZW5hYmxlKG5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKCFtb2RDb25maWcuZW5hYmxlZCAmJiBtb2QuZW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZShuYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLmFwcGx5SW5pdGlhbFN0YXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5SW5pdGlhbFN0YXRlcygpIHtcbiAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgaWYgKG0uZW5hYmxlZCAmJiAhbS5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgbS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlKG0ubmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRDb25maWd1cmF0aW9uKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9O1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1vZF0gb2YgdGhpcy5tb2R1bGVzLmVudHJpZXMoKSkge1xuICAgICAgY29uZmlnW25hbWVdID0ge1xuICAgICAgICBlbmFibGVkOiBtb2QuZW5hYmxlZCxcbiAgICAgICAgeDogbW9kLngsXG4gICAgICAgIHk6IG1vZC55LFxuICAgICAgICBzZXR0aW5nczogbW9kLnNldHRpbmdzLm1hcChzID0+ICh7IGlkOiBzLmlkLCB2YWx1ZTogcy52YWx1ZSB9KSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBpbXBvcnRDb25maWd1cmF0aW9uKGNvbmZpZ1N0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKGNvbmZpZ1N0cmluZyk7XG4gICAgICBDb25maWd1cmF0aW9uLnNhdmUoY29uZmlnKTtcbiAgICAgIHRoaXMubG9hZENvbmZpZ3VyYXRpb24oY29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tDb25maWd1cmF0aW9uXSBFcnJvciBpbXBvcnRpbmcgY29uZmlnOicsIGVycik7XG4gICAgICBhbGVydCgnSW52YWxpZCBjb25maWd1cmF0aW9uIGZpbGUhJyk7XG4gICAgfVxuICB9XG5cbiAgc2hhZGVDb2xvcihjb2xvciwgcGVyY2VudCkge1xuICAgIGxldCBSID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsMyksMTYpO1xuICAgIGxldCBHID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsNSksMTYpO1xuICAgIGxldCBCID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDUsNyksMTYpO1xuXG4gICAgUiA9IHBhcnNlSW50KFIgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xuICAgIEcgPSBwYXJzZUludChHICogKDEwMCArIHBlcmNlbnQpIC8gMTAwKTtcbiAgICBCID0gcGFyc2VJbnQoQiAqICgxMDAgKyBwZXJjZW50KSAvIDEwMCk7XG5cbiAgICBSID0gKFI8MjU1KT9SOjI1NTsgIFxuICAgIEcgPSAoRzwyNTUpP0c6MjU1OyAgXG4gICAgQiA9IChCPDI1NSk/QjoyNTU7ICBcblxuICAgIGNvbnN0IFJSID0gKChSLnRvU3RyaW5nKDE2KS5sZW5ndGg9PTEpP1wiMFwiK1IudG9TdHJpbmcoMTYpOlIudG9TdHJpbmcoMTYpKTtcbiAgICBjb25zdCBHRyA9ICgoRy50b1N0cmluZygxNikubGVuZ3RoPT0xKT9cIjBcIitHLnRvU3RyaW5nKDE2KTpHLnRvU3RyaW5nKDE2KSk7XG4gICAgY29uc3QgQkIgPSAoKEIudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrQi50b1N0cmluZygxNik6Qi50b1N0cmluZygxNikpO1xuXG4gICAgcmV0dXJuIFwiI1wiK1JSK0dHK0JCO1xuICB9XG5cbiAgc3RhcnRIdWRWaXNpYmlsaXR5Q2hlY2soKSB7XG4gICAgaWYgKHRoaXMuaHVkVmlzaWJpbGl0eUludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaHVkVmlzaWJpbGl0eUludGVydmFsKTtcbiAgICB9XG4gICAgdGhpcy5odWRWaXNpYmlsaXR5SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBob3RiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSG90QmFyR2FtZUl0ZW1zQ29udGFpbmVyJyk7XG4gICAgICBjb25zdCBodWRNb2R1bGVzID0gdGhpcy5saXN0KCkuZmlsdGVyKG0gPT4gbS5lbGVtZW50ICYmIG0ubmFtZSAhPT0gJ0NsaWNrR1VJJyk7XG5cbiAgICAgIGlmICghaG90YmFyKSB7XG4gICAgICAgIGh1ZE1vZHVsZXMuZm9yRWFjaChtID0+IHtcbiAgICAgICAgICBpZiAobS5lbGVtZW50ICYmICFtLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXJlbml0eS1oaWRkZW4nKSkge1xuICAgICAgICAgICAgbS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlcmVuaXR5LWhpZGRlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodWRNb2R1bGVzLmZvckVhY2gobSA9PiB7XG4gICAgICAgICAgaWYgKG0uZWxlbWVudCAmJiBtLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXJlbml0eS1oaWRkZW4nKSkge1xuICAgICAgICAgICAgbS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlcmVuaXR5LWhpZGRlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgNTAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVNYW5hZ2VyO1xuIiwgImNsYXNzIFBsYXllclRyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UGxheVRpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmxveGQtZmlyc3RQbGF5VGltZScpO1xuICAgICAgICAgICAgaWYgKCFmaXJzdFBsYXlUaW1lIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXJlbml0eS10cmFja2VkLWlkJykgPT09IGZpcnN0UGxheVRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4vLyBmdWNrIHRoZSBiaWcgQVxuICAgICAgICAgICAgY29uc3Qgd29ya2VyVXJsID0gJ2h0dHBzOi8vd29ya2Vycy1wbGF5Z3JvdW5kLWNhbG0tcGluZS02ZjgwLnZlcmllcGljYy53b3JrZXJzLmRldi8nO1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgICAgICBmaXJzdFBsYXlUaW1lOiBmaXJzdFBsYXlUaW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIubm90aWZpY2F0aW9ucy5zaG93KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BsYXllciBUcmFja2luZycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RvIGhlbHAgdXMgY291bnQgb3VyIHVzZXJzLCB3ZVxcJ3ZlIHNlbnQgYSBvbmUtdGltZSBhbm9ueW1vdXMgbm90aWZpY2F0aW9uIHRvIG91ciBEaXNjb3JkLiBXZSBvbmx5IGRvIHRoaXMgb25jZS4gVGhhbmtzIGZvciB1c2luZyBTZXJlbml0eSEnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMDBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmZXRjaCh3b3JrZXJVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcmVuaXR5LXRyYWNrZWQtaWQnLCBmaXJzdFBsYXlUaW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2VuZCBwbGF5ZXIgdHJhY2tpbmcgaW5mby4nLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZW5kaW5nIHBsYXllciB0cmFja2luZyBpbmZvOicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbUGxheWVyVHJhY2tlcl0gRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJUcmFja2VyOyAiLCAiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IE1vZHVsZU1hbmFnZXIgZnJvbSAnLi9Nb2R1bGVNYW5hZ2VyJztcbmltcG9ydCBQbGF5ZXJUcmFja2VyIGZyb20gJy4vUGxheWVyVHJhY2tlcic7XG5cbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNvbnN0IG1hbmFnZXIgPSBuZXcgTW9kdWxlTWFuYWdlcigpO1xuICB3aW5kb3cuU2VyZW5pdHkgPSB7IGluc3RhbmNlOiBtYW5hZ2VyIH07XG4gIG1hbmFnZXIuc3RhcnQoKTtcbiAgXG4gIG5ldyBQbGF5ZXJUcmFja2VyKG1hbmFnZXIpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghbWFuYWdlci5ub3RpZmljYXRpb25zKSByZXR1cm47XG4gICAgbWFuYWdlci5ub3RpZmljYXRpb25zLnNob3coe1xuICAgICAgdGl0bGU6ICdXZWxjb21lIHRvIFNlcmVuaXR5JyxcbiAgICAgIG1lc3NhZ2U6ICdQcmVzcyA8Yj5SaWdodCBTaGlmdDwvYj4gdG8gb3BlbiB0aGUgQ2xpY2tHVUkuJyxcbiAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgIGR1cmF0aW9uOiA1MDAwXG4gICAgfSk7XG4gIH0sIDEwMDApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuXG4gICAgaWYgKGUuY29kZSA9PT0gJ1NoaWZ0UmlnaHQnKSB7XG4gICAgICBtYW5hZ2VyLnRvZ2dsZSgnQ2xpY2tHVUknKTtcbiAgICB9XG4gIH0pO1xuXG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7QUFBQSxNQUFNLFdBQVc7QUFBQSxJQUNmLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULGdCQUFnQjtBQUFBLElBQ2hCLHNCQUFzQjtBQUFBLElBQ3RCLGNBQWM7QUFBQSxJQUNkLHdCQUF3QjtBQUFBLElBQ3hCLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLGNBQWM7QUFBQSxJQUNkLGlCQUFpQjtBQUFBLElBQ2pCLFlBQVk7QUFBQSxJQUVaLFNBQVMsU0FBUztBQUNoQixVQUFJLEtBQUssZ0JBQWdCLEtBQUssUUFBUztBQUV2QyxXQUFLLFlBQVk7QUFDakIsZUFBUyxLQUFLLFVBQVUsSUFBSSxvQkFBb0I7QUFDaEQsVUFBSSxTQUFTLG9CQUFvQjtBQUMvQixpQkFBUyxnQkFBZ0I7QUFBQSxNQUMzQjtBQUVBLFVBQUksQ0FBQyxTQUFTLGVBQWUsbUJBQW1CLEdBQUc7QUFDakQsY0FBTSxrQkFBa0IsU0FBUyxjQUFjLE1BQU07QUFDckQsd0JBQWdCLEtBQUs7QUFDckIsd0JBQWdCLE1BQU07QUFDdEIsd0JBQWdCLE9BQU87QUFDdkIsaUJBQVMsS0FBSyxZQUFZLGVBQWU7QUFBQSxNQUMzQztBQUVBLFdBQUssVUFBVSxPQUFPO0FBQ3RCLGlCQUFXLE1BQU07QUFDZixZQUFJLEtBQUssUUFBUyxNQUFLLFFBQVEsVUFBVSxJQUFJLFNBQVM7QUFDdEQsWUFBSSxLQUFLLFFBQVMsTUFBSyxRQUFRLFVBQVUsSUFBSSxTQUFTO0FBQUEsTUFDeEQsR0FBRyxFQUFFO0FBQUEsSUFDUDtBQUFBLElBRUEsVUFBVSxTQUFTO0FBQ2pCLFdBQUssWUFBWTtBQUNqQixXQUFLLGNBQWMsT0FBTztBQUMxQixlQUFTLEtBQUssVUFBVSxPQUFPLG9CQUFvQjtBQUVuRCxZQUFNLGFBQWEsU0FBUyxlQUFlLFlBQVk7QUFDdkQsVUFBSSxjQUFjLENBQUMsU0FBUyxvQkFBb0I7QUFDOUMsbUJBQVcsbUJBQW1CO0FBQzlCLG1CQUFXLE1BQU07QUFBQSxNQUNuQjtBQUVBLFdBQUssUUFBUTtBQUFBLElBQ2Y7QUFBQSxJQUVBLFVBQVU7QUFDUixVQUFJLEtBQUssV0FBVyxDQUFDLEtBQUssY0FBYztBQUN0QyxhQUFLLGVBQWU7QUFDcEIsYUFBSyxRQUFRLFVBQVUsT0FBTyxTQUFTO0FBQ3ZDLGFBQUssUUFBUSxVQUFVLE9BQU8sU0FBUztBQUV2QyxtQkFBVyxNQUFNO0FBQ2YsY0FBSSxLQUFLLFFBQVMsVUFBUyxLQUFLLFlBQVksS0FBSyxPQUFPO0FBQ3hELGNBQUksS0FBSyxRQUFTLFVBQVMsS0FBSyxZQUFZLEtBQUssT0FBTztBQUN4RCxlQUFLLFVBQVU7QUFDZixlQUFLLFVBQVU7QUFDZixlQUFLLGVBQWU7QUFFcEIsbUJBQVMsS0FBSyxVQUFVLE9BQU8sb0JBQW9CO0FBRW5ELGdCQUFNLGtCQUFrQixTQUFTLGVBQWUsbUJBQW1CO0FBQ25FLGNBQUksaUJBQWlCO0FBQ25CLHFCQUFTLEtBQUssWUFBWSxlQUFlO0FBQUEsVUFDM0M7QUFBQSxRQUNGLEdBQUcsR0FBRztBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsSUFFQSxVQUFVLFNBQVM7QUFDakIsV0FBSyxVQUFVLFNBQVMsY0FBYyxLQUFLO0FBQzNDLFdBQUssUUFBUSxZQUFZO0FBQ3pCLGVBQVMsS0FBSyxZQUFZLEtBQUssT0FBTztBQUV0QyxXQUFLLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDM0MsV0FBSyxRQUFRLFlBQVk7QUFFekIsWUFBTSxVQUFVLEtBQUssY0FBYyxPQUFPO0FBQzFDLFdBQUssUUFBUSxZQUFZLE9BQU87QUFFaEMsWUFBTSxVQUFVLEtBQUssY0FBYyxPQUFPO0FBQzFDLFdBQUssUUFBUSxZQUFZLE9BQU87QUFFaEMsZUFBUyxLQUFLLFlBQVksS0FBSyxPQUFPO0FBQUEsSUFDeEM7QUFBQSxJQUVBLGNBQWMsU0FBUztBQUNyQixZQUFNLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDNUMsY0FBUSxZQUFZO0FBRXBCLFlBQU0sT0FBTyxTQUFTLGNBQWMsS0FBSztBQUN6QyxXQUFLLFlBQVk7QUFDakIsV0FBSyxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBSWpCLGNBQVEsWUFBWSxJQUFJO0FBRXhCLFlBQU0sYUFBYSxRQUFRO0FBRTNCLFlBQU0sZ0JBQWdCO0FBQUEsUUFDcEIsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsWUFBWTtBQUFBLE1BQ2Q7QUFFQSxpQkFBVyxRQUFRLGNBQVk7QUFDN0IsY0FBTSxjQUFjLFNBQVMsY0FBYyxLQUFLO0FBQ2hELG9CQUFZLFlBQVkscUJBQXFCLGFBQWEsS0FBSyxpQkFBaUIsV0FBVyxFQUFFO0FBRTdGLGNBQU0sT0FBTyxjQUFjLFFBQVEsS0FBSyxjQUFjLFNBQVM7QUFFL0Qsb0JBQVksWUFBWTtBQUFBLCtDQUNpQixJQUFJO0FBQUEsVUFDekMsUUFBUTtBQUFBO0FBR1osb0JBQVksaUJBQWlCLFNBQVMsTUFBTTtBQUMxQyxtQkFBUyxpQkFBaUIsb0JBQW9CLEVBQUUsUUFBUSxRQUFNO0FBQzVELGVBQUcsVUFBVSxPQUFPLFFBQVE7QUFBQSxVQUM5QixDQUFDO0FBR0Qsc0JBQVksVUFBVSxJQUFJLFFBQVE7QUFFbEMsZUFBSyxpQkFBaUI7QUFDdEIsZUFBSyx1QkFBdUI7QUFDNUIsZUFBSyxjQUFjO0FBQ25CLGVBQUssc0JBQXNCO0FBQzNCLGVBQUssY0FBYyxPQUFPO0FBQUEsUUFDNUIsQ0FBQztBQUVELGdCQUFRLFlBQVksV0FBVztBQUFBLE1BQ2pDLENBQUM7QUFHRCxZQUFNLGVBQWUsU0FBUyxjQUFjLEtBQUs7QUFDakQsbUJBQWEsWUFBWTtBQUN6QixtQkFBYSxZQUFZO0FBQ3pCLG1CQUFhLGlCQUFpQixTQUFTLE1BQU07QUFDM0MsYUFBSyxlQUFlO0FBQ3BCLGFBQUssZ0JBQWdCLE9BQU87QUFBQSxNQUM5QixDQUFDO0FBQ0QsY0FBUSxZQUFZLFlBQVk7QUFFaEMsWUFBTSxZQUFZLFNBQVMsY0FBYyxLQUFLO0FBQzlDLGdCQUFVLFlBQVk7QUFDdEIsZ0JBQVUsWUFBWTtBQUN0QixnQkFBVSxpQkFBaUIsU0FBUyxNQUFNO0FBQ3hDLGFBQUssYUFBYTtBQUNsQixhQUFLLGNBQWMsT0FBTztBQUFBLE1BQzVCLENBQUM7QUFDRCxjQUFRLFlBQVksU0FBUztBQUU3QixhQUFPO0FBQUEsSUFDVDtBQUFBLElBRUEsY0FBYyxTQUFTO0FBQ3JCLFVBQUksQ0FBQyxLQUFLLGFBQWM7QUFFeEIsWUFBTSxnQkFBZ0IsU0FBUyxjQUFjLDhCQUE4QjtBQUMzRSxVQUFJLGVBQWU7QUFDZixpQkFBUyxLQUFLLFlBQVksYUFBYTtBQUFBLE1BQzNDO0FBRUEsV0FBSyxlQUFlO0FBQ3BCLFdBQUssc0JBQXNCO0FBRTNCLFVBQUksS0FBSyxTQUFTO0FBQ2QsYUFBSyxRQUFRLE1BQU0sU0FBUztBQUFBLE1BQ2hDO0FBRUEsY0FBUSxLQUFLLEVBQUUsUUFBUSxTQUFPO0FBQzVCLFlBQUksSUFBSSxXQUFXLElBQUksU0FBUztBQUM5QixjQUFJLFFBQVEsTUFBTSxTQUFTLElBQUksU0FBUyxjQUFjLElBQUksU0FBUyxnQkFBZ0IsSUFBSSxTQUFTLGdCQUFnQixJQUFJLFNBQVMsY0FBYyxPQUFPO0FBQ2xKLGNBQUksUUFBUSxNQUFNLGdCQUFnQjtBQUNsQyxjQUFJLFFBQVEsTUFBTSxTQUFTO0FBQzNCLGNBQUksUUFBUSxjQUFjO0FBQUEsUUFDNUI7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFFQSxnQkFBZ0IsU0FBUztBQUN2QixXQUFLLFFBQVEsTUFBTSxVQUFVO0FBQzdCLFVBQUksS0FBSyxTQUFTO0FBQ2QsYUFBSyxRQUFRLE1BQU0sU0FBUztBQUFBLE1BQ2hDO0FBRUEsWUFBTSxnQkFBZ0IsU0FBUyxjQUFjLEtBQUs7QUFDbEQsb0JBQWMsWUFBWTtBQUMxQixlQUFTLEtBQUssWUFBWSxhQUFhO0FBQ3ZDLFlBQU0sT0FBTyxTQUFTLGNBQWMsS0FBSztBQUN6QyxXQUFLLFlBQVk7QUFDakIsb0JBQWMsWUFBWSxJQUFJO0FBRzlCLGNBQVEsS0FBSyxFQUFFLFFBQVEsU0FBTztBQUM1QixZQUFJLElBQUksV0FBVyxJQUFJLFNBQVM7QUFDOUIsY0FBSSxRQUFRLE1BQU0sU0FBUztBQUMzQixjQUFJLFFBQVEsTUFBTSxnQkFBZ0I7QUFDbEMsZUFBSyxxQkFBcUIsSUFBSSxTQUFTLEtBQUssT0FBTztBQUFBLFFBQ3JEO0FBQUEsTUFDRixDQUFDO0FBR0QsWUFBTSxVQUFVLFNBQVMsY0FBYyxRQUFRO0FBQy9DLGNBQVEsWUFBWTtBQUNwQixjQUFRLGNBQWM7QUFDdEIsY0FBUSxpQkFBaUIsU0FBUyxNQUFNO0FBQ3RDLGFBQUssY0FBYyxPQUFPO0FBQzFCLGFBQUssUUFBUSxNQUFNLFVBQVU7QUFDN0IsYUFBSyxRQUFRLE1BQU0sZ0JBQWdCO0FBQ25DLGFBQUssUUFBUSxNQUFNLFNBQVM7QUFBQSxNQUM5QixDQUFDO0FBQ0Qsb0JBQWMsWUFBWSxPQUFPO0FBQUEsSUFDbkM7QUFBQSxJQUVBLHFCQUFxQixTQUFTLFFBQVEsU0FBUztBQUM3QyxVQUFJLENBQUMsV0FBVyxPQUFPLFNBQVMsV0FBWTtBQUM1QyxVQUFJLE9BQU8sR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLE9BQU87QUFFekMsWUFBTSxnQkFBZ0IsQ0FBQyxNQUFNO0FBQzNCLFVBQUUsZUFBZTtBQUVqQixlQUFPLEVBQUU7QUFDVCxlQUFPLEVBQUU7QUFJVCxjQUFNLE9BQU8sUUFBUSxzQkFBc0I7QUFDM0MsZ0JBQVEsTUFBTSxNQUFNLEdBQUcsS0FBSyxHQUFHO0FBQy9CLGdCQUFRLE1BQU0sT0FBTyxHQUFHLEtBQUssSUFBSTtBQUNqQyxnQkFBUSxNQUFNLFNBQVM7QUFDdkIsZ0JBQVEsTUFBTSxRQUFRO0FBRXRCLGlCQUFTLFlBQVk7QUFDckIsaUJBQVMsY0FBYztBQUFBLE1BQ3pCO0FBRUEsWUFBTSxjQUFjLENBQUMsTUFBTTtBQUN6QixVQUFFLGVBQWU7QUFFakIsZUFBTyxPQUFPLEVBQUU7QUFDaEIsZUFBTyxPQUFPLEVBQUU7QUFDaEIsZUFBTyxFQUFFO0FBQ1QsZUFBTyxFQUFFO0FBRVQsWUFBSSxTQUFTLFFBQVEsWUFBWTtBQUNqQyxZQUFJLFVBQVUsUUFBUSxhQUFhO0FBR25DLGNBQU0sY0FBYyxPQUFPO0FBQzNCLGNBQU0sZUFBZSxPQUFPO0FBQzVCLGNBQU0sZUFBZSxRQUFRO0FBQzdCLGNBQU0sZ0JBQWdCLFFBQVE7QUFHOUIsa0JBQVUsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLFNBQVMsY0FBYyxZQUFZLENBQUM7QUFDbkUsaUJBQVMsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLFFBQVEsZUFBZSxhQUFhLENBQUM7QUFFbkUsZ0JBQVEsTUFBTSxNQUFNLEdBQUcsTUFBTTtBQUM3QixnQkFBUSxNQUFNLE9BQU8sR0FBRyxPQUFPO0FBRy9CLFlBQUksS0FBSywwQkFBMEIsS0FBSyx1QkFBdUIsZUFBZSxPQUFPLE1BQU07QUFDekYsZ0JBQU0sUUFBUSxLQUFLLHVCQUF1QjtBQUMxQyxnQkFBTSxhQUFhLE1BQU07QUFDekIsY0FBSSxZQUFZLFVBQVUsZUFBZTtBQUd6QyxjQUFJLFlBQVksYUFBYSxhQUFhO0FBQ3hDLHdCQUFZLFVBQVUsYUFBYTtBQUFBLFVBQ3JDO0FBRUEsZ0JBQU0sTUFBTSxNQUFNLEdBQUcsTUFBTTtBQUMzQixnQkFBTSxNQUFNLE9BQU8sR0FBRyxTQUFTO0FBQUEsUUFDakM7QUFBQSxNQUNGO0FBRUEsWUFBTSxtQkFBbUIsTUFBTTtBQUM3QixpQkFBUyxZQUFZO0FBQ3JCLGlCQUFTLGNBQWM7QUFDdkIsZ0JBQVEscUJBQXFCLE9BQU8sTUFBTSxRQUFRLFlBQVksUUFBUSxTQUFTO0FBQUEsTUFDakY7QUFFQSxjQUFRLGNBQWM7QUFDdEIsY0FBUSxnQkFBZ0IsQ0FBQyxNQUFNO0FBQzdCLFVBQUUsZUFBZTtBQUNqQixhQUFLLHFCQUFxQixHQUFHLFFBQVEsU0FBUyxPQUFPO0FBQUEsTUFDdkQ7QUFDQSxjQUFRLE1BQU0sU0FBUztBQUFBLElBQ3pCO0FBQUEsSUFFQSxxQkFBcUIsR0FBRyxRQUFRLFNBQVMsU0FBUztBQUNoRCxXQUFLLHNCQUFzQjtBQUUzQixZQUFNLFFBQVEsU0FBUyxjQUFjLEtBQUs7QUFDMUMsWUFBTSxZQUFZO0FBRWxCLFlBQU0sU0FBUyxTQUFTLGNBQWMsS0FBSztBQUMzQyxhQUFPLFlBQVk7QUFDbkIsWUFBTSxRQUFRLFNBQVMsY0FBYyxNQUFNO0FBQzNDLFlBQU0sY0FBYyxPQUFPO0FBQzNCLFlBQU0sV0FBVyxTQUFTLGNBQWMsUUFBUTtBQUNoRCxlQUFTLFlBQVk7QUFDckIsZUFBUyxZQUFZO0FBQ3JCLGVBQVMsVUFBVSxNQUFNLEtBQUssc0JBQXNCO0FBQ3BELGFBQU8sWUFBWSxLQUFLO0FBQ3hCLGFBQU8sWUFBWSxRQUFRO0FBQzNCLFlBQU0sWUFBWSxNQUFNO0FBRXhCLFlBQU0sb0JBQW9CLFNBQVMsY0FBYyxLQUFLO0FBQ3RELHdCQUFrQixZQUFZO0FBQzlCLGFBQU8sU0FBUyxRQUFRLGFBQVc7QUFDakMsY0FBTSxpQkFBaUIsS0FBSyxxQkFBcUIsUUFBUSxTQUFTLE9BQU87QUFDekUsWUFBSSxnQkFBZ0I7QUFDbEIsNEJBQWtCLFlBQVksY0FBYztBQUFBLFFBQzlDO0FBQUEsTUFDRixDQUFDO0FBQ0QsWUFBTSxZQUFZLGlCQUFpQjtBQUVuQyxZQUFNLFNBQVMsU0FBUyxjQUFjLEtBQUs7QUFDM0MsYUFBTyxZQUFZO0FBQ25CLFlBQU0sV0FBVyxTQUFTLGNBQWMsUUFBUTtBQUNoRCxlQUFTLFlBQVk7QUFDckIsZUFBUyxjQUFjO0FBQ3ZCLGVBQVMsVUFBVSxNQUFNO0FBQ3ZCLGdCQUFRLG9CQUFvQixPQUFPLElBQUk7QUFDdkMsYUFBSyxxQkFBcUIsR0FBRyxRQUFRLElBQUksT0FBTyxJQUFJLEdBQUcsU0FBUyxPQUFPO0FBQUEsTUFDekU7QUFDQSxhQUFPLFlBQVksUUFBUTtBQUMzQixZQUFNLFlBQVksTUFBTTtBQUV4QixlQUFTLEtBQUssWUFBWSxLQUFLO0FBRS9CLFlBQU0sT0FBTyxRQUFRLHNCQUFzQjtBQUMzQyxZQUFNLGNBQWMsT0FBTztBQUMzQixZQUFNLGFBQWEsTUFBTTtBQUN6QixVQUFJLFlBQVksS0FBSyxPQUFPLEtBQUssUUFBUTtBQUd6QyxVQUFJLFlBQVksYUFBYSxhQUFhO0FBQ3hDLG9CQUFZLEtBQUssT0FBTyxhQUFhO0FBQUEsTUFDdkM7QUFFQSxZQUFNLE1BQU0sTUFBTSxHQUFHLEtBQUssR0FBRztBQUM3QixZQUFNLE1BQU0sT0FBTyxHQUFHLFNBQVM7QUFFL0IsV0FBSyx5QkFBeUIsRUFBRSxTQUFTLE9BQU8sWUFBWSxPQUFPLEtBQUs7QUFBQSxJQUMxRTtBQUFBLElBRUEsd0JBQXdCO0FBQ3RCLFVBQUksS0FBSyx3QkFBd0I7QUFDL0IsaUJBQVMsS0FBSyxZQUFZLEtBQUssdUJBQXVCLE9BQU87QUFDN0QsYUFBSyx5QkFBeUI7QUFBQSxNQUNoQztBQUFBLElBQ0Y7QUFBQSxJQUVBLGNBQWMsU0FBUztBQUNyQixZQUFNLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDNUMsY0FBUSxZQUFZO0FBR3BCLFdBQUssdUJBQXVCLFNBQVMsT0FBTztBQUU1QyxhQUFPO0FBQUEsSUFDVDtBQUFBLElBRUEsY0FBYyxTQUFTO0FBQ3JCLFlBQU0sVUFBVSxLQUFLLFFBQVEsY0FBYyxtQkFBbUI7QUFDOUQsY0FBUSxZQUFZO0FBRXBCLFVBQUksS0FBSyxlQUFlLFlBQVk7QUFDbEMsYUFBSyxRQUFRLFVBQVUsSUFBSSxzQkFBc0I7QUFBQSxNQUNuRCxPQUFPO0FBQ0wsYUFBSyxRQUFRLFVBQVUsT0FBTyxzQkFBc0I7QUFBQSxNQUN0RDtBQUVBLFVBQUksS0FBSyxzQkFBc0I7QUFDN0IsYUFBSyx3QkFBd0IsU0FBUyxPQUFPO0FBQUEsTUFDL0MsV0FBVyxLQUFLLGVBQWUsWUFBWTtBQUN6QyxhQUFLLHFCQUFxQixTQUFTLE9BQU87QUFBQSxNQUM1QyxPQUFPO0FBQ0wsYUFBSyx1QkFBdUIsU0FBUyxPQUFPO0FBQUEsTUFDOUM7QUFBQSxJQUNGO0FBQUEsSUFFQSxxQkFBcUIsU0FBUyxTQUFTO0FBQ3JDLFlBQU0sU0FBUyxTQUFTLGNBQWMsS0FBSztBQUMzQyxhQUFPLFlBQVk7QUFFbkIsWUFBTSxVQUFVLFNBQVMsY0FBYyxRQUFRO0FBQy9DLGNBQVEsWUFBWTtBQUNwQixjQUFRLFlBQVk7QUFDcEIsY0FBUSxpQkFBaUIsU0FBUyxNQUFNO0FBQ3BDLGFBQUssYUFBYTtBQUNsQixhQUFLLHVCQUF1QjtBQUM1QixhQUFLLGNBQWMsT0FBTztBQUFBLE1BQzlCLENBQUM7QUFFRCxZQUFNLFFBQVEsU0FBUyxjQUFjLE1BQU07QUFDM0MsWUFBTSxjQUFjO0FBRXBCLGFBQU8sWUFBWSxPQUFPO0FBQzFCLGFBQU8sWUFBWSxLQUFLO0FBQ3hCLGNBQVEsWUFBWSxNQUFNO0FBRTFCLFlBQU0sb0JBQW9CLFNBQVMsY0FBYyxLQUFLO0FBQ3RELHdCQUFrQixZQUFZO0FBRTlCLFlBQU0sT0FBTyxTQUFTLGNBQWMsS0FBSztBQUN6QyxXQUFLLFlBQVk7QUFDakIsV0FBSyxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLakIsd0JBQWtCLFlBQVksSUFBSTtBQUVsQyxZQUFNLGFBQWEsU0FBUyxjQUFjLEtBQUs7QUFDL0MsaUJBQVcsWUFBWTtBQUN2Qix3QkFBa0IsWUFBWSxVQUFVO0FBRXhDLGNBQVEsWUFBWSxpQkFBaUI7QUFFckMsV0FBSyxpQkFBaUIsc0JBQXNCLEVBQUUsUUFBUSxTQUFPO0FBQ3pELFlBQUksaUJBQWlCLFNBQVMsTUFBTTtBQUNoQyxlQUFLLGlCQUFpQixzQkFBc0IsRUFBRSxRQUFRLE9BQUssRUFBRSxVQUFVLE9BQU8sUUFBUSxDQUFDO0FBQ3ZGLGNBQUksVUFBVSxJQUFJLFFBQVE7QUFDMUIsZUFBSyxrQkFBa0IsSUFBSSxRQUFRO0FBQ25DLGVBQUssb0JBQW9CLE9BQU87QUFBQSxRQUNwQyxDQUFDO0FBQUEsTUFDTCxDQUFDO0FBRUQsV0FBSyxvQkFBb0IsT0FBTztBQUFBLElBQ2xDO0FBQUEsSUFFQSxvQkFBb0IsU0FBUztBQUMzQixZQUFNLFVBQVUsS0FBSyxRQUFRLGNBQWMsOEJBQThCO0FBQ3pFLFVBQUksQ0FBQyxRQUFTO0FBQ2QsY0FBUSxZQUFZO0FBRXBCLGNBQVEsS0FBSyxpQkFBaUI7QUFBQSxRQUMxQixLQUFLO0FBQ0QsZUFBSyxvQkFBb0IsU0FBUyxPQUFPO0FBQ3pDO0FBQUEsUUFDSixLQUFLO0FBQ0QsZUFBSyx1QkFBdUIsU0FBUyxPQUFPO0FBQzVDO0FBQUEsUUFDSixLQUFLO0FBQ0QsZUFBSyx1QkFBdUIsU0FBUyxPQUFPO0FBQzVDO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxJQUVBLG9CQUFvQixTQUFTLFNBQVM7QUFDcEMsWUFBTSxpQkFBaUIsU0FBUyxjQUFjLEtBQUs7QUFDbkQscUJBQWUsWUFBWTtBQUczQixZQUFNLGVBQWUsS0FBSyxvQkFBb0IsZ0JBQWdCLHNDQUFzQztBQUNwRyxxQkFBZSxZQUFZLFlBQVk7QUFFdkMsWUFBTSxnQkFBZ0IsU0FBUyxjQUFjLEtBQUs7QUFDbEQsb0JBQWMsWUFBWTtBQUMxQixZQUFNLGNBQWMsU0FBUyxjQUFjLE9BQU87QUFDbEQsa0JBQVksT0FBTztBQUNuQixrQkFBWSxZQUFZO0FBQ3hCLGtCQUFZLFFBQVEsaUJBQWlCLFNBQVMsZUFBZSxFQUFFLGlCQUFpQixXQUFXLEVBQUUsS0FBSztBQUVsRyxrQkFBWSxpQkFBaUIsU0FBUyxDQUFDLE1BQU07QUFDekMsY0FBTSxXQUFXLEVBQUUsT0FBTztBQUMxQixpQkFBUyxnQkFBZ0IsTUFBTSxZQUFZLGFBQWEsUUFBUTtBQUVoRSxpQkFBUyxnQkFBZ0IsTUFBTSxZQUFZLGtCQUFrQixLQUFLLFdBQVcsVUFBVSxHQUFHLENBQUM7QUFDM0YsZ0JBQVEsa0JBQWtCO0FBQUEsTUFDOUIsQ0FBQztBQUNELG9CQUFjLFlBQVksV0FBVztBQUNyQyxxQkFBZSxZQUFZLGFBQWE7QUFHeEMsWUFBTSxjQUFjLEtBQUssb0JBQW9CLGVBQWUsdUNBQXVDO0FBQ25HLHFCQUFlLFlBQVksV0FBVztBQUV0QyxZQUFNLGdCQUFnQixTQUFTLGNBQWMsS0FBSztBQUNsRCxvQkFBYyxZQUFZO0FBRzFCLFlBQU0sb0JBQW9CLFNBQVMsY0FBYyxLQUFLO0FBQ3RELHdCQUFrQixZQUFZO0FBQzlCLHdCQUFrQixZQUFZO0FBQzlCLFlBQU0sbUJBQW1CLFNBQVMsY0FBYyxPQUFPO0FBQ3ZELHVCQUFpQixPQUFPO0FBQ3hCLHVCQUFpQixZQUFZO0FBQzdCLFlBQU0sb0JBQW9CLGlCQUFpQixTQUFTLGVBQWUsRUFBRSxpQkFBaUIsY0FBYyxFQUFFLEtBQUs7QUFDM0csdUJBQWlCLFFBQVE7QUFFekIsdUJBQWlCLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUM5QyxpQkFBUyxnQkFBZ0IsTUFBTSxZQUFZLGdCQUFnQixFQUFFLE9BQU8sS0FBSztBQUN6RSxnQkFBUSxrQkFBa0I7QUFBQSxNQUM5QixDQUFDO0FBQ0Qsd0JBQWtCLFlBQVksZ0JBQWdCO0FBQzlDLG9CQUFjLFlBQVksaUJBQWlCO0FBRzNDLFlBQU0sc0JBQXNCLFNBQVMsY0FBYyxLQUFLO0FBQ3hELDBCQUFvQixZQUFZO0FBQ2hDLDBCQUFvQixZQUFZO0FBQ2hDLFlBQU0scUJBQXFCLFNBQVMsY0FBYyxPQUFPO0FBQ3pELHlCQUFtQixPQUFPO0FBQzFCLHlCQUFtQixZQUFZO0FBQy9CLHlCQUFtQixNQUFNO0FBQ3pCLHlCQUFtQixNQUFNO0FBQ3pCLHlCQUFtQixPQUFPO0FBQzFCLFlBQU0saUJBQWlCLGlCQUFpQixTQUFTLGVBQWUsRUFBRSxpQkFBaUIsaUJBQWlCLEVBQUUsS0FBSztBQUMzRyx5QkFBbUIsUUFBUTtBQUUzQix5QkFBbUIsaUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ2hELGlCQUFTLGdCQUFnQixNQUFNLFlBQVksbUJBQW1CLEVBQUUsT0FBTyxLQUFLO0FBQzVFLGdCQUFRLGtCQUFrQjtBQUFBLE1BQzlCLENBQUM7QUFDRCwwQkFBb0IsWUFBWSxrQkFBa0I7QUFDbEQsb0JBQWMsWUFBWSxtQkFBbUI7QUFFN0MscUJBQWUsWUFBWSxhQUFhO0FBR3hDLFlBQU0sZUFBZSxLQUFLLG9CQUFvQixVQUFVLHNDQUFzQztBQUM5RixxQkFBZSxZQUFZLFlBQVk7QUFFdkMsWUFBTSxhQUFhLFNBQVMsY0FBYyxLQUFLO0FBQy9DLGlCQUFXLFlBQVk7QUFFdkIsWUFBTSxTQUFTO0FBQUEsUUFDWCxFQUFFLE1BQU0sWUFBWSxPQUFPLFVBQVU7QUFBQSxRQUNyQyxFQUFFLE1BQU0sVUFBVSxPQUFPLFVBQVU7QUFBQSxRQUNuQyxFQUFFLE1BQU0sV0FBVyxPQUFPLFVBQVU7QUFBQSxRQUNwQyxFQUFFLE1BQU0sYUFBYSxPQUFPLFVBQVU7QUFBQSxRQUN0QyxFQUFFLE1BQU0sWUFBWSxPQUFPLFVBQVU7QUFBQSxNQUN6QztBQUVBLGFBQU8sUUFBUSxXQUFTO0FBQ3BCLGNBQU0sWUFBWSxTQUFTLGNBQWMsS0FBSztBQUM5QyxrQkFBVSxZQUFZO0FBQ3RCLGtCQUFVLFlBQVksZ0VBQWdFLE1BQU0sS0FBSyxrQkFBa0IsTUFBTSxJQUFJO0FBQzdILGtCQUFVLGlCQUFpQixTQUFTLE1BQU07QUFDdEMsbUJBQVMsZ0JBQWdCLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSztBQUNuRSxtQkFBUyxnQkFBZ0IsTUFBTSxZQUFZLGtCQUFrQixLQUFLLFdBQVcsTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUM5RixzQkFBWSxRQUFRLE1BQU07QUFDMUIsa0JBQVEsa0JBQWtCO0FBQUEsUUFDOUIsQ0FBQztBQUNELG1CQUFXLFlBQVksU0FBUztBQUFBLE1BQ3BDLENBQUM7QUFFRCxxQkFBZSxZQUFZLFVBQVU7QUFDckMsY0FBUSxZQUFZLGNBQWM7QUFBQSxJQUNwQztBQUFBLElBRUEsb0JBQW9CLE9BQU8sVUFBVTtBQUNqQyxZQUFNLFNBQVMsU0FBUyxjQUFjLEtBQUs7QUFDM0MsYUFBTyxZQUFZO0FBQ25CLGFBQU8sWUFBWTtBQUFBLGdEQUN1QixLQUFLO0FBQUEsbURBQ0YsUUFBUTtBQUFBO0FBRXJELGFBQU87QUFBQSxJQUNYO0FBQUEsSUFFQSx1QkFBdUIsU0FBUyxTQUFTO0FBQ3ZDLFlBQU0sa0JBQWtCLFNBQVMsY0FBYyxLQUFLO0FBQ3BELHNCQUFnQixZQUFZO0FBRzVCLFlBQU0sYUFBYSxTQUFTLGNBQWMsS0FBSztBQUMvQyxpQkFBVyxZQUFZO0FBR3ZCLFlBQU0sZ0JBQWdCLEtBQUssb0JBQW9CLFdBQVcsMkNBQTJDO0FBQ3JHLGlCQUFXLFlBQVksYUFBYTtBQUVwQyxZQUFNLGVBQWUsU0FBUyxjQUFjLEtBQUs7QUFDakQsbUJBQWEsWUFBWTtBQUV6QixZQUFNLGtCQUFrQixLQUFLLG9CQUFvQixhQUFhLCtCQUErQixRQUFRLFVBQVUsQ0FBQyxVQUFVO0FBQ3hILGdCQUFRLFdBQVc7QUFDbkIsZ0JBQVEsdUJBQXVCO0FBQUEsTUFDakMsQ0FBQztBQUNELG1CQUFhLFlBQVksZUFBZTtBQUV4QyxZQUFNLGtCQUFrQixLQUFLLG9CQUFvQixhQUFhLDJCQUEyQixRQUFRLFVBQVUsQ0FBQyxVQUFVO0FBQ3BILGdCQUFRLFdBQVc7QUFDbkIsZ0JBQVEsdUJBQXVCO0FBQUEsTUFDakMsQ0FBQztBQUNELG1CQUFhLFlBQVksZUFBZTtBQUN4QyxpQkFBVyxZQUFZLFlBQVk7QUFHbkMsWUFBTSxlQUFlLEtBQUssb0JBQW9CLGtCQUFrQiwyQ0FBMkM7QUFDM0csaUJBQVcsWUFBWSxZQUFZO0FBRW5DLFlBQU0sZ0JBQWdCLFNBQVMsY0FBYyxLQUFLO0FBQ2xELG9CQUFjLFlBQVk7QUFFMUIsWUFBTSxVQUFVLFNBQVMsY0FBYyxRQUFRO0FBQy9DLGNBQVEsWUFBWTtBQUNwQixjQUFRLGNBQWM7QUFDdEIsY0FBUSxVQUFVLE1BQU07QUFDdEIsZ0JBQVEsdUJBQXVCO0FBQy9CLGdCQUFRLGNBQWM7QUFDdEIsbUJBQVcsTUFBTTtBQUFFLGtCQUFRLGNBQWM7QUFBQSxRQUFjLEdBQUcsR0FBSTtBQUFBLE1BQ2hFO0FBQ0Esb0JBQWMsWUFBWSxPQUFPO0FBRWpDLFlBQU0sVUFBVSxTQUFTLGNBQWMsUUFBUTtBQUMvQyxjQUFRLFlBQVk7QUFDcEIsY0FBUSxjQUFjO0FBQ3RCLGNBQVEsVUFBVSxNQUFNLFFBQVEsa0JBQWtCO0FBQ2xELG9CQUFjLFlBQVksT0FBTztBQUNqQyxpQkFBVyxZQUFZLGFBQWE7QUFFcEMsc0JBQWdCLFlBQVksVUFBVTtBQUd0QyxZQUFNLGNBQWMsU0FBUyxjQUFjLEtBQUs7QUFDaEQsa0JBQVksWUFBWTtBQUV4QixZQUFNLHFCQUFxQixLQUFLLG9CQUFvQixtQkFBbUIsdUNBQXVDO0FBQzlHLGtCQUFZLFlBQVksa0JBQWtCO0FBRTFDLFlBQU0sd0JBQXdCLFNBQVMsY0FBYyxLQUFLO0FBQzFELDRCQUFzQixZQUFZO0FBRWxDLFlBQU0sWUFBWSxTQUFTLGNBQWMsUUFBUTtBQUNqRCxnQkFBVSxZQUFZO0FBQ3RCLGdCQUFVLFlBQVk7QUFDdEIsZ0JBQVUsVUFBVSxNQUFNO0FBQ3hCLGNBQU0sUUFBUSxTQUFTLGNBQWMsT0FBTztBQUM1QyxjQUFNLE9BQU87QUFDYixjQUFNLFNBQVM7QUFDZixjQUFNLFdBQVcsQ0FBQyxNQUFNO0FBQ3RCLGdCQUFNLE9BQU8sRUFBRSxPQUFPLE1BQU0sQ0FBQztBQUM3QixjQUFJLENBQUMsS0FBTTtBQUNYLGdCQUFNLFNBQVMsSUFBSSxXQUFXO0FBQzlCLGlCQUFPLFNBQVMsQ0FBQyxVQUFVO0FBQ3ZCLGdCQUFJO0FBQ0Esc0JBQVEsb0JBQW9CLE1BQU0sT0FBTyxNQUFNO0FBQy9DLG9CQUFNLHNDQUFzQztBQUFBLFlBQ2hELFNBQVMsS0FBSztBQUNWLG9CQUFNLGtGQUFrRjtBQUFBLFlBQzVGO0FBQUEsVUFDSjtBQUNBLGlCQUFPLFdBQVcsSUFBSTtBQUFBLFFBQ3hCO0FBQ0EsY0FBTSxNQUFNO0FBQUEsTUFDZDtBQUVBLFlBQU0sWUFBWSxTQUFTLGNBQWMsUUFBUTtBQUNqRCxnQkFBVSxZQUFZO0FBQ3RCLGdCQUFVLFlBQVk7QUFDdEIsZ0JBQVUsVUFBVSxNQUFNO0FBQ3hCLGNBQU0sU0FBUyxRQUFRLG9CQUFvQjtBQUMzQyxjQUFNLFlBQVksS0FBSyxVQUFVLFFBQVEsTUFBTSxDQUFDO0FBR2hELGtCQUFVLFVBQVUsVUFBVSxTQUFTLEVBQUUsS0FBSyxNQUFNO0FBQ2xELGVBQUssY0FBYyxLQUFLO0FBQUEsWUFDcEIsT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsTUFBTTtBQUFBLFVBQ1YsQ0FBQztBQUFBLFFBQ0gsQ0FBQztBQUdELGNBQU0sT0FBTyxJQUFJLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBQyxNQUFNLG1CQUFrQixDQUFDO0FBQzdELGNBQU0sTUFBTSxJQUFJLGdCQUFnQixJQUFJO0FBQ3BDLGNBQU0sSUFBSSxTQUFTLGNBQWMsR0FBRztBQUNwQyxVQUFFLE9BQU87QUFDVCxVQUFFLFdBQVc7QUFDYixpQkFBUyxLQUFLLFlBQVksQ0FBQztBQUMzQixVQUFFLE1BQU07QUFDUixpQkFBUyxLQUFLLFlBQVksQ0FBQztBQUMzQixZQUFJLGdCQUFnQixHQUFHO0FBQUEsTUFDekI7QUFFQSw0QkFBc0IsWUFBWSxTQUFTO0FBQzNDLDRCQUFzQixZQUFZLFNBQVM7QUFFM0Msa0JBQVksWUFBWSxxQkFBcUI7QUFFN0Msc0JBQWdCLFlBQVksV0FBVztBQUN2QyxjQUFRLFlBQVksZUFBZTtBQUFBLElBQ3JDO0FBQUEsSUFFQSx1QkFBdUIsU0FBUyxTQUFTO0FBRXZDLGNBQVEsWUFBWTtBQUFBLElBQ3RCO0FBQUEsSUFFQSxXQUFXLE9BQU8sU0FBUztBQUN6QixVQUFJLElBQUksU0FBUyxNQUFNLFVBQVUsR0FBRSxDQUFDLEdBQUUsRUFBRTtBQUN4QyxVQUFJLElBQUksU0FBUyxNQUFNLFVBQVUsR0FBRSxDQUFDLEdBQUUsRUFBRTtBQUN4QyxVQUFJLElBQUksU0FBUyxNQUFNLFVBQVUsR0FBRSxDQUFDLEdBQUUsRUFBRTtBQUV4QyxVQUFJLFNBQVMsS0FBSyxNQUFNLFdBQVcsR0FBRztBQUN0QyxVQUFJLFNBQVMsS0FBSyxNQUFNLFdBQVcsR0FBRztBQUN0QyxVQUFJLFNBQVMsS0FBSyxNQUFNLFdBQVcsR0FBRztBQUV0QyxVQUFLLElBQUUsTUFBSyxJQUFFO0FBQ2QsVUFBSyxJQUFFLE1BQUssSUFBRTtBQUNkLFVBQUssSUFBRSxNQUFLLElBQUU7QUFFZCxZQUFNLEtBQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxVQUFRLElBQUcsTUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFFLEVBQUUsU0FBUyxFQUFFO0FBQ3ZFLFlBQU0sS0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLFVBQVEsSUFBRyxNQUFJLEVBQUUsU0FBUyxFQUFFLElBQUUsRUFBRSxTQUFTLEVBQUU7QUFDdkUsWUFBTSxLQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsVUFBUSxJQUFHLE1BQUksRUFBRSxTQUFTLEVBQUUsSUFBRSxFQUFFLFNBQVMsRUFBRTtBQUV2RSxhQUFPLE1BQUksS0FBRyxLQUFHO0FBQUEsSUFDbkI7QUFBQSxJQUVBLHVCQUF1QixTQUFTLFNBQVM7QUFDdkMsWUFBTSxTQUFTLFNBQVMsY0FBYyxLQUFLO0FBQzNDLGFBQU8sWUFBWTtBQUVuQixZQUFNLFFBQVEsU0FBUyxjQUFjLE1BQU07QUFDM0MsWUFBTSxjQUFjLEtBQUs7QUFFekIsWUFBTSxjQUFjLFNBQVMsY0FBYyxPQUFPO0FBQ2xELGtCQUFZLE9BQU87QUFDbkIsa0JBQVksWUFBWTtBQUN4QixrQkFBWSxjQUFjO0FBQzFCLGtCQUFZLFFBQVEsS0FBSztBQUN6QixrQkFBWSxpQkFBaUIsU0FBUyxDQUFDLE1BQU07QUFDM0MsYUFBSyxjQUFjLEVBQUUsT0FBTztBQUM1QixhQUFLLHVCQUF1QixPQUFPO0FBQUEsTUFDckMsQ0FBQztBQUVELGFBQU8sWUFBWSxLQUFLO0FBQ3hCLGFBQU8sWUFBWSxXQUFXO0FBQzlCLGNBQVEsWUFBWSxNQUFNO0FBRTFCLFlBQU0sbUJBQW1CLFNBQVMsY0FBYyxLQUFLO0FBQ3JELHVCQUFpQixZQUFZO0FBQzdCLGNBQVEsWUFBWSxnQkFBZ0I7QUFFcEMsV0FBSyx1QkFBdUIsT0FBTztBQUFBLElBQ3JDO0FBQUEsSUFFQSx1QkFBdUIsU0FBUztBQUM5QixZQUFNLG1CQUFtQixLQUFLLFFBQVEsY0FBYyxtQkFBbUI7QUFDdkUsVUFBSSxDQUFDLGlCQUFrQjtBQUV2Qix1QkFBaUIsWUFBWTtBQUU3QixZQUFNLGtCQUFrQixRQUFRLHFCQUFxQixLQUFLLGNBQWM7QUFDeEUsWUFBTSxrQkFBa0IsZ0JBQWdCO0FBQUEsUUFBTyxTQUM3QyxJQUFJLEtBQUssWUFBWSxFQUFFLFNBQVMsS0FBSyxZQUFZLFlBQVksQ0FBQztBQUFBLE1BQ2hFO0FBRUEsc0JBQWdCLFFBQVEsU0FBTztBQUM3QixjQUFNLGFBQWEsS0FBSyxpQkFBaUIsS0FBSyxPQUFPO0FBQ3JELHlCQUFpQixZQUFZLFVBQVU7QUFBQSxNQUN6QyxDQUFDO0FBQUEsSUFDSDtBQUFBLElBRUEsaUJBQWlCLEtBQUssU0FBUztBQUM3QixZQUFNLE9BQU8sU0FBUyxjQUFjLEtBQUs7QUFDekMsV0FBSyxZQUFZO0FBRWpCLFlBQU0sU0FBUyxTQUFTLGNBQWMsS0FBSztBQUMzQyxhQUFPLFlBQVk7QUFFbkIsWUFBTSxPQUFPLFNBQVMsY0FBYyxLQUFLO0FBQ3pDLFdBQUssWUFBWTtBQUNqQixXQUFLLGNBQWMsSUFBSTtBQUN2QixhQUFPLFlBQVksSUFBSTtBQUV2QixZQUFNLFdBQVcsU0FBUyxjQUFjLEtBQUs7QUFDN0MsZUFBUyxZQUFZO0FBRXJCLFVBQUksSUFBSSxTQUFTLFNBQVMsR0FBRztBQUMzQixjQUFNLGNBQWMsU0FBUyxjQUFjLFFBQVE7QUFDbkQsb0JBQVksWUFBWTtBQUN4QixvQkFBWSxZQUFZO0FBQ3hCLG9CQUFZLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUMzQyxZQUFFLGdCQUFnQjtBQUNsQixlQUFLLHVCQUF1QjtBQUM1QixlQUFLLGNBQWMsT0FBTztBQUFBLFFBQzVCLENBQUM7QUFDRCxpQkFBUyxZQUFZLFdBQVc7QUFBQSxNQUNsQztBQUVBLFlBQU0sU0FBUyxTQUFTLGNBQWMsS0FBSztBQUMzQyxhQUFPLFlBQVksMEJBQTBCLElBQUksVUFBVSxZQUFZLEVBQUU7QUFDekUsYUFBTyxZQUFZO0FBQ25CLGFBQU8saUJBQWlCLFNBQVMsTUFBTTtBQUNyQyxnQkFBUSxPQUFPLElBQUksSUFBSTtBQUN2QixlQUFPLFVBQVUsT0FBTyxTQUFTO0FBQUEsTUFDbkMsQ0FBQztBQUNELGVBQVMsWUFBWSxNQUFNO0FBQzNCLGFBQU8sWUFBWSxRQUFRO0FBRTNCLFdBQUssWUFBWSxNQUFNO0FBRXZCLFVBQUksSUFBSSxhQUFhO0FBQ25CLGNBQU0sY0FBYyxTQUFTLGNBQWMsS0FBSztBQUNoRCxvQkFBWSxZQUFZO0FBQ3hCLG9CQUFZLGNBQWMsSUFBSTtBQUM5QixhQUFLLFlBQVksV0FBVztBQUFBLE1BQzlCO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFBQSxJQUVBLHdCQUF3QixTQUFTLFNBQVM7QUFDeEMsWUFBTSxNQUFNLEtBQUs7QUFDakIsVUFBSSxDQUFDLElBQUs7QUFFVixZQUFNLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDNUMsY0FBUSxZQUFZO0FBR3BCLFlBQU0sU0FBUyxTQUFTLGNBQWMsS0FBSztBQUMzQyxhQUFPLFlBQVk7QUFFbkIsWUFBTSxVQUFVLFNBQVMsY0FBYyxRQUFRO0FBQy9DLGNBQVEsWUFBWTtBQUNwQixjQUFRLFlBQVk7QUFDcEIsY0FBUSxpQkFBaUIsU0FBUyxNQUFNO0FBQ3RDLGFBQUssdUJBQXVCO0FBQzVCLGFBQUssY0FBYyxPQUFPO0FBQUEsTUFDNUIsQ0FBQztBQUVELFlBQU0sUUFBUSxTQUFTLGNBQWMsTUFBTTtBQUMzQyxZQUFNLGNBQWMsR0FBRyxJQUFJLElBQUk7QUFFL0IsYUFBTyxZQUFZLE9BQU87QUFDMUIsYUFBTyxZQUFZLEtBQUs7QUFDeEIsY0FBUSxZQUFZLE1BQU07QUFHMUIsWUFBTSxvQkFBb0IsU0FBUyxjQUFjLEtBQUs7QUFDdEQsd0JBQWtCLFlBQVk7QUFFOUIsVUFBSSxTQUFTLFFBQVEsYUFBVztBQUM5QixjQUFNLGlCQUFpQixLQUFLLHFCQUFxQixLQUFLLFNBQVMsT0FBTztBQUN0RSxZQUFJLGdCQUFnQjtBQUVsQixjQUFJLFFBQVEsV0FBVztBQUNyQixrQkFBTSxZQUFZLFFBQVEsVUFBVSxJQUFJLFNBQVMsT0FBTyxDQUFDLEtBQUssT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3RHLDJCQUFlLE1BQU0sVUFBVSxZQUFZLEtBQUs7QUFBQSxVQUNsRDtBQUNBLDRCQUFrQixZQUFZLGNBQWM7QUFBQSxRQUM5QztBQUFBLE1BQ0YsQ0FBQztBQUVELGNBQVEsWUFBWSxpQkFBaUI7QUFDckMsY0FBUSxZQUFZLE9BQU87QUFBQSxJQUM3QjtBQUFBLElBRUEscUJBQXFCLFFBQVEsU0FBUyxTQUFTO0FBQzdDLFlBQU0saUJBQWlCLFNBQVMsY0FBYyxLQUFLO0FBQ25ELHFCQUFlLFlBQVk7QUFDM0IscUJBQWUsUUFBUSxZQUFZLFFBQVE7QUFFM0MsWUFBTSxnQkFBZ0IsU0FBUyxjQUFjLEtBQUs7QUFDbEQsb0JBQWMsWUFBWTtBQUUxQixZQUFNLFFBQVEsU0FBUyxjQUFjLE9BQU87QUFDNUMsWUFBTSxZQUFZO0FBQ2xCLFlBQU0sY0FBYyxRQUFRO0FBQzVCLG9CQUFjLFlBQVksS0FBSztBQUUvQixVQUFJLFFBQVEsYUFBYTtBQUN2QixjQUFNLE9BQU8sU0FBUyxjQUFjLEdBQUc7QUFDdkMsYUFBSyxZQUFZO0FBQ2pCLGFBQUssY0FBYyxRQUFRO0FBQzNCLHNCQUFjLFlBQVksSUFBSTtBQUFBLE1BQ2hDO0FBRUEscUJBQWUsWUFBWSxhQUFhO0FBRXhDLFlBQU0sbUJBQW1CLFNBQVMsY0FBYyxLQUFLO0FBQ3JELHVCQUFpQixZQUFZO0FBRTdCLGNBQVEsUUFBUSxNQUFNO0FBQUEsUUFDcEIsS0FBSztBQUNILGdCQUFNLFdBQVcsU0FBUyxjQUFjLE9BQU87QUFDL0MsbUJBQVMsT0FBTztBQUNoQixtQkFBUyxVQUFVLFFBQVE7QUFDM0IsbUJBQVMsWUFBWTtBQUNyQixtQkFBUyxpQkFBaUIsVUFBVSxDQUFDLE1BQU07QUFDekMsb0JBQVEsb0JBQW9CLE9BQU8sTUFBTSxRQUFRLElBQUksRUFBRSxPQUFPLE9BQU87QUFDckUsaUJBQUssMEJBQTBCLFFBQVEsT0FBTztBQUFBLFVBQ2hELENBQUM7QUFDRCwyQkFBaUIsWUFBWSxRQUFRO0FBQ3JDO0FBQUEsUUFDRixLQUFLO0FBQ0gsZ0JBQU0sU0FBUyxTQUFTLGNBQWMsT0FBTztBQUM3QyxpQkFBTyxPQUFPO0FBQ2QsaUJBQU8sTUFBTSxRQUFRO0FBQ3JCLGlCQUFPLE1BQU0sUUFBUTtBQUNyQixpQkFBTyxPQUFPLFFBQVE7QUFDdEIsaUJBQU8sUUFBUSxRQUFRO0FBQ3ZCLGlCQUFPLFlBQVk7QUFDbkIsaUJBQU8saUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ3RDLG9CQUFRLG9CQUFvQixPQUFPLE1BQU0sUUFBUSxJQUFJLFdBQVcsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUFBLFVBQ2pGLENBQUM7QUFDRCwyQkFBaUIsWUFBWSxNQUFNO0FBQ25DO0FBQUEsUUFDRixLQUFLO0FBQ0gsZ0JBQU0sU0FBUyxTQUFTLGNBQWMsUUFBUTtBQUM5QyxpQkFBTyxZQUFZO0FBQ25CLGtCQUFRLFFBQVEsUUFBUSxTQUFPO0FBQzdCLGtCQUFNLFNBQVMsU0FBUyxjQUFjLFFBQVE7QUFDOUMsbUJBQU8sUUFBUTtBQUNmLG1CQUFPLGNBQWM7QUFDckIsZ0JBQUksUUFBUSxVQUFVLElBQUssUUFBTyxXQUFXO0FBQzdDLG1CQUFPLFlBQVksTUFBTTtBQUFBLFVBQzNCLENBQUM7QUFDRCxpQkFBTyxpQkFBaUIsVUFBVSxDQUFDLE1BQU07QUFDdkMsb0JBQVEsb0JBQW9CLE9BQU8sTUFBTSxRQUFRLElBQUksRUFBRSxPQUFPLEtBQUs7QUFDbkUsaUJBQUssMEJBQTBCLFFBQVEsT0FBTztBQUFBLFVBQ2hELENBQUM7QUFDRCwyQkFBaUIsWUFBWSxNQUFNO0FBQ25DO0FBQUEsUUFDRixLQUFLO0FBQ0gsZ0JBQU0sWUFBWSxTQUFTLGNBQWMsT0FBTztBQUNoRCxvQkFBVSxPQUFPO0FBQ2pCLG9CQUFVLFFBQVEsUUFBUTtBQUMxQixvQkFBVSxZQUFZO0FBQ3RCLG9CQUFVLGlCQUFpQixVQUFVLENBQUMsTUFBTTtBQUMxQyxvQkFBUSxvQkFBb0IsT0FBTyxNQUFNLFFBQVEsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUFBLFVBQ3JFLENBQUM7QUFDRCwyQkFBaUIsWUFBWSxTQUFTO0FBQ3RDO0FBQUEsUUFDRixLQUFLO0FBQ0gsZ0JBQU0sY0FBYyxLQUFLLGtCQUFrQixRQUFRLFNBQVMsT0FBTztBQUNuRSwyQkFBaUIsWUFBWSxXQUFXO0FBQ3hDO0FBQUEsTUFDSjtBQUVBLHFCQUFlLFlBQVksZ0JBQWdCO0FBQzNDLGFBQU87QUFBQSxJQUNUO0FBQUEsSUFFQSwwQkFBMEIsUUFBUSxTQUFTO0FBQ3pDLFlBQU0sY0FBYyxPQUFPLFNBQVMsT0FBTyxDQUFDLEtBQUssT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUN4RixZQUFNLG9CQUFvQixLQUFLLFFBQVEsY0FBYywyQkFBMkI7QUFFaEYsYUFBTyxTQUFTLFFBQVEsT0FBSztBQUMzQixZQUFJLEVBQUUsV0FBVztBQUNmLGdCQUFNLGlCQUFpQixrQkFBa0IsY0FBYyxxQkFBcUIsRUFBRSxFQUFFLElBQUk7QUFDcEYsY0FBSSxnQkFBZ0I7QUFDbEIsMkJBQWUsTUFBTSxVQUFVLEVBQUUsVUFBVSxXQUFXLElBQUksS0FBSztBQUFBLFVBQ2pFO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQTtBQUFBLElBSUEsa0JBQWtCLFFBQVEsU0FBUyxTQUFTO0FBQzFDLFlBQU0sVUFBVSxTQUFTLGNBQWMsS0FBSztBQUM1QyxjQUFRLFlBQVk7QUFFcEIsWUFBTSxTQUFTLFNBQVMsY0FBYyxLQUFLO0FBQzNDLGFBQU8sWUFBWTtBQUNuQixhQUFPLE1BQU0sUUFBUSxRQUFRO0FBRTdCLFlBQU0sUUFBUSxLQUFLLGlCQUFpQixRQUFRLFNBQVMsU0FBUyxNQUFNO0FBRXBFLGFBQU8saUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ3RDLFVBQUUsZ0JBQWdCO0FBQ2xCLGNBQU0sSUFBSSxTQUFTLGNBQWMsdUJBQXVCO0FBQ3hELFlBQUksS0FBSyxNQUFNLE1BQU8sR0FBRSxPQUFPO0FBQy9CLFlBQUksU0FBUyxjQUFjLHVCQUF1QixNQUFNLE9BQU87QUFDM0QsZ0JBQU0sT0FBTztBQUFBLFFBQ2pCLE9BQU87QUFDSCxrQkFBUSxZQUFZLEtBQUs7QUFBQSxRQUM3QjtBQUFBLE1BQ0YsQ0FBQztBQUVELGNBQVEsWUFBWSxNQUFNO0FBRzFCLGVBQVMsaUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ3hDLFlBQUksQ0FBQyxRQUFRLFNBQVMsRUFBRSxNQUFNLEdBQUc7QUFDL0IsZ0JBQU0sT0FBTztBQUFBLFFBQ2Y7QUFBQSxNQUNGLENBQUM7QUFFRCxhQUFPO0FBQUEsSUFDVDtBQUFBLElBRUEsaUJBQWlCLFFBQVEsU0FBUyxTQUFTLFFBQVE7QUFDakQsWUFBTSxRQUFRLFNBQVMsY0FBYyxLQUFLO0FBQzFDLFlBQU0sWUFBWTtBQUVsQixZQUFNLGFBQWEsU0FBUyxjQUFjLE9BQU87QUFDakQsaUJBQVcsT0FBTztBQUNsQixpQkFBVyxRQUFRLEtBQUssVUFBVSxRQUFRLEtBQUssRUFBRTtBQUVqRCxZQUFNLGNBQWMsU0FBUyxjQUFjLE9BQU87QUFDbEQsa0JBQVksT0FBTztBQUNuQixrQkFBWSxZQUFZO0FBQ3hCLGtCQUFZLE1BQU07QUFDbEIsa0JBQVksTUFBTTtBQUNsQixrQkFBWSxPQUFPO0FBQ25CLGtCQUFZLFFBQVEsS0FBSyxVQUFVLFFBQVEsS0FBSyxFQUFFO0FBRWxELFlBQU0sY0FBYyxNQUFNO0FBQ3hCLGNBQU0sTUFBTSxXQUFXO0FBQ3ZCLGNBQU0sUUFBUSxXQUFXLFlBQVksS0FBSztBQUMxQyxjQUFNLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSztBQUV0QyxlQUFPLE1BQU0sUUFBUTtBQUNyQixnQkFBUSxvQkFBb0IsT0FBTyxNQUFNLFFBQVEsSUFBSSxJQUFJO0FBQUEsTUFDM0Q7QUFFQSxpQkFBVyxpQkFBaUIsU0FBUyxXQUFXO0FBQ2hELGtCQUFZLGlCQUFpQixTQUFTLFdBQVc7QUFFakQsWUFBTSxZQUFZLFVBQVU7QUFDNUIsWUFBTSxZQUFZLFdBQVc7QUFDN0IsYUFBTztBQUFBLElBQ1Q7QUFBQSxJQUVBLFVBQVUsS0FBSyxPQUFPO0FBQ3BCLFlBQU0sSUFBSSxTQUFTLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFO0FBQ3RDLFlBQU0sSUFBSSxTQUFTLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFO0FBQ3RDLFlBQU0sSUFBSSxTQUFTLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFO0FBQ3RDLGFBQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLO0FBQUEsSUFDeEM7QUFBQSxJQUVBLFVBQVUsTUFBTTtBQUNkLFVBQUksS0FBSyxXQUFXLEdBQUcsRUFBRyxRQUFPLEVBQUUsS0FBSyxNQUFNLE9BQU8sRUFBRTtBQUN2RCxZQUFNLFFBQVEsS0FBSyxNQUFNLFNBQVM7QUFDbEMsVUFBSSxDQUFDLFNBQVMsTUFBTSxTQUFTLEVBQUcsUUFBTyxFQUFFLEtBQUssV0FBVyxPQUFPLEVBQUU7QUFFbEUsWUFBTSxJQUFJLFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN6RCxZQUFNLElBQUksU0FBUyxNQUFNLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3pELFlBQU0sSUFBSSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFFekQsWUFBTSxRQUFRLE1BQU0sVUFBVSxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUMsSUFBSTtBQUV6RCxhQUFPLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU07QUFBQSxJQUN2QztBQUFBLElBRUEsb0JBQW9CLE1BQU0sYUFBYSxjQUFjLFVBQVU7QUFDN0QsWUFBTSxpQkFBaUIsU0FBUyxjQUFjLEtBQUs7QUFDbkQscUJBQWUsWUFBWTtBQUUzQixZQUFNLGdCQUFnQixTQUFTLGNBQWMsS0FBSztBQUNsRCxvQkFBYyxZQUFZO0FBQzFCLFlBQU0sUUFBUSxTQUFTLGNBQWMsT0FBTztBQUM1QyxZQUFNLFlBQVk7QUFDbEIsWUFBTSxjQUFjO0FBQ3BCLFlBQU0sT0FBTyxTQUFTLGNBQWMsR0FBRztBQUN2QyxXQUFLLFlBQVk7QUFDakIsV0FBSyxjQUFjO0FBQ25CLG9CQUFjLFlBQVksS0FBSztBQUMvQixvQkFBYyxZQUFZLElBQUk7QUFFOUIsWUFBTSxtQkFBbUIsU0FBUyxjQUFjLEtBQUs7QUFDckQsdUJBQWlCLFlBQVk7QUFDN0IsWUFBTSxXQUFXLFNBQVMsY0FBYyxPQUFPO0FBQy9DLGVBQVMsT0FBTztBQUNoQixlQUFTLFVBQVU7QUFDbkIsZUFBUyxZQUFZO0FBQ3JCLGVBQVMsaUJBQWlCLFVBQVUsQ0FBQyxNQUFNO0FBQ3pDLGlCQUFTLEVBQUUsT0FBTyxPQUFPO0FBQUEsTUFDM0IsQ0FBQztBQUNELHVCQUFpQixZQUFZLFFBQVE7QUFFckMscUJBQWUsWUFBWSxhQUFhO0FBQ3hDLHFCQUFlLFlBQVksZ0JBQWdCO0FBRTNDLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUVBLE1BQU8sbUJBQVE7OztBQ25rQ2YsTUFBTSxhQUFhO0FBQUEsSUFDakIsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLE1BQ1IsRUFBRSxJQUFJLGNBQWMsTUFBTSxjQUFjLE1BQU0sVUFBVSxTQUFTLENBQUMsU0FBUyxRQUFRLEdBQUcsT0FBTyxRQUFRO0FBQUEsTUFDckcsRUFBRSxJQUFJLFlBQVksTUFBTSxvQkFBb0IsTUFBTSxTQUFTLE9BQU8sMEJBQTBCLFdBQVcsT0FBSyxFQUFFLFlBQVksTUFBTSxTQUFTO0FBQUEsTUFDekksRUFBRSxJQUFJLGNBQWMsTUFBTSxjQUFjLE1BQU0sU0FBUyxPQUFPLFdBQVcsV0FBVyxPQUFLLEVBQUUsWUFBWSxNQUFNLFNBQVM7QUFBQSxNQUN0SCxFQUFFLElBQUksYUFBYSxNQUFNLGFBQWEsTUFBTSxVQUFVLE9BQU8sSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLE1BQU0sRUFBRTtBQUFBLE1BQzFGLEVBQUUsSUFBSSxXQUFXLE1BQU0sV0FBVyxNQUFNLFVBQVUsT0FBTyxHQUFHLEtBQUssR0FBRyxLQUFLLElBQUksTUFBTSxFQUFFO0FBQUEsTUFDckYsRUFBRSxJQUFJLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLFVBQVUsT0FBTyxJQUFJLEtBQUssR0FBRyxLQUFLLElBQUksTUFBTSxFQUFFO0FBQUEsTUFDbEcsRUFBRSxJQUFJLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLFVBQVUsT0FBTyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTSxFQUFFO0FBQUEsTUFDOUYsRUFBRSxJQUFJLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLFNBQVMsT0FBTyw2QkFBNkIsV0FBVyxPQUFLLEVBQUUsWUFBWSxNQUFNLFNBQVM7QUFBQSxNQUM1SSxFQUFFLElBQUksY0FBYyxNQUFNLGNBQWMsTUFBTSxXQUFXLE9BQU8sS0FBSztBQUFBLE1BQ3JFLEVBQUUsSUFBSSxVQUFVLE1BQU0sZUFBZSxNQUFNLFFBQVEsT0FBTyxpQkFBaUIsYUFBYSx5Q0FBeUM7QUFBQSxNQUNqSSxFQUFFLElBQUksaUJBQWlCLE1BQU0seUJBQXlCLE1BQU0sV0FBVyxPQUFPLE1BQU0sYUFBYSxxQ0FBcUM7QUFBQSxJQUN4STtBQUFBLElBRUEsWUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLElBQ1YsS0FBSztBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsZUFBZTtBQUFBLElBQ2YsaUJBQWlCO0FBQUEsSUFDakIscUJBQXFCO0FBQUEsSUFFckIsV0FBVztBQUNULFdBQUssYUFBYTtBQUNsQixXQUFLLFdBQVcsWUFBWSxJQUFJO0FBQ2hDLFdBQUssTUFBTTtBQUNYLFdBQUssY0FBYztBQUNuQixXQUFLLFlBQVk7QUFFakIsV0FBSyxnQkFBZ0IsS0FBSyxXQUFXLEtBQUssSUFBSTtBQUM5Qyw0QkFBc0IsS0FBSyxhQUFhO0FBRXhDLFdBQUssd0JBQXdCO0FBQUEsSUFDL0I7QUFBQSxJQUVBLFlBQVk7QUFDVixXQUFLLGVBQWU7QUFFcEIsV0FBSyxnQkFBZ0I7QUFFckIsV0FBSyxzQkFBc0I7QUFBQSxJQUM3QjtBQUFBLElBRUEsV0FBVyxXQUFXO0FBQ3BCLFdBQUs7QUFFTCxZQUFNLFVBQVUsWUFBWSxLQUFLO0FBQ2pDLFVBQUksV0FBVyxLQUFNO0FBQ25CLGFBQUssTUFBTSxLQUFLLE1BQU8sS0FBSyxhQUFhLE1BQVEsT0FBTztBQUN4RCxhQUFLLGFBQWE7QUFDbEIsYUFBSyxXQUFXO0FBQUEsTUFDbEI7QUFFQSxVQUFJLEtBQUssZUFBZTtBQUN0Qiw4QkFBc0IsS0FBSyxhQUFhO0FBQUEsTUFDMUM7QUFBQSxJQUNGO0FBQUEsSUFFQSxTQUFTO0FBQ1AsV0FBSyxjQUFjO0FBQUEsSUFDckI7QUFBQSxJQUVBLGdCQUFnQixXQUFXO0FBQ3pCLFdBQUssWUFBWTtBQUNqQixXQUFLLGNBQWM7QUFFbkIsVUFBSSxjQUFjLGlCQUFpQjtBQUNqQyxhQUFLLHdCQUF3QjtBQUFBLE1BQy9CO0FBQUEsSUFDRjtBQUFBLElBRUEsZ0JBQWdCO0FBQ2QsV0FBSyxVQUFVLFNBQVMsY0FBYyxLQUFLO0FBQzNDLFdBQUssUUFBUSxZQUFZO0FBQ3pCLGVBQVMsS0FBSyxZQUFZLEtBQUssT0FBTztBQUFBLElBQ3hDO0FBQUEsSUFFQSxpQkFBaUI7QUFDZixVQUFJLEtBQUssU0FBUztBQUNoQixpQkFBUyxLQUFLLFlBQVksS0FBSyxPQUFPO0FBQ3RDLGFBQUssVUFBVTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLElBRUEsMEJBQTBCO0FBQ3hCLFlBQU0sV0FBVyxLQUFLLFNBQVMsT0FBTyxDQUFDLEtBQUssT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUVuRixVQUFJLFNBQVMsZUFBZSxHQUFHO0FBQzdCLGFBQUssbUJBQW1CO0FBQUEsTUFDMUIsT0FBTztBQUNMLGFBQUssc0JBQXNCO0FBQUEsTUFDN0I7QUFBQSxJQUNGO0FBQUEsSUFFQSxxQkFBcUI7QUFDbkIsWUFBTSxnQkFBZ0IsU0FBUyxjQUFjLGdCQUFnQjtBQUM3RCxVQUFJLGVBQWU7QUFDakIsYUFBSyxrQkFBa0I7QUFDdkIsYUFBSyxzQkFBc0IsY0FBYyxNQUFNO0FBRS9DLHNCQUFjLE1BQU0sVUFBVTtBQUFBLE1BQ2hDO0FBQUEsSUFDRjtBQUFBLElBRUEsd0JBQXdCO0FBQ3RCLFVBQUksS0FBSyxpQkFBaUI7QUFDeEIsYUFBSyxnQkFBZ0IsTUFBTSxVQUFVLEtBQUssdUJBQXVCO0FBQ2pFLGFBQUssa0JBQWtCO0FBQ3ZCLGFBQUssc0JBQXNCO0FBQUEsTUFDN0I7QUFBQSxJQUNGO0FBQUEsSUFFQSxnQkFBZ0I7QUFDZCxVQUFJLEtBQUssU0FBUztBQUNoQixjQUFNLFdBQVcsT0FBTyxTQUFTLFNBQVMsSUFBSSxVQUFVO0FBQ3hELFlBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxjQUFjO0FBQ3JDLGdCQUFNLE1BQU0sT0FBTyxTQUFTLFNBQVMsSUFBSSxLQUFLLElBQUk7QUFDbEQsY0FBSSxJQUFJLE1BQU0sS0FBTSxNQUFLLFFBQVEsTUFBTSxPQUFPLE9BQU8sSUFBSSxNQUFNLFdBQVcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQzFGLGNBQUksSUFBSSxNQUFNLEtBQU0sTUFBSyxRQUFRLE1BQU0sTUFBTSxPQUFPLElBQUksTUFBTSxXQUFXLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUFBLFFBQzdGO0FBQ0EsY0FBTSxXQUFXLEtBQUssU0FBUyxPQUFPLENBQUMsS0FBSyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFDO0FBQ25GLFlBQUksT0FBTyxTQUFTO0FBRXBCLFlBQUksU0FBUyxZQUFZLEVBQUcsUUFBTyxLQUFLLFFBQVEsV0FBVyxNQUFNO0FBQUEsWUFBUSxRQUFPLEtBQUssUUFBUSxXQUFXLEVBQUU7QUFDMUcsZUFBTyxLQUFLLFFBQVEsU0FBUyxLQUFLLEdBQUc7QUFFckMsYUFBSyxRQUFRLGNBQWMsS0FBSyxLQUFLO0FBQUEsTUFDdkM7QUFBQSxJQUNGO0FBQUEsSUFFQSxjQUFjO0FBQ1osVUFBSSxDQUFDLEtBQUssUUFBUztBQUNuQixZQUFNLFdBQVcsS0FBSyxTQUFTLE9BQU8sQ0FBQyxLQUFLLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUM7QUFFbkYsVUFBSSxTQUFTLFlBQVksTUFBTSxTQUFTO0FBQ3BDLGFBQUssUUFBUSxNQUFNLGtCQUFrQjtBQUNyQyxhQUFLLFFBQVEsTUFBTSxRQUFRO0FBQzNCLGFBQUssUUFBUSxNQUFNLFNBQVMsR0FBRyxTQUFTLGNBQWMsQ0FBQztBQUFBLE1BQzNELE9BQU87QUFDSCxhQUFLLFFBQVEsTUFBTSxrQkFBa0IsU0FBUyxVQUFVO0FBQ3hELGFBQUssUUFBUSxNQUFNLFFBQVEsU0FBUyxZQUFZO0FBQ2hELGFBQUssUUFBUSxNQUFNLFNBQVMsR0FBRyxTQUFTLGNBQWMsQ0FBQyxZQUFZLFNBQVMsY0FBYyxDQUFDO0FBQUEsTUFDL0Y7QUFFQSxXQUFLLFFBQVEsTUFBTSxXQUFXLEdBQUcsU0FBUyxXQUFXLENBQUM7QUFDdEQsV0FBSyxRQUFRLE1BQU0sVUFBVSxHQUFHLFNBQVMsU0FBUyxDQUFDO0FBQ25ELFdBQUssUUFBUSxNQUFNLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQztBQUM5RCxXQUFLLFFBQVEsTUFBTSxXQUFXO0FBQzlCLFdBQUssUUFBUSxNQUFNLGFBQWE7QUFDaEMsV0FBSyxRQUFRLE1BQU0sU0FBUztBQUM1QixXQUFLLFFBQVEsTUFBTSxnQkFBZ0I7QUFBQSxJQUNyQztBQUFBLEVBQ0Y7QUFFQSxNQUFPLHFCQUFROzs7QUNqS2YsTUFBSSxtQkFBbUI7QUFFaEIsV0FBUyxnQkFBZ0I7QUFDNUIsUUFBSSxrQkFBa0I7QUFDbEIsYUFBTztBQUFBLElBQ1g7QUFFQSxVQUFNLGVBQWUsU0FBUyxpQkFBaUIsK0JBQStCO0FBRTlFLFVBQU0sZUFBZSxNQUFNLEtBQUssWUFBWSxFQUFFLE9BQU8sT0FBSyxFQUFFLGFBQWEsU0FBUyxTQUFTLENBQUM7QUFFNUYsUUFBSSxhQUFhLFNBQVMsR0FBRztBQUN6QixZQUFNLGdCQUFnQixhQUFhLGFBQWEsU0FBUyxDQUFDO0FBQzFELFlBQU0sT0FBTyxjQUFjO0FBQzNCLFlBQU0sT0FBTyxLQUFLLE1BQU0sU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLO0FBQzNDLFVBQUksTUFBTTtBQUNOLDJCQUFtQjtBQUNuQixlQUFPO0FBQUEsTUFDWDtBQUFBLElBQ0o7QUFFQSxXQUFPO0FBQUEsRUFDWDtBQVFPLFdBQVMsZ0JBQWdCLE9BQU8sUUFBUSxJQUFJO0FBQ2pELFVBQU0sWUFBWSxLQUFLLElBQUksSUFBSTtBQUMvQixVQUFNLE9BQU8sUUFBUSxLQUFLLGFBQWE7QUFDdkMsV0FBTyxPQUFPLEdBQUc7QUFBQSxFQUNuQjs7O0FDaENBLE1BQU0sWUFBWTtBQUFBLElBQ2QsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsU0FBUztBQUFBLElBQ1QsWUFBWTtBQUFBLElBQ1osa0JBQWtCO0FBQUEsSUFDbEIsdUJBQXVCO0FBQUEsSUFDdkIsZ0JBQWdCO0FBQUEsSUFDaEIsVUFBVTtBQUFBLElBRVYsVUFBVTtBQUFBLE1BQ04sRUFBRSxJQUFJLGlCQUFpQixNQUFNLHNCQUFzQixNQUFNLFdBQVcsT0FBTyxNQUFNLGFBQWEseUVBQXlFO0FBQUEsTUFDdkssRUFBRSxJQUFJLGNBQWMsTUFBTSxjQUFjLE1BQU0sVUFBVSxTQUFTLENBQUMsU0FBUyxRQUFRLEdBQUcsT0FBTyxRQUFRO0FBQUEsTUFDckcsRUFBRSxJQUFJLFlBQVksTUFBTSxvQkFBb0IsTUFBTSxTQUFTLE9BQU8sMEJBQTBCLFdBQVcsT0FBSyxFQUFFLFlBQVksTUFBTSxTQUFTO0FBQUEsTUFDekksRUFBRSxJQUFJLGNBQWMsTUFBTSxjQUFjLE1BQU0sU0FBUyxPQUFPLFdBQVcsV0FBVyxPQUFLLEVBQUUsWUFBWSxNQUFNLFNBQVM7QUFBQSxNQUN0SCxFQUFFLElBQUksZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0sU0FBUyxPQUFPLFdBQVcsV0FBVyxPQUFLLEVBQUUsWUFBWSxNQUFNLFNBQVM7QUFBQSxNQUMxSCxFQUFFLElBQUksYUFBYSxNQUFNLGFBQWEsTUFBTSxVQUFVLE9BQU8sSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtBQUFBLE1BQzNGLEVBQUUsSUFBSSxhQUFhLE1BQU0sZUFBZSxNQUFNLFVBQVUsT0FBTyxHQUFHLEtBQUssR0FBRyxLQUFLLElBQUksTUFBTSxFQUFFO0FBQUEsTUFDM0YsRUFBRSxJQUFJLGFBQWEsTUFBTSxlQUFlLE1BQU0sVUFBVSxPQUFPLEdBQUcsS0FBSyxHQUFHLEtBQUssSUFBSSxNQUFNLEVBQUU7QUFBQSxNQUMzRixFQUFFLElBQUksaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sVUFBVSxPQUFPLElBQUksS0FBSyxHQUFHLEtBQUssSUFBSSxNQUFNLEVBQUU7QUFBQSxNQUNsRyxFQUFFLElBQUksZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0sVUFBVSxPQUFPLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNLEVBQUU7QUFBQSxNQUM5RixFQUFFLElBQUksZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0sU0FBUyxPQUFPLDZCQUE2QixXQUFXLE9BQUssRUFBRSxZQUFZLE1BQU0sU0FBUztBQUFBLE1BQzVJLEVBQUUsSUFBSSxhQUFhLE1BQU0sYUFBYSxNQUFNLFdBQVcsT0FBTyxLQUFLO0FBQUEsTUFDbkUsRUFBRSxJQUFJLGFBQWEsTUFBTSxhQUFhLE1BQU0sUUFBUSxPQUFPLEtBQUssV0FBVyxDQUFDLGFBQWEsU0FBUyxXQUFXLEVBQUU7QUFBQSxNQUMvRyxFQUFFLElBQUksYUFBYSxNQUFNLGFBQWEsTUFBTSxXQUFXLE9BQU8sS0FBSztBQUFBLE1BQ25FLEVBQUUsSUFBSSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxXQUFXLE9BQU8sS0FBSztBQUFBLE1BQzNFLEVBQUUsSUFBSSxjQUFjLE1BQU0sY0FBYyxNQUFNLFdBQVcsT0FBTyxLQUFLO0FBQUEsSUFDekU7QUFBQSxJQUVBLFdBQVc7QUFDUCxXQUFLLGFBQWE7QUFFbEIsV0FBSyxXQUFXLElBQUksaUJBQWlCLE1BQU0sS0FBSyxhQUFhLENBQUM7QUFDOUQsV0FBSyxTQUFTLFFBQVEsU0FBUyxNQUFNLEVBQUUsV0FBVyxNQUFNLFNBQVMsS0FBSyxDQUFDO0FBRXZFLFdBQUssY0FBYztBQUNuQixXQUFLLFlBQVk7QUFBQSxJQUNyQjtBQUFBLElBRUEsWUFBWTtBQUNSLFVBQUksS0FBSyxVQUFVO0FBQ2YsYUFBSyxTQUFTLFdBQVc7QUFDekIsYUFBSyxXQUFXO0FBQUEsTUFDcEI7QUFDQSxXQUFLLGNBQWM7QUFDbkIsV0FBSyxlQUFlO0FBQUEsSUFDeEI7QUFBQSxJQUVBLFNBQVM7QUFDTCxXQUFLLGNBQWM7QUFBQSxJQUN2QjtBQUFBLElBRUEsZ0JBQWdCLFdBQVc7QUFDdkIsVUFBSSxjQUFjLGlCQUFpQjtBQUMvQixhQUFLLGFBQWE7QUFBQSxNQUN0QjtBQUNBLFdBQUssWUFBWTtBQUNqQixXQUFLLGNBQWMsSUFBSTtBQUFBLElBQzNCO0FBQUEsSUFFQSxlQUFlO0FBQ1gsWUFBTSxTQUFTLFNBQVMsY0FBYyx3QkFBd0I7QUFDOUQsVUFBSSxRQUFRO0FBQ1IsYUFBSyxhQUFhO0FBQ2xCLGNBQU0sZUFBZSxLQUFLLFNBQVMsS0FBSyxPQUFLLEVBQUUsT0FBTyxlQUFlLEVBQUU7QUFDdkUsWUFBSSxjQUFjO0FBQ2QsaUJBQU8sTUFBTSxXQUFXO0FBQ3hCLGlCQUFPLE1BQU0sT0FBTztBQUNwQixpQkFBTyxNQUFNLE1BQU07QUFDbkIsaUJBQU8sTUFBTSxVQUFVO0FBQUEsUUFDM0IsT0FBTztBQUNILGlCQUFPLE1BQU0sVUFBVTtBQUFBLFFBQzNCO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxJQUVBLGdCQUFnQjtBQUNaLFVBQUksS0FBSyxZQUFZO0FBQ2pCLGFBQUssV0FBVyxNQUFNLFdBQVc7QUFDakMsYUFBSyxXQUFXLE1BQU0sT0FBTztBQUM3QixhQUFLLFdBQVcsTUFBTSxNQUFNO0FBQzVCLGFBQUssV0FBVyxNQUFNLFVBQVU7QUFDaEMsYUFBSyxXQUFXLE1BQU0sVUFBVTtBQUFBLE1BQ3BDO0FBQUEsSUFDSjtBQUFBLElBRUEsZ0JBQWdCO0FBQ1osV0FBSyxVQUFVLFNBQVMsY0FBYyxLQUFLO0FBQzNDLFdBQUssUUFBUSxZQUFZO0FBQ3pCLFdBQUssUUFBUSxNQUFNLE1BQU07QUFDekIsV0FBSyxRQUFRLE1BQU0sT0FBTztBQUMxQixlQUFTLEtBQUssWUFBWSxLQUFLLE9BQU87QUFBQSxJQUMxQztBQUFBLElBRUEsaUJBQWlCO0FBQ2IsVUFBSSxLQUFLLFNBQVM7QUFDZCxpQkFBUyxLQUFLLFlBQVksS0FBSyxPQUFPO0FBQ3RDLGFBQUssVUFBVTtBQUFBLE1BQ25CO0FBQUEsSUFDSjtBQUFBLElBRUEsY0FBYyxRQUFRLE9BQU87QUFDekIsVUFBSSxDQUFDLEtBQUssUUFBUztBQUVuQixZQUFNLFdBQVcsT0FBTyxTQUFTLFNBQVMsSUFBSSxVQUFVO0FBQ3hELFVBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxjQUFjO0FBQ3JDLGNBQU0sTUFBTSxPQUFPLFNBQVMsU0FBUyxJQUFJLEtBQUssSUFBSTtBQUNsRCxZQUFJLElBQUksTUFBTSxLQUFNLE1BQUssUUFBUSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDdEQsWUFBSSxJQUFJLE1BQU0sS0FBTSxNQUFLLFFBQVEsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQUEsTUFDekQ7QUFFQSxZQUFNLGFBQWEsU0FBUyxjQUFjLHVCQUF1QjtBQUNqRSxZQUFNLFVBQVUsU0FBUyxjQUFjLHdCQUF3QjtBQUUvRCxZQUFNLFdBQVcsYUFBYSxXQUFXLGNBQWM7QUFDdkQsWUFBTSxRQUFRLFVBQVUsS0FBSyxRQUFRLFdBQVcsTUFBTTtBQUN0RCxZQUFNLGFBQWEsY0FBYztBQUNqQyxZQUFNLFdBQVcsS0FBSyxTQUFTLE9BQU8sQ0FBQyxLQUFLLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUM7QUFFbkYsVUFBSSxjQUFjLEtBQUssbUJBQW1CLFlBQVk7QUFDbEQsYUFBSyxpQkFBaUI7QUFDdEIsZ0JBQVE7QUFBQSxNQUNaO0FBRUEsWUFBTSxVQUFVO0FBQUEsY0FDVixTQUFTLFdBQVcsSUFBSSx3Q0FBd0MsU0FBUyxXQUFXLENBQUMsV0FBVyxFQUFFO0FBQUE7QUFBQSxrQkFFOUYsU0FBUyxXQUFXLEtBQUssYUFBYSx3Q0FBd0MsVUFBVSxXQUFXLEVBQUU7QUFBQSxrQkFDckcsU0FBUyxlQUFlLElBQUksNENBQTRDLFFBQVEsV0FBVyxFQUFFO0FBQUEsa0JBQzdGLFNBQVMsWUFBWSxJQUFJLHlDQUF5QyxLQUFLLFdBQVcsRUFBRTtBQUFBO0FBQUE7QUFJOUYsWUFBTSxVQUFVLEtBQUssVUFBVSxPQUFPO0FBQ3RDLFVBQUksS0FBSyxhQUFhLFdBQVcsT0FBTztBQUNwQyxhQUFLLFFBQVEsWUFBWTtBQUN6QixhQUFLLFlBQVk7QUFDakIsYUFBSyxXQUFXO0FBQUEsTUFDcEI7QUFBQSxJQUNKO0FBQUEsSUFFQSxjQUFjO0FBQ1YsVUFBSSxDQUFDLEtBQUssUUFBUztBQUNuQixZQUFNLFdBQVcsS0FBSyxTQUFTLE9BQU8sQ0FBQyxLQUFLLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUM7QUFFbkYsVUFBSSxTQUFTLFlBQVksTUFBTSxTQUFTO0FBQ3BDLGFBQUssUUFBUSxNQUFNLFlBQVksa0JBQWtCLGdCQUFnQjtBQUNqRSxhQUFLLFFBQVEsTUFBTSxrQkFBa0I7QUFDckMsYUFBSyxRQUFRLE1BQU0sUUFBUTtBQUMzQixhQUFLLFFBQVEsTUFBTSxTQUFTLEdBQUcsU0FBUyxjQUFjLENBQUM7QUFBQSxNQUMzRCxPQUFPO0FBQ0gsYUFBSyxRQUFRLE1BQU0sWUFBWSxrQkFBa0IsU0FBUyxjQUFjLENBQUM7QUFDekUsYUFBSyxRQUFRLE1BQU0sa0JBQWtCLFNBQVMsVUFBVTtBQUN4RCxhQUFLLFFBQVEsTUFBTSxRQUFRLFNBQVMsWUFBWTtBQUNoRCxhQUFLLFFBQVEsTUFBTSxTQUFTLEdBQUcsU0FBUyxjQUFjLENBQUMsWUFBWSxTQUFTLGNBQWMsQ0FBQztBQUFBLE1BQy9GO0FBRUEsV0FBSyxRQUFRLE1BQU0sV0FBVyxHQUFHLFNBQVMsV0FBVyxDQUFDO0FBQ3RELFdBQUssUUFBUSxNQUFNLFVBQVUsR0FBRyxTQUFTLFdBQVcsQ0FBQyxNQUFNLFNBQVMsV0FBVyxDQUFDO0FBQ2hGLFdBQUssUUFBUSxNQUFNLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQztBQUU5RCxXQUFLLFFBQVEsTUFBTSxXQUFXO0FBQzlCLFdBQUssUUFBUSxNQUFNLGFBQWE7QUFDaEMsV0FBSyxRQUFRLE1BQU0sZ0JBQWdCO0FBRW5DLFlBQU0sV0FBVyxPQUFPLFNBQVMsU0FBUyxJQUFJLFVBQVU7QUFDeEQsVUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLGNBQWM7QUFDckMsYUFBSyxRQUFRLE1BQU0sU0FBUztBQUFBLE1BQ2hDO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFFQSxNQUFPLG9CQUFROzs7QUNoTGYsTUFBTSxPQUFPO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsSUFDZCxjQUFjO0FBQUEsSUFDZCxhQUFhO0FBQUEsSUFFYixVQUFVO0FBQUEsTUFDTixFQUFFLElBQUksa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sV0FBVyxPQUFPLE1BQU0sYUFBYSxzQ0FBc0M7QUFBQSxNQUNqSSxFQUFFLElBQUksYUFBYSxNQUFNLGFBQWEsTUFBTSxVQUFVLE9BQU8sSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtBQUFBLE1BQzNGLEVBQUUsSUFBSSxnQkFBZ0IsTUFBTSxnQkFBZ0IsTUFBTSxVQUFVLE9BQU8sR0FBRyxLQUFLLEdBQUcsS0FBSyxJQUFJLE1BQU0sRUFBRTtBQUFBLE1BQy9GLEVBQUUsSUFBSSxtQkFBbUIsTUFBTSxtQkFBbUIsTUFBTSxXQUFXLE9BQU8sTUFBTTtBQUFBLElBQ3BGO0FBQUEsSUFFQSxXQUFXO0FBQ1AsV0FBSyxjQUFjO0FBQ25CLFdBQUssZUFBZTtBQUVwQixXQUFLLGVBQWUsSUFBSSxpQkFBaUIsTUFBTSxLQUFLLGVBQWUsQ0FBQztBQUNwRSxXQUFLLGFBQWEsUUFBUSxTQUFTLE1BQU0sRUFBRSxXQUFXLE1BQU0sU0FBUyxLQUFLLENBQUM7QUFBQSxJQUMvRTtBQUFBLElBRUEsWUFBWTtBQUNSLFVBQUksS0FBSyxhQUFjLE1BQUssYUFBYSxXQUFXO0FBQ3BELFVBQUksS0FBSyxhQUFjLE1BQUssYUFBYSxXQUFXO0FBQ3BELFdBQUssZ0JBQWdCO0FBQ3JCLFdBQUssZUFBZTtBQUFBLElBQ3hCO0FBQUEsSUFFQSxTQUFTO0FBQ0wsVUFBSSxLQUFLLFNBQVM7QUFDZCxjQUFNLFdBQVcsT0FBTyxTQUFTLFNBQVMsSUFBSSxVQUFVO0FBQ3hELFlBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxjQUFjO0FBQ3JDLGdCQUFNLE1BQU0sT0FBTyxTQUFTLFNBQVMsSUFBSSxLQUFLLElBQUk7QUFDbEQsY0FBSSxJQUFJLE1BQU0sS0FBTSxNQUFLLFFBQVEsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3RELGNBQUksSUFBSSxNQUFNLEtBQU0sTUFBSyxRQUFRLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUFBLFFBQ3pEO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxJQUVBLGtCQUFrQjtBQUNkLFdBQUssWUFBWTtBQUNqQixXQUFLLGVBQWU7QUFBQSxJQUN4QjtBQUFBLElBRUEsZ0JBQWdCO0FBQ1osV0FBSyxVQUFVLFNBQVMsY0FBYyxLQUFLO0FBQzNDLFdBQUssUUFBUSxZQUFZO0FBQ3pCLGVBQVMsS0FBSyxZQUFZLEtBQUssT0FBTztBQUV0QyxZQUFNLG9CQUFvQixTQUFTLGNBQWMsS0FBSztBQUN0RCx3QkFBa0IsWUFBWTtBQUM5QixXQUFLLFFBQVEsWUFBWSxpQkFBaUI7QUFFMUMsV0FBSyxrQkFBa0I7QUFBQSxJQUMzQjtBQUFBLElBRUEsb0JBQW9CO0FBQ2hCLFlBQU0sZUFBZSxTQUFTLGNBQWMsS0FBSztBQUNqRCxtQkFBYSxZQUFZO0FBRXpCLFdBQUssY0FBYyxTQUFTLGNBQWMsT0FBTztBQUNqRCxXQUFLLFlBQVksT0FBTztBQUN4QixXQUFLLFlBQVksWUFBWTtBQUM3QixXQUFLLFlBQVksY0FBYztBQUUvQixXQUFLLFlBQVksaUJBQWlCLFdBQVcsQ0FBQyxNQUFNO0FBQ2hELFlBQUksRUFBRSxRQUFRLFNBQVM7QUFDbkIsZ0JBQU0sWUFBWSxTQUFTLGNBQWMsWUFBWTtBQUNyRCxjQUFJLGFBQWEsS0FBSyxZQUFZLE9BQU87QUFDckMsc0JBQVUsUUFBUSxLQUFLLFlBQVk7QUFDbkMsa0JBQU0sYUFBYSxJQUFJLGNBQWMsV0FBVyxFQUFFLEtBQUssU0FBUyxNQUFNLFNBQVMsT0FBTyxJQUFJLFNBQVMsSUFBSSxTQUFTLEtBQUssQ0FBQztBQUN0SCxzQkFBVSxjQUFjLFVBQVU7QUFDbEMsaUJBQUssWUFBWSxRQUFRO0FBQUEsVUFDN0I7QUFBQSxRQUNKO0FBQUEsTUFDSixDQUFDO0FBRUQsbUJBQWEsWUFBWSxLQUFLLFdBQVc7QUFDekMsV0FBSyxRQUFRLFlBQVksWUFBWTtBQUFBLElBQ3pDO0FBQUEsSUFFQSxvQkFBb0Isa0JBQWtCO0FBQ2xDLFlBQU0sZUFBZSxLQUFLLFFBQVEsY0FBYyw4QkFBOEI7QUFDOUUsVUFBSSxpQkFBaUIsTUFBTSxZQUFZLFFBQVE7QUFDM0MscUJBQWEsTUFBTSxVQUFVO0FBQUEsTUFDakMsT0FBTztBQUNILHFCQUFhLE1BQU0sVUFBVTtBQUM3QixtQkFBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEdBQUcsQ0FBQztBQUFBLE1BQ2hEO0FBQUEsSUFDSjtBQUFBLElBRUEsaUJBQWlCO0FBQ2IsVUFBSSxLQUFLLFNBQVM7QUFDZCxpQkFBUyxLQUFLLFlBQVksS0FBSyxPQUFPO0FBQ3RDLGFBQUssVUFBVTtBQUFBLE1BQ25CO0FBQUEsSUFDSjtBQUFBLElBRUEsaUJBQWlCO0FBQ2IsWUFBTSxnQkFBZ0IsU0FBUyxjQUFjLE9BQU87QUFDcEQsVUFBSSxDQUFDLGNBQWU7QUFFcEIsVUFBSSxDQUFDLEtBQUssVUFBVTtBQUNoQixhQUFLLFdBQVc7QUFBQSxNQUNwQjtBQUVBLFlBQU0sYUFBYSxLQUFLLFNBQVMsS0FBSyxPQUFLLEVBQUUsT0FBTyxnQkFBZ0IsRUFBRTtBQUN0RSxXQUFLLFNBQVMsTUFBTSxhQUFhLGFBQWEsV0FBVztBQUN6RCxXQUFLLFNBQVMsTUFBTSxnQkFBZ0IsYUFBYSxTQUFTO0FBRTFELFlBQU0sb0JBQW9CLGNBQWMsY0FBYyxlQUFlO0FBQ3JFLFVBQUkscUJBQXFCLENBQUMsS0FBSyxjQUFjO0FBQ3pDLGFBQUssUUFBUSxjQUFjLHlCQUF5QixFQUFFLFlBQVk7QUFDbEUsMEJBQWtCLGlCQUFpQixpQkFBaUIsRUFBRSxRQUFRLFVBQVEsS0FBSyxXQUFXLElBQUksQ0FBQztBQUUzRixhQUFLLGVBQWUsSUFBSSxpQkFBaUIsZUFBYTtBQUNsRCxvQkFBVSxRQUFRLGNBQVk7QUFDMUIsZ0JBQUksU0FBUyxXQUFXLFFBQVE7QUFDNUIsdUJBQVMsV0FBVyxRQUFRLFVBQVE7QUFDaEMsb0JBQUksS0FBSyxhQUFhLEtBQUssS0FBSyxVQUFVLFNBQVMsZ0JBQWdCLEdBQUc7QUFDbEUsdUJBQUssV0FBVyxJQUFJO0FBQUEsZ0JBQ3hCO0FBQUEsY0FDSixDQUFDO0FBQUEsWUFDTDtBQUFBLFVBQ0osQ0FBQztBQUFBLFFBQ0wsQ0FBQztBQUNELGFBQUssYUFBYSxRQUFRLG1CQUFtQixFQUFFLFdBQVcsS0FBSyxDQUFDO0FBQUEsTUFDcEU7QUFFQSxZQUFNLG1CQUFtQixjQUFjLGNBQWMsbUJBQW1CO0FBQ3hFLFVBQUksa0JBQWtCO0FBQ2xCLGFBQUssb0JBQW9CLGdCQUFnQjtBQUFBLE1BQzdDO0FBQUEsSUFDSjtBQUFBLElBRUEsa0JBQWtCO0FBQ2QsVUFBSSxLQUFLLFVBQVU7QUFDZixhQUFLLFNBQVMsTUFBTSxhQUFhO0FBQ2pDLGFBQUssU0FBUyxNQUFNLGdCQUFnQjtBQUFBLE1BQ3hDO0FBQUEsSUFDSjtBQUFBLElBRUEsV0FBVyxjQUFjO0FBQ3JCLFVBQUksQ0FBQyxLQUFLLFFBQVM7QUFDbkIsWUFBTSxvQkFBb0IsS0FBSyxRQUFRLGNBQWMseUJBQXlCO0FBQzlFLFlBQU0sYUFBYSxTQUFTLGNBQWMsS0FBSztBQUMvQyxpQkFBVyxZQUFZO0FBQ3ZCLFlBQU0sYUFBYSxTQUFTLGNBQWMsS0FBSztBQUMvQyxpQkFBVyxZQUFZO0FBQ3ZCLFlBQU0sU0FBUyxjQUFjO0FBRTdCLG1CQUFhLGlCQUFpQixpQkFBaUIsRUFBRSxRQUFRLFVBQVE7QUFDN0QsY0FBTSxhQUFhLEtBQUssVUFBVSxJQUFJO0FBQ3RDLFlBQUksVUFBVSxXQUFXLGdCQUFnQixRQUFRO0FBQzdDLHFCQUFXLFVBQVUsSUFBSSwyQkFBMkI7QUFBQSxRQUN4RDtBQUNBLFlBQUksV0FBVyxLQUFLLFdBQVcsV0FBVyxHQUFHO0FBQ3pDLHFCQUFXLFVBQVUsSUFBSSxzQkFBc0I7QUFBQSxRQUNuRDtBQUNBLG1CQUFXLFlBQVksVUFBVTtBQUFBLE1BQ3JDLENBQUM7QUFFRCxpQkFBVyxZQUFZLFVBQVU7QUFFakMsVUFBSSxLQUFLLFNBQVMsS0FBSyxPQUFLLEVBQUUsT0FBTyxpQkFBaUIsRUFBRSxPQUFPO0FBQzNELGNBQU0sWUFBWSxTQUFTLGNBQWMsTUFBTTtBQUMvQyxrQkFBVSxZQUFZO0FBQ3RCLGtCQUFVLGVBQWMsb0JBQUksS0FBSyxHQUFFLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxNQUFNLFdBQVcsUUFBUSxVQUFVLENBQUM7QUFDaEcsbUJBQVcsYUFBYSxXQUFXLFVBQVU7QUFBQSxNQUNqRDtBQUVBLHdCQUFrQixZQUFZLFVBQVU7QUFFeEMsWUFBTSxjQUFjLEtBQUssU0FBUyxLQUFLLE9BQUssRUFBRSxPQUFPLGNBQWMsRUFBRTtBQUNyRSxhQUFPLGtCQUFrQixTQUFTLFNBQVMsYUFBYTtBQUNwRCwwQkFBa0IsWUFBWSxrQkFBa0IsVUFBVTtBQUFBLE1BQzlEO0FBQUEsSUFDSjtBQUFBLElBRUEsY0FBYztBQUNWLFVBQUksQ0FBQyxLQUFLLFFBQVM7QUFDbkIsWUFBTSxXQUFXLEtBQUssU0FBUyxPQUFPLENBQUMsS0FBSyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFDO0FBQ25GLFdBQUssUUFBUSxNQUFNLFlBQVksb0JBQW9CLEdBQUcsU0FBUyxXQUFXLENBQUMsSUFBSTtBQUFBLElBQ25GO0FBQUEsRUFDSjtBQUVBLE1BQU8sZUFBUTs7O0FDbk1mLE1BQU0sYUFBYTtBQUFBLElBQ2pCLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxNQUNKLEdBQUc7QUFBQSxNQUFPLEdBQUc7QUFBQSxNQUFPLEdBQUc7QUFBQSxNQUFPLEdBQUc7QUFBQSxNQUNqQyxLQUFLO0FBQUEsTUFBTyxLQUFLO0FBQUEsTUFBTyxLQUFLO0FBQUEsSUFDL0I7QUFBQSxJQUNBLGNBQWM7QUFBQSxJQUNkLFlBQVk7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLElBQ2hCLGNBQWM7QUFBQSxJQUVkLFVBQVU7QUFBQSxNQUNSLEVBQUUsSUFBSSxjQUFjLE1BQU0sc0JBQXNCLE1BQU0sV0FBVyxPQUFPLEtBQUs7QUFBQSxNQUM3RSxFQUFFLElBQUksU0FBUyxNQUFNLFNBQVMsTUFBTSxVQUFVLE9BQU8sR0FBRyxLQUFLLEtBQUssS0FBSyxHQUFHLE1BQU0sSUFBSTtBQUFBLE1BQ3BGLEVBQUUsSUFBSSxXQUFXLE1BQU0sV0FBVyxNQUFNLFVBQVUsT0FBTyxNQUFNLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTSxLQUFLO0FBQUEsTUFDMUYsRUFBRSxJQUFJLHFCQUFxQixNQUFNLHFCQUFxQixNQUFNLFdBQVcsT0FBTyxLQUFLO0FBQUEsSUFDckY7QUFBQSxJQUVBLFdBQVc7QUFDVCxXQUFLLGNBQWM7QUFDbkIsV0FBSyxZQUFZO0FBQ2pCLFdBQUssZUFBZSxPQUFLLEtBQUssZUFBZSxFQUFFLElBQUksWUFBWSxHQUFHLElBQUk7QUFDdEUsV0FBSyxhQUFhLE9BQUssS0FBSyxlQUFlLEVBQUUsSUFBSSxZQUFZLEdBQUcsS0FBSztBQUNyRSxXQUFLLGlCQUFpQixPQUFLO0FBQ3ZCLFlBQUksRUFBRSxXQUFXLEVBQUcsTUFBSyxlQUFlLE9BQU8sSUFBSTtBQUNuRCxZQUFJLEVBQUUsV0FBVyxFQUFHLE1BQUssZUFBZSxPQUFPLElBQUk7QUFBQSxNQUN2RDtBQUNBLFdBQUssZUFBZSxPQUFLO0FBQ3JCLFlBQUksRUFBRSxXQUFXLEVBQUcsTUFBSyxlQUFlLE9BQU8sS0FBSztBQUNwRCxZQUFJLEVBQUUsV0FBVyxFQUFHLE1BQUssZUFBZSxPQUFPLEtBQUs7QUFBQSxNQUN4RDtBQUVBLGFBQU8saUJBQWlCLFdBQVcsS0FBSyxZQUFZO0FBQ3BELGFBQU8saUJBQWlCLFNBQVMsS0FBSyxVQUFVO0FBQ2hELGFBQU8saUJBQWlCLGFBQWEsS0FBSyxjQUFjO0FBQ3hELGFBQU8saUJBQWlCLFdBQVcsS0FBSyxZQUFZO0FBQUEsSUFDdEQ7QUFBQSxJQUVBLFlBQVk7QUFDVixXQUFLLGVBQWU7QUFDcEIsYUFBTyxvQkFBb0IsV0FBVyxLQUFLLFlBQVk7QUFDdkQsYUFBTyxvQkFBb0IsU0FBUyxLQUFLLFVBQVU7QUFDbkQsYUFBTyxvQkFBb0IsYUFBYSxLQUFLLGNBQWM7QUFDM0QsYUFBTyxvQkFBb0IsV0FBVyxLQUFLLFlBQVk7QUFBQSxJQUN6RDtBQUFBLElBRUEsU0FBUztBQUNQLFdBQUssc0JBQXNCO0FBQUEsSUFDN0I7QUFBQSxJQUVBLGtCQUFrQjtBQUNoQixXQUFLLFlBQVk7QUFBQSxJQUNuQjtBQUFBLElBRUEsZUFBZSxLQUFLLFdBQVc7QUFDN0IsVUFBSSxLQUFLLEtBQUssZUFBZSxHQUFHLEdBQUc7QUFDakMsYUFBSyxLQUFLLEdBQUcsSUFBSTtBQUNqQixhQUFLLGlCQUFpQjtBQUFBLE1BQ3hCO0FBQUEsSUFDRjtBQUFBLElBRUEsVUFBVSxNQUFNLFFBQVEsY0FBYztBQUNwQyxZQUFNLGFBQWEsU0FBUyxjQUFjLEtBQUs7QUFDL0MsaUJBQVcsWUFBWSxzQkFBc0IsR0FBRyxJQUFJLGFBQWEsS0FBSyxHQUFHLENBQUM7QUFDMUUsaUJBQVcsY0FBYztBQUN6QixhQUFPO0FBQUEsSUFDVDtBQUFBLElBRUEsZ0JBQWdCO0FBQ2QsV0FBSyxVQUFVLFNBQVMsY0FBYyxLQUFLO0FBQzNDLFdBQUssUUFBUSxZQUFZO0FBRXpCLFlBQU0sT0FBTyxTQUFTLGNBQWMsS0FBSztBQUN6QyxXQUFLLFlBQVk7QUFDakIsV0FBSyxZQUFZLEtBQUssVUFBVSxLQUFLLEdBQUcsQ0FBQztBQUN6QyxXQUFLLFFBQVEsWUFBWSxJQUFJO0FBRTdCLFlBQU0sT0FBTyxTQUFTLGNBQWMsS0FBSztBQUN6QyxXQUFLLFlBQVk7QUFDakIsV0FBSyxZQUFZLEtBQUssVUFBVSxLQUFLLEdBQUcsQ0FBQztBQUN6QyxXQUFLLFlBQVksS0FBSyxVQUFVLEtBQUssR0FBRyxDQUFDO0FBQ3pDLFdBQUssWUFBWSxLQUFLLFVBQVUsS0FBSyxHQUFHLENBQUM7QUFDekMsV0FBSyxRQUFRLFlBQVksSUFBSTtBQUU3QixZQUFNLE9BQU8sU0FBUyxjQUFjLEtBQUs7QUFDekMsV0FBSyxZQUFZO0FBQ2pCLFdBQUssWUFBWSxLQUFLLFVBQVUsT0FBTyxPQUFPLGNBQWMsQ0FBQztBQUM3RCxXQUFLLFlBQVksS0FBSyxVQUFVLE9BQU8sT0FBTyxjQUFjLENBQUM7QUFDN0QsV0FBSyxRQUFRLFlBQVksSUFBSTtBQUU3QixZQUFNLE9BQU8sU0FBUyxjQUFjLEtBQUs7QUFDekMsV0FBSyxZQUFZO0FBQ2pCLFdBQUssWUFBWSxLQUFLLFVBQVUsU0FBUyxLQUFLLFdBQVcsQ0FBQztBQUMxRCxXQUFLLFFBQVEsWUFBWSxJQUFJO0FBRTdCLGVBQVMsS0FBSyxZQUFZLEtBQUssT0FBTztBQUFBLElBQ3hDO0FBQUEsSUFFQSxpQkFBaUI7QUFDZixVQUFJLEtBQUssU0FBUztBQUNoQixpQkFBUyxLQUFLLFlBQVksS0FBSyxPQUFPO0FBQ3RDLGFBQUssVUFBVTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLElBRUEsd0JBQXdCO0FBQ3RCLFVBQUksQ0FBQyxLQUFLLFFBQVM7QUFDbkIsWUFBTSxXQUFXLE9BQU8sU0FBUyxTQUFTLElBQUksVUFBVTtBQUN4RCxVQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsY0FBYztBQUNyQyxjQUFNLE1BQU0sT0FBTyxTQUFTLFNBQVMsSUFBSSxLQUFLLElBQUk7QUFDbEQsWUFBSSxJQUFJLE1BQU0sS0FBTSxNQUFLLFFBQVEsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3RELFlBQUksSUFBSSxNQUFNLEtBQU0sTUFBSyxRQUFRLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUFBLE1BQ3pEO0FBQUEsSUFDRjtBQUFBLElBRUEsbUJBQW1CO0FBQ2pCLFVBQUksQ0FBQyxLQUFLLFFBQVM7QUFDbkIsaUJBQVcsT0FBTyxLQUFLLE1BQU07QUFDM0IsY0FBTSxLQUFLLEtBQUssUUFBUSxjQUFjLFFBQVEsR0FBRyxFQUFFO0FBQ25ELFlBQUksSUFBSTtBQUNOLGFBQUcsVUFBVSxPQUFPLFVBQVUsS0FBSyxLQUFLLEdBQUcsQ0FBQztBQUFBLFFBQzlDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVBLGNBQWM7QUFDWixVQUFJLENBQUMsS0FBSyxRQUFTO0FBQ25CLFlBQU0sV0FBVyxLQUFLLFNBQVMsT0FBTyxDQUFDLEtBQUssT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUVuRixXQUFLLFFBQVEsTUFBTSxZQUFZLFNBQVMsU0FBUyxLQUFLO0FBQ3RELFdBQUssUUFBUSxNQUFNLFVBQVUsU0FBUztBQUV0QyxXQUFLLFFBQVEsVUFBVSxPQUFPLGNBQWMsU0FBUyxZQUFZLENBQUM7QUFDbEUsV0FBSyxRQUFRLFVBQVUsT0FBTyxpQkFBaUIsQ0FBQyxTQUFTLG1CQUFtQixDQUFDO0FBQUEsSUFDL0U7QUFBQSxFQUNGO0FBRUEsTUFBTyxxQkFBUTs7O0FDL0lmLE1BQU0sZUFBZTtBQUFBLElBQ2pCLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxJQUNYLGdCQUFnQjtBQUFBLElBQ2hCLFNBQVM7QUFBQSxJQUNULFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUVWLFVBQVU7QUFBQSxNQUNOLEVBQUUsSUFBSSxhQUFhLE1BQU0sYUFBYSxNQUFNLFdBQVcsT0FBTyxLQUFLO0FBQUEsTUFDbkUsRUFBRSxJQUFJLGNBQWMsTUFBTSxjQUFjLE1BQU0sVUFBVSxTQUFTLENBQUMsU0FBUyxRQUFRLEdBQUcsT0FBTyxTQUFTLFdBQVcsT0FBSyxFQUFFLFdBQVcsRUFBRTtBQUFBLE1BQ3JJLEVBQUUsSUFBSSxZQUFZLE1BQU0sWUFBWSxNQUFNLFFBQVEsT0FBTyx5QkFBeUIsV0FBVyxPQUFLLEVBQUUsV0FBVyxFQUFFO0FBQUEsTUFDakgsRUFBRSxJQUFJLFlBQVksTUFBTSxvQkFBb0IsTUFBTSxTQUFTLE9BQU8sMEJBQTBCLFdBQVcsT0FBSyxFQUFFLFdBQVcsS0FBSyxFQUFFLFlBQVksTUFBTSxTQUFTO0FBQUEsTUFDM0osRUFBRSxJQUFJLGNBQWMsTUFBTSxjQUFjLE1BQU0sU0FBUyxPQUFPLDRCQUE0QixXQUFXLE9BQUssRUFBRSxXQUFXLEtBQUssRUFBRSxZQUFZLE1BQU0sU0FBUztBQUFBLE1BQ3pKLEVBQUUsSUFBSSxhQUFhLE1BQU0sYUFBYSxNQUFNLFVBQVUsT0FBTyxJQUFJLEtBQUssR0FBRyxLQUFLLElBQUksTUFBTSxHQUFHLFdBQVcsT0FBSyxFQUFFLFdBQVcsRUFBRTtBQUFBLE1BQzFILEVBQUUsSUFBSSxXQUFXLE1BQU0sV0FBVyxNQUFNLFVBQVUsT0FBTyxHQUFHLEtBQUssR0FBRyxLQUFLLElBQUksTUFBTSxHQUFHLFdBQVcsT0FBSyxFQUFFLFdBQVcsRUFBRTtBQUFBLE1BQ3JILEVBQUUsSUFBSSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxVQUFVLE9BQU8sSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLE1BQU0sR0FBRyxXQUFXLE9BQUssRUFBRSxXQUFXLEVBQUU7QUFBQSxNQUNsSSxFQUFFLElBQUksZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0sVUFBVSxPQUFPLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsV0FBVyxPQUFLLEVBQUUsV0FBVyxFQUFFO0FBQUEsTUFDOUgsRUFBRSxJQUFJLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLFNBQVMsT0FBTyw2QkFBNkIsV0FBVyxPQUFLLEVBQUUsV0FBVyxLQUFLLEVBQUUsWUFBWSxNQUFNLFNBQVM7QUFBQSxJQUNsSztBQUFBLElBRUEsV0FBVztBQUNQLFdBQUssY0FBYztBQUFBLElBQ3ZCO0FBQUEsSUFFQSxZQUFZO0FBQ1IsVUFBSSxLQUFLLFdBQVc7QUFDaEIsYUFBSyxjQUFjO0FBQUEsTUFDdkI7QUFDQSxXQUFLLGVBQWU7QUFBQSxJQUN4QjtBQUFBLElBRUEsU0FBUztBQUNMLFlBQU0sV0FBVyxPQUFPLFNBQVMsU0FBUyxJQUFJLFVBQVU7QUFDeEQsWUFBTSxXQUFXLFNBQVMsa0JBQWtCLENBQUMsU0FBUyxVQUFVLEVBQUUsU0FBUyxTQUFTLGNBQWMsT0FBTyxLQUFLLFNBQVMsY0FBYztBQUVySSxZQUFNLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUztBQUUvRCxVQUFJLHFCQUFxQixDQUFDLEtBQUssV0FBVztBQUN0QyxhQUFLLGVBQWU7QUFBQSxNQUN4QixXQUFXLENBQUMscUJBQXFCLEtBQUssV0FBVztBQUM3QyxhQUFLLGNBQWM7QUFBQSxNQUN2QjtBQUVBLFVBQUkscUJBQXFCLEtBQUssV0FBVztBQUNyQyxhQUFLLFlBQVk7QUFBQSxNQUNyQjtBQUNBLFdBQUssY0FBYztBQUFBLElBQ3ZCO0FBQUEsSUFFQSxrQkFBa0I7QUFDZCxXQUFLLFlBQVk7QUFDakIsV0FBSyxjQUFjLElBQUk7QUFBQSxJQUMzQjtBQUFBLElBRUEsaUJBQWlCO0FBQ2IsVUFBSSxLQUFLLFVBQVc7QUFDcEIsV0FBSyxZQUFZO0FBQ2pCLFdBQUssWUFBWTtBQUVqQixXQUFLLGlCQUFpQixZQUFZLE1BQU0sS0FBSyxZQUFZLEdBQUcsR0FBRztBQUFBLElBQ25FO0FBQUEsSUFFQSxnQkFBZ0I7QUFDWixVQUFJLENBQUMsS0FBSyxVQUFXO0FBQ3JCLFdBQUssWUFBWTtBQUNqQixVQUFJLEtBQUssZ0JBQWdCO0FBQ3JCLHNCQUFjLEtBQUssY0FBYztBQUNqQyxhQUFLLGlCQUFpQjtBQUFBLE1BQzFCO0FBQ0EsYUFBTyxjQUFjLElBQUksY0FBYyxTQUFTLEVBQUUsS0FBSyxTQUFTLFNBQVMsSUFBSSxNQUFNLGFBQWEsU0FBUyxLQUFLLENBQUMsQ0FBQztBQUFBLElBQ3BIO0FBQUEsSUFFQSxjQUFjO0FBQ1YsYUFBTyxjQUFjLElBQUksY0FBYyxXQUFXLEVBQUUsS0FBSyxTQUFTLFNBQVMsSUFBSSxNQUFNLGFBQWEsU0FBUyxNQUFNLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFBQSxJQUNwSTtBQUFBLElBRUEsZ0JBQWdCO0FBQ1osV0FBSyxVQUFVLFNBQVMsY0FBYyxLQUFLO0FBQzNDLFdBQUssUUFBUSxZQUFZO0FBQ3pCLGVBQVMsS0FBSyxZQUFZLEtBQUssT0FBTztBQUN0QyxXQUFLLFlBQVk7QUFBQSxJQUNyQjtBQUFBLElBRUEsaUJBQWlCO0FBQ2IsVUFBSSxLQUFLLFNBQVM7QUFDZCxpQkFBUyxLQUFLLFlBQVksS0FBSyxPQUFPO0FBQ3RDLGFBQUssVUFBVTtBQUFBLE1BQ25CO0FBQUEsSUFDSjtBQUFBLElBRUEsZ0JBQWdCO0FBQ1osWUFBTSxXQUFXLEtBQUssU0FBUyxPQUFPLENBQUMsS0FBSyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFDO0FBRW5GLFVBQUksQ0FBQyxTQUFTLFdBQVcsR0FBRztBQUN4QixZQUFJLEtBQUssUUFBUyxNQUFLLFFBQVEsTUFBTSxVQUFVO0FBQy9DO0FBQUEsTUFDSjtBQUVBLFVBQUksQ0FBQyxLQUFLLFNBQVM7QUFDZixhQUFLLGNBQWM7QUFBQSxNQUN2QjtBQUVBLFdBQUssUUFBUSxNQUFNLFVBQVUsS0FBSyxVQUFVLFVBQVU7QUFDdEQsVUFBSSxLQUFLLFNBQVM7QUFDZCxhQUFLLFFBQVEsY0FBYyxTQUFTLFVBQVU7QUFFOUMsY0FBTSxXQUFXLE9BQU8sU0FBUyxTQUFTLElBQUksVUFBVTtBQUN4RCxZQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsY0FBYztBQUNyQyxnQkFBTSxNQUFNLE9BQU8sU0FBUyxTQUFTLElBQUksS0FBSyxJQUFJO0FBQ2xELGNBQUksSUFBSSxNQUFNLEtBQU0sTUFBSyxRQUFRLE1BQU0sT0FBTyxPQUFPLElBQUksTUFBTSxXQUFXLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUMxRixjQUFJLElBQUksTUFBTSxLQUFNLE1BQUssUUFBUSxNQUFNLE1BQU0sT0FBTyxJQUFJLE1BQU0sV0FBVyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFBQSxRQUM3RjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsSUFFQSxjQUFjO0FBQ1YsVUFBSSxDQUFDLEtBQUssUUFBUztBQUNuQixZQUFNLFdBQVcsS0FBSyxTQUFTLE9BQU8sQ0FBQyxLQUFLLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUM7QUFFbkYsVUFBSSxTQUFTLFlBQVksTUFBTSxTQUFTO0FBQ3BDLGFBQUssUUFBUSxNQUFNLGtCQUFrQjtBQUNyQyxhQUFLLFFBQVEsTUFBTSxRQUFRO0FBQzNCLGFBQUssUUFBUSxNQUFNLFNBQVMsR0FBRyxTQUFTLGNBQWMsQ0FBQztBQUFBLE1BQzNELE9BQU87QUFDSCxhQUFLLFFBQVEsTUFBTSxrQkFBa0IsU0FBUyxVQUFVO0FBQ3hELGFBQUssUUFBUSxNQUFNLFFBQVEsU0FBUyxZQUFZO0FBQ2hELGFBQUssUUFBUSxNQUFNLFNBQVMsR0FBRyxTQUFTLGNBQWMsQ0FBQyxZQUFZLFNBQVMsY0FBYyxDQUFDO0FBQUEsTUFDL0Y7QUFFQSxXQUFLLFFBQVEsTUFBTSxXQUFXLEdBQUcsU0FBUyxXQUFXLENBQUM7QUFDdEQsV0FBSyxRQUFRLE1BQU0sVUFBVSxHQUFHLFNBQVMsU0FBUyxDQUFDO0FBQ25ELFdBQUssUUFBUSxNQUFNLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQztBQUM5RCxXQUFLLFFBQVEsTUFBTSxXQUFXO0FBQzlCLFdBQUssUUFBUSxNQUFNLGFBQWE7QUFDaEMsV0FBSyxRQUFRLE1BQU0sZ0JBQWdCO0FBQ25DLFdBQUssUUFBUSxNQUFNLFNBQVM7QUFBQSxJQUNoQztBQUFBLEVBQ0o7QUFFQSxNQUFPLHVCQUFROzs7QUMvSWYsTUFBTSxXQUFXO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsTUFDUixFQUFFLElBQUksY0FBYyxNQUFNLGNBQWMsTUFBTSxVQUFVLFNBQVMsQ0FBQyxTQUFTLFFBQVEsR0FBRyxPQUFPLFFBQVE7QUFBQSxNQUNyRyxFQUFFLElBQUksaUJBQWlCLE1BQU0sc0JBQXNCLE1BQU0sV0FBVyxPQUFPLEtBQUs7QUFBQSxNQUNoRixFQUFFLElBQUksaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sVUFBVSxTQUFTLENBQUMsY0FBYyxVQUFVLEdBQUcsT0FBTyxXQUFXO0FBQUEsTUFDckgsRUFBRSxJQUFJLFlBQVksTUFBTSxvQkFBb0IsTUFBTSxTQUFTLE9BQU8sMEJBQTBCLFdBQVcsT0FBSyxFQUFFLFlBQVksTUFBTSxTQUFTO0FBQUEsTUFDekksRUFBRSxJQUFJLFdBQVcsTUFBTSxXQUFXLE1BQU0sVUFBVSxPQUFPLEdBQUcsS0FBSyxHQUFHLEtBQUssSUFBSSxNQUFNLEVBQUU7QUFBQSxNQUNyRixFQUFFLElBQUksaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sVUFBVSxPQUFPLElBQUksS0FBSyxHQUFHLEtBQUssSUFBSSxNQUFNLEVBQUU7QUFBQSxNQUNsRyxFQUFFLElBQUksZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0sVUFBVSxPQUFPLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNLEVBQUU7QUFBQSxNQUM5RixFQUFFLElBQUksZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0sU0FBUyxPQUFPLDZCQUE2QixXQUFXLE9BQUssRUFBRSxZQUFZLE1BQU0sU0FBUztBQUFBLE1BQzVJLEVBQUUsSUFBSSxhQUFhLE1BQU0sYUFBYSxNQUFNLFVBQVUsT0FBTyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO0FBQUEsTUFDM0YsRUFBRSxJQUFJLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLFVBQVUsT0FBTyxHQUFHLEtBQUssR0FBRyxLQUFLLElBQUksTUFBTSxFQUFFO0FBQUEsSUFDakc7QUFBQSxJQUVBLFNBQVM7QUFBQSxJQUVULFdBQVc7QUFDVCxXQUFLLGNBQWM7QUFDbkIsV0FBSyxZQUFZO0FBQ2pCLFdBQUssY0FBYztBQUFBLElBQ3JCO0FBQUEsSUFFQSxZQUFZO0FBQ1YsVUFBSSxLQUFLLFVBQVU7QUFDakIsYUFBSyxTQUFTLFdBQVc7QUFDekIsYUFBSyxXQUFXO0FBQUEsTUFDbEI7QUFDQSxXQUFLLGVBQWU7QUFBQSxJQUN0QjtBQUFBLElBRUEsU0FBUztBQUNQLFdBQUssY0FBYztBQUFBLElBQ3JCO0FBQUEsSUFFQSxrQkFBa0I7QUFDaEIsV0FBSyxZQUFZO0FBQ2pCLFdBQUssY0FBYyxJQUFJO0FBQUEsSUFDekI7QUFBQSxJQUVBLGdCQUFnQjtBQUNaLFlBQU0sUUFBUSxNQUFNO0FBQ2hCLGNBQU0sU0FBUyxTQUFTLGNBQWMsMkJBQTJCO0FBQ2pFLFlBQUksVUFBVSxDQUFDLEtBQUssVUFBVTtBQUMxQixlQUFLLFdBQVcsSUFBSSxpQkFBaUIsQ0FBQyxjQUFjO0FBQ2hELGtCQUFNLG1CQUFtQixVQUFVO0FBQUEsY0FBSyxPQUNwQyxFQUFFLFNBQVMsZ0JBQ1gsRUFBRSxrQkFBa0IsV0FDcEIsRUFBRSxPQUFPLFVBQVUsU0FBUyxXQUFXO0FBQUEsWUFDM0M7QUFFQSxnQkFBSSxrQkFBa0I7QUFDbEIsbUJBQUssY0FBYyxJQUFJO0FBQUEsWUFDM0I7QUFBQSxVQUNKLENBQUM7QUFFRCxlQUFLLFNBQVMsUUFBUSxRQUFRO0FBQUEsWUFDMUIsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsaUJBQWlCLENBQUMsT0FBTztBQUFBLFVBQzdCLENBQUM7QUFDRCxlQUFLLGNBQWMsSUFBSTtBQUFBLFFBRTNCLFdBQVcsQ0FBQyxRQUFRO0FBQ2hCLHFCQUFXLE9BQU8sR0FBRztBQUFBLFFBQ3pCO0FBQUEsTUFDSjtBQUNBLFlBQU07QUFBQSxJQUNWO0FBQUEsSUFFQSxnQkFBZ0I7QUFDZCxXQUFLLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDM0MsV0FBSyxRQUFRLFlBQVk7QUFDekIsZUFBUyxLQUFLLFlBQVksS0FBSyxPQUFPO0FBQUEsSUFDeEM7QUFBQSxJQUVBLGlCQUFpQjtBQUNmLFVBQUksS0FBSyxTQUFTO0FBQ2hCLGlCQUFTLEtBQUssWUFBWSxLQUFLLE9BQU87QUFDdEMsYUFBSyxVQUFVO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsSUFFQSxhQUFhLGFBQWE7QUFDdEIsVUFBSSxDQUFDLFlBQWEsUUFBTztBQUV6QixZQUFNLGdCQUFnQixZQUFZLGNBQWMsZ0JBQWdCO0FBQ2hFLFVBQUksZUFBZTtBQUNmLFlBQUksY0FBYyxNQUFNLG1CQUFtQixjQUFjLE1BQU0sb0JBQW9CLFFBQVE7QUFDdkYsaUJBQU8sRUFBRSxNQUFNLFNBQVMsS0FBSyxjQUFjLE1BQU0sZ0JBQWdCLE1BQU0sR0FBRyxFQUFFLEdBQUcsUUFBUSxLQUFLO0FBQUEsUUFDaEc7QUFDQSxjQUFNLE1BQU0sWUFBWSxjQUFjLDhCQUE4QjtBQUNwRSxjQUFNLFlBQVksWUFBWSxjQUFjLG9CQUFvQjtBQUNoRSxZQUFJLEtBQUs7QUFDTCxpQkFBTyxFQUFFLE1BQU0sU0FBUyxLQUFLLElBQUksS0FBSyxRQUFRLFlBQVksVUFBVSxNQUFNLFNBQVMsR0FBRztBQUFBLFFBQzFGO0FBQUEsTUFDSjtBQUVBLFlBQU0sWUFBWSxZQUFZLGNBQWMsWUFBWTtBQUN4RCxVQUFJLGFBQWEsVUFBVSxNQUFNLG1CQUFtQixVQUFVLE1BQU0sb0JBQW9CLFFBQVE7QUFDNUYsZUFBTyxFQUFFLE1BQU0sU0FBUyxLQUFLLFVBQVUsTUFBTSxnQkFBZ0IsTUFBTSxHQUFHLEVBQUUsR0FBRyxRQUFRLEtBQUs7QUFBQSxNQUM1RjtBQUVBLFlBQU0sV0FBVyxZQUFZLGNBQWMsb0JBQW9CO0FBQy9ELFVBQUksVUFBVTtBQUNWLGVBQU8sRUFBRSxNQUFNLFlBQVksS0FBSyxTQUFTLE1BQU0sZ0JBQWdCLE1BQU0sR0FBRyxFQUFFLEVBQUU7QUFBQSxNQUNoRjtBQUVBLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFFQSxjQUFjLGNBQWMsT0FBTztBQUNqQyxVQUFJLENBQUMsS0FBSyxRQUFTO0FBR25CLFlBQU0sV0FBVyxPQUFPLFNBQVMsU0FBUyxJQUFJLFVBQVU7QUFDeEQsVUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLGNBQWM7QUFDckMsY0FBTSxNQUFNLE9BQU8sU0FBUyxTQUFTLElBQUksS0FBSyxJQUFJO0FBQ2xELFlBQUksSUFBSSxNQUFNLEtBQU0sTUFBSyxRQUFRLE1BQU0sT0FBTyxPQUFPLElBQUksTUFBTSxXQUFXLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUMxRixZQUFJLElBQUksTUFBTSxLQUFNLE1BQUssUUFBUSxNQUFNLE1BQU0sT0FBTyxJQUFJLE1BQU0sV0FBVyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFBQSxNQUM3RjtBQUVBLFlBQU0saUJBQWlCLFNBQVMsY0FBYyxrQkFBa0I7QUFDaEUsWUFBTSxhQUFhLGlCQUFpQixNQUFNLEtBQUssZUFBZSxpQkFBaUIsWUFBWSxDQUFDLElBQUksQ0FBQztBQUNqRyxZQUFNLGNBQWMsV0FBVyxJQUFJLFVBQVEsS0FBSyxhQUFhLElBQUksQ0FBQyxFQUFFLE9BQU8sT0FBTztBQUVsRixZQUFNLFdBQVcsT0FBTyxTQUFTLFNBQVMsSUFBSSxLQUFLLElBQUksRUFBRTtBQUN6RCxZQUFNLGVBQWUsU0FBUyxLQUFLLE9BQUssRUFBRSxPQUFPLGVBQWUsRUFBRTtBQUVsRSxZQUFNLFlBQVksQ0FBQyxHQUFHLFdBQVc7QUFDakMsVUFBSSxjQUFjO0FBQ2QsY0FBTSx1QkFBdUIsU0FBUyxjQUFjLCtDQUErQztBQUNuRyxjQUFNLG9CQUFvQixLQUFLLGFBQWEsb0JBQW9CO0FBQ2hFLFlBQUksbUJBQW1CO0FBQ25CLG9CQUFVLEtBQUssaUJBQWlCO0FBQUEsUUFDcEM7QUFBQSxNQUNKO0FBRUEsWUFBTSxpQkFBaUIsS0FBSyxVQUFVLFNBQVM7QUFDL0MsVUFBSSxtQkFBbUIsS0FBSyxtQkFBbUIsYUFBYTtBQUMxRCxhQUFLLFFBQVEsWUFBWTtBQUN6QixrQkFBVSxRQUFRLGFBQVc7QUFDM0IsY0FBSSxDQUFDLFFBQVM7QUFFZCxnQkFBTSxnQkFBZ0IsU0FBUyxjQUFjLEtBQUs7QUFDbEQsd0JBQWMsTUFBTSxXQUFXO0FBRS9CLGNBQUksUUFBUSxTQUFTLFdBQVcsUUFBUSxRQUFRO0FBQzlDLGtCQUFNLFdBQVcsS0FBSyxTQUFTLEtBQUssT0FBSyxFQUFFLE9BQU8sV0FBVyxFQUFFO0FBQy9ELGtCQUFNLGlCQUFpQixTQUFTLGNBQWMsS0FBSztBQUNuRCwyQkFBZSxNQUFNLFdBQVc7QUFDaEMsMkJBQWUsTUFBTSxRQUFRO0FBQzdCLDJCQUFlLE1BQU0sU0FBUztBQUM5QiwyQkFBZSxNQUFNLFdBQVc7QUFFaEMsa0JBQU0sY0FBYyxTQUFTLGNBQWMsS0FBSztBQUNoRCx3QkFBWSxNQUFNLFFBQVE7QUFDMUIsd0JBQVksTUFBTSxRQUFRO0FBQzFCLHdCQUFZLE1BQU0sU0FBUztBQUMzQix3QkFBWSxNQUFNLGlCQUFpQjtBQUNuQyx3QkFBWSxNQUFNLFNBQVMsUUFBUSxPQUFPLFFBQVEsT0FBTyxHQUFHLFFBQVEsSUFBSTtBQUN4RSx3QkFBWSxNQUFNLGFBQWEsSUFBSSxRQUFRO0FBRTNDLDJCQUFlLFlBQVksV0FBVztBQUN0QywwQkFBYyxZQUFZLGNBQWM7QUFFeEMsa0JBQU0sZUFBZSxTQUFTLGNBQWMsS0FBSztBQUNqRCx5QkFBYSxNQUFNLFFBQVE7QUFDM0IseUJBQWEsTUFBTSxXQUFXO0FBQzlCLHlCQUFhLE1BQU0sUUFBUTtBQUMzQix5QkFBYSxNQUFNLFNBQVM7QUFDNUIseUJBQWEsTUFBTSxpQkFBaUI7QUFDcEMseUJBQWEsTUFBTSxlQUFlO0FBQ2xDLDBCQUFjLFlBQVksWUFBWTtBQUFBLFVBRXhDLE9BQU87QUFDTCxrQkFBTSxhQUFhLFNBQVMsY0FBYyxLQUFLO0FBQy9DLHVCQUFXLE1BQU0sUUFBUTtBQUN6Qix1QkFBVyxNQUFNLFFBQVE7QUFDekIsdUJBQVcsTUFBTSxTQUFTO0FBQzFCLHVCQUFXLE1BQU0saUJBQWlCO0FBQ2xDLDBCQUFjLFlBQVksVUFBVTtBQUFBLFVBQ3RDO0FBRUEsZUFBSyxRQUFRLFlBQVksYUFBYTtBQUFBLFFBQ3hDLENBQUM7QUFDRCxhQUFLLGtCQUFrQjtBQUN2QixhQUFLLFlBQVk7QUFBQSxNQUNuQjtBQUFBLElBQ0Y7QUFBQSxJQUVBLGNBQWM7QUFDWixVQUFJLENBQUMsS0FBSyxRQUFTO0FBQ25CLFlBQU0sV0FBVyxLQUFLLFNBQVMsT0FBTyxDQUFDLEtBQUssT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUVuRixVQUFJLFNBQVMsWUFBWSxNQUFNLFNBQVM7QUFDdEMsYUFBSyxRQUFRLE1BQU0sa0JBQWtCO0FBQ3JDLGFBQUssUUFBUSxNQUFNLFNBQVMsR0FBRyxTQUFTLGNBQWMsQ0FBQztBQUFBLE1BQ3pELE9BQU87QUFDTCxhQUFLLFFBQVEsTUFBTSxrQkFBa0IsU0FBUyxVQUFVO0FBQ3hELGFBQUssUUFBUSxNQUFNLFNBQVMsR0FBRyxTQUFTLGNBQWMsQ0FBQyxZQUFZLFNBQVMsY0FBYyxDQUFDO0FBQUEsTUFDN0Y7QUFFQSxXQUFLLFFBQVEsTUFBTSxVQUFVLEdBQUcsU0FBUyxTQUFTLENBQUM7QUFDbkQsV0FBSyxRQUFRLE1BQU0sZUFBZSxHQUFHLFNBQVMsZUFBZSxDQUFDO0FBQzlELFdBQUssUUFBUSxNQUFNLFVBQVU7QUFDN0IsV0FBSyxRQUFRLE1BQU0sZ0JBQWdCLFNBQVMsZUFBZSxNQUFNLGVBQWUsUUFBUTtBQUN4RixXQUFLLFFBQVEsTUFBTSxNQUFNLEdBQUcsU0FBUyxjQUFjLENBQUM7QUFDcEQsV0FBSyxRQUFRLE1BQU0sV0FBVztBQUM5QixXQUFLLFFBQVEsTUFBTSxhQUFhO0FBRWhDLFlBQU0sV0FBVyxPQUFPLFNBQVMsU0FBUyxJQUFJLFVBQVU7QUFDeEQsVUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLGNBQWM7QUFDdkMsYUFBSyxRQUFRLE1BQU0sU0FBUztBQUFBLE1BQzlCO0FBRUEsV0FBSyxRQUFRLE1BQU0sZ0JBQWdCO0FBRW5DLFlBQU0saUJBQWlCLEtBQUssUUFBUSxpQkFBaUIsMEJBQTBCO0FBQy9FLHFCQUFlLFFBQVEsZUFBYTtBQUNsQyxrQkFBVSxNQUFNLFFBQVEsR0FBRyxTQUFTLFdBQVcsQ0FBQztBQUNoRCxrQkFBVSxNQUFNLFNBQVMsR0FBRyxTQUFTLFdBQVcsQ0FBQztBQUFBLE1BQ25ELENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUVBLE1BQU8sbUJBQVE7OztBQ3hPakIsTUFBTyxpQkFBUTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBRVYsU0FBUztBQUFBLElBQ1Qsa0JBQWtCO0FBQUEsSUFDbEIsY0FBYztBQUFBLElBQ2QsZUFBZSxDQUFDO0FBQUEsSUFDaEIsaUJBQWlCO0FBQUEsSUFDakIsYUFBYSxFQUFFLEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxPQUFPO0FBQUEsSUFFL0MsVUFBVTtBQUFBLE1BQ1IsRUFBRSxJQUFJLGNBQWMsTUFBTSxjQUFjLE1BQU0sVUFBVSxTQUFTLENBQUMsU0FBUyxRQUFRLEdBQUcsT0FBTyxRQUFRO0FBQUEsTUFDckcsRUFBRSxJQUFJLFlBQVksTUFBTSxvQkFBb0IsTUFBTSxTQUFTLE9BQU8sMEJBQTBCLFdBQVcsT0FBSyxFQUFFLFlBQVksTUFBTSxTQUFTO0FBQUEsTUFDekksRUFBRSxJQUFJLGNBQWMsTUFBTSxjQUFjLE1BQU0sU0FBUyxPQUFPLFdBQVcsV0FBVyxPQUFLLEVBQUUsWUFBWSxNQUFNLFNBQVM7QUFBQSxNQUN0SCxFQUFFLElBQUksYUFBYSxNQUFNLGFBQWEsTUFBTSxVQUFVLE9BQU8sSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLE1BQU0sRUFBRTtBQUFBLE1BQzFGLEVBQUUsSUFBSSxXQUFXLE1BQU0sV0FBVyxNQUFNLFVBQVUsT0FBTyxHQUFHLEtBQUssR0FBRyxLQUFLLElBQUksTUFBTSxFQUFFO0FBQUEsTUFDckYsRUFBRSxJQUFJLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLFVBQVUsT0FBTyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTSxFQUFFO0FBQUEsTUFDOUYsRUFBRSxJQUFJLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLFNBQVMsT0FBTyw2QkFBNkIsV0FBVyxPQUFLLEVBQUUsWUFBWSxNQUFNLFNBQVM7QUFBQSxNQUM1SSxFQUFFLElBQUksaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sVUFBVSxPQUFPLElBQUksS0FBSyxHQUFHLEtBQUssSUFBSSxNQUFNLEVBQUU7QUFBQSxNQUNsRyxFQUFFLElBQUksV0FBVyxNQUFNLFdBQVcsTUFBTSxVQUFVLE9BQU8sR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU0sS0FBSztBQUFBLE1BQ3ZGLEVBQUUsSUFBSSxTQUFTLE1BQU0sU0FBUyxNQUFNLFVBQVUsT0FBTyxHQUFHLEtBQUssS0FBSyxLQUFLLEdBQUcsTUFBTSxJQUFJO0FBQUEsTUFDcEYsRUFBRSxJQUFJLFVBQVUsTUFBTSxlQUFlLE1BQU0sUUFBUSxPQUFPLHdCQUF3QixhQUFhLHlDQUF5QztBQUFBLE1BQ3hJLEVBQUUsSUFBSSxpQkFBaUIsTUFBTSx5QkFBeUIsTUFBTSxXQUFXLE9BQU8sTUFBTSxhQUFhLHNEQUFzRDtBQUFBLElBQ3pKO0FBQUEsSUFFQSxXQUFXO0FBQ1QsbUJBQWEsUUFBUSx5QkFBeUIsTUFBTTtBQUNwRCxXQUFLLGNBQWM7QUFDbkIsV0FBSyxZQUFZO0FBQUEsSUFDbkI7QUFBQSxJQUVBLFlBQVk7QUFDVixXQUFLLGNBQWM7QUFDbkIsVUFBSSxLQUFLLFNBQVM7QUFDaEIsaUJBQVMsS0FBSyxZQUFZLEtBQUssT0FBTztBQUN0QyxhQUFLLFVBQVU7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxJQUVBLFNBQVM7QUFDUCxXQUFLLFlBQVk7QUFDakIsV0FBSyxlQUFlO0FBQUEsSUFDdEI7QUFBQSxJQUVBLGtCQUFrQjtBQUNoQixXQUFLLFlBQVk7QUFDakIsV0FBSyxjQUFjO0FBQUEsSUFDckI7QUFBQSxJQUVBLGNBQWM7QUFDWixVQUFJLEtBQUssZ0JBQWdCLEtBQUssYUFBYSx1QkFBd0I7QUFFbkUsWUFBTSxTQUFTLFNBQVMsY0FBYyxtQkFBbUI7QUFDekQsVUFBSSxRQUFRO0FBQ1YsYUFBSyxlQUFlO0FBQ3BCLGNBQU0sTUFBTSxLQUFLLGFBQWEsV0FBVyxJQUFJO0FBQzdDLFlBQUksSUFBSSxTQUFTLHlCQUEwQjtBQUUzQyxhQUFLLG1CQUFtQixJQUFJO0FBQzVCLGNBQU0sT0FBTztBQUViLFlBQUksV0FBVyxTQUFTLE1BQU0sR0FBRyxHQUFHLFVBQVU7QUFDNUMsZ0JBQU0sTUFBTSxZQUFZLElBQUk7QUFDNUIsY0FBSSxNQUFNLEtBQUssa0JBQWtCLEtBQUs7QUFDcEMsaUJBQUssZ0JBQWdCLENBQUM7QUFBQSxVQUN4QjtBQUNBLGVBQUssa0JBQWtCO0FBRXZCLGNBQUksaUJBQWlCLEtBQUssSUFBSSxHQUFHO0FBQy9CLGlCQUFLLGNBQWMsS0FBSyxJQUFJO0FBQzVCLGdCQUFJLEtBQUssY0FBYyxXQUFXLEdBQUc7QUFDbkMsbUJBQUssY0FBYztBQUFBLGdCQUNqQixHQUFHLEtBQUssY0FBYyxDQUFDO0FBQUEsZ0JBQ3ZCLEdBQUcsS0FBSyxjQUFjLENBQUM7QUFBQSxnQkFDdkIsR0FBRyxLQUFLLGNBQWMsQ0FBQztBQUFBLGNBQ3pCO0FBQ0EsbUJBQUssY0FBYztBQUNuQixtQkFBSyxnQkFBZ0IsQ0FBQztBQUFBLFlBQ3hCO0FBQUEsVUFDRjtBQUVBLGdCQUFNLGNBQWMsS0FBSyxTQUFTLE9BQU8sQ0FBQyxLQUFLLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUM7QUFDdEYsY0FBSSxZQUFZLGVBQWUsS0FBSyxpQkFBaUIsS0FBSyxJQUFJLEdBQUc7QUFDL0Q7QUFBQSxVQUNGO0FBRUEsZUFBSyxpQkFBaUIsTUFBTSxNQUFNLFNBQVM7QUFBQSxRQUM3QztBQUNBLFlBQUksU0FBUywyQkFBMkI7QUFDeEMsYUFBSyxhQUFhLHlCQUF5QjtBQUFBLE1BQzdDO0FBQUEsSUFDRjtBQUFBLElBRUEsZ0JBQWdCO0FBQ2QsVUFBSSxLQUFLLGdCQUFnQixLQUFLLGtCQUFrQjtBQUM5QyxhQUFLLGFBQWEsV0FBVyxJQUFJLEVBQUUsV0FBVyxLQUFLO0FBQ25ELGFBQUssbUJBQW1CO0FBQ3hCLGFBQUssYUFBYSx5QkFBeUI7QUFDM0MsZUFBTyxLQUFLLGFBQWEsV0FBVyxJQUFJLEVBQUUsU0FBUztBQUFBLE1BQ3JEO0FBQUEsSUFDRjtBQUFBLElBRUEsZ0JBQWdCO0FBQ2QsVUFBSSxLQUFLLFFBQVM7QUFDbEIsV0FBSyxVQUFVLFNBQVMsY0FBYyxLQUFLO0FBQzNDLGVBQVMsS0FBSyxZQUFZLEtBQUssT0FBTztBQUN0QyxXQUFLLGNBQWM7QUFBQSxJQUNyQjtBQUFBLElBRUEsZ0JBQWdCO0FBQ2QsVUFBSSxDQUFDLEtBQUssUUFBUztBQUNuQixZQUFNLFdBQVcsS0FBSyxTQUFTLE9BQU8sQ0FBQyxLQUFLLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUM7QUFDbkYsV0FBSyxRQUFRLGNBQWMsU0FBUyxPQUNqQyxRQUFRLE9BQU8sS0FBSyxZQUFZLENBQUMsRUFDakMsUUFBUSxPQUFPLEtBQUssWUFBWSxDQUFDLEVBQ2pDLFFBQVEsT0FBTyxLQUFLLFlBQVksQ0FBQztBQUFBLElBQ3RDO0FBQUEsSUFFQSxpQkFBaUI7QUFDZixVQUFJLENBQUMsS0FBSyxRQUFTO0FBQ25CLFlBQU0sV0FBVyxPQUFPLFNBQVMsU0FBUyxJQUFJLFVBQVU7QUFDeEQsVUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLGNBQWM7QUFDdkMsY0FBTSxNQUFNLE9BQU8sU0FBUyxTQUFTLElBQUksS0FBSyxJQUFJO0FBQ2xELFlBQUksSUFBSSxNQUFNLEtBQU0sTUFBSyxRQUFRLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQztBQUN0RCxZQUFJLElBQUksTUFBTSxLQUFNLE1BQUssUUFBUSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFBQSxNQUN2RDtBQUFBLElBQ0Y7QUFBQSxJQUVBLGNBQWM7QUFDWixVQUFJLENBQUMsS0FBSyxRQUFTO0FBQ25CLFlBQU0sV0FBVyxLQUFLLFNBQVMsT0FBTyxDQUFDLEtBQUssT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUVuRixXQUFLLFFBQVEsTUFBTSxXQUFXO0FBQzlCLFdBQUssUUFBUSxNQUFNLFNBQVM7QUFDNUIsV0FBSyxRQUFRLE1BQU0sZ0JBQWdCO0FBQ25DLFdBQUssUUFBUSxNQUFNLGFBQWE7QUFFaEMsVUFBSSxTQUFTLFlBQVksTUFBTSxTQUFTO0FBQ3BDLGFBQUssUUFBUSxNQUFNLGtCQUFrQjtBQUNyQyxhQUFLLFFBQVEsTUFBTSxRQUFRO0FBQzNCLGFBQUssUUFBUSxNQUFNLFNBQVMsR0FBRyxTQUFTLGNBQWMsQ0FBQztBQUFBLE1BQzNELE9BQU87QUFDSCxhQUFLLFFBQVEsTUFBTSxrQkFBa0IsU0FBUyxVQUFVO0FBQ3hELGFBQUssUUFBUSxNQUFNLFFBQVEsU0FBUyxZQUFZO0FBQ2hELGFBQUssUUFBUSxNQUFNLFNBQVMsR0FBRyxTQUFTLGNBQWMsQ0FBQyxZQUFZLFNBQVMsY0FBYyxDQUFDO0FBQUEsTUFDL0Y7QUFFQSxXQUFLLFFBQVEsTUFBTSxVQUFVLEdBQUcsU0FBUyxPQUFPO0FBQ2hELFdBQUssUUFBUSxNQUFNLGVBQWUsR0FBRyxTQUFTLGVBQWUsQ0FBQztBQUM5RCxXQUFLLFFBQVEsTUFBTSxZQUFZLFNBQVMsU0FBUyxLQUFLO0FBQ3RELFdBQUssUUFBUSxNQUFNLFVBQVUsU0FBUztBQUN0QyxXQUFLLFFBQVEsTUFBTSxXQUFXLEdBQUcsU0FBUyxXQUFXLENBQUM7QUFDdEQsV0FBSyxRQUFRLE1BQU0sYUFBYTtBQUNoQyxXQUFLLFFBQVEsTUFBTSxhQUFhO0FBQ2hDLFdBQUssUUFBUSxNQUFNLGFBQWE7QUFBQSxJQUNsQztBQUFBLEVBQ0Y7OztBQ2pLQSxNQUFNLGFBQWE7QUFBQSxJQUNqQixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsTUFDUixFQUFFLElBQUksY0FBYyxNQUFNLGNBQWMsTUFBTSxVQUFVLFNBQVMsQ0FBQyxTQUFTLFFBQVEsR0FBRyxPQUFPLFFBQVE7QUFBQSxNQUNyRyxFQUFFLElBQUksWUFBWSxNQUFNLG9CQUFvQixNQUFNLFNBQVMsT0FBTywwQkFBMEIsV0FBVyxPQUFLLEVBQUUsWUFBWSxNQUFNLFNBQVM7QUFBQSxNQUN6SSxFQUFFLElBQUksY0FBYyxNQUFNLGNBQWMsTUFBTSxTQUFTLE9BQU8sV0FBVyxXQUFXLE9BQUssRUFBRSxZQUFZLE1BQU0sU0FBUztBQUFBLE1BQ3RILEVBQUUsSUFBSSxhQUFhLE1BQU0sYUFBYSxNQUFNLFVBQVUsT0FBTyxJQUFJLEtBQUssR0FBRyxLQUFLLElBQUksTUFBTSxFQUFFO0FBQUEsTUFDMUYsRUFBRSxJQUFJLFdBQVcsTUFBTSxXQUFXLE1BQU0sVUFBVSxPQUFPLEdBQUcsS0FBSyxHQUFHLEtBQUssSUFBSSxNQUFNLEVBQUU7QUFBQSxNQUNyRixFQUFFLElBQUksaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sVUFBVSxPQUFPLElBQUksS0FBSyxHQUFHLEtBQUssSUFBSSxNQUFNLEVBQUU7QUFBQSxNQUNsRyxFQUFFLElBQUksZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0sVUFBVSxPQUFPLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNLEVBQUU7QUFBQSxNQUM5RixFQUFFLElBQUksZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0sU0FBUyxPQUFPLDZCQUE2QixXQUFXLE9BQUssRUFBRSxZQUFZLE1BQU0sU0FBUztBQUFBLE1BQzVJLEVBQUUsSUFBSSxjQUFjLE1BQU0sY0FBYyxNQUFNLFdBQVcsT0FBTyxLQUFLO0FBQUEsTUFDckUsRUFBRSxJQUFJLFlBQVksTUFBTSxZQUFZLE1BQU0sV0FBVyxPQUFPLEtBQUs7QUFBQSxNQUNqRSxFQUFFLElBQUksWUFBWSxNQUFNLFlBQVksTUFBTSxXQUFXLE9BQU8sS0FBSztBQUFBLE1BQ2pFO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxJQUVBLFlBQVksQ0FBQztBQUFBLElBQ2IsYUFBYSxDQUFDO0FBQUEsSUFFZCxTQUFTO0FBQUEsSUFFVCxXQUFXO0FBQ1QsV0FBSyxjQUFjO0FBQ25CLFdBQUssWUFBWTtBQUNqQixlQUFTLGlCQUFpQixhQUFhLEtBQUssZ0JBQWdCLEtBQUssSUFBSSxDQUFDO0FBQUEsSUFDeEU7QUFBQSxJQUVBLFlBQVk7QUFDVixXQUFLLGVBQWU7QUFDcEIsZUFBUyxvQkFBb0IsYUFBYSxLQUFLLGdCQUFnQixLQUFLLElBQUksQ0FBQztBQUFBLElBQzNFO0FBQUEsSUFFQSxTQUFTO0FBQ1AsWUFBTSxNQUFNLFlBQVksSUFBSTtBQUM1QixXQUFLLGFBQWEsS0FBSyxXQUFXLE9BQU8sT0FBSyxNQUFNLElBQUksR0FBSTtBQUM1RCxXQUFLLGNBQWMsS0FBSyxZQUFZLE9BQU8sT0FBSyxNQUFNLElBQUksR0FBSTtBQUU5RCxXQUFLLGNBQWM7QUFBQSxJQUNyQjtBQUFBLElBRUEsa0JBQWtCO0FBQ2hCLFdBQUssWUFBWTtBQUNqQixXQUFLLGNBQWM7QUFBQSxJQUNyQjtBQUFBLElBRUEsZ0JBQWdCLEdBQUc7QUFDakIsVUFBSSxFQUFFLFdBQVcsR0FBRztBQUNsQixhQUFLLFdBQVcsS0FBSyxZQUFZLElBQUksQ0FBQztBQUFBLE1BQ3hDLFdBQVcsRUFBRSxXQUFXLEdBQUc7QUFDekIsYUFBSyxZQUFZLEtBQUssWUFBWSxJQUFJLENBQUM7QUFBQSxNQUN6QztBQUFBLElBQ0Y7QUFBQSxJQUVBLGdCQUFnQjtBQUNkLFdBQUssVUFBVSxTQUFTLGNBQWMsS0FBSztBQUMzQyxXQUFLLFFBQVEsWUFBWTtBQUN6QixlQUFTLEtBQUssWUFBWSxLQUFLLE9BQU87QUFBQSxJQUN4QztBQUFBLElBRUEsaUJBQWlCO0FBQ2YsVUFBSSxLQUFLLFNBQVM7QUFDaEIsaUJBQVMsS0FBSyxZQUFZLEtBQUssT0FBTztBQUN0QyxhQUFLLFVBQVU7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxJQUVBLGdCQUFnQjtBQUNkLFVBQUksS0FBSyxTQUFTO0FBQ2hCLGNBQU0sV0FBVyxPQUFPLFNBQVMsU0FBUyxJQUFJLFVBQVU7QUFDeEQsWUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLGNBQWM7QUFDdkMsZ0JBQU0sTUFBTSxPQUFPLFNBQVMsU0FBUyxJQUFJLEtBQUssSUFBSTtBQUNsRCxjQUFJLElBQUksTUFBTSxLQUFNLE1BQUssUUFBUSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDdEQsY0FBSSxJQUFJLE1BQU0sS0FBTSxNQUFLLFFBQVEsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQUEsUUFDdkQ7QUFFQSxjQUFNLFdBQVcsS0FBSyxTQUFTLE9BQU8sQ0FBQyxLQUFLLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUM7QUFDbkYsWUFBSSxPQUFPLFNBQVM7QUFFcEIsWUFBSSxTQUFTLFlBQVksRUFBRyxRQUFPLEtBQUssUUFBUSxXQUFXLE1BQU07QUFBQSxZQUFRLFFBQU8sS0FBSyxRQUFRLFdBQVcsRUFBRTtBQUMxRyxZQUFJLFNBQVMsVUFBVSxFQUFHLFFBQU8sS0FBSyxRQUFRLFNBQVMsS0FBSyxXQUFXLE1BQU07QUFBQSxZQUFRLFFBQU8sS0FBSyxRQUFRLFNBQVMsRUFBRTtBQUNwSCxZQUFJLFNBQVMsVUFBVSxFQUFHLFFBQU8sS0FBSyxRQUFRLFNBQVMsS0FBSyxZQUFZLE1BQU07QUFBQSxZQUFRLFFBQU8sS0FBSyxRQUFRLFNBQVMsRUFBRTtBQUVySCxhQUFLLFFBQVEsY0FBYyxLQUFLLEtBQUssRUFBRSxRQUFRLE9BQU8sQ0FBQyxPQUFPLFFBQVEsUUFBUTtBQUM1RSxnQkFBTSxXQUFXLElBQUksU0FBUyxDQUFDO0FBQy9CLGdCQUFNLFdBQVcsSUFBSSxTQUFTLENBQUM7QUFDL0IsY0FBSSxZQUFZLFNBQVMsS0FBSyxNQUFNLE1BQU0sWUFBWSxTQUFTLEtBQUssTUFBTSxJQUFJO0FBQzVFLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksQ0FBQyxZQUFZLFNBQVMsS0FBSyxNQUFNLE1BQU0sQ0FBQyxZQUFZLFNBQVMsS0FBSyxNQUFNLElBQUk7QUFDOUUsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU87QUFBQSxRQUNULENBQUMsRUFBRSxLQUFLO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxJQUVBLGNBQWM7QUFDWixVQUFJLENBQUMsS0FBSyxRQUFTO0FBQ25CLFlBQU0sV0FBVyxLQUFLLFNBQVMsT0FBTyxDQUFDLEtBQUssT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUVuRixVQUFJLFNBQVMsWUFBWSxNQUFNLFNBQVM7QUFDcEMsYUFBSyxRQUFRLE1BQU0sa0JBQWtCO0FBQ3JDLGFBQUssUUFBUSxNQUFNLFFBQVE7QUFDM0IsYUFBSyxRQUFRLE1BQU0sU0FBUyxHQUFHLFNBQVMsY0FBYyxDQUFDO0FBQUEsTUFDM0QsT0FBTztBQUNILGFBQUssUUFBUSxNQUFNLGtCQUFrQixTQUFTLFVBQVU7QUFDeEQsYUFBSyxRQUFRLE1BQU0sUUFBUSxTQUFTLFlBQVk7QUFDaEQsYUFBSyxRQUFRLE1BQU0sU0FBUyxHQUFHLFNBQVMsY0FBYyxDQUFDLFlBQVksU0FBUyxjQUFjLENBQUM7QUFBQSxNQUMvRjtBQUVBLFdBQUssUUFBUSxNQUFNLFdBQVcsR0FBRyxTQUFTLFdBQVcsQ0FBQztBQUN0RCxXQUFLLFFBQVEsTUFBTSxVQUFVLEdBQUcsU0FBUyxTQUFTLENBQUM7QUFDbkQsV0FBSyxRQUFRLE1BQU0sZUFBZSxHQUFHLFNBQVMsZUFBZSxDQUFDO0FBQzlELFdBQUssUUFBUSxNQUFNLFdBQVc7QUFDOUIsV0FBSyxRQUFRLE1BQU0sYUFBYTtBQUNoQyxXQUFLLFFBQVEsTUFBTSxTQUFTO0FBQzVCLFdBQUssUUFBUSxNQUFNLGdCQUFnQjtBQUFBLElBQ3JDO0FBQUEsRUFDRjtBQUVBLE1BQU8scUJBQVE7OztBQ3BJZixNQUFNLGFBQWE7QUFBQSxJQUNqQixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsSUFFUixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsSUFFQSxTQUFTLFNBQVM7QUFDaEIsV0FBSyxTQUFTLFNBQVMsZUFBZSxZQUFZO0FBQ2xELFVBQUksQ0FBQyxLQUFLLFFBQVE7QUFDaEIsZ0JBQVEsTUFBTSxzREFBc0Q7QUFDcEUsZ0JBQVEsUUFBUSxLQUFLLElBQUk7QUFDekI7QUFBQSxNQUNGO0FBRUEsVUFBSSxDQUFDLEtBQUssT0FBTyxRQUFRLGVBQWU7QUFDdEMsYUFBSyxPQUFPLFFBQVEsZ0JBQWdCLEtBQUssT0FBTztBQUNoRCxhQUFLLE9BQU8sUUFBUSxpQkFBaUIsS0FBSyxPQUFPO0FBQUEsTUFDbkQ7QUFBQSxJQUNGO0FBQUEsSUFFQSxVQUFVLFNBQVM7QUFDakIsVUFBSSxLQUFLLFVBQVUsS0FBSyxPQUFPLFFBQVEsZUFBZTtBQUNwRCxhQUFLLE9BQU8sUUFBUSxTQUFTLEtBQUssT0FBTyxRQUFRLGVBQWUsRUFBRTtBQUNsRSxhQUFLLE9BQU8sU0FBUyxTQUFTLEtBQUssT0FBTyxRQUFRLGdCQUFnQixFQUFFO0FBQ3BFLGVBQU8sS0FBSyxPQUFPLFFBQVE7QUFDM0IsZUFBTyxLQUFLLE9BQU8sUUFBUTtBQUFBLE1BQzdCO0FBQ0EsVUFBSSxLQUFLLFFBQVE7QUFDYixhQUFLLE9BQU8sTUFBTSxRQUFRO0FBQzFCLGFBQUssT0FBTyxNQUFNLFNBQVM7QUFBQSxNQUMvQjtBQUNBLFdBQUssU0FBUztBQUFBLElBQ2hCO0FBQUEsSUFFQSxnQkFBZ0IsV0FBVyxPQUFPLFNBQVM7QUFBQSxJQUUzQztBQUFBLElBRUEsT0FBTyxJQUFJLFNBQVM7QUFDbEIsVUFBSSxLQUFLLFVBQVUsS0FBSyxTQUFTO0FBQy9CLGFBQUssY0FBYyxPQUFPO0FBQUEsTUFDNUI7QUFBQSxJQUNGO0FBQUEsSUFFQSxjQUFjLFNBQVM7QUFDckIsVUFBSSxDQUFDLEtBQUssVUFBVSxDQUFDLEtBQUssT0FBTyxRQUFRLGNBQWU7QUFFeEQsWUFBTSxXQUFXLFFBQVEsSUFBSSxLQUFLLElBQUksRUFBRTtBQUN4QyxZQUFNLGtCQUFrQixTQUFTLEtBQUssT0FBSyxFQUFFLE9BQU8saUJBQWlCLEVBQUU7QUFDdkUsWUFBTSxnQkFBZ0IsU0FBUyxLQUFLLE9BQU8sUUFBUSxlQUFlLEVBQUU7QUFDcEUsWUFBTSxpQkFBaUIsU0FBUyxLQUFLLE9BQU8sUUFBUSxnQkFBZ0IsRUFBRTtBQUV0RSxZQUFNLFdBQVcsS0FBSyxNQUFNLGdCQUFnQixlQUFlO0FBQzNELFlBQU0sWUFBWSxLQUFLLE1BQU0saUJBQWlCLGVBQWU7QUFFN0QsVUFBSSxLQUFLLE9BQU8sVUFBVSxVQUFVO0FBQ2xDLGFBQUssT0FBTyxRQUFRO0FBQUEsTUFDdEI7QUFDQSxVQUFJLEtBQUssT0FBTyxXQUFXLFdBQVc7QUFDcEMsYUFBSyxPQUFPLFNBQVM7QUFBQSxNQUN2QjtBQUVBLFVBQUksS0FBSyxPQUFPLE1BQU0sVUFBVSxRQUFRO0FBQ3BDLGFBQUssT0FBTyxNQUFNLFFBQVE7QUFBQSxNQUM5QjtBQUNBLFVBQUksS0FBSyxPQUFPLE1BQU0sV0FBVyxRQUFRO0FBQ3JDLGFBQUssT0FBTyxNQUFNLFNBQVM7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsTUFBTyxxQkFBUTs7O0FDckZmLE1BQU0sWUFBWTtBQUFBLElBQ2QsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBRVQsVUFBVTtBQUFBLE1BQ04sRUFBRSxJQUFJLGlCQUFpQixNQUFNLG9CQUFvQixNQUFNLFdBQVcsT0FBTyxNQUFNLGFBQWEsMENBQTBDO0FBQUEsTUFDdEksRUFBRSxJQUFJLHFCQUFxQixNQUFNLDZCQUE2QixNQUFNLFdBQVcsT0FBTyxNQUFNLGFBQWEsa0VBQWtFO0FBQUEsSUFDL0s7QUFBQSxJQUVBLGVBQWUsT0FBTztBQUFBLElBQ3RCLGlCQUFpQixPQUFPLGVBQWUsVUFBVTtBQUFBLElBQ2pELGlCQUFpQixPQUFPLGVBQWUsVUFBVTtBQUFBLElBQ2pELFVBQVU7QUFBQSxJQUVWLGFBQWE7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0o7QUFBQSxJQUVBLFdBQVc7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0o7QUFBQSxJQUVBLFdBQVc7QUFDUCxXQUFLLGNBQWM7QUFBQSxJQUN2QjtBQUFBLElBRUEsWUFBWTtBQUNSLFdBQUssdUJBQXVCO0FBQzVCLFVBQUksS0FBSyxVQUFVO0FBQ2YsYUFBSyxTQUFTLFdBQVc7QUFDekIsYUFBSyxXQUFXO0FBQUEsTUFDcEI7QUFBQSxJQUVKO0FBQUEsSUFFQSxrQkFBa0I7QUFDZCxXQUFLLGNBQWM7QUFBQSxJQUN2QjtBQUFBLElBRUEsZ0JBQWdCO0FBQ1osWUFBTSxXQUFXLEtBQUssU0FBUyxPQUFPLENBQUMsS0FBSyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFDO0FBRW5GLFVBQUksU0FBUyxtQkFBbUIsR0FBRztBQUMvQixhQUFLLHFCQUFxQjtBQUFBLE1BQzlCLE9BQU87QUFDSCxhQUFLLHVCQUF1QjtBQUFBLE1BQ2hDO0FBRUEsVUFBSSxTQUFTLGVBQWUsR0FBRztBQUMzQixhQUFLLFlBQVk7QUFDakIsYUFBSyxjQUFjO0FBQUEsTUFDdkIsT0FBTztBQUNILFlBQUksS0FBSyxVQUFVO0FBQ2YsZUFBSyxTQUFTLFdBQVc7QUFDekIsZUFBSyxXQUFXO0FBQUEsUUFDcEI7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLElBRUEsVUFBVSxLQUFLO0FBQ1gsYUFBTyxLQUFLLFVBQVUsS0FBSyxZQUFVLElBQUksU0FBUyxNQUFNLENBQUM7QUFBQSxJQUM3RDtBQUFBLElBRUEsdUJBQXVCO0FBQ25CLFlBQU0sT0FBTztBQUViLGFBQU8sUUFBUSxTQUFTLE9BQU8sTUFBTTtBQUNqQyxjQUFNLE1BQU0sT0FBTyxVQUFVLFdBQVcsUUFBUSxNQUFNO0FBQ3RELFlBQUksS0FBSyxVQUFVLEdBQUcsR0FBRztBQUNyQixrQkFBUSxJQUFJLHdDQUF3QyxHQUFHLEVBQUU7QUFDekQsaUJBQU8sUUFBUSxRQUFRLElBQUksU0FBUyxNQUFNLEVBQUUsUUFBUSxLQUFLLFlBQVksYUFBYSxDQUFDLENBQUM7QUFBQSxRQUN4RjtBQUNBLGVBQU8sS0FBSyxjQUFjLE1BQU0sTUFBTSxTQUFTO0FBQUEsTUFDbkQ7QUFFQSxhQUFPLGVBQWUsVUFBVSxPQUFPLFNBQVMsUUFBUSxLQUFLO0FBQ3pELFlBQUksS0FBSyxVQUFVLEdBQUcsR0FBRztBQUNyQixlQUFLLGFBQWE7QUFDbEIsa0JBQVEsSUFBSSxzQ0FBc0MsR0FBRyxFQUFFO0FBQUEsUUFDM0QsT0FBTztBQUNILGlCQUFPLEtBQUs7QUFBQSxRQUNoQjtBQUNBLGFBQUssZ0JBQWdCLE1BQU0sTUFBTSxTQUFTO0FBQUEsTUFDOUM7QUFFQSxhQUFPLGVBQWUsVUFBVSxPQUFPLFdBQVc7QUFDOUMsWUFBSSxLQUFLLFlBQVk7QUFDakI7QUFBQSxRQUNKO0FBQ0EsYUFBSyxnQkFBZ0IsTUFBTSxNQUFNLFNBQVM7QUFBQSxNQUM5QztBQUFBLElBQ0o7QUFBQSxJQUVBLHlCQUF5QjtBQUNyQixhQUFPLFFBQVEsS0FBSztBQUNwQixhQUFPLGVBQWUsVUFBVSxPQUFPLEtBQUs7QUFDNUMsYUFBTyxlQUFlLFVBQVUsT0FBTyxLQUFLO0FBQUEsSUFDaEQ7QUFBQSxJQUVBLFlBQVksTUFBTTtBQUNkLFVBQUksS0FBSyxNQUFNLFlBQVksS0FBSztBQUM1QixhQUFLLE1BQU0sVUFBVTtBQUNyQixhQUFLLE1BQU0sZ0JBQWdCO0FBQUEsTUFDL0I7QUFBQSxJQUNKO0FBQUEsSUFFQSxjQUFjO0FBQ1YsV0FBSyxZQUFZLFFBQVEsY0FBWTtBQUNqQyxpQkFBUyxpQkFBaUIsUUFBUSxFQUFFLFFBQVEsUUFBTSxLQUFLLFlBQVksRUFBRSxDQUFDO0FBQUEsTUFDMUUsQ0FBQztBQUFBLElBQ0w7QUFBQSxJQUVBLGdCQUFnQjtBQUNaLFVBQUksS0FBSyxTQUFVO0FBRW5CLFdBQUssV0FBVyxJQUFJLGlCQUFpQixlQUFhO0FBQzlDLG1CQUFXLFlBQVksV0FBVztBQUM5QixxQkFBVyxRQUFRLFNBQVMsWUFBWTtBQUNwQyxnQkFBSSxLQUFLLGFBQWEsS0FBSyxjQUFjO0FBQ3JDLG1CQUFLLFlBQVksUUFBUSxjQUFZO0FBQ2pDLG9CQUFJLEtBQUssUUFBUSxRQUFRLEdBQUc7QUFDeEIsdUJBQUssWUFBWSxJQUFJO0FBQUEsZ0JBQ3pCO0FBQ0EscUJBQUssaUJBQWlCLFFBQVEsRUFBRSxRQUFRLFFBQU0sS0FBSyxZQUFZLEVBQUUsQ0FBQztBQUFBLGNBQ3RFLENBQUM7QUFBQSxZQUNMO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxNQUNKLENBQUM7QUFFRCxXQUFLLFNBQVMsUUFBUSxTQUFTLGlCQUFpQjtBQUFBLFFBQzVDLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQSxNQUNiLENBQUM7QUFBQSxJQUNMO0FBQUEsRUFDSjtBQUVBLE1BQU8sb0JBQVE7OztBQ3pKZixNQUFNLGFBQWE7QUFFbkIsTUFBTSxnQkFBTixNQUFvQjtBQUFBLElBQ2xCLE9BQU8sS0FBSyxRQUFRO0FBQ2xCLFVBQUk7QUFDRixjQUFNLE9BQU8sS0FBSyxVQUFVLE1BQU07QUFDbEMsY0FBTSxVQUFVLEtBQUssSUFBSTtBQUN6QixxQkFBYSxRQUFRLFlBQVksT0FBTztBQUFBLE1BQzFDLFNBQVMsS0FBSztBQUNaLGdCQUFRLE1BQU0sd0NBQXdDLEdBQUc7QUFBQSxNQUMzRDtBQUFBLElBQ0Y7QUFBQSxJQUVBLE9BQU8sT0FBTztBQUNaLFVBQUk7QUFDRixjQUFNLFVBQVUsYUFBYSxRQUFRLFVBQVU7QUFDL0MsWUFBSSxDQUFDLFFBQVMsUUFBTztBQUVyQixjQUFNLE9BQU8sS0FBSyxPQUFPO0FBQ3pCLGVBQU8sS0FBSyxNQUFNLElBQUk7QUFBQSxNQUN4QixTQUFTLEtBQUs7QUFDWixnQkFBUSxNQUFNLHlDQUF5QyxHQUFHO0FBQzFELHFCQUFhLFdBQVcsVUFBVTtBQUNsQyxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsTUFBTyx3QkFBUTs7O0FDNUJmLE1BQU0sWUFBWTtBQUFBLElBQ2QsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBRVQsU0FBUztBQUFBLElBQ1QsZUFBZTtBQUFBLElBQ2YsNkJBQTZCO0FBQUEsSUFDN0IsVUFBVTtBQUFBLElBRVYsVUFBVTtBQUFBLE1BQ04sRUFBRSxJQUFJLGlCQUFpQixNQUFNLDJCQUEyQixNQUFNLFdBQVcsT0FBTyxLQUFLO0FBQUEsTUFDckY7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFNBQVMsQ0FBQyxTQUFTLFFBQVEsT0FBTyxVQUFVLFdBQVcsU0FBUyxjQUFjO0FBQUEsTUFDbEY7QUFBQSxNQUNBLEVBQUUsSUFBSSxjQUFjLE1BQU0sY0FBYyxNQUFNLFVBQVUsU0FBUyxDQUFDLFNBQVMsUUFBUSxHQUFHLE9BQU8sU0FBUyxXQUFXLENBQUMsYUFBYSxTQUFTLE1BQU0sTUFBTSxlQUFlO0FBQUEsTUFDbkssRUFBRSxJQUFJLGFBQWEsTUFBTSxhQUFhLE1BQU0sUUFBUSxPQUFPLG1DQUFtQyxXQUFXLENBQUMsYUFBYSxTQUFTLE1BQU0sTUFBTSxlQUFlO0FBQUEsTUFDM0osRUFBRSxJQUFJLFFBQVEsTUFBTSxRQUFRLE1BQU0sVUFBVSxPQUFPLElBQUksS0FBSyxHQUFHLEtBQUssS0FBSyxNQUFNLEVBQUU7QUFBQSxNQUNqRixFQUFFLElBQUksU0FBUyxNQUFNLFNBQVMsTUFBTSxTQUFTLE9BQU8sV0FBVyxXQUFXLENBQUMsYUFBYSxTQUFTLE1BQU0sTUFBTSxrQkFBa0IsU0FBUyxZQUFZLE1BQU0sU0FBUztBQUFBLE1BQ25LLEVBQUUsSUFBSSxhQUFhLE1BQU0sYUFBYSxNQUFNLFVBQVUsT0FBTyxHQUFHLEtBQUssR0FBRyxLQUFLLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxRQUFRLFVBQVUsU0FBUyxFQUFFLFNBQVMsU0FBUyxNQUFNLENBQUMsRUFBRTtBQUFBLE1BQ3JMLEVBQUUsSUFBSSxXQUFXLE1BQU0sV0FBVyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsQ0FBQyxhQUFhLFNBQVMsTUFBTSxNQUFNLGVBQWU7QUFBQSxNQUM3SCxFQUFFLElBQUksaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sU0FBUyxPQUFPLFdBQVcsV0FBVyxDQUFDLGFBQWEsU0FBUyxTQUFTLEtBQUssU0FBUyxNQUFNLE1BQU0sa0JBQWtCLFNBQVMsWUFBWSxNQUFNLFNBQVM7QUFBQSxJQUM5TTtBQUFBLElBRUEsV0FBVztBQUNQLFdBQUssY0FBYztBQUNuQixXQUFLLGdCQUFnQjtBQUVyQixXQUFLLG9CQUFvQjtBQUN6QixXQUFLLFdBQVcsSUFBSSxpQkFBaUIsTUFBTSxLQUFLLG9CQUFvQixDQUFDO0FBQ3JFLFdBQUssU0FBUyxRQUFRLFNBQVMsTUFBTSxFQUFFLFdBQVcsTUFBTSxTQUFTLEtBQUssQ0FBQztBQUFBLElBQzNFO0FBQUEsSUFFQSxZQUFZO0FBQ1IsVUFBSSxLQUFLLFVBQVU7QUFDZixhQUFLLFNBQVMsV0FBVztBQUN6QixhQUFLLFdBQVc7QUFBQSxNQUNwQjtBQUNBLFdBQUssZUFBZTtBQUNwQixXQUFLLHFCQUFxQjtBQUMxQixXQUFLLGdCQUFnQjtBQUNyQixXQUFLLDhCQUE4QjtBQUFBLElBQ3ZDO0FBQUEsSUFFQSxnQkFBZ0IsV0FBVztBQUN2QixXQUFLLGdCQUFnQjtBQUNyQixVQUFJLGNBQWMsaUJBQWlCO0FBQy9CLGFBQUssb0JBQW9CO0FBQUEsTUFDN0I7QUFBQSxJQUNKO0FBQUEsSUFFQSxnQkFBZ0I7QUFDWixVQUFJLEtBQUssUUFBUztBQUNsQixXQUFLLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDM0MsV0FBSyxRQUFRLFlBQVk7QUFDekIsV0FBSyxRQUFRLE1BQU0sV0FBVztBQUM5QixXQUFLLFFBQVEsTUFBTSxNQUFNO0FBQ3pCLFdBQUssUUFBUSxNQUFNLE9BQU87QUFDMUIsV0FBSyxRQUFRLE1BQU0sWUFBWTtBQUMvQixXQUFLLFFBQVEsTUFBTSxnQkFBZ0I7QUFDbkMsV0FBSyxRQUFRLE1BQU0sU0FBUztBQUM1QixlQUFTLEtBQUssWUFBWSxLQUFLLE9BQU87QUFBQSxJQUMxQztBQUFBLElBRUEsaUJBQWlCO0FBQ2IsVUFBSSxLQUFLLFNBQVM7QUFDZCxpQkFBUyxLQUFLLFlBQVksS0FBSyxPQUFPO0FBQ3RDLGFBQUssVUFBVTtBQUFBLE1BQ25CO0FBQUEsSUFDSjtBQUFBLElBRUEsc0JBQXNCO0FBQ2xCLFlBQU0sYUFBYSxLQUFLLFNBQVMsS0FBSyxPQUFLLEVBQUUsT0FBTyxlQUFlLEVBQUU7QUFDckUsWUFBTSxrQkFBa0IsU0FBUyxjQUFjLFlBQVk7QUFFM0QsVUFBSSxZQUFZO0FBQ1osWUFBSSxpQkFBaUI7QUFDakIsY0FBSSxLQUFLLGtCQUFrQixpQkFBaUI7QUFDeEMsaUJBQUssZ0JBQWdCO0FBQ3JCLGlCQUFLLDhCQUE4QixnQkFBZ0IsTUFBTTtBQUFBLFVBQzdEO0FBQ0EsZUFBSyxjQUFjLE1BQU0sVUFBVTtBQUFBLFFBQ3ZDO0FBQUEsTUFDSixPQUFPO0FBQ0gsYUFBSyxxQkFBcUI7QUFBQSxNQUM5QjtBQUFBLElBQ0o7QUFBQSxJQUVBLHVCQUF1QjtBQUNuQixVQUFJLEtBQUssZUFBZTtBQUNwQixhQUFLLGNBQWMsTUFBTSxVQUFVLEtBQUssK0JBQStCO0FBQUEsTUFDM0U7QUFBQSxJQUNKO0FBQUEsSUFFQSxrQkFBa0I7QUFDZCxVQUFJLENBQUMsS0FBSyxRQUFTO0FBRW5CLFdBQUssUUFBUSxZQUFZO0FBRXpCLFlBQU0sV0FBVyxLQUFLLFNBQVMsT0FBTyxDQUFDLEtBQUssT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUNuRixVQUFJLEVBQUUsTUFBTSxNQUFNLE9BQU8sV0FBVyxTQUFTLGlCQUFpQixjQUFjLGFBQWEsVUFBVSxjQUFjLFVBQVUsSUFBSTtBQUUvSCxVQUFJLGNBQWMsV0FBVyxTQUFTLGdCQUFnQjtBQUNsRCxnQkFBUSxpQkFBaUIsU0FBUyxlQUFlLEVBQUUsaUJBQWlCLFdBQVcsRUFBRSxLQUFLO0FBQ3RGLHVCQUFlO0FBQUEsTUFDbkI7QUFFQSxZQUFNLGVBQWUsVUFBVSxlQUFlLFlBQVksaUJBQWlCLFlBQVksaUJBQWlCLFlBQVksaUJBQWlCLFlBQVksS0FBSztBQUV0SixjQUFPLE1BQU07QUFBQSxRQUNULEtBQUs7QUFDRCxnQkFBTSxNQUFNLFNBQVMsY0FBYyxLQUFLO0FBQ3hDLGNBQUksTUFBTTtBQUNWLGNBQUksTUFBTSxRQUFRLEdBQUcsSUFBSTtBQUN6QixjQUFJLE1BQU0sU0FBUyxHQUFHLElBQUk7QUFDMUIsZUFBSyxRQUFRLFlBQVksR0FBRztBQUM1QjtBQUFBLFFBRUosS0FBSztBQUNELGdCQUFNLE1BQU0sU0FBUyxjQUFjLEtBQUs7QUFDeEMsY0FBSSxNQUFNLFFBQVEsR0FBRyxJQUFJO0FBQ3pCLGNBQUksTUFBTSxTQUFTLEdBQUcsSUFBSTtBQUMxQixjQUFJLE1BQU0sa0JBQWtCO0FBQzVCLGNBQUksTUFBTSxlQUFlO0FBQ3pCLGNBQUksTUFBTSxhQUFhO0FBQ3ZCLGVBQUssUUFBUSxZQUFZLEdBQUc7QUFDNUI7QUFBQSxRQUVKLEtBQUs7QUFDRCxnQkFBTSxTQUFTLFNBQVMsY0FBYyxLQUFLO0FBQzNDLGlCQUFPLE1BQU0sUUFBUSxHQUFHLElBQUk7QUFDNUIsaUJBQU8sTUFBTSxTQUFTLEdBQUcsSUFBSTtBQUM3QixpQkFBTyxNQUFNLFNBQVMsR0FBRyxTQUFTLFlBQVksS0FBSztBQUNuRCxpQkFBTyxNQUFNLGVBQWU7QUFDNUIsaUJBQU8sTUFBTSxhQUFhO0FBQzFCLGVBQUssUUFBUSxZQUFZLE1BQU07QUFDL0I7QUFBQSxRQUVKLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFDRCxnQkFBTSxNQUFNLFNBQVMsVUFBVSxLQUFLLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSTtBQUN2RCxnQkFBTSxTQUFTO0FBRWYsZ0JBQU0sWUFBWTtBQUFBLFlBQ2QsS0FBSyxFQUFFLEtBQUssSUFBSSxNQUFNLE1BQU0sTUFBTSxNQUFNLElBQUksWUFBWSxDQUFDLE1BQU0sT0FBTyxHQUFHLFNBQVMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLO0FBQUEsWUFDOUcsUUFBUSxFQUFFLEtBQUssR0FBRyxHQUFHLE1BQU0sTUFBTSxJQUFJLFlBQVksQ0FBQyxNQUFNLE9BQU8sR0FBRyxTQUFTLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSztBQUFBLFlBQ3ZHLE1BQU0sRUFBRSxNQUFNLElBQUksTUFBTSxNQUFNLE1BQU0sS0FBSyxJQUFJLFlBQVksQ0FBQyxNQUFNLE9BQU8sR0FBRyxNQUFNLE1BQU0sUUFBUSxHQUFHLFNBQVMsS0FBSztBQUFBLFlBQy9HLE9BQU8sRUFBRSxNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssSUFBSSxZQUFZLENBQUMsTUFBTSxPQUFPLEdBQUcsTUFBTSxNQUFNLFFBQVEsR0FBRyxTQUFTLEtBQUs7QUFBQSxVQUMxRztBQUVBLGNBQUksY0FBYyxDQUFDLE9BQU8sVUFBVSxRQUFRLE9BQU87QUFDbkQsY0FBSSxTQUFTLFVBQVcsZUFBYyxDQUFDLFVBQVUsUUFBUSxPQUFPO0FBRWhFLHNCQUFZLFFBQVEsU0FBTztBQUN2QixrQkFBTSxPQUFPLFNBQVMsY0FBYyxLQUFLO0FBQ3pDLGlCQUFLLE1BQU0sV0FBVztBQUN0QixpQkFBSyxNQUFNLGtCQUFrQjtBQUM3QixpQkFBSyxNQUFNLGFBQWE7QUFDeEIsbUJBQU8sT0FBTyxLQUFLLE9BQU8sVUFBVSxHQUFHLENBQUM7QUFDeEMsaUJBQUssUUFBUSxZQUFZLElBQUk7QUFBQSxVQUNqQyxDQUFDO0FBQ0Q7QUFBQSxRQUVKLEtBQUs7QUFDRCxnQkFBTSxRQUFRLFNBQVMsY0FBYyxLQUFLO0FBQzFDLGdCQUFNLE1BQU0sUUFBUTtBQUNwQixnQkFBTSxNQUFNLFNBQVM7QUFDckIsZ0JBQU0sTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDO0FBQ3BDLGdCQUFNLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQztBQUNyQyxnQkFBTSxNQUFNLGVBQWUsR0FBRyxJQUFJLFlBQVksS0FBSztBQUNuRCxjQUFHLFNBQVM7QUFDUixrQkFBTSxNQUFNLFNBQVMseUJBQXlCLFlBQVksNEJBQTRCLFlBQVksMkJBQTJCLFlBQVksNEJBQTRCLFlBQVk7QUFBQSxVQUNyTDtBQUNBLGVBQUssUUFBUSxZQUFZLEtBQUs7QUFDOUI7QUFBQSxNQUNSO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFFQSxNQUFPLG9CQUFROzs7QUN6TGYsTUFBTSxzQkFBTixNQUEwQjtBQUFBLElBQ3hCLGNBQWM7QUFDWixXQUFLLFlBQVk7QUFDakIsV0FBSyxLQUFLO0FBQUEsSUFDWjtBQUFBLElBRUEsT0FBTztBQUNMLFVBQUksQ0FBQyxTQUFTLGVBQWUsbUJBQW1CLEdBQUc7QUFDakQsY0FBTSxrQkFBa0IsU0FBUyxjQUFjLE1BQU07QUFDckQsd0JBQWdCLEtBQUs7QUFDckIsd0JBQWdCLE1BQU07QUFDdEIsd0JBQWdCLE9BQU87QUFDdkIsaUJBQVMsS0FBSyxZQUFZLGVBQWU7QUFBQSxNQUMzQztBQUVBLFVBQUksU0FBUyxjQUFjLGtDQUFrQyxHQUFHO0FBQzVELGFBQUssWUFBWSxTQUFTLGNBQWMsa0NBQWtDO0FBQUEsTUFDOUUsT0FBTztBQUNILGFBQUssWUFBWSxTQUFTLGNBQWMsS0FBSztBQUM3QyxhQUFLLFVBQVUsWUFBWTtBQUMzQixpQkFBUyxLQUFLLFlBQVksS0FBSyxTQUFTO0FBQUEsTUFDNUM7QUFBQSxJQUNGO0FBQUEsSUFFQSxLQUFLLEVBQUUsUUFBUSxZQUFZLFNBQVMsT0FBTyxRQUFRLFdBQVcsSUFBSyxHQUFHO0FBQ3BFLFlBQU0sZUFBZSxTQUFTLGNBQWMsS0FBSztBQUNqRCxtQkFBYSxZQUFZLCtDQUErQyxJQUFJO0FBRTVFLFlBQU0sVUFBVTtBQUFBLFFBQ2QsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLE1BQ1Q7QUFFQSxtQkFBYSxZQUFZO0FBQUE7QUFBQSxrREFFcUIsUUFBUSxJQUFJLEtBQUssUUFBUSxJQUFJO0FBQUE7QUFBQTtBQUFBLG1EQUc1QixLQUFLO0FBQUEscURBQ0gsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXhELFdBQUssVUFBVSxRQUFRLFlBQVk7QUFHbkMsbUJBQWEsTUFBTSxZQUFZO0FBRS9CLFlBQU0sV0FBVyxhQUFhLGNBQWMsOEJBQThCO0FBQzFFLGVBQVMsTUFBTSxhQUFhLFNBQVMsUUFBUTtBQUM3QyxpQkFBVyxNQUFNO0FBQ2IsWUFBRyxTQUFVLFVBQVMsTUFBTSxRQUFRO0FBQUEsTUFDeEMsR0FBRyxFQUFFO0FBRUwsWUFBTSxRQUFRLE1BQU07QUFDbEIsWUFBSSxhQUFhLFVBQVUsU0FBUyxTQUFTLEVBQUc7QUFDaEQscUJBQWEsVUFBVSxJQUFJLFNBQVM7QUFFcEMscUJBQWEsT0FBTztBQUNwQixxQkFBYSxNQUFNLFlBQVk7QUFDL0IscUJBQWEsaUJBQWlCLGdCQUFnQixDQUFDLE1BQU07QUFDbkQsY0FBRyxFQUFFLGtCQUFrQiw2QkFBNkI7QUFDaEQseUJBQWEsT0FBTztBQUFBLFVBQ3hCO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUVBLFlBQU0sV0FBVyxhQUFhLGNBQWMsOEJBQThCO0FBQzFFLGVBQVMsaUJBQWlCLFNBQVMsT0FBTyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRXhELFVBQUksVUFBVSxXQUFXLE9BQU8sUUFBUTtBQUV4QyxtQkFBYSxpQkFBaUIsY0FBYyxNQUFNO0FBQzlDLHFCQUFhLE9BQU87QUFDcEIsaUJBQVMsTUFBTSxRQUFRLGlCQUFpQixRQUFRLEVBQUU7QUFBQSxNQUN0RCxDQUFDO0FBRUQsbUJBQWEsaUJBQWlCLGNBQWMsTUFBTTtBQUM5QyxrQkFBVSxXQUFXLE9BQU8sUUFBUTtBQUNwQyxpQkFBUyxNQUFNLGFBQWEsU0FBUyxRQUFRO0FBQzdDLGlCQUFTLE1BQU0sUUFBUTtBQUFBLE1BQzNCLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUVBLE1BQU8sOEJBQVE7OztBQ3pGZixNQUFNLGdCQUFnQjtBQUFBLElBQ3BCLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULFVBQVUsQ0FBQztBQUFBLEVBQ2I7QUFFQSxNQUFPLHdCQUFROzs7QUNMZixNQUFNLGNBQWM7QUFBQSxJQUNoQixNQUFNO0FBQUEsSUFDTixZQUFZLFdBQVc7QUFDbkIsVUFBSSxDQUFDLEtBQUssTUFBTTtBQUNaLGFBQUssT0FBTyxTQUFTLGNBQWMsUUFBUSxFQUFFLFdBQVcsSUFBSTtBQUFBLE1BQ2hFO0FBQ0EsYUFBTyxLQUFLO0FBQUEsSUFDaEI7QUFBQSxFQUNKO0FBRUEsTUFBTSxZQUFZO0FBQUEsSUFDZCxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsSUFFVCxVQUFVO0FBQUEsTUFDTjtBQUFBLFFBQ0ksSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sU0FBUyxDQUFDLFdBQVcsUUFBUTtBQUFBLFFBQzdCLE9BQU87QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0ksSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsV0FBVyxDQUFDLGFBQWEsU0FBUyxZQUFZLE1BQU07QUFBQSxNQUN4RDtBQUFBLE1BQ0E7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFdBQVcsQ0FBQyxhQUFhLFNBQVMsWUFBWSxNQUFNLFlBQVksQ0FBQyxTQUFTLGlCQUFpQjtBQUFBLE1BQy9GO0FBQUEsTUFDQTtBQUFBLFFBQ0ksSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDSSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNYO0FBQUEsSUFDSjtBQUFBLElBRUEsU0FBUyxTQUFTO0FBQ2QsVUFBSSxDQUFDLEtBQUssU0FBUztBQUNmLGFBQUssVUFBVSxTQUFTLGNBQWMsS0FBSztBQUMzQyxhQUFLLFFBQVEsWUFBWTtBQUN6QixpQkFBUyxLQUFLLFlBQVksS0FBSyxPQUFPO0FBQUEsTUFDMUM7QUFDQSxXQUFLLFlBQVksT0FBTztBQUFBLElBQzVCO0FBQUEsSUFFQSxZQUFZO0FBQ1IsVUFBSSxLQUFLLFNBQVM7QUFDZCxpQkFBUyxLQUFLLFlBQVksS0FBSyxPQUFPO0FBQ3RDLGFBQUssVUFBVTtBQUFBLE1BQ25CO0FBQUEsSUFDSjtBQUFBLElBRUEsT0FBTyxJQUFJLFNBQVM7QUFDaEIsVUFBSSxDQUFDLEtBQUssUUFBUztBQUVuQixZQUFNLFdBQVcsQ0FBQyxZQUFZLGFBQWEsZUFBZTtBQUcxRCxZQUFNLFdBQVcsS0FBSyxnQkFBZ0IsU0FBUyxXQUFXO0FBQzFELFlBQU0sYUFBYTtBQUNuQixZQUFNLGFBQWE7QUFDbkIsWUFBTSxPQUFPLEdBQUcsVUFBVSxJQUFJLFFBQVEsTUFBTSxVQUFVO0FBRXRELFlBQU0sVUFBVSxZQUFZLFdBQVc7QUFDdkMsY0FBUSxPQUFPO0FBRWYsWUFBTSxpQkFBaUIsUUFBUSxLQUFLLEVBQy9CLE9BQU8sT0FBSyxFQUFFLFdBQVcsQ0FBQyxTQUFTLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFDbkQsSUFBSSxRQUFNO0FBQUEsUUFDUCxNQUFNLEVBQUU7QUFBQSxRQUNSLE9BQU8sUUFBUSxZQUFZLEVBQUUsSUFBSSxFQUFFO0FBQUEsTUFDdkMsRUFBRSxFQUNELEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssY0FBYyxFQUFFLElBQUksQ0FBQztBQUVyRSxXQUFLLFFBQVEsWUFBWTtBQUV6QixZQUFNLFlBQVksS0FBSyxnQkFBZ0IsU0FBUyxZQUFZO0FBQzVELFlBQU0sZ0JBQWdCLEtBQUssZ0JBQWdCLFNBQVMsaUJBQWlCO0FBQ3JFLFVBQUksY0FBYyxLQUFLLGdCQUFnQixTQUFTLGNBQWM7QUFDOUQsWUFBTSxhQUFhLEtBQUssZ0JBQWdCLFNBQVMsUUFBUTtBQUV6RCxVQUFJLGNBQWMsWUFBWSxlQUFlO0FBQ3pDLHNCQUFjLGlCQUFpQixTQUFTLGVBQWUsRUFBRSxpQkFBaUIsV0FBVyxFQUFFLEtBQUs7QUFBQSxNQUNoRztBQUVBLHFCQUFlLFFBQVEsQ0FBQyxLQUFLLFVBQVU7QUFDbkMsY0FBTSxhQUFhLFNBQVMsY0FBYyxLQUFLO0FBQy9DLG1CQUFXLFlBQVk7QUFFdkIsY0FBTSxRQUFRLGNBQWMsWUFBWSxnQkFBZ0IsS0FBSyxJQUFJO0FBRWpFLG1CQUFXLE1BQU0sUUFBUTtBQUN6QixtQkFBVyxjQUFjLElBQUk7QUFFN0IsWUFBSSxZQUFZO0FBQ1osZ0JBQU0sZ0JBQWdCLFNBQVMsY0FBYyxNQUFNO0FBQ25ELHdCQUFjLFlBQVk7QUFDMUIsd0JBQWMsTUFBTSxrQkFBa0I7QUFDdEMscUJBQVcsWUFBWSxhQUFhO0FBQUEsUUFDeEM7QUFFQSxhQUFLLFFBQVEsWUFBWSxVQUFVO0FBQUEsTUFDdkMsQ0FBQztBQUFBLElBQ0w7QUFBQSxJQUVBLGdCQUFnQixXQUFXLE9BQU8sU0FBUztBQUN2QyxXQUFLLFlBQVksT0FBTztBQUFBLElBQzVCO0FBQUEsSUFFQSxZQUFZLFNBQVM7QUFDakIsVUFBSSxDQUFDLEtBQUssUUFBUztBQUVuQixZQUFNLGFBQWEsS0FBSyxnQkFBZ0IsU0FBUyxhQUFhO0FBQzlELFlBQU0sV0FBVyxLQUFLLGdCQUFnQixTQUFTLFdBQVc7QUFFMUQsV0FBSyxRQUFRLE1BQU0sV0FBVyxHQUFHLFFBQVE7QUFDekMsV0FBSyxRQUFRLFVBQVUsT0FBTyxlQUFlLFVBQVU7QUFBQSxJQUMzRDtBQUFBLElBRUEsZ0JBQWdCLFNBQVMsV0FBVztBQUNoQyxZQUFNLFNBQVMsUUFBUSxJQUFJLFdBQVc7QUFDdEMsVUFBSSxDQUFDLE9BQVEsUUFBTztBQUNwQixZQUFNLFVBQVUsT0FBTyxTQUFTLEtBQUssT0FBSyxFQUFFLE9BQU8sU0FBUztBQUM1RCxhQUFPLFVBQVUsUUFBUSxRQUFRO0FBQUEsSUFDckM7QUFBQSxFQUNKO0FBRUEsTUFBTyxvQkFBUTs7O0FDaEpmLE1BQU0sZ0JBQU4sTUFBb0I7QUFBQSxJQUNsQixZQUFZLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHO0FBQ2xDLFdBQUssVUFBVSxvQkFBSSxJQUFJO0FBQ3ZCLFdBQUssYUFBYSxvQkFBSSxJQUFJO0FBQzFCLFdBQUssYUFBYTtBQUFBLFFBQ2hCO0FBQUEsUUFBVTtBQUFBLFFBQVk7QUFBQSxRQUFVO0FBQUEsUUFBVTtBQUFBLE1BQzVDO0FBQ0EsV0FBSyxXQUFXO0FBQ2hCLFdBQUssV0FBVztBQUNoQixXQUFLLGNBQWM7QUFDbkIsV0FBSyx3QkFBd0I7QUFDN0IsV0FBSyxnQkFBZ0IsSUFBSSw0QkFBb0I7QUFFN0MsV0FBSyxlQUFlLE1BQU87QUFDM0IsV0FBSyxXQUFXLFlBQVksSUFBSTtBQUNoQyxXQUFLLFNBQVMsS0FBSyxPQUFPLEtBQUssSUFBSTtBQUVuQyxXQUFLLEtBQUs7QUFFVixXQUFLLHdCQUF3QjtBQUM3Qiw0QkFBc0IsS0FBSyxNQUFNO0FBQUEsSUFDbkM7QUFBQSxJQUVBLFFBQVE7QUFDTixVQUFJLEtBQUssVUFBVTtBQUNqQixhQUFLLGtCQUFrQjtBQUFBLE1BQ3pCO0FBQ0EsV0FBSyxtQkFBbUI7QUFDeEIsV0FBSyxjQUFjO0FBQUEsSUFDckI7QUFBQSxJQUVBLE9BQU87QUFDTCxZQUFNLGFBQWE7QUFBQSxRQUNqQjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBRUEsaUJBQVcsUUFBUSxTQUFPO0FBQ3hCLGFBQUssV0FBVyxJQUFJLElBQUksTUFBTSxHQUFHO0FBQ2pDLGFBQUssVUFBVSxHQUFHO0FBQUEsTUFDcEIsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUVBLFVBQVUsS0FBSztBQUNiLFVBQUksQ0FBQyxPQUFPLE9BQU8sSUFBSSxTQUFTLFVBQVU7QUFDeEMsY0FBTSxJQUFJLE1BQU0sNENBQTRDO0FBQUEsTUFDOUQ7QUFDQSxZQUFNLGFBQWE7QUFBQSxRQUNqQixhQUFhO0FBQUEsUUFDYixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFBQztBQUFBLFFBQ1osWUFBWTtBQUFBLFFBQUM7QUFBQSxRQUNiLFNBQVM7QUFBQSxRQUFDO0FBQUEsUUFDVixrQkFBa0I7QUFBQSxRQUFDO0FBQUEsUUFDbkIsVUFBVSxDQUFDO0FBQUEsUUFDWCxHQUFHLElBQUksYUFBYSxTQUFZLElBQUksV0FBVztBQUFBLFFBQy9DLEdBQUcsSUFBSSxhQUFhLFNBQVksSUFBSSxXQUFXO0FBQUEsUUFDL0MsR0FBRztBQUFBLE1BQ0w7QUFFQSxhQUFPLFdBQVc7QUFDbEIsYUFBTyxXQUFXO0FBRWxCLGlCQUFXLFdBQVcsV0FBVyxTQUFTLElBQUksUUFBTTtBQUFBLFFBQ2xELGFBQWE7QUFBQSxRQUNiLEdBQUc7QUFBQSxNQUNMLEVBQUU7QUFFRixXQUFLLFFBQVEsSUFBSSxXQUFXLE1BQU0sVUFBVTtBQUM1QyxhQUFPO0FBQUEsSUFDVDtBQUFBLElBRUEsT0FBTyxNQUFNO0FBQ1gsWUFBTSxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUk7QUFDL0IsVUFBSSxLQUFLLENBQUMsRUFBRSxTQUFTO0FBQ25CLFVBQUUsVUFBVTtBQUNaLFlBQUk7QUFBRSxZQUFFLFNBQVMsSUFBSTtBQUFBLFFBQUcsU0FBUyxLQUFLO0FBQUUsa0JBQVEsTUFBTSxzQ0FBc0MsSUFBSSxNQUFNLEdBQUc7QUFBQSxRQUFHO0FBQzVHLFVBQUUsZUFBZTtBQUNqQixhQUFLLGtCQUFrQjtBQUN2QixZQUFJLEtBQUssZUFBZSxLQUFLLElBQUksZUFBZSxHQUFHLFNBQVM7QUFDMUQsZUFBSyxjQUFjLEtBQUs7QUFBQSxZQUNwQixPQUFPO0FBQUEsWUFDUCxTQUFTLE1BQU0sSUFBSTtBQUFBLFlBQ25CLE1BQU07QUFBQSxVQUNWLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVBLFFBQVEsTUFBTTtBQUNaLFlBQU0sSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJO0FBQy9CLFVBQUksS0FBSyxFQUFFLFNBQVM7QUFDbEIsVUFBRSxVQUFVO0FBQ1osWUFBSTtBQUFFLFlBQUUsVUFBVSxJQUFJO0FBQUEsUUFBRyxTQUFTLEtBQUs7QUFBRSxrQkFBUSxNQUFNLHVDQUF1QyxJQUFJLE1BQU0sR0FBRztBQUFBLFFBQUc7QUFDOUcsYUFBSyxrQkFBa0I7QUFDdkIsWUFBSSxLQUFLLGVBQWUsU0FBUyxjQUFjLEtBQUssSUFBSSxlQUFlLEdBQUcsU0FBUztBQUNqRixlQUFLLGNBQWMsS0FBSztBQUFBLFlBQ3BCLE9BQU87QUFBQSxZQUNQLFNBQVMsTUFBTSxJQUFJO0FBQUEsWUFDbkIsTUFBTTtBQUFBLFVBQ1YsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBRUEsT0FBTyxNQUFNO0FBQ1gsWUFBTSxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUk7QUFDL0IsVUFBSSxHQUFHO0FBQ0wsVUFBRSxVQUFVLEtBQUssUUFBUSxJQUFJLElBQUksS0FBSyxPQUFPLElBQUk7QUFBQSxNQUNuRDtBQUFBLElBQ0Y7QUFBQSxJQUVBLG9CQUFvQixZQUFZLFdBQVcsT0FBTztBQUNoRCxZQUFNLElBQUksS0FBSyxRQUFRLElBQUksVUFBVTtBQUNyQyxVQUFJLENBQUMsRUFBRztBQUVSLFlBQU0sVUFBVSxFQUFFLFNBQVMsS0FBSyxPQUFLLEVBQUUsT0FBTyxTQUFTO0FBQ3ZELFVBQUksU0FBUztBQUNYLGdCQUFRLFFBQVE7QUFDaEIsWUFBSSxPQUFPLEVBQUUsb0JBQW9CLFlBQVk7QUFDM0MsY0FBSTtBQUNGLGNBQUUsZ0JBQWdCLFdBQVcsT0FBTyxJQUFJO0FBQUEsVUFDMUMsU0FBUyxLQUFLO0FBQ1osb0JBQVEsTUFBTSw2Q0FBNkMsVUFBVSxNQUFNLEdBQUc7QUFBQSxVQUNoRjtBQUFBLFFBQ0Y7QUFDQSxhQUFLLGtCQUFrQjtBQUFBLE1BQ3pCO0FBQUEsSUFDRjtBQUFBLElBRUEscUJBQXFCLFlBQVksR0FBRyxHQUFHO0FBQ3JDLFlBQU0sSUFBSSxLQUFLLFFBQVEsSUFBSSxVQUFVO0FBQ3JDLFVBQUksR0FBRztBQUNMLFVBQUUsSUFBSTtBQUNOLFVBQUUsSUFBSTtBQUNOLGFBQUssa0JBQWtCO0FBQUEsTUFDekI7QUFBQSxJQUNGO0FBQUEsSUFFQSxvQkFBb0IsWUFBWTtBQUM5QixZQUFNLFNBQVMsS0FBSyxXQUFXLElBQUksVUFBVTtBQUM3QyxZQUFNLGFBQWEsS0FBSyxJQUFJLFVBQVU7QUFFdEMsVUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFZO0FBRTVCLFVBQUksT0FBTyxVQUFVO0FBQ25CLGVBQU8sU0FBUyxRQUFRLG9CQUFrQjtBQUN4QyxlQUFLLG9CQUFvQixZQUFZLGVBQWUsSUFBSSxlQUFlLEtBQUs7QUFBQSxRQUM5RSxDQUFDO0FBQUEsTUFDSDtBQUVBLFdBQUsscUJBQXFCLFlBQVksT0FBTyxLQUFLLE1BQU0sT0FBTyxLQUFLLElBQUk7QUFBQSxJQUMxRTtBQUFBLElBRUEsSUFBSSxNQUFNO0FBQ1IsYUFBTyxLQUFLLFFBQVEsSUFBSSxJQUFJO0FBQUEsSUFDOUI7QUFBQSxJQUVBLE9BQU87QUFDTCxhQUFPLE1BQU0sS0FBSyxLQUFLLFFBQVEsT0FBTyxDQUFDO0FBQUEsSUFDekM7QUFBQSxJQUVBLHFCQUFxQixVQUFVO0FBQzdCLGFBQU8sS0FBSyxLQUFLLEVBQUUsT0FBTyxPQUFLLEVBQUUsYUFBYSxRQUFRO0FBQUEsSUFDeEQ7QUFBQSxJQUVBLE9BQU8sS0FBSztBQUNWLFlBQU0sS0FBSyxNQUFNLEtBQUs7QUFDdEIsVUFBSSxNQUFNLEtBQUssY0FBYztBQUMzQixhQUFLLFFBQVEsUUFBUSxDQUFDLE1BQU07QUFDMUIsY0FBSSxFQUFFLFdBQVcsT0FBTyxFQUFFLFdBQVcsWUFBWTtBQUMvQyxnQkFBSTtBQUFFLGdCQUFFLE9BQU8sSUFBSSxJQUFJO0FBQUEsWUFBRyxTQUFTLEtBQUs7QUFBRSxzQkFBUSxNQUFNLG9DQUFvQyxFQUFFLElBQUksTUFBTSxHQUFHO0FBQUEsWUFBRztBQUFBLFVBQ2hIO0FBQUEsUUFDRixDQUFDO0FBQ0QsYUFBSyxXQUFXO0FBQUEsTUFDbEI7QUFDQSw0QkFBc0IsS0FBSyxNQUFNO0FBQUEsSUFDbkM7QUFBQSxJQUVBLG9CQUFvQjtBQUNsQixVQUFJLENBQUMsS0FBSyxTQUFVO0FBQ3BCLFdBQUssdUJBQXVCO0FBQUEsSUFDOUI7QUFBQSxJQUVBLHlCQUF5QjtBQUN2QixZQUFNLFNBQVM7QUFBQSxRQUNiLE1BQU07QUFBQSxVQUNKLFVBQVUsS0FBSztBQUFBLFVBQ2YsVUFBVSxLQUFLO0FBQUEsVUFDZixPQUFPO0FBQUEsWUFDSCxTQUFTLGlCQUFpQixTQUFTLGVBQWUsRUFBRSxpQkFBaUIsV0FBVyxFQUFFLEtBQUs7QUFBQSxZQUN2RixXQUFXLGlCQUFpQixTQUFTLGVBQWUsRUFBRSxpQkFBaUIsY0FBYyxFQUFFLEtBQUs7QUFBQSxZQUM1RixjQUFjLGlCQUFpQixTQUFTLGVBQWUsRUFBRSxpQkFBaUIsaUJBQWlCLEVBQUUsS0FBSztBQUFBLFVBQ3RHO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFDQSxpQkFBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLEtBQUssUUFBUSxRQUFRLEdBQUc7QUFDaEQsZUFBTyxJQUFJLElBQUk7QUFBQSxVQUNiLFNBQVMsSUFBSTtBQUFBLFVBQ2IsR0FBRyxJQUFJO0FBQUEsVUFDUCxHQUFHLElBQUk7QUFBQSxVQUNQLFVBQVUsSUFBSSxTQUFTLElBQUksUUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFBQSxRQUNoRTtBQUFBLE1BQ0Y7QUFDQSw0QkFBYyxLQUFLLE1BQU07QUFBQSxJQUMzQjtBQUFBLElBRUEsa0JBQWtCLGNBQWM7QUFDOUIsWUFBTSxTQUFTLGdCQUFnQixzQkFBYyxLQUFLO0FBQ2xELFVBQUksQ0FBQyxPQUFRO0FBRWIsVUFBSSxPQUFPLE1BQU07QUFDZixhQUFLLFdBQVcsT0FBTyxLQUFLLFlBQVksS0FBSztBQUM3QyxhQUFLLFdBQVcsT0FBTyxLQUFLLFlBQVksS0FBSztBQUM3QyxZQUFJLE9BQU8sS0FBSyxTQUFTLE9BQU8sS0FBSyxNQUFNLFNBQVM7QUFDbEQsbUJBQVMsZ0JBQWdCLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLE9BQU87QUFDakYsbUJBQVMsZ0JBQWdCLE1BQU0sWUFBWSxrQkFBa0IsS0FBSyxXQUFXLE9BQU8sS0FBSyxNQUFNLFNBQVMsR0FBRyxDQUFDO0FBQUEsUUFDOUc7QUFDQSxZQUFJLE9BQU8sS0FBSyxTQUFTLE9BQU8sS0FBSyxNQUFNLFdBQVc7QUFDcEQsbUJBQVMsZ0JBQWdCLE1BQU0sWUFBWSxnQkFBZ0IsT0FBTyxLQUFLLE1BQU0sU0FBUztBQUFBLFFBQ3hGO0FBQ0EsWUFBSSxPQUFPLEtBQUssU0FBUyxPQUFPLEtBQUssTUFBTSxjQUFjO0FBQ3ZELG1CQUFTLGdCQUFnQixNQUFNLFlBQVksbUJBQW1CLE9BQU8sS0FBSyxNQUFNLFlBQVk7QUFBQSxRQUM5RjtBQUFBLE1BQ0Y7QUFFQSxpQkFBVyxDQUFDLE1BQU0sU0FBUyxLQUFLLE9BQU8sUUFBUSxNQUFNLEdBQUc7QUFDdEQsWUFBSSxTQUFTLE9BQVE7QUFDckIsY0FBTSxNQUFNLEtBQUssUUFBUSxJQUFJLElBQUk7QUFDakMsWUFBSSxLQUFLO0FBQ1AsY0FBSSxJQUFJLFVBQVUsTUFBTSxRQUFRLFVBQVUsTUFBTSxTQUFZLFVBQVUsSUFBSTtBQUMxRSxjQUFJLElBQUksVUFBVSxNQUFNLFFBQVEsVUFBVSxNQUFNLFNBQVksVUFBVSxJQUFJO0FBRTFFLGNBQUksVUFBVSxVQUFVO0FBQ3RCLHNCQUFVLFNBQVMsUUFBUSxrQkFBZ0I7QUFDekMsb0JBQU0sVUFBVSxJQUFJLFNBQVMsS0FBSyxPQUFLLEVBQUUsT0FBTyxhQUFhLEVBQUU7QUFDL0Qsa0JBQUksV0FBVyxRQUFRLFVBQVUsYUFBYSxPQUFPO0FBQ25ELHdCQUFRLFFBQVEsYUFBYTtBQUM3QixvQkFBSSxPQUFPLElBQUksb0JBQW9CLFlBQVk7QUFDN0Msc0JBQUk7QUFDRix3QkFBSSxnQkFBZ0IsUUFBUSxJQUFJLGFBQWEsT0FBTyxJQUFJO0FBQUEsa0JBQzFELFNBQVMsS0FBSztBQUNaLDRCQUFRLE1BQU0sNkNBQTZDLElBQUksTUFBTSxHQUFHO0FBQUEsa0JBQzFFO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsWUFDRixDQUFDO0FBQUEsVUFDSDtBQUdBLGNBQUksVUFBVSxXQUFXLENBQUMsSUFBSSxTQUFTO0FBQ3JDLGlCQUFLLE9BQU8sSUFBSTtBQUFBLFVBQ2xCLFdBQVcsQ0FBQyxVQUFVLFdBQVcsSUFBSSxTQUFTO0FBQzVDLGlCQUFLLFFBQVEsSUFBSTtBQUFBLFVBQ25CO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFFQSxVQUFJLENBQUMsS0FBSyxhQUFhO0FBQ25CLGFBQUssbUJBQW1CO0FBQUEsTUFDNUI7QUFBQSxJQUNGO0FBQUEsSUFFQSxxQkFBcUI7QUFDbkIsV0FBSyxRQUFRLFFBQVEsQ0FBQyxNQUFNO0FBQzFCLFlBQUksRUFBRSxXQUFXLENBQUMsRUFBRSxjQUFjO0FBQ2hDLFlBQUUsVUFBVTtBQUNaLGVBQUssT0FBTyxFQUFFLElBQUk7QUFBQSxRQUNwQjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUVBLHNCQUFzQjtBQUNwQixZQUFNLFNBQVMsQ0FBQztBQUNoQixpQkFBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLEtBQUssUUFBUSxRQUFRLEdBQUc7QUFDaEQsZUFBTyxJQUFJLElBQUk7QUFBQSxVQUNiLFNBQVMsSUFBSTtBQUFBLFVBQ2IsR0FBRyxJQUFJO0FBQUEsVUFDUCxHQUFHLElBQUk7QUFBQSxVQUNQLFVBQVUsSUFBSSxTQUFTLElBQUksUUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFBQSxRQUNoRTtBQUFBLE1BQ0Y7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUFBLElBRUEsb0JBQW9CLGNBQWM7QUFDaEMsVUFBSTtBQUNGLGNBQU0sU0FBUyxLQUFLLE1BQU0sWUFBWTtBQUN0Qyw4QkFBYyxLQUFLLE1BQU07QUFDekIsYUFBSyxrQkFBa0IsTUFBTTtBQUFBLE1BQy9CLFNBQVMsS0FBSztBQUNaLGdCQUFRLE1BQU0sMkNBQTJDLEdBQUc7QUFDNUQsY0FBTSw2QkFBNkI7QUFBQSxNQUNyQztBQUFBLElBQ0Y7QUFBQSxJQUVBLFdBQVcsT0FBTyxTQUFTO0FBQ3pCLFVBQUksSUFBSSxTQUFTLE1BQU0sVUFBVSxHQUFFLENBQUMsR0FBRSxFQUFFO0FBQ3hDLFVBQUksSUFBSSxTQUFTLE1BQU0sVUFBVSxHQUFFLENBQUMsR0FBRSxFQUFFO0FBQ3hDLFVBQUksSUFBSSxTQUFTLE1BQU0sVUFBVSxHQUFFLENBQUMsR0FBRSxFQUFFO0FBRXhDLFVBQUksU0FBUyxLQUFLLE1BQU0sV0FBVyxHQUFHO0FBQ3RDLFVBQUksU0FBUyxLQUFLLE1BQU0sV0FBVyxHQUFHO0FBQ3RDLFVBQUksU0FBUyxLQUFLLE1BQU0sV0FBVyxHQUFHO0FBRXRDLFVBQUssSUFBRSxNQUFLLElBQUU7QUFDZCxVQUFLLElBQUUsTUFBSyxJQUFFO0FBQ2QsVUFBSyxJQUFFLE1BQUssSUFBRTtBQUVkLFlBQU0sS0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLFVBQVEsSUFBRyxNQUFJLEVBQUUsU0FBUyxFQUFFLElBQUUsRUFBRSxTQUFTLEVBQUU7QUFDdkUsWUFBTSxLQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsVUFBUSxJQUFHLE1BQUksRUFBRSxTQUFTLEVBQUUsSUFBRSxFQUFFLFNBQVMsRUFBRTtBQUN2RSxZQUFNLEtBQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxVQUFRLElBQUcsTUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFFLEVBQUUsU0FBUyxFQUFFO0FBRXZFLGFBQU8sTUFBSSxLQUFHLEtBQUc7QUFBQSxJQUNuQjtBQUFBLElBRUEsMEJBQTBCO0FBQ3hCLFVBQUksS0FBSyx1QkFBdUI7QUFDOUIsc0JBQWMsS0FBSyxxQkFBcUI7QUFBQSxNQUMxQztBQUNBLFdBQUssd0JBQXdCLFlBQVksTUFBTTtBQUM3QyxjQUFNLFNBQVMsU0FBUyxjQUFjLDJCQUEyQjtBQUNqRSxjQUFNLGFBQWEsS0FBSyxLQUFLLEVBQUUsT0FBTyxPQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsVUFBVTtBQUU3RSxZQUFJLENBQUMsUUFBUTtBQUNYLHFCQUFXLFFBQVEsT0FBSztBQUN0QixnQkFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLFFBQVEsVUFBVSxTQUFTLGlCQUFpQixHQUFHO0FBQ2pFLGdCQUFFLFFBQVEsVUFBVSxJQUFJLGlCQUFpQjtBQUFBLFlBQzNDO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSCxPQUFPO0FBQ0wscUJBQVcsUUFBUSxPQUFLO0FBQ3RCLGdCQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsVUFBVSxTQUFTLGlCQUFpQixHQUFHO0FBQ2hFLGdCQUFFLFFBQVEsVUFBVSxPQUFPLGlCQUFpQjtBQUFBLFlBQzlDO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0YsR0FBRyxHQUFHO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFFQSxNQUFPLHdCQUFROzs7QUNwWGYsTUFBTSxnQkFBTixNQUFvQjtBQUFBLElBQ2hCLFlBQVksU0FBUztBQUNqQixXQUFLLFVBQVU7QUFDZixXQUFLLEtBQUs7QUFBQSxJQUNkO0FBQUEsSUFFQSxPQUFPO0FBQ0gsVUFBSTtBQUNBLGNBQU0sZ0JBQWdCLGFBQWEsUUFBUSxxQkFBcUI7QUFDaEUsWUFBSSxDQUFDLGlCQUFpQixhQUFhLFFBQVEscUJBQXFCLE1BQU0sZUFBZTtBQUNqRjtBQUFBLFFBQ0o7QUFFQSxjQUFNLFlBQVk7QUFDbEIsY0FBTSxVQUFVO0FBQUEsVUFDWjtBQUFBLFFBQ0o7QUFFQSxhQUFLLFFBQVEsY0FBYyxLQUFLO0FBQUEsVUFDNUIsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFVBQ1QsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFFBQ2QsQ0FBQztBQUVELGNBQU0sV0FBVztBQUFBLFVBQ2IsUUFBUTtBQUFBLFVBQ1IsU0FBUztBQUFBLFlBQ0wsZ0JBQWdCO0FBQUEsVUFDcEI7QUFBQSxVQUNBLE1BQU0sS0FBSyxVQUFVLE9BQU87QUFBQSxRQUNoQyxDQUFDLEVBQUUsS0FBSyxjQUFZO0FBQ2hCLGNBQUksU0FBUyxJQUFJO0FBQ2IseUJBQWEsUUFBUSx1QkFBdUIsYUFBYTtBQUFBLFVBQzdELE9BQU87QUFDSCxvQkFBUSxNQUFNLHdDQUF3QyxTQUFTLFFBQVEsU0FBUyxVQUFVO0FBQUEsVUFDOUY7QUFBQSxRQUNKLENBQUMsRUFBRSxNQUFNLFdBQVM7QUFDZCxrQkFBUSxNQUFNLHVDQUF1QyxLQUFLO0FBQUEsUUFDOUQsQ0FBQztBQUFBLE1BRUwsU0FBUyxPQUFPO0FBQ1osZ0JBQVEsTUFBTSwwQkFBMEIsS0FBSztBQUFBLE1BQ2pEO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFFQSxNQUFPLHdCQUFROzs7QUMzQ2YsR0FBQyxXQUFXO0FBQ1Y7QUFFQSxVQUFNLFVBQVUsSUFBSSxzQkFBYztBQUNsQyxXQUFPLFdBQVcsRUFBRSxVQUFVLFFBQVE7QUFDdEMsWUFBUSxNQUFNO0FBRWQsUUFBSSxzQkFBYyxPQUFPO0FBRXpCLGVBQVcsTUFBTTtBQUNmLFVBQUksQ0FBQyxRQUFRLGNBQWU7QUFDNUIsY0FBUSxjQUFjLEtBQUs7QUFBQSxRQUN6QixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFDSCxHQUFHLEdBQUk7QUFFUCxhQUFTLGlCQUFpQixXQUFXLENBQUMsTUFBTTtBQUUxQyxVQUFJLEVBQUUsU0FBUyxjQUFjO0FBQzNCLGdCQUFRLE9BQU8sVUFBVTtBQUFBLE1BQzNCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFFSCxHQUFHOyIsCiAgIm5hbWVzIjogW10KfQo=
