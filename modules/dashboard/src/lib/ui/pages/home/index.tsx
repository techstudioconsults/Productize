import React from "react";
import FirstSalePage from "./premium/FirstSalePage";
import OnBoardingPage from "./free/OnBoardingPage";
import ActiveUserPage from "./premium/ActiveUserPage";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { useStepGuide } from "@productize-v1.0.0/modules/shared/hooks";

export const Home = () => {
    const totalSteps = useStepGuide();

    if (totalSteps >= 4) {
        // return <FirstSalePage />;
        return <ActiveUserPage />;
    } else if (totalSteps < 4) {
        return <OnBoardingPage />;
    }

    // return (
    //     <>
    //         {/* <OnBoardingPage />; */}
    //         {/* <FirstSalePage /> */}
    //         {/* <ActiveUserPage />; */}
    //     </>
    // );
};
