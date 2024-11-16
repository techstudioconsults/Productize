/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Flex, HStack, SimpleGrid, Skeleton, VStack } from '@chakra-ui/react';
import { ProductCards } from '../../../../ProductCards';
import { EmptyState } from '../../../../empty-states/EmptyState';
import { useGetPublishedFunnels } from './service';
import { FunnelCardII } from '../../funnelTypeModal/FunnelCardII';
import { useEffect } from 'react';
import FunnelTypeModal from '../../funnelTypeModal';

const LiveTabActive = () => {
  const { data, fetchData, error, isLoading } = useGetPublishedFunnels();

  // Trigger data fetch when the component mounts
  useEffect(() => {
    fetchData(); // Call the fetchData function to load the data
  }, []);

  if (isLoading) {
    return <LiveSkeleton />;
  }

  return (
    <Box>
      {/* <Box hidden={!data?.length} mb={4}>
        <LivetableControl showRefreshBtn={false} />
      </Box> */}
      {!data?.length ? (
        <>
          <ProductCards
            padding={20}
            bgPos={{ base: `-30%`, md: `initial` }}
            img={'https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951012/productize/Layer_1_m6pvyg_yz7oz1.png'}
            bgColor={'purple.100'}
            bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951010/productize/Layer_1_1_uhdwlr_l8njgb.png"
          />
          <EmptyState
            content={{
              title: 'You’re yet to publish a Funnel.',
              desc: 'Lorem ipsum dolor sit amet consectetur. Nec accumsan amet amet velit. Aliquam dictum id pellentesque aenean turpis nisl. Quam etiam.',
            }}
            textAlign={{ base: `center` }}
            showImage={false}
          >
            <FunnelTypeModal />
          </EmptyState>
        </>
      ) : (
        <SimpleGrid columns={3} gap={10} my={8}>
          {data?.map((item, index) => (
            <FunnelCardII key={index} template={item} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default LiveTabActive;

export const LiveSkeleton = () => {
  return (
    <Box p={5}>
      <Flex display={{ base: `none`, sm: `flex` }} justify="space-between" mb={6}>
        <HStack spacing={4}>
          <Skeleton borderRadius={8} height="40px" width="240px" />
          <Skeleton borderRadius={8} height="40px" width="120px" />
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
