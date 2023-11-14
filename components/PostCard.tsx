"use client";
import { timeAgo } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Post } from "@prisma/client";
import axios from "axios";
/* eslint-disable @next/next/no-img-element */
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type Props = {
  post: Post;
};

const PostCard: FC<Props> = ({ post }) => {
  const { user } = useUser();
  const { id, title, imageUrl, content, createdAt } = post;

  const onDelete = async () => {
    try {
      await axios.delete(`/api/post/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-800 rounded-3xl border border-slate-900 p-5 lg:p-7 w-full max-w-screen-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-900" />
          <div className="flex flex-col">
            <h3 className="text-base font-semibold text-slate-100">Enio</h3>
            <h4 className="text-xs font-normal text-slate-400">
              {timeAgo(createdAt.getTime())}
            </h4>
          </div>
        </div>
        {user?.firstName === "Enio" && (
          <div className="flex items-center gap-4">
            <Link href={`/${id}/update-post`}>
              <Pencil size={20} />
            </Link>
            <Trash
              size={20}
              className="text-red-500 cursor-pointer"
              onClick={onDelete}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6 mt-4">
        <h1 className="font-semibold text-2xl text-center">{title}</h1>

        <img
          src={imageUrl || "https://picsum.photos/500/300"}
          className="object-cover my-5 rounded w-full h-64 xs:h-[400px] lg:h-[450px]"
          alt="post-image"
        />

        <p>{content}</p>
      </div>
    </div>
  );
};
export default PostCard;
