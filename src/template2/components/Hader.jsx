import React from "react";

import AppLayout from "./AppLayout";
import man from "./assits/man.png"
import what from "./assits/WhatsApp.png"
import fac from "./assits/Facebook Circled.png"
import you from "./assits/YouTube.png"
import inst from "./assits/Instagram.png"
const Hader = ({ businessData }) => {
  return (
    <header>
      <div className="w-full sm:h-[550px] h-[390px] lg:h-[800px] pb-10 backgroundimage ">

      </div>
      <AppLayout>
        <div class="grid grid-cols-3  gap-2 lg:h-[400px] h-full mt-[20px]" id="about">
          <div class="  col-span-2 p-4">
            <p className="lg:h-[237px]  h-[110px] pt-[10px]  lg:text-[32px] sm:text-[24px] text-[14px] font-normal">
              “It is a long established fact that a reader will be tracked
              distracted by the readable content of a page is when looking at
              its layout. The point of using Lorem of distribution it look like
              readable English “
            </p>
            <button class="bg-[#267D49] hover:bg-[#267D49] text-white font-bold sm:py-3 sm:px-5  py-1  px-4 rounded-lg sm:mt-[100px] mt-14">
              Explore Now
            </button>
          </div>
          <div class=" p-1">
            <div className="bg-[#6BC785] mt-[30px] lg:h-[240px] sm:h-[200px] lg:w-[221px] sm:w-[180px] h-[150px] w-[120px] lg:ml-16 ml-[-10px] sm:ml-[0px] example2">
              <img
                src={man}
                className="lg:h-[239px] sm:h-[200px] lg:w-[250px] w-[100%] h-[149px]  lg:pr-5 sm:pr-6 pr-5"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="items-center mt-[-5px] lg:mt-[15px]  mb-4">
          <ul className="flex gap-[10px] lg:gap-[15px] px-4">
            <a href={businessData?.ub_whatsapp_url}>
              <img
                src={what}
                className="h-[50px] w-[50px] "
                alt="whataap"
              />
            </a>
            <a href={businessData?.ub_facebook_url}>
              <img
                src={fac}
                alt="facbook"
                className="h-[50px] w-[50px]"
              />
            </a>
            <a href={businessData?.ub_instagram_url}>
              <img
                src={inst}
                alt="instagram"
                className="h-[50px] w-[50px]"
              />
            </a>
            <a href={businessData?.ub_youtube_url}>
              <img
                src={you}
                alt="ub_youtube_url"
                className="h-[50px] w-[50px] md:w-[60px]"
              />
            </a>
          </ul>
        </div>
      </AppLayout>
    </header>
  );
};

export default Hader;
