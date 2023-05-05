import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";
import { getServerSession } from "next-auth";

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
            ratings: {
                select: {
                    id: true,
                },
            },
            comments: {
                select: {
                    replies: {
                        select: {
                            repliedTo: {
                                select: {
                                    username: true,
                                },
                            },
                            replyText: true,
                            author: {
                                select: {
                                    name: true,
                                    username: true,
                                },
                            },
                        },
                        orderBy: {
                            createdAt: "desc",
                        },
                    },
                    author: {
                        select: {
                            name: true,
                            username: true,
                            email: true,
                        },
                    },
                    id: true,
                    commentText: true,
                },
                orderBy: {
                    createdAt: "desc",
                },
            },
        },
    });
    prisma.$disconnect;
    return NextResponse.json({ feedback: feedback });
}

// Posting a New Comment
export async function POST(
    request: Request,
    context: { params: { id: string } }
) {
    const { commentText } = await request.json();
    const feedbackId = context.params.id;
    const serverSession = await getServerSession();
    if (serverSession && serverSession.user?.email) {
        const userReq = await prisma.user.findUnique({
            where: {
                email: serverSession.user.email,
            },
            select: {
                id: true,
            },
        });
        if (userReq && userReq.id) {
            await prisma.comment.create({
                data: {
                    authorId: userReq.id,
                    feedbackId: feedbackId,
                    commentText: commentText,
                },
            });
            prisma.$disconnect;
            return NextResponse.json({ status: 201 });
        }
    }
}
