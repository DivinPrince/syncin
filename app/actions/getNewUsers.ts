import prisma from "@/lib/db";
import getCurrentUser from "./getCurrentUser";

const getNewUsers = async () => {
   try {

      const currentUser = await getCurrentUser() 
      const Users = await prisma.user.findMany({
         orderBy : {
            createdAt: 'desc'
         },
         where : {
            NOT: {
               email: currentUser?.email
            }
         },
         take: 5
      })

      const NewUsers = Users.filter((user) => !user.syncMatesIds.includes(currentUser?.id as string))
      
      if (!currentUser) {
         return []
      }

      return NewUsers


   } catch (error) {
      return []
   }
}

export default getNewUsers