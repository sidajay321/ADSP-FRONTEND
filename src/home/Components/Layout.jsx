import React from "react";
import Hero from "./Hero";
import Customberp from "./Customberp";
import Shopymart from "./Shopymart";
import Shoopmartgivyou from "./Shoopmartgivyou";
import Category from "./Category";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Feedback from "./Feedback";
import GetTouch from "./GetTouch";
import Recentblg from "./Recentblg";
import Navbar from './Navbar'
import Footer from './Footer'
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#ECECEC]">
        <Hero />
        <Customberp />
        <Shopymart />
        <Shoopmartgivyou />
        <Category />
        <HowItWorks />
        <Pricing />
        <Feedback />

        <Recentblg />
        <GetTouch />
      </div>
      <Footer />
    </>

  );
};

export default Layout;
