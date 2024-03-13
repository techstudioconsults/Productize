/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from '../apiSlice';
import { setAllCustomers, setSingleCustomer, setSingleCustomerOrders } from './customersSlice';

const checkCredentials = (credentials, filteredLink) => {
    if (credentials && !credentials?.link) {
        return filteredLink;
    } else if (credentials?.link) {
        return credentials?.link;
    } else {
        return `/customers`;
    }
};

//productize-api.techstudio.academy/api/Customers
export const CustomersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCustomers: builder.mutation({
            query: (credentials) => ({
                url: checkCredentials(
                    credentials,
                    `/customers?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}`
                ),
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
                    dispatch(
                        setSingleCustomerOrders({
                            customerOrder: data.data,
                        })
                    );
                } catch (error) {
                    return error;
                }
            },
        }),

        downloadCustomersList: builder.mutation({
            query: (credentials) => ({
                url: `Customers/download?page=1&format=csv`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetAllCustomersMutation, useGetSingleCustomerDetailsMutation, useGetCustomerOrdersMutation } = CustomersApiSlice;
