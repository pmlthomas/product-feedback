"use client";
import React from "react";
import AddFeedbackForm from "./AddFeedbackForm";

export default function AddFeedbackPage() {
    return (
        <div className="w-[95vw] max-w-[550px] h-[620px] bg-white -mt-[5%] px-6 pt-4">
            <div className="-mt-11 h-14 w-14 rounded-full bg-gradient-to-r from-darkBlue to-purple flex justify-center items-center">
                <p className="text-white text-2xl">+</p>
            </div>
            <h1 className="text-lightDark font-semibold text-2xl mb-5 mt-6">
                Créer une suggestion
            </h1>
            <AddFeedbackForm />
        </div>
    );
}
