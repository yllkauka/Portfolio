// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    base: '/Portfolio/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        outDir: 'dist',  // Explicitly set the output directory
        sourcemap: false,
    },
    plugins: [vue()],
});




