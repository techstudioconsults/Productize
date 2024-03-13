import { useCallback, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { OrderTable } from './component/OrderTable';
import { DashboardEmptyState } from '../../../empty-states/DashboardEmptyState';
import { OrdersTableControl } from '../../../tables/tableControls/OrdersTableControl';
import { useGetAllOrdersMutation, selectAllOrders } from '@productize/redux';
import { OnBoardingLoader } from '@productize/ui';

const OrderActive = () => {
    const [getAllOrders, getLiveProductsStatus] = useGetAllOrdersMutation();
    const orders = useSelector(selectAllOrders);

    const showAllOrders = useCallback(async () => {
        try {
            await getAllOrders(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getAllOrders]);

    useEffect(() => {
        showAllOrders();
    }, [showAllOrders]);

    if (getLiveProductsStatus.isLoading) {
        return <OnBoardingLoader />;
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
