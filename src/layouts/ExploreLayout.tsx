import React from "react";
import { ExploreNavBar } from "../components/navbar/ExploreNavBar";
import { useTokenExists } from "@productize-v1.0.0/modules/shared/hooks";
import { Box } from "@chakra-ui/react";

type ExploreProps = {
    children: React.ReactNode; // type children
};

export const ExploreLayout = (props: ExploreProps) => {
    return (
        <>
            <ExploreNavBar isAuth={useTokenExists()} />
            {props.children}
            {/* <Footer /> */}
        </>
    );
};

// export default ExploreLayout;
