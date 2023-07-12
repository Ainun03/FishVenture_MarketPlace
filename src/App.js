import React,{useEffect} from 'react';
import { BrowserRouter, Routes, Route,Navigate,useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

// ----  Rendering  ----- \\ 
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

// ----- SELLER ------ \\\\
import HomeSel from './pages/sellerPages/homeSel'
import {HomeDashboard} from './pages/sellerPages/HomeDashboard'
import ListDas from './pages/sellerPages/ListDash';
  // Seller--inventory----////
import Invent from './pages/sellerPages/inventory/Inventory';
import AddProduct from './pages/sellerPages/inventory/AddProduct';
import DetailSeller from './pages/sellerPages/inventory/DetailProduk';

import ProfileSel from './pages/sellerPages/Profile';

  //  Seller--Laporan----////
import Laporan from './pages/sellerPages/laporan/Laporan';
import KolamDetail from './pages/sellerPages/laporan/laporanKolamDetail';
import AddKolam from './pages/sellerPages/laporan/AddKolam';
import AddBudidaya from './pages/sellerPages/laporan/AddBudidaya';

// Monitoring Page
import HomeMon from './pages/monitoring/homeMon';
import { HomeMonitor } from './pages/monitoring/homeCall';
import DashboardMon from './components/monitoring/Dashboard/DashboardMon';
import Perizinan from './pages/monitoring/Perizinan';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Testing
import Flask from './pages/Testing';


function App() {
  // const navigate = useNavigate();
  const {isAuntheticated,user} =useSelector(
    (store) =>store.user
  )
  console.log(user)
  const RoleRoute = ({ children }) => {
    if (user.data.applicationType === "buyer"){ 
      // <Navigate ("/")   
      <Navigate  to="/" replace/>
      return children;
    }else if(user.data.applicationType === "seller"){
      <Navigate  to="/home-sel" replace/>
      return children;
      // Navigate ("/home-sel")
    }else if(user.data.applicationType === "admin"){
      // Navigate ("/home-mon")
      <Navigate  to="/home-mon" replace/>
      return children;
    } else return <Navigate to="/" replace />
  };

  // useEffect(() => {
   
  //   if (user.data.applicationType !== "seller") {
  //     <Navigate  to="/home-sel" replace/>
  //   }
  // }, [ user.data.applicationType]);

  const AuthRoute = ({ children }) => {
    if (!isAuntheticated) {
        return children;
    } else return <Navigate to="/profile" replace />;
  };
  const ContentRoute = ({ children }) => {
    if (isAuntheticated) {
        return children;
    } else return <Navigate to="/login" replace />;
  };

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
        <Route path='/' element={<HomePage />} />
        <Route element={<AuthPage />}>
          <Route path='auth-page' element={<AuthDashboard />} />
          <Route path='auth-page/login-penjual' element={<FormLogin />} />
          <Route path='auth-page/login-Pembeli' element={<FormLoginPembeli />} />
          <Route path='auth-page/register' element={<FormRegister />} />
        </Route>
        {/* ------- */}
        <Route path='/flask' element={<Flask />} />
        <Route path='/product-detail' element={<ProductDetail />} />
        <Route path='/product-list-seller' element={<ProductSeller />} />
        {/* buyer */}
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/buyer-profil' element={<ProfilBuyer />} />
        {/* ----- */}
        {/* Seller */}
        <Route element={
          // <RoleRoute>
            <HomeSel />
          // </RoleRoute>
        } >        
            <Route path="home-sel" 
              element={
              // <RoleRoute>
                <HomeDashboard />
              // </RoleRoute>     
            }></Route> 
            <Route path="home-sel/list" element={
            <ListDas />
            }></Route>
            <Route path="home-sel/inventory" element={<Invent />}></Route>
            <Route path="home-sel/inventory/post-product" element={<AddProduct />}></Route>
            <Route path="home-sel/inventory/detail" element={<DetailSeller />}></Route>
            <Route path="home-sel/laporan" element={<Laporan />}></Route>
            <Route path="home-sel/laporan/post-kolam" element={<AddKolam />}></Route>
            <Route path="home-sel/laporan/post-budidaya" element={<AddBudidaya />}></Route>
            <Route path="home-sel/laporan/detail" element={<KolamDetail />}></Route>
            <Route path="home-sel/profil" element={<ProfileSel />}></Route>
        </Route>
        {/* Monitoring */}
        <Route element={<HomeMon />} >
          <Route path="home-mon" element={<HomeMonitor />}></Route>
          <Route path="home-mon/dashboard-mon" element={<DashboardMon />}></Route>
          <Route path="home-mon/perizinan" element={<Perizinan />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
