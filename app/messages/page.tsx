"use client";
import React from "react";
import useConversation from "@/hooks/useConversation";
import clsx from "clsx";
import { Empty } from "@/components/ui/Empty";

export default function page() {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx(
        `
      lg:pl-80
        h-full
        lg:block
      `,
        isOpen ? "block" : "hidden"
      )}
    >
      <Empty label="select a chat or start conversastion" />
    </div>
  );
}
