import { Box, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';
import { DataWidgetCard } from '../../../AdminDataWidget';
import { ProductTable } from '../../home/AdminProductTable';
import { useAllProducts } from './AdminService';

export const AdminHome = () => {
    const { productsAnalytics, getProductsAnalyticsStatus, formatCurrency } = useAllProducts();

    return (
        <Box my={8}>
            <SimpleGrid gap={4} my={4} columns={{ base: 1, sm: 2, lg: 4 }}>
                <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Products" value={productsAnalytics?.total_products} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Sales" value={productsAnalytics?.total_sales} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Payouts" value={productsAnalytics?.total_customers} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Users" value={formatCurrency(productsAnalytics?.total_revenues)} />
                    </Box>
                </Skeleton>
            </SimpleGrid>
            <Stack mt={12} gap={4}>
                <ProductTable />
            </Stack>
        </Box>
    );
};

export default AdminHome;
