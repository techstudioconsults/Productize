import * as ReactDOM from 'react-dom/client';
import { App } from './app/app';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import globalTheme from '../../../scss/globalTheme';
import { Provider } from 'react-redux/es/exports';
import { store } from '@productize/shared/redux';
// RSUITE STYLE
import 'rsuite/dist/rsuite-no-reset.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <ChakraProvider theme={globalTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);
