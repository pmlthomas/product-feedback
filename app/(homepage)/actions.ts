"use server";
import { revalidatePath } from "next/cache";
import prisma from "../../prisma/prismaClient";
import { getServerSession } from "next-auth";

export async function updateRating(feedbackId: string, isVoted: boolean) {
    await prisma.rating.create({
        data: {
            authorId: "4e6893c8-df9e-4b51-a06b-58dc6a18aacc",
            feedbackId: "61cf72b2-6779-4eab-b136-30a8637f5251",
        },
    });
    // const serverSession = await getServerSession();
    // if (serverSession && serverSession.user?.email) {
    //     const userReq = await prisma.user.findUnique({
    //         where: {
    //             email: serverSession.user.email,
    //         },
    //         select: {
    //             id: true,
    //         },
    //     });
    //     if (userReq && userReq.id) {
    //         if (isVoted) {
    //             await prisma.rating.deleteMany({
    //                 where: {
    //                     authorId: userReq.id,
    //                     feedbackId: feedbackId,
    //                 },
    //             });
    //         } else {
    //             await prisma.rating.create({
    //                 data: {
    //                     authorId: userReq.id,
    //                     feedbackId: feedbackId,
    //                 },
    //             });
    //         }
    //         prisma.$disconnect;
    //     }
    revalidatePath("/");
    // }
}
