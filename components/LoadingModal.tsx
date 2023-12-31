import React from 'react'
import { BiLoaderAlt } from 'react-icons/bi';

const LoadingModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black text-white z-[50] flex justify-center items-center">
      <BiLoaderAlt className="animate-spin" size={50}/>
    </div>
  );
}

export default LoadingModal