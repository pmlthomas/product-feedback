"use client";
import { useEffect, useState } from "react";
import useFilter from "../context/filterContext";
import FeedbackCard from "./components/feedbackCard";
import FilterBar from "./components/filterBar/filterBar";

export default function Homepage({ feedbacks }: any) {
    const { filterOption, chosenCategory } = useFilter();
    const [feedbacksMapping, setFeedbacksMapping] = useState<any>(null);

    function mapFeedbacks(feedbacks: any) {
        return feedbacks.map((el: any, i: number) => {
            if (chosenCategory === "Tout") {
                return (
                    <div key={i}>
                        <FeedbackCard data={el} />
                    </div>
                );
            } else {
                if (el.category === chosenCategory) {
                    return (
                        <div key={i}>
                            <FeedbackCard data={el} />
                        </div>
                    );
                }
            }
        });
    }

    function displayFeedbacks() {
        switch (filterOption) {
            case "mostVoted":
                return setFeedbacksMapping(
                    mapFeedbacks(
                        feedbacks.sort(function (a: any, b: any) {
                            return a.totalRating < b.totalRating;
                        })
                    )
                );
        }
    }

    useEffect(() => {
        displayFeedbacks();
    }, [filterOption, chosenCategory]);

    return (
        <div className="flex flex-col items-center lg:mt-4">
            <FilterBar />
            {feedbacksMapping}
        </div>
    );
}
