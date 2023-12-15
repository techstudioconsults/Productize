import { Flex, Box, Text, Heading, Grid, GridItem, Stack } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useCurrency, useDate } from "@productize-v1.0.0/modules/shared/hooks";
import { selectCurrentToken } from "@productize-v1.0.0/modules/shared/redux";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const OrderDetails = () => {
    const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const { orderid } = useParams();
    const token = useSelector(selectCurrentToken);
    const [singleOrder, setSingleOrder] = useState({});
    const fontStyle = {
        color: "purple.300",
        fontWeight: 600,
        fontSize: "18px",
    };

    const getSingleOrder = useCallback(async () => {
        try {
            const res = await axios.get(`https://productize-api.techstudio.academy/api/orders/${orderid}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(res);
            if (res.status === 200) {
                setSingleOrder(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }, [orderid, token]);

    useEffect(() => {
        getSingleOrder();
    }, [getSingleOrder]);

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
                            <Text>{formatDate(singleOrder?.created_at)}</Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Price</Text>
                            <Text>{formatCurrency(singleOrder?.product_price)}</Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 6 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Product Link</Text>
                            <Flex align="center" gap="16px">
                                <Text>UX Design Fundamentals.com</Text>
                                <Icon icon="ph:copy-thin" style={{ cursor: "pointer" }} />
                            </Flex>
                        </Stack>
                    </GridItem>
                </Grid>
                {/* <Box borderBottom="2px" borderColor="grey.200" w='full'/> */}
                <Grid templateColumns="repeat(12, 1fr)" p="12px" alignItems="center" mt="16px" gap="16px">
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Stack h={`98px`} spacing="10px" direction="column" color="purple.300" p="16px">
                            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                Viewed
                            </Text>
                            <Text fontWeight="600" fontSize="24px" lineHeight="32px">
                                {singleOrder?.total_views}
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Stack h={`98px`} spacing="10px" direction="column" color="purple.300" p="16px">
                            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                Total Order
                            </Text>
                            <Text fontWeight="600" fontSize="24px" lineHeight="32px">
                                {singleOrder?.total_order}
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Stack h={`98px`} spacing="10px" direction="column" color="purple.300" p="16px">
                            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                Total Sales
                            </Text>
                            <Text fontWeight="600" fontSize="24px" lineHeight="32px">
                                {formatCurrency(singleOrder?.total_sales)}
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Stack h={`98px`} spacing="10px" direction="column" color="purple.300" p="16px">
                            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                Total Value
                            </Text>
                            <Text fontWeight="600" fontSize="24px" lineHeight="32px">
                                NGN 8,700.00
                            </Text>
                        </Stack>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
};
