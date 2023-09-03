import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getUsers = createAsyncThunk(
    "/profile",
    async ( {applicationType}, thunkAPI) => {
      // console.log({applicationType})
      let url=`https://fishventure.site/profile`
      try {
        const { isAuthenticated } = thunkAPI.getState().user;
        let resp;
        if (isAuthenticated){
          const { token } = thunkAPI.getState().user.user.data
          // const { applicationType } = thunkAPI.getState().user.user.data
          console.log({token})
          console.log({applicationType})
          resp = await axios.get(url, JSON.stringify({applicationType}), {
            headers: {
                Authorization: "Bearer " + token,
                accept: "*/*",
                // 'Content-Type': 'application/json',
                "Content-Type": "multipart/form-data",
            },
        });
        }else {

          resp = await axios.get(url);
        }
      // remove id from response
      const data = resp.data;
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
  export const profilSlice = createSlice({
    name: "profil",
    initialState: {
      register: {},
      login: {},
      profil:{},

    },
    reducers: {
      logout: (state) => {
        state.login = {
          isAuthenticated:false
        };
        state.register={};
      }
    },
    extraReducers: {
      // register
      // get
      [getUsers.pending]: (state, action) => {
        // state.loading = true;
      },
      [getUsers.fulfilled]: (state, action) => {
        state.loading = false;
        state.isAuthenticated=true
        state.profil = action.payload
  
        state.error = action.payload.message;
      },
      [getUsers.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },

    },
  });
  
  export const { logout } = profilSlice.actions;
  
  const { reducer } = profilSlice;
  export default reducer;