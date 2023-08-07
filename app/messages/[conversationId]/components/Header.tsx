'use client'

import { HiChevronLeft } from 'react-icons/hi'
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { useMemo, useState } from "react";
import Link from "next/link";
import { Conversation, User } from "@prisma/client";

import useOtheUser from "@/hooks/useOtheUser";

import Avatar from '@/components/Avatar';
import AvatarGroup from "@/components/AvatarGroup";
import useActiveList from '@/hooks/useActiveList';

interface HeaderProps {
  conversation: Conversation & {
    users: User[]
  }
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtheUser(conversation);
  const { members } = useActiveList();
  
  const isActive = members.indexOf(otherUser?.email!) !== -1;
  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return isActive ? 'Active' : 'Offline'
  }, [conversation, isActive]);

  return (
  <>
    <div 
      className="
        bg-neutral-800 
        w-full 
        flex 
        border-b-[1px] 
        sm:px-4 
        py-3 
        px-4 
        lg:px-6 
        justify-between 
        items-center 
        shadow-sm
      "
    >
      <div className="flex gap-3 items-center">
        <Link
          href="/messages" 
          className="
            lg:hidden 
            block 
            text-white
            transition 
            cursor-pointer
          "
        >
          <HiChevronLeft size={32} />
        </Link>
        {conversation.isGroup ? (
          <AvatarGroup users={conversation.users} />
        ) : (
          <Avatar user={otherUser} />
        )}
        <div className="flex flex-col">
          <div className='text-white font-semibold'>{conversation.name || otherUser.name}</div>
          <div className="text-sm font-medium text-neutral-400">
            {statusText}
          </div>
        </div>
      </div>
      <HiEllipsisHorizontal
        size={32}
        onClick={() =>{}}
        className="
          text-white
          cursor-pointer
          transition
        "
      />
    </div>
    </>
  );
}
 
export default Header;
