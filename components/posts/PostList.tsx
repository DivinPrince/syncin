'use client'
import React from 'react'

import { Post } from '@prisma/client'
import PostCard from '@/components/posts/PostCard'
import PostCardLoader from '@/components/posts/PostCardLoader'
import usePosts from '@/hooks/usePosts'
import { PostType } from '@/types'
import { AlertDialog,AlertDialogContent,AlertDialogHeader,AlertDialogTitle,AlertDialogFooter,AlertDialogCancel,AlertDialogAction,AlertDialogTrigger,AlertDialogDescription } from '../ui/alert-dialog'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
interface PostListProps {
  userId?: string
}
const PostList: React.FC<PostListProps> = ({
  userId
}) => {
  const { data: posts = [] } = usePosts();
  return (
    <div className="w-full flex flex-wrap justify-center gap-4">
      <Badge variant="premium">pro</Badge>
      {posts.map((post: PostType) => (
        <PostCard key={post.id} data={post} />
      ))}
    </div>
  );
}

export default PostList
