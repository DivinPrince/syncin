'use client'
import React, { useState } from 'react'
import PostCard from '@/components/posts/PostCard'
import { PostType } from '@/types'
import Form from '@/app/messages/[conversationId]/components/Form'
interface PostListProps {
  items: PostType[]
}
const PostList: React.FC<PostListProps> = ({
  items
}) => {
  const [posts, setPosts] = useState(items || [])
  return (
    <div className="w-full flex flex-wrap justify-center gap-4 h-[700px]">
      {posts.map((post) => (
        <PostCard key={post.id} data={post} />
      ))}
    </div>
  );
}

export default PostList
