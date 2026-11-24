import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nodesentinel.de',
  output: 'static',
  build: {
    format: 'directory',
  },
});
