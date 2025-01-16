import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const cardData = [
    {
        title: "Documentary Shoot",
        subtitle: "Capturing raw moments, telling untold stories!",
        image: "/Video/My Video-8.mp4"
    },
    {
        title: "Film Making",
        subtitle: "Get, Set, Go.. Lights, Camera, Action!",
        image: "/Video/My Video-4.mp4"
    },
    {
        title: "Model Shoot",
        subtitle: "Every Model tells a story Be the next Diva!",
        image: "/Video/My Video-2.mp4"
    },
    {
        title: "Cinematography",
        subtitle: "Two souls, but one heart, Crafting new Love Stories!",
        image: "/Video/My Video-9.mp4"
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
            <div className="absolute bottom-0 w-full flex flex-col items-center justify-center py-8 px-4 group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out">
                <h5 className="mb-4 lg:text-3xl text-md font-semibold text-slate-300 text-white text-center">
                    {title}
                </h5>
                <h2 className="mb-2 lg:text-lg text-sm font-medium text-white text-center">
                    {subtitle}
                </h2>
            </div>
        </div>
    );
};

const AlbumShoot = () => {
    return (
        <div className=" px-4 flex flex-col justify-center items-center p-5 ">
            <h1 className='text-center  lg:text-5xl text-3xl my-5'>Album Shoot</h1>
            <Link to={"/album"} className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-center w-full ">
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

export default AlbumShoot;
