import "./../../globals.css";
import React, { ReactNode, Suspense } from "react";
import Providers from "../../providers";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <html className="h-screen w-screen bg-gray-100 font-poppins">
            <body className="h-screen w-screen lg:flex lg:justify-center">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
