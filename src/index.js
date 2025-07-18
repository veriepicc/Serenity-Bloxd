import ModuleManager from './ModuleManager';
import './styles.css';

(function() {
  'use strict';

  const manager = new ModuleManager();
  window.Serenity = { instance: manager };

  document.addEventListener('keydown', (e) => {

    if (e.code === 'ShiftRight') {
      manager.toggle('ClickGUI');
    }
  });

})();
