import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetDeletedProductsMutation, selectDeletedProducts } from '@productize/redux';

export const useDeletedProducts = () => {
    const [isLoading, setLoading] = useState(true);
    const [getDeletedProducts, getDeletedProductsStatus] = useGetDeletedProductsMutation();
    const deletedProducts = useSelector(selectDeletedProducts);

    const fetchDeletedProducts = useCallback(async () => {
        try {
            const res = await getDeletedProducts(null).unwrap();
            if (res.data) {
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }, [getDeletedProducts]);

    useEffect(() => {
        fetchDeletedProducts();
    }, [fetchDeletedProducts]);

    return {
        deletedProducts,
        getDeletedProductsStatus,
        isLoading,
    };
};
