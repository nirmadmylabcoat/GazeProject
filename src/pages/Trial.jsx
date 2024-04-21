import React, { useState, useEffect } from "react";
import itemData from "../components/ProductList/Data";
import CustomCursor from "../components/Global/CustomCursor";

const Trial = () => {
  const [cart, setCart] = useState({});
  const [inputValues, setInputValues] = useState({});

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const productsInCart = Object.keys(cart)
    .map((id) => {
      const product = itemData.find((item) => item.id.toString() === id);
      if (product) {
        return {
          ...product,
          sizes: cart[id], // add size information from cart
        };
      }
      return null;
    })
    .filter((product) => product !== null);

  const handleInputChange = (id, value) => {
    setInputValues({ ...inputValues, [id]: value });
  };

  const renderProductSubtotal = (price, id) => {
    const quantity = inputValues[id] || 0;
    const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, "")); // Converts string price to float, stripping non-numeric characters
    return `Rs. ${numericPrice * quantity}`;
  };

  return (
    <div>
      <CustomCursor />
      {productsInCart.map((item, index) => {
        return (
          <div className="flex" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-[10rem] object-cover"
            />
            <div>
              <p>{item.name}</p>
              <p>Rs. {item.price}</p>
              <input
                type="number"
                min="0"
                value={inputValues[item.id]}
                onChange={(e) => handleInputChange(item.id, parseInt(e.target.value, 10))}
              />
              <p>{renderProductSubtotal(item.price, item.id)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Trial;
