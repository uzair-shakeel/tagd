import React from "react";

const Portfolio = () => {
  return (
    <div className="px-[4%]">
      <h1 className="font-[700] text-5xl text-center">
        Überzeug dich <br /> <span className="text-[#F1CF90]">selbst</span>
      </h1>
      <div className="flex gap-14 items-center">
        <img
          src="/profile.jpeg"
          alt="profile"
          className="w-[20%] h-auto rounded-3xl"
        />
        <div className="flex-1 space-y-4">
          <h3 className="text-3xl font-[700]">Moses, 22 Jahre</h3>
          <div className="pr-[50%] text-xl font-[700] flex justify-between">
            <p className="border-b-2 border-red-50">Follower </p>
            <div className="relative">
              <span className="bg-red-500 absolute bottom-0 left-0 h-[6px] w-full rounded-full "></span>
            </div>
            <p>674</p>
          </div>
          <div className="pr-[50%] text-xl font-[700] flex justify-between">
            <p className="border-b-2 border-red-50">⌀ Likes </p>
            <div className="relative">
              <span className="bg-red-500 absolute bottom-0 left-0 h-[6px] w-full rounded-full "></span>
            </div>
            <p>213</p>
          </div>
          <div className="pr-[50%] text-xl font-[700] flex justify-between">
            <p className="border-b-2 border-red-50"> ⌀ Kommentare</p>
            <div className="relative">
              <span className="bg-red-500 absolute bottom-0 left-0 h-[6px] w-full rounded-full "></span>
            </div>
            <p>11</p>
          </div>
          <h3 className="text-5xl font-[700] pt-14">
            Cashback <span className="text-[#F1CF90] ml-48">0,50€</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
