import React, { useState } from 'react';
import itemData from './Data';

function ProductList() {
  // State to keep track of which item is hovered
  const [hovered, setHovered] = useState(null);

  return (
    <div className="mt-20 mb-20 w-[100vw] flex justify-center">
      <div className="w-[90vw] flex flex-wrap gap-y-[5rem] justify-center">
        {itemData.map((item, index) => {
          return (
            <div 
              key={index} // It's good to have a key for list items
              className="flex flex-col w-[30rem] min-w-[180px] p-1"
              onMouseEnter={() => setHovered(index)} // Set this item as hovered
              onMouseLeave={() => setHovered(null)} // Reset when not hovered
            >
              <div className="overflow-hidden h-[100%]">
                <img 
                  src={hovered === index ? item.imageHover : item.image}
                  alt={item.name}
                  className="h-full object-cover" 
                />
              </div>
              <div className="mt-[2rem]">
                <p className="text-gray-400 uppercase text-[1.25rem] font-[650]">{item.type}</p>
              </div>
              <div>
                <p className="text-[1.75rem] font-bold text-gray-700">{item.name}</p>
              </div>
              <div className="mb-[2rem]">
                <p className="font-semibold text-gray-700">Rs. {item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
