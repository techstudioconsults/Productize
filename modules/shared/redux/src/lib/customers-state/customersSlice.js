import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCustomers: null,

    singleCustomer: {},
    customersMetaData: null,
};

const CustomerSlice = createSlice({
    name: "Customers",
    initialState,
    reducers: {
        setAllCustomers: (state, action) => {
            const { customers, customersMetaData } = action.payload;
            state.allCustomers = customers;
            state.customersMetaData = customersMetaData;
        },

        setSingleCustomer: (state, action) => {
            const { Customer } = action.payload;
            state.singleCustomer = Customer;
        },

        resetCustomersStore: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const { setAllCustomers, resetCustomersStore, setSingleCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;

export const selectAllCustomers = (state) => state.Customers.allCustomers;
export const selectCustomersMetaData = (state) => state.Customers.customersMetaData;
export const selectSingleCustomer = (state) => state.Customers.singleCustomer;
