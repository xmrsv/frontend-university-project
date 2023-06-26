import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
<<<<<<< HEAD
  compressHTML: true,
  output: 'server',
  adapter: netlify({
    dist: new URL('./dist/', import.meta.url)
  })
});
=======
    output: 'server',
    adapter: netlify({
        dist: new URL('./dist/', import.meta.url)
    })
});
>>>>>>> 74b209d4666fcb18c30dad0de7c71d184fb30d78
