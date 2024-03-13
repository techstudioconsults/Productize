import { Box, Card, Image } from '@chakra-ui/react';

interface cardProps {
  img: string;
  bgColor: string;
  bgImg?: string;
  padding?: string | number | object;
  bgPos?: string | object;
}

export const ProductCards = ({
  img,
  bgColor,
  bgImg,
  padding,
  bgPos,
}: cardProps) => {
  return (
    <Card
      variant={`unstyled`}
      bgRepeat={`no-repeat`}
      bgImage={bgImg}
      bgPos={bgPos}
      bgColor={bgColor}
      width={`100%`}
      h={`13.8rem`}
      p={padding}
    >
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

export const ProductCardsType = () => {
  return (
    <Card>
      <Box>
        <Image src="" alt="img" />
      </Box>
    </Card>
  );
};
