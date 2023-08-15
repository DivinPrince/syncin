import getCurrentUser from "@/app/actions/getCurrentUser";
import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import useCurrentUser from "./useCurrentUser";
import usePost from "./usePost";

const useLike = (postId: string) => {
   const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
   const { data: post} = usePost(postId);
   const userId = currentUser.id
   
   const likedByMe = useMemo(() => {
      const list = post?.likedIds || [];
      
      return list.includes(userId);
   }, [userId]);
   
   const like = useCallback(async () => {

      try {
         let request;
          
         if (likedByMe) {
               request = () => axios.delete(`/api/posts/${postId}/like`, { data: { userId } });
         }else{
            request = () =>
              axios.post(`/api/posts/${postId}/like`, { userId }).then(() => {});
            await request();
            toast.success('Success');
         }
      } catch (error) {
         toast.error('Something went wrong');
      }
   }, [likedByMe, userId]);

   return {
      likedByMe,
      like,
   }
}

export default useLike;