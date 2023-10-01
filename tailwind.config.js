/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.grid-template-custom': {
          'grid-template-areas': `
            'date date-value date-value avatar' 
            'importance importance-icon importance-value avatar' 
            'equipment equipment-value equipment-value responsible'
            'message message-value message-value message-value'
          `,
        },
        '.grid-area-date': {
          'grid-area': 'date',
        },
        '.grid-area-date-value': {
          'grid-area': 'date-value',
        },
        '.grid-area-avatar': {
          'grid-area': 'avatar',
        },
        '.grid-area-importance': {
          'grid-area': 'importance',
        },
        '.grid-area-importance-icon': {
          'grid-area': 'importance-icon',
        },
        '.grid-area-importance-value': {
          'grid-area': 'importance-value',
        },
        '.grid-area-equipment': {
          'grid-area': 'equipment',
        },
        '.grid-area-equipment-value': {
          'grid-area': 'equipment-value',
        },
        '.grid-area-responsible': {
          'grid-area': 'responsible',
        },
        '.grid-area-message': {
          'grid-area': 'message',
        },
        '.grid-area-message-value': {
          'grid-area': 'message-value',
        },
        '.object-cover': {
          'object-fit': 'cover',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
