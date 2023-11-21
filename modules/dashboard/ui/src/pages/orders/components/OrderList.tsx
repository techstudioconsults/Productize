import { Box, Flex, Grid, GridItem, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { Link } from "react-router-dom";
import OrderBtn from "./OrderBtn";

interface Order {
    _id: string; // Define the properties of an order
}

export default function OrderList({ orders }: { orders: Order[] }) {
    const formatCurrency = useCurrency();

    return (
        <>
            <Box mt="24px" mb="12px" minH="80vh">
                <Grid
                    templateColumns="repeat(12, 1fr)"
                    bg="purple.100"
                    p="12px"
                    alignItems="center"
                    color="grey.500"
                    lineHeight="24px"
                    h="48px"
                    mb="12px"
                    hideBelow="md"
                >
                    <GridItem colSpan={{ md: 4 }} mb={4}>
                        <Text>Product</Text>
                    </GridItem>
                    <GridItem colSpan={{ md: 2 }} mb={4}>
                        <Text>Price</Text>
                    </GridItem>
                    <GridItem colSpan={{ md: 3 }} mb={4}>
                        <Text>Customer Email</Text>
                    </GridItem>
                    <GridItem colSpan={{ md: 3 }} mb={4}>
                        <Text>Date</Text>
                    </GridItem>
                </Grid>
                <Grid
                    templateColumns="repeat(12, 1fr)"
                    bg="#FFFFFF"
                    p={{ base: "12px", md: "4px" }}
                    alignItems="center"
                    color="grey.200"
                    lineHeight="24px"
                    rounded={{ base: "8px", md: "none" }}
                    border={{ base: "2px solid #F3F3F3", md: "none" }}
                    borderBottom={{ base: "2px", md: "2px" }}
                    h={{ base: "368px", md: "56px" }}
                    gap="4px"
                >
                    <GridItem colSpan={{ base: 12, md: 4 }} mb={4}>
                        <Flex justify="space-between">
                            <Flex gap="8px" direction={{ base: "column", md: "row" }} as={Link} to="/dashboard/orders/orderid">
                                <Image
                                    objectFit="cover"
                                    w={{ base: "100px", md: "44px" }}
                                    h={{ base: "64px", md: "44px" }}
                                    src="https://res.cloudinary.com/ceenobi/image/upload/v1699646899/icons/Frame_40207_b0pksv.png"
                                    alt="lll"
                                    borderRadius="4px"
                                    mb={{ base: 2, md: 0 }}
                                    mr="auto"
                                />
                                <Box>
                                    <Text color="grey.400" hideFrom="md">
                                        Product
                                    </Text>
                                    <Text color="purple.300">UX Design Fundamentals</Text>
                                </Box>
                            </Flex>
                            <IconButton aria-label="See more" icon={<Icon icon="solar:menu-dots-bold" />} hideFrom="md" variant="ghost" />
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 2 }} mb={4}>
                        <Text color="grey.400" hideFrom="md">
                            Price
                        </Text>
                        <Text color="purple.300">{formatCurrency(5500)}</Text>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb={4}>
                        <Text color="grey.400" hideFrom="md">
                            Customer Email
                        </Text>
                        <Text color="purple.300">aishaaish@techstudio.com</Text>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb={4}>
                        <Text color="grey.400" hideFrom="md">
                            Date
                        </Text>
                        <Text color="purple.300">15 May 2020 8:00 am</Text>
                    </GridItem>
                </Grid>
            </Box>
            <Flex justify="space-between" align="center" h="40px">
                <Text color="grey.400" fontSize="16px" lineHeight="24px">
                    10 Entries per page
                </Text>
                <Text color="grey.400" fontSize="16px" lineHeight="24px">
                    Page 1 of 1
                </Text>
                <Stack spacing={4} direction="row" hideBelow="md">
                    <OrderBtn
                        title="Previous"
                        color="grey.400"
                        borderColor="grey.400"
                        fontSize="16px"
                        leftIcon={<Icon icon="material-symbols-light:arrow-back-ios" />}
                    />
                    <OrderBtn
                        title="Next"
                        color="grey.400"
                        borderColor="grey.400"
                        fontSize="16px"
                        rightIcon={<Icon icon="ion:chevron-forward-outline" />}
                        leftIcon={null}
                    />
                </Stack>
            </Flex>
        </>
    );
}
