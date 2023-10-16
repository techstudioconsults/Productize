import { Box, SimpleGrid, Stack } from '@chakra-ui/react';
import {
  DataWidgetCard,
  ProductTable,
  TableControls,
} from '@productize/dashboard-lib/ui';
import { useCurrency } from '@productize/shared/hooks';
import { selectProductAnalytics } from '@productize/shared/redux';
import { useSelector } from 'react-redux';

interface draftActiveProps {
  products: [];
}

const AllproductActive = ({ products }: draftActiveProps) => {
  // const allProducts = useSelector(selectAllProducts);
  const productsAnalyics = useSelector(selectProductAnalytics);
  const formatCurrency = useCurrency();

  console.log(productsAnalyics);

  return (
    <Box my={8}>
      {/* grid cards */}
      <Box>
        <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 4 }}>
          <Box>
            <DataWidgetCard
              showIcon={false}
              title={'Total Products'}
              value={productsAnalyics?.total_products}
            />
          </Box>
          <Box>
            <DataWidgetCard
              showIcon={false}
              title={'Total Sales'}
              value={productsAnalyics?.total_sales}
            />
          </Box>
          <Box>
            <DataWidgetCard
              showIcon={false}
              title={'Customers'}
              value={productsAnalyics?.total_customers}
            />
          </Box>
          <Box>
            <DataWidgetCard
              showIcon={false}
              title={'Total Revenue'}
              value={formatCurrency(productsAnalyics?.total_revenues)}
            />
          </Box>
        </SimpleGrid>
      </Box>
      {/* dropdown filters and buttons Controls */}
      <Stack mt={12} gap={4}>
        <TableControls />
        <ProductTable tableData={products} />
      </Stack>
    </Box>
  );
};

export default AllproductActive;
