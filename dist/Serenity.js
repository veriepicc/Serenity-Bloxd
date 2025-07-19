
// ==UserScript==
// @name         Serenity Client
// @version      1.0.0
// @description  A feature-rich client for Bloxd.io
// @author       Serenity Development
// @match        *://*.bloxd.io/*
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
/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidGVtcF9zdHlsZVBsdWdpbjpzcmNcXHN0eWxlcy5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXAnKTtcblxuOnJvb3Qge1xuICAtLXByaW1hcnk6ICM1RTcyRUI7IC8qIEEgbmljZSBtb2Rlcm4gYmx1ZSAqL1xuICAtLXByaW1hcnktZGFyazogIzRENURCRjtcbiAgLS1hY2NlbnQ6ICNFNTRCNEI7IC8qIEEgY29udHJhc3RpbmcgYWNjZW50IGNvbG9yICovXG4gIC0tcGFuZWwtYmFzZTogIzFlMjEyOTsgLyogRGVmYXVsdCBkYXJrIGJhY2tncm91bmQgY29sb3IgKi9cbiAgLS1wYW5lbC1vcGFjaXR5OiAwLjg1OyAvKiBEZWZhdWx0IG9wYWNpdHkgKi9cbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMiwgMjgsIDAuOSk7XG4gIC0tcGFuZWw6IHJnYmEoMzAsIDMzLCA0MSwgdmFyKC0tcGFuZWwtb3BhY2l0eSkpO1xuICAtLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAtLWJvcmRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KTtcbiAgLS1zaGFkb3c6IDAgMTJweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLS10ZXh0OiAjRUFFQUVBO1xuICAtLXRleHQtc2Vjb25kYXJ5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIC0tcmFkaXVzOiAxMHB4O1xuICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtLW5vdGlmaWNhdGlvbi1zdWNjZXNzLWJnOiByZ2JhKDYzLCAxNTQsIDg2LCAwLjE1KTtcbiAgLS1ub3RpZmljYXRpb24tc3VjY2Vzcy1pY29uOiAjNWNiODVjO1xuICAtLW5vdGlmaWNhdGlvbi13YXJuaW5nLWJnOiByZ2JhKDIwNSwgMTYzLCA3NCwgMC4xNSk7XG4gIC0tbm90aWZpY2F0aW9uLXdhcm5pbmctaWNvbjogI2YwYWQ0ZTtcbiAgLS1ub3RpZmljYXRpb24tZXJyb3ItYmc6IHJnYmEoMjAxLCA3OSwgNzksIDAuMTUpO1xuICAtLW5vdGlmaWNhdGlvbi1lcnJvci1pY29uOiAjZDk1MzRmO1xuICAtLW5vdGlmaWNhdGlvbi1pbmZvLWJnOiByZ2JhKDk0LCAxMTQsIDIzNSwgMC4xNSk7XG4gIC0tbm90aWZpY2F0aW9uLWluZm8taWNvbjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5zZXJlbml0eS1oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIE92ZXJsYXkgdGhhdCBjb3ZlcnMgdGhlIGVudGlyZSBzY3JlZW4gd2l0aCBoZWF2eSBibHVyICovXG4uc2VyZW5pdHktb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMiwgMTYsIDAuNik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIHotaW5kZXg6IDk5OTg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG4uc2VyZW5pdHktb3ZlcmxheS52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogTWFpbiBjb250YWluZXIgZm9yIHRoZSBVSSAqL1xuLnNlcmVuaXR5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC45NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMDsgLyogUmVtb3ZlIGdhcCBmb3IgYSBtb3JlIGludGVncmF0ZWQgbG9vayAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgei1pbmRleDogOTk5OTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgbWF4LWhlaWdodDogNzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDcwJTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG59XG5cbi5zZXJlbml0eS1jb250YWluZXI6bm90KC5zZXR0aW5ncy12aWV3LWFjdGl2ZSkgLnNlcmVuaXR5LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNykgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNjAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxNTAlIDE1MCU7XG4gIGFuaW1hdGlvbjogZmx1aWQtaGVybyA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLnNlcmVuaXR5LWNvbnRhaW5lci52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG59XG5cbi5zZXJlbml0eS1jb250YWluZXIuc2V0dGluZ3Mtdmlldy1hY3RpdmUgLnNlcmVuaXR5LXNpZGViYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIExlZnQgc2lkZWJhciB3aXRoIGNhdGVnb3JpZXMgKi9cbi5zZXJlbml0eS1zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMjgsIDM2LCAwLjUpOyAvKiBTbGlnaHRseSBkaWZmZXJlbnQgc2hhZGUgKi9cbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWxvZ28gaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlcmVuaXR5LWxvZ28gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLnNlcmVuaXR5LWNhdGVnb3J5IHtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uc2VyZW5pdHktY2F0ZWdvcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWNhdGVnb3J5LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDk0LCAxMTQsIDIzNSwgMC4zKTtcbn1cblxuLnNlcmVuaXR5LWNhdGVnb3J5LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDIwcHg7IC8qIEVuc3VyZSBpY29ucyBhbGlnbiAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLnNlcmVuaXR5LWNhdGVnb3J5LWljb24gaSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7IC8qIFJlcXVpcmVkIGZvciBGb250IEF3ZXNvbWUgc29saWQgaWNvbnMgKi9cbn1cblxuLyogUmlnaHQgY29udGVudCBhcmVhIHdpdGggbW9kdWxlcyAqL1xuLnNlcmVuaXR5LWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2VyZW5pdHktY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4uc2VyZW5pdHktY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlcmVuaXR5LWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XG59XG5cbi5zZXJlbml0eS1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnNlcmVuaXR5LXNlY3Rpb24taGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktc2VhcmNoLWJhciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5zZXJlbml0eS1zZWFyY2gtYmFyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xufVxuXG4uc2VyZW5pdHktcmlnaHQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWJ0biBpIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICB6LWluZGV4OiAxMDAwMztcbiAgd2lkdGg6IDQ4MHB4O1xuICBhbmltYXRpb246IGZhZGVJbiAwLjFzIGVhc2Utb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1oZWFkZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5zZXJlbml0eS1jb25maWctdG9nZ2xlLXNldHRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJlbml0eS1jb25maWctbWFudWFsLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1jb25maWctbWFudWFsLWFjdGlvbnMgYnV0dG9uIHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1tYW51YWwtYWN0aW9ucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi5zZXJlbml0eS1jb25maWctcG9wdXAtYm9keSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zZXJlbml0eS1jb25maWctcG9wdXAtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1hY3Rpb25zIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLyogVGhpcyB0YXJnZXRzIHRoZSBJbXBvcnQgYnV0dG9uICovXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWFjdGlvbnMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWFjdGlvbnMgYnV0dG9uOmZpcnN0LWNoaWxkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLyogVGhpcyB0YXJnZXRzIHRoZSBFeHBvcnQgYnV0dG9uICovXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWFjdGlvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1hY3Rpb25zIGJ1dHRvbjpsYXN0LWNoaWxkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXBvcHVwLWZvb3RlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJlbml0eS1jb25maWctYmFjay1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1iYWNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLnNlcmVuaXR5LW1vZHVsZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMjBweCwgMWZyKSk7XG4gIGdhcDogMThweDtcbn1cblxuLyogTW9kdWxlIGNhcmRzICovXG4uc2VyZW5pdHktbW9kdWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBwYWRkaW5nOiAxNnB4O1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VyZW5pdHktbW9kdWxlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uc2VyZW5pdHktbW9kdWxlLW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDRweDsgLyogU2xpZ2h0bHkgc21hbGxlciAqL1xuICBoZWlnaHQ6IDIycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlcmVuaXR5LXRvZ2dsZS1zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktdG9nZ2xlLXNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGxlZnQ6IDJweDtcbiAgYm90dG9tOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLnNlcmVuaXR5LW1vZHVsZS10b2dnbGUuZW5hYmxlZCAuc2VyZW5pdHktdG9nZ2xlLXNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtdG9nZ2xlLmVuYWJsZWQgLnNlcmVuaXR5LXRvZ2dsZS1zbGlkZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc2VyZW5pdHktbW9kdWxlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKiBOZXcgY29udHJvbHMgZm9yIHNldHRpbmdzIGJ1dHRvbiBuZXh0IHRvIHRoZSB0b2dnbGUgKi9cbi5zZXJlbml0eS1tb2R1bGUtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1tb2R1bGUtc2V0dGluZ3MtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2VyZW5pdHktbW9kdWxlOmhvdmVyIC5zZXJlbml0eS1tb2R1bGUtc2V0dGluZ3MtYnRuIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlcmVuaXR5LW1vZHVsZS1zZXR0aW5ncy1idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcbn1cblxuLyogSGVhZGVyIGZvciB0aGUgZGVkaWNhdGVkIHNldHRpbmdzIHZpZXcgKi9cbi5zZXJlbml0eS1zZXR0aW5ncy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5zZXJlbml0eS1iYWNrLWJ0biB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBhbmVsKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZXJlbml0eS1iYWNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLyogSFVEIEVkaXRvciBzdHlsZXMgKi9cbi5zZXJlbml0eS1odWQtZWRpdG9yLWJ0biBpIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnNlcmVuaXR5LWh1ZC1lZGl0b3Itb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMiwgMTYsIDAuOCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgei1pbmRleDogMTAwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktaHVkLWdyaWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjA1KSAxcHgsIHRyYW5zcGFyZW50IDFweCksXG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc2VyZW5pdHktaHVkLWRvbmUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoOTQsIDExNCwgMjM1LCAwLjQpO1xufVxuXG4uc2VyZW5pdHktaHVkLWRvbmUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLyogSFVEIFNldHRpbmdzIFBvcHVwICovXG4uc2VyZW5pdHktaHVkLXNldHRpbmdzLXBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4O1xuICB6LWluZGV4OiAxMDAwMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMXMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG59XG5cbi8qIE5ldyBoZWFkZXIgZm9yIHRoZSBIVUQgc2V0dGluZ3MgcG9wdXAgKi9cbi5zZXJlbml0eS1odWQtcG9wdXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNlcmVuaXR5LWh1ZC1wb3B1cC1jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlcmVuaXR5LWh1ZC1wb3B1cC1jbG9zZS1idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5zZXJlbml0eS1odWQtcG9wdXAtYm9keSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1odWQtcG9wdXAtZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5zZXJlbml0eS1odWQtcG9wdXAtcmVzZXQtYnRuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG5cbi5zZXJlbml0eS1odWQtcG9wdXAtcmVzZXQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1wb3B1cC1mb290ZXIge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWJhY2stYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5zZXJlbml0eS1jb25maWctYmFjay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi8qIENvbXBhY3Qgc3R5bGVzIGZvciBzZXR0aW5ncyBpbnNpZGUgdGhlIEhVRCBwb3B1cCAqL1xuLnNlcmVuaXR5LWh1ZC1zZXR0aW5ncy1wb3B1cCAuc2VyZW5pdHktc2V0dGluZyB7XG4gIHBhZGRpbmc6IDRweCAycHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zZXJlbml0eS1odWQtc2V0dGluZ3MtcG9wdXAgLnNlcmVuaXR5LXNldHRpbmctbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zZXJlbml0eS1odWQtc2V0dGluZ3MtcG9wdXAgLnNlcmVuaXR5LXNldHRpbmctZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VyZW5pdHktbW9kdWxlLXNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uc2VyZW5pdHktc2V0dGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LXNldHRpbmc6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zZXJlbml0eS1zZXR0aW5nLWluZm8ge1xuICBmbGV4OiAxO1xufVxuXG4uc2VyZW5pdHktc2V0dGluZy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLnNlcmVuaXR5LXNldHRpbmctZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG1hcmdpbjogNHB4IDAgMCAwO1xufVxuXG4uc2VyZW5pdHktc2V0dGluZy1jb250cm9sIHtcbiAgZmxleC1iYXNpczogNDAlO1xufVxuXG4vKiBHZW5lcmljIGlucHV0IHN0eWxlcyAqL1xuLnNlcmVuaXR5LXNlbGVjdCwgLnNlcmVuaXR5LXRleHQtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uc2VyZW5pdHktc2VsZWN0OmZvY3VzLCAuc2VyZW5pdHktdGV4dC1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbn1cblxuLyogQ2hlY2tib3ggc3BlY2lmaWMgc3R5bGVzICovXG4uc2VyZW5pdHktY2hlY2tib3gge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5zZXJlbml0eS1jaGVja2JveDpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLnNlcmVuaXR5LWNoZWNrYm94OmNoZWNrZWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcdTI3MTMnO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vKiBTbGlkZXIgc3BlY2lmaWMgc3R5bGVzICovXG4uc2VyZW5pdHktc2xpZGVyIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbn1cblxuLnNlcmVuaXR5LXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFja2dyb3VuZCk7XG59XG5cbi5zZXJlbml0eS1zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQpO1xufVxuXG4vKiBDdXN0b20gQ29sb3IgUGlja2VyIHdpdGggQWxwaGEgU3VwcG9ydCAqL1xuLnNlcmVuaXR5LWNvbG9yLXBpY2tlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uc2VyZW5pdHktY29sb3Itc3dhdGNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIENoZWNrZXJib2FyZCBiYWNrZ3JvdW5kIHRvIHNob3cgdHJhbnNwYXJlbmN5ICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IFxuICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzMzMyAyNSUsIHRyYW5zcGFyZW50IDI1JSksIFxuICAgIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMzMzMgMjUlLCB0cmFuc3BhcmVudCAyNSUpLCBcbiAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDc1JSwgIzMzMyA3NSUpLCBcbiAgICBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB0cmFuc3BhcmVudCA3NSUsICMzMzMgNzUlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMnB4IDEycHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMCA2cHgsIDZweCAtNnB4LCAtNnB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VyZW5pdHktY29sb3Itc3dhdGNoOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cblxuLnNlcmVuaXR5LWNvbG9yLXBvcHVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDA1OyAvKiBBYm92ZSBvdGhlciBVSSAqL1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuLnNlcmVuaXR5LWNvbG9yLXBvcHVwIGlucHV0W3R5cGU9XCJjb2xvclwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZXJlbml0eS1jb2xvci1wb3B1cCBpbnB1dFt0eXBlPVwiY29sb3JcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktY29sb3ItcG9wdXAgaW5wdXRbdHlwZT1cImNvbG9yXCJdOjotbW96LWNvbG9yLXN3YXRjaCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWNvbG9yLXBvcHVwIC5zZXJlbml0eS1zbGlkZXIge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIENvbG9yIFBpY2tlciBzcGVjaWZpYyBzdHlsZXMgKi9cbi5zZXJlbml0eS1jb2xvci1waWNrZXIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VyZW5pdHktY29sb3ItcGlja2VyOjotd2Via2l0LWNvbG9yLXN3YXRjaCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc2VyZW5pdHktY29sb3ItcGlja2VyOjotbW96LWNvbG9yLXN3YXRjaCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY3BzLWNvdW50ZXItZGlzcGxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5NztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5zZXJlbml0eS1pbnRlcmZhY2UtZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNlcmVuaXR5LWludGVyZmFjZS1sb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLCB2YXIoLS1wcmltYXJ5KSk7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNlcmVuaXR5LWludGVyZmFjZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJlbml0eS1pbnRlcmZhY2UtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IsIHZhcigtLXByaW1hcnkpKTtcbn1cblxuLnNlcmVuaXR5LWludGVyZmFjZS1nYW1lbW9kZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zZXJlbml0eS1pbnRlcmZhY2UtbG9iYnkge1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi8qIENoYXQgTW9kdWxlIFN0eWxlcyAqL1xuLnNlcmVuaXR5LWNoYXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzUwcHg7XG4gIG1heC13aWR0aDogMjUlO1xuICB6LWluZGV4OiA5OTk2O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5zZXJlbml0eS1jaGF0LW1lc3NhZ2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXJlbml0eS1jaGF0LW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAycHggMDtcbiAgZm9udC1zaXplOiB2YXIoLS1jaGF0LWZvbnQtc2l6ZSwgMTRweCk7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogOHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4uc2VyZW5pdHktbWVzc2FnZS1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zZXJlbml0eS1tZXNzYWdlLW93bi1uYW1lIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgI0U1NEI0QikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNlcmVuaXR5LW1lc3NhZ2UtdGFnIHtcbiAgY29sb3I6ICNhOTcwZTMgIWltcG9ydGFudDsgLyogQSBuaWNlIHB1cnBsZSAqL1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2VyZW5pdHktbWVzc2FnZS10aW1lc3RhbXAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5zZXJlbml0eS1jaGF0LWlucHV0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2VyZW5pdHktY2hhdC1pbnB1dCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBmb250LXNpemU6IHZhcigtLWNoYXQtZm9udC1zaXplLCAxNHB4KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uc2VyZW5pdHktY2hhdC1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi8qIEdsb2JhbCBzdHlsZXMgKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogJ0ludGVyJywgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keS5zZXJlbml0eS1uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBFbnN1cmUgdGhlIGZvbnQgaXMgbG9hZGVkICovXG5cbi8qIEtleXN0cm9rZXMgTW9kdWxlICovXG4ua2V5c3Ryb2tlcy1kaXNwbGF5IHtcbiAgLS1rZXktc2l6ZTogNTJweDtcbiAgLS1rZXktcGFkZGluZzogMnB4O1xuICAtLWtleS1yYWRpdXM6IDhweDtcbiAgLS1rZXktYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIC0ta2V5LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLS1rZXktc2hhZG93LXByZXNzZWQ6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC0ta2V5LXRyYW5zaXRpb246IGFsbCAwLjEycyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIC0tYmx1ci1pbnRlbnNpdHk6IDEwcHg7XG4gIC0ta2V5LWJnOiB2YXIoLS1wYW5lbCk7XG4gIC0ta2V5LWFjdGl2ZS1iZzogdmFyKC0tcHJpbWFyeSk7XG4gIC0ta2V5LXRleHQ6IHZhcigtLXRleHQpO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbiAgei1pbmRleDogOTk5NztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ua2V5c3Ryb2tlcy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5rZXlzdHJva2VzLWtleSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IHZhcigtLWtleS1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1rZXktc2l6ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0ta2V5LXRleHQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1rZXktcmFkaXVzKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBhbmVsKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0ta2V5LXRyYW5zaXRpb24pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWtleS1zaGFkb3cpO1xufVxuXG4ua2V5c3Ryb2tlcy1rZXk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZTtcbiAgei1pbmRleDogLTE7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWtleS1yYWRpdXMpO1xufVxuXG4ua2V5c3Ryb2tlcy1rZXkuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWtleS1zaGFkb3ctcHJlc3NlZCksIGluc2V0IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5rZXlzdHJva2VzLWtleS5hY3RpdmU6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5rZXlzdHJva2VzLWtleS5zcGFjZS1rZXkge1xuICB3aWR0aDogY2FsYyh2YXIoLS1rZXktc2l6ZSkgKiAzICsgMTBweCk7XG59XG5cbi5rZXlzdHJva2VzLXJvdy5tb3VzZS1yb3cge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5rZXlzdHJva2VzLWtleS5tb3VzZS1idXR0b24ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IGNhbGMoKHZhcigtLWtleS1zaXplKSAqIDMgKyAxMHB4IC0gNXB4KSAvIDIpO1xufVxuXG4ua2V5c3Ryb2tlcy1kaXNwbGF5Om5vdCguc2hvdy1tb3VzZSkgLm1vdXNlLXJvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5rZXlzdHJva2VzLWRpc3BsYXkubm8tYW5pbWF0aW9ucyAua2V5c3Ryb2tlcy1rZXkge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIE5vdGlmaWNhdGlvbiBTeXN0ZW0gKi9cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiAxMDAwNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBhbmVsKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGdhcDogMTJweDtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi5leGl0aW5nIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1pY29uLXdyYXBwZXIge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLWluZm8tYmcpO1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLWluZm8taWNvbik7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24taWNvbiBzdmcge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLW1lc3NhZ2UgYiB7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC43O1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1jbG9zZTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi10aW1lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1pbmZvLWljb24pO1xuICBvcGFjaXR5OiAwLjY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuXG4vKiBOb3RpZmljYXRpb24gVHlwZXMgKi9cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tc3VjY2VzcyAuc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24td3JhcHBlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1zdWNjZXNzLWJnKTsgfVxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1zdWNjZXNzIC5zZXJlbml0eS1ub3RpZmljYXRpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24tc3VjY2Vzcy1pY29uKTsgfVxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1zdWNjZXNzIC5zZXJlbml0eS1ub3RpZmljYXRpb24tdGltZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24tc3VjY2Vzcy1pY29uKTsgfVxuXG4uc2VyZW5pdHktbm90aWZpY2F0aW9uLXdhcm5pbmcgLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1pY29uLXdyYXBwZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24td2FybmluZy1iZyk7IH1cbi5zZXJlbml0eS1ub3RpZmljYXRpb24td2FybmluZyAuc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24geyBjb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLXdhcm5pbmctaWNvbik7IH1cbi5zZXJlbml0eS1ub3RpZmljYXRpb24td2FybmluZyAuc2VyZW5pdHktbm90aWZpY2F0aW9uLXRpbWVyIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLXdhcm5pbmctaWNvbik7IH1cblxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1lcnJvciAuc2VyZW5pdHktbm90aWZpY2F0aW9uLWljb24td3JhcHBlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1lcnJvci1iZyk7IH1cbi5zZXJlbml0eS1ub3RpZmljYXRpb24tZXJyb3IgLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1lcnJvci1pY29uKTsgfVxuLnNlcmVuaXR5LW5vdGlmaWNhdGlvbi1lcnJvciAuc2VyZW5pdHktbm90aWZpY2F0aW9uLXRpbWVyIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLWVycm9yLWljb24pOyB9XG5cbi8qIEFuaW1hdGlvbnMgKi9cbkBrZXlmcmFtZXMgc2VyZW5pdHktbm90aWZpY2F0aW9uLWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2VyZW5pdHktbm90aWZpY2F0aW9uLW91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxufVxuXG4vKiBBcnJheUxpc3QgTW9kdWxlIC0gdjIgKi9cbi5zZXJlbml0eS1hcnJheWxpc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk1O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnNlcmVuaXR5LWFycmF5bGlzdC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFuZWwpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7IC8qIE1ha2Ugc3BhY2UgZm9yIGJvcmRlciAqL1xufVxuXG4uc2VyZW5pdHktYXJyYXlsaXN0LWJvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNHB4O1xufVxuXG4uc2VyZW5pdHktYXJyYXlsaXN0LWNvbnRhaW5lci53aXRoLXNoYWRvdyAuc2VyZW5pdHktYXJyYXlsaXN0LWl0ZW0ge1xuICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC42KTtcbn1cblxuLyogTmV3IENvbmZpZyBTY3JlZW4gU3R5bGVzICovXG4uc2VyZW5pdHktY29uZmlnLXNjcmVlbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRhYiB7XG4gICAgcGFkZGluZzogOHB4IDE4cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5zZXJlbml0eS1jb25maWctdGFiLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDk0LCAxMTQsIDIzNSwgMC4zKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1jbG9zZS1idG4ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1jbG9zZS1idG46aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG59XG5cbi5zZXJlbml0eS1jb25maWctY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNlcmVuaXR5LXBsYWNlaG9sZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBUaGVtZSBFZGl0b3IgU3R5bGVzICovXG4uc2VyZW5pdHktdGhlbWUtZWRpdG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4uc2VyZW5pdHktc2VjdGlvbi1zdWJoZWFkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2VyZW5pdHktc3ViaGVhZGVyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5zZXJlbml0eS1zdWJoZWFkZXItc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uc2VyZW5pdHktdGhlbWUtY29udHJvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VyZW5pdHktdGhlbWUtY29sb3ItcGlja2VyIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZXJlbml0eS10aGVtZS1jb2xvci1waWNrZXI6Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLnNlcmVuaXR5LXRoZW1lLWNvbG9yLXBpY2tlcjo6LW1vei1jb2xvci1zd2F0Y2gge1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5zZXJlbml0eS10aGVtZXMtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMjBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4uc2VyZW5pdHktdGhlbWUtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5zZXJlbml0eS10aGVtZS1jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlcmVuaXR5LXRoZW1lLXByZXZpZXcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG5cbi8qIE5ldyBDb25maWcgU2NyZWVuIFN0eWxlcyAqL1xuLnNlcmVuaXR5LWNvbmZpZy1zY3JlZW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VyZW5pdHktY29uZmlnLXRhYnMtdmVydGljYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5zZXJlbml0eS1jb25maWctdGFiIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5zZXJlbml0eS1jb25maWctdGFiLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDk0LCAxMTQsIDIzNSwgMC4zKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10YWItY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWNvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIENvbmZpZyBFZGl0b3IgU3R5bGVzICovXG4uc2VyZW5pdHktY29uZmlnLWVkaXRvciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiA0MHB4O1xufVxuXG4uc2VyZW5pdHktY29uZmlnLWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjVweDtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy1jb250cm9scy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNlcmVuaXR5LWNvbmZpZy10b2dnbGUtc2V0dGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5zZXJlbml0eS1jb25maWctbWFudWFsLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5zZXJlbml0eS1idG4ge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbCk7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uc2VyZW5pdHktYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlcmVuaXR5LWJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VyZW5pdHktYnRuLXByaW1hcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG59XG5cbi5zZXJlbml0eS1pbXBvcnQtZXhwb3J0LWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5zZXJlbml0eS1pbXBvcnQtZXhwb3J0IHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc2VyZW5pdHktaW1wb3J0LWV4cG9ydC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4vKiBUaGVtZSBFZGl0b3IgU3R5bGVzICovXG4uc2VyZW5pdHktdGhlbWUtZWRpdG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4vKiBIb3RiYXIgTW9kdWxlIFN0eWxlcyAqL1xuLnNlcmVuaXR5LWhvdGJhci13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7IC8qIEFkZCBzb21lIHNwYWNlIGJldHdlZW4gYXVyYSBiYXIgYW5kIGhvdGJhciAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2VyZW5pdHktaG90YmFyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uc2VyZW5pdHktaG90YmFyLWZpbGxlciB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1heC13aWR0aDogMjBweDtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogdmFyKC0taG90YmFyLXNsb3Qtc3BhY2luZyk7XG59XG5cbi5zZXJlbml0eS1ob3RiYXItc2xvdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiB2YXIoLS1ob3RiYXItc2xvdC1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWhvdGJhci1zbG90LXNpemUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLW91dDtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1zbG90LnNlbGVjdGVkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5zZXJlbml0eS1ob3RiYXItaXRlbS1pbWcge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcbn1cblxuLnNlcmVuaXR5LXNsb3QtbnVtYmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAycHg7XG4gICAgcmlnaHQ6IDRweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4ICMwMDA7XG59XG5cbi5zZXJlbml0eS1zbG90LWFtb3VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjMDAwO1xufVxuXG4uc2VyZW5pdHktaG90YmFyLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1idXR0b24taWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNlcmVuaXR5LWhvdGJhci1rZXktaGVscGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMTJweDtcbiAgICByaWdodDogLThweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaG90YmFyLXN0eWxlLWNvbXBhY3QgLnNlcmVuaXR5LWhvdGJhci1zbG90IHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luOiAwIDFweCAhaW1wb3J0YW50O1xufVxuXG4uaG90YmFyLXN0eWxlLWNvbXBhY3QgLnNlcmVuaXR5LWhvdGJhci1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmhvdGJhci1zdHlsZS1tb2Rlcm4gLnNlcmVuaXR5LWhvdGJhci1zbG90IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgMzAsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG59XG5cbi5ob3RiYXItc3R5bGUtbW9kZXJuIC5zZXJlbml0eS1ob3RiYXItc2xvdC5zZWxlY3RlZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSg5NCwgMTE0LCAyMzUsIDAuMyk7XG59XG5cbi5ob3RiYXItc3R5bGUtbW9kZXJuIC5zZXJlbml0eS1ob3RiYXItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMiwgMzAsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4vKiBBdXJhIEJhciBTdHlsZXMgKi9cbi5zZXJlbml0eS1hdXJhLWJhciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VyZW5pdHktYXVyYS1iYXItYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNlcmVuaXR5LWF1cmEtYmFyLXByb2dyZXNzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnNlcmVuaXR5LWF1cmEtYmFyLXRleHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggIzAwMDtcbn1cblxuLyogRmx1aWQgSGVybyBBbmltYXRpb24gKi9cbkBrZXlmcmFtZXMgZmx1aWQtaGVybyB7XG4gIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlOyB9XG4gIDUwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7IH1cbn1cblxuLnNlcmVuaXR5LXRoZW1lLXBhbmVsLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlcmVuaXR5LXRoZW1lLWNvbnRyb2wtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbn1cblxuLnNlcmVuaXR5LXRoZW1lLWNvbnRyb2wtZ3JvdXAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFFQTtBQUNFLGFBQVc7QUFDWCxrQkFBZ0I7QUFDaEIsWUFBVTtBQUNWLGdCQUFjO0FBQ2QsbUJBQWlCO0FBQ2pCLGdCQUFjLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDL0IsV0FBUyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUk7QUFDOUIsV0FBUyxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQzdCLFlBQVUsS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUM5QixZQUFVLEVBQUUsS0FBSyxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDcEMsVUFBUTtBQUNSLG9CQUFrQixLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3RDLFlBQVU7QUFDVixnQkFBYyxJQUFJLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtBQUNsRCw2QkFBMkIsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtBQUM3QywrQkFBNkI7QUFDN0IsNkJBQTJCLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7QUFDOUMsK0JBQTZCO0FBQzdCLDJCQUF5QixLQUFLLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQzNDLDZCQUEyQjtBQUMzQiwwQkFBd0IsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUMzQyw0QkFBMEIsSUFBSTtBQUNoQztBQUVBLENBQUM7QUFDQyxXQUFTO0FBQ1g7QUFHQSxDQUFDO0FBQ0MsWUFBVTtBQUNWLE9BQUs7QUFDTCxRQUFNO0FBQ04sU0FBTztBQUNQLFVBQVE7QUFDUixvQkFBa0IsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNuQyxtQkFBaUIsS0FBSztBQUN0QiwyQkFBeUIsS0FBSztBQUM5QixXQUFTO0FBQ1QsV0FBUztBQUNULGNBQVksUUFBUSxLQUFLO0FBQzNCO0FBRUEsQ0FkQyxnQkFjZ0IsQ0FBQztBQUNoQixXQUFTO0FBQ1g7QUFHQSxDQUFDO0FBQ0MsWUFBVTtBQUNWLE9BQUs7QUFDTCxRQUFNO0FBQ04sYUFBVyxVQUFVLElBQUksRUFBRSxNQUFNLE1BQU07QUFDdkMsV0FBUztBQUNULE9BQUs7QUFDTCxvQkFBa0IsSUFBSTtBQUN0QixVQUFRLElBQUksTUFBTSxJQUFJO0FBQ3RCLGlCQUFlLElBQUk7QUFDbkIsY0FBWSxJQUFJO0FBQ2hCLFdBQVM7QUFDVCxTQUFPLElBQUk7QUFDWCxXQUFTO0FBQ1QsY0FBWSxJQUFJO0FBQ2hCLGNBQVk7QUFDWixZQUFVO0FBQ1YsU0FBTztBQUNQLGFBQVc7QUFDYjtBQUVBLENBckJDLGtCQXFCa0IsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0FBQzlDO0FBQUEsSUFBa0I7QUFBQSxNQUFnQixRQUFRLEdBQUcsTUFBM0I7QUFBQSxNQUFtQyxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBN0Q7QUFBQSxNQUFpRSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7QUFDMUcsbUJBQWlCLEtBQUs7QUFDdEIsYUFBVyxXQUFXLEdBQUcsWUFBWTtBQUN2QztBQUVBLENBM0JDLGtCQTJCa0IsQ0FoQ0Q7QUFpQ2hCLFdBQVM7QUFDVCxhQUFXLFVBQVUsSUFBSSxFQUFFLE1BQU0sTUFBTTtBQUN6QztBQUVBLENBaENDLGtCQWdDa0IsQ0FYTSxxQkFXZ0IsQ0FBQztBQUN0QyxXQUFTO0FBQ2I7QUFHQSxDQUwwQztBQU14QyxXQUFTO0FBQ1Qsa0JBQWdCO0FBQ2hCLGFBQVc7QUFDWCxvQkFBa0IsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNuQyxXQUFTO0FBQ1QsZ0JBQWMsSUFBSSxNQUFNLElBQUk7QUFDOUI7QUFFQSxDQUFDO0FBQ0MsaUJBQWU7QUFDZixjQUFZO0FBQ1osa0JBQWdCO0FBQ2hCLGlCQUFlLElBQUksTUFBTSxJQUFJO0FBQy9CO0FBRUEsQ0FQQyxjQU9jO0FBQ2IsVUFBUTtBQUNSLGFBQVc7QUFDWCxlQUFhO0FBQ2Isa0JBQWdCO0FBQ2hCLFNBQU8sSUFBSTtBQUNYLGVBQWEsRUFBRSxFQUFFLEtBQUssSUFBSTtBQUM1QjtBQUVBLENBaEJDLGNBZ0JjO0FBQ2IsYUFBVztBQUNYLGtCQUFnQjtBQUNoQixrQkFBZ0I7QUFDaEIsU0FBTyxJQUFJO0FBQ2I7QUFFQSxDQUFDO0FBQ0MsV0FBUyxLQUFLO0FBQ2QsaUJBQWU7QUFDZixpQkFBZTtBQUNmLFVBQVE7QUFDUixjQUFZLElBQUk7QUFDaEIsV0FBUztBQUNULGVBQWE7QUFDYixlQUFhO0FBQ2IsYUFBVztBQUNYLFlBQVU7QUFDVixZQUFVO0FBQ1YsVUFBUSxJQUFJLE1BQU07QUFDcEI7QUFFQSxDQWZDLGlCQWVpQjtBQUNoQixvQkFBa0IsSUFBSTtBQUN0QixnQkFBYyxJQUFJO0FBQ3BCO0FBRUEsQ0FwQkMsaUJBb0JpQixDQUFDO0FBQ2pCLG9CQUFrQixJQUFJO0FBQ3RCLFNBQU87QUFDUCxjQUFZLEVBQUUsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDNUM7QUFFQSxDQUFDO0FBQ0MsZ0JBQWM7QUFDZCxhQUFXO0FBQ1gsU0FBTztBQUNQLGNBQVk7QUFDWixXQUFTO0FBQ1g7QUFFQSxDQVJDLHVCQVF1QjtBQUN0QixlQUFhO0FBQ2Y7QUFHQSxDQXZGZ0Q7QUF3RjlDLFFBQU07QUFDTixXQUFTO0FBQ1Qsa0JBQWdCO0FBQ2hCLGNBQVk7QUFDWixXQUFTO0FBQ1g7QUFFQSxDQS9GZ0QsZ0JBK0YvQjtBQUNmLFNBQU87QUFDVDtBQUVBLENBbkdnRCxnQkFtRy9CO0FBQ2YsY0FBWTtBQUNkO0FBRUEsQ0F2R2dELGdCQXVHL0I7QUFDZixjQUFZLElBQUk7QUFDaEIsaUJBQWU7QUFDakI7QUFFQSxDQTVHZ0QsZ0JBNEcvQix5QkFBeUI7QUFDeEMsY0FBWSxJQUFJO0FBQ2xCO0FBRUEsQ0FBQztBQUNDLGlCQUFlO0FBQ2pCO0FBRUEsQ0FBQztBQUNDLGFBQVc7QUFDWCxlQUFhO0FBQ2IsaUJBQWU7QUFDZixTQUFPLElBQUk7QUFDWCxrQkFBZ0I7QUFDaEIsaUJBQWUsSUFBSSxNQUFNLElBQUk7QUFDN0IsV0FBUztBQUNULG1CQUFpQjtBQUNqQixlQUFhO0FBQ2Y7QUFFQSxDQUFDO0FBQ0MsY0FBWSxLQUFLLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQ3ZCLFVBQVEsSUFBSSxNQUFNLElBQUk7QUFDdEIsU0FBTyxJQUFJO0FBQ1gsaUJBQWU7QUFDZixXQUFTLElBQUk7QUFDYixhQUFXO0FBQ1gsY0FBWSxJQUFJO0FBQ2hCLFNBQU87QUFDVDtBQUVBLENBWEMsbUJBV21CO0FBQ2xCLFdBQVM7QUFDVCxnQkFBYyxJQUFJO0FBQ2xCLGNBQVksS0FBSyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUN6QjtBQUVBLENBQUM7QUFDQyxXQUFTO0FBQ1QsZUFBYTtBQUNiLE9BQUs7QUFDUDtBQUVBLENBQUMsb0JBQW9CO0FBQ25CLGVBQWE7QUFDZjtBQUVBLENBQUM7QUFDQyxZQUFVO0FBQ1YsT0FBSztBQUNMLFFBQU07QUFDTixhQUFXLFVBQVUsSUFBSSxFQUFFO0FBQzNCLG9CQUFrQixJQUFJO0FBQ3RCLFVBQVEsSUFBSSxNQUFNLElBQUk7QUFDdEIsaUJBQWUsSUFBSTtBQUNuQixjQUFZLElBQUk7QUFDaEIsV0FBUztBQUNULFNBQU87QUFDUCxhQUFXLE9BQU8sS0FBSztBQUN2QixXQUFTO0FBQ1Qsa0JBQWdCO0FBQ2xCO0FBRUEsQ0FBQztBQUNDLFdBQVMsS0FBSztBQUNkLGVBQWE7QUFDYixpQkFBZSxJQUFJLE1BQU0sSUFBSTtBQUM3QixjQUFZO0FBQ2Q7QUFFQSxDQVBDLDZCQU82QjtBQUM1QixjQUFZO0FBQ1osVUFBUTtBQUNSLFNBQU8sSUFBSTtBQUNYLGFBQVc7QUFDWCxVQUFRO0FBQ1Y7QUFFQSxDQUFDO0FBQ0MsV0FBUztBQUNULFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNQO0FBRUEsQ0FBQztBQUNDLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNMLGlCQUFlLElBQUksTUFBTSxJQUFJO0FBQzdCLGtCQUFnQjtBQUNsQjtBQUVBLENBQUM7QUFDQyxXQUFTO0FBQ1QsbUJBQWlCO0FBQ2pCLGVBQWE7QUFDZjtBQUVBLENBQUM7QUFDQyxXQUFTO0FBQ1QsT0FBSztBQUNQO0FBRUEsQ0FMQywrQkFLK0I7QUFDOUIsYUFBVztBQUNYLFdBQVMsSUFBSTtBQUNiLGlCQUFlO0FBQ2YsVUFBUSxJQUFJLE1BQU0sSUFBSTtBQUN0QixvQkFBa0IsSUFBSTtBQUN0QixTQUFPLElBQUk7QUFDWCxVQUFRO0FBQ1IsZUFBYTtBQUNiLGNBQVksSUFBSTtBQUNsQjtBQUVBLENBakJDLCtCQWlCK0IsTUFBTTtBQUNwQyxvQkFBa0IsSUFBSTtBQUN4QjtBQUVBLENBMUNDLDJCQTBDMkI7QUFDMUIsU0FBTztBQUNQLGNBQVk7QUFDWixVQUFRO0FBQ1IsY0FBWSxLQUFLLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQ3ZCLFVBQVEsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDdEMsU0FBTyxJQUFJO0FBQ1gsaUJBQWU7QUFDZixXQUFTLEtBQUs7QUFDZCxhQUFXO0FBQ1gsY0FBWTtBQUNkO0FBRUEsQ0FBQztBQUNDLFdBQVM7QUFDVCxPQUFLO0FBQ1A7QUFFQSxDQUxDLDhCQUs4QjtBQUM3QixXQUFTLElBQUk7QUFDYixpQkFBZTtBQUNmLFVBQVE7QUFDUixVQUFRO0FBQ1IsZUFBYTtBQUNiLGNBQVksSUFBSTtBQUNsQjtBQUdBLENBZkMsOEJBZThCLE1BQU07QUFDbkMsb0JBQWtCLElBQUk7QUFDdEIsU0FBTztBQUNUO0FBRUEsQ0FwQkMsOEJBb0I4QixNQUFNLFlBQVk7QUFDL0Msb0JBQWtCLElBQUk7QUFDeEI7QUFHQSxDQXpCQyw4QkF5QjhCLE1BQU07QUFDbkMsb0JBQWtCLElBQUk7QUFDdEIsU0FBTyxJQUFJO0FBQ1gsVUFBUSxJQUFJLE1BQU0sSUFBSTtBQUN4QjtBQUVBLENBL0JDLDhCQStCOEIsTUFBTSxXQUFXO0FBQzlDLG9CQUFrQixJQUFJO0FBQ3hCO0FBRUEsQ0FBQztBQUNDLFdBQVM7QUFDVCxjQUFZLElBQUksTUFBTSxJQUFJO0FBQzFCLFdBQVM7QUFDVCxtQkFBaUI7QUFDakIsZUFBYTtBQUNmO0FBRUEsQ0FBQztBQUNDLG9CQUFrQixJQUFJO0FBQ3RCLFNBQU8sSUFBSTtBQUNYLFVBQVEsSUFBSSxNQUFNLElBQUk7QUFDdEIsV0FBUyxJQUFJO0FBQ2IsaUJBQWU7QUFDZixlQUFhO0FBQ2IsVUFBUTtBQUNSLGNBQVksSUFBSTtBQUNsQjtBQUVBLENBWEMsd0JBV3dCO0FBQ3ZCLG9CQUFrQixJQUFJO0FBQ3hCO0FBRUEsQ0FBQztBQUNDLFdBQVM7QUFDVCx5QkFBdUIsT0FBTyxTQUFTLEVBQUUsT0FBTyxLQUFLLEVBQUU7QUFDdkQsT0FBSztBQUNQO0FBR0EsQ0FBQztBQUNDLG9CQUFrQixJQUFJO0FBQ3RCLGlCQUFlLElBQUk7QUFDbkIsV0FBUztBQUNULGNBQVksSUFBSTtBQUNoQixVQUFRLElBQUksTUFBTSxJQUFJO0FBQ3RCLFlBQVU7QUFDVixZQUFVO0FBQ1o7QUFFQSxDQVZDLGVBVWU7QUFDZCxhQUFXLFdBQVc7QUFDdEIsY0FBWSxFQUFFLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3JDLGdCQUFjLElBQUk7QUFDcEI7QUFFQSxDQUFDO0FBQ0MsV0FBUztBQUNULG1CQUFpQjtBQUNqQixlQUFhO0FBQ2IsaUJBQWU7QUFDakI7QUFFQSxDQUFDO0FBQ0MsZUFBYTtBQUNiLGFBQVc7QUFDYjtBQUVBLENBQUM7QUFDQyxZQUFVO0FBQ1YsU0FBTztBQUNQLFVBQVE7QUFDUixVQUFRO0FBQ1Y7QUFFQSxDQUFDO0FBQ0MsWUFBVTtBQUNWLFVBQVE7QUFDUixPQUFLO0FBQ0wsUUFBTTtBQUNOLFNBQU87QUFDUCxVQUFRO0FBQ1Isb0JBQWtCLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsY0FBWSxJQUFJO0FBQ2hCLGlCQUFlO0FBQ2YsVUFBUSxJQUFJLE1BQU0sSUFBSTtBQUN4QjtBQUVBLENBYkMsc0JBYXNCO0FBQ3JCLFlBQVU7QUFDVixXQUFTO0FBQ1QsVUFBUTtBQUNSLFNBQU87QUFDUCxRQUFNO0FBQ04sVUFBUTtBQUNSLG9CQUFrQixJQUFJO0FBQ3RCLGNBQVksSUFBSTtBQUNoQixpQkFBZTtBQUNmLGNBQVksRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUNuQztBQUVBLENBakNDLHNCQWlDc0IsQ0FBQyxRQUFRLENBMUIvQjtBQTJCQyxvQkFBa0IsSUFBSTtBQUN0QixnQkFBYyxJQUFJO0FBQ3BCO0FBRUEsQ0F0Q0Msc0JBc0NzQixDQUxDLFFBS1EsQ0EvQi9CLHNCQStCc0Q7QUFDckQsYUFBVyxXQUFXO0FBQ3RCLG9CQUFrQjtBQUNwQjtBQUVBLENBQUM7QUFDQyxhQUFXO0FBQ1gsU0FBTyxJQUFJO0FBQ1gsZUFBYTtBQUNmO0FBR0EsQ0FBQztBQUNDLFdBQVM7QUFDVCxlQUFhO0FBQ2IsT0FBSztBQUNQO0FBRUEsQ0FBQztBQUNDLGNBQVk7QUFDWixVQUFRO0FBQ1IsU0FBTyxJQUFJO0FBQ1gsVUFBUTtBQUNSLFdBQVM7QUFDVCxpQkFBZTtBQUNmLGNBQVksSUFBSTtBQUNoQixhQUFXO0FBQ2I7QUFFQSxDQS9GQyxlQStGZSxPQUFPLENBWHRCO0FBWUMsV0FBUztBQUNYO0FBRUEsQ0FmQyw0QkFlNEI7QUFDM0IsU0FBTyxJQUFJO0FBQ1gsb0JBQWtCLElBQUk7QUFDeEI7QUFHQSxDQUFDO0FBQ0MsV0FBUztBQUNULGVBQWE7QUFDYixPQUFLO0FBQ0wsYUFBVztBQUNYLGVBQWE7QUFDYixpQkFBZTtBQUNmLFNBQU8sSUFBSTtBQUNYLGtCQUFnQjtBQUNoQixpQkFBZSxJQUFJLE1BQU0sSUFBSTtBQUMvQjtBQUVBLENBQUM7QUFDQyxjQUFZLElBQUk7QUFDaEIsVUFBUSxJQUFJLE1BQU0sSUFBSTtBQUN0QixTQUFPLElBQUk7QUFDWCxXQUFTLElBQUk7QUFDYixpQkFBZTtBQUNmLFVBQVE7QUFDUixjQUFZLElBQUk7QUFDaEIsYUFBVztBQUNYLGVBQWE7QUFDZjtBQUVBLENBWkMsaUJBWWlCO0FBQ2hCLGNBQVksSUFBSTtBQUNoQixnQkFBYyxJQUFJO0FBQ3BCO0FBR0EsQ0FBQyx3QkFBd0I7QUFDdkIsZUFBYTtBQUNmO0FBRUEsQ0FBQztBQUNDLFlBQVU7QUFDVixPQUFLO0FBQ0wsUUFBTTtBQUNOLFNBQU87QUFDUCxVQUFRO0FBQ1Isb0JBQWtCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDbkMsbUJBQWlCLEtBQUs7QUFDdEIsV0FBUztBQUNULFdBQVM7QUFDVCxtQkFBaUI7QUFDakIsZUFBYTtBQUNmO0FBRUEsQ0FBQztBQUNDLFlBQVU7QUFDVixPQUFLO0FBQ0wsUUFBTTtBQUNOLFNBQU87QUFDUCxVQUFRO0FBQ1I7QUFBQSxJQUNFLGdCQUFnQixLQUFLLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLE1BQU0sR0FBRyxFQUFFLFlBQVksSUFBSTtBQUFBLElBQzVEO0FBQUEsTUFBZ0IsS0FBSztBQUFBLE1BQUUsS0FBSyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxNQUFNLEdBQUc7QUFBQSxNQUFFLFlBQVk7QUFDakUsbUJBQWlCLEtBQUs7QUFDdEIsV0FBUztBQUNYO0FBRUEsQ0FBQztBQUNDLFlBQVU7QUFDVixVQUFRO0FBQ1Isb0JBQWtCLElBQUk7QUFDdEIsU0FBTztBQUNQLFVBQVE7QUFDUixXQUFTLEtBQUs7QUFDZCxpQkFBZTtBQUNmLGFBQVc7QUFDWCxlQUFhO0FBQ2IsVUFBUTtBQUNSLGNBQVksSUFBSTtBQUNoQixjQUFZLEVBQUUsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDNUM7QUFFQSxDQWZDLHFCQWVxQjtBQUNwQixvQkFBa0IsSUFBSTtBQUN4QjtBQUdBLENBQUM7QUFDQyxZQUFVO0FBQ1Ysb0JBQWtCLElBQUk7QUFDdEIsVUFBUSxJQUFJLE1BQU0sSUFBSTtBQUN0QixpQkFBZTtBQUNmLFdBQVM7QUFDVCxXQUFTO0FBQ1QsV0FBUztBQUNULGtCQUFnQjtBQUNoQixPQUFLO0FBQ0wsYUFBVztBQUNYLGNBQVksSUFBSTtBQUNoQixhQUFXLE9BQU8sS0FBSztBQUN6QjtBQUVBLFdBclZhO0FBc1ZYO0FBQU8sYUFBUztBQUFHLGVBQVcsTUFBTTtBQUFPO0FBQzNDO0FBQUssYUFBUztBQUFHLGVBQVcsTUFBTTtBQUFJO0FBQ3hDO0FBR0EsQ0FBQztBQUNDLFdBQVM7QUFDVCxtQkFBaUI7QUFDakIsZUFBYTtBQUNiLFdBQVM7QUFDVCxvQkFBa0IsS0FBSyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUM3QixpQkFBZSxJQUFJLE1BQU0sSUFBSTtBQUM3QixlQUFhO0FBQ2IsYUFBVztBQUNiO0FBRUEsQ0FBQztBQUNDLGNBQVk7QUFDWixVQUFRO0FBQ1IsU0FBTyxJQUFJO0FBQ1gsYUFBVztBQUNYLGVBQWE7QUFDYixVQUFRO0FBQ1Y7QUFFQSxDQVRDLDRCQVM0QjtBQUMzQixTQUFPLElBQUk7QUFDYjtBQUVBLENBQUM7QUFDQyxXQUFTO0FBQ1g7QUFFQSxDQUFDO0FBQ0MsV0FBUztBQUNULGNBQVksSUFBSSxNQUFNLElBQUk7QUFDMUIsV0FBUztBQUNULG1CQUFpQjtBQUNuQjtBQUVBLENBQUM7QUFDQyxjQUFZLElBQUk7QUFDaEIsU0FBTztBQUNQLFVBQVE7QUFDUixXQUFTLElBQUk7QUFDYixpQkFBZSxJQUFJO0FBQ25CLFVBQVE7QUFDUixjQUFZLGlCQUFpQjtBQUMvQjtBQUVBLENBVkMsNEJBVTRCO0FBQzNCLGNBQVksSUFBSTtBQUNsQjtBQUVBLENBOVJDO0FBK1JDLFdBQVM7QUFDVCxjQUFZLElBQUksTUFBTSxJQUFJO0FBQzFCLFdBQVM7QUFDVCxtQkFBaUI7QUFDakIsZUFBYTtBQUNmO0FBRUEsQ0E5UkM7QUErUkMsb0JBQWtCLElBQUk7QUFDdEIsU0FBTyxJQUFJO0FBQ1gsVUFBUSxJQUFJLE1BQU0sSUFBSTtBQUN0QixXQUFTLElBQUk7QUFDYixpQkFBZTtBQUNmLGVBQWE7QUFDYixVQUFRO0FBQ1IsY0FBWSxJQUFJO0FBQ2xCO0FBRUEsQ0F6U0Msd0JBeVN3QjtBQUN2QixvQkFBa0IsSUFBSTtBQUN4QjtBQUdBLENBOUZDLDRCQThGNEIsQ0FBQztBQUM1QixXQUFTLElBQUk7QUFDYixpQkFBZTtBQUNqQjtBQUVBLENBbkdDLDRCQW1HNEIsQ0FBQztBQUM1QixhQUFXO0FBQ2I7QUFFQSxDQXZHQyw0QkF1RzRCLENBQUM7QUFDNUIsV0FBUztBQUNYO0FBRUEsQ0FBQztBQUNDLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNQO0FBRUEsQ0FuQjhCO0FBb0I1QixXQUFTO0FBQ1QsbUJBQWlCO0FBQ2pCLGVBQWE7QUFDYixXQUFTLEtBQUs7QUFDZCxpQkFBZSxJQUFJLE1BQU0sSUFBSTtBQUMvQjtBQUVBLENBM0I4QixnQkEyQmI7QUFDZixpQkFBZTtBQUNqQjtBQUVBLENBQUM7QUFDQyxRQUFNO0FBQ1I7QUFFQSxDQTlCOEI7QUErQjVCLGFBQVc7QUFDWCxlQUFhO0FBQ2IsU0FBTyxJQUFJO0FBQ2I7QUFFQSxDQWhDOEI7QUFpQzVCLGFBQVc7QUFDWCxTQUFPLElBQUk7QUFDWCxVQUFRLElBQUksRUFBRSxFQUFFO0FBQ2xCO0FBRUEsQ0FBQztBQUNDLGNBQVk7QUFDZDtBQUdBLENBQUM7QUFBaUIsQ0FBQztBQUNqQixTQUFPO0FBQ1AsY0FBWSxLQUFLLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQ3ZCLFVBQVEsSUFBSSxNQUFNLElBQUk7QUFDdEIsU0FBTyxJQUFJO0FBQ1gsaUJBQWU7QUFDZixXQUFTO0FBQ1QsYUFBVztBQUNYLGNBQVksSUFBSTtBQUNsQjtBQUVBLENBWEMsZUFXZTtBQUFRLENBWEwsbUJBV3lCO0FBQzFDLFdBQVM7QUFDVCxnQkFBYyxJQUFJO0FBQ2xCLGNBQVksS0FBSyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUN6QjtBQUdBLENBQUM7QUFDQyxjQUFZO0FBQ1osc0JBQW9CO0FBQ3BCLFNBQU87QUFDUCxVQUFRO0FBQ1Isb0JBQWtCLEtBQUssQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFDN0IsVUFBUSxJQUFJLE1BQU0sSUFBSTtBQUN0QixpQkFBZTtBQUNmLFVBQVE7QUFDUixZQUFVO0FBQ1YsY0FBWSxJQUFJO0FBQ2xCO0FBRUEsQ0FiQyxpQkFhaUI7QUFDaEIsb0JBQWtCLElBQUk7QUFDdEIsZ0JBQWMsSUFBSTtBQUNwQjtBQUVBLENBbEJDLGlCQWtCaUIsUUFBUTtBQUN4QixXQUFTO0FBQ1QsYUFBVztBQUNYLFNBQU87QUFDUCxZQUFVO0FBQ1YsT0FBSztBQUNMLFFBQU07QUFDTixhQUFXLFVBQVUsSUFBSSxFQUFFO0FBQzdCO0FBR0EsQ0FBQztBQUNDLHNCQUFvQjtBQUNwQixjQUFZO0FBQ1osU0FBTztBQUNQLFVBQVE7QUFDUixjQUFZLEtBQUssQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFDdkIsaUJBQWU7QUFDZixXQUFTO0FBQ1QsY0FBWSxRQUFRO0FBQ3RCO0FBRUEsQ0FYQyxlQVdlO0FBQ2Qsc0JBQW9CO0FBQ3BCLGNBQVk7QUFDWixTQUFPO0FBQ1AsVUFBUTtBQUNSLGNBQVksSUFBSTtBQUNoQixVQUFRO0FBQ1IsaUJBQWU7QUFDZixVQUFRLElBQUksTUFBTSxJQUFJO0FBQ3hCO0FBRUEsQ0F0QkMsZUFzQmU7QUFDZCxTQUFPO0FBQ1AsVUFBUTtBQUNSLGNBQVksSUFBSTtBQUNoQixVQUFRO0FBQ1IsaUJBQWU7QUFDZixVQUFRLElBQUksTUFBTSxJQUFJO0FBQ3hCO0FBR0EsQ0FBQztBQUNDLFlBQVU7QUFDVixXQUFTO0FBQ1QsZUFBYTtBQUNiLG1CQUFpQjtBQUNuQjtBQUVBLENBQUM7QUFDQyxTQUFPO0FBQ1AsVUFBUTtBQUNSLFVBQVEsSUFBSSxNQUFNLElBQUk7QUFDdEIsaUJBQWU7QUFDZixVQUFRO0FBRVI7QUFBQSxJQUNFO0FBQUEsTUFBZ0IsS0FBSztBQUFBLE1BQUUsS0FBSyxHQUFHO0FBQUEsTUFBRSxZQUFZLElBQUk7QUFBQSxJQUNqRDtBQUFBLE1BQWdCLE1BQU07QUFBQSxNQUFFLEtBQUssR0FBRztBQUFBLE1BQUUsWUFBWSxJQUFJO0FBQUEsSUFDbEQ7QUFBQSxNQUFnQixLQUFLO0FBQUEsTUFBRSxZQUFZLEdBQUc7QUFBQSxNQUFFLEtBQUssSUFBSTtBQUFBLElBQ2pEO0FBQUEsTUFBZ0IsTUFBTTtBQUFBLE1BQUUsWUFBWSxHQUFHO0FBQUEsTUFBRSxLQUFLO0FBQ2hELG1CQUFpQixLQUFLO0FBQ3RCO0FBQUEsSUFBcUIsRUFBRSxDQUFDO0FBQUEsSUFBRSxFQUFFLEdBQUc7QUFBQSxJQUFFLElBQUksSUFBSTtBQUFBLElBQUUsS0FBSztBQUNoRCxZQUFVO0FBQ1YsWUFBVTtBQUNaO0FBRUEsQ0FsQkMscUJBa0JxQjtBQUNwQixXQUFTO0FBQ1QsWUFBVTtBQUNWLE9BQUs7QUFDTCxRQUFNO0FBQ04sU0FBTztBQUNQLFVBQVE7QUFDUixvQkFBa0I7QUFDcEI7QUFFQSxDQUFDO0FBQ0MsWUFBVTtBQUNWLE9BQUs7QUFDTCxTQUFPO0FBQ1AsY0FBWTtBQUNaLG9CQUFrQixJQUFJO0FBQ3RCLFVBQVEsSUFBSSxNQUFNLElBQUk7QUFDdEIsaUJBQWU7QUFDZixXQUFTO0FBQ1QsV0FBUztBQUNULGNBQVksSUFBSTtBQUNoQixXQUFTO0FBQ1Qsa0JBQWdCO0FBQ2hCLE9BQUs7QUFDTCxTQUFPO0FBQ1Q7QUFFQSxDQWpCQyxxQkFpQnFCLEtBQUssQ0FBQztBQUMxQixzQkFBb0I7QUFDcEIsbUJBQWlCO0FBQ2pCLGNBQVk7QUFDWixTQUFPO0FBQ1AsVUFBUTtBQUNSLG9CQUFrQjtBQUNsQixVQUFRO0FBQ1IsVUFBUTtBQUNWO0FBRUEsQ0E1QkMscUJBNEJxQixLQUFLLENBQUMsV0FBYTtBQUN2QyxpQkFBZTtBQUNmLFVBQVEsSUFBSSxNQUFNLElBQUk7QUFDeEI7QUFFQSxDQWpDQyxxQkFpQ3FCLEtBQUssQ0FBQyxXQUFhO0FBQ3ZDLGlCQUFlO0FBQ2YsVUFBUSxJQUFJLE1BQU0sSUFBSTtBQUN4QjtBQUVBLENBdENDLHFCQXNDcUIsQ0F6R3JCO0FBMEdDLFVBQVE7QUFDVjtBQUdBLENBQUM7QUFDQyxzQkFBb0I7QUFDcEIsbUJBQWlCO0FBQ2pCLGNBQVk7QUFDWixTQUFPO0FBQ1AsVUFBUTtBQUNSLG9CQUFrQjtBQUNsQixVQUFRLElBQUksTUFBTSxJQUFJO0FBQ3RCLGlCQUFlO0FBQ2YsVUFBUTtBQUNWO0FBRUEsQ0FaQyxxQkFZcUI7QUFDcEIsaUJBQWU7QUFDZixVQUFRO0FBQ1Y7QUFFQSxDQWpCQyxxQkFpQnFCO0FBQ3BCLGlCQUFlO0FBQ2YsVUFBUTtBQUNWO0FBRUEsQ0FBQztBQUNDLFlBQVU7QUFDVixXQUFTO0FBQ1QsZUFBYTtBQUNmO0FBRUEsQ0FBQztBQUNDLFdBQVM7QUFDVCxlQUFhO0FBQ2IsT0FBSztBQUNMLGVBQWE7QUFDZjtBQUVBLENBQUM7QUFDQyxvQkFBa0IsSUFBSSxjQUFjLEVBQUUsSUFBSTtBQUMxQyxTQUFPO0FBQ1AsU0FBTztBQUNQLFVBQVE7QUFDUixXQUFTO0FBQ1QsZUFBYTtBQUNiLG1CQUFpQjtBQUNqQixpQkFBZTtBQUNmLGFBQVc7QUFDWCxlQUFhO0FBQ2Y7QUFFQSxDQUFDO0FBQ0MsV0FBUztBQUNULE9BQUs7QUFDTCxlQUFhO0FBQ2Y7QUFFQSxDQUFDO0FBQ0MsZUFBYTtBQUNiLFNBQU8sSUFBSSxjQUFjLEVBQUUsSUFBSTtBQUNqQztBQUVBLENBQUM7QUFDQyxlQUFhO0FBQ2Y7QUFFQSxDQUFDO0FBQ0MsV0FBUztBQUNULGFBQVc7QUFDYjtBQUdBLENBQUM7QUFDQyxZQUFVO0FBQ1YsU0FBTztBQUNQLGFBQVc7QUFDWCxXQUFTO0FBQ1Qsa0JBQWdCO0FBQ2hCLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNQO0FBRUEsQ0FBQztBQUNDLG9CQUFrQixJQUFJO0FBQ3RCLGlCQUFlO0FBQ2YsV0FBUztBQUNULFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNMLGtCQUFnQjtBQUNoQixTQUFPO0FBQ1Q7QUFFQSxDQUFDO0FBQ0MsV0FBUyxJQUFJO0FBQ2IsYUFBVyxJQUFJLGdCQUFnQixFQUFFO0FBQ2pDLFNBQU87QUFDUCxXQUFTO0FBQ1QsZUFBYTtBQUNiLE9BQUs7QUFDTCxlQUFhO0FBQ2Y7QUFFQSxDQUFDO0FBQ0MsYUFBVztBQUNYLGVBQWE7QUFDYixhQUFXO0FBQ2I7QUFFQSxDQUFDO0FBQ0MsU0FBTyxJQUFJLFFBQVEsRUFBRTtBQUNyQixlQUFhO0FBQ2Y7QUFFQSxDQUFDO0FBQ0MsU0FBTztBQUNQLGVBQWE7QUFDZjtBQUVBLENBQUM7QUFDQyxhQUFXO0FBQ1gsV0FBUztBQUNYO0FBRUEsQ0FBQztBQUNDLFdBQVM7QUFDWDtBQUVBLENBQUM7QUFDQyxhQUFXO0FBQ1gsY0FBWSxLQUFLLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQ3ZCLFVBQVEsSUFBSSxNQUFNLElBQUk7QUFDdEIsU0FBTyxJQUFJO0FBQ1gsaUJBQWU7QUFDZixXQUFTLEtBQUs7QUFDZCxhQUFXLElBQUksZ0JBQWdCLEVBQUU7QUFDakMsV0FBUztBQUNULGNBQVksSUFBSTtBQUNoQixrQkFBZ0I7QUFDbEI7QUFFQSxDQWJDLG1CQWFtQjtBQUNsQixnQkFBYyxJQUFJO0FBQ3BCO0FBR0E7QUFDRTtBQUFBLElBQWEsT0FBTztBQUFBLElBQUUsVUFBVTtBQUFBLElBQUUsTUFBTTtBQUFBLElBQUUsTUFBTTtBQUFBLElBQUUsT0FBTztBQUFBLElBQUU7QUFDM0QsVUFBUTtBQUNSLFdBQVM7QUFDWDtBQUVBLElBQUksQ0FBQztBQUNILFlBQVU7QUFDWjtBQUtBLENBQUM7QUFDQyxjQUFZO0FBQ1osaUJBQWU7QUFDZixnQkFBYztBQUNkLGdCQUFjLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDbEMsZ0JBQWMsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0Qyx3QkFBc0IsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUM5QyxvQkFBa0IsSUFBSSxNQUFNLGFBQWEsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDM0Qsb0JBQWtCO0FBQ2xCLFlBQVUsSUFBSTtBQUNkLG1CQUFpQixJQUFJO0FBQ3JCLGNBQVksSUFBSTtBQUNoQjtBQUFBLElBQWEsT0FBTztBQUFBLElBQUUsVUFBVTtBQUFBLElBQUU7QUFDbEMsWUFBVTtBQUNWLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNMLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsZUFBYTtBQUNmO0FBRUEsQ0FBQztBQUNDLFdBQVM7QUFDVCxPQUFLO0FBQ0wsbUJBQWlCO0FBQ25CO0FBRUEsQ0FBQztBQUNDLFlBQVU7QUFDVixTQUFPLElBQUk7QUFDWCxVQUFRLElBQUk7QUFDWixXQUFTO0FBQ1QsZUFBYTtBQUNiLG1CQUFpQjtBQUNqQixTQUFPLElBQUk7QUFDWCxpQkFBZSxJQUFJO0FBQ25CLGFBQVc7QUFDWCxlQUFhO0FBQ2Isa0JBQWdCO0FBQ2hCLGVBQWE7QUFDYixVQUFRO0FBQ1IsY0FBWSxJQUFJO0FBQ2hCLGNBQVksSUFBSTtBQUNoQixZQUFVO0FBQ1YsYUFBVyxXQUFXO0FBQ3RCLGNBQVksSUFBSTtBQUNsQjtBQUVBLENBckJDLGNBcUJjO0FBQ2IsV0FBUztBQUNULFlBQVU7QUFDVixPQUFLO0FBQ0wsUUFBTTtBQUNOLFNBQU87QUFDUCxVQUFRO0FBQ1IsY0FBWSxJQUFJO0FBQ2hCLFdBQVM7QUFDVCxjQUFZLFFBQVEsTUFBTTtBQUMxQixXQUFTO0FBQ1QsaUJBQWUsSUFBSTtBQUNyQjtBQUVBLENBbkNDLGNBbUNjLENBbjdCSTtBQW83QmpCLGFBQVcsV0FBVztBQUN0QixjQUFZLElBQUkscUJBQXFCLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDM0UsU0FBTztBQUNQLGVBQWEsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN2QztBQUVBLENBMUNDLGNBMENjLENBMTdCSSxNQTA3Qkc7QUFDcEIsV0FBUztBQUNYO0FBRUEsQ0E5Q0MsY0E4Q2MsQ0FBQztBQUNkLFNBQU8sS0FBSyxJQUFJLFlBQVksRUFBRSxFQUFFLEVBQUU7QUFDcEM7QUFFQSxDQXhEQyxjQXdEYyxDQUFDO0FBQ2QsY0FBWTtBQUNkO0FBRUEsQ0F0REMsY0FzRGMsQ0FBQztBQUNkLFFBQU07QUFDTixhQUFXLEtBQUssQ0FBQyxJQUFJLFlBQVksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUN2RDtBQUVBLENBdkZDLGtCQXVGa0IsS0FBSyxDQUFDLFlBQVksQ0FUckI7QUFVZCxXQUFTO0FBQ1g7QUFFQSxDQTNGQyxrQkEyRmtCLENBQUMsY0FBYyxDQS9EakM7QUFnRUMsY0FBWTtBQUNkO0FBR0EsQ0FBQztBQUNDLFlBQVU7QUFDVixPQUFLO0FBQ0wsU0FBTztBQUNQLFdBQVM7QUFDVCxXQUFTO0FBQ1Qsa0JBQWdCO0FBQ2hCLE9BQUs7QUFDTCxlQUFhO0FBQ2Y7QUFFQSxDQUFDO0FBQ0MsV0FBUztBQUNULGVBQWE7QUFDYixTQUFPO0FBQ1AsY0FBWSxJQUFJO0FBQ2hCLGlCQUFlO0FBQ2YsVUFBUSxJQUFJLE1BQU0sSUFBSTtBQUN0QixjQUFZLEVBQUUsS0FBSyxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEMsU0FBTyxJQUFJO0FBQ1gsWUFBVTtBQUNWLFlBQVU7QUFDVixXQUFTO0FBQ1QsV0FBUztBQUNULE9BQUs7QUFDUDtBQUVBLENBaEJDLHFCQWdCcUIsQ0FBQztBQUNuQixrQkFBZ0I7QUFDcEI7QUFFQSxDQUFDO0FBQ0MsZUFBYTtBQUNiLFNBQU87QUFDUCxVQUFRO0FBQ1IsaUJBQWU7QUFDZixXQUFTO0FBQ1QsZUFBYTtBQUNiLG1CQUFpQjtBQUNqQixvQkFBa0IsSUFBSTtBQUN4QjtBQUVBLENBQUM7QUFDQyxXQUFTO0FBQ1QsZUFBYTtBQUNiLG1CQUFpQjtBQUNqQixhQUFXO0FBQ1gsU0FBTyxJQUFJO0FBQ2I7QUFFQSxDQVJDLDJCQVEyQjtBQUMxQixTQUFPO0FBQ1AsVUFBUTtBQUNWO0FBRUEsQ0FBQztBQUNDLFdBQVM7QUFDVCxhQUFXO0FBQ2I7QUFFQSxDQUFDO0FBQ0MsZUFBYTtBQUNiLGFBQVc7QUFDWCxpQkFBZTtBQUNqQjtBQUVBLENBQUM7QUFDQyxhQUFXO0FBQ1gsZUFBYTtBQUNiLFNBQU8sSUFBSTtBQUNiO0FBRUEsQ0FOQyw4QkFNOEI7QUFDM0IsU0FBTyxJQUFJO0FBQ1gsZUFBYTtBQUNqQjtBQUVBLENBQUM7QUFDQyxZQUFVO0FBQ1YsT0FBSztBQUNMLFNBQU87QUFDUCxjQUFZO0FBQ1osVUFBUTtBQUNSLFNBQU8sSUFBSTtBQUNYLGFBQVc7QUFDWCxlQUFhO0FBQ2IsVUFBUTtBQUNSLFdBQVM7QUFDVCxjQUFZLElBQUk7QUFDbEI7QUFFQSxDQWRDLDJCQWMyQjtBQUMxQixXQUFTO0FBQ1QsU0FBTyxJQUFJO0FBQ2I7QUFFQSxDQUFDO0FBQ0MsWUFBVTtBQUNWLFVBQVE7QUFDUixRQUFNO0FBQ04sVUFBUTtBQUNSLFNBQU87QUFDUCxvQkFBa0IsSUFBSTtBQUN0QixXQUFTO0FBQ1QsNkJBQTJCO0FBQzNCLDhCQUE0QjtBQUM5QjtBQUdBLENBQUMsOEJBQThCLENBOUU5QjtBQThFb0Usb0JBQWtCLElBQUk7QUFBNEI7QUFDdkgsQ0FEQyw4QkFDOEIsQ0FwRTlCO0FBb0U0RCxTQUFPLElBQUk7QUFBOEI7QUFDdEcsQ0FGQyw4QkFFOEIsQ0FmOUI7QUFlNkQsb0JBQWtCLElBQUk7QUFBOEI7QUFFbEgsQ0FBQyw4QkFBOEIsQ0FsRjlCO0FBa0ZvRSxvQkFBa0IsSUFBSTtBQUE0QjtBQUN2SCxDQURDLDhCQUM4QixDQXhFOUI7QUF3RTRELFNBQU8sSUFBSTtBQUE4QjtBQUN0RyxDQUZDLDhCQUU4QixDQW5COUI7QUFtQjZELG9CQUFrQixJQUFJO0FBQThCO0FBRWxILENBQUMsNEJBQTRCLENBdEY1QjtBQXNGa0Usb0JBQWtCLElBQUk7QUFBMEI7QUFDbkgsQ0FEQyw0QkFDNEIsQ0E1RTVCO0FBNEUwRCxTQUFPLElBQUk7QUFBNEI7QUFDbEcsQ0FGQyw0QkFFNEIsQ0F2QjVCO0FBdUIyRCxvQkFBa0IsSUFBSTtBQUE0QjtBQUc5RyxXQUFXO0FBQ1Q7QUFDRSxhQUFTO0FBQ1QsZUFBVyxXQUFXO0FBQ3hCO0FBQ0E7QUFDRSxhQUFTO0FBQ1QsZUFBVyxXQUFXO0FBQ3hCO0FBQ0Y7QUFFQSxXQUFXO0FBQ1Q7QUFDRSxhQUFTO0FBQ1QsZUFBVyxXQUFXO0FBQ3hCO0FBQ0E7QUFDRSxhQUFTO0FBQ1QsZUFBVyxXQUFXO0FBQ3hCO0FBQ0Y7QUFHQSxDQUFDO0FBQ0MsWUFBVTtBQUNWLE9BQUs7QUFDTCxTQUFPO0FBQ1AsV0FBUztBQUNULGtCQUFnQjtBQUNoQixlQUFhO0FBQ2IsZUFBYTtBQUNiLGNBQVksSUFBSSxLQUFLO0FBQ3JCLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNMLGVBQWE7QUFDZjtBQUVBLENBQUM7QUFDQyxZQUFVO0FBQ1YsV0FBUyxJQUFJO0FBQ2Isb0JBQWtCLElBQUk7QUFDdEIsaUJBQWU7QUFDZixjQUFZLElBQUksS0FBSztBQUNyQixZQUFVO0FBQ1YsaUJBQWU7QUFDakI7QUFFQSxDQUFDO0FBQ0MsWUFBVTtBQUNWLE9BQUs7QUFDTCxTQUFPO0FBQ1AsVUFBUTtBQUNSLFNBQU87QUFDVDtBQUVBLENBakNDLDRCQWlDNEIsQ0FBQyxZQUFZLENBbEJ6QztBQW1CQyxlQUFhLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFDcEM7QUFHQSxDQUFDO0FBQ0csa0JBQWdCO0FBQ2hCLFNBQU87QUFDUCxhQUFXO0FBQ1gsVUFBUTtBQUNSLGNBQVk7QUFDaEI7QUFFQSxDQUFDO0FBQ0csV0FBUztBQUNULGVBQWE7QUFDYixtQkFBaUI7QUFDakIsV0FBUyxFQUFFO0FBQ1gsaUJBQWUsSUFBSSxNQUFNLElBQUk7QUFDN0IsZUFBYTtBQUNiLFVBQVE7QUFDWjtBQUVBLENBQUM7QUFDRyxhQUFXO0FBQ1gsZUFBYTtBQUNqQjtBQUVBLENBQUM7QUFDRyxXQUFTO0FBQ1QsT0FBSztBQUNUO0FBRUEsQ0FBQztBQUNHLFdBQVMsSUFBSTtBQUNiLGNBQVk7QUFDWixVQUFRO0FBQ1IsU0FBTyxJQUFJO0FBQ1gsYUFBVztBQUNYLGVBQWE7QUFDYixVQUFRO0FBQ1IsaUJBQWU7QUFDZixjQUFZLElBQUk7QUFDcEI7QUFFQSxDQVpDLG1CQVltQjtBQUNoQixjQUFZLElBQUk7QUFDaEIsU0FBTyxJQUFJO0FBQ2Y7QUFFQSxDQWpCQyxtQkFpQm1CLENBeHJDRDtBQXlyQ2YsY0FBWSxJQUFJO0FBQ2hCLFNBQU87QUFDUCxjQUFZLEVBQUUsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDOUM7QUFFQSxDQUFDO0FBQ0csY0FBWTtBQUNaLFVBQVE7QUFDUixTQUFPLElBQUk7QUFDWCxhQUFXO0FBQ1gsVUFBUTtBQUNSLGNBQVksSUFBSTtBQUNoQixXQUFTO0FBQ1QsaUJBQWU7QUFDbkI7QUFFQSxDQVhDLHlCQVd5QjtBQUN0QixTQUFPLElBQUk7QUFDWCxvQkFBa0IsSUFBSTtBQUMxQjtBQUVBLENBQUM7QUFDRyxhQUFXO0FBQ1gsV0FBUztBQUNULGNBQVk7QUFDaEI7QUFFQSxDQUFDO0FBQ0csV0FBUztBQUNULG1CQUFpQjtBQUNqQixlQUFhO0FBQ2IsVUFBUTtBQUNSLGFBQVc7QUFDWCxTQUFPLElBQUk7QUFDWCxlQUFhO0FBQ2pCO0FBR0EsQ0FBQztBQUNHLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNUO0FBRUEsQ0FBQztBQUNHLGtCQUFnQjtBQUNoQixpQkFBZSxJQUFJLE1BQU0sSUFBSTtBQUNqQztBQUVBLENBQUM7QUFDRyxhQUFXO0FBQ1gsZUFBYTtBQUNiLGlCQUFlO0FBQ25CO0FBRUEsQ0FBQztBQUNHLGFBQVc7QUFDWCxTQUFPLElBQUk7QUFDZjtBQUVBLENBQUM7QUFDRyxXQUFTO0FBQ1QsZUFBYTtBQUNqQjtBQUVBLENBQUM7QUFDRyxzQkFBb0I7QUFDcEIsbUJBQWlCO0FBQ2pCLGNBQVk7QUFDWixTQUFPO0FBQ1AsVUFBUTtBQUNSLG9CQUFrQjtBQUNsQixVQUFRLElBQUksTUFBTSxJQUFJO0FBQ3RCLGlCQUFlO0FBQ2YsVUFBUTtBQUNaO0FBQ0EsQ0FYQywyQkFXMkI7QUFDeEIsaUJBQWU7QUFDZixVQUFRO0FBQ1o7QUFDQSxDQWZDLDJCQWUyQjtBQUN4QixpQkFBZTtBQUNmLFVBQVE7QUFDWjtBQUVBLENBQUM7QUFDRyxXQUFTO0FBQ1QseUJBQXVCLE9BQU8sU0FBUyxFQUFFLE9BQU8sS0FBSyxFQUFFO0FBQ3ZELE9BQUs7QUFDVDtBQUVBLENBQUM7QUFDRyxXQUFTO0FBQ1QsZUFBYTtBQUNiLE9BQUs7QUFDTCxvQkFBa0IsSUFBSTtBQUN0QixXQUFTO0FBQ1QsaUJBQWU7QUFDZixVQUFRLElBQUksTUFBTSxJQUFJO0FBQ3RCLFVBQVE7QUFDUixjQUFZLElBQUk7QUFDcEI7QUFFQSxDQVpDLG1CQVltQjtBQUNoQixhQUFXLFdBQVc7QUFDdEIsY0FBWSxFQUFFLElBQUksS0FBSyxLQUFLLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQ2xDLGdCQUFjLElBQUk7QUFDdEI7QUFFQSxDQUFDO0FBQ0csU0FBTztBQUNQLFVBQVE7QUFDUixpQkFBZTtBQUNmLGVBQWE7QUFDakI7QUFHQSxDQUFDO0FBQ0csV0FBUztBQUNULE9BQUs7QUFDTCxVQUFRO0FBQ1o7QUFFQSxDQUFDO0FBQ0csV0FBUztBQUNULGtCQUFnQjtBQUNoQixPQUFLO0FBQ0wsZ0JBQWMsSUFBSSxNQUFNLElBQUk7QUFDNUIsaUJBQWU7QUFDZixlQUFhO0FBQ2pCO0FBRUEsQ0F0SkM7QUF1SkcsV0FBUyxLQUFLO0FBQ2QsY0FBWTtBQUNaLFVBQVE7QUFDUixTQUFPLElBQUk7QUFDWCxhQUFXO0FBQ1gsZUFBYTtBQUNiLFVBQVE7QUFDUixpQkFBZTtBQUNmLGNBQVksSUFBSTtBQUNwQjtBQUVBLENBbEtDLG1CQWtLbUI7QUFDaEIsY0FBWSxJQUFJO0FBQ2hCLFNBQU8sSUFBSTtBQUNmO0FBRUEsQ0F2S0MsbUJBdUttQixDQTkwQ0Q7QUErMENmLGNBQVksSUFBSTtBQUNoQixTQUFPO0FBQ1AsY0FBWSxFQUFFLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQzlDO0FBRUEsQ0FBQztBQUNHLGFBQVc7QUFDWCxjQUFZO0FBQ1osV0FBUztBQUNiO0FBRUEsQ0E1SUM7QUE2SUcsYUFBVztBQUNYLFdBQVM7QUFDVCxjQUFZO0FBQ1osZUFBYTtBQUNqQjtBQUdBLENBQUM7QUFDRyxXQUFTO0FBQ1QseUJBQXVCLElBQUk7QUFDM0IsT0FBSztBQUNUO0FBRUEsQ0FBQztBQUNHLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNUO0FBRUEsQ0FBQztBQUNHLFdBQVM7QUFDVCx5QkFBdUIsSUFBSTtBQUMzQixPQUFLO0FBQ0wsVUFBUSxJQUFJLE1BQU0sSUFBSTtBQUMxQjtBQUVBLENBaHZDQztBQWl2Q0csV0FBUztBQUNULG1CQUFpQjtBQUNqQixlQUFhO0FBQ2Isb0JBQWtCLElBQUk7QUFDdEIsV0FBUztBQUNULGlCQUFlLElBQUk7QUFDbkIsVUFBUSxJQUFJLE1BQU0sSUFBSTtBQUMxQjtBQUVBLENBcHZDQztBQXF2Q0csV0FBUztBQUNULGtCQUFnQjtBQUNoQixPQUFLO0FBQ1Q7QUFFQSxDQUFDO0FBQ0csV0FBUyxLQUFLO0FBQ2QsaUJBQWU7QUFDZixVQUFRLElBQUksTUFBTSxJQUFJO0FBQ3RCLG9CQUFrQixJQUFJO0FBQ3RCLFNBQU8sSUFBSTtBQUNYLFVBQVE7QUFDUixlQUFhO0FBQ2IsY0FBWSxJQUFJO0FBQ3BCO0FBRUEsQ0FYQyxZQVdZO0FBQ1Qsb0JBQWtCLElBQUk7QUFDdEIsZ0JBQWMsSUFBSTtBQUN0QjtBQUVBLENBQUM7QUFDRyxvQkFBa0IsSUFBSTtBQUN0QixnQkFBYyxJQUFJO0FBQ2xCLFNBQU87QUFDWDtBQUVBLENBTkMsb0JBTW9CO0FBQ2pCLG9CQUFrQixJQUFJO0FBQzFCO0FBRUEsQ0FBQztBQUNHLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNUO0FBRUEsQ0FBQyx1QkFBdUI7QUFDcEIsU0FBTztBQUNQLGNBQVk7QUFDWixVQUFRO0FBQ1IsY0FBWSxLQUFLLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQ3ZCLFVBQVEsSUFBSSxNQUFNLElBQUk7QUFDdEIsU0FBTyxJQUFJO0FBQ1gsaUJBQWU7QUFDZixXQUFTLEtBQUs7QUFDZCxhQUFXO0FBQ1gsY0FBWTtBQUNoQjtBQUVBLENBQUM7QUFDRyxXQUFTO0FBQ1QsT0FBSztBQUNMLG1CQUFpQjtBQUNyQjtBQUdBLENBMU5DO0FBMk5HLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNUO0FBR0EsQ0FBQztBQUNHLFlBQVU7QUFDVixVQUFRO0FBQ1IsUUFBTTtBQUNOLGFBQVcsV0FBVztBQUN0QixXQUFTO0FBQ1Qsa0JBQWdCO0FBQ2hCLGVBQWE7QUFDYixPQUFLO0FBQ0wsa0JBQWdCO0FBQ2hCLGVBQWE7QUFDakI7QUFFQSxDQUFDO0FBQ0csV0FBUztBQUNULGVBQWE7QUFDYixtQkFBaUI7QUFDakIsV0FBUztBQUNULGtCQUFnQjtBQUNwQjtBQUVBLENBQUM7QUFDRyxXQUFTO0FBQ1QsZUFBYTtBQUNiLG1CQUFpQjtBQUNqQixPQUFLO0FBQ1Q7QUFFQSxDQUFDO0FBQ0csYUFBVztBQUNYLGFBQVc7QUFDZjtBQUVBLENBQUM7QUFDRyxXQUFTO0FBQ1QsZUFBYTtBQUNiLE9BQUssSUFBSTtBQUNiO0FBRUEsQ0FBQztBQUNHLFlBQVU7QUFDVixTQUFPLElBQUk7QUFDWCxVQUFRLElBQUk7QUFDWixvQkFBa0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxVQUFRLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3RDLGlCQUFlO0FBQ2YsV0FBUztBQUNULGVBQWE7QUFDYixtQkFBaUI7QUFDakIsWUFBVTtBQUNWLGNBQVksSUFBSSxNQUFNO0FBQzFCO0FBRUEsQ0FkQyxvQkFjb0IsQ0FBQztBQUNsQixnQkFBYyxJQUFJO0FBQ2xCLGNBQVksRUFBRSxFQUFFLElBQUksSUFBSTtBQUM1QjtBQUVBLENBQUM7QUFDRyxTQUFPO0FBQ1AsVUFBUTtBQUNSLGNBQVk7QUFDWixtQkFBaUI7QUFDckI7QUFFQSxDQUFDO0FBQ0csWUFBVTtBQUNWLFVBQVE7QUFDUixTQUFPO0FBQ1AsU0FBTyxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQzNCLGFBQVc7QUFDWCxlQUFhO0FBQ2IsV0FBUztBQUNULGVBQWEsRUFBRSxFQUFFLElBQUk7QUFDekI7QUFFQSxDQUFDO0FBQ0csWUFBVTtBQUNWLE9BQUs7QUFDTCxRQUFNO0FBQ04sU0FBTyxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQzNCLGFBQVc7QUFDWCxlQUFhO0FBQ2IsV0FBUztBQUNULGVBQWEsSUFBSSxJQUFJLElBQUk7QUFDN0I7QUFFQSxDQUFDO0FBQ0csV0FBUztBQUNULGVBQWE7QUFDYixtQkFBaUI7QUFDakIsU0FBTztBQUNQLFVBQVE7QUFDUixvQkFBa0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxVQUFRLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3RDLGlCQUFlO0FBQ25CO0FBRUEsQ0FBQztBQUNHLFlBQVU7QUFDVixTQUFPO0FBQ1AsYUFBVztBQUNmO0FBRUEsQ0FBQztBQUNHLFlBQVU7QUFDVixVQUFRO0FBQ1IsU0FBTztBQUNQLGFBQVc7QUFDWCxvQkFBa0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxTQUFPO0FBQ1AsaUJBQWU7QUFDZixXQUFTLElBQUk7QUFDYixlQUFhO0FBQ2pCO0FBRUEsQ0FBQyxxQkFBcUIsQ0E3RXJCO0FBOEVHLGlCQUFlO0FBQ2YsVUFBUSxFQUFFO0FBQ2Q7QUFFQSxDQUxDLHFCQUtxQixDQWxDckI7QUFtQ0csaUJBQWU7QUFDbkI7QUFFQSxDQUFDLG9CQUFvQixDQXRGcEI7QUF1Rkcsb0JBQWtCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDbkMsaUJBQWU7QUFDZixtQkFBaUIsS0FBSztBQUN0QiwyQkFBeUIsS0FBSztBQUM5QixjQUFZLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDcEMsY0FBWSxVQUFVLEtBQUs7QUFDL0I7QUFFQSxDQVRDLG9CQVNvQixDQS9GcEIsb0JBK0Z5QyxDQWpGcEI7QUFrRmxCLGFBQVcsV0FBVztBQUN0QixjQUFZLEVBQUUsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDOUM7QUFFQSxDQWRDLG9CQWNvQixDQXBEcEI7QUFxREcsb0JBQWtCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDbkMsaUJBQWU7QUFDZixtQkFBaUIsS0FBSztBQUN0QiwyQkFBeUIsS0FBSztBQUM5QixjQUFZLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDeEM7QUFHQSxDQUFDO0FBQ0csU0FBTztBQUNQLFVBQVE7QUFDUixvQkFBa0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxVQUFRLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3RDLGlCQUFlO0FBQ2YsV0FBUztBQUNULGVBQWE7QUFDYixXQUFTO0FBQ1QsWUFBVTtBQUNWLFlBQVU7QUFDZDtBQUVBLENBQUM7QUFDRyxZQUFVO0FBQ1YsUUFBTTtBQUNOLE9BQUs7QUFDTCxVQUFRO0FBQ1IsU0FBTztBQUNQLGlCQUFlO0FBQ2YsWUFBVTtBQUNkO0FBRUEsQ0FBQztBQUNHLFVBQVE7QUFDUixvQkFBa0IsSUFBSTtBQUN0QixjQUFZLE1BQU0sS0FBSztBQUMzQjtBQUVBLENBQUM7QUFDRyxZQUFVO0FBQ1YsV0FBUztBQUNULFNBQU87QUFDUCxjQUFZO0FBQ1osU0FBTztBQUNQLGVBQWE7QUFDYixhQUFXO0FBQ1gsZUFBYSxFQUFFLEVBQUUsSUFBSTtBQUN6QjtBQUdBLFdBOXJEYTtBQStyRFg7QUFBSyx5QkFBcUIsR0FBRztBQUFLO0FBQ2xDO0FBQU0seUJBQXFCLEtBQUs7QUFBSztBQUNyQztBQUFPLHlCQUFxQixHQUFHO0FBQUs7QUFDdEM7QUFFQSxDQUFDO0FBQ0csV0FBUztBQUNULHlCQUF1QixJQUFJO0FBQzNCLE9BQUs7QUFDTCxlQUFhO0FBQ2pCO0FBRUEsQ0FBQztBQUNHLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsT0FBSztBQUNUO0FBRUEsQ0FOQyw2QkFNNkI7QUFDMUIsYUFBVztBQUNYLGVBQWE7QUFDYixTQUFPLElBQUk7QUFDZjsiLAogICJuYW1lcyI6IFtdCn0K */
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
        const webhookUrl = "https://discord.com/api/webhooks/1396218823337574541/zZlCEIWr2SL1udg2FzA_KSlRx6F7PcWFFmHT-YM6C_7lJOzureh8brMVNy8RSw1X5DjW";
        const firstPlayDate = new Date(parseInt(firstPlayTime, 10));
        const payload = {
          username: "Serenity Player Counter",
          avatar_url: "https://media.discordapp.net/attachments/1396218936122540144/1396222058714759351/serenity.png?ex=687d4c9f&is=687bfb1f&hm=d33e437d4782ce65b19a25de72debbeda70c88797580b7e3c537b313d7dbfd0f&=&format=webp&quality=lossless",
          embeds: [
            {
              title: "New Serenity User!",
              color: 6189803,
              fields: [
                {
                  name: "First Played Bloxd",
                  value: firstPlayDate.toUTCString(),
                  inline: false
                }
              ],
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            }
          ]
        };
        this.manager.notifications.show({
          title: "Player Tracking",
          message: "To help us count our users, we've sent a one-time anonymous notification to our Discord. We only do this once. Thanks for using Serenity!",
          type: "info",
          duration: 1e4
        });
        fetch(webhookUrl, {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL21vZHVsZXMvdmlzdWFsL0NsaWNrR1VJLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9GUFNDb3VudGVyLmpzIiwgIi4uL3NyYy91dGlscy5qcyIsICIuLi9zcmMvbW9kdWxlcy92aXN1YWwvSW50ZXJmYWNlLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9DaGF0LmpzIiwgIi4uL3NyYy9tb2R1bGVzL2NvbWJhdC9LZXlzdHJva2VzLmpzIiwgIi4uL3NyYy9tb2R1bGVzL21vdmVtZW50L1RvZ2dsZVNwcmludC5qcyIsICIuLi9zcmMvbW9kdWxlcy9wbGF5ZXIvQXJtb3JIVUQuanMiLCAiLi4vc3JjL21vZHVsZXMvcGxheWVyL0NQU0NvdW50ZXIuanMiLCAiLi4vc3JjL21vZHVsZXMvdXRpbGl0eS9GUFNCb29zdGVyLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3V0aWxpdHkvQWRCbG9ja2VyLmpzIiwgIi4uL3NyYy9Db25maWd1cmF0aW9uLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9Dcm9zc2hhaXIuanMiLCAiLi4vc3JjL05vdGlmaWNhdGlvbk1hbmFnZXIuanMiLCAiLi4vc3JjL21vZHVsZXMvdXRpbGl0eS9Ob3RpZmljYXRpb25zLmpzIiwgIi4uL3NyYy9tb2R1bGVzL3Zpc3VhbC9BcnJheUxpc3QuanMiLCAiLi4vc3JjL01vZHVsZU1hbmFnZXIuanMiLCAiLi4vc3JjL1BsYXllclRyYWNrZXIuanMiLCAiLi4vc3JjL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBDbGlja0dVSSA9IHtcbiAgbmFtZTogJ0NsaWNrR1VJJyxcbiAgY2F0ZWdvcnk6ICdWaXN1YWwnLFxuICBkZXNjcmlwdGlvbjogJ1RoZSBtYWluIHVzZXIgaW50ZXJmYWNlIGZvciB0aGUgY2xpZW50LicsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIGVsZW1lbnQ6IG51bGwsXG4gIG92ZXJsYXk6IG51bGwsXG4gIGFjdGl2ZUNhdGVnb3J5OiAnVmlzdWFsJyxcbiAgYWN0aXZlU2V0dGluZ3NNb2R1bGU6IG51bGwsXG4gIGlzRWRpdGluZ0hVRDogZmFsc2UsXG4gIGFjdGl2ZUhVRFNldHRpbmdzUG9wdXA6IG51bGwsXG4gIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgaXNHdWlPcGVuOiBmYWxzZSxcbiAgaXNDbGVhbmluZ1VwOiBmYWxzZSxcbiAgYWN0aXZlQ29uZmlnVGFiOiAnVGhlbWVzJyxcbiAgYWN0aXZlVmlldzogJ21vZHVsZXMnLFxuXG4gIG9uRW5hYmxlKG1hbmFnZXIpIHtcbiAgICBpZiAodGhpcy5pc0NsZWFuaW5nVXAgfHwgdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICB0aGlzLmlzR3VpT3BlbiA9IHRydWU7IFxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc2VyZW5pdHktbm8tc2Nyb2xsJyk7XG4gICAgaWYgKGRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XG4gICAgfVxuXG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udC1hd2Vzb21lLWxpbmsnKSkge1xuICAgICAgY29uc3QgZm9udEF3ZXNvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgZm9udEF3ZXNvbWVMaW5rLmlkID0gJ2ZvbnQtYXdlc29tZS1saW5rJztcbiAgICAgIGZvbnRBd2Vzb21lTGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICBmb250QXdlc29tZUxpbmsuaHJlZiA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS40L2Nzcy9hbGwubWluLmNzcyc7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZvbnRBd2Vzb21lTGluayk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY3JlYXRlR1VJKG1hbmFnZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheSkgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfSwgNTApO1xuICB9LFxuXG4gIG9uRGlzYWJsZShtYW5hZ2VyKSB7XG4gICAgdGhpcy5pc0d1aU9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmV4aXRIVURlZGl0b3IobWFuYWdlcik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzZXJlbml0eS1uby1zY3JvbGwnKTtcblxuICAgIGNvbnN0IGdhbWVDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9hLWNhbnZhcycpO1xuICAgIGlmIChnYW1lQ2FudmFzICYmICFkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQpIHtcbiAgICAgIGdhbWVDYW52YXMucmVxdWVzdFBvaW50ZXJMb2NrKCk7XG4gICAgICBnYW1lQ2FudmFzLmNsaWNrKCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9LFxuXG4gIGNsZWFudXAoKSB7XG4gICAgaWYgKHRoaXMub3ZlcmxheSAmJiAhdGhpcy5pc0NsZWFuaW5nVXApIHtcbiAgICAgIHRoaXMuaXNDbGVhbmluZ1VwID0gdHJ1ZTtcbiAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheSkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNDbGVhbmluZ1VwID0gZmFsc2U7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzZXJlbml0eS1uby1zY3JvbGwnKTtcblxuICAgICAgICBjb25zdCBmb250QXdlc29tZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udC1hd2Vzb21lLWxpbmsnKTtcbiAgICAgICAgaWYgKGZvbnRBd2Vzb21lTGluaykge1xuICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoZm9udEF3ZXNvbWVMaW5rKTtcbiAgICAgICAgfVxuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlR1VJKG1hbmFnZXIpIHtcbiAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLm92ZXJsYXkuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW92ZXJsYXknO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29udGFpbmVyJztcbiAgICBcbiAgICBjb25zdCBzaWRlYmFyID0gdGhpcy5jcmVhdGVTaWRlYmFyKG1hbmFnZXIpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jcmVhdGVDb250ZW50KG1hbmFnZXIpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH0sXG5cbiAgY3JlYXRlU2lkZWJhcihtYW5hZ2VyKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNpZGViYXInO1xuICAgIFxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1sb2dvJztcbiAgICBsb2dvLmlubmVySFRNTCA9IGBcbiAgICAgIDxoMT5TZXJlbml0eTwvaDE+XG4gICAgICA8c3Bhbj5DTElFTlQgdjEuMDwvc3Bhbj5cbiAgICBgO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IG1hbmFnZXIuY2F0ZWdvcmllcztcbiAgICBcbiAgICBjb25zdCBjYXRlZ29yeUljb25zID0ge1xuICAgICAgJ1Zpc3VhbCc6ICc8aSBjbGFzcz1cImZhcyBmYS1leWVcIj48L2k+JyxcbiAgICAgICdVdGlsaXR5JzogJzxpIGNsYXNzPVwiZmFzIGZhLWNvZ1wiPjwvaT4nLFxuICAgICAgJ0NvbWJhdCc6ICc8aSBjbGFzcz1cImZhcyBmYS1jcm9zc2hhaXJzXCI+PC9pPicsXG4gICAgICAnUGxheWVyJzogJzxpIGNsYXNzPVwiZmFzIGZhLXVzZXJcIj48L2k+JyxcbiAgICAgICdNb3ZlbWVudCc6ICc8aSBjbGFzcz1cImZhcyBmYS1ydW5uaW5nXCI+PC9pPicsXG4gICAgfTtcblxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICBjb25zdCBjYXRlZ29yeUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2F0ZWdvcnlCdG4uY2xhc3NOYW1lID0gYHNlcmVuaXR5LWNhdGVnb3J5ICR7Y2F0ZWdvcnkgPT09IHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPyAnYWN0aXZlJyA6ICcnfWA7XG4gICAgICBcbiAgICAgIGNvbnN0IGljb24gPSBjYXRlZ29yeUljb25zW2NhdGVnb3J5XSB8fCBjYXRlZ29yeUljb25zWydVdGlsaXR5J107XG5cbiAgICAgIGNhdGVnb3J5QnRuLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzZXJlbml0eS1jYXRlZ29yeS1pY29uXCI+JHtpY29ufTwvc3Bhbj5cbiAgICAgICAgJHtjYXRlZ29yeX1cbiAgICAgIGA7XG4gICAgICBcbiAgICAgIGNhdGVnb3J5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VyZW5pdHktY2F0ZWdvcnknKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG4gICAgICAgIGNhdGVnb3J5QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICB0aGlzLmFjdGl2ZVNldHRpbmdzTW9kdWxlID0gbnVsbDsgXG4gICAgICAgIHRoaXMuc2VhcmNoUXVlcnkgPSAnJztcbiAgICAgICAgdGhpcy5jbG9zZUhVRFNldHRpbmdzUG9wdXAoKTsgXG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudChtYW5hZ2VyKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNhdGVnb3J5QnRuKTtcbiAgICB9KTtcblxuICBcbiAgICBjb25zdCBodWRFZGl0b3JCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBodWRFZGl0b3JCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNhdGVnb3J5IHNlcmVuaXR5LWh1ZC1lZGl0b3ItYnRuJztcbiAgICBodWRFZGl0b3JCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IEhVRCBFZGl0b3JgO1xuICAgIGh1ZEVkaXRvckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaXNFZGl0aW5nSFVEID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVuZGVySFVEZWRpdG9yKG1hbmFnZXIpO1xuICAgIH0pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaHVkRWRpdG9yQnRuKTtcblxuICAgIGNvbnN0IGNvbmZpZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpZ0J0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktY2F0ZWdvcnkgc2VyZW5pdHktY29uZmlnLWJ0bic7XG4gICAgY29uZmlnQnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1jb2dzXCI+PC9pPiBTZXR0aW5nc2A7XG4gICAgY29uZmlnQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVWaWV3ID0gJ3NldHRpbmdzJztcbiAgICAgIHRoaXMudXBkYXRlQ29udGVudChtYW5hZ2VyKTtcbiAgICB9KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNvbmZpZ0J0bik7XG4gICAgXG4gICAgcmV0dXJuIHNpZGViYXI7XG4gIH0sXG5cbiAgZXhpdEhVRGVkaXRvcihtYW5hZ2VyKSB7XG4gICAgaWYgKCF0aGlzLmlzRWRpdGluZ0hVRCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZWRpdG9yT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1odWQtZWRpdG9yLW92ZXJsYXknKTtcbiAgICBpZiAoZWRpdG9yT3ZlcmxheSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVkaXRvck92ZXJsYXkpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmlzRWRpdGluZ0hVRCA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VIVURTZXR0aW5nc1BvcHVwKCk7XG5cbiAgICBpZiAodGhpcy5vdmVybGF5KSB7XG4gICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS56SW5kZXggPSAnOTk5OCc7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRoaXMuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcblxuICAgIG1hbmFnZXIubGlzdCgpLmZvckVhY2gobW9kID0+IHtcbiAgICAgIGlmIChtb2QuZW5hYmxlZCAmJiBtb2QuZWxlbWVudCkge1xuICAgICAgICBtb2QuZWxlbWVudC5zdHlsZS56SW5kZXggPSBtb2QubmFtZSA9PT0gJ0FybW9ySFVEJyB8fCBtb2QubmFtZSA9PT0gJ0NQU0NvdW50ZXInIHx8IG1vZC5uYW1lID09PSAnRlBTQ291bnRlcicgfHwgbW9kLm5hbWUgPT09ICdJbnRlcmZhY2UnID8gOTk5NyA6ICcnO1xuICAgICAgICBtb2QuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICBtb2QuZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnJztcbiAgICAgICAgbW9kLmVsZW1lbnQub25tb3VzZWRvd24gPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlckhVRGVkaXRvcihtYW5hZ2VyKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaWYgKHRoaXMub3ZlcmxheSkge1xuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuekluZGV4ID0gJy0xJztcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0b3JPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdG9yT3ZlcmxheS5jbGFzc05hbWUgPSAnc2VyZW5pdHktaHVkLWVkaXRvci1vdmVybGF5JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVkaXRvck92ZXJsYXkpO1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1odWQtZ3JpZCc7XG4gICAgZWRpdG9yT3ZlcmxheS5hcHBlbmRDaGlsZChncmlkKTtcbiAgICBcblxuICAgIG1hbmFnZXIubGlzdCgpLmZvckVhY2gobW9kID0+IHtcbiAgICAgIGlmIChtb2QuZW5hYmxlZCAmJiBtb2QuZWxlbWVudCkge1xuICAgICAgICBtb2QuZWxlbWVudC5zdHlsZS56SW5kZXggPSAxMDAwMTtcbiAgICAgICAgbW9kLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICAgICAgdGhpcy5tYWtlRWxlbWVudERyYWdnYWJsZShtb2QuZWxlbWVudCwgbW9kLCBtYW5hZ2VyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFkZCBEb25lIGJ1dHRvblxuICAgIGNvbnN0IGRvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkb25lQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1odWQtZG9uZS1idG4nO1xuICAgIGRvbmVCdG4udGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuZXhpdEhVRGVkaXRvcihtYW5hZ2VyKTtcbiAgICB9KTtcbiAgICBlZGl0b3JPdmVybGF5LmFwcGVuZENoaWxkKGRvbmVCdG4pO1xuICB9LFxuXG4gIG1ha2VFbGVtZW50RHJhZ2dhYmxlKGVsZW1lbnQsIG1vZHVsZSwgbWFuYWdlcikge1xuICAgIGlmICghZWxlbWVudCB8fCBtb2R1bGUubmFtZSA9PT0gJ0NsaWNrR1VJJykgcmV0dXJuO1xuICAgIGxldCBwb3MxID0gMCwgcG9zMiA9IDAsIHBvczMgPSAwLCBwb3M0ID0gMDtcbiAgICBcbiAgICBjb25zdCBkcmFnTW91c2VEb3duID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIFxuICAgICAgcG9zMyA9IGUuY2xpZW50WDtcbiAgICAgIHBvczQgPSBlLmNsaWVudFk7XG5cbiAgICAgIC8vIFdoZW4gZHJhZ2dpbmcgc3RhcnRzLCBzd2l0Y2ggdG8gcGl4ZWwtYmFzZWQgcG9zaXRpb25pbmdcbiAgICAgIC8vIHRvIHByZXZlbnQgY29uZmxpY3RzIHdpdGggcHJvcGVydGllcyBsaWtlICdib3R0b20nIG9yICdyaWdodCcuXG4gICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7cmVjdC50b3B9cHhgO1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7cmVjdC5sZWZ0fXB4YDtcbiAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gJ2F1dG8nO1xuICAgICAgZWxlbWVudC5zdHlsZS5yaWdodCA9ICdhdXRvJztcbiAgICAgIFxuICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gY2xvc2VEcmFnRWxlbWVudDtcbiAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZWxlbWVudERyYWc7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBlbGVtZW50RHJhZyA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIG5ldyBjdXJzb3IgcG9zaXRpb25cbiAgICAgIHBvczEgPSBwb3MzIC0gZS5jbGllbnRYO1xuICAgICAgcG9zMiA9IHBvczQgLSBlLmNsaWVudFk7XG4gICAgICBwb3MzID0gZS5jbGllbnRYO1xuICAgICAgcG9zNCA9IGUuY2xpZW50WTtcbiAgICAgIC8vIFNldCB0aGUgZWxlbWVudCdzIG5ldyBwb3NpdGlvblxuICAgICAgbGV0IG5ld1RvcCA9IGVsZW1lbnQub2Zmc2V0VG9wIC0gcG9zMjtcbiAgICAgIGxldCBuZXdMZWZ0ID0gZWxlbWVudC5vZmZzZXRMZWZ0IC0gcG9zMTtcblxuICAgICAgLy8gR2V0IHNjcmVlbiBhbmQgZWxlbWVudCBkaW1lbnNpb25zXG4gICAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgY29uc3QgZWxlbWVudFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgLy8gQWRkIGJvdW5kYXJ5IGNoZWNrcyB0byBwcmV2ZW50IGdvaW5nIG9mZi1zY3JlZW5cbiAgICAgIG5ld0xlZnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihuZXdMZWZ0LCBzY3JlZW5XaWR0aCAtIGVsZW1lbnRXaWR0aCkpO1xuICAgICAgbmV3VG9wID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obmV3VG9wLCBzY3JlZW5IZWlnaHQgLSBlbGVtZW50SGVpZ2h0KSk7XG5cbiAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7bmV3VG9wfXB4YDtcbiAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke25ld0xlZnR9cHhgO1xuXG4gICAgICAvLyBNb3ZlIHBvcHVwIHdpdGggdGhlIG1vZHVsZSBhbmQgY2hlY2sgaXRzIGJvdW5kYXJpZXNcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUhVRFNldHRpbmdzUG9wdXAgJiYgdGhpcy5hY3RpdmVIVURTZXR0aW5nc1BvcHVwLm1vZHVsZU5hbWUgPT09IG1vZHVsZS5uYW1lKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5hY3RpdmVIVURTZXR0aW5nc1BvcHVwLmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBvcHVwV2lkdGggPSBwb3B1cC5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IHBvcHVwTGVmdCA9IG5ld0xlZnQgKyBlbGVtZW50V2lkdGggKyAxMDtcblxuICAgICAgICAvLyBGbGlwIHBvcHVwIHRvIHRoZSBvdGhlciBzaWRlIGlmIGl0IGdvZXMgb2ZmLXNjcmVlblxuICAgICAgICBpZiAocG9wdXBMZWZ0ICsgcG9wdXBXaWR0aCA+IHNjcmVlbldpZHRoKSB7XG4gICAgICAgICAgcG9wdXBMZWZ0ID0gbmV3TGVmdCAtIHBvcHVwV2lkdGggLSAxMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcG9wdXAuc3R5bGUudG9wID0gYCR7bmV3VG9wfXB4YDtcbiAgICAgICAgcG9wdXAuc3R5bGUubGVmdCA9IGAke3BvcHVwTGVmdH1weGA7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBjbG9zZURyYWdFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcbiAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcbiAgICAgIG1hbmFnZXIudXBkYXRlTW9kdWxlUG9zaXRpb24obW9kdWxlLm5hbWUsIGVsZW1lbnQub2Zmc2V0TGVmdCwgZWxlbWVudC5vZmZzZXRUb3ApO1xuICAgIH07XG5cbiAgICBlbGVtZW50Lm9ubW91c2Vkb3duID0gZHJhZ01vdXNlRG93bjtcbiAgICBlbGVtZW50Lm9uY29udGV4dG1lbnUgPSAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zaG93SFVEU2V0dGluZ3NQb3B1cChlLCBtb2R1bGUsIG1hbmFnZXIsIGVsZW1lbnQpO1xuICAgIH07XG4gICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gIH0sXG5cbiAgc2hvd0hVRFNldHRpbmdzUG9wdXAoZSwgbW9kdWxlLCBtYW5hZ2VyLCBlbGVtZW50KSB7XG4gICAgdGhpcy5jbG9zZUhVRFNldHRpbmdzUG9wdXAoKTsgXG5cbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcHVwLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1odWQtc2V0dGluZ3MtcG9wdXAnO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktaHVkLXBvcHVwLWhlYWRlcic7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBtb2R1bGUubmFtZTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1odWQtcG9wdXAtY2xvc2UtYnRuJztcbiAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG4gICAgY2xvc2VCdG4ub25jbGljayA9ICgpID0+IHRoaXMuY2xvc2VIVURTZXR0aW5nc1BvcHVwKCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBzZXR0aW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1odWQtcG9wdXAtYm9keSc7XG4gICAgbW9kdWxlLnNldHRpbmdzLmZvckVhY2goc2V0dGluZyA9PiB7XG4gICAgICBjb25zdCBzZXR0aW5nRWxlbWVudCA9IHRoaXMuY3JlYXRlU2V0dGluZ0VsZW1lbnQobW9kdWxlLCBzZXR0aW5nLCBtYW5hZ2VyKTtcbiAgICAgIGlmIChzZXR0aW5nRWxlbWVudCkge1xuICAgICAgICBzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR0aW5nRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQoc2V0dGluZ3NDb250YWluZXIpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1odWQtcG9wdXAtZm9vdGVyJztcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2V0QnRuLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1odWQtcG9wdXAtcmVzZXQtYnRuJztcbiAgICByZXNldEJ0bi50ZXh0Q29udGVudCA9ICdSZXNldCB0byBEZWZhdWx0cyc7XG4gICAgcmVzZXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIG1hbmFnZXIucmVzZXRNb2R1bGVTZXR0aW5ncyhtb2R1bGUubmFtZSk7XG4gICAgICB0aGlzLnNob3dIVURTZXR0aW5nc1BvcHVwKGUsIG1hbmFnZXIuZ2V0KG1vZHVsZS5uYW1lKSwgbWFuYWdlciwgZWxlbWVudCk7XG4gICAgfTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xuICAgIHBvcHVwLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgICBcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHBvcHVwV2lkdGggPSBwb3B1cC5vZmZzZXRXaWR0aDtcbiAgICBsZXQgcG9wdXBMZWZ0ID0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCArIDEwO1xuXG4gICAgLy8gQ2hlY2sgaWYgcG9wdXAgZ29lcyBvZmYtc2NyZWVuXG4gICAgaWYgKHBvcHVwTGVmdCArIHBvcHVwV2lkdGggPiBzY3JlZW5XaWR0aCkge1xuICAgICAgcG9wdXBMZWZ0ID0gcmVjdC5sZWZ0IC0gcG9wdXBXaWR0aCAtIDEwO1xuICAgIH1cblxuICAgIHBvcHVwLnN0eWxlLnRvcCA9IGAke3JlY3QudG9wfXB4YDtcbiAgICBwb3B1cC5zdHlsZS5sZWZ0ID0gYCR7cG9wdXBMZWZ0fXB4YDtcblxuICAgIHRoaXMuYWN0aXZlSFVEU2V0dGluZ3NQb3B1cCA9IHsgZWxlbWVudDogcG9wdXAsIG1vZHVsZU5hbWU6IG1vZHVsZS5uYW1lIH07XG4gIH0sXG5cbiAgY2xvc2VIVURTZXR0aW5nc1BvcHVwKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZUhVRFNldHRpbmdzUG9wdXApIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5hY3RpdmVIVURTZXR0aW5nc1BvcHVwLmVsZW1lbnQpO1xuICAgICAgdGhpcy5hY3RpdmVIVURTZXR0aW5nc1BvcHVwID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlQ29udGVudChtYW5hZ2VyKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbnRlbnQnO1xuICAgIFxuICAgIC8vIEluaXRpYWwgY29udGVudCBwb3B1bGF0aW9uXG4gICAgdGhpcy5wb3B1bGF0ZU1vZHVsZXNDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpO1xuICAgIFxuICAgIHJldHVybiBjb250ZW50O1xuICB9LFxuXG4gIHVwZGF0ZUNvbnRlbnQobWFuYWdlcikge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LWNvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlVmlldyA9PT0gJ3NldHRpbmdzJykge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzLXZpZXctYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZXR0aW5ncy12aWV3LWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFjdGl2ZVNldHRpbmdzTW9kdWxlKSB7XG4gICAgICB0aGlzLnBvcHVsYXRlU2V0dGluZ3NDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVWaWV3ID09PSAnc2V0dGluZ3MnKSB7XG4gICAgICB0aGlzLnJlbmRlclNldHRpbmdzU2NyZWVuKGNvbnRlbnQsIG1hbmFnZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcHVsYXRlTW9kdWxlc0NvbnRlbnQoY29udGVudCwgbWFuYWdlcik7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlclNldHRpbmdzU2NyZWVuKGNvbnRlbnQsIG1hbmFnZXIpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmdzLWhlYWRlcic7XG4gICAgXG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJhY2tCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWJhY2stYnRuJztcbiAgICBiYWNrQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+IEJhY2snO1xuICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlVmlldyA9ICdtb2R1bGVzJztcbiAgICAgICAgdGhpcy5hY3RpdmVTZXR0aW5nc01vZHVsZSA9IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlQ29udGVudChtYW5hZ2VyKTtcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdTZXR0aW5ncyc7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYmFja0J0bik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBzZXR0aW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctc2NyZWVuLWNvbnRlbnQnO1xuXG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYnMuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbmZpZy10YWJzLXZlcnRpY2FsJztcbiAgICB0YWJzLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlcmVuaXR5LWNvbmZpZy10YWIgYWN0aXZlXCIgZGF0YS10YWI9XCJUaGVtZXNcIj5UaGVtZXM8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlcmVuaXR5LWNvbmZpZy10YWJcIiBkYXRhLXRhYj1cIkNvbmZpZ1wiPkNvbmZpZzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2VyZW5pdHktY29uZmlnLXRhYlwiIGRhdGEtdGFiPVwiU2NyaXB0aW5nXCI+U2NyaXB0aW5nPC9idXR0b24+XG4gICAgYDtcbiAgICBzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJzKTtcbiAgICBcbiAgICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFiQ29udGVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29uZmlnLXRhYi1jb250ZW50JztcbiAgICBzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJDb250ZW50KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2V0dGluZ3NDb250YWluZXIpO1xuXG4gICAgdGFicy5xdWVyeVNlbGVjdG9yQWxsKCcuc2VyZW5pdHktY29uZmlnLXRhYicpLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFicy5xdWVyeVNlbGVjdG9yQWxsKCcuc2VyZW5pdHktY29uZmlnLXRhYicpLmZvckVhY2godCA9PiB0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ29uZmlnVGFiID0gdGFiLmRhdGFzZXQudGFiO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDb25maWdDb250ZW50KG1hbmFnZXIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyQ29uZmlnQ29udGVudChtYW5hZ2VyKTtcbiAgfSxcblxuICByZW5kZXJDb25maWdDb250ZW50KG1hbmFnZXIpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1jb25maWctdGFiLWNvbnRlbnQnKTtcbiAgICBpZiAoIWNvbnRlbnQpIHJldHVybjtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgc3dpdGNoICh0aGlzLmFjdGl2ZUNvbmZpZ1RhYikge1xuICAgICAgICBjYXNlICdUaGVtZXMnOlxuICAgICAgICAgICAgdGhpcy5yZW5kZXJUaGVtZXNDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0NvbmZpZyc6XG4gICAgICAgICAgICB0aGlzLnJlbmRlckNvbmZpZ1N1YkNvbnRlbnQoY29udGVudCwgbWFuYWdlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU2NyaXB0aW5nJzpcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU2NyaXB0aW5nQ29udGVudChjb250ZW50LCBtYW5hZ2VyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXJUaGVtZXNDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpIHtcbiAgICBjb25zdCB0aGVtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoZW1lQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS10aGVtZS1lZGl0b3InO1xuXG4gICAgLy8gLS0gU2VjdGlvbjogQWNjZW50IENvbG9yIC0tXG4gICAgY29uc3QgYWNjZW50SGVhZGVyID0gdGhpcy5jcmVhdGVTZWN0aW9uSGVhZGVyKCdBY2NlbnQgQ29sb3InLCAnU2V0cyB0aGUgbWFpbiBjb2xvciBmb3IgVUkgZWxlbWVudHMuJyk7XG4gICAgdGhlbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYWNjZW50SGVhZGVyKTtcblxuICAgIGNvbnN0IGFjY2VudENvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhY2NlbnRDb250cm9sLmNsYXNzTmFtZSA9ICdzZXJlbml0eS10aGVtZS1jb250cm9sJztcbiAgICBjb25zdCBjb2xvclBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29sb3JQaWNrZXIudHlwZSA9ICdjb2xvcic7XG4gICAgY29sb3JQaWNrZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRoZW1lLWNvbG9yLXBpY2tlcic7XG4gICAgY29sb3JQaWNrZXIudmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wcmltYXJ5JykudHJpbSgpO1xuICAgIFxuICAgIGNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q29sb3IgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnknLCBuZXdDb2xvcik7XG4gICAgICAgIC8vIFlvdSBtaWdodCBuZWVkIGEgbW9yZSByb2J1c3Qgd2F5IHRvIGhhbmRsZSB0aGUgZGFya2VyIHNoYWRlXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5LWRhcmsnLCB0aGlzLnNoYWRlQ29sb3IobmV3Q29sb3IsIC0yMCkpO1xuICAgICAgICBtYW5hZ2VyLnNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgfSk7XG4gICAgYWNjZW50Q29udHJvbC5hcHBlbmRDaGlsZChjb2xvclBpY2tlcik7XG4gICAgdGhlbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYWNjZW50Q29udHJvbCk7XG5cbiAgICAvLyAtLSBTZWN0aW9uOiBQYW5lbCBTdHlsZSAtLVxuICAgIGNvbnN0IHBhbmVsSGVhZGVyID0gdGhpcy5jcmVhdGVTZWN0aW9uSGVhZGVyKCdQYW5lbCBTdHlsZScsICdDdXN0b21pemUgdGhlIGxvb2sgb2YgVUkgYmFja2dyb3VuZHMuJyk7XG4gICAgdGhlbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFuZWxIZWFkZXIpO1xuXG4gICAgY29uc3QgcGFuZWxDb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhbmVsQ29udHJvbHMuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRoZW1lLXBhbmVsLWNvbnRyb2xzJztcblxuICAgIC8vIFBhbmVsIENvbG9yXG4gICAgY29uc3QgcGFuZWxDb2xvckNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYW5lbENvbG9yQ29udHJvbC5jbGFzc05hbWUgPSAnc2VyZW5pdHktdGhlbWUtY29udHJvbC1ncm91cCc7XG4gICAgcGFuZWxDb2xvckNvbnRyb2wuaW5uZXJIVE1MID0gYDxsYWJlbD5QYW5lbCBDb2xvcjwvbGFiZWw+YDtcbiAgICBjb25zdCBwYW5lbENvbG9yUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwYW5lbENvbG9yUGlja2VyLnR5cGUgPSAnY29sb3InO1xuICAgIHBhbmVsQ29sb3JQaWNrZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXRoZW1lLWNvbG9yLXBpY2tlcic7XG4gICAgY29uc3QgaW5pdGlhbFBhbmVsQ29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wYW5lbC1iYXNlJykudHJpbSgpO1xuICAgIHBhbmVsQ29sb3JQaWNrZXIudmFsdWUgPSBpbml0aWFsUGFuZWxDb2xvcjtcblxuICAgIHBhbmVsQ29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcGFuZWwtYmFzZScsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgbWFuYWdlci5zYXZlQ29uZmlndXJhdGlvbigpO1xuICAgIH0pO1xuICAgIHBhbmVsQ29sb3JDb250cm9sLmFwcGVuZENoaWxkKHBhbmVsQ29sb3JQaWNrZXIpO1xuICAgIHBhbmVsQ29udHJvbHMuYXBwZW5kQ2hpbGQocGFuZWxDb2xvckNvbnRyb2wpO1xuXG4gICAgLy8gUGFuZWwgT3BhY2l0eVxuICAgIGNvbnN0IHBhbmVsT3BhY2l0eUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYW5lbE9wYWNpdHlDb250cm9sLmNsYXNzTmFtZSA9ICdzZXJlbml0eS10aGVtZS1jb250cm9sLWdyb3VwJztcbiAgICBwYW5lbE9wYWNpdHlDb250cm9sLmlubmVySFRNTCA9IGA8bGFiZWw+UGFuZWwgT3BhY2l0eTwvbGFiZWw+YDtcbiAgICBjb25zdCBwYW5lbE9wYWNpdHlTbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHBhbmVsT3BhY2l0eVNsaWRlci50eXBlID0gJ3JhbmdlJztcbiAgICBwYW5lbE9wYWNpdHlTbGlkZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNsaWRlcic7XG4gICAgcGFuZWxPcGFjaXR5U2xpZGVyLm1pbiA9IDA7XG4gICAgcGFuZWxPcGFjaXR5U2xpZGVyLm1heCA9IDE7XG4gICAgcGFuZWxPcGFjaXR5U2xpZGVyLnN0ZXAgPSAwLjAxO1xuICAgIGNvbnN0IGluaXRpYWxPcGFjaXR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tcGFuZWwtb3BhY2l0eScpLnRyaW0oKTtcbiAgICBwYW5lbE9wYWNpdHlTbGlkZXIudmFsdWUgPSBpbml0aWFsT3BhY2l0eTtcblxuICAgIHBhbmVsT3BhY2l0eVNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wYW5lbC1vcGFjaXR5JywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBtYW5hZ2VyLnNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgfSk7XG4gICAgcGFuZWxPcGFjaXR5Q29udHJvbC5hcHBlbmRDaGlsZChwYW5lbE9wYWNpdHlTbGlkZXIpO1xuICAgIHBhbmVsQ29udHJvbHMuYXBwZW5kQ2hpbGQocGFuZWxPcGFjaXR5Q29udHJvbCk7XG5cbiAgICB0aGVtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYW5lbENvbnRyb2xzKTtcblxuICAgIC8vIC0tIFNlY3Rpb246IFByZS1tYWRlIFRoZW1lcyAtLVxuICAgIGNvbnN0IHRoZW1lc0hlYWRlciA9IHRoaXMuY3JlYXRlU2VjdGlvbkhlYWRlcignVGhlbWVzJywgJ1NlbGVjdCBmcm9tIGEgcHJlLW1hZGUgY29sb3Igc2NoZW1lLicpO1xuICAgIHRoZW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoZW1lc0hlYWRlcik7XG5cbiAgICBjb25zdCB0aGVtZXNHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhlbWVzR3JpZC5jbGFzc05hbWUgPSAnc2VyZW5pdHktdGhlbWVzLWdyaWQnO1xuICAgIFxuICAgIGNvbnN0IHRoZW1lcyA9IFtcbiAgICAgICAgeyBuYW1lOiAnU2VyZW5pdHknLCBjb2xvcjogJyM1RTcyRUInIH0sXG4gICAgICAgIHsgbmFtZTogJ1N1bnNldCcsIGNvbG9yOiAnI0U1NEI0QicgfSxcbiAgICAgICAgeyBuYW1lOiAnRW1lcmFsZCcsIGNvbG9yOiAnIzNmOWE1NicgfSxcbiAgICAgICAgeyBuYW1lOiAnR29sZGVucm9kJywgY29sb3I6ICcjY2RhMzRhJyB9LFxuICAgICAgICB7IG5hbWU6ICdBbWV0aHlzdCcsIGNvbG9yOiAnIzliNTliNicgfSxcbiAgICBdO1xuXG4gICAgdGhlbWVzLmZvckVhY2godGhlbWUgPT4ge1xuICAgICAgICBjb25zdCB0aGVtZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhlbWVDYXJkLmNsYXNzTmFtZSA9ICdzZXJlbml0eS10aGVtZS1jYXJkJztcbiAgICAgICAgdGhlbWVDYXJkLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwic2VyZW5pdHktdGhlbWUtcHJldmlld1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcn07XCI+PC9kaXY+PHNwYW4+JHt0aGVtZS5uYW1lfTwvc3Bhbj5gO1xuICAgICAgICB0aGVtZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeScsIHRoZW1lLmNvbG9yKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5LWRhcmsnLCB0aGlzLnNoYWRlQ29sb3IodGhlbWUuY29sb3IsIC0yMCkpO1xuICAgICAgICAgICAgY29sb3JQaWNrZXIudmFsdWUgPSB0aGVtZS5jb2xvcjtcbiAgICAgICAgICAgIG1hbmFnZXIuc2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoZW1lc0dyaWQuYXBwZW5kQ2hpbGQodGhlbWVDYXJkKTtcbiAgICB9KTtcblxuICAgIHRoZW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoZW1lc0dyaWQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhlbWVDb250YWluZXIpO1xuICB9LFxuXG4gIGNyZWF0ZVNlY3Rpb25IZWFkZXIodGl0bGUsIHN1YnRpdGxlKSB7XG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhlYWRlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2VjdGlvbi1zdWJoZWFkZXInO1xuICAgICAgaGVhZGVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlcmVuaXR5LXN1YmhlYWRlci10aXRsZVwiPiR7dGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZXJlbml0eS1zdWJoZWFkZXItc3VidGl0bGVcIj4ke3N1YnRpdGxlfTwvZGl2PlxuICAgICAgYDtcbiAgICAgIHJldHVybiBoZWFkZXI7XG4gIH0sXG4gICAgXG4gIHJlbmRlckNvbmZpZ1N1YkNvbnRlbnQoY29udGVudCwgbWFuYWdlcikge1xuICAgIGNvbnN0IGNvbmZpZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpZ0NvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29uZmlnLWVkaXRvcic7XG5cbiAgICAvLyAtLS0gTEVGVCBDT0xVTU4gLS0tXG4gICAgY29uc3QgbGVmdENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRDb2x1bW4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbmZpZy1jb2x1bW4nO1xuXG4gICAgLy8gLS0gU2VjdGlvbjogR2VuZXJhbCAtLVxuICAgIGNvbnN0IGdlbmVyYWxIZWFkZXIgPSB0aGlzLmNyZWF0ZVNlY3Rpb25IZWFkZXIoJ0dlbmVyYWwnLCAnTWFuYWdlIGhvdyB5b3VyIGNvbmZpZ3VyYXRpb24gaXMgaGFuZGxlZC4nKTtcbiAgICBsZWZ0Q29sdW1uLmFwcGVuZENoaWxkKGdlbmVyYWxIZWFkZXIpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3NHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0dGluZ3NHcmlkLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctY29udHJvbHMtZ3JpZCc7XG4gICAgXG4gICAgY29uc3QgYXV0b1NhdmVTZXR0aW5nID0gdGhpcy5jcmVhdGVUb2dnbGVTZXR0aW5nKCdBdXRvIFNhdmUnLCAnQXV0b21hdGljYWxseSBzYXZlIGNoYW5nZXMuJywgbWFuYWdlci5hdXRvU2F2ZSwgKHZhbHVlKSA9PiB7XG4gICAgICBtYW5hZ2VyLmF1dG9TYXZlID0gdmFsdWU7XG4gICAgICBtYW5hZ2VyLmZvcmNlU2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICB9KTtcbiAgICBzZXR0aW5nc0dyaWQuYXBwZW5kQ2hpbGQoYXV0b1NhdmVTZXR0aW5nKTtcblxuICAgIGNvbnN0IGF1dG9Mb2FkU2V0dGluZyA9IHRoaXMuY3JlYXRlVG9nZ2xlU2V0dGluZygnQXV0byBMb2FkJywgJ0xvYWQgY29uZmlnIG9uIHN0YXJ0dXAuJywgbWFuYWdlci5hdXRvTG9hZCwgKHZhbHVlKSA9PiB7XG4gICAgICBtYW5hZ2VyLmF1dG9Mb2FkID0gdmFsdWU7XG4gICAgICBtYW5hZ2VyLmZvcmNlU2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICB9KTtcbiAgICBzZXR0aW5nc0dyaWQuYXBwZW5kQ2hpbGQoYXV0b0xvYWRTZXR0aW5nKTtcbiAgICBsZWZ0Q29sdW1uLmFwcGVuZENoaWxkKHNldHRpbmdzR3JpZCk7XG4gICAgXG4gICAgLy8gLS0gU2VjdGlvbjogTWFudWFsIENvbnRyb2wgLS1cbiAgICBjb25zdCBtYW51YWxIZWFkZXIgPSB0aGlzLmNyZWF0ZVNlY3Rpb25IZWFkZXIoJ01hbnVhbCBDb250cm9sJywgJ01hbnVhbGx5IHNhdmUgb3IgbG9hZCB0aGUgY3VycmVudCBjb25maWcuJyk7XG4gICAgbGVmdENvbHVtbi5hcHBlbmRDaGlsZChtYW51YWxIZWFkZXIpO1xuXG4gICAgY29uc3QgbWFudWFsQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hbnVhbEJ1dHRvbnMuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbmZpZy1tYW51YWwtYnV0dG9ucyc7XG5cbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZUJ0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktYnRuJztcbiAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ0ZvcmNlIFNhdmUnO1xuICAgIHNhdmVCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIG1hbmFnZXIuZm9yY2VTYXZlQ29uZmlndXJhdGlvbigpO1xuICAgICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdTYXZlZCEnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHNhdmVCdG4udGV4dENvbnRlbnQgPSAnRm9yY2UgU2F2ZSc7IH0sIDIwMDApO1xuICAgIH07XG4gICAgbWFudWFsQnV0dG9ucy5hcHBlbmRDaGlsZChzYXZlQnRuKTtcbiAgICBcbiAgICBjb25zdCBsb2FkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbG9hZEJ0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktYnRuJztcbiAgICBsb2FkQnRuLnRleHRDb250ZW50ID0gJ0ZvcmNlIExvYWQnO1xuICAgIGxvYWRCdG4ub25jbGljayA9ICgpID0+IG1hbmFnZXIubG9hZENvbmZpZ3VyYXRpb24oKTtcbiAgICBtYW51YWxCdXR0b25zLmFwcGVuZENoaWxkKGxvYWRCdG4pO1xuICAgIGxlZnRDb2x1bW4uYXBwZW5kQ2hpbGQobWFudWFsQnV0dG9ucyk7XG4gICAgXG4gICAgY29uZmlnQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRDb2x1bW4pO1xuXG4gICAgLy8gLS0tIFJJR0hUIENPTFVNTiAtLS1cbiAgICBjb25zdCByaWdodENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0Q29sdW1uLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jb25maWctY29sdW1uJztcblxuICAgIGNvbnN0IGltcG9ydEV4cG9ydEhlYWRlciA9IHRoaXMuY3JlYXRlU2VjdGlvbkhlYWRlcignSW1wb3J0IC8gRXhwb3J0JywgJ1NoYXJlIHlvdXIgY29uZmlndXJhdGlvbiB3aXRoIG90aGVycy4nKTtcbiAgICByaWdodENvbHVtbi5hcHBlbmRDaGlsZChpbXBvcnRFeHBvcnRIZWFkZXIpO1xuXG4gICAgY29uc3QgaW1wb3J0RXhwb3J0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1wb3J0RXhwb3J0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1pbXBvcnQtZXhwb3J0LWJ1dHRvbnMnO1xuICAgIFxuICAgIGNvbnN0IGltcG9ydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGltcG9ydEJ0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktYnRuIHNlcmVuaXR5LWJ0bi1wcmltYXJ5JztcbiAgICBpbXBvcnRCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLXVwbG9hZFwiPjwvaT4gSW1wb3J0IGZyb20gRmlsZWA7XG4gICAgaW1wb3J0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgICAgaW5wdXQuYWNjZXB0ID0gJy5qc29uJztcbiAgICAgIGlucHV0Lm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICBpZiAoIWZpbGUpIHJldHVybjtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBtYW5hZ2VyLmltcG9ydENvbmZpZ3VyYXRpb24oZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0NvbmZpZ3VyYXRpb24gaW1wb3J0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBpbXBvcnQgY29uZmlndXJhdGlvbi4gVGhlIGZpbGUgbWF5IGJlIGNvcnJ1cHQgb3IgaW1wcm9wZXJseSBmb3JtYXR0ZWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgICAgfTtcbiAgICAgIGlucHV0LmNsaWNrKCk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBleHBvcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBleHBvcnRCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWJ0bic7XG4gICAgZXhwb3J0QnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1kb3dubG9hZFwiPjwvaT4gRXhwb3J0IHRvIEZpbGVgO1xuICAgIGV4cG9ydEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgY29uZmlnID0gbWFuYWdlci5leHBvcnRDb25maWd1cmF0aW9uKCk7XG4gICAgICBjb25zdCBjb25maWdTdHIgPSBKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDIpO1xuXG4gICAgICAvLyBDb3B5IHRvIGNsaXBib2FyZFxuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29uZmlnU3RyKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLnNob3coe1xuICAgICAgICAgICAgdGl0bGU6ICdDb25maWcgRXhwb3J0ZWQnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0NvbmZpZ3VyYXRpb24gY29waWVkIHRvIGNsaXBib2FyZC4nLFxuICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIERvd25sb2FkIGFzIGZpbGVcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY29uZmlnU3RyXSwge3R5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBhLmhyZWYgPSB1cmw7XG4gICAgICBhLmRvd25sb2FkID0gJ3NlcmVuaXR5LWNvbmZpZy5qc29uJztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICBhLmNsaWNrKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIH07XG5cbiAgICBpbXBvcnRFeHBvcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1wb3J0QnRuKTtcbiAgICBpbXBvcnRFeHBvcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZXhwb3J0QnRuKTtcblxuICAgIHJpZ2h0Q29sdW1uLmFwcGVuZENoaWxkKGltcG9ydEV4cG9ydENvbnRhaW5lcik7XG5cbiAgICBjb25maWdDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRDb2x1bW4pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29uZmlnQ29udGFpbmVyKTtcbiAgfSxcblxuICByZW5kZXJTY3JpcHRpbmdDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpIHtcbiAgICAvLyBQbGFjZWhvbGRlciBmb3IgU2NyaXB0aW5nXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInNlcmVuaXR5LXBsYWNlaG9sZGVyXCI+U2NyaXB0aW5nIGNvbWluZyBzb29uLi4uPC9kaXY+YDtcbiAgfSxcblxuICBzaGFkZUNvbG9yKGNvbG9yLCBwZXJjZW50KSB7XG4gICAgbGV0IFIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwzKSwxNik7XG4gICAgbGV0IEcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMyw1KSwxNik7XG4gICAgbGV0IEIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoNSw3KSwxNik7XG5cbiAgICBSID0gcGFyc2VJbnQoUiAqICgxMDAgKyBwZXJjZW50KSAvIDEwMCk7XG4gICAgRyA9IHBhcnNlSW50KEcgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xuICAgIEIgPSBwYXJzZUludChCICogKDEwMCArIHBlcmNlbnQpIC8gMTAwKTtcblxuICAgIFIgPSAoUjwyNTUpP1I6MjU1OyAgXG4gICAgRyA9IChHPDI1NSk/RzoyNTU7ICBcbiAgICBCID0gKEI8MjU1KT9COjI1NTsgIFxuXG4gICAgY29uc3QgUlIgPSAoKFIudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrUi50b1N0cmluZygxNik6Ui50b1N0cmluZygxNikpO1xuICAgIGNvbnN0IEdHID0gKChHLnRvU3RyaW5nKDE2KS5sZW5ndGg9PTEpP1wiMFwiK0cudG9TdHJpbmcoMTYpOkcudG9TdHJpbmcoMTYpKTtcbiAgICBjb25zdCBCQiA9ICgoQi50b1N0cmluZygxNikubGVuZ3RoPT0xKT9cIjBcIitCLnRvU3RyaW5nKDE2KTpCLnRvU3RyaW5nKDE2KSk7XG5cbiAgICByZXR1cm4gXCIjXCIrUlIrR0crQkI7XG4gIH0sXG5cbiAgcG9wdWxhdGVNb2R1bGVzQ29udGVudChjb250ZW50LCBtYW5hZ2VyKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZWN0aW9uLWhlYWRlcic7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLmFjdGl2ZUNhdGVnb3J5O1xuICAgIFxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzZWFyY2hJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHNlYXJjaElucHV0LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZWFyY2gtYmFyJztcbiAgICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdTZWFyY2guLi4nO1xuICAgIHNlYXJjaElucHV0LnZhbHVlID0gdGhpcy5zZWFyY2hRdWVyeTtcbiAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLmZpbHRlckFuZFJlbmRlck1vZHVsZXMobWFuYWdlcik7XG4gICAgfSk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbW9kdWxlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZHVsZXNDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1vZHVsZXMnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9kdWxlc0NvbnRhaW5lcik7XG5cbiAgICB0aGlzLmZpbHRlckFuZFJlbmRlck1vZHVsZXMobWFuYWdlcik7XG4gIH0sXG5cbiAgZmlsdGVyQW5kUmVuZGVyTW9kdWxlcyhtYW5hZ2VyKSB7XG4gICAgY29uc3QgbW9kdWxlc0NvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktbW9kdWxlcycpO1xuICAgIGlmICghbW9kdWxlc0NvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgbW9kdWxlc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICBjb25zdCBjYXRlZ29yeU1vZHVsZXMgPSBtYW5hZ2VyLmdldE1vZHVsZXNCeUNhdGVnb3J5KHRoaXMuYWN0aXZlQ2F0ZWdvcnkpO1xuICAgIGNvbnN0IGZpbHRlcmVkTW9kdWxlcyA9IGNhdGVnb3J5TW9kdWxlcy5maWx0ZXIobW9kID0+XG4gICAgICBtb2QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIFxuICAgIGZpbHRlcmVkTW9kdWxlcy5mb3JFYWNoKG1vZCA9PiB7XG4gICAgICBjb25zdCBtb2R1bGVDYXJkID0gdGhpcy5jcmVhdGVNb2R1bGVDYXJkKG1vZCwgbWFuYWdlcik7XG4gICAgICBtb2R1bGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZHVsZUNhcmQpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNyZWF0ZU1vZHVsZUNhcmQobW9kLCBtYW5hZ2VyKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1vZHVsZSc7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1tb2R1bGUtaGVhZGVyJztcbiAgICBcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZS5jbGFzc05hbWUgPSAnc2VyZW5pdHktbW9kdWxlLW5hbWUnO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBtb2QubmFtZTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRyb2xzLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1tb2R1bGUtY29udHJvbHMnO1xuXG4gICAgaWYgKG1vZC5zZXR0aW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZXR0aW5nc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgc2V0dGluZ3NCdG4uY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1vZHVsZS1zZXR0aW5ncy1idG4nO1xuICAgICAgc2V0dGluZ3NCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWNvZ1wiPjwvaT4nO1xuICAgICAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmFjdGl2ZVNldHRpbmdzTW9kdWxlID0gbW9kO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQobWFuYWdlcik7XG4gICAgICB9KTtcbiAgICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKHNldHRpbmdzQnRuKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9nZ2xlLmNsYXNzTmFtZSA9IGBzZXJlbml0eS1tb2R1bGUtdG9nZ2xlICR7bW9kLmVuYWJsZWQgPyAnZW5hYmxlZCcgOiAnJ31gO1xuICAgIHRvZ2dsZS5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJzZXJlbml0eS10b2dnbGUtc2xpZGVyXCI+PC9zcGFuPic7XG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWFuYWdlci50b2dnbGUobW9kLm5hbWUpO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2VuYWJsZWQnKTtcbiAgICB9KTtcbiAgICBjb250cm9scy5hcHBlbmRDaGlsZCh0b2dnbGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250cm9scyk7XG4gICAgXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIFxuICAgIGlmIChtb2QuZGVzY3JpcHRpb24pIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnc2VyZW5pdHktbW9kdWxlLWRlc2NyaXB0aW9uJztcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbW9kLmRlc2NyaXB0aW9uO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjYXJkO1xuICB9LFxuXG4gIHBvcHVsYXRlU2V0dGluZ3NDb250ZW50KGNvbnRlbnQsIG1hbmFnZXIpIHtcbiAgICBjb25zdCBtb2QgPSB0aGlzLmFjdGl2ZVNldHRpbmdzTW9kdWxlO1xuICAgIGlmICghbW9kKSByZXR1cm47XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjdGlvbi5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2VjdGlvbic7XG5cbiAgICAvLyBIZWFkZXIgd2l0aCBiYWNrIGJ1dHRvblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZ3MtaGVhZGVyJztcbiAgICBcbiAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYmFja0J0bi5jbGFzc05hbWUgPSAnc2VyZW5pdHktYmFjay1idG4nO1xuICAgIGJhY2tCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4gQmFjayc7XG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlU2V0dGluZ3NNb2R1bGUgPSBudWxsO1xuICAgICAgdGhpcy51cGRhdGVDb250ZW50KG1hbmFnZXIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHttb2QubmFtZX0gU2V0dGluZ3NgO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgLy8gU2V0dGluZ3MgY29udGFpbmVyXG4gICAgY29uc3Qgc2V0dGluZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR0aW5nc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktbW9kdWxlLXNldHRpbmdzJztcbiAgICBcbiAgICBtb2Quc2V0dGluZ3MuZm9yRWFjaChzZXR0aW5nID0+IHtcbiAgICAgIGNvbnN0IHNldHRpbmdFbGVtZW50ID0gdGhpcy5jcmVhdGVTZXR0aW5nRWxlbWVudChtb2QsIHNldHRpbmcsIG1hbmFnZXIpO1xuICAgICAgaWYgKHNldHRpbmdFbGVtZW50KSB7XG4gICAgICAgIC8vIEhhbmRsZSBjb25kaXRpb25hbCB2aXNpYmlsaXR5XG4gICAgICAgIGlmIChzZXR0aW5nLmNvbmRpdGlvbikge1xuICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IHNldHRpbmcuY29uZGl0aW9uKG1vZC5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KSk7XG4gICAgICAgICAgc2V0dGluZ0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZSA/ICcnIDogJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHNldHRpbmdzQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICB9LFxuXG4gIGNyZWF0ZVNldHRpbmdFbGVtZW50KG1vZHVsZSwgc2V0dGluZywgbWFuYWdlcikge1xuICAgIGNvbnN0IHNldHRpbmdXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0dGluZ1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmcnO1xuICAgIHNldHRpbmdXcmFwcGVyLmRhdGFzZXQuc2V0dGluZ0lkID0gc2V0dGluZy5pZDtcblxuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5nLWluZm8nO1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5nLWxhYmVsJztcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IHNldHRpbmcubmFtZTtcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIGlmIChzZXR0aW5nLmRlc2NyaXB0aW9uKSB7XG4gICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgZGVzYy5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZy1kZXNjcmlwdGlvbic7XG4gICAgICBkZXNjLnRleHRDb250ZW50ID0gc2V0dGluZy5kZXNjcmlwdGlvbjtcbiAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgfVxuICAgIFxuICAgIHNldHRpbmdXcmFwcGVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuXG4gICAgY29uc3QgY29udHJvbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRyb2xDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LXNldHRpbmctY29udHJvbCc7XG4gICAgXG4gICAgc3dpdGNoIChzZXR0aW5nLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gc2V0dGluZy52YWx1ZTtcbiAgICAgICAgY2hlY2tib3guY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNoZWNrYm94JztcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICBtYW5hZ2VyLnVwZGF0ZU1vZHVsZVNldHRpbmcobW9kdWxlLm5hbWUsIHNldHRpbmcuaWQsIGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgICAgIHRoaXMudXBkYXRlQ29uZGl0aW9uYWxTZXR0aW5ncyhtb2R1bGUsIG1hbmFnZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udHJvbENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2xpZGVyJzpcbiAgICAgICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgc2xpZGVyLnR5cGUgPSAncmFuZ2UnO1xuICAgICAgICBzbGlkZXIubWluID0gc2V0dGluZy5taW47XG4gICAgICAgIHNsaWRlci5tYXggPSBzZXR0aW5nLm1heDtcbiAgICAgICAgc2xpZGVyLnN0ZXAgPSBzZXR0aW5nLnN0ZXA7XG4gICAgICAgIHNsaWRlci52YWx1ZSA9IHNldHRpbmcudmFsdWU7XG4gICAgICAgIHNsaWRlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2xpZGVyJztcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICBtYW5hZ2VyLnVwZGF0ZU1vZHVsZVNldHRpbmcobW9kdWxlLm5hbWUsIHNldHRpbmcuaWQsIHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRyb2xDb250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZWxlY3QnO1xuICAgICAgICBzZXR0aW5nLm9wdGlvbnMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdDtcbiAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHQ7XG4gICAgICAgICAgaWYgKHNldHRpbmcudmFsdWUgPT09IG9wdCkgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgIG1hbmFnZXIudXBkYXRlTW9kdWxlU2V0dGluZyhtb2R1bGUubmFtZSwgc2V0dGluZy5pZCwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIHRoaXMudXBkYXRlQ29uZGl0aW9uYWxTZXR0aW5ncyhtb2R1bGUsIG1hbmFnZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udHJvbENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0ZXh0SW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGV4dElucHV0LnZhbHVlID0gc2V0dGluZy52YWx1ZTtcbiAgICAgICAgdGV4dElucHV0LmNsYXNzTmFtZSA9ICdzZXJlbml0eS10ZXh0LWlucHV0JztcbiAgICAgICAgdGV4dElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgbWFuYWdlci51cGRhdGVNb2R1bGVTZXR0aW5nKG1vZHVsZS5uYW1lLCBzZXR0aW5nLmlkLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250cm9sQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRJbnB1dCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICBjb25zdCBjb2xvclBpY2tlciA9IHRoaXMuY3JlYXRlQ29sb3JQaWNrZXIobW9kdWxlLCBzZXR0aW5nLCBtYW5hZ2VyKTtcbiAgICAgICAgY29udHJvbENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvclBpY2tlcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBcbiAgICBzZXR0aW5nV3JhcHBlci5hcHBlbmRDaGlsZChjb250cm9sQ29udGFpbmVyKTtcbiAgICByZXR1cm4gc2V0dGluZ1dyYXBwZXI7XG4gIH0sXG5cbiAgdXBkYXRlQ29uZGl0aW9uYWxTZXR0aW5ncyhtb2R1bGUsIG1hbmFnZXIpIHtcbiAgICBjb25zdCBzZXR0aW5nc01hcCA9IG1vZHVsZS5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICBjb25zdCBzZXR0aW5nc0NvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktbW9kdWxlLXNldHRpbmdzJyk7XG4gICAgXG4gICAgbW9kdWxlLnNldHRpbmdzLmZvckVhY2gocyA9PiB7XG4gICAgICBpZiAocy5jb25kaXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ0VsZW1lbnQgPSBzZXR0aW5nc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zZXR0aW5nLWlkPVwiJHtzLmlkfVwiXWApO1xuICAgICAgICBpZiAoc2V0dGluZ0VsZW1lbnQpIHtcbiAgICAgICAgICBzZXR0aW5nRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gcy5jb25kaXRpb24oc2V0dGluZ3NNYXApID8gJycgOiAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvLyAtLS0gU3RhcnQgb2YgQ29sb3IgUGlja2VyIEhlbHBlciBGdW5jdGlvbnMgLS0tXG5cbiAgY3JlYXRlQ29sb3JQaWNrZXIobW9kdWxlLCBzZXR0aW5nLCBtYW5hZ2VyKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNvbG9yLXBpY2tlci13cmFwcGVyJztcblxuICAgIGNvbnN0IHN3YXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN3YXRjaC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29sb3Itc3dhdGNoJztcbiAgICBzd2F0Y2guc3R5bGUuY29sb3IgPSBzZXR0aW5nLnZhbHVlO1xuXG4gICAgY29uc3QgcG9wdXAgPSB0aGlzLmNyZWF0ZUNvbG9yUG9wdXAobW9kdWxlLCBzZXR0aW5nLCBtYW5hZ2VyLCBzd2F0Y2gpO1xuICAgIFxuICAgIHN3YXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1jb2xvci1wb3B1cCcpO1xuICAgICAgaWYgKGEgJiYgYSAhPT0gcG9wdXApIGEucmVtb3ZlKClcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyZW5pdHktY29sb3ItcG9wdXAnKSA9PT0gcG9wdXApIHtcbiAgICAgICAgICBwb3B1cC5yZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChwb3B1cCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHN3YXRjaCk7XG5cbiAgICAvLyBDbG9zZSBwb3B1cCB3aGVuIGNsaWNraW5nIGVsc2V3aGVyZVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmICghd3JhcHBlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgcG9wdXAucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfSxcblxuICBjcmVhdGVDb2xvclBvcHVwKG1vZHVsZSwgc2V0dGluZywgbWFuYWdlciwgc3dhdGNoKSB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29sb3ItcG9wdXAnO1xuXG4gICAgY29uc3QgY29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29sb3JJbnB1dC50eXBlID0gJ2NvbG9yJztcbiAgICBjb2xvcklucHV0LnZhbHVlID0gdGhpcy5yZ2JhVG9IZXgoc2V0dGluZy52YWx1ZSkuaGV4O1xuICAgIFxuICAgIGNvbnN0IGFscGhhU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhbHBoYVNsaWRlci50eXBlID0gJ3JhbmdlJztcbiAgICBhbHBoYVNsaWRlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2xpZGVyJztcbiAgICBhbHBoYVNsaWRlci5taW4gPSAwO1xuICAgIGFscGhhU2xpZGVyLm1heCA9IDE7XG4gICAgYWxwaGFTbGlkZXIuc3RlcCA9IDAuMDE7XG4gICAgYWxwaGFTbGlkZXIudmFsdWUgPSB0aGlzLnJnYmFUb0hleChzZXR0aW5nLnZhbHVlKS5hbHBoYTtcblxuICAgIGNvbnN0IHVwZGF0ZUNvbG9yID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGV4ID0gY29sb3JJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGFscGhhID0gcGFyc2VGbG9hdChhbHBoYVNsaWRlci52YWx1ZSk7XG4gICAgICBjb25zdCByZ2JhID0gdGhpcy5oZXhUb1JnYmEoaGV4LCBhbHBoYSk7XG4gICAgICBcbiAgICAgIHN3YXRjaC5zdHlsZS5jb2xvciA9IHJnYmE7XG4gICAgICBtYW5hZ2VyLnVwZGF0ZU1vZHVsZVNldHRpbmcobW9kdWxlLm5hbWUsIHNldHRpbmcuaWQsIHJnYmEpO1xuICAgIH07XG5cbiAgICBjb2xvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlQ29sb3IpO1xuICAgIGFscGhhU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlQ29sb3IpO1xuXG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQoY29sb3JJbnB1dCk7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQoYWxwaGFTbGlkZXIpO1xuICAgIHJldHVybiBwb3B1cDtcbiAgfSxcblxuICBoZXhUb1JnYmEoaGV4LCBhbHBoYSkge1xuICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KTtcbiAgICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNik7XG4gICAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpO1xuICAgIHJldHVybiBgcmdiYSgke3J9LCAke2d9LCAke2J9LCAke2FscGhhfSlgO1xuICB9LFxuXG4gIHJnYmFUb0hleChyZ2JhKSB7XG4gICAgaWYgKHJnYmEuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4geyBoZXg6IHJnYmEsIGFscGhhOiAxIH07XG4gICAgY29uc3QgcGFydHMgPSByZ2JhLm1hdGNoKC9bXFxkLl0rL2cpO1xuICAgIGlmICghcGFydHMgfHwgcGFydHMubGVuZ3RoIDwgMykgcmV0dXJuIHsgaGV4OiAnIzAwMDAwMCcsIGFscGhhOiAxIH07XG4gICAgXG4gICAgY29uc3QgciA9IHBhcnNlSW50KHBhcnRzWzBdKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBnID0gcGFyc2VJbnQocGFydHNbMV0pLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IGIgPSBwYXJzZUludChwYXJ0c1syXSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgXG4gICAgY29uc3QgYWxwaGEgPSBwYXJ0cy5sZW5ndGggPj0gNCA/IHBhcnNlRmxvYXQocGFydHNbM10pIDogMTtcbiAgICBcbiAgICByZXR1cm4geyBoZXg6IGAjJHtyfSR7Z30ke2J9YCwgYWxwaGEgfTtcbiAgfSxcblxuICBjcmVhdGVUb2dnbGVTZXR0aW5nKG5hbWUsIGRlc2NyaXB0aW9uLCBpbml0aWFsVmFsdWUsIG9uQ2hhbmdlKSB7XG4gICAgY29uc3Qgc2V0dGluZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR0aW5nV3JhcHBlci5jbGFzc05hbWUgPSAnc2VyZW5pdHktY29uZmlnLXRvZ2dsZS1zZXR0aW5nJztcblxuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXJlbml0eS1zZXR0aW5nLWluZm8nO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZy1sYWJlbCc7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzYy5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZy1kZXNjcmlwdGlvbic7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgICBjb25zdCBjb250cm9sQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udHJvbENvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VyZW5pdHktc2V0dGluZy1jb250cm9sJztcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGluaXRpYWxWYWx1ZTtcbiAgICBjaGVja2JveC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBvbkNoYW5nZShlLnRhcmdldC5jaGVja2VkKTtcbiAgICB9KTtcbiAgICBjb250cm9sQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBcbiAgICBzZXR0aW5nV3JhcHBlci5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcbiAgICBzZXR0aW5nV3JhcHBlci5hcHBlbmRDaGlsZChjb250cm9sQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBzZXR0aW5nV3JhcHBlcjtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaWNrR1VJO1xuIiwgImNvbnN0IEZQU0NvdW50ZXIgPSB7XG4gIG5hbWU6ICdGUFNDb3VudGVyJyxcbiAgY2F0ZWdvcnk6ICdWaXN1YWwnLFxuICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXlzIHlvdXIgY3VycmVudCBmcmFtZXMgcGVyIHNlY29uZC4nLFxuICBlbmFibGVkOiB0cnVlLFxuICBkZWZhdWx0WDogMTQ0MyxcbiAgZGVmYXVsdFk6IDQyMyxcbiAgc2V0dGluZ3M6IFtcbiAgICB7IGlkOiAnY29sb3ItbW9kZScsIG5hbWU6ICdDb2xvciBNb2RlJywgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnVGhlbWUnLCAnQ3VzdG9tJ10sIHZhbHVlOiAnVGhlbWUnIH0sXG4gICAgeyBpZDogJ2JnLWNvbG9yJywgbmFtZTogJ0JhY2tncm91bmQgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMzAsIDMzLCA0MSwgMC44NSknLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgIHsgaWQ6ICd0ZXh0LWNvbG9yJywgbmFtZTogJ1RleHQgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJyNFQUVBRUEnLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgIHsgaWQ6ICdmb250LXNpemUnLCBuYW1lOiAnRm9udCBTaXplJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxNCwgbWluOiA4LCBtYXg6IDI0LCBzdGVwOiAxIH0sXG4gICAgeyBpZDogJ3BhZGRpbmcnLCBuYW1lOiAnUGFkZGluZycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogOCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxIH0sXG4gICAgeyBpZDogJ2JvcmRlci1yYWRpdXMnLCBuYW1lOiAnQm9yZGVyIFJhZGl1cycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTAsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdib3JkZXItd2lkdGgnLCBuYW1lOiAnQm9yZGVyIFdpZHRoJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxLCBtaW46IDAsIG1heDogNSwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdib3JkZXItY29sb3InLCBuYW1lOiAnQm9yZGVyIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAnc2hvdy1sYWJlbCcsIG5hbWU6ICdTaG93IExhYmVsJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICAgIHsgaWQ6ICdmb3JtYXQnLCBuYW1lOiAnVGV4dCBGb3JtYXQnLCB0eXBlOiAndGV4dCcsIHZhbHVlOiAne2xhYmVsfSB7ZnBzfScsIGRlc2NyaXB0aW9uOiAnVXNlIHtsYWJlbH0gYW5kIHtmcHN9IGFzIHBsYWNlaG9sZGVycy4nIH0sXG4gICAgeyBpZDogJ2hpZGUtZ2FtZS1mcHMnLCBuYW1lOiAnSGlkZSBHYW1lIEZQUyBDb3VudGVyJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSwgZGVzY3JpcHRpb246ICdIaWRlIHRoZSBidWlsdC1pbiBnYW1lIEZQUyBjb3VudGVyJyB9LFxuICBdLFxuICBcbiAgZnJhbWVDb3VudDogMCxcbiAgbGFzdFRpbWU6IDAsXG4gIGZwczogMCxcbiAgZWxlbWVudDogbnVsbCxcbiAgZnJhbWVDYWxsYmFjazogbnVsbCxcbiAgZ2FtZUZwc0VsZW1lbnRzOiBudWxsLFxuICBnYW1lRnBzRGlzcGxheVN0eWxlOiBudWxsLFxuICBcbiAgb25FbmFibGUoKSB7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICB0aGlzLmxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy5mcHMgPSAwO1xuICAgIHRoaXMuY3JlYXRlRGlzcGxheSgpO1xuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICBcbiAgICB0aGlzLmZyYW1lQ2FsbGJhY2sgPSB0aGlzLmNvdW50RnJhbWUuYmluZCh0aGlzKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUNhbGxiYWNrKTtcbiAgICBcbiAgICB0aGlzLnVwZGF0ZUdhbWVGcHNWaXNpYmlsaXR5KCk7XG4gIH0sXG5cbiAgb25EaXNhYmxlKCkge1xuICAgIHRoaXMuZGVzdHJveURpc3BsYXkoKTtcbiAgICBcbiAgICB0aGlzLmZyYW1lQ2FsbGJhY2sgPSBudWxsO1xuICAgIFxuICAgIHRoaXMucmVzdG9yZUdhbWVGcHNDb3VudGVyKCk7XG4gIH0sXG4gIFxuICBjb3VudEZyYW1lKHRpbWVzdGFtcCkge1xuICAgIHRoaXMuZnJhbWVDb3VudCsrO1xuICAgIFxuICAgIGNvbnN0IGVsYXBzZWQgPSB0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lO1xuICAgIGlmIChlbGFwc2VkID49IDEwMDApIHtcbiAgICAgIHRoaXMuZnBzID0gTWF0aC5yb3VuZCgodGhpcy5mcmFtZUNvdW50ICogMTAwMCkgLyBlbGFwc2VkKTtcbiAgICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5mcmFtZUNhbGxiYWNrKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUNhbGxiYWNrKTtcbiAgICB9XG4gIH0sXG5cbiAgb25UaWNrKCkge1xuICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICB9LFxuICBcbiAgb25TZXR0aW5nVXBkYXRlKHNldHRpbmdJZCkge1xuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBcbiAgICBpZiAoc2V0dGluZ0lkID09PSAnaGlkZS1nYW1lLWZwcycpIHtcbiAgICAgIHRoaXMudXBkYXRlR2FtZUZwc1Zpc2liaWxpdHkoKTtcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlRGlzcGxheSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ2Zwcy1jb3VudGVyLWRpc3BsYXknO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfSxcblxuICBkZXN0cm95RGlzcGxheSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgXG4gIHVwZGF0ZUdhbWVGcHNWaXNpYmlsaXR5KCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICBcbiAgICBpZiAoc2V0dGluZ3NbJ2hpZGUtZ2FtZS1mcHMnXSkge1xuICAgICAgdGhpcy5oaWRlR2FtZUZwc0NvdW50ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXN0b3JlR2FtZUZwc0NvdW50ZXIoKTtcbiAgICB9XG4gIH0sXG4gIFxuICBoaWRlR2FtZUZwc0NvdW50ZXIoKSB7XG4gICAgY29uc3QgZnBzV3JhcHBlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5GcHNXcmFwcGVyRGl2Jyk7XG4gICAgaWYgKGZwc1dyYXBwZXJEaXYpIHtcbiAgICAgIHRoaXMuZ2FtZUZwc0VsZW1lbnRzID0gZnBzV3JhcHBlckRpdjtcbiAgICAgIHRoaXMuZ2FtZUZwc0Rpc3BsYXlTdHlsZSA9IGZwc1dyYXBwZXJEaXYuc3R5bGUuZGlzcGxheTtcbiAgICAgIFxuICAgICAgZnBzV3JhcHBlckRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSxcbiAgXG4gIHJlc3RvcmVHYW1lRnBzQ291bnRlcigpIHtcbiAgICBpZiAodGhpcy5nYW1lRnBzRWxlbWVudHMpIHtcbiAgICAgIHRoaXMuZ2FtZUZwc0VsZW1lbnRzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmdhbWVGcHNEaXNwbGF5U3R5bGUgfHwgJyc7XG4gICAgICB0aGlzLmdhbWVGcHNFbGVtZW50cyA9IG51bGw7XG4gICAgICB0aGlzLmdhbWVGcHNEaXNwbGF5U3R5bGUgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGVEaXNwbGF5KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGNsaWNrR3VpID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCgnQ2xpY2tHVUknKTtcbiAgICAgIGlmICghY2xpY2tHdWkgfHwgIWNsaWNrR3VpLmlzRWRpdGluZ0hVRCkge1xuICAgICAgICAgIGNvbnN0IG1vZCA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQodGhpcy5uYW1lKTtcbiAgICAgICAgICBpZiAobW9kLnggIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bW9kLnh9cHhgO1xuICAgICAgICAgIGlmIChtb2QueSAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke21vZC55fXB4YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICAgIGxldCB0ZXh0ID0gc2V0dGluZ3MuZm9ybWF0O1xuXG4gICAgICBpZiAoc2V0dGluZ3NbJ3Nob3ctbGFiZWwnXSkgdGV4dCA9IHRleHQucmVwbGFjZSgne2xhYmVsfScsICdGUFM6Jyk7IGVsc2UgdGV4dCA9IHRleHQucmVwbGFjZSgne2xhYmVsfScsICcnKTtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoJ3tmcHN9JywgdGhpcy5mcHMpO1xuICAgICAgXG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0LnRyaW0oKTtcbiAgICB9XG4gIH0sXG5cbiAgYXBwbHlTdHlsZXMoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgXG4gICAgaWYgKHNldHRpbmdzWydjb2xvci1tb2RlJ10gPT09ICdUaGVtZScpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1wYW5lbCknO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSAndmFyKC0tdGV4dCknO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYCR7c2V0dGluZ3NbJ2JvcmRlci13aWR0aCddfXB4IHNvbGlkIHZhcigtLWJvcmRlcilgO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZXR0aW5nc1snYmctY29sb3InXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gc2V0dGluZ3NbJ3RleHQtY29sb3InXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCAke3NldHRpbmdzWydib3JkZXItY29sb3InXX1gO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBgJHtzZXR0aW5nc1snZm9udC1zaXplJ119cHhgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gYCR7c2V0dGluZ3NbJ3BhZGRpbmcnXX1weGA7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IGAke3NldHRpbmdzWydib3JkZXItcmFkaXVzJ119cHhgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IDk5OTc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZQU0NvdW50ZXI7XG4iLCAibGV0IGNhY2hlZFBsYXllck5hbWUgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxheWVyTmFtZSgpIHtcbiAgICBpZiAoY2FjaGVkUGxheWVyTmFtZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUGxheWVyTmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGF0TWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQ2hhdE1lc3NhZ2VzIC5JbmRpdmlkdWFsVGV4dCcpO1xuICAgIFxuICAgIGNvbnN0IGpvaW5NZXNzYWdlcyA9IEFycmF5LmZyb20oY2hhdE1lc3NhZ2VzKS5maWx0ZXIobSA9PiBtLnRleHRDb250ZW50Py5pbmNsdWRlcygnIGpvaW5lZCcpKTtcblxuICAgIGlmIChqb2luTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBteUpvaW5NZXNzYWdlID0gam9pbk1lc3NhZ2VzW2pvaW5NZXNzYWdlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgdGV4dCA9IG15Sm9pbk1lc3NhZ2UudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0ZXh0LnNwbGl0KCcgam9pbmVkJylbMF0udHJpbSgpO1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgY2FjaGVkUGxheWVyTmFtZSA9IG5hbWU7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSBjb2xvciBpbiBhIHJhaW5ib3cgc2VxdWVuY2UgZm9yIHRoZSBVSS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFRoZSBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCBpbiBhIGxpc3QsIHVzZWQgdG8gb2Zmc2V0IHRoZSBodWUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3BlZWQgLSBUaGUgc3BlZWQgb2YgdGhlIGNvbG9yIGN5Y2xlLiBMb3dlciBpcyBmYXN0ZXIuIERlZmF1bHRzIHRvIDIwLlxuICogQHJldHVybnMge3N0cmluZ30gQW4gSFNMIGNvbG9yIHN0cmluZyAoZS5nLiwgXCJoc2woMTgwLCA5MCUsIDY1JSlcIikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYWluYm93Q29sb3IoaW5kZXgsIHNwZWVkID0gMjApIHtcbiAgY29uc3QgaHVlT2Zmc2V0ID0gRGF0ZS5ub3coKSAvIHNwZWVkO1xuICBjb25zdCBodWUgPSAoaW5kZXggKiAxNSArIGh1ZU9mZnNldCkgJSAzNjA7XG4gIHJldHVybiBgaHNsKCR7aHVlfSwgOTAlLCA2NSUpYDtcbn0gIiwgImltcG9ydCB7IGdldFBsYXllck5hbWUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmNvbnN0IEludGVyZmFjZSA9IHtcbiAgICBuYW1lOiAnSW50ZXJmYWNlJyxcbiAgICBjYXRlZ29yeTogJ1Zpc3VhbCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXBsYWNlcyB0aGUgZGVmYXVsdCBpbi1nYW1lIGhlYWRlciB3aXRoIGEgY3VzdG9taXphYmxlIG9uZS4nLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZGVmYXVsdFg6IDIsXG4gICAgZGVmYXVsdFk6IDcsXG4gICAgZWxlbWVudDogbnVsbCxcbiAgICBnYW1lSGVhZGVyOiBudWxsLFxuICAgIGdhbWVIZWFkZXJQYXJlbnQ6IG51bGwsXG4gICAgZ2FtZUhlYWRlck5leHRTaWJsaW5nOiBudWxsLFxuICAgIGxhc3RQbGF5ZXJOYW1lOiBudWxsLFxuICAgIG9ic2VydmVyOiBudWxsLFxuXG4gICAgc2V0dGluZ3M6IFtcbiAgICAgICAgeyBpZDogJ3JlbW92ZS1oZWFkZXInLCBuYW1lOiAnUmVtb3ZlIEdhbWUgSGVhZGVyJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSwgZGVzY3JpcHRpb246ICdGb3IgcGVyZm9ybWFuY2UsIG1vdmUgdGhlIGhlYWRlciBvZmYtc2NyZWVuIGluc3RlYWQgb2YganVzdCBoaWRpbmcgaXQuJyB9LFxuICAgICAgICB7IGlkOiAnY29sb3ItbW9kZScsIG5hbWU6ICdDb2xvciBNb2RlJywgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnVGhlbWUnLCAnQ3VzdG9tJ10sIHZhbHVlOiAnVGhlbWUnIH0sXG4gICAgICAgIHsgaWQ6ICdiZy1jb2xvcicsIG5hbWU6ICdCYWNrZ3JvdW5kIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDMwLCAzMywgNDEsIDAuODUpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgICAgeyBpZDogJ3RleHQtY29sb3InLCBuYW1lOiAnVGV4dCBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAnI0VBRUFFQScsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgICAgIHsgaWQ6ICdhY2NlbnQtY29sb3InLCBuYW1lOiAnQWNjZW50IENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjNUU3MkVCJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgICAgeyBpZDogJ2ZvbnQtc2l6ZScsIG5hbWU6ICdGb250IFNpemUnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDE2LCBtaW46IDEwLCBtYXg6IDI4LCBzdGVwOiAxIH0sXG4gICAgICAgIHsgaWQ6ICdwYWRkaW5nLXknLCBuYW1lOiAnUGFkZGluZyAoWSknLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDQsIG1pbjogMCwgbWF4OiAzMCwgc3RlcDogMSB9LFxuICAgICAgICB7IGlkOiAncGFkZGluZy14JywgbmFtZTogJ1BhZGRpbmcgKFgpJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiA2LCBtaW46IDAsIG1heDogMzAsIHN0ZXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ2JvcmRlci1yYWRpdXMnLCBuYW1lOiAnQm9yZGVyIFJhZGl1cycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTAsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSB9LFxuICAgICAgICB7IGlkOiAnYm9yZGVyLXdpZHRoJywgbmFtZTogJ0JvcmRlciBXaWR0aCcsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMSwgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ2JvcmRlci1jb2xvcicsIG5hbWU6ICdCb3JkZXIgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyknLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgICAgICB7IGlkOiAnc2hvdy1sb2dvJywgbmFtZTogJ1Nob3cgTG9nbycsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgeyBpZDogJ2xvZ28tdGV4dCcsIG5hbWU6ICdMb2dvIFRleHQnLCB0eXBlOiAndGV4dCcsIHZhbHVlOiAnUycsIGNvbmRpdGlvbjogKHNldHRpbmdzKSA9PiBzZXR0aW5nc1snc2hvdy1sb2dvJ10gfSxcbiAgICAgICAgeyBpZDogJ3Nob3ctbmFtZScsIG5hbWU6ICdTaG93IE5hbWUnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6ICdzaG93LWdhbWVtb2RlJywgbmFtZTogJ1Nob3cgR2FtZW1vZGUnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6ICdzaG93LWxvYmJ5JywgbmFtZTogJ1Nob3cgTG9iYnknLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAgXSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLmhhbmRsZUhlYWRlcigpO1xuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB0aGlzLmhhbmRsZUhlYWRlcigpKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlRGlzcGxheSgpO1xuICAgICAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN0b3JlSGVhZGVyKCk7XG4gICAgICAgIHRoaXMuZGVzdHJveURpc3BsYXkoKTtcbiAgICB9LFxuXG4gICAgb25UaWNrKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9LFxuXG4gICAgb25TZXR0aW5nVXBkYXRlKHNldHRpbmdJZCkge1xuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAncmVtb3ZlLWhlYWRlcicpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSGVhZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkodHJ1ZSk7XG4gICAgfSxcblxuICAgIGhhbmRsZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkluR2FtZUhlYWRlckNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVIZWFkZXIgPSBoZWFkZXI7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRSZW1vdmUgPSB0aGlzLnNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSAncmVtb3ZlLWhlYWRlcicpLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHNob3VsZFJlbW92ZSkge1xuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnRvcCA9ICctOTk5OXB4JztcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVzdG9yZUhlYWRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUhlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5nYW1lSGVhZGVyLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgICAgICAgICB0aGlzLmdhbWVIZWFkZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5nYW1lSGVhZGVyLnN0eWxlLnRvcCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5nYW1lSGVhZGVyLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZ2FtZUhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktaW50ZXJmYWNlLWRpc3BsYXknO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gJzIwcHgnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9ICcyMHB4JztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95RGlzcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVEaXNwbGF5KGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICAgIGlmICghY2xpY2tHdWkgfHwgIWNsaWNrR3VpLmlzRWRpdGluZ0hVRCkge1xuICAgICAgICAgICAgY29uc3QgbW9kID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke21vZC54fXB4YDtcbiAgICAgICAgICAgIGlmIChtb2QueSAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke21vZC55fXB4YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdhbWVtb2RlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSW5HYW1lSGVhZGVyR2FtZU5hbWUnKTtcbiAgICAgICAgY29uc3QgbG9iYnlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5JbkdhbWVIZWFkZXJMb2JieU5hbWUnKTtcblxuICAgICAgICBjb25zdCBnYW1lbW9kZSA9IGdhbWVtb2RlRWwgPyBnYW1lbW9kZUVsLnRleHRDb250ZW50IDogJ1Vua25vd24nO1xuICAgICAgICBjb25zdCBsb2JieSA9IGxvYmJ5RWwgPyBgKCMke2xvYmJ5RWwudGV4dENvbnRlbnR9KWAgOiAnJztcbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IGdldFBsYXllck5hbWUoKTtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuXG4gICAgICAgIGlmIChwbGF5ZXJOYW1lICYmIHRoaXMubGFzdFBsYXllck5hbWUgIT09IHBsYXllck5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFBsYXllck5hbWUgPSBwbGF5ZXJOYW1lO1xuICAgICAgICAgICAgZm9yY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250ZW50ID0gYFxuICAgICAgICAgICAgJHtzZXR0aW5nc1snc2hvdy1sb2dvJ10gPyBgPGRpdiBjbGFzcz1cInNlcmVuaXR5LWludGVyZmFjZS1sb2dvXCI+JHtzZXR0aW5nc1snbG9nby10ZXh0J119PC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcmVuaXR5LWludGVyZmFjZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgJHtzZXR0aW5nc1snc2hvdy1uYW1lJ10gJiYgcGxheWVyTmFtZSA/IGA8ZGl2IGNsYXNzPVwic2VyZW5pdHktaW50ZXJmYWNlLW5hbWVcIj4ke3BsYXllck5hbWV9PC9kaXY+YCA6ICcnfVxuICAgICAgICAgICAgICAgICR7c2V0dGluZ3NbJ3Nob3ctZ2FtZW1vZGUnXSA/IGA8ZGl2IGNsYXNzPVwic2VyZW5pdHktaW50ZXJmYWNlLWdhbWVtb2RlXCI+JHtnYW1lbW9kZX08L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgJHtzZXR0aW5nc1snc2hvdy1sb2JieSddID8gYDxkaXYgY2xhc3M9XCJzZXJlbml0eS1pbnRlcmZhY2UtbG9iYnlcIj4ke2xvYmJ5fTwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIGNvbnN0IG5ld0hhc2ggPSBKU09OLnN0cmluZ2lmeShjb250ZW50KTtcbiAgICAgICAgaWYgKHRoaXMubGFzdEhhc2ggIT09IG5ld0hhc2ggfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgICAgICAgICAgdGhpcy5sYXN0SGFzaCA9IG5ld0hhc2g7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYXBwbHlTdHlsZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcblxuICAgICAgICBpZiAoc2V0dGluZ3NbJ2NvbG9yLW1vZGUnXSA9PT0gJ1RoZW1lJykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWFjY2VudC1jb2xvcicsICd2YXIoLS1wcmltYXJ5KScpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1wYW5lbCknO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQpJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgdmFyKC0tYm9yZGVyKWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYWNjZW50LWNvbG9yJywgc2V0dGluZ3NbJ2FjY2VudC1jb2xvciddKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZXR0aW5nc1snYmctY29sb3InXTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9IHNldHRpbmdzWyd0ZXh0LWNvbG9yJ107XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYCR7c2V0dGluZ3NbJ2JvcmRlci13aWR0aCddfXB4IHNvbGlkICR7c2V0dGluZ3NbJ2JvcmRlci1jb2xvciddfWA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke3NldHRpbmdzWydmb250LXNpemUnXX1weGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gYCR7c2V0dGluZ3NbJ3BhZGRpbmcteSddfXB4ICR7c2V0dGluZ3NbJ3BhZGRpbmcteCddfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IGAke3NldHRpbmdzWydib3JkZXItcmFkaXVzJ119cHhgO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICAgIGlmICghY2xpY2tHdWkgfHwgIWNsaWNrR3VpLmlzRWRpdGluZ0hVRCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IDk5OTc7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmZhY2U7ICIsICJpbXBvcnQgeyBnZXRQbGF5ZXJOYW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBDaGF0ID0ge1xuICAgIG5hbWU6ICdDaGF0JyxcbiAgICBjYXRlZ29yeTogJ1Zpc3VhbCcsXG4gICAgZGVzY3JpcHRpb246ICdSZXBsYWNlcyB0aGUgZGVmYXVsdCBpbi1nYW1lIGNoYXQgd2l0aCBhIGN1c3RvbWl6YWJsZSBvbmUuJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGRlZmF1bHRYOiA0LFxuICAgIGRlZmF1bHRZOiA1OSxcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIGdhbWVDaGF0OiBudWxsLFxuICAgIGNoYXRPYnNlcnZlcjogbnVsbCxcbiAgICBtYWluT2JzZXJ2ZXI6IG51bGwsXG4gICAgY3VzdG9tSW5wdXQ6IG51bGwsXG5cbiAgICBzZXR0aW5nczogW1xuICAgICAgICB7IGlkOiAnaGlkZS1nYW1lLWNoYXQnLCBuYW1lOiAnSGlkZSBHYW1lIENoYXQnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlLCBkZXNjcmlwdGlvbjogJ0hpZGVzIHRoZSBvcmlnaW5hbCBpbi1nYW1lIGNoYXQgVUkuJyB9LFxuICAgICAgICB7IGlkOiAnZm9udC1zaXplJywgbmFtZTogJ0ZvbnQgU2l6ZScsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTQsIG1pbjogMTAsIG1heDogMjQsIHN0ZXA6IDEgfSxcbiAgICAgICAgeyBpZDogJ21heC1tZXNzYWdlcycsIG5hbWU6ICdNYXggTWVzc2FnZXMnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDcsIG1pbjogNSwgbWF4OiAyNSwgc3RlcDogMSB9LFxuICAgICAgICB7IGlkOiAnc2hvdy10aW1lc3RhbXBzJywgbmFtZTogJ1Nob3cgVGltZXN0YW1wcycsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IGZhbHNlIH0sXG4gICAgXSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZURpc3BsYXkoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVHYW1lQ2hhdCgpO1xuXG4gICAgICAgIHRoaXMubWFpbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4gdGhpcy5oYW5kbGVHYW1lQ2hhdCgpKTtcbiAgICAgICAgdGhpcy5tYWluT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5tYWluT2JzZXJ2ZXIpIHRoaXMubWFpbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgaWYgKHRoaXMuY2hhdE9ic2VydmVyKSB0aGlzLmNoYXRPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMucmVzdG9yZUdhbWVDaGF0KCk7XG4gICAgICAgIHRoaXMuZGVzdHJveURpc3BsYXkoKTtcbiAgICB9LFxuXG4gICAgb25UaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICAgICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke21vZC54fXB4YDtcbiAgICAgICAgICAgICAgICBpZiAobW9kLnkgIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHttb2QueX1weGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25TZXR0aW5nVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlR2FtZUNoYXQoKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY2hhdC1jb250YWluZXInO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVzc2FnZXNDb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNoYXQtbWVzc2FnZXMnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZXNDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jcmVhdGVDdXN0b21JbnB1dCgpO1xuICAgIH0sXG4gICAgXG4gICAgY3JlYXRlQ3VzdG9tSW5wdXQoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbnB1dFdyYXBwZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWNoYXQtaW5wdXQtd3JhcHBlcic7XG5cbiAgICAgICAgdGhpcy5jdXN0b21JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMuY3VzdG9tSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGhpcy5jdXN0b21JbnB1dC5jbGFzc05hbWUgPSAnc2VyZW5pdHktY2hhdC1pbnB1dCc7XG4gICAgICAgIHRoaXMuY3VzdG9tSW5wdXQucGxhY2Vob2xkZXIgPSAnU2VuZCBhIG1lc3NhZ2UuLi4nO1xuXG4gICAgICAgIHRoaXMuY3VzdG9tSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQ2hhdElucHV0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWVJbnB1dCAmJiB0aGlzLmN1c3RvbUlucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnB1dC52YWx1ZSA9IHRoaXMuY3VzdG9tSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudGVyRXZlbnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5ZG93bicsIHsga2V5OiAnRW50ZXInLCBjb2RlOiAnRW50ZXInLCB3aGljaDogMTMsIGtleUNvZGU6IDEzLCBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW5wdXQuZGlzcGF0Y2hFdmVudChlbnRlckV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21JbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBpbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jdXN0b21JbnB1dCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFdyYXBwZXIpO1xuICAgIH0sXG5cbiAgICBzeW5jSW5wdXRWaXNpYmlsaXR5KGdhbWVJbnB1dFdyYXBwZXIpIHtcbiAgICAgICAgY29uc3QgaW5wdXRXcmFwcGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1jaGF0LWlucHV0LXdyYXBwZXInKTtcbiAgICAgICAgaWYgKGdhbWVJbnB1dFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBpbnB1dFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmN1c3RvbUlucHV0LmZvY3VzKCksIDApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRlc3Ryb3lEaXNwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZUdhbWVDaGF0KCkge1xuICAgICAgICBjb25zdCBjaGF0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkNoYXQnKTtcbiAgICAgICAgaWYgKCFjaGF0Q29udGFpbmVyKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRoaXMuZ2FtZUNoYXQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNoYXQgPSBjaGF0Q29udGFpbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvdWxkSGlkZSA9IHRoaXMuc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09ICdoaWRlLWdhbWUtY2hhdCcpLnZhbHVlO1xuICAgICAgICB0aGlzLmdhbWVDaGF0LnN0eWxlLnZpc2liaWxpdHkgPSBzaG91bGRIaWRlID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG4gICAgICAgIHRoaXMuZ2FtZUNoYXQuc3R5bGUucG9pbnRlckV2ZW50cyA9IHNob3VsZEhpZGUgPyAnbm9uZScgOiAnYXV0byc7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZXNDb250YWluZXIgPSBjaGF0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5DaGF0TWVzc2FnZXMnKTtcbiAgICAgICAgaWYgKG1lc3NhZ2VzQ29udGFpbmVyICYmICF0aGlzLmNoYXRPYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1jaGF0LW1lc3NhZ2VzJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBtZXNzYWdlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuTWVzc2FnZVdyYXBwZXInKS5mb3JFYWNoKG5vZGUgPT4gdGhpcy5hZGRNZXNzYWdlKG5vZGUpKTtcblxuICAgICAgICAgICAgdGhpcy5jaGF0T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgJiYgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ01lc3NhZ2VXcmFwcGVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRNZXNzYWdlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2hhdE9ic2VydmVyLm9ic2VydmUobWVzc2FnZXNDb250YWluZXIsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2FtZUlucHV0V3JhcHBlciA9IGNoYXRDb250YWluZXIucXVlcnlTZWxlY3RvcignLkNoYXRJbnB1dFdyYXBwZXInKTtcbiAgICAgICAgaWYgKGdhbWVJbnB1dFdyYXBwZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3luY0lucHV0VmlzaWJpbGl0eShnYW1lSW5wdXRXcmFwcGVyKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZXN0b3JlR2FtZUNoYXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVDaGF0KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVDaGF0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICB0aGlzLmdhbWVDaGF0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkTWVzc2FnZShvcmlnaW5hbE5vZGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgY29uc3QgbWVzc2FnZXNDb250YWluZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmVuaXR5LWNoYXQtbWVzc2FnZXMnKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZXNzYWdlRGl2LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jaGF0LW1lc3NhZ2UnO1xuICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnREaXYuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW1lc3NhZ2UtY29udGVudCc7XG4gICAgICAgIGNvbnN0IG15TmFtZSA9IGdldFBsYXllck5hbWUoKTtcblxuICAgICAgICBvcmlnaW5hbE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLkluZGl2aWR1YWxUZXh0JykuZm9yRWFjaChzcGFuID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZFNwYW4gPSBzcGFuLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGlmIChteU5hbWUgJiYgY2xvbmVkU3Bhbi50ZXh0Q29udGVudCA9PT0gbXlOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2xvbmVkU3Bhbi5jbGFzc0xpc3QuYWRkKCdzZXJlbml0eS1tZXNzYWdlLW93bi1uYW1lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL15cXFsuKlxcXSQvLnRlc3QoY2xvbmVkU3Bhbi50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBjbG9uZWRTcGFuLmNsYXNzTGlzdC5hZGQoJ3NlcmVuaXR5LW1lc3NhZ2UtdGFnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNsb25lZFNwYW4pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZXNzYWdlRGl2LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSAnc2hvdy10aW1lc3RhbXBzJykudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRpbWVzdGFtcC5jbGFzc05hbWUgPSAnc2VyZW5pdHktbWVzc2FnZS10aW1lc3RhbXAnO1xuICAgICAgICAgICAgdGltZXN0YW1wLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcbiAgICAgICAgICAgIG1lc3NhZ2VEaXYuaW5zZXJ0QmVmb3JlKHRpbWVzdGFtcCwgY29udGVudERpdik7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlRGl2KTtcblxuICAgICAgICBjb25zdCBtYXhNZXNzYWdlcyA9IHRoaXMuc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09ICdtYXgtbWVzc2FnZXMnKS52YWx1ZTtcbiAgICAgICAgd2hpbGUgKG1lc3NhZ2VzQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IG1heE1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBtZXNzYWdlc0NvbnRhaW5lci5yZW1vdmVDaGlsZChtZXNzYWdlc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgYXBwbHlTdHlsZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWNoYXQtZm9udC1zaXplJywgYCR7c2V0dGluZ3NbJ2ZvbnQtc2l6ZSddfXB4YCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDsgIiwgImNvbnN0IEtleXN0cm9rZXMgPSB7XG4gIG5hbWU6ICdLZXlzdHJva2VzJyxcbiAgY2F0ZWdvcnk6ICdDb21iYXQnLFxuICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXlzIHlvdXIga2V5c3Ryb2tlcyB3aXRoIGEgc2V4eSwgbW9kZXJuIGxvb2suJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgZGVmYXVsdFg6IDgsXG4gIGRlZmF1bHRZOiA1NjIsXG4gIGVsZW1lbnQ6IG51bGwsXG4gIGtleXM6IHtcbiAgICB3OiBmYWxzZSwgYTogZmFsc2UsIHM6IGZhbHNlLCBkOiBmYWxzZSxcbiAgICAnICc6IGZhbHNlLCBsbWI6IGZhbHNlLCBybWI6IGZhbHNlXG4gIH0sXG4gIGJvdW5kS2V5RG93bjogbnVsbCxcbiAgYm91bmRLZXlVcDogbnVsbCxcbiAgYm91bmRNb3VzZURvd246IG51bGwsXG4gIGJvdW5kTW91c2VVcDogbnVsbCxcblxuICBzZXR0aW5nczogW1xuICAgIHsgaWQ6ICdzaG93LW1vdXNlJywgbmFtZTogJ1Nob3cgTW91c2UgQnV0dG9ucycsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICB7IGlkOiAnc2NhbGUnLCBuYW1lOiAnU2NhbGUnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEsIG1pbjogMC41LCBtYXg6IDIsIHN0ZXA6IDAuMSB9LFxuICAgIHsgaWQ6ICdvcGFjaXR5JywgbmFtZTogJ09wYWNpdHknLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDAuODUsIG1pbjogMCwgbWF4OiAxLCBzdGVwOiAwLjA1IH0sXG4gICAgeyBpZDogJ2VuYWJsZS1hbmltYXRpb25zJywgbmFtZTogJ0VuYWJsZSBBbmltYXRpb25zJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICBdLFxuXG4gIG9uRW5hYmxlKCkge1xuICAgIHRoaXMuY3JlYXRlRGlzcGxheSgpO1xuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICB0aGlzLmJvdW5kS2V5RG93biA9IGUgPT4gdGhpcy51cGRhdGVLZXlTdGF0ZShlLmtleS50b0xvd2VyQ2FzZSgpLCB0cnVlKTtcbiAgICB0aGlzLmJvdW5kS2V5VXAgPSBlID0+IHRoaXMudXBkYXRlS2V5U3RhdGUoZS5rZXkudG9Mb3dlckNhc2UoKSwgZmFsc2UpO1xuICAgIHRoaXMuYm91bmRNb3VzZURvd24gPSBlID0+IHtcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKSB0aGlzLnVwZGF0ZUtleVN0YXRlKCdsbWInLCB0cnVlKTtcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAyKSB0aGlzLnVwZGF0ZUtleVN0YXRlKCdybWInLCB0cnVlKTtcbiAgICB9O1xuICAgIHRoaXMuYm91bmRNb3VzZVVwID0gZSA9PiB7XG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMCkgdGhpcy51cGRhdGVLZXlTdGF0ZSgnbG1iJywgZmFsc2UpO1xuICAgICAgICBpZiAoZS5idXR0b24gPT09IDIpIHRoaXMudXBkYXRlS2V5U3RhdGUoJ3JtYicsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kS2V5RG93bik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5ib3VuZEtleVVwKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5ib3VuZE1vdXNlRG93bik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kTW91c2VVcCk7XG4gIH0sXG5cbiAgb25EaXNhYmxlKCkge1xuICAgIHRoaXMuZGVzdHJveURpc3BsYXkoKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm91bmRLZXlEb3duKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmJvdW5kS2V5VXApO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmJvdW5kTW91c2VEb3duKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwKTtcbiAgfSxcblxuICBvblRpY2soKSB7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5TG9jYXRpb24oKTtcbiAgfSxcbiAgXG4gIG9uU2V0dGluZ1VwZGF0ZSgpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gIH0sXG5cbiAgdXBkYXRlS2V5U3RhdGUoa2V5LCBpc1ByZXNzZWQpIHtcbiAgICBpZiAodGhpcy5rZXlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHRoaXMua2V5c1trZXldID0gaXNQcmVzc2VkO1xuICAgICAgdGhpcy51cGRhdGVLZXlWaXN1YWxzKCk7XG4gICAgfVxuICB9LFxuICBcbiAgY3JlYXRlS2V5KHRleHQsIGtleSwgLi4uZXh0cmFDbGFzc2VzKSB7XG4gICAgY29uc3Qga2V5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtleUVsZW1lbnQuY2xhc3NOYW1lID0gYGtleXN0cm9rZXMta2V5IGtleS0ke2tleX0gJHtleHRyYUNsYXNzZXMuam9pbignICcpfWA7XG4gICAga2V5RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIGtleUVsZW1lbnQ7XG4gIH0sXG4gIFxuICBjcmVhdGVEaXNwbGF5KCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAna2V5c3Ryb2tlcy1kaXNwbGF5JztcblxuICAgIGNvbnN0IHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cxLmNsYXNzTmFtZSA9ICdrZXlzdHJva2VzLXJvdyc7XG4gICAgcm93MS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUtleSgnVycsICd3JykpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChyb3cxKTtcblxuICAgIGNvbnN0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cyLmNsYXNzTmFtZSA9ICdrZXlzdHJva2VzLXJvdyc7XG4gICAgcm93Mi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUtleSgnQScsICdhJykpO1xuICAgIHJvdzIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVLZXkoJ1MnLCAncycpKTtcbiAgICByb3cyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlS2V5KCdEJywgJ2QnKSk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHJvdzIpO1xuICAgIFxuICAgIGNvbnN0IHJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3czLmNsYXNzTmFtZSA9ICdrZXlzdHJva2VzLXJvdyBtb3VzZS1yb3cnO1xuICAgIHJvdzMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVLZXkoJ0xNQicsICdsbWInLCAnbW91c2UtYnV0dG9uJykpO1xuICAgIHJvdzMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVLZXkoJ1JNQicsICdybWInLCAnbW91c2UtYnV0dG9uJykpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChyb3czKTtcbiAgICBcbiAgICBjb25zdCByb3c0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93NC5jbGFzc05hbWUgPSAna2V5c3Ryb2tlcy1yb3cnO1xuICAgIHJvdzQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVLZXkoJ1NwYWNlJywgJyAnLCAnc3BhY2Uta2V5JykpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChyb3c0KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfSxcblxuICBkZXN0cm95RGlzcGxheSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGVEaXNwbGF5TG9jYXRpb24oKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgaWYgKCFjbGlja0d1aSB8fCAhY2xpY2tHdWkuaXNFZGl0aW5nSFVEKSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQodGhpcy5uYW1lKTtcbiAgICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke21vZC54fXB4YDtcbiAgICAgICAgaWYgKG1vZC55ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7bW9kLnl9cHhgO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGVLZXlWaXN1YWxzKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5rZXlzKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAua2V5LSR7a2V5fWApO1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIHRoaXMua2V5c1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgYXBwbHlTdHlsZXMoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NldHRpbmdzLnNjYWxlfSlgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gc2V0dGluZ3Mub3BhY2l0eTtcbiAgICBcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb3VzZScsIHNldHRpbmdzWydzaG93LW1vdXNlJ10pO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCduby1hbmltYXRpb25zJywgIXNldHRpbmdzWydlbmFibGUtYW5pbWF0aW9ucyddKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5c3Ryb2tlczsgIiwgImNvbnN0IFRvZ2dsZVNwcmludCA9IHtcbiAgICBuYW1lOiBcIlRvZ2dsZVNwcmludFwiLFxuICAgIGNhdGVnb3J5OiBcIk1vdmVtZW50XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQXV0b21hdGljYWxseSBzcHJpbnRzIGZvciB5b3UgYnkgc2ltdWxhdGluZyBhIFNoaWZ0IGtleSBwcmVzcy5cIixcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHNwcmludGluZzogZmFsc2UsXG4gICAgZWxlbWVudDogbnVsbCxcbiAgICBkZWZhdWx0WDogMTMwMCxcbiAgICBkZWZhdWx0WTogODAwLFxuXG4gICAgc2V0dGluZ3M6IFtcbiAgICAgICAgeyBpZDogXCJzaG93LXRleHRcIiwgbmFtZTogXCJTaG93IFRleHRcIiwgdHlwZTogXCJib29sZWFuXCIsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6IFwiY29sb3ItbW9kZVwiLCBuYW1lOiBcIkNvbG9yIE1vZGVcIiwgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnVGhlbWUnLCAnQ3VzdG9tJ10sIHZhbHVlOiAnVGhlbWUnLCBjb25kaXRpb246IHMgPT4gc1snc2hvdy10ZXh0J10gfSxcbiAgICAgICAgeyBpZDogXCJodWQtdGV4dFwiLCBuYW1lOiBcIkhVRCBUZXh0XCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogXCJbU3ByaW50aW5nIChUb2dnbGVkKV1cIiwgY29uZGl0aW9uOiBzID0+IHNbJ3Nob3ctdGV4dCddIH0sXG4gICAgICAgIHsgaWQ6ICdiZy1jb2xvcicsIG5hbWU6ICdCYWNrZ3JvdW5kIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDMwLCAzMywgNDEsIDAuODUpJywgY29uZGl0aW9uOiBzID0+IHNbJ3Nob3ctdGV4dCddICYmIHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgICAgeyBpZDogJ3RleHQtY29sb3InLCBuYW1lOiAnVGV4dCBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgyMzQsIDIzNCwgMjM0LCAwLjgpJywgY29uZGl0aW9uOiBzID0+IHNbJ3Nob3ctdGV4dCddICYmIHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICAgICAgeyBpZDogJ2ZvbnQtc2l6ZScsIG5hbWU6ICdGb250IFNpemUnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDE2LCBtaW46IDgsIG1heDogMjQsIHN0ZXA6IDEsIGNvbmRpdGlvbjogcyA9PiBzWydzaG93LXRleHQnXSB9LFxuICAgICAgICB7IGlkOiAncGFkZGluZycsIG5hbWU6ICdQYWRkaW5nJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiA4LCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEsIGNvbmRpdGlvbjogcyA9PiBzWydzaG93LXRleHQnXSB9LFxuICAgICAgICB7IGlkOiAnYm9yZGVyLXJhZGl1cycsIG5hbWU6ICdCb3JkZXIgUmFkaXVzJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxMCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxLCBjb25kaXRpb246IHMgPT4gc1snc2hvdy10ZXh0J10gfSxcbiAgICAgICAgeyBpZDogJ2JvcmRlci13aWR0aCcsIG5hbWU6ICdCb3JkZXIgV2lkdGgnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEsIG1pbjogMCwgbWF4OiA1LCBzdGVwOiAxLCBjb25kaXRpb246IHMgPT4gc1snc2hvdy10ZXh0J10gfSxcbiAgICAgICAgeyBpZDogJ2JvcmRlci1jb2xvcicsIG5hbWU6ICdCb3JkZXIgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyknLCBjb25kaXRpb246IHMgPT4gc1snc2hvdy10ZXh0J10gJiYgc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgIF0sXG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaW50aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BTcHJpbnRpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3Ryb3lEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIG9uVGljaygpIHtcbiAgICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgICBjb25zdCBpc1R5cGluZyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ0lOUFVUJyB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlzQ29udGVudEVkaXRhYmxlKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNob3VsZEJlU3ByaW50aW5nID0gIWlzVHlwaW5nICYmICghY2xpY2tHdWkgfHwgIWNsaWNrR3VpLmlzR3VpT3Blbik7XG5cbiAgICAgICAgaWYgKHNob3VsZEJlU3ByaW50aW5nICYmICF0aGlzLnNwcmludGluZykge1xuICAgICAgICAgICAgdGhpcy5zdGFydFNwcmludGluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKCFzaG91bGRCZVNwcmludGluZyAmJiB0aGlzLnNwcmludGluZykge1xuICAgICAgICAgICAgdGhpcy5zdG9wU3ByaW50aW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIG9uU2V0dGluZ1VwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkodHJ1ZSk7XG4gICAgfSxcblxuICAgIHN0YXJ0U3ByaW50aW5nKCkge1xuICAgICAgICBpZiAodGhpcy5zcHJpbnRpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy5zcHJpbnRpbmcgPSB0cnVlO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudCgna2V5ZG93bicsIHsga2V5OiAnU2hpZnQnLCBrZXlDb2RlOiAxNiwgY29kZTogJ1NoaWZ0TGVmdCcsIGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgIH0sXG5cbiAgICBzdG9wU3ByaW50aW5nKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3ByaW50aW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3ByaW50aW5nID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KCdrZXl1cCcsIHsga2V5OiAnU2hpZnQnLCBrZXlDb2RlOiAxNiwgY29kZTogJ1NoaWZ0TGVmdCcsIGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICd0b2dnbGVzcHJpbnQtaHVkLWRpc3BsYXknO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveURpc3BsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlRGlzcGxheSgpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLnJlZHVjZSgoYWNjLCBzKSA9PiAoeyAuLi5hY2MsIFtzLmlkXTogcy52YWx1ZSB9KSwge30pO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFzZXR0aW5nc1snc2hvdy10ZXh0J10pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRGlzcGxheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLmVuYWJsZWQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBzZXR0aW5nc1snaHVkLXRleHQnXTtcblxuICAgICAgICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgICAgICAgaWYgKCFjbGlja0d1aSB8fCAhY2xpY2tHdWkuaXNFZGl0aW5nSFVEKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChtb2QueCAhPT0gbnVsbCkgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHttb2QueH1weGA7XG4gICAgICAgICAgICAgICAgaWYgKG1vZC55ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7bW9kLnl9cHhgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFwcGx5U3R5bGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoc2V0dGluZ3NbJ2NvbG9yLW1vZGUnXSA9PT0gJ1RoZW1lJykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1wYW5lbCknO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQpJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgJHtzZXR0aW5nc1snYm9yZGVyLXdpZHRoJ119cHggc29saWQgdmFyKC0tYm9yZGVyKWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3NbJ2JnLWNvbG9yJ107XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSBzZXR0aW5nc1sndGV4dC1jb2xvciddO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCAke3NldHRpbmdzWydib3JkZXItY29sb3InXX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZvbnRTaXplID0gYCR7c2V0dGluZ3NbJ2ZvbnQtc2l6ZSddfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBgJHtzZXR0aW5nc1sncGFkZGluZyddfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IGAke3NldHRpbmdzWydib3JkZXItcmFkaXVzJ119cHhgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk3O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZVNwcmludDsgIiwgImNvbnN0IEFybW9ySFVEID0ge1xuICAgIG5hbWU6ICdBcm1vckhVRCcsXG4gICAgY2F0ZWdvcnk6ICdQbGF5ZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnRGlzcGxheXMgeW91ciBjdXJyZW50bHkgZXF1aXBwZWQgYXJtb3IgYW5kIHNlbGVjdGVkIGl0ZW0uJyxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIG9ic2VydmVyOiBudWxsLFxuICAgIGRlZmF1bHRYOiAxNDQyLFxuICAgIGRlZmF1bHRZOiA0NjgsXG4gICAgc2V0dGluZ3M6IFtcbiAgICAgIHsgaWQ6ICdjb2xvci1tb2RlJywgbmFtZTogJ0NvbG9yIE1vZGUnLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uczogWydUaGVtZScsICdDdXN0b20nXSwgdmFsdWU6ICdUaGVtZScgfSxcbiAgICAgIHsgaWQ6ICdzaG93LXNlbGVjdGVkJywgbmFtZTogJ1Nob3cgU2VsZWN0ZWQgSXRlbScsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICAgIHsgaWQ6ICdkaXNwbGF5LXN0eWxlJywgbmFtZTogJ0Rpc3BsYXkgU3R5bGUnLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uczogWydIb3Jpem9udGFsJywgJ1ZlcnRpY2FsJ10sIHZhbHVlOiAnVmVydGljYWwnIH0sXG4gICAgICB7IGlkOiAnYmctY29sb3InLCBuYW1lOiAnQmFja2dyb3VuZCBDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAncmdiYSgzMCwgMzMsIDQxLCAwLjg1KScsIGNvbmRpdGlvbjogcyA9PiBzWydjb2xvci1tb2RlJ10gPT09ICdDdXN0b20nIH0sXG4gICAgICB7IGlkOiAncGFkZGluZycsIG5hbWU6ICdQYWRkaW5nJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiA0LCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEgfSxcbiAgICAgIHsgaWQ6ICdib3JkZXItcmFkaXVzJywgbmFtZTogJ0JvcmRlciBSYWRpdXMnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDIwLCBtaW46IDAsIG1heDogMjAsIHN0ZXA6IDEgfSxcbiAgICAgIHsgaWQ6ICdib3JkZXItd2lkdGgnLCBuYW1lOiAnQm9yZGVyIFdpZHRoJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAyLCBtaW46IDAsIG1heDogNSwgc3RlcDogMSB9LFxuICAgICAgeyBpZDogJ2JvcmRlci1jb2xvcicsIG5hbWU6ICdCb3JkZXIgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyknLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgICAgeyBpZDogJ2l0ZW0tc2l6ZScsIG5hbWU6ICdJdGVtIFNpemUnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDY0LCBtaW46IDE2LCBtYXg6IDY0LCBzdGVwOiAxIH0sXG4gICAgICB7IGlkOiAnaXRlbS1zcGFjaW5nJywgbmFtZTogJ0l0ZW0gU3BhY2luZycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxIH0sXG4gICAgXSxcbiAgICBcbiAgICBlbGVtZW50OiBudWxsLFxuICBcbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgIHRoaXMuY3JlYXRlRGlzcGxheSgpO1xuICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgICAgdGhpcy5zZXR1cE9ic2VydmVyKCk7XG4gICAgfSxcbiAgXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXN0cm95RGlzcGxheSgpO1xuICAgIH0sXG4gIFxuICAgIG9uVGljaygpIHtcbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICAgIH0sXG4gICAgXG4gICAgb25TZXR0aW5nVXBkYXRlKCkge1xuICAgICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICAgICAgdGhpcy51cGRhdGVEaXNwbGF5KHRydWUpOyAvLyBGb3JjZSB1cGRhdGUgdG8gcmVmbGVjdCBzdHlsZSBjaGFuZ2VzXG4gICAgfSxcbiAgXG4gICAgc2V0dXBPYnNlcnZlcigpIHtcbiAgICAgICAgY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBob3RiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSG90QmFyR2FtZUl0ZW1zQ29udGFpbmVyJyk7XG4gICAgICAgICAgICBpZiAoaG90YmFyICYmICF0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uQ2hhbmdlZCA9IG11dGF0aW9ucy5zb21lKG0gPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICBtLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdJbnZlbkl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbkNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGlzcGxheSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGhvdGJhciwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGlzcGxheSh0cnVlKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICghaG90YmFyKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChzZXR1cCwgNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc2V0dXAoKTtcbiAgICB9LFxuICBcbiAgICBjcmVhdGVEaXNwbGF5KCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ2FybW9yLWh1ZC1kaXNwbGF5JztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9LFxuICBcbiAgICBkZXN0cm95RGlzcGxheSgpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gIFxuICAgIGV4dHJhY3RJbWFnZShpdGVtRWxlbWVudCkge1xuICAgICAgICBpZiAoIWl0ZW1FbGVtZW50KSByZXR1cm4gbnVsbDtcbiAgICBcbiAgICAgICAgY29uc3QgdHdvREltYWdlSWNvbiA9IGl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Ud29ESW1hZ2VJY29uJyk7XG4gICAgICAgIGlmICh0d29ESW1hZ2VJY29uKSB7XG4gICAgICAgICAgICBpZiAodHdvREltYWdlSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgJiYgdHdvREltYWdlSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdpbWFnZScsIHNyYzogdHdvREltYWdlSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2Uuc2xpY2UoNSwgLTIpLCBmaWx0ZXI6IG51bGwgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Ud29ESXRlbUdyYXlzY2FsZVZpc2libGVQbmcnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ySGludCA9IGl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Ud29ESXRlbUdyYXlzY2FsZScpO1xuICAgICAgICAgICAgaWYgKGltZykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdpbWFnZScsIHNyYzogaW1nLnNyYywgZmlsdGVyOiBjb2xvckhpbnQgPyBjb2xvckhpbnQuc3R5bGUuZmlsdGVyIDogJycgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBibG9ja0l0ZW0gPSBpdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuQmxvY2tJdGVtJyk7XG4gICAgICAgIGlmIChibG9ja0l0ZW0gJiYgYmxvY2tJdGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSAmJiBibG9ja0l0ZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICdpbWFnZScsIHNyYzogYmxvY2tJdGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZS5zbGljZSg1LCAtMiksIGZpbHRlcjogbnVsbCB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB1bmZpbGxlZCA9IGl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5JbnZlbkl0ZW1VbmZpbGxlZCcpO1xuICAgICAgICBpZiAodW5maWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6ICd1bmZpbGxlZCcsIHNyYzogdW5maWxsZWQuc3R5bGUuYmFja2dyb3VuZEltYWdlLnNsaWNlKDUsIC0yKSB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICBcbiAgICB1cGRhdGVEaXNwbGF5KGZvcmNlVXBkYXRlID0gZmFsc2UpIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gIFxuICAgICAgLy8gVXBkYXRlIHBvc2l0aW9uXG4gICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgICBjb25zdCBtb2QgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgICAgaWYgKG1vZC54ICE9PSBudWxsKSB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke21vZC54fXB4YDtcbiAgICAgICAgICBpZiAobW9kLnkgIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHttb2QueX1weGA7XG4gICAgICB9XG4gIFxuICAgICAgY29uc3QgYXJtb3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQXJtb3VySXRlbVNsb3RzJyk7XG4gICAgICBjb25zdCBhcm1vckl0ZW1zID0gYXJtb3JDb250YWluZXIgPyBBcnJheS5mcm9tKGFybW9yQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5JbnZlbkl0ZW0nKSkgOiBbXTtcbiAgICAgIGNvbnN0IGFybW9ySW1hZ2VzID0gYXJtb3JJdGVtcy5tYXAoaXRlbSA9PiB0aGlzLmV4dHJhY3RJbWFnZShpdGVtKSkuZmlsdGVyKEJvb2xlYW4pO1xuICBcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCh0aGlzLm5hbWUpLnNldHRpbmdzO1xuICAgICAgY29uc3Qgc2hvd1NlbGVjdGVkID0gc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09ICdzaG93LXNlbGVjdGVkJykudmFsdWU7XG5cbiAgICAgIGNvbnN0IGFsbEltYWdlcyA9IFsuLi5hcm1vckltYWdlc107XG4gICAgICBpZiAoc2hvd1NlbGVjdGVkKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRIb3RiYXJJdGVtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSG90QmFyR2FtZUl0ZW1zQ29udGFpbmVyIC5JbnZlbkl0ZW0uU2VsZWN0ZWQnKTtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1JbWFnZSA9IHRoaXMuZXh0cmFjdEltYWdlKHNlbGVjdGVkSG90YmFySXRlbUVsKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtSW1hZ2UpIHtcbiAgICAgICAgICAgICAgYWxsSW1hZ2VzLnB1c2goc2VsZWN0ZWRJdGVtSW1hZ2UpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBjb25zdCBuZXdDb250ZW50SGFzaCA9IEpTT04uc3RyaW5naWZ5KGFsbEltYWdlcyk7XG4gICAgICBpZiAobmV3Q29udGVudEhhc2ggIT09IHRoaXMubGFzdENvbnRlbnRIYXNoIHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgYWxsSW1hZ2VzLmZvckVhY2goaW1nRGF0YSA9PiB7XG4gICAgICAgICAgaWYgKCFpbWdEYXRhKSByZXR1cm47XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGl0ZW1Db250YWluZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXG4gICAgICAgICAgaWYgKGltZ0RhdGEudHlwZSA9PT0gJ2ltYWdlJyAmJiBpbWdEYXRhLmZpbHRlcikge1xuICAgICAgICAgICAgY29uc3QgaXRlbVNpemUgPSB0aGlzLnNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSAnaXRlbS1zaXplJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBjb2xvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29sb3JDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgY29sb3JDb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICBjb2xvckNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgICAgICBjb2xvckNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgICAgICAgICBjb25zdCBjb2xvclNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY29sb3JTb3VyY2Uuc3JjID0gaW1nRGF0YS5zcmM7XG4gICAgICAgICAgICBjb2xvclNvdXJjZS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgIGNvbG9yU291cmNlLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgICAgIGNvbG9yU291cmNlLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCc7XG4gICAgICAgICAgICBjb2xvclNvdXJjZS5zdHlsZS5maWx0ZXIgPSBpbWdEYXRhLmZpbHRlci5yZXBsYWNlKCcxZW0nLCBgJHtpdGVtU2l6ZX1weGApO1xuICAgICAgICAgICAgY29sb3JTb3VyY2Uuc3R5bGUubWFyZ2luTGVmdCA9IGAtJHtpdGVtU2l6ZX1weGA7XG4gICAgICAgICAgXG4gICAgICAgICAgICBjb2xvckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvclNvdXJjZSk7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG9yQ29udGFpbmVyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZ3JheXNjYWxlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBncmF5c2NhbGVJbWcuc3JjID0gaW1nRGF0YS5zcmM7XG4gICAgICAgICAgICBncmF5c2NhbGVJbWcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgZ3JheXNjYWxlSW1nLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgZ3JheXNjYWxlSW1nLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgICAgIGdyYXlzY2FsZUltZy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnO1xuICAgICAgICAgICAgZ3JheXNjYWxlSW1nLnN0eWxlLm1peEJsZW5kTW9kZSA9ICdtdWx0aXBseSc7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyYXlzY2FsZUltZyk7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nRWxlbWVudC5zcmMgPSBpbWdEYXRhLnNyYztcbiAgICAgICAgICAgIGltZ0VsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICBpbWdFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgICAgIGltZ0VsZW1lbnQuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRIYXNoID0gbmV3Q29udGVudEhhc2g7XG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICAgIH1cbiAgICB9LFxuICBcbiAgICBhcHBseVN0eWxlcygpIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgICBcbiAgICAgIGlmIChzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnVGhlbWUnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcGFuZWwpJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCB2YXIoLS1ib3JkZXIpYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZXR0aW5nc1snYmctY29sb3InXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCAke3NldHRpbmdzWydib3JkZXItY29sb3InXX1gO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9IGAke3NldHRpbmdzWydwYWRkaW5nJ119cHhgO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IGAke3NldHRpbmdzWydib3JkZXItcmFkaXVzJ119cHhgO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleERpcmVjdGlvbiA9IHNldHRpbmdzWydkaXNwbGF5LXN0eWxlJ10gPT09ICdIb3Jpem9udGFsJyA/ICdyb3cnIDogJ2NvbHVtbic7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZ2FwID0gYCR7c2V0dGluZ3NbJ2l0ZW0tc3BhY2luZyddfXB4YDtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICAgIFxuICAgICAgY29uc3QgY2xpY2tHdWkgPSB3aW5kb3cuU2VyZW5pdHkuaW5zdGFuY2UuZ2V0KCdDbGlja0dVSScpO1xuICAgICAgaWYgKCFjbGlja0d1aSB8fCAhY2xpY2tHdWkuaXNFZGl0aW5nSFVEKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk3O1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgXG4gICAgICBjb25zdCBpdGVtQ29udGFpbmVycyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJtb3ItaHVkLWRpc3BsYXkgPiBkaXYnKTtcbiAgICAgIGl0ZW1Db250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7c2V0dGluZ3NbJ2l0ZW0tc2l6ZSddfXB4YDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke3NldHRpbmdzWydpdGVtLXNpemUnXX1weGA7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIFxuICBleHBvcnQgZGVmYXVsdCBBcm1vckhVRDsgIiwgImNvbnN0IENQU0NvdW50ZXIgPSB7XG4gIG5hbWU6ICdDUFNDb3VudGVyJyxcbiAgY2F0ZWdvcnk6ICdQbGF5ZXInLFxuICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXlzIHlvdXIgY2xpY2tzIHBlciBzZWNvbmQuJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgZGVmYXVsdFg6IDcyNCxcbiAgZGVmYXVsdFk6IDcyNixcbiAgc2V0dGluZ3M6IFtcbiAgICB7IGlkOiAnY29sb3ItbW9kZScsIG5hbWU6ICdDb2xvciBNb2RlJywgdHlwZTogJ3NlbGVjdCcsIG9wdGlvbnM6IFsnVGhlbWUnLCAnQ3VzdG9tJ10sIHZhbHVlOiAnVGhlbWUnIH0sXG4gICAgeyBpZDogJ2JnLWNvbG9yJywgbmFtZTogJ0JhY2tncm91bmQgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJ3JnYmEoMzAsIDMzLCA0MSwgMC44NSknLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgIHsgaWQ6ICd0ZXh0LWNvbG9yJywgbmFtZTogJ1RleHQgQ29sb3InLCB0eXBlOiAnY29sb3InLCB2YWx1ZTogJyNFQUVBRUEnLCBjb25kaXRpb246IHMgPT4gc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgIHsgaWQ6ICdmb250LXNpemUnLCBuYW1lOiAnRm9udCBTaXplJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxNCwgbWluOiA4LCBtYXg6IDI0LCBzdGVwOiAxIH0sXG4gICAgeyBpZDogJ3BhZGRpbmcnLCBuYW1lOiAnUGFkZGluZycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogOCwgbWluOiAwLCBtYXg6IDIwLCBzdGVwOiAxIH0sXG4gICAgeyBpZDogJ2JvcmRlci1yYWRpdXMnLCBuYW1lOiAnQm9yZGVyIFJhZGl1cycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMTAsIG1pbjogMCwgbWF4OiAyMCwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdib3JkZXItd2lkdGgnLCBuYW1lOiAnQm9yZGVyIFdpZHRoJywgdHlwZTogJ3NsaWRlcicsIHZhbHVlOiAxLCBtaW46IDAsIG1heDogNSwgc3RlcDogMSB9LFxuICAgIHsgaWQ6ICdib3JkZXItY29sb3InLCBuYW1lOiAnQm9yZGVyIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpJywgY29uZGl0aW9uOiBzID0+IHNbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICB7IGlkOiAnc2hvdy1sYWJlbCcsIG5hbWU6ICdTaG93IExhYmVsJywgdHlwZTogJ2Jvb2xlYW4nLCB2YWx1ZTogdHJ1ZSB9LFxuICAgIHsgaWQ6ICdzaG93LWxtYicsIG5hbWU6ICdTaG93IExNQicsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICB7IGlkOiAnc2hvdy1ybWInLCBuYW1lOiAnU2hvdyBSTUInLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlIH0sXG4gICAge1xuICAgICAgaWQ6ICdmb3JtYXQnLFxuICAgICAgbmFtZTogJ1RleHQgRm9ybWF0JyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHZhbHVlOiAne2xhYmVsfSB7bG1ifSB8IHtybWJ9JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVXNlIHtsYWJlbH0sIHtsbWJ9LCBhbmQge3JtYn0gYXMgcGxhY2Vob2xkZXJzLicsXG4gICAgfSxcbiAgXSxcbiAgXG4gIGxlZnRDbGlja3M6IFtdLFxuICByaWdodENsaWNrczogW10sXG4gIFxuICBlbGVtZW50OiBudWxsLFxuXG4gIG9uRW5hYmxlKCkge1xuICAgIHRoaXMuY3JlYXRlRGlzcGxheSgpO1xuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBvbkRpc2FibGUoKSB7XG4gICAgdGhpcy5kZXN0cm95RGlzcGxheSgpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIG9uVGljaygpIHtcbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLmxlZnRDbGlja3MgPSB0aGlzLmxlZnRDbGlja3MuZmlsdGVyKHQgPT4gbm93IC0gdCA8IDEwMDApO1xuICAgIHRoaXMucmlnaHRDbGlja3MgPSB0aGlzLnJpZ2h0Q2xpY2tzLmZpbHRlcih0ID0+IG5vdyAtIHQgPCAxMDAwKTtcbiAgICBcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfSxcbiAgXG4gIG9uU2V0dGluZ1VwZGF0ZSgpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gIH0sXG5cbiAgaGFuZGxlTW91c2VEb3duKGUpIHtcbiAgICBpZiAoZS5idXR0b24gPT09IDApIHsgLy8gTGVmdCBjbGlja1xuICAgICAgdGhpcy5sZWZ0Q2xpY2tzLnB1c2gocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgIH0gZWxzZSBpZiAoZS5idXR0b24gPT09IDIpIHsgLy8gUmlnaHQgY2xpY2tcbiAgICAgIHRoaXMucmlnaHRDbGlja3MucHVzaChwZXJmb3JtYW5jZS5ub3coKSk7XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZURpc3BsYXkoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdjcHMtY291bnRlci1kaXNwbGF5JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH0sXG5cbiAgZGVzdHJveURpc3BsYXkoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlRGlzcGxheSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBjb25zdCBjbGlja0d1aSA9IHdpbmRvdy5TZXJlbml0eS5pbnN0YW5jZS5nZXQoJ0NsaWNrR1VJJyk7XG4gICAgICBpZiAoIWNsaWNrR3VpIHx8ICFjbGlja0d1aS5pc0VkaXRpbmdIVUQpIHtcbiAgICAgICAgY29uc3QgbW9kID0gd2luZG93LlNlcmVuaXR5Lmluc3RhbmNlLmdldCh0aGlzLm5hbWUpO1xuICAgICAgICBpZiAobW9kLnggIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bW9kLnh9cHhgO1xuICAgICAgICBpZiAobW9kLnkgIT09IG51bGwpIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHttb2QueX1weGA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5yZWR1Y2UoKGFjYywgcykgPT4gKHsgLi4uYWNjLCBbcy5pZF06IHMudmFsdWUgfSksIHt9KTtcbiAgICAgIGxldCB0ZXh0ID0gc2V0dGluZ3MuZm9ybWF0O1xuXG4gICAgICBpZiAoc2V0dGluZ3NbJ3Nob3ctbGFiZWwnXSkgdGV4dCA9IHRleHQucmVwbGFjZSgne2xhYmVsfScsICdDUFM6Jyk7IGVsc2UgdGV4dCA9IHRleHQucmVwbGFjZSgne2xhYmVsfScsICcnKTtcbiAgICAgIGlmIChzZXR0aW5nc1snc2hvdy1sbWInXSkgdGV4dCA9IHRleHQucmVwbGFjZSgne2xtYn0nLCB0aGlzLmxlZnRDbGlja3MubGVuZ3RoKTsgZWxzZSB0ZXh0ID0gdGV4dC5yZXBsYWNlKCd7bG1ifScsICcnKTtcbiAgICAgIGlmIChzZXR0aW5nc1snc2hvdy1ybWInXSkgdGV4dCA9IHRleHQucmVwbGFjZSgne3JtYn0nLCB0aGlzLnJpZ2h0Q2xpY2tzLmxlbmd0aCk7IGVsc2UgdGV4dCA9IHRleHQucmVwbGFjZSgne3JtYn0nLCAnJyk7XG4gICAgICBcbiAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQudHJpbSgpLnJlcGxhY2UoL1xcfC9nLCAobWF0Y2gsIG9mZnNldCwgc3RyKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZDaGFyID0gc3RyW29mZnNldCAtIDFdO1xuICAgICAgICBjb25zdCBuZXh0Q2hhciA9IHN0cltvZmZzZXQgKyAxXTtcbiAgICAgICAgaWYgKHByZXZDaGFyICYmIHByZXZDaGFyLnRyaW0oKSA9PT0gJycgJiYgbmV4dENoYXIgJiYgbmV4dENoYXIudHJpbSgpID09PSAnJykge1xuICAgICAgICAgIHJldHVybiAnfCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcmV2Q2hhciB8fCBwcmV2Q2hhci50cmltKCkgPT09ICcnIHx8ICFuZXh0Q2hhciB8fCBuZXh0Q2hhci50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH0pLnRyaW0oKTtcbiAgICB9XG4gIH0sXG5cbiAgYXBwbHlTdHlsZXMoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgXG4gICAgaWYgKHNldHRpbmdzWydjb2xvci1tb2RlJ10gPT09ICdUaGVtZScpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1wYW5lbCknO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSAndmFyKC0tdGV4dCknO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYCR7c2V0dGluZ3NbJ2JvcmRlci13aWR0aCddfXB4IHNvbGlkIHZhcigtLWJvcmRlcilgO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZXR0aW5nc1snYmctY29sb3InXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gc2V0dGluZ3NbJ3RleHQtY29sb3InXTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlciA9IGAke3NldHRpbmdzWydib3JkZXItd2lkdGgnXX1weCBzb2xpZCAke3NldHRpbmdzWydib3JkZXItY29sb3InXX1gO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBgJHtzZXR0aW5nc1snZm9udC1zaXplJ119cHhgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gYCR7c2V0dGluZ3NbJ3BhZGRpbmcnXX1weGA7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IGAke3NldHRpbmdzWydib3JkZXItcmFkaXVzJ119cHhgO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IDk5OTc7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENQU0NvdW50ZXI7ICIsICJjb25zdCBGUFNCb29zdGVyID0ge1xuICBuYW1lOiAnRlBTQm9vc3RlcicsXG4gIGNhdGVnb3J5OiAnVXRpbGl0eScsXG4gIGRlc2NyaXB0aW9uOiAnT3B0aW1pemVzIGdhbWUgcGVyZm9ybWFuY2UgYnkgYWRqdXN0aW5nIHJlc29sdXRpb24gYW5kIG90aGVyIHNldHRpbmdzLicsXG4gIGVuYWJsZWQ6IGZhbHNlLFxuICBjYW52YXM6IG51bGwsXG5cbiAgc2V0dGluZ3M6IFtcbiAgICB7XG4gICAgICBpZDogJ3Jlc29sdXRpb25TY2FsZScsXG4gICAgICBuYW1lOiAnUmVzb2x1dGlvbiBTY2FsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0xvd2VyIHZhbHVlcyBjYW4gaW1wcm92ZSBwZXJmb3JtYW5jZSBhdCB0aGUgY29zdCBvZiBxdWFsaXR5LicsXG4gICAgICB0eXBlOiAnc2xpZGVyJyxcbiAgICAgIHZhbHVlOiAxLFxuICAgICAgbWluOiAwLjEsXG4gICAgICBtYXg6IDEuMCxcbiAgICAgIHN0ZXA6IDAuMDVcbiAgICB9XG4gIF0sXG5cbiAgb25FbmFibGUobWFuYWdlcikge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vYS1jYW52YXMnKTtcbiAgICBpZiAoIXRoaXMuY2FudmFzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRlBTQm9vc3Rlcl0gQ291bGQgbm90IGZpbmQgZ2FtZSBjYW52YXM6ICNub2EtY2FudmFzJyk7XG4gICAgICBtYW5hZ2VyLmRpc2FibGUodGhpcy5uYW1lKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxXaWR0aCkge1xuICAgICAgdGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbFdpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsSGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIH1cbiAgfSxcblxuICBvbkRpc2FibGUobWFuYWdlcikge1xuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsV2lkdGgpIHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gcGFyc2VJbnQodGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbFdpZHRoLCAxMCk7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBwYXJzZUludCh0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsSGVpZ2h0LCAxMCk7XG4gICAgICBkZWxldGUgdGhpcy5jYW52YXMuZGF0YXNldC5vcmlnaW5hbFdpZHRoO1xuICAgICAgZGVsZXRlIHRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxIZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICB9XG4gICAgdGhpcy5jYW52YXMgPSBudWxsO1xuICB9LFxuICBcbiAgb25TZXR0aW5nVXBkYXRlKHNldHRpbmdJZCwgdmFsdWUsIG1hbmFnZXIpIHtcbiAgICAvLyBvblRpY2sgd2lsbCBoYW5kbGUgaXRcbiAgfSxcblxuICBvblRpY2soZHQsIG1hbmFnZXIpIHtcbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLmFwcGx5U2V0dGluZ3MobWFuYWdlcik7XG4gICAgfVxuICB9LFxuXG4gIGFwcGx5U2V0dGluZ3MobWFuYWdlcikge1xuICAgIGlmICghdGhpcy5jYW52YXMgfHwgIXRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxXaWR0aCkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IHNldHRpbmdzID0gbWFuYWdlci5nZXQodGhpcy5uYW1lKS5zZXR0aW5ncztcbiAgICBjb25zdCByZXNvbHV0aW9uU2NhbGUgPSBzZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gJ3Jlc29sdXRpb25TY2FsZScpLnZhbHVlO1xuICAgIGNvbnN0IG9yaWdpbmFsV2lkdGggPSBwYXJzZUludCh0aGlzLmNhbnZhcy5kYXRhc2V0Lm9yaWdpbmFsV2lkdGgsIDEwKTtcbiAgICBjb25zdCBvcmlnaW5hbEhlaWdodCA9IHBhcnNlSW50KHRoaXMuY2FudmFzLmRhdGFzZXQub3JpZ2luYWxIZWlnaHQsIDEwKTtcblxuICAgIGNvbnN0IG5ld1dpZHRoID0gTWF0aC5yb3VuZChvcmlnaW5hbFdpZHRoICogcmVzb2x1dGlvblNjYWxlKTtcbiAgICBjb25zdCBuZXdIZWlnaHQgPSBNYXRoLnJvdW5kKG9yaWdpbmFsSGVpZ2h0ICogcmVzb2x1dGlvblNjYWxlKTtcblxuICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gbmV3V2lkdGgpIHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gbmV3V2lkdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLmNhbnZhcy5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCAhPT0gJzEwMCUnKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ICE9PSAnMTAwJScpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRlBTQm9vc3RlcjsgIiwgImNvbnN0IEFkQmxvY2tlciA9IHtcbiAgICBuYW1lOiAnQWRCbG9ja2VyJyxcbiAgICBjYXRlZ29yeTogJ1V0aWxpdHknLFxuICAgIGRlc2NyaXB0aW9uOiAnQmxvY2tzIGluLWdhbWUgYWRzIGFuZCB0cmFja2VycyBieSBoaWRpbmcgZWxlbWVudHMgYW5kIGludGVyY2VwdGluZyBuZXR3b3JrIHJlcXVlc3RzLicsXG4gICAgZW5hYmxlZDogdHJ1ZSxcblxuICAgIHNldHRpbmdzOiBbXG4gICAgICAgIHsgaWQ6ICdoaWRlLXBhZ2UtYWRzJywgbmFtZTogJ0hpZGUgSW4tUGFnZSBBZHMnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlLCBkZXNjcmlwdGlvbjogJ0hpZGVzIHZpc2libGUgYWQgY29udGFpbmVycyBhbmQgcG9wdXBzLicgfSxcbiAgICAgICAgeyBpZDogJ2Jsb2NrLW5ldHdvcmstYWRzJywgbmFtZTogJ0Jsb2NrIEFkIE5ldHdvcmsgUmVxdWVzdHMnLCB0eXBlOiAnYm9vbGVhbicsIHZhbHVlOiB0cnVlLCBkZXNjcmlwdGlvbjogJ1ByZXZlbnRzIHRoZSBicm93c2VyIGZyb20gcmVxdWVzdGluZyBhZHMgZnJvbSBrbm93biBhZCBzZXJ2ZXJzLicgfVxuICAgIF0sXG5cbiAgICBvcmlnaW5hbEZldGNoOiB3aW5kb3cuZmV0Y2gsXG4gICAgb3JpZ2luYWxYaHJPcGVuOiB3aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW4sXG4gICAgb3JpZ2luYWxYaHJTZW5kOiB3aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQsXG4gICAgb2JzZXJ2ZXI6IG51bGwsXG4gICAgXG4gICAgYWRTZWxlY3RvcnM6IFtcbiAgICAgICAgJy5TdXBlclJhbmtBZENvbnRhaW5lcicsXG4gICAgICAgICcuQWRCYW5uZXJDb250YWluZXInLFxuICAgICAgICAnLlBsYXl3aXJlVmlkZW9XcmFwcGVyJyxcbiAgICAgICAgJy5VaVJlcXVlc3RzJyxcbiAgICAgICAgJy5BZEJhbm5lcicsXG4gICAgICAgICcuR2VuZXJpY1ZpZGVvV3JhcHBlcicsXG4gICAgICAgICcjYmxveGQtaW9fMzAweDYwMF8yJyxcbiAgICAgICAgJy5JbnZlbnRvcnlBZE91dGVyJ1xuICAgIF0sXG4gICAgXG4gICAgYmxvY2tMaXN0OiBbXG4gICAgICAgICdnb29nbGVzeW5kaWNhdGlvbi5jb20nLFxuICAgICAgICAnZ29vZ2xldGFnc2VydmljZXMuY29tJyxcbiAgICAgICAgJ2dvb2dsZS1hbmFseXRpY3MuY29tJyxcbiAgICAgICAgJ2RvdWJsZWNsaWNrLm5ldCcsXG4gICAgICAgICdhZGlucGxheS5jb20nLFxuICAgICAgICAncGxheXdpcmUuY29tJyxcbiAgICAgICAgJ2FtYXpvbi1hZHN5c3RlbS5jb20nLFxuICAgICAgICAnYWRueHMuY29tJ1xuICAgIF0sXG4gICAgXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTZXR0aW5ncygpO1xuICAgIH0sXG4gICAgXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLnVucGF0Y2hOZXR3b3JrUmVxdWVzdHMoKTtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW4taGlkaW5nIGVsZW1lbnRzIGlzIG5vdCBkb25lIHRvIGF2b2lkIGludGVyZmVyaW5nIHdpdGggZ2FtZSBsb2dpYy4gQSByZWZyZXNoIGlzIGJlc3QuXG4gICAgfSxcbiAgICBcbiAgICBvblNldHRpbmdVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTZXR0aW5ncygpO1xuICAgIH0sXG5cbiAgICBhcHBseVNldHRpbmdzKCkge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzWydibG9jay1uZXR3b3JrLWFkcyddKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGNoTmV0d29ya1JlcXVlc3RzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVucGF0Y2hOZXR3b3JrUmVxdWVzdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXR0aW5nc1snaGlkZS1wYWdlLWFkcyddKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVQYWdlQWRzKCk7XG4gICAgICAgICAgICB0aGlzLnNldHVwT2JzZXJ2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIGlzQmxvY2tlZCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tMaXN0LnNvbWUoZG9tYWluID0+IHVybC5pbmNsdWRlcyhkb21haW4pKTtcbiAgICB9LFxuXG4gICAgcGF0Y2hOZXR3b3JrUmVxdWVzdHMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgPyBpbnB1dCA6IGlucHV0LnVybDtcbiAgICAgICAgICAgIGlmIChzZWxmLmlzQmxvY2tlZCh1cmwpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtTZXJlbml0eV0gQmxvY2tlZCBmZXRjaCByZXF1ZXN0IHRvOiAke3VybH1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBSZXNwb25zZShudWxsLCB7IHN0YXR1czogMjA0LCBzdGF0dXNUZXh0OiAnTm8gQ29udGVudCcgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYub3JpZ2luYWxGZXRjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKG1ldGhvZCwgdXJsKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc0Jsb2NrZWQodXJsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzQmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtTZXJlbml0eV0gQmxvY2tlZCBYSFIgcmVxdWVzdCB0bzogJHt1cmx9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9pc0Jsb2NrZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm9yaWdpbmFsWGhyT3Blbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgd2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNCbG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYub3JpZ2luYWxYaHJTZW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHVucGF0Y2hOZXR3b3JrUmVxdWVzdHMoKSB7XG4gICAgICAgIHdpbmRvdy5mZXRjaCA9IHRoaXMub3JpZ2luYWxGZXRjaDtcbiAgICAgICAgd2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuID0gdGhpcy5vcmlnaW5hbFhock9wZW47XG4gICAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IHRoaXMub3JpZ2luYWxYaHJTZW5kO1xuICAgIH0sXG5cbiAgICBoaWRlRWxlbWVudChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnN0eWxlLm9wYWNpdHkgIT09ICcwJykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBoaWRlUGFnZUFkcygpIHtcbiAgICAgICAgdGhpcy5hZFNlbGVjdG9ycy5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goZWwgPT4gdGhpcy5oaWRlRWxlbWVudChlbCkpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFxuICAgIHNldHVwT2JzZXJ2ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZFNlbGVjdG9ycy5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVFbGVtZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goZWwgPT4gdGhpcy5oaWRlRWxlbWVudChlbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZEJsb2NrZXI7ICIsICJjb25zdCBDT05GSUdfS0VZID0gJ2xvZ2xldmVsJztcblxuY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gIHN0YXRpYyBzYXZlKGNvbmZpZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnKTtcbiAgICAgIGNvbnN0IGVuY29kZWQgPSBidG9hKGpzb24pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ09ORklHX0tFWSwgZW5jb2RlZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbQ29uZmlndXJhdGlvbl0gRXJyb3Igc2F2aW5nIGNvbmZpZzonLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBsb2FkKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbmNvZGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ09ORklHX0tFWSk7XG4gICAgICBpZiAoIWVuY29kZWQpIHJldHVybiBudWxsO1xuXG4gICAgICBjb25zdCBqc29uID0gYXRvYihlbmNvZGVkKTtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignW0NvbmZpZ3VyYXRpb25dIEVycm9yIGxvYWRpbmcgY29uZmlnOicsIGVycik7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDT05GSUdfS0VZKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uOyAiLCAiY29uc3QgQ3Jvc3NoYWlyID0ge1xuICAgIG5hbWU6ICdDcm9zc2hhaXInLFxuICAgIGNhdGVnb3J5OiAnVmlzdWFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlcGxhY2VzIHRoZSBkZWZhdWx0IGdhbWUgY3Jvc3NoYWlyIHdpdGggYSBjdXN0b20gb25lLicsXG4gICAgZW5hYmxlZDogdHJ1ZSxcblxuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgZ2FtZUNyb3NzaGFpcjogbnVsbCxcbiAgICBnYW1lQ3Jvc3NoYWlySW5pdGlhbERpc3BsYXk6IG51bGwsXG4gICAgb2JzZXJ2ZXI6IG51bGwsXG5cbiAgICBzZXR0aW5nczogW1xuICAgICAgICB7IGlkOiAnaGlkZS1vcmlnaW5hbCcsIG5hbWU6ICdIaWRlIE9yaWdpbmFsIENyb3NzaGFpcicsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIGlkOiAnbW9kZScsIFxuICAgICAgICAgICAgbmFtZTogJ01vZGUnLCBcbiAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLCBcbiAgICAgICAgICAgIHZhbHVlOiAnQ3Jvc3MnLCBcbiAgICAgICAgICAgIG9wdGlvbnM6IFsnQ3Jvc3MnLCAnUGx1cycsICdEb3QnLCAnQ2lyY2xlJywgJ1QtU2hhcGUnLCAnQXJyb3cnLCAnQ3VzdG9tIEltYWdlJ10gXG4gICAgICAgIH0sXG4gICAgICAgIHsgaWQ6ICdjb2xvci1tb2RlJywgbmFtZTogJ0NvbG9yIE1vZGUnLCB0eXBlOiAnc2VsZWN0Jywgb3B0aW9uczogWydUaGVtZScsICdDdXN0b20nXSwgdmFsdWU6ICdUaGVtZScsIGNvbmRpdGlvbjogKHNldHRpbmdzKSA9PiBzZXR0aW5nc1snbW9kZSddICE9PSAnQ3VzdG9tIEltYWdlJyB9LFxuICAgICAgICB7IGlkOiAnaW1hZ2UtdXJsJywgbmFtZTogJ0ltYWdlIFVSTCcsIHR5cGU6ICd0ZXh0JywgdmFsdWU6ICdodHRwczovL2kuaW1ndXIuY29tL004TTRHM2sucG5nJywgY29uZGl0aW9uOiAoc2V0dGluZ3MpID0+IHNldHRpbmdzWydtb2RlJ10gPT09ICdDdXN0b20gSW1hZ2UnIH0sXG4gICAgICAgIHsgaWQ6ICdzaXplJywgbmFtZTogJ1NpemUnLCB0eXBlOiAnc2xpZGVyJywgdmFsdWU6IDEyLCBtaW46IDEsIG1heDogMTAwLCBzdGVwOiAxIH0sXG4gICAgICAgIHsgaWQ6ICdjb2xvcicsIG5hbWU6ICdDb2xvcicsIHR5cGU6ICdjb2xvcicsIHZhbHVlOiAnI0ZGRkZGRicsIGNvbmRpdGlvbjogKHNldHRpbmdzKSA9PiBzZXR0aW5nc1snbW9kZSddICE9PSAnQ3VzdG9tIEltYWdlJyAmJiBzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnQ3VzdG9tJyB9LFxuICAgICAgICB7IGlkOiAndGhpY2tuZXNzJywgbmFtZTogJ1RoaWNrbmVzcycsIHR5cGU6ICdzbGlkZXInLCB2YWx1ZTogMiwgbWluOiAxLCBtYXg6IDIwLCBzdGVwOiAxLCBjb25kaXRpb246IChzZXR0aW5ncykgPT4gWydDcm9zcycsICdQbHVzJywgJ0NpcmNsZScsICdULVNoYXBlJ10uaW5jbHVkZXMoc2V0dGluZ3NbJ21vZGUnXSkgfSxcbiAgICAgICAgeyBpZDogJ291dGxpbmUnLCBuYW1lOiAnT3V0bGluZScsIHR5cGU6ICdib29sZWFuJywgdmFsdWU6IHRydWUsIGNvbmRpdGlvbjogKHNldHRpbmdzKSA9PiBzZXR0aW5nc1snbW9kZSddICE9PSAnQ3VzdG9tIEltYWdlJyB9LFxuICAgICAgICB7IGlkOiAnb3V0bGluZS1jb2xvcicsIG5hbWU6ICdPdXRsaW5lIENvbG9yJywgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjMDAwMDAwJywgY29uZGl0aW9uOiAoc2V0dGluZ3MpID0+IHNldHRpbmdzWydvdXRsaW5lJ10gJiYgc2V0dGluZ3NbJ21vZGUnXSAhPT0gJ0N1c3RvbSBJbWFnZScgJiYgc2V0dGluZ3NbJ2NvbG9yLW1vZGUnXSA9PT0gJ0N1c3RvbScgfSxcbiAgICBdLFxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRGlzcGxheSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNyb3NzaGFpcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5oYW5kbGVHYW1lQ3Jvc3NoYWlyKCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB0aGlzLmhhbmRsZUdhbWVDcm9zc2hhaXIoKSk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3Ryb3lEaXNwbGF5KCk7XG4gICAgICAgIHRoaXMucmVzdG9yZUdhbWVDcm9zc2hhaXIoKTtcbiAgICAgICAgdGhpcy5nYW1lQ3Jvc3NoYWlyID0gbnVsbDtcbiAgICAgICAgdGhpcy5nYW1lQ3Jvc3NoYWlySW5pdGlhbERpc3BsYXkgPSBudWxsO1xuICAgIH0sXG5cbiAgICBvblNldHRpbmdVcGRhdGUoc2V0dGluZ0lkKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ3Jvc3NoYWlyKCk7XG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdoaWRlLW9yaWdpbmFsJykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVHYW1lQ3Jvc3NoYWlyKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlRGlzcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1jcm9zc2hhaXInO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gJzUwJSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gJzUwJSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC01MCUsIC01MCUpJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSAnOTk5OSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9LFxuXG4gICAgZGVzdHJveURpc3BsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIGhhbmRsZUdhbWVDcm9zc2hhaXIoKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZEhpZGUgPSB0aGlzLnNldHRpbmdzLmZpbmQocyA9PiBzLmlkID09PSAnaGlkZS1vcmlnaW5hbCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBnYW1lQ3Jvc3NoYWlyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQ3Jvc3NIYWlyJyk7XG5cbiAgICAgICAgaWYgKHNob3VsZEhpZGUpIHtcbiAgICAgICAgICAgIGlmIChnYW1lQ3Jvc3NoYWlyRWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lQ3Jvc3NoYWlyICE9PSBnYW1lQ3Jvc3NoYWlyRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3Jvc3NoYWlyID0gZ2FtZUNyb3NzaGFpckVsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVDcm9zc2hhaXJJbml0aWFsRGlzcGxheSA9IGdhbWVDcm9zc2hhaXJFbC5zdHlsZS5kaXNwbGF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDcm9zc2hhaXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZUdhbWVDcm9zc2hhaXIoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgcmVzdG9yZUdhbWVDcm9zc2hhaXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVDcm9zc2hhaXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNyb3NzaGFpci5zdHlsZS5kaXNwbGF5ID0gdGhpcy5nYW1lQ3Jvc3NoYWlySW5pdGlhbERpc3BsYXkgfHwgJyc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIHVwZGF0ZUNyb3NzaGFpcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MucmVkdWNlKChhY2MsIHMpID0+ICh7IC4uLmFjYywgW3MuaWRdOiBzLnZhbHVlIH0pLCB7fSk7XG4gICAgICAgIGxldCB7IG1vZGUsIHNpemUsIGNvbG9yLCB0aGlja25lc3MsIG91dGxpbmUsICdvdXRsaW5lLWNvbG9yJzogb3V0bGluZUNvbG9yLCAnaW1hZ2UtdXJsJzogaW1hZ2VVcmwsICdjb2xvci1tb2RlJzogY29sb3JNb2RlIH0gPSBzZXR0aW5ncztcblxuICAgICAgICBpZiAoY29sb3JNb2RlID09PSAnVGhlbWUnICYmIG1vZGUgIT09ICdDdXN0b20gSW1hZ2UnKSB7XG4gICAgICAgICAgICBjb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXByaW1hcnknKS50cmltKCk7XG4gICAgICAgICAgICBvdXRsaW5lQ29sb3IgPSAnIzAwMDAwMCc7IC8vIERlZmF1bHQgb3V0bGluZSBmb3IgdGhlbWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dGxpbmVTdHlsZSA9IG91dGxpbmUgPyBgMHB4IDBweCAycHggJHtvdXRsaW5lQ29sb3J9LCAwcHggMHB4IDJweCAke291dGxpbmVDb2xvcn0sIDBweCAwcHggMnB4ICR7b3V0bGluZUNvbG9yfSwgMHB4IDBweCAycHggJHtvdXRsaW5lQ29sb3J9YCA6ICdub25lJztcblxuICAgICAgICBzd2l0Y2gobW9kZSkge1xuICAgICAgICAgICAgY2FzZSAnQ3VzdG9tIEltYWdlJzpcbiAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gaW1hZ2VVcmw7XG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gYCR7c2l6ZX1weGA7XG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IGAke3NpemV9cHhgO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdEb3QnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRvdC5zdHlsZS53aWR0aCA9IGAke3NpemV9cHhgO1xuICAgICAgICAgICAgICAgIGRvdC5zdHlsZS5oZWlnaHQgPSBgJHtzaXplfXB4YDtcbiAgICAgICAgICAgICAgICBkb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgICAgICAgICAgZG90LnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xuICAgICAgICAgICAgICAgIGRvdC5zdHlsZS50ZXh0U2hhZG93ID0gb3V0bGluZVN0eWxlO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChkb3QpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdDaXJjbGUnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNpcmNsZS5zdHlsZS53aWR0aCA9IGAke3NpemV9cHhgO1xuICAgICAgICAgICAgICAgIGNpcmNsZS5zdHlsZS5oZWlnaHQgPSBgJHtzaXplfXB4YDtcbiAgICAgICAgICAgICAgICBjaXJjbGUuc3R5bGUuYm9yZGVyID0gYCR7dGhpY2tuZXNzfXB4IHNvbGlkICR7Y29sb3J9YDtcbiAgICAgICAgICAgICAgICBjaXJjbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzUwJSc7XG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLnRleHRTaGFkb3cgPSBvdXRsaW5lU3R5bGU7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0Nyb3NzJzpcbiAgICAgICAgICAgIGNhc2UgJ1BsdXMnOlxuICAgICAgICAgICAgY2FzZSAnVC1TaGFwZSc6XG4gICAgICAgICAgICAgICAgY29uc3QgZ2FwID0gbW9kZSA9PT0gJ0Nyb3NzJyA/IE1hdGgubWF4KDEsIHNpemUgLyA0KSA6IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogeyB0b3A6IGAtJHtnYXAgKyBsZW5ndGh9cHhgLCBsZWZ0OiBgLSR7dGhpY2tuZXNzIC8gMn1weGAsIHdpZHRoOiBgJHt0aGlja25lc3N9cHhgLCBoZWlnaHQ6IGAke2xlbmd0aH1weGAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiB7IHRvcDogYCR7Z2FwfXB4YCwgbGVmdDogYC0ke3RoaWNrbmVzcyAvIDJ9cHhgLCB3aWR0aDogYCR7dGhpY2tuZXNzfXB4YCwgaGVpZ2h0OiBgJHtsZW5ndGh9cHhgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHsgbGVmdDogYC0ke2dhcCArIGxlbmd0aH1weGAsIHRvcDogYC0ke3RoaWNrbmVzcyAvIDJ9cHhgLCB3aWR0aDogYCR7bGVuZ3RofXB4YCwgaGVpZ2h0OiBgJHt0aGlja25lc3N9cHhgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB7IGxlZnQ6IGAke2dhcH1weGAsIHRvcDogYC0ke3RoaWNrbmVzcyAvIDJ9cHhgLCB3aWR0aDogYCR7bGVuZ3RofXB4YCwgaGVpZ2h0OiBgJHt0aGlja25lc3N9cHhgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBsaW5lc1RvRHJhdyA9IFsndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0J107XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdULVNoYXBlJykgbGluZXNUb0RyYXcgPSBbJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0J107XG5cbiAgICAgICAgICAgICAgICBsaW5lc1RvRHJhdy5mb3JFYWNoKHBvcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc3R5bGUudGV4dFNoYWRvdyA9IG91dGxpbmVTdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihsaW5lLnN0eWxlLCBwb3NpdGlvbnNbcG9zXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSAnQXJyb3cnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgYXJyb3cuc3R5bGUud2lkdGggPSAnMCc7XG4gICAgICAgICAgICAgICAgYXJyb3cuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICAgICAgICAgIGFycm93LnN0eWxlLmJvcmRlckxlZnQgPSBgJHtzaXplIC8gMn1weCBzb2xpZCB0cmFuc3BhcmVudGA7XG4gICAgICAgICAgICAgICAgYXJyb3cuc3R5bGUuYm9yZGVyUmlnaHQgPSBgJHtzaXplIC8gMn1weCBzb2xpZCB0cmFuc3BhcmVudGA7XG4gICAgICAgICAgICAgICAgYXJyb3cuc3R5bGUuYm9yZGVyQm90dG9tID0gYCR7c2l6ZX1weCBzb2xpZCAke2NvbG9yfWA7XG4gICAgICAgICAgICAgICAgaWYob3V0bGluZSkge1xuICAgICAgICAgICAgICAgICAgICBhcnJvdy5zdHlsZS5maWx0ZXIgPSBgZHJvcC1zaGFkb3coMCAxcHggMXB4ICR7b3V0bGluZUNvbG9yfSkgZHJvcC1zaGFkb3coMCAtMXB4IDFweCAke291dGxpbmVDb2xvcn0pIGRyb3Atc2hhZG93KDFweCAwIDFweCAke291dGxpbmVDb2xvcn0pIGRyb3Atc2hhZG93KC0xcHggMCAxcHggJHtvdXRsaW5lQ29sb3J9KWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3NoYWlyOyAiLCAiY2xhc3MgTm90aWZpY2F0aW9uTWFuYWdlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb250LWF3ZXNvbWUtbGluaycpKSB7XHJcbiAgICAgIGNvbnN0IGZvbnRBd2Vzb21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgZm9udEF3ZXNvbWVMaW5rLmlkID0gJ2ZvbnQtYXdlc29tZS1saW5rJztcclxuICAgICAgZm9udEF3ZXNvbWVMaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuICAgICAgZm9udEF3ZXNvbWVMaW5rLmhyZWYgPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuNC9jc3MvYWxsLm1pbi5jc3MnO1xyXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZvbnRBd2Vzb21lTGluayk7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1ub3RpZmljYXRpb24tY29udGFpbmVyJykpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1ub3RpZmljYXRpb24tY29udGFpbmVyJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LW5vdGlmaWNhdGlvbi1jb250YWluZXInO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvdyh7IHRpdGxlID0gJ1NlcmVuaXR5JywgbWVzc2FnZSwgdHlwZSA9ICdpbmZvJywgZHVyYXRpb24gPSAzMDAwIH0pIHtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IGBzZXJlbml0eS1ub3RpZmljYXRpb24gc2VyZW5pdHktbm90aWZpY2F0aW9uLSR7dHlwZX1gO1xyXG4gICAgXHJcbiAgICBjb25zdCBpY29uTWFwID0ge1xyXG4gICAgICBpbmZvOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMTVjLS41NSAwLTEtLjQ1LTEtMXYtNGMwLS41NS40NS0xIDEtMXMxIC40NSAxIDF2NGMwIC41NS0uNDUgMS0xIDF6bTEtOGgtMlY3aDJ2MnpcIj48L3BhdGg+PC9zdmc+YCxcclxuICAgICAgc3VjY2VzczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5elwiPjwvcGF0aD48L3N2Zz5gLFxyXG4gICAgICB3YXJuaW5nOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBkPVwiTTEgMjFoMjJMMTIgMiAxIDIxem0xMi0zaC0ydi0yaDJ2MnptMC00aC0ydi00aDJ2NHpcIj48L3BhdGg+PC9zdmc+YCxcclxuICAgICAgZXJyb3I6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2MnpcIj48L3BhdGg+PC9zdmc+YCxcclxuICAgIH07XHJcblxyXG4gICAgbm90aWZpY2F0aW9uLmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInNlcmVuaXR5LW5vdGlmaWNhdGlvbi1pY29uLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VyZW5pdHktbm90aWZpY2F0aW9uLWljb25cIj4ke2ljb25NYXBbdHlwZV0gfHwgaWNvbk1hcC5pbmZvfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlcmVuaXR5LW5vdGlmaWNhdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlcmVuaXR5LW5vdGlmaWNhdGlvbi10aXRsZVwiPiR7dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlcmVuaXR5LW5vdGlmaWNhdGlvbi1tZXNzYWdlXCI+JHttZXNzYWdlfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlcmVuaXR5LW5vdGlmaWNhdGlvbi1jbG9zZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlcmVuaXR5LW5vdGlmaWNhdGlvbi10aW1lclwiPjwvZGl2PlxyXG4gICAgYDtcclxuICAgIFxyXG4gICAgdGhpcy5jb250YWluZXIucHJlcGVuZChub3RpZmljYXRpb24pO1xyXG4gICAgXHJcbiAgICAvLyBBbmltYXRlIGluXHJcbiAgICBub3RpZmljYXRpb24uc3R5bGUuYW5pbWF0aW9uID0gJ3NlcmVuaXR5LW5vdGlmaWNhdGlvbi1pbiAwLjVzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjIsIDEsIDAuMiwgMSknO1xyXG5cclxuICAgIGNvbnN0IHRpbWVyQmFyID0gbm90aWZpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1ub3RpZmljYXRpb24tdGltZXInKTtcclxuICAgIHRpbWVyQmFyLnN0eWxlLnRyYW5zaXRpb24gPSBgd2lkdGggJHtkdXJhdGlvbn1tcyBsaW5lYXJgO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYodGltZXJCYXIpIHRpbWVyQmFyLnN0eWxlLndpZHRoID0gJzAlJztcclxuICAgIH0sIDEwKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcclxuICAgICAgaWYgKG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2V4aXRpbmcnKSkgcmV0dXJuO1xyXG4gICAgICBub3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnZXhpdGluZycpO1xyXG4gICAgICBcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICBub3RpZmljYXRpb24uc3R5bGUuYW5pbWF0aW9uID0gJ3NlcmVuaXR5LW5vdGlmaWNhdGlvbi1vdXQgMC41cyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoMC44LCAwLCAwLjgsIDApJztcclxuICAgICAgbm90aWZpY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIChlKSA9PiB7XHJcbiAgICAgICAgaWYoZS5hbmltYXRpb25OYW1lID09PSAnc2VyZW5pdHktbm90aWZpY2F0aW9uLW91dCcpIHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNsb3NlQnRuID0gbm90aWZpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zZXJlbml0eS1ub3RpZmljYXRpb24tY2xvc2UnKTtcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UsIHsgb25jZTogdHJ1ZSB9KTtcclxuICAgIFxyXG4gICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsb3NlLCBkdXJhdGlvbik7XHJcblxyXG4gICAgbm90aWZpY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgIHRpbWVyQmFyLnN0eWxlLndpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lckJhcikud2lkdGg7XHJcbiAgICB9KTtcclxuXHJcbiAgICBub3RpZmljYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChjbG9zZSwgZHVyYXRpb24pOyAvLyByZXN0YXJ0IHdpdGggZnVsbCBkdXJhdGlvblxyXG4gICAgICAgIHRpbWVyQmFyLnN0eWxlLnRyYW5zaXRpb24gPSBgd2lkdGggJHtkdXJhdGlvbn1tcyBsaW5lYXJgO1xyXG4gICAgICAgIHRpbWVyQmFyLnN0eWxlLndpZHRoID0gJzAlJztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uTWFuYWdlcjsgIiwgImNvbnN0IE5vdGlmaWNhdGlvbnMgPSB7XHJcbiAgbmFtZTogJ05vdGlmaWNhdGlvbnMnLFxyXG4gIGNhdGVnb3J5OiAnVXRpbGl0eScsXHJcbiAgZGVzY3JpcHRpb246ICdTaG93cyBhbGVydHMgd2hlbiBtb2R1bGVzIGFyZSB0b2dnbGVkLicsXHJcbiAgZW5hYmxlZDogZmFsc2UsXHJcbiAgc2V0dGluZ3M6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25zOyAiLCAiaW1wb3J0IHsgZ2V0UmFpbmJvd0NvbG9yIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vLyBBIGhlbHBlciB0byBjYWNoZSBjYW52YXMgY29udGV4dCBmb3IgbWVhc3VyaW5nLCBpbXByb3ZpbmcgcGVyZm9ybWFuY2UuXG5jb25zdCBUX0NUWF9DQUNIRSA9IHtcbiAgICBfY3R4OiBudWxsLFxuICAgIGdldENvbnRleHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2N0eCkge1xuICAgICAgICAgICAgdGhpcy5fY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY3R4O1xuICAgIH1cbn07XG5cbmNvbnN0IEFycmF5TGlzdCA9IHtcbiAgICBuYW1lOiAnQXJyYXlMaXN0JyxcbiAgICBjYXRlZ29yeTogJ1Zpc3VhbCcsXG4gICAgZGVzY3JpcHRpb246ICdEaXNwbGF5cyBhIGxpc3Qgb2YgZW5hYmxlZCBtb2R1bGVzLicsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIFxuICAgIHNldHRpbmdzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnY29sb3ItbW9kZScsXG4gICAgICAgICAgICBuYW1lOiAnQ29sb3IgTW9kZScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBjb2xvciBzdHlsZSBvZiB0aGUgbW9kdWxlIGxpc3QuJyxcbiAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgb3B0aW9uczogWydSYWluYm93JywgJ1N0YXRpYyddLFxuICAgICAgICAgICAgdmFsdWU6ICdTdGF0aWMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAndXNlLXRoZW1lLWNvbG9yJyxcbiAgICAgICAgICAgIG5hbWU6ICdVc2UgVGhlbWUgQ29sb3InLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVc2UgdGhlIG1haW4gdGhlbWUgY29sb3IgZm9yIHN0YXRpYyBtb2RlLicsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogKHNldHRpbmdzKSA9PiBzZXR0aW5nc1snY29sb3ItbW9kZSddID09PSAnU3RhdGljJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ3N0YXRpYy1jb2xvcicsXG4gICAgICAgICAgICBuYW1lOiAnQ3VzdG9tIFN0YXRpYyBDb2xvcicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBjb2xvciBvZiB0aGUgdGV4dCBpZiBub3QgdXNpbmcgdGhlIHRoZW1lIGNvbG9yLicsXG4gICAgICAgICAgICB0eXBlOiAnY29sb3InLFxuICAgICAgICAgICAgdmFsdWU6ICdyZ2JhKDk0LCAxMTQsIDIzNSwgMSknLFxuICAgICAgICAgICAgY29uZGl0aW9uOiAoc2V0dGluZ3MpID0+IHNldHRpbmdzWydjb2xvci1tb2RlJ10gPT09ICdTdGF0aWMnICYmICFzZXR0aW5nc1sndXNlLXRoZW1lLWNvbG9yJ11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdib3JkZXInLFxuICAgICAgICAgICAgbmFtZTogJ1Nob3cgQm9yZGVyJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGlzcGxheSBhIGNvbG9yZWQgYm9yZGVyIG9uIHRoZSBzaWRlIG9mIHRoZSBsaXN0LicsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICd0ZXh0LXNoYWRvdycsXG4gICAgICAgICAgICBuYW1lOiAnVGV4dCBTaGFkb3cnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBZGRzIGEgc2hhZG93IHRvIHRoZSB0ZXh0IGZvciBiZXR0ZXIgdmlzaWJpbGl0eS4nLFxuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnZm9udC1zaXplJyxcbiAgICAgICAgICAgIG5hbWU6ICdGb250IFNpemUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgZm9udCBzaXplIG9mIHRoZSBtb2R1bGUgbmFtZXMuJyxcbiAgICAgICAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgICAgICAgbWluOiAxMCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgdmFsdWU6IDE0XG4gICAgICAgIH1cbiAgICBdLFxuXG4gICAgb25FbmFibGUobWFuYWdlcikge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gJ3NlcmVuaXR5LWFycmF5bGlzdC1jb250YWluZXInO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGUobWFuYWdlcik7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblRpY2soZHQsIG1hbmFnZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBleGNsdWRlZCA9IFsnQ2xpY2tHVUknLCAnQXJyYXlMaXN0JywgJ05vdGlmaWNhdGlvbnMnXTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdldCBmb250IHN0eWxlcyB0byBhY2N1cmF0ZWx5IG1lYXN1cmUgdGV4dCB3aWR0aFxuICAgICAgICBjb25zdCBmb250U2l6ZSA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICdmb250LXNpemUnKTtcbiAgICAgICAgY29uc3QgZm9udFdlaWdodCA9IDYwMDsgLy8gQXMgZGVmaW5lZCBpbiBzdHlsZXMuY3NzXG4gICAgICAgIGNvbnN0IGZvbnRGYW1pbHkgPSAnSW50ZXInOyAvLyBBcyBkZWZpbmVkIGluIHN0eWxlcy5jc3NcbiAgICAgICAgY29uc3QgZm9udCA9IGAke2ZvbnRXZWlnaHR9ICR7Zm9udFNpemV9cHggJHtmb250RmFtaWx5fWA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gVF9DVFhfQ0FDSEUuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LmZvbnQgPSBmb250O1xuXG4gICAgICAgIGNvbnN0IGVuYWJsZWRNb2R1bGVzID0gbWFuYWdlci5saXN0KClcbiAgICAgICAgICAgIC5maWx0ZXIobSA9PiBtLmVuYWJsZWQgJiYgIWV4Y2x1ZGVkLmluY2x1ZGVzKG0ubmFtZSkpXG4gICAgICAgICAgICAubWFwKG0gPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBtLm5hbWUsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQobS5uYW1lKS53aWR0aFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi53aWR0aCAtIGEud2lkdGggfHwgYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yTW9kZSA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICdjb2xvci1tb2RlJyk7XG4gICAgICAgIGNvbnN0IHVzZVRoZW1lQ29sb3IgPSB0aGlzLmdldFNldHRpbmdWYWx1ZShtYW5hZ2VyLCAndXNlLXRoZW1lLWNvbG9yJyk7XG4gICAgICAgIGxldCBzdGF0aWNDb2xvciA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICdzdGF0aWMtY29sb3InKTtcbiAgICAgICAgY29uc3Qgc2hvd0JvcmRlciA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICdib3JkZXInKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb2xvck1vZGUgPT09ICdTdGF0aWMnICYmIHVzZVRoZW1lQ29sb3IpIHtcbiAgICAgICAgICAgIHN0YXRpY0NvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tcHJpbWFyeScpLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZW5hYmxlZE1vZHVsZXMuZm9yRWFjaCgobW9kLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbW9kRWxlbWVudC5jbGFzc05hbWUgPSAnc2VyZW5pdHktYXJyYXlsaXN0LWl0ZW0nO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9yTW9kZSA9PT0gJ1JhaW5ib3cnID8gZ2V0UmFpbmJvd0NvbG9yKGluZGV4KSA6IHN0YXRpY0NvbG9yO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtb2RFbGVtZW50LnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgICAgICAgICBtb2RFbGVtZW50LnRleHRDb250ZW50ID0gbW9kLm5hbWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzaG93Qm9yZGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9yZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdzZXJlbml0eS1hcnJheWxpc3QtYm9yZGVyJztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgICAgIG1vZEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9yZGVyRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChtb2RFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICBvblNldHRpbmdVcGRhdGUoc2V0dGluZ0lkLCB2YWx1ZSwgbWFuYWdlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKG1hbmFnZXIpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVTdHlsZShtYW5hZ2VyKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgdGV4dFNoYWRvdyA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICd0ZXh0LXNoYWRvdycpO1xuICAgICAgICBjb25zdCBmb250U2l6ZSA9IHRoaXMuZ2V0U2V0dGluZ1ZhbHVlKG1hbmFnZXIsICdmb250LXNpemUnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke2ZvbnRTaXplfXB4YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3dpdGgtc2hhZG93JywgdGV4dFNoYWRvdyk7XG4gICAgfSxcblxuICAgIGdldFNldHRpbmdWYWx1ZShtYW5hZ2VyLCBzZXR0aW5nSWQpIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gbWFuYWdlci5nZXQoJ0FycmF5TGlzdCcpO1xuICAgICAgICBpZiAoIW1vZHVsZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSBtb2R1bGUuc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09IHNldHRpbmdJZCk7XG4gICAgICAgIHJldHVybiBzZXR0aW5nID8gc2V0dGluZy52YWx1ZSA6IG51bGw7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlMaXN0OyAiLCAiaW1wb3J0IENsaWNrR1VJIGZyb20gJy4vbW9kdWxlcy92aXN1YWwvQ2xpY2tHVUknO1xuaW1wb3J0IEZQU0NvdW50ZXIgZnJvbSAnLi9tb2R1bGVzL3Zpc3VhbC9GUFNDb3VudGVyJztcbmltcG9ydCBJbnRlcmZhY2UgZnJvbSAnLi9tb2R1bGVzL3Zpc3VhbC9JbnRlcmZhY2UnO1xuaW1wb3J0IENoYXQgZnJvbSAnLi9tb2R1bGVzL3Zpc3VhbC9DaGF0JztcbmltcG9ydCBLZXlzdHJva2VzIGZyb20gJy4vbW9kdWxlcy9jb21iYXQvS2V5c3Ryb2tlcyc7XG5pbXBvcnQgVG9nZ2xlU3ByaW50IGZyb20gJy4vbW9kdWxlcy9tb3ZlbWVudC9Ub2dnbGVTcHJpbnQnOztcbmltcG9ydCBBcm1vckhVRCBmcm9tICcuL21vZHVsZXMvcGxheWVyL0FybW9ySFVEJztcbmltcG9ydCBIb3RiYXIgZnJvbSAnLi9tb2R1bGVzL3BsYXllci9Ib3RiYXInO1xuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gJy4vbW9kdWxlcy91dGlsaXR5L0Nvb3Jkcyc7XG5pbXBvcnQgQ1BTQ291bnRlciBmcm9tICcuL21vZHVsZXMvcGxheWVyL0NQU0NvdW50ZXInO1xuaW1wb3J0IEZQU0Jvb3N0ZXIgZnJvbSAnLi9tb2R1bGVzL3V0aWxpdHkvRlBTQm9vc3Rlcic7XG5pbXBvcnQgQWRCbG9ja2VyIGZyb20gJy4vbW9kdWxlcy91dGlsaXR5L0FkQmxvY2tlcic7XG5pbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tICcuL0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IENyb3NzaGFpciBmcm9tICcuL21vZHVsZXMvdmlzdWFsL0Nyb3NzaGFpcidcbmltcG9ydCBOb3RpZmljYXRpb25NYW5hZ2VyIGZyb20gJy4vTm90aWZpY2F0aW9uTWFuYWdlcic7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuL21vZHVsZXMvdXRpbGl0eS9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBBcnJheUxpc3QgZnJvbSAnLi9tb2R1bGVzL3Zpc3VhbC9BcnJheUxpc3QnO1xuXG5jbGFzcyBNb2R1bGVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoeyB0aWNrUmF0ZSA9IDYwIH0gPSB7fSkge1xuICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLm1vZHVsZURlZnMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5jYXRlZ29yaWVzID0gW1xuICAgICAgJ0NvbWJhdCcsICdNb3ZlbWVudCcsICdQbGF5ZXInLCAnVmlzdWFsJywgJ1V0aWxpdHknXG4gICAgXTtcbiAgICB0aGlzLmF1dG9TYXZlID0gdHJ1ZTtcbiAgICB0aGlzLmF1dG9Mb2FkID0gdHJ1ZTsgLyogZGVmYXVsdCB0byB0cnVlIHNvIGNvbmZpZ3VyYXRpb24gbG9hZHMgb24gc3RhcnR1cCAqL1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmh1ZFZpc2liaWxpdHlJbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5ub3RpZmljYXRpb25zID0gbmV3IE5vdGlmaWNhdGlvbk1hbmFnZXIoKTtcbiAgICBcbiAgICB0aGlzLnRpY2tJbnRlcnZhbCA9IDEwMDAgLyB0aWNrUmF0ZTtcbiAgICB0aGlzLmxhc3RUaWNrID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy50aWNrZXIgPSB0aGlzLnRpY2tlci5iaW5kKHRoaXMpO1xuICAgIFxuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy5zdGFydEh1ZFZpc2liaWxpdHlDaGVjaygpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2tlcik7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBpZiAodGhpcy5hdXRvTG9hZCkge1xuICAgICAgdGhpcy5sb2FkQ29uZmlndXJhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLmFwcGx5SW5pdGlhbFN0YXRlcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBhbGxNb2R1bGVzID0gW1xuICAgICAgQ2xpY2tHVUksXG4gICAgICBGUFNDb3VudGVyLFxuICAgICAgSW50ZXJmYWNlLFxuICAgICAgQ2hhdCxcbiAgICAgIEtleXN0cm9rZXMsXG4gICAgICBUb2dnbGVTcHJpbnQsXG4gICAgICBBcm1vckhVRCxcbiAgIC8vICAgSG90YmFyLFxuICAgIC8vICBDb29yZGluYXRlcyxcbiAgICAgIENQU0NvdW50ZXIsXG4gICAgICBGUFNCb29zdGVyLFxuICAgICAgQWRCbG9ja2VyLFxuICAgICAgQ3Jvc3NoYWlyLFxuICAgICAgTm90aWZpY2F0aW9ucyxcbiAgICAgIEFycmF5TGlzdFxuICAgIF07XG4gICAgXG4gICAgYWxsTW9kdWxlcy5mb3JFYWNoKG1vZCA9PiB7XG4gICAgICB0aGlzLm1vZHVsZURlZnMuc2V0KG1vZC5uYW1lLCBtb2QpO1xuICAgICAgdGhpcy5hZGRNb2R1bGUobW9kKVxuICAgIH0pO1xuICB9XG5cbiAgYWRkTW9kdWxlKG1vZCkge1xuICAgIGlmICghbW9kIHx8IHR5cGVvZiBtb2QubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTW9kdWxlIG11c3QgaGF2ZSBhIHVuaXF1ZSBcIm5hbWVcIiBwcm9wZXJ0eS4nKTtcbiAgICB9XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIGNhdGVnb3J5OiAnVXRpbGl0eScsXG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIG9uRW5hYmxlKCkge30sXG4gICAgICBvbkRpc2FibGUoKSB7fSxcbiAgICAgIG9uVGljaygpIHt9LFxuICAgICAgb25TZXR0aW5nVXBkYXRlKCkge30sXG4gICAgICBzZXR0aW5nczogW10sXG4gICAgICB4OiBtb2QuZGVmYXVsdFggIT09IHVuZGVmaW5lZCA/IG1vZC5kZWZhdWx0WCA6IG51bGwsXG4gICAgICB5OiBtb2QuZGVmYXVsdFkgIT09IHVuZGVmaW5lZCA/IG1vZC5kZWZhdWx0WSA6IG51bGwsXG4gICAgICAuLi5tb2QsXG4gICAgfTtcbiAgICBcbiAgICBkZWxldGUgbm9ybWFsaXplZC5kZWZhdWx0WDtcbiAgICBkZWxldGUgbm9ybWFsaXplZC5kZWZhdWx0WTtcblxuICAgIG5vcm1hbGl6ZWQuc2V0dGluZ3MgPSBub3JtYWxpemVkLnNldHRpbmdzLm1hcChzID0+ICh7XG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAuLi5zXG4gICAgfSkpO1xuXG4gICAgdGhpcy5tb2R1bGVzLnNldChub3JtYWxpemVkLm5hbWUsIG5vcm1hbGl6ZWQpO1xuICAgIHJldHVybiBub3JtYWxpemVkO1xuICB9XG5cbiAgZW5hYmxlKG5hbWUpIHtcbiAgICBjb25zdCBtID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICBpZiAobSAmJiAhbS5lbmFibGVkKSB7XG4gICAgICBtLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgdHJ5IHsgbS5vbkVuYWJsZSh0aGlzKTsgfSBjYXRjaCAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoYFtNb2R1bGVNYW5hZ2VyXSBvbkVuYWJsZSBlcnJvciBpbiBcIiR7bmFtZX1cIjpgLCBlcnIpOyB9XG4gICAgICBtLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLnNhdmVDb25maWd1cmF0aW9uKCk7XG4gICAgICBpZiAodGhpcy5pbml0aWFsaXplZCAmJiB0aGlzLmdldCgnTm90aWZpY2F0aW9ucycpPy5lbmFibGVkKSB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5zaG93KHtcbiAgICAgICAgICAgIHRpdGxlOiAnTW9kdWxlIEVuYWJsZWQnLFxuICAgICAgICAgICAgbWVzc2FnZTogYDxiPiR7bmFtZX08L2I+IGhhcyBiZWVuIGVuYWJsZWQuYCxcbiAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXNhYmxlKG5hbWUpIHtcbiAgICBjb25zdCBtID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICBpZiAobSAmJiBtLmVuYWJsZWQpIHtcbiAgICAgIG0uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgdHJ5IHsgbS5vbkRpc2FibGUodGhpcyk7IH0gY2F0Y2ggKGVycikgeyBjb25zb2xlLmVycm9yKGBbTW9kdWxlTWFuYWdlcl0gb25EaXNhYmxlIGVycm9yIGluIFwiJHtuYW1lfVwiOmAsIGVycik7IH1cbiAgICAgIHRoaXMuc2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkICYmIG5hbWUgIT09ICdDbGlja0dVSScgJiYgdGhpcy5nZXQoJ05vdGlmaWNhdGlvbnMnKT8uZW5hYmxlZCkge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuc2hvdyh7XG4gICAgICAgICAgICB0aXRsZTogJ01vZHVsZSBEaXNhYmxlZCcsXG4gICAgICAgICAgICBtZXNzYWdlOiBgPGI+JHtuYW1lfTwvYj4gaGFzIGJlZW4gZGlzYWJsZWQuYCxcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcidcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKG5hbWUpIHtcbiAgICBjb25zdCBtID0gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgICBpZiAobSkge1xuICAgICAgbS5lbmFibGVkID8gdGhpcy5kaXNhYmxlKG5hbWUpIDogdGhpcy5lbmFibGUobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTW9kdWxlU2V0dGluZyhtb2R1bGVOYW1lLCBzZXR0aW5nSWQsIHZhbHVlKSB7XG4gICAgY29uc3QgbSA9IHRoaXMubW9kdWxlcy5nZXQobW9kdWxlTmFtZSk7XG4gICAgaWYgKCFtKSByZXR1cm47XG5cbiAgICBjb25zdCBzZXR0aW5nID0gbS5zZXR0aW5ncy5maW5kKHMgPT4gcy5pZCA9PT0gc2V0dGluZ0lkKTtcbiAgICBpZiAoc2V0dGluZykge1xuICAgICAgc2V0dGluZy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiBtLm9uU2V0dGluZ1VwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG0ub25TZXR0aW5nVXBkYXRlKHNldHRpbmdJZCwgdmFsdWUsIHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbTW9kdWxlTWFuYWdlcl0gb25TZXR0aW5nVXBkYXRlIGVycm9yIGluIFwiJHttb2R1bGVOYW1lfVwiOmAsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2F2ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNb2R1bGVQb3NpdGlvbihtb2R1bGVOYW1lLCB4LCB5KSB7XG4gICAgY29uc3QgbSA9IHRoaXMubW9kdWxlcy5nZXQobW9kdWxlTmFtZSk7XG4gICAgaWYgKG0pIHtcbiAgICAgIG0ueCA9IHg7XG4gICAgICBtLnkgPSB5O1xuICAgICAgdGhpcy5zYXZlQ29uZmlndXJhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0TW9kdWxlU2V0dGluZ3MobW9kdWxlTmFtZSkge1xuICAgIGNvbnN0IG1vZERlZiA9IHRoaXMubW9kdWxlRGVmcy5nZXQobW9kdWxlTmFtZSk7XG4gICAgY29uc3QgY3VycmVudE1vZCA9IHRoaXMuZ2V0KG1vZHVsZU5hbWUpO1xuXG4gICAgaWYgKCFtb2REZWYgfHwgIWN1cnJlbnRNb2QpIHJldHVybjtcblxuICAgIGlmIChtb2REZWYuc2V0dGluZ3MpIHtcbiAgICAgIG1vZERlZi5zZXR0aW5ncy5mb3JFYWNoKGRlZmF1bHRTZXR0aW5nID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVNb2R1bGVTZXR0aW5nKG1vZHVsZU5hbWUsIGRlZmF1bHRTZXR0aW5nLmlkLCBkZWZhdWx0U2V0dGluZy52YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZU1vZHVsZVBvc2l0aW9uKG1vZHVsZU5hbWUsIG1vZERlZi54IHx8IG51bGwsIG1vZERlZi55IHx8IG51bGwpO1xuICB9XG5cbiAgZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tb2R1bGVzLmdldChuYW1lKTtcbiAgfVxuXG4gIGxpc3QoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5tb2R1bGVzLnZhbHVlcygpKTtcbiAgfVxuXG4gIGdldE1vZHVsZXNCeUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdCgpLmZpbHRlcihtID0+IG0uY2F0ZWdvcnkgPT09IGNhdGVnb3J5KTtcbiAgfVxuXG4gIHRpY2tlcihub3cpIHtcbiAgICBjb25zdCBkdCA9IG5vdyAtIHRoaXMubGFzdFRpY2s7XG4gICAgaWYgKGR0ID49IHRoaXMudGlja0ludGVydmFsKSB7XG4gICAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICBpZiAobS5lbmFibGVkICYmIHR5cGVvZiBtLm9uVGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRyeSB7IG0ub25UaWNrKGR0LCB0aGlzKTsgfSBjYXRjaCAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoYFtNb2R1bGVNYW5hZ2VyXSBvblRpY2sgZXJyb3IgaW4gXCIke20ubmFtZX1cIjpgLCBlcnIpOyB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sYXN0VGljayA9IG5vdztcbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyKTtcbiAgfVxuXG4gIHNhdmVDb25maWd1cmF0aW9uKCkge1xuICAgIGlmICghdGhpcy5hdXRvU2F2ZSkgcmV0dXJuO1xuICAgIHRoaXMuZm9yY2VTYXZlQ29uZmlndXJhdGlvbigpO1xuICB9XG5cbiAgZm9yY2VTYXZlQ29uZmlndXJhdGlvbigpIHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBtZXRhOiB7XG4gICAgICAgIGF1dG9TYXZlOiB0aGlzLmF1dG9TYXZlLFxuICAgICAgICBhdXRvTG9hZDogdGhpcy5hdXRvTG9hZCxcbiAgICAgICAgdGhlbWU6IHtcbiAgICAgICAgICAgIHByaW1hcnk6IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXByaW1hcnknKS50cmltKCksXG4gICAgICAgICAgICBwYW5lbEJhc2U6IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXBhbmVsLWJhc2UnKS50cmltKCksXG4gICAgICAgICAgICBwYW5lbE9wYWNpdHk6IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXBhbmVsLW9wYWNpdHknKS50cmltKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbW9kXSBvZiB0aGlzLm1vZHVsZXMuZW50cmllcygpKSB7XG4gICAgICBjb25maWdbbmFtZV0gPSB7XG4gICAgICAgIGVuYWJsZWQ6IG1vZC5lbmFibGVkLFxuICAgICAgICB4OiBtb2QueCxcbiAgICAgICAgeTogbW9kLnksXG4gICAgICAgIHNldHRpbmdzOiBtb2Quc2V0dGluZ3MubWFwKHMgPT4gKHsgaWQ6IHMuaWQsIHZhbHVlOiBzLnZhbHVlIH0pKVxuICAgICAgfTtcbiAgICB9XG4gICAgQ29uZmlndXJhdGlvbi5zYXZlKGNvbmZpZyk7XG4gIH1cblxuICBsb2FkQ29uZmlndXJhdGlvbihjb25maWdUb0xvYWQpIHtcbiAgICBjb25zdCBjb25maWcgPSBjb25maWdUb0xvYWQgfHwgQ29uZmlndXJhdGlvbi5sb2FkKCk7XG4gICAgaWYgKCFjb25maWcpIHJldHVybjtcblxuICAgIGlmIChjb25maWcubWV0YSkge1xuICAgICAgdGhpcy5hdXRvU2F2ZSA9IGNvbmZpZy5tZXRhLmF1dG9TYXZlID8/IHRoaXMuYXV0b1NhdmU7XG4gICAgICB0aGlzLmF1dG9Mb2FkID0gY29uZmlnLm1ldGEuYXV0b0xvYWQgPz8gdGhpcy5hdXRvTG9hZDtcbiAgICAgIGlmIChjb25maWcubWV0YS50aGVtZSAmJiBjb25maWcubWV0YS50aGVtZS5wcmltYXJ5KSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgY29uZmlnLm1ldGEudGhlbWUucHJpbWFyeSk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5LWRhcmsnLCB0aGlzLnNoYWRlQ29sb3IoY29uZmlnLm1ldGEudGhlbWUucHJpbWFyeSwgLTIwKSk7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLm1ldGEudGhlbWUgJiYgY29uZmlnLm1ldGEudGhlbWUucGFuZWxCYXNlKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wYW5lbC1iYXNlJywgY29uZmlnLm1ldGEudGhlbWUucGFuZWxCYXNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcubWV0YS50aGVtZSAmJiBjb25maWcubWV0YS50aGVtZS5wYW5lbE9wYWNpdHkpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXBhbmVsLW9wYWNpdHknLCBjb25maWcubWV0YS50aGVtZS5wYW5lbE9wYWNpdHkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgW25hbWUsIG1vZENvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnKSkge1xuICAgICAgaWYgKG5hbWUgPT09ICdtZXRhJykgY29udGludWU7XG4gICAgICBjb25zdCBtb2QgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgaWYgKG1vZCkge1xuICAgICAgICBtb2QueCA9IG1vZENvbmZpZy54ICE9PSBudWxsICYmIG1vZENvbmZpZy54ICE9PSB1bmRlZmluZWQgPyBtb2RDb25maWcueCA6IG51bGw7XG4gICAgICAgIG1vZC55ID0gbW9kQ29uZmlnLnkgIT09IG51bGwgJiYgbW9kQ29uZmlnLnkgIT09IHVuZGVmaW5lZCA/IG1vZENvbmZpZy55IDogbnVsbDtcblxuICAgICAgICBpZiAobW9kQ29uZmlnLnNldHRpbmdzKSB7XG4gICAgICAgICAgbW9kQ29uZmlnLnNldHRpbmdzLmZvckVhY2goc2F2ZWRTZXR0aW5nID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmcgPSBtb2Quc2V0dGluZ3MuZmluZChzID0+IHMuaWQgPT09IHNhdmVkU2V0dGluZy5pZCk7XG4gICAgICAgICAgICBpZiAoc2V0dGluZyAmJiBzZXR0aW5nLnZhbHVlICE9PSBzYXZlZFNldHRpbmcudmFsdWUpIHtcbiAgICAgICAgICAgICAgc2V0dGluZy52YWx1ZSA9IHNhdmVkU2V0dGluZy52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb2Qub25TZXR0aW5nVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIG1vZC5vblNldHRpbmdVcGRhdGUoc2V0dGluZy5pZCwgc2F2ZWRTZXR0aW5nLnZhbHVlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtNb2R1bGVNYW5hZ2VyXSBvblNldHRpbmdVcGRhdGUgZXJyb3IgaW4gXCIke25hbWV9XCI6YCwgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gUmVzdG9yZSBlbmFibGVkIHN0YXRlIChhbmQgdHJpZ2dlciBvbkVuYWJsZSlcbiAgICAgICAgaWYgKG1vZENvbmZpZy5lbmFibGVkICYmICFtb2QuZW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMuZW5hYmxlKG5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKCFtb2RDb25maWcuZW5hYmxlZCAmJiBtb2QuZW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZShuYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLmFwcGx5SW5pdGlhbFN0YXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5SW5pdGlhbFN0YXRlcygpIHtcbiAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgaWYgKG0uZW5hYmxlZCAmJiAhbS5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgbS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlKG0ubmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRDb25maWd1cmF0aW9uKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9O1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1vZF0gb2YgdGhpcy5tb2R1bGVzLmVudHJpZXMoKSkge1xuICAgICAgY29uZmlnW25hbWVdID0ge1xuICAgICAgICBlbmFibGVkOiBtb2QuZW5hYmxlZCxcbiAgICAgICAgeDogbW9kLngsXG4gICAgICAgIHk6IG1vZC55LFxuICAgICAgICBzZXR0aW5nczogbW9kLnNldHRpbmdzLm1hcChzID0+ICh7IGlkOiBzLmlkLCB2YWx1ZTogcy52YWx1ZSB9KSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBpbXBvcnRDb25maWd1cmF0aW9uKGNvbmZpZ1N0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKGNvbmZpZ1N0cmluZyk7XG4gICAgICBDb25maWd1cmF0aW9uLnNhdmUoY29uZmlnKTtcbiAgICAgIHRoaXMubG9hZENvbmZpZ3VyYXRpb24oY29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tDb25maWd1cmF0aW9uXSBFcnJvciBpbXBvcnRpbmcgY29uZmlnOicsIGVycik7XG4gICAgICBhbGVydCgnSW52YWxpZCBjb25maWd1cmF0aW9uIGZpbGUhJyk7XG4gICAgfVxuICB9XG5cbiAgc2hhZGVDb2xvcihjb2xvciwgcGVyY2VudCkge1xuICAgIGxldCBSID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsMyksMTYpO1xuICAgIGxldCBHID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsNSksMTYpO1xuICAgIGxldCBCID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDUsNyksMTYpO1xuXG4gICAgUiA9IHBhcnNlSW50KFIgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xuICAgIEcgPSBwYXJzZUludChHICogKDEwMCArIHBlcmNlbnQpIC8gMTAwKTtcbiAgICBCID0gcGFyc2VJbnQoQiAqICgxMDAgKyBwZXJjZW50KSAvIDEwMCk7XG5cbiAgICBSID0gKFI8MjU1KT9SOjI1NTsgIFxuICAgIEcgPSAoRzwyNTUpP0c6MjU1OyAgXG4gICAgQiA9IChCPDI1NSk/QjoyNTU7ICBcblxuICAgIGNvbnN0IFJSID0gKChSLnRvU3RyaW5nKDE2KS5sZW5ndGg9PTEpP1wiMFwiK1IudG9TdHJpbmcoMTYpOlIudG9TdHJpbmcoMTYpKTtcbiAgICBjb25zdCBHRyA9ICgoRy50b1N0cmluZygxNikubGVuZ3RoPT0xKT9cIjBcIitHLnRvU3RyaW5nKDE2KTpHLnRvU3RyaW5nKDE2KSk7XG4gICAgY29uc3QgQkIgPSAoKEIudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrQi50b1N0cmluZygxNik6Qi50b1N0cmluZygxNikpO1xuXG4gICAgcmV0dXJuIFwiI1wiK1JSK0dHK0JCO1xuICB9XG5cbiAgc3RhcnRIdWRWaXNpYmlsaXR5Q2hlY2soKSB7XG4gICAgaWYgKHRoaXMuaHVkVmlzaWJpbGl0eUludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaHVkVmlzaWJpbGl0eUludGVydmFsKTtcbiAgICB9XG4gICAgdGhpcy5odWRWaXNpYmlsaXR5SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBob3RiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSG90QmFyR2FtZUl0ZW1zQ29udGFpbmVyJyk7XG4gICAgICBjb25zdCBodWRNb2R1bGVzID0gdGhpcy5saXN0KCkuZmlsdGVyKG0gPT4gbS5lbGVtZW50ICYmIG0ubmFtZSAhPT0gJ0NsaWNrR1VJJyk7XG5cbiAgICAgIGlmICghaG90YmFyKSB7XG4gICAgICAgIGh1ZE1vZHVsZXMuZm9yRWFjaChtID0+IHtcbiAgICAgICAgICBpZiAobS5lbGVtZW50ICYmICFtLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXJlbml0eS1oaWRkZW4nKSkge1xuICAgICAgICAgICAgbS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlcmVuaXR5LWhpZGRlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodWRNb2R1bGVzLmZvckVhY2gobSA9PiB7XG4gICAgICAgICAgaWYgKG0uZWxlbWVudCAmJiBtLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXJlbml0eS1oaWRkZW4nKSkge1xuICAgICAgICAgICAgbS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlcmVuaXR5LWhpZGRlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgNTAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVNYW5hZ2VyO1xuIiwgImNsYXNzIFBsYXllclRyYWNrZXIge1xyXG4gICAgY29uc3RydWN0b3IobWFuYWdlcikge1xyXG4gICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdFBsYXlUaW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb3hkLWZpcnN0UGxheVRpbWUnKTtcclxuICAgICAgICAgICAgaWYgKCFmaXJzdFBsYXlUaW1lIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXJlbml0eS10cmFja2VkLWlkJykgPT09IGZpcnN0UGxheVRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2ViaG9va1VybCA9ICdodHRwczovL2Rpc2NvcmQuY29tL2FwaS93ZWJob29rcy8xMzk2MjE4ODIzMzM3NTc0NTQxL3pabENFSVdyMlNMMXVkZzJGekFfS1NsUng2RjdQY1dGRm1IVC1ZTTZDXzdsSk96dXJlaDhick1WTnk4UlN3MVg1RGpXJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UGxheURhdGUgPSBuZXcgRGF0ZShwYXJzZUludChmaXJzdFBsYXlUaW1lLCAxMCkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBcIlNlcmVuaXR5IFBsYXllciBDb3VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJfdXJsOiBcImh0dHBzOi8vbWVkaWEuZGlzY29yZGFwcC5uZXQvYXR0YWNobWVudHMvMTM5NjIxODkzNjEyMjU0MDE0NC8xMzk2MjIyMDU4NzE0NzU5MzUxL3NlcmVuaXR5LnBuZz9leD02ODdkNGM5ZiZpcz02ODdiZmIxZiZobT1kMzNlNDM3ZDQ3ODJjZTY1YjE5YTI1ZGU3MmRlYmJlZGE3MGM4ODc5NzU4MGI3ZTNjNTM3YjMxM2Q3ZGJmZDBmJj0mZm9ybWF0PXdlYnAmcXVhbGl0eT1sb3NzbGVzc1wiLFxyXG4gICAgICAgICAgICAgICAgZW1iZWRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJOZXcgU2VyZW5pdHkgVXNlciFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IDB4NUU3MkVCLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkZpcnN0IFBsYXllZCBCbG94ZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaXJzdFBsYXlEYXRlLnRvVVRDU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci5ub3RpZmljYXRpb25zLnNob3coe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQbGF5ZXIgVHJhY2tpbmcnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RvIGhlbHAgdXMgY291bnQgb3VyIHVzZXJzLCB3ZVxcJ3ZlIHNlbnQgYSBvbmUtdGltZSBhbm9ueW1vdXMgbm90aWZpY2F0aW9uIHRvIG91ciBEaXNjb3JkLiBXZSBvbmx5IGRvIHRoaXMgb25jZS4gVGhhbmtzIGZvciB1c2luZyBTZXJlbml0eSEnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2luZm8nLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAwXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZmV0Y2god2ViaG9va1VybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcmVuaXR5LXRyYWNrZWQtaWQnLCBmaXJzdFBsYXlUaW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNlbmQgcGxheWVyIHRyYWNraW5nIGluZm8uJywgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyBwbGF5ZXIgdHJhY2tpbmcgaW5mbzonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbUGxheWVyVHJhY2tlcl0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyVHJhY2tlcjsgIiwgImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IE1vZHVsZU1hbmFnZXIgZnJvbSAnLi9Nb2R1bGVNYW5hZ2VyJztcclxuaW1wb3J0IFBsYXllclRyYWNrZXIgZnJvbSAnLi9QbGF5ZXJUcmFja2VyJztcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGNvbnN0IG1hbmFnZXIgPSBuZXcgTW9kdWxlTWFuYWdlcigpO1xyXG4gIHdpbmRvdy5TZXJlbml0eSA9IHsgaW5zdGFuY2U6IG1hbmFnZXIgfTtcclxuICBtYW5hZ2VyLnN0YXJ0KCk7XHJcbiAgXHJcbiAgbmV3IFBsYXllclRyYWNrZXIobWFuYWdlcik7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaWYgKCFtYW5hZ2VyLm5vdGlmaWNhdGlvbnMpIHJldHVybjtcclxuICAgIG1hbmFnZXIubm90aWZpY2F0aW9ucy5zaG93KHtcclxuICAgICAgdGl0bGU6ICdXZWxjb21lIHRvIFNlcmVuaXR5JyxcclxuICAgICAgbWVzc2FnZTogJ1ByZXNzIDxiPlJpZ2h0IFNoaWZ0PC9iPiB0byBvcGVuIHRoZSBDbGlja0dVSS4nLFxyXG4gICAgICB0eXBlOiAnaW5mbycsXHJcbiAgICAgIGR1cmF0aW9uOiA1MDAwXHJcbiAgICB9KTtcclxuICB9LCAxMDAwKTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcblxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ1NoaWZ0UmlnaHQnKSB7XHJcbiAgICAgIG1hbmFnZXIudG9nZ2xlKCdDbGlja0dVSScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufSkoKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7QUFBQSxNQUFNLFdBQVc7QUFBQSxJQUNmLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULGdCQUFnQjtBQUFBLElBQ2hCLHNCQUFzQjtBQUFBLElBQ3RCLGNBQWM7QUFBQSxJQUNkLHdCQUF3QjtBQUFBLElBQ3hCLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLGNBQWM7QUFBQSxJQUNkLGlCQUFpQjtBQUFBLElBQ2pCLFlBQVk7QUFBQSxJQUVaLFNBQVMsU0FBUztBQUNoQixVQUFJLEtBQUssZ0JBQWdCLEtBQUssUUFBUztBQUV2QyxXQUFLLFlBQVk7QUFDakIsZUFBUyxLQUFLLFVBQVUsSUFBSSxvQkFBb0I7QUFDaEQsVUFBSSxTQUFTLG9CQUFvQjtBQUMvQixpQkFBUyxnQkFBZ0I7QUFBQSxNQUMzQjtBQUVBLFVBQUksQ0FBQyxTQUFTLGVBQWUsbUJBQW1CLEdBQUc7QUFDakQsY0FBTSxrQkFBa0IsU0FBUyxjQUFjLE1BQU07QUFDckQsd0JBQWdCLEtBQUs7QUFDckIsd0JBQWdCLE1BQU07QUFDdEIsd0JBQWdCLE9BQU87QUFDdkIsaUJBQVMsS0FBSyxZQUFZLGVBQWU7QUFBQSxNQUMzQztBQUVBLFdBQUssVUFBVSxPQUFPO0FBQ3RCLGlCQUFXLE1BQU07QUFDZixZQUFJLEtB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
