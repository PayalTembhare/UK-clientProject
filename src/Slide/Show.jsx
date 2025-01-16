import React, { useEffect, useRef, useState } from 'react';
import SlideShow from './SlideShow';

export default function Show() {
    const [scale, setScale] = useState(1);
    const [opacity, setOpacity] = useState(0);  // Start with opacity 0
    const [brightness, setBrightness] = useState(1);
    const [blur, setBlur] = useState(0);

    const componentRef = useRef(null);

    // Handle scroll event to adjust styles
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Adjust scale: decrease as you scroll
        const newScale = Math.max(0.5, 1 - scrollPosition * 0.001);
        setScale(newScale);

        // Adjust opacity: decrease opacity as the user scrolls down
        const newOpacity = Math.max(0.2, 1 + scrollPosition * 0.001); // Min opacity is 0.2
        setOpacity(newOpacity);

        const newBrightness = Math.max(0.3, 1 + scrollPosition * 0.002); 
        setBrightness(newBrightness);

        const newBlur = Math.min(10, scrollPosition * 0.01); 
        setBlur(newBlur);
    };

    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // When component enters viewport, set opacity to 1
                        setOpacity(0);
                    } else {
                        // When component leaves viewport, set opacity to 0
                        setOpacity(1);
                    }
                });
            },
            { threshold: 0.1 }  // Trigger when 10% of the element is visible
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        // Clean up observer on component unmount
        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run only once

    return (
        <div
            ref={componentRef}
            style={{
                opacity: opacity, // Dynamic opacity based on visibility
                transition: "opacity 0.5s ease, transform 0.2s ease-out, filter 0.2s ease-out",
            }}
        >
            <SlideShow />
        </div>
    );
}
