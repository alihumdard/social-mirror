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
                                <a
                                    href="#"
                                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-full bg-gray-100 font-medium transition-all duration-300 hover:bg-gray-200"
                                >
                                    Enterprise
                                    <ChevronRight className="text-gray-700 w-4 h-4" />
                                </a>
                                <Link
                                    to={URLS.MIRROR}
                                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                                >
                                    Mirror
                                </Link>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                                >
                                    Platform
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                                >
                                    Contact us
                                </a>
                            </div>
                        </div>

                        {/* Right section - "Use code" button */}
                        <div>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                                Use code
                            </button>
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
                        <div className="lg:hidden absolute top-full left-0 right-0 bg-white z-50 py-4">
                            <div className="flex flex-col space-y-3">
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg"
                                >
                                    Mirror
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg"
                                >
                                    Platform
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg"
                                >
                                    Contact us
                                </a>
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
            </Sectionwraper>
        </div>
    );
};

export default Navbar;
