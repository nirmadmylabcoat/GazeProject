import React from "react";
import "./sass/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx'
import WomenShop from "./pages/WomenShop.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/womenshop" element={<WomenShop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
  );
}

export default App;
