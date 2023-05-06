import React from "react";
import FeedbackCard from "./components/feedbackCard";

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

export default async function ReadFromDbComponent() {
    const feedbacks = await getFeedbacks();
    console.log("omg", feedbacks);
    return { feedbacks };
}
