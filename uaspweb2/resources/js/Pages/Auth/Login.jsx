import { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500">
            <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-md">
                <Head title="Log in" />
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Log In
                </h2>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-teal-500 focus:ring focus:ring-teal-200"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-teal-500 focus:ring focus:ring-teal-200"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                            className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm text-gray-600"
                        >
                            Remember me
                        </label>
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-teal-600 text-white font-semibold py-2 rounded-md hover:bg-teal-700 transition duration-200"
                            disabled={processing}
                        >
                            Log in
                        </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-sm text-teal-600 hover:underline"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        {canResetPassword && (
                            <Link
                                href={route("register")}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Don't Have account?
                            </Link>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
