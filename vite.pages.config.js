import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: '/venato-menu-site/',
    publicDir: false,
    plugins: [react(), tailwindcss()],
    define: {
        'import.meta.env.VITE_STATIC_MODE': JSON.stringify('1'),
    },
    build: {
        outDir: 'docs',
        emptyOutDir: true,
        rollupOptions: {
            input: 'index.html',
        },
    },
});
