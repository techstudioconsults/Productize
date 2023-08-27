import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

export interface DualSectionLayoutProps {
  children: React.ReactNode;
  img: string;
  flexDirection: object;
  textSectionBgColor: string;
  imgSectionBgColor: string;
  justifyContent: object | string;
  imgPosition: string | object;
  imgFit: object;
  height: string | object;
}

export const DualSectionLayout = ({
  children,
  img,
  flexDirection,
  textSectionBgColor,
  imgSectionBgColor,
  justifyContent,
  imgPosition,
  imgFit,
  height,
}: DualSectionLayoutProps) => {
  return (
    <Flex height={height} flexDir={flexDirection}>
      <Flex
        justifyContent={justifyContent}
        bgColor={textSectionBgColor}
        flex={1}
      >
        {children}
      </Flex>
      <Flex
        justifyContent={`flex-start`}
        overflow={`hidden`}
        bgColor={imgSectionBgColor}
        flex={1}
      >
        <Image
          objectFit={imgFit}
          objectPosition={imgPosition}
          src={img}
          alt="img"
        />
      </Flex>
    </Flex>
  );
};
