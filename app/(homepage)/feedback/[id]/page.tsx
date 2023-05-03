import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import FeedbackCard from "../../components/feedbackCard";

interface params {
    params: {
        id: number;
    };
}

async function getFeedback(id: number) {
    const data = await fetch(`http://localhost:3000/api/feedback/${id}`).then(
        (res) => res.json()
    );
    return data.feedback;
}

export default async function Feedback({ params: { id } }: params) {
    const feedback = await getFeedback(id);
    feedback.category = feedback.category.name;
    return (
        <div>
            <FeedbackCard data={feedback} />
        </div>
    );
}
