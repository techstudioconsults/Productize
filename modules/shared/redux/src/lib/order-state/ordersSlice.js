import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isFilter: false,
    allOrders: null,
    singleOrder: {},
    ordersMetaData: null,
    orderAnalytics: {},
    allAdminOrders: {},
    allRevenue: {},
    revenueMetaData: null,
    homeAnalytics: {},
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
        setAllRevenue: (state, action) => {
            const { revenue, revenueMetaData, isFilter } = action.payload;
            state.allRevenue = revenue;
            state.revenueMetaData = revenueMetaData;
            state.isFilter = isFilter;
        },
        setAllAdminOrders: (state, action) => {
            const { orders, ordersMetaData, isFilter } = action.payload;
            state.allAdminOrders = orders;
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
        setOrderAnalytics: (state, action) => {
            const { orderAnalytics } = action.payload;
            state.orderAnalytics = orderAnalytics;
        },
        setHomeAnalytics: (state, action) => {
            const { homeAnalytics } = action.payload;
            state.homeAnalytics = homeAnalytics;
        },
    },
});

export const { setAllOrders, resetOrdersStore, setSingleOrder, setOrderAnalytics, setAllAdminOrders, setAllRevenue, setHomeAnalytics } = OrderSlice.actions;
export default OrderSlice.reducer;

export const selectAllOrders = (state) => state.Orders.allOrders;
export const selectAllAdminOrders = (state) => state.Orders.allAdminOrders;
export const selectOrdersMetaData = (state) => state.Orders.ordersMetaData;
export const selectRevenueMetaData = (state) => state.Orders.revenueMetaData;
export const selectSingleOrder = (state) => state.Orders.singleOrder;
export const selectIsOrderfilter = (state) => state.Orders.isFilter;
export const selectOrderAnalytics = (state) => state.Orders.orderAnalytics;
export const selectHomeAnalytics = (state) => state.Orders.homeAnalytics;
export const selectAllRevenue = (state) => state.Orders.allRevenue;
