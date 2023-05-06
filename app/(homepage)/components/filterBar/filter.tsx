import useFilter from "@/app/context/filterContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Filter() {
    const filterOptions = [
        "Plus de votes",
        "Plus de commentaires",
        "Plus récents",
    ];

    const { setFilterOption } = useFilter();
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [currentFilterOption, setCurrentFilterOption] =
        useState<string>("Plus de votes");
    const filterRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    function handleClickOnFilterOption(el: any) {
        setCurrentFilterOption(el);
        setIsFilterOpen(false);
        setFilterOption(el);
        // router.push(route);
    }

    // Closing filter When clicking outside of it
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [filterRef]);

    function handleClickOutside(e: any) {
        if (filterRef.current && !filterRef.current.contains(e.target)) {
            setIsFilterOpen(false);
        }
    }

    const filterOptionsMapping = filterOptions.map((el, i) => {
        if (currentFilterOption !== el) {
            return (
                <p
                    onClick={() => handleClickOnFilterOption(el)}
                    key={i}
                    className="pt-1 pb-2"
                >
                    {el}
                </p>
            );
        }
    });

    return (
        <div ref={filterRef} className="flex flex-col text-white ml-3 md:m-0">
            <div className="flex">
                <p
                    onClick={() => {
                        setIsFilterOpen(!isFilterOpen);
                    }}
                    className="cursor-pointer"
                >
                    {currentFilterOption}
                </p>
                {isFilterOpen ? (
                    <IoIosArrowUp
                        onClick={() => {
                            setIsFilterOpen(false);
                        }}
                        size={17}
                        className="mt-1 ml-[5px] cursor-pointer"
                    />
                ) : (
                    <IoIosArrowDown
                        onClick={() => {
                            setIsFilterOpen(true);
                        }}
                        size={17}
                        className="mt-1 ml-[5px] cursor-pointer"
                    />
                )}
            </div>
            {isFilterOpen && (
                <div className="w-[200px] absolute z-10 -ml-3 p-3 pb-1 mt-5 bg-lightDark cursor-pointer rounded-xl">
                    {filterOptionsMapping}
                </div>
            )}
        </div>
    );
}
