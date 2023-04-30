"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { push } = useRouter();

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
    };

    const { status } = useSession();
    if (status === "authenticated") push("/");

    return (
        <form
            className="space-y-4 md:space-y-6"
            onSubmit={(e) => handleSubmit(e)}
        >
            <div>
                <button
                    onClick={() => signIn("google")}
                    className="p-2 flex shadow-sm rounded-md border-[1px] border-opacity-10 border-black"
                >
                    <FcGoogle size={20} className="mr-1.5 mt-0.5" />
                    Sign In with Google
                </button>
                <button onClick={() => signIn()}>Sign In with Email</button>
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Email
                </label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="yesmangaming@outlook.fr"
                />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Mot de passe
                </label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="flex-col">
                <div className="flex items-center justify-start -mt-2 -mb-1">
                    <Link
                        href="/forgotPassword"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                        Mot de passe oublié?
                    </Link>
                </div>
                {/* {errors && (
                    <p className="text-red-600 text-[0.9em] -mb-2 mt-3 flex justify-center">
                        {errors}
                    </p>
                )} */}
            </div>
            <button
                type="submit"
                className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                Se connecter
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Pas encore de compte?&nbsp;{" "}
                <Link
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                    S&#39;inscrire
                </Link>
            </p>
        </form>
    );
}
