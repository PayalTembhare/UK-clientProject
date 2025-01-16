import React, { useState, useEffect } from "react";
import ImgTextAnimation from "./AniCard"; // Import the ImgTextAnimation component
import ImgTextAnimation2 from "./AniCard2";

function PraAni() {
    const [opacity, setOpacity] = useState(0);

    // Function to handle scroll and update opacity
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Update opacity based on the scroll position (scaling from 0 to 1)
        const newOpacity = Math.min(1, scrollPosition / 300); // You can adjust the 300 value to control when opacity reaches 1
        setOpacity(newOpacity);
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-full m-auto h-auto flex py-6 justify-between items-center gap-8 flex-col flex-wrap text-white lg:px-36 p-10">
            <ImgTextAnimation
                imgSrc="/Images/holi2.jpg" // Replace with your image URL
                text="At SK Film Productions, we capture your photos and memories. With clarity in photographs and detail in orientation, we turn your pictures into cherishable moments! Exploring photography is such a rich experience. It is like opening oneself to a new way of seeing the world. What are you shooting with? Smartphone? DSLR? Or maybe a mirrorless camera? It's great fun trying different genres of photography and finding your style."
                title2="through my lens!"
                title1="Exploring photography "
                style={{ opacity: opacity, transition: "opacity 0.5s ease-out" }} // Apply opacity change
            />
            <ImgTextAnimation2
                imgSrc="/Images/pre3.jpg" // Replace with your image URL
                text="Videos are one of the essential services offered to you by SK Film Productions. Our expert Mr. Shahrukh Khan is careful with minute details, while he ensures the precision of every capture. Videography is about freezing time and catching moments that most of the time, pass unnoticed. It is a matter of taking a simple gesture, glance, or movement to become something significant enough to tell a story. One can capture spontaneous action- such as laughter, walking, or even a thought that captures emotion and energy. That type of storytelling would make the video memorable."
                title1="Turning actions"
                title2="into moments!"
                style={{ opacity: opacity, transition: "opacity 0.5s ease-out" }} // Apply opacity change
            />
            <ImgTextAnimation
                imgSrc="/Images/prewed2.jpg" // Replace with your image URL
                text="Are you ready to make that special day extra memorable? Well, at SK Film Productions being beautiful is simply the only option! It's a lovely feeling that goes beyond the mere sharing of moments, but something deep and unbreakable between two people who share a time and beyond. Those intimate portraits, quiet moments, or gestures in photographs that say a lot about the depth of love in the heart of two people are really powerful. It may be in the form of a glance, a shared laugh, or a touch; however, these all carry the true richness of a relationship"
                title1="Two hearts but one soul "
                title2="a lifetime to cherish!"
                style={{ opacity: opacity, transition: "opacity 0.5s ease-out" }} // Apply opacity change
            />
            <ImgTextAnimation2
                imgSrc="/Images/jakob-owens-luCYHzWsv2M-unsplash.jpg" // Replace with your image URL
                text="With AI technology in a boom, a drone service is a remote operating vehicle that needs human intervention for its control. It is the easiest way to capture your day with ease! Being free to fly above and around your subject creates dynamic wide-angle shots that take what otherwise could have been an uninteresting scene to spectacular levels. You can photograph beautiful landscapes or energetic events, and drones can help you bring them from above to life."
                title1="Photography "
                title2="in the Air!"
                style={{ opacity: opacity, transition: "opacity 0.5s ease-out" }} // Apply opacity change
            />
        </div>
    );
}

export default PraAni;
