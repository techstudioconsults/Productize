import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as ExternalPagesRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import globalTheme from '../scss/globalTheme';
// RSUITE STYLE
import 'rsuite/dist/rsuite-no-reset.min.css';
import { store } from '@productize/redux';
import { PaywallUpgrade } from '@productize/ui';
import App from './app/app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <ExternalPagesRouter>
            <Provider store={store}>
                <ChakraProvider theme={globalTheme}>
                    <App />
                    <PaywallUpgrade />
                </ChakraProvider>
            </Provider>
        </ExternalPagesRouter>
    </StrictMode>
);
