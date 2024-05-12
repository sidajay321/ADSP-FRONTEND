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
import { HelmetProvider } from 'react-helmet-async';
const Layout = ({ businessData, url }) => {
  console.log(businessData)

  return (
    <>
      <HelmetProvider>
        <title>{businessData?.businessData?.ub_home_title || 'Default Title'}</title>
        <meta name="description" content={businessData?.businessData?.ub_meta_description || 'Default Description'} />
        <meta name="keywords" content={businessData?.businessData?.ub_meta_keyword || 'Default Keywords'} />
      </HelmetProvider>
      <Navbar businessData={businessData?.businessData} userData={businessData?.userData} />
      <div className='bg-[#ECECEC]'>
        <Hader businessData={businessData?.businessData} />
        <ContactUs businessData={businessData?.businessData} userData={businessData?.userData} />
        <Product businessData={businessData?.businessProduct} url={url} />
        <Service businessData={businessData?.businessServices} url={url} />
        <Blogs businessData={businessData?.businessBlog} url={url} />
        <Gallery businessData={businessData?.businessGallery} url={url} />
        {/* <Reviews businessData={businessData?.businessProduct} url={url} /> */}
        <Busapp businessData={businessData?.businessHours} />
      </div>
      <Footer paymentDetails={businessData?.businessPayment} businessData={businessData?.businessData} url={url} userData={businessData?.userData} />
    </>
  );
};

export default Layout;
