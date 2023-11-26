/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from "../apiSlice";
import { setAllProduct_EXTERNAL, setSingleProduct_EXTERNAL } from "./appSlice";

//productize-api.techstudio.academy/api/products
export const appApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts_EXTERNAL: builder.mutation({
            query: (credentials) => ({
                url: `/products`,
                method: "GET",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setAllProduct_EXTERNAL({
                            products: data.data,
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),
        getSingleProduct_EXTERNAL: builder.mutation({
            query: (credentials) => ({
                // generate a random token value instead of using a hardcoded string
                url: `/products/${credentials.productID}/oiuu8989b9u9`,
                method: "GET",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setSingleProduct_EXTERNAL({
                            product: data,
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),
        purchaseProduct: builder.mutation({
            query: (credentials) => ({
                // generate a random token value instead of using a hardcoded string
                url: `/payments/purchase`,
                method: "POST",
                body: { ...credentials },
            }),
            // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            //     try {
            //         const { data } = await queryFulfilled;

            //         // dispatch(
            //         //     setSingleProduct_EXTERNAL({
            //         //         product: data,
            //         //     })
            //         // );
            //     } catch (error) {
            //         return error;
            //     }
            // },
        }),
    }),
});

export const { useGetAllProducts_EXTERNALMutation, useGetSingleProduct_EXTERNALMutation, usePurchaseProductMutation } = appApiSlice;
