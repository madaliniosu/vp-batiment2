import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vpbatiment.fr',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false   // /services not /fr/services
    }
  }
});
