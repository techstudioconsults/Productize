import {Box, Center} from "@chakra-ui/react";
import {ReactNode} from "react";

/* eslint-disable-next-line */
export interface AuthBackgroundProps {
    children: ReactNode;
    isLogin: boolean;
}

export function AuthBackground({children, isLogin}: AuthBackgroundProps) {
    return (
        <Center
            pos={`relative`}
            width={`100%`}
            height={`100vh`}
            overflow={`auto`}
            bgColor={isLogin ? `purple.300` : `white`}
            bgImg={
                isLogin
                    ? `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951016/productize/background_jg4qjv_hyp0ef.png`
                    : `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951017/productize/BKground_on2pff_psvmld.png`
            }
            bgRepeat={isLogin ? `no-repeat` : `repeat`}
            bgPosition={isLogin ? `` : `center`}
            bgSize={isLogin ? `cover` : ``}
        >
            <Box pos={`relative`}
                 height={`100%`} zIndex={1}>
                {children}
            </Box>
        </Center>
    );
}
