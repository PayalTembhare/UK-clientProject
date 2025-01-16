import React, { useEffect, useRef } from 'react';
import { FcOldTimeCamera } from 'react-icons/fc';
import { gsap } from 'gsap';

const CameraFollower = () => {
    const cameraRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX: x, clientY: y } = event;

            gsap.to(cameraRef.current, {
                x: x - window.innerWidth / 2,
                y: y - window.innerHeight / 2,
                duration: 0.2,
                ease: 'power2.out',
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={cameraRef}
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        >
            <FcOldTimeCamera style={{ fontSize: '36px' }} />
        </div>
    );
};

export default CameraFollower;
