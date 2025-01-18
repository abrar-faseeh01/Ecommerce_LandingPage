import React from "react";
import { FaStar } from "react-icons/fa6";
import Img1 from "../../assets/women/women.jpg";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from "../../assets/women/women5.jpg";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    link: "/#",
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    link: "/#",
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    link: "/#",
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    link: "/#",
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    link: "/#",
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "0",
  },
];

function Products() {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[800px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary/100">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-500 ">
            Discover our top-selling products, carefully curated to suit your
            needs. Find the best deals and customer favorites all in one place.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 duration-high group"
                key={data.id}
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[240px] w-[175px] object-cover rounded-md  group-hover:scale-105 duration-300"
                />
                <div>
                  <a href={data.link} className="hover:text-primary">
                    {data.title}
                  </a>
                  {/* <h3 className="font-semibold">{data.title}</h3> */}
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1 mb-10">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex justify-center">
          <button className="bg-primary hover:scale-105 duration-300 group-hover:bg-white group-hover:text-primary text-white text-center mt-10 cursor-pointer py-1 px-5 rounded-md">
            View All Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
