import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from "./landing_page/signup/Signup";
import About from "./landing_page/about/About";
import ProductPage from "./landing_page/products/ProductsPage";
import Support from "./landing_page/support/Support";

import { BrowserRouter , Routes , Route } from "react-router-dom";

import PricingPage from './landing_page/pricing/PricingPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import SupportPage from './landing_page/support/Support';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/products" element={<ProductPage/>} />
    <Route path="/pricing" element={<PricingPage/>} />
    <Route path="/support" element={<SupportPage/>} />

  </Routes>
  <Footer/>
  </BrowserRouter>
);

