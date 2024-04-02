import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppLayout from "../../AppLayout";
import DataProduct from "../Mockdata/DataProduct";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Product = ({ businessProduct }) => {
  console.log(businessProduct);
  const url = 'http://localhost/adsp/assets/uploads/'
  return (
    <div id="product" className=" h-auto  bg-[#ffffff] py-24">
      <h3 className="font-bold text-5xl text-[#2C2927] text-center mt-7 mb-10">
        Our Product
      </h3>
      <AppLayout>
        <div className="">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 6,
              },
            }}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {businessProduct?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-[#2C2927]  flex flex-row flex-wrap justify-center gap-4  scale-up-center">
                  <div className="w-[280px] rounded-md border mb-8">
                    <a href={item.serImg}>
                      <img
                        src={url + item.bp_image}
                        alt={'No Image'}
                        className="h-[210px] w-full rounded-md object-cover"
                      />
                    </a>
                    <div className="p-4">
                      <h1 className="text-lg font-semibold">{item.bp_name}</h1>
                      <p className="mt-3 text-sm text-gray-600">
                        {item.bp_description}
                      </p>
                      <button
                        type="button"
                        className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Read
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <div className="text-[#2C2927]  flex flex-row flex-wrap justify-center gap-4  scale-up-center hidden">
          {DataProduct.map((item, index) => (
            <div className="w-[300px] rounded-md border">
              <a href={item.serImg}>
                <img
                  src={item.serImg}
                  alt={item.altText}
                  className="h-[210px] w-full rounded-md object-cover"
                />
              </a>
              <div className="p-4">
                <h1 className="text-lg font-semibold">{item.serName}</h1>
                <p className="mt-3 text-sm text-gray-600">{item.serAbout}</p>
                <button
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Read
                </button>
              </div>
            </div>
          ))}
        </div> */}
      </AppLayout>
    </div>
  );
};

export default Product;
