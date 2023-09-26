import '../styles.scss';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import DashboardLayout from '../layouts/Layout';
import Products from '../pages/products';
import Orders from '../pages/orders';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index path="home" element={<Home />} />
        <Route index path="products" element={<Products />} />
        <Route index path="orders" element={<Orders />} />
      </Route>
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
}

export default App;
