import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter as ExternalPagesRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ExternalPagesRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ExternalPagesRouter>
  </StrictMode>
);
