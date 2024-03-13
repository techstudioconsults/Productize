import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allCustomers: null,
    singleCustomer: {},
    singleCustomerOrders: [],
    customersMetaData: null,
};

const CustomerSlice = createSlice({
    name: 'Customers',
    initialState,
    reducers: {
        setAllCustomers: (state, action) => {
            const { customers, customersMetaData } = action.payload;
            state.allCustomers = customers;
            state.customersMetaData = customersMetaData;
        },

        setSingleCustomer: (state, action) => {
            const { customer } = action.payload;
            state.singleCustomer = customer;
        },
        setSingleCustomerOrders: (state, action) => {
            const { customerOrder } = action.payload;
            state.singleCustomerOrders = customerOrder;
        },

        resetCustomersStore: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const { setAllCustomers, resetCustomersStore, setSingleCustomer, setSingleCustomerOrders } = CustomerSlice.actions;
export default CustomerSlice.reducer;

export const selectAllCustomers = (state) => state.Customers.allCustomers;
export const selectCustomersMetaData = (state) => state.Customers.customersMetaData;
export const selectSingleCustomer = (state) => state.Customers.singleCustomer;
export const selectSingleCustomerOrders = (state) => state.Customers.singleCustomerOrders;
