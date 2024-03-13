// npm install -D @testing-library/react @testing-library/jest-dom @vitejs/plugin-react vite-tsconfig-paths vitest-canvas-mock

import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

afterEach(() => {
    cleanup();
});

