export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,scss}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  darkMode: 'class', // or 'media'
};
