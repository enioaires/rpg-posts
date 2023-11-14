"use client";
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
  const pathname = usePathname();

  const isActive = (link: string) => {
    return pathname === link;
  };

  return (
    <div className="bg-slate-900 md:flex px-6 pt-10 min-w-[270px] flex-col hidden h-screen">
      <ul className="flex flex-col gap-8 mt-8">
        {leftSidebarItems.map((item) => {
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
