import React, { useEffect, useState } from "react";
import AuthBoard from "./components/authBoard";
import Categories from "./components/categories";
import Roadmap from "./components/roadmap";

export default function Navbar() {
    const [isPhoneNavOpen, setIsPhoneNavOpen] = useState<boolean>(false);
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    // Breakpoint Using JavaScript
    useEffect(() => {
        window.addEventListener("resize", function () {
            setScreenWidth(window.innerWidth);
        });
    }, []);

    return (
        <div
            className="flex flex-col 
                        md:flex-row md:mt-10 md:justify-center md:gap-4 md:max-w-[800px] md:w-[95vw] 
                        lg:flex-col lg:w-fit lg:justify-start lg:mt-12 lg:mr-8 lg:gap-8
            "
        >
            <AuthBoard
                isPhoneNavOpen={isPhoneNavOpen}
                setIsPhoneNavOpen={setIsPhoneNavOpen}
            />
            {screenWidth > 804 ? (
                <>
                    <Categories />
                    <Roadmap />
                </>
            ) : (
                isPhoneNavOpen && (
                    <>
                        <Categories />
                        <Roadmap />
                    </>
                )
            )}
        </div>
    );
}
