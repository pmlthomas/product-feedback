import React from "react";
import Homepage from "./feedbacksDisplay";

async function getFeedbacks() {
    const data = await fetch("http://localhost:3000/api/feedback")
        .then((req) => req.json())
        .then((res) => res.feedbacks);
    data.map((el: any) => {
        el.category = el.category.name;
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
