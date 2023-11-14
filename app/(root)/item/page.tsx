import { getPosts } from "@/actions/getPosts";
import PostCard from "@/components/PostCard";
import { PlusSquare } from "lucide-react";
import Link from "next/link";

const RootPage = async () => {
  const posts = await getPosts();

  const itemPosts = posts.filter((post) => post.type === "item");

  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14 custom-scrollbar">
        <div className="max-w-screen-sm flex flex-col items-center w-full gap-6 md:gap-9">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-2xl md:text-3xl font-bold leading-[140%] tracking-tighter text-left w-full">
              Feed
            </h2>
            <Link href="/create-post">
              <PlusSquare />
            </Link>
          </div>
          <ul className="flex flex-col flex-1 gap-9 w-full"></ul>
          {itemPosts.length === 0 && (
            <h1 className="text-2xl font-semibold text-center">
              Nenhum post para exibir
            </h1>
          )}
          {itemPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RootPage;
