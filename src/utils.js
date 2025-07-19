let cachedPlayerName = null;

export function getPlayerName() {
    if (cachedPlayerName) {
        return cachedPlayerName;
    }

    const chatMessages = document.querySelectorAll('.ChatMessages .IndividualText');
    
    const joinMessages = Array.from(chatMessages).filter(m => m.textContent?.includes(' joined'));

    if (joinMessages.length > 0) {
        const myJoinMessage = joinMessages[joinMessages.length - 1];
        const text = myJoinMessage.textContent;
        const name = text.split(' joined')[0].trim();
        if (name) {
            cachedPlayerName = name;
            return name;
        }
    }

    return null;
} 