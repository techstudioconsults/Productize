import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { BrowserRouter as AuthRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import globalTheme from '../../../scss/globalTheme';
import { Provider } from 'react-redux';
import { store } from '@productize/shared/redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <AuthRouter>
      <ChakraProvider theme={globalTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </AuthRouter>
  </StrictMode>
);
