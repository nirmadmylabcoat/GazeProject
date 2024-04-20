import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Global/Header.jsx";
import itemData from "../components/ProductList/Data.jsx";
import CustomCursor from "../components/Global/CustomCursor";
import Transition from "../Transition";

const ProductDisplay = () => {
  const { id } = useParams();
  // const [hovered, setHovered] = useState(null);
  const item = itemData.find((item) => {
    return item.id === parseInt(id);
  });
  return (
    <>
      <CustomCursor />
      <Header delay={"0"} duration={"0"} />
      <div className="w-[100vw] flex justify-center">
        <div className="w-[90vw] flex gap-x-20 mt-10">
          <div
            className="h-[75vh] flex gap-x-2"
            // onMouseEnter={() => setHovered(index)} // Set this item as hovered
            // onMouseLeave={() => setHovered(null)} // Reset when not hovered
          >
            <img
              // src={hovered === index ? item.imageHover : item.image}
              src={item.image}
              alt={item.name}
              className="h-full object-cover"
            />
            <img
              // src={hovered === index ? item.imageHover : item.image}
              src={item.imageHover}
              alt={item.name}
              className="h-full object-cover"
            />
          </div>
          <div>
            <div className="flex flex-col gap-y-[0.25rem]">
              <div className="font-semibold text-[3rem] text-gray-800">
                {item.name}
              </div>
              <div>
                <p className="text-gray-500 font-light">
                  MRP inclusive of all taxes
                </p>
                <p className="font-medium text-gray-800 text-3xl">Rs. {item.price}</p>
              </div>
            </div>
            <div>
              <div>
                <p>Sizes</p>
              </div>
              <div>
                <div>XS</div>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transition(ProductDisplay);
