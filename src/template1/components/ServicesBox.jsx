import ServicesBoxData from "../Mockdata/ServicesBoxData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppLayout from "../../AppLayout";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const ServicesBox = ({ businessServices }) => {
  const url = 'http://localhost/adsp/assets/uploads/'
  return (
    <div id="services" className=" h-auto  bg-[#F2F1E5] py-24">
      <h3 className="font-bold text-5xl text-[#2C2927] text-center mt-7">
        Services We Offer
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
                spaceBetween: 5,
              },
            }}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {businessServices?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-[#2C2927]  flex flex-row flex-wrap justify-center gap-4  scale-up-center">
                  <div className="w-[350px] text-center mb-8">
                    <h2 className="py-5 mt-8 font-medium text-2xl px-2">
                      {item.bs_service_name}
                    </h2>
                    <a href={item.bs_service_name}>
                      <img
                        src={url + item.bs_image}
                        alt={item.bs_service_name}
                        className="h-[100px] w-[100px] m-auto"
                      />
                    </a>
                    <div className="p-4">
                      <div>
                        <p className="text-lg text-[#534A4A] leading-7">
                          {item.bs_service_description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </AppLayout>
    </div>
  );
};

export default ServicesBox;
