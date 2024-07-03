/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from '../apiSlice';
import { setAllProduct_EXTERNAL, setCart, setSingleProduct_EXTERNAL, setTags } from './appSlice';

// Function to determine URL based on credentials
const determineURL = (credentials) => {
    return credentials?.link || '/products/external';
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
                        // const tagToMatch = arg.tag.toLowerCase();
                        // filteredProduct = data.data?.filter((product) => product.tags.map((tag) => tag.toLowerCase()).includes(tagToMatch));
                        const tagToMatch = arg.tag.toLowerCase();
                        filteredProduct = data.data?.filter((product) => product.product_type.includes(tagToMatch));
                    }
                    dispatch(
                        setAllProduct_EXTERNAL({
                            products: filteredProduct,
                            productsMetaData: { meta: data.meta, links: data.links },
                        })
                    );
                } catch (error) {
                    return;
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
                    console.log(data);
                    dispatch(
                        setSingleProduct_EXTERNAL({
                            product: data.data,
                        })
                    );
                } catch (error) {
                    return;
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
                    return;
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
        }),

        getProductTags: builder.mutation({
            query: () => ({
                url: `/products/types`,
                // url: `/products/tags`,
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
                    return;
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

        getAggrProductReviews: builder.mutation({
            query: (credentials) => ({
                url: `/reviews/productsavg/${credentials.productID}`,
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

        // submitKYCForm: builder.mutation({
        //     query: (credentials) => ({
        //         url: `/users/kyc`,
        //         method: 'POST',
        //         body: { ...credentials },
        //     }),
        // }),
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
    useGetAggrProductReviewsMutation,
    // useSubmitKYCFormMutation
} = appApiSlice;
