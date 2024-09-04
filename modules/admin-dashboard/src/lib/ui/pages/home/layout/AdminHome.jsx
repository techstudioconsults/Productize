import { Box, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';
import { DataWidgetCard } from '../../../AdminDataWidget';
import { ProductTable } from '../AdminProductTable';
import { useAllProducts } from './AdminService';
export const AdminHome = () => {
    const { getHomeAnalyticsStatus, orderAnalytics, formatCurrency } = useAllProducts();
    return (
        <Box my={8}>
            <SimpleGrid gap={4} my={4} columns={{ base: 1, sm: 2, lg: 4 }}>
                <Skeleton isLoaded={!getHomeAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Products" value={orderAnalytics?.total_products} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getHomeAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Sales" value={orderAnalytics?.total_sales} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getHomeAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Payouts" value={formatCurrency(orderAnalytics?.total_payouts)} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getHomeAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Users" value={orderAnalytics?.total_users} />
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
