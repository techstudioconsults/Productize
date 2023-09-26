import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter as ExternalPagesRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
// import theme from './theme';
import globalTheme from '../../../scss/globalTheme';
import { store } from '@productize/shared/redux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ExternalPagesRouter>
      <ChakraProvider theme={globalTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </ExternalPagesRouter>
  </StrictMode>
);
