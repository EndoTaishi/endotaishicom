const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/pages/**/*.tsx', 
          './src/components/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: [
        'Open Sans',
        'Hiragino Kaku Gothic ProN',
        'Hiragino Sans',
        'sans-serif',
      ],
      display: ['"Josefin Sans"'],
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      24: '24px',
    },
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        paleyYellow: {
          light: '#F5F8E7',
          dark: '#A9AB9F',
        },
        gray: colors.gray,
        // gray: {
        //   // darkest: '#242527',
        //   dark: '#242527',
        //   // DEFAULT: '#c0ccda',
        //   light: '#A9AB9F',
        //   // lightest: '#f9fafc',
        // },
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  darkMode: 'media',
}