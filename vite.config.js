import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contato: resolve(__dirname, 'src/pages/contato.html'),
        projetos: resolve(__dirname, 'src/pages/projetos.html'),
        sobre: resolve(__dirname, 'src/pages/sobre.html'),
      },
    },
  },
});
