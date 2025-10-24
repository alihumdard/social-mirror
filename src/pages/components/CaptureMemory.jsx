import React, { useState, useEffect } from 'react'; // Import useEffect

// 1. DATA: Define the content for all tabs
const tabData = [
    {
        id: 'Hospitality',
        title: "Capture moments,\nshare memories.",
        subtitle: "Offer guests a memory they'll share.",
        backgroundImage: "/images/capture4.png", // The original image
        phoneText: "LET'S CAPTURE\nTHIS MOMENT"
    },
    {
        id: 'Events',
        title: "Amplify your event,\ncreate a buzz.",
        subtitle: "Engage attendees like never before.",
        backgroundImage: "/images/capture1.png",
        phoneText: "WELCOME TO\nTHE EVENT"
    },
    {
        id: 'Retail',
        title: "Transform shoppers\ninto fans.",
        subtitle: "Create interactive in-store experiences.",
        backgroundImage: "/images/capture2.png",
        phoneText: "TRY THIS\nNEW LOOK"
    },
    {
        id: 'Public spaces',
        title: "Activate your space,\nengage the public.",
        subtitle: "Turn any location into an attraction.",
        backgroundImage: "/images/capture3.png",
        phoneText: "SHARE YOUR\nVIEW"
    }
];

// --- NEW: Define your 4 images for the slideshow ---
// (This is for the second section, "Wow your guest")
const slideshowImages = [
    "/images/Container.png", // Image 1 (your original image)
];

const CaptureMemoriesSection = () => {
    // --- State for Tabs ---
    // const [activeTab, setActiveTab] = useState(tabData[0].id); // OLD
    const [currentTabIndex, setCurrentTabIndex] = useState(0); // NEW
    const totalTabs = tabData.length;

    // --- State for "Wow your guest" Slideshow ---
    const [slideshowIndex, setSlideshowIndex] = useState(0);

    // --- NEW: useEffect for Tab Auto-Rotation ---
    useEffect(() => {
        // Set up a timer that increments the tab index
        const tabTimer = setInterval(() => {
            setCurrentTabIndex((prevIndex) => (prevIndex + 1) % totalTabs);
        }, 3000); // 3000ms = 3 seconds. Change this for speed.

        // Clean up the timer when the component unmounts or when currentIndex changes
        return () => clearInterval(tabTimer);
    }, [currentTabIndex, totalTabs]); // Re-run this effect when the index changes

    // --- NEW: useEffect for "Wow your guest" Slideshow ---
    useEffect(() => {
        const slideshowTimer = setInterval(() => {
            setSlideshowIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
        }, 3000); // Also 3 seconds, change as needed
        return () => clearInterval(slideshowTimer);
    }, []); // Runs only once

    // --- Logic for Tabs ---
    // const currentContent = tabData.find(tab => tab.id === activeTab); // OLD
    const currentContent = tabData[currentTabIndex]; // NEW
    const activeTabId = currentContent.id; // Get the ID for styling

    if (!currentContent) {
        return null;
    }

    return (
        <>
            {/* =========================================== */}
            {/* === "Capture moments" Section (Tabs) === */}
            {/* =========================================== */}
            <div className="relative text-white overflow-hidden py-10">
                <div className="absolute inset-0">
                    <img
                        src={currentContent.backgroundImage}
                        alt={currentContent.title}
                        className="w-full h-full object-cover transition-all duration-500"
                    />
                </div>
                <div className="absolute"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-8 whitespace-pre-line">
                        {currentContent.title}
                    </h2>
                    <div className="relative w-64 h-[400px] sm:w-80 sm:h-[500px] border-4 border-white rounded-[3rem] p-3 flex flex-col justify-between items-center mb-12">
                        <div className="flex-1 flex flex-col justify-center items-center text-center">
                            <p className="text-white text-xl font-semibold tracking-wide whitespace-pre-line">
                                {currentContent.phoneText}
                            </p>
                            <div className="flex space-x-4 mt-6">
                                <button className="p-3 bg-opacity-20 rounded-full flex items-center justify-center border border-white border-opacity-30">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                                <button className="p-3 bg-opacity-20 rounded-full flex items-center justify-center border border-white border-opacity-30">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </button>
                                <button className="p-3 bg-opacity-20 rounded-full flex items-center justify-center border border-white border-opacity-30">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <p className="text-white text-xs opacity-70 mb-2">SOCIAL MIRROR</p>
                    </div>
                    <p className="text-lg sm:text-xl text-white mb-8">
                        {currentContent.subtitle}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* MODIFIED: onClick now sets the index */}
                        {tabData.map((tab, index) => (
                            <button
                                key={tab.id}
                                className={`
                  px-6 py-3 rounded-lg text-lg cursor-pointer font-medium transition-all duration-300
                  ${activeTabId === tab.id // Check against the derived activeTabId
                                        ? 'bg-white text-black shadow-lg'
                                        : 'bg-gray-600 bg-opacity-20 text-white hover:bg-opacity-30'
                                    }
                `}
                                onClick={() => {
                                    setCurrentTabIndex(index); // Set the index on click
                                }}
                            >
                                {tab.id}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ======================================== */}
            {/* === "Wow your guest" Section (Slider) === */}
            {/* ======================================== */}
            <div className="relative bg-blue-700 text-white py-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-0 sm:gap-12">

                    <div className="relative w-full lg:w-1/2 flex justify-center mt-10 items-center h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden">
                        {slideshowImages.map((imageSrc, index) => (
                            <img
                                key={imageSrc}
                                src={imageSrc}
                                alt="Immersive experience"
                                className={`
                                w-full h-[90%] object-cover absolute top-0 left-0
                                transition-opacity duration-1000 ease-in-out
                                ${index === slideshowIndex ? 'opacity-100' : 'opacity-0'}
                                `}
                            />
                        ))}
                    </div>

                    <div className="w-full lg:w-1/2 text-left sm:text-center lg:text-left md:mb-20">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6">
                            Wow your guest.
                            <br />
                            Turn your ideas into
                            <br />
                            immersive content.
                        </h2>
                        <p className="text-lg sm:text-xl text-white opacity-80 mb-8">
                            A new way for brands to engage their audience: ethically,
                            beautifully, and instantly.
                        </p>
                        <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                            Discover our product
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaptureMemoriesSection;