import React from "react";
import AppLayout from "./AppLayout";
import map from "./assits/Map Marker.png"
import mal from "./assits/Upload Mail.png"
import cal from "./assits/Call Disconnected.png"
import ctg from "./assits/Medium Priority.png"
const ContactUs = ({ businessData, userData }) => {
  return (
    <AppLayout>
      <div className=" my-5">
        <h1 className="text-center font-bold text-[35px] text-[#010101] mt-4">
          CONTACT US
        </h1>
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-6 mt-[30px] px-4">
          <div className="border-2 sm:border-4 border-[#328B56] rounded-[10px]">
            <div className="py-4 px-3 sm:py-1 ml-2 mt-0 sm:mt-2 lg:ml-4 gap-4">
              <ul className="flex gap-4">
                <img
                  src={map}
                  alt=""
                  className="w-[30px] h-[35px]  lg:h-[50px] lg:w-[50px] sm:mt-2 mt-1"
                />

                <div className="flex-col">
                  <h1 className="text-[16px] md:text-[24px] font-semibold">VISIT US :</h1>
                  <p className="text-[16px] lg:text-[22px] md:text-[15px] ">{businessData?.ub_address}</p>
                </div>
              </ul>
            </div>
          </div>

          <div className="border-2 sm:border-4 border-[#328B56] rounded-[10px]">
            <div className="py-4 px-3 sm:py-1 ml-2 mt-0 sm:mt-2 lg:ml-4 gap-4">
              <ul className="flex gap-4 mb-1">
                <img
                  src={mal}
                  alt=""
                  className="w-[30px] h-[35px]  lg:h-[50px] lg:w-[50px] sm:mt-4 mt-1 pb-2"
                />

                <div className="flex-col">
                  <h1 className="text-[16px] md:text-[24px] font-semibold">MAIL US :</h1>
                  <p className="text-[16px] lg:text-[22px] md:text-[15px]">{businessData?.ub_email}</p>
                </div>
              </ul>
            </div>
          </div>

          <div className="border-2 sm:border-4 border-[#328B56] rounded-[10px]">
            <div className="py-4 px-3 sm:py-1 ml-2 mt-0 sm:mt-2 lg:ml-4 gap-4">
              <ul className="flex gap-4 mb-1">
                <img
                  src={cal}
                  alt=""
                  className="w-[30px] h-[35px]  lg:h-[50px] lg:w-[50px] sm:mt-4 mt-1 pb-2"
                />

                <div className="flex-col">
                  <h1 className="text-[16px] md:text-[24px] font-semibold">CALL US :</h1>
                  <p className="text-[16px] lg:text-[22px] md:text-[15px]">Call: {businessData?.ub_whatsapp_number}</p>
                </div>
              </ul>
            </div>
          </div>

          <div className="border-2 sm:border-4 border-[#328B56] rounded-[10px]">
            <div className="py-4 px-3 sm:py-1 ml-2 mt-0 sm:mt-2 lg:ml-4 gap-4">
              <ul className="flex gap-4 mb-1">
                <img
                  src={ctg}
                  alt=""
                  className="w-[30px] h-[35px]  lg:h-[50px] lg:w-[50px] sm:mt-2 mt-1"
                />

                <div className="flex-col">
                  <h1 className="text-[16px] md:text-[24px] font-semibold">CATEGORY  :</h1>
                  <p className="text-[16px] lg:text-[22px] md:text-[15px]">{userData?.ca_name}</p>
                </div>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </AppLayout>
  );
};

export default ContactUs;
