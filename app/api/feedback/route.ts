import prisma from "../../../prisma/prismaClient";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

interface formData {
    title: string;
    description: string;
    category: string;
    id: string;
}

// Get All Feedbacks
export async function GET() {
    const feedbacks = await prisma.feedback.findMany({
        include: {
            category: {
                select: {
                    name: true,
                },
            },
            _count: {
                select: {
                    comments: true,
                    ratings: true,
                },
            },
            ratings: {
                select: {
                    authorId: true,
                },
            },
            comments: {
                select: {
                    _count: {
                        select: {
                            replies: true,
                        },
                    },
                },
            },
        },
    });
    prisma.$disconnect;
    return NextResponse.json({ feedbacks: feedbacks });
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
            prisma.$disconnect;
            return NextResponse.json({ status: 201 });
        }
    }
}

export async function PUT(request: Request) {
    const { id, title, description, category }: formData = await request.json();
    const categoryReq = await prisma.category.findFirst({
        where: {
            name: category,
        },
        select: {
            id: true,
        },
    });
    if (categoryReq) {
        await prisma.feedback.update({
            where: {
                id: id,
            },
            data: {
                title,
                description,
                categoryId: categoryReq.id,
            },
        });
        prisma.$disconnect;
        return NextResponse.json({ status: 201 });
    }
}
