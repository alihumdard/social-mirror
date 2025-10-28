import React from "react";
// Import icons. You'll need to install react-icons:
// npm install react-icons
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // This is the new 'X' logo
import Navbar from "../main/Navbar";
import Footer from "../main/Footer";

const ContactForm = () => {
    return (
        <>
            <Navbar />
            <section className="bg-white py-16 sm:py-24">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column: Info */}
                    <div className="flex flex-col">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
                            Get in touch
                        </h2>
                        <p className="text-lg text-gray-700 mb-10">
                            We'd love to hear from you. Please use the form to send us a message
                            or contact us using the details below.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-3 mb-10">
                            <p className="text-gray-800 font-medium">hello@socialmirror.pro</p>
                            <p className="text-gray-800 font-medium">UK +34674158343</p>
                            <p className="text-gray-800 font-medium">FR +34674158343</p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-6">
                            <a
                                href="#"
                                className="text-gray-800 hover:text-violet-600 transition-colors text-2xl"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="text-gray-800 hover:text-violet-600 transition-colors text-2xl"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="text-gray-800 hover:text-violet-600 transition-colors text-2xl"
                                aria-label="Twitter"
                            >
                                <FaXTwitter />
                            </a>
                            <a
                                href="#"
                                className="text-gray-800 hover:text-violet-600 transition-colors text-2xl"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="#"
                                className="text-gray-800 hover:text-violet-600 transition-colors text-2xl"
                                aria-label="YouTube"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <form className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-4 rounded-lg bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-4 rounded-lg bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                placeholder="Write your message here"
                                className="w-full p-4 rounded-lg bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
                            ></textarea>
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-center gap-3">
                            <input
                                id="agree"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label
                                htmlFor="agree"
                                className="text-sm text-gray-700 cursor-pointer"
                            >
                                I agree to the Terms and Conditions
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full py-4 px-6 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>


                <div className="bg-white py-20 sm:py-32">
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
                            className="bg-[#5700FB] text-white font-semibold py-3 px-8 shadow-sm hover:bg-blue-700 transition-colors duration-300"
                        >
                            Book a 10 minute demo
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ContactForm;