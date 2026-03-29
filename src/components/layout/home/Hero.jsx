import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide><img src={"/slide-image-1.jpg"} className='w-full h-[50dvh] object-cover'></img></SwiperSlide>
                <SwiperSlide><img src={"/slide-image-2.jpg"} className='w-full h-[50dvh] object-cover'></img></SwiperSlide>
                <SwiperSlide><img src={"/slide-image-3.jpg"} className='w-full h-[50dvh] object-cover'></img></SwiperSlide>
            </Swiper>
        </div>
    )
}
