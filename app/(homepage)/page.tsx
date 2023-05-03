import React from "react";
import FilterBar from "./components/filterBar/filterBar";
import FeedbackCard from "./components/feedbackCard";

async function getFeedbacks() {
    const req = await fetch("http://localhost:3000/api/feedback");
    const res = await req.json();
    return res.feedbacks;
}

export default async function Homepage() {
    const feedbacks = await getFeedbacks();
    const feedbacksMapping = feedbacks.map((el: any, i: number) => {
        return (
            <div key={i}>
                <FeedbackCard data={el} />
            </div>
        );
    });

    return (
        <div className="flex flex-col items-center lg:mt-4">
            <FilterBar />
            {feedbacksMapping}
        </div>
    );
}
