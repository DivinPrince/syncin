'use client'
import React from 'react'
import { useInfiniteQuery } from "@tanstack/react-query"
const posts = [
   { id: 1, body: "divin" },
   { id: 2, body: "Leo" },
   { id: 3, body: "Africa" },
   { id: 4, body: "Amini" },
   { id: 5, body: "katia" },
   { id: 6, body: "fame" },
   { id: 7, body: "regis" },
   { id: 8, body: "rufora" },
   { id: 9, body: "karara" },
   { id: 10, body: "vanquer" },
]
const fetchPost = async (page: number) => {
   return posts.slice((page - 1) * 2, page * 2)
}
const TestPage = () => {
   const { data,error, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(['query'],
      async ({ pageParam = 1 }) => {
         const response = await fetchPost(pageParam)
         return response
      },
      {
         getNextPageParam: (_, pages) => {
            return pages.length + 1
         },
         initialData: {
            pages: [posts.slice(0, 2)],
            pageParams: [1]
         }
      }
   )
   const next = ()=>{
      fetchNextPage()
   }
   
   return (
      <div>
         {data?.pages.map((page, i) => (
            <div key={i}>
               {page.map(post => (
                  <div key={post.id}>{post.body}</div>
               ))}
            </div>
         ))}
         <button onClick={next} disabled={isFetchingNextPage}>
            {isFetchingNextPage
            ? 'loading more...'
            : (data?.pages.length ?? 0) < 5
            ? 'Load more'
            : 'No more'
            }
         </button>
      </div>
   )
}

export default TestPage