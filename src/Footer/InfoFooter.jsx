import React from 'react'

const InfoFooter = () => {
    return (
        <div className="w-full sm:w-1/3 h-full text-white flex flex-col  ">
            <p className="font-bold text-xl  text-">SK Film Productions</p>
            <p>303 Narborough Rd, Leicester LE3 2RB, United Kingdom</p>


            <div className="grid grid-cols-3 gap-6 mt-7 justify-center ">
                <a
                    href="/"
                    className="text-white text-xl relative block after:block after:content-[''] after:absolute after:-bottom-[7px] after:h-[3px] after:bg-white  after:rounded-2xl after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 font-semibold "
                >
                    Home
                </a>
                <a
                    href="/about"
                    className="text-white text-xl relative block after:block after:content-[''] after:absolute after:-bottom-[7px] after:h-[3px] after:bg-white  after:rounded-2xl after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 font-semibold"
                >
                    About
                </a>
                <a
                    href="/blog"
                    className="text-white text-xl relative block after:block after:content-[''] after:absolute after:-bottom-[7px] after:h-[3px] after:bg-white  after:rounded-2xl after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 font-semibold"
                >
                    Blog
                </a>
                <a
                    href="/services"
                    className="text-white text-xl relative block after:block after:content-[''] after:absolute after:-bottom-[7px] after:h-[3px] after:bg-white  after:rounded-2xl after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 font-semibold"
                >
                    Services
                </a>
                <a
                    href="/Gallery"
                    className="text-white text-xl relative block after:block after:content-[''] after:absolute after:-bottom-[7px] after:h-[3px] after:bg-white  after:rounded-2xl after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 font-semibold"
                >
                    Gallery
                </a>
                <a
                    href="/animation"
                    className="text-white text-xl relative block after:block after:content-[''] after:absolute after:-bottom-[7px] after:h-[3px] after:bg-white  after:rounded-2xl after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 font-semibold"
                >
                    Animation
                </a>
            </div>
        </div>
    )
}

export default InfoFooter
