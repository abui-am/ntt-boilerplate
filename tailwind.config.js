/* eslint-disable prettier/prettier */
module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // put your font here
      sans: ['Noto sans'],
    },
    extend: {
      colors: {
        // put your theme color here
      },
    },
  },
  variants: {},
  plugins: [],
};
