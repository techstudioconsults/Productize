import { Box } from '@chakra-ui/react';
import { Navbar } from '@productize/external-pages-lib/ui';
import { Footer, useTokenExists } from '@productize/shared/ui';

import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box
        pos={`fixed`}
        top={0}
        w={`100%`}
        zIndex={999}
        backdropFilter={`blur(5px)`}
      >
        <Navbar isAuth={useTokenExists()} />
      </Box>
      {children}
      <Box borderTop={`3px solid white`}>
        <Footer />
      </Box>
    </>
  );
};

export default DefaultLayout;
