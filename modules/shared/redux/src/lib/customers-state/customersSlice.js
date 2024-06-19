import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allCustomers: null,
    singleCustomer: {},
    singleCustomerOrders: [],
    customersMetaData: null,
};

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        setAllCustomers: (state, action) => {
            const { customers, customersMetaData } = action.payload;
            state.allCustomers = customers;
            state.customersMetaData = customersMetaData;
        },

        setSingleCustomer: (state, action) => {
            state.singleCustomer = action.payload.customer;
        },

        setSingleCustomerOrders: (state, action) => {
            state.singleCustomerOrders = action.payload.customerOrder;
        },

        resetCustomersStore: () => initialState,
    },
});

export const { setAllCustomers, resetCustomersStore, setSingleCustomer, setSingleCustomerOrders } = customerSlice.actions;

export default customerSlice.reducer;

export const selectAllCustomers = (state) => state.Customers.allCustomers;
export const selectCustomersMetaData = (state) => state.Customers.customersMetaData;
export const selectSingleCustomer = (state) => state.Customers.singleCustomer;
export const selectSingleCustomerOrders = (state) => state.Customers.singleCustomerOrders;
