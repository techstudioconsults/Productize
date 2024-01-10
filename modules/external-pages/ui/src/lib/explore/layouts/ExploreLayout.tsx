import React from "react";
import { ExploreNavBar } from "../../navbar/ExploreNavBar";
import { useTokenExists } from "@productize-v1.0.0/modules/shared/hooks";

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
