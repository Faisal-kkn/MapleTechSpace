import { Swiper, SwiperSlide } from 'swiper/react';
import { LuQuote } from 'react-icons/lu'
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const testimonial = [
    {
        quote: 'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.',
        name: 'John Brown'
    },
    {
        quote: 'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.',
        name: 'John Brown'
    },
    {
        quote: 'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.',
        name: 'John Brown'
    },
    {
        quote: 'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.',
        name: 'John Brown'
    },
    {
        quote: 'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.',
        name: 'John Brown'
    },
    {
        quote: 'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.',
        name: 'John Brown'
    },
]

function Testimonial() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper testimonial max-w-screen-xl mx-auto"
            >
                {
                    testimonial.map((t, index) => {
                        return (
                            <SwiperSlide>
                                <div className='bg-white border-[1px] border-primary/20 px-5 py-10 rounded-xl relative'>
                                    <LuQuote className='w-10 h-10 text-primary rotate-180 absolute -top-5 left-3' />
                                    <p className='text-[14px]'>{t.quote}</p>
                                    <h2 className='font-bold mt-2'>{t.name}</h2>
                                    <LuQuote className='w-10 h-10 text-primary absolute -bottom-5 right-3' />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}

export default Testimonial