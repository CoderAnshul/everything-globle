import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdFormatQuote } from 'react-icons/md';

export const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='relative pb-20'>
            <Slider {...settings}>
                <div className={`relative mb-[40px] `}>
                    <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-1`} />
                    <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl `}>
                        <h3 className={`font-semibold text-xl`}>Sarah Miller, Digital Content Specialist</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}><p>Codeyes Media turned our raw footage into something amazing. The video editing was top-notch, and the final product perfectly conveyed our brand message in a way that’s engaging and visually stunning.</p></div>
                    </div>
                    <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                        <MdFormatQuote className='text-3xl' />
                    </div>
                </div>
                <div className={`relative mb-[40px] pr-8 max-sm:right-6`}>
                    <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-1`} />
                    <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl `}>
                        <h3 className={`font-semibold text-xl`}>Matt Johnson, CEO</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}><p>I’m so impressed by the video editing services from Codeyes Media. They transformed our concept into a professional, polished video that exceeded our expectations. It’s now a key asset for our marketing!</p></div>
                    </div>
                    <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                        <MdFormatQuote className='text-3xl' />
                    </div>
                </div>
                <div className={`relative mb-[40px] pr-8 max-sm:right-6`}>
                    <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-1`} />
                    <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl `}>
                        <h3 className={`font-semibold text-xl`}>Rachel Lee, Creative Strategist                        </h3>
                        <div className={`text-black/90 text-sm sm:text-base`}><p>Codeyes Media’s video editing services were a lifesaver for our campaign. They not only enhanced the visuals but also crafted a compelling narrative that resonated with our audience.</p></div>
                    </div>
                    <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                        <MdFormatQuote className='text-3xl' />
                    </div>
                </div>
            </Slider>
            <div className="swiper-pagination-custom mt-4"></div>
        </div>
    );
};
