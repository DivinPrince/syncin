"use client";
import Input from "@/components/Input";
import React, { FC, useRef } from "react";
import { HiPhoto } from "react-icons/hi2";
interface ImageUploadProps {
  onUpload: (e:any) => void;
  usedrag: boolean;
  children?: React.ReactNode;
}
const ImageUpload: FC<ImageUploadProps> = ({ onUpload, usedrag,children }) => {
  const ref = useRef<any>(null);

  const click = () => {
    if (ref.current) {
      ref.current.click();
    } else {
      return;
    }
  };
  
  const onDrop =(e: any)=>{
    e.preventDefault();
    e.stopPropagation();

    
  }
  return (
    <>
      <input
        type="file"
        onChange={(e) => {
          onUpload(e);
        }}
        name="upload-image"
        className="hidden"
        ref={ref}
      />
      <div onClick={click}>{children}</div>
    </>
  );
};

export default ImageUpload;
