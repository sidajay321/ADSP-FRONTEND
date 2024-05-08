import React from "react";
import AppLayout from "./AppLayout";
import card from "./assites/Card.svg";
import slidesData from "./Mock/SlidesData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Shoopmartgivyou = () => {
  return (
    <AppLayout>
      <div className="my-10">
        <h1 className="text-center font-bold text-4xl text-[#000] tracking-1 sm:tracking-2 font-serif mb-8">
        Bizzata gives you
        </h1>

        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            750: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className=" h-[150]">
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex gap-4 pb-10">
                  <div className="h-[120px] sm:w-[400px] w-[320px] mx-auto  my-auto shadow-md flex gap-1">
                    <div className="pt-1">
                      <img src={slide.img} alt="" className="h-[50px] w-[150px]"  />
                    </div>
                    <div className="pt-2">
                      <h1 className="font-semibold text-[14px] cursor-pointer">
                        <a href="">{slide.title}</a>
                      </h1>
                      <p className="text-[12px] lg:text-[14px]  mx-2 font-normal pb-2">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </AppLayout>
  );
};

export default Shoopmartgivyou;
