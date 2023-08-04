import { Conversation, Message, User,Post, Comment } from "@prisma/client";
import { type } from "os";

export type FullMessageType = Message & {
   sender: User,
   seen: User[]
}

export type FullConversatioType = Conversation & {
   users: User[],
   messages: FullMessageType[]
}

export type PostType = Post & {
   coments: Comment[]
}