import getCurrentUser from "@/app/actions/getCurrentUser";
import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import useCurrentUser from "./useCurrentUser";

const useSync = (userId: string) => {
   const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
   
   const isSync = useMemo(() => {
      const list = currentUser?.syncMatesIds || [];
      
      return list.includes(userId);
   }, [userId]);
   
   const sync = useCallback(async () => {

      try {
         let request;
          
         // if (isSync) {
            //    request = () => axios.delete('/api/follow', { data: { userId } });
            // } else {
         // }
         request = () => axios.post('/api/sync', { userId }).then(()=>{
         });
         
         await axios.post('/api/conversations',{userId: userId})
         await request();
         toast.success('Success');
      } catch (error) {
         toast.error('Something went wrong');
      }
   }, [isSync, userId]);

   return {
      isSync,
      sync,
   }
}

export default useSync;