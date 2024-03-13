import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:4200',
        viewportWidth: 1440,
        viewportHeight: 900,
        ...nxE2EPreset(__filename, {
            cypressDir: 'src',
            bundler: 'vite',
            webServerCommands: {
                default: 'nx run productize:serve',
                production: 'nx run productize:preview',
            },
            ciWebServerCommand: 'nx run productize:serve-static',
        }),
    },
});
