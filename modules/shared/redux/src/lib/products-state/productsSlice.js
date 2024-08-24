import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: null,
    allProducts: null,
    topAdminProducts: null,
    productsAnalytics: {},
    adminProductsAnalytics: {},
    liveProducts: null,
    draftProducts: null,
    deletedProducts: null,
    singleProduct: {
        product: null,
        customers: null,
    },
    paginationMetaData: null,
    revenueAnalytics: {},
    allComplaints: {},
    complaintsMetaData: null,
    topProductsMetaData: null,
    singleComplaints: {
        complaint: null,
    },
    complaints: null,
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
            const { topProducts, topProductsMetaData } = action.payload;
            state.topAdminProducts = topProducts;
            state.topProductsMetaData = topProductsMetaData;
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
        setAllComplaints: (state, action) => {
            const { allComplaints, complaintsMetaData } = action.payload;
            state.allComplaints = allComplaints;
            state.complaintsMetaData = complaintsMetaData;
        },
        setSingleComplaints: (state, action) => {
            const { complaint } = action.payload;
            state.singleComplaints.complaint = complaint;
        },
        setProductsAnalytics: (state, action) => {
            const { productsAnalytics } = action.payload;
            state.productsAnalytics = productsAnalytics;
        },
        setAdminProductsAnalytics: (state, action) => {
            const { adminProductsAnalytics } = action.payload;
            state.adminProductsAnalytics = adminProductsAnalytics;
        },
        setRevenueAnalytics: (state, action) => {
            const { revenueAnalytics } = action.payload;
            state.revenueAnalytics = revenueAnalytics;
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
    setAdminProductsAnalytics,
    resetProductStore,
    setRevenueAnalytics,
    setAllComplaints,
    setSingleComplaints,
} = productSlice.actions;
export default productSlice.reducer;

export const selectProducts = (state) => state.Products.products;
export const selectAllProducts = (state) => state.Products.allProducts;
export const selectTopAdminProducts = (state) => state.Products.topAdminProducts;
export const selectTopProductsMetaData = (state) => state.Products.topProductsMetaData;
export const selectPaginationMetaData = (state) => state.Products.paginationMetaData;
export const selectComplaintsMetaData = (state) => state.Products.complaintsMetaData;
export const selectDraftProducts = (state) => state.Products.draftProducts;
export const selectLiveProducts = (state) => state.Products.liveProducts;
export const selectDeletedProducts = (state) => state.Products.deletedProducts;
export const selectSingleProduct = (state) => state.Products.singleProduct.product;
export const selectSingleProductCustomers = (state) => state.Products.singleProduct.customers;
export const selectProductAnalytics = (state) => state.Products.productsAnalytics;
export const selectAdminProductAnalytics = (state) => state.Products.adminProductsAnalytics;
export const selectRevenueAnalytics = (state) => state.Products.revenueAnalytics;
export const selectAllComplaints = (state) => state.Products.allComplaints;
export const selectSingleComplaints = (state) => state.Products.singleComplaints.complaint;
