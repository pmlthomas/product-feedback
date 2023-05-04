import useFilter from "@/app/context/filterContext";
import React, { useEffect, useState } from "react";

export default function Categories() {
    const categories = ["Tout", "UI", "Bug", "Amélioration"];
    const { setChosenCategory } = useFilter();

    const [currentClickedCategory, setCurrentClickedCategory] =
        useState<string>("Tout");
    const [categoriesButtons, setCategoriesButtons] = useState<any>(null);

    function handleCategoryClick(el: string) {
        if (!(el === "Tout" && currentClickedCategory === "Tout")) {
            if (currentClickedCategory === el) {
                setCurrentClickedCategory("Tout");
                setChosenCategory("Tout");
            } else {
                setCurrentClickedCategory(el);
                setChosenCategory(el);
            }
        }
    }

    useEffect(() => {
        setCategoriesButtons(
            categories.map((el, i) => {
                return (
                    <p
                        onClick={() => handleCategoryClick(el)}
                        className={`p-1 px-4 rounded-xl cursor-pointer select-none ${
                            currentClickedCategory === el
                                ? "bg-darkBlue text-white h-fit pb-2 pt-1.5"
                                : "bg-lightGray text-darkBlue h-fit pb-2 pt-1.5"
                        }`}
                        key={i}
                    >
                        {el}
                    </p>
                );
            })
        );
    }, [currentClickedCategory]);

    return (
        <div className="h-14 min-h-[50px] w-screen bg-white flex md:w-64 md:h-[140px] md:rounded-xl">
            <div className="w-screen flex justify-between items-center px-6 text-sm font-semibold md:h-fit md:gap-5 md:flex-wrap md:mt-6">
                {categoriesButtons}
            </div>
        </div>
    );
}
