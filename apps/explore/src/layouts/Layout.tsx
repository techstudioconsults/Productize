import React from 'react';
import Footer from './footer/Footer';
import ProductNavbar from '../app/pages/productDetails/ProductNavbar';
import { useTokenExists } from '@productize/shared/hooks';

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
