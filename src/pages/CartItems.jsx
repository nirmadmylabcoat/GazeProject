import React, { useState, useEffect } from "react";
import itemData from "../components/ProductList/Data";
import CustomCursor from "../components/Global/CustomCursor";

// Define a mapping between size numbers and letters
const sizeMapping = {
  0: "XS",
  1: "S",
  2: "M",
  3: "L",
  4: "XL",
};

const CartItems = () => {
  const [cart, setCart] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [total, setTotal] = useState(0); // State to store the total

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
      const initialInputValues = {};
      Object.entries(JSON.parse(storedCart)).forEach(([id, sizes]) => {
        Object.keys(sizes).forEach((size) => {
          initialInputValues[`${id}_${size}`] = 1; // Initialize with 1 since no quantity info is stored
        });
      });
      setInputValues(initialInputValues);
    }
  }, []);

  const productsInCart = Object.entries(cart).flatMap(([id, sizes]) => {
    const product = itemData.find((item) => item.id.toString() === id);
    return product
      ? Object.entries(sizes).map(([size, _]) => ({
          ...product,
          size: sizeMapping[size],
          quantity: 1, // Default quantity since not stored in local storage
        }))
      : [];
  });

  useEffect(() => {
    // Calculate total
    const newTotal = productsInCart.reduce((acc, item) => {
      const key = `${item.id}_${item.size}`;
      const quantity = inputValues[key] || 1; // Use inputValues or fallback to default 1
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return acc + price * quantity;
    }, 0);
    setTotal(newTotal);
  }, [inputValues, cart]);

  const handleInputChange = (id, size, value) => {
    const newValues = { ...inputValues, [`${id}_${size}`]: value };
    setInputValues(newValues);
  };

  const renderProductSubtotal = (price, id, size) => {
    const key = `${id}_${size}`;
    const quantity = inputValues[key] || 1; // Use value from inputValues or default to 1
    const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    return `Rs. ${numericPrice * quantity}`;
  };

  return (
    <div className="">
      <CustomCursor />
      <div className="flex flex-col items-center">
        {productsInCart.map((item) => (
          <div className="flex flex-col gap-10 py-9 md:flex-row md:justify-between border-b-[1px] border-solid border-gray-400 w-[92%]" key={`${item.id}_${item.size}`}>
            <div className="flex items-center gap-10 w-[59%]">
              <img
                src={item.image}
                alt={`${item.name} - ${item.size}`}
                className="h-full w-[10rem] object-cover"
              />
              <div>
                <p className="text-gray-600">{`${item.name} - ${item.size}`}</p>
                <button className="text-lg text-gray-500 hover:text-gray-700 transition-all">
                  Remove
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between w-[41%]">
              <div className="flex justify-between md:w-[40%]">
                <p className="text-gray-700 md:hidden">Price:</p>
                <p>Rs. {item.price}</p>
              </div>
              {/* quan subtotal */}
              <div className="flex flex-col gap-4 md:flex-row md:justify-between md:w-[60%]">
                <div className="flex justify-between items-center">
                  <p className="text-xl md:hidden">Quantity:</p>
                  {/* Quantity Button */}
                  <div className="flex items-center border-[1px] border-solid border-gray-300 max-h-10">
                    <button
                      className="p-3"
                      onClick={() =>
                        handleInputChange(
                          item.id,
                          item.size,
                          Math.max(
                            1,
                            inputValues[`${item.id}_${item.size}`] - 1
                          )
                        )
                      }
                    >
                      -
                    </button>
                    <input
                      className="w-16 text-center border-x-[1px] border-solid border-gray-300 bg-transparent"
                      type="number"
                      min="1"
                      value={inputValues[`${item.id}_${item.size}`] || 1}
                      onChange={(e) =>
                        handleInputChange(
                          item.id,
                          item.size,
                          parseInt(e.target.value, 10) || 1
                        )
                      }
                    />
                    <button
                      className="p-3"
                      onClick={() =>
                        handleInputChange(
                          item.id,
                          item.size,
                          (inputValues[`${item.id}_${item.size}`] || 0) + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="font-semibold md:hidden">Subtotal: </p>
                  <p className="font-semibold">
                    {renderProductSubtotal(item.price, item.id, item.size)}
                  </p>
                </div>
              </div>
            </div>
          </div>

        ))}
      </div>
      <div className="">
        <p>Total: Rs. {total.toFixed(2)}</p>
      </div>

    </div>
  );
};

export default CartItems;
