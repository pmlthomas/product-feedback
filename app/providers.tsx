"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { FilterProvider } from "./context/filterContext";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>
            <FilterProvider>{children}</FilterProvider>
        </SessionProvider>
    );
}
