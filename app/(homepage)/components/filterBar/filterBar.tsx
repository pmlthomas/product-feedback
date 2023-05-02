import React from "react";
import Filter from "./filter";
import AddFeedback from "./addFeedback";

export default function FilterBar() {
    return (
        <div
            className="
                w-screen h-16 bg-lightDark max-w-[800px] flex justify-between items-center px-6 mb-6
                md:w-[95vw] md:rounded-xl md:mt-8"
        >
            <div className="flex -mt-1">
                <h1 className="text-white mr-[7px] hidden md:block">
                    Filtrer par :
                </h1>
                <div>
                    <Filter />
                </div>
            </div>
            <AddFeedback />
        </div>
    );
}
