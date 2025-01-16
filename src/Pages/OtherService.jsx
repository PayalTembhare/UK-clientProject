import React from "react";

export function OtherService() {
    const data = [
        { imgelink: "/Images/other/IMG-20250107-WA0011.jpg" },
        { imgelink: "/Images/other/IMG-20250107-WA0012.jpg" },
        { imgelink: "/Images/other/IMG-20250107-WA0003.jpg" },
        { imgelink: "/Images/other/IMG-20250107-WA0004.jpg" },
        { imgelink: "/Images/other/IMG-20250107-WA0005.jpg" },
        { imgelink: "/Images/other/IMG-20250107-WA0006.jpg" },
        { imgelink: "/Images/other/IMG-20250107-WA0007.jpg" },
        { imgelink: "/Images/other/IMG-20250107-WA0008.jpg" },
    ];

    const [active, setActive] = React.useState(data[0].imgelink);

    return (
        <div className="grid md:grid-cols-2 md:mt-28 mt-16 pb-10 px-5">
            <div className="text-center flex flex-col w-full h-full justify-start  ">
                <h1 className="md:text-6xl text-4xl font-bold text-yellow-300 my-4">Resin Art work</h1> <br />
                <p className="md:text-sm text-sm text-start font-bold  text-gray-600 mb-4 md:px-20 mx-auto">Resin art transforms ordinary furniture into stunning pieces of art, combining functionality with aesthetic appeal. A resin table, for instance, is not only elegant but also incredibly robust. It stands as a testament to durability while offering a unique, artistic vibe that blends seamlessly into any décor. The interplay of colors, textures, and intricate designs in resin tables makes them a focal point in living rooms, offices, or outdoor spaces.
                    <br /><br />
                    Night lamps crafted from resin go beyond mere functionality. They emit a warm, soothing glow that instantly elevates the ambiance of any room. These lamps are visually captivating, with their delicate patterns and translucent finishes, adding a touch of sophistication and serenity to your home.
                    <br /><br />
                    Resin dining furniture transforms meals into an experience. From dining tables to chairs, these pieces boast an artistic edge that sets them apart from conventional furniture. The rich, glossy finishes and custom designs ensure that every meal feels special, making your dining area a true conversation starter.
                    <br /><br />
                    For coffee lovers, resin coffee tables are a delightful addition to your living space. These compact yet stylish pieces offer a perfect blend of utility and charm, often featuring mesmerizing designs like river tables, ocean waves, or abstract patterns.
                    <br />
                    <br />
                    Resin furniture is especially crafted for those who aim to make their home a masterpiece. Each object, whether a table, lamp, or decorative piece, balances beauty and functionality. With the ability to customize colors, designs, and finishes, resin furniture caters to diverse tastes, whether you prefer a minimalist style or bold, eye-catching patterns.

                </p>
            </div>

            <div className=" mx-auto  ">

                <img
                    className="md:h-[460px] md:w-[700px]  mx-auto rounded-md object-cover object-center  mb-5"
                    src={active}
                    alt="Active Gallery Image"
                />

                <div className="grid md:gap-3  grid-cols-4  gap-1 justify-around items-center mx-auto">
                    {data.map(({ imgelink }, index) => (
                        <div key={index}>
                            <img
                                onClick={() => setActive(imgelink)}
                                src={imgelink}
                                className="md:h-20 md:w-full max-w-full h-[50px] w-[80px] cursor-pointer rounded-md object-cover object-center"
                                alt={`Thumbnail ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
