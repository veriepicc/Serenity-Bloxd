import './styles.css';
import ModuleManager from './ModuleManager';

(function() {
  'use strict';

  const manager = new ModuleManager();
  window.Serenity = { instance: manager };
  manager.start();

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
