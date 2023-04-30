import "../globals.css";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";
import Providers from "../providers";
import ProtectedRoute from "./protectedRoute";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <body>
                <nav>
                    <Navbar />
                </nav>

                <Providers>
                    <ProtectedRoute>{children}</ProtectedRoute>
                </Providers>
            </body>
        </html>
    );
}
