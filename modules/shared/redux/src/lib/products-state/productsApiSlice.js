/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from '../apiSlice';
import {
    setAllProduct,
    setDeletedProduct,
    setDraftProduct,
    setLiveProduct,
    setProductsAnalytics,
    setSingleProduct,
    setSingleProductCustomers,
    // setSearchedProducts,
} from './productsSlice';

const constructURL = (credentials, filteredLink, status) => {
    if (credentials && !credentials?.link) {
        return filteredLink;
    } else if (credentials?.link) {
        return credentials?.link;
    } else {
        return `/products/users?status=${status}`;
    }
};

// productize-api.techstudio.academy/api/products
export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.mutation({
            query: (credentials) => ({
                url: constructURL(
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
                    return;
                }
            },
        }),
        getLiveProducts: builder.mutation({
            query: (credentials) => ({
                url: constructURL(
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
                    return;
                }
            },
        }),
        getDraftProducts: builder.mutation({
            query: (credentials) => ({
                url: constructURL(
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
                    return;
                }
            },
        }),
        getDeletedProducts: builder.mutation({
            query: (credentials) => ({
                url: constructURL(
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
                    return;
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
                    const res = await queryFulfilled;
                    dispatch(
                        setProductsAnalytics({
                            productsAnalytics: res.data.data,
                        })
                    );
                } catch (error) {
                    return;
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
                            product: data.data,
                        })
                    );
                } catch (error) {
                    return;
                }
            },
        }),
        getCustomersOfSingleProduct: builder.mutation({
            query: (credentials) => ({
                url: `/orders/products/${credentials.productID}`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(
                        setSingleProductCustomers({
                            customers: data.data,
                        })
                    );
                } catch (error) {
                    return;
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
                url: `/products/download`,
                method: 'GET',
            }),
        }),
        downloadedProducts: builder.mutation({
            query: (credentials) => ({
                url: `/products/purchased`,
                method: 'GET',
            }),
        }),
        searchProducts: builder.mutation({
            query: (credentials) => ({
                url: `/products/search`,
                method: 'POST',
                body: { ...credentials },
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
    useGetCustomersOfSingleProductMutation,
    useSearchProductsMutation,
} = productsApiSlice;
