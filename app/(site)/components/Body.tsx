import PostCard from '@/components/posts/PostCard'
import React from 'react'
import PostList from '@/components/posts/PostList'
import NewUserList from '@/components/user/NewUserList'
import getNewUsers from '@/app/actions/getNewUsers'
import { signOut } from 'next-auth/react'
import getPosts from '@/app/actions/getPosts'

export const Body = async () => {
  
  const NewUsers = await getNewUsers()
  const posts = await getPosts()

  return (
    <div className="text-white p-5 flex relative">
      <PostList items={posts || []}/>
      <NewUserList items={NewUsers} />
    </div>
  );
}
