import { Box, Flex } from '@chakra-ui/react';
import { EmptyState, ProductCards } from '@productize/dashboard-lib/ui';
import { useSetPaymentPlan } from '@productize/shared/hooks';
import { SharedButton, UpgradePlanModal } from '@productize/shared/ui';
import { Link } from 'react-router-dom';

const Allproduct = () => {
  const isPremium = useSetPaymentPlan();

  const emptyState = isPremium ? (
    <EmptyState
      content={{
        title: 'Create your first product.',
        desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
      }}
      textAlign={{ base: `center` }}
      showImage={false}
    >
      <Link to={`/dashboard/products/new`}>
        <SharedButton
          text={'Add New Product'}
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
      </Link>
    </EmptyState>
  ) : (
    <EmptyState
      hasBorder
      content={{
        title: 'Upgrade your plan to create product',
        desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
      }}
      textAlign={{ base: `center` }}
      showImage={false}
    >
      <UpgradePlanModal />
    </EmptyState>
  );

  return (
    <>
      <Flex gap={12} justifyContent={`space-between`}>
        <Box w={`100%`}>
          <ProductCards
            img={
              'https://res.cloudinary.com/dkszgtapy/image/upload/v1696066139/productize/21_pqfpr8.png'
            }
            bgColor={'coral.200'}
          />
        </Box>
        <Box w={`100%`} display={{ base: `none`, md: `initial` }}>
          <ProductCards
            img={
              'https://res.cloudinary.com/dkszgtapy/image/upload/v1696066139/productize/Clip_path_group_izpz73.png'
            }
            bgColor={'coral.200'}
          />
        </Box>
        <Box w={`100%`} display={{ base: `none`, md: `initial` }}>
          <ProductCards
            img={
              'https://res.cloudinary.com/dkszgtapy/image/upload/v1696066139/productize/Clip_path_group_1_xjfqpt.png'
            }
            bgColor={'coral.200'}
          />
        </Box>
      </Flex>
      <Box my={4}>{emptyState}</Box>
    </>
  );
};

export default Allproduct;
