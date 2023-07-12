import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import profilSlice from "./slices/profileSlice";
import kolamSlice from "./slices/seller/poolSlice";

export const store = configureStore({
    reducer: {
        user: authSlice,
        profil:profilSlice,
        kolam: kolamSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});