import { useCallback, useEffect } from 'react';
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
    const { productID } = useParams();
    const [getSingleProduct, singleProductStatus] = useGetSingleProductDetailsMutation();
    const [getSingleProductCustomers, singleProductCustomersStatus] = useGetCustomersOfSingleProductMutation();
    const [deleteProductSoftly, deleteStatus] = useDeleteProductSoftlyMutation();
    const [updateProductStatus, updateProductStatusStatus] = useUpdateProductStatusMutation();
    const product = useSelector(selectSingleProduct);
    const user = useSelector(selectCurrentUser);

    const fetchProductDetails = useCallback(async () => {
        try {
            await getSingleProduct({ productID }).unwrap();
            await getSingleProductCustomers({ productID }).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [getSingleProduct, getSingleProductCustomers, productID]);

    useEffect(() => {
        fetchProductDetails();
    }, [product?.slug, fetchProductDetails]);

    return {
        product,
        user,
        singleProductStatus,
        singleProductCustomersStatus,
        deleteProductSoftly,
        deleteStatus,
        updateProductStatus,
        updateProductStatusStatus,
        productID,
    };
};
