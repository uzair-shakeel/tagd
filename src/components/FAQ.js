import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const FAQ = () => {
  return (
    <div className="py-9">
      <h1 className="font-[700] text-3xl md:text-5xl text-center">
        Häufig gestellte <br /> <span className="text-[#F1CF90]">Fragen</span>
      </h1>
      <div className="flex gap-8 flex-col items-start px-[5%] md:px-[10%] lg:px-[20%] py-14">
        <Disclosure>
          <DisclosureButton className="py-2 flex justify-between w-full text-xl md:text-2xl lg:text-3xl font-[600]">
            Was ist Tagd?
            <div>+</div>
          </DisclosureButton>
          <DisclosurePanel className="text-gray-500 text-md md:text-lg lg:text-xl">
            Yes! You can purchase a license that you can share with your entire
            team.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton className="py-2 flex justify-between w-full text-xl md:text-2xl lg:text-3xl font-[600]">
            Wann bekomme ich Cashback?
            <div>+</div>
          </DisclosureButton>
          <DisclosurePanel className="text-gray-500 text-md md:text-lg lg:text-xl">
            Yes! You can purchase a license that you can share with your entire
            team.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton className="py-2 flex justify-between w-full text-xl md:text-2xl lg:text-3xl font-[600]">
            Wie viel Cashback bekomme ich?
            <div>+</div>
          </DisclosureButton>
          <DisclosurePanel className="text-gray-500 text-md md:text-lg lg:text-xl">
            Yes! You can purchase a license that you can share with your entire
            team.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton className="py-2 flex justify-between w-full text-xl md:text-2xl lg:text-3xl font-[600]">
            Warum ist Tagd so wichtig? <div>+</div>
          </DisclosureButton>
          <DisclosurePanel className="text-gray-500 text-md md:text-lg lg:text-xl">
            Yes! You can purchase a license that you can share with your entire
            team.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
};

export default FAQ;
