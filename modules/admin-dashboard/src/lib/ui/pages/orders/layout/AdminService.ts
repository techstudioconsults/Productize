import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetOrderAnalyticsMutation, selectOrderAnalytics } from '@productize/redux';
import { useCurrency } from '@productize/hooks';

export const useAllProducts = () => {
    const [getOrderAnalytics, getOrderAnalyticsStatus] = useGetOrderAnalyticsMutation();
    const orderAnalytics = useSelector(selectOrderAnalytics);
    const formatCurrency = useCurrency();

    const fetchAllProducts = useCallback(async () => {
        try {
            await getOrderAnalytics(null).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getOrderAnalytics]);

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    return {
        orderAnalytics,
        getOrderAnalyticsStatus,
        formatCurrency,
    };
};
