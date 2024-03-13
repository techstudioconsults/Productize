import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allProducts_EXTERNAL: [],
    singleProduct_EXTERNAL: {},
    tags: [],
    cart: {
        totalProductQuantity: 0,
        totalProductPrice: 0,
        checkoutProducts: [],
    },
};

const appSlice = createSlice({
    name: 'App',
    initialState,
    reducers: {
        setAllProduct_EXTERNAL: (state, action) => {
            const { products } = action.payload;
            state.allProducts_EXTERNAL = products;
        },

        setSingleProduct_EXTERNAL: (state, action) => {
            const { product } = action.payload;
            state.singleProduct_EXTERNAL = product;
        },

        setCart: (state, action) => {
            state.cart.checkoutProducts = action.payload.product.products;
            state.cart.totalProductPrice = action.payload.product.total_amount;
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

export const { setAllProduct_EXTERNAL, setSingleProduct_EXTERNAL, setCart, setTags } = appSlice.actions;
export default appSlice.reducer;

export const selectAllProducts_EXTERNAL = (state) => state.App.allProducts_EXTERNAL;
export const selectSingleProduct_EXTERNAL = (state) => state.App.singleProduct_EXTERNAL;
export const selectCart = (state) => state.App.cart;
export const selectTags = (state) => state.App.tags;
