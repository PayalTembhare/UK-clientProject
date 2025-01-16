import React, { useState, useEffect } from 'react';

function Images1st() {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [brightness, setBrightness] = useState(1);
  const [blur, setBlur] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const newScale = Math.max(0.5, 1 + scrollPosition * 0.001);
    setScale(newScale);

    const newOpacity = Math.max(0.2, 1 - scrollPosition * 0.001);
    setOpacity(newOpacity);

    const newBrightness = Math.max(0.3, 1 - scrollPosition * 0.002);
    setBrightness(newBrightness);

    const newBlur = Math.min(10, scrollPosition * 0.01);
    setBlur(newBlur);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const myStyle = {
    height: "85vh",
    fontSize: "50px",
    
  };

  return (
    <div style={myStyle} className="relative w-11/12  mx-auto mb-11  rounded-3xl overflow-hidden">
      {/* Video Background */}
      <video
        src="Video/SK-BG-Video.mp4"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale})`, // Apply scaling based on scroll position
          opacity: opacity, // Dynamic opacity
          filter: `brightness(${brightness}) blur(${blur}px)`, // Dynamic brightness and blur
          transition: "transform 0.2s ease-out, filter 0.2s ease-out", // Smooth transitions for scaling and effects
        }}
        className="brightness-75"
      />

      {/* Other content on top of video */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 1,
          background: "linear-gradient(90deg, rgba(18,18,18,1) 0%, rgba(148, 187, 233, 0) 100%)", // Fixed gradient syntax
        }}
      >
       

      </div>

      <div className="absolute z-10 lg:top-34 bottom-10 text-white font-semibold text-[30px] lg:text-8xl  ml-7 "
        style={{
          opacity: opacity, 
          filter: `brightness(${brightness}) blur(${blur}px)`,
          transition: "transform 0.2s ease-out, filter 0.2s ease-out",
        }}>
        <h1 className='text-transparent' style={{
          WebkitTextStroke: "1px",
          WebkitTextStrokeColor: "pink",

        }}>
          Discovering
        </h1>
        <h1 className='text-pink-100'>Passion with</h1>
        <h1 className='text-transparent' style={{
          WebkitTextStroke: "1px",
          WebkitTextStrokeColor: "pink",
        }}>Untold Stories!</h1>
      </div>
    </div>
  );
}

export default Images1st;
