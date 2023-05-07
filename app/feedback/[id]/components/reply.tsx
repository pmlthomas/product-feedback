"use client";
import React from "react";
import Image from "next/image";
import userImage from "../../../../public/images/blank_profile_img.webp";
import { reply } from "@/app/types/reply";

interface replyData {
    data: reply;
}

export default function Reply({ data }: replyData) {
    return (
        <div className="flex flex-col mt-3 ml-12">
            <div className="flex">
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
            </div>
            <div className="flex ml-[70px] mb-4">
                <p className="text-purple mr-1.5">@{data.repliedTo.username}</p>
                <p className="text-gray-500">{data.replyText}</p>
            </div>
        </div>
    );
}
