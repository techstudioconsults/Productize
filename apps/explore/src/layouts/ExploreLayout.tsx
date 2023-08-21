import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

type ExploreProps = {
  children: React.ReactNode; // type children
};

const ExploreLayout = (props: ExploreProps) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default ExploreLayout;
