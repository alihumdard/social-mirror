import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import URLS from '../config/urls.config'
import { ChevronRight, Facebook, Instagram, Linkedin, Menu, Twitter, X, Youtube } from 'lucide-react'
import Sectionwraper2 from '../main/SectionWraper2'

const Plateform = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div>
                <div
                    className="fixed inset-0 z-[-1] bg-gradient-to-b from-black to-blue-700 animate-gradient-rise"
                    aria-hidden="true"
                />
                <div>
                    <nav className="max-w-[1500px] px-4 sm:px-6 lg:px-10 w-full flex items-center justify-between py-2  relative">
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
                                    <button className="bg-[#5700FB] cursor-pointer text-white font-bold py-2 px-4 ">
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
                                className="p-2 rounded-full text-white "
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

                    {/* 4. Removed 'bg-black' but kept 'text-white' */}
                    <section className="text-white py-16 md:py-24 font-sans">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                            {/* Light/Dark Toggle */}
                            <div className="mb-10 p-1 bg-gray-800 flex space-x-2">
                                <Link to={URLS.PLATFORM2} className="px-8 py-2 text-sm font-medium rounded-lg">
                                    Light
                                </Link>
                                <Link to={URLS.PLATFORM} className="px-8 py-2 text-sm font-medium text-black bg-white shadow-lg">
                                    Dark
                                </Link>
                            </div>

                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 leading-tight">
                                Interaction made easy
                            </h2>

                            {/* Description */}
                            <p className="text-lg text-gray-400 text-center max-w-2xl mb-12">
                                From designing your displayed content to sending WhatsApp campaigns, all in one intuitive platform.
                            </p>

                            {/* Dashboard Mockup Image */}
                            <div className="w-[87%] flex justify-center">
                                <img
                                    src="/images/platform.png" // Make sure this path is correct for your image
                                    alt="Dashboard Mockup - Interaction Platform"
                                />
                            </div>

                        </div>
                    </section>

                    <div>
                        <section className="py-16 px-6 text-gray-100 text-center rounded-2xl shadow-lg max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl text-gray-100 font-bold mb-6 tracking-tight">
                                Benefit from our Online Platform
                            </h2>
                            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
                                Manage visuals, campaigns, and engagement across locations — all in one intuitive dashboard.
                            </p>
                        </section>

                        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 ">
                            {/* Left side */}
                            <div className="flex flex-col gap-6 px-3 md:px-0">
                                <img src="/images/platform2.png" alt="" className="rounded-2xl w-full max-w-lg object-cover" />
                                <img src="/images/platform3.png" alt="" className="rounded-2xl w-full max-w-lg object-cover" />
                                <img src="/images/platform6.png" alt="" className="rounded-2xl w-full max-w-lg object-cover" />
                            </div>

                            {/* Right side */}
                            <div className="flex flex-col gap-6">
                                <img src="/images/platform4.png" alt="" className="rounded-2xl w-full max-w-lg object-cover px-3 md:px-0" />
                                <div className="gap-6 justify-between items-center px-3 md:px-0">
                                    {/* <img src="/images/Card5.png" alt="" className="rounded-2xl w-full max-w-lg object-cover block sm:hidden" />
        <img src="/images/Card6.png" alt="" className="rounded-2xl w-full max-w-lg object-cover  block sm:hidden" /> */}
                                    <img src="/images/platform5.png" alt="" className="rounded-2xl pb-6 w-full max-w-lg object-cover" />
                                    <img src="/images/platform7.png" alt="" className="rounded-2xl w-full max-w-lg object-cover" />
                                </div>
                            </div>
                        </div>
                        <Sectionwraper2>
                            <section className="flex flex-col items-center justify-center h-[300px] text-center my-10 rounded-2xl text-white bg-[#5700FB]">
                                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                                    Enterprise? <br /> Get your mirror.
                                </h2>
                                <button className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition-all duration-200">
                                    Learn more
                                </button>
                            </section>
                        </Sectionwraper2>


                    </div>
                </div>

            </div>

            <div className="py-20 bg-black sm:py-32">
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
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-14 mt-8">
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

            <footer className=" text-white bg-black py-16 sm:px-6 lg:px-8">
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
                                <button className="w-full text-sm sm:w-auto bg-[#5700FB] text-white font-semibold py-2 px-4 transition-colors duration-300">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-white text-sm leading-relaxed">
                                By subscribing you agree to our{" "}
                                <a href="#" className="underline hover:text-[#5700FB]">Privacy Policy</a> and provide consent to
                                receive updates from our company{" "}
                                <a href="#" className="underline hover:text-[#5700FB]">Conditions</a>.
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
        </>
    )
}

export default Plateform