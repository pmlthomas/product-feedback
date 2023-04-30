import { PrismaClient, Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

async function register(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { name, email, username, password }: Prisma.UserCreateInput =
        req.body;
    const newUser = {
        name: name,
        email: email,
        username: username,
        password: password,
    };
    await prisma.user.create({
        data: newUser,
    });
    return res.status(200).json({ message: "omgggg" });
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        register(req, res);
    }
}
