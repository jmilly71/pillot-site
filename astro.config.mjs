import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pillot.app',
  build: {
    // Inline all CSS into each page's HTML. Total CSS is ~15KB, and a separate
    // stylesheet request is exactly what corporate SSL-inspection proxies
    // (Z-Scaler) were dropping, leaving the page unstyled. Inlined styles ride
    // inside the HTML document, which loads fine.
    inlineStylesheets: 'always',
  },
});
