import React from "react";
import { Link, useForm } from "@inertiajs/react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css"; // Import DataTables CSS
import "../../../../css/alah.css";
import ReactDOMServer from "react-dom/server";

// Register the DataTable library
DataTable.use(DT);

const Index = ({ products }) => {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this product?")) {
            destroy(`/admin/products/${id}`);
        }
    };

    const columns = [
        { data: "productName", title: "Name" },
        { data: "productPrice", title: "Price" },
        { data: "productDescription", title: "Description" },
        {
            data: null,
            title: "Actions",
            render: (data) =>
                ReactDOMServer.renderToStaticMarkup(
                    <div className="flex space-x-2">
                        <a
                            href={`/admin/products/${data.id}/edit`}
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                            Edit
                        </a>
                        <button
                            className="delete-btn bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            data-id={data.id}
                        >
                            Delete
                        </button>
                    </div>
                ),
        },
    ];

    React.useEffect(() => {
        // Attach event listeners to dynamically added delete buttons
        const tableElement = document.querySelector(".dataTable");
        if (tableElement) {
            tableElement.addEventListener("click", (e) => {
                const target = e.target;
                if (target && target.classList.contains("delete-btn")) {
                    const productId = target.getAttribute("data-id");
                    handleDelete(productId);
                }
            });
        }

        // Cleanup event listeners when component unmounts
        return () => {
            if (tableElement) {
                tableElement.removeEventListener("click", handleDelete);
            }
        };
    }, []);

    return (
        <div className="container mx-auto mt-4 px-8">
            <h1 className="text-2xl font-bold mb-4">Product Management</h1>
            <div className="">
                <Link
                    href="/admin/products/create"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-3"
                >
                    Add Product
                </Link>
                <Link
                    href="/dashboard" // Adjust this link to your desired back route
                    className="bg-gray-500 text-white ml-6 px-4 py-2 rounded hover:bg-gray-600"
                >
                    Back to Admin Panel
                </Link>
                <Link
                    href="/products" // Adjust this link to your desired back route
                    className="bg-blue-500 text-white ml-6 px-4 py-2 rounded hover:bg-blue-600"
                >
                    Back to Website
                </Link>
            </div>
            {/* Container for the DataTable */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">Product List</h2>
                    <div className="overflow-x-auto">
                        <DataTable
                            data={products}
                            columns={columns}
                            className="display min-w-full border border-gray-300"
                            options={{
                                paging: true,
                                searching: true,
                                ordering: true,
                                pageLength: 10,
                                lengthMenu: [5, 10, 25, 50],
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
