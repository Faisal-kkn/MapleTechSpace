import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const clientSliders = [
    'client1',
    'client2',
    'client3',
    'client4',
    'client5',
    'client6',
]

function Carousel() {
    return (
        <>
            <Swiper
                slidesPerView={2}
                navigation={true}
                spaceBetween={30}
                autoplay={true}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper max-w-screen-xl mx-auto "
            >
                {
                    clientSliders.map((slide, index) => {
                        return (
                            <SwiperSlide key={index}><img src={`/clients/${slide}.png`} alt="client logo" /></SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default Carousel
