'use client'
import React from 'react'

import { Post } from '@prisma/client'
import PostCard from '@/components/posts/PostCard'
import PostCardLoader from '@/components/posts/PostCardLoader'
import usePosts from '@/hooks/usePosts'
import { PostType } from '@/types'
interface PostListProps {
  userId?: string
}
const PostList: React.FC<PostListProps> = ({
  userId
}) => {
  const { data: posts = [] } = usePosts();
  return (
    <div className='w-full flex flex-wrap justify-center gap-4'>
      {posts.map((post: PostType) => (
          <PostCard key={post.id} data={post} />
      ))
      }
    </div>
  )
}

export default PostList
