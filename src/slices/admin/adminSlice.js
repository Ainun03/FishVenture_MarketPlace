import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    listPond: [],
    updatePondStatus: {},
    mySoldProducts: [],
    pengajuanDetail:{},
    isLoadingPond: false,
};


export const getListPond = createAsyncThunk(
    "/list-pond",
    async (paylod,thunkAPI) => {
        // const { id, accessToken } = thunkAPI.getState().user;
        // let url=`https://fishventure.site/list-pond`
        let url=`http://213.190.4.135:8080/list-pond`
        // let url = `${process.env.REACT_APP_BASE_URL}/api/v1/products/show/${id}`;

        try {
            const resp = await axios.get(url
                // {
                // headers: {
                //     Authorization: "Bearer " + accessToken,
                //     "Content-Type": "multipart/form-data",
                // },
            // }
            );

            const { data } = resp.data;
            // console.log(data);

            return data;
    //   console.log({data})
    //   return data;

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

export const updatePond = createAsyncThunk(
    "/update-pond-status",
    async (payload,thunkAPI) => {
        console.log(payload)
        const { token } = thunkAPI.getState().user.user;
        // let url=`https://fishventure.site/update-pond-status`
        let url=`http://213.190.4.135:8080/update-pond-status`
        // let url = `${process.env.REACT_APP_BASE_URL}/api/v1/products/show/${id}`;

        try {
            const resp = await axios.post(url,JSON.stringify(payload),
                {
                headers: {
                    Authorization: "Bearer " + token,
                    "accept": "*/*",
                    'Content-Type': 'application/json',
                },
            }
            );

            return resp.data;
    //   console.log({data})
    //   return data;

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

  const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
      logoutBuyer: (state) => {
        localStorage.removeItem("admin");
        state.listPond= {}
        state.pengajuanDetail= {}
    },
      pengajuanDetailID:(state,action)=>{
        state.pengajuanDetail=action.payload
        // state.productDetail = state.cart.filter(val=>val.id !== action.payload.id)
        console.log(state.pengajuanDetail)
        localStorage.setItem('productDetail',JSON.stringify(state.pengajuanDetail))
      },
    },
    extraReducers: {
        [getListPond.pending]: (state) => {
            state.isLoadingPond = true;
        },
        [getListPond.fulfilled]: (state, { payload }) => {
            // handle if there are no data do not make it as null
            if (payload){
                state.listPond = payload;
            }

            state.isLoadingPond = false;
        },
        [getListPond.rejected]: (state, action) => {
            state.isLoadingPond = false;
        },
        [updatePond.pending]: (state) => {
            state.isLoadingPond = true;
        },

        [updatePond.fulfilled]: (state, action) => {
            state.updatePondStatus = action.payload
        },
        [updatePond.rejected]: (state, action) => {
            state.isLoadingPond = false;
        },
    },
});

export const {pengajuanDetailID} = adminSlice.actions;

export default adminSlice.reducer;
