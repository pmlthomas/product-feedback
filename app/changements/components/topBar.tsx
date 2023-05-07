"use client";
import AddFeedback from "@/app/(homepage)/components/filterBar/addFeedback";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function TopBar() {
    const router = useRouter();
    return (
        <div
            className="
                    w-full h-[90px] min-h-[90px] bg-lightDark flex justify-between items-center px-6 mb-6
                    md:rounded-xl md:mt-8"
        >
            <div className="flex flex-col">
                <div
                    onClick={() => router.back()}
                    className="flex cursor-pointer text-white"
                >
                    <IoIosArrowBack size={13} className="mt-[4px] mr-1.5" />
                    <p className="text-sm">Revenir en arrière</p>
                </div>
                <h1 className="text-[1.35rem] text-white mt-1 ml-0.5">
                    Changements
                </h1>
            </div>
            <AddFeedback />
        </div>
    );
}
