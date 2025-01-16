import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { reviewdata } from '../dataReview/Review';
import { GoStarFill } from "react-icons/go";


const TestimonialSlider = () => {
    
    const keenSliderRef = useRef(null);
    const sliderInstance = useRef(null);

    useEffect(() => {
        sliderInstance.current = new KeenSlider(keenSliderRef.current, {
            loop: true,
            slides: {
                origin: 'center',
                perView: 1.25,
                spacing: 16,
            },
            breakpoints: {
                '(min-width: 1024px)': {
                    slides: {
                        origin: 'auto',
                        perView: 1.5,
                        spacing: 32,
                    },
                },
            },
        });

        // Auto slide every 2 seconds
        const autoSlideInterval = setInterval(() => {
            if (sliderInstance.current) {
                sliderInstance.current.next();
            }
        }, 3500);

        return () => {
            if (sliderInstance.current) {
                sliderInstance.current.destroy();
            }
            clearInterval(autoSlideInterval); // Clear interval on component unmount
        };
    }, []);

    const handlePreviousClick = () => {
        sliderInstance.current.prev();
    };

    const handleNextClick = () => {
        sliderInstance.current.next();
    };

   
    return (
        <section className="">
            <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                    <div className="max-w-xl text-center sm:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">
                            Don't just take our word for it...
                        </h2>

                        <p className="mt-4 text-gray-700">
                            "Impressed with the quality and attention to detail. The photos perfectly captured our story, blending creativity with precision. Highly recommend for anyone looking to preserve special moments!"
                        </p>

                        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                            <button
                                aria-label="Previous slide"
                                onClick={handlePreviousClick}
                                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>

                            <button
                                aria-label="Next slide"
                                onClick={handleNextClick}
                                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                            >
                                <svg className="size-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="-mx-6 lg:col-span-2 lg:mx-0">
                        <div ref={keenSliderRef} className="keen-slider">
                            {reviewdata.map((reviewdata, index) => (
                                <div key={index} className="keen-slider__slide">
                                    <blockquote className="flex h-full flex-col justify-between bg-gray-900 rounded-3xl p-6 shadow-sm sm:p-8 lg:p-12">
                                        <div>
                                            <div className="flex gap-0.5 text-yellow-800">
                                                {/* Dynamically render stars based on the rating */}
                                                {Array.from({ length: reviewdata.stars }, (_, i) => (
                                                    < GoStarFill key={i} className="w-5 h-5" />
                                                ))}
                                            </div>

                                            <div className="mt-4">
                                                <p className="lg:text-lg text-xs   font-serif text-rose-600 sm:text-xl">{reviewdata.text}</p>
                                               
                                            </div>
                                        </div>

                                        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                            <div className="flex items-center space-x-3">
                                                <img src={reviewdata.url} alt={reviewdata.name} className="w-10 h-10 rounded-full" />
                                                <span>{reviewdata.name}</span>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
