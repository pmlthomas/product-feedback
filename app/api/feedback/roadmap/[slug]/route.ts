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
            _count: {
                select: {
                    ratings: true,
                    comments: true,
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
                    _count: {
                        select: {
                            replies: true,
                        },
                    },
                    author: {
                        select: {
                            name: true,
                            username: true,
                            email: true,
                        },
                    },
                    commentText: true,
                },
                orderBy: {
                    createdAt: "desc",
                },
            },
        },
    });
    prisma.$disconnect;
    return NextResponse.json({ feedbacks: feedbacks });
}
