"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function FeedbacksPage() {
    // const { status } = useSession();
    // if (status === "unauthenticated") {
    //     console.log("redirect");
    //     redirect("/login");
    // }
    // if (status === "loading") return <p>Loading...</p>;
    return <div onClick={() => signOut()}>FeedbacksPage</div>;
}
