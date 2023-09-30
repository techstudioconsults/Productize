import { Box } from '@chakra-ui/react';
import { ProductPlanBanner } from '@productize/dashboard-lib/ui';
import React from 'react';

const Customers = () => {
  return (
    <Box>
      <ProductPlanBanner
        content={{
          title: 'Upgrade your plan to create a plan',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
          img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696068934/productize/Illustration_3_g5iwpj.png`,
        }}
        textAlign={{ base: `center`, md: `start` }}
        showImage={true}
        maxW="100%"
      />
    </Box>
  );
};

export default Customers;
