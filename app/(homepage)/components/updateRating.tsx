"use server";
import { IoIosArrowUp } from "react-icons/io";

export default async function UpdateRatingPage({
    feedbackRating,
    feedbackId,
    isVoted,
}: any) {
    async function updateRating() {
        await fetch("http://localhost:3000/api/feedback/rating", {
            method: "POST",
            body: JSON.stringify({
                feedbackId: feedbackId,
                isVoted: isVoted,
            }),
        });
        console.log("omg");
        revalidatePath("/");
    }

    return (
        <form action="updateRating">
            <button
                type="submit"
                className={`flex p-1 pt-1.5 px-4 text-sm rounded-xl w-fit font-semibold cursor-pointer select-none bg-gray-100 ${
                    isVoted ? "text-darkBlue" : "text-lightDark"
                } h-fit pb-2 lg:-mt-[72px] lg:flex-col`}
            >
                <IoIosArrowUp
                    size={15}
                    className="mt-0.5 mr-1 -ml-[2.5px] cursor-pointer lg:ml-[4px] lg:mr-[4px]"
                />
                <p className="text-center">{feedbackRating}</p>
            </button>
        </form>
    );
}
