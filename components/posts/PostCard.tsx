'use client'
import React, { useState } from 'react'

import { Post } from '@prisma/client'
import Avatar from '../Avatar'
import Image from 'next/image'
import HeartButton from '../buttons/HeartButton'
import CommentButton from '../buttons/CommentButton'
import CommentItem from '../comments/CommentItem'
import { useSession } from 'next-auth/react'
import CommentList from '../comments/CommentList'
import { clsx } from 'clsx'
import useUser from '@/hooks/useUser'
import { PostType } from '@/types'

interface PostCardPromps {
  data: PostType
}

const PostCard: React.FC<PostCardPromps> = ({
  data
}) => {
  const session = useSession()
  const [showComment, setshowComment] = useState(false)
  const { data: fetchedUser } = useUser(data.CreatorId);

  const toogleComment = () =>{
    setshowComment(!showComment)
  }

  return (
    <div className="flex flex-col gap-4 border-b px-4 py-4 w-[500px]">
      <div className="flex gap-4 items-center">
        <Avatar user={fetchedUser!} />
        <div className="flex flex-grow flex-col">
          <p className="font-bold outline-none">{fetchedUser?.name}</p>
          <p>{data.body}</p>
        </div>
        <span className="text-gray-500">12/12/2023</span>
      </div>
      <Image className="rounded-xl" src={data.image!} alt="ai" />
      <div className="flex gap-4">
        <HeartButton
          likeCount={data.likedIds.length}
          likedByme={false}
        />
        <CommentButton
          commentCount={data.coments.length}
          commentedByme={false}
          onClick={()=>{}}
        />
      </div>
    </div>
  );
}

export default PostCard
