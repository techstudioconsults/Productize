import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allProducts_EXTERNAL: {
        products: [],
        productsMetaData: null,
    },
    singleProduct_EXTERNAL: {},
    tags: [],
    cart: {
        totalProductQuantity: 0,
        totalProductPrice: 0,
        checkoutProducts: [],
    },
    appError: null,
};

const appSlice = createSlice({
    name: 'App',
    initialState,
    reducers: {
        setAppError: (state, action) => {
            const { appError } = action.payload;
            state.appError = appError;
        },

        setAllProduct_EXTERNAL: (state, action) => {
            const { products, productsMetaData } = action.payload;
            state.allProducts_EXTERNAL.products = products;
            state.allProducts_EXTERNAL.productsMetaData = productsMetaData;
        },

        setSingleProduct_EXTERNAL: (state, action) => {
            const { product } = action.payload;
            state.singleProduct_EXTERNAL = product;
        },

        setCart: (state, action) => {
            function calculateTotalPrice(products) {
                let totalPrice = 0;
                products.forEach((product) => {
                    totalPrice += product.product_price * product.quantity;
                });
                return totalPrice;
            }

            // Function to calculate the total quantity of products
            function calculateTotalQuantity(products) {
                let totalQuantity = 0;
                products.forEach((product) => {
                    totalQuantity += product.quantity;
                });
                return totalQuantity;
            }

            state.cart.checkoutProducts = action.payload.product;
            state.cart.totalProductPrice = calculateTotalPrice(action.payload.product);
            state.cart.totalProductQuantity = calculateTotalQuantity(action.payload.product);
        },

        setTags: (state, action) => {
            const { tags } = action.payload;
            state.tags = tags;
        },

        updateCart: (state, action) => {
            const { product, totalPrice } = action.payload;
            const index = state.cart.checkoutProducts.findIndex((item) => product.slug === item.slug);

            if (index !== -1) {
                state.cart.checkoutProducts[index].quantity = product.quantity;
                state.cart.checkoutProducts[index].price = totalPrice;
            } else {
                state.cart.checkoutProducts = [...state.cart.checkoutProducts, product];
            }
            // Update totalProductQuantity as the sum of quantities of all products
            state.cart.totalProductQuantity = state.cart.checkoutProducts.reduce((total, item) => {
                return total + item.quantity;
            }, 0);
            // Update totalProductPrice as the sum of quantities of all products
            state.cart.totalProductPrice = state.cart.checkoutProducts.reduce((total, item) => total + item.price, 0);
        },
        deleteProductFromCart: (state, action) => {
            const { productSlug } = action.payload;
            const updatedProducts = state.cart.checkoutProducts.filter((product) => {
                return product.slug !== productSlug;
            });

            state.cart.checkoutProducts = updatedProducts;
            // Update totalProductQuantity as the sum of quantities of all products
            state.cart.totalProductQuantity = state.cart.checkoutProducts.reduce((total, item) => {
                return total + item.quantity;
            }, 0);
            // Update totalProductPrice as the sum of quantities of all products
            state.cart.totalProductPrice = state.cart.checkoutProducts.reduce((total, item) => total + item.price, 0);
        },

        resetAppStore: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const { setAllProduct_EXTERNAL, setSingleProduct_EXTERNAL, setCart, setTags, setAppError } = appSlice.actions;
export default appSlice.reducer;

export const selectAllProducts_EXTERNAL = (state) => state.App.allProducts_EXTERNAL;
export const selectSingleProduct_EXTERNAL = (state) => state.App.singleProduct_EXTERNAL;
export const selectCart = (state) => state.App.cart;
export const selectTags = (state) => state.App.tags;
export const showAppError = (state) => state.App.appError;
