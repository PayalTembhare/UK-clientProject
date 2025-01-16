import React, { useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";

// Transition settings for motion animations
const transition = {
    type: "spring", mass: 0.5, damping: 11.5, stiffness: 100,
};

// Hovered Link for page transition
const HoveredLink = ({ children, href }) => (
    <a
        href={href}
        onClick={(e) => {
            e.preventDefault();
            console.log('Navigating to:', href); // Log href to check
            gsap.to("body", {
                opacity: 0, duration: 0.5, onComplete: () => window.location.href = href,
            });
        }}
        className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
        {children}
    </a>
);

const ProductItem = ({ title, description, href, src, onClick, setActive }) => (
    <Link
        to={href}
        onClick={(e) => {
            onClick(); // Optional: For logging or other actions
            setActive(null); // Close the NavbarDemo on click
        }}
        className="flex space-x-2"
    >
        <img src={src} alt={title} className="h-32 object-cover rounded-md shadow-2xl" />
        <div>
            <h4 className="text-xl font-bold text-white dark:text-white">{title}</h4>
            <p className="text-gray-300 text-sm dark:text-neutral-300">{description}</p>
        </div>
    </Link>
);

// MenuItem for individual menu item with dropdown
const MenuItem = ({ setActive, active, item, children, href }) => (
    <>
        <a href={href} onMouseEnter={() => setActive(item)} className="after -ml-5 relative text-xl block after:block after:content-[''] after:absolute after:bg-white after:bottom-[-6px] after:h-[3px] after:rounded-2xl after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 font-semibold">
            <motion.p className="cursor-pointer hover:opacity-[0.9] text-white font-semibold">{item}</motion.p>

        </a>
        {
            active === item && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                    className="absolute top-16 w-full left-0  pt-4"
                >
                    <motion.div className="bg-[rgb(18,18,18)] dark:bg-black rounded-2xl shadow-xl p-4">
                        {children}
                    </motion.div>
                </motion.div>
            )
        }
    </>
);

const Menu = ({ setActive, children }) => (
    <nav onMouseLeave={() => setActive(null)} className=" text-white rounded-full p-6">
        {children}
    </nav>
);

// Main Navbar component with all menu and product items
export function NavbarDemo() {
    // Set up the active state for the menu
    const [active, setActive] = useState(null);

    const products = [
        { title: "Memories Captured Shoot", src: "/Images/wed2.jpg", description: "Prepare for tech interviews like never before.", href: "/marriage" },
        { title: "Album Shoot", src: "/Images/prewed4.jpg", description: "Production-ready Tailwind CSS components for your next project", href: "/album" },
        { title: "Offical Shoot", src: "/Images/pexels-pavel-danilyuk-8761313.jpg", description: "Never write from scratch again. Go from idea to blog in minutes.", href: "/offical" },
        { title: "Social Gathering Shoot", src: "/Images/pexels-vishnurnair-1105666.jpg", description: "Respond to government RFPs, RFIs, and RFQs 10x faster using AI", href: "/social" },
        { title: "Drone Services", src: "/Images/drone3d.jpg", description: "Respond to government RFPs, RFIs, and RFQs 10x faster using AI", href: "/drone" },
        { title: "Construction Services", src: "/Images/darrel-louise-almanzor-td8weHnM0-c-unsplash.jpg", description: "Respond to government RFPs, RFIs, and RFQs 10x faster using AI", href: "/construction" },
        { title: "Advertisement", src: "/Images/hotel1.jpg", description: "Respond to government RFPs, RFIs, and RFQs 10x faster using AI", href: "/advertisement" },
    ];

    return (
        <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item={"Services"} href="/services">
                <div className="grid xl:grid-cols-3 grid-cols-2 gap-10 p-4 z-50">
                    {products.map((product, index) => (
                        <ProductItem
                            key={index}
                            title={product.title}
                            src={product.src}
                            description={product.description}
                            href={product.href}
                            onClick={() => console.log(`Navigating to ${product.title}`)} // Modify onClick for any additional action
                            className="z-50"
                            setActive={setActive}
                        />
                    ))}
                </div>
            </MenuItem>
        </Menu>
    );
}
