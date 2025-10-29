import React from 'react'

const Dream = () => {
    return (
        <div>
            <div className="bg-white py-20 block md:hidden">
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
        </div>
    )
}

export default Dream;
