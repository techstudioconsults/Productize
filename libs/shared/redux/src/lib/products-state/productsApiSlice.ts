import { apiSlice } from '../apiSlice';
import {
  setAllProduct,
  setDeletedProduct,
  setDraftProduct,
  setLiveProduct,
  setProductsAnalytics,
} from './productsSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.mutation({
      query: () => ({
        url: `/products`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setAllProduct({
              products: data.data,
            })
          );
          console.log(data);
        } catch (error: any) {
          return error;
        }
      },
    }),
    getLiveProducts: builder.mutation({
      query: () => ({
        url: `/products?status=published`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setLiveProduct({
              products: data.data,
            })
          );
          console.log(data);
        } catch (error: any) {
          return error;
        }
      },
    }),
    getDraftProducts: builder.mutation({
      query: () => ({
        url: `/products?status=draft`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setDraftProduct({
              products: data.data,
            })
          );
          console.log(data);
        } catch (error: any) {
          return error;
        }
      },
    }),
    getDeletedProducts: builder.mutation({
      query: () => ({
        url: `/products?status=deleted`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setDeletedProduct({
              products: data.data,
            })
          );
          console.log(data);
        } catch (error: any) {
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
          console.log(data);
          dispatch(
            setProductsAnalytics({
              productsAnalytics: data.data,
            })
          );
        } catch (error: any) {
          return error;
        }
      },
    }),
  }),
});

export const {
  useGetAllProductsMutation,
  useGetDeletedProductsMutation,
  useGetDraftProductsMutation,
  useGetLiveProductsMutation,
  useGetProductAnalyticsMutation,
} = productsApiSlice;
