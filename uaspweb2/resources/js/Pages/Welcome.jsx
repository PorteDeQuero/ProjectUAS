import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

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
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                        <span className="absolute right-3 top-2 text-gray-500">
                            🔍
                        </span>
                    </div> */}
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
                        "url('https://bekelsego.com/wp-content/uploads/2023/09/minimarket.jpg')",
                }}
            >
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold">
                            Freshness Delivered Daily
                        </h1>
                        <p className="mt-2 text-lg">
                            Your one-stop shop for all your grocery needs.
                        </p>
                        <a
                            href="/products"
                            className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="container mx-auto my-10">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Featured Categories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow p-4 text-center">
                        <a href="/products" className="block">
                            <img
                                src="https://image.made-in-china.com/2f0j00HFaQzjycYCrt/Grocery-Convenience-Store-Supermarket-Fruits-and-Vegetables-Display-Rack.webp"
                                alt="Fruits"
                                className="rounded-lg mb-2 w-full h-48 object-cover"
                            />
                            <h3 className="font-semibold">Fresh Produce</h3>
                        </a>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 text-center">
                        <a href="/products" className="block">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/03/00/96/15/1000_F_300961573_y3408b8IWf6hDVwlp4FWLJBmkJE8aCiP.jpg"
                            alt="Dairy"
                            className="rounded-lg mb-2 w-full h-48 object-cover"
                        />
                        <h3 className="font-semibold">Dairy Products</h3>
                        </a>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 text-center">
                        <a href="/products" className="block">
                        <img
                            src="https://i.pinimg.com/736x/18/da/cb/18dacb5da17c25cb656e04c6203a5efb.jpg"
                            alt="Snacks"
                            className="rounded-lg mb-2 w-full h-48 object-cover"
                        />
                        <h3 className="font-semibold">Snacks & Beverages</h3>
                        </a>
                    </div>
                </div>
            </section>

            {/* Promotions Section */}

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 Dimas Albert Bayu Radja</p>
                </div>
            </footer>
        </div>
    );

    // return (
    //     <>
    //         <Head title="Welcome" />
    //         <div className="bg-gray-50 text-black/50 ">

    //             <div className="relative flex min-h-screen flex-col items-center  selection:bg-[#FF2D20] selection:text-white">
    //                 <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
    //                     <header className="grid grid-cols-1 items-center gap-2 py-10 lg:grid-cols-1">

    //                         <nav className="-mx-3 flex  justify-end">
    //                             {auth.user ? (
    //                                 <Link
    //                                     href={route('dashboard')}
    //                                     className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
    //                                 >
    //                                     Dashboard
    //                                 </Link>
    //                             ) : (
    //                                 <>
    //                                     <Link
    //                                         href={route('login')}
    //                                         className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
    //                                     >
    //                                         Log in
    //                                     </Link>
    //                                     <Link
    //                                         href={route('register')}
    //                                         className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
    //                                     >
    //                                         Register
    //                                     </Link>
    //                                 </>
    //                             )}
    //                         </nav>
    //                     </header>

    //                     <main className="mt-6">

    //                     </main>

    //                     <footer className="py-16 text-center text-sm text-black ">
    //                         Laravel v{laravelVersion} (PHP v{phpVersion})
    //                     </footer>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // );
}
