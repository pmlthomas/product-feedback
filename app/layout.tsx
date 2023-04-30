import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";
import ProvidersWrapper from "./providersWrapper";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head></head>
            <body>
                <nav>
                    <Navbar />
                </nav>
                <ProvidersWrapper>{children}</ProvidersWrapper>
            </body>
        </html>
    );
}
