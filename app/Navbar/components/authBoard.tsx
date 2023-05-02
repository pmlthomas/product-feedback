import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBars } from "react-icons/fa";

interface authBoard {
    isPhoneNavOpen: boolean;
    setIsPhoneNavOpen: any;
}

export default function AuthBoard({
    isPhoneNavOpen,
    setIsPhoneNavOpen,
}: authBoard) {
    const { data: session } = useSession();
    const router = useRouter();
    return (
        <div
            className="flex items-center bg-gradient-to-r from-darkBlue to-purple w-screen h-20 
            md:w-64 md:h-[140px] md:rounded-xl md:items-end"
        >
            <div className="w-screen flex justify-between md:mb-7 md:ml-2">
                <div className="pl-6 -mt-1">
                    {session?.user ? (
                        <>
                            <h1 className="text-[1.15em] text-white select-none">
                                {session?.user?.name}
                            </h1>
                            <h2
                                onClick={() => signOut()}
                                className="text-gray-300 cursor-pointer"
                            >
                                Me déconnecter
                            </h2>
                        </>
                    ) : (
                        <>
                            <p
                                onClick={() => router.push("/login")}
                                className="text-lg text-white cursor-pointer"
                            >
                                Me connecter
                            </p>
                            <p
                                onClick={() => router.push("/register")}
                                className="text-lg text-white cursor-pointer"
                            >
                                M'inscrire
                            </p>
                        </>
                    )}
                </div>
                <FaBars
                    onClick={() => setIsPhoneNavOpen(!isPhoneNavOpen)}
                    size={50}
                    color="white"
                    className="pr-6 cursor-pointer md:hidden"
                />
            </div>
        </div>
    );
}
