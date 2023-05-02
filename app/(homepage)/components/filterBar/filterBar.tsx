import React from "react";
import Filter from "./filter";
import AddFeedback from "./addFeedback";
import { TbBulb } from "react-icons/tb";

export default function FilterBar() {
    return (
        <div
            className="
                w-screen h-16 min-h-[60px] bg-lightDark max-w-[800px] flex justify-between items-center px-6 mb-6
                md:w-[95vw] md:rounded-xl md:mt-8"
        >
            <div className="flex -mt-1">
                <TbBulb size={26} color="white" className="-mt-[0.5px] -mr-1" />
                <p className="ml-4 mr-12 hidden lg:block text-lg text-white font-semibold">
                    6 Suggestions
                </p>
                <p className="text-white mr-[7px] hidden md:block mt-0.5">
                    Filtrer par :
                </p>
                <div className="mt-0.5">
                    <Filter />
                </div>
            </div>
            <AddFeedback />
        </div>
    );
}
