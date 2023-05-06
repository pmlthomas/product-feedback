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
        el.totalRating = el.ratings.length;
        el.isVoted = el.ratings.some(
            (rating: any) => rating.authorId === el.authorId
        );
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
