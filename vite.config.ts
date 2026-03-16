import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync, readdirSync } from 'fs';
import { resolve } from 'path';
import type { Plugin } from 'vite';

function safePublicCopy(): Plugin {
  return {
    name: 'safe-public-copy',
    writeBundle(options) {
      const outDir = options.dir || 'dist';
      const publicDir = resolve(__dirname, 'public');
      const files = readdirSync(publicDir);
      for (const file of files) {
        if (file.includes(' ')) continue;
        try {
          copyFileSync(resolve(publicDir, file), resolve(outDir, file));
        } catch {}
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), safePublicCopy()],
  publicDir: 'public',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
