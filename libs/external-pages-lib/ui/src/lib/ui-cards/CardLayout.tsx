import { Card } from '@chakra-ui/react';
import React from 'react';

export interface cardProps {
  children?: React.ReactNode;
  bgColor: string;
  width: string | object;
  height: string | object;
  borderRadius: string;
}

export const CardLayout = ({
  children,
  bgColor,
  width,
  height,
  borderRadius,
}: cardProps) => {
  return (
    <Card
      boxShadow={`3.9034483432769775px 3.9034483432769775px 0px 0.9758620858192444px #0E0A2D;`}
      bgColor={bgColor}
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      {children}
    </Card>
  );
};
