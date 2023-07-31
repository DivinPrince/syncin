'use client'
import axios from "axios";
import { useCallback, useState } from "react";

import { BiLoaderAlt } from 'react-icons/bi'
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { toast } from 'react-hot-toast'
import useSync from "@/hooks/useSync";
interface ItemProps {
   user: User
}
const SyncButton: React.FC<ItemProps> = ({ user }) => {
   const router = useRouter();
   const [isLoading, setIsLoading] = useState(false);
   const { isSync,
      sync, } = useSync(user.id)

      const onSync = () =>{
         setIsLoading(true)

         sync().finally(()=>{
            setIsLoading(false)
         })
      }
   return (

      <button className='px-3 py-1 rounded-full bg-white text-black font-semibold' onClick={onSync}>
         {isLoading ? (
            <BiLoaderAlt className='animate-spin'/>
         ):'sync'}
      
      </button>
   )
}
   
export default SyncButton