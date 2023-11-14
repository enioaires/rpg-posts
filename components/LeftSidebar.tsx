"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { Book, Home, PlusSquare, Sword } from "lucide-react";
import LeftSidebarItem from "./LeftSidebarItem";
import { usePathname } from "next/navigation";

const leftSidebarItems = [
  {
    name: "Lore",
    link: "/",
    icon: Book,
  },
  {
    name: "Item",
    link: "/item",
    icon: Sword,
  },
  {
    name: "Criar Post",
    link: "/create-post",
    icon: PlusSquare,
  },
  // {
  //   name: "About",
  //   link: "/about",
  //   icon: User,
  // },
  // {
  //   name: "Contact",
  //   link: "/contact",
  //   icon: Mail,
  // },
];

const LeftSidebar = () => {
  const { user } = useUser();
  const pathname = usePathname();

  const isActive = (link: string) => {
    return pathname === link;
  };

  return (
    <div className="bg-slate-900 md:flex px-6 pt-10 min-w-[270px] flex-col hidden h-screen">
      <div className="flex items-center gap-2">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-16 w-16",
            },
          }}
          afterSignOutUrl="/"
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-slate-300">
            {user?.fullName}
          </h2>
          <p className="text-sm text-slate-500">
            {user?.emailAddresses[0].emailAddress}
          </p>
        </div>
      </div>
      <ul className="flex flex-col gap-8 mt-8">
        {leftSidebarItems.map((item) => {
          if (item.name === "Usuário" && user?.firstName !== "Enio")
            return null;
          return (
            <LeftSidebarItem
              key={item.name}
              name={item.name}
              link={item.link}
              icon={item.icon}
              isActive={isActive(item.link)}
            />
          );
        })}
      </ul>

      <div className="flex flex-col mt-auto">
        <p className="text-sm text-slate-500">© 2023 Rpg Posts by Enio</p>
      </div>
    </div>
  );
};
export default LeftSidebar;
