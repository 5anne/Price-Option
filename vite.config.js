import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // devServer: {
  //   // Other devServer options...
  //   hot: true,
  //   overlay: {
  //     warnings: false,
  //     errors: true
  //   },
  //   server: {
  //     hmr: {
  //       overlay: false
  //     }
  //   }
  // }
})
