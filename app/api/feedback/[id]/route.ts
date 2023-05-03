import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";

// Get Feedback By Id
export async function GET(
    request: Request,
    context: { params: { id: string } }
) {
    const feedbackId = context.params.id;
    const feedback = await prisma.feedback.findFirst({
        where: {
            id: feedbackId,
        },
        include: {
            category: {
                select: {
                    name: true,
                },
            },
        },
    });
    prisma.$disconnect;
    return NextResponse.json({ feedback: feedback });
}
