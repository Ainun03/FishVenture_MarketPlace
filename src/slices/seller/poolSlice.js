import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import poolService from "../../services/poolService";
import { toast } from "react-toastify";

// get User from localstorage

const pool = JSON.parse(localStorage.getItem('pool'))
const initialState = {
    // ...pool
    // pool: pool ? pool : {},
    pool:  {},
    harga: {},
    // isError: false,
    // isSuccess: false,
    // isLoading: false,
    // message: '',
};

export const kolamSeller = createAsyncThunk(
    "#",
    async (payload, thunkAPI) => {
      console.log(payload)
      try {
        return (payload)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        toast.dismiss();
        toast.error(message);
        return thunkAPI.rejectWithValue(message)
      }
    }
  );

  export const hargaSeller = createAsyncThunk(
    "/harga",
    async (payload, thunkAPI) => {
      console.log(payload)
      try {
        return (payload)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        toast.dismiss();
        toast.error(message);
        return thunkAPI.rejectWithValue(message)
      }
    }
  );

export const kolamSlice = createSlice({
  name: "pool",
  initialState,
  reducers: {
    logout: (state) => {
        localStorage.removeItem("pool");
        state.kolam= {}
    },
  },
  extraReducers: (builder) => {

    builder      
      .addCase(kolamSeller.pending, (state) => {
      })
      .addCase(kolamSeller.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.pool = action.payload ? action.payload : {}
        console.log(state.pool)
      })
      .addCase(kolamSeller.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }) 
      .addCase(hargaSeller.pending, (state) => {
      })
      .addCase(hargaSeller.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.harga = action.payload ? action.payload : {}
        console.log(state.harga)
      })
      .addCase(hargaSeller.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }) 
    }
})


export const { logout } = kolamSlice.actions;

export default kolamSlice.reducer;