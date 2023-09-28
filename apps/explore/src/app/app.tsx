// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';
import '../styles.scss';

import { Route, Routes } from 'react-router-dom';
import ExploreIndex from './pages/explore/index';
import ExploreDesign from './pages/explore/categories/design/index';
import ProuctDetails from './pages/productDetails/ProuctDetails';
import ProductBuy from './pages/productDetails/ProductBuy';

export function App() {
  return (
    <Routes>
      <Route index element={<ExploreIndex />} />
      <Route path="/design" element={<ExploreDesign />} />
      <Route path="/product/details" element={<ProuctDetails />} />
      <Route path="/product/buy" element={<ProductBuy />} />
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
}

export default App;
