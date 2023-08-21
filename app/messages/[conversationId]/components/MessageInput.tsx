"use client";

import EmojiPicker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useEffect, useRef, useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiLaugh } from "react-icons/bi";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  id,
  type,
  required,
  register,
}) => {
  const [message, setMessage] = useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  return (
    <>
      <BiLaugh
        // onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        size={35}
        className="text-gray-500 cursor-pointer"
      />
      {/* {showEmojiPicker && (
        <div className="absolute bottom-24">
          <EmojiPicker
            data={data}
            onEmojiSelect={handleEmojiClick}
            title="Pick your emoji"
            emoji="point_up"
          />
        </div>
      )}   */}
      <div className="relative w-full">
        <input
          id={id}
          type={type}
          autoComplete={id}
          {...register(id, { required })}
          placeholder={placeholder}
          className="
          text-black
          font-light
          py-2
          px-4
          bg-neutral-100 
          w-full 
          rounded-full
          focus:outline-none
        "
        // ref={ref}
        />
      </div>
    </>
  );
};

export default MessageInput;
