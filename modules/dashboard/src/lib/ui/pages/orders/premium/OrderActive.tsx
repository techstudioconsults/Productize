import { OnBoardingLoader } from "@productize-v1.0.0/modules/shared/ui";
import React, { useCallback, useEffect } from "react";
import { Box, Flex, IconButton, Stack } from "@chakra-ui/react";
import { LivetableControl } from "../../products/premium/components/LiveTableControl";
import NoOrders from "../NoOrders";
import { useSelector } from "react-redux";
import { selectAllOrders, useGetAllOrdersMutation } from "@productize-v1.0.0/modules/shared/redux";
import { OrderTable } from "./component/OrderTable";
import { AllProducts, DatePicker, OrderBtn } from "../components";
import { Icon } from "@iconify/react";
import { DashboardEmptyState } from "../../../empty-states/DashboardEmptyState";
import { OrdersTableControl } from "../../../tables/tableControls/OrdersTableControl";

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
                        title: "",
                        desc: "You do not have any active order yet.",
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
            {/* <Box mb={4}>
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
            </Box> */}
            <Box my={10}>
                <OrdersTableControl />
            </Box>
            <OrderTable tableData={orders} />
        </Box>
    );
};

export default OrderActive;
