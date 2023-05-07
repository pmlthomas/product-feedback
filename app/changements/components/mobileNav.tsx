"use client";
import { feedback } from "@/app/types/feedback";
import React from "react";

interface mobileNav {
    roadmapStateDisplayed: string;
    setRoadmapStateDisplayed: any;
    plannedFeedbacks: any[];
    onDoingFeedbacks: any[];
}

export default function MobileNav({
    roadmapStateDisplayed,
    setRoadmapStateDisplayed,
    plannedFeedbacks,
    onDoingFeedbacks,
}: mobileNav) {
    return (
        <div className="w-screen mb-7 flex justify-around bg-white h-16 -mt-6 cursor-pointer">
            <div
                onClick={() => setRoadmapStateDisplayed("planned")}
                className={`w-1/2 flex justify-center items-center -mt-[2px] ${
                    roadmapStateDisplayed === "planned" &&
                    "border-purple border-b-4"
                }`}
            >
                <h2 className="text-lg">Prévu ({plannedFeedbacks.length})</h2>
            </div>
            <div
                onClick={() => setRoadmapStateDisplayed("onDoing")}
                className={`w-1/2 flex justify-center items-center -mt-[2px] ${
                    roadmapStateDisplayed === "onDoing" &&
                    "border-darkBlue border-b-4"
                }`}
            >
                <h2 className="text-lg">
                    En cours ({onDoingFeedbacks.length})
                </h2>
            </div>
        </div>
    );
}
