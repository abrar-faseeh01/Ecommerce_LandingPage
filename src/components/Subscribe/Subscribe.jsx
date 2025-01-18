import React from "react";
import Img1 from "../../assets/website/orange-pattern.jpg";
const Background = {
  backgroundImage: `url(${Img1})`,
  backgroundPosition: "center",
  backgroundRepear: "no-repear",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

function Subscribe() {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={Background}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl  text-center sm:text-left sm:text-4xl font-semibold mb-4">
            Get Notified About New Products
          </h1>
          <div className="flex items-center space-x-3">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter your email"
              className="w-full p-3 text-black rounded-full"
            />
            <button
              data-aos="fade-up"
              className="bg-orange-500 rounded-full px-4 py-2 ml-3  text-white hover:scale-110 duration-300 hover:bg-orange-200 hover:text-primary "
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
