import React from 'react';
import { useTokenExists } from '@productize/shared/ui';
import { ExploreNavBar } from './ui-navbar/ExploreNavBar';

type ExploreProps = {
  children: React.ReactNode; // type children
};

export const ExploreLayout = (props: ExploreProps) => {
  return (
    <div>
      <ExploreNavBar isAuth={useTokenExists()} />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

// export default ExploreLayout;
