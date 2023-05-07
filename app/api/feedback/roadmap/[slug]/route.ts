import prisma from "../../../../../prisma/prismaClient";
import { NextResponse } from "next/server";

// Get All Feedbacks
export async function GET(
    request: Request,
    context: { params: { slug: string } }
) {
    const roadmapState = context.params.slug;
    const feedbacks = await prisma.feedback.findMany({
        where: {
            roadmapState: roadmapState,
        },
        include: {
            category: {
                select: {
                    name: true,
                },
            },
            ratings: {
                select: {
                    authorId: true,
                },
            },
            comments: {
                select: {
                    id: true,
                },
            },
        },
    });
    prisma.$disconnect;
    return NextResponse.json({ feedbacks: feedbacks });
}
