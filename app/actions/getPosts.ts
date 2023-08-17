import prisma from "@/lib/db";
import image from "../../public/images/ai.png";
import getCurrentUser from "./getCurrentUser";

const getPosts = async () => {
  try {
    const currentUser = await getCurrentUser();
    const Posts = await prisma.post.findMany({
      include: {
        Creator: true,
        comments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return Posts;
  } catch (error) {
    return null
  }
};

export default getPosts;
