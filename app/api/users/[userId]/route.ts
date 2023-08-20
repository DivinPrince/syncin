import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const userId = params.userId;

    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID");
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    const syncMatesCount = await prisma.user.count({
      where: {
        syncMatesIds: {
          has: userId,
        },
      },
    });
    return NextResponse.json({ ...existingUser, syncMatesCount });
  } catch (error) {
    console.log(error);
  }
}
