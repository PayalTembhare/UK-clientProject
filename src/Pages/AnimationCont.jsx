import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

// Combined Component
export function CombinedComponent() {
    const [fullscreenSrc, setFullscreenSrc] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openFullscreen = (src) => {
        setFullscreenSrc(src);
        setIsModalOpen(true);
    };

    const closeFullscreen = () => {
        setIsModalOpen(false);
        gsap.to('.fullscreen-img', { opacity: 0, duration: 0.5, zIndex: 0 });
        gsap.to('.fullscreen-img img', { scale: 0.9, opacity: 0, duration: 0.5, zIndex: 0 });
    };

    useEffect(() => {
        if (isModalOpen) {
            gsap.to('.fullscreen-img', { opacity: 1, duration: 0.3, zIndex: 0 });
            gsap.fromTo(
                '.fullscreen-img img',
                { scale: 0.9, opacity: 0, zIndex: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out', zIndex: 0 }
            );
        }
    }, [isModalOpen]);

    const timelineData = [
        {
            title: "Story Board",
            images: [
                "/Images/akash-semalkar-character.jpg",
                "/Images/akash-semalkar-master2.jpg",
                "/Images/akash-semalkar-master2.jpg",
                "/Images/akash-semalkar-master3.jpg",
            ],
            description: "A storyboard is a sketch map of ideas, of story intervals, where each frame depicts an exposure."
        },
        {
            title: "Character",
            images: [
                "/Images/Antivirus back.jpg",
                "/Images/Virus evil side.jpg",
                "/Images/Antivirus front.jpg",
                "/Images/Virus evil.jpg",
                "/Images/Antivirus side.jpg",
                "/Images/Virus evilback.jpg",
            ],
            description: "The main characters of the films are the life pulse of each movie, each of them being a mixture of wantings, sins, and dreams."
        },
        {
            title: "Concept Art",
            images: [
                "/Images/akash-semalkar-02.jpg",
                "/Images/akash-semalkar-0001.jpg",
                "/Images/akash-semalkar-001.jpg"
            ],
            description: "Built and launched Aceternity UI and Aceternity UI Pro from scratch"
        },
        {
            title: "3D Modeling and Texture",
            images: [
                "/Images/WhatsApp Image 2025-01-01 at 3.42.18 PM.jpeg",
                "/Images/aditya-ekotkhane-whatsapp-image-2022-08-15-at-7-33-57-pm-1.jpg",
                "/Images/aditya-ekotkhane-whatsapp-image-2022-08-15-at-7-33-58-pm.jpg",
                "/Images/akash-semalkar-g2.jpg",
                "/Images/akash-semalkar-sci-fi1.jpg",
                "/Images/akash-semalkar-z2.jpg"
            ],
            description: "3D modeling is the process of creating the intangible; it is the art of creating concepts into shapes."
        },
        {
            title: "Film",
            video: [
                "/Video/final01.mp4",
                "/Video/night.mp4",
                "/Video/sequence-01.mp4",
                "/Video/VID-20230101-WA0082.mp4"
            ],
            description: "A film is an art from light, sound, and feeling."
        },
        {
            title: "Unreal Work",
            video: [
                "/Video/Deer Running.mp4",
                "/Video/KASOOMBO - UNREAL ENGINE.mp4",
                "/Video/The Dark Cave.mp4",
                "/Video/The Mystery of Kailash Parvat.mp4"
            ],
            description: "Unreal work involves mapping creativity with technicalities in coming up with an environment that seems real."
        },
    ];

    return (
        <div className="w-full mt-16 lg:mt-24">
            {/* Timeline */}
            <div className="w-full px-10">
                <h1 className='text-7xl  font-extrabold text-center'>Animation</h1>
                <div className="relative max-w-7xl mx-auto pb-20">
                    {timelineData.map((item, index) => (
                        <div key={index} className="flex justify-start mt-14 md:gap-7">
                            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-sm md:w-full">
                                <h3 className="hidden md:block text-xl lg:pl-20 pl-5 md:text-5xl font-bold text-neutral-500">{item.title}</h3>
                            </div>

                            <div className="relative lg:pl-20 pl-5 pr-4 md:pl-4 w-full">
                                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">{item.title}</h3>
                                <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">{item.description}</p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border-b-2 pb-5 border-yellow-200">
                                    {/* Handle Images and Videos */}
                                    {item.images && item.images.map((src, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            src={src}
                                            alt={`${item.title}-image-${imgIndex}`}
                                            className="rounded-lg object-cover h-60 md:h-44 lg:h-72 w-full shadow shrink-0"
                                            onClick={() => openFullscreen(src)}
                                        />
                                    ))}

                                    {item.video && item.video.map((src, vidIndex) => (
                                        <video
                                            key={vidIndex}
                                            controls
                                            className="rounded-lg object-cover h-60 md:h-44 lg:h-72 w-full shadow shrink-0"
                                            onClick={() => openFullscreen(src)}
                                        >
                                            <source src={src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
