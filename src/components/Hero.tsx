import { Flex } from '@chakra-ui/react';
import React from 'react';

export interface HeroProps {
    children: React.ReactNode;
    height: string | object;
    bgImg: string;
    bgColor: string;
}

export const Hero = ({ children, height, bgImg, bgColor }: HeroProps) => {
    return (
        <Flex
            justifyContent={`center`}
            top={0}
            height={height}
            width={`100%`}
            bgImage={bgImg}
            bgPosition={`bottom left`}
            bgSize={`contain`}
            bgRepeat={`repeat-x`}
            bgColor={bgColor}
            pb={10}
        >
            {children}
        </Flex>
    );
};
