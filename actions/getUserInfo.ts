import prismadb from "@/lib/prismadb";

export const getUserInfo = async (userId: string) => {
  const user = await prismadb.account.findFirst({
    where: {
      userId: userId,
    },
    select: {
      name: true,
      email: true,
      avatarUrl: true,
    }
  });

  return user;
}