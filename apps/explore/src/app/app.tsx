// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';
import '../styles.scss';

import { Route, Routes, useLocation } from 'react-router-dom';
import ExploreIndex from './pages/explore/index';
import Cart from './pages/cart/index';
// import { ChakraProvider } from '@chakra-ui/react';
// import theme from '../style/theme';
import ExploreDesign from './pages/explore/categories/design/index';
import ProuctDetails from './pages/productDetails/ProuctDetails';

export function App() {
  const location = useLocation();
  console.log(location);

  return (
    <Routes>
      <Route index element={<ExploreIndex />} />
      <Route path="/design" element={<ExploreDesign />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/details" element={<ProuctDetails />} />
    </Routes>
  );
}

export default App;
