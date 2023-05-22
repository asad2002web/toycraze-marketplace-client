import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLongArrowAltRight, FaMailchimp, FaMailBulk, FaPhone } from "react-icons/fa";
import Logo from '../../assets/WTOYCraze.png'
import { Link } from "react-router-dom";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 px-4 md:px-16">
          <div className="md:flex  justify-between items-center">
            <div className="md:w-1/4">
              <div className="flex items-center">
                <img
                  src={Logo}
                  alt="Logo"
                />
              </div>
              <p className="text-sm my-4">Electronic Learning Toys: These toys focus on educational content and help children learn letters, numbers, shapes, colors, and various subjects through interactive games and activities</p>
              <div className="flex gap-4 items-center mt-3">
              <FaLongArrowAltRight/>
              <p className="text-sm">123 Street, City, Country</p>
              </div>
              <div className="flex gap-4 items-center mt-3">
              <FaMailBulk/>
              <p className="text-sm">info@company.com</p>
              </div>
              <div className="flex gap-4 items-center mt-3">
              <FaPhone/>
              <p className="text-sm">+1234567890</p>
              </div>
            </div>
            <div className=" mt-4 md:mt-0">
              <h4 className="text-2xl text-orange-500 font-semibold">Quick Links</h4>
              <ul className="mt-2">
                <li className="text-md mt-3"><Link to="">Home</Link></li>
                <li className="text-md mt-3"><Link to="">About</Link></li>
                <li className="text-md mt-3"><Link to="">Services</Link></li>
                <li className="text-md mt-3"><Link to="">Contact</Link></li>
              </ul>
            </div>
            <div className=" mt-4 md:mt-0">
              <h4 className="text-2xl text-orange-500 font-semibold">Information</h4>
              <ul className="mt-2">
                <li className="text-md mt-3"><Link to="">Product support</Link></li>
                <li className="text-md mt-3"><Link to="">Checkout</Link></li>
                <li className="text-md mt-3"><Link to="">Affiliate</Link></li>
                <li className="text-md mt-3"><Link to="">About Us</Link></li>
              </ul>
            </div>
            <div className="flex flex-row md:flex-col md:gap-6 mt-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaFacebook className="text-white text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaTwitter className="text-white text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <Copyright></Copyright>
      </footer>
    </>
  );
};

export default Footer;
