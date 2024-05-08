import React from "react";
import AppLayout from "./AppLayout";

const GetTouch = () => {
  return (
    <AppLayout>
      <div className="sm:py-10  py-8 sm:pt-20 bg-[#352B3D] mt-4 sm:rounded-xl  my-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div className=" p-4 ">
            <div className=" ">
              <h1 className=" lg:mx-16 text-start  font-bold sm:text-[40px] text-[30px] pl-2 tracking-[1px] sm:leading-[50px] leading-[38px] ">
                <span className="text-white">get Touch With </span>
                <span className="text-[#B190CD]">Bizzata </span>
                <span className="text-white">To increase Your Business</span>
              </h1>
              <p className="mt-1 sm:mt-2 lg:mt-2 text-[#E7E7E7] tracking-[0.5px] pl-2 text-[10px] sm:text-[12px] md:text-[16px] mx-2 sm:leading-[20px]">
              Looking to expand your business further? Partner with ShopeeMart, our trusted affiliate, to enhance your reach and boost your sales. With ShopeeMart's extensive network and resources, you can tap into new markets and connect with a broader audience. Whether you're a small retailer or a growing entrepreneur, collaborating with ShopeeMart can help take your business to the next level. Get in touch today and explore new opportunities for growth!

              </p>
            </div>
          </div>

          <div className="p-4 sm:mx-3 mx-[10px] ">
            <div className="sm:w-[80%] ">
            <p className="text-white">Name</p>
            <input
              type="text"
              placeholder="Name"
              className=" w-full rounded-md h-8 py-1 px-2 mt-1"
            />
            <p className="text-white mt-2">Email.</p>
            <input
              type="email"
              placeholder="abcd@gmail.com"
              className="w-full rounded-md h-8 py-1 px-2 mt-1"
            />
            <p className="text-white mt-2">Phone</p>
            <input
              type="tel"
              placeholder="620XXXX083"
              className=" w-full rounded-md h-8 py-1 px-2 mt-1"
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                // checked={isChecked}
                // onChange={handleCheckboxChange}
                className="rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />

              <label htmlFor="checkbox" className="ml-2 text-white">
                Subscribe to the newsletter
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#BF9BDE] w-full text-white rounded-md py-2 px-3 mt-4 font-medium"
            >
              Submit
            </button>
          </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default GetTouch;
