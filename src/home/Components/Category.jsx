import React from "react";
import AppLayout from "./AppLayout";
import bug from "./assites/Burgur.png";
import Catgry from "./Mock/Catgry";
const Category = () => {
  return (
    <div className=" my-8">
         <h1 className="text-center font-bold text-4xl text-[#000] tracking-1 sm:tracking-2 font-serif mb-8">
        Category's
      </h1>
      <AppLayout>
        <div className=" my-8 flex sm:gap-4 gap-2 mx-2">
          {Catgry.map((item) => (
            <div
              key={item.id}
              className="sm:w-[350px] w-[82px] h-[120px] sm:h-[150px] bg-[#E0E0E0] rounded-md shadow "
            >
              <div className=" justify-center items-center text-center">
                <img src={bug} alt="img" className=" lg:mx-[40%] sm:mx-[35%] mx-[20%] py-[15px] sm:h-[80px]  sm:w-[50px] w-[50px] h-[70px]" />
                <h1 className=" pt-[-7px] lg:text-[20px] sm:text-[18px] text-[15px] font-bold sm:font-semibold">{item.text}</h1>
              </div>
            </div>
          ))}
        </div>
      </AppLayout>
    </div>
  );
};

export default Category;
