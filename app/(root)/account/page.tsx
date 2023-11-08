import AccountForm from "@/components/AccountForm";
import { FC } from "react";

type Props = {};

const AccountPage: FC<Props> = ({}) => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <AccountForm />
    </div>
  );
};
export default AccountPage;
