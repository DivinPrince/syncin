import React from 'react'
import Skeleton from "react-loading-skeleton"

const PostCardLoader = () => {
  return (
    <div className="flex flex-col gap-4 border-b px-4 py-4">
      loading
      <div className="flex gap-4 items-center">
        <div className="w-[60px] h-[60px] rounded-full"></div>
        <Skeleton
          width={60}
          height={60}
          borderRadius={999}
          baseColor="#111111"
        />
        <div className="flex flex-grow flex-col">
          <Skeleton
            width={200}
            height={30}
            borderRadius={10}
            baseColor="#111111"
          />
          <Skeleton
            width={100}
            height={30}
            borderRadius={10}
            baseColor="#111111"
          />
        </div>
        <span>
          <Skeleton
            width={50}
            height={30}
            borderRadius={10}
            baseColor="#111111"
          />
        </span>
      </div>
      <Skeleton
        width={500}
        height={500}
        borderRadius={999}
        baseColor="#111111"
      />
      <Skeleton
        width={500}
        height={300}
        borderRadius={999}
        baseColor="#111111"
      />
    </div>
  );
}

export default PostCardLoader