import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: null,
    allProducts: null,
    topAdminProducts: null,
    productsAnalytics: {},
    liveProducts: null,
    draftProducts: null,
    deletedProducts: null,
    singleProduct: {
        product: null,
        customers: null,
    },
    paginationMetaData: null,
    revenueAnalytics: {},
    allRevenue: {},
};

const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            const { products, paginationMetaData } = action.payload;
            state.products = products;
            state.paginationMetaData = paginationMetaData;
        },
        setAllProduct: (state, action) => {
            const { products, paginationMetaData } = action.payload;
            state.allProducts = products;
            state.paginationMetaData = paginationMetaData;
        },
        setTopAdminProduct: (state, action) => {
            const { products, paginationMetaData } = action.payload;
            state.topAdminProducts = products;
            state.paginationMetaData = paginationMetaData;
        },
        setLiveProduct: (state, action) => {
            const { products, paginationMetaData } = action.payload;
            state.liveProducts = products;
            state.paginationMetaData = paginationMetaData;
        },
        setDraftProduct: (state, action) => {
            const { products, paginationMetaData } = action.payload;
            state.draftProducts = products;
            state.paginationMetaData = paginationMetaData;
        },
        setDeletedProduct: (state, action) => {
            const { products, paginationMetaData } = action.payload;
            state.deletedProducts = products;
            state.paginationMetaData = paginationMetaData;
        },
        setSingleProduct: (state, action) => {
            const { product } = action.payload;
            state.singleProduct.product = product;
        },
        setSingleProductCustomers: (state, action) => {
            const { customers } = action.payload;
            state.singleProduct.customers = customers;
        },

        setProductsAnalytics: (state, action) => {
            const { productsAnalytics } = action.payload;
            state.productsAnalytics = productsAnalytics;
        },
        setRevenueAnalytics: (state, action) => {
            const { revenueAnalytics } = action.payload;
            state.revenueAnalytics = revenueAnalytics;
        },
        setAllRevenue: (state, action) => {
            const { revenue, paginationMetaData } = action.payload;
            state.allRevenue = revenue;
            state.paginationMetaData = paginationMetaData;
        },
        // setSearch: (state, action) => {
        //     const { productsAnalytics } = action.payload;
        //     state.productsAnalytics = productsAnalytics;
        // },

        resetProductStore: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const {
    setProduct,
    setAllProduct,
    setLiveProduct,
    setTopAdminProduct,
    setTopProduct,
    setDraftProduct,
    setDeletedProduct,
    setSingleProduct,
    setSingleProductCustomers,
    setProductsAnalytics,
    resetProductStore,
    setRevenueAnalytics,
    setAllRevenue,
} = productSlice.actions;
export default productSlice.reducer;

export const selectProducts = (state) => state.Products.products;
export const selectAllProducts = (state) => state.Products.allProducts;
export const selectTopAdminProducts = (state) => state.Products.topAdminProducts;
export const selectPaginationMetaData = (state) => state.Products.paginationMetaData;
export const selectDraftProducts = (state) => state.Products.draftProducts;
export const selectLiveProducts = (state) => state.Products.liveProducts;
export const selectDeletedProducts = (state) => state.Products.deletedProducts;
export const selectSingleProduct = (state) => state.Products.singleProduct.product;
export const selectSingleProductCustomers = (state) => state.Products.singleProduct.customers;
export const selectProductAnalytics = (state) => state.Products.productsAnalytics;
export const selectRevenueAnalytics = (state) => state.Products.revenueAnalytics;
export const selectAllRevenue = (state) => state.Products.allRevenue;
