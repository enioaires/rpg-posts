"use client";
/* eslint-disable @next/next/no-img-element */
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {};

const PostCard: FC<Props> = () => {
  const account = JSON.parse(localStorage.getItem("account") || "{}");
  return (
    <div className="bg-slate-800 rounded-3xl border border-slate-900 p-5 lg:p-7 w-full max-w-screen-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-900" />
          <div className="flex flex-col">
            <h3 className="text-base font-semibold text-slate-100">
              {account?.name}
            </h3>
            <h4 className="text-xs font-normal text-slate-400">
              {account?.email}
            </h4>
          </div>
        </div>

        <Link href="/update">
          <Pencil size={20} />
        </Link>
      </div>

      <img
        src={"/eu.png"}
        className="object-cover my-5 rounded w-full h-64 xs:h-[400px] lg:h-[450px]"
        alt="post-image"
      />

      <div>
        <p>
          Godrick Grimwood, um membro exilado da antiga família nobre Grimwood,
          costumava ser um jovem promissor que cresceu sob a sombra da magia
          sombria de sua linhagem. No entanto, sua história tomou um rumo
          sombrio quando ele testemunhou as práticas cruéis e corruptas de sua
          família em uma cerimônia mágica, na qual criaturas inocentes eram
          sacrificadas para ganho de poder.
        </p>
      </div>
    </div>
  );
};
export default PostCard;
