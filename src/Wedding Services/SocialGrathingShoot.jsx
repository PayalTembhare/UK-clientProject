import React from 'react';
import { Link } from 'react-router-dom';

const cardData = [
    {
        title: "Rally Shoot",
        subtitle: "Where Passion Meets Reality We make them happen!",
        image: "/Images/pexels-mohamedelaminemsiouri-2246258.jpg"
    },
    {
        title: "Festival Shoot",
        subtitle: "Colors, Music, Light, and more We Click Every Moment!",
        image: "/Images/Model6.jpg"
    },
    {
        title: "Street/Road Show",
        subtitle: "Social Gatherings are enjoyment, The enjoyment that matters!",
        image: "/Images/pexels-san-fermin-pamplona-549332-1299092.jpg"
    },



];

const Card = ({ title, subtitle, image }) => {
    return (
        <div className="relative group grid   max-w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white lg:h-[400px] h-[200px] hover:scale-95 transition-all duration-500 ease-in-out">
            <div
                className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center 
                            hover:brightness-50 transition-all duration-500 ease-in-out hover:scale-110`}
                style={{ backgroundImage: `url(${image})` }}
            >

            </div>

            <div className="absolute bottom-0 w-full flex flex-col items-center justify-center py-8 px-4 group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out">
                <h5 className="mb-4 lg:text-3xl text-md font-semibold  text-white text-center">
                    {title}
                </h5>
                <h2 className="mb-2 lg:text-lg text-xs font-medium text-white text-center">
                    {subtitle}
                </h2>
            </div>
        </div>
    );
};

const SocialGatheringShoot = () => {
    return (
        <div className='px-4 flex flex-col justify-center items-center m-auto p-5'>
            <h1 className='text-center lg:text-5xl text-3xl my-5'>Social Gathering Shoot</h1>
            <Link to={"/social"} className="grid grid-cols-2 sm:grid-cols-2 2xl:grid-cols-3 gap-6 justify-center w-full ">
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

export default SocialGatheringShoot;
