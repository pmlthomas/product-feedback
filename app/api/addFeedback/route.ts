import { useSession } from "next-auth/react";
import prisma from "./../../../prisma/prismaClient";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

interface formData {
    title: string;
    description: string;
    category: string;
}

// Add New Feedback
export async function POST(req: Request) {
    const { title, description, category }: formData = await req.json();
    const serverSession = await getServerSession();
    if (serverSession && serverSession.user && serverSession.user.email) {
        const userReq = await prisma.user.findUnique({
            where: {
                email: serverSession.user.email,
            },
            select: {
                id: true,
            },
        });
        const categoryReq = await prisma.category.findFirst({
            where: {
                name: category,
            },
            select: {
                id: true,
            },
        });
        if (userReq && userReq.id && categoryReq && categoryReq.id) {
            await prisma.feedback.create({
                data: {
                    authorId: userReq.id,
                    categoryId: categoryReq.id,
                    title: title,
                    description: description,
                },
            });
            return NextResponse.json({ status: 201 });
        }
    }
}
