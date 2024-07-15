import { Card } from '@chakra-ui/react';
import React, { memo } from 'react';

export interface CardProps {
    children?: React.ReactNode;
    bgColor: string;
    width: string | object;
    height: string | object;
    borderRadius: string;
    border: string | object;
}

const defaultProps: Partial<CardProps> = {
    bgColor: 'white',
    width: '100%',
    height: 'auto',
    borderRadius: 'md',
    
};

export const CardLayout = ({ children, bgColor, width, height, borderRadius, border }: CardProps) => {
    return (
        <Card
            boxShadow={`3.9034483432769775px 3.9034483432769775px 0px 0.9758620858192444px #0E0A2D`}
            bgColor={bgColor}
            width={width}
            height={height}
            borderRadius={borderRadius}
            flex={1}
            border={border}
        >
            {children}
        </Card>
    );
};

CardLayout.displayName = 'CardLayout';
CardLayout.defaultProps = defaultProps;
