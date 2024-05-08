import React from "react";
import { BiSearch } from "react-icons/bi";
const Hero = () => {
  return (
    <div className="backgroundimage shadow-2xl">
      <div className="lg:pt-[6%]  pt-[8%] sm:pt-[10%] sm:ml-[18%] ml-[5%] lg:ml-[25%]">
        <div className="text-black  bg-[#FFF] lg:h-[50px] h-[40px] w-[90%] lg:w-[70%]  rounded-2xl flex gap-1">
          <div className="lg:py-[1%] pl-[1%] py-[1%] lg:px-[2%]">
            <select id="cars">
              <option value="volvo">City</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="lg:py-2.5  lg:px-[40px] py-1.5">
            <select id="cars">
              <option value="volvo">Category</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className=" ">
            <section className="flex py-0.5">
              <input
                type="search"
                placeholder="Enter product Product"
                className="py-1 lg:py-3   rounded-2xl    lg:w-[430px] w-[150px] sm:w-[310px] "
              />
              <button className="md:pt-2 pt-1">
                <BiSearch className="  md:h-[30px] md:w-[35px]  sm:h-[20px] sm:w-[25px]" />
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
