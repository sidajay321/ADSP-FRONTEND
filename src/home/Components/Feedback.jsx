import React from "react";
import AppLayout from "./AppLayout";
import star from "./assites/Star.svg";
import Feedbackmock from "./Mock/Feedbackmock";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Feedback = () => {
  return (
    <div className="">
      <AppLayout>
        <div className="sm:py-10  py-8 sm:pt-20 bg-[#352B3D] mt-4 sm:rounded-xl  my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 ">
            <div className=" p-4 ">
              <div className="">
                <h1 className=" text-start  font-bold sm:text-[30px] text-[20px] pl-4 tracking-[2px] sm:leading-[20px] leading-[15px]">
                  <span className="text-white">Give</span>{" "}
                  <span className="text-[#B190CD]">Valuable</span>
                </h1>
                <h1 className=" text-start  font-bold sm:text-[30px] text-[20px] pl-4 tracking-[2px] sm:leading-[50px] leading-[30px]">
                  {" "}
                  <span className="text-white">Feedback!</span>
                </h1>
                <p className="mt-4 sm:mt-10 lg:mt-14 text-[#fff] tracking-[0.5px] pl-2 text-[14px] md:text-[18px]">
                  Your feedback matters to us! At Bizzata, we are committed to
                  continuously improving our products and services to better
                  serve you. Please take a moment to share your thoughts,
                  suggestions, or any concerns you may have. Your input helps us
                  enhance your experience with Bizzata.
                </p>
              </div>
            </div>

            <div className="p-4 mx-3 sm:mt-[-60px]">
              <p className="text-white">Name</p>
              <input
                type="text"
                placeholder="Name"
                className=" w-[80%] rounded-md h-8 py-1 px-2 mt-1"
              />
              <p className="text-white mt-5">Feedback</p>
              <input
                type="text"
                placeholder="Type your message..."
                className=" w-[80%] rounded-md h-14 lg:h-24 px-2 mt-1"
              />
              <p className="text-white mt-5">Rating</p>
              <div className="flex gap-1.5">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <button
                type="submit"
                className="bg-[#BF9BDE] w-[80%]  text-white rounded-md py-2 px-3 mt-4 font-medium"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            750: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            770: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          modules={[Navigation]}
          navigation
          className="mySwiper"
        >
          {Feedbackmock.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="mt-2 my-2 h-[210px] w-[350px] sm:w-[345px] lg:w-[380px] bg-[#352B3D] text-[#e9e9e9] rounded-xl mx-auto">
                <h1 className="pt-2 px-3 text-[15px] font-sans">
                  {item.content}
                </h1>
                <div className="sm:pt-4 pt-[-8px] sm:pl-[170px] pl-[120px]">
                  <div className="flex gap-0.5">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <h1 className="text-[16px] font-semibold sm:pl-10 pl-6 pb-2">
                    -{item.author}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AppLayout>
    </div>
  );
};

export default Feedback;
