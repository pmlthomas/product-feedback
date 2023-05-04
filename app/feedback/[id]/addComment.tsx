"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddComment({ feedbackId }: any) {
    const router = useRouter();
    const [comment, setComment] = useState<string>("");
    const [descriptionLength, setDescriptionLength] = useState<number>(0);
    const [error, setError] = useState<string>("");

    function handleChange(e: any) {
        setDescriptionLength(e.target.value.length);
        if (e.target.value.length < 500) {
            setComment(e.target.value);
            setError("");
        } else {
            setError("Nombre maximum de caratères atteint");
        }
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        if (descriptionLength === 0) return setError("Le commentaire est vide");
        if (descriptionLength <= 500) {
            fetch(`http://localhost:3000/api/feedback/${feedbackId}`, {
                method: "POST",
                body: comment,
            }).then(() => router.refresh());
        }
    }

    return (
        <div className="h-64 p-6 px-8 bg-white rounded-xl lg:transition-transform lg:translate-y-2 lg:shadow-xl lg:ease-in-out">
            <h1 className="text-lightDark font-semibold text-lg mb-1">
                Ajouter un commentaire
            </h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    onChange={(e) => handleChange(e)}
                    id="description"
                    className="h-24 bg-gray-100 w-full p-5 pl-6 mt-4 rounded-lg resize-none"
                    placeholder="Écrit ton commentaire ici"
                ></textarea>
                {error && (
                    <div className="flex justify-center mt-1 -mb-2">
                        <span className="text-red-600">*{error}</span>
                    </div>
                )}
                <div className="w-full flex justify-between mt-3">
                    <p className="mt-2">250 Caratères restants</p>
                    <button
                        type="submit"
                        className="p-2 bg-purple rounded-xl text-white"
                    >
                        Poster le commentaire
                    </button>
                </div>
            </form>
        </div>
    );
}
