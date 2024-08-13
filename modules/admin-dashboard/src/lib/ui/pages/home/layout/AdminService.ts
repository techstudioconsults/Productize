import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetHomeAnalyticsMutation, selectHomeAnalytics } from '@productize/redux';
import { useCurrency } from '@productize/hooks';

export const useAllProducts = () => {
    const [getHomeAnalytics,getHomeAnalyticsStatus] = useGetHomeAnalyticsMutation();
    const orderAnalytics = useSelector(selectHomeAnalytics);
    const formatCurrency = useCurrency();

    const fetchAllProducts = useCallback(async () => {
        try {
            await getHomeAnalytics(null).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getHomeAnalytics]);

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    return {
        orderAnalytics,
        getHomeAnalyticsStatus,
        formatCurrency,
    };
};
