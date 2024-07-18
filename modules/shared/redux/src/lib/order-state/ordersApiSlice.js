/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from '../apiSlice';
import { setAllOrders, setSingleOrder } from './ordersSlice';

const constructURL = (credentials) => {
    if (!credentials) {
        return '/orders/user';
    }

    const { link } = credentials;
    if (!link) {
        return `/orders/user?page=${credentials.filter.page}&start_date=${credentials.filter.startDate}&end_date=${credentials.filter.endDate}`;
    } else {
        return link;
    }
};

export const OrdersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.mutation({
            query: (credentials) => ({
                url: constructURL(credentials),
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                    dispatch(
                        setAllOrders({
                            isFilter: arg?.isFilter || false,
                            orders: data.data,
                            ordersMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (error) {
                    return;
                }
            },
        }),

        getSingleOrderDetails: builder.mutation({
            query: (credentials) => ({
                url: `/orders/${credentials?.orderID}`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setSingleOrder({
                            order: data.data,
                        })
                    );
                } catch (error) {
                    return;
                }
            },
        }),

        // getCountOfUnseenOrders: builder.mutation({
        //     query: () => ({
        //         url: `/orders/unseen`,
        //         method: 'GET',
        //     }),
        // }),

        // markUnseenOrdersAsSeen: builder.mutation({
        //     query: () => ({
        //         url: `/orders/seen`,
        //         method: 'PATCH',
        //     }),
        // }),
    }),
});

export const { useGetAllOrdersMutation, useGetSingleOrderDetailsMutation } = OrdersApiSlice;
