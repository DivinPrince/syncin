import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const {image, description} = body

    const post = await prisma.post.create({
      data: {
        image,
        description,
        CreatorId: currentUser!.id,
      },
      include:{
        comments: true
      }
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        Creator: true,
        comments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
