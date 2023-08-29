import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const country = JSON.parse(localStorage.getItem('listAddress'))

const initialState = {
    country: country ? country : [],
    province:[],
    city:[],
    district:[],
    isLoading: false,
};

 // =======================  Country , province , City, District =====================

 export const getListCountry = createAsyncThunk(
    "/list-country",
    async (paylod,thunkAPI) => {
        // const { id, accessToken } = thunkAPI.getState().user;
        let url=`http://213.190.4.135:8080/list-country`
        // let url = `${process.env.REACT_APP_BASE_URL}/api/v1/products/show/${id}`;
  
        try {
            const resp = await axios.get(url);
  
            const { data } = resp.data;
            // console.log(data);
  
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
  // province =======
  export const getListProvince = createAsyncThunk(
    "/list-province-country",
    async ({id},thunkAPI) => {
        // const { id, accessToken } = thunkAPI.getState().user;
        console.log(id)
        let url=`http://213.190.4.135:8080/list-province-country?id=${id}`;
        // let url = `${process.env.REACT_APP_BASE_URL}/api/v1/products/show/${id}`;
  
        try {
            const resp = await axios.get(url,JSON.stringify(id)
            );
  
            return resp.data.data;
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

  // city =======
  export const getListCity = createAsyncThunk(
    "/list-city-province",
    async ({id},thunkAPI) => {
        console.log({id})
        let url=`http://213.190.4.135:8080/list-city-province?id=${id}`;
        try {
            const resp = await axios.get(url,JSON.stringify(id));
  
            return resp.data.data;
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

  // District =======
  export const getListDistrict = createAsyncThunk(
    "/list-district-city",
    async ({id},thunkAPI) => {
        // const { id, accessToken } = thunkAPI.getState().user;
        console.log({id})
        let url=`http://213.190.4.135:8080/list-district-city?id=${id}`;
        // let url = `${process.env.REACT_APP_BASE_URL}/api/v1/products/show/${id}`;
  
        try {
            const resp = await axios.get(url,JSON.stringify(id));
            return resp.data.data;
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
  export const countrySlice = createSlice({
    name: "listAddress",
    initialState,
    reducers: {
      logout: (state) => {
          localStorage.removeItem("listAddress");
          state.listAddress= {}
      },
    },
    extraReducers: (builder) => {
  
      builder      
  // ============ COuntry, Province, City, District =======================
        .addCase(getListCountry.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getListCountry.fulfilled, (state, action) => {
          // state.isAuthenticated = true;
          state.country = action.payload ? action.payload : [];
          console.log(state.country)
        })
        .addCase(getListCountry.rejected, (state, action) => {
          state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        }) 
        // province
        .addCase(getListProvince.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getListProvince.fulfilled, (state, action) => {
          // state.isAuthenticated = true;
          state.province = action.payload ? action.payload : [];
          console.log(state.province)
        })
        .addCase(getListProvince.rejected, (state, action) => {
          state.isLoading = false
        //   state.isError = true
          state.message = action.payload
        }) 
        // city
        .addCase(getListCity.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getListCity.fulfilled, (state, action) => {
          // state.isAuthenticated = true;
          state.city = action.payload ? action.payload : [];
          console.log(state.city)
        })
        .addCase(getListCity.rejected, (state, action) => {
          state.isLoading = false
        //   state.isError = true
          state.message = action.payload
        }) 
        // district
        .addCase(getListDistrict.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getListDistrict.fulfilled, (state, action) => {
          // state.isAuthenticated = true;
          state.district = action.payload ? action.payload : [];
          console.log(state.district)
        })
        .addCase(getListDistrict.rejected, (state, action) => {
          state.isLoading = false
        //   state.isError = true
          state.message = action.payload
        }) 
      }
  })
  
  
  export const { logout } = countrySlice.actions;
  
  export default countrySlice.reducer;
