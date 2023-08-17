import clsx from "clsx";
import React from "react";
import { VscComment } from "react-icons/vsc";
import { AiFillMessage, AiOutlineMessage } from "react-icons/ai";
import useFormattedsocialNumbers from "@/hooks/useFormattedsocialNumbers";
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
  const formattedCount = useFormattedsocialNumbers(commentCount)
  const CommentIcon = commentedByme ? AiFillMessage : AiOutlineMessage;
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
          commentedByme && "fill-white group-focus-visible:fill-white"
        )}
      />
      •
      <span className="texxt[25px]">{formattedCount}</span>
    </button>
  );
};

export default CommentButton;
