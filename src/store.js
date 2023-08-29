import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";
import sellerSlice from "./slices/seller/sellerSlice";
import adminSlice from "./slices/admin/adminSlice";
import countrySlice from "./slices/listAddressSlice";
import buyerSlice from "./slices/buyer/buyerSlice";
import kolamSlice  from "./slices/seller/poolSlice";

export const store = configureStore({
    reducer: {
        user: authSlice,
        seller:sellerSlice,
        admin:adminSlice,
        listAddress:countrySlice,
        buyer:buyerSlice,
        pool:kolamSlice
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});