import React from "react";
import { FaComment } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

export default function FeedbackCard() {
    return (
        <div className="p-4 shadow-md rounded-xl h-[175px] w-[95vw] max-w-[800px] bg-white mb-4">
            <h1 className="text-lightDark font-semibold text-sm mb-3">
                Add tags for solution
            </h1>
            <p className="text-lightDark text-sm mb-2 line-clamp-1">
                Easier to search for solutions based on a specific stack.
            </p>
            <p className="p-1 px-4 text-sm rounded-xl w-fit font-semibold cursor-pointer select-none bg-lightGray text-darkBlue h-fit pb-2 mb-3 mt-2 pt-1.5">
                Amélioration
            </p>
            <div className="flex justify-between mr-4">
                <div className="flex p-1 pt-1.5 px-4 text-sm rounded-xl w-fit font-semibold cursor-pointer select-none bg-gray-100 text-darkBlue h-fit pb-2">
                    <IoIosArrowUp
                        size={15}
                        className="mt-0.5 mr-1 -ml-[2.5px] cursor-pointer"
                    />
                    <p>112</p>
                </div>
                <div className="flex mt-[7px]">
                    <FaComment size={20} color="#d1d5db" className="mr-2" />
                    <p className="text-sm font-semibold">4</p>
                </div>
            </div>
        </div>
    );
}
