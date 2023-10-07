import { Box, Center } from '@chakra-ui/react';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface AuthBackgroundProps {
  children: ReactNode;
  isLogin: boolean;
}

export function AuthBackground({ children, isLogin }: AuthBackgroundProps) {
  return (
    <Center
      pos={`relative`}
      // zIndex={-1}
      padding={`1rem`}
      width={`100%`}
      height={`100vh`}
      overflow={`auto`}
      bgColor={isLogin ? `purple.300` : `white`}
      bgImg={
        isLogin
          ? `https://res.cloudinary.com/dkszgtapy/image/upload/v1696613891/productize/background_jg4qjv.png`
          : ``
      }
      // bgRepeat={`repeat`}
      // bgPosition={`center`}
      // _after={{
      //   pos: `fixed`,
      //   content: "''",
      //   top: 0,
      //   left: 0,
      //   w: `100%`,
      //   h: `100vh`,
      //   bgColor: `purple.300`,
      //   filter: `opacity(0.5)`,
      //   // zIndex: 0,
      // }}
    >
      <Box pos={`relative`} zIndex={1}>
        {children}
      </Box>
    </Center>
  );
}
