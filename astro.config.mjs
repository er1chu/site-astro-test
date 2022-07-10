import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
      config: { path: './tailwind.config.js' },
    }),
    react(),
    compress(),
  ],
  experimental: {
    integrations: true,
  },
})
