import { createSlice } from '@reduxjs/toolkit';

interface ProductsState {
  allProducts: [];
  productsAnalytics: object;
  liveProducts: [];
  draftProduct: [];
  deletedProduct: [];
}

const initialState: ProductsState = {
  allProducts: [],
  productsAnalytics: {},
  liveProducts: [],
  draftProduct: [],
  deletedProduct: [],
};

const productSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    setAllProduct: (state, action) => {
      const { products } = action.payload;
      state.allProducts = products;
    },

    setLiveProduct: (state, action) => {
      const { products } = action.payload;
      state.liveProducts = products;
    },
    setDraftProduct: (state, action) => {
      const { products } = action.payload;
      state.draftProduct = products;
    },
    setDeletedProduct: (state, action) => {
      const { products } = action.payload;
      state.deletedProduct = products;
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

export const {
  setAllProduct,
  setLiveProduct,
  setDraftProduct,
  setDeletedProduct,
  setProductsAnalytics,
  resetProductStore,
} = productSlice.actions;
export default productSlice.reducer;

export const selectAllProducts = (state: any) => state.Products.allProducts;
export const selectDraftProducts = (state: any) => state.Products.draftProduct;
export const selectLiveProducts = (state: any) => state.Products.liveProduct;
export const selectDeletedProducts = (state: any) =>
  state.Products.deletedProduct;
export const selectProductAnalytics = (state: any) =>
  state.Products.productsAnalytics;
