"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
    const initialData = {
        name: "",
        email: "",
        username: "",
        password: "",
        confirm_password: "",
        terms: false,
    };

    const [data, setData] = useState(initialData);
    const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false);
    const { push } = useRouter();

    useEffect(() => {
        setData({ ...data, terms: isTermsChecked });
    }, [isTermsChecked]);

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(() => push("/"));
    };

    const handleInputChange = (
        e: React.ChangeEvent & { target: HTMLInputElement }
    ): void => {
        if (e.target.id === "terms") {
            setIsTermsChecked(!isTermsChecked);
        } else {
            setData({ ...data, [e.target.id]: e.target.value });
        }
    };

    return (
        <form
            className="space-y-4 md:space-y-6"
            action="#"
            onSubmit={(e) => handleSubmit(e)}
        >
            <div>
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Nom complet
                </label>
                <input
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Yannis Haismann"
                    className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div></div>
            <div>
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Email
                </label>
                <input
                    onChange={(e) => handleInputChange(e)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="nina@gmail.com"
                />
            </div>
            <div>
                <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Nom d&#39;utilisateur
                </label>
                <input
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Mathilde97"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    onChange={(e) => handleInputChange(e)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label
                    htmlFor="confirm_password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Confirmation du mot de passe
                </label>
                <input
                    onChange={(e) => handleInputChange(e)}
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input
                        onChange={(e) => handleInputChange(e)}
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                </div>
                <div className="ml-3 text-sm flex-col">
                    <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                    >
                        J&#39;accepte les{" "}
                        <a
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            href="#"
                        >
                            Termes et Conditions
                        </a>
                    </label>
                    {/* {errors && (
                        <p className="text-red-600 text-[1em] pt-[10px] -mb-[5px]">
                            {errors}
                        </p>
                    )} */}
                </div>
            </div>
            <button
                type="submit"
                className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                Créer mon compte
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Déjà un compte?{" "}
                <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                    Connecte-toi ici
                </Link>
            </p>
        </form>
    );
}
