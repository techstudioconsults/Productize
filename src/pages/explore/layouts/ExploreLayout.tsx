import { Navbar } from '@productize-v1.0.0/modules/external-pages/ui';
import { useTokenExists } from '@productize-v1.0.0/modules/shared/hooks';
import React from 'react';

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
