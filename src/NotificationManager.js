class NotificationManager {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    if (!document.getElementById('font-awesome-link')) {
      const fontAwesomeLink = document.createElement('link');
      fontAwesomeLink.id = 'font-awesome-link';
      fontAwesomeLink.rel = 'stylesheet';
      fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
      document.head.appendChild(fontAwesomeLink);
    }
      
    if (document.querySelector('.serenity-notification-container')) {
        this.container = document.querySelector('.serenity-notification-container');
    } else {
        this.container = document.createElement('div');
        this.container.className = 'serenity-notification-container';
        document.body.appendChild(this.container);
    }
  }

  show({ title = 'Serenity', message, type = 'info', duration = 3000 }) {
    const notification = document.createElement('div');
    notification.className = `serenity-notification serenity-notification-${type}`;
    
    const iconMap = {
      info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"></path></svg>`,
      success: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>`,
      warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>`,
      error: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v2z"></path></svg>`,
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
    
    // Animate in
    notification.style.animation = 'serenity-notification-in 0.5s forwards cubic-bezier(0.2, 1, 0.2, 1)';

    const timerBar = notification.querySelector('.serenity-notification-timer');
    timerBar.style.transition = `width ${duration}ms linear`;
    setTimeout(() => {
        if(timerBar) timerBar.style.width = '0%';
    }, 10);

    const close = () => {
      if (notification.classList.contains('exiting')) return;
      notification.classList.add('exiting');
      
      clearTimeout(timeout);
      notification.style.animation = 'serenity-notification-out 0.5s forwards cubic-bezier(0.8, 0, 0.8, 0)';
      notification.addEventListener('animationend', (e) => {
        if(e.animationName === 'serenity-notification-out') {
            notification.remove();
        }
      });
    };

    const closeBtn = notification.querySelector('.serenity-notification-close');
    closeBtn.addEventListener('click', close, { once: true });
    
    let timeout = setTimeout(close, duration);

    notification.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        timerBar.style.width = getComputedStyle(timerBar).width;
    });

    notification.addEventListener('mouseleave', () => {
        timeout = setTimeout(close, duration); // restart with full duration
        timerBar.style.transition = `width ${duration}ms linear`;
        timerBar.style.width = '0%';
    });
  }
}

export default NotificationManager; 