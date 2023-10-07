import { Box } from '@chakra-ui/react';
import { EmptyState, ProductCards } from '@productize/dashboard-lib/ui';
import React from 'react';

const LiveTabLayout = () => {
  return (
    <>
      <Box>
        <EmptyState
          content={{
            title: 'You’re yet to publish a product.',
            desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
            img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696068934/productize/Illustration_3_g5iwpj.png`,
          }}
          textAlign={{ base: `center`, md: `start` }}
          showImage={true}
          maxW="100%"
        />
      </Box>
      <Box>
        <ProductCards
          padding={20}
          bgPos={{ base: `-30%`, md: `initial` }}
          img={
            'https://res.cloudinary.com/dkszgtapy/image/upload/w_200/v1696697585/productize/Layer_1_m6pvyg.png'
          }
          bgColor={'purple.100'}
          bgImg="https://res.cloudinary.com/dkszgtapy/image/upload/v1696697579/productize/Layer_1_1_uhdwlr.png"
        />
      </Box>
    </>
  );
};

export default LiveTabLayout;
