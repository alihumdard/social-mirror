import Footer from '../main/Footer';
import React, { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import URLS from '../config/urls.config';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';


const CodeConfirm = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className=' bg-white md:bg-gradient-to-br from-violet-500 to-indigo-900'>
            <nav className="max-w-[1500px] px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between py-2  relative">
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
                                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-full bg-gray-100 font-medium transition-all duration-300 hover:bg-gray-200"
                            >
                                Enterprise
                                <ChevronRight className="text-gray-700 w-4 h-4" />
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
                            <button className="bg-white cursor-pointer text-black font-bold py-2 px-4 transition-colors duration-300">
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
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/images/logo2.png"
                            alt="Social Mirror Logo"
                            className="h-10"
                        />
                    </div>

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
            <div className="min-h-screen w-full flex items-center justify-center p-4">

                {/* 2. The main content card */}
                <div className="bg-white rounded-2xl md:shadow-xl p-8 sm:p-10 w-full max-w-md text-center">

                    {/* 3. Heading */}
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
                        Collect your images
                        <br />
                        and videos using the code
                    </h2>

                    {/* 4. 4-Digit Input Group */}
                    <div className="flex justify-center gap-3 sm:gap-4 mb-8">
                        {/* We create an array of 4 items to map over, making the code cleaner */}
                        {[0, 1, 2, 3].map((index) => (
                            <input
                                key={index}
                                type="text"
                                // The placeholder creates the dot effect
                                placeholder="•"
                                maxLength="1"
                                className="w-14 h-14 sm:w-16 sm:h-16 text-center text-2xl font-semibold text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                            />
                        ))}
                    </div>

                    {/* 5. Confirm Button */}
                    <button className="w-full bg-blue-700 text-white py-3 sm:py-4 rounded-lg font-semibold text-lg hover:bg-violet-800 transition-colors duration-300 mb-4">
                        Confirm
                    </button>

                    {/* 6. "I need help" Link */}
                    <button className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
                        I need help
                    </button>

                </div>
            </div>
            <footer className=" text-gray-700 py-16 sm:px-6 lg:px-8 ">
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
                                <li><a href="#" className="text-white hover:text-purple-600">About</a></li>
                                <li><a href="#" className="text-white hover:text-purple-600">FAQ</a></li>
                                <li><a href="#" className="text-white hover:text-purple-600">24/7 Support</a></li>
                                <li><a href="#" className="text-white hover:text-purple-600">Cookie Policy</a></li>
                                <li><a href="#" className="text-white hover:text-purple-600">Privacy Policy</a></li>
                                <li><a href="#" className="text-white hover:text-purple-600">Terms and Conditions</a></li>
                            </ul>
                        </div>

                        {/* Column 2: Tools */}
                        {/* FIXED: Added lg:order-2 for desktop positioning */}
                        <div className="lg:order-2">
                            <h4 className="font-semibold text-white mb-4">Tools</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="text-white hover:text-purple-600">Enterprise Services</a></li>
                                <li><a href="#" className="text-white hover:text-purple-600">Online Platform</a></li>
                                <li><a href="#" className="text-white hover:text-purple-600">Mirror</a></li>
                                <li><a href="#" className="text-white hover:text-purple-600">Sitemap</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Contact */}
                        {/* FIXED: Added lg:order-3 for desktop positioning */}
                        <div className="lg:order-3">
                            <h4 className="font-semibold text-white mb-4">Contact</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="mailto:hello@socialmirror.pro" className="text-white hover:text-purple-600">hello@socialmirror.pro</a></li>
                                <li><a href="tel:+34674158343" className="text-white hover:text-purple-600">UK +34674158343</a></li>
                                <li><a href="tel:+34674158343" className="text-white hover:text-purple-600">FR +34674158343</a></li>
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
                                    className="w-full sm:flex-1 p-2 bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {/* FIXED: Changed color, padding, and width */}
                                <button className="w-full text-sm sm:w-auto bg-blue-600 text-white font-semibold py-2 px-4 hover:bg-blue-700 transition-colors duration-300">
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
                        <div className="font-bold text-gray-900 text-xl flex items-center justify-center md:justify-start md:order-1">
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

export default CodeConfirm;