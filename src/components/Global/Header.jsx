import React from "react";
import {motion} from "framer-motion";
import {Link} from 'react-router-dom'

const Header = ({bgColor}) => {
  return (
    <motion.div className="header" 
    style={{ backgroundColor: bgColor }}
    initial={{ opacity: 0, y: -180}}
    animate={{ opacity: 1, y: 0}}
    transition={{ ease: "easeInOut", duration: 0.8, delay: 0}}>
      <div className="header-inner">
        <Link className="logo" to = "/" >gaze.</Link>
        <nav className="nav">
          <li>
            <Link to="/menshop">Men</Link>
          </li>
          <li>
            <Link to="/womenshop">Women</Link>
          </li>
          <li>
            <Link to="/trending">Trending Collection</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/why">Why choose us?</Link>
          </li>
        </nav>
        <div className="contact">
          <Link to="/cart">Shopping Cart</Link>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;