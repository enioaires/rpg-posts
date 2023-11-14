import prismadb from "@/lib/prismadb";

export const getPostById = async (id: number) => {
  const post = await prismadb.post.findUnique({
    where: {
      id,
    },
    include: {
      comments: true,
    },
  });
  return post;
};
