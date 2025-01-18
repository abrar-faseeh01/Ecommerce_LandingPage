import React from "react";
import Slider from "react-slick";
import Img2 from "../../assets/testimonials/Finn.jpg";
import Img4 from "../../assets/testimonials/Jake.jpg";
import Img1 from "../../assets/testimonials/Laura.jpg";
import Img3 from "../../assets/testimonials/Sophia.jpg";
import Img5 from "../../assets/testimonials/Victoria.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Lawra Stinson",
    text: "I couldn't be happier with the quality and service. Highly recommend!",
    img: Img1,
  },
  {
    id: 2,
    name: "Finn Anniston",
    text: "The product exceeded my expectations. The attention to detail is amazing!",
    img: Img2,
  },
  {
    id: 3,
    name: "Sophia Blake",
    text: "Fantastic customer support and quick delivery. I’ll definitely shop here again!",
    img: Img3,
  },
  {
    id: 4,
    name: "Jake Williamson",
    text: "This product has truly made my life easier. I can’t imagine going without it!",
    img: Img4,
  },
  {
    id: 5,
    name: "Victoria Phillips",
    text: "Affordable, reliable, and exactly what I needed. Great value for the price!",
    img: Img5,
  },
];

function Testimonials() {
  var settings = {
    dots: true,
    arrow: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[800px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary/100">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-500">
            Discover how our products can transform your experience. Shop now!
          </p>
        </div>
      </div>

      {/* Testimonials cards */}

      <div data-aos="zoom-in">
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div className="my-6">
              <div
                key={data.id}
                className="flex flex-col gap-6 shadow-lg bg-primary/10 dark:bg-gray-800 relative py-8 px-6 mx-4 rounded-xl"
              >
                <div className="mb-4">
                  <img
                    src={data.img}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-gray-500 dark:text-gray-200 text-xs mb-4 ">
                      {data.text}
                    </p>
                    <h1 className="text-xl text-green-950 font-bold dark:text-orange-200 ">
                      {data.name}
                    </h1>
                  </div>
                  <p className="text-black/20 dark:text-orange-200 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
