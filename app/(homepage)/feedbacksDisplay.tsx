"use client";
import { useEffect, useState } from "react";
import useFilter from "../context/filterContext";
import FeedbackCard from "./components/feedbackCard";
import FilterBar from "./components/filterBar/filterBar";
import { Pagination } from "@mantine/core";

export default function Homepage({ feedbacks }: any) {
    const { filterOption, chosenCategory } = useFilter();
    const [feedbacksDisplay, setFeedbacksDisplay] = useState<any>(null);
    const [activePage, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const perPage = 2;

    function paginate(content: any[], page_size: number, page_number: number) {
        if (content.length >= 2) {
            return content.slice(
                (page_number - 1) * page_size,
                page_number * page_size
            );
        } else {
            return content;
        }
    }

    function mapFeedbacks(feedbacks: any) {
        return feedbacks.map((el: any, i: number) => {
            return (
                <div key={i}>
                    <FeedbackCard data={el} />
                </div>
            );
        });
    }

    function filterBarFilter(feedbacks: any) {
        switch (filterOption) {
            case "Plus de votes":
                return feedbacks.sort(function (a: any, b: any) {
                    return a.totalRating < b.totalRating;
                });
            case "Plus de commentaires":
                return feedbacks.sort(function (a: any, b: any) {
                    return a.comments.length < b.comments.length;
                });
            case "Plus récents":
                return feedbacks.sort(function (a: any, b: any) {
                    return a.createdAt < b.createdAt;
                });
        }
    }

    function categoryFilter(feedbacks: any) {
        return feedbacks
            .map((el: any) => {
                if (chosenCategory === "Tout") {
                    return el;
                } else {
                    if (el.category === chosenCategory) {
                        return el;
                    }
                }
            })
            .filter((el: any) => el !== undefined);
    }

    function handleFeedbacksDisplay(feedbacks: any) {
        const filteredFeedbacks = filterBarFilter(categoryFilter(feedbacks));
        setTotalPages(Math.ceil(filteredFeedbacks.length / perPage));
        setFeedbacksDisplay(
            paginate(mapFeedbacks(filteredFeedbacks), perPage, activePage)
        );
    }

    useEffect(() => {
        handleFeedbacksDisplay(feedbacks);
    }, [filterOption, chosenCategory, activePage]);

    useEffect(() => {
        setPage(1);
    }, [filterOption, chosenCategory]);

    return (
        <div className="flex flex-col items-center lg:mt-4">
            <FilterBar />
            {feedbacksDisplay}
            <Pagination
                value={activePage}
                onChange={setPage}
                total={totalPages}
                color="dark"
            />
        </div>
    );
}
