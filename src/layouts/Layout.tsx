import {Box} from "@chakra-ui/react";
import {Footer} from "@productize-v1.0.0/modules/shared/ui";
import {useTokenExists} from "@productize-v1.0.0/modules/shared/hooks";

import React from "react";
import {Navbar} from "../components/navbar/Navbar";

interface LayoutProps {
    children: React.ReactNode;
}

const DefaultLayout = ({children}: LayoutProps) => {
    const isAuth = useTokenExists();
    return (
        <>
            <Box>
                <Navbar isAuth={isAuth}/>
            </Box>
            {children}
            <Box borderTop={`3px solid white`}>
                <Footer/>
            </Box>
        </>
    );
};

export default DefaultLayout;
