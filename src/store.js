import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import profilSlice from "./slices/profileSlice";
import kolamSlice from "./slices/seller/poolSlice";
import sellerSlice from "./slices/seller/sellerSlice";

export const store = configureStore({
    reducer: {
        user: authSlice,
        seller:sellerSlice,
        profil:profilSlice,
        kolam: kolamSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});