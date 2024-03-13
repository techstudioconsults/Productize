/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from '../apiSlice';
import { setAllProduct, setDeletedProduct, setDraftProduct, setLiveProduct, setProductsAnalytics, setSingleProduct } from './productsSlice';

const checkCredentials = (credentials, filteredLink, status) => {
    if (credentials && !credentials?.link) {
        return filteredLink;
    } else if (credentials?.link) {
        return credentials?.link;
    } else {
        return `/products/users?status=${status}`;
    }
};

//productize-api.techstudio.academy/api/products
export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.mutation({
            query: (credentials) => ({
                url: checkCredentials(
                    credentials,
                    `/products/users?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}&status=${
                        credentials?.status ? credentials?.status : ''
                    }`,
                    ''
                ),
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setAllProduct({
                            products: data.data,
                            paginationMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),
        getLiveProducts: builder.mutation({
            query: (credentials) => ({
                url: checkCredentials(
                    credentials,
                    `/products/users?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}&status=published`,
                    `published`
                ),
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(
                        setLiveProduct({
                            products: data.data,
                            paginationMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),
        getDraftProducts: builder.mutation({
            query: (credentials) => ({
                url: checkCredentials(
                    credentials,
                    `/products/users?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}&status=draft`,
                    `draft`
                ),
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setDraftProduct({
                            products: data.data,
                            paginationMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),
        getDeletedProducts: builder.mutation({
            query: (credentials) => ({
                url: checkCredentials(
                    credentials,
                    `/products/users?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}&status=deleted`,
                    `deleted`
                ),
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setDeletedProduct({
                            products: data.data,
                            paginationMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),
        getProductAnalytics: builder.mutation({
            query: () => ({
                url: `/products/analytics`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(
                        setProductsAnalytics({
                            productsAnalytics: data.data,
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),
        getSingleProductDetails: builder.mutation({
            query: (credentials) => ({
                url: `/products/${credentials?.productID}`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(
                        setSingleProduct({
                            product: data,
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),
        updateProductStatus: builder.mutation({
            query: (credentials) => ({
                url: `/products/${credentials.productID}/publish`,
                method: 'PATCH',
            }),
        }),
        deleteProductSoftly: builder.mutation({
            query: (credentials) => ({
                url: `/products/${credentials.productID}`,
                method: 'DELETE',
            }),
        }),
        deleteProductPermanently: builder.mutation({
            query: (credentials) => ({
                url: `/products/${credentials.productID}/force`,
                method: 'DELETE',
            }),
        }),
        restoreSoftDeletedProduct: builder.mutation({
            query: (credentials) => ({
                url: `/products/${credentials.productID}/restore`,
                method: 'GET',
            }),
        }),
        downloadProductsList: builder.mutation({
            query: (credentials) => ({
                url: `products/download?page=1&format=csv`,
                method: 'GET',
            }),
        }),
        downloadedProducts: builder.mutation({
            query: (credentials) => ({
                url: `/products/downloads`,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetAllProductsMutation,
    useGetDeletedProductsMutation,
    useGetDraftProductsMutation,
    useGetLiveProductsMutation,
    useGetProductAnalyticsMutation,
    useGetSingleProductDetailsMutation,
    useUpdateProductStatusMutation,
    useDeleteProductSoftlyMutation,
    useDeleteProductPermanentlyMutation,
    useRestoreSoftDeletedProductMutation,
    useDownloadProductsListMutation,
    useDownloadedProductsMutation,
} = productsApiSlice;
