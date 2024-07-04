import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetProductAnalyticsMutation, selectProductAnalytics } from '@productize/redux';
import { useCurrency } from '@productize/hooks';

export const useAllProducts = () => {
    const [getProductsAnalytics, getProductsAnalyticsStatus] = useGetProductAnalyticsMutation();
    const productsAnalytics = useSelector(selectProductAnalytics);
    const formatCurrency = useCurrency();

    const fetchAllProducts = useCallback(async () => {
        try {
            await getProductsAnalytics(null).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getProductsAnalytics]);

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    return {
        productsAnalytics,
        getProductsAnalyticsStatus,
        formatCurrency,
    };
};
