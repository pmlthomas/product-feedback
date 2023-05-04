"use client";
import { useEffect, useState } from "react";
import useFilter from "../context/filterContext";
import FeedbackCard from "./components/feedbackCard";
import FilterBar from "./components/filterBar/filterBar";

export default function Homepage() {
    const { filterOption, chosenCategory, feedbacks, setFeedbacks } =
        useFilter();
    const [feedbacksMapping, setFeedbacksMapping] = useState<any>(null);

    async function getFeedbacks() {
        const data = await fetch("http://localhost:3000/api/feedback", {
            cache: "no-cache",
        })
            .then((req) => req.json())
            .then((res) => res.feedbacks);
        data.map((el: any) => {
            el.category = el.category.name;
        });
        setFeedbacks(data);
        setFeedbacksMapping(
            data.map((el: any, i: number) => {
                return (
                    <div key={i}>
                        <FeedbackCard data={el} />
                    </div>
                );
            })
        );
    }

    function filterFeedbacks() {
        setFeedbacksMapping(
            feedbacks.map((el: any, i: number) => {
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
            })
        );
    }

    useEffect(() => {
        !feedbacks && getFeedbacks();
    }, []);

    useEffect(() => {
        feedbacks && filterFeedbacks();
    }, [filterOption, chosenCategory]);

    return (
        <div className="flex flex-col items-center lg:mt-4">
            <FilterBar />
            {feedbacksMapping}
        </div>
    );
}
