import React,{useEffect} from 'react';
import { BrowserRouter, Routes, Route,Navigate,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";

// ----  Rendering  ----- \\ 
import { getListCountry } from './slices/listAddressSlice';
import { getProfileUser } from './slices/authSlice';

// ----- AUTH ---- \\\
import AuthPage from './pages/auth/AuthPage'
import FormLogin from './components/auth/FormLogin';
import FormRegister from './components/auth/FormRegister';
import FormLoginPembeli from './components/auth/FormloginPembeli';
import { AuthDashboard } from './components/auth/LoginBoard';

/// --- Buyers --- \\\
import HomePage from './pages/buyerPages/home';
import ProductDetail from './pages/buyerPages/products/productDetail';
import Checkout from './pages/buyerPages/checkout';
import ProfilBuyer from './pages/buyerPages/profile/ProfilBuyer';
import ProductSeller from './pages/buyerPages/products/productSeller';
import JadwalPage from './pages/buyerPages/jadwalPage';
import PesananPage from './pages/buyerPages/pesananPage';
import Berlangsung from './components/buyers/pesanan/berlangsung';
import Selesai from './components/buyers/pesanan/selesai';

// ----- SELLER ------ \\\\
import HomeSel from './pages/sellerPages/homeSel'
import { HomeDashboard } from './pages/sellerPages/HomeDashboard'
import ListDas from './pages/sellerPages/ListDash';
  // Seller--inventory----////
import Invent from './pages/sellerPages/inventory/Inventory';
import AddProductBudidaya from './pages/sellerPages/inventory/AddProductBudidaya';
import DetailSeller from './pages/sellerPages/inventory/DetailProduk';
import JenisIkan from './pages/sellerPages/inventory/JenisIkan';

import ProfileSel from './pages/sellerPages/Profile';

  //  Seller--Laporan----////
import TransaksiSeller from './pages/sellerPages/Transaksi';
import Laporan from './pages/sellerPages/laporan/Laporan';
import KolamDetail from './pages/sellerPages/laporan/laporanKolamDetail';
import AddKolam from './pages/sellerPages/laporan/AddKolam';
import AddBudidaya from './pages/sellerPages/laporan/AddBudidaya';
import UpdateProduct from './pages/sellerPages/inventory/updateProduct';

// Monitoring Page
import HomeMon from './pages/monitoring/homeMon';
import { HomeMonitor } from './pages/monitoring/homeCall';
import DashboardMon from './components/monitoring/Dashboard/DashboardMon';
import Perizinan from './pages/monitoring/perizinan/Perizinan';
import DetailStatusAdmin from './pages/monitoring/perizinan/DetailStatus';
import Data from './components/monitoring/Data';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify"
// Testing
import Flask from './pages/Testing';


function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const {isAuntheticated, user, profil} =useSelector(
    (store) =>store.user
  )
  const {isActivate, pond} =useSelector(
    (store) =>store.seller
  )
  
  const ActiveUser =({children})=>{
    if (isActivate) {
      return children;
    } else return <Navigate to="/home-sel/laporan/post-budidaya" replace />;
  }
  const StatusPengajuan =({children})=>{
    if (pond.status !=="reviewed"){
      return children;
    }
    else return <Navigate to="/home-sel" replace />;
  }
  const ContentRouteProtected = ({ children }) => {
    if (profil.phone !== "" || profil.photo !== "") {
        return children;
    } else return (
      toast.warn(' Lengkapi Profil Anda Terlebih Dahulu!', 
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }),
          <Navigate to="/buyer-profil" replace />
    )
};

  // if (isAuntheticated !== true){
  //     useEffect(()=>{
  //       dispatch(getProfileUser())
  //     },[dispatch])
  // }


  useEffect(() => {
    if (!isAuntheticated){
      dispatch(getProfileUser())
    }
  }, [dispatch,isAuntheticated]);
  
  useEffect(() =>{
    if (isAuntheticated !== true){
      dispatch(getListCountry())
    }
    },[dispatch,isAuntheticated])


  const RoleRouteSeller = ({ children }) => {
    if (user.applicationType !== "seller"){ 
      return children;
    } else return <Navigate to="/home-sel" replace />
          
  };

  // useEffect(() => {
  //   // if (isAuntheticated) {
  //   //   <Navigate  to="/" replace/>
  //   // }
  //   if (user && user.data.applicationType !== "seller") {
  //     <Navigate  to="/home-sel" replace/>
  //     // navigate('/home-sel')
  //     return 
  //   }
  // }, [ user, Navigate]);

  // const AuthRoute = ({ children }) => {
  //   if (!isAuntheticated) {
  //       return children;
  //   } else return <Navigate to="/profile" replace />;
  // };
  // const ContentRoute = ({ children }) => {
  //   if (isAuntheticated) {
  //       return children;
  //   } else return <Navigate to="/login" replace />;
  // };

  return (
    <BrowserRouter>
      <ToastContainer
          position="top-center"
          autoClose={1500}
          // autoClose={false}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />
      <Routes >
        {/* Auth */}
        <Route 
          path='/' 
          element={
            <RoleRouteSeller>
              <HomePage />
            </RoleRouteSeller>
          } 
        />
        <Route element={<AuthPage />}>
          <Route path='auth-page' element={<AuthDashboard />} />
          <Route path='auth-page/login-penjual' element={<FormLogin />} />
          <Route path='auth-page/login-Pembeli' element={<FormLoginPembeli />} />
          <Route path='auth-page/register' element={<FormRegister />} />
        </Route>
        {/* ------- */}
        <Route 
        path='/product-detail/:id' element={
          <ContentRouteProtected>
            <ProductDetail />
          </ContentRouteProtected>
        } />
        <Route path='/product-list-seller/:id' element={<ProductSeller />} />
        {/* buyer */}
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/buyer-profil' element={<ProfilBuyer />} />
        <Route path='/jadwal-panen' element={<JadwalPage />} />
        <Route element={<PesananPage />} >
          <Route path='pesanan' element={<Berlangsung/>}/>
          <Route path='pesanan/pesanan-selesai' element={<Selesai/>}/>
        </Route>
        {/* ----- */}
        {/* Seller */}
        <Route element={
          // <RoleRoute>
            <HomeSel />
          // </RoleRoute>
        } >        
          <Route path="home-sel" 
              element={
                <HomeDashboard />      
            }/> 
            <Route path="home-sel/list" element={
              <ListDas />
            }/>
            <Route 
              path="home-sel/transaksi" 
              element={
                <ActiveUser>
                  <StatusPengajuan>
                    <TransaksiSeller />
                  </StatusPengajuan>
                </ActiveUser>                   
              }
            />
              <Route 
                path="home-sel/inventory" 
                element={
                  <Invent/>
                  // <ActiveUser>
                  //   <StatusPengajuan>
                  //   </StatusPengajuan>
                  // </ActiveUser>
                }/>
              <Route 
                path="home-sel/inventory/post-budidaya" 
                element={
                  // <ActiveUser>
                    // <StatusPengajuan>
                      <AddProductBudidaya />
                    // </StatusPengajuan>
                  // </ActiveUser>
                }
                ></Route>
              <Route path="home-sel/inventory/detail" element={<DetailSeller />}/>
              <Route path="home-sel/inventory/post-jenis-ikan" element={<JenisIkan />}/>
              <Route path="home-sel/inventory/update-product/:id" element={<UpdateProduct />}/>
              <Route path="home-sel/laporan" element={<Laporan />}/>
              <Route path="home-sel/laporan/post-kolam" element={<AddKolam />}></Route>
              <Route path="home-sel/laporan/post-budidaya" element={<AddBudidaya />}></Route>
              <Route path="home-sel/laporan/detail" element={<KolamDetail />}></Route>
              <Route path="home-sel/profil" element={<ProfileSel />}></Route>
        </Route>
        {/* Monitoring */}
        <Route 
          element={
            <RoleRouteSeller>
              <HomeMon/>   
            </RoleRouteSeller>
          } >
          <Route path="home-mon" element={       
              <HomeMonitor />   
          }></Route>
          <Route path="home-mon/dashboard-mon" element={<DashboardMon />}></Route>
          <Route path="home-mon/perizinan" element={<Perizinan />}></Route>
          <Route path="home-mon/perizinan/detail-izin/:id" element={<DetailStatusAdmin checkStatus={true}/>}></Route>
          <Route path="home-mon/data" element={<Data/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
