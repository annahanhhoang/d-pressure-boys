import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [react(), tailwindcss(), viteCompression()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.jpg', '**/*.jpeg'],

  build: {
    // Enable source maps for production debugging (optional — remove if you prefer smaller deploys)
    sourcemap: false,

    // Raise the warning limit slightly since we have a large image asset
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        /**
         * Cache-optimised chunk splitting:
         * - vendor chunk (react, react-dom) changes rarely → long-lived cache
         * - icons chunk changes occasionally
         * - app chunk (your code) changes often → cache-busted each deploy
         *
         * Each chunk gets a content-hash in its filename ([hash]) so browsers
         * automatically invalidate only the chunks that actually changed.
         */
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/lucide-react') || id.includes('@icons-pack')) {
            return 'vendor-icons';
          }
        },
        // Hashed filenames for all chunks and assets (cache-busting on content change)
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    target: 'esnext',
  },
});
