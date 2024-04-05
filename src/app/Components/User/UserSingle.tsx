import { Icons } from "../../Pages/Components/Icon";
import { FC } from 'react';
import { IUser } from "../../type";

interface IProps{
    singleUserData: IUser
}

const UserSingle:FC<IProps> = ({singleUserData}) => {
    console.log("🚀 ~ singleUserData:", singleUserData)
    const {email, name, 
        website } = singleUserData;
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="p-8 rounded-lg sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <span className="text-sm dark:text-gray-400">{website}</span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <Icons.Email />
              <span className="dark:text-gray-400">
                {email}
              </span>
            </span>
            <span className="flex items-center space-x-2">
              <Icons.Phone />
              <span className="dark:text-gray-400">+25 381 77 983</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSingle;
