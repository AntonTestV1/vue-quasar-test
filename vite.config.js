// FILE: vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import svgLoader from 'vite-svg-loader'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import { fileURLToPath, URL } from "url";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    svgLoader(),

    quasar({
      sassVariables: 'src/styles/quasar-variables.sass'
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  },

  build: {
    target: 'es2020'
  }
})
