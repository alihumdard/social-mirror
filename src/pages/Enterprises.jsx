import React from 'react'
import { Link } from 'react-router-dom';
import URLS from '../config/urls.config';
import { ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { SiWhatsapp, SiTiktok, SiInstagram } from 'react-icons/si'; // You'd install react-icons
import { FaCheck } from 'react-icons/fa';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import FeaturesSection from './components/FeaturesSection';
import MobileFeacture from './components/MobileFeacture';


const steps = [
    {
        number: 1,
        title: 'Get your mirror',
        description: 'Fast delivery. Easy installation. Order, unbox, plug in and go life.',
    },
    {
        number: 2,
        title: 'Custom your event',
        description: 'Design branded experiences with our drag-and-drop screen editor.',
    },
    {
        number: 3,
        title: 'Engage with your guest',
        description: 'GDPR compliant; seamless opt-in flow that feels natural, not pushy.',
    },
    {
        number: 4,
        title: 'Monitor, optimize, and connect',
        description: 'Track performance, automate campaigns, and scale across locations.',
    },
];
const Enterprises = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='bg-black text-white'>
            <nav className="max-w-[1500px] px-4 sm:px-6 lg:px-10 w-full flex items-center justify-between py-2  relative">
                {/* ---------- Desktop Navbar ---------- */}
                <div className="hidden lg:flex items-center justify-between w-full">
                    {/* Left section - Logo and Navigation Links */}
                    <div className="flex items-center space-x-8">
                        {/* Logo */}
                        <Link to={URLS.HOME}>
                            <div className="flex items-center">
                                <img
                                    src="/images/logos.png"
                                    alt="Social Mirror Logo"
                                    className="h-16"
                                />
                            </div>
                        </Link>

                        {/* Navigation Links */}
                        <div className="flex items-center space-x-6">
                            <a
                                href="#"
                                className="flex items-center gap-2 text-white px-3 py-2 rounded-full bg-[#28292C] font-medium transition-all duration-300 "
                            >
                                Enterprise
                                <ChevronRight className="text-white w-4 h-4" />
                            </a>
                            <Link
                                to={URLS.MIRROR}
                                className="text-white px-3 py-2 rounded-md"
                            >
                                Mirror
                            </Link>
                            <Link

                                className="text-white px-3 py-2 rounded-md"
                            >
                                Platform
                            </Link>
                            <Link
                                to={URLS.CONTACT}
                                className="text-white px-3 py-2 rounded-md"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>

                    {/* Right section - "Use code" button */}
                    <div>
                        <Link to={URLS.CODE}>
                            <button className="bg-[#5700FB] cursor-pointer text-white font-bold py-2 px-4 transition-colors duration-300">
                                Use code
                            </button>
                        </Link>
                    </div>
                </div>

                {/* ---------- Mobile Navbar ---------- */}
                <div className="lg:hidden flex items-center justify-between w-full">
                    {/* Left: Hamburger Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-full hover:bg-gray-100"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>

                    {/* Center: Logo */}
                    <Link to={URLS.HOME} className="flex-1 flex justify-center">
                        <img
                            src="/images/logo2.png"
                            alt="Social Mirror Logo"
                            className="h-10"
                        />
                    </Link>

                    {/* Right: Enterprise Button */}
                    <a
                        href="#"
                        className="flex items-center gap-1 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-full bg-gray-100 font-medium text-sm"
                    >
                        Enterprise
                        <ChevronRight className="text-gray-500 w-3 h-3" />
                    </a>
                </div>

                {/* ---------- Mobile Dropdown Menu ---------- */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full ml-5 w-full -left-5 px-6 right-20 bg-white z-100 py-4">
                        <div className="flex flex-col space-y-3 w-full">
                            <Link
                                to={URLS.HOME}
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg"
                            >
                                Home
                            </Link>
                            <Link
                                to={URLS.MIRROR}
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg"
                            >
                                Mirror
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg"
                            >
                                Platform
                            </Link>
                            <Link
                                to={URLS.CONTACT}
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg"
                            >
                                Contact us
                            </Link>
                            <button
                                className="flex w-32 items-center gap-2 text-white px-3 py-2 rounded-full bg-black font-medium transition-all duration-300 hover:bg-gray-200"
                            >
                                Enterprise
                                <ChevronRight className="text-white w-4 h-4" />
                            </button>
                            <div className="py-32 px-5 bg-white w-full">
                                <h4 className="font-semibold text-2xl text-gray-900 mb-4">Contact</h4>
                                <ul className="space-y-3 text-sm">
                                    <li><a href="mailto:hello@socialmirror.pro" className="text-gray-700 ">hello@socialmirror.pro</a></li>
                                    <li><a href="tel:+34674158343" className="text-gray-700 ">UK +34674158343</a></li>
                                    <li><a href="tel:+34674158343" className="text-gray-700 ">FR +34674158343</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <section className="min-h-screen bg-black text-white flex items-center justify-center p-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div className="space-y-6 md:space-y-10 order-2 md:order-1 flex flex-col md:text-left">

                        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                            Start converting engagement into measurable ROI
                        </h1>


                        <p className="text-lg md:text-xl text-gray-300 max-w-lg">
                            Turn every interaction into a lead, seamless and automated.
                        </p>

                        {/* Changed bg-[#5700FB] to bg-purple-600 to match your images */}
                        <button className="px-8 py-3 text-center w-72 bg-blue-700 rounded-md text-lg font-semibold transition-colors duration-200">
                            Book a 10 minute demo
                        </button>

                        <div className="flex flex-col sm:flex-row md:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                            <div className="flex space-x-3 text-2xl flex-shrink-0">
                                <SiWhatsapp className="text-green-500" />
                                <SiTiktok className="text-black bg-white rounded-full p-0.5" />
                                <SiInstagram className="text-pink-500" />
                            </div>

                            {/* Removed 'w-96' and added 'max-w-xs' for responsive control */}
                            <p className="text-sm text-gray-400 max-w-sm">
                                Partnered with Meta and optimised for easy sharing to TikTok, Whatsapp and Instagram for maximum social media impact
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-10 order-1 md:order-2">
                        <div className="image-container">

                            {/* <img
                                src="/images/black.png"
                                alt="Abstract Logo"
                                className="rotating2-image w-64 h-64 md:w-96 md:h-96"
                            /> */}
                            <video
                                src="/public/vidios/Black Vertical.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-[60%] h-[40%] ml-16 sm:ml-20 rounded-lg object-cover my-2"
                            >
                                Aapka browser video tag ko support nahi karta.
                            </video>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-black text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Heading */}
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Smarter Reflections.<br />Deeper Connections
                        </h2>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step) => (
                            <div key={step.number} className="bg-[#28292C] p-6 rounded-lg shadow-lg flex flex-col justify-between">
                                <div>
                                    <span className="text-4xl font-bold text-gray-300 mb-4 block">
                                        {step.number}
                                    </span>
                                    <h3 className="text-xl font-semibold mb-10">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-black text-white py-16 md:py-24">

                <div className='md:pl-36 text-center pb-10 sm:pb-0 lg:text-left'>
                    <h2 className="text-4xl md:text-5xl font-bold ">
                        Full-Access to our cloud Dashboard
                    </h2>
                    <p className="text-lg text-gray-300 py-10">
                        Design, analyze and connect all in one place.<br />
                        No switching tools.
                    </p>

                    <button className="px-8 py-3 bg-[#5700FB] hover:bg-blue-700 rounded-md text-lg font-semibold transition-colors duration-200">
                        Learn more about our platform
                    </button>
                </div>

                <div>
                    <MobileFeacture />
                </div>
                <div className="hidden sm:block">
                    <FeaturesSection />
                </div>
            </section>

            <section className="bg-black py-16 md:py-24">
                <div className="flex flex-col max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-700 rounded-xl p-8 md:p-12 text-white shadow-lg">
                    <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:justify-start gap-4 md:gap-x-8 md:gap-y-4 mb-10 md:mb-12 order-2 md:order-1">
                        <div className="flex items-center space-x-2">
                            <FaCheck className="text-blue-300" />
                            <span className="text-lg">Product photos</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaCheck className="text-blue-300" />
                            <span className="text-lg">ROI White papers</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaCheck className="text-blue-300" />
                            <span className="text-lg">Specifications and benefits</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaCheck className="text-blue-300" />
                            <span className="text-lg">Product demos</span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 order-1 md:order-2">
                        Download our advocacy kit
                    </h2>

                    <div className="order-3 w-full">
                        <div className="flex flex-col md:flex-row gap-4 mb-4 w-full md:max-w-lg">
                            <input
                                type="email"
                                placeholder="Write your email here"
                                className="flex-grow p-3 rounded-md border border-gray-100 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200">
                                Receive kit
                            </button>
                        </div>

                        {/* Terms and Conditions (No changes needed) */}
                        <p className="text-sm text-white">
                            By clicking 'Receive kit' you're confirming that you agree with our <a href="#" className="underline hover:text-white">Terms and Conditions</a>.
                        </p>
                    </div>

                </div>
            </section>

            <div className="py-20 sm:py-32">
                <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center py-10">
                        <div className="image-container">
                            <video
                                src="/public/vidios/Black Vertical.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-24 h-40 rounded-lg object-cover my-2"
                            >
                                Aapka browser video tag ko support nahi karta.
                            </video>
                        </div>
                    </div>
                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-14 mt-8">
                        Dream. Design. Display.
                    </h1>

                    {/* Button */}
                    <a
                        href="#" // Replace with your actual booking link
                        className="bg-[#5700FB] text-white font-semibold py-3 px-8 shadow-sm hover:bg-blue-700 transition-colors duration-300"
                    >
                        Book a 10 minute demo
                    </a>
                </div>
            </div>

            <footer className=" text-white py-16 sm:px-6 lg:px-8">
                {/* FIXED: Added max-w-7xl back to constrain the width */}
                <div className="px-5">

                    {/* Top Section: 4-Column Responsive Grid */}
                    {/* FIXED: Changed to 1 column on mobile, 4 on desktop. Removed text-center. */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-y-10 lg:gap-x-12 mb-16 text-left">

                        {/* Column 1: About */}
                        {/* FIXED: Added lg:order-1 for desktop positioning */}
                        <div className="lg:order-1">
                            <h4 className="font-semibold text-white mb-4">About</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="text-white">About</a></li>
                                <li><a href="#" className="text-white">FAQ</a></li>
                                <li><a href="#" className="text-white">24/7 Support</a></li>
                                <li><a href="#" className="text-white">Cookie Policy</a></li>
                                <li><a href="#" className="text-white">Privacy Policy</a></li>
                                <li><a href="#" className="text-white">Terms and Conditions</a></li>
                            </ul>
                        </div>

                        {/* Column 2: Tools */}
                        {/* FIXED: Added lg:order-2 for desktop positioning */}
                        <div className="lg:order-2">
                            <h4 className="font-semibold text-white mb-4">Tools</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="text-white">Enterprise Services</a></li>
                                <li><a href="#" className="text-white">Online Platform</a></li>
                                <li><a href="#" className="text-white">Mirror</a></li>
                                <li><a href="#" className="text-white">Sitemap</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Contact */}
                        {/* FIXED: Added lg:order-3 for desktop positioning */}
                        <div className="lg:order-3">
                            <h4 className="font-semibold text-white mb-4">Contact</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="mailto:hello@socialmirror.pro" className="text-white ">hello@socialmirror.pro</a></li>
                                <li><a href="tel:+34674158343" className="text-white">UK +34674158343</a></li>
                                <li><a href="tel:+34674158343" className="text-white">FR +34674158343</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Newsletter Signup */}
                        {/* FIXED: Added order-first (for mobile) and lg:order-4 (for desktop) */}
                        <div className="order-first lg:order-4">
                            <p className="text-white text-base font-medium mb-4">
                                Join us on our mission to build the best on-site interactive experiences.
                            </p>
                            {/* This flex setup is correct for stacking on mobile and row on desktop */}
                            <div className="flex flex-col sm:flex-row gap-1 mb-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full sm:flex-1 p-2 bg-[#28292C] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {/* FIXED: Changed color, padding, and width */}
                                <button className="w-full text-sm sm:w-auto bg-[#5700FB] text-white font-semibold py-2 px-4 hover:bg-blue-700 transition-colors duration-300">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-white text-sm leading-relaxed">
                                By subscribing you agree to our{" "}
                                <a href="#" className="underline hover:text-blue-600">Privacy Policy</a> and provide consent to
                                receive updates from our company{" "}
                                <a href="#" className="underline hover:text-blue-600">Conditions</a>.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Section: Logo, Copyright, Socials */}
                    {/* FIXED: Added 'order' classes to match mobile image order */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-sm text-left space-y-6 md:space-y-0">

                        {/* Logo */}
                        <div className="font-bold text-white text-xl flex items-center justify-center md:justify-start md:order-1">
                            <img src="/images/logos.png" alt="Social Mirror Logo" />
                        </div>

                        {/* Copyright */}
                        {/* FIXED: Pushed to bottom on mobile, center on desktop */}
                        <p className="text-white order-last md:order-2">© 2025 Social Mirror Pro. All rights reserved.</p>

                        {/* Social Icons */}
                        {/* FIXED: Puts this second on mobile, last on desktop */}
                        <div className="flex space-x-6 pb-5 justify-center md:order-3">
                            <a href="#" aria-label="Facebook" className="text-white"><Facebook className="h-5 w-5" /></a>
                            <a href="#" aria-label="Instagram" className="text-white"><Instagram className="h-5 w-5" /></a>
                            <a href="#" aria-label="Twitter" className="text-white"><Twitter className="h-5 w-5" /></a>
                            <a href="#" aria-label="LinkedIn" className="text-white"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" aria-label="YouTube" className="text-white"><Youtube className="h-5 w-5" /></a>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Enterprises;
