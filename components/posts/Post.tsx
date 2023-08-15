'use client'
import React, { FC, useEffect } from 'react'
import PostCard from './PostCard';
import Form from '../Form';
import CommentList from '../comments/CommentList';
import usePost from '@/hooks/usePost';
import { pusherClient } from '@/lib/pusher';
interface postProps {
  postId: string
}
const Post:FC<postProps> = ({postId}) => {
     const { data: fetchedPost, isLoading } = usePost(postId);

     useEffect(()=>{
       pusherClient.subscribe(postId)

       pusherClient.bind('like:new',likeHandler)
     },[postId])
  return (
    <>
      <PostCard data={fetchedPost} />
      <Form postId={postId} isComment placeholder="Sync your reply" />
      <CommentList comments={fetchedPost?.comments} />
    </>
  );
}

export default Post