import React from "react";
import img1 from "./assites/Fimg.svg";
import img2 from "./assites/Fimg2.svg";
import img3 from "./assites/insta.svg";
import img4 from "./assites/Amozon.svg";
import img5 from "./assites/youTub.svg";
import { FaArrowCircleRight } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#352B3D] py-10">
      <div class="grid lg:grid-cols-5 sm:grid-cols-2 gap-2 mx-4 mb-4">
        <div class=" pl-10 lg:pt-28 sm:pt-16 pt-8">
          <div className="flex gap-2">
            <a href="">
              <img src={img1} alt="" />
            </a>
            <a href="">
              <img src={img2} alt="" />
            </a>
            <a href="">
              <img src={img3} alt="" />
            </a>
            <a href="">
              <img src={img4} alt="" />
            </a>
            <a href="">
              <img src={img5} alt="" />
            </a>
          </div>
        </div>
        <div class="">
          <div className="pt-2 ">
            <h2 className="pt-4 font-semibold text-[20px] sm:text-[30px] text-[#BF9BDE] pl-2">
             Bizzata 
            </h2>
            <p className="mt-2 mb-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              Contact us
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              Careers
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              Affilate Programme
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              Testimonials
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              About Us
            </p>
          </div>
        </div>
        <div class=" ">
          <div className="pt-2 ">
            <h2 className="pt-4 font-semibold text-[20px] sm:text-[30px] text-[#BF9BDE] pl-2">
           Customer Service
            </h2>
            <p className="mt-2 mb-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
             FAQ
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
            Privacy Policy
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
            Returns & Refunds
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
            Cookie Guidelines
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              Terms & Conditions
            </p>
            
          </div>
        </div>
        <div class="">
          <div className="pt-2 ">
            <h2 className="pt-4 font-semibold text-[20px] sm:text-[30px] text-[#BF9BDE] pl-2">
              important Links
            </h2>
            <p className="mt-2 mb-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              Terms of Uses
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              Copyright
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              Category
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              Location
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              Blogs
            </p>
            <p className="my-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
              Advertise
            </p>
          </div>
        </div>
        <div class="">
          <div className="pt-2 ">
            <h2 className="pt-4 font-semibold text-[20px] sm:text-[30px] text-[#BF9BDE] pl-2">
              Subscribe Us
            </h2>
            <div className="leading-[13px]">
            <p className="mt-2 mb-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
            subscribe to our newsletter to get 
            </p>
            <p className="mt-2 mb-1  text-[16px] text-white cursor-pointer hover:underline pl-4">
            updates about our grand offers.
            </p>
            </div>
            <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
            <input
              className="flex h-10 w-full rounded-md border border-white bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-white/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                <FaArrowCircleRight  className="h-4 w-4"/>
            </button>
          </form>
          </div>
        </div>
      </div>
      <div className="flex mx-10 gap-10">
        <h1 className="text-[20px] text-white pt-4 lg:pl-20">&copy; 2024  Bizzata. All rights reserved.</h1>
        
      </div>
    </div>
  );
};

export default Footer;

