import getPosts from '@/app/actions/getPosts'
import PostCard from '@/components/posts/PostCard'
import React from 'react'
import PostList from '@/components/posts/PostList'
import NewUserList from '@/components/user/NewUserList'
import getNewUsers from '@/app/actions/getNewUsers'
import usePosts from '@/hooks/usePosts'
import { signOut } from 'next-auth/react'

export const Body = async () => {
  
  const NewUsers = await getNewUsers()
  return (
    <div className="text-white p-5 flex relative">
      <PostList />
      <NewUserList items={NewUsers} />
      <button
        onClick={() => {
          signOut();
        }}
      >
        signout
      </button>
    </div>
  );
}
