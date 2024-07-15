import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetDraftProductsMutation, selectDraftProducts } from '@productize/redux';

export const useDraftProducts = () => {
    const [isLoading, setLoading] = useState(true);
    const [getDraftProducts, getDraftProductsStatus] = useGetDraftProductsMutation();
    const draftProducts = useSelector(selectDraftProducts);

    const fetchDraftProducts = useCallback(async () => {
        try {
            const res = await getDraftProducts(null).unwrap();
            if (res.data) {
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }, [getDraftProducts]);

    useEffect(() => {
        fetchDraftProducts();
    }, [fetchDraftProducts]);

    return {
        draftProducts,
        getDraftProductsStatus,
        isLoading,
    };
};
