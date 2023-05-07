import React from "react";
import ClientComponent from "./clientComponent";

async function getFeedbacks() {
    const data = await fetch("http://localhost:3000/api/feedback", {
        cache: "no-cache",
    })
        .then((req) => req.json())
        .then((res) => res.feedbacks);
    data.map((el: any) => {
        el.category = el.category.name;
        el.totalRating = el._count.ratings;
        el.isVoted = el.ratings.some(
            (rating: any) => rating.authorId === el.authorId
        );
        el.commentsLength =
            el._count.comments +
            el.comments
                .map((comment: any) => comment._count.replies)
                .reduce((a: any, b: any) => a + b, 0);
    });
    console.log(data);
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
