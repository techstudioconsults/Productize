import React from 'react';
import { Box, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';
import { DataWidgetCard } from '../../../../ui/AdminDataWidget';
import { ProductTable } from '../../products/AdminProductTable';
import { useAllProducts } from './AdminService';

const AllproductActive = () => {
    const { productsAnalytics, getProductsAnalyticsStatus, formatCurrency } = useAllProducts();

    const containsProductDisplay = (
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
                        <DataWidgetCard showIcon={false} title="Total Customers" value={productsAnalytics?.total_customers} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!getProductsAnalyticsStatus.isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title="Total Revenue" value={formatCurrency(productsAnalytics?.total_revenues)} />
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
