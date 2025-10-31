import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import footerLogo from '../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 py-16 sm:px-6 lg:px-8 border-t border-gray-200">
            {/* FIXED: Added max-w-7xl back to constrain the width */}
            <div className="px-5">

                {/* Top Section: 4-Column Responsive Grid */}
                {/* FIXED: Changed to 1 column on mobile, 4 on desktop. Removed text-center. */}
                <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-y-10 lg:gap-x-12 mb-16 text-left">

                    {/* Column 1: About */}
                    {/* FIXED: Added lg:order-1 for desktop positioning */}
                    <div className="lg:order-1">
                        <h4 className="font-semibold text-gray-900 mb-4">About</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="text-gray-700 hover:text-purple-600 font-semibold">FAQ</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-purple-600 font-semibold">24/7 Support</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-purple-600 font-semibold">Cookie Policy</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-purple-600 font-semibold">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-purple-600 font-semibold">Terms and Conditions</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Tools */}
                    {/* FIXED: Added lg:order-2 for desktop positioning */}
                    <div className="lg:order-2">
                        <h4 className="font-semibold text-gray-900 mb-4">Tools</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="text-gray-700 hover:text-purple-600 font-semibold">Enterprise Services</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-purple-600 font-semibold">Online Platform</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-purple-600 font-semibold">Mirror</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-purple-600 font-semibold">Sitemap</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    {/* FIXED: Added lg:order-3 for desktop positioning */}
                    <div className="lg:order-3">
                        <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="mailto:hello@socialmirror.pro" className="text-gray-700 hover:text-purple-600 font-semibold">hello@socialmirror.pro</a></li>
                            <li><a href="tel:+34674158343" className="text-gray-700 hover:text-purple-600 font-semibold">UK +34674158343</a></li>
                            <li><a href="tel:+34674158343" className="text-gray-700 hover:text-purple-600 font-semibold">FR +34674158343</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter Signup */}
                    {/* FIXED: Added order-first (for mobile) and lg:order-4 (for desktop) */}
                    <div className="order-first lg:order-4">
                        <p className="text-gray-900 text-base font-medium mb-4">
                            Join us on our mission to build the best on-site interactive experiences.
                        </p>
                        {/* This flex setup is correct for stacking on mobile and row on desktop */}
                        <div className="flex flex-col sm:flex-row gap-1 mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full sm:flex-1 p-2 bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-semibold placeholder:text-gray-800"
                            />

                            {/* FIXED: Changed color, padding, and width */}
                            <button className="w-full text-sm sm:w-auto bg-[#5700FB] text-white font-semibold py-2 px-4 hover:bg-[#5700FB] transition-colors duration-300">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed font-semibold">
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
                        <img src={footerLogo} alt="Social Mirror Logo" />
                    </div>

                    {/* Copyright */}
                    {/* FIXED: Pushed to bottom on mobile, center on desktop */}
                    <p className="text-gray-600 order-last md:order-2">© 2025 Social Mirror Pro. All rights reserved.</p>

                    {/* Social Icons */}
                    {/* FIXED: Puts this second on mobile, last on desktop */}
                    <div className="flex space-x-6 pb-5 justify-center md:order-3">
                        <a href="#" aria-label="Facebook" className="text-gray-700"><Facebook className="h-5 w-5" /></a>
                        <a href="#" aria-label="Instagram" className="text-gray-700"><Instagram className="h-5 w-5" /></a>
                        <a href="#" aria-label="Twitter" className="text-gray-700"><Twitter className="h-5 w-5" /></a>
                        <a href="#" aria-label="LinkedIn" className="text-gray-700"><Linkedin className="h-5 w-5" /></a>
                        <a href="#" aria-label="YouTube" className="text-gray-700"><Youtube className="h-5 w-5" /></a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;