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

/**
 * Calculates a color in a rainbow sequence for the UI.
 * @param {number} index - The position of the element in a list, used to offset the hue.
 * @param {number} speed - The speed of the color cycle. Lower is faster. Defaults to 20.
 * @returns {string} An HSL color string (e.g., "hsl(180, 90%, 65%)").
 */
export function getRainbowColor(index, speed = 20) {
  const hueOffset = Date.now() / speed;
  const hue = (index * 15 + hueOffset) % 360;
  return `hsl(${hue}, 90%, 65%)`;
} 