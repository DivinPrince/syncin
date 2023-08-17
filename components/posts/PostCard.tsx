'use client'
import React, { useEffect, useState } from 'react'

import { Post } from '@prisma/client'
import Avatar from '../Avatar'
import Image from 'next/image'
import HeartButton from '../buttons/HeartButton'
import CommentButton from '../buttons/CommentButton'
import CommentItem from '../comments/CommentItem'
import CommentList from '../comments/CommentList'
import { clsx } from 'clsx'
import useUser from '@/hooks/useUser'
import { PostType } from '@/types'
import { format } from 'date-fns'
import useCurrentUser from '@/hooks/useCurrentUser'
import useLike from '@/hooks/useLike'
import { pusherClient } from '@/lib/pusher'
import { find } from 'lodash'
import { GoOrganization } from 'react-icons/go'

interface PostCardPromps {
  data: PostType
}

const PostCard: React.FC<PostCardPromps> = ({
  data
}) => {
  const [showComment, setshowComment] = useState(false)
  const [likes, setLikes] = useState(data.likedIds)
  const { data: fetchedUser } = useUser(data.CreatorId);
  const {data: currentUser} = useCurrentUser()
  const formattedDate = format(new Date(data.createdAt), "MMMM d, yyyy");
  const postId = data.id
  useEffect(() => {
    pusherClient.subscribe(postId)

    const likeHandler = (likeId: string) => {
      setLikes((current) => {
        if (find(current, likeId)) {
          return current;
        }

        return [...current, likeId]
      });

    };
    pusherClient.bind('like:new', likeHandler)
    return ()=>{
      pusherClient.unbind('like:new', likeHandler)
    }
  }, [postId])

  const toogleComment = () =>{
    setshowComment(!showComment)
  }
  const { likedByMe, like } = useLike(data.id)
  const commentedByme = data.comments?.indexOf(currentUser?.id) !== -1

  return (
    <div className="relative flex flex-col gap-4 border-b px-4 py-4 w-[500px]">
      <div className="flex gap-4 items-center">
        <Avatar user={fetchedUser!} />
        <div className="flex flex-grow flex-col">
          <p className="font-bold outline-none">{fetchedUser?.name}</p>
          <p>{data.description}</p>
        </div>
        <span className="text-gray-500">{formattedDate}</span>
      </div>
      <Image className="rounded-xl w-full" src={data.image!} width={500} alt="image" />
      <div className="flex gap-4">
        <HeartButton
          likeCount={likes.length || 0}
          likedByme={likedByMe}
          onClick={()=>{like}}
        />
        <CommentButton
          commentCount={data?.comments?.length || 0}
          commentedByme={commentedByme}
          onClick={()=>{}}
        />
      </div>
    </div>
  );
}

export default PostCard
