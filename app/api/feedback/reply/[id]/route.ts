import { getServerSession } from "next-auth";
import prisma from "../../../../../prisma/prismaClient";
import { NextResponse } from "next/server";

// Posting a New Reply to a Comment
export async function POST(
    request: Request,
    context: { params: { id: string } }
) {
    const { replyText, repliedTo } = await request.json();
    const commentId = context.params.id;
    console.log(repliedTo);
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
        const repliedToReq = await prisma.user.findUnique({
            where: {
                email: repliedTo,
            },
            select: {
                id: true,
            },
        });
        if (userReq && userReq.id && repliedToReq && repliedToReq.id) {
            await prisma.reply.create({
                data: {
                    authorId: userReq.id,
                    commentId: commentId,
                    repliedToId: repliedToReq.id,
                    replyText: replyText,
                },
            });
            prisma.$disconnect;
            return NextResponse.json({ status: 201 });
        }
    }
}
