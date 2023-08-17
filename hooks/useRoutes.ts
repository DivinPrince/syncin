import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";
import useConversation from "./useConversation";

import { HiHome, HiChat, HiUsers } from 'react-icons/hi'
import { BiPlus, BiSearch, BiSolidPlusSquare } from 'react-icons/bi'
import { AiFillEdit, AiFillHome, AiFillMessage, AiOutlineGroup } from "react-icons/ai";

const useRoutes = () => {
   const params = useParams()
   const pathname = usePathname()

   const { conversationId } = useConversation()

   const routes = useMemo(() => [
      {
         icon: AiFillHome,
         label: 'Home',
         active: pathname === '/',
         href: '/'
      },
      {
         icon: AiFillMessage,
         label: 'Messages',
         active: pathname === '/messages',
         href: '/messages'
      },
      {
         icon: AiOutlineGroup,
         label: 'SyncMates',
         active: pathname === '/syncmates',
         href: '/syncmates'
      },
      {
         icon: AiFillEdit,
         label: 'Create post',
         active: pathname === '/posts/new',
         href: '/posts/new'
      },
   ], [pathname, conversationId])

   return routes;
}

export default useRoutes