import React from "react";
import { usePage } from "@inertiajs/react";

const Cart = () => {
    // Access the `carts` prop sent from the backend
    const { carts: cartItems } = usePage().props;

    const handleRemoveFromCart = (productId) => {
        // Logic to remove item from cart
        fetch(`/api/cart/remove/${productId}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then(() => {
                // Since `cartItems` is from props, you'd typically need to refetch data
                console.log(
                    "Item removed. You may trigger a page reload or refetch."
                );
            })
            .catch((error) =>
                console.error("Error removing item from cart:", error)
            );
    };

    const handleCheckout = () => {
        console.log("Proceeding to checkout...");
    };

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow p-4 text-center"
                        >
                            <img
                                src={item.productImage}
                                alt={item.productName}
                                className="rounded-lg mb-2 w-full h-48 object-cover"
                            />
                            <h3 className="font-semibold text-lg">
                                {item.productName}
                            </h3>
                            <p className="text-gray-700">
                                ${item.productPrice}
                            </p>
                            <p className="text-gray-600 mt-2">
                                Quantity: {item.quantity}
                            </p>
                            <button
                                onClick={() => handleRemoveFromCart(item.id)}
                                className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="text-center mt-6">
                <button
                    onClick={handleCheckout}
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
