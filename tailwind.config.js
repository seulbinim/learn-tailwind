/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.html'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1024px',
        '2xl': '1280px',
        '3xl': '1440px',
      },
      fontFamily: {
        suit: ['SUIT Variable', 'sans-serif'],
        pretendard: ['Pretendard Variable', 'sans-serif'],
        'noto-serif': ['Noto Serif KR', 'serif'],
      },
      backgroundImage: (theme) => ({
        'checkbox-unchecked': "url('/src/assets/icon/checkbox-circle-unchecked.svg')",
        'checkbox-checked': "url('/src/assets/icon/checkbox-circle-checked.svg')",
      }),
      colors: {
        White: '#ffffff',
        Black: '#010101',
        Red: {
          100: '#faced0',
          200: '#f59da1',
          300: '#ef6b72',
          400: '#ea3a43',
          500: '#e50914',
          600: '#b70710',
          700: '#89050c',
          800: '#5c0408',
          900: '#2e0204',
        },
        Blue: {
          100: '#cce3fb',
          200: '#99c6f7',
          300: '#66aaf3',
          400: '#338def',
          500: '#0071eb',
          600: '#005abc',
          700: '#00448d',
          800: '#002d5e',
          900: '#00172f',
        },
        Green: {
          100: '#d5f8e3',
          200: '#acf2c8',
          300: '#82ebac',
          400: '#58e590',
          500: '#2ede75',
          600: '#25b25d',
          700: '#1c8546',
          800: '#13592f',
          900: '#092c17',
        },
        Gray: {
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#acacac',
          400: '#919191',
          500: '#757575',
          600: '#5e5e5e',
          700: '#464646',
          800: '#2f2f2f',
          900: '#171717',
        },
        greyscale: {
          100: '#bcc3c7',
          200: '#9b9a90',
          500: '#6d7478',
          950: '#040404',
        },
        primary: {
          100: '#03cc5c',
          200: '#11d975',
          300: '#22be61',
          400: '#1BF008',
          500: '#03CCA8',
        },
        secondary: {
          100: '#01a9ff',
          200: '#4284f7',
        },
        tertiary: {
          100: '#e3a368',
          200: '#e39042',
        },
        'kream-white': '#fff',
        'kream-black': '#000',
        'kream-primary': '#303033', // gray-800
        'kream-secondary': '#f5f5f5', // gray-200
        'kream-gray': '#CBCBCB', // gray-300
        'kream-lightgreen': '#58DC76',
        'kream-green': '#33A95A',
        'kream-blue': '#0171E2',
        'kream-orange': '#e1b37e',
        'kream-red': '#B02C20',
        'kream-pink': '#E3A5C7',
        'kream-yellow': '#FEEC37',
      },
      fontSize: {
        '3xs': '0.75rem', // 12px
        '2xs': '0.8125rem', // 13px
        xs: '0.875rem', // 14px
        sm: '0.9375rem', // 15px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.375rem', // 22px
        '3xl': '1.5rem', // 24px
        '4xl': '1.75rem', // 28px
        '5xl': '1.875rem', // 30px
        '6xl': '2.125rem', // 34px
        '7xl': '3rem', // 48px
        '8xl': '3.75rem', // 60px
        // heading
        'h-md': ['var(--text-lg)', 1.4], // 21.3px
        'h-lg': ['calc(var(--text-lg) * 1.333)', 1.4], // 28.4px
        'h-xl': ['calc(var(--text-xl) * 1.333)', 1.4], // 37.9px
        'h-2xl': ['calc(var(--text-2xl) * 1.333)', 1.4], // 50.5px
        // label
        'l-sm': ['var(--text-sm)', 1.5], // 12px
        'l-md': ['calc(var(--text-sm) * 1.333)', 1.5], // 16px
        'l-lg': ['calc(var(--text-md) * 1.333)', 1.5], // 21.3px
        'l-xl': ['calc(var(--text-lg) * 1.333)', 1.5], // 28.4px
        'l-2xl': ['calc(var(--text-xl) * 1.333)', 1.5], // 37.9px
        // paragraph
        'p-sm': ['var(--text-sm)', 1.6], // 12px
        'p-md': ['calc(var(--text-sm) * 1.333)', 1.6], // 16px
        'p-lg': ['calc(var(--text-md) * 1.333)', 1.6], // 21.3px
        'p-xl': ['calc(var(--text-lg) * 1.333)', 1.6], // 28.4px
      },
      boxShadow: {
        'Text-Shadow': '0px 2px 6px 0px rgba(0,0,0,0.55)',
      },
      borderRadius: {
        none: '0',
        xs: '0.125rem',
        sm: '0.25rem',
        DEFAULT: '0.25rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
        large: '0.75rem',
      },
      ringWidth: {
        3: '3px',
      },
      spacing: {
        1.5: '0.375rem', // 6px
        2.5: '0.625rem', // 10px
        4.5: '1.125rem', // 18px
        5.5: '1.375rem', // 22px
        7.5: '1.875rem', // 30px
        7.8: '2.0625rem', // 33px
        15: '3.75rem', // 60px
      },
      lineHeight: {
        xs: '1.4',
        md: '1.5',
        lg: '1.6',
      },
      width: {
        30: '7.5rem', // 120px
        57: '14rem', // 224px
      },
      height: {
        9.5: '2.375rem', // 38px
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
