import React from 'react'

const IntroCard = () => {
  return (
    <div className='min-h-[330px] lg:min-h-[550px] w-auto  bg-[#14151B]'>
        <h1 className='font-[800] text-[#FFFFFF] text-[32px] lg:text-[64px] ml-8 lg:ml-24'>anyintech</h1>
        <p className='font-[700] lg:font-[600] lg:ml-24 text-[16px] lg:text-[32px] text-[#FFFFFF] ml-8 mt-[12px] '>AAYUSH PANDYA</p>
        <p className='font-[400]  text-[14px]  lg:text-[32px] text-[#FFFFFF] ml-8 mt-[12px] pr-6 lg:ml-24'>At Anyintech, we are on a mission to unleash new possibilities for businesses worldwide. We understand that in today's digital age, a strong online presence is not just an option; it's a necessity. We are your trusted partners in transforming your business online, making a significant impact, and revolutionizing the way you advertise.
         </p>
         <a href='#inquryform' className='font-[600] cursor-pointer text-[14px] lg:text-[24px] text-[#FFFFFF] w-[95px] lg:w-[181px] h-[40px] lg:h-[68px] rounded-[40px] bg-[#27282A] mt-2 lg:mt-[40px] ml-[24px] flex items-center justify-center lg:ml-24'>Let’s Talk</a>
    </div>
  )
}

export default IntroCard