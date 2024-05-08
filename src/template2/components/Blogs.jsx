import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BlogeMock from "../components/MockData/BlogeMock";
// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import AppLayout from "./AppLayout";
import photo from "./assits/Photo (1).png"


const Blogs = () => {
  return (
    <div className="mt-10" id="blogs">
      <AppLayout>
        <h1 className="text-center font-bold text-[35px] mb-6">OUR BLOGS</h1>

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
          <div>
            {BlogeMock.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="lg:w-[300px] w-[320px] sm:w-[220px] lg:h-[600px] h-[600px] sm:h-[400px] rounded-md border bg-[#224f34]  lg:ml-0 sm:ml-0 gap-4">
                  <img
                    src={photo}
                    alt="images"
                    className="h-[300px]  lg:h-[350px] sm:h-[240px] w-full rounded-t-md object-cover"
                  />
                  <div className="p-4">
                    
                    <h1 className="ml-12 lg:ml-12 sm:ml-2 mt-4 inline-flex  lg:text-2xl text-2xl sm:text-xl font-bold  text-center text-white hover:underline">
                    <Link to="/blogepg"> {item.About}   </Link>
                    </h1>
                 
                    <p className="lg:mt-5 mt-5 sm:mt-2 lg:text-[20px] text-[20px] sm:text-[12px] text-[#759181] h-[100px] sm:h-[0px] text-start">{item.par}</p>

                    <p className="lg:mt-[130px] mt-14 sm:mt-13 w-full  text-[16px] lg:text-[14px] sm:text-[10px] text-[#6BC785] ">
                      {" "}
                      <span className="text-[10px] lg:text-[8px] sm:text-[6px]">11</span>TH AUGUST{" "}
                      <span className="text-[12px] lg:text-[10px] sm:text-[8px]">2023</span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp; BY SONAM ANSAR
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </AppLayout>
    </div>
  );
};

export default Blogs;
