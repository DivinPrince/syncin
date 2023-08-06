"use client";

import { HiPaperAirplane, HiPhoto, HiFaceSmile } from "react-icons/hi2";
import { BiLaugh } from "react-icons/bi";
import MessageInput from "./MessageInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import useConversation from "@/hooks/useConversation";
import { useState } from "react";
import ImageUpload from "@/components/ImageUpload";

const Form = () => {
  const { conversationId } = useConversation();
  const [imageData, setImageData] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios.post("/api/messages", {
      ...data,
      conversationId: conversationId,
    });
  };
  
  const onUpload = (e: any) => {
    const reader = new FileReader();
    
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("loadend", () => {
      setImageData(reader.result as string)
      axios.post("/api/messages", {
        image: imageData,
        conversationId: conversationId,
      });
    });
  };

  return (
    <div
      className="
        py-4 
        px-4 
        bg-neutral-900 
        border-t 
        flex 
        items-center 
        gap-2 
        lg:gap-4 
        w-full
      "
    >
      <ImageUpload
        onUpload={(e) => {
          onUpload(e);
        }}
        usedrag={false}
      >
        <HiPhoto size={30} className="text-gray-500" />
      </ImageUpload>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message"
        />
        <button
          type="submit"
          className="
            rounded-full 
            p-2 
            bg-[#262626]
            cursor-pointer 
            hover:opacity-75
            transition
          "
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;
