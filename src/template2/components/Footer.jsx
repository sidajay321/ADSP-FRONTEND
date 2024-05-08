import React from "react";
import AppLayout from "./AppLayout";
import QR from"./assits/QR.jpeg"
import what from "./assits/WhatsApp.png"
import fac from "./assits/Facebook Circled.png"
import you from "./assits/YouTube.png"
import inst from "./assits/Instagram.png"
const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-[#328B56] text-white h-auto">
        <AppLayout>

          <div class="grid grid-cols-1 sm:grid-cols-3  gap-4">
            <div className=" lg:mt-24 sm:mt-24 text-center mt-4">
              <h1 className="font-bold text-6xl sm:text-4xl lg:text-6xl pt-5 md:pt-0 cursor-pointer">
                <span className="text-[#43131D]">F</span>
                <span className="text-[#012429]">as</span>
                <span className="text-[#19272b]">hio</span>
                <span className="text-[#241409]">nis</span>
                <span className="text-8xl sm:text-6xl font-medium">t</span>
                <span className="text-[#43131D]">a</span>
              </h1>
            </div>
            <div className="lg:mb-0 mt-10 lg:mt-10 mx-5 sm:mx-0">
              <p className="mb-6 text-xl font-bold ">Contaact Details :-</p>
              <ul className="flex flex-col space-y-2   ">
                <h1 className=" font-bold text-xl">Address</h1>
                <li className=" hover:text-black text-lg">
                  vasant vihar, nikol, Ahmedabad 382330
                </li>
                <h1 className=" font-bold text-xl">phone</h1>
                <li className="hover:text-black text-lg">1-800-123-9999</li>
                <h1 className=" font-bold text-xl">Email.</h1>
                <li className=" hover:text-black text-lg">
                  fashionista@gmail.com
                </li>
              </ul>
            </div>

            <div className=" mb-2 sm:mb-8 lg:mb-0  lg:mt-10 mx-5 sm:mx-0 ">
              <p className="mb-4 text-lg font-semibold  pt-12 ">
                Like & Follow
              </p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium ">
                <span className="flex flex-row gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 mt-2">
                  <img
                    src={what}
                    alt="whatsAAp logo"
                    className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px]"
                  />
                  <img
                    src={fac}
                    alt="facebook logo"
                    className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px]"
                  />
                  <img
                    src={inst}
                    alt="insta"
                    className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px]"
                  />
                  <img
                    src={you}
                    alt="youtube"
                    className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px]"
                  />
                </span>
                <li className="text-2xl font-bold">PAY NOW</li>
                <li>
                  <img
                    src={QR}
                    alt="QR"
                    className="m-2 h-[120px] w-[#130px] pb-5"
                  />
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-1 bg-black text-black" />
          <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0 mb-1">
            <div className="mt-4 md:mt-0">
              <p className="text-sm font-medium ">
                © 2023 DevUI. All rights anyintech.
              </p>
            </div>
          </div>
        </AppLayout>
      </footer>
    </div>
  );
};

export default Footer;
