import React from "react";
import TopBar from "./components/topBar";
import FeedbackCard from "../components/feedbackCard";
import RoadmapFeedbackCard from "./components/roadmapFeedbackCard";

async function getFeedbacksByRoadmapState(roadmapState: String) {
    const data = await fetch(
        `http://localhost:3000/api/feedback/roadmap/${roadmapState}`,
        {
            cache: "no-cache",
        }
    )
        .then((req) => req.json())
        .then((res) => res.feedbacks);
    data.map((el: any) => {
        el.category = el.category.name;
        el.totalRating = el.ratings.length;
        el.isVoted = el.ratings.some(
            (rating: any) => rating.authorId === el.authorId
        );
    });
    console.log(data);
    return data;
}

function mapFeedbacks(feedbacks: any) {
    return feedbacks.map((el: any, i: number) => {
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                <div className="flex flex-col">
                    <h2 className="text-lg">
                        Prévu ({plannedFeedbacks.length})
                    </h2>
                    <p className="text-gray-500 text-[1rem] mb-6">
                        Changement prévu dans le futur
                    </p>
                    {plannedFeedbacks}
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg">
                        En cours ({onDoingFeedbacks.length})
                    </h2>
                    <p className="text-gray-500 text-[1rem] mb-6">
                        Actuellement en cours de changement
                    </p>
                    {onDoingFeedbacks}
                </div>
            </div>
        </div>
    );
}
