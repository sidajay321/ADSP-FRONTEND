// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import AppLayout from "./AppLayout";
import galMock from "./MockData/GalMock"
import gl2 from "./assits/gl2.png"

const Gallery = ({ businessData, url }) => {
  console.log(businessData)
  return (
    <AppLayout>
      <div className=" my-10" id="gallery">
        <h1 className="text-center font-bold text-[35px] text-black">
          OUR GALLERY
        </h1>
        <div className=" pt-5">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Autoplay, Pagination, Navigation]}
            className="max-w-[90%] lg:max-w-[80%]"
          >
            <Swiper>
              {businessData.map((item, index) => (
                <SwiperSlide key={index}>
                  <a href={item.link}>
                    <img
                      src={url + item.bg_image}
                      alt={item.bg_image}
                      className="mx-auto h-[245px] w-[320px] sm:h-[200px] sm:w-[300px] rounded-md pb-10 gap-4"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </Swiper>
        </div>
      </div>
    </AppLayout>
  );
};

export default Gallery;
