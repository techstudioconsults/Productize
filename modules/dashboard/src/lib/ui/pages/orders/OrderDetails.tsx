import { Flex, Box, Text, Heading, Grid, GridItem, Stack, SkeletonText, Skeleton } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useCurrency, useDate } from "@productize-v1.0.0/modules/shared/hooks";
import { selectSingleOrder, useGetSingleOrderDetailsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { OnBoardingLoader } from "@productize-v1.0.0/modules/shared/ui";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NoOrders from "./NoOrders";

export const OrderDetails = () => {
    const [getAllOrders, getAllOrdersStatus] = useGetSingleOrderDetailsMutation();
    const singleOrder = useSelector(selectSingleOrder);
    const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const { orderID } = useParams();

    const fontStyle = {
        color: "purple.300",
        fontWeight: 600,
        fontSize: "18px",
    };

    const showAllOrders = useCallback(async () => {
        try {
            await getAllOrders({ orderID }).unwrap();
        } catch (error) {
            return error;
        }
    }, [getAllOrders, orderID]);

    useEffect(() => {
        showAllOrders();
    }, [showAllOrders]);

    if (!singleOrder) {
        return <NoOrders />;
    }

    return (
        <Box mt="24px">
            <Flex gap={4} align="center">
                <Icon icon="ep:back" style={{ cursor: "pointer" }} onClick={() => navigate(-1)} />
                <Text as="h6" sx={fontStyle}>
                    Order Details
                </Text>
            </Flex>
            <Box mt="40px" h="258px">
                <Heading as="h6" p="12px" sx={fontStyle} borderBottom="2px" borderColor="grey.200" mb="16px">
                    {singleOrder?.product_title}
                </Heading>
                <Grid
                    templateColumns="repeat(12, 1fr)"
                    p="12px"
                    alignItems="center"
                    color="grey.600"
                    lineHeight="24px"
                    borderBottom="2px"
                    borderColor="grey.200"
                >
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Publish Date</Text>
                            <SkeletonText isLoaded={!getAllOrdersStatus.isLoading} noOfLines={1} w={`10rem`}>
                                <Text>{formatDate(singleOrder?.date)}</Text>
                            </SkeletonText>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Price</Text>
                            <SkeletonText isLoaded={!getAllOrdersStatus.isLoading} noOfLines={1} w={`10rem`}>
                                <Text>{formatCurrency(singleOrder?.product_price)}</Text>
                            </SkeletonText>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 6 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Product Link</Text>
                            <SkeletonText isLoaded={!getAllOrdersStatus.isLoading} noOfLines={1} w={`10rem`}>
                                <Text>{singleOrder?.link}</Text>
                                <Flex align="center" gap="16px">
                                    <Icon icon="ph:copy-thin" style={{ cursor: "pointer" }} />
                                </Flex>
                            </SkeletonText>
                        </Stack>
                    </GridItem>
                </Grid>
                {/* <Box borderBottom="2px" borderColor="grey.200" w='full'/> */}
                <Grid templateColumns="repeat(12, 1fr)" p="12px" alignItems="center" mt="16px" gap="16px">
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Skeleton isLoaded={!getAllOrdersStatus.isLoading}>
                            <Stack h={`98px`} spacing="10px" direction="column" color="purple.300" p="16px">
                                <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                    Viewed
                                </Text>
                                <Text fontWeight="600" fontSize="24px" lineHeight="32px">
                                    {singleOrder?.total_views}
                                </Text>
                            </Stack>
                        </Skeleton>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Skeleton isLoaded={!getAllOrdersStatus.isLoading}>
                            <Stack h={`98px`} spacing="10px" direction="column" color="purple.300" p="16px">
                                <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                    Total Order
                                </Text>
                                <Text fontWeight="600" fontSize="24px" lineHeight="32px">
                                    {singleOrder?.total_order}
                                </Text>
                            </Stack>
                        </Skeleton>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Skeleton isLoaded={!getAllOrdersStatus.isLoading}>
                            <Stack h={`98px`} spacing="10px" direction="column" color="purple.300" p="16px">
                                <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                    Total Sales
                                </Text>
                                <Text fontWeight="600" fontSize="24px" lineHeight="32px">
                                    {formatCurrency(singleOrder?.total_sales)}
                                </Text>
                            </Stack>
                        </Skeleton>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Skeleton isLoaded={!getAllOrdersStatus.isLoading}>
                            <Stack h={`98px`} spacing="10px" direction="column" color="purple.300" p="16px">
                                <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                    Total Value
                                </Text>
                                <Text fontWeight="600" fontSize="24px" lineHeight="32px">
                                    {singleOrder?.total_value}
                                </Text>
                            </Stack>
                        </Skeleton>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
};
