import React from 'react'
import Footer from './footer/Footer';

import LayoutNavbar from './navbar/LayoutNavbar';

type LayoutProps = {
    children: React.ReactNode; // type children
  };

const Layout = (props: LayoutProps) => {
  return (
    <div>
        <LayoutNavbar />
      {props.children}
      <Footer />

    </div>
  )
}

export default Layout