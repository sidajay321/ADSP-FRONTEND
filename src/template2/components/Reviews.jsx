import React from "react";
import AppLayout from "./AppLayout";
const Reviews = () => {
  return (
    <AppLayout>
      <h1 className=" text-center font-bold text-[34px] text-[#4B4B4B] mb-10">
        Reviews
      </h1>
      <div className="mb-5 mx-auto sm:mx-0" >
        <div className="px-2  sm:ml-[18%]  md:ml[28%] lg:ml-[30%] my-10">
          <div class="relative flex w-[350px]  bg-[#E8E8E8] sm:w-[500px]  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div class="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <img
                src="./Emg.png"
                alt="EMG"
                class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
              />
              <div class="flex w-full flex-col gap-0.5">
                <div class="flex items-center justify-between">
                  <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Abhishek Raj
                  </h5>
                 
                </div>
               
              </div>
            </div>
            <div class="p-0  px-2 mb-6">
              <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                “ It is a long established fact that a reader will be tracked
                distracted by the readable content of a page is when looking at
                its layout. The point of using Lorem of distribution it look
                like readable English “
              </p>
            </div>
            {/* <div className="flex gap-2 sm:gap-10 mb-5">
              <p className="bg-[#B8FC83] text-black px-4 py-1.5 rounded-md  focus:outline-none focus:ring focus:border-green-700 flex w-[125px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/ef4a/1cc7/2134ddd358055a91181134472101c884?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkgdqZIjJOsB10~jqfJUd0NK0eezT~MDVsBjvkPKuGt~l1ULHEjW0k1CHrcuX6qujcj294WpDR7xF~d-~KUWVRsuG9n-F4w~H8LrZrbo~NYboJLHuWeun2xsX7bKLZVo20cvdFDB4yoO-BfnDVk7G9obPNf-1LBFKHsYjuDx5InTp~8LdaVMY9MG-ljJM4DhHM8RCZy3ikcUDbXtfHJGijvLFuql0J4WuZZ~cl0I-0BbcqvcbIixAE7cDdUT2IfcjykfXpUaqXdNvAbOnGVSCDHrCHSESD0klbMGBIyLB4OXbKRIRqly5hhh-g8nEGeV7y4CUqftcuRQS~rou1YwLg__"
                  alt=""
                  className="h-[30px] w-[30px] pr-2"
                />
                <span className="font-medium text-[18px] "> Food</span>
              </p>
              <p className="bg-[#B8FC83] text-black px-6 py-1.5 rounded-md  focus:outline-none focus:ring focus:border-green-700 flex w-[157px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/ef4a/1cc7/2134ddd358055a91181134472101c884?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkgdqZIjJOsB10~jqfJUd0NK0eezT~MDVsBjvkPKuGt~l1ULHEjW0k1CHrcuX6qujcj294WpDR7xF~d-~KUWVRsuG9n-F4w~H8LrZrbo~NYboJLHuWeun2xsX7bKLZVo20cvdFDB4yoO-BfnDVk7G9obPNf-1LBFKHsYjuDx5InTp~8LdaVMY9MG-ljJM4DhHM8RCZy3ikcUDbXtfHJGijvLFuql0J4WuZZ~cl0I-0BbcqvcbIixAE7cDdUT2IfcjykfXpUaqXdNvAbOnGVSCDHrCHSESD0klbMGBIyLB4OXbKRIRqly5hhh-g8nEGeV7y4CUqftcuRQS~rou1YwLg__"
                  alt=""
                  className="h-[30px] w-[30px] pr-2"
                />
                <span className="font-medium text-[18px] "> Quality</span>
              </p>
              <p className="bg-[#B8FC83] text-black px-4 py-1.5 rounded-md  focus:outline-none focus:ring focus:border-green-700 flex w-[134px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/ef4a/1cc7/2134ddd358055a91181134472101c884?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkgdqZIjJOsB10~jqfJUd0NK0eezT~MDVsBjvkPKuGt~l1ULHEjW0k1CHrcuX6qujcj294WpDR7xF~d-~KUWVRsuG9n-F4w~H8LrZrbo~NYboJLHuWeun2xsX7bKLZVo20cvdFDB4yoO-BfnDVk7G9obPNf-1LBFKHsYjuDx5InTp~8LdaVMY9MG-ljJM4DhHM8RCZy3ikcUDbXtfHJGijvLFuql0J4WuZZ~cl0I-0BbcqvcbIixAE7cDdUT2IfcjykfXpUaqXdNvAbOnGVSCDHrCHSESD0klbMGBIyLB4OXbKRIRqly5hhh-g8nEGeV7y4CUqftcuRQS~rou1YwLg__"
                  alt=""
                  className="h-[30px] w-[30px] pr-2"
                />
                <span className="font-medium text-[18px] "> Taste</span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Reviews;
