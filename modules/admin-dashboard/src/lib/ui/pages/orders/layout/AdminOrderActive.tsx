/* eslint-disable @nx/enforce-module-boundaries */
import { useCallback, useEffect, useState } from 'react';
import { Box, Flex, HStack, Skeleton, SimpleGrid, VStack } from '@chakra-ui/react';
import { DataWidgetCard } from '../../../AdminDataWidget';
import { useSelector } from 'react-redux';
import { AdminOrderTable } from '../AdminOrderTable';
import { DashboardEmptyState } from '../../../empty-states/AdminDashboardEmptyState';
import { AdminOrdersTableControl } from '../AdminOrderTableControl';
import { useGetAllOrdersMutation, selectAllOrders, selectIsOrderfilter } from '@productize/redux';
import { useAllProducts } from './AdminService';

const AdminOrderActive = () => {
    const [isLoading, setLoading] = useState(true);
    const [getAllOrders] = useGetAllOrdersMutation();
    const orders = useSelector(selectAllOrders);
    const isOrderFilter = useSelector(selectIsOrderfilter);
    const { productsAnalytics, getProductsAnalyticsStatus, formatCurrency } = useAllProducts();

    const showAllOrders = useCallback(async () => {
        try {
            const res = await getAllOrders(null).unwrap();
            if (res.data) {
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            return error;
        }
    }, [getAllOrders]);

    useEffect(() => {
        showAllOrders();
    }, [showAllOrders]);

    if (isLoading) {
        return <OrdersSkeleton />;
    }

    if (!orders?.length) {
        return (
            <Box my={10}>
                <Box hidden={!isOrderFilter} my={10}>
                    <AdminOrdersTableControl />
                </Box>
                <DashboardEmptyState
                    content={{
                        title: '',
                        desc: isOrderFilter ? `No Order Found` : `You do not have any active order yet.`,
                        img: `https://res.cloudinary.com/ceenobi/image/upload/v1697714644/icons/Chart_znlfld.png`,
                    }}
                    textAlign={{ base: `center` }}
                    showImage
                />
            </Box>
        );
    }

    return (
        <Box mt={5}>
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
            <Box my={10}>
                <AdminOrdersTableControl />
            </Box>
            <AdminOrderTable tableData={orders} />
        </Box>
    );
};

export default AdminOrderActive;

const OrdersSkeleton = () => {
    return (
        <Box p={5} mt={5}>
            <Flex display={{ base: `none`, sm: `flex` }} justify="space-between" mb={6}>
                <HStack spacing={4}>
                    <Skeleton borderRadius={8} height="40px" width="240px" />
                    <Skeleton borderRadius={8} height="40px" width="120px" />
                    <Skeleton borderRadius={8} height="40px" width="40px" />
                </HStack>
                <HStack spacing={4}>
                    <Skeleton borderRadius={8} height="40px" width="120px" />
                </HStack>
            </Flex>
            <VStack>
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
                <Skeleton borderRadius={8} height="40px" width="100%" />
            </VStack>
        </Box>
    );
};
