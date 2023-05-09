"use client";
import React, { startTransition, useEffect, useState } from "react";
import Image from "next/image";
import blankImg from "../../../public/images/blank_profile_img.webp";
import { BsPlusCircleDotted } from "react-icons/bs";
import { CldUploadWidget } from "next-cloudinary";
import { saveProfileImg } from "@/app/actions/actions";

export default function ProfileImg({ userEmail }: any) {
    const [profileImg, setProfileImg] = useState<string>("");

    useEffect(() => {
        async function fetchProfileImg() {
            setProfileImg(
                await fetch(
                    `http://localhost:3000/api/user/profileImg/${userEmail}`
                )
                    .then((req) => req.json())
                    .then((res) => res.profileImg.profileImg)
            );
        }

        fetchProfileImg();
    }, []);

    function handleUpload(img: any) {
        startTransition(
            () => void saveProfileImg(userEmail, img.info.secure_url)
        );
    }

    return (
        <>
            <CldUploadWidget
                uploadPreset="ksknegdo"
                options={{ maxFiles: 1 }}
                onUpload={handleUpload}
            >
                {({ open }) => {
                    function handleOnClick(e: any) {
                        e.preventDefault();
                        open();
                    }
                    return (
                        <div onClick={handleOnClick} className="relative group">
                            <BsPlusCircleDotted
                                size={35}
                                color="black"
                                className="absolute ml-[7.5px] mt-[0.5px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden group-hover:block"
                            />
                            <input
                                className="opacity-0 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full w-[120px] h-[120px]"
                                type="file"
                                accept="image/*"
                            />
                            <Image
                                src={profileImg ? profileImg : blankImg}
                                height={50}
                                width={50}
                                alt="user_img"
                                className="object-cover rounded-full max-h-[50px] max-w-[50px] min-h-[50px] min-w-[50px] mt-0.5 ml-4"
                            />
                        </div>
                    );
                }}
            </CldUploadWidget>
        </>
    );
}
