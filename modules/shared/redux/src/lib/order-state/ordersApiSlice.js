/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from '../apiSlice';
import { setAllOrders, setSingleOrder, setOrderAnalytics, setAllAdminOrders, setAllRevenue, setHomeAnalytics } from './ordersSlice';

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

const constructURL1 = (credentials, filteredLink, status) => {
    if (credentials && !credentials?.link) {
        return filteredLink;
    } else if (credentials?.link) {
        return credentials?.link;
    } else {
        return `/orders?status=${status}`;
    }
};
const constructURL2 = (credentials, filteredLink, status) => {
    if (credentials && !credentials?.link) {
        return filteredLink;
    } else if (credentials?.link) {
        return credentials?.link;
    } else {
        return `/revenues?status=${status}`;
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
        getAllAdminOrders: builder.mutation({
            query: (credentials) => ({
                url: constructURL1(
                    credentials,
                    `/orders?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}&status=${
                        credentials?.status ? credentials?.status : ''
                    }`,
                    credentials?.status
                ),
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setAllAdminOrders({
                            isFilter: arg?.isFilter || false,
                            orders: data.data,
                            ordersMetaData: { links: data.links, meta: data.meta }, // Updated to adminOrdersMetaData
                        })
                    );
                } catch (error) {
                    return;
                }
            },
        }),
        getAllRevenue: builder.mutation({
            query: (credentials) => ({
                url: constructURL2(
                    credentials,
                    `/revenues?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}&status=${
                        credentials?.status ? credentials?.status : ''
                    }`,
                    credentials?.status
                ),
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setAllRevenue({
                            isFilter: arg?.isFilter || false,
                            revenue: data.data,
                            revenueMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (error) {
                    return;
                }
            },
        }),

        getOrderAnalytics: builder.mutation({
            query: () => ({
                url: `/orders/stats`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    dispatch(
                        setOrderAnalytics({
                            orderAnalytics: res.data.data,
                        })
                    );
                } catch (error) {
                    return;
                }
            },
        }),
        getHomeAnalytics: builder.mutation({
            query: () => ({
                url: `/revenues/allstats`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    dispatch(
                        setHomeAnalytics({
                            homeAnalytics: res.data.data,
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

export const {
    useGetAllOrdersMutation,
    useGetSingleOrderDetailsMutation,
    useGetAllAdminOrdersMutation,
    useGetAllRevenueMutation,
    useGetHomeAnalyticsMutation,
    useGetOrderAnalyticsMutation,
} = OrdersApiSlice;
