"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaComment } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { updateRating } from "../../actions/actions";
import { useTransition } from "react";
import { useSession } from "next-auth/react";

export default function RoadmapFeedbackCard({ data }: any) {
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
                pathname === "/changements" &&
                router.push(`/feedback/${data.id}`)
            }
            className="cursor-pointer p-4 pr-8 pb-9 shadow-md bg-white rounded-b-xl"
        >
            <div className="md:ml-4 max-w-fit">
                <div className="flex">
                    {data.roadmapState === "planned" ? (
                        <>
                            <div className="rounded-full w-2 h-2 bg-purple mt-[10px] mr-3"></div>
                            <p className="text-gray-500 text-[0.9rem] mb-2">
                                Prévu
                            </p>
                        </>
                    ) : (
                        <>
                            <div className="rounded-full w-2 h-2 bg-darkBlue mt-[10px] mr-3"></div>
                            <p className="text-gray-500 text-[0.9rem] mb-2">
                                En cours
                            </p>
                        </>
                    )}
                </div>
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
            <div className="flex justify-between mr-4 md:ml-4">
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log(data.id, isVoted, session?.user.email);
                        startTransition(() => {
                            void updateRating(
                                data.id,
                                isVoted,
                                session?.user.email
                            );
                        });
                        router.refresh();
                    }}
                    className={`flex p-1 pt-1.5 px-4 text-sm rounded-xl w-fit font-semibold cursor-pointer select-none bg-gray-100 ${
                        isVoted ? "text-darkBlue" : "text-lightDark"
                    } h-fit pb-2 `}
                >
                    <IoIosArrowUp
                        size={15}
                        className="mt-0.5 mr-1 -ml-[2.5px] cursor-pointer lg:mr-[4px]"
                    />
                    <p className="text-center">{feedbackRating}</p>
                </div>
                <div className="flex mt-[7px] lg:mt-3 md:-mr-2">
                    <FaComment size={20} color="#d1d5db" className="mr-2" />
                    <p className="text-sm font-semibold">
                        {data.comments.length}
                    </p>
                </div>
            </div>
        </div>
    );
}
