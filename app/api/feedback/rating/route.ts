import { getServerSession } from "next-auth";
import prisma from "../../../../prisma/prismaClient";
import { NextResponse } from "next/server";

// Rating a Feedback
export async function POST(req: Request) {
    const { feedbackId, isVoted }: any = await req.json();
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
            if (isVoted) {
                await prisma.rating.deleteMany({
                    where: {
                        authorId: userReq.id,
                        feedbackId: feedbackId,
                    },
                });
            } else {
                await prisma.rating.create({
                    data: {
                        authorId: userReq.id,
                        feedbackId: feedbackId,
                    },
                });
            }
            prisma.$disconnect;
            return NextResponse.json({ status: 201 });
        }
    }
}
