/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key, useEffect } from 'react';

import { Box, Flex, HStack, Skeleton, VStack, SimpleGrid } from '@chakra-ui/react';
import { ProductCards } from '../../../../ProductCards';
import { EmptyState } from '../../../../empty-states/EmptyState';
import FunnelTypeModal from '../../funnelTypeModal';
import { FunnelCardII } from '../../funnelTypeModal/FunnelCardII';
import { useFunnelData } from '../../services/useFunnelData';
import { useSelector } from 'react-redux';
import { selectFunnelData } from '@productize/redux';

const AllFunnelActive = () => {
  const { isLoading, error, fetchData } = useFunnelData(); // Use the hook
  const data = useSelector(selectFunnelData);

  // Trigger data fetch when the component mounts
  useEffect(() => {
    fetchData(); // Call the fetchData function to load the data
  }, []);

  const emptyProductDisplay = (
    <>
      <Flex gap={12} justifyContent="space-between">
        <Box w="100%">
          <ProductCards img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951014/productize/21_pqfpr8_cia6fu.png" bgColor="coral.200" />
        </Box>
        <Box w="100%" display={{ base: 'none', md: 'initial' }}>
          <ProductCards
            img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951019/productize/Clip_path_group_izpz73_qbclvq.png"
            bgColor="coral.200"
          />
        </Box>
        <Box w="100%" display={{ base: 'none', md: 'initial' }}>
          <ProductCards
            img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951018/productize/Clip_path_group_1_xjfqpt_fckkav.png"
            bgColor="coral.200"
          />
        </Box>
      </Flex>
      <EmptyState
        content={{
          title: 'Create your first Funnel.',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
        }}
        textAlign={{ base: 'center' }}
        showImage={false}
      >
        <FunnelTypeModal />
      </EmptyState>
    </>
  );

  const containsProductDisplay = (
    <SimpleGrid columns={3} gap={10} my={8}>
      {data?.map((item: any, index: Key | null | undefined) => (
        <FunnelCardII key={index} template={item} />
      ))}
    </SimpleGrid>
  );

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return (
      <Box textAlign="center" color="red.500">
        Failed to load data. Please try again.
      </Box>
    );
  }

  const display = data.length ? containsProductDisplay : emptyProductDisplay;

  return display;
};

export default AllFunnelActive;

export const DashboardSkeleton = () => {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ sm: 2, lg: 4 }} gap={6} mb={6}>
        <Skeleton borderRadius={8} p={5} height={`7rem`} borderWidth="1px" />
        <Skeleton borderRadius={8} p={5} height={`7rem`} borderWidth="1px" />
        <Skeleton borderRadius={8} p={5} height={`7rem`} borderWidth="1px" />
        <Skeleton borderRadius={8} p={5} height={`7rem`} borderWidth="1px" />
      </SimpleGrid>

      <Flex display={{ base: `none`, sm: `flex` }} mt={20} justify="space-between" mb={6}>
        <HStack spacing={4}>
          <Skeleton borderRadius={8} height="40px" width="240px" />
          <Skeleton borderRadius={8} height="40px" width="100px" />
          <Skeleton borderRadius={8} height="40px" width="40px" />
        </HStack>
        <HStack spacing={4}>
          <Skeleton borderRadius={8} height="40px" width="120px" />
        </HStack>
      </Flex>
      <VStack>
        <Skeleton borderRadius={8} height="40px" width="100%" />
        <Skeleton borderRadius={8} height="40px" width="100%" />
        <Skeleton borderRadius={8} height="40px" width="100%" />
        <Skeleton borderRadius={8} height="40px" width="100%" />
        <Skeleton borderRadius={8} height="40px" width="100%" />
        <Skeleton borderRadius={8} height="40px" width="100%" />
      </VStack>
    </Box>
  );
};
