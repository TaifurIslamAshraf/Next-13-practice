import { getAllUsers } from "@/utils/features";
import Link from "next/link";

export const metadata = {
  title: "Users",
};

const Home = async () => {
  const users = await getAllUsers();
  return (
    <div>
      {users?.map((user) => {
        return (
          <Link className="user" key={user.id} href={`user/${user.id}`}>
            {user.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
