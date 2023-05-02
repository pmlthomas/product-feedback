import React, { useEffect, useState } from "react";

export default function Categories() {
    const categories = ["Tout", "UI", "Bug", "Amélioration"];
    const [currentClickedCategory, setCurrentClickedCategory] =
        useState<string>("");
    const [categoriesButtons, setCategoriesButtons] = useState<any>(null);

    useEffect(() => {
        setCategoriesButtons(
            categories.map((el, i) => {
                return (
                    <p
                        onClick={() => setCurrentClickedCategory(el)}
                        className={`p-1 px-4 rounded-xl cursor-pointer select-none ${
                            currentClickedCategory === el
                                ? "bg-darkBlue text-white h-fit pb-2"
                                : "bg-gray-100 text-darkBlue h-fit pb-2"
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
        <div className="h-14 min-h-[50px] w-screen bg-white flex">
            <div className="w-screen flex justify-between items-center px-6">
                {categoriesButtons}
            </div>
        </div>
    );
}
