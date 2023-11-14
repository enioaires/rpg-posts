import PostForm from "@/components/PostForm";
import { FC } from "react";

type Props = {};

const CreatePostPage: FC<Props> = ({}) => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14 custom-scrollbar">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-left w-full">
            Criar Post
          </h2>
          <PostForm action="create" />
        </div>
      </div>
    </div>
  );
};
export default CreatePostPage;
