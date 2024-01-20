/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from "../apiSlice";
import { setAllOrders, setSingleOrder } from "./ordersSlice";

//productize-api.techstudio.academy/api/Orders
export const OrdersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.mutation({
            query: () => ({
                url: `/orders`,
                method: "GET",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setAllOrders({
                            orders: data.data,
                            ordersMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),

        getSingleOrderDetails: builder.mutation({
            query: (credentials) => ({
                url: `/orders/${credentials?.orderID}`,
                method: "GET",
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
                    return error;
                }
            },
        }),
    }),
});

export const { useGetAllOrdersMutation, useGetSingleOrderDetailsMutation } = OrdersApiSlice;
