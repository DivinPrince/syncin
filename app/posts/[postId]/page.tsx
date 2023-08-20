import CommentList from "@/components/comments/CommentList";
import Form from "@/components/Form";
import Post from "@/components/posts/Post";
import PostCard from "@/components/posts/PostCard";
import usePost from "@/hooks/usePost";
interface Iparams {
  postId: string;
}
const PostView = ({ params }: { params: Iparams }) => {
  const postId = params.postId

  return (
    <div className="bg-neutral-900 rounded-[5px] h-full w-full overflow-hidden overflow-y-auto">
      <Post postId={postId}/>
    </div>
  );
};

export default PostView;
