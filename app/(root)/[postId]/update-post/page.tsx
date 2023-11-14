import { getPostById } from "@/actions/getPostById";
import PostForm from "@/components/PostForm";

const UpdatePostPage = async ({ params }: { params: { postId: string } }) => {
  const post = await getPostById(parseInt(params.postId));

  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14 custom-scrollbar">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-left w-full">
            Editar Post
          </h2>
          {post && <PostForm action="update" post={post} />}
        </div>
      </div>
    </div>
  );
};
export default UpdatePostPage;
