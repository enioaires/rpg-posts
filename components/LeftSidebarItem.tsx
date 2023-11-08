import { FC } from "react";
import { LucideIcon, Home, Book, User, Mail } from "lucide-react";
import Link from "next/link";

type Props = {
  name: string;
  link: string;
  icon: LucideIcon;
  isActive?: boolean;
};

const LeftSidebarItem: FC<Props> = ({ name, link, icon: Icon, isActive }) => {
  return (
    <li
      key={name}
      className={`px-4 rounded-lg hover:bg-emerald-600 transition cursor-pointer group ${
        isActive && "bg-emerald-600"
      }`}
    >
      <Link href={link} className="flex gap-4 items-center p-4">
        <Icon size={20} />
        <span
          className={`text-slate-300 font-semibold group-hover:text-white transition ${
            isActive && "text-white"
          }`}
        >
          {name}
        </span>
      </Link>
    </li>
  );
};
export default LeftSidebarItem;
