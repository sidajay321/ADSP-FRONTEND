import React from "react";
import AppLayout from "./AppLayout";
import { FaLocationDot } from "react-icons/fa6";
import { GrSearch } from "react-icons/gr";
const Searchnav = () => {
  return (
    <div className="bg-white mx-1 sm:mx-2 lg:mt-[50px] lg:pt-[20px]">
      <AppLayout>
        <div className="py-2 flex gap-2 sm:gap-4">
          <div className="relative flex  border-2 border-[#352B3D] rounded md:w-max">
            <input
            //   type="search"
              color="black"
              label="Type here..."
              className=" w-[130px] sm:w-[240px] font-semibold lg:w-[400px] pr-[25px] h-[30px] px-1"
              placeholder="Locations"
            />
            <button
              size="sm"
              color="white"
              className="!absolute right-2 top-1 rounded"
            >
              <FaLocationDot className="w-[20px] h-[20px] font-bold text-black"/>
            </button>
          </div>
          <div className="relative flex  border-2 border-[#352B3D] md:w-max rounded">
            <input
              type="search"
              color="black"
              label="Type here..."
              className=" w-[180px] sm:w-[430px] lg:w-[500px] pr-[35px] h-[30px] font-semibold px-1"
              placeholder="Estate Agents"
            />
            <button
              size="sm"
              color="white"
              className="!absolute right-2 top-1 rounded"
            >
             <GrSearch className="w-[20px] h-[25px] font-bold text-black"/> 
            </button>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Searchnav;
