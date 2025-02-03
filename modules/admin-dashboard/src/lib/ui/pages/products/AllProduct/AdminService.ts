import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetAdminProductAnalyticsMutation, selectAdminProductAnalytics } from '@productize/redux';
import { useCurrency } from '@productize/hooks';

export const useAllProducts = () => {
    const [getAdminProductsAnalytics, getAdminProductsAnalyticsStatus] = useGetAdminProductAnalyticsMutation();
    const adminProductsAnalytics = useSelector(selectAdminProductAnalytics);
    const formatCurrency = useCurrency();

    const fetchAllProducts = useCallback(async () => {
        try {
            await getAdminProductsAnalytics(null).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getAdminProductsAnalytics]);

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    return {
        adminProductsAnalytics,
        getAdminProductsAnalyticsStatus,
        formatCurrency,
    };
};
