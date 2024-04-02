import { GrFormPrevious } from "react-icons/gr";
import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";

let imagarr=[
    '2.jpg',
    'galleryimage.jpg'
]// if you want to add some image then , gice url in this array


const PopupAlbum = ({setIsPopupOpen,imsg,setImage}) => {
    let handleNextImage = () => {
        if (imsg === imagarr.length - 1) {
            setImage(0);
        } else {
            setImage(imsg + 1);
        }
    }
    
    let handlePrevImage = () => {
        if (imsg === 0) {
            setImage(imagarr.length - 1);
        } else {
            setImage(imsg - 1);
        }
    }   
    return (
        <div className='h-screen w-full bg-[#1f1c147c] fixed top-0 flex justify-center items-center'>
            <div className='text-right mt-2  text-white text-[31px] absolute right-5 top-3 cursor-pointer' onClick={()=>setIsPopupOpen(false)}>X</div>
           
                <div className='flex w-full items-center'>
                    <div className="text-[50px]  text-white cursor-pointer z-10 absolute left-0 bg-[#00000081]" onClick={handlePrevImage}><GrFormPrevious /></div>
                    <img src={imagarr[imsg]} className='w-full transition-transform transform duration-100 hover:scale-110 h-[380px] mx-auto md:h-[400px] md:w-[480px] lg:h-[400px] lg:w-[480px] lg:rounded-[1px]' alt='Image 1' />
                    <div className="text-[50px] text-white cursor-pointer absolute z-10 right-0 bg-[#00000069]" onClick={handleNextImage}><GrFormNext /></div>
                </div>
               
       </div>
    )
}

export default PopupAlbum