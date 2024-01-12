import { Box } from '@chakra-ui/react';
import React from 'react';

export interface sectionLayoutProps {
  children: React.ReactNode;
  height: string;
  bgColor: string;
  bgImg: string;
}

export const SectionLayout = ({
  children,
  height,
  bgColor,
  bgImg,
}: sectionLayoutProps) => {
  return (
    <Box height={height} bgColor={bgColor} bgImage={bgImg}>
      {children}
    </Box>
  );
};
