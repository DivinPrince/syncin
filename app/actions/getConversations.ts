import prisma from "@/lib/db";
import getCurrentUser from "./getCurrentUser";

const getConversations = async () => {
   try {
      const currentUser = await getCurrentUser();

      if (!currentUser?.id) {
        return [];
      }

    const conversations = await prisma.conversation.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        userIds : {
         has: currentUser.id
        }
      },
      include: {
         users: true,
         messages: {
            include:{
               seen:true,
               sender: true
            }
         }
      }
    });

    


    return conversations;
  } catch (error) {
    return [];
  }
};

export default getConversations;
