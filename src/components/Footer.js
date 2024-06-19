import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-[10%] py-8 flex flex-col lg:flex-row text-center lg:text-start gap-20 text-[#4F5665] font-[400]">
      <div>
        <div className="h-20 w-40 mx-auto lg:mx-0">
          <img
            src="/logo.png"
            alt="logo"
            className="h-full py-2 w-full object-cover"
          />
        </div>
        <p>Embrace your network</p>
        <div
          className="flex items-center w-full
         justify-center gap-3 pt-6"
        >
          <div className="bg-white cursor-pointer rounded-full text-red-500 shadow-lg p-2">
            <FaFacebookF size={20} />
          </div>
          <div className="bg-white cursor-pointer rounded-full text-red-500 shadow-lg p-2">
            <FaTwitter size={20} />
          </div>
          <div className="bg-white cursor-pointer rounded-full text-red-500 shadow-lg p-2">
            <FaInstagram size={20} />
          </div>
        </div>
      </div>
      <ul className="space-y-4">
        <li className="pb-5 font-[600] text-black">Inhalt</li>
        <li className="cursor-pointer">Influencer Programm</li>
        <li className="cursor-pointer">Brand Programm</li>
      </ul>
      <ul className="space-y-4">
        <li className="pb-5 font-[600] text-black">Rechtliches</li>
        <li className="cursor-pointer">Impressum</li>
        <li className="cursor-pointer">AGB</li>
        <li className="cursor-pointer">Datenschutz</li>
      </ul>
      <ul className="space-y-4">
        <li className="pb-5 font-[600] text-black">Kontakt</li>
        <li className="cursor-pointer">Mail</li>
      </ul>
    </div>
  );
};

export default Footer;
