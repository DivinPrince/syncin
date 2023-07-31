import prisma from "@/lib/db";
import image from "../../public/images/ai.png"
import getCurrentUser from "./getCurrentUser";

const getPosts = async () => {
   try {
      const currentUser = await getCurrentUser()
      const data = await prisma.post.findMany({
         orderBy: {
            createdAt: "desc"
         },
         select: {
            id: true,
            content: true,
            createdAt: true,
            image: true,
            likes: currentUser?.id == null ? false : { where: { userId: currentUser.id } },
            comments: true,
            _count: { select: { likes: true, comments: true } },
            Creator: {
               select: { name: true, id: true, image: true }
            }
         }
      })

      const Posts = data.map((post) => {
         return {
            id: post.id,
            content: post.content,
            createdAt: post.createdAt,
            image: post.image,
            likes: post.likes,
            comments: post.comments,
            Creator: post.Creator,
            likedByme: post.likes?.length > 0,
         }
      })
      return Posts
   } catch (error) {
      return [{
         content: "Image genereted by Imagine Ai Realy great 👌✨✨🎉",
         image: image,
         likeCount: 30,
         likedByme: false,
         comments: [
            {
               Author: {
                  image: "/images/other.png",
                  name: "Me"
               },
               content: 'nice',
               createdAt: '12/12/2003'
            },
            {
               Author: {
                  image: "/images/other.png",
                  name: "Me"
               },
               content: 'nice',
               createdAt: '12/12/2003'
            },
            {
               Author: {
                  image: "/images/other.png",
                  name: "Me"
               },
               content: 'nice',
               createdAt: '12/12/2003'
            },
         ],
         commentCount: 1,
         creator: {
            image: "/images/other.png",
            name: "Me"
         }
      }]
   }
}

export default getPosts