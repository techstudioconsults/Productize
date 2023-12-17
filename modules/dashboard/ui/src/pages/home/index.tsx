import FirstSalePage from "./premium/FirstSalePage";
import OnBoardingPage from "./free/OnBoardingPage";
import ActiveUserPage from "./premium/ActiveUserPage";
import { useStepGuide } from "@productize-v1.0.0/modules/shared/hooks";

export const Home = () => {
    const totalSteps = useStepGuide();

    if (totalSteps >= 3 && totalSteps !== 5) {
        // return <FirstSalePage />;
        return <ActiveUserPage />;
    } else if (totalSteps < 3) {
        return <OnBoardingPage />;
    }

    // return <FirstSalePage />;
    // return <OnBoardingPage />;
    return <ActiveUserPage />;
};
