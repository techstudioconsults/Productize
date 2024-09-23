import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetAdminProductAnalyticsMutation, selectAdminProductAnalytics, useGetProductAdminAnalyticsMutation, selectProductAdminAnalytics } from '@productize/redux';
import { useCurrency } from '@productize/hooks';

export const useAllProducts = () => {
    // const [getAdminProductsAnalytics, getAdminProductsAnalyticsStatus] = useGetAdminProductAnalyticsMutation();
    const [getProductAdminAnalytics, getProductAdminAnalyticsStatus] = useGetProductAdminAnalyticsMutation()
    // const adminProductsAnalytics = useSelector(selectAdminProductAnalytics);
    const productAdminAnalytics = useSelector(selectProductAdminAnalytics)
    const formatCurrency = useCurrency();

    const fetchAllProducts = useCallback(async () => {
        try {
            await getProductAdminAnalytics(null).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getProductAdminAnalytics]);

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    return {
        productAdminAnalytics,
        getProductAdminAnalyticsStatus,
        formatCurrency,
    };
};
