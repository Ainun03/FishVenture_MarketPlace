import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authService from "../services/authService";
import { toast } from "react-toastify";

// get User from localstorage

const user = JSON.parse(localStorage.getItem('user'))

const isAuthenticated = JSON.parse(localStorage.getItem("user"))
    ? true
    : false;
const role = JSON.parse(localStorage.getItem("user"))
    ? ""
    : "";

const initialState = {
    isAuthenticated,
    // ...user
    user: user ? user : 
    {
      applicationType:""
    },
    profil: {},
    role: role ? role: "",
    updateProfil:{},
    imageUser:{},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const registerUser = createAsyncThunk(
    "/register",
    async (user, thunkAPI) => {
      console.log(user);
      try {
        return await authService.register(user)
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
export const loginUser = createAsyncThunk(
    "/login",
    async (user, thunkAPI) => {
      try {
        return await authService.login(user)
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
  export const getProfileUser = createAsyncThunk(
    "/profile",
    async (payload, thunkAPI) => {
        
        // const url = `http://213.190.4.135:8080/profile`
        const url = `https://fishventure.site/profile`
        const { token } = thunkAPI.getState().user.user;
    try {
        const resp = await axios.get(url,
          {
            headers: {
              Authorization: "Bearer " + token,
              accept: "*/*",
              "Content-Type": "multipart/form-data",
            },
          })

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


export const postImageUser = createAsyncThunk(
    "/upload-user-photo",
    async (payload, thunkAPI) => {
      console.log(payload);
      const url = `https://fishventure.site/upload-user-photo`
      // const url = `http://213.190.4.135:8080/upload-user-photo`
      try {
        const resp = await axios.post(url,payload,
          {
            headers: {     
              accept: "*/*",
              "Content-Type": "multipart/form-data",
            },
          })

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
export const updateUser = createAsyncThunk(
    "/update-user",
    async (payload, thunkAPI) => {
      console.log(payload)
      // const url = `http://213.190.4.135:8080/update-user`
      const url = `https://fishventure.site/update-user`
      const { token } = thunkAPI.getState().user.user;
      try {
        const resp = await axios.post(url,JSON.stringify(payload),
          {
            headers: {
              Authorization: "Bearer " + token,
              accept: "*/*",
              "Content-Type": "multipart/form-data",
            },
          })

        return resp.data;
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



export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
        localStorage.removeItem("user");
        state.isAuthenticated = false;
        state.user= null
        state.isError= false;
        state.isSuccess= false;
        state.profil={}
    },
  },
  extraReducers: (builder) => {

    builder
      .addCase(registerUser.pending, (state) => {
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        // state.user = null
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false
        state.isSuccess = true 
        
       
        state.user = action ? action.payload : {}
        console.log(state.user)   
        // state.message = action.payload
        // console.log(state.message)  
        
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getProfileUser.pending, (state) => {
        state.isLoading = true
      })

      .addCase(getProfileUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false
        state.isSuccess = true
        state.profil = action.payload
      })
      .addCase(getProfileUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })  
      .addCase(postImageUser.pending, (state) => {
        state.isLoading = true
      })

      .addCase(postImageUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false
        state.isSuccess = true
        state.imageUser = action.payload
        console.log(state.imageUser)
      })
      .addCase(postImageUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })  
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false
        state.isSuccess = true
        state.updateProfil = action.payload
        console.log(state.updateProfil)
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })  
    }
})
export const { logout } = authSlice.actions;

export default authSlice.reducer;