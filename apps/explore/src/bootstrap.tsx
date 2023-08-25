import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { BrowserRouter as ExploreRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(root);
root.render(
  <StrictMode>
    <ExploreRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ExploreRouter>
  </StrictMode>
);
