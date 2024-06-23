/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from '../apiSlice';
import { setAllCustomers, setSingleCustomer, setSingleCustomerOrders } from './customersSlice';

// Function to construct the URL based on credentials
const constructURL = (credentials) => {
    if (!credentials) {
        return '/customers';
    }

    const { page, startDate, endDate } = credentials;
    if (!credentials.link) {
        return `/customers?page=${page}&start_date=${startDate}&end_date=${endDate}`;
    } else {
        return credentials.link;
    }
};

export const CustomersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCustomers: builder.mutation({
            query: (credentials) => ({
                url: constructURL(credentials),
                method: 'GET',
            }),

            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setAllCustomers({
                            customers: data.data,
                            customersMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),

        getSingleCustomerDetails: builder.mutation({
            query: (credentials) => ({
                url: `/customers/${credentials?.customerID}`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setSingleCustomer({
                            customer: data.data,
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),

        getCustomerOrders: builder.mutation({
            query: (credentials) => ({
                url: `/orders/customers/${credentials?.customerID}`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                    dispatch(
                        setSingleCustomerOrders({
                            customerOrder: data.data,
                        })
                    );
                } catch (error) {
                    console.log(error);
                    return error;
                }
            },
        }),

        downloadCustomersList: builder.mutation({
            query: () => ({
                url: 'Customers/download?page=1&format=csv',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetAllCustomersMutation, useGetSingleCustomerDetailsMutation, useGetCustomerOrdersMutation } = CustomersApiSlice;
