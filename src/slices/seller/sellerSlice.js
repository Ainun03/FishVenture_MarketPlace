import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import poolService from "../../services/poolService";
import sellerService from "../../services/sellerService"
import { toast } from "react-toastify";

// get User from localstorage

const seller = JSON.parse(localStorage.getItem('seller'))

const initialState = {
    seller: seller ? seller : null,
    kolam: {},
    pond: {},
    jenisIkan:{},
    imageKolam: {},
};

export const getPond = createAsyncThunk(
  "/pond",
  async (payload, thunkAPI) => {
    let url= `http://213.190.4.135:8080/pond`;
    try {
      const { isAuthenticated } = thunkAPI.getState().user;
    console.log({isAuthenticated})
    let res;
    // const res = await axios.get(url,
    if (isAuthenticated){
      const { token } = thunkAPI.getState().user.user.data;
      console.log({token})
      res = await axios.get(url,
        {
          headers: {
            Authorization: "Bearer " + token,
            accept: "*/*",
            "Content-Type": "multipart/form-data",
          },

      })

    } else {
      res = await axios.get(url);
  }
    const data = res.data;
    return data;
    } catch (error) {
      const message =
              (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
              error.message ||
              error.toString();
          toast.dismiss();
          toast.error(message);
          return thunkAPI.rejectWithValue();
    }
  }
);

export const jenisIkan = createAsyncThunk(
    "/create-fish-species",
    async (payload, thunkAPI) => {
        console.log(payload)
        // const { token } = thunkAPI.getState().user.user.data;
        // console.log(token)
        const url = `http://213.190.4.135:8080/create-fish-species`
        try {
          // return await authService.getUser(payload)  
        //   const resp = await axios.post(url,payload, {
        //     headers: {
        //         Authorization: "Bearer " + token,
        //         accept: "*/*",
        //         // "Content-Type": "multipart/form-data",
        //         'Content-Type': 'application/json',
        //     },
        // });
        // // remove id from response
        // const { data } = resp.data.data;
        // console.log({data})
        // return data;

        const { isAuthenticated } = thunkAPI.getState().user;
        console.log({isAuthenticated})
        let res;
        if (isAuthenticated){
          const { token } = thunkAPI.getState().user.user.data;
          console.log({token})
          res = await axios.post(url,JSON.stringify(payload),
            {
              headers: {
                Authorization: "Bearer " + token,
                accept: "*/*",
                "Content-Type": "multipart/form-data",
    
              },
  
          })
  
        } else {
          res = await axios.post(url);
      }
        const data = res.data.data;
        return data;
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




export const sellerSlice = createSlice({
  name: "seller",
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
      .addCase(jenisIkan.pending, (state) => {
        // state.isLoading = true
      })
      .addCase(jenisIkan.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.jenisIkan = action.payload
        console.log(state.jenisIkan)
      })
      .addCase(jenisIkan.rejected, (state, action) => {
        // state.isLoading = false
        state.isError = true
        // state.message = action.payload
      }) 

      .addCase(getPond.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPond.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.pond = action.payload
        console.log(state.pond)
      })
      .addCase(getPond.rejected, (state, action) => {
        // state.isLoading = false
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


export const { logout } = sellerSlice.actions;

export default sellerSlice.reducer;