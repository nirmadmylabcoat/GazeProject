import React from "react";
import itemData from "./Data";

function ProductList() 
{
  console.log(itemData);
  return (
    <div className="mt-20 mb-20 w-[100vw] flex justify-center">
      <div className="w-[90vw] flex flex-wrap gap-x-10 gap-y-[5rem] justify-center">
        {
          itemData.map((item) => {
            return (
              <div className="flex flex-col w-[30rem] min-w-[20rem] p-4 border-solid border-[1px] border-black">
                <div className="overflow-hidden h-[100%] ">
                  <img src={item.image} alt="hi" className="h-full object-cover" />
                </div>
                <div className="mt-[2rem]">
                  <p className="text-gray-400 uppercase text-[1.25rem] font-[650] ">{item.type}</p>
                </div>
                <div>
                  <p className="text-[1.75rem] font-bold text-gray-700 ">{item.name}</p>
                </div>
                <div className="mb-[2rem]">
                  <p className="font-semibold text-gray-700" >Rs. {item.price}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ProductList;
