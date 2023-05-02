import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Filter() {
    const filterOptions = [
        "Plus de votes",
        "Plus de commentaires",
        "Plus récents",
    ];

    const [currentFilterOption, setCurrentFilterOption] =
        useState<string>("Plus de votes");
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    function handleClickOnFilterOption(el: string) {
        setCurrentFilterOption(el);
        setIsFilterOpen(false);
    }

    const filterOptionsMapping = filterOptions.map((el, i) => {
        if (currentFilterOption !== el) {
            return (
                <p
                    onClick={() => handleClickOnFilterOption(el)}
                    key={i}
                    className="pb-2"
                >
                    {el}
                </p>
            );
        }
    });

    return (
        <div className="flex flex-col text-white">
            <div className="flex">
                <p
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="cursor-pointer"
                >
                    {currentFilterOption}
                </p>
                <IoIosArrowDown
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    size={17}
                    className="mt-1 ml-1 cursor-pointer"
                />
            </div>
            {isFilterOpen && (
                <div className="w-[195px] absolute -ml-3 p-3 pb-1 mt-5 bg-lightDark cursor-pointer">
                    {filterOptionsMapping}
                </div>
            )}
        </div>
    );
}
