import React from 'react';
import FirstSalePage from './premium/FirstSalePage';
import OnBoardingPage from './free/OnBoardingPage';
import ActiveUserPage from './premium/ActiveUserPage';
import { useStepGuide } from '@productize/hooks';

export const Home: React.FC = () => {
    const totalSteps = useStepGuide();

    // Render different pages based on the total steps
    if (totalSteps === 4) {
        return <FirstSalePage />;
    } else if (totalSteps < 4) {
        return <OnBoardingPage />;
    } else {
        return <ActiveUserPage />;
    }
};

export default Home;
