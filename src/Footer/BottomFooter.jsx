import React from 'react';
import { FaInstagram, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa'; // Import TikTok icon

const BottomFooter = () => {
    return (
        <div className="flex w-full sm:flex-row justify-between items-start px-8">
            <div className="text-white mb-4 sm:mb-0">
                <p className="tracking-wider lg:text-base text-xs">
                    &copy;2024 All rights reserved.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <h5 className="text-white lg:text-base text-xs">Connect with Us on Social Media</h5>
<div className="flex gap-2 lg:gap-3 ">
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-pink-500 hover:text-pink-700 transition-colors"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-blue-600 hover:text-blue-800 transition-colors"
                >
                    <FaFacebookF />
                </a>

                <a
                    href="https://www.threads.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-blue-700 transition-colors"
                >
                    <FaThreads className="text-white" />
                </a>

                <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-500 hover:text-gray-200 transition-colors"
                >
                    <FaTiktok />
                    </a>
                    <a
                        href="https://g.co/kgs/iDok9vQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-white hover:text-gray-400 transition-colors"
                    >
                        <FaGoogle />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default BottomFooter;