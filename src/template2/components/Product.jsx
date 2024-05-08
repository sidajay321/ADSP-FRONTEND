// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductMock from "../components/MockData/ProductMock";
// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import AppLayout from "./AppLayout";
import img1 from "./assits/img2.png";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <AppLayout>
      <div className="">
        <div className="mt-10  " id="services">
          <h1 className="text-center font-bold text-[35px]">OUR PRODUCTS</h1>
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
              {ProductMock.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex">
                    <div className="relative sm:h-[400px] h-[450px]  sm:w-[250px] w-[330px]  lg:w-[480px] my-[60px] mx-2 example2 object-cover">
                      <img
                        src={img1}
                        alt={`Image ${index}`}
                        className=" h-[400px] w-[320px] sm:h-[350px] lg:h-[350px] lg:w-[500px]  rounded-lg   example3"
                      />
                      <Link to="/productsingle">
                        <button className="bg-[#6BC785] hover:bg-[#6BC785] text-white font-bold py-2 sm:px-4  mt-4 rounded  ml-[70px] sm:ml-1 lg:ml-10 lg-mt-4 h-[54px] sm:h-[40px] lg:h-[48px] w-[200px]">
                          Click me
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </AppLayout>
  );
};

export default Product;
