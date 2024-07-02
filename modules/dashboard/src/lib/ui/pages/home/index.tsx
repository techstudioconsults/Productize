import React, { useState, useEffect } from 'react';
import OnBoardingPage from './free/OnBoardingPage';
import ActiveUserPage from './premium/ActiveUserPage';
import { useStepGuide } from '@productize/hooks';
import { Center, Stack, Image, Text } from '@chakra-ui/react'; // Assuming you are using Chakra UI for styling
import FirstSalePage from './premium/FirstSalePage';

export const Home: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const totalSteps = useStepGuide();

    useEffect(() => {
        if (totalSteps !== undefined) {
            setLoading(false);
        }
    }, [totalSteps]);

    if (loading) {
        return (
            <Center h="90vh">
                <Stack alignItems={`center`} gap={2}>
                    <Image
                        w="5rem"
                        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png"
                        alt="spinner"
                    />
                    <Text as="h6">Please wait...</Text>
                </Stack>
            </Center>
        );
    }

    if (totalSteps === 4) {
        return <FirstSalePage />;
    } else if (totalSteps < 4) {
        return <OnBoardingPage />;
    } else {
        return <ActiveUserPage />;
    }
};

export default Home;
