"use server";
import prisma from "../../prisma/prismaClient";

export async function updateRating(
    feedbackId: string,
    isVoted: boolean,
    userEmail: string
) {
    console.log(
        "OMGGGGGGGGGGGGGGGGGGGGGGGGGGGG",
        feedbackId,
        isVoted,
        userEmail
    );

    const userReq = await prisma.user.findUnique({
        where: {
            email: userEmail,
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
    }
}
