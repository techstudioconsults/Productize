import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    selectSingleProduct,
    selectCurrentUser,
    useGetSingleProductDetailsMutation,
    useGetCustomersOfSingleProductMutation,
    useDeleteProductSoftlyMutation,
    useUpdateProductStatusMutation,
} from '@productize/redux';

export const useProductDetails = () => {
    const [isLoading, setLoading] = useState(true);
    const { productID } = useParams();
    const [getSingleProduct] = useGetSingleProductDetailsMutation();
    const [getSingleProductCustomers] = useGetCustomersOfSingleProductMutation();
    const [deleteProductSoftly, deleteStatus] = useDeleteProductSoftlyMutation();
    const [updateProductStatus, updateProductStatusStatus] = useUpdateProductStatusMutation();
    const product = useSelector(selectSingleProduct);
    const user = useSelector(selectCurrentUser);

    const fetchProductDetails = useCallback(async () => {
        try {
            const res = await getSingleProduct({ productID }).unwrap();
            const resCus = await getSingleProductCustomers({ productID }).unwrap();

            if (res && resCus) {
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            return;
        }
    }, [getSingleProduct, getSingleProductCustomers, productID]);

    useEffect(() => {
        fetchProductDetails();
    }, [product?.slug, fetchProductDetails]);

    return {
        product,
        user,
        isLoading,
        deleteProductSoftly,
        deleteStatus,
        updateProductStatus,
        updateProductStatusStatus,
        productID,
    };
};
