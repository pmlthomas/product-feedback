"use client";
import React, { createContext, useState, useContext } from "react";

interface filterType {
    filterOption: string;
    setFilterOption: any;
    chosenCategory: string;
    setChosenCategory: any;
}

const FilterContext = createContext({} as filterType);

export const FilterProvider = ({ children }: any) => {
    const [filterOption, setFilterOption] = useState<string>("Plus de votes");
    const [chosenCategory, setChosenCategory] = useState<string>("Tout");

    return (
        <FilterContext.Provider
            value={{
                filterOption,
                setFilterOption,
                chosenCategory,
                setChosenCategory,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export default function useFilter() {
    return useContext(FilterContext);
}
