"use client";
import useUser from "@/hooks/useUser";
import React from "react";
import { UserBioLoader } from "./UserBioLoader";
import { BiLoaderAlt } from "react-icons/bi";
import Avatar from "../Avatar";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import Link from "next/link";
interface bioProps {
  userId: string;
}
const UserBio: React.FC<bioProps> = ({ userId }) => {
  const { data: fetchedUser, error, isLoading, mutate } = useUser(userId);
  const { data: currentUser } = useCurrentUser();
  if (isLoading) {
    return <UserBioLoader />;
  }

  return (
    <div>
      <Avatar user={fetchedUser!} />
      <h1>{fetchedUser.syncMatesCount}</h1>
      {currentUser ? (
        currentUser.id == fetchedUser.id &&
        <div className="flex flex-col gap-2">
          <button>Edit</button>
          <Link href="/signin" >login</Link>
        </div>
      ):(
        <button onClick={()=>{signOut()}}>signout</button>
      )}


    </div>
  );
};

export default UserBio;
