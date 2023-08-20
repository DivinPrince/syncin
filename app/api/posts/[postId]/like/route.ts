import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { pusherServer } from "@/lib/pusher";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const body = await req.json();
    const { userId } = body;
    const postId = params.postId;
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID");
    }
    let updatedLikeIds = [...(post?.likedIds || [])];

    if (!updatedLikeIds.includes(userId)) {
      updatedLikeIds.push(userId);
    }

    const UpdatedPost = prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likedIds: updatedLikeIds,
      },
    });

    pusherServer.trigger(postId, "like:new", updatedLikeIds);
  } catch (error) {
    console.log("LIKE_ERROR", error);
    return NextResponse.error();
  }
}
export async function DELETE(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const postId = params.postId;
    const currentUser = await getCurrentUser();
    const userId = currentUser?.id;
    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID");
    }
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    let updatedLikeIds = [...(post?.likedIds || [])];

    if (updatedLikeIds.includes(userId)) {
      updatedLikeIds = updatedLikeIds.slice(updatedLikeIds.indexOf(userId), 1);
    }

    const UpdatedPost = prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likedIds: updatedLikeIds,
      },
    });
    pusherServer.trigger(postId, "like:new", updatedLikeIds);
    return NextResponse.json(UpdatedPost);
  } catch (error) {
    console.log("UNLIKE_ERROR", error);
    return NextResponse.error();
  }
}
