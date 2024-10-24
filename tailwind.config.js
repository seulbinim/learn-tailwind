/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        suit: ['"SUIT Variable", "sans-serif"'],
        pretendard: ["Pretendard Variable", "Pretendard", "sans-serif"],
        "noto-serif": ["Noto Serif KR", "serif"],
      },
    },
  },
  plugins: [],
};
