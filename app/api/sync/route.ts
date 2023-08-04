import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId } = body;

    const currentUser = await getCurrentUser();

    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("Invalid ID");
    }

    let updatedSyncmateIds = [...(user.syncMatesIds || [])];
    let currentUserIds = [...(currentUser?.syncMatesIds || [])];

    if (!updatedSyncmateIds.includes(userId)) {
      updatedSyncmateIds.push(currentUser?.id as string);
      currentUserIds.push(userId);
    }

    // if (req.method === 'POST') {
    //    updatedSyncmateIds.push(userId);

    //    // NOTIFICATION PART START
    //    try {
    //       await prisma.notification.create({
    //          data: {
    //             body: 'Someone followed you!',
    //             userId,
    //          },
    //       });

    //       await prisma.user.update({
    //          where: {
    //             id: userId,
    //          },
    //          data: {
    //             hasNotification: true,
    //          }
    //       });
    //    } catch (error) {
    //       console.log(error);
    //    }
    //    // NOTIFICATION PART END

    // }

    // if (req.method === 'DELETE') {
    //    updatedSyncmateIds = updatedSyncmateIds.filter((SyncmateId) => SyncmateId !== userId);
    // }

    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        syncMatesIds: updatedSyncmateIds,
      },
    });

    const currentUserUpdate = await prisma.user.update({
      where: {
        id: currentUser?.id,
      },
      data: {
        syncMatesIds: currentUserIds,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
