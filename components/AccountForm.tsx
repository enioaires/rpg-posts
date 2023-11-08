"use client";
import { FC } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import axios from "axios";
import { UserPlus } from "lucide-react";

type Props = {};

const AccountForm: FC<Props> = ({}) => {
  const { user } = useUser();

  const createAccount = async () => {
    if (!user) return;

    const newAccount = await axios.post(`/api/account`, {
      name: user.fullName,
      email: user.emailAddresses[0].emailAddress,
      avatarUrl: user.imageUrl,
      userId: user.id,
    });

    console.log(newAccount);
  };

  return (
    <div className="flex flex-1 justify-center items-center">
      <div
        className="cursor-pointer bg-emerald-600 rounded-lg p-4"
        onClick={createAccount}
      >
        <UserPlus size={55} />
      </div>
    </div>
  );
};
export default AccountForm;
