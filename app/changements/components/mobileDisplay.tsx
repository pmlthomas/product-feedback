"use client";
import React, { useState } from "react";
import MobileNav from "./mobileNav";

export default function MobileDisplay({
    plannedFeedbacks,
    onDoingFeedbacks,
}: any) {
    const [roadmapStateDisplayed, setRoadmapStateDisplayed] =
        useState<string>("planned");

    return (
        <div className="flex flex-col items-center">
            <MobileNav
                roadmapStateDisplayed={roadmapStateDisplayed}
                setRoadmapStateDisplayed={setRoadmapStateDisplayed}
                plannedFeedbacks={plannedFeedbacks}
                onDoingFeedbacks={onDoingFeedbacks}
            />
            <div className="w-[90vw]">
                {roadmapStateDisplayed === "planned" ? (
                    <div className="flex flex-col">
                        <h2 className="text-xl">
                            Prévu ({plannedFeedbacks.length})
                        </h2>
                        <p className="text-gray-500 text-lg mb-6">
                            Changement prévu dans le futur
                        </p>
                        {plannedFeedbacks}
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <h2 className="text-xl">
                            En cours ({onDoingFeedbacks.length})
                        </h2>
                        <p className="text-gray-500 text-lg mb-6">
                            Actuellement en cours de changement
                        </p>
                        {onDoingFeedbacks}
                    </div>
                )}
            </div>
        </div>
    );
}
