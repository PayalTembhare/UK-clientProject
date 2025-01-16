import React from 'react';
import { Link } from 'react-router-dom';

const cardData = [
    {
        title: "Wedding",
        subtitle: "Finally, she said Yes!A new love story begins…",
        image: "/Images/wed2.jpg"
    },
    {
        title: "Pre-Wedding",
        subtitle: "Savoring your future to be the most fulfilling one!",
        image: "/Images/pre6.jpg"
    },
    {
        title: "Post-Wedding",
        subtitle: "United by love, together we fall- yet again!",
        image: "/Images/ring.jpg"
    },
    {
        title: "Maternity Shoot",
        subtitle: "A ray of hope Awaiting a surprise, ",
        image: "/Images/maternity5.jpg"
    },
    {
        title: "New Born Shoot",
        subtitle: "The wait is over, A new member has finally arrived!",
        image: "/Images/baby2.jpg"
    },
    {
        title: "Destination Wedding",
        subtitle: "Capturing love stories in breathtaking destinations.",
        image: "/Images/couple1.jpg"
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

const MarragerServices = () => {
    return (
        <div className='px-4 flex flex-col justify-center items-center m-auto p-5  '>
            <h1 className='text-center  lg:text-5xl text-3xl my-5'>Memories Captured Shoot</h1>
            <Link to={'/marriage'} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-full h-full ">
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

export default MarragerServices;
