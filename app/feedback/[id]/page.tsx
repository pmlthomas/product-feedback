"use client";
import React from "react";
import FeedbackCard from "../../(homepage)/components/feedbackCard";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import EditButton from "./components/editButton";
import Comment from "./components/comment";

interface params {
    params: {
        id: string;
    };
}

async function getFeedback(id: string) {
    const data = await fetch(`http://localhost:3000/api/feedback/${id}`, {
        cache: "no-cache",
    }).then((res) => res.json());
    return data.feedback;
}

export default async function Feedback({ params: { id } }: params) {
    const router = useRouter();
    const feedback = await getFeedback(id);
    feedback.category = feedback.category.name;
    return (
        <div className="mt-12">
            <div className="flex justify-between mt-4">
                <div
                    onClick={() => feedback && router.push("/")}
                    className="flex w-fit cursor-pointer mb-6 select-none"
                >
                    <IoIosArrowBack size={15} className="mt-1 mr-2 " />
                    <p>Revenir en arrière</p>
                </div>
                <div
                    onClick={() => router.push(`/modifier/${feedback.id}`)}
                    className="mb-4"
                >
                    <EditButton />
                </div>
            </div>
            <div className="mt-2 mb-12">
                <FeedbackCard data={feedback} />
                <div className="flex flex-col p-6 pl-8 shadow-md rounded-xl w-[95vw] max-w-[800px] bg-white mt-6 md:transition-transform md:hover:-translate-y-1 md:hover:shadow-xl md:ease-in-out">
                    <h1 className="text-lg text-lightDark font-semibold">
                        4 Commentaires
                    </h1>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
        </div>
    );
}
