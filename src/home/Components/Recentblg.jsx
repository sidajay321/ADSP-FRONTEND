// import AppLayout from "./AppLayout";
import slidesData from "./Mock/Blog";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import AppLayout from "./AppLayout";

const RecentBlog = () => {
  return (
    <AppLayout>
    <div className="my-4 mb-8  mx-auto">
      <h1 className="text-center font-bold text-4xl text-[#000] tracking-1 sm:tracking-2 font-serif mb-8">
        Our Recent Blogs
      </h1>

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
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
         
        }}
        modules={[Navigation]}
        navigation
        className="mySwiper"
      >
        
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-[320px] lg:w-[280px] rounded-md border shadow-xl gap-2  bg-[#EAEAEA] mx-auto">
                <img
                  src={slide.imageSrc}
                  alt="Laptop"
                  className="h-48 w-full sm:w-[100%] lg:w-[100%] rounded-t-md object-cover"
                />
                <div className="py-4 pb-10 px-2">
                  <div className="flex gap-12 pb-1">
                    <p className="text-xs font-light ">{slide.date}</p>
                    <p className="text-xs font-light">{slide.category}</p>
                  </div>
                  <h1 className="text-lg font-bold tracking-0.5 cursor-pointer">
                    {slide.title}
                  </h1>
                  <p className="mt-3 text-sm text-gray-600 tracking-0.5 leading-6">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
       
      </Swiper>
    </div>
    </AppLayout>
  );
};

export default RecentBlog;

// <div className=" flex gap-4 mt-6">
// {data.map((item, index) => (
//   <div key={index} className="w-[300px] rounded-md border shadow-xl">
//     <img
//       src={item.imageSrc}
//       alt="Laptop"
//       className="h-[200px] w-full rounded-t-md object-cover"
//     />
//     <div className="py-4 pb-10 px-2">
//       <div className="flex gap-[20%] pb-1">
//         <p className="text-[10px] font-extralight">{item.date}</p>
//         <p className="text-[10px] font-extralight">{item.category}</p>
//       </div>
//       <h1 className="inline-flex items-center text-lg font-bold tracking-[0.5px]">
//         {item.title}
//       </h1>
//       <p className="mt-3 text-sm text-gray-600 tracking-[.5px] leading-[24px]">
//         {item.description}
//       </p>
//     </div>
//   </div>
// ))}
// </div>
