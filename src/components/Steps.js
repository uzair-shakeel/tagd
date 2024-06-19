import React from "react";

const Steps = () => {
  return (
    <div>
      <h1 className="font-[700] text-5xl text-center">
        So funktioniert <br /> <span className="text-[#F1CF90]">Tagd</span>
      </h1>
      <div>
        <div className="grid grid-cols-2 px-[10%]">
          <div className="space-y-4">
            <h5 className="text-3xl font-[700]">
              1. <br /> <span className="text-[#F1CF90]"> Let´s </span>Go
            </h5>
            <p className="text-lg">
              Downloade die App und melde dich problemlos bei uns an und lege
              direkt los.
            </p>
          </div>
          <div className="h-[400px] w-auto">
            <img
              src="/Log In-cropped.svg"
              alt="image"
              className="w-full h-full  object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 px-[10%]">
          <div className="space-y-4">
            <h5 className="text-3xl font-[700]">
              2. <br /> <span className="text-[#F1CF90]"> Kauf </span>Posten
            </h5>
            <p className="text-lg">
              Kaufe und poste ein Produkt von einer unserer Partnerunternehmen
              in deine Instagram Story
            </p>
          </div>
          <div className="h-[300px] w-auto">
            <img
              src="/Hero.png"
              alt="image"
              className="w-full h-full  object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 px-[10%]">
          <div className="space-y-4">
            <h5 className="text-3xl font-[700]">
              3. <br /> <span className="text-[#F1CF90]"> Cashback </span>
              erhalten
            </h5>
            <p className="text-lg">
              Sobald der Post von uns Verfiziert wurde, erhälst du Cashback 🤑🤑
            </p>
          </div>
          <div className="h-[300px] w-auto">
            <img
              src="/Hero.png"
              alt="image"
              className="w-full h-full  object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
