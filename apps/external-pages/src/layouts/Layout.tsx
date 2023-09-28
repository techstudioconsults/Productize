import { Box } from '@chakra-ui/react';
import { Navbar } from '@productize/external-pages-lib/ui';
import { useTokenExists } from '@productize/shared/hooks';
import { Footer } from '@productize/shared/ui';

import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
  const isAuth = useTokenExists();
  return (
    <>
      <Box
        pos={`fixed`}
        top={0}
        w={`100%`}
        zIndex={999}
        backdropFilter={`blur(5px)`}
      >
        <Navbar isAuth={isAuth} />
      </Box>
      {children}
      <Box borderTop={`3px solid white`}>
        <Footer />
      </Box>
    </>
  );
};

export default DefaultLayout;
