import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/react";

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        productName: "",
        productPrice: "",
        productDescription: "",
        productImage: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/products");
    };

    return (
        <div className="container mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Add Product</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Product Name
                    </label>
                    <input
                        type="text"
                        className={`mt-1 block w-full border rounded-md shadow-sm p-2 ${
                            errors.productName
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                        value={data.productName}
                        onChange={(e) => setData("productName", e.target.value)}
                        placeholder="Enter product name"
                    />
                    {errors.productName && (
                        <div className="text-red-500 text-sm mt-1">
                            {errors.productName}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Product Price
                    </label>
                    <input
                        type="number"
                        className={`mt-1 block w-full border rounded-md shadow-sm p-2 ${
                            errors.productPrice
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                        value={data.productPrice}
                        onChange={(e) =>
                            setData("productPrice", e.target.value)
                        }
                        placeholder="Enter product price"
                    />
                    {errors.productPrice && (
                        <div className="text-red-500 text-sm mt-1">
                            {errors.productPrice}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Product Description
                    </label>
                    <textarea
                        className="mt-1 block w-full border rounded-md shadow-sm p-2 border-gray-300"
                        value={data.productDescription}
                        onChange={(e) =>
                            setData("productDescription", e.target.value)
                        }
                        placeholder="Enter product description"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Product Image
                    </label>
                    <input
                        type="file"
                        className={`mt-1 block w-full border rounded-md shadow-sm p-2 ${
                            errors.productImage
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                        onChange={(e) =>
                            setData("productImage", e.target.files[0])
                        }
                    />
                    {errors.productImage && (
                        <div className="text-red-500 text-sm mt-1">
                            {errors.productImage}
                        </div>
                    )}
                </div>
                <div className="flex justify-between mt-6">
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        {processing ? "Creating..." : "Create Product"}
                    </button>
                    <Link
                        href="/admin/products"
                        className="ml-4 w-full text-center bg-gray-300 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-400 transition duration-200"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Create;
