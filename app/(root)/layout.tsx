import { getUserInfo } from "@/actions/getUserInfo";
import LeftSidebar from "@/components/LeftSidebar";
import { auth } from "@clerk/nextjs";

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  const { userId } = auth();

  const activeAccount = await getUserInfo(userId || "");

  return (
    <div className="flex flex-1">
      <LeftSidebar account={activeAccount} />
      {children}
    </div>
  );
};
export default RootLayout;
