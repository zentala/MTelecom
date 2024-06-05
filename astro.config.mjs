import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mtelecom.zentala.io',
  base: '/',
  build: {
    assetsPrefix: '/',
  },
});
