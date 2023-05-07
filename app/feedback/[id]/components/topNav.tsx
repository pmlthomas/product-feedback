import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import EditButton from "./editButton";
import Link from "next/link";

interface feedbackId {
    feedbackId: string;
}

export default function TopNav({ feedbackId }: feedbackId) {
    return (
        <div className="flex justify-between mt-4">
            <div className="flex w-fit cursor-pointer mb-6 select-none">
                <IoIosArrowBack size={15} className="mt-[7px] mr-2 " />
                <Link href={"/"}> Revenir en arrière</Link>
            </div>
            <div className="mb-4">
                <Link href={`/modifier/${feedbackId}`}>
                    <EditButton />
                </Link>
            </div>
        </div>
    );
}
