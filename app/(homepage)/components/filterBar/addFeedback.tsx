import { useRouter } from "next/navigation";
import React from "react";

export default function AddFeedback() {
    const router = useRouter();
    return (
        <button
            onClick={() => router.push("/ajouter")}
            className="bg-purple p-2 rounded-lg text-white hover:bg-[#af1295]"
        >
            + Ajouter
        </button>
    );
}
