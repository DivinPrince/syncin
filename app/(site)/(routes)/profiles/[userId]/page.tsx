
import UserBio from '@/components/user/UserBio';
import useUserParams from '@/hooks/useUserParams';
import { signOut } from 'next-auth/react'
import React, { FC } from 'react'

const page: FC = (props) => {
  const userId = props.params.userId as string;
  console.log(userId);
  
  return (
    <div className="bg-neutral-900 rounded-[5px] h-full w-full overflow-hidden overflow-y-auto">
      <UserBio userId={userId} />
    </div>
  );
}

export default page
