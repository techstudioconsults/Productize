import { Box, Flex } from '@chakra-ui/react';
import { useSetPaymentPlan } from '@productize-v1.0.0/modules/shared/hooks';
import { SharedButton, UpgradePlanModal } from '@productize-v1.0.0/modules/shared/ui';
import { Link } from 'react-router-dom';
import { EmptyState } from '../../../lib/empty-states/EmptyState';
import { ProductCards } from '../../../lib/ProductCards';

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
                      img={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951014/productize/21_pqfpr8_cia6fu.png"}
                      bgColor={"coral.200"}
                  />
              </Box>
              <Box w={`100%`} display={{ base: `none`, md: `initial` }}>
                  <ProductCards
                      img={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951019/productize/Clip_path_group_izpz73_qbclvq.png"}
                      bgColor={"coral.200"}
                  />
              </Box>
              <Box w={`100%`} display={{ base: `none`, md: `initial` }}>
                  <ProductCards
                      img={"https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951018/productize/Clip_path_group_1_xjfqpt_fckkav.png"}
                      bgColor={"coral.200"}
                  />
              </Box>
          </Flex>
          <Box my={4}>{emptyState}</Box>
      </>
  );
};

export default Allproduct;
