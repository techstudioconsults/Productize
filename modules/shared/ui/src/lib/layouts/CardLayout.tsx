import { Card } from '@chakra-ui/react';
import React, { memo } from 'react';

export interface CardProps {
    children?: React.ReactNode;
    bgColor?: string;
    width?: string | object;
    height?: string | object;
    borderRadius?: string;
}

const defaultProps: Partial<CardProps> = {
    bgColor: 'white',
    width: '100%',
    height: 'auto',
    borderRadius: 'md',
};

export const CardLayout: React.FC<CardProps> = memo(({ children, bgColor = 'white', width = '100%', height = 'auto', borderRadius = 'md' }) => {
    return (
        <Card boxShadow="3.9px 3.9px 0px 1px #0E0A2D" bgColor={bgColor} width={width} height={height} borderRadius={borderRadius} flex={1}>
            {children}
        </Card>
    );
});

CardLayout.displayName = 'CardLayout';
CardLayout.defaultProps = defaultProps;
