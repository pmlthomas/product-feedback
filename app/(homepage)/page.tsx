"use client";
import React from "react";
import FilterBar from "./components/filterBar/filterBar";
import FeedbackCard from "./components/feedbackCard";

export default function Homepage() {
    return (
        <div>
            <FilterBar />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
        </div>
    );
}
