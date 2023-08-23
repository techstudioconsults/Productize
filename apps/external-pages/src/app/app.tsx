import '../styles.scss';

import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../style/theme';
import Home from './pages/home';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
