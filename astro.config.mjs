import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTA: Reemplazar 'https://pablocandela.com' con tu dominio final cuando esté definido
const SITE_URL = process.env.SITE_URL || 'https://pablocandela.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
