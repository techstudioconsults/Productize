import { DashboardBanner } from '../../../DashboardBanner';
import PayoutPremiumView from '../premium/PayoutPremiumView';
import { Box, Flex, Grid, HStack, SimpleGrid, Skeleton, VStack } from '@chakra-ui/react';
import { PayoutTableControl } from '../components/PayoutTableControls';
import { DataWidgetCard } from '../../../DataWidgetCard';
import { useCurrency } from '@productize/hooks';
import { selectPayoutStats, useGetPayoutStatsMutation } from '@productize/redux';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

const PremiumLayout = () => {
    const [isLoading, setLoading] = useState(true);
    const [getPayoutStats] = useGetPayoutStatsMutation();
    const payouts = useSelector(selectPayoutStats);
    const formatCurrency = useCurrency();

    // const getPendingAmount = (totalEarning, pendingPayments) => {
    //     const totalPayout = pendingPayments.reduce((acc, payment) => acc + payment.amount, 0);
    //     return Math.min(totalPayout, totalEarning);
    // };

    const showAllPayouts = useCallback(async () => {
        try {
            const res = await getPayoutStats(null).unwrap();
            if (res.data) {
                setLoading(false);
            }
        } catch (error) {
            return error;
        }
    }, [getPayoutStats]);

    useEffect(() => {
        showAllPayouts();
    }, [showAllPayouts]);

    if (isLoading) {
        return <PayoutSkeleton />;
    }

    return (
        <Box my={8}>
            <DashboardBanner
                padding={{ base: 4, md: 8 }}
                img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951011/productize/Layer_1_3_hn7gd9_kdxcwg.png`}
                bgImg={``}
                title={'Grow communities and get paid.'}
                desc={'Make as much as ₦10,000 sale for your first withdraw'}
                px={8}
            />
            <Box my={8}>
                <Box my={10}>
                    <PayoutTableControl showRefreshBtn={undefined} balance={payouts?.available_earnings} />
                    <SimpleGrid gap={4} my={4} columns={{ base: 1, sm: 2, lg: 4 }}>
                        <Skeleton isLoaded={true}>
                            <Box>
                                <DataWidgetCard showIcon={false} title={'Total Earnings'} value={formatCurrency(payouts?.total_earnings)} />
                            </Box>
                        </Skeleton>
                        <Skeleton isLoaded={true}>
                            <Box>
                                <DataWidgetCard showIcon={false} title={'Withdrawn Earnings'} value={formatCurrency(payouts?.withdrawn_earnings)} />
                            </Box>
                        </Skeleton>
                        <Skeleton isLoaded={true}>
                            <Box>
                                <DataWidgetCard showIcon={false} title={'Pending'} value={formatCurrency(payouts?.pending)} />
                            </Box>
                        </Skeleton>
                        <Skeleton isLoaded={true}>
                            <Box>
                                <DataWidgetCard showIcon={false} title={'Available Earnings'} value={formatCurrency(payouts?.available_earnings)} />
                            </Box>
                        </Skeleton>
                    </SimpleGrid>
                </Box>
                <PayoutPremiumView />
            </Box>
        </Box>
    );
};

export default PremiumLayout;

export const PayoutSkeleton = () => {
    return (
        <Box p={5}>
            <Skeleton height="10rem" width="100%" />
            <Flex mt={10} justify="space-between" mb={6}>
                <HStack spacing={4}>
                    <Skeleton height="40px" width="240px" />
                    <Skeleton height="40px" width="120px" />
                    <Skeleton height="40px" width="40px" />
                </HStack>
                <HStack spacing={4}>
                    <Skeleton height="40px" width="120px" />
                </HStack>
            </Flex>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={6}>
                <Skeleton p={5} height={`6rem`} borderWidth="1px" />
                <Skeleton p={5} height={`6rem`} borderWidth="1px" />
                <Skeleton p={5} height={`6rem`} borderWidth="1px" />
                <Skeleton p={5} height={`6rem`} borderWidth="1px" />
            </Grid>
            <VStack>
                <Skeleton height="40px" width="100%" />
                <Skeleton height="40px" width="100%" />
                <Skeleton height="40px" width="100%" />
                <Skeleton height="40px" width="100%" />
                <Skeleton height="40px" width="100%" />
            </VStack>
        </Box>
    );
};
