import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/home.jsx";
import ProductPage from "./Product Page/ProductPage.jsx";
import Product from "./Product/product.jsx";
import Wishlist from "./CartPage/Wishlist.jsx";
import Termsconditions from "./common/TermsAndConditions.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/ProductPage/products" element={<Product />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/terms&conditions" element={<Termsconditions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
