"use client";
import React, { useEffect, useState } from "react";
import FilterBar from "./components/filterBar/filterBar";
import { Pagination } from "@mantine/core";
import useFilter from "../context/filterContext";
import FeedbackCard from "../components/feedbackCard";
import { feedback, feedbacksData } from "../types/feedback";

export default function ClientComponent({ feedbacks }: feedbacksData) {
    const { filterOption, chosenCategory } = useFilter();
    const [feedbacksDisplay, setFeedbacksDisplay] = useState<any>(null);
    const [activePage, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const perPage = 3;

    function paginate(
        content: feedback[],
        page_size: number,
        page_number: number
    ) {
        if (content.length >= 2) {
            return content.slice(
                (page_number - 1) * page_size,
                page_number * page_size
            );
        } else {
            return content;
        }
    }

    function mapFeedbacks(feedbacks: feedback[]) {
        return feedbacks.map((el: feedback, i: number) => {
            return (
                <div key={i}>
                    <FeedbackCard data={el} />
                </div>
            );
        });
    }

    function filterFeedbacks(feedbacks: feedback[]) {
        // Category filter
        let filteredFeedbacks = feedbacks;
        if (chosenCategory !== "Tout" && feedbacks) {
            filteredFeedbacks = feedbacks
                .map((el: feedback) => {
                    if (el.categoryName === chosenCategory) {
                        return el;
                    }
                })
                .filter((el: feedback | undefined) => el !== undefined);
        }
        // FilterBar filter
        switch (filterOption) {
            case "Plus de votes":
                return (filteredFeedbacks = filteredFeedbacks.sort(function (
                    a: feedback,
                    b: feedback
                ) {
                    return a.totalRating < b.totalRating;
                }));
            case "Plus de commentaires":
                return (filteredFeedbacks = filteredFeedbacks.sort(function (
                    a: feedback,
                    b: feedback
                ) {
                    return a.comments.length < b.comments.length;
                }));
            case "Plus récents":
                return (filteredFeedbacks = filteredFeedbacks.sort(function (
                    a: feedback,
                    b: feedback
                ) {
                    return a.createdAt < b.createdAt;
                }));
        }
    }

    function displayFeedbacks(feedbacks: feedback[]) {
        const filteredFeedbacks = filterFeedbacks(feedbacks);
        // console.log(filteredFeedbacks);
        setTotalPages(Math.ceil(filteredFeedbacks.length / perPage));
        setFeedbacksDisplay(
            mapFeedbacks(paginate(filteredFeedbacks, perPage, activePage))
        );
    }

    useEffect(() => {
        displayFeedbacks(feedbacks);
    }, [feedbacks]);

    useEffect(() => {
        displayFeedbacks(feedbacks);
    }, [filterOption, chosenCategory, activePage]);

    useEffect(() => {
        setPage(1);
    }, [filterOption, chosenCategory]);

    return (
        <div className="flex flex-col items-center lg:mt-4 h-fit">
            <FilterBar />
            {feedbacksDisplay}
            <div className="mt-2 mb-14">
                <Pagination
                    value={activePage}
                    onChange={setPage}
                    total={totalPages}
                    color="dark"
                />
            </div>
        </div>
    );
}
