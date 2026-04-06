import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
    return (
        <div >
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className='h-[60dvh]'
            >
                <SwiperSlide><img src={"/slide-image-1.jpg"} className='w-full h-full object-cover'></img></SwiperSlide>
                <SwiperSlide><img src={"/slide-image-2.jpg"} className='w-full h-full object-cover'></img></SwiperSlide>
                <SwiperSlide><img src={"/slide-image-3.jpg"} className='w-full h-full object-cover'></img></SwiperSlide>
            </Swiper>
        </div>
    )
}
