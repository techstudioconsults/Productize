/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';

export default defineConfig({
    plugins: [react(), nxViteTsPaths()],
    cacheDir: "./node_modules/.vite/productize-v1.0.0",

    server: {
        port: 4200,
        host: "localhost",
    },

    preview: {
        port: 4300,
        host: "localhost",
    },

    resolve: {
        // alias: { find: '@', replacement: path.resolve(__dirname, 'src') },
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@layouts": path.resolve(__dirname, "src/layouts"),
            "@icons": path.resolve(__dirname, "src/assets/icons"),
            "@pages": path.resolve(__dirname, "src/pages"),
            // Add more aliases as needed
        },
    },

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    test: {
        globals: true,
        cache: {
            dir: "./node_modules/.vitest",
        },
        environment: "jsdom",
        include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
});
