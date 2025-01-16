import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-md">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Admin Panel
                        </h2>
                        <nav className="mt-6">
                            <ul>
                                <li>
                                    <Link
                                        href="/admin/products"
                                        className="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded"
                                    >
                                        Products
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Dashboard
                        </h2>
                        <p className="text-gray-700">You're logged in!</p>
                        <Link
                            href="/admin/products"
                            className="mt-4 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                        >
                            Go to Products
                        </Link>
                        <Link
                            href="/products" // Adjust this link to your desired back route
                            className="bg-blue-500 text-white ml-6 px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Back to Website
                        </Link>
                    </div>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
