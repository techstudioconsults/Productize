import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter as DashboardRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
// import theme from './theme';
import globalTheme from '../../../scss/globalTheme';
import { store } from '@productize/shared/redux';
import { Provider } from 'react-redux';
// RSUITE STYLE
import 'rsuite/dist/rsuite-no-reset.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <DashboardRouter>
      <ChakraProvider theme={globalTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </DashboardRouter>
  </StrictMode>
);
