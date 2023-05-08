"use client";
import Image from "next/image";
import React, { useState } from "react";
import userImage from "../../../../public/images/blank_profile_img.webp";
import ReplyToComment from "./replyToComment";
import Reply from "./reply";
import { comment } from "@/app/types/comment";
import { reply } from "@/app/types/reply";

interface commentData {
    data: comment;
}

export default function Comment({ data }: commentData) {
    const [isReplyOpen, setIsReplyOpen] = useState<boolean>(false);

    const repliesMapping = data.replies.map((reply: reply, i: number) => {
        if (i === data.replies.length - 1) reply.isLastOne = true;
        return (
            <div key={i}>
                <Reply data={reply} />
            </div>
        );
    });

    return (
        <>
            <div className="relative">
                <div
                    className={`flex flex-col ${
                        data.replies.length > 0 &&
                        "absolute border-l-2 border-gray-200 h-full top-[70px] left-7"
                    }`}
                ></div>
                <div className="flex mt-9 px-2">
                    <Image
                        height={45}
                        width={45}
                        src={userImage}
                        alt="userImage"
                        className="rounded-full max-h-[45px] mt-[5px]"
                    />
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
                        className="mr-2 mt-2.5 h-fit text-darkBlue font-semibold text-sm select-none cursor-pointer"
                    >
                        Répondre
                    </p>
                </div>
                <div
                    className={`relative mt-3 ml-[70px] ${
                        data.isLastOne ? "mb-4" : "mb-4"
                    }`}
                >
                    {/* {data.replies.length > 0 && (
                        <div className="absolute border-l-2 border-gray-200 left-[-42px] h-full top-2"></div>
                    )} */}
                    <p className="text-gray-500">{data.commentText}</p>
                </div>
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
                    commentId={data.id}
                    setIsReplyOpen={setIsReplyOpen}
                />
            </div>
            {repliesMapping}
            {!data.isLastOne && <hr className="mt-5" />}
        </>
    );
}
