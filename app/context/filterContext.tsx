"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

interface filterType {
    filterOption: string;
    setFilterOption: any;
    chosenCategory: string;
    setChosenCategory: any;
    feedbacks: any;
    setFeedbacks: any;
}

const FilterContext = createContext({} as filterType);

export const FilterProvider = ({ children }: any) => {
    const [filterOption, setFilterOption] = useState<string>("");
    const [chosenCategory, setChosenCategory] = useState<string>("Tout");
    const [feedbacks, setFeedbacks] = useState<any>(null);

    return (
        <FilterContext.Provider
            value={{
                filterOption,
                setFilterOption,
                chosenCategory,
                setChosenCategory,
                feedbacks,
                setFeedbacks,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export default function useFilter() {
    return useContext(FilterContext);
}
