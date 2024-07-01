import { Box, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';
import { DataWidgetCard } from '../../../AdminDataWidget';
import { ProductTable } from '../AdminUserTable';
import { useAllProducts } from './AdminOrderService';

export const AdminUser = () => {
    const { productsAnalytics, getProductsAnalyticsStatus, formatCurrency } = useAllProducts();

    return (
        <Box my={8}>
            <SimpleGrid gap={4} my={4} columns={{ base: 1, sm: 2, lg: 4 }}>
                <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Users" value={productsAnalytics?.total_products} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Subscribed Users" value={productsAnalytics?.total_sales} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Trial Users" value={productsAnalytics?.total_customers} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Conversion Rate" value={formatCurrency(productsAnalytics?.total_revenues)} />
                    </Box>
                </Skeleton>
            </SimpleGrid>
            <Stack mt={12} gap={4}>
                <ProductTable />
            </Stack>
        </Box>
    );
};

export default AdminUser;
