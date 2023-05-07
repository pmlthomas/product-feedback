import React from "react";
import TopBar from "./components/topBar";
import RoadmapFeedbackCard from "./components/roadmapFeedbackCard";
import ClientComponent from "./clientComponent";
import { feedback } from "../types/feedback";

async function getFeedbacksByRoadmapState(roadmapState: string) {
    const data = await fetch(
        `http://localhost:3000/api/feedback/roadmap/${roadmapState}`,
        {
            cache: "no-cache",
        }
    )
        .then((req) => req.json())
        .then((res) => res.feedbacks);
    data.map((el: feedback) => {
        el.categoryName = el.category.name;
        el.totalRating = el.ratings.length;
        el.isVoted = el.ratings.some(
            (rating: { authorId: string }) => rating.authorId === el.authorId
        );
    });
    return data;
}

function mapFeedbacks(feedbacks: feedback[]) {
    return feedbacks.map((el: feedback, i: number) => {
        return (
            <div
                key={i}
                className={`${
                    el.roadmapState === "planned"
                        ? "border-purple"
                        : "border-darkBlue"
                } border-t-[6px] rounded-t-sm mb-5 md:transition-transform md:hover:-translate-y-1 md:hover:shadow-xl md:ease-in-out`}
            >
                <RoadmapFeedbackCard data={el} />
            </div>
        );
    });
}

export default async function Changements() {
    const plannedFeedbacks = mapFeedbacks(
        await getFeedbacksByRoadmapState("planned")
    );
    const onDoingFeedbacks = mapFeedbacks(
        await getFeedbacksByRoadmapState("onDoing")
    );

    return (
        <div className="h-fit flex flex-col items-center w-[95vw] max-w-[1200px] mt-4 pb-12">
            <TopBar />
            <ClientComponent
                plannedFeedbacks={plannedFeedbacks}
                onDoingFeedbacks={onDoingFeedbacks}
            />
        </div>
    );
}
