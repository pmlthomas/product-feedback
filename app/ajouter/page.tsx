"use client";
import React, { useState } from "react";
import AddFeedbackForm from "./components/form";

export default function AddFeedbackPage() {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    return (
        <div
            onClick={() => isFilterOpen && setIsFilterOpen(false)}
            className="h-screen w-screen flex justify-center items-center -mt-[2%]"
        >
            <div className="w-[95vw] max-w-[570px] h-[660px] bg-white px-6 pt-4">
                <div className="-mt-11 h-14 w-14 rounded-full bg-gradient-to-r from-darkBlue to-purple flex justify-center items-center">
                    <p className="text-white text-2xl">+</p>
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
