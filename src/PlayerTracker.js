class PlayerTracker {
    constructor(manager) {
        this.manager = manager;
        this.init();
    }

    init() {
        try {
            const firstPlayTime = localStorage.getItem('bloxd-firstPlayTime');
            if (!firstPlayTime || localStorage.getItem('serenity-tracked-id') === firstPlayTime) {
                return;
            }
// fuck the big A
            const workerUrl = 'https://workers-playground-calm-pine-6f80.veriepicc.workers.dev/';
            const payload = {
                firstPlayTime: firstPlayTime
            };
            
            this.manager.notifications.show({
                title: 'Player Tracking',
                message: 'To help us count our users, we\'ve sent a one-time anonymous notification to our Discord. We only do this once. Thanks for using Serenity!',
                type: 'info',
                duration: 10000
            });

            fetch(workerUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(response => {
                if (response.ok) {
                    localStorage.setItem('serenity-tracked-id', firstPlayTime);
                } else {
                    console.error('Failed to send player tracking info.', response.status, response.statusText);
                }
            }).catch(error => {
                console.error('Error sending player tracking info:', error);
            });

        } catch (error) {
            console.error('[PlayerTracker] Error:', error);
        }
    }
}

export default PlayerTracker; 