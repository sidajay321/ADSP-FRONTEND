import React from "react";
import AppLayout from "../../AppLayout";
import QR from "../assets/QR.jpeg";
function Footer() {
  return (
    <footer className="w-full bg-[#FBE8A6] text-white h-auto">
      <AppLayout>
        <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
          <div className="w-full px-auto md:w-1/2 lg:px-0  justify-center m-auto">
            <img
              src="	https://spinthelead.com/wp-content/uploads/2023/07/S-2-300x300.png"
              alt=" Logo"
              className="w-[300px] h-[300px] justify-center mx-10  sm:mx-28 "
            />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-2 justify-center ">
            <div className="mb-2 lg:mb-0 mt-10 lg:mt-10">
              <p className="mb-6 text-xl font-bold text-[#534A45] ">
                Contaact Details :-
              </p>
              <ul className="flex flex-col space-y-2   text-gray-500">
                <h1 className="text-[#534A45] font-bold text-xl">Address</h1>
                <li className=" hover:text-black text-lg">
                  3rd Floor, Property no. 7, PU-4 Scheme No. 54, Vijay Nagar,
                  Indore, Madhya Pradesh 452010
                </li>
                <h1 className="text-[#534A45] font-bold text-xl">phone</h1>
                <li className=" hover:text-black text-lg">+91,9399404240</li>
                <h1 className="text-[#534A45] font-bold text-xl">Email.</h1>
                <li className=" hover:text-black text-lg">
                  spinthelead@gmail.com
                </li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0 mt-10 lg:mt-10 ">
              <p className="mb-4 text-lg font-semibold text-[#534A45] pt-12 ">
                Like & Follow
              </p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <span className="flex flex-row gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 mt-2">
                  <img
                    src="/facebook 1.png"
                    alt="facebook logo"
                    className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]"
                  />
                  <img
                    src="/whatsapp-icon.png"
                    alt="facebook logo"
                    className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]"
                  />
                  <img
                    src="/x.png"
                    alt="XXX logo"
                    className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]"
                  />
                </span>
                <li className="text-2xl font-bold">PAY NOW</li>
                <li>
                  <img
                    src={QR}
                    alt="QR"
                    className="m-2 h-[120px] w-[#130px] pb-5"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 bg-black text-black" />
        <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
          <div className="mt-4 md:mt-0">
            <p className="text-sm font-medium text-gray-500">
              © 2023 DevUI. All rights anyintech.
            </p>
          </div>
        </div>
      </AppLayout>
    </footer>
  );
}
export default Footer;
