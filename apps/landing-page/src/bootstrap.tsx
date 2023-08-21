import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter as LandingPageRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(root);
root.render(
  <StrictMode>
    <LandingPageRouter>
      <App />
    </LandingPageRouter>
  </StrictMode>
);
