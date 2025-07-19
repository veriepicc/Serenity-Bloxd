const Keystrokes = {
  name: 'Keystrokes',
  category: 'Combat',
  description: 'Displays your keystrokes on the screen.',
  enabled: false,
  settings: [
    {
      id: 'style',
      name: 'Style',
      description: 'The visual style of the keystrokes display.',
      type: 'select',
      value: 'classic',
      options: ['classic', 'modern'],
    },
    {
      id: 'color',
      name: 'Key Color',
      description: 'The primary color of the keys.',
      type: 'color',
      value: '#FFFFFF',
    },
    {
      id: 'opacity',
      name: 'Opacity',
      description: 'The overall transparency of the display.',
      type: 'slider',
      value: 0.8,
      min: 0,
      max: 1,
      step: 0.1,
    }
  ],
};

export default Keystrokes; 