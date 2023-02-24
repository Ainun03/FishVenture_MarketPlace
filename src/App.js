import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import LoginPage from './pages/auth/LoginPage'
import HomePage from './pages/buyerPages/home';
import ProductDetail from './pages/buyerPages/products/productDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/product-detail' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
