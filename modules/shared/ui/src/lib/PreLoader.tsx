import { Center, Image, Text } from '@chakra-ui/react';
import { useGoogleAuthCallbackMutation } from '@productize/redux';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PreLoader = () => {
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  // mutation
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
    // Get the URL from the browser's address bar
    const url = window.location.href;
    // Use the URLSearchParams API to parse the query string
    const queryParams = new URLSearchParams(new URL(url).search);
    // Get the value of the 'code' parameter
    const code = queryParams.get('code');
    // Check if 'code' parameter exists and has a value
    if (code) {
      console.log('Code parameter:', code);
      // setCodeParams(code);
      googleRedirect(code);
    } else {
      console.log('Code parameter not found in the URL.');
    }
  }, [googleRedirect]);

  return (
    <Center h={`100vh`}>
      <Center>
        <Image
          w="3rem"
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1694900245/hng/Gear-0.2s-200px_1_xye3wd.svg`}
          alt={`spinner`}
        />
        <Text as={`h6`}>Please wait...</Text>
      </Center>
    </Center>
  );
};
