import { Box } from '@chakra-ui/react';
import {
  DashboardBanner,
  ProductPlanBanner,
} from '@productize/dashboard-lib/ui';
import React from 'react';

const Payouts = () => {
  return (
    <Box>
      <Box my={8}>
        <DashboardBanner
          padding={{ base: 4, md: 8 }}
          img={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693134664/productize/Layer_1_3_hn7gd9.png `}
          bgImg={``}
          title={'Grow communities and get paid.'}
          desc={'Make as much as ₦10,000 sale for your first withdraw'}
          px={8}
        />
      </Box>
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
    </Box>
  );
};

export default Payouts;
