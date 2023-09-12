import React from 'react';
import { Navbar } from '@productize/explore-lib/ui';

type ExploreProps = {
  children: React.ReactNode; // type children
};

const ExploreLayout = (props: ExploreProps) => {
  return (
    <div>
      <Navbar />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

export default ExploreLayout;
