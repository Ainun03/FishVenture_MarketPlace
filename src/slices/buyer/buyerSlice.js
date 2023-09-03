import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// get buyer from localstorage

const buyer = JSON.parse(localStorage.getItem('buyer'))

const initialState = {
    // buyer: buyer ? buyer : null,
    pondBuyer: {},
    jenisIkanBuyer:{},
    getIkan:{},
    getBudidayaBuyer:{},
    postOrder:{},
    getOrder:{},
    cart:[],
    checkout:[{
      budidayaID: '',
      qty:0,
      bookingDate:""
    }],
    productDetail:[],
    sellerPondID:[],
    sellerDetailID: {
      id:"",
      userID:"",
      countryID:"",
      name:"perlu refresh",
      country:{},
      provinceID:"",
      province:{},
      cityID:"",
      city:{},
      districtID:"",
      district:{},
      detailAddress:"",
      noteAddress:"",
      type:"",
      longitude:"",
      latitude:"",
      url:"",
      image:""},
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
export const getOrderBuyer = createAsyncThunk(
  "/order",
  async (payload, thunkAPI) => {
    const url = `http://213.190.4.135:8080/order`
    const {token} = thunkAPI.getState().user.user
    try {
      const resp = await axios.get(url,
          {
          headers: {
              Authorization: "Bearer " + token,
              "accept": "*/*",
              'Content-Type': 'application/json',
          },
      }
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



export const buyerSlice = createSlice({
    name: "buyer",
    initialState,
    reducers: {
      // sellerPond:(state,action)=>{
      //   // getBudidayaBuyer.find((i) => i.id === id)
      //   let items = state.pondBuyer.find(val=>val.id === action.payload.id)
      //   let newItems = state.pondBuyer.find(val=>val.id === action.payload.id)
      //   // newItems.length?newItems[0]={...action.payload}:newItems=[{...action.payload}]
      //   // items.push(newItems[0])
      //   state.sellerPondID=items
      //   console.log(state.sellerPondID)
      //   localStorage.setItem('sellerPondID',JSON.stringify(state.sellerPondID))
      // },
      sellerDetail:(state,action)=>{
        state.sellerDetailID.id=action.payload.id
        state.sellerDetailID.userID=action.payload.userID
        state.sellerDetailID.countryID=action.payload.countryID
        state.sellerDetailID.name=action.payload.name
        state.sellerDetailID.country=action.payload.country
        state.sellerDetailID.provinceID=action.payload.provinceID
        state.sellerDetailID.province=action.payload.province
        state.sellerDetailID.cityID=action.payload.cityID
        state.sellerDetailID.city=action.payload.city
        state.sellerDetailID.districtID=action.payload.districtID
        state.sellerDetailID.district=action.payload.district
        state.sellerDetailID.detailAddress=action.payload.detailAddress
        state.sellerDetailID.noteAddress=action.payload.noteAddress
        state.sellerDetailID.type=action.payload.type
        state.sellerDetailID.longitude=action.payload.longitude
        state.sellerDetailID.latitude=action.payload.latitude
        state.sellerDetailID.status=action.payload.status
        state.sellerDetailID.url=action.payload.url
        state.sellerDetailID.image=action.payload.image
        // state.sellerDetailID=state.sellerDetailID.filter(item=>item.id === action.payload.id)
        console.log(state.sellerDetailID)
        localStorage.setItem('sellerDetailID',JSON.stringify(state.sellerDetailID))
      },
      productDetailID:(state,action)=>{
        state.productDetail=action.payload
        // state.productDetail = state.cart.filter(val=>val.id !== action.payload.id)
        console.log(state.productDetail)
        localStorage.setItem('productDetail',JSON.stringify(state.productDetail))
      },
      addToCheckout:(state,action)=>{
        // state.checkout.budidayaID=action.payload.budidayaID
        // state.checkout.qty=action.payload.qty
        // state.checkout.bookingDate=action.payload.bookingDate
        // state.cart=newItems
        state.checkout=action.payload
        console.log(state.checkout)
        localStorage.setItem('checkout',JSON.stringify(state.checkout))
      },
      addToCart:(state,action)=>{
        let olditems = state.cart.filter(val=>val.id !== action.payload.id)
        let newItems = state.cart.filter(val => val.id===action.payload.id)
        // let newItems = action.payload
        let newQty = newItems.length?newItems[0]?.qty+1:1
        newItems.length?newItems[0]={...action.payload, qty:newQty}:newItems=[{...action.payload,qty:newQty}]
        olditems.push(newItems[0])
        // newItems.push(newItems[0])
        state.cart=olditems
        // state.cart=newItems
        // state.cart=action.payload
        console.log(state.cart)
        localStorage.setItem('cart',JSON.stringify(state.cart))
      },
      deleteItem:(state,action)=>{
        state.cart=state.cart.filter(val=> val.id !== action.payload)
        localStorage.setItem('cart',JSON.stringify(state.cart))
      },
      incrementItem:(state,action)=>{
          state.cart=state.cart?.filter(val=>val.id === action.payload).map(val=>{
              const currentVal = val.qty
              val.qty=currentVal+1
              return val
          })
      },
      decrementItem:(state,action)=>{
          state.cart?.filter(val=>val.id===action.payload).map(val=>{
              const currentVal = val.qty
              if(currentVal === 1){
                  val.qty=currentVal
              }else{
                  val.qty=currentVal-1
              }
              return val
          })
      },
      incrementItemCo:(state,action)=>{
          state.checkout=state.checkout?.filter(val=>val.budidayaID === action.payload).map(val=>{
              const currentVal = val.qty
              val.qty=currentVal+1
              return val
          })
      },
      decrementItemCo:(state,action)=>{
          state.checkout?.filter(val=>val.budidayaID===action.payload).map(val=>{
              const currentVal = val.qty
              if(currentVal === 1){
                  val.qty=currentVal
              }else{
                  val.qty=currentVal-1
              }
              return val
          })
      },
      logoutBuyer: (state) => {
          localStorage.removeItem("buyer");
          state.pondBuyer= {}
          state.getBudidayaBuyer= {}
          state.productDetail= {}
          state.sellerDetailID= {}

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
        state.getBudidayaBuyer = action.payload ? action.payload :{}
      })
      .addCase(getListBudidayaBuyer.rejected, (state, action) => {
        // state.isLoading = false
        state.isError = true
        // state.message = action.payload
      }) 
      .addCase(getOrderBuyer.pending, (state) => {
        // state.isLoading = true
      })
      .addCase(getOrderBuyer.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.getOrder = action.payload
        console.log(state.getOrder)

      })
      .addCase(getOrderBuyer.rejected, (state, action) => {
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
export const {incrementItemCo,decrementItemCo,productDetailID,addToCheckout,sellerDetail,logoutBuyer,addToCart,deleteItem,incrementItem,decrementItem,getCart,updateCart } = buyerSlice.actions;

export default buyerSlice.reducer;