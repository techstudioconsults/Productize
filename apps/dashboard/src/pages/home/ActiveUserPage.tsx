import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import {
  DashboardEmptyState,
  DataWidgetCard,
} from '@productize/dashboard-lib/ui';
import React from 'react';

const ActiveUserPage = () => {
  return (
    <Box my={8}>
      <Flex></Flex>
      <Box>
        <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 2 }}>
          <Box>
            <DataWidgetCard
              showIcon
              bgImg="https://res.cloudinary.com/dkszgtapy/image/upload/v1696272023/productize/Data_widget_1_bqcsji.png"
              title={'Total Sales'}
              value={'NGN 0.00'}
            />
          </Box>
          <Box>
            <DataWidgetCard
              showIcon
              bgImg="https://res.cloudinary.com/dkszgtapy/image/upload/v1696272017/productize/Data_widget_2_fwd9pa.png"
              title={'Total Revenue'}
              value={'NGN 0.00'}
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 3 }}>
          <Box>
            <DataWidgetCard showIcon={false} title={'New Order'} value={0} />
          </Box>
          <Box>
            <DataWidgetCard
              showIcon={false}
              title={'New Order Revenue'}
              value={'NGN 0.00'}
            />
          </Box>
          <Box>
            <DataWidgetCard
              showIcon={false}
              title={'Total Products'}
              value={0}
            />
          </Box>
        </SimpleGrid>
      </Box>
      <Box my={10}>
        <Text as={`h6`}>Sales</Text>
        <Box mt={4}>
          <DashboardEmptyState
            content={{
              title: '',
              desc: 'You do not have any sales activities yet.',
              img: `https://res.cloudinary.com/dkszgtapy/image/upload/v1695984929/productize/Illustration_oblvox.png`,
            }}
            textAlign={{ base: `center` }}
            showImage={false}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ActiveUserPage;
