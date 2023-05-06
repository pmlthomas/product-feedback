import React from "react";
import ClientComponent from "./clientComponent";
import ReadFromDbComponent from "./readFromDb";

export default function Page() {
    return (
        <ClientComponent>
            {/* @ts-expect-error Async Server Component */}
            <ReadFromDbComponent />
        </ClientComponent>
    );
}
