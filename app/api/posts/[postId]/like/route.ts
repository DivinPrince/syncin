import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import { pusherServer } from "@/lib/pusher";

export async function POST(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const body = await req.json();
    const { userId } = body;
    const postId = params.postId;

    const post = await prisma.post.findUnique({
       where:{
         id: postId
      }
   })
   
   if (!userId || typeof userId !== "string") {
     throw new Error("Invalid ID");
   }
    const currentUser = await getCurrentUser();
    let updatedLikeIds = [...(post?.likedIds || [])];

    if (!updatedLikeIds.includes(userId)) {
      updatedLikeIds.push(userId)
    }

    const UpdatedPost = prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likedIds: updatedLikeIds,
      },
    });

    pusherServer.trigger(postId,'like:new',updatedLikeIds)

    return NextResponse.json(UpdatedPost);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
