import React from "react";

const ContactUs = ({ businessData }) => {
  console.log(businessData);
  return (
    <div className="w-auto min-h-[368px] lg:min-h-[500px] bg-[#14151B]">
      <div className="font-[700] text-[20px] lg:text-[48px] text-[rgb(255,255,255)] ml-8 lg:ml-24 pt-[20px] lg:pt-[50px]">
        Contact <span className="font-[900]">Us</span>
      </div>
      <hr className="w-[80px] ml-[40px] lg:ml-[144px] h-[1px] lg:h-[3px] bg-[#FFFFFF] lg:w-[164px]" />
      <div className="w-[85%] mx-auto mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row flex-wrap gap-y-[12px] lg:gap-x-[40px]">
        <div className="w-320px rounded-[24px] lg:rounded-[70px] bg-[#3B3C41] min-h-[52px] lg:min-h-[111px] lg:w-[46%]">
          <div className="min-h-[52px] lg:min-h-[111px]  flex lg:items-center">
            <img
              src="1.png"
              className="w-[30px] lg:w-[75px] h-[30px] lg:h-[75px] rounded-[50%] ml-[15px] my-auto"
            />
            <div className="ml-[11px] lg:ml-[25px] mt-[2px] ">
              <p className="text-[#FFFFFF] font-[700] text-[14px] lg:text-[24px] p-0">
                Location
              </p>
              <p className="font-[400] text-[14px] lg:text-[24px] text-[#929090] p-0">
                <a href="https://www.google.com/maps/place/BTM+Layout,+Bengaluru,+Karnataka/@12.9142141,77.6041209,15.93z/data=!4m15!1m8!3m7!1s0x3bae14fc91a93031:0xf0afe62576cbdc3f!2sBTM+Layout,+Bengaluru,+Karnataka!3b1!8m2!3d12.9165757!4d77.6101163!16s%2Fm%2F02rqxr3!3m5!1s0x3bae14fc91a93031:0xf0afe62576cbdc3f!8m2!3d12.9165757!4d77.6101163!16s%2Fm%2F02rqxr3?entry=ttu">
                  {businessData?.ub_address}, {businessData?.ub_district}, {businessData?.ub_state}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-320px rounded-[24px] lg:rounded-[70px] bg-[#3B3C41] min-h-[52px] lg:min-h-[111px] lg:w-[46%]">
          <div className="min-h-[52px] lg:min-h-[111px]  flex lg:items-center">
            <img
              src="4.png"
              className="w-[30px] lg:w-[75px] h-[30px] lg:h-[75px] rounded-[50%] ml-[15px] my-auto"
            />
            <div className="ml-[11px] lg:ml-[25px] mt-[2px] ">
              <p className="text-[#FFFFFF] font-[700] text-[14px] lg:text-[24px] p-0">
                Mobile No.
              </p>
              <p className="font-[400] text-[14px] lg:text-[24px] text-[#929090] p-0">
                {businessData?.ub_whatsapp_number}
              </p>
            </div>
          </div>
        </div>

        <div className="w-320px rounded-[24px] lg:rounded-[70px] bg-[#3B3C41] min-h-[52px] lg:min-h-[111px] lg:w-[46%]">
          <div className="min-h-[52px] lg:min-h-[111px]  flex lg:items-center">
            <img
              src="5.png"
              className="w-[30px] lg:w-[75px] h-[30px] lg:h-[75px] rounded-[50%] ml-[15px] my-auto"
            />
            <div className="ml-[11px] lg:ml-[25px] mt-[2px] ">
              <p className="text-[#FFFFFF] font-[700] text-[14px] lg:text-[24px] p-0">
                Email
              </p>
              <p className="font-[400] text-[14px] lg:text-[24px] text-[#929090] p-0">

                <a href="mailto:anyintech@anyintech.com?subject = Feedback&body = Message">
                  {businessData?.ub_email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-320px rounded-[24px] lg:rounded-[70px] bg-[#3B3C41] min-h-[52px] lg:min-h-[111px] lg:w-[46%]">
          <div className="min-h-[52px] lg:min-h-[111px]  flex lg:items-center">
            <img
              src="6.png"
              className="w-[30px] lg:w-[75px] h-[30px] lg:h-[75px] rounded-[50%] ml-[15px] my-auto"
            />
            <div className="ml-[11px] lg:ml-[25px] mt-[2px] ">
              <p className="text-[#FFFFFF] font-[700] text-[14px] lg:text-[24px] p-0">
                Category
              </p>
              <p className="font-[400] text-[14px] lg:text-[24px] text-[#929090] p-0">
                <a href="https://www.anyintech.com/service.html">
                  {businessData?.ub_business_segment}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
