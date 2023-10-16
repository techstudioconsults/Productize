import '../styles.scss';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import DashboardLayout from '../layouts/Layout';
import Products from '../pages/products';
import Orders from '../pages/orders';
import Customers from '../pages/customers';
import Payouts from '../pages/payouts';
import Profile from '../pages/profile';
import ProductDetails from '../pages/products/ProductDetails';
import NewProduct from '../pages/products/NewProduct';
import { ErrorBoundary } from '@productize/shared/ui';

export function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="home" index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productID" element={<ProductDetails />} />
          <Route path="products/new" element={<NewProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="analytics" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="payouts" element={<Payouts />} />
          <Route path="profile/:userID" element={<Profile />} />
        </Route>
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
