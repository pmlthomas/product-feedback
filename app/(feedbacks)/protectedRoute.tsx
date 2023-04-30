"use client";
import React, { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: any }) {
    const { status } = useSession();
    const router = useRouter();

    if (status === "unauthenticated") {
        router.push("/login");
    } else if (status === "loading") {
        return <p>Loading...</p>;
    } else {
        return <>{children}</>;
    }
}
