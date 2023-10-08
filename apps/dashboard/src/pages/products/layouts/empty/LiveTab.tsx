import { Box } from '@chakra-ui/react';
import { EmptyState, ProductCards } from '@productize/dashboard-lib/ui';
import { useSetPaymentPlan } from '@productize/shared/hooks';
import { SharedButton, UpgradePlanModal } from '@productize/shared/ui';
import React from 'react';

const LiveTab = () => {
  const isPremium = useSetPaymentPlan();

  const emptyState = isPremium ? (
    <>
      <ProductCards
        padding={20}
        bgPos={{ base: `-30%`, md: `initial` }}
        img={
          'https://res.cloudinary.com/dkszgtapy/image/upload/w_200/v1696697585/productize/Layer_1_m6pvyg.png'
        }
        bgColor={'purple.100'}
        bgImg="https://res.cloudinary.com/dkszgtapy/image/upload/v1696697579/productize/Layer_1_1_uhdwlr.png"
      />
      <EmptyState
        content={{
          title: 'You’re yet to publish a product.',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
        }}
        textAlign={{ base: `center` }}
        showImage={false}
      >
        <SharedButton
          text={'Publish New Product'}
          btnExtras={{
            leftIcon: `ei:plus`,
          }}
          width={'fit-content'}
          height={'40px'}
          bgColor={'purple.200'}
          textColor={'white'}
          borderRadius={'4px'}
          fontSize={{ base: `sm`, md: `sm` }}
        />
      </EmptyState>
    </>
  ) : (
    <EmptyState
      content={{
        title: 'You’re yet to publish a product.',
        desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
        img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696068934/productize/Illustration_3_g5iwpj.png`,
      }}
      textAlign={{ base: `center`, md: `start` }}
      showImage={true}
      maxW="100%"
    >
      <UpgradePlanModal />
    </EmptyState>
  );
  return <Box>{emptyState}</Box>;
};

export default LiveTab;
