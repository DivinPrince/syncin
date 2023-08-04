"use client";
import React from "react";
import { RxCaretRight, RxCaretLeft } from "react-icons/rx";
import { HiHome, HiChat, HiUsers } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { User } from "@prisma/client";
import Avatar from "@/components/Avatar";
import AvatarGroup from "@/components/AvatarGroup";

interface DesktopSideBarProps {
  currentUser: User;
}

const Header: React.FC<DesktopSideBarProps> = ({ currentUser }) => {

  const router = useRouter();

  let users = [
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
  ];
  return (
    <div
      className="
         header
         h-fit
         sticky
         top-0
         p-2
         bg-neutral-900
         z-10
      "
    >
      <div
        className="
            w-full
            mb-4
            flex
            items-center
            justify-between
         "
      >
        <div className="flex gap-2 items-center">
          <Image src={"/images/logo.png"} alt="syncin" width={36} height={36} />
          <p className="text-white font-semibold text-[20px]">Syncin</p>
        </div>

        <Avatar user={currentUser!} />
      </div>
    </div>
  );
};

export default Header;
