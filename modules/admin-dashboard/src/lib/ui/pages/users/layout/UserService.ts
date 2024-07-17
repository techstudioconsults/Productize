import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetUserAnalyticsMutation, selectUserAnalytics } from '@productize/redux';
import { useCurrency } from '@productize/hooks';

export const useAllProducts = () => {
    const [getUserAnalytics, getUserAnalyticsStatus] = useGetUserAnalyticsMutation();
    const userAnalytics = useSelector(selectUserAnalytics);
    const formatCurrency = useCurrency();

    const fetchAllProducts = useCallback(async () => {
        try {
            await getUserAnalytics(null).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getUserAnalytics]);

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    return {
        userAnalytics,
        getUserAnalyticsStatus,
        formatCurrency,
    };
};
