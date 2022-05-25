import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'Publish',
      fileName: (format) => `publish.${format}.js`
    },
    // rollupOptions: {
    //   input: {

    //     main: resolve(__dirname, 'head.html'),
    //   }
    // }
  }
})
