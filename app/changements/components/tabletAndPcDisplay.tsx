import React from "react";

export default function TabletAndPcDisplay({
    plannedFeedbacks,
    onDoingFeedbacks,
}: any) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            <div className="flex flex-col">
                <h2 className="text-lg">Prévu ({plannedFeedbacks.length})</h2>
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
    );
}
