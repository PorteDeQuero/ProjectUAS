import React from "react";
import { Head, Link } from "@inertiajs/react";


const AboutUs = () => {
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

            {/* Hero Section */}
            <section
                className="bg-cover bg-center h-96"
                style={{
                    backgroundImage:
                        "url('https://media.graphassets.com/5HF2bKBvRoGxzEyhqGz4')",
                }}
            >
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold">About Us</h1>
                        <p className="mt-2 text-lg">
                            Learn more about our mission and values.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="container mx-auto my-10 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 text-lg text-center mb-10">
                        At MiniMarket, our mission is to provide fresh,
                        high-quality groceries at affordable prices. We believe
                        in supporting local farmers and suppliers to bring the
                        best products to our community.
                    </p>

                    <h2 className="text-3xl font-bold text-center mb-6">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg">Quality</h3>
                            <p className="text-gray-700">
                                We prioritize quality in every product we offer.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg">Community</h3>
                            <p className="text-gray-700">
                                We are committed to supporting our local
                                community.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg">
                                Sustainability
                            </h3>
                            <p className="text-gray-700">
                                We strive to minimize our environmental impact.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg">
                                Customer Service
                            </h3>
                            <p className="text-gray-700">
                                We aim to provide exceptional service to our
                                customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 Dimas Albert Bayu Radja</p>
                </div>
            </footer>
        </div>
    );
};

export default AboutUs;
