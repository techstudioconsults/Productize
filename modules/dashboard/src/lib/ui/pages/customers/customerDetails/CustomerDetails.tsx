/* eslint-disable @typescript-eslint/no-explicit-any */
// components/CustomersDetails.tsx
import { Box, Flex, HStack, Image, SimpleGrid, Skeleton, SkeletonText, Stack, Text, VStack } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import arrowLeft from '@icons/Property_2_Arrow-left_kafkjg.svg';
import { CustomerDetailsTable } from '../customerTable/CustomerDetailsTable';
import { ToastFeedback, useToastAction } from '@productize/ui';
import toastimg from '@icons/star-notice.png';
import errorImg from '@icons/error.svg';
import { useCurrency, useDate } from '@productize/hooks';
import { Icon } from '@iconify/react';
import { DataWidgetCard } from '../../../DataWidgetCard';
import { useCustomerDetails } from './service';
import { CopyTextFeedbackProps } from './customers.types';

export const CustomersDetails = () => {
    const navigate = useNavigate();
    const { singleCustomer, singleCustomerOrders, isLoading } = useCustomerDetails();
    const { copyTextToClipBoard } = CopyTextFeedback({ textToCopy: singleCustomer?.email });

    if (isLoading) {
        return <CustomerDetailsSkeleton />;
    }

    return (
        <Box my={8}>
            {/* Header */}
            <Flex flexDir={{ base: `column`, md: `row` }} justifyContent={`space-between`} alignItems={{ base: `flex-start`, md: `center` }} gap={4}>
                <Flex w={`100%`} gap={8} alignItems={`center`}>
                    <Box cursor={`pointer`} onClick={() => navigate(-1)}>
                        <Image src={arrowLeft} />
                    </Box>
                    <Text as={`h6`}>Customer Details</Text>
                </Flex>
            </Flex>
            {/* Customer Info and Orders */}
            <Box mt={8} mb={4} color={`purple.300`}>
                <SimpleGrid columns={{ base: 1, xl: 2 }} gap={5}>
                    <CustomerInfo singleCustomer={singleCustomer} isLoading={isLoading} copyTextToClipBoard={copyTextToClipBoard} />
                    <CustomerDetailsTable tableData={singleCustomerOrders} />
                </SimpleGrid>
            </Box>
        </Box>
    );
};

// components/CustomerInfo.tsx
export const CustomerInfo = ({ singleCustomer, copyTextToClipBoard }: any) => {
    const formatDate = useDate();
    const formatCurrency = useCurrency();

    return (
        <Box mb={4} color={`purple.300`}>
            <Text as={`h6`}>{singleCustomer?.name}</Text>

            <Flex
                flexDir={{ base: `column`, md: `row` }}
                borderBlock={`1px solid #EFEFEF`}
                gap={8}
                py={8}
                alignItems={{ base: `flex-start`, xl: `center` }}
                justifyContent={{ base: `flex-start`, xl: `space-between` }}
                my={2}
            >
                <Stack gap={2}>
                    <Text fontWeight={600}>Email Address</Text>

                    <Flex gap={2} alignItems={`center`}>
                        <Link target="_blank" to={singleCustomer?.email}>
                            <Text>{singleCustomer?.email}</Text>
                        </Link>
                        <Box _hover={{ color: `purple.200` }}>
                            <Icon cursor={`pointer`} onClick={copyTextToClipBoard} color="grey" icon={`ph:copy-simple-light`} />
                        </Box>
                    </Flex>
                </Stack>
                <Stack gap={2}>
                    <Text fontWeight={600}>Joined</Text>

                    <Text>{formatDate(singleCustomer?.joined)}</Text>
                </Stack>
            </Flex>
            <SimpleGrid gap={4} columns={{ base: 1, sm: 2 }}>
                <Box>
                    <DataWidgetCard showIcon={false} title={'Total Order'} value={singleCustomer.total_order} />
                </Box>

                <Box>
                    <DataWidgetCard showIcon={false} title={'Total Transaction'} value={formatCurrency(singleCustomer.total_transactions)} />
                </Box>
            </SimpleGrid>
        </Box>
    );
};

// components/CopyTextFeedback.tsx
export const CopyTextFeedback = ({ textToCopy }: CopyTextFeedbackProps) => {
    const { toast, toastIdRef, close } = useToastAction();

    const copyTextToClipBoard = () => {
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor={`purple.200`}
                            message={` You have successfully copied your product link`}
                            title="Product link Copied!"
                            icon={toastimg}
                            bgColor={undefined}
                            color={undefined}
                            handleClose={close}
                        />
                    ),
                });
            })
            .catch((error) => {
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            message={`Failed to copy.`}
                            title="Error!"
                            icon={errorImg}
                            color={`red.600`}
                            btnColor={`red.600`}
                            bgColor={undefined}
                            handleClose={close}
                        />
                    ),
                });
            });
    };

    return { copyTextToClipBoard };
};

const CustomerDetailsSkeleton = () => {
    return (
        <SimpleGrid my={10} gap={4} columns={{ base: 1, sm: 2 }}>
            <Box>
                <Flex justify="space-between" mb={6}>
                    <HStack spacing={4}>
                        {/* <SkeletonText width="140px" noOfLines={1} /> */}
                        <Skeleton height="20px" width="200px" />
                    </HStack>
                </Flex>
                <Skeleton height="8rem" width="100%" />
                <SimpleGrid mt={5} gap={4} columns={{ base: 1, sm: 2, md: 3 }}>
                    <Skeleton height="5rem" width="100%" />
                    <Skeleton height="5rem" width="100%" />
                    <Skeleton height="5rem" width="100%" />
                </SimpleGrid>
            </Box>
            <VStack gap={0} justifyContent={`space-between`}>
                <Skeleton height="40px" width="100%" />
                <Skeleton height="40px" width="100%" />
                <Skeleton height="40px" width="100%" />
                <Skeleton height="40px" width="100%" />
                <Skeleton height="40px" width="100%" />
                <Skeleton height="40px" width="100%" />
            </VStack>
        </SimpleGrid>
    );
};
