import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";
import sellerSlice from "./slices/seller/sellerSlice";
import adminSlice from "./slices/admin/adminSlice";
import countrySlice from "./slices/listAddressSlice";
import buyerSlice from "./slices/buyer/buyerSlice";
import kolamSlice  from "./slices/seller/poolSlice";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfigAdmin = {
    key: 'admin',
    storage
  }; 
const persistConfigBuyer = {
    key: 'buyer',
    storage
  }; 

const persistedBuyer=persistReducer(persistConfigBuyer,buyerSlice)
const persistedAdmin=persistReducer(persistConfigAdmin,adminSlice)

const reducer={
// persist ====
    admin:persistedAdmin,
    buyer:persistedBuyer,
// reducer ====
    user: authSlice,
    seller:sellerSlice,
    listAddress:countrySlice,
    pool:kolamSlice
}

export const store = configureStore({
    reducer:reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export const persistor = persistStore(store);