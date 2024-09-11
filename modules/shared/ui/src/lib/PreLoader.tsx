import { Center, Image, Stack, Text } from '@chakra-ui/react';
import { useGoogleAuthCallbackMutation } from '@productize/redux';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PreLoader: React.FC = () => {
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const [googleAuthCallback] = useGoogleAuthCallbackMutation();

    const googleRedirect = useCallback(
        async (code: string) => {
            const data = {
                provider: 'google',
                code: code,
            };

            try {
                const res = await googleAuthCallback(data).unwrap();
                if (res.token) {
                    navigate(`/dashboard/home`);
                }
            } catch (error: any) {
                setError(error.data.message);
            }
        },
        [googleAuthCallback, navigate]
    );

    useEffect(() => {
        const url = window.location.href;
        const queryParams = new URLSearchParams(new URL(url).search);
        const code = queryParams.get('code');
        if (code) {
            googleRedirect(code);
        } else {
            console.log('Code parameter not found in the URL.');
        }
    }, [googleRedirect]);

    return (
        <Center h="100vh">
            <Stack alignItems={`center`} gap={2}>
                <Image
                    w="5rem"
                    src="https://res.cloudinary.com/doejcrfso/image/upload/v1725356813/productize/ByteAAlley-Logo_ue2hqr.svg"
                    alt="spinner"
                />
                <Text as="h6">Please wait...</Text>
            </Stack>
        </Center>
    );
};

PreLoader.displayName = 'PreLoader';
