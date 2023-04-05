import { getSingleUser } from "@/utils/features";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Post from "./Post";

export const generateMetadata = async ({ params }) => {
  const user = await getSingleUser(params.id);

  return {
    title: `${user.name}'s Profile`,
  };
};

export const generateStaticParams = () => {
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
  ];
};

const page = async ({ params }) => {
  const post = await getSingleUser(params.id);

  if (!post.id) return notFound();

  return (
    <>
      <div>
        <h1>{post.name}</h1>
        <h3>{post.email}</h3>
      </div>
      <br />
      <hr />
      <Suspense fallback={<h3>Loding...</h3>}>
        <Post id={params.id} />
      </Suspense>
    </>
  );
};

export default page;
