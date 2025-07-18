export default {
  name: 'FPSCounter',
  category: 'Visual',
  description: 'Displays your current frames per second.',
  enabled: true,
  settings: [
    {
      id: 'text-color',
      name: 'Text Color',
      description: 'The color of the FPS counter text.',
      type: 'color',
      value: '#FFFFFF',
    },
  ],
};
