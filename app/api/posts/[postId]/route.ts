import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const postId = params.postId;

    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid ID");
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        Creator: true,
        comments: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
