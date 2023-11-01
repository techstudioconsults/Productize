import { Box } from '@chakra-ui/react';
import { useSetPaymentPlan } from '@productize-v1.0.0/modules/shared/hooks';
import { UpgradePlanModal } from '@productize-v1.0.0/modules/shared/ui';
import { ProductCards } from '../../../../lib/ProductCards';
import { EmptyState } from '../../../../lib/empty-states/EmptyState';

const DeleteTab = () => {
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
          title: 'No deleted products yet.',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
        }}
        textAlign={{ base: `center` }}
        showImage={false}
      />
    </>
  ) : (
    <EmptyState
      content={{
        title: 'Upgrade your plan to create a plan',
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

export default DeleteTab;
