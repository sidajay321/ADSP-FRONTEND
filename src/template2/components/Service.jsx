import React from 'react'
import Servicemock from './MockData/Servicemock'
import { Swiper, SwiperSlide } from "swiper/react";
import img5 from "./assits/img3.png"
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import AppLayout from "./AppLayout";
import { Link } from 'react-router-dom';
function Service({ businessData, url }) {
  console.log(businessData);
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
            {businessData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-md border bg-[#ddd]  gap-6  mx-4 px-10 text-center">
                  <img
                    src={url + item.bs_image}
                    alt="images"
                    className="h-[300px]  lg:h-[350px]  sm:h-[240px] w-full rounded-t-md object-cover"
                  />
                  <h3 style={{ fontWeight: "bold", fontSize: "25px" }}>{item.bs_service_name}</h3>
                  <p>{item.bs_service_description}</p><br />
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