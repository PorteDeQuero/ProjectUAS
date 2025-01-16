import React from "react";
import { Link } from "@inertiajs/react";
import axios from "axios";

const Products = ({ products }) => {
    const addToCart = (product) => {

    };

    return (
        <div className="bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <div className="text-2xl font-bold text-green-600">
                        {" "}
                        DimAlBayRaj{" "}
                    </div>
                    <nav className="space-x-4">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-green-600"
                        >
                            {" "}
                            Home{" "}
                        </Link>
                        <Link
                            href="/about-us"
                            className="text-gray-700 hover:text-green-600"
                        >
                            {" "}
                            About Us{" "}
                        </Link>
                        <Link
                            href="/products"
                            className="text-gray-700 hover:text-green-600"
                        >
                            {" "}
                            Products{" "}
                        </Link>
                        <Link
                            href="/contact-us"
                            className="text-gray-700 hover:text-green-600"
                        >
                            {" "}
                            Contact Us{" "}
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
                            href="/cart"
                            className="text-gray-700 hover:text-green-600"
                        >
                            {" "}
                            🛒 Cart (0){" "}
                        </a>
                    </div> */}
                </div>
            </header>

            {/* Product Section */}
            <section className="container mx-auto my-10">
                <h2 className="text-3xl font-bold text-center mb-6">
                    {" "}
                    Our Products{" "}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow p-4 text-center"
                        >
                            <Link href={`/products/${product.id}`}>
                                <img
                                    src={product.productImage}
                                    alt={product.productName}
                                    className="rounded-lg mb-2 w-full h-48 object-cover"
                                />
                                <h3 className="font-semibold text-lg">
                                    {product.productName}
                                </h3>
                                <p className="text-gray-700">
                                    ${product.productPrice}
                                </p>
                                <p className="text-gray-600 mt-2">
                                    {product.productDescription}
                                </p>
                            </Link>
                        </div>
                    ))}
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

export default Products;
