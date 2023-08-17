'use client'
import useFormattedsocialNumbers from "@/hooks/useFormattedsocialNumbers";
import clsx from "clsx";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
interface HeartButtonProps {
  likedByme: boolean;
  likeCount: number;
  onClick: () => void
}

const HeartButton: React.FC<HeartButtonProps> = ({ likedByme, likeCount, onClick }) => {
  const formattedLikes = useFormattedsocialNumbers(likeCount)
  const HeartIcon = likedByme ? AiFillHeart : AiOutlineHeart;
  return (
    <button
      className={clsx(
        `
      group flex items-center gap-1 self-start transition-colors duration-200
    `,
        likedByme && "text-red-500"
      )}
      onClick={onClick}
    >
      <HeartIcon
        size={25}
        className={clsx(
          `transition-colors duration-200 group-hover:fill-gray-500 group-hover:fill-red-500`,
          likedByme && "fill-red-500 group-focus-visible:fill-red-500"
        )}
      />
      •
      <span className="texxt[25px]">{formattedLikes}</span>
    </button>
  );
};

export default HeartButton;
