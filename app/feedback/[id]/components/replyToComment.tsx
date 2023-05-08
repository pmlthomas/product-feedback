"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type replyToCommentType = {
    commentUserData: any;
    commentId: string;
    setIsReplyOpen: any;
};

export default function ReplyToComment({
    commentUserData,
    commentId,
    setIsReplyOpen,
}: replyToCommentType) {
    const router = useRouter();
    const [replyText, setReplyText] = useState<string>("");
    const [remainingLength, setRemainingLength] = useState<number>(250);
    const [error, setError] = useState<string>("");
    const usernameToReplyStr = `@${commentUserData.username} `;

    function handleChange(e: any) {
        250 - e.target.value.length >= 0 &&
            setRemainingLength(
                250 + commentUserData.username.length - e.target.value.length
            );

        if (e.target.value.length < 250) {
            const addToReplyText = e.target.value.slice(
                usernameToReplyStr.length
            );
            setReplyText(addToReplyText);
            setError("");
        } else {
            setError("Nombre maximum de caratères atteint");
        }
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        if (remainingLength === 250) return setError("Le commentaire est vide");
        if (replyText.length <= 250) {
            fetch(`http://localhost:3000/api/feedback/reply/${commentId}`, {
                method: "POST",
                body: JSON.stringify({
                    replyText: replyText,
                    repliedTo: commentUserData.email,
                }),
            }).then(() => {
                setReplyText("");
                router.refresh();
                setIsReplyOpen(false);
            });
        }
    }

    return (
        <div className="mb-2">
            <form onSubmit={handleSubmit}>
                <textarea
                    onChange={(e) => handleChange(e)}
                    id="description"
                    value={`${usernameToReplyStr}${replyText}`}
                    className="h-24 bg-gray-100 w-full p-5 pl-6 rounded-lg resize-none focus:outline-none"
                ></textarea>
                {error && (
                    <div className="flex justify-center mt-1 -mb-2">
                        <span className="text-red-600">*{error}</span>
                    </div>
                )}
                <div className="mt-1 flex justify-between">
                    <p className="mt-[6px]">
                        {remainingLength} Caratères restants
                    </p>
                    <div>
                        <button
                            onClick={() => setIsReplyOpen(false)}
                            type="button"
                            className="h-9 p-2 bg-lightDark rounded-xl text-white text-sm"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="ml-2 h-9 p-2 bg-purple rounded-xl text-white text-sm"
                        >
                            Poster
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
