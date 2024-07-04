import { Box, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';
import { DataWidgetCard } from '../../../AdminDataWidget';
import { OrderTable } from '../AdminProductTable';
import { useAllProducts } from './AdminOrderService';

export const AdminOrder = () => {
    const { productsAnalytics, getProductsAnalyticsStatus, formatCurrency } = useAllProducts();

    return (
        <Box my={8}>
            <SimpleGrid gap={4} my={4} columns={{ base: 1, sm: 2, lg: 3 }}>
                <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Orders" value={productsAnalytics?.total_products} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Orders Revenue" value={formatCurrency(productsAnalytics?.total_revenues)} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Average Order Value" value={formatCurrency(productsAnalytics?.total_revenues)} />
                    </Box>
                </Skeleton>
                {/* <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Users" value={formatCurrency(productsAnalytics?.total_revenues)} />
                    </Box>
                </Skeleton> */}
            </SimpleGrid>
            <Stack mt={12} gap={4}>
                <OrderTable />
            </Stack>
        </Box>
    );
};

export default AdminOrder;
