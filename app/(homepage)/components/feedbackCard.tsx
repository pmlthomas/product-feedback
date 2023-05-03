"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaComment } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

export default function FeedbackCard({ data }: any) {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/feedback/${data.id}`)}
            className="p-4 shadow-md rounded-xl h-[175px] w-[95vw] max-w-[800px] bg-white mb-4 md:transition-transform md:hover:-translate-y-1 md:hover:shadow-xl md:ease-in-out"
        >
            <div className="md:ml-4 lg:ml-24 lg:mt-5">
                <h1 className="text-lightDark font-semibold text-sm mb-3">
                    {data.title}
                </h1>
                <p className="text-lightDark text-sm mb-2 line-clamp-1">
                    {data.description}
                </p>
                <p className="p-1 px-4 text-sm rounded-xl w-fit font-semibold cursor-pointer select-none bg-lightGray text-darkBlue h-fit pb-2 mb-3 mt-2 pt-1.5">
                    {data.category}
                </p>
            </div>
            <div className="flex justify-between mr-4 md:ml-4 lg:ml-4 lg:-mt-7">
                <div className="flex p-1 pt-1.5 px-4 text-sm rounded-xl w-fit font-semibold cursor-pointer select-none bg-gray-100 text-darkBlue h-fit pb-2 lg:-mt-[72px] lg:flex-col">
                    <IoIosArrowUp
                        size={15}
                        className="mt-0.5 mr-1 -ml-[2.5px] cursor-pointer lg:ml-[4px] lg:mr-[4px]"
                    />
                    <p>112</p>
                </div>
                <div className="flex mt-[7px] lg:mt-3">
                    <FaComment size={20} color="#d1d5db" className="mr-2" />
                    <p className="text-sm font-semibold">4</p>
                </div>
            </div>
        </div>
    );
}
