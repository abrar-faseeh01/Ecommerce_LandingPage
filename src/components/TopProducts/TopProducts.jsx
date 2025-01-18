import React from "react";
import { FaStar } from "react-icons/fa6";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Perfect for everyday comfort, this casual wear combines style and ease for your daily outings.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "A trendy printed shirt that adds a splash of color and personality to your wardrobe.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "A stylish women’s shirt designed for versatility, ideal for both casual and formal occasions.",
  },
];

function TopProducts({ handleOrderPopup }) {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24 ">
          <p data-aos="fade-up" className="text-sm text-primary/100">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-500">
            Discover our top-selling products, carefully curated to suit your
            needs. Find the best deals and customer favorites all in one place.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className=" rounded-2xl bg-white dark:bg-gray-800 dark:text-white hover:bg-black/80 relative shadow-xl duration-high group max-w-[300px]"
            >
              {/* Image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md "
                />
              </div>
              {/* Details section */}
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="font-bold text-xl group-hover:text-white">
                  {data.title}
                </h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-2 dark:text-gray-300">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 px-4 py-1 rounded-full text-white group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
