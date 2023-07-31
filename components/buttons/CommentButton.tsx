import clsx from "clsx";
import React from "react";
import { VscComment } from "react-icons/vsc";
import { BsMessenger } from "react-icons/bs";
interface HeartButtonProps {
  commentedByme: boolean;
  commentCount: number;
  onClick: () => void;
}
const CommentButton: React.FC<HeartButtonProps> = ({
  commentedByme,
  commentCount,
  onClick,
}) => {
  const CommentIcon = commentedByme ? BsMessenger : VscComment;
  return (
    <button
      onClick={onClick}
      className={clsx(
        `
      group flex items-center gap-1 self-start transition-colors duration-200
    `,
        commentedByme && "text-white"
      )}
    >
      <CommentIcon
        size={25}
        className={clsx(
          `transition-colors duration-200 group-hover:fill-gray-500`,
          commentedByme && "fill-red-500 group-focus-visible:fill-red-500"
        )}
      />
      <span className="texxt[25px]">{commentCount}</span>
    </button>
  );
};

export default CommentButton;
