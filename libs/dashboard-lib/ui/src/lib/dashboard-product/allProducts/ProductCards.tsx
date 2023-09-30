import { Card, Image } from '@chakra-ui/react';
import React from 'react';

interface cardProps {
  img: string;
  bgColor: string;
}

export const ProductCards = ({ img, bgColor }: cardProps) => {
  return (
    <Card bgColor={bgColor} width={`100%`} h={`13.8rem`}>
      <Image
        objectFit={`contain`}
        w={`100%`}
        h={`100%`}
        src={img}
        alt={`img`}
      />
    </Card>
  );
};
