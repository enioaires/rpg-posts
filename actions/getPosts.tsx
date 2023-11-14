import prismadb from "@/lib/prismadb";

export const getPosts = async () => {
  //Preciso pegar todos os posts
  const posts = await prismadb.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      comments: true,
    },
  });

  return posts;
};
