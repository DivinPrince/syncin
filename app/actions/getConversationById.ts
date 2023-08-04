import prisma from "@/lib/db";
import getCurrentUser from "./getCurrentUser";

const getConversationById = async (conversationId: string) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) {
      return null
    }

    const conversation = await prisma.conversation.findUnique({
      where:{
         id: conversationId,
      },
      include: {
         users: true
      }
    })
    if (conversation?.userIds.includes(currentUser.id)) {
      return conversation;
    }else{
      return null
    }
  } catch (error) {
    return null;
  }
};

export default getConversationById;
