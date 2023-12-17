/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from "../apiSlice";
import { setAllProduct, setDeletedProduct, setDraftProduct, setLiveProduct, setProductsAnalytics, setSingleProduct } from "./productsSlice";

//productize-api.techstudio.academy/api/products
export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.mutation({
            query: (credentials) => ({
                url: credentials
                    ? `/products/users?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}&status=${
                          credentials?.status ? credentials?.status : ``
                      }`
                    : `/products/users`,
                method: "GET",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setAllProduct({
                            products: data.data,
                            productsMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),
        getLiveProducts: builder.mutation({
            query: () => ({
                url: `/products/users?status=published`,
                method: "GET",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setLiveProduct({
                            products: data.data,
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),
        getDraftProducts: builder.mutation({
            query: () => ({
                url: `/products/users?status=draft`,
                method: "GET",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setDraftProduct({
                            products: data.data,
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),
        getDeletedProducts: builder.mutation({
            query: () => ({
                url: `/products/users?status=deleted`,
                method: "GET",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setDeletedProduct({
                            products: data.data,
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
                method: "GET",
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
                method: "GET",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
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
                method: "PATCH",
            }),
        }),
        deleteProductSoftly: builder.mutation({
            query: (credentials) => ({
                url: `/products/${credentials.productID}`,
                method: "DELETE",
            }),
        }),
        deleteProductPermanently: builder.mutation({
            query: (credentials) => ({
                url: `/products/${credentials.productID}/force`,
                method: "DELETE",
            }),
        }),
        restoreSoftDeletedProduct: builder.mutation({
            query: (credentials) => ({
                url: `/products/${credentials.productID}/restore`,
                method: "GET",
            }),
        }),
        downloadProductsList: builder.mutation({
            query: (credentials) => ({
                url: `products/download?page=1&format=csv`,
                method: "GET",
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
} = productsApiSlice;
