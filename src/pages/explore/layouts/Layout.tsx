import React from 'react';
import Footer from './footer/Footer';
import { useTokenExists } from '@productize-v1.0.0/modules/shared/hooks';
import ProductNavbar from '../pages/productDetails/ProductNavbar';

type LayoutProps = {
  children: React.ReactNode; // type children
};

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <ProductNavbar isAuth={useTokenExists()} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
