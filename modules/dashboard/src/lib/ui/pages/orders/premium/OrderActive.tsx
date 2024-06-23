/* eslint-disable @nx/enforce-module-boundaries */
import { useCallback, useEffect, useState } from 'react';
import { Box, Flex, HStack, Skeleton, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { OrderTable } from './component/OrderTable';
import { DashboardEmptyState } from '../../../empty-states/DashboardEmptyState';
import { OrdersTableControl } from '../OrdersTableControl';
import { useGetAllOrdersMutation, selectAllOrders } from '@productize/redux';

const OrderActive = () => {
    const [isLoading, setLoading] = useState(true);
    const [getAllOrders] = useGetAllOrdersMutation();
    const orders = useSelector(selectAllOrders);

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
                <Box my={10}>
                    <OrdersTableControl />
                </Box>
                <DashboardEmptyState
                    content={{
                        title: '',
                        desc: 'You do not have any active order yet.',
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
            <Box my={10}>
                <OrdersTableControl />
            </Box>
            <OrderTable tableData={orders} />
        </Box>
    );
};

export default OrderActive;

const OrdersSkeleton = () => {
    return (
        <Box mt={10}>
            <Flex justify="space-between" mb={6}>
                <HStack spacing={4}>
                    <Skeleton height="40px" width="240px" />
                    <Skeleton height="40px" width="40px" />
                </HStack>
                <HStack spacing={4}>
                    <Skeleton height="40px" width="120px" />
                </HStack>
            </Flex>
            <VStack>
                <Skeleton height="40px" width="100%" />
                <Skeleton height="40px" width="100%" />
                <Skeleton height="40px" width="100%" />
                <Skeleton height="40px" width="100%" />
            </VStack>
        </Box>
    );
};
