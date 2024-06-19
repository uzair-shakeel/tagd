import React from "react";

const Header = () => {
  return (
    <div className="w-full py-[2%] flex justify-between px-[3%] text-black items-center overflow-hidden ">
      <div className="h-14 w-40 hidden lg:block">
        <img
          src="/logo.png"
          alt="logo"
          className="h-full w-full object-cover cursor-pointer"
        />
      </div>
      <ul className="hidden lg:flex gap-9">
        <li className="cursor-pointer hover:font-[500]">Für Brands</li>
        <li className="cursor-pointer  hover:font-[500]">So funktioniert's</li>
        <li className="cursor-pointer  hover:font-[500]">Preise</li>
        <li className="cursor-pointer  hover:font-[500]">Häufige Fragen</li>
      </ul>
      <div className="hidden lg:bloc">
        <button className="font-[500]">Login</button>
        <button className="bg-[#F0CF90] hover:px-8 duration-500 py-3 px-6 ml-9 rounded-full font-[500]">
          Registrieren
        </button>
      </div>
    </div>
  );
};

export default Header;
