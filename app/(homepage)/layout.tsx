import "../globals.css";
import Navbar from "@/app/Navbar/Navbar";
import React, { ReactNode } from "react";
import Providers from "../providers";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <html className="h-screen w-screen bg-gray-100 font-poppins">
            <body className="h-screen w-screen lg:flex lg:justify-center">
                <Providers>
                    <nav className="md:flex md:justify-center">
                        <Navbar />
                    </nav>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
