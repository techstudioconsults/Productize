/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from "../apiSlice";
import { setAllCustomers } from "./customersSlice";

//productize-api.techstudio.academy/api/Customers
export const CustomersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCustomers: builder.mutation({
            query: () => ({
                url: `/customers`,
                method: "GET",
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

        // getSingleCustomerDetails: builder.mutation({
        //     query: (credentials) => ({
        //         url: `/Customers/${credentials?.productID}`,
        //         method: "GET",
        //     }),
        //     async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        //         try {
        //             const { data } = await queryFulfilled;
        //             dispatch(
        //                 setSingleCustomer({
        //                     product: data,
        //                 })
        //             );
        //         } catch (error) {
        //             return error;
        //         }
        //     },
        // }),

        // downloadCustomersList: builder.mutation({
        //     query: (credentials) => ({
        //         url: `Customers/download?page=1&format=csv`,
        //         method: "GET",
        //     }),
        // }),
    }),
});

export const { useGetAllCustomersMutation } = CustomersApiSlice;
