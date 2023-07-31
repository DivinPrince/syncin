import CommentList from "@/components/comments/CommentList";
import Form from "@/components/Form";
import Post from "@/components/posts/Post";
import PostCard from "@/components/posts/PostCard";
import usePost from "@/hooks/usePost";
import { useParams } from "next/navigation";
import { FC } from "react";

const PostView: FC = (props) => {
  const postId = props.params.postId as string;

  return (
    <div className="bg-neutral-900 rounded-[5px] h-full w-full overflow-hidden overflow-y-auto">
      <Post postId={postId}/>
    </div>
  );
};

export default PostView;
