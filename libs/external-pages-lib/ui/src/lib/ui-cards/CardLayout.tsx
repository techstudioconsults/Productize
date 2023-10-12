import { Card } from '@chakra-ui/react';
import React from 'react';

export interface cardProps {
  children?: React.ReactNode;
  bgColor: string;
  width: string | object;
  height: string | object;
  borderRadius: string;
  variant?: string;
  showShadow?: boolean;
  onClick?: () => void;
}

export const CardLayout = ({
  children,
  bgColor,
  width,
  height,
  borderRadius,
  variant,
  showShadow,
  onClick,
}: cardProps) => {
  return (
    <Card
      boxShadow={
        showShadow
          ? `3.9034483432769775px 3.9034483432769775px 0px 0.9758620858192444px #0E0A2D;
`
          : `none`
      }
      bgColor={bgColor}
      width={width}
      height={height}
      borderRadius={borderRadius}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Card>
  );
};
