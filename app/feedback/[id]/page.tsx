import React from "react";
import FeedbackCard from "../../(homepage)/components/feedbackCard";
import Comment from "./components/comment";
import TopNav from "./components/topNav";
import AddComment from "./addComment";

interface params {
    params: {
        id: string;
    };
}

async function getFeedback(id: string) {
    const feedback = await fetch(`http://localhost:3000/api/feedback/${id}`, {
        cache: "no-cache",
    })
        .then((req) => req.json())
        .then((res) => res.feedback);

    feedback.category = feedback.category.name;
    feedback.totalRating = feedback.ratings.length;

    return feedback;
}

export default async function Feedback({ params: { id } }: params) {
    const feedback = await getFeedback(id);
    const commentsDisplay = feedback.comments.map((comment: any, i: number) => {
        i === feedback.comments.length - 1 &&
            console.log("last one", comment.commentText);
        return (
            <div key={i}>
                <Comment data={comment} />
            </div>
        );
    });
    return (
        <div className="mt-12">
            <TopNav feedbackId={id} />
            <div className="mt-2 mb-24">
                <FeedbackCard data={feedback} />
                {feedback.comments.length > 0 && (
                    <div className="flex flex-col p-6 pl-8 shadow-md rounded-xl w-[95vw] max-w-[800px] bg-white mt-6 md:transition-transform md:hover:-translate-y-1 md:hover:shadow-xl md:ease-in-out">
                        <h1 className="text-lg text-lightDark font-semibold">
                            {feedback.comments.length} Commentaire
                            {feedback.comments.length > 1 && "s"}
                        </h1>
                        {commentsDisplay}
                    </div>
                )}
                <div className="mt-5">
                    <AddComment feedbackId={id} />
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
