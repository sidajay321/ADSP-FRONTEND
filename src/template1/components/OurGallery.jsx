import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BussinessHourBox from './BussinessHourBox';
import PopupAlbum from './PopupAlbum';

const OurGallery = ({ businessGallery }) => {
    console.log(businessGallery)
    const url = 'http://localhost/adsp/assets/uploads/'
    let [isPopOpen, setIsPopupOpen] = useState(false);
    let [imsg, setImage] = useState(0);

    let openPopup = (ImageNo) => {
        setIsPopupOpen(true);
        setImage(ImageNo)
    }
    console.log(imsg)
    return (
        <>
            <div id='gallery' className='min-h-[710px] lg:min-h-[1400px] bg-[#FFFFFF] w-[86%] mx-auto'>
                <div className='w-[92px] lg:w-[258px] italic lg:font-[400] lg:text-[48px]  pt-[16px] lg:pt-[80px] text-[#000000] text-center font-semibold leading-5 mx-auto'>
                    Our <span className='text-[20px] lg:text-[36px] lg:font-[600] font-bold not-italic'>GALLERY</span>
                </div>
                <hr className='w-[152px] mx-auto h-[1px] lg:h-[3px] bg-[#353956] mt-3' />
                <div className='mt-[20px]  lg:hidden'>
                    <Slider
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={3000}
                    >
                        {/* <div className='flex items-center justify-center '>
                            <img alt='' src='2.jpg' className='w-[281px] transition-transform transform duration-100 hover:scale-110 h-[168px] mx-auto rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px]' onClick={() => openPopup(0)} />
                        </div>
                        <div className='flex items-center justify-center '>
                            <img alt='' src='galleryimage.jpg' className='transition-transform transform duration-100 hover:scale-110 w-[281px] mx-auto h-[168px] rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px]' onClick={() => openPopup(1)} />
                        </div> */}
                    </Slider>
                </div>

                <div className='flex-wrap justify-center mt-[60px] hidden px-[10px] gap-y-[12px] lg:flex'>
                    {
                        businessGallery.map((e, i) => (
                            <img alt='' src={url + e.bg_image} className='w-[281px] transition-transform transform duration-100 hover:scale-110 h-[168px] rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px] mx-2' onClick={() => openPopup(i)} />
                        ))
                    }

                </div>

                <div className='w-[254px] h-[3px] mx-auto bg-[#D9D9D9] mt-[30px] lg:w-[927px]'></div>
                <div className='w-[96px] text-center mx-auto text-[#000000] mt-[15px] leading-5  text-[20px] font-semibold italic lg:w-[349px] lg:text-[48px] lg:mt-[54px]'>
                    <span className='font-bold font-sans not-italic '>Business</span> Hours
                </div>
                <BussinessHourBox />
            </div>
            {
                isPopOpen && <PopupAlbum url={url} businessGallery={businessGallery} setIsPopupOpen={setIsPopupOpen} imsg={imsg} setImage={setImage} />
            }

        </>
    );
};

export default OurGallery;

