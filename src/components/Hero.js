import React from "react";

const Hero = () => {
  return (
    <div className="grid  lg:grid-cols-2 py-6 gap-3 px-[10%]">
      <div className="h-full flex flex-col text-center lg:text-start justify-center gap-[20px]">
        <h1 className="font-[700] text-5xl">
          Bis zu 100% Cashback für eine Insta Story
        </h1>
        <p className="text-sm text-[#4F5665]">
          Mit Tagd kannst du Cashback erhalten indem du deine Käufe auf Insta
          postest und damit Unternehmen unterstützt.
        </p>
        <div>
          <button className="rounded-[5px] bg-[#F0CF90] py-3 px-14">
            Spare Jetzt
          </button>
        </div>
      </div>
      <div>
        <img src="/Hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
