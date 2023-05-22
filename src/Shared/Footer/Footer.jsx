import React from "react";
import { FaBeer, FaEnvelope, FaFacebook, FaMapMarker, FaPhone, FaTwitter } from "react-icons/fa";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="text-dark bg-gray-200 rounded-lg p-8 mt-12">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <a href="mailto:info@toycrazemarketplace.com">
                info@toycrazemarketplace.com
              </a>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              <span>+1 123-456-7890</span>
            </div>
            <div className="flex items-center">
              <FaMapMarker className="mr-2" />
              <span>123 Toy Street, Toyland</span>
            </div>
          </div>
          <div className="w-full md:w-2/3 px-4">
            <div className="flex justify-end">
              <a
                href="https://www.facebook.com/toycrazemarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-dark mr-4 hover:text-blue-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com/toycrazemarket"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-dark hover:text-blue-500"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Copyright></Copyright>
    </footer>
  );
};

export default Footer;
