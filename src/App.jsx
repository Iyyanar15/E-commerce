import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/home.jsx";
import ProductPage from "./Product Page/ProductPage.jsx";
import Product from "./Product/product.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/ProductPage/products" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
