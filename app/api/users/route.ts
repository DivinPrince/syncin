import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import prisma from "@/lib/db";

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(users)
  } catch (error) {
    console.log(error);
    return NextResponse.error()
  }
}
