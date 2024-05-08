import React from "react";
import img1 from "./assites/1.png";
import img2 from "./assites/2.png";
import img3 from "./assites/3.png";
import img4 from "./assites/4.png";
import img5 from "./assites/5.png";
import img6 from "./assites/6.png";
import img7 from "./assites/7.png";

import AppLayout from "./AppLayout";

const HowItWorks = () => {
  return (
    <div className=" bg-[#352B3D] pb-[50px] pt-[10px] sm:h-full overflow-hidden">
      <AppLayout>
        <h1 className="text-center text-white text-[40px] font-bold sm:pt-8 ">
          How it Works ?
        </h1>
        <div className="flex flex-col  mt-10 relative ">
          {/* see what you can do you can put this div after h1 tag and then use position fix there size  */}
          <div className=" overflow-hidden">
            
            <img src={img7} alt="" className=" absolute  rotate-[320deg] h-[240px] right-[-1px] top-[70px] lg:top-[12px] sm:top-[50px] lg:h-[602px] sm:h-[450px] sm:right-[120px] lg:right-[228px] sm:rotate-[293deg] " />
            
    
            <img src={img7} alt="" className=" absolute top-[470px] right-[15px] rotate-[390deg] h-[200px] sm:top-[600px] lg:top-[831px] lg:h-[600px] sm:h-[400px]  sm:right-[120px] lg:right-[170px] sm:rotate-45 z-0" />

      
            <img
              src={img4}
              alt=""
              className=" absolute right-[-50px] h-[150px] top-[-60px] sm:top-[-80px] lg:top-[-43px] lg:h-[433px] sm:h-[300px] sm:right-[-100px] lg:right-[-334px]"
            />
          </div>

          <div className=" flex justify-start">
            {/* image which you download is not perfect size fix it size first */}
            <div>
              <img src={img1} alt="" className=" h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]  " />
            </div>

          </div>
          <div className=" flex justify-between mt-[100px]">
            <div className=" self-center">
              <img
                src={img6}
                alt=""
                className=" h-[100px] sm:w-[250px] sm:h-[200px] lg:w-[320px] lg:h-[320px] "
              />
            </div>
            <div>
              <img
                src={img2}
                alt=""
                className="h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] "
              />
            </div>
          </div>
          <div className=" flex justify-between mt-[100px] z-10">
            <div>
              <img
                src={img3}
                alt=""
                className="h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] "
              />
            </div>
            <div className=" self-center">
              <img
                src={img5}
                alt=""
                className="   h-[100px] lg:h-[400px] sm:h-[250px]"
              />
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default HowItWorks;
