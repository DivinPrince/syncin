'use client'
import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import getCurrentUser from "@/app/actions/getCurrentUser";
import useUser from "@/hooks/useUser";
import useActiveList from "@/hooks/useActiveList";

interface DesktopSideBarProps {
  user: User;
}
const Avatar: React.FC<DesktopSideBarProps> = ({ user }) => {

  const {members} = useActiveList()

  const isActive = members.indexOf(user?.email!) !== -1
  // const fetchedUser = useUser(user.id)
  return (
    <Link href={`/profiles/${user?user.id : ""}`}>
      <div className="relative w-fit">
        <div className="cursor-pointer relative inline-block h-9 w-9 rounded-full overflow-hidden md:h-11 md:w-11">
          <Image
            alt="Avatar"
            src={user?.image || `/images/placeholder.png`}
            fill
          />
        </div>
        {isActive &&(
          <span className="absolute block rounded-full bg-green-500 top-0 right-0 h-2 w-2 md:h-3 md:w-3"></span>
        )}
      </div>
    </Link>
  );
};

export default Avatar;
