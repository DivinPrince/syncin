import { Comment, User } from "@prisma/client";
import React from "react";
import { format } from "date-fns"; // Import the format function from date-fns
import Avatar from "../Avatar";
import SyncButton from "../buttons/SyncButton";

interface ItemProps {
  data: User;
}

const NewUserItem: React.FC<ItemProps> = ({ data }) => {
  // Format the createdAt date using date-fns
  const formattedDate = format(new Date(data.createdAt), "MMMM d, yyyy");

  return (
    <div className="flex gap-4 items-center p-2 rounded-xl bg-neutral-800 cursor-pointer">
      <Avatar user={data} />
      <div className="flex flex-grow flex-col">
        <p className="font-bold outline-none">{data.name}</p>
        <span className="text-gray-500">{formattedDate}</span>
      </div>
      <SyncButton user={data} />
    </div>
  );
};

export default NewUserItem;
