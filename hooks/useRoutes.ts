import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";
import useConversation from "./useConversation";

import { HiHome, HiChat, HiUsers } from 'react-icons/hi'
import { BiPlus, BiSearch, BiSolidPlusSquare } from 'react-icons/bi'

const useRoutes = () => {
   const params = useParams()
   const pathname = usePathname()

   const { conversationId } = useConversation()

   const routes = useMemo(() => [
      {
         icon: HiHome,
         label: 'Home',
         active: pathname === '/',
         href: '/'
      },
      {
         icon: HiChat,
         label: 'Messages',
         active: pathname === '/messages',
         href: '/messages'
      },
      {
         icon: HiUsers,
         label: 'SyncMates',
         active: pathname === '/syncmates',
         href: '/syncmates'
      },
      {
         icon: BiSolidPlusSquare,
         label: 'Create post',
         active: pathname === '/posts/new',
         href: '/posts/new'
      },
   ], [pathname, conversationId])

   return routes;
}

export default useRoutes