import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPost } from "../api/posts";

const PostList2 = () => {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPost,
    placeholderData: [{ id: 0, title: "bla bla" }],
  });

  if (postQuery.status === "loading2") {
    return <h1>Loading...</h1>;
  }
  if (postQuery.status === "error") {
    return <h1>{JSON.stringify(postQuery.error)}</h1>;
  }

  return (
    <div>
      <h1>PostList2</h1>
      <ol>
        {postQuery.data.slice(-5).map((item) => {
          const { id, title } = item;
          return <li key={id}>{title}</li>;
        })}
      </ol>
    </div>
  );
};

export default PostList2;
