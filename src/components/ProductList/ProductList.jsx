import React, { useState } from "react";
import itemData from "./Data";
import { Link } from "react-router-dom";

function ProductList({ gender }) {
  // State to keep track of which item is hovered
  const [hovered, setHovered] = useState(null);
  const filteredProducts = itemData.filter((item) => item.gender === gender);

  return (
    <div className="mt-20 mb-20 w-[100vw] flex justify-center">
      <div className="w-[90vw] flex flex-wrap gap-y-[5rem] justify-center">
        {filteredProducts.map((item, index) => {
          return (
            <div
              key={index} // It's good to have a key for list items
              className="flex flex-col w-[30rem] min-w-[180px] p-1 hover:shadow-md transition-all duration-300"
            >
              <div
                className="overflow-hidden h-[100%]"
                onMouseEnter={() => setHovered(index)} // Set this item as hovered
                onMouseLeave={() => setHovered(null)} // Reset when not hovered
              >
                <img
                  src={hovered === index ? item.imageHover : item.image}
                  alt={item.name}
                  className="h-full object-cover"
                />
              </div>
              <Link to={`/product/${item.id}`}>
                <div className="pl-5">
                  <div className="mt-[2rem]">
                    <p className="text-gray-400 uppercase text-[1.25rem] font-[650]">
                      {item.type}
                    </p>
                  </div>

                  <div>
                    <p className="text-[1.75rem] font-bold text-gray-700">
                      {item.name}
                    </p>
                  </div>

                  <div className="mb-[2rem]">
                    <p className="font-semibold text-gray-700">
                      Rs. {item.price}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
