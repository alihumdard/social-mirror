import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Sectionwraper from '../../main/Sectiowraper';

// 1. Define your 4 image paths here
const images = [
  "/images/hero.png", // Image 1
  "/images/capture1.png", // Image 2 (You need to change this path)
  "/images/capture2.png", // Image 3 (You need to change this path)
  "/images/capture3.png"  // Image 4 (You need to change this path)
];

const HeroSection = () => {
  // 2. State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. useEffect to create a timer (the slideshow)
  useEffect(() => {
    // Set up an interval to change the image every 3 seconds (3000ms)
    const intervalId = setInterval(() => {
      // Move to the next image, wrapping around to 0 if at the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change 3000 to make it faster or slower

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty array [] means this effect runs only once on mount

  return (
    <Sectionwraper>
      <div className="text-center py-16">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight mb-4">
          One mirror, endless
          <br />
          experiences
        </h1>

        {/* Subheading/Description */}
        <p className="text-lg sm:text-xl text-black mb-2">
          Your ideas on display in seconds.
        </p>
        <p className="text-lg sm:text-xl text-black mb-12">
          A fun way to connect with your guest. No code needed.
        </p>

        {/* 4. Image Placeholder (Now a container for the fading images) */}
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl relative h-[400px] sm:h-[500px] md:h-[600px]"> 
          {/* We add 'relative' to this container.
            We also give it a fixed height to prevent layout jumps. 
            Adjust h-[400px] sm:h-[500px] md:h-[600px] as needed.
          */}
          
          {/* 5. Map over the images to render all of them */}
          {images.map((imageSrc, index) => (
            <img
              key={imageSrc} // Use image source as a key
              src={imageSrc}
              alt="People having fun at a party with a mirror experience"
              className={`
                w-full h-full object-cover absolute top-0 left-0
                transition-opacity duration-1000 ease-out
                ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
              `}
            />
          ))}
        </div>
      </div>
    </Sectionwraper>
  );
};

export default HeroSection;