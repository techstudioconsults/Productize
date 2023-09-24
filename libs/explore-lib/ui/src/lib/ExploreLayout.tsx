import React from 'react';
import { ExploreNavBar } from './ui-navbar/ExploreNavBar';
import { useTokenExists } from '@productize/shared/hooks';

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
