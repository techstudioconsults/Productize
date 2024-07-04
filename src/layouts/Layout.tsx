import { Box } from '@chakra-ui/react';

import React from 'react';
import { Navbar } from '../components/navbar/Navbar';
import { useTokenExists } from '@productize/hooks';
import { Footer } from '@productize/ui';

interface LayoutProps {
    children: React.ReactNode;
    removeFooter?: boolean;
}

const DefaultLayout = ({ children, removeFooter }: LayoutProps) => {
    const isAuth = useTokenExists();

    return (
        <>
            <Box>
                <Navbar isAuth={isAuth} />
            </Box>
            {children}
            <Box display={removeFooter ? `none` : `block`} borderTop={`3px solid white`}>
                <Footer />
            </Box>
        </>
    );
};

export default DefaultLayout;
