import React, { useState } from "react";
import AuthBoard from "./components/authBoard";
import Categories from "./components/categories";
import Roadmap from "./components/roadmap";

export default function Navbar() {
    const [isPhoneNavOpen, setIsPhoneNavOpen] = useState<boolean>(false);
    return (
        <div className="flex flex-col">
            <AuthBoard
                isPhoneNavOpen={isPhoneNavOpen}
                setIsPhoneNavOpen={setIsPhoneNavOpen}
            />
            {isPhoneNavOpen && (
                <>
                    <Categories />
                    <Roadmap />
                </>
            )}
        </div>
    );
}
