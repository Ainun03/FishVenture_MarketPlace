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
        
        const url = `http://213.190.4.135:8080/profile`
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
export const updateUser = createAsyncThunk(
    "/update-user",
    async (user, thunkAPI) => {
      // const { token } = thunkAPI.getState().user.user.data;
      console.log(user);
      // const url = `http://localhost:8080/update-user`
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
        console.log(state.user)
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
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
        console.log(state.profil)
      })
      .addCase(getProfileUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })  
    }
})
//   extraReducers: {
//     // register
//     [registerUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [registerUser.fulfilled]: (state,{ payload }) => {
//       // state.isAuthenticated = true;
//       // state.id = action.payload ? action.payload : {};;
//       // state.register = action.payload ? action.payload : {};
//       state.isAuthenticated = true;
//       state.id = payload.id;
//       state.token = payload.token;
//       state.name = payload.name;
//       state.email = payload.email;
//       state.type = payload.type;
      
//       // state.address = payload.address;
      
//       state.phoneNumber = payload.phoneNumber;
//       console.log(state.name);
//     },
//     [registerUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     },
//   },
// });

export const { logout } = authSlice.actions;

export default authSlice.reducer;