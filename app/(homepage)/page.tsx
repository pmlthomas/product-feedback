import React from "react";
import ClientComponent from "./clientComponent";
import { feedback } from "../types/feedback";

interface comment {
    _count: {
        replies: number;
    };
}

async function getFeedbacks() {
    const data = await fetch("http://localhost:3000/api/feedback", {
        cache: "no-cache",
    })
        .then((req) => req.json())
        .then((res) => res.feedbacks);
    data.map((el: feedback) => {
        el.categoryName = el.category.name;
        el.totalRating = el._count.ratings;
        el.isVoted = el.ratings.some(
            (rating: { authorId: string }) => rating.authorId === el.authorId
        );
        el.commentsLength =
            el._count.comments +
            el.comments
                .map((comment: comment) => comment._count.replies)
                .reduce((a: number, b: number) => a + b, 0);
    });
    return data;
}

export default async function Page() {
    const feedbacks = await getFeedbacks();
    return (
        <>
            <ClientComponent feedbacks={feedbacks} />
        </>
    );
}
