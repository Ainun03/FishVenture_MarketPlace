import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import poolService from "../../services/poolService";
import sellerService from "../../services/sellerService"
import { toast } from "react-toastify";

// get Seller from localstorage

const seller = JSON.parse(localStorage.getItem('seller'))   
const userStatus = ["reviewed","submission","actived"];

const initialState = {
    // seller: seller ? seller : null,  
    pond: seller ? seller : {
      id:"",
      userID:"",
      countryID:"",
      name:"",
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
      image:"",
      listBerkas:[],
      listPool:[],
      status: userStatus ? userStatus :""
    },
    kolam: {},
    jenisIkan:{},
    getIkan:{},
    getBudiday:{},
    imageKolam: {},
    createPool:{},
    createPond:{},
    startBudaya:{},
    updBudaya:{},
    isActivate:false
};
export const getKolam = createAsyncThunk(
  "/list-pool",
  async ({id},thunkAPI) => {
    console.log({id})
    let url=`http://213.190.4.135:8080/list-pool?id=${id}`;
    try {
        const resp = await axios.get(url);
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
export const getJenisIkan = createAsyncThunk(
  "/list-fish-species",
  async (payload, thunkAPI) => {
    let url=`http://213.190.4.135:8080/list-fish-species`;
    const { token } = thunkAPI.getState().user.user;
    try {
        const resp = await axios.get(url,
          {
            headers: {
              Authorization: "Bearer " + token,
              accept: "*/*",
              "Content-Type": "application/json",
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
export const getBudidaya = createAsyncThunk(
  "/list-budidaya-seller",
  async ({id},thunkAPI) => {
    let url=`http://213.190.4.135:8080/list-budidaya-seller?id=${id}`;
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
export const getPond = createAsyncThunk(
  "/pond",
  async (payload, thunkAPI) => {
    let url= `http://213.190.4.135:8080/pond`;
    try {
      const { isAuthenticated } = thunkAPI.getState().user;
    let res;
    if (isAuthenticated){
      const { token } = thunkAPI.getState().user.user;
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

export const createjenisIkan = createAsyncThunk(
    "/create-fish-species",
    async (payload, thunkAPI) => {
        console.log(payload)
        const url = `http://213.190.4.135:8080/create-fish-species`
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
  export const imageKolamSeller = createAsyncThunk(
    "/upload-pool-photo",
    async (payload, thunkAPI) => {
      console.log(payload)
      try {
        return await sellerService.kolamFoto(payload)
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
  export const createPoolSeller = createAsyncThunk(
    "/create-pool",
    async ({name,long,wide,image}, thunkAPI) => {
      console.log("payload",image)
      try {
        return await sellerService.createPool({name,long,wide,image})
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
  //pengajuan Create
  export const createPondSeller = createAsyncThunk(
    "/create-pond",
    async (payload, thunkAPI) => {
      const url = `http://213.190.4.135:8080/create-pond`
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
// pond create start budidaya
  export const createBudidayaSeller = createAsyncThunk(
    "/create-budidaya",
    async (payload, thunkAPI) => {
      const url = `http://213.190.4.135:8080/create-budidaya`
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
// pond update price start budidaya
  export const updateBudidayaSeller = createAsyncThunk(
    "/create-multiple-pricelist",
    async (payload, thunkAPI) => {
      const url = `http://213.190.4.135:8080/create-multiple-pricelist`
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


export const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    logoutSeller: (state) => {
        localStorage.removeItem("seller");
        state.isActivate = false;
        state.kolam= {};
        state.pond= {
          status:["reviewed","submission","actived"] ? ["reviewed","submission","actived"] :""
        };
        state.jenisIkan={};
        state.getIkan={};
        state.getBudiday={};
        state.imageKolam= {};
        state.createPool={};
        state.createPond={};
        state.startBudaya={};
    },
  },
  extraReducers: (builder) => {

    builder      
      .addCase(createjenisIkan.pending, (state) => {
        // state.isLoading = true
      })
      .addCase(createjenisIkan.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.jenisIkan = action.payload
      })
      .addCase(createjenisIkan.rejected, (state, action) => {
        // state.isLoading = false
        state.isError = true
        // state.message = action.payload
      }) 

      .addCase(getPond.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPond.fulfilled, (state, action) => {
        // state.isAuthenticated = true;    
        state.pond.id=action.payload.id
        state.pond.userID=action.payload.userID
        state.pond.countryID=action.payload.countryID
        state.pond.name=action.payload.name
        state.pond.country=action.payload.country
        state.pond.provinceID=action.payload.provinceID
        state.pond.province=action.payload.province
        state.pond.cityID=action.payload.cityID
        state.pond.city=action.payload.city
        state.pond.districtID=action.payload.districtID
        state.pond.district=action.payload.district
        state.pond.detailAddress=action.payload.detailAddress
        state.pond.noteAddress=action.payload.noteAddress
        state.pond.type=action.payload.type
        state.pond.longitude=action.payload.longitude
        state.pond.latitude=action.payload.latitude
        state.pond.status=action.payload.status
        state.pond.image=action.payload.image
        state.pond.listPool=action.payload.listPool
        state.pond.listBerkas=action.payload.listBerkas

        if (state.status !== "actived"){
            state.isActivate=true
        }
        // state.pond = action.payload
        // console.log(state.pond)
      })
      .addCase(getPond.rejected, (state, action) => {
        // state.isLoading = false
        state.isError = true
        state.message = action.payload
      }) 

      .addCase(getKolam.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getKolam.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.kolam = action.payload ? action.payload : {};
        console.log(state.kolam)
      })
      .addCase(getKolam.rejected, (state, action) => {
        // state.isLoading = false
        state.isError = true
        state.message = action.payload
      }) 
      .addCase(getBudidaya.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBudidaya.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.isActivate=true
        state.getBudiday = action.payload
      })
      .addCase(getBudidaya.rejected, (state, action) => {
        // state.isLoading = false
        state.isError = true
        state.message = action.payload ? action.payload : {};
      }) 
      .addCase(getJenisIkan.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getJenisIkan.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.getIkan =action.payload ? action.payload : {};
      })
      .addCase(getJenisIkan.rejected, (state, action) => {
        // state.isLoading = false
        state.isError = true
        state.message = action.payload
      }) 
      // image kolam

      .addCase(imageKolamSeller.pending, (state) => {
        state.isLoading = true
      })
      .addCase(imageKolamSeller.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.imageKolam = action.payload ? action.payload : {};
        console.log(state.imageKolam)
      })
      .addCase(imageKolamSeller.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }) 
      // pool selelr
      .addCase(createPoolSeller.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPoolSeller.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.isActivate=true
        state.createPool = action.payload ? action.payload : {};
        console.log(state.createPool)
      })
      .addCase(createPoolSeller.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }) 
      // pond seller pengajuan
      .addCase(createPondSeller.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPondSeller.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.isActivate=true
        state.createPond = action.payload ? action.payload : {};
        console.log(state.createPond)
      })
      .addCase(createPondSeller.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      // start budidaya 
      .addCase(createBudidayaSeller.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createBudidayaSeller.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.isActivate=true
        state.startBudaya = action.payload ? action.payload : {};
        console.log(state.startBudaya)
      })
      .addCase(createBudidayaSeller.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }) 
      .addCase(updateBudidayaSeller.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateBudidayaSeller.fulfilled, (state, action) => {
        // state.isAuthenticated = true;
        state.isActivate=true
        state.updBudaya = action.payload ? action.payload : {};
        console.log(state.updBudaya)
      })
      .addCase(updateBudidayaSeller.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }) 
    }
})


export const { logoutSeller } = sellerSlice.actions;

export default sellerSlice.reducer;