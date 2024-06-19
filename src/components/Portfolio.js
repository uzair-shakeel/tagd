import React from "react";

const Portfolio = () => {
  return (
    <div className="px-[4%]">
      <h1 className="font-[700] text-3xl md:text-5xl text-center">
        Überzeug dich <br /> <span className="text-[#F1CF90]">selbst</span>
      </h1>
      <div className="flex flex-col text-center lg:text-start lg:flex-row gap-14 items-center">
        <img
          src="/profile.jpeg"
          alt="profile"
          className="w-[50%] mt-6 lg:w-[20%] h-auto rounded-3xl"
        />
        <div className="flex-1  space-y-4">
          <h3 className="text-2xl md:text-3xl font-[700]">Moses, 22 Jahre</h3>
          <div className="px-[10%] relative lg:pr-[50%] text-lg md:text-xl font-[700] flex justify-between">
            <p className="border-b-2 border-red-50">Follower </p>
            <span className="bg-[#AD4545]  absolute top-7 left-0 h-[6px] ml-[10%] w-[30%] rounded-full "></span>

            <p>674</p>
          </div>
          <div className="px-[10%] relative lg:pr-[50%] text-lg md:text-xl font-[700] flex justify-between">
            <p className="border-b-2 border-red-50">⌀ Likes </p>
            <span className="bg-[#4F5665]  absolute top-7 left-0 h-[6px] ml-[10%] w-[20%] rounded-full "></span>
            <p>213</p>
          </div>
          <div className="px-[10%] relative lg:pr-[50%] text-lg md:text-xl font-[700] flex justify-between">
            <p className="border-b-2 border-red-50"> ⌀ Kommentare</p>
            <span className="bg-purple-600  absolute top-7 left-0 h-[6px] ml-[10%] w-[10%] rounded-full "></span>

            <p>11</p>
          </div>
          <h3 className="text-3xl md:text-5xl font-[700] pt-14">
            Cashback <span className="text-[#F1CF90] ml-48">0,50€</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
