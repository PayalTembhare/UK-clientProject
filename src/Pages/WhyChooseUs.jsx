import React, { useState } from "react";
import { FaServicestack, FaDollarSign, FaPhotoVideo } from "react-icons/fa";
import { GiPhotoCamera } from "react-icons/gi";

const WhyChooseUs = () => {
    const [hovered, setHovered] = useState(null);

    const handleMouseEnter = (index) => {
        setHovered(index);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    const points = [
        {
            title: "Outstanding Service",
            icon: <FaServicestack />,
            description:
                "We are dedicated to providing a flawless and outstanding experience. Our committed staff is always available to help you realize your imaginative idea.",
        },
        {
            title: "State-of-the-Art Facilities",
            icon: <GiPhotoCamera />,
            description:
                "We have top-notch, completely professional equipment and technology to guarantee the best possible quality for your pictures and films.",
        },
        {
            title: "Versatility",
            icon: <FaPhotoVideo />,
            description:
                "Our studio is adaptable enough to handle a range of projects, whether you're a photographer, videographer, content creator, or company in need of a distinctive place.",
        },
        {
            title: "Reasonable Rates",
            icon: <FaDollarSign />,
            description:
                "We are committed to giving you the best return on your investment. Because to our affordable studio rental prices, most creative enterprises may now access top-notch facilities.",
        },
    ];

    return (
        <div className=" text-white  py-16 px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-wide uppercase">
                    Why Choose Us
                </h2>
                <p className="text-sm md:text-lg max-w-3xl mx-auto">
                    Discover what sets us apart and why we are the ideal choice for your
                    creative projects. Our unmatched service and facilities ensure you
                    have the best experience possible.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                {points.map((point, index) => (
                    <div
                        key={index}
                        className="relative w-full sm:w-72 max-w-xs h-52 max-h-64 p-4 sm:p-6 bg-white   text-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className={`flex flex-col items-center mb-4 transition-all duration-300 ease-in-out ${hovered === index ? "transform -translate-y-2" : ""
                                }`}
                        >
                            <div className="text-4xl sm:text-5xl text-pink-500 mb-4">
                                {point.icon}
                            </div>
                            <h3 className="text-lg sm:text-2xl font-semibold text-center">
                                {point.title}
                            </h3>
                        </div>

                        <div
                            className={`absolute top-16 left-0 right-0 bottom-0 bg-pink-500 text-white  p-4 rounded-lg shadow-md transform transition-all duration-300 ease-in-out ${hovered === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                                }`}
                        >
                            <p className="text-xs sm:text-sm">{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
