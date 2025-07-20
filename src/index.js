import css from './styles.css';
import ModuleManager from './ModuleManager';
import PlayerTracker from './PlayerTracker';

(function() {
  'use strict';

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const manager = new ModuleManager();
  window.Serenity = { instance: manager };
  manager.start();
  
  new PlayerTracker(manager);

  setTimeout(() => {
    if (!manager.notifications) return;
    manager.notifications.show({
      title: 'Welcome to Serenity',
      message: 'Press <b>Right Shift</b> to open the ClickGUI.',
      type: 'info',
      duration: 5000
    });
  }, 1000);

  document.addEventListener('keydown', (e) => {

    if (e.code === 'ShiftRight') {
      manager.toggle('ClickGUI');
    }
  });

})();
