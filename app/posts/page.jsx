import { getAllPosts } from "@/utils/features";

const Posts = async () => {
  const posts = await getAllPosts();
  return (
    <div>
      {posts?.map((post) => {
        return <h4 key={post.id}>{post.title}</h4>;
      })}
    </div>
  );
};

export default Posts;
