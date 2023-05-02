"use client";
import React from "react";
import FilterBar from "./components/filterBar/filterBar";
import FeedbackCard from "./components/feedbackCard";

export default function Homepage() {
    return (
        <div className="flex flex-col items-center lg:mt-4">
            <FilterBar />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
        </div>
    );
}
