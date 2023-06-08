import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ----  Rendering  ----- \\ 
// ----- AUTH ---- \\\
import AuthPage from './pages/auth/AuthPage'
import FormLogin from './components/auth/FormLogin';
import FormRegister from './components/auth/FormRegister';
import { AuthDashboard } from './components/auth/LoginBoard';

/// --- Buyers --- \\\
import HomePage from './pages/buyerPages/home';
import ProductDetail from './pages/buyerPages/products/productDetail';
import Checkout from './pages/buyerPages/checkout';
import ProfilBuyer from './pages/buyerPages/profile/ProfilBuyer';

// ----- SELLER ------ \\\\
import HomeSel from './pages/sellerPages/homeSel'
import {HomeDashboard} from './pages/sellerPages/HomeDashboard'
import ListDas from './pages/sellerPages/ListDash';
  // Seller--inventory----////
import Invent from './pages/sellerPages/inventory/Inventory';
import AddProduct from './pages/sellerPages/inventory/AddProduct';

import ProfileSel from './pages/sellerPages/Profile';

  //  Seller--Laporan----////
import Laporan from './pages/sellerPages/laporan/Laporan';

// Monitoring Page
import HomeMon from './pages/monitoring/homeMon';
import { HomeMonitor } from './pages/monitoring/homeCall';
import ChartMon from './components/monitoring/Chart';

// Testing
import Flask from './pages/Testing';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path='/' element={<HomePage />} />
        <Route element={<AuthPage />}>
          <Route path='auth-page' element={<AuthDashboard />} />
          <Route path='auth-page/login' element={<FormLogin />} />
          <Route path='auth-page/register' element={<FormRegister />} />
        </Route>
        {/* ------- */}
        <Route path='/flask' element={<Flask />} />
        <Route path='/product-detail' element={<ProductDetail />} />
        {/* buyer */}
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/buyer-profil' element={<ProfilBuyer />} />
        {/* ----- */}
        {/* Seller */}
        <Route element={<HomeSel />} >
          <Route path="home-sel" element={<HomeDashboard />}></Route>
          <Route path="home-sel/list" element={<ListDas />}></Route>
          <Route path="home-sel/inventory" element={<Invent />}></Route>
          <Route path="home-sel/inventory/post-product" element={<AddProduct />}></Route>
          <Route path="home-sel/laporan" element={<Laporan />}></Route>
          <Route path="home-sel/profil" element={<ProfileSel />}></Route>
        </Route>
        {/* Monitoring */}
        <Route element={<HomeMon />} >
          <Route path="home-mon" element={<HomeMonitor />}></Route>
          <Route path="home-mon/chart" element={<ChartMon />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
