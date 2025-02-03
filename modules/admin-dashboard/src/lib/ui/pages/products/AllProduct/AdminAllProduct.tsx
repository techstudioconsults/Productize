import React from 'react';
import { Box, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';
import { DataWidgetCard } from '../../../../ui/AdminDataWidget';
import { ProductTable } from '../../products/AdminProductTable';
import { useAllProducts } from './AdminService';

const AllproductActive = () => {
    const { adminProductsAnalytics , getAdminProductsAnalyticsStatus, formatCurrency } = useAllProducts();

    const containsProductDisplay = (
        <Box my={8}>
            <SimpleGrid gap={4} my={4} columns={{ base: 1, sm: 2, lg: 4 }}>
                <Skeleton isLoaded={!getAdminProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Products" value={adminProductsAnalytics?.total_products} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getAdminProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Sales" value={adminProductsAnalytics?.total_sales} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getAdminProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Customers" value={adminProductsAnalytics?.total_customers} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getAdminProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Revenue" value={formatCurrency(adminProductsAnalytics?.total_revenue)} />
                    </Box>
                </Skeleton>
            </SimpleGrid>
            <Stack mt={12} gap={4}>
                <ProductTable />
            </Stack>
        </Box>
    );

    return containsProductDisplay;
};

export default AllproductActive;
