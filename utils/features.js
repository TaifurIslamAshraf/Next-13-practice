export const getAllUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) return new Error("Somthing went wrong");
  return await res.json();
};

export const getSingleUser = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) return new Error("Somthing went wrong");
  return await res.json();
};

export const getPost = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/?userId=${id}`
  );
  if (!res.ok) return new Error("Somthing went wrong");
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.json());
    }, 3000);
  });
};

export const getAllPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) return new Error("Somthing went wrong");
  return res.json();
};
