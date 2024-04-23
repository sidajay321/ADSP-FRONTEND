import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import AppLayout from "../../AppLayout";
import { Link } from "react-scroll";

const Navnar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#14151B]  transition-transform duration-200 transform ">
      <AppLayout>
        <ul className="text-center text-xl px-[20px] shadow-2xl shadow-black transition-transform duration-200 transform ">
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-950">
            <a href="#home">Home</a>
          </li>
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-950">
            <Link to="/about">About Us</Link>
          </li>
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-950">
            <a href="#product">Product</a>
          </li>
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-950">
            <a href="#services">Services</a>
          </li>
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-950">
            <a href="#inquryform">Contct Us</a>
          </li>
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-950">
            <a href="#gallery">Gallery</a>
          </li>
        </ul>
      </AppLayout>
    </div>
  );

  return (
    <div className="bg-[#14151B] text-white">
      <AppLayout>
        <nav>
          <div className="h-16 flex justify-between z-20 text-white lg:py-5 px-[20px] py-4 ">
            <div className="flex items-center flex-1">
              <a href="/">
              <span className="text-3xl font-bold">anyintech</span>
              {/* <img alt='' src="/" alt="comLogo" /> */}
              </a>
            </div>
            <div className="lg:flex lg:flex-1 items-center justify-end font-normal hidden">
              <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px] ">
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                    <Link to="/about">About</Link>
                  </li>
                   <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                    <a href="#product">Product</a>
                  </li>
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                    <a href="#services">Services</a>
                  </li>
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  <a href="#inquryform">Contct</a>
                  </li>
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  <a href="#gallery">Gallery</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>{click && content}</div>
            <button
              className="block sm:hidden translate text-white"
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <CiMenuBurger />}
            </button>
          </div>
        </nav>
      </AppLayout>
    </div>
  );
};

export default Navnar;
