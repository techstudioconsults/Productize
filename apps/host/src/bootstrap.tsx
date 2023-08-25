import * as ReactDOM from 'react-dom/client';
import { App } from './app/app';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import globalTheme from '../../../scss/globalTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <ChakraProvider theme={globalTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
