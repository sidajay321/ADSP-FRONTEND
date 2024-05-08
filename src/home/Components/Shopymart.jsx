import React from "react";
import AppLayout from "./AppLayout";
import spmart from "./assites/spMart.png";
const Shopymart = () => {
  return (
    <div className="bg-[#352B3D]">
      <AppLayout>
        <div className="py-10">
          <h1 className="text-center font-bold text-[30px] text-[#fff] tracking-[2px] sm:tracking-[5px]  font-serif">
          Why Bizzata
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 mt-4 ">
            <div className=" p-4 col-span-2">
              <div className="">
                <h1 className=" text-start text-[#B190CD] font-bold sm:text-[30px] text-[20px] pl-4 tracking-[2px] sm:leading-[20px] leading-[15px]">
                Bizzata Heading
                </h1>
                <p className="mt-4 sm:mt-10 lg:mt-14 text-[#fff] tracking-[0.5px] pl-2 text-[14px] md:text-[16px]">
                  Why Bizzata Bizzata stands out in the competitive landscape as
                  a comprehensive listing platform and e-commerce hub,
                  revolutionizing the way businesses operate online. Unlike
                  traditional platforms, Bizzata consolidates all facets of
                  business management onto a single, user-friendly interface.
                  From product listings to service appointments, Bizzata
                  empowers businesses with unparalleled convenience and
                  efficiency. Whether you're a small retailer or a burgeoning
                  entrepreneur, Bizzata streamlines operations and maximizes
                  exposure, ensuring your offerings reach the widest audience
                  possible. At the core of Bizzata's appeal lies its commitment
                  to affordability without compromising on quality. By
                  centralizing resources and eliminating unnecessary overheads,
                  Bizzata passes on the savings to its users, making it an
                  attractive option for businesses of all sizes. In essence,
                  Bizzata isn't just a platform—it's a game-changer. With its
                  innovative approach and dedication to customer satisfaction,
                  Bizzata is poised to reshape the digital marketplace
                  landscape, one transaction at a time.
                </p>
                <div className="flex pt-10 gap-14">
                  <p className="bg-[#BF9BDE] w-[300px]   rounded-md py-2 px-3 font-medium">
                    Know More
                  </p>
                  <p className="bg-[#BF9BDE] w-[300px]   rounded-md py-2 px-3 font-medium">
                    Let's Start
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <img
                src={spmart}
                alt=""
                className="mt-[-50px] lg:mt-[-50px] sm:mt-[20px] h-[350px] sm:h-[400px] lg:h-[400px] w-[110%]"
              />
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Shopymart;
