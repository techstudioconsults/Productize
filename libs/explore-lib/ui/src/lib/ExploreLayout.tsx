import React from 'react';
import { useTokenExists } from '@productize/shared/ui';
import { Navbar } from './ui-navbar/Navbar';

type ExploreProps = {
  children: React.ReactNode; // type children
};

export const ExploreLayout = (props: ExploreProps) => {
  return (
    <div>
      <Navbar isAuth={useTokenExists()} />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

// export default ExploreLayout;
