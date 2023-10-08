import { Box, SimpleGrid, Stack } from '@chakra-ui/react';
import {
  DataWidgetCard,
  ProductTable,
  TableControls,
} from '@productize/dashboard-lib/ui';

const AllproductActive = () => {
  return (
    <Box my={8}>
      {/* grid cards */}
      <Box>
        <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 4 }}>
          <Box>
            <DataWidgetCard
              showIcon={false}
              title={'Total Products'}
              value={50}
            />
          </Box>
          <Box>
            <DataWidgetCard showIcon={false} title={'Total Sales'} value={20} />
          </Box>
          <Box>
            <DataWidgetCard showIcon={false} title={'Customers'} value={10} />
          </Box>
          <Box>
            <DataWidgetCard
              showIcon={false}
              title={'Total Revenue'}
              value={`NGN 348,000`}
            />
          </Box>
        </SimpleGrid>
      </Box>
      {/* dropdown filters and buttons Controls */}
      <Stack mt={12} gap={4}>
        <TableControls />
        <ProductTable live />
      </Stack>
    </Box>
  );
};

export default AllproductActive;
