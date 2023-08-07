import { Conversation, Message, User,Post, Comment } from "@prisma/client";

export type FullMessageType = Message & {
   sender: User,
   seen: User[]
}

export type FullConversationType = Conversation & {
   users: User[],
   messages: FullMessageType[]
}

export type PostType = Post & {
   coments: Comment[]
}