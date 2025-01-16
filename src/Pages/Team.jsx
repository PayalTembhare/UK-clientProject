import React from "react";

const teamMembers = [
    { name: "Barya Shumail Patel", role: "Business Analyst", img: "/Images/1000274291.jpg", about: "The backbone of our operations, ensuring seamless project execution and client satisfaction." },
    { name: "Sohel Faraz Khan", role: "Animator", img: "/Images/1000274291.jpg", about: "Breathing life into stories with stunning animations and captivating visuals." },
    { name: "Efat Zermeen Khan", role: "Sales Executive", img: "/Images/1000274291.jpg", about: "Building strong client relationships and driving growth through exceptional sales expertise." },
    { name: "Rupesh Warudkar", role: "Editor/Senior Photographer", img: "/Images/1000274291.jpg", about: "Perfecting every detail in post-production to deliver polished, impactful content." },
    { name: "Victor Amaah", role: "Graphic Designer/Resin Art Expert", img: "/Images/1000274291.jpg", about: "Creating visually striking designs and unique resin art that bring creative concepts to life and elevate every project." },
];

const Team = () => {
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center  p-10 rounded-lg">
                <h2 className="text-3xl font-extrabold text-white">Meet the Team</h2>
                <p className="mt-5 text-white">
                    <b>Our Professional Team </b>includes skilled photographers, videographers, cinematographers, and expert editors, each dedicated to delivering top-tier quality and creativity.
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white w-full sm:w-[230px] shadow-md rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:z-10 relative"
                            onMouseEnter={(e) =>
                                e.currentTarget.parentNode
                                    .querySelectorAll("div:not(:hover)")
                                    .forEach((el) => el.classList.add("blur-sm"))
                            }
                            onMouseLeave={(e) =>
                                e.currentTarget.parentNode
                                    .querySelectorAll("div")
                                    .forEach((el) => el.classList.remove("blur-sm"))
                            }
                        >
                            <img
                                className="w-36 h-36 rounded-full mx-auto object-cover"
                                src={member.img}
                                alt={member.name}
                            />
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h3>
                            <p className="mt-2 text-lg text-gray-900">{member.role}</p>
                            <p className="mt-2 text-sm text-gray-800">{member.about}</p> 
                        </div>
                    ))}
                </div>
                <p className="mt-5 text-white">
                    Together, this talented team brings every project to life with innovation, precision, and passion.
                </p>
            </div>
        </div>
    );
};

export default Team;
