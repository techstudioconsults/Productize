import FirstSalePage from './premium/FirstSalePage';
import OnBoardingPage from './free/OnBoardingPage';
import ActiveUserPage from './premium/ActiveUserPage';
import { useStepGuide } from '@productize/hooks';

export const Home = () => {
    const totalSteps = useStepGuide();

    if (totalSteps === 4) {
        return <FirstSalePage />;
    } else if (totalSteps < 4) {
        return <OnBoardingPage />;
    } else {
        return <ActiveUserPage />;
    }
    return (
        <>
            <OnBoardingPage />
            <FirstSalePage />
            <ActiveUserPage />
        </>
    );
};
