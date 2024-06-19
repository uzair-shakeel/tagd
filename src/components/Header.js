import React from "react";

const Header = () => {
  return (
    <div className="w-full py-[2%] flex justify-between px-[3%] text-black items-center overflow-hidden ">
      <div className="h-14 w-40 ">
        <img
          src="/logo.png"
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
      <ul className="flex gap-9">
        <li>Für Brands</li>
        <li>So funktioniert's</li>
        <li>Preise</li>
        <li>Häufige Fragen</li>
      </ul>
      <div>
        <button className="font-[500]">Login</button>
        <button className="bg-[#F0CF90] py-3 px-6 ml-9 rounded-full font-[500]">
          Registrieren
        </button>
      </div>
    </div>
  );
};

export default Header;
