import React, { useState, useEffect } from 'react';

function Toparrow() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            
        });
    };

    // Monitor the scroll position to show or hide the arrow
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true); // User has scrolled down
            } else {
                setIsScrolled(false); // User is at the top of the page
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-4 transition-all ease-in-out duration-100 z-50 ">
            {isScrolled && (
                <button
                    onClick={scrollToTop}
                    className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-opacity opacity-100 hover:opacity-100 "
                    aria-label="Scroll to top"
                    style={{
                        opacity: isScrolled ? 1 : 0,
                        transform: isScrolled ? 'translateY(0)' : 'translateY(10px)',
                    }}
                >
                    <svg
                        className="w-6 h-6 transform rotate-180 transition-all ease-in-out duration-75"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3.293 9.293a1 1 0 011.414 0L10 14.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}

export default Toparrow;
