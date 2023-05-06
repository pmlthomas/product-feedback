"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaComment } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { updateRating } from "../actions";
import { useTransition } from "react";
import { useSession } from "next-auth/react";

export default function FeedbackCard({ data }: any) {
    const router = useRouter();
    const pathname = usePathname();
    const [isVoted, setIsVoted] = useState<boolean>(false);
    const [feedbackRating, setFeedbackRating] = useState<number>(0);
    let [isPending, startTransition] = useTransition();
    const { data: session } = useSession();

    useEffect(() => {
        setFeedbackRating(data.totalRating);
        setIsVoted(data.isVoted);
    }, [data]);

    return (
        <div
            onClick={() =>
                pathname === "/" && router.push(`/feedback/${data.id}`)
            }
            className="cursor-pointer p-4 shadow-md rounded-xl h-[175px] w-[95vw] max-w-[800px] bg-white mb-4 md:transition-transform md:hover:-translate-y-1 md:hover:shadow-xl md:ease-in-out"
        >
            <div className="md:ml-4 lg:ml-24 lg:mt-5">
                <h1 className="text-lightDark font-semibold text-lg mb-1">
                    {data.title}
                </h1>
                <p className="text-lightDark text-sm mb-4 line-clamp-1">
                    {data.description}
                </p>
                <p className="p-1 px-4 text-sm rounded-xl w-fit font-semibold cursor-pointer select-none bg-lightGray text-darkBlue h-fit pb-2 mb-3 pt-1.5">
                    {data.category}
                </p>
            </div>
            <div className="flex justify-between mr-4 md:ml-3 lg:ml-4 lg:-mt-10">
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        startTransition(
                            () =>
                                void updateRating(
                                    data.id,
                                    isVoted,
                                    session?.user.email
                                )
                        );
                        router.refresh();
                    }}
                    className={`flex p-1 pt-1.5 px-4 text-sm rounded-xl w-fit font-semibold cursor-pointer select-none bg-gray-100 ${
                        isVoted ? "text-darkBlue" : "text-lightDark"
                    } h-fit pb-2 lg:-mt-[72px] lg:flex-col`}
                >
                    <IoIosArrowUp
                        size={15}
                        className="mt-0.5 mr-1 -ml-[2.5px] cursor-pointer lg:ml-[4px] lg:mr-[4px]"
                    />
                    <p className="text-center">{feedbackRating}</p>
                </div>
                <div className="flex mt-[7px] lg:mt-3">
                    <FaComment size={20} color="#d1d5db" className="mr-2" />
                    <p className="text-sm font-semibold">
                        {data.comments.length}
                    </p>
                </div>
            </div>
        </div>
    );
}
