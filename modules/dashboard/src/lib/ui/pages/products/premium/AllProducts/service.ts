import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetProductAnalyticsMutation, selectProductAnalytics } from '@productize/redux';
import { useCurrency } from '@productize/hooks';

export const useAllProducts = () => {
    const [isLoading, setLoading] = useState(true);
    const [getProductsAnalytics] = useGetProductAnalyticsMutation();
    const productsAnalytics = useSelector(selectProductAnalytics);
    const formatCurrency = useCurrency();

    const fetchAllProducts = useCallback(async () => {
        try {
            const res = await getProductsAnalytics(null).unwrap();

            if (res.data) {
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }, [getProductsAnalytics]);

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    return {
        productsAnalytics,
        formatCurrency,
        isLoading,
    };
};
