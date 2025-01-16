import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const cardData = [
    {
        title: "Drone Film",
        subtitle: "Clicking Instances via Air, We Make every click professional!",
        image: "/Video/My Video.mp4"
    },
    {
        title: "Drone Mapping",
        subtitle: "Mapping your future through the air, Fly High, Sky is the limit!",
        image: "/Video/My Video-11.mp4"
    },
    {
        title: "Drone 3D",
        subtitle: "Let every pixel count and sky become your canvas!",
        image: "/Video/My Video-5.mp4"
    },
];

const Card = ({ title, subtitle, image }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <div
            className="relative group grid max-w-full flex-col items-center justify-center overflow-hidden rounded-lg  lg:h-[400px] hover:scale-95 transition-all duration-500 ease-in-out h-[150px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Video or Image */}
            {image.endsWith('.mp4') ? (
                <div className="absolute inset-0 m-0 h-full  w-full overflow-hidden rounded-none bg-transparent hover:brightness-50">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        muted
                        loop
                    >
                        <source src={image} type="video/mp4" />
                    </video>

                </div>
            ) : (
                <div
                    className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                >

                </div>
            )}

            {/* Text Content */}
            <div className="absolute bottom-0 w-full flex flex-col items-center justify-center lg:py-8 py-4 px-4 group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out">
                <h5 className="lg:mb-4 m-2 lg:text-3xl text-md font-semibold text-slate-300 text-white text-center">
                    {title}
                </h5>
                <h2 className="lg:mb-2 lg:text-lg text-sm  text-white text-center">
                    {subtitle}
                </h2>
            </div>
        </div>
    );
};

const DroneServices = () => {
    return (
        <div className=" px-4 flex flex-col justify-center items-center p-5 ">
            <h1 className='text-center  lg:text-5xl text-3xl my-5'>Drone Services</h1>
            <Link to={"/drone"} className="grid grid-cols-2 sm:grid-cols-2 2xl:grid-cols-3 gap-6 justify-center w-full ">
                {cardData.map((data, index) => (
                    <Card
                        key={index}
                        title={data.title}
                        subtitle={data.subtitle}
                        image={data.image}
                    />
                ))}
            </Link>
        </div>
    );
};

export default DroneServices;
