import React from "react";
import "./sass/main.scss";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from './pages/Home.jsx'
import WomenShop from "./pages/WomenShop.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import MenShop from "./pages/MenShop.jsx";



function App() {

  const location = useLocation() // This call is within the Router component

  return (
      <AnimatePresence mode = "wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/womenshop" element={<WomenShop />} />
          <Route path="/menshop" element={<MenShop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </AnimatePresence>
  );
}

export default App;
