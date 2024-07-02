import { Box } from '@chakra-ui/react';

import React, { useEffect } from 'react';
import { Navbar } from '../components/navbar/Navbar';
import { useTokenExists } from '@productize/hooks';
import { Footer } from '@productize/ui';
import { useGetFromCartMutation, useGetProductTagsMutation } from '@productize/redux';

interface LayoutProps {
    children: React.ReactNode;
    removeFooter?: boolean;
}

const DefaultLayout = ({ children, removeFooter }: LayoutProps) => {
    const isAuth = useTokenExists();
    const [getProductTags] = useGetProductTagsMutation();
    const [getFromCart] = useGetFromCartMutation();

    useEffect(() => {
        getProductTags(null).unwrap();
        if (isAuth) {
            getFromCart(null).unwrap();
        }
    }, [getFromCart, getProductTags, isAuth]);

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
