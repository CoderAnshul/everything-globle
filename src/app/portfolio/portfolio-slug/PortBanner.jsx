import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Pagination, EffectFade, Autoplay, Navigation } from 'swiper/modules';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

export default function PortBanner() {
    const images = [
        {
            url: "/image/portfoilo/port-single-img3.jpg",
        },
        {
            url: "/image/portfoilo/port-single-img4.jpg",
        },
        {
            url: "/image/portfoilo/port-single-img5.jpg",
        }
    ];

    return (
        <div className='custom_container relative custom_global_space'>
            <div className="port-banner-slider">
                <Swiper
                    modules={[Pagination, EffectFade, Autoplay, Navigation]}
                    effect="fade"
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    className="mySwiper"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image.url} alt={`Slide ${index + 1}`} />
                        </SwiperSlide>
                    ))}

                    {/* Custom navigation buttons */}
                    <div className="swiper-button-prev custom-prev">
                        <HiArrowLeft />
                    </div>
                    <div className="swiper-button-next custom-next">
                        <HiArrowRight />
                    </div>
                </Swiper>
            </div>
        </div>
    );
}
