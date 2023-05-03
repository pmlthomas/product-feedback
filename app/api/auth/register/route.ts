import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const prisma = new PrismaClient();

    const reqData = await req.json();
    const { name, username, email, password, confirm_password, terms } =
        reqData;

    const existingUser = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });

    if (terms) {
        if (password === confirm_password) {
            if (!existingUser) {
                const bcrypt = require("bcrypt");
                const hashedPassword = await bcrypt.hash(password, 10);
                await prisma.user.create({
                    data: {
                        name,
                        username,
                        email,
                        password: hashedPassword,
                    },
                });
                prisma.$disconnect;
                return NextResponse.json({
                    status: 201,
                    message: "Compte créé avec succès!",
                });
            } else {
                return NextResponse.json({
                    status: 422,
                    message:
                        "Un utilisateur existe déjà pour cet addresse email.",
                });
            }
        } else {
            return NextResponse.json({
                status: 422,
                message: "Les mots de passe ne sont pas identiques.",
            });
        }
    } else {
        return NextResponse.json({
            status: 422,
            message: "Veuillez cocher la case termes et conditions.",
        });
    }
}
