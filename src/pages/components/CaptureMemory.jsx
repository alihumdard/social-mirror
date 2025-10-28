import React, { useState, useEffect } from 'react';

// Images array
const heroImages = [
    "/images/hero.png",
    "/images/capture1.png",
    "/images/capture2.png",
    "/images/capture3.png"
];

const CaptureMemory = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        // Outermost div ko Flexbox container banayein aur center karein
        <div className="flex items-center justify-center min-h-screen"> {/* <-- Added classes for centering */}
            {/* Image slideshow container (width/height yahan set hai) */}
            <div className="relative w-[900px] h-[450px] overflow-hidden">
                {heroImages.map((imagePath, index) => (
                    <img
                        key={imagePath}
                        src={imagePath}
                        alt={`Hero Image ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CaptureMemory;