import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetLiveProductsMutation, selectLiveProducts } from '@productize/redux';

export const useLiveProducts = () => {
    const [isLoading, setLoading] = useState(true);
    const [getLiveProducts, getLiveProductsStatus] = useGetLiveProductsMutation();
    const liveProducts = useSelector(selectLiveProducts);

    const fetchLiveProducts = useCallback(async () => {
        try {
            const res = await getLiveProducts(null).unwrap();
            if (res.data) {
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }, [getLiveProducts]);

    useEffect(() => {
        fetchLiveProducts();
    }, [fetchLiveProducts]);

    return {
        liveProducts,
        getLiveProductsStatus,
        isLoading,
    };
};
