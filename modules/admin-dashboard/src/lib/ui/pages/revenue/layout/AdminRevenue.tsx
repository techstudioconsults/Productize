import React from 'react';
import { Box, Flex, HStack, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useCurrency } from '@productize/hooks';
import { DataWidgetCard } from '../../../AdminDataWidget';
import { DashboardTable } from '../AdminRevenueTable';
import { OrdersTableControl } from '../AdminRevenueTableControl';
import { useOrders, useProductAnalytics } from '../services/AdminServices';

const ActiveUserPage: React.FC = () => {
    const formatCurrency = useCurrency();
    const { revenueAnalytics, isLoading } = useProductAnalytics();
    const { orders, isLoading: loading } = useOrders();

    return (
        <Box my={8}>
            {/* Dropdown filters and buttons Controls */}
            {/* Grid cards */}
            <Box>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 2 }}>
                    <Skeleton borderRadius={8} isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard
                                tmy={2}
                                bmt={4}
                                showIcon
                                bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951020/productize/Data_widget_1_bqcsji_dvrrm5.png"
                                title="Total Revenue"
                                value={formatCurrency(revenueAnalytics.total_revenues) || formatCurrency(0)}
                            />
                        </Box>
                    </Skeleton>
                    {/* <Skeleton borderRadius={8} isLoaded={!isLoading}>
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
                    </Skeleton> */}
                </SimpleGrid>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 3 }}>
                    <Skeleton borderRadius={8} isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title="Total Sales Revenue" value={formatCurrency(revenueAnalytics.total_sale_revenue) || 0} />
                        </Box>
                    </Skeleton>
                    <Skeleton borderRadius={8} isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard
                                showIcon={false}
                                title="Total Subscription Revenue"
                                value={formatCurrency(revenueAnalytics.total_subscription_revenue) || 0}
                            />
                        </Box>
                    </Skeleton>
                    <Skeleton borderRadius={8} isLoaded={!isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title="Total Commission" value={formatCurrency(revenueAnalytics.total_commission) || 0} />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
            </Box>

            {/* Empty state */}
            <Box my={10}>
                {/* <Box>{<OrdersTableControl />}</Box> */}
                <Box mt={4}>
                    <DashboardTable />
                </Box>
            </Box>
        </Box>
    );
};

export default ActiveUserPage;

export const ControlSkeleton = () => {
    return (
        <Box>
            <Flex justify="space-between" mb={6}>
                <HStack w={{ base: `100%`, sm: `initial` }} justifyContent={`space-between`} spacing={4}>
                    <Skeleton borderRadius={8} height="40px" width="240px" />
                    <Skeleton borderRadius={8} height="40px" width="40px" />
                </HStack>
                <HStack display={{ base: `none`, sm: `block` }} spacing={4}>
                    <Skeleton borderRadius={8} height="40px" width="120px" />
                </HStack>
            </Flex>
        </Box>
    );
};
