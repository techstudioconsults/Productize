import { Box } from "@chakra-ui/react";
import { Footer } from "@productize-v1.0.0/modules/shared/ui";
import { useTokenExists } from "@productize-v1.0.0/modules/shared/hooks";

import React from "react";
import { Navbar } from "@productize-v1.0.0/modules/external-pages/ui";

interface LayoutProps {
    children: React.ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
    const isAuth = useTokenExists();
    return (
        <>
            <Box pos={`fixed`} top={0} w={`100%`} zIndex={999} backdropFilter={`blur(5px)`}>
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
