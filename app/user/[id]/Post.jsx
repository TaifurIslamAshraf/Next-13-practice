import { getPost } from "@/utils/features";

const Post = async ({ id }) => {
  const posts = await getPost(id);

  return (
    <div>
      {posts?.map((post) => {
        return <h3 key={post.id}>{post.title}</h3>;
      })}
    </div>
  );
};

export default Post;
