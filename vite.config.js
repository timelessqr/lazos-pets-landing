import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // <-- Se mantiene tu configuración existente

  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        const isReactWavifyAnnotation =
          warning.code === 'INVALID_ANNOTATION' &&
          warning.id?.includes('/react-wavify/');

        if (isReactWavifyAnnotation) return;
        warn(warning);
      },
    },
  },

  // --- INICIO: Configuración del Servidor Añadida ---
  server: {
    host: true, // <-- Para asegurar acceso vía IP local (192.168...)
    allowedHosts: [
      'lazos.bitsdeve.com' 
    ],
  },
  
});
