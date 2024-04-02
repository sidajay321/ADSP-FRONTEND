import React, { useState } from "react";
import AppLayout from "../../AppLayout";
function Form() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [mobile,setMobile]=useState('')

  const handleSubmit=(e)=>{
   e.preventDefault();
   console.log(name,email,mobile);
   //Make your api call here
  }

  const handleClear=()=>{
    setName('');
    setEmail('');
    setMobile("");
  }
  return (
    <section id="inquryform">
      <div className="bg-[#353956] text-white h-auto mb-5">
        <div className="text-center font-semibold leading-5 mx-auto pt-10">
          <div className="italic font-medium text-xl sm:text-3xl lg:text-5xl">
            Enquiry <span className="not-italic">form</span>
          </div>
          <hr className="w-16 sm:w-32 mx-auto h-1 lg:h-2 bg-[#ffffff] mt-3" />
        </div>

        <div className="mt-14">
          <form>
            <AppLayout>
              <div className="mb-4 bg-white w-[95%] mx-auto h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                <div className="py-2 ">
                  <label
                    htmlFor="name"
                    className="block  font-semibold text-black  mx-10  lg:text-2xl text-lg"
                  >
                    Name:<span className="text-red-500 text-2xl">&nbsp;*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="w-[#400px]  mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 text-black"
                    placeholder="Enter your Name"
                    required
                  />
                  <hr className="lg:w-[400px] w-[#200px]  mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                </div>
              </div>
              <div className="mb-4 w-[95%] mx-auto bg-white h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                <div className="py-2 ">
                  <label
                    htmlFor="Email"
                    className="block  font-semibold text-black  mx-10  lg:text-2xl text-lg"
                  >
                    Email:<span className="text-red-500 text-2xl">&nbsp;*</span>
                  </label>
                  <input
                    type="email"
                    id="name"
                    name="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="w-[#400px]  mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 text-black"
                    placeholder="Enter your Email."
                    required
                  />
                  <hr className="lg:w-[400px] w-[#200px]  mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                </div>
              </div>
              <div className="mb-4 w-[95%] mx-auto bg-white h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                <div className="py-2 ">
                  <label
                    htmlFor="MobilNo"
                    className="block  font-semibold text-black  mx-10  lg:text-2xl text-lg"
                  >
                    Mobile:
                    <span className="text-red-500 text-2xl">&nbsp;*</span>
                  </label>
                  <input
                    type="tel"
                    id="name"
                    name="name"
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
                    className="w-[#400px]  mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 text-black"
                    placeholder="Enter your Mobile No."
                    required
                  />
                  <hr className="lg:w-[400px] w-[#200px]  mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start lg:ml-[27px] mt-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                
                className="mr-2 w-[20px] mb-2 p-[5px] h-[20px] "
              />
              <label htmlFor="terms" className="text-[20px] mb-[8px] text-white lg:text-[30px] lg:py-6  sm:py-4 sm:mx-4">
                I agree to the <a href="/terms" className="underline lg:w-[30px] lg:h-[30px]">terms and conditions</a>.
              </label>
            </div>
            </AppLayout>
            <div className=" bg-white">
              <AppLayout>
                <div className="grid grid-cols-2 gap-2 sm:gap-1">
                  <div className=" p-4 rounded-md">
                    <div className="sm:ml-10">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="bg-[#354956] text-white px-4 py-2 rounded-md hover:bg-[#1e2a31] focus:outline-none focus:shadow-outline-blue w-28 h-10"
                        //   onClick={handleButtonClick} // Replace with your click handler function
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className=" p-4 rounded-md justify-items-end lg:ml-72 sm:ml-10">
                    <div className=" lg:mx-20 sm:mx-5">
                      <button
                        type="button"
                        onClick={handleClear}
                        className="  font-bold  px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-700 hover:text-white focus:outline-none focus:shadow-outline-blue"
                        //   onClick={handleButtonClick} // Replace with your click handler function
                      >
                        Clear form
                      </button>
                    </div>
                  </div>
                </div>
              </AppLayout>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-[#A5A8C1] mt-5">
        <div className="">
          <AppLayout>
            <div className="text-center leading-5 mx-auto pt-10 sm:mx-5  sm:px-5">
              <div className="sm:text-2xl  text-white">
                <span className="font-medium lg:text-5xl text-xl">Appointment </span>
                <span className=" lg:text-5xl text-lg">Section</span>
              </div>
              <hr className="lg:w-72 w-32  mx-auto h-0.5 bg-[#ffffff] mt-3" />
            </div>
            <div className="py-10">
              <div className="mb-4 bg-white lg:h-[#229px] h-auto my-15  lg:rounded-2xl rounded-sm sm:mx-5 sm:px-5 ">
                <div className="lg:py-10  py-5 w-[95%] mx-auto flex justify-around items-center">
                  <label
                    htmlFor="MobilNo"
                    className="block  font-semibold text-black  lg:text-2xl text-xl"
                  >
                    Date:
                    <span className="text-red-500 text-2xl">&nbsp;*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    // value={formData.name}
                    // onChange={handleInputChange}
                    className=" lg:w-[700px] w-[74%] px-5 mt-2 border-none rounded-[5px] focus:outline-none focus:border-black-500 lg:mx-10 mx-1 bg-[#D9D9D9] text-black lg:h-14  h-10  py:2.5 text-2xl"
                    placeholder="  Pick A Date "
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start lg:ml-[35px] mt-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                
                className="mr-2 w-[20px] mb-2 p-[5px] h-[20px] lg:w-[30px] lg:h-[30px] "
              />
              <label htmlFor="terms" className="text-[20px] mb-[8px] text-black lg:text-[30px] ">
                I agree to the <a href="/terms" className="underline lg:w-[30px] lg:h-[30px]">terms and conditions</a>.
              </label>
            </div>
              <div className="w-60   mx-auto  my-4 ">
                <button
                  type="button"
                  className="bg-[#353956] hover:bg-[#353956] hover:text-xl text-white font-bold py-2 px-4 lg;rounded-xl rounded-2xl h-14 lg:w-64 w-64"
                  // onClick={handleButtonClick} // Add your click event handler function
                >
                  Make An Appoinment
                </button>
              </div>
            </div>
          </AppLayout>
        </div>
      </div>
    </section>
  );
}

export default Form;
