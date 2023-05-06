import "./../../globals.css";
import React, { ReactNode } from "react";
import Providers from "../../providers";

export default function FeedbackLayout({ children }: { children: ReactNode }) {
    return (
        <html className="h-screen w-screen bg-gray-100 font-poppins">
            <body className="h-screen w-screen flex justify-center text-sm md:text-md lg:text-lg">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
