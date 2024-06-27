import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isFilter: false,
    allOrders: null,
    singleOrder: {},
    ordersMetaData: null,
};

const OrderSlice = createSlice({
    name: 'Orders',
    initialState,
    reducers: {
        setAllOrders: (state, action) => {
            const { orders, ordersMetaData, isFilter } = action.payload;
            state.allOrders = orders;
            state.ordersMetaData = ordersMetaData;
            state.isFilter = isFilter;
        },

        setSingleOrder: (state, action) => {
            const { order } = action.payload;
            state.singleOrder = order;
        },

        resetOrdersStore: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const { setAllOrders, resetOrdersStore, setSingleOrder } = OrderSlice.actions;
export default OrderSlice.reducer;

export const selectAllOrders = (state) => state.Orders.allOrders;
export const selectOrdersMetaData = (state) => state.Orders.ordersMetaData;
export const selectSingleOrder = (state) => state.Orders.singleOrder;
export const selectIsOrderfilter = (state) => state.Orders.isFilter;
