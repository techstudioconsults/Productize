import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allProducts: null,
    productsAnalytics: {},
    liveProducts: null,
    draftProducts: null,
    deletedProducts: null,
    singleProduct: {},
    paginationMetaData: null,
};

const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        setAllProduct: (state, action) => {
            const { products, paginationMetaData } = action.payload;
            state.allProducts = products;
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
            state.singleProduct = product;
        },

        setProductsAnalytics: (state, action) => {
            const { productsAnalytics } = action.payload;
            state.productsAnalytics = productsAnalytics;
        },

        resetProductStore: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const { setAllProduct, setLiveProduct, setDraftProduct, setDeletedProduct, setSingleProduct, setProductsAnalytics, resetProductStore } =
    productSlice.actions;
export default productSlice.reducer;

export const selectAllProducts = (state) => state.Products.allProducts;
export const selectPaginationMetaData = (state) => state.Products.paginationMetaData;
export const selectDraftProducts = (state) => state.Products.draftProducts;
export const selectLiveProducts = (state) => state.Products.liveProducts;
export const selectDeletedProducts = (state) => state.Products.deletedProducts;
export const selectSingleProduct = (state) => state.Products.singleProduct;
export const selectProductAnalytics = (state) => state.Products.productsAnalytics;
