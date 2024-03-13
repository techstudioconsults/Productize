import { Avatar, Box, Flex, Grid, GridItem, Link, Stack, Tag, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export const PayoutDetails = () => {
    const navigate = useNavigate();
    return (
        <Box mt="24px">
            <Flex gap={4} align="center">
                <Icon icon="ep:back" style={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
                <Text as="h6" fontWeight={600}>
                    Withdraw details
                </Text>
            </Flex>
            <Box mt="40px" h="258px">
                <Grid
                    templateColumns="repeat(12, 1fr)"
                    p="12px"
                    alignItems="center"
                    color="grey.600"
                    lineHeight="24px"
                    borderBottom="2px"
                    borderColor="grey.200"
                >
                    <GridItem colSpan={{ base: 12, md: 4 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Withdraw Earnings</Text>
                            <Text as={`h5`} fontWeight={600}>
                                155,000.00
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 8 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Status</Text>
                            <Box>
                                <Tag bg={`green.100`} color={`green.200`} size={`lg`} fontSize={`sm`}>
                                    Completed
                                </Tag>
                            </Box>
                        </Stack>
                    </GridItem>
                </Grid>
                <Grid
                    templateColumns="repeat(12, 1fr)"
                    p="12px"
                    alignItems="center"
                    color="grey.600"
                    lineHeight="24px"
                    borderBottom="2px"
                    borderColor="grey.200"
                >
                    <GridItem colSpan={{ base: 12, md: 4 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Account Name</Text>
                            <Text>Temitope Shonde</Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 4 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Bank Account</Text>
                            <Text>366****234</Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 4 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Bank</Text>
                            <Flex align="center" gap="16px">
                                <Flex alignItems={`center`} gap={5}>
                                    <Avatar
                                        size={`sm`}
                                        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1702765305/productize/Bank_Logo_f98woi.png`}
                                    />
                                    <Text>First Bank</Text>
                                </Flex>
                            </Flex>
                        </Stack>
                    </GridItem>
                </Grid>
                {/* grid 2 */}
                <Grid
                    templateColumns="repeat(12, 1fr)"
                    p="12px"
                    alignItems="center"
                    color="grey.600"
                    lineHeight="24px"
                    borderBottom="2px"
                    borderColor="grey.200"
                >
                    <GridItem colSpan={{ base: 12, md: 4 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Time</Text>
                            <Text>9:30 am</Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 4 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Paid on</Text>
                            <Text>15 May 2020</Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 4 }} mb="16px">
                        <Stack spacing="10px" direction="column" color="purple.300" lineHeight="24px" fontWeight="400" fontSize="16px">
                            <Text>Transaction ID</Text>
                            <Flex align="center" gap="16px">
                                <Text>0xhskkalmeiwkap</Text>
                            </Flex>
                        </Stack>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
};
