import React, { useState, useEffect } from "react";
import itemData from "../components/ProductList/Data";

const CartItems = (props) => {
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

  const sizeMapping = {
    XS: "XS",
    S: "S",
    M: "M",
    L: "L",
    XL: "XL",
  };

  const productsInCart = Object.entries(cart).flatMap(([id, sizes]) => {
    const product = itemData.find((item) => item.id.toString() === id);
    return product
      ? sizes.map((size) => ({
          id: product.id,
          size: sizeMapping[size],
          ...product,
        }))
      : [];
  });

  console.log(productsInCart);

  useEffect(() => {
    // Calculate total
    const newTotal = productsInCart.reduce((acc, item) => {
      const key = `${item.id}_${item.size}`;
      const quantity = inputValues[key] || 1; // Use inputValues or fallback to default 1
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return acc + price * quantity;
    }, 0);
    setTotal(newTotal);
    props.updateTotal(newTotal,productsInCart);
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

  const removeButton = (id, size) => {
    const updatedCart = { ...cart };
    if (updatedCart[id]) {
      // Remove the specified size from the sizes array
      updatedCart[id] = updatedCart[id].filter((itemSize) => itemSize !== size);

      // Check if the item has no sizes left and remove the item entirely from the cart
      if (updatedCart[id].length === 0) {
        delete updatedCart[id];
      }

      setCart(updatedCart); // Update the cart state
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
    }
  };

  return (
    <div className="">
      <div className="flex flex-col items-center">
        {productsInCart.map((item) => (
          <div
            className="flex flex-col gap-10 py-9 md:flex-row md:justify-between border-b-[1px] border-solid border-gray-400 w-[92%]"
            key={`${item.id}_${item.size}`}
          >
            <div className="flex items-center gap-10 w-[59%]">
              <img
                src={item.image}
                alt={`${item.name} - ${item.size}`}
                className="h-full w-[10rem] object-cover"
              />
              <div>
                <p className="text-gray-600">{`${item.name} - ${item.size}`}</p>
                <button
                  className="text-lg text-gray-500 hover:text-gray-700 transition-all"
                  onClick={() => removeButton(item.id, item.size)}
                >
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
    </div>
  );
};

export default CartItems;
