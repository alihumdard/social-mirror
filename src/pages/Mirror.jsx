import React from 'react';
import MirrorBlock from './components/MirrorBlock';
import Navbar from '../main/Navbar';
import Footer from '../main/Footer';

const Mirror = () => {
    return (
        <>
            <Navbar />
            <div className="bg-white min-h-screen flex flex-col md:py-20 lg:justify-center items-center">
                <div className="text-center pt-16 pb-12 lg:pt-0 lg:pb-0 lg:mb-16 px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
                        Everything starts with a smile.
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700">
                        Enhance physical spaces with immersive innovation
                    </p>
                </div>


                <div className="w-full hidden md:block">

                    <video
                        src="/vidios/Horizontal 4.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover"
                    ></video>

                </div>
                <div className="w-full block md:hidden">
                    <video
                        src="/vidios/Horizontal 4.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[400px] lg:h-auto object-cover"
                    ></video>
                </div>
            </div>
            <MirrorBlock />

            <div className="bg-white py-32 sm:py-40 hidden md:block">
                <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center py-10">
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
                        className="bg-[#5700FB] text-white font-semibold py-3 px-8 shadow-sm hover:bg-[#5700FB] transition-colors duration-300"
                    >
                        Book a 10 minute demo
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Mirror;