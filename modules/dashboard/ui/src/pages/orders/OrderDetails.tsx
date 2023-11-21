import { Flex, Box, Text, Heading, Grid, GridItem, Stack } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useCurrency } from "@productize-v1.0.0/modules/shared/hooks";
import { useNavigate } from "react-router-dom";

export const OrderDetails = () => {
    const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const fontStyle = {
        color: "purple.300",
        fontWeight: 500,
        fontSize: "18px",
    };
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
                    UX Design Fundamentals
                </Heading>
                <Grid
                    templateColumns="repeat(12, 1fr)"
                    p="12px"
                    alignItems="center"
                    color="grey.500"
                    lineHeight="24px"
                    borderBottom="2px"
                    borderColor="grey.200"
                >
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Publish Date</Text>
                            <Text>12th June, 2018</Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Price</Text>
                            <Text>{formatCurrency(8700)}</Text>
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
                        <Stack spacing="10px" direction="column" color="purple.300" p="16px">
                            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                Viewed
                            </Text>
                            <Text fontWeight="500" fontSize="24px" lineHeight="32px">
                                1
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Stack spacing="10px" direction="column" color="purple.300" p="16px">
                            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                Total Order
                            </Text>
                            <Text fontWeight="500" fontSize="24px" lineHeight="32px">
                                1
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Stack spacing="10px" direction="column" color="purple.300" p="16px">
                            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                Total Sales
                            </Text>
                            <Text fontWeight="500" fontSize="24px" lineHeight="32px">
                                3
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 3 }} mb="16px" border="1px solid #F3F3F3" rounded="8px">
                        <Stack spacing="10px" direction="column" color="purple.300" p="16px">
                            <Text fontSize="16px" lineHeight="24px" fontWeight="400">
                                Total Value
                            </Text>
                            <Text fontWeight="500" fontSize="24px" lineHeight="32px">
                                NGN 8,700.00
                            </Text>
                        </Stack>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
};
