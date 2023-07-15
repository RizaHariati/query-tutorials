import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPost } from "../api/posts";

const PostList1 = () => {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPost,
  });

  if (postQuery.status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (postQuery.status === "error") {
    return <h1>{JSON.stringify(postQuery.error)}</h1>;
  }

  return (
    <div>
      <h1>PostList1</h1>
      <ol>
        {postQuery.data.slice(0, 5).map((item) => {
          const { id, title } = item;
          return <li key={id}>{title}</li>;
        })}
      </ol>
    </div>
  );
};

export default PostList1;
