import React, { useEffect, useState, useRef } from "react";
import { Collapse, Button, IconButton} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { IoIosCall } from "react-icons/io";
import Contact from "../Contact/Contact"; // Import Contact component
import { NavbarDemo } from "./Drop";

export function NavbarWithSolidBackground() {
    const [openNav, setOpenNav] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false); // Manage popup visibility
    const navbarRef = useRef(null); // Ref for detecting clicks outside the navbar

    // Handle Scroll Effects
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) setOpenNav(false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close the mobile menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setOpenNav(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'Blog', to: '/blog' },
        { name: 'About', to: '/about' },
        { name: 'Gallery', to: '/gallery' },
        { name: 'Animation', to: '/animation' },
        { name: "Resin Art work", to: '/ResinArtwork' },
    ];
    const navLinks1 = [
        { name: 'Home', to: '/' },
        { name: 'Blog', to: '/blog' },
        { name: 'About', to: '/about' },
        { name: 'Gallery', to: '/gallery' },
        { name: "Services", to: '/services' },
        { name: "Animation", to: '/animation' },
        { name: "Resin Art work", to: '/ResinArtwork' },
    ];
    const navLinks2 = [
        { name: <NavbarDemo />, to: '/services' },
    ];


    const handleLinkClick = () => {
        setOpenNav(false); // Close the menu when any link is clicked
    };

    return (
        <div className="navbar fixed top-0 w-full z-50 p-2  text-white transition-all duration-300 backdrop-blur-sm backdrop-brightness-90 " ref={navbarRef}>
            <nav className="max-w-screen-2xl m-auto px-9 relative">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <img src="/Images/SK_logo.png" alt="" className=" w-[100px]  rounded-full" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden xl:block">
                        <ul className="flex items-center gap-9">
                            {navLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.to}
                                        className="headerafter relative text-xl block after:block after:content-[''] after:absolute after:bg-white after:bottom-[-6px] after:h-[3px] after:rounded-2xl after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 font-semibold"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            {navLinks2.map((link, idx) => (
                                <li key={idx} className="-mr-6">

                                    <Link
                                        to={link.to}
                                        className="text-xl block -ml-3"
                                    >
                                        {link.name}

                                    </Link>

                                </li>

                            ))}
                        </ul>
                    </div>

                    {/* Get Started Button */}
                    <Button className="bg-black lg:flex hidden text-white btn w-fit h-11  justify-between gap-2 items-center" onClick={() => setIsPopupVisible(true)}>
                        <IoIosCall className="text-lg" />
                        <span className=" ">Contact</span>
                    </Button>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        variant="text"
                        className="xl:hidden  text-white"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6 " />
                        ) : (
                            <Bars3Icon className="h-6 w-6 " />
                        )}
                    </IconButton>
                </div>

                {/* Mobile Nav */}
                <Collapse open={openNav}>
                    <ul className="flex flex-col gap-4 my-7 ">
                        {navLinks1.map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    to={link.to}
                                    className="relative text-xl block after:block after:content-[''] after:absolute after:bottom-[-6px] after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300"
                                    onClick={handleLinkClick} // Close the menu when a link is clicked
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Button fullWidth variant="white" className="btn bg-black text-white " onClick={() => setIsPopupVisible(true)}>
                        <span className="flex gap-1 items-center justify-center">
                            <IoIosCall className="text-3xl" /> Contact Us
                        </span>
                    </Button>
                </Collapse>
            </nav>

            {/* Contact Popup Form */}
            <Contact isPopupVisible={isPopupVisible} setIsPopupVisible={setIsPopupVisible} />
        </div>
    );
}

export default NavbarWithSolidBackground;
