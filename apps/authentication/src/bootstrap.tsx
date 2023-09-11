// import { StrictMode } from 'react';
// import * as ReactDOM from 'react-dom/client';

// import App from './app/app';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { BrowserRouter as AuthRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import globalTheme from '../../../scss/globalTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(root);
root.render(
  <StrictMode>
    <AuthRouter>
      <ChakraProvider theme={globalTheme}>
        <App />
      </ChakraProvider>
    </AuthRouter>
  </StrictMode>
);
