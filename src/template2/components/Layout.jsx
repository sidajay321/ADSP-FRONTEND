import React from "react";
import Hader from "./Hader";
import ContactUs from "./ContactUs"
import Product from "./Product"
import Blogs from "./Blogs"
import Gallery from "./Gallery"
import Reviews from "./Reviews"
import Busapp from "./Busapp"
import Service from "./Service";
import Navbar from "./Navbar"
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#ECECEC]'>
        <Hader />
        <ContactUs />
        <Product />
        <Service />
        <Blogs />
        <Gallery />
        <Reviews />
        <Busapp />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
