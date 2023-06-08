import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

// 
export const getAllProduct = createAsyncThunk(
    "/get-list-produk",
    async (payload, thunkAPI) => {
      let url= `http://192.168.43.144:8080/get-list-produk`;
      try {
        const { isAuthenticated } = thunkAPI.getState().auth;
      console.log({isAuthenticated})
      let res;
      // const res = await axios.get(url,
      if (isAuthenticated){
        const { token } = thunkAPI.getState().auth.login;
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
  export const getProdukType = createAsyncThunk(
    "/get-produk-type",
    async ({id},thunkAPI) => {
      console.log({id})
      let url= `http://192.168.43.144:8080/get-produk-type`;
      try {
      const { isAuthenticated } = thunkAPI.getState().auth;
      console.log("get",{isAuthenticated})

      let res;
      if (isAuthenticated){
        const { token } = thunkAPI.getState().auth.login;
        // const { id } = thunkAPI.getState().auth.product.type;
        console.log({token})
        console.log({id})
        res = await axios.post(url,JSON.stringify({id}),
          {
            headers: {
              Authorization: "Bearer " + token,
              // Authorization: "Bearer " + id,
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
                error.toString();
            toast.dismiss();
            toast.error(message);
            return thunkAPI.rejectWithValue();
      }
    }
  );

  export const getListProdukType = createAsyncThunk(
    "/get-list-produk-type",
    async (payload,thunkAPI) => {
      let url= `http://192.168.43.144:8080/get-list-produk-type`;
      try {
        const { isAuthenticated } = thunkAPI.getState().auth;
      console.log({isAuthenticated})
      let res;
      // const res = await axios.get(url,
      if (isAuthenticated){
        const { token } = thunkAPI.getState().auth.login;
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

export const postProduk = createAsyncThunk(
    "/create-produk",
    async ({productTypeId,specificType,description},thunkAPI) => {
      console.log({productTypeId,specificType,description})
      let url = `http://192.168.43.144:8080/create-produk`;
      try {
        const { isAuthenticated } = thunkAPI.getState().auth;
        console.log({isAuthenticated})
        let res;
        if (isAuthenticated){
          const { token } = thunkAPI.getState().auth.login;
          console.log({token})
          res = await axios.post(url,JSON.stringify({productTypeId,specificType,description}),
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
                  error.toString();
              toast.dismiss();
              toast.error(message);
              return thunkAPI.rejectWithValue();
      }
    }
  );
  export const updateProduk = createAsyncThunk(
    "/update-produk",
    async ({productTypeId,specificType,description},thunkAPI) => {
      console.log({productTypeId,specificType,description})
      let url = `http://192.168.43.144:8080/update-produk`;
      try {
        const { isAuthenticated } = thunkAPI.getState().auth;
        console.log({isAuthenticated})
        let res;
        if (isAuthenticated){
          const { token } = thunkAPI.getState().auth.login;
          console.log({token})
          res = await axios.put(url,JSON.stringify({productTypeId,specificType,description}),
            {
              headers: {
                Authorization: "Bearer " + token,
                accept: "*/*",
                "Content-Type": "multipart/form-data",
    
              },
  
          })
  
        } else {
          res = await axios.put(url);
      }
        const data = res.data.data;
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
  export const postImage = createAsyncThunk(
    "/upload-image-product",
    async ({url,image},thunkAPI) => {
      console.log({url,image})
      let urls = `http://192.168.43.144:8080/upload-image-product`;
      try {
        const { isAuthenticated } = thunkAPI.getState().auth;
        console.log({isAuthenticated})
        let res;
        if (isAuthenticated){
          const { token } = thunkAPI.getState().auth.login;
          console.log({token})
          res = await axios.post(urls,JSON.stringify({url,image}),
            {
              headers: {
                Authorization: "Bearer " + token,
                accept: "*/*",
                "Content-Type": "multipart/form-data",
    
              },
  
          })
  
        } else {
          res = await axios.post(urls);
      }
        const data = res.data.data;
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


const productSlice =createSlice({
    name:"product",
    initialState:{
        products: [],
        postProduct:{},
        productsType:{},
        updateProd:{},
        type:{},
        create: {},
        error: "",
        loading: false,
        isAuthenticated:false,
    },
    extraReducers:{
      // get ALL
        [getAllProduct.pending]: (state, action) => {
            state.loading = true;
          },
          [getAllProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload;
          },
          [getAllProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },
          // get product type id
          [getListProdukType.pending]: (state, action) => {
            state.loading = true;
          },
          [getListProdukType.fulfilled]: (state, action) => {
            state.loading = false;
            state.type = action.payload;
          },
          [getListProdukType.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },
          // get product type
          [getProdukType.pending]: (state, action) => {
            state.loading = true;
          },
          [getProdukType.fulfilled]: (state, action) => {
            state.loading = false;
            state.productsType = action.payload;
            console.log(state.productsType)
          },
          [getProdukType.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },
          // post product
          [postProduk.pending]: (state, action) => {
            state.loading = true;
          },
          [postProduk.fulfilled]: (state, action) => {
            state.loading = false;
            state.isAuthenticated=true
            state.postProduct = action.payload ? action.payload : {};
            console.log(state.postProduct)
      
            state.error = action.payload.message;
          },
          [postProduk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },

          // update
          [updateProduk.pending]: (state, action) => {
            state.loading = true;
          },
          [updateProduk.fulfilled]: (state, action) => {
            state.loading = false;
            state.isAuthenticated=true
            state.postProduct = action.payload
             console.log(state.postProduct)
      
            state.error = action.payload.message;
          },
          [updateProduk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },
          // post image
          [postImage.pending]: (state, action) => {
            state.loading = true;
          },
          [postImage.fulfilled]: (state, action) => {
            state.loading = false;
            state.isAuthenticated=true
            state.postProduct = action.payload ? action.payload : {};
            console.log(state.postProduct)
      
            state.error = action.payload.message;
          },
          [postImage.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },

    }
})
export default productSlice.reducer;