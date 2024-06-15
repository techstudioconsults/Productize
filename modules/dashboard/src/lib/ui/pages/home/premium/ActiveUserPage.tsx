import React from 'react';
import { Box, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import { useCurrency } from '@productize/hooks';
import { DataWidgetCard } from '../../../DataWidgetCard';
import { DashboardTable } from '../../../tables/DashboardTable';
import { OrdersTableControl } from '../../orders/OrdersTableControl';
import { useOrders, useProductAnalytics } from '../services/services';

const ActiveUserPage: React.FC = () => {
    const formatCurrency = useCurrency();
    const { productAnalytics, isLoading } = useProductAnalytics();
    const { orders, getLiveProductsStatus } = useOrders();

    return (
        <Box my={8}>
            {/* Dropdown filters and buttons Controls */}
            <Box>
                <OrdersTableControl />
            </Box>
            {/* Grid cards */}
            <Box>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 2 }}>
                    <Skeleton isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard
                                tmy={2}
                                bmt={4}
                                showIcon
                                bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951020/productize/Data_widget_1_bqcsji_dvrrm5.png"
                                title="New Order Revenue"
                                value={formatCurrency(productAnalytics.new_orders_revenue) || formatCurrency(0)}
                            />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard
                                tmy={2}
                                bmt={4}
                                showIcon
                                bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951021/productize/Data_widget_2_fwd9pa_nhxqwd.png"
                                title="Total Revenue"
                                value={formatCurrency(productAnalytics.total_revenues) || formatCurrency(0)}
                            />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 3 }}>
                    <Skeleton isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title="New Order" value={productAnalytics.new_orders || 0} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title="Total Sales" value={productAnalytics.total_sales || 0} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title="Total Products" value={productAnalytics.total_products || 0} />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
            </Box>
            {/* Empty state */}
            <Box my={10}>
                <Text as="h6">Sales</Text>
                <Box mt={4}>
                    <DashboardTable data={orders} status={getLiveProductsStatus} />
                </Box>
            </Box>
        </Box>
    );
};

export default ActiveUserPage;
