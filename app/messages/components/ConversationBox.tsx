"use client";
import React, { FC, useCallback, useMemo } from "react";
import { useSession } from "next-auth/react";
import useOtheUser from "@/hooks/useOtheUser";
import { useRouter } from "next/navigation";
import { FullConversatioType } from "@/types";
import clsx from "clsx";
import { format } from "date-fns/esm";
import Avatar from "@/components/Avatar";
import AvatarGroup from "@/components/AvatarGroup";

interface ConversationBoxProps {
  data: FullConversatioType;
  selected?: boolean;
}
const ConversationBox: FC<ConversationBoxProps> = ({ data, selected }) => {
  const otherUser = useOtheUser(data);
  const session = useSession();
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(`/messages/${data.id}`);
  }, [data, router]);
  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(
    () => session.data?.user?.email,
    [session.data?.user?.email]
  );

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }

    const seenArray = lastMessage.seen || [];

    if (!userEmail) {
      return false;
    }

    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [userEmail, lastMessage]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return "Sent an image";
    }

    if (lastMessage?.body) {
      return lastMessage?.body;
    }

    return "Now in sync";
  }, [lastMessage]);

  return (
    <div
      onClick={handleClick}
      className={clsx(
        `
        w-full 
        relative 
        flex 
        items-center 
        space-x-3 
        p-3 
        hover:bg-neutral-800
        rounded-[5px]
        transition
        cursor-pointer
        `,
        selected ? "bg-neutral-800" : "bg-neutral-900"
      )}
    >
      {data.isGroup ? (
        <AvatarGroup users={data.users} />
      ) : (
        <Avatar user={otherUser[0]} />
      )}
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <div className="flex justify-between items-center mb-1">
            <p className="text-md font-medium text-gray-100">
              {data.name || otherUser[0].name}
            </p>
            {lastMessage?.createdAt && (
              <p
                className="
                  text-xs 
                  text-gray-400 
                  font-light
                "
              >
                {format(new Date(lastMessage.createdAt), "p")}
              </p>
            )}
          </div>
          <p
            className={clsx(
              `
              truncate 
              text-sm
              text-[gray] font-medium`
            )}
          >
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationBox;