import React from "react";
import Register from "./register";

export default function RegisterPage() {
    return (
        <section className="h-screen w-screen bg-gray-100 dark:bg-gray-900">
            <div className="h-screen w-screen flex flex-col justify-center px-6 md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Créer un compte
                        </h1>
                        <Register />
                    </div>
                </div>
            </div>
        </section>
    );
}
