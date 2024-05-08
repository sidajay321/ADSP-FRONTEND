import React from "react";
import AppLayout from "./AppLayout";
import bup1 from "./assites/bup1.png";
import dataArray from "./Mock/Bcustomber";
const Customberp = () => {
  return (
    <div className="my-2 pt-4 mx-auto">
      <AppLayout>
        <div className="mx-4">
          <h1 className="text-center font-semibold text-[#BF9BDE] tracking-[5px]  font-serif">
            CUSTOMBER FAVORITES
          </h1>
          <div className=" mx-auto w-[270px]">
            <p className="text-center pt-2 font-bold text-[30px] leading-9 tracking-wide ">
              This Week's Top 5 Businesses{" "}
            </p>
          </div>

          <div className=" flex  py-4  sm:justify-between justify-center md:justify-space flex-wrap mx-auto">
            
              {dataArray.map((item, index) => (
                <div key={index} className="lg:my-6 lg:pb-6 my-6">
                  <div className="rounded-2xl shadow-xl flex flex-row items-start justify-start py-1 pb-2 pr-1 pl-4 box-border relative gap-2 w-[320px] sm:w-[350px] md:w-[350px]">
                    <img
                      className="h-[80px] sm:h-[90px] sm:w-[110px] w-[90px] relative rounded-md overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src={bup1}
                    />
                    <div className="items-start justify-start gap-[15px]">
                      <div className="items-start justify-start">
                        <div className="relative sm:tracking-[2px] tracking-[0.5px] sm:leading-[35px] leading-[15px] font-semibold sm:text-[20px] text-[18px] inline-block">
                          {item.name}
                        </div>
                        <div className="self-stretch relative sm:text-[16px] tracking-[0.48px] inline-block leading-[20px] sm:leading-[19px]">
                          <p className="ml-2">{item.description}</p>
                          <p className="ml-2">{item.description2}</p>
                        </div>
                      </div>
                      <div className="self-stretch flex-1 items-end justify-end">
                        <h2 className="relative pl-[70px] pt-[5px] font-medium sm:text-[14px] text-[12px] hover:underline">
                          {item.location}
                        </h2>
                      </div>
                    </div>
                    <div className="sm:h-12 h-8 sm:w-12 w-8 absolute !m-[0] sm:top-[-16px] top-[-12px] sm:left-[-10px] left-[-14px] text-center text-21xl text-black bg-[#D7C1EB] rounded-full">
                      <div className="absolute sm:top-[9px] top-[2px] sm:left-[18px] left-[12px] sm:tracking-[0.48px] leading-[24px] font-medium flex items-center justify-center sm:text-[25px] text-[20px]">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Customberp;
