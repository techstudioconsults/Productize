import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetDeletedProductsMutation, selectDeletedProducts } from '@productize/redux';

export const useDeletedProducts = () => {
    const [getDeletedProducts, getDeletedProductsStatus] = useGetDeletedProductsMutation();
    const deletedProducts = useSelector(selectDeletedProducts);

    const fetchDeletedProducts = useCallback(async () => {
        try {
            await getDeletedProducts(null).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getDeletedProducts]);

    useEffect(() => {
        fetchDeletedProducts();
    }, [fetchDeletedProducts]);

    return {
        deletedProducts,
        getDeletedProductsStatus,
    };
};
