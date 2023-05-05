"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import userImage from "../../../../public/images/blank_profile_img.webp";
import ReplyToComment from "./replyToComment";

export default function Comment({ data, feedbackId }: any) {
    const [isReplyOpen, setIsReplyOpen] = useState<boolean>(false);

    function handleReply() {
        setIsReplyOpen(true);
    }

    return (
        <>
            <div className="flex mt-9">
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
                    onClick={() => handleReply()}
                    className="mr-2 mt-2.5 h-fit text-darkBlue font-semibold text-sm select-none cursor-pointer"
                >
                    Répondre
                </p>
            </div>
            <p
                className={`mt-4 text-gray-500 ml-[70px] ${
                    data.isLastOne && "mb-5"
                }`}
            >
                {data.commentText}
            </p>
            <div
                className={`${
                    isReplyOpen
                        ? "clip-path-bottom h-full"
                        : "clip-path-top h-0"
                } w-full transition-all duration-[400ms] ease-in-out`}
            >
                <ReplyToComment
                    usernameToReply={`@${data.author.username}`}
                    feedbackId={feedbackId}
                    setIsReplyOpen={setIsReplyOpen}
                />
            </div>
            {!data.isLastOne && <hr className="mt-10" />}
        </>
    );
}
