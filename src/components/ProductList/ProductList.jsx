import React from "react";
import housesData from "./Data";

const ProductList = () => {
  console.log(housesData);
  return (
    <div className="flex flex-wrap justify-center mt-[5rem]">
      {housesData.map((house) => {
        return (
          <>
            <div className="mb-8">
              <div>
                <img src={house.image} alt="" />
              </div>
              <div>
                <span>{house.name}</span>
                <span>{house.price}</span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProductList;
