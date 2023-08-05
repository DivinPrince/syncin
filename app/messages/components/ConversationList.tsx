"use client";
import useConversation from "@/hooks/useConversation";
import { FullConversationType } from "@/types";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

import { MdOutlineGroupAdd } from "react-icons/md";
import ConversationBox from "./ConversationBox";
import { signOut } from "next-auth/react";
interface ConversationListProps {
  initialItems: FullConversationType[];
}

const ConversationList: FC<ConversationListProps> = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);
  const { isOpen, conversationId } = useConversation();
  const router = useRouter();

  return (
    <aside
      className={clsx(
        `
         absolute
         inser-y-0
         lg:pb-0
         lg:w-80
         lg:block
         overflow-y-auto
         border-r
         border-gray-200
         z-50
         h-full
      `,
        isOpen ? "hidden" : "block w-full left-0"
      )}
    >
      <div className="px-5">
        <div className="flex justify-between mb-4 pt-4">
          <div className="text-2xl font-bold text-gray-300">Messages</div>
          <div
            className="
            rounded-full
            p-2
            bg-[#262626]
            text-white
            cursor-pointer
            hover:opacity-75
            transition
          "
          onClick={()=>signOut()}
          >
            <MdOutlineGroupAdd size={20} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <ConversationBox
              key={item.id}
              data={item}
              selected={conversationId == item.id}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ConversationList;
