import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap"; // Import GSAP

const ImgTextAnimation2 = ({ imgSrc, text, title1, title2 }) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    // State to track if the animation has already run
    const [hasAnimated, setHasAnimated] = useState(false);

    // State to track the scroll position
    const [scrollY, setScrollY] = useState(0);
    const [isInView, setIsInView] = useState(false); // Track visibility in viewport

    // Intersection Observer to trigger animation when element is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true); // Set to true when the component is in the viewport
                    if (!hasAnimated) {
                        animateContent();
                        setHasAnimated(true); // Set to true so the animation won't run again
                    }
                } else {
                    setIsInView(false); // Set to false when the component leaves the viewport
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is in view
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // Cleanup the observer on component unmount
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [hasAnimated]);

    // Function to trigger the GSAP animation when the element is in view
    const animateContent = () => {
        // Animate container's opacity to fade in
        gsap.fromTo(
            containerRef.current,
            { opacity: 0 }, // Start with opacity 0
            { opacity: 1, duration: 1, ease: "power3.out" } // Fade to opacity 1
        );

        // Animate image opacity and movement
        gsap.fromTo(
            imageRef.current,
            {
                x: 500, // Start off-screen
                opacity: 0, // Hidden before animation
            },
            {
                x: 0, // End at the normal position
                opacity: 1, // Fully visible after animation
                duration: 1,
                ease: "power3.out",
            }
        );

        // Animate text opacity and movement
        gsap.fromTo(
            textRef.current,
            {
                x: -500, // Start off-screen from the right
                opacity: 0, // Hidden before animation
            },
            {
                x: 0, // End at the normal position
                opacity: 1, // Fully visible after animation
                duration: 1,
                delay: 0.2, // Text starts after a small delay
                ease: "power3.out",
            }
        );
    };

    // Handle scroll to add blur and opacity effect
    useEffect(() => {
        const handleScroll = () => {
            // Get the scroll position (distance from top of the page)
            const scrollPosition = window.scrollY;

            // Update scrollY with scroll position
            setScrollY(scrollPosition);
        };

        // Listen for scroll events
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Calculate blur and opacity based on scroll position
    const blurAmount = Math.min(scrollY / 10, 10); // Max blur of 10px
    const opacityAmount = Math.max(1 - scrollY / 1000, 0.5); // Min opacity of 0.5

    return (
        <div
            className="flex justify-around items-center lg:p-8 p-4 w-full py-10 px-6 overflow-hidden bg-gray-900 rounded-3xl flex-wrap text-center"
            ref={containerRef}
            style={{
                opacity: 1, // Keep visible once animation is complete
                filter: isInView ? 'none' : `blur(${blurAmount}px)`, // Apply dynamic blur
                opacity: isInView ? 1 : opacityAmount, // Apply dynamic opacity
                transition: "filter 0.2s ease-out, opacity 0.2s ease-out", // Smooth transition for blur and opacity
            }}
        >
            {/* Text with Title and Description */}
            <div
                ref={textRef}
                className="text-white m-6 flex flex-col flex-wrap lg:w-1/2"
                style={{ opacity: 0 }} // Initially hidden
            >
                <h1 className="lg:text-5xl text-lg font-bold lg:mb-0 -mb-2 text-white text-left">{title1}</h1>
                <h1 className="lg:text-4xl text-lg font-bold text-white text-left pb-3 mb-3 border-b-2">{title2}</h1>
                <p className="lg:text-xl text-xs text-white text-justify">{text}</p>
            </div>
            {/* Image Animation */}
            <img
                ref={imageRef}
                src={imgSrc}
                className="lg:w-[370px] w-[150px]  lg:h-auto h-auto rounded-3xl"
                style={{ opacity: 0 }} // Initially hidden
            />
        </div>
    );
};

export default ImgTextAnimation2;
