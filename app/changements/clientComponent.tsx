"use client";
import React from "react";
import MobileDisplay from "./components/mobileDisplay";
import TabletAndPcDisplay from "./components/tabletAndPcDisplay";

interface clientComponent {
    plannedFeedbacks: any[];
    onDoingFeedbacks: any[];
}

export default function ClientComponent({
    plannedFeedbacks,
    onDoingFeedbacks,
}: clientComponent) {
    return (
        <>
            <div className="hidden md:block">
                <TabletAndPcDisplay
                    plannedFeedbacks={plannedFeedbacks}
                    onDoingFeedbacks={onDoingFeedbacks}
                />
            </div>
            <div className="block md:hidden">
                <MobileDisplay
                    plannedFeedbacks={plannedFeedbacks}
                    onDoingFeedbacks={onDoingFeedbacks}
                />
            </div>
        </>
    );
}
