import React, { useState, useEffect, useRef } from 'react';
// 1. Import Framer Motion hooks
import { motion, useScroll, useTransform } from 'framer-motion';
import hero from '../../assets/images/hero.png';
import capture1 from '../../assets/images/capture1.png';
import capture2 from '../../assets/images/capture2.png';
import capture3 from '../../assets/images/capture3.png';

// Images array (same as yours)
const heroImages = [
    hero,
    capture1,
    capture2,
    capture3
];

// Renamed component for clarity
const Text = () => {
    // --- Your existing slideshow logic (UNCHANGED) ---
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);
    // --- End of your existing logic ---


    // --- New Scroll Animation Logic ---
    
    // 2. Create a ref for the target scroll container
    const targetRef = useRef(null);

    // 3. Use useScroll to track scroll progress within the target
    const { scrollYProgress } = useScroll({
        target: targetRef,
        // Track from when the 'start' of targetRef hits the 'start' of viewport
        // until the 'end' of targetRef hits the 'end' of viewport
        offset: ['start start', 'end end'],
    });

    // 4. Use useTransform to map scrollYProgress (0 to 1) to CSS values
    
    // Scale the image (UNCHANGED)
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 2.5]);

    // --- THIS IS THE CHANGED LINE ---
    // Opacity for the first text ("One mirror..."):
    // - Starts at 0, fades IN, stays, then fades OUT.
    const text1Opacity = useTransform(
        scrollYProgress,
        [0, 0.1, 0.25, 0.35], // Scroll points
        [0, 1, 1, 0]          // Opacity values
    );
    // --- END OF CHANGE ---

    // Opacity for the second text ("Capture moments..."):
    // (We adjust the start point to 0.4 so it starts after text 1 fades out)
    const text2Opacity = useTransform(
        scrollYProgress,
        [0.4, 0.5, 0.8, 1], // Changed 0.3 to 0.4
        [0, 1, 1, 0]
    );
    // --- End of new logic ---


    return (
        // 5. The tall scroll container (300vh = 3x screen height)
        // This 'ref' is what useScroll is tracking
        <div ref={targetRef} className="relative h-[300vh] bg-gray-900"> {/* Added dark bg for contrast */}
            
            {/* 6. The STICKY container (fills the screen and sticks to top) */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                
                {/* 7. The animated MOTION container (holds your slideshow) */}
                {/* This is the div that scales up */}
                <motion.div 
                    style={{ scale }} // Apply the scale transform
                    className="relative w-[900px] h-[450px]"
                >
                    {/* --- Your Slideshow Component --- */}
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
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
                         {/* Added a dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                    </div>
                    {/* --- End of Slideshow --- */}


                    {/* --- Animated Text Overlays --- */}
                    
                    {/* Text 1: "One mirror..." (Fades IN and OUT) */}
                    <motion.div
                        style={{ opacity: text1Opacity }} // Apply opacity transform
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white p-8"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-center">
                            One mirror, endless
                        </h1>
                        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
                            experiences
                        </h1>
                        <p className="text-lg md:text-xl text-center max-w-lg">
                            Your ideas on display in seconds. A fun way to connect with your guest. No code needed.
                        </p>
                    </motion.div>

                    {/* Text 2: "Capture moments..." (Fades IN and OUT) */}
                    <motion.div
                        style={{ opacity: text2Opacity }} // Apply opacity transform
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white p-8"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
                            Capture moments,
                        </h1>
                        <h1 className="text-5xl md:text-7xl font-bold text-center">
                            share memories.
                        </h1>
                        {/* You could add the phone UI graphic here */}
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
};

export default Text;