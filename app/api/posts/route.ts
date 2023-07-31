import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    
    if (req.method === 'POST') {
      const currentUser = await getCurrentUser()
      const { body } = req.body;

      const post = await prisma.post.create({
        data: {
          body,
          CreatorId: currentUser!.id
        }
      });

      return NextResponse.json(post);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export async function GET(req: NextApiRequest,context: {params: string}) {
  try {
    const userId = context.params;

    console.log({ userId });

    let posts;

    if (userId && typeof userId === "string") {
      posts = await prisma.post.findMany({
        where: {
          CreatorId: userId,
        },
        include: {
          Creator: true,
          comments: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      posts = await prisma.post.findMany({
        include: {
          Creator: true,
          comments: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
