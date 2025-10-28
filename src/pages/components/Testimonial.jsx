import React, { useState, useEffect } from 'react';
import { AppWindow, ArrowLeft, ArrowRight } from 'lucide-react';

// --- (Your testimonialData array goes here) ---
const testimonialData = [
    {
        id: 1,
        logoUrl: "/images/testlogo.png", // Replace with your logo path
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        avatarUrl: "/images/Avatar Image.png", // Replace with avatar path
        name: "Name Surname 1",
        title: "Position, Company name"
    },
    {
        id: 2,
        logoUrl: "/images/testlogo.png",
        quote: "Duis cursus, mi quis viverra ornare. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        avatarUrl: "/images/Avatar Image (1).png",
        name: "Name Surname 2",
        title: "Position, Company name"
    },
    {
        id: 3,
        logoUrl: "/images/testlogo.png",
        quote: "Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus, mi quis viverra ornare.",
        avatarUrl: "/images/Avatar Image.png",
        name: "Name Surname 3",
        title: "Position, Company name"
    },
    {
        id: 4,
        logoUrl: "/images/testlogo.png",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        avatarUrl: "/images/Avatar Image (1).png",
        name: "Name Surname 4",
        title: "Position, Company name"
    },
    {
        id: 5,
        logoUrl: "/images/testlogo.png",
        quote: "Duis cursus, mi quis viverra ornare. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        avatarUrl: "/images/Avatar Image (1).png",
        name: "Name Surname 5",
        title: "Position, Company name"
    },
    {
        id: 6,
        logoUrl: "/images/testlogo.png",
        quote: "Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus, mi quis viverra ornare.",
        avatarUrl: "/images/Avatar Image (1).png",
        name: "Name Surname 6",
        title: "Position, Company name"
    }
];
// --- (End of data) ---


// NEW: Custom hook to get window width
const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowWidth;
};


// Reusable Testimonial Card Component (Unchanged)
const TestimonialCard = ({ testimonial }) => (
    <div className="bg-gray-100 p-8 rounded-lg shadow-sm w-full h-full">
        {/* Logo */}
        <img
            src={testimonial.logoUrl}
            alt="Webflow"
            className="h-7 mb-6"
        />
        {/* Quote */}
        <p className="text-gray-700 text-base mb-6 min-h-[100px]">
            "{testimonial.quote}"
        </p>
        {/* Author */}
        <div className="flex items-center">
            <img
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
            />
            <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.title}</p>
            </div>
        </div>
    </div>
);

// Main Slider Component (UPDATED)
const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = testimonialData.length;

    // Get window width and check breakpoint
    const windowWidth = useWindowWidth();
    const isDesktop = windowWidth >= 768; // 768px is Tailwind's 'md' breakpoint

    // Create a looped array for seamless looping on desktop
    // (e.g., [1, 2, 3, 4, 5, 6, 1])
    const loopedData = [...testimonialData, testimonialData[0]];

    // --- UPDATED LOGIC ---
    // On desktop, we slide 50%. On mobile, 100%.
    const slidePercentage = isDesktop ? 50 : 100;
    // Calculate the transform value
    const transformValue = `translateX(-${currentIndex * slidePercentage}%)`;
    const sliderStyle = {
        transform: transformValue,
    };
    // --- End of UPDATED LOGIC ---

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <>
            <div className="bg-white text-black py-20 px-4 sm:px-6 lg:px-8">
                {/* UPDATED: Changed lg:w-1/3 and lg:w-2/3 to lg:w-1/2 */}
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left Side: Heading (UPDATED) */}
                    <div className="lg:w-[40%] text-center lg:text-left">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                            Connecting people
                            <br />
                            and brands.
                        </h2>
                    </div>

                    {/* Right Side: Slider (UPDATED) */}
                    {/* ADDED: overflow-hidden to create the "viewport" */}
                    <div className="lg:w-[60%] w-full overflow-hidden">

                        {/* UPDATED: Slider Track */}
                        {/* This 'div' now moves. We map ALL items. */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={sliderStyle}
                        >
                            {/* Map over the looped data */}
                            {loopedData.map((testimonial, index) => (
                                // UPDATED: Card wrapper defines the size
                                <div
                                    key={index}
                                    className="w-full md:w-1/2 flex-shrink-0 box-border p-3"
                                >
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>

                        {/* Slider Controls (Unchanged) */}
                        <div className="flex justify-between items-center mt-8">
                            {/* Arrow Buttons */}
                            <div className="flex gap-3">
                                <button
                                    onClick={prevSlide}
                                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <ArrowLeft className="w-5 h-5 text-gray-700" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <ArrowRight className="w-5 h-5 text-gray-700" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-32 sm:py-40 hidden md:block">
                <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center">
                        <div className="image-container">
                            <img
                                src="/images/z.png" alt="3D rotating item"
                                className="rotating-image"
                            />
                        </div>
                    </div>
                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-14 mt-8">
                        Dream. Design. Display.
                    </h1>

                    {/* Button */}
                    <a
                        href="#" // Replace with your actual booking link
                        className="bg-blue-600 text-white font-semibold py-3 px-8 shadow-sm hover:bg-blue-700 transition-colors duration-300"
                    >
                        Book a 10 minute demo
                    </a>
                </div>
            </div>
        </>
    );
};

export default TestimonialSlider;