import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import bgImg from "../../assets/website/footer-pattern.jpg";

const FooterBg = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

function Footer() {
  return (
    <div style={FooterBg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl sm:text-left text-justify mb-3 flex items-center gap-3 font-bold">
              <img src={logo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Shopsy is your one-stop destination for high-quality products at
              unbeatable prices. We are committed to delivering an exceptional
              shopping experience with a focus on convenience and customer
              satisfaction.
            </p>
          </div>

          {/* Footer links  */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 "
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Important links2 */}

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="
                cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 "
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary hover:translate-y-1 duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary hover:translate-y-1 duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary hover:translate-y-1 duration-300" />
                </a>
              </div>
              <div className="mt-6">
                <div className="fleex items-center gap-3 mb-4">
                  <FaLocationArrow className="text-primary hover:translate-x-1 duration-300" />
                  <p>Chittagong, Bangladesh</p>
                </div>
                <div className="fleex items-center gap-3">
                  <FaMobileAlt className="text-primary  hover:translate-x-1 duration-300" />
                  <p>+88 01234567891</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
