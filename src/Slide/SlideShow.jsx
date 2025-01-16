import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './slideshow.css';

// import required modules
import { EffectCoverflow, Autoplay } from 'swiper/modules';

export default function SlideShow() {

    // Array of image URLs
    const images = [
        '/Images/baby6.jpg',
        '/Images/hotel1.jpg',
        '/Images/maternity2.jpg',
        '/Images/pre2.jpg',
        '/Images/prewed7.JPG',
        '/Images/baby4.JPG'
    ];

    return (
        <div className='lg:my-20 flex p-6 flex-col lg:gap-0 h-full gap-8 items-center'>
            <h1 className='text-center  lg:text-7xl text-2xl font-serif font-semibold  lg:mb-10'>Some Stories Lasts Forever!</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.79} // Show 3 slides at a time (1 center + 1 on each side)
                spaceBetween={1} // Adjust space between the slides
                loop={true} // Enable looping
                autoplay={{ delay: 1500 }} // Autoplay every 3 seconds
                coverflowEffect={{
                    rotate: 0, // No rotation effect
                    stretch: -40, // No stretching between slides
                    depth: 600, // Adjust the depth effect for a 3D feel
                    modifier: 1.5, // Make the center slide larger
                    slideShadows: true, // Add shadow effects on slide
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Autoplay]} // Add autoplay module
                className="mySwiper "
            >

                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Nature ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>

    );
}
