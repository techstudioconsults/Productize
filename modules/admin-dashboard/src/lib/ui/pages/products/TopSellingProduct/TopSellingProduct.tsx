import { Box, Stack } from '@chakra-ui/react';
import { TopProductTable } from './TopSellingProductTable';

const TopSellingProduct = () => {
    // const { productsAnalytics, getProductsAnalyticsStatus, formatCurrency } = useAllProducts();

    const containsTopProduct = (
        <Box my={8}>
            <Stack mt={12} gap={4}>
                <TopProductTable />
            </Stack>
        </Box>
    );

    return containsTopProduct;
};

export default TopSellingProduct;
