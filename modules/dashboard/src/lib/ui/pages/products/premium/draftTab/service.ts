import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetDraftProductsMutation, selectDraftProducts } from '@productize/redux';

export const useDraftProducts = () => {
    const [getDraftProducts, getDraftProductsStatus] = useGetDraftProductsMutation();
    const draftProducts = useSelector(selectDraftProducts);

    const fetchDraftProducts = useCallback(async () => {
        try {
            await getDraftProducts(null).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getDraftProducts]);

    useEffect(() => {
        fetchDraftProducts();
    }, [fetchDraftProducts]);

    return {
        draftProducts,
        getDraftProductsStatus,
    };
};
