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
};

const appSlice = createSlice({
    name: 'App',
    initialState,
    reducers: {
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
            // state.cart.checkoutProducts = action.payload.product.products;
            // state.cart.totalProductPrice = action.payload.product.total_amount;
            // state.cart.totalProductQuantity = action.payload.product.total_amount;
            // Function to calculate the total accumulated price considering quantity
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

export const { setAllProduct_EXTERNAL, setSingleProduct_EXTERNAL, setCart, setTags } = appSlice.actions;
export default appSlice.reducer;

export const selectAllProducts_EXTERNAL = (state) => state.App.allProducts_EXTERNAL;
export const selectSingleProduct_EXTERNAL = (state) => state.App.singleProduct_EXTERNAL;
export const selectCart = (state) => state.App.cart;
export const selectTags = (state) => state.App.tags;


// ====================================================================================

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     allProducts_EXTERNAL: {
//         products: [],
//         productsMetaData: null,
//     },
//     singleProduct_EXTERNAL: {},
//     tags: [],
//     cart: {
//         totalProductQuantity: 0,
//         totalProductPrice: 0,
//         checkoutProducts: [],
//     },
// };

// const appSlice = createSlice({
//     name: 'app',
//     initialState,
//     reducers: {
//         setAllProduct_EXTERNAL: (state, action) => {
//             const { products, productsMetaData } = action.payload;
//             state.allProducts_EXTERNAL.products = products;
//             state.allProducts_EXTERNAL.productsMetaData = productsMetaData;
//         },

//         setSingleProduct_EXTERNAL: (state, action) => {
//             state.singleProduct_EXTERNAL = action.payload.product;
//         },

//         setCart: (state, action) => {
//             const products = action.payload.product;
//             state.cart.checkoutProducts = products;
//             state.cart.totalProductQuantity = calculateTotalQuantity(products);
//             state.cart.totalProductPrice = calculateTotalPrice(products);
//         },

//         setTags: (state, action) => {
//             state.tags = action.payload.tags;
//         },

//         updateCart: (state, action) => {
//             const { product, totalPrice } = action.payload;
//             const index = state.cart.checkoutProducts.findIndex((item) => item.slug === product.slug);

//             if (index !== -1) {
//                 state.cart.checkoutProducts[index].quantity = product.quantity;
//                 state.cart.checkoutProducts[index].price = totalPrice;
//             } else {
//                 state.cart.checkoutProducts.push(product);
//             }
//             state.cart.totalProductQuantity = calculateTotalQuantity(state.cart.checkoutProducts);
//             state.cart.totalProductPrice = calculateTotalPrice(state.cart.checkoutProducts);
//         },

//         deleteProductFromCart: (state, action) => {
//             const { productSlug } = action.payload;
//             state.cart.checkoutProducts = state.cart.checkoutProducts.filter((product) => product.slug !== productSlug);
//             state.cart.totalProductQuantity = calculateTotalQuantity(state.cart.checkoutProducts);
//             state.cart.totalProductPrice = calculateTotalPrice(state.cart.checkoutProducts);
//         },

//         resetAppStore: () => initialState,
//     },
// });

// export const { setAllProduct_EXTERNAL, setSingleProduct_EXTERNAL, setCart, setTags, updateCart, deleteProductFromCart, resetAppStore } = appSlice.actions;

// export default appSlice.reducer;

// export const selectAllProducts_EXTERNAL = (state) => state.App.allProducts_EXTERNAL;
// export const selectSingleProduct_EXTERNAL = (state) => state.App.singleProduct_EXTERNAL;
// export const selectCart = (state) => state.App.cart;
// export const selectTags = (state) => state.App.tags;

// // Function to calculate the total accumulated price considering quantity
// function calculateTotalPrice(products) {
//     return products.reduce((total, product) => total + product.price * product.quantity, 0);
// }

// // Function to calculate the total quantity of products
// function calculateTotalQuantity(products) {
//     return products.reduce((total, product) => total + product.quantity, 0);
// }
