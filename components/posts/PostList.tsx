'use client'
import React, { useState } from 'react'

import { Post } from '@prisma/client'
import PostCard from '@/components/posts/PostCard'
import PostCardLoader from '@/components/posts/PostCardLoader'
import { PostType } from '@/types'
import usePosts from '@/hooks/usePosts'
import getPosts from '@/app/actions/getPosts'
interface PostListProps {
  items: PostType[]
}
const PostList: React.FC<PostListProps> = ({
  items
}) => {

  const [posts, setPosts] = useState(items || [])
  return (
    <div className="w-full flex flex-wrap justify-center gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} data={post}/>
      ))}
    </div>
  );
}

export default PostList
