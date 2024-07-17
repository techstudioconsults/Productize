import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetProductAnalyticsMutation, selectProductAnalytics, useGetUserAnalyticsMutation, selectUserAnalytics } from '@productize/redux';
import { useCurrency } from '@productize/hooks';

export const useAllProducts = () => {
    const [getProductsAnalytics, getProductsAnalyticsStatus] = useGetProductAnalyticsMutation();
    const [getUserAnalytics, getUserAnalyticsStatus] = useGetUserAnalyticsMutation();
    const userAnalytics = useSelector(selectUserAnalytics);
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

    const fetchAllUser = useCallback(async () => {
        try {
            await getUserAnalytics(null).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getUserAnalytics]);

    useEffect(() => {
        fetchAllUser();
    }, [fetchAllUser]);

    return {
        userAnalytics,
        getUserAnalyticsStatus,
        productsAnalytics,
        getProductsAnalyticsStatus,
        formatCurrency,
    };
};
