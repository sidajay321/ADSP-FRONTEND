import React from "react";
import AppLayout from "./AppLayout";
import { BiSolidLike } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BsFillChatTextFill } from "react-icons/bs";
import Searchnav from "./Searchnav";

const doctorsData = [
  {
    name: "Dr. Punit Bhojani",
    imageSrc: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_1280.jpg",
    rating: 4.7,
    ratingsCount: 236,
    address: "Marine Lines Road Marine Lines, Mumbai",
    fees: 1000,
    enquiries: 88
  },
  {
    name: "Dr. Punit Bhojani",
    imageSrc: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_1280.jpg",
    rating: 4.7,
    ratingsCount: 236,
    address: "Marine Lines Road Marine Lines, Mumbai",
    fees: 1000,
    enquiries: 88
  },
  {
    name: "Dr. Punit Bhojani",
    imageSrc: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_1280.jpg",
    rating: 4.7,
    ratingsCount: 236,
    address: "Marine Lines Road Marine Lines, Mumbai",
    fees: 1000,
    enquiries: 88
  },
  {
    name: "Dr. Punit Bhojani",
    imageSrc: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_1280.jpg",
    rating: 4.7,
    ratingsCount: 236,
    address: "Marine Lines Road Marine Lines, Mumbai",
    fees: 1000,
    enquiries: 88
  },
  {
    name: "Dr. Punit Bhojani",
    imageSrc: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_1280.jpg",
    rating: 4.7,
    ratingsCount: 236,
    address: "Marine Lines Road Marine Lines, Mumbai",
    fees: 1000,
    enquiries: 88
  },
  {
    name: "Dr. Punit Bhojani",
    imageSrc: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_1280.jpg",
    rating: 4.7,
    ratingsCount: 236,
    address: "Marine Lines Road Marine Lines, Mumbai",
    fees: 1000,
    enquiries: 88
  },
  {
    name: "Dr. Punit Bhojani",
    imageSrc: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_1280.jpg",
    rating: 4.7,
    ratingsCount: 236,
    address: "Marine Lines Road Marine Lines, Mumbai",
    fees: 1000,
    enquiries: 88
  },
  // Add more doctor objects as needed
];
function Searchpag() {
  return (
    <div>
      <Searchnav/>
      <AppLayout>
        <div className="my-10">
        {doctorsData.map((doctor, index) => (
        <div key={index} className="grid grid-cols-3 gap-4 border-[2px] px-2 py-2 rounded my-2">
          <div className="...">
            <img
              src={doctor.imageSrc}
              alt="Loading..."
              className="rounded lg:h-[255px] lg:w-[230px] sm:h-[250px] sm:w-full"
            />
          </div>
          <div className="col-span-2 ... lg:ml-[-150px] sm:mt-[10px]">
            <div className="flex gap-2 sm:pt-2">
              <BiSolidLike className="mt-1 lg:h-[30px] lg:w-[30px] lg:mt-[6px] sm:h-[25px] sm:w-[25px] sm:mt-1" />
              <p className="font-semibold lg:text-[28px] sm:text-[25px]">{doctor.name}</p>
            </div>
            <div className="flex mt-2 gap-2">
              <div className="flex bg-[rgb(0,122,12)] w-[60px] lg:w-[150px] sm:w-[100px] rounded-md text-white lg:text-[25px]">
                <p className="px-2 sm:pl-4 py-1 lg:pl-8 font-bold">{doctor.rating}</p>
                <FaStar className="mt-2.5 lg:mt-2.5 sm:mt-2" />
              </div>
              <div>
                <p className="font-normal text-[18px] sm:text-[20px] lg:text-[24px] lg:pt-[5px]">{doctor.ratingsCount} Ratings</p>
              </div>
            </div>
            <div className="lg:text-[20px] sm:text-[18px] font-medium">
              <p className="text-[12px] sm:text-[18px] lg:text-[20px]">{doctor.address}</p>
              <p>Fees: <span className="mt-1">&#8377;{doctor.fees}</span></p>
              <div className="flex">
                <p className="text-[12px] font-semibold sm:text-[18px] lg:text-[20px]">{doctor.enquiries} Enquiries</p>
              </div>
            </div>
          </div>
          <div className="lg:mt-[-50px] lg:ml-[250px] sm:ml-[240px] sm:mt-[-60px]">
            <div className="flex gap-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex gap-1">
                <IoCall className="mt-1" /> Now
              </button>
              <div>
                <button className="border-blue-500 border-2 text-black font-bold py-2 px-4 rounded">
                  Enquiry
                </button>
              </div>
              <div>
                <button className="border-[#007A0C] border-2 text-black font-bold py-2 px-4 rounded flex gap-1">
                  <BsFillChatTextFill className="mt-1.5 text-[#007A0C]" /> Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
        </div>
      </AppLayout>
    </div>
  );
}

export default Searchpag;
