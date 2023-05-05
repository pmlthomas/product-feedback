"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddComment({ feedbackId }: any) {
    const router = useRouter();
    const [commentText, setCommentText] = useState<string>("");
    const [remainingLength, setRemainingLength] = useState<number>(250);
    const [error, setError] = useState<string>("");

    function handleChange(e: any) {
        250 - e.target.value.length >= 0 &&
            setRemainingLength(250 - e.target.value.length);

        if (e.target.value.length < 250) {
            setCommentText(e.target.value);
            setError("");
        } else {
            setError("Nombre maximum de caratères atteint");
        }
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        if (remainingLength === 250) return setError("Le commentaire est vide");
        if (commentText.length <= 250) {
            fetch(`http://localhost:3000/api/feedback/${feedbackId}`, {
                method: "POST",
                body: JSON.stringify({ commentText: commentText }),
            }).then(() => {
                router.refresh();
                setCommentText("");
            });
        }
    }

    return (
        <div
            className="h-64 p-6 px-8 bg-white rounded-xl 
                        md:transition-transform md:hover:-translate-y-1 md:hover:shadow-xl md:ease-in-out
                        lg:transition-transform lg:translate-y-2 lg:shadow-xl lg:ease-in-out"
        >
            <h1 className="text-lightDark font-semibold text-lg mb-1">
                Ajouter un commentaire
            </h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    onChange={(e) => handleChange(e)}
                    id="description"
                    value={commentText}
                    className="h-24 bg-gray-100 w-full p-5 pl-6 mt-4 rounded-lg resize-none"
                    placeholder="Écrit ton commentaire ici"
                ></textarea>
                {error && (
                    <div className="flex justify-center mt-1 -mb-2">
                        <span className="text-red-600">*{error}</span>
                    </div>
                )}
                <div className="w-full flex justify-between mt-[14px]">
                    <p className="mt-2">{remainingLength} Caratères restants</p>
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
