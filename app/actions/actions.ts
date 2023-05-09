"use server";
import { NextResponse } from "next/server";
import prisma from "../../prisma/prismaClient";

export async function updateRating(
    feedbackId: string,
    isVoted: boolean,
    userEmail: string
) {
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

export async function saveProfileImg(userEmail: string, imgUrl: string) {
    await prisma.user.update({
        where: {
            email: userEmail,
        },
        data: {
            profileImg: imgUrl,
        },
    });
    prisma.$disconnect;
}

export async function getProfileImg(userEmail: string) {
    const profileImg = await prisma.user.findFirstOrThrow({
        where: {
            email: userEmail,
        },
        select: {
            profileImg: true,
        },
    });
    prisma.$disconnect;
    return NextResponse.json({ profileImg: profileImg });
}
