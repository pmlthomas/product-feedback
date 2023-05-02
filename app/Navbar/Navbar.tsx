import React, { useState } from "react";
import AuthBoard from "./authBoard";
import Categories from "./categories";
import Roadmap from "./roadmap";

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
