"use client";
import React, { useState } from "react";
import Image from "next/image";
import userImage from "../../../../public/images/blank_profile_img.webp";
import { reply } from "@/app/types/reply";
import ReplyToComment from "./replyToComment";

interface replyData {
    data: reply;
    commentId: string;
}

export default function Reply({ data, commentId }: replyData) {
    const [isReplyOpen, setIsReplyOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-col pt-3 ml-[28px] pl-12 relative">
            <div
                className={`absolute left-0 border-l-2 ${
                    !data.isLastOne &&
                    !isReplyOpen &&
                    "border-gray-200 h-full top-[42px]"
                }`}
            ></div>
            <div className="flex">
                <Image
                    height={45}
                    width={45}
                    src={userImage}
                    alt="userImage"
                    className="rounded-full max-h-[45px] mt-[5px]"
                />
                <div className="flex justify-between w-full">
                    <div className="flex flex-col ml-6 w-full">
                        <p className="text-lightDark font-semibold">
                            {data.author.name}
                        </p>
                        <p className="text-gray-500 text-sm">
                            @{data.author.username}
                        </p>
                    </div>
                    <p
                        onClick={() => setIsReplyOpen(!isReplyOpen)}
                        className="mr-[17px] mt-[1px] h-fit text-darkBlue font-semibold text-sm select-none cursor-pointer"
                    >
                        Répondre
                    </p>
                </div>
            </div>
            <div className="flex ml-[70px] mb-4 mt-2">
                <p className="text-purple mr-1.5">@{data.repliedTo.username}</p>
                <p className="text-gray-500 break-words pr-3">
                    {data.replyText}
                </p>
            </div>
            <div
                className={`${
                    isReplyOpen
                        ? "clip-path-bottom h-full"
                        : "clip-path-top h-0"
                } w-full transition-all duration-[400ms] ease-in-out`}
            >
                <ReplyToComment
                    commentUserData={data.author}
                    commentId={commentId}
                    setIsReplyOpen={setIsReplyOpen}
                />
            </div>
        </div>
    );
}
