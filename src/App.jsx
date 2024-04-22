import React from "react";
import "./sass/main.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home.jsx";
import WomenShop from "./pages/WomenShop.jsx";
import MenShop from "./pages/MenShop.jsx";
import ScrollToTop from "./components/Global/ScrollToTop.jsx";
import Trending from "./pages/Trending.jsx";
import ProductDisplay from "./pages/ProductDisplay.jsx"
import AboutUs from "./pages/AboutUs.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
  const location = useLocation(); // This call is within the Router component

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/womenshop" element={<WomenShop />} />
          <Route path="/menshop" element={<MenShop />} />
          <Route path="/trending" element = {<Trending />}></Route>
          <Route path="/product/:id" element = {<ProductDisplay />}></Route>
          <Route path="/about" element = {<AboutUs />}></Route>
          <Route path="/cart" element ={<Checkout />}></Route>
        </Routes>
      </ScrollToTop>
    </AnimatePresence>
  );
}

export default App;
