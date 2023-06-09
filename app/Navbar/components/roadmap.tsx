import React from "react";
import Link from "next/link";

export default function ChangementsNav() {
    return (
        <div className="flex flex-col shrink-0 bg-white h-[95px] px-6 pt-0.5 text-gray-800 md:w-64 md:h-[140px] md:rounded-xl">
            <div className="flex justify-between mb-2 md:mt-[15px] md:mb-6">
                <h1 className="font-semibold">Changements</h1>
                <Link href="/changements" className="text-darkBlue underline">
                    Voir
                </Link>
            </div>
            <div className="flex justify-between text-[0.9em]">
                <div className="flex">
                    <div className="rounded-full w-2 h-2 bg-darkBlue mt-[7px] mr-6"></div>
                    <div>Prévu</div>
                </div>
                <p className="font-bold">2</p>
            </div>
            <div className="flex justify-between text-[0.9em] mt-1 md:mt-2">
                <div className="flex">
                    <div className="rounded-full w-2 h-2 bg-purple mt-[7px] mr-6"></div>
                    <div>En cours</div>
                </div>
                <p className="font-bold">3</p>
            </div>
        </div>
    );
}
