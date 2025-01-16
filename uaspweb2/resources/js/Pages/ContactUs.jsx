import React from "react";
import { Head, Link } from "@inertiajs/react";

const ContactUs = () => {
    return (
        <div className="bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <div className="text-2xl font-bold text-green-600">
                        DimAlBayRaj
                    </div>
                    <nav className="space-x-4">
                        <Link
                            href={route("welcome")}
                            className="text-gray-700 hover:text-green-600"
                        >
                            Home
                        </Link>
                        <Link
                            href={route("aboutUs")}
                            className="text-gray-700 hover:text-green-600"
                        >
                            About Us
                        </Link>
                        <Link
                            href={route("products")}
                            className="text-gray-700 hover:text-green-600"
                        >
                            Products
                        </Link>

                        <Link
                            href={route("contactUs")}
                            className="text-gray-700 hover:text-green-600"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href={route("dashboard")}
                            className="text-gray-700 hover:text-green-600"
                        >
                            Admin
                        </Link>
                    </nav>

                    {/* <div className="relative">
                        <a
                            href="#"
                            className="text-gray-700 hover:text-green-600"
                        >
                            🛒 Cart (0)
                        </a>
                    </div> */}
                </div>
            </header>

            {/* Contact Section */}
            <section className="container mx-auto my-10 p-4">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-semibold mb-4">
                            Get in Touch
                        </h3>
                        <form>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <span className="material-icons mr-2">info</span>
                            Contact Information
                        </h3>
                        <div className="flex items-center mb-2">
                            <span className="material-icons text-green-600 mr-2">
                                location_on
                            </span>
                            <p className="text-gray-700">
                                <strong>Address:</strong> 123 MiniMarket St,
                                Grocery City, GC 12345
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="material-icons text-green-600 mr-2">
                                phone
                            </span>
                            <p className="text-gray-700">
                                <strong>Phone:</strong> (123) 456-7890
                            </p>
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="material-icons text-green-600 mr-2">
                                email
                            </span>
                            <p className="text-gray-700">
                                <strong>Email:</strong> support@minimarket.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="container mx-auto my-10">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Find Us Here
                </h2>
                <div className="bg-white rounded-lg shadow">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153163!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1e1b5b%3A0x5045675218ceed30!2sMiniMarket!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 MiniMarket. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="hover:text-green-400">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-green-400">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;
