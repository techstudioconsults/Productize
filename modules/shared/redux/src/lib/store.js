// app/store.ts
import authReducer from "./auth-state/authSlice";
import userReducer from "./user-state/userSlice";
import customersReducer from "./customers-state/customersSlice";
import productReducer from "./products-state/productsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiSlice } from "./apiSlice";

const authPersistConfig = {
    key: "auth",
    version: 1,
    storage,
};
const userPersistConfig = {
    key: "user",
    version: 1,
    storage,
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const userPersistedReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        Auth: authPersistedReducer,
        User: userPersistedReducer,
        Products: productReducer,
        Customers: customersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(apiSlice.middleware),
    // devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
