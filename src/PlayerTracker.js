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

            const webhookUrl = 'https://discord.com/api/webhooks/1396218823337574541/zZlCEIWr2SL1udg2FzA_KSlRx6F7PcWFFmHT-YM6C_7lJOzureh8brMVNy8RSw1X5DjW';

            const firstPlayDate = new Date(parseInt(firstPlayTime, 10));

            const payload = {
                username: "Serenity Player Counter",
                avatar_url: "https://media.discordapp.net/attachments/1396218936122540144/1396222058714759351/serenity.png?ex=687d4c9f&is=687bfb1f&hm=d33e437d4782ce65b19a25de72debbeda70c88797580b7e3c537b313d7dbfd0f&=&format=webp&quality=lossless",
                embeds: [
                    {
                        title: "New Serenity User!",
                        color: 0x5E72EB,
                        fields: [
                            {
                                name: "First Played Bloxd",
                                value: firstPlayDate.toUTCString(),
                                inline: false
                            }
                        ],
                        timestamp: new Date().toISOString()
                    }
                ]
            };
            
            this.manager.notifications.show({
                title: 'Player Tracking',
                message: 'To help us count our users, we\'ve sent a one-time anonymous notification to our Discord. We only do this once. Thanks for using Serenity!',
                type: 'info',
                duration: 10000
            });

            fetch(webhookUrl, {
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