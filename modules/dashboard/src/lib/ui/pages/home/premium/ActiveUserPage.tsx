import { Box, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';

import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DataWidgetCard } from '../../../DataWidgetCard';
import { DashboardTable } from '../../../tables/DashboardTable';
import { OrdersTableControl } from '../../../tables/tableControls/OrdersTableControl';
import { selectAllOrders, selectProductAnalytics, useGetAllOrdersMutation, useGetProductAnalyticsMutation } from '@productize/redux';
import { useCurrency } from '@productize/hooks';

const ActiveUserPage = () => {
    const [getProductAnaysis, getProductAnaysisStatus] = useGetProductAnalyticsMutation();
    const [getAllOrders, getLiveProductsStatus] = useGetAllOrdersMutation();
    const formatCurrency = useCurrency();
    const productAnaysis = useSelector(selectProductAnalytics);
    const orders = useSelector(selectAllOrders);

    const showAllOrders = useCallback(async () => {
        try {
            await getAllOrders(null).unwrap();
            await getProductAnaysis(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getAllOrders, getProductAnaysis]);

    useEffect(() => {
        showAllOrders();
    }, [getProductAnaysis, showAllOrders]);

    return (
        <Box my={8}>
            {/* dropdown filters and buttons Controls */}
            <Box>
                <OrdersTableControl />
            </Box>
            {/* grid cards */}
            <Box>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 2 }}>
                    <Skeleton isLoaded={!getProductAnaysisStatus.isLoading}>
                        <Box>
                            <DataWidgetCard
                                tmy={2}
                                bmt={4}
                                showIcon
                                bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951020/productize/Data_widget_1_bqcsji_dvrrm5.png"
                                title={'Total Sales'}
                                // value={formatCurrency(productAnaysis.total_sales)}
                                value={productAnaysis.total_sales}
                            />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductAnaysisStatus.isLoading}>
                        <Box>
                            <DataWidgetCard
                                tmy={2}
                                bmt={4}
                                showIcon
                                bgImg="https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951021/productize/Data_widget_2_fwd9pa_nhxqwd.png"
                                title={'Total Revenue'}
                                value={formatCurrency(productAnaysis.total_revenues)}
                            />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
                <SimpleGrid gap={4} my={4} columns={{ base: 1, md: 3 }}>
                    <Skeleton isLoaded={!getProductAnaysisStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={'New Order'} value={productAnaysis.new_orders} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductAnaysisStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={'New Order Revenue'} value={formatCurrency(productAnaysis.new_orders_revenue)} />
                        </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!getProductAnaysisStatus.isLoading}>
                        <Box>
                            <DataWidgetCard showIcon={false} title={'Total Products'} value={productAnaysis.total_products} />
                        </Box>
                    </Skeleton>
                </SimpleGrid>
            </Box>
            {/* empty state */}
            <Box my={10}>
                <Text as={`h6`}>Sales</Text>
                <Box mt={4}>
                    <DashboardTable data={orders} status={getLiveProductsStatus} />
                    {/* )} */}
                </Box>
            </Box>
        </Box>
    );
};

export default ActiveUserPage;
