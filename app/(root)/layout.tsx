import LeftSidebar from "@/components/LeftSidebar";

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  return (
    <div className="flex flex-1">
      <LeftSidebar />
      {children}
    </div>
  );
};
export default RootLayout;
