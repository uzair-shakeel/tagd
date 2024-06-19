import React from "react";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";

const Subscription = () => {
  return (
    <div className="px-[10%] py-14">
      <h1 className="text-5xl text-center font-[700]">
        Wähle dein <span className="text-[#F0CF90]">Abo</span>
      </h1>
      <div className="grid grid-cols-3 gap-[20px] py-9">
        <div className="flex flex-col items-center border border-black rounded-lg py-14 px-7">
          <img
            src="/subscription1.png"
            alt="logo"
            className="h-[60px] w-[60px]"
          />
          <h3 className="text-xl font-[700] py-6">Standard</h3>
          <div className=" rounded-lg overflow-hidden">
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <ImCross className="text-red-500" />
              </div>
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Kostenlos</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <ImCross className="text-red-500" />
              </div>
              <div className="flex-1 text-center"></div>
              <div className="flex-2 ml-2">Post Limit (5)</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <ImCross className="text-red-500" />
              </div>
              <div className="flex-1 text-center"></div>
              <div className="flex-2 ml-2">Auszahlungsminimum (1€)</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center"></div>
              <div className="flex-1 text-center"></div>
              <div className="flex-2 ml-2">4€ Cashback Limit pro Monat</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-1 text-center"></div>
              <div className="flex-2 ml-2">Standortnutzung</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <ImCross className="text-red-500" />
              </div>
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Alle Branchen</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center"></div>
              <div className="flex-1 text-center"></div>
              <div className="flex-2 ml-2">Bilder & Videos verkaufen</div>
            </div>
          </div>
          <h3 className="text-3xl font-[700] pt-12 pb-4">0€ </h3>
          <button className="py-3 px-6 border-2 font-[700] border-[#F53838] text-[#F53838] rounded-full">
            Abonnieren
          </button>
        </div>
        <div className="flex flex-col items-center border border-black rounded-lg py-14 px-7">
          <img
            src="/subcription2.png"
            alt="logo"
            className="h-[60px] w-[60px]"
          />
          <h3 className="text-xl font-[700] text-[#F0CF90] py-6">Exclusive</h3>
          <p className="text-xs">Monatlich kündbar</p>
          <div className=" rounded-lg overflow-hidden">
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Kostenlos</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Post Limit (5)</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Auszahlungsminimum (1€)</div>
            </div>
            <div className="flex p-4 justify-between border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-end">
                4€ Cashback Limit pro Monat
              </div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Standortnutzung</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Alle Branchen</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Bilder & Videos verkaufen</div>
            </div>
          </div>
          <h3 className="text-3xl font-[700] pt-12 pb-4">1,99€</h3>
          <div className="relative">
            <h3 className="absolute top-[-45px] text-[#4F5665] text-xl right-[-120px]">
              3,99€
            </h3>
            <span className="border-t-2 border-[#4F5665] top-[-30px] h-2  w-20 absolute right-[-130px]"></span>
          </div>
          <p className="text-xs pb-3">Die ersten 3 Monate 0€, danach 3,99€</p>
          <button className="py-3 px-6 border-2 font-[700] bg-[#F53838] text-white rounded-full">
            Abonnieren
          </button>
        </div>
        <div className="flex flex-col items-center border border-black rounded-lg py-14 px-7">
          <img
            src="/subcription2.png"
            alt="logo"
            className="h-[60px] w-[60px]"
          />
          <h3 className="text-xl font-[700] text-[#F0CF90] py-6">Exclusive</h3>
          <p className="text-xs">Monatlich kündbar</p>
          <div className=" rounded-lg overflow-hidden">
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Kostenlos</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Post Limit (5)</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Auszahlungsminimum (1€)</div>
            </div>
            <div className="flex p-4 justify-between border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-end">
                4€ Cashback Limit pro Monat
              </div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Standortnutzung</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Alle Branchen</div>
            </div>
            <div className="flex p-4 border-t border-gray-300">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2">Bilder & Videos verkaufen</div>
            </div>
          </div>
          <h3 className="text-3xl font-[700] pt-12 pb-4">1,99€</h3>
          <div className="relative">
            <h3 className="absolute top-[-45px] text-[#4F5665] text-xl right-[-120px]">
              3,99€
            </h3>
            <span className="border-t-2 border-[#4F5665] top-[-30px] h-2  w-20 absolute right-[-130px]"></span>
          </div>
          <p className="text-xs pb-3">Die ersten 3 Monate 0€, danach 3,99€</p>
          <button className="py-3 px-6 border-2 font-[700] bg-[#F53838] text-white rounded-full">
            Abonnieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
