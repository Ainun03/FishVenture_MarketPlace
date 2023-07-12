import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import poolService from "../../services/poolService";
import { toast } from "react-toastify";

// get User from localstorage

const pool = JSON.parse(localStorage.getItem('kolam'))
    // ? JSON.parse(localStorage.getItem("kolam"))
    // : {
    
    //       name:"",
    //       countryID:"",
    //       provinceID:"",
    //       cityID:"",
    //       districtID:"",
    //       detailAddress:"",
    //       noteAddress:"",
    //       type:"",
    //       teamID:"",
    //       listPool:"",
    //       image:"",
    //       message: '',
    //   };

const initialState = {
    // ...pool
    kolam: {},
    imageKolam: {},
    // isError: false,
    // isSuccess: false,
    // isLoading: false,
    // message: '',
};

export const kolamSeller = createAsyncThunk(
    "/create-pool",
    async (payload, thunkAPI) => {
      console.log(payload)
      try {
        return await poolService.pool(payload)
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
  export const imageKolamSeller = createAsyncThunk(
    "/upload-pool-photo",
    async (image, thunkAPI) => {
      try {
        return await poolService.pool(image)
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
  name: "kolam",
  initialState,
  reducers: {
    logout: (state) => {
        localStorage.removeItem("kolam");
        // state.isAuthenticated = false;
        state.kolam= {}
        // state.isError= false;
        // state.isSuccess= false;
    // isLoading: false,
    //   state.id = "";
    //   state.token = "";
    //   state.name = "";
    //   state.email = "";
    //   state.type = "";
      // state.address = { city: "", street: "" };
      // state.phoneNumber = "";
      // state.imageUrl = "";
      // state.login = {
      //   isAuthenticated:false
      // };
      // state.register={};
    },
  },
  extraReducers: (builder) => {

    builder      
      .addCase(kolamSeller.pending, (state) => {
        state.isLoading = true
      })
      .addCase(kolamSeller.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.kolam = action.payload
        console.log(state.kolam)
      })
      .addCase(kolamSeller.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }) 
      .addCase(imageKolamSeller.pending, (state) => {
        state.isLoading = true
      })
      .addCase(imageKolamSeller.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.imageKolam = action.payload
        console.log(state.imageKolam)
      })
      .addCase(imageKolamSeller.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }) 
    }
})


export const { logout } = kolamSlice.actions;

export default kolamSlice.reducer;