import prisma from "@/lib/db";
import image from "../../public/images/ai.png"
import getCurrentUser from "./getCurrentUser";

const getPosts = async () => {
   try {
      const currentUser = await getCurrentUser()
      const Posts = await prisma.post.findMany({
        orderBy: {
          createdAt: "desc",
        },
        include: {
         comments: true
        }
      });

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