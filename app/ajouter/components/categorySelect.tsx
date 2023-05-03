import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface categorySelect {
    handleClickOnCategory: (category: string) => void;
    currentCategory: string;
    isFilterOpen: boolean;
    setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CategorySelect({
    handleClickOnCategory,
    currentCategory,
    isFilterOpen,
    setIsFilterOpen,
}: categorySelect) {
    const categories = ["UI", "Bug", "Amélioration"];

    const categoriesMapping = categories.map((el, i) => {
        if (currentCategory !== el) {
            return (
                <p
                    onClick={() => handleClickOnCategory(el)}
                    key={i}
                    className="pb-2 ml-1"
                >
                    {el}
                </p>
            );
        }
    });

    return (
        <div
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex flex-col text-lightDark bg-gray-200 h-12"
        >
            <div className="flex justify-between">
                <p className="cursor-pointer ml-4 mt-3">{currentCategory}</p>
                {isFilterOpen ? (
                    <IoIosArrowUp
                        size={17}
                        className="mt-4 mr-4 cursor-pointer"
                    />
                ) : (
                    <IoIosArrowDown
                        size={17}
                        className="mt-4 mr-4 cursor-pointer"
                    />
                )}
            </div>
            {isFilterOpen && (
                <div className="w-[502px] absolute p-3 pb-1 mt-12 bg-gray-300 cursor-pointer">
                    <div className="-mt-2">{categoriesMapping}</div>
                </div>
            )}
        </div>
    );
}
