import React from 'react';
import MirrorBlock from './components/MirrorBlock';

const Mirror = () => {
    return (
        <>
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

                    <img
                        src="/images/vidio.png"
                        alt="Mirror experience in a room"
                        className="w-full h-full lg:h-auto object-cover lg:rounded-lg"
                    />
                </div>
                <div className="w-full block md:hidden">

                    <img
                        src="/images/Vertical 4 1.png"
                        alt="Mirror experience in a room"
                        className="w-full h-full lg:h-auto object-cover lg:rounded-lg"
                    />
                </div>
            </div>
            <MirrorBlock/>
        </>
    );
};

export default Mirror;