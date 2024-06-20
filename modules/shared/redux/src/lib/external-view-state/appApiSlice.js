/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from '../apiSlice';
import { setAllProduct_EXTERNAL, setCart, setSingleProduct_EXTERNAL, setTags } from './appSlice';

// Function to determine URL based on credentials
const determineURL = (credentials) => {
    return credentials?.link || '/products';
};

export const appApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts_EXTERNAL: builder.mutation({
            query: (credentials) => ({
                url: determineURL(credentials),
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    let filteredProduct = data.data;
                    if (arg.tag) {
                        const tagToMatch = arg.tag.toLowerCase();
                        filteredProduct = data.data?.filter((product) => product.tags.map((tag) => tag.toLowerCase()).includes(tagToMatch));
                    }
                    dispatch(
                        setAllProduct_EXTERNAL({
                            products: filteredProduct,
                            productsMetaData: { meta: data.meta, links: data.links },
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),

        getSingleProduct_EXTERNAL: builder.mutation({
            query: (credentials) => ({
                url: `/products/${credentials?.productID}/iueritujngvifv`,
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
                url: `/carts`,
                method: 'POST',
                body: { ...credentials },
            }),
        }),

        getFromCart: builder.mutation({
            query: () => ({
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

        updateCart: builder.mutation({
            query: (credentials) => ({
                url: `/carts/${credentials.cart_id}`,
                method: 'PATCH',
                body: credentials.body,
            }),
        }),

        deleteCart: builder.mutation({
            query: (credentials) => ({
                url: `/carts/${credentials.cart_id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                } catch (error) {
                    return error;
                }
            },
        }),

        getProductTags: builder.mutation({
            query: () => ({
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
                url: `/carts/clear`,
                method: 'POST',
                body: { ...credentials },
            }),
        }),

        createProductReview: builder.mutation({
            query: (credentials) => ({
                url: `/reviews/products/${credentials.productID}`,
                method: 'POST',
                body: { ...credentials.body },
            }),
        }),

        getSingleProductReviews: builder.mutation({
            query: (credentials) => ({
                url: `/reviews/products/${credentials.productID}`,
                method: 'GET',
            }),
        }),

        getProductReviews: builder.mutation({
            query: (credentials) => ({
                url: `/reviews/products/${credentials.productID}`,
                method: 'GET',
            }),
        }),

        getTopProducts: builder.mutation({
            query: () => ({
                url: `/products/top-products`,
                method: 'GET',
            }),
        }),

        getProductsBasedOnSearch: builder.mutation({
            query: () => ({
                url: `/products/search`,
                method: 'GET',
            }),
        }),

        getFAQ: builder.mutation({
            query: () => ({
                url: `/faqs`,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetAllProducts_EXTERNALMutation,
    useGetSingleProduct_EXTERNALMutation,
    useGetSingleProductReviewsMutation,
    usePurchaseProductMutation,
    useAddToCartMutation,
    useGetFromCartMutation,
    useGetProductTagsMutation,
    useUpdateCartMutation,
    useDeleteCartMutation,
    useGetTopProductsMutation,
    useGetProductsBasedOnSearchMutation,
    useGetFAQMutation,
    useCreateProductReviewMutation,
} = appApiSlice;
