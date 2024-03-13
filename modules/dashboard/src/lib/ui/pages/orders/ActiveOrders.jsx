import { Box, Flex, Stack, IconButton } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { AllProducts, OrderBtn, DatePicker, OrderList } from './components';
import { Outlet, useLocation } from 'react-router-dom';

export default function ActiveOrders({ orders }) {
    const location = useLocation();

    return (
        <Box mt="24px">
            {location.pathname === '/dashboard/orders' ? (
                <>
                    <Flex justify="space-between" align="center">
                        <Stack spacing={4} direction="row" justify="space-between">
                            <DatePicker />
                            <AllProducts />
                        </Stack>
                        <Stack spacing={4} direction="row" hideBelow="md">
                            <OrderBtn title="Export" color="purple.200" borderColor="purple.200" leftIcon={<Icon icon="circum:export" />} rightIcon={null} />
                            <OrderBtn title="Refresh" color="purple.200" borderColor="purple.200" leftIcon={<Icon icon="ep:refresh-left" />} rightIcon={null} />
                        </Stack>
                        <IconButton aria-label="See more" icon={<Icon icon="charm:menu-kebab" />} hideFrom="md" variant="ghost" />
                    </Flex>
                    <Box my={5}>
                        <OrderList tableData={orders.data} />
                    </Box>
                </>
            ) : (
                <Outlet />
            )}
        </Box>
    );
}
