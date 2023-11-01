import { createSlice } from '@reduxjs/toolkit';

interface ProductsState {
	allProducts: [] | null;
	allProducts_EXTERNAL: [] | null;
	productsAnalytics: object | null;
	liveProducts: [] | null;
	draftProducts: [] | null;
	deletedProducts: [] | null;
	singleProduct: object | null;
	productMetaData: object | null;
}

const initialState: ProductsState = {
	allProducts: null,
	allProducts_EXTERNAL: [],
	productsAnalytics: {},
	liveProducts: null,
	draftProducts: null,
	deletedProducts: null,
	singleProduct: {},
	productMetaData: null,
};

const productSlice = createSlice({
	name: 'Products',
	initialState,
	reducers: {
		setAllProduct: (state, action) => {
			const { products, productsMetaData } = action.payload;
			state.allProducts = products;
			state.productMetaData = productsMetaData;
		},

		setAllProduct_EXTERNAL: (state, action) => {
			const { products } = action.payload;
			state.allProducts_EXTERNAL = products;
		},

		setLiveProduct: (state, action) => {
			const { products } = action.payload;
			state.liveProducts = products;
		},
		setDraftProduct: (state, action) => {
			const { products } = action.payload;
			state.draftProducts = products;
		},
		setDeletedProduct: (state, action) => {
			const { products } = action.payload;
			state.deletedProducts = products;
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

export const {
	setAllProduct,
	setAllProduct_EXTERNAL,
	setLiveProduct,
	setDraftProduct,
	setDeletedProduct,
	setSingleProduct,
	setProductsAnalytics,
	resetProductStore,
} = productSlice.actions;
export default productSlice.reducer;

export const selectAllProducts = (state: any) => state.Products.allProducts;
export const selectProductMetaData = (state: any) =>
	state.Products.productMetaData;
export const selectAllProducts_EXTERNAL = (state: any) =>
	state.Products.allProducts_EXTERNAL;
export const selectDraftProducts = (state: any) => state.Products.draftProducts;
export const selectLiveProducts = (state: any) => state.Products.liveProducts;
export const selectDeletedProducts = (state: any) =>
	state.Products.deletedProducts;
export const selectSingleProduct = (state: any) => state.Products.singleProduct;
export const selectProductAnalytics = (state: any) =>
	state.Products.productsAnalytics;
