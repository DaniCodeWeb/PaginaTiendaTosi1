import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file'
  },
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    }
  },
  integrations: [
    mdx(),
    tailwind({
      config: {
        path: './tailwind.config.cjs', // o .mjs según tu configuración
        applyBaseStyles: false // Opcional: controla si se aplican estilos base
      }
    })
  ],
  srcDir: './src/html',
  outDir: './dist',
  vite: {
    server: {
      watch: {
        ignored: ['!**/node_modules/**', '**/dist/**']
      }
    },
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  }
})
