import React from "react";
import Homepage from "./feedbacksDisplay";

async function getFeedbacks() {
    const data = await fetch("http://localhost:3000/api/feedback", {
        cache: "no-cache",
    })
        .then((req) => req.json())
        .then((res) => res.feedbacks);
    data.map((el: any) => {
        el.category = el.category.name;
        el.totalRating = el.ratings.length;
    });
    return data;
}

export default async function GetFeedbacks() {
    const feedbacks = await getFeedbacks();
    return (
        <>
            <Homepage feedbacks={feedbacks} />
        </>
    );
}
