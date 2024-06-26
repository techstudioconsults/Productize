/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Card, Flex, Image, SimpleGrid, Skeleton, Text, VStack } from '@chakra-ui/react';
import arrowLeft from '@icons/Property_2_Arrow-left_kafkjg.svg';
import { useNavigate } from 'react-router-dom';
import { BillingCycleTable } from './BillingCycleTable';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCurrency, useDate } from '@productize/hooks';
import { selectBillingHistory, useBillingHistoryMutation, useManageSubscriptionMutation } from '@productize/redux';
import { PricingModal, SpinnerComponentSmall } from '@productize/ui';

export const BillingCycle = () => {
    const navigate = useNavigate();
    const formatCurrency = useCurrency();
    const formatDate = useDate();
    const [isLoading, setLoading] = useState(true);
    const [billingHistory] = useBillingHistoryMutation();
    const [manageSubscription, manageSubscriptionStatus] = useManageSubscriptionMutation();
    const billingHistoryData = useSelector(selectBillingHistory);
    const [subID, setSubID] = useState();

    const showBillingHistory = useCallback(async () => {
        try {
            const res = await billingHistory(null).unwrap();
            if (res) {
                setSubID(res.id);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            return;
        }
    }, [billingHistory]);

    useEffect(() => {
        showBillingHistory();
    }, [showBillingHistory]);

    const handlePlanDeactivation = async () => {
        try {
            const res = await manageSubscription({ subID }).unwrap();
            if (res) {
                window.location.href = res.data.link;
            }
        } catch (error) {
            return;
        }
    };

    return (
        <Box my={5}>
            <Flex cursor={`pointer`} gap={8} w={`fit-content`} alignItems={`center`} onClick={() => navigate(-1)}>
                <Box>
                    <Image src={arrowLeft} />
                </Box>
                <Text as={`h6`}>Billing Cycle</Text>
            </Flex>
            {/* billing summary */}
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={5} my={5}>
                <Skeleton borderRadius={8} isLoaded={!isLoading}>
                    <Box>
                        <Card variant={`outline`} p={5} gap={3}>
                            <Text>Renewal Date</Text>
                            <Flex alignItems={`center`} justifyContent={`space-between`}>
                                <Text as={`h5`}>
                                    {
                                        billingHistoryData?.renewal_date ? formatDate(billingHistoryData?.renewal_date) : `Trial ended`
                                        // `1 Sep, 2023`
                                    }
                                </Text>

                                {manageSubscriptionStatus.isLoading ? (
                                    <SpinnerComponentSmall />
                                ) : (
                                    <Text cursor={`pointer`} onClick={handlePlanDeactivation} color={`red.200`}>
                                        Deactivate Plan
                                    </Text>
                                )}
                            </Flex>
                        </Card>
                    </Box>
                </Skeleton>
                <Skeleton borderRadius={8} isLoaded={!isLoading}>
                    <Box>
                        <Card variant={`outline`} p={5} gap={3}>
                            <Text>Currently</Text>
                            <Flex alignItems={`center`} justifyContent={`space-between`}>
                                <Text as={`h5`}>
                                    {
                                        billingHistoryData?.plan ? billingHistoryData?.plan : `Free`
                                        // `Free Trial`
                                    }
                                </Text>
                                <PricingModal bgColor={`transparent`} textColor={`purple.200`} />
                            </Flex>
                        </Card>
                    </Box>
                </Skeleton>
                <Skeleton borderRadius={8} isLoaded={!isLoading}>
                    <Box>
                        <Card variant={`outline`} p={5} gap={3}>
                            <Text>Billing Total</Text>
                            <Flex alignItems={`center`} gap={1}>
                                <Text as={`h5`}>{formatCurrency(billingHistoryData?.billing_total)}</Text>
                                <Text color={`grey.300`}>/Per Month</Text>
                            </Flex>
                        </Card>
                    </Box>
                </Skeleton>
            </SimpleGrid>
            {/* billing table */}
            <Box my={10}>
                {isLoading ? (
                    <VStack gap={4}>
                        <Skeleton borderRadius={8} height={`40px`} width={`100%`} />
                        <Skeleton borderRadius={8} height={`40px`} width={`100%`} />
                    </VStack>
                ) : (
                    <BillingCycleTable tableData={billingHistoryData?.plans} />
                )}
            </Box>
        </Box>
    );
};

export default BillingCycle;
