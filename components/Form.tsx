'use client'
import axios from 'axios';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';

import Avatar from './Avatar';
import Button from './Button';
import useCurrentUser from '@/hooks/useCurrentUser';
import { BiLoaderAlt } from 'react-icons/bi';
import usePost from '@/hooks/usePost';

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePost } = usePost(postId as string);

  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const url = isComment ? `/api/comments?postId=${postId}` : '/api/posts';

      await axios.post(url, { body });

      toast.success('comment synced');
      setBody('');
      mutatePost();
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [body, isComment, postId, mutatePost]);

  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
      <div className="flex flex-row gap-4">
        <div>
          <Avatar user={currentUser} />
        </div>
        <div className="w-full">
          <textarea
            disabled={isLoading}
            onChange={(event) => setBody(event.target.value)}
            value={body}
            className="
                disabled:opacity-80
                peer
                resize-none 
                mt-3 
                w-full 
                bg-black 
                ring-0 
                outline-none 
                text-[20px] 
                placeholder-neutral-500 
                text-white
              "
            placeholder={placeholder}
          ></textarea>
          <hr
            className="
                opacity-0 
                peer-focus:opacity-100 
                h-[1px] 
                w-full 
                border-neutral-800 
                transition"
          />
          <div className="mt-4 flex flex-row justify-end">
            <button
              className="px-3 py-1 rounded-full bg-white text-black font-semibold"
              onClick={onSubmit}
            >
              {isLoading ? <BiLoaderAlt className="animate-spin" /> : "sync"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
