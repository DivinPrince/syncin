'use client'
import NewUserItem from '@/components/user/NewUserItem'
import { User } from '@prisma/client'
import React from 'react'
import { BiLoaderAlt } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { signOut } from 'next-auth/react'
interface UserListProps {
   items: User[]
}
const NewUserList: React.FC<UserListProps> = ({
   items
}) =>{
   return (
     <div
       className="
         hidden
         md:flex
         w-[450px]
         aside
         h-fit
         sticky
         top-[110px]
         p-2
         bg-neutral-900
         z-10
         flex
         flex-col
         gap-2
         "
     >
       <h1 className="font-semibold text-[15px]">New Recent Users</h1>
       <div className="flex flex-col gap-2">
         {items.map((item) => (
           <NewUserItem data={item} />
         ))}
       </div>
       <button
         onClick={() => {
           signOut();
         }}
       >
         signout
       </button>
     </div>
   );
}

export default NewUserList