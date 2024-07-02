import { Box, Center } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface AuthBackgroundProps {
    children: ReactNode;
    isLogin: boolean;
}

export function AuthBackground({ children, isLogin }: AuthBackgroundProps) {
    const bgColor = isLogin ? 'purple.300' : 'white';
    const bgImg = isLogin
        ? 'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951016/productize/background_jg4qjv_hyp0ef.png'
        : 'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951017/productize/BKground_on2pff_psvmld.png';
    const bgRepeat = isLogin ? 'no-repeat' : 'repeat';
    const bgPosition = isLogin ? '' : 'center';
    const bgSize = isLogin ? 'cover' : '';

    return (
        <Center
            pos="relative"
            width="100%"
            height="100vh"
            overflow="auto"
            bgColor={bgColor}
            bgImg={bgImg}
            bgRepeat={bgRepeat}
            bgPosition={bgPosition}
            bgSize={bgSize}
        >
            <Box pos="relative" height="100%" zIndex={1}>
                {children}
            </Box>
        </Center>
    );
}
