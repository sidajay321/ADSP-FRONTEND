import React from 'react'

const BussinessHourBox = () => {
    return (
        <div className='w-[295px] h-[276px] lg:w-[672px] lg:min-h-[522px] mx-auto rounded-[30px] mt-[30px] bg-[#353956] shadowbox lg:mt-[80px] my-10'>
            <div className='w-[241px] lg:w-[85%] text-[#a3a8d3] ml-3 lg:ml-7 h-[100%] py-5 lg:py-9 lg:text-[32px]'>
                <div className='flex flex-col py-[4px] lg:py-[12px] '>
                    <div className='flex justify-between '>
                        <div>Monday</div>
                        <div>9AM - 9PM </div>
                    </div>
                    <hr className='w-[100%]  bg-[#a3a8d3] h-[1px] border-none' />
                </div>

                <div className='flex flex-col py-[4px]'>
                    <div className='flex justify-between'>
                        <div>TUESDAY</div>
                        <div>9AM - 9PM </div>
                    </div>
                    <hr className='w-[100%]  bg-[#a3a8d3] h-[1px] border-none' />
                </div>
                <div className='flex flex-col py-[4px]'>
                    <div className='flex justify-between'>
                        <div>WEDNESDAY</div>
                        <div>9AM - 9PM </div>
                    </div>
                    <hr className='w-[100%]  bg-[#a3a8d3] h-[1px] border-none' />
                </div>
                <div className='flex flex-col py-[4px]'>
                    <div className='flex justify-between'>
                        <div>THURSDAY</div>
                        <div>9AM - 9PM </div>
                    </div>
                    <hr className='w-[100%]  bg-[#a3a8d3] h-[1px] border-none' />
                </div>
                <div className='flex flex-col py-[4px]'>
                    <div className='flex justify-between'>
                        <div>FRIDAY</div>
                        <div>9AM - 9PM </div>
                    </div>
                    <hr className='w-[100%]  bg-[#a3a8d3] h-[1px] border-none' />
                </div>
                <div className='flex flex-col py-[4px]'>
                    <div className='flex justify-between'>
                        <div>SATURDAY</div>
                        <div>9AM - 9PM </div>
                    </div>
                    <hr className='w-[100%]  bg-[#a3a8d3] h-[1px] border-none' />
                </div>
                <div className='flex flex-col py-[4px]'>
                    <div className='flex justify-between'>
                        <div>SUNDAY</div>
                        <div>CLOSED</div>
                    </div>
                    <hr className='w-[100%]  bg-[#a3a8d3] h-[1px] border-none' />
                </div>
            </div>
            
        </div>
        
    )
}

export default BussinessHourBox