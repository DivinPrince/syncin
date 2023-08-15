import React from 'react'
import PostForm from './components/PostForm'

const page = () => {
  return (
     <div className="bg-neutral-900 rounded-[5px] h-full w-full overflow-hidden overflow-y-auto p-6">
        <PostForm />
     </div>
  )
}

export default page