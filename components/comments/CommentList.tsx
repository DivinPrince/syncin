import getUserById from '@/app/actions/getUserById'
import { Comment } from '@prisma/client'
import React, { FC } from 'react'
import CommentItem from './CommentItem'

interface ItemProps {
  comments: Comment[]
}

const CommentList:FC<ItemProps> = ({comments}) => {
  return (
    <div className='has-scrollbar flex flex-col gap-2 h-[156px]  pt-2 pb-2 pr-2 overflow-hidden overflow-y-auto'>
      {comments.map((comment) =>(
        <CommentItem data={comment}/>
      ))}
    </div>
  )
}

export default CommentList

// export const Body = async () => {