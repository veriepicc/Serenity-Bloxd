import css from './styles.css';
import ModuleManager from './ModuleManager';
import PlayerTracker from './PlayerTracker';

(function() {
  'use strict';

  const styleElements = () => {
    const gameheader = document.querySelector('.InGameHeader');
    if (gameheader) {
        gameheader.style.backgroundColor = 'rgba(30, 33, 41, var(--panel-opacity))';
        gameheader.style.padding = '26px 5px 26px 5px';
        gameheader.style.borderRadius = '10px';

        if (!document.querySelector('.serenity')) {
            const serenityWrapper = document.createElement('div');
            serenityWrapper.classList.add('serenity');
            serenityWrapper.style.display = 'flex';
            serenityWrapper.style.alignItems = 'center';
            serenityWrapper.style.marginRight = '0px';

            const slogo = document.createElement('div');
            slogo.style.backgroundColor = 'var(--accent-color, var(--primary))';
            slogo.style.color = '#fff';
            slogo.style.width = '1.7em';
            slogo.style.height = '1.7em';
            slogo.style.display = 'flex';
            slogo.style.alignItems = 'center';
            slogo.style.justifyContent = 'center';
            slogo.style.borderRadius = '50%';
            slogo.style.fontSize = '1.2em';
            slogo.style.fontWeight = 'bolder';
            slogo.style.margin = '0 0 0 5px';
            slogo.textContent = 'S';

            const text = document.createElement('span');
            text.textContent = 'erenity';
            text.style.fontSize = '1.1em';
            text.style.fontWeight = 'bolder';
            text.style.textShadow = ' 0 0 10px var(--primary)';
            text.style.color = '#fff';
            text.style.display = 'flex';
            text.style.alignItems = 'center';
            text.style.marginLeft = '3px';
            text.style.marginTop = '-2px';

            serenityWrapper.appendChild(slogo);
            serenityWrapper.appendChild(text);

            gameheader.prepend(serenityWrapper);

        }

    }
    ['LikeButton' ,'InGameHeaderLogo' , 'InGameHeaderSpacer'].forEach(className => {
        document.querySelectorAll('.' + className).forEach(none => {
            none.style.display = 'none';
            none.style.opacity = '0';
        });
    });

    ['FpsWrapperDiv' ,'CoordinateUI'].forEach(className => {
        document.querySelectorAll('.' + className).forEach(headerbox => {
            headerbox.style.backgroundColor = 'rgba(30, 33, 41, var(--panel-opacity))';
            headerbox.style.borderRadius = '10px';
            headerbox.style.paddingTop = '26px';
            headerbox.style.paddingBottom = '26px';
        });
    });

    ['FpsCanvas' ,'CoordinateCanvas'].forEach(className => {
        document.querySelectorAll('.' + className).forEach(canvasstyle => {
            canvasstyle.style.height = '14px';
        });
    });

    const Name = document.querySelector('.InGameHeaderLobbyName');
    if (Name) {
        Name.style.color = 'gray';
        Name.style.borderRadius = '8px';
    }

};

const observer = new MutationObserver(styleElements);
observer.observe(document.body, { childList: true, subtree: true });
styleElements();

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
