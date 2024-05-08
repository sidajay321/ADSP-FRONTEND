import React from 'react'
import Servicemock from './MockData/Servicemock'
import { Swiper, SwiperSlide } from "swiper/react";
import img5 from "./assits/img3.png"
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import AppLayout from "./AppLayout";
import { Link } from 'react-router-dom';
function Service() {
  return (
<div className="mt-10 mx-auto" id="service">
    <AppLayout>
    <h1 className="text-center font-bold text-[35px] mb-6">Services</h1>
    <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          540: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
         
        }}
        modules={[Navigation]}
        navigation
        className="mySwiper"
      >
        <div className='mx-auto '>
            {Servicemock.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="lg:w-[340px] w-[350px] sm:w-[220px] lg:h-[600px] h-[600px] sm:h-[400px] rounded-md border bg-[#224f34]  gap-6  mx-4 px-10">
                  <img
                    src={img5}
                    alt="images"
                    className="h-[300px]  lg:h-[350px]  sm:h-[240px] w-full rounded-t-md object-cover"
                  />
                  <div className="p-4">
                    
                    <h1 className="ml-12 lg:ml-12 sm:ml-2 mt-4 inline-flex  lg:text-2xl text-2xl sm:text-xl font-bold  text-center text-white hover:underline">
                    <Link to="/blogepg"> {item.About}   </Link>
                    </h1>
                 
                    <p className="lg:mt-5 mt-5 sm:mt-2 lg:text-[20px] text-[20px] sm:text-[12px] text-[#759181] h-[100px] sm:h-[0px] text-start">{item.par}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
      </Swiper>
    </AppLayout>

</div>
  )
}

export default Service