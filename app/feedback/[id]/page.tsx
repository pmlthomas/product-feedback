import React from "react";
import FeedbackCard from "../../(homepage)/components/feedbackCard";
import Comment from "./components/comment";
import TopNav from "./components/topNav";

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
    const feedback = await getFeedback(id);
    console.log(feedback);
    feedback.category = feedback.category.name;
    return (
        <div className="mt-12">
            <TopNav feedbackId={id} />
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

export async function generateStaticParams() {
    const res = await fetch("http://localhost:3000/api/feedback", {
        next: { revalidate: 60 },
    });
    const data = await res.json();
    return data.feedbacks.map((el: { id: string }) => ({
        id: el.id,
    }));
}
