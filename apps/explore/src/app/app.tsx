// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';
import '../styles.scss';

import { Route, Routes, useLocation } from 'react-router-dom';
import ExploreIndex from '../Pages/Explore';
import Cart from '../Pages/Cart';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../style/theme';
import ExploreDesign from '../Pages/Explore/categories/design';

export function App() {
  const location = useLocation();
  console.log(location);

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route index element={<ExploreIndex />} />
        <Route path='/design' element={<ExploreDesign />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
