import React from "react";
import UpdateFeedbackForm from "../components/form";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Link from "next/link";

interface params {
    params: {
        id: string;
    };
}

async function getOldFeedback(id: string) {
    const data = await fetch(`http://localhost:3000/api/feedback/${id}`, {
        cache: "no-cache",
    }).then((res) => res.json());
    return data.feedback;
}

export default async function UpdateFeedbackPage({ params: { id } }: params) {
    const oldFeedback = await getOldFeedback(id);
    oldFeedback.category = oldFeedback.category.name;
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <div className="hidden w-[95vw] max-w-[570px] md:flex justify-start mb-12 -mt-14">
                <Link href={`/feedback/${id}`}>
                    <div className="flex w-fit cursor-pointer">
                        <IoIosArrowBack size={15} className="mt-1 mr-2 " />
                        <p>Revenir en arrière</p>
                    </div>
                </Link>
            </div>
            <div className="w-[95vw] max-w-[570px] h-[680px] md:h-[660px] bg-white px-6 pt-4">
                <div className="-mt-11 h-14 w-14 rounded-full bg-gradient-to-r from-darkBlue to-purple flex justify-center items-center">
                    <p className="text-white text-2xl select-none">
                        <HiOutlinePencilAlt />
                    </p>
                </div>
                <h1 className="text-lightDark font-semibold text-2xl mb-5 mt-6">
                    Modifier la suggestion
                </h1>
                <UpdateFeedbackForm oldFeedback={oldFeedback} id={id} />
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const res = await fetch("http://localhost:3000/api/feedback", {
        next: { revalidate: 60 },
    });
    const data = await res.json();
    return data.feedbacks.map((el: { id: string }) => ({
        id: el.id,
    }));
}
