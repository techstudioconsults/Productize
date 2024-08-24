/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from '../apiSlice';
import {
    setProduct,
    setAllProduct,
    setTopAdminProduct,
    setDeletedProduct,
    setDraftProduct,
    setLiveProduct,
    setProductsAnalytics,
    setSingleProduct,
    setSingleProductCustomers,
    setRevenueAnalytics,
    setAllComplaints,
    setSingleComplaints,
    setAdminProductsAnalytics,
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
const constructURL1 = (credentials, filteredLink, status) => {
    if (credentials && !credentials?.link) {
        return filteredLink;
    } else if (credentials?.link) {
        return credentials?.link;
    } else {
        return `/products?status=${status}`;
    }
};
const constructURL2 = (credentials, filteredLink, status) => {
    if (credentials && !credentials?.link) {
        return filteredLink;
    } else if (credentials?.link) {
        return credentials?.link;
    } else {
        return `/complaints?status=${status}`;
    }
};

const constructURL3 = (credentials, filteredLink) => {
    if (credentials && !credentials?.link) {
        return filteredLink;
    } else if (credentials?.link) {
        return credentials?.link;
    } else {
        return `/products/top-products/admin`;
    }
};

// productize-api.techstudio.academy/api/products
export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.mutation({
            query: (credentials) => ({
                url: constructURL1(
                    credentials,
                    `/products?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}&status=${
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
                        setProduct({
                            products: data.data,
                            paginationMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (error) {
                    return;
                }
            },
        }),
        getAllComplaints: builder.mutation({
            query: (credentials) => ({
                url: constructURL2(
                    credentials,
                    `/complaints?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}&status=${
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
                        setAllComplaints({
                            allComplaints: data.data,
                            complaintsMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (error) {
                    return;
                }
            },
        }),
        getRevenueAnalytics: builder.mutation({
            query: () => ({
                url: `/revenues/stats`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    dispatch(
                        setRevenueAnalytics({
                            revenueAnalytics: res.data.data,
                        })
                    );
                } catch (error) {
                    return;
                }
            },
        }),
        getTopAdminProducts: builder.mutation({
            query: (credentials) => ({
                url: constructURL3(
                    credentials,
                    `/products/top-products/admin?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}`
                ),
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setTopAdminProduct({
                            topProducts: data.data,
                            topProductsMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (error) {
                    return;
                }
            },
        }),
        getAllProducts: builder.mutation({
            query: (credentials) => ({
                url: constructURL(
                    credentials,
                    `/product/users?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}&status=${
                        credentials?.status ? credentials?.status : ''
                    }`,
                    ''
                ),
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
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
                    console.log(data);
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
        getAdminProductAnalytics: builder.mutation({
            query: () => ({
                url: `/products/stats/admin`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    dispatch(
                        setAdminProductsAnalytics({
                            productsAdminAnalytics: res.data.data,
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
        getSingleComplaints: builder.mutation({
            query: (credentials) => ({
                url: `/complaints/${credentials?.complaintID}`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setSingleComplaints({
                            complaint: data.data,
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
        singleDownloadedProduct: builder.mutation({
            query: (credentials) => ({
                url: `/skillSellings/products/${credentials.productID}`,
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
    useGetProductsMutation,
    useGetTopAdminProductsMutation,
    useGetAllProductsMutation,
    useGetDeletedProductsMutation,
    useGetDraftProductsMutation,
    useGetLiveProductsMutation,
    useGetProductAnalyticsMutation,
    useGetAdminProductAnalyticsMutation,
    useGetSingleProductDetailsMutation,
    useUpdateProductStatusMutation,
    useDeleteProductSoftlyMutation,
    useDeleteProductPermanentlyMutation,
    useRestoreSoftDeletedProductMutation,
    useDownloadProductsListMutation,
    useDownloadedProductsMutation,
    useGetCustomersOfSingleProductMutation,
    useSearchProductsMutation,
    useGetRevenueAnalyticsMutation,
    useGetAllComplaintsMutation,
    useGetSingleComplaintsMutation,
    useSingleDownloadedProductMutation,
} = productsApiSlice;
