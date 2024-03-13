import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
    root: __dirname,
    cacheDir: '../../node_modules/.vite/modules/dashboard',

    plugins: [react(), nxViteTsPaths()],

    test: {
        globals: true,
        cache: { dir: '../../node_modules/.vitest' },
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        setupFiles: './test/testSetup.ts',
        reporters: ['default'],
        coverage: {
            reportsDirectory: '../../coverage/modules/dashboard',
            provider: 'v8',
            enabled: true,
        },
    },
});
