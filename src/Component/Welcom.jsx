// Install Tailwind CSS by following their documentation if not already set up.

import React from 'react';

const WeddingHeroSection = () => {
    return (
        <div className="relative py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white p-7 rounded-xl ">
                {/* Left Section */}
                <div className="lg:col-span-1 bg-white border border-orange-500 p-8 relative rounded-lg">
                    
                    <h2 className="mt-2 lg:text-4xl text-xl font-bold text-orange-500 leading-snug">
                        Welcome to SK Film Productions
                    </h2>
                    <p className="mt-4 text-gray-700 lg:text-lg text-xs leading-relaxed">
                        At SK Film Productions, creativity meets excellence. Whether you're capturing timeless memories, crafting compelling stories, or producing visual masterpieces, our studio is here to bring your vision to life.
                        Our passion for innovation and dedication to quality ensures an exceptional experience for every client. With state-of-the-art facilities, versatile spaces, and a team committed to your success, we provide everything you need to turn your creative ideas into reality.
                    </p>
                </div>

                {/* Right Section */}
                <div className="lg:col-span-2 flex space-x-4">
                    {/* Image 1 */}
                    <div className="flex-1 relative">
                        <img
                            src="/Images/ornament1.jpg"
                            alt="Wedding Moment 1"
                            className="rounded-lg shadow-lg object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    </div>
                    <div className="flex-1 relative">
                        <img
                            src="/Images/Wed1.JPG"
                            alt="Wedding Moment 3"
                            className="rounded-lg shadow-lg object-cover w-full h-full"
                        />
                    </div>
                    {/* Image 2 */}
                    <div className="flex-1 relative">
                        <img
                            src="/Images/Model7.JPG"
                            alt="Wedding Moment 2"
                            className="rounded-lg shadow-lg object-cover w-full h-full"
                        />
                    </div>

                    {/* Image 3 */}

                </div>
            </div>
        </div>
    );
};

export default WeddingHeroSection;
