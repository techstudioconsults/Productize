import React from 'react';
import { Navbar } from '@productize/explore-lib/ui';
import { useTokenExists } from '@productize/shared/ui';

type ExploreProps = {
  children: React.ReactNode; // type children
};

const ExploreLayout = (props: ExploreProps) => {
  return (
    <div>
      <Navbar isAuth={useTokenExists()} />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

export default ExploreLayout;
