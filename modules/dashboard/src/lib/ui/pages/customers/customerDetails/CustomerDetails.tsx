/* eslint-disable @typescript-eslint/no-explicit-any */
// components/CustomersDetails.tsx
import { Box, Flex, Image, SimpleGrid, Skeleton, SkeletonText, Stack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import arrowLeft from '@icons/Property_2_Arrow-left_kafkjg.svg';
import { CustomerDetailsTable } from '../customerTable/CustomerDetailsTable';
import { OnBoardingLoader, ToastFeedback, useToastAction } from '@productize/ui';
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
                    <Box>{isLoading ? <OnBoardingLoader /> : <CustomerDetailsTable tableData={singleCustomerOrders} />}</Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
};

// components/CustomerInfo.tsx
export const CustomerInfo = ({ singleCustomer, isLoading, copyTextToClipBoard }: any) => {
    const formatDate = useDate();
    const formatCurrency = useCurrency();

    return (
        <Box mb={4} color={`purple.300`}>
            <SkeletonText isLoaded={!isLoading} noOfLines={1} w={`fit-content`}>
                <Text as={`h6`}>{singleCustomer?.name}</Text>
            </SkeletonText>
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
                    <SkeletonText isLoaded={!isLoading} noOfLines={1} w={`fit-content`}>
                        <Flex gap={2} alignItems={`center`}>
                            <Link target="_blank" to={singleCustomer?.email}>
                                <Text>{singleCustomer?.email}</Text>
                            </Link>
                            <Box _hover={{ color: `purple.200` }}>
                                <Icon cursor={`pointer`} onClick={copyTextToClipBoard} color="grey" icon={`ph:copy-simple-light`} />
                            </Box>
                        </Flex>
                    </SkeletonText>
                </Stack>
                <Stack gap={2}>
                    <Text fontWeight={600}>Joined</Text>
                    <SkeletonText isLoaded={!isLoading} noOfLines={1} w={`10rem`}>
                        <Text>{formatDate(singleCustomer?.joined)}</Text>
                    </SkeletonText>
                </Stack>
            </Flex>
            <SimpleGrid gap={4} columns={{ base: 1, sm: 2 }}>
                <Skeleton isLoaded={!isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title={'Total Order'} value={singleCustomer.total_order} />
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={!isLoading}>
                    <Box>
                        <DataWidgetCard showIcon={false} title={'Total Transaction'} value={formatCurrency(singleCustomer.total_transactions)} />
                    </Box>
                </Skeleton>
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
