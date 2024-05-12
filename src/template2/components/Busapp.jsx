import React, { useState } from "react";
import AppLayout from "./AppLayout";
import Acc from "./assits/Account.png"
import Mal from "./assits/Mail.png"
import Phon from "./assits/Phone.png"
import Book from "./assits/Open Book.png"
import Not from "./assits/Note.png"
const Busapp = ({ businessData }) => {
  console.log(businessData)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setcontact] = useState("");
  const [service, setservice] = useState("");
  const [ANS, setanns] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, contact, service, ANS);
    //Make your api call here
  };

  return (
    <AppLayout>
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-6  px-4 lg:mx-[140px] sm:mx-0 mx-[40px] mb-14">
        <div className="">
          <h1 className="lg:my-10 my-5 sm:my-6 lg:font-[24px] text-[20px] font-medium sm:font-medium lg:text-[28px] sm:text-[20px] text-center">
            BUSINESS HOURS
          </h1>
          <div className="border-2 sm:border-2 border-[#6BC785] rounded-[10px] ">
            <div className="text-center mx-1 lg:ml-[45px] sm:mx-[25px] lg:my-[32px] sm:my-[25px] my-[15px] text-[#224F34]">
              <table className="table text-center w-75 mx-auto" style={{ fontSize: "20px", textTransform: "uppercase" }}>
                {businessData.map((item, index) => (
                  <tr style={{ marginTop: "20px" }}>
                    <td style={{ paddingTop: "20px",textAlign:"left" }}>{item.bh_day}</td>
                    <td style={{ paddingTop: "20px" }}>{item.bh_start_time}</td>
                    <td style={{ paddingTop: "20px" }}> - </td>
                    <td style={{ paddingTop: "20px" }}>{item.bh_end_time}</td>
                  </tr>
                ))}
              </table>

            </div>
          </div>
        </div>
        <div className="" id="Contact">
          <h1 className="lg:my-10 my-5 sm:my-6 lg:font-[24px] text-[20px] font-medium sm:font-medium lg:text-[28px] sm:text-[20px] text-center">
            CONTACT US
          </h1>
          <div className="border-1 py-4 border-[#328B56] rounded-[10px] bg-[#224F34] ">
            <div className="mx-2 lg:ml-[45px] lg:my-[22px] sm:my-[25px] my-[15px]">
              <div className="mb-4 bg-[#224F34] w-[95%]  h-auto my-15 rounded-2xl  sm:px-5">
                <div className="py-2 flex  border-[#6BC785] border-2 rounded-[10px] px-3">
                  <img
                    src={Acc}
                    alt=""
                    className="h-[30px] w-[30px] pt-2.5"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-[#400px] bg-[#224F34]  mt-2 border-none focus:outline-none focus:border-black-500 mx-2  text-white"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 bg-[#224F34] w-[95%]  h-auto my-15 rounded-2xl  sm:px-5">
                <div className="py-2 flex  border-[#6BC785] border-2 rounded-[10px] px-3">
                  <img
                    src={Mal}
                    alt=""
                    className="h-[30px] w-[30px] pt-2.5"
                  />
                  <input
                    type="email"
                    id="name"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[#400px] bg-[#224F34]  mt-2 border-none focus:outline-none focus:border-black-500 mx-2  text-white"
                    placeholder="Enter Your Mail"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 bg-[#224F34] w-[95%]  h-auto my-15 rounded-2xl  sm:px-5">
                <div className="py-2 flex  border-[#6BC785] border-2 rounded-[10px] px-3 ">
                  <img
                    src={Phon}
                    alt=""
                    className="h-[30px] w-[30px] pt-2.5"
                  />
                  <input
                    type="tel"
                    id="name"
                    name="name"
                    value={contact}
                    onChange={(e) => setcontact(e.target.value)}
                    className="w-[#400px] bg-[#224F34]  mt-2 border-none focus:outline-none focus:border-black-500 mx-2  text-white"
                    placeholder="Enter Your Contact"
                    required
                  />
                </div>
              </div>

              <div className="mb-4 bg-[#224F34] w-[95%]  h-auto my-15 rounded-2xl  sm:px-5">
                <div className="py-2 flex  border-[#6BC785] border-2 rounded-[10px] px-3 ">
                  <img
                    src={Book}
                    alt=""
                    className="h-[30px] w-[30px] pt-2.5"
                  />
                  <input
                    type="tel"
                    id="name"
                    name="name"
                    value={service}
                    onChange={(e) => setservice(e.target.value)}
                    className="w-[#400px] bg-[#224F34]  mt-2 border-none focus:outline-none focus:border-black-500 mx-2  text-white"
                    placeholder="Enter Service You Need"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 bg-[#224F34] w-[95%]  h-auto my-15 rounded-2xl  sm:px-5">
                <div className="py-2 flex  border-[#6BC785] border-2 rounded-[10px] px-3 ">
                  <img
                    src={Not}
                    alt=""
                    className="h-[30px] w-[30px] pt-2.5"
                  />
                  <input
                    type="tel"
                    id="name"
                    name="name"
                    value={ANS}
                    onChange={(e) => setanns(e.target.value)}
                    className="w-[#400px] bg-[#224F34]  mt-2 border-none focus:outline-none focus:border-black-500 mx-2 text-white"
                    placeholder="Any Note For Us"
                    required
                  />
                </div>
              </div>
              <div className="bg-[#6BC785] mx-8 ml-6 rounded border-1 border-[#010101] w-[80%]">
                <button
                  type="button"
                  onClick={handleSubmit}
                  class="w-[80%] mx-4 text-white font-bold py-2 px-4 rounded"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Busapp;
