/* eslint-disable @nx/enforce-module-boundaries */
import { Flex, Box, Text, Heading, Grid, GridItem, Stack, Skeleton, Link, HStack, SimpleGrid } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, Link as RouterLink } from 'react-router-dom';
import NoOrders from './NoOrders';
import { useCurrency, useDate } from '@productize/hooks';
import { useGetSingleOrderDetailsMutation, selectSingleOrder } from '@productize/redux';

export const OrderDetails = () => {
    const [isLoading, setLoading] = useState(true);
    const [getAllOrders] = useGetSingleOrderDetailsMutation();
    const singleOrder = useSelector(selectSingleOrder);
    const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const { orderID } = useParams();

    const fontStyle = {
        color: 'purple.300',
        fontWeight: 600,
        fontSize: '18px',
    };

    const showAllOrders = useCallback(async () => {
        try {
            const res = await getAllOrders({ orderID }).unwrap();
            if (res.data) {
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            return error;
        }
    }, [getAllOrders, orderID]);

    useEffect(() => {
        showAllOrders();
    }, [showAllOrders]);

    if (isLoading) {
        return <OrderDetailsSkeleton />;
    }

    if (!singleOrder) {
        return <NoOrders />;
    }

    return (
        <Box mt="24px">
            <Flex gap={4} align="center">
                <Icon icon="ep:back" style={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
                <Text as="h6" sx={fontStyle}>
                    Order Details
                </Text>
            </Flex>
            <Box mt="40px" h="258px">
                <Heading as="h6" p="12px" sx={fontStyle} borderBottom="2px" borderColor="grey.200" mb="16px">
                    {singleOrder?.product?.title}
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
                            <Text fontWeight={`bold`}>Publish Date</Text>

                            <Text>{formatDate(singleOrder?.product?.publish_date)}</Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text fontWeight={`bold`}>Price</Text>
                            <Text>{formatCurrency(singleOrder?.product?.price)}</Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 6 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text fontWeight={`bold`}>Product Link</Text>

                            <Flex gap={3} alignItems={`center`}>
                                <Link w={`fit-content`} as={RouterLink} to={singleOrder?.product?.link}>
                                    {singleOrder?.product?.link}
                                </Link>
                                <Flex align="center" gap="16px">
                                    <Icon icon="ph:copy-thin" style={{ cursor: 'pointer' }} />
                                </Flex>
                            </Flex>
                        </Stack>
                    </GridItem>
                </Grid>
                {/* <Box borderBottom="2px" borderColor="grey.200" w='full'/> */}
                <Grid templateColumns="repeat(12, 1fr)" p="12px" alignItems="center" mt="16px" gap="16px">
                    {/* <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
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
                    </GridItem> */}
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Stack h={`98px`} spacing="10px" direction="column" color="purple.300" p="16px">
                            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                Total Order
                            </Text>
                            <Text fontWeight="600" fontSize="24px" lineHeight="32px">
                                {singleOrder?.product?.total_orders}
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Stack h={`98px`} spacing="10px" direction="column" color="purple.300" p="16px">
                            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                Total Quantity
                            </Text>
                            <Text fontWeight="600" fontSize="24px" lineHeight="32px">
                                {singleOrder?.product?.total_sales}
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Stack h={`98px`} spacing="10px" direction="column" color="purple.300" p="16px">
                            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                Total Value
                            </Text>
                            <Text fontWeight="600" fontSize="24px" lineHeight="32px">
                                {formatCurrency(singleOrder?.total_amount)}
                            </Text>
                        </Stack>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
};

const OrderDetailsSkeleton = () => {
    return (
        <Box my={10}>
            <Flex justify="space-between" mb={6}>
                <HStack spacing={4}>
                    <Skeleton borderRadius={8} height="40px" width="140px" />
                </HStack>
            </Flex>
            <Skeleton borderRadius={8} height="8rem" width="100%" />
            <SimpleGrid my={5} gap={4} columns={{ base: 1, sm: 2, md: 3 }}>
                <Skeleton borderRadius={8} height="7rem" width="100%" />
                <Skeleton borderRadius={8} height="7rem" width="100%" />
                <Skeleton borderRadius={8} height="7rem" width="100%" />
            </SimpleGrid>
        </Box>
    );
};
