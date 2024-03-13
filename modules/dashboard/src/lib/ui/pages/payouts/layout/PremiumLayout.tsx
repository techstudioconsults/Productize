import { DashboardBanner } from '../../../DashboardBanner';
import PayoutPremiumView from '../premium/PayoutPremiumView';
import { Box, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { PayoutTableControl } from '../components/PayoutTableControls';
import { DataWidgetCard } from '../../../DataWidgetCard';
import { useCurrency } from '@productize/hooks';
import { selectPayoutStats, useGetPayoutStatsMutation } from '@productize/redux';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { OnBoardingLoader } from '@productize/ui';

const PremiumLayout = () => {
    const [getPayoutStats, getPayoutsStatus] = useGetPayoutStatsMutation();
    const payouts = useSelector(selectPayoutStats);
    const formatCurrency = useCurrency();

    const showAllOrders = useCallback(async () => {
        try {
            await getPayoutStats(null).unwrap();
        } catch (error) {
            return error;
        }
    }, [getPayoutStats]);

    useEffect(() => {
        showAllOrders();
    }, [showAllOrders]);

    if (getPayoutsStatus.isLoading) {
        return <OnBoardingLoader />;
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
                                <DataWidgetCard showIcon={false} title={'Avialable Earnings'} value={formatCurrency(payouts?.available_earnings)} />
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
