import { Center } from '@chakra-ui/react';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface AuthBackgroundProps {
  children: ReactNode;
  isLogin: boolean;
}

export function AuthBackground({ children, isLogin }: AuthBackgroundProps) {
  return (
    <Center
      padding={`1rem`}
      width={`100%`}
      height={`100vh`}
      overflow={`auto`}
      bgImg={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1694345357/productize/Lines_1_pa9lat.png`}
      bgRepeat={`repeat`}
      bgPosition={`center`}
      bgColor={isLogin ? `purple.300` : `white`}
    >
      {children}
    </Center>
  );
}
