import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authService from "../services/authService";
import { toast } from "react-toastify";

// get User from localstorage

const user = JSON.parse(localStorage.getItem('user'))
    // ? JSON.parse(localStorage.getItem("user"))
    // : {
         
    //       id:"",
    //       token:"",
    //       name:"",
    //       email:"",
    //       detailAddress:"",
    //       applicationType:"",
    //       type:"",
    //       image:"",
    //       isError: false,
    //       isSuccess: false,
    //       isLoading: false,
    //       message: '',
    //   };
const isAuthenticated = JSON.parse(localStorage.getItem("user"))
    ? true
    : false;
const role = JSON.parse(localStorage.getItem("user"))
    ? ""
    : "";

const initialState = {
    isAuthenticated,
    // ...user
    user: user ? user : null,
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
  export const getUser = createAsyncThunk(
    "/profile",
    async (thunkAPI) => {
      const { token,applicationType, } = thunkAPI.getState().user.user.data;
      // const { applicationType } = thunkAPI.getState().user.user.data;
      console.log({applicationType})
      const url = `http://213.190.4.135:8080/profile`
      try {
        // return await authService.getUser(payload)  
        const resp = await axios.get(url, {applicationType}, {
          headers: {
              Authorization: "Bearer " + token,
              accept: "*/*",
              "Content-Type": "multipart/form-data",
              // 'Content-Type': 'application/json',
          },
      });
      // remove id from response
      const { data } = resp.data.data;
      console.log({data})
      return data;
        // if (isAuthenticated){
        //   const { token } = thunkAPI.getState().user.user.data;
        //   console.log({token})
        //   res = await axios.get(url,
        //     {
        //       headers: {
        //         Authorization: "Bearer " + token,
        //         accept: "*/*",
        //         "Content-Type": "multipart/form-data",
        //       },
  
        //   })
        // }else {
        //   res = await axios.get(url);
        // return res.data
        // return await authService.getUser(user)
        // }
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
      const { token } = thunkAPI.getState().user.user.data;
      console.log(user);
      const url = `http://localhost:8080/update-user`
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
        state.user= null;
        state.isError= false;
        state.isSuccess= false;
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
        state.role=action.payload.data.applicationType
        console.log(state.user)
        console.log(state.role)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true
      })

      .addCase(getUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false
        state.isSuccess = true
        state.profil = action.payload
        console.log(state.profil)
      })
      .addCase(getUser.rejected, (state, action) => {
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