/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        suit: ["SUIT Variable", "sans-serif"],
        pretendard: ["Pretendard Variable", "sans-serif"],
        "noto-serif": ["Noto Serif KR", "serif"],
      },
      backgroundImage: (theme) => ({
        "checkbox-unchecked": "url('/src/assets/icon/checkbox-circle-unchecked.svg')",
        "checkbox-checked": "url('/src/assets/icon/checkbox-circle-checked.svg')",
      }),
      colors: {
        White: "#ffffff",
        Black: "#010101",
        Red: {
          100: "#faced0",
          200: "#f59da1",
          300: "#ef6b72",
          400: "#ea3a43",
          500: "#e50914",
          600: "#b70710",
          700: "#89050c",
          800: "#5c0408",
          900: "#2e0204",
        },
        Blue: {
          100: "#cce3fb",
          200: "#99c6f7",
          300: "#66aaf3",
          400: "#338def",
          500: "#0071eb",
          600: "#005abc",
          700: "#00448d",
          800: "#002d5e",
          900: "#00172f",
        },
        Green: {
          100: "#d5f8e3",
          200: "#acf2c8",
          300: "#82ebac",
          400: "#58e590",
          500: "#2ede75",
          600: "#25b25d",
          700: "#1c8546",
          800: "#13592f",
          900: "#092c17",
        },
        Gray: {
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#acacac",
          400: "#919191",
          500: "#757575",
          600: "#5e5e5e",
          700: "#464646",
          800: "#2f2f2f",
          900: "#171717",
        },
        greyscale: {
          100: "#bcc3c7",
          200: "#9b9a90",
          500: "#6d7478",
          950: "#040404",
        },
        primary: {
          100: "#03cc5c",
          200: "#11d975",
          300: "#22be61",
          400: "#1BF008",
          500: "#03CCA8",
        },
        secondary: {
          100: "#01a9ff",
          200: "#4284f7",
        },
        tertiary: {
          100: "#e3a368",
          200: "#e39042",
        },
      },
      fontSize: {
        "3xs": "0.75rem",
        "2xs": "0.8125rem",
        xs: "0.875rem",
        sm: "0.9375rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.375rem",
        "3xl": "1.5rem",
        "4xl": "1.75rem",
        "5xl": "1.875rem",
        "6xl": "2.125rem",
        "7xl": "3rem",
        "8xl": "3.75rem",
      },
      boxShadow: {
        "Text-Shadow": "0px 2px 6px 0px rgba(0,0,0,0.55)",
      },
      borderRadius: {
        none: "0",
        xs: "0.125rem",
        sm: "0.1875rem",
        default: "0.25rem",
        lg: "0.3125rem",
        xl: "0.4375rem",
        "2xl": "0.6833604574203491rem",
        "3xl": "0.75rem",
        "4xl": "1.875rem",
      },
      ringWidth: {
        3: "3px",
      },
      spacing: {
        1.5: "0.375rem", // 6px
        2.5: "0.625rem", // 10px
        4.5: "1.125rem", // 18px
        5.5: "1.375rem", // 22px
        7.5: "1.875rem", // 30px
        7.8: "2.0625rem", // 33px
        15: "3.75rem", // 60px
      },
      screens: {
        lg: "950px",
      },
    },
  },
  plugins: [],
};
