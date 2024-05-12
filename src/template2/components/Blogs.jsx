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


const Blogs = ({ businessData, url }) => {
  console.log(businessData);
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
            {businessData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-md border bg-[#224f34]  lg:ml-0 sm:ml-0 gap-4">
                  <img
                    src={url + item.bb_blog_image}
                    alt="images"
                    className="h-[300px]  lg:h-[350px] sm:h-[240px] w-full rounded-t-md object-cover"
                  />
                  <div className="p-4 text-center">

                    <h1 className="font-bold  text-center text-white hover:underline">
                      {item.bb_blog_title}
                    </h1>

                    <p className="text-white" style={{ fontSize: "20px" }}>{item.bb_blog_description}</p>

                    {/* <p className="lg:mt-[130px] mt-14 sm:mt-13 w-full  text-[16px] lg:text-[14px] sm:text-[10px] text-[#6BC785] ">
                      {" "}
                      <span className="text-[10px] lg:text-[8px] sm:text-[6px]">11</span>TH AUGUST{" "}
                      <span className="text-[12px] lg:text-[10px] sm:text-[8px]">2023</span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp; BY SONAM ANSAR
                    </p> */}
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
