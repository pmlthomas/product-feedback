import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prismaClient";

export async function GET(
    request: Request,
    context: { params: { email: string } }
) {
    const profileImg = await prisma.user.findFirstOrThrow({
        where: {
            email: context.params.email,
        },
        select: {
            profileImg: true,
        },
    });
    prisma.$disconnect;
    return NextResponse.json({ profileImg: profileImg });
}
