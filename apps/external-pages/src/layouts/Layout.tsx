import { Box } from '@chakra-ui/react';
import { Navbar } from '@productize/external-pages-lib/ui';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box pos={`sticky`} top={0} zIndex={999} backdropFilter={`blur(5px)`}>
        <Navbar />
      </Box>
      {children}
      <Box borderTop={`3px solid white`} color={`white`}></Box>
    </>
  );
};

export default DefaultLayout;
