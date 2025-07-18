export default {
  name: 'ToggleSprint',
  category: 'Movement',
  description: 'Allows you to toggle sprinting instead of holding the key.',
  enabled: true,
  settings: [
    {
      id: 'show-text',
      name: 'Show HUD Text',
      description: 'Display on-screen text when sprinting.',
      type: 'boolean',
      value: true,
    },
    {
      id: 'hud-text',
      name: 'Display Text',
      description: 'The text to show when toggled.',
      type: 'text',
      value: '[Sprinting (Toggled)]',
      condition: (settings) => settings['show-text'],
    }
  ],
}; 