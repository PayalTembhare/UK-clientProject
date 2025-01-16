import { useState } from 'react';
import { gsap } from 'gsap';

export function MasonryGridGallery() {
    const [fullscreenSrc, setFullscreenSrc] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        "/Images/ring.jpg",
        "/Images/prewed9.jpg",
        "/Images/prewed8.jpg",
        "/Images/prewed7.JPG",
        "/Images/prewed6.jpg",
        "/Images/prewed5.jpg",
        "/Images/prewed4.jpg",
        "/Images/prewed3.jpg",
        "/Images/prewed2.jpg",
        "/Images/prewed1.jpg",
        "/Images/pre7.jpg",
        "/Images/pre6.jpg",
        "/Images/pre5.jpg",
        "/Images/pre4.jpg",
        "/Images/pre3.jpg",
        "/Images/pre2.jpg",
        "/Images/pre1.jpg",
        "/Images/ornament1.jpg",
        "/Images/Model10.jpg",
        "/Images/Model9.jpg",
        "/Images/Model8.jpg",
        "/Images/Model7.JPG",
        "/Images/Model6.jpg",
        "/Images/Model1.JPG",
        "/Images/Model1-5.jpg",
        "/Images/Model1 5.JPG",
        "/Images/modal3.JPG",
        "/Images/modal2.jpg",
        "/Images/Hotel6.jpg",
        "/Images/modal-4.jpg",
        "/Images/modal 4.jpg",
        "/Images/maternity8.jpg",
        "/Images/maternity7.jpg",
        "/Images/maternity6.jpg",
        "/Images/maternity5.jpg",
        "/Images/maternity4.jpg",
        "/Images/maternity3.jpg",
        "/Images/maternity2.jpg",
        "/Images/maternity.jpg",
        "/Images/kid2.jpg",
        "/Images/Kid.jpg",
        "/Images/Hotel11.jpg",
        "/Images/Hotel10.jpg",
        "/Images/Hotel9.jpg",
        "/Images/Hotel8.jpg",
        "/Images/Hotel7.jpg",
        "/Images/Hotel5.jpg",
        "/Images/Hotel4.jpg",
        "/Images/Hotel2.jpg",
        "/Images/hotel1.jpg",
        "/Images/holi2.jpg",
        "/Images/holi1.jpg",
        "/Images/ganesh.JPG",
        "/Images/couple1.jpg",
        "/Images/baby10.jpg",
        "/Images/Hotel3.jpg",
        "/Images/baby9.jpg",
        "/Images/baby8.jpg",
        "/Images/baby7.jpg",
        "/Images/baby6.jpg",
        "/Images/baby5.jpg",
        "/Images/baby4.JPG",
        "/Images/baby3.JPG",
        "/Images/baby2.jpg",
        "/Images/baby1.jpg",
        "/Images/Baby.jpg"
    ];

    const openFullscreen = (index) => {
        setFullscreenSrc(images[index]);
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeFullscreen = () => {
        setIsModalOpen(false);
        gsap.to('.fullscreen-img', { opacity: 0, duration: 0.1 });
        gsap.to('.fullscreen-img img', { scale: 0.9, opacity: 0, duration: 0.8 });
    };

    const goToNextImage = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setFullscreenSrc(images[nextIndex]);
        setCurrentImageIndex(nextIndex);
    };

    const goToPreviousImage = () => {
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        setFullscreenSrc(images[prevIndex]);
        setCurrentImageIndex(prevIndex);
    };

    return (
        <div className="columns-2 md:columns-4 gap-4 w-4/5 m-auto my-4 mt-32 rounded-3xl">
            {images.map((image, index) => (
                <div key={index} className="break-inside-avoid mb-4 overflow-hidden rounded-lg">
                    <img
                        className="w-full rounded-lg object-cover object-center cursor-pointer opacity-0 transition-opacity duration-500 ease-in-out"
                        src={image}
                        alt={`gallery - photo - ${index}`}
                        onClick={() => openFullscreen(index)}
                        onMouseEnter={(e) => gsap.to(e.target, { scale: 1.1, duration: 0.3 })}
                        onMouseLeave={(e) => gsap.to(e.target, { scale: 1, duration: 0.3 })}
                        onLoad={(e) => {
                            gsap.to(e.target, { opacity: 1, duration: 0.5 });
                        }}
                    />
                </div>
            ))}
            {fullscreenSrc && isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out fullscreen-img"
                    onClick={closeFullscreen}
                    aria-hidden="true"
                >
                    <img
                        src={fullscreenSrc}
                        alt="fullscreen"
                        className="max-w-[90%] max-h-[90%] object-contain transition-all duration-500 ease-in-out rounded-lg"
                    />
                    <span
                        className="absolute top-4 right-4 text-white text-3xl cursor-pointer bg-black bg-opacity-50 p-2 rounded-full"
                        onClick={(e) => { e.stopPropagation(); closeFullscreen(); }}
                    >
                        &times;
                    </span>

                    <button
                        className="absolute left-16 lg:top-1/2 bottom-10 transform -translate-y-1/2 text-white text-3xl"
                        onClick={(e) => { e.stopPropagation(); goToPreviousImage(); }}
                    >
                        &#8592;
                    </button>
                    <button
                        className="absolute right-16 bottom-10 lg:top-1/2 transform -translate-y-1/2 text-white text-3xl"
                        onClick={(e) => { e.stopPropagation(); goToNextImage(); }}
                    >
                        &#8594;
                    </button>
                </div>
            )}
        </div>
    );
}
