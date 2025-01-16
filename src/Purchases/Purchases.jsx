import React from 'react';

const cardData = [
    {
        title: "Passport Photo",
        subtitle: "Get professional passport photos for all your needs.",
        image: "/Images/1000274297.jpg"
    },
    {
        title: "Photo Frame",
        subtitle: "Stylish photo frames to showcase your memories.",
        image: "/Images/1000274295.jpg"
    },
    {
        title: "Resin Wood Photos",
        subtitle: "Beautiful photos embedded in resin wood for lasting memories.",
        image: "/Images/1000274299.jpg"
    },
    {
        title: "Cards",
        subtitle: "Capture the beauty of motherhood with personalized maternity cards.",
        image: "/Images/1000274293.jpg"
    },
];

const Card = ({ title, subtitle, image }) => {
    return (
        <div className="relative group grid max-w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white h-[300px] hover:scale-95 transition-all duration-500 ease-in-out">
            <div
                className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-contain bg-no-repeat bg-center
                            hover:brightness-50 transition-all duration-500 ease-in-out hover:scale-110`}
                style={{ backgroundImage: `url(${image})` }}
            >

            </div>

            <div className="absolute bottom-0 w-full flex flex-col items-center justify-center py-8 px-4 group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out">
                <h5 className="mb-4 text-3xl font-semibold text-white text-center">
                    {title}
                </h5>
                <h2 className="mb-2 text-lg font-medium text-white text-center">
                    {subtitle}
                </h2>
            </div>
        </div>
    );
};

function Purchases() {
    return (
        <div className="2xl:w-[1300px] flex flex-col justify-center items-center m-auto p-5 border-black">
            <h1 className="text-center text-5xl mb-10"> Purchases</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-center w-full">
                {cardData.map((data, index) => (
                    <Card
                        key={index}
                        title={data.title}
                        subtitle={data.subtitle}
                        image={data.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Purchases;
