/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';

export default defineConfig({
    root: __dirname,
    cacheDir: './node_modules/.vite/.',

    server: {
        port: 4200,
        host: 'localhost',
    },

    preview: {
        port: 4300,
        host: 'localhost',
    },

    plugins: [react(), nxViteTsPaths()],

    build: {
        outDir: './dist',
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@layouts': path.resolve(__dirname, 'src/layouts'),
            '@icons': path.resolve(__dirname, 'src/assets/icons'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            // Add more aliases as needed
        },
    },

    test: {
        globals: true,
        cache: {
            dir: './node_modules/.vitest',
        },
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        setupFiles: './test/testSetup.ts',
        reporters: ['default'],
        coverage: {
            enabled: true,
            reportsDirectory: './coverage/productize',
            provider: 'v8',
        },
    },
});
