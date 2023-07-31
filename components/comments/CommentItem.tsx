import { Comment } from '@prisma/client'
import React from 'react'
import Avatar from '../Avatar'
import { format } from 'date-fns'
import getUserById from '@/app/actions/getUserById'
import useUser from '@/hooks/useUser'

interface ItemProps {
   data: Comment;
}

const CommentItem:React.FC<ItemProps> = ({ data }) => {
      const formattedDate = format(new Date(data.createdAt), 'MMMM d, yyyy');
        const { data: fetchedUser } = useUser(data.authorId);
  return (
     <div className='flex gap-4 items-center p-2 rounded-xl bg-neutral-800 cursor-pointer'>
           <Avatar user={fetchedUser} />
           <div className='flex flex-grow flex-col'>
              <p className='font-bold outline-none'>{fetchedUser?.name}</p>
              <p>{data.body}</p>
           </div>
           <span className='text-gray-500'>{formattedDate}</span>
        </div>
  )
}

export default CommentItem
