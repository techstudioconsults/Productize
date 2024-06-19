import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetLiveProductsMutation, selectLiveProducts } from '@productize/redux';

export const useLiveProducts = () => {
    const [getLiveProducts, getLiveProductsStatus] = useGetLiveProductsMutation();
    const liveProducts = useSelector(selectLiveProducts);

    const fetchLiveProducts = useCallback(async () => {
        try {
            await getLiveProducts(null).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getLiveProducts]);

    useEffect(() => {
        fetchLiveProducts();
    }, [fetchLiveProducts]);

    return {
        liveProducts,
        getLiveProductsStatus,
    };
};
