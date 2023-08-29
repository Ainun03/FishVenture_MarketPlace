import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// get buyer from localstorage

const buyer = JSON.parse(localStorage.getItem('buyer'))

const initialState = {
    buyer: buyer ? buyer : null,
    pondBuyer: {},
    jenisIkanBuyer:{},
    getIkan:{},
    getBudidayaBuyer:{},
    postOrder:{},
    isError:false,
};

// export const profileBuyer = createAsyncThunk(
//     "/profile",
//     async (payload, thunkAPI) => {
        
//         const url = `http://213.190.4.135:8080/profile`
//         const { token } = thunkAPI.getState().user.user;
//     try {
//         const resp = await axios.get(url,
//           {
//             headers: {
//               Authorization: "Bearer " + token,
//               accept: "*/*",
//               "Content-Type": "multipart/form-data",
//             },
//           })

//         return resp.data.data;
//       } catch (error) {
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString()
//         toast.dismiss();
//         toast.error(message);
//         return thunkAPI.rejectWithValue(message)
//       }
//     }
//   );
export const listPondBuyer = createAsyncThunk(
    "/list-pond",
    async (payload, thunkAPI) => {
        console.log(payload)
        const url = `http://213.190.4.135:8080/list-pond`
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

export const getListBudidayaBuyer = createAsyncThunk(
  "/list-budidaya",
  async ({id},thunkAPI) => {
    let url=`http://213.190.4.135:8080/list-budidaya?id=${id}`;
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

// ========Transaction =======\\\

export const createOrderBuyer = createAsyncThunk(
  "/create-order",
  async (payload, thunkAPI) => {
    const url = `http://213.190.4.135:8080/create-order`
    const {token} = thunkAPI.getState().user.user
    console.log(payload)
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



export const buyerSlice = createSlice({
    name: "buyer",
    initialState,
    reducers: {
      logout: (state) => {
          localStorage.removeItem("buyer");
          state.buyer= {}

      },
    },
    extraReducers: (builder) => {
    builder      
      .addCase(listPondBuyer.pending, (state) => {
        // state.isLoading = true
      })
      .addCase(listPondBuyer.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.pondBuyer = action.payload
        console.log(state.pondBuyer)
      })
      .addCase(listPondBuyer.rejected, (state, action) => {
        // state.isLoading = false
        state.isError = true
        // state.message = action.payload
      }) 
      // .addCase(profileBuyer.pending, (state) => {
      //   // state.isLoading = true
      // })
      // .addCase(profileBuyer.fulfilled, (state, action) => {
      //   // state.isAuthenticated = true;
      //   state.profile = action.payload

      // })
      // .addCase(profileBuyer.rejected, (state, action) => {
      //   // state.isLoading = false
      //   state.isError = true
      //   // state.message = action.payload
      // }) 
      // budidaya
      .addCase(getListBudidayaBuyer.pending, (state) => {
        // state.isLoading = true
      })
      .addCase(getListBudidayaBuyer.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.getBudidayaBuyer = action.payload
      })
      .addCase(getListBudidayaBuyer.rejected, (state, action) => {
        // state.isLoading = false
        state.isError = true
        // state.message = action.payload
      }) 
    
      .addCase(createOrderBuyer.pending, (state) => {
        // state.isLoading = true
      })
      .addCase(createOrderBuyer.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.postOrder = action.payload
        console.log(state.postOrder)

      })
      .addCase(createOrderBuyer.rejected, (state, action) => {
        // state.isLoading = false
        state.isError = true
        // state.message = action.payload
      }) 
    
    }
})
export const { logout } = buyerSlice.actions;

export default buyerSlice.reducer;