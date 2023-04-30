"use client";

import { redirect } from "next/navigation";
import React from "react";
import { useSession, signOut } from "next-auth/react";

export default async function FeedbacksPage() {
    const { data: session } = useSession();

    if (session) {
        return <div onClick={() => signOut()}>FeedbacksPage</div>;
    } else {
        redirect("/login");
    }
}
