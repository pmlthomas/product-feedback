"use client";
import React, { useState } from "react";
import AddFeedbackForm from "./components/form";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function AddFeedbackPage() {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const router = useRouter();

    return (
        <div
            onClick={() => isFilterOpen && setIsFilterOpen(false)}
            className="h-screen w-screen flex flex-col justify-center items-center"
        >
            <div className="hidden w-[95vw] max-w-[570px] md:flex justify-start mb-12 -mt-14">
                <div
                    onClick={() => router.back()}
                    className="flex w-fit cursor-pointer"
                >
                    <IoIosArrowBack size={15} className="mt-1 mr-2 " />
                    <p>Revenir en arrière</p>
                </div>
            </div>
            <div className="w-[95vw] max-w-[570px] h-[680px] md:h-[660px] bg-white px-6 pt-4">
                <div className="-mt-11 h-14 w-14 rounded-full bg-gradient-to-r from-darkBlue to-purple flex justify-center items-center">
                    <p className="text-white text-2xl select-none">+</p>
                </div>
                <h1 className="text-lightDark font-semibold text-2xl mb-5 mt-6">
                    Créer une suggestion
                </h1>
                <AddFeedbackForm
                    isFilterOpen={isFilterOpen}
                    setIsFilterOpen={setIsFilterOpen}
                />
            </div>
        </div>
    );
}
