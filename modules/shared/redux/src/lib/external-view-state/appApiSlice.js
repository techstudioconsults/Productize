/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from '../apiSlice';
import { setAllProduct_EXTERNAL, setCart, setSingleProduct_EXTERNAL, setTags } from './appSlice';

//productize-api.techstudio.academy/api/products
export const appApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts_EXTERNAL: builder.mutation({
            query: (credentials) => ({
                url: `/products`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    let filteredProduct = data.data;
                    if (arg.tag) {
                        const tagToMatch = arg.tag.toLowerCase(); // Convert arg.tag to lowercase
                        filteredProduct = data.data?.filter((product) => {
                            return product.tags.map((tag) => tag.toLowerCase()).includes(tagToMatch);
                        });
                    }
                    dispatch(setAllProduct_EXTERNAL({ products: filteredProduct, tag: arg }));
                } catch (error) {
                    return error;
                }
            },
        }),
        getSingleProduct_EXTERNAL: builder.mutation({
            query: (credentials) => ({
                // generate a random token value instead of using a hardcoded string
                url: `/products/${credentials.productID}/oiuu8989b9u9`,
                method: 'GET',
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
        addToCart: builder.mutation({
            query: (credentials) => ({
                // generate a random token value instead of using a hardcoded string
                url: `/carts`,
                method: 'POST',
                body: { ...credentials },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                } catch (error) {
                    return error;
                }
            },
        }),
        getFromCart: builder.mutation({
            query: (credentials) => ({
                // generate a random token value instead of using a hardcoded string
                url: `/carts`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(
                        setCart({
                            product: data.data,
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),
        getProductTags: builder.mutation({
            query: (credentials) => ({
                url: `/products/tags`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(
                        setTags({
                            tags: data.data,
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
                method: 'POST',
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

export const {
    useGetAllProducts_EXTERNALMutation,
    useGetSingleProduct_EXTERNALMutation,
    usePurchaseProductMutation,
    useAddToCartMutation,
    useGetFromCartMutation,
    useGetProductTagsMutation,
} = appApiSlice;
