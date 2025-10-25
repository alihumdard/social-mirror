import React, { useState } from 'react';
import Sectionwraper from './Sectiowraper';
import { ChevronRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import URLS from '../config/urls.config';

const Navbar = () => {
    // State to manage the mobile menu (open/closed)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <Sectionwraper>
                <nav className="flex items-center justify-between py-2 bg-white relative">
                    {/* ---------- Desktop Navbar ---------- */}
                    <div className="hidden lg:flex items-center justify-between w-full">
                        {/* Left section - Logo and Navigation Links */}
                        <div className="flex items-center space-x-8">
                            {/* Logo */}
                            <Link to={URLS.HOME}>
                                <div className="flex items-center">
                                    <img
                                        src="/images/logo.png"
                                        alt="Social Mirror Logo"
                                        className="h-16"
                                    />
                                </div>
                            </Link>

                            {/* Navigation Links */}
                            <div className="flex items-center space-x-6">
                                <Link
                                    to={URLS.ENTERISES}
                                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-full bg-gray-100 font-medium transition-all duration-300 hover:bg-gray-200"
                                >
                                    Enterprise
                                    <ChevronRight className="text-gray-700 w-4 h-4" />
                                </Link>
                                <Link
                                    to={URLS.MIRROR}
                                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                                >
                                    Mirror
                                </Link>
                                <Link

                                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                                >
                                    Platform
                                </Link>
                                <Link
                                    to={URLS.CONTACT}
                                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>

                        {/* Right section - "Use code" button */}
                        <div>
                            <Link to={URLS.CODE}>
                                <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded transition-colors duration-300">
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
                                    to={URLS.CODE}
                                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg"
                                >
                                    Use my code
                                </Link>
                                <button
                                    className="flex w-32 items-center gap-2 text-white px-3 py-2 rounded-full bg-black font-medium transition-all duration-300 hover:bg-gray-200"
                                >
                                    Enterprise
                                    <ChevronRight className="text-white w-4 h-4" />
                                </button>
                                <div className="py-32 px-5 bg-white w-full">
                                    <Link to={URLS.CONTACT} className="font-semibold text-2xl text-gray-900 mb-4">Contact</Link>
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
            </Sectionwraper>
        </div>
    );
};

export default Navbar;
