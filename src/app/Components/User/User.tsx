import { useEffect, useState } from "react";
import UserSingle from "./UserSingle";
import { IUser } from "../../type";
import { Element } from "react-scroll";

const User = () => {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [user?.id]);
  return (
    <Element name="partners">
    <div className="container py-16" >
      <h1 className="mt-16 mb-8 text-3xl font-semibold mb-text-3xl md:mb-12 md:text-5xl text-primary-300">
        Connect With Our Partners
      </h1>
      <div className="grid grid-cols-12 gap-4">
        {user &&
          user
            .slice(0, 6)
            .map((singleUserData: IUser) => (
              <UserSingle
                singleUserData={singleUserData}
                key={singleUserData.id}
              />
            ))}
      </div>
    </div>
    </Element>
  );
};

export default User;
